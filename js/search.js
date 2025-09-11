// Expandable search functionality

function initializeSearch() {
  console.log('Initializing search...');
  
  // Find the search button (loupe) in header
  const searchButton = document.querySelector('.loupe');
  const header = document.querySelector('.HEADER');
  const socialIcons = document.querySelector('.social-icons');
  
  if (!searchButton) {
    console.log('Search button not found');
    return;
  }
  
  console.log('Search button found:', searchButton);
  
  // Get search container that's already in the header
  const searchContainer = document.querySelector('#searchContainer');
  
  if (!searchContainer) {
    console.log('Search container not found');
    return;
  }
  
  // Get elements
  const background = document.querySelector('#searchBackground');
  const inputCircle = document.querySelector('#inputCircle');
  const searchInput = document.querySelector('#searchInput');
  const placeholder = document.querySelector('#searchPlaceholder');
  
  let isOpen = false;
  
  // Open search function
  function openSearch() {
    if (isOpen) return;
    
    console.log('Opening search');
    isOpen = true;
    
    // Check if we're on mobile (screen width <= 768px)
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Mobile: show search container with active class
      searchContainer.classList.add('active');
      setTimeout(() => {
        searchInput.focus();
      }, 300);
    } else {
      // Desktop: use original animation
      // Add search-active class to header to trigger social icons animation
      if (header) {
        header.classList.add('search-active');
      }
      
      // Show search container
      searchContainer.classList.add('show');
      
      // Animate elements in sequence
      setTimeout(() => {
        background.classList.add('expanded');
      }, 50);
      
      setTimeout(() => {
        inputCircle.classList.add('expanded');
      }, 150);
      
      setTimeout(() => {
        searchInput.classList.add('show');
        placeholder.classList.add('show');
        searchInput.focus();
      }, 400);
    }
  }
  
  // Close search function
  function closeSearch() {
    if (!isOpen) return;
    
    console.log('Closing search');
    isOpen = false;
    
    // Check if we're on mobile (screen width <= 768px)
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Mobile: hide search container by removing active class
      searchContainer.classList.remove('active');
      searchInput.value = ''; // Clear input
    } else {
      // Desktop: use original animation
      // Remove classes in reverse order
      searchInput.classList.remove('show');
      placeholder.classList.remove('show');
      
      setTimeout(() => {
        inputCircle.classList.remove('expanded');
      }, 100);
      
      setTimeout(() => {
        background.classList.remove('expanded');
      }, 200);
      
      setTimeout(() => {
        searchContainer.classList.remove('show');
        searchInput.value = ''; // Clear input
        
        // Remove search-active class to return social icons to original position
        if (header) {
          header.classList.remove('search-active');
        }
      }, 400);
    }
  }
  
  // Event listeners
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeSearch();
    }
  });
  
  // Close on click outside search area
  document.addEventListener('click', (e) => {
    if (isOpen && !searchContainer.contains(e.target) && !searchButton.contains(e.target)) {
      closeSearch();
    }
  });
  
  // Handle search input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    if (query.length > 0) {
      // Hide placeholder when typing
      placeholder.style.opacity = '0';
    } else {
      // Show placeholder when empty
      placeholder.style.opacity = '1';
    }
    // Here you can add search logic
    console.log('Search query:', query);
  });
  
  // Handle Enter key for search
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value.trim();
      if (query) {
        console.log('Searching for:', query);
        // Here you can add actual search functionality
        // For now, we'll just close the search
        closeSearch();
      }
    }
  });
}