/**
 * Global DOM utility functions that don't depend on application state
 * These are pure DOM manipulation helpers
 */
window.DSADOMUtils = {
    /**
     * Show or hide loading spinner
     */
    showLoading(show) {
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = show ? 'flex' : 'none';
    },

    /**
     * Hide all main views
     */
    hideAllViews() {
        ['home-view', 'difficulty-view', 'problems-view', 'problem-detail-view'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.style.display = 'none';
        });
    },

    /**
     * Update breadcrumb visibility and path
     */
    updateBreadcrumb(show, path = '') {
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb) breadcrumb.style.display = show ? 'block' : 'none';
        
        if (path) {
            const breadcrumbPath = document.getElementById('breadcrumb-path');
            if (breadcrumbPath) breadcrumbPath.textContent = path;
        }
    },

    /**
     * Update stats in the home view
     */
    updateStats(sets, problems, attempts) {
        const setsEl = document.getElementById('total-sets');
        const problemsEl = document.getElementById('total-problems');
        const attemptsEl = document.getElementById('total-attempts');
        
        if (setsEl) setsEl.textContent = sets;
        if (problemsEl) problemsEl.textContent = problems;
        if (attemptsEl) attemptsEl.textContent = attempts;
    },

    /**
     * Copy text to clipboard and show feedback
     */
    async copyToClipboard(text, buttonId) {
        try {
            await navigator.clipboard.writeText(text);
            const btn = document.getElementById(buttonId);
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check text-green-600"></i>';
                setTimeout(() => btn.innerHTML = originalHTML, 2000);
            }
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    }
};
