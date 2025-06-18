/**
 * Code Display Manager - Handles code display, syntax highlighting, and tab management
 * Manages the display of code attempts in the problem detail view
 */
window.DSACodeDisplayManager = {
    /**
     * Render problem detail with multiple attempts as tabs
     */
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
    },

    /**
     * Show a specific attempt and update tab styling
     */
    async showAttempt(attempt, clickedTab) {
        // Update tab styling
        const tabs = document.querySelectorAll('#attempt-tabs button');
        tabs.forEach(tab => {
            tab.className = 'px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600';
        });
        clickedTab.className = 'px-4 py-2 rounded-lg font-medium transition-colors bg-blue-600 text-white';

        await this.displayCode(attempt);
    },

    /**
     * Display code with syntax highlighting
     */
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
    },

    /**
     * Copy currently displayed code to clipboard
     */
    async copyCode() {
        const codeElement = document.getElementById('code-display');
        if (codeElement) {
            await DSADOMUtils.copyToClipboard(codeElement.textContent, 'copy-code-btn');
        }
    },

    /**
     * Refresh syntax highlighting (useful after theme changes)
     */
    refreshSyntaxHighlighting() {
        const codeElement = document.getElementById('code-display');
        if (codeElement && window.Prism && Prism.highlightElement) {
            setTimeout(() => {
                Prism.highlightElement(codeElement);
            }, 100);
        }
    }
};
