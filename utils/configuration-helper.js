/**
 * Configuration Helper - Handles setup instructions and help content
 * Shows users how to configure and use the DSA Explorer
 */
window.DSAConfigurationHelper = {
    /**
     * Show configuration help when no problem sets are found
     */
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
    },

    /**
     * Show a custom help message in any container
     */
    showCustomHelp(containerId, title, message, commands = []) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const commandsHtml = commands.length > 0 ? 
            commands.map(cmd => `
                <div class="bg-blue-100 dark:bg-blue-800 rounded p-2 mb-2">
                    <code class="bg-blue-200 dark:bg-blue-700 px-2 py-1 rounded font-mono">${cmd.command}</code>
                    ${cmd.description ? `<br><span class="text-xs">${cmd.description}</span>` : ''}
                </div>
            `).join('') : '';

        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-gray-500 dark:text-gray-400 mb-4">
                    <i class="fas fa-info-circle text-6xl mb-6 text-blue-400"></i>
                    <h3 class="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">${title}</h3>
                    <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 max-w-lg mx-auto text-left">
                        <p class="text-blue-700 dark:text-blue-300 mb-3">${message}</p>
                        ${commandsHtml}
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Show loading state help
     */
    showLoadingHelp() {
        this.showCustomHelp(
            'problem-sets',
            'Loading Your Solutions...',
            'Please wait while we scan your code files and build the solution tree.',
            []
        );
    },

    /**
     * Show error state help
     */
    showErrorHelp(errorMessage = 'Something went wrong') {
        this.showCustomHelp(
            'problem-sets',
            'Oops! Unable to Load Solutions',
            errorMessage,
            [
                { command: 'npm run generate', description: 'Regenerate the solution structure' },
                { command: 'npm run watch', description: 'Start auto-watch mode' }
            ]
        );
    }
};
