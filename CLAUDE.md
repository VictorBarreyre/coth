# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML sports news website built with vanilla JavaScript and CSS. The site features a component-based architecture using a custom HTML include system, designed for a 1920px desktop layout with responsive scaling.

## Architecture

### Component System

The project uses a custom component inclusion system instead of a framework:

- **Components**: Reusable HTML fragments in `components/` directory
  - `header.html` - Main navigation, search, login dropdown, social icons
  - `footer.html` - Footer with links and social media
  - `sidebar.html` - Desktop sidebar navigation
  - `sidebar-mobile.html` - Mobile sidebar navigation
  - `burger-menu.html` - Mobile burger menu
  - `newsletter-bottom.html` - Newsletter signup component

- **Component Loading**: Handled by `js/components.js`
  - Uses `data-include` attributes to load components via fetch
  - All components load on `DOMContentLoaded`
  - Search initialization happens after components load (500ms delay)
  - Example: `<div data-include="../components/header.html"></div>`

### Page Structure

Pages follow this pattern:
```html
<body>
  <input type="checkbox" id="burgerMenuToggle" class="burger-menu-toggle">
  <div class="scale-wrapper" id="scaleWrapper">
    <div data-include="../components/header.html"></div>
    <!-- Page content -->
    <div data-include="../components/footer.html"></div>
  </div>
</body>
```

### JavaScript Architecture

The codebase uses vanilla JavaScript with NO frameworks:

1. **components.js** - Component loading system
   - Loads all `[data-include]` elements
   - Initializes search after components load
   - Handles component loading errors

2. **search.js** - Expandable search functionality
   - Exports `initializeSearch()` function
   - Desktop: animated search with social icons slide
   - Mobile: simplified search overlay
   - Redirects to `search_results.html?q={query}` on Enter
   - CSS-driven animations with JavaScript state management

3. **scaling.js** - Responsive scaling system
   - Scales content from 1920px design to smaller viewports
   - Uses CSS transform to maintain layout integrity
   - Adjusts body height to prevent scrollbar issues

4. **search-results.js** - Search results page
   - Reads query parameter from URL
   - Updates `.title-query` element with search term

### CSS Architecture

- **shared-styles.css** - Global styles, fonts, common components
  - Custom font declarations (Harriet Text family)
  - Article link styles
  - Shared component styles (header, footer, burger menu, sidebar)

- **Page-specific CSS** - One CSS file per page
  - `home-flexed.css`
  - `article-flexed.css`
  - `category-flexed.css`
  - `search-results.css`
  - `forgot-password.css`
  - `cgu.css`

### Interaction Patterns

The site heavily uses **CSS-only interactions**:
- Burger menu toggle via `#burgerMenuToggle` checkbox
- Navigation dropdowns via `:hover` and focus states
- Login dropdown via `:hover`
- No JavaScript required for dropdowns/menus

## File Organization

```
/
├── pages/              # HTML pages
├── components/         # Reusable HTML components
├── js/                # JavaScript modules
├── css/               # Stylesheets (shared + page-specific)
├── assets/            # Images and media
│   ├── header/       # Header icons, avatars
│   ├── home/         # Logo, home page images
│   ├── article-img/  # Article images
│   ├── ads/          # Advertisement images
│   ├── live/         # Live content assets
│   ├── mag/          # Magazine assets
│   └── modale/       # Modal assets
└── fonts/             # Custom fonts (Harriet Text family)
```

## Development

### No Build Process

This is a static site with no build step. To develop:

1. Open HTML files directly in a browser, or
2. Use a local server (recommended for fetch() to work):
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

3. Navigate to pages via `http://localhost:8000/pages/home_flexed.html`

### Making Changes

**Adding a new component:**
1. Create HTML file in `components/`
2. Include via `<div data-include="../components/your-component.html"></div>`
3. Component loads automatically via `components.js`

**Adding a new page:**
1. Create HTML file in `pages/`
2. Include required CSS: `shared-styles.css` + page-specific CSS
3. Include JavaScript: `components.js`, `scaling.js`, and others as needed
4. Add component includes for header/footer
5. Wrap content in `<div class="scale-wrapper" id="scaleWrapper">`

**Styling guidelines:**
- Desktop-first design at 1920px width
- Use `shared-styles.css` for common elements
- Create page-specific CSS for unique layouts
- Prefer CSS-only interactions over JavaScript
- Font: Harriet Text family for headings, Montserrat for body text

**JavaScript guidelines:**
- Initialize functions after components load
- Use `initializeSearch()` pattern for exported functions
- Keep scripts modular and page-specific
- Avoid global variables; use function scoping

## Key Technical Details

### Scaling System

The site uses a custom scaling approach (`scaling.js`):
- Design is fixed at 1920px width
- On smaller screens, content scales proportionally
- Transform origin is top-left to maintain alignment
- Body height adjusts to prevent scroll issues

### Search Functionality

Search has two modes:
- **Desktop**: Animated expansion with social icons slide
- **Mobile**: Full-screen overlay
- Both use the same HTML structure in `header.html`
- Controlled via `isOpen` state in `search.js`
- Closes on Escape key or outside click

### Path References

All paths use relative references:
- From pages: `../components/`, `../css/`, `../assets/`
- From components: `../assets/`
- Maintain this convention when adding files

## Common Tasks

### Updating Navigation

Edit `components/header.html` - changes apply to all pages automatically.

### Adding Article Content

Articles use semantic HTML with classes:
- `.featured-article` - Large hero article
- `.medium-article` - Mid-size grid articles
- `.small-article` - Compact list articles
- Each includes: image, title, tag, author metadata

### Working with Fonts

Custom Harriet Text fonts are in `/fonts`:
- Bold, Medium, Regular, Light weights
- Each has italic variant
- Declared in `shared-styles.css`
- Fallback to system fonts if loading fails
