// Include component system
document.addEventListener('DOMContentLoaded', function() {
    const includeElements = document.querySelectorAll('[data-include]');
    
    includeElements.forEach(async function(element) {
        const file = element.getAttribute('data-include');
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const content = await response.text();
                    element.innerHTML = content;
                } else {
                    console.error(`Failed to load component: ${file}`);
                }
            } catch (error) {
                console.error(`Error loading component ${file}:`, error);
            }
        }
    });
});