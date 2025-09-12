// Simple Mobile Burger Menu
document.addEventListener('DOMContentLoaded', function() {
  console.log('Setting up simple burger menu...');
  
  const burgerBtn = document.querySelector('.mobile-burger-btn');
  const burgerOverlay = document.querySelector('.burger-menu-overlay');
  
  if (!burgerBtn || !burgerOverlay) {
    console.log('Burger elements not found, waiting...');
    setTimeout(() => {
      initSimpleBurgerMenu();
    }, 1000);
    return;
  }
  
  initSimpleBurgerMenu();
});

function initSimpleBurgerMenu() {
  const burgerBtn = document.querySelector('.mobile-burger-btn');
  const burgerOverlay = document.querySelector('.burger-menu-overlay');
  
  if (!burgerBtn || !burgerOverlay) {
    console.log('Burger elements still not found');
    return;
  }
  
  console.log('Burger menu initialized successfully!');
  
  // Click on burger button
  burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Burger clicked!');
    
    if (burgerOverlay.classList.contains('active')) {
      closeBurger();
    } else {
      openBurger();
    }
  });
  
  // Close on overlay click
  burgerOverlay.addEventListener('click', function(e) {
    if (e.target === burgerOverlay) {
      closeBurger();
    }
  });
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && burgerOverlay.classList.contains('active')) {
      closeBurger();
    }
  });
}

function openBurger() {
  const burgerOverlay = document.querySelector('.burger-menu-overlay');
  const burgerBtn = document.querySelector('.mobile-burger-btn');
  
  burgerOverlay.classList.add('active');
  burgerBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
  console.log('Burger opened');
}

function closeBurger() {
  const burgerOverlay = document.querySelector('.burger-menu-overlay');
  const burgerBtn = document.querySelector('.mobile-burger-btn');
  
  burgerOverlay.classList.remove('active');
  burgerBtn.classList.remove('active');
  document.body.style.overflow = '';
  console.log('Burger closed');
}