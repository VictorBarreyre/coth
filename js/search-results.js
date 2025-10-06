// Search results page functionality

function initializeSearchResults() {
  // Get the search query from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');

  // Find the query display element
  const queryDisplay = document.querySelector('.title-query');

  if (queryDisplay && query) {
    // Update the displayed search query
    queryDisplay.textContent = query;
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSearchResults);
} else {
  initializeSearchResults();
}
