/**
 * UI Card Factory - Creates various types of cards for the DSA Explorer
 * Pure functions that generate HTML elements
 */
window.DSACardFactory = {
    /**
     * Create a problem set card
     */
    createSetCard(setName, problemData, onClickCallback) {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover cursor-pointer border border-gray-200 dark:border-gray-700';
        
        let problemCount = 0;
        const difficulties = Object.keys(problemData[setName]);
        
        difficulties.forEach(difficulty => {
            const problems = problemData[setName][difficulty];
            problemCount += Object.keys(problems).length;
        });

        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3">
                    <i class="fas fa-trophy text-white text-xl"></i>
                </div>
                <span class="text-sm text-gray-500 dark:text-gray-400">${difficulties.length} difficulties</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${DSAFormatters.formatSetName(setName)}</h3>
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

        if (onClickCallback) {
            card.addEventListener('click', () => onClickCallback(setName));
        }

        return card;
    },

    /**
     * Create a difficulty level card
     */
    createDifficultyCard(difficulty, problemCount, onClickCallback) {
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

        if (onClickCallback) {
            card.addEventListener('click', () => onClickCallback(difficulty));
        }

        return card;
    },

    /**
     * Create a problem card
     */
    createProblemCard(problemName, index, attempts, onClickCallback) {
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
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">${index}. ${DSAFormatters.formatProblemName(problemName)}</h3>
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

        if (onClickCallback) {
            card.addEventListener('click', () => onClickCallback(problemName, attempts));
        }

        return card;
    }
};
