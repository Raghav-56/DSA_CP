// DSA/CP Solutions Explorer - Main Application
class DSAExplorer {
    constructor() {
        this.currentView = 'home';
        this.currentSet = null;
        this.currentDifficulty = null;
        this.currentProblem = null;
        // Initialize theme first - check localStorage or default to false
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.problemData = {};
        this.currentAttempts = [];
        
        this.initializeTheme(); // Initialize theme immediately
        this.initializeEventListeners();
        this.loadProblemData();
    }

    initializeEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Home button
        const homeBtn = document.getElementById('home-btn');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => this.showHomeView());
        }

        // Refresh button
        const refreshBtn = document.getElementById('refresh-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.refreshStructure());
        }

        // Copy code button
        const copyBtn = document.getElementById('copy-code-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyCode());
        }
    }

    initializeTheme() {
        const html = document.documentElement;
        const themeIcon = document.getElementById('theme-icon');
        const lightTheme = document.getElementById('prism-light-theme');
        const darkTheme = document.getElementById('prism-dark-theme');

        console.log('🎨 Initializing theme. Dark mode:', this.isDarkMode);
        
        if (this.isDarkMode) {
            html.classList.add('dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
            if (lightTheme) lightTheme.disabled = true;
            if (darkTheme) darkTheme.disabled = false;
            console.log('🌙 Applied dark mode class');
        } else {
            html.classList.remove('dark');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
            if (lightTheme) lightTheme.disabled = false;
            if (darkTheme) darkTheme.disabled = true;
            console.log('☀️ Applied light mode class');
        }
        
        // Log the current classes for debugging
        console.log('HTML classes:', html.className);
    }

    toggleTheme() {
        try {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('darkMode', this.isDarkMode.toString());
            
            const html = document.documentElement;
            const themeIcon = document.getElementById('theme-icon');
            const lightTheme = document.getElementById('prism-light-theme');
            const darkTheme = document.getElementById('prism-dark-theme');

            console.log('🔄 Toggling theme to:', this.isDarkMode ? 'dark' : 'light');

            if (this.isDarkMode) {
                html.classList.add('dark');
                if (themeIcon) themeIcon.className = 'fas fa-sun';
                if (lightTheme) lightTheme.disabled = true;
                if (darkTheme) darkTheme.disabled = false;
                console.log('🌙 Dark mode enabled - HTML classes:', html.className);
            } else {
                html.classList.remove('dark');
                if (themeIcon) themeIcon.className = 'fas fa-moon';
                if (lightTheme) lightTheme.disabled = false;
                if (darkTheme) darkTheme.disabled = true;
                console.log('☀️ Light mode enabled - HTML classes:', html.className);
            }
            
            // Re-highlight code if present
            const codeElement = document.getElementById('code-display');
            if (codeElement && window.Prism && Prism.highlightElement) {
                setTimeout(() => {
                    Prism.highlightElement(codeElement);
                }, 100);
            }
        } catch (error) {
            console.error('❌ Error toggling theme:', error);
        }
    }

    async loadProblemData() {
        this.showLoading(true);
        
        try {
            // Check if REPO_STRUCTURE is available
            if (typeof REPO_STRUCTURE !== 'undefined') {
                this.problemData = REPO_STRUCTURE;
                console.log('✅ Loaded repository structure with', Object.keys(REPO_STRUCTURE).length, 'contest sets');
            } else {
                console.warn('⚠️ REPO_STRUCTURE not found. Configuration needed.');
                this.problemData = {};
                this.showConfigurationHelp();
            }
            
            this.updateStats();
            this.renderProblemSets();
        } catch (error) {
            console.error('❌ Error loading problem data:', error);
            this.problemData = {};
            this.updateStats();
            this.renderProblemSets();
            this.showConfigurationHelp();
        } finally {
            this.showLoading(false);
        }
    }

    updateStats() {
        const sets = Object.keys(this.problemData).length;
        let totalProblems = 0;
        let totalAttempts = 0;

        Object.values(this.problemData).forEach(setData => {
            Object.values(setData).forEach(problems => {
                Object.keys(problems).forEach(problemName => {
                    totalProblems++;
                    totalAttempts += problems[problemName].length;
                });
            });
        });

        const setsEl = document.getElementById('total-sets');
        const problemsEl = document.getElementById('total-problems');
        const attemptsEl = document.getElementById('total-attempts');
        
        if (setsEl) setsEl.textContent = sets;
        if (problemsEl) problemsEl.textContent = totalProblems;
        if (attemptsEl) attemptsEl.textContent = totalAttempts;
    }

    renderProblemSets() {
        const container = document.getElementById('problem-sets');
        if (!container) return;
        
        container.innerHTML = '';
        
        const problemSets = Object.keys(this.problemData);
        if (problemSets.length === 0) {
            this.showConfigurationHelp();
            return;
        }

        problemSets.forEach(setName => {
            const setCard = this.createSetCard(setName);
            container.appendChild(setCard);
        });
    }

    createSetCard(setName) {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover cursor-pointer border border-gray-200 dark:border-gray-700';
        
        let problemCount = 0;
        const difficulties = Object.keys(this.problemData[setName]);
        
        difficulties.forEach(difficulty => {
            const problems = this.problemData[setName][difficulty];
            problemCount += Object.keys(problems).length;
        });

        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3">
                    <i class="fas fa-trophy text-white text-xl"></i>
                </div>
                <span class="text-sm text-gray-500 dark:text-gray-400">${difficulties.length} difficulties</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${this.formatSetName(setName)}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${problemCount} problems solved</p>
            <div class="flex flex-wrap gap-1 mb-4">
                ${difficulties.map(diff => `
                    <span class="px-2 py-1 text-xs rounded-full difficulty-${diff} text-white">
                        ${diff}
                    </span>
                `).join('')}
            </div>
            <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div class="flex items-center text-blue-600 dark:text-blue-400">
                    <span class="font-medium">Explore problems</span>
                    <i class="fas fa-arrow-right ml-2"></i>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showDifficultyView(setName);
        });

        return card;
    }

    showDifficultyView(setName) {
        this.currentSet = setName;
        this.currentView = 'difficulty';
        
        this.hideAllViews();
        document.getElementById('difficulty-view').style.display = 'block';
        
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb) breadcrumb.style.display = 'block';
        
        const breadcrumbPath = document.getElementById('breadcrumb-path');
        if (breadcrumbPath) breadcrumbPath.textContent = this.formatSetName(setName);
        
        const currentSetTitle = document.getElementById('current-set-title');
        if (currentSetTitle) currentSetTitle.textContent = this.formatSetName(setName);
        
        this.renderDifficulties(setName);
    }

    renderDifficulties(setName) {
        const container = document.getElementById('difficulties');
        if (!container) return;
        
        container.innerHTML = '';

        Object.keys(this.problemData[setName]).forEach(difficulty => {
            const problemCount = Object.keys(this.problemData[setName][difficulty]).length;
            const difficultyCard = this.createDifficultyCard(difficulty, problemCount);
            container.appendChild(difficultyCard);
        });
    }

    createDifficultyCard(difficulty, problemCount) {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover cursor-pointer border border-gray-200 dark:border-gray-700';
        
        const diffInfo = (typeof DIFFICULTY_INFO !== 'undefined' && DIFFICULTY_INFO[difficulty]) || {
            color: "from-gray-400 to-gray-600",
            description: "Problem difficulty level",
            icon: "fas fa-code"
        };

        card.innerHTML = `
            <div class="text-center">
                <div class="difficulty-${difficulty} rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    ${difficulty}
                </div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Rating ${difficulty}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-2">${problemCount} problems</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">${diffInfo.description}</p>
                <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div class="flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <i class="${diffInfo.icon} mr-2"></i>
                        <span class="font-medium">View problems</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showProblemsView(this.currentSet, difficulty);
        });

        return card;
    }

    showProblemsView(setName, difficulty) {
        this.currentDifficulty = difficulty;
        this.currentView = 'problems';
        
        this.hideAllViews();
        document.getElementById('problems-view').style.display = 'block';
        
        const breadcrumbPath = document.getElementById('breadcrumb-path');
        if (breadcrumbPath) {
            breadcrumbPath.textContent = `${this.formatSetName(setName)} / Rating ${difficulty}`;
        }
        
        const currentDifficultyTitle = document.getElementById('current-difficulty-title');
        if (currentDifficultyTitle) {
            currentDifficultyTitle.textContent = `${this.formatSetName(setName)} - Rating ${difficulty}`;
        }
        
        this.renderProblems(setName, difficulty);
    }

    renderProblems(setName, difficulty) {
        const container = document.getElementById('problems');
        if (!container) return;
        
        container.innerHTML = '';

        const problems = this.problemData[setName][difficulty];
        
        Object.keys(problems).forEach((problemName, index) => {
            const attempts = problems[problemName];
            const problemCard = this.createProblemCard(problemName, index + 1, attempts);
            container.appendChild(problemCard);
        });
    }

    createProblemCard(problemName, index, attempts) {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover cursor-pointer border border-gray-200 dark:border-gray-700';

        const attemptCount = attempts ? attempts.length : 0;
        const metadata = (typeof PROBLEM_METADATA !== 'undefined' && PROBLEM_METADATA[problemName]) || {};
        const tags = metadata.tags || ['implementation'];

        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3">
                    <i class="fas fa-code text-white text-lg"></i>
                </div>
                <span class="text-sm text-gray-500 dark:text-gray-400">${attemptCount} attempts</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">${index}. ${this.formatProblemName(problemName)}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-3">${metadata.description || 'C++ solutions available'}</p>
            <div class="flex flex-wrap gap-1 mb-4">
                ${tags.map(tag => `
                    <span class="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div class="flex items-center justify-between">
                    <div class="flex items-center text-green-600 dark:text-green-400">
                        <span class="font-medium">View solutions</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showProblemDetailView(problemName, attempts);
        });

        return card;
    }

    async showProblemDetailView(problemName, attempts) {
        this.currentProblem = problemName;
        this.currentAttempts = attempts;
        this.currentView = 'problem-detail';
        
        this.hideAllViews();
        document.getElementById('problem-detail-view').style.display = 'block';
        
        const breadcrumbPath = document.getElementById('breadcrumb-path');
        if (breadcrumbPath) {
            breadcrumbPath.textContent = `${this.formatSetName(this.currentSet)} / Rating ${this.currentDifficulty} / ${this.formatProblemName(problemName)}`;
        }
        
        const currentProblemTitle = document.getElementById('current-problem-title');
        if (currentProblemTitle) {
            currentProblemTitle.textContent = this.formatProblemName(problemName);
        }
        
        await this.renderProblemDetail(problemName, attempts);
    }

    async renderProblemDetail(problemName, attempts) {
        if (!attempts || attempts.length === 0) {
            console.warn('No attempts found for problem:', problemName);
            return;
        }
        
        const tabsContainer = document.getElementById('attempt-tabs');
        if (!tabsContainer) return;
        
        tabsContainer.innerHTML = '';

        attempts.forEach((attempt, index) => {
            const tab = document.createElement('button');
            tab.className = `px-4 py-2 rounded-lg font-medium transition-colors ${
                index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`;
            tab.textContent = attempt.name;
            
            tab.addEventListener('click', () => this.showAttempt(attempt, tab));
            tabsContainer.appendChild(tab);
        });

        // Show first attempt by default
        if (attempts[0]) {
            await this.displayCode(attempts[0]);
        }
    }

    async showAttempt(attempt, clickedTab) {
        // Update tab styling
        const tabs = document.querySelectorAll('#attempt-tabs button');
        tabs.forEach(tab => {
            tab.className = 'px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600';
        });
        clickedTab.className = 'px-4 py-2 rounded-lg font-medium transition-colors bg-blue-600 text-white';

        await this.displayCode(attempt);
    }

    async displayCode(attempt) {
        const fileNameEl = document.getElementById('current-file-name');
        if (fileNameEl) fileNameEl.textContent = attempt.name;
        
        const codeElement = document.getElementById('code-display');
        if (!codeElement) return;
        
        const code = attempt.code || '// No code available';
        
        codeElement.textContent = code;
        codeElement.className = 'language-cpp';
        
        // Apply syntax highlighting
        setTimeout(() => {
            if (window.Prism && Prism.highlightElement) {
                Prism.highlightElement(codeElement);
            }
        }, 100);
    }

    hideAllViews() {
        ['home-view', 'difficulty-view', 'problems-view', 'problem-detail-view'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.style.display = 'none';
        });
    }

    showHomeView() {
        this.currentView = 'home';
        this.currentSet = null;
        this.currentDifficulty = null;
        this.currentProblem = null;
        
        this.hideAllViews();
        document.getElementById('home-view').style.display = 'block';
        
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb) breadcrumb.style.display = 'none';
    }

    showConfigurationHelp() {
        const container = document.getElementById('problem-sets');
        if (!container) return;
        
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-gray-500 dark:text-gray-400 mb-4">
                    <i class="fas fa-folder-open text-6xl mb-6 text-blue-400"></i>
                    <h3 class="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Ready to Explore Your Code!</h3>
                    <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 max-w-lg mx-auto text-left">
                        <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">🚀 Quick Setup:</h4>
                        <div class="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                            <div class="bg-blue-100 dark:bg-blue-800 rounded p-3">
                                <strong>🔥 Recommended (Auto-mode):</strong><br>
                                <code class="bg-blue-200 dark:bg-blue-700 px-2 py-1 rounded font-mono">npm run watch</code><br>
                                <span class="text-xs">Automatically detects when you add new files!</span>
                            </div>
                            <div>
                                <strong>⚡ One-time:</strong><br>
                                <code class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded font-mono">npm run generate</code>
                            </div>
                            <div>
                                <strong>🔄 Then:</strong> Click refresh button above or reload this page
                            </div>
                        </div>
                        <p class="text-xs text-blue-600 dark:text-blue-400 mt-4">💡 With watch mode, just add your .cpp files and they'll appear automatically!</p>
                    </div>
                </div>
            </div>
        `;
    }

    showLoading(show) {
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = show ? 'flex' : 'none';
    }

    async refreshStructure() {
        const refreshIcon = document.getElementById('refresh-icon');
        const refreshBtn = document.getElementById('refresh-btn');
        
        if (refreshIcon) refreshIcon.classList.add('fa-spin');
        if (refreshBtn) refreshBtn.disabled = true;
        
        try {
            // Simple refresh - just reload the page
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Error refreshing structure:', error);
        }
    }

    copyCode() {
        const codeElement = document.getElementById('code-display');
        if (codeElement) {
            navigator.clipboard.writeText(codeElement.textContent).then(() => {
                const btn = document.getElementById('copy-code-btn');
                if (btn) {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<i class="fas fa-check text-green-600"></i>';
                    setTimeout(() => btn.innerHTML = originalHTML, 2000);
                }
            });
        }
    }

    formatSetName(setName) {
        return setName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }

    formatProblemName(problemName) {
        return problemName
            .replace(/^\d+\./, '')
            .replace(/_/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DSAExplorer();
});
