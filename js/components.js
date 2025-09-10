// Component inclusion system for static HTML
// Usage: Include this script and use data-include attributes

document.addEventListener('DOMContentLoaded', async function() {
  const includeElements = document.querySelectorAll('[data-include]');
  
  // Load all components
  const promises = Array.from(includeElements).map(async function(element) {
    const componentPath = element.getAttribute('data-include');
    try {
      const response = await fetch(componentPath);
      const html = await response.text();
      element.outerHTML = html;
    } catch (error) {
      console.error('Error loading component:', componentPath, error);
    }
  });

  // Wait for all components to load
  await Promise.all(promises);
  
  console.log('All components loaded, initializing...');
  
  // Apply scaling after components are loaded
  setTimeout(() => {
    if (typeof scaleContent === 'function') {
      scaleContent();
      window.addEventListener('resize', scaleContent);
    }
    
    // Initialize dropdowns after components are loaded - with longer delay
    setTimeout(() => {
      console.log('Initializing dropdowns now...');
      if (typeof initializeDropdowns === 'function') {
        initializeDropdowns();
      }
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