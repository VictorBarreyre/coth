// Simple component inclusion system for static HTML
// Usage: Include this script and use data-include attributes

// Function to scale content to fit screen
function scaleContent() {
  const wrapper = document.getElementById('scaleWrapper');
  if (!wrapper) return;
  
  const windowWidth = window.innerWidth;
  const contentWidth = 1920; // Largeur originale du design

  if (windowWidth < contentWidth) {
    const scale = windowWidth / contentWidth;
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.transformOrigin = 'top left';

    // Ajuste la hauteur du body pour éviter l'espace vide
    const originalHeight = wrapper.offsetHeight;
    document.body.style.height = (originalHeight * scale) + 'px';
  } else {
    wrapper.style.transform = 'scale(1)';
    document.body.style.height = 'auto';
  }
}

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
  
  // Apply scaling after components are loaded
  setTimeout(() => {
    scaleContent();
    window.addEventListener('resize', scaleContent);
    
    // Ensure all links work after component loading
    document.body.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.href) {
        // Let the browser handle normal navigation
        return true;
      }
    });
  }, 100); // Small delay to ensure DOM is fully rendered
});