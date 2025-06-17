const fs = require('fs');
const path = require('path');

class DSAStructureGenerator {
    constructor(rootPath) {
        this.rootPath = rootPath;
        this.structure = {};
    }

    // Check if a file is a code file
    isCodeFile(filename) {
        const codeExtensions = ['.cpp', '.c', '.py', '.java', '.js'];
        return codeExtensions.some(ext => filename.toLowerCase().endsWith(ext));
    }

    // Read code file content
    readCodeFile(filePath) {
        try {
            return fs.readFileSync(filePath, 'utf8');
        } catch (error) {
            console.warn(`Could not read file: ${filePath}`);
            return `// Could not read file: ${path.basename(filePath)}\n// Error: ${error.message}`;
        }
    }

    // Scan a directory for problems
    scanProblemDirectory(dirPath) {
        const files = [];
        try {
            const items = fs.readdirSync(dirPath, { withFileTypes: true });
            
            for (const item of items) {
                if (item.isFile() && this.isCodeFile(item.name)) {
                    files.push({
                        name: item.name,
                        code: this.readCodeFile(path.join(dirPath, item.name))
                    });
                }
            }
        } catch (error) {
            console.warn(`Could not scan directory: ${dirPath}`);
        }
        
        return files;
    }

    // Scan difficulty level directory
    scanDifficultyDirectory(difficultyPath) {
        const problems = {};
        
        try {
            const items = fs.readdirSync(difficultyPath, { withFileTypes: true });
            
            for (const item of items) {
                if (item.isDirectory()) {
                    const problemPath = path.join(difficultyPath, item.name);
                    const attempts = this.scanProblemDirectory(problemPath);
                    
                    if (attempts.length > 0) {
                        problems[item.name] = attempts;
                    }
                }
            }
        } catch (error) {
            console.warn(`Could not scan difficulty directory: ${difficultyPath}`);
        }
        
        return problems;
    }

    // Scan contest set directory
    scanContestSetDirectory(setPath) {
        const difficulties = {};
        
        try {
            const items = fs.readdirSync(setPath, { withFileTypes: true });
            
            for (const item of items) {
                if (item.isDirectory() && /^\d+$/.test(item.name)) {
                    const difficultyPath = path.join(setPath, item.name);
                    const problems = this.scanDifficultyDirectory(difficultyPath);
                    
                    if (Object.keys(problems).length > 0) {
                        difficulties[item.name] = problems;
                    }
                }
            }
        } catch (error) {
            console.warn(`Could not scan contest set directory: ${setPath}`);
        }
        
        return difficulties;
    }

    // Generate the complete structure
    generateStructure() {
        console.log('Scanning DSA/CP folder structure...');
        
        try {
            const items = fs.readdirSync(this.rootPath, { withFileTypes: true });
            
            for (const item of items) {
                if (item.isDirectory() && !item.name.startsWith('.')) {
                    const setPath = path.join(this.rootPath, item.name);
                    const contestData = this.scanContestSetDirectory(setPath);
                    
                    if (Object.keys(contestData).length > 0) {
                        this.structure[item.name] = contestData;
                    }
                }
            }
        } catch (error) {
            console.error(`Error scanning root directory: ${error.message}`);
        }
        
        return this.structure;
    }

    // Generate the JavaScript configuration file
    generateConfigFile() {
        const structure = this.generateStructure();
        
        const configContent = `// Auto-generated DSA/CP structure configuration
// Generated on: ${new Date().toISOString()}

// Repository structure with actual code content
const REPO_STRUCTURE = ${JSON.stringify(structure, null, 2)};

// Load repository structure function
async function loadRepositoryStructure() {
    return true; // Structure is embedded
}

// Get code content function
async function getCodeContent(setName, difficulty, problemName, fileName) {
    try {
        const set = REPO_STRUCTURE[setName];
        if (!set) return null;
        
        const difficultyProblems = set[difficulty];
        if (!difficultyProblems) return null;
        
        const problem = difficultyProblems[problemName];
        if (!problem) return null;
        
        const attempt = problem.find(a => a.name === fileName);
        return attempt ? attempt.code : null;
    } catch (error) {
        console.error('Error getting code content:', error);
        return null;
    }
}

// Difficulty information
const DIFFICULTY_INFO = {
    "800": {
        color: "from-green-400 to-green-600",
        description: "Implementation problems, basic algorithms",
        icon: "fas fa-seedling"
    },
    "900": {
        color: "from-blue-400 to-blue-600", 
        description: "Math, greedy, constructive algorithms",
        icon: "fas fa-calculator"
    },
    "1000": {
        color: "from-purple-400 to-purple-600",
        description: "Data structures, sorting, searching",
        icon: "fas fa-sort"
    },
    "1200": {
        color: "from-orange-400 to-orange-600",
        description: "Dynamic programming, graphs",
        icon: "fas fa-project-diagram"
    }
};

// Problem metadata (you can enhance this)
const PROBLEM_METADATA = {};

// Auto-populate metadata from structure
Object.keys(REPO_STRUCTURE).forEach(setName => {
    Object.keys(REPO_STRUCTURE[setName]).forEach(difficulty => {
        Object.keys(REPO_STRUCTURE[setName][difficulty]).forEach(problemName => {
            PROBLEM_METADATA[problemName] = {
                description: \`Competitive programming problem - Rating \${difficulty}\`,
                tags: difficulty <= 800 ? ['implementation', 'math'] : 
                      difficulty <= 1000 ? ['data structures', 'algorithms'] :
                      ['advanced', 'problem solving'],
                contestUrl: null // You can add contest URLs later
            };
        });
    });
});
`;

        const configPath = path.join(this.rootPath, 'dynamic-config.js');
        
        try {
            fs.writeFileSync(configPath, configContent, 'utf8');
            console.log(`✅ Configuration generated successfully!`);
            console.log(`📁 Found ${Object.keys(structure).length} contest sets`);
            
            // Print summary
            Object.keys(structure).forEach(setName => {
                const difficulties = Object.keys(structure[setName]);
                let totalProblems = 0;
                let totalFiles = 0;
                
                difficulties.forEach(difficulty => {
                    const problems = Object.keys(structure[setName][difficulty]);
                    totalProblems += problems.length;
                    
                    problems.forEach(problemName => {
                        totalFiles += structure[setName][difficulty][problemName].length;
                    });
                });
                
                console.log(`📚 ${setName}: ${difficulties.length} difficulties, ${totalProblems} problems, ${totalFiles} files`);
            });
            
        } catch (error) {
            console.error(`❌ Error writing configuration file: ${error.message}`);
        }
    }
}

// Main execution
if (require.main === module) {
    const rootPath = __dirname;
    const generator = new DSAStructureGenerator(rootPath);
    generator.generateConfigFile();
}

module.exports = DSAStructureGenerator;
