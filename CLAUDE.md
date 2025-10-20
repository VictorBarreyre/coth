# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript sports news website focused on equestrian content. The site features a responsive design with mobile-first approach, component-based architecture, and CSS-only interactions where possible.

## Project Structure

### Key Directories
- `pages/` - Main HTML pages (home_flexed.html, article_flexed.html, etc.)
- `components/` - Reusable HTML components (header.html, footer.html, sidebar.html, etc.)
- `css/` - Stylesheets organized by page and shared styles
- `js/` - JavaScript modules for specific functionality
- `assets/` - Images, icons, and media files organized by category

### Component System
The project uses a custom component inclusion system via `js/components.js`:
- Components are included using `data-include="../components/filename.html"` attributes
- Components are loaded asynchronously and replaced in the DOM
- Scaling and search functionality are initialized after component loading

## Development Commands

This is a static website with no build system. Development commands:
- **Local server**: Use any static file server (e.g., `python -m http.server 8000`, Live Server extension)
- **File serving**: Open pages directly from the `pages/` directory in a browser

## Architecture Notes

### JavaScript Architecture
- `components.js` - Handles dynamic component loading and initialization
- `search.js` - Expandable search functionality with mobile/desktop variations
- `scaling.js` - Content scaling system
- `search-results.js` - Search results page functionality

### CSS Architecture
- `shared-styles.css` - Common styles, fonts, and base components
- Page-specific CSS files (e.g., `home-flexed.css`, `article-flexed.css`)
- CSS-only interactions for dropdowns and mobile menu (no JavaScript required)

### Mobile-First Design
- Responsive breakpoints with mobile-first approach
- CSS-only burger menu using checkbox toggles
- Separate mobile/desktop search implementations
- Mobile-specific components and layouts

### Component Loading Pattern
1. HTML pages include components via `data-include` attributes
2. `components.js` fetches and replaces these with actual component HTML
3. Search and scaling functionality initialize after component loading with delays
4. Error handling for missing components

## Important Implementation Details

- **CSS-only interactions**: Dropdowns and mobile menu use pure CSS with checkbox toggles
- **Search system**: Different behavior for mobile vs desktop with animated transitions
- **Font loading**: Custom Harriet Text font family with multiple weights
- **Asset organization**: Images are categorized (ads/, article-img/, header/, etc.)
- **Navigation**: Relative paths assume serving from pages/ directory

## File Entry Points

- Main homepage: `pages/home_flexed.html`
- Article template: `pages/article_flexed.html`
- Category page: `pages/category_flexed.html`
- Search results: `pages/search_results.html`