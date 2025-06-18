/**
 * Global utility functions for formatting names and text
 * These are pure functions with no dependencies
 */
window.DSAFormatters = {
    formatSetName(setName) {
        return setName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    },

    formatProblemName(problemName) {
        return problemName
            .replace(/^\d+\./, '')
            .replace(/_/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    }
};
