// DSA/CP Solutions Explorer - Main Application
class DSAExplorer {
    constructor() {
        this.currentView = 'home';
        this.currentSet = null;
        this.currentDifficulty = null;
        this.currentProblem = null;
        this.problemData = {};
        this.currentAttempts = [];
        
        DSAThemeManager.initialize(); // Use theme manager
        this.initializeEventListeners();
        this.loadProblemData();
    }

    initializeEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => DSAThemeManager.toggle());
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
            copyBtn.addEventListener('click', () => DSACodeDisplayManager.copyCode());
        }
    }

    async loadProblemData() {
        DSADOMUtils.showLoading(true);
        
        try {
            // Check if REPO_STRUCTURE is available
            if (typeof REPO_STRUCTURE !== 'undefined') {
                this.problemData = REPO_STRUCTURE;
                console.log('✅ Loaded repository structure with', Object.keys(REPO_STRUCTURE).length, 'contest sets');
            } else {
                console.warn('⚠️ REPO_STRUCTURE not found. Configuration needed.');
                this.problemData = {};
                DSAConfigurationHelper.showConfigurationHelp();
            }
            
            this.updateStats();
            this.renderProblemSets();
        } catch (error) {
            console.error('❌ Error loading problem data:', error);
            this.problemData = {};
            this.updateStats();
            this.renderProblemSets();
            DSAConfigurationHelper.showErrorHelp('Failed to load problem data. Please check your configuration.');
        } finally {
            DSADOMUtils.showLoading(false);
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

        DSADOMUtils.updateStats(sets, totalProblems, totalAttempts);
    }

    renderProblemSets() {
        const container = document.getElementById('problem-sets');
        if (!container) return;
        
        container.innerHTML = '';
        
        const problemSets = Object.keys(this.problemData);
        if (problemSets.length === 0) {
            DSAConfigurationHelper.showConfigurationHelp();
            return;
        }

        problemSets.forEach(setName => {
            const setCard = DSACardFactory.createSetCard(setName, this.problemData, (clickedSetName) => {
                this.showDifficultyView(clickedSetName);
            });
            container.appendChild(setCard);
        });
    }

    showDifficultyView(setName) {
        this.currentSet = setName;
        this.currentView = 'difficulty';
        
        DSADOMUtils.hideAllViews();
        document.getElementById('difficulty-view').style.display = 'block';
        
        DSADOMUtils.updateBreadcrumb(true, DSAFormatters.formatSetName(setName));
        
        const currentSetTitle = document.getElementById('current-set-title');
        if (currentSetTitle) currentSetTitle.textContent = DSAFormatters.formatSetName(setName);
        
        this.renderDifficulties(setName);
    }

    renderDifficulties(setName) {
        const container = document.getElementById('difficulties');
        if (!container) return;
        
        container.innerHTML = '';

        Object.keys(this.problemData[setName]).forEach(difficulty => {
            const problemCount = Object.keys(this.problemData[setName][difficulty]).length;
            const difficultyCard = DSACardFactory.createDifficultyCard(difficulty, problemCount, (clickedDifficulty) => {
                this.showProblemsView(setName, clickedDifficulty);
            });
            container.appendChild(difficultyCard);
        });
    }

    showProblemsView(setName, difficulty) {
        this.currentDifficulty = difficulty;
        this.currentView = 'problems';
        
        DSADOMUtils.hideAllViews();
        document.getElementById('problems-view').style.display = 'block';
        
        DSADOMUtils.updateBreadcrumb(true, `${DSAFormatters.formatSetName(setName)} / Rating ${difficulty}`);
        
        const currentDifficultyTitle = document.getElementById('current-difficulty-title');
        if (currentDifficultyTitle) {
            currentDifficultyTitle.textContent = `${DSAFormatters.formatSetName(setName)} - Rating ${difficulty}`;
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
            const problemCard = DSACardFactory.createProblemCard(problemName, index + 1, attempts, (clickedProblemName, clickedAttempts) => {
                this.showProblemDetailView(clickedProblemName, clickedAttempts);
            });
            container.appendChild(problemCard);
        });
    }

    async showProblemDetailView(problemName, attempts) {
        this.currentProblem = problemName;
        this.currentAttempts = attempts;
        this.currentView = 'problem-detail';
        
        DSADOMUtils.hideAllViews();
        document.getElementById('problem-detail-view').style.display = 'block';
        
        DSADOMUtils.updateBreadcrumb(true, `${DSAFormatters.formatSetName(this.currentSet)} / Rating ${this.currentDifficulty} / ${DSAFormatters.formatProblemName(problemName)}`);
        
        const currentProblemTitle = document.getElementById('current-problem-title');
        if (currentProblemTitle) {
            currentProblemTitle.textContent = DSAFormatters.formatProblemName(problemName);
        }
        
        await DSACodeDisplayManager.renderProblemDetail(problemName, attempts);
    }

    showHomeView() {
        this.currentView = 'home';
        this.currentSet = null;
        this.currentDifficulty = null;
        this.currentProblem = null;
        
        DSADOMUtils.hideAllViews();
        document.getElementById('home-view').style.display = 'block';
        
        DSADOMUtils.updateBreadcrumb(false);
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
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DSAExplorer();
});
