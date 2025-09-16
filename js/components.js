// Component inclusion system for static HTML
// Usage: Include component scripts and use data-include attributes

document.addEventListener('DOMContentLoaded', function() {
  const includeElements = document.querySelectorAll('[data-include]');
  
  // Load all components
  Array.from(includeElements).forEach(function(element) {
    const componentPath = element.getAttribute('data-include');
    try {
      let html = '';
      
      // Map component paths to global variables
      if (componentPath.includes('header.html')) {
        html = window.headerHTML || '';
      } else if (componentPath.includes('sidebar-mobile.html')) {
        html = window.sidebarMobileHTML || '';
      } else if (componentPath.includes('sidebar.html')) {
        html = window.sidebarHTML || '';
      } else if (componentPath.includes('newsletter-bottom.html')) {
        html = window.newsletterBottomHTML || '';
      } else if (componentPath.includes('footer.html')) {
        html = window.footerHTML || '';
      }
      
      if (html) {
        element.outerHTML = html;
      } else {
        console.error('Component not found:', componentPath);
      }
    } catch (error) {
      console.error('Error loading component:', componentPath, error);
    }
  });
  
  console.log('All components loaded, initializing...');
  
  // Apply scaling after components are loaded
  setTimeout(() => {
    if (typeof scaleContent === 'function') {
      scaleContent();
      window.addEventListener('resize', scaleContent);
    }
    
    // Initialize dropdowns and search after components are loaded - with longer delay
    setTimeout(() => {
      console.log('Initializing dropdowns and search now...');
      if (typeof initializeDropdowns === 'function') {
        initializeDropdowns();
      }
      if (typeof initializeLoginDropdown === 'function') {
        initializeLoginDropdown();
      }
      if (typeof initializeSearch === 'function') {
        initializeSearch();
      }
      
      // Burger menu is now initialized directly in burger-menu.js
    }, 500);
    
    // Ensure all links work after component loading
    document.body.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.href) {
        // Let the browser handle normal navigation
        return true;
      }
    });
  }, 100);
});