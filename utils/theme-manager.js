/**
 * Theme management utilities for dark/light mode
 * Handles theme initialization, toggling, and persistence
 */
window.DSAThemeManager = {
    isDarkMode: false,

    /**
     * Initialize theme from localStorage and apply it
     */
    initialize() {
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.applyTheme();
        console.log('🎨 Theme initialized. Dark mode:', this.isDarkMode);
    },

    /**
     * Apply the current theme to the page
     */
    applyTheme() {
        const html = document.documentElement;
        const themeIcon = document.getElementById('theme-icon');
        const lightTheme = document.getElementById('prism-light-theme');
        const darkTheme = document.getElementById('prism-dark-theme');

        if (this.isDarkMode) {
            html.classList.add('dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
            if (lightTheme) lightTheme.disabled = true;
            if (darkTheme) darkTheme.disabled = false;
            console.log('🌙 Applied dark mode');
        } else {
            html.classList.remove('dark');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
            if (lightTheme) lightTheme.disabled = false;
            if (darkTheme) darkTheme.disabled = true;
            console.log('☀️ Applied light mode');
        }
    },

    /**
     * Toggle between dark and light theme
     */
    toggle() {
        try {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('darkMode', this.isDarkMode.toString());
            this.applyTheme();
            
            // Re-highlight code if present
            this.refreshCodeHighlighting();
            
            console.log('🔄 Theme toggled to:', this.isDarkMode ? 'dark' : 'light');
        } catch (error) {
            console.error('❌ Error toggling theme:', error);
        }
    },

    /**
     * Refresh syntax highlighting after theme change
     */
    refreshCodeHighlighting() {
        // Use the code display manager if available
        if (window.DSACodeDisplayManager) {
            DSACodeDisplayManager.refreshSyntaxHighlighting();
        } else {
            // Fallback to direct highlighting
            const codeElement = document.getElementById('code-display');
            if (codeElement && window.Prism && Prism.highlightElement) {
                setTimeout(() => {
                    Prism.highlightElement(codeElement);
                }, 100);
            }
        }
    }
};
