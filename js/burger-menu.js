// Mobile Burger Menu Functionality
function initializeBurgerMenuWhenReady() {
  const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
  if (burgerMenuOverlay) {
    console.log('Burger overlay found, initializing...');
    initializeBurgerMenu();
  } else {
    console.log('Burger overlay not found, retrying...');
    setTimeout(initializeBurgerMenuWhenReady, 200);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Burger menu DOM loaded');
  // Start checking for burger menu overlay
  initializeBurgerMenuWhenReady();
});

function initializeBurgerMenu() {
  console.log('Initializing burger menu...');
  
  const header = document.querySelector('.HEADER');
  const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
  
  console.log('Header found:', !!header);
  console.log('Burger overlay found:', !!burgerMenuOverlay);
  
  if (!header || !burgerMenuOverlay) {
    console.log('Burger menu elements not found');
    return;
  }
  
  // Listen for clicks on entire header on mobile
  header.addEventListener('click', function(e) {
    console.log('Header clicked');
    
    // Only activate on mobile screens
    if (window.innerWidth > 768) {
      console.log('Desktop - ignoring click');
      return;
    }
    
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    console.log('Click coordinates:', x, y);
    console.log('Header dimensions:', rect.width, rect.height);
    
    // Check if click is in the burger area (right side - wider area)
    if (x >= rect.width - 120) {
      console.log('Burger area clicked');
      e.preventDefault();
      e.stopPropagation();
      
      if (burgerMenuOverlay.classList.contains('active')) {
        console.log('Closing burger menu');
        closeBurgerMenu();
      } else {
        console.log('Opening burger menu');
        openBurgerMenu();
      }
    }
  });
  
  // Close on overlay click (outside menu content)
  burgerMenuOverlay.addEventListener('click', function(e) {
    if (e.target === burgerMenuOverlay) {
      closeBurgerMenu();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && burgerMenuOverlay.classList.contains('active')) {
      closeBurgerMenu();
    }
  });
  
  // Navigation item clicks
  const navItems = document.querySelectorAll('.burger-nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const text = item.querySelector('span').textContent;
      console.log(`Clicked on: ${text}`);
      
      // Handle navigation
      if (text === 'Jumping') {
        window.location.href = 'category_flexed.html';
      }
      // Add other navigation logic here
    });
  });
  
  // Forum button click
  const forumBtn = document.querySelector('.burger-forum-btn');
  if (forumBtn) {
    forumBtn.addEventListener('click', function() {
      console.log('Forum button clicked');
      // Add forum navigation logic here
    });
  }
}

function openBurgerMenu() {
  const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
  const header = document.querySelector('.HEADER');
  const body = document.body;
  
  burgerMenuOverlay.classList.add('active');
  header.classList.add('burger-active');
  body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeBurgerMenu() {
  const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
  const header = document.querySelector('.HEADER');
  const body = document.body;
  
  burgerMenuOverlay.classList.remove('active');
  header.classList.remove('burger-active');
  body.style.overflow = ''; // Restore scrolling
}