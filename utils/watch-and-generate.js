const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const DSAStructureGenerator = require('./generate-structure.js');

class DSAAutoWatcher {
    constructor(rootPath) {
        this.rootPath = rootPath;
        this.generator = new DSAStructureGenerator(rootPath);
        this.isGenerating = false;
        this.lastGeneration = 0;
        this.debounceTime = 2000; // 2 seconds
    }

    // Debounced generation to avoid multiple triggers
    scheduleGeneration() {
        if (this.isGenerating) return;
        
        const now = Date.now();
        if (now - this.lastGeneration < this.debounceTime) return;
        
        clearTimeout(this.generationTimeout);
        this.generationTimeout = setTimeout(() => {
            this.generateStructure();
        }, 1000);
    }

    async generateStructure() {
        if (this.isGenerating) return;
        
        this.isGenerating = true;
        this.lastGeneration = Date.now();
        
        console.log('🔄 Detected changes, regenerating structure...');
        
        try {
            this.generator.generateConfigFile();
            console.log('✅ Structure updated successfully!');
        } catch (error) {
            console.error('❌ Error generating structure:', error.message);
        } finally {
            this.isGenerating = false;
        }
    }

    // Watch for changes in the directory structure
    startWatching() {
        console.log('👀 Starting DSA Auto-Watcher...');
        console.log('📁 Watching for changes in:', this.rootPath);
        console.log('🔄 Will auto-regenerate when you add/modify .cpp files');
        console.log('⏹️  Press Ctrl+C to stop watching\n');
        
        // Initial generation
        this.generateStructure();
        
        // Watch for changes
        this.watchDirectory(this.rootPath);
        
        // Keep the process alive
        process.on('SIGINT', () => {
            console.log('\n👋 Stopping DSA Auto-Watcher...');
            process.exit(0);
        });
    }

    watchDirectory(dirPath) {
        try {
            // Skip hidden directories and files
            if (path.basename(dirPath).startsWith('.')) return;
            
            const watcher = fs.watch(dirPath, { recursive: false }, (eventType, filename) => {
                if (!filename) return;
                
                const fullPath = path.join(dirPath, filename);
                
                // Only care about code files or directory changes
                if (this.isCodeFile(filename) || eventType === 'rename') {
                    console.log(`📝 ${eventType}: ${filename}`);
                    this.scheduleGeneration();
                }
            });

            // Also watch subdirectories
            try {
                const items = fs.readdirSync(dirPath, { withFileTypes: true });
                for (const item of items) {
                    if (item.isDirectory() && !item.name.startsWith('.')) {
                        this.watchDirectory(path.join(dirPath, item.name));
                    }
                }
            } catch (error) {
                // Ignore errors for directories we can't read
            }
            
        } catch (error) {
            // Ignore watch errors for individual directories
        }
    }

    isCodeFile(filename) {
        const codeExtensions = ['.cpp', '.c', '.py', '.java', '.js'];
        return codeExtensions.some(ext => filename.toLowerCase().endsWith(ext));
    }
}

// Main execution
if (require.main === module) {
    const rootPath = __dirname;
    const watcher = new DSAAutoWatcher(rootPath);
    watcher.startWatching();
}

module.exports = DSAAutoWatcher;
