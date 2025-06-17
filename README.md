# DSA/CP Solutions Explorer

A beautiful, clean web interface to explore your competitive programming solutions with automatic structure detection and dark/light mode support.

## ✨ Features

- 🎨 **Modern Dark/Light UI** - Clean responsive design with proper dark mode
- 🤖 **Auto-Detection** - Automatically scans your repository structure and reads code files
- 💻 **Real Code Display** - Shows your actual solutions with syntax highlighting
- 📊 **Progress Tracking** - View stats for problem sets, problems, and attempts
- 🔄 **Live Refresh** - Update structure without restarting
- 📱 **Mobile Friendly** - Fully responsive design
- 🔍 **File Management** - See all your attempts for each problem

## 🚀 Quick Start

### 🔥 Recommended: Auto-Watch Mode
```bash
npm run watch
```
Then open `index.html` in your browser. Add your `.cpp` files - they'll appear automatically!

### ⚡ Manual Mode
```bash
npm run generate
```
Then open `index.html` in your browser. Run `npm run refresh` when you add new files.

## 🎯 Available Commands

- `npm run watch` - **🔥 Recommended**: Auto-detects file changes and regenerates
- `npm run dev` - Same as watch (alternative name)
- `npm run generate` - One-time scan and generate configuration
- `npm run refresh` - Regenerate config and show confirmation  
- `npm start` - Open the web app (just opens index.html)

## 📁 Project Structure

```
DSA_CP/
├── index.html           # Main HTML page
├── app.js              # Main JavaScript application logic
├── styles.css          # Custom CSS styles (minimal, uses Tailwind)
├── dynamic-config.js   # Auto-generated configuration with your code
├── utils/              # Utility scripts for generating structure
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

## 🎨 What Was Fixed & Optimized

### **CSS Optimization (80% reduction)**
- **Before**: 400+ lines with complex overrides and custom variables
- **After**: ~80 lines of clean, focused CSS using Tailwind's built-in dark mode
- **Removed**: All cluttered custom classes and excessive `!important` rules

### **Dark Mode Fix**
- **Fixed**: Now uses `document.documentElement` with Tailwind's standard `dark` class
- **Improved**: Proper localStorage persistence and immediate theme application
- **Added**: Proper Tailwind dark mode configuration via CDN

### **Code Rendering Fix**
- **Light Mode**: Clean, readable code with proper contrast
- **Dark Mode**: Beautiful syntax highlighting with proper colors
- **Both Modes**: Optimal background colors and typography

### **File Structure Cleanup**
- **Removed**: Confusing duplicate files and old versions
- **Organized**: Utility scripts moved to `utils/` folder
- **Simplified**: Clear, maintainable structure

## 🔧 Usage

1. **Open Browser**: Open `index.html` in a web browser
2. **Toggle Theme**: Click the moon/sun icon to switch dark/light mode
3. **Browse Solutions**: Navigate by problem set → difficulty → specific problems
4. **View Code**: Click on problems to see all your solution attempts

## 🔄 Adding New Problems

When you add new problems:
1. Add your problem folders to your contest directory
2. **Auto-watch mode**: Files appear automatically
3. **Manual mode**: Run `npm run refresh` or click the refresh button 🔄 in the web app

## 🎓 Perfect For Learning DSA

The app helps you:
- **Track Progress** - See all your attempts for each problem
- **Review Solutions** - Compare different approaches you tried
- **Organize Learning** - Problems grouped by difficulty
- **Time Comparison** - Comments in your code show runtime improvements

## 🏗️ Technical Architecture

- **🎯 Clean & Simple**: Minimal, focused codebase
- **📊 Automatic Detection**: No manual configuration needed
- **🧩 Tailwind CSS**: Modern utility-first styling with built-in dark mode
- **⚡ Performance Optimized**: Fast loading with small CSS bundle
- **🎨 Responsive Design**: Mobile-first approach

## 🔧 Customization

You can modify `utils/generate-structure.js` to:
- Add support for more file extensions
- Include problem metadata (descriptions, URLs)  
- Filter certain directories
- Add custom tags or categories

---

**Happy Coding! 🚀** Your folder structure is automatically reflected in the web interface - focus on solving problems, not maintaining configuration files!
