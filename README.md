# DSA/CP Solutions Explorer

A web-based interface for exploring and organizing your Data Structures & Algorithms (DSA) and Competitive Programming (CP) solutions. This tool automatically detects your code files, organizes them by difficulty and problem sets, and provides a clean interface to view and navigate through your solutions.

## What This Does

This project creates a beautiful web interface that:
- **Scans your code folders** and automatically organizes solutions by contest/difficulty
- **Displays your actual code** with syntax highlighting in both light and dark modes  
- **Shows progress statistics** - how many problems you've solved in each difficulty
- **Provides easy navigation** through your solution attempts
- **Updates automatically** when you add new solutions (in watch mode)

Perfect for DSA learners who want to track progress and review previous solutions without digging through file explorers.

## ✨ Key Features

- 🎨 **Clean Dark/Light Mode UI** - Switch themes with one click
- 🤖 **Automatic Code Detection** - No manual configuration needed
- 💻 **Syntax Highlighted Code Display** - View your solutions beautifully formatted
- 📊 **Progress Tracking** - See stats for each difficulty level
- 🔄 **Live File Watching** - New files appear automatically
- 📱 **Mobile Responsive** - Works on all screen sizes
- �️ **Multiple Attempts Support** - See all your solution attempts for each problem

## 🚀 How to Get Started

### Prerequisites
- Node.js installed on your system
- Your DSA/CP solutions organized in folders

### Setup Steps

1. **Clone/Download** this project to your computer
2. **Place your code** in the same directory (or update the path in the utilities)
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the file watcher** (recommended):
   ```bash
   npm run watch
   ```
5. **Open the app**: Open `index.html` in your web browser

That's it! The app will automatically detect your code structure and display it.

### Alternative: Manual Mode
If you prefer not to use the auto-watcher:
```bash
npm run generate
```
Then open `index.html`. Run `npm run refresh` when you add new files.

## 📂 Expected Folder Structure

Your code should be organized like this:
```
your-contest-folder/           # e.g., "tle-eliminators", "codeforces", etc.
├── 800/                       # Difficulty level
│   ├── 1.Problem_Name/        # Problem folder
│   │   ├── 1.cpp             # Your solution attempts
│   │   ├── 2.cpp
│   │   └── 3.cpp
│   ├── 2.Another_Problem/
│   └── ...
├── 900/                       # Another difficulty
└── 1200/                      # And so on...
```

**Supported file types:** `.cpp`, `.c`, `.py`, `.java`

## 🎯 How to Use the Interface

1. **Home Page**: Shows all your problem sets (contest folders)
2. **Select a Set**: Click on a problem set to see difficulty levels
3. **Choose Difficulty**: Click on a difficulty to see all problems
4. **View Solutions**: Click on a problem to see all your solution attempts
5. **Theme Toggle**: Click the 🌙/☀️ icon to switch between dark/light mode
6. **Navigation**: Use breadcrumbs at the top to go back to previous levels

## 💡 Commands Available

| Command | Description |
|---------|-------------|
| `npm run watch` | **🔥 Recommended** - Auto-detects new files and updates the app |
| `npm run dev` | Same as watch (alternative name) |
| `npm run generate` | One-time scan to generate configuration |
| `npm run refresh` | Regenerate config manually |
| `npm start` | Just opens index.html (basic) |

## 📁 Project Structure

```
DSA_CP/
├── index.html           # Main HTML page
├── app.js              # Core application logic (navigation & state)
├── styles.css          # Custom CSS styles (minimal, uses Tailwind)
├── dynamic-config.js   # Auto-generated configuration with your code
├── utils/              # Modular utility libraries
│   ├── formatters.js              # Text formatting utilities
│   ├── dom-utils.js              # DOM manipulation helpers
│   ├── theme-manager.js          # Dark/light theme management
│   ├── card-factory.js           # UI card creation components
│   ├── code-display-manager.js   # Code display & syntax highlighting
│   ├── configuration-helper.js   # Setup & help messages
│   ├── generate-structure.js     # Structure generation script
│   └── watch-and-generate.js     # Auto-watch functionality
└── tle-eliminators*/   # Your actual code solutions
```

### Your Code Structure
The system automatically detects:
- Contest directories (like `tle-eliminators`)
- Difficulty levels (800, 900, 1200, etc.)
- Problem folders with multiple solution attempts
- All `.cpp`, `.c`, `.py`, `.java` files

Example:
```
tle-eliminators/
├── 800/
│   ├── 1.Halloumi_Boxes/      (6 files)
│   ├── 2.Line_Trip/           (4 files)
│   ├── 3.Cover_in_Water/      (4 files)
│   └── ...
└── 900/
    └── (your problems here)
```

## � Perfect for DSA Learning

This tool helps you:

- **📈 Track Your Progress** - Visual stats show how many problems you've solved in each difficulty
- **🔍 Review Past Solutions** - Easily find and compare your different approaches to the same problem  
- **⚡ Quick Navigation** - Jump between problems and difficulty levels with breadcrumb navigation
- **📚 Organize Learning** - Keep all your solutions in one accessible, beautiful interface
- **🎯 Focus on Coding** - Spend time solving problems, not managing files and folders
- **📊 Multiple Attempts** - See all your solution attempts for each problem in one place

## 🏗️ How It Works

### Architecture Overview

The project uses a **modular architecture** where each utility handles a specific task:

- **`app.js`** - Core navigation and state management
- **`formatters.js`** - Clean text formatting for problem/set names  
- **`dom-utils.js`** - DOM manipulation (loading states, stats, breadcrumbs)
- **`theme-manager.js`** - Dark/light theme switching with persistence
- **`card-factory.js`** - Creates UI cards for problems and difficulty levels
- **`code-display-manager.js`** - Code display with syntax highlighting
- **`configuration-helper.js`** - Setup instructions and error handling

### File Detection System

1. **Scans your folders** automatically for contest directories
2. **Detects difficulty levels** (800, 900, 1200, etc.)  
3. **Finds all code files** (`.cpp`, `.c`, `.py`, `.java`)
4. **Organizes by structure** - Contest → Difficulty → Problem → Solutions
5. **Updates automatically** (in watch mode) when you add new files

## 🔧 Customization Options

- **File Types**: Edit `utils/generate-structure.js` to support more languages
- **Styling**: Modify `styles.css` for custom appearance  
- **Problem Metadata**: Add descriptions or URLs to problems
- **Directory Filtering**: Exclude certain folders from scanning

---

**Happy Coding! 🚀** Your folder structure is automatically reflected in the web interface - focus on solving problems, not maintaining configuration files!
