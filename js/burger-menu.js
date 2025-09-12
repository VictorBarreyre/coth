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
  
  // Add dropdown functionality to burger menu items
  initBurgerDropdowns();
}

function initBurgerDropdowns() {
  const burgerNavItems = document.querySelectorAll('.burger-nav-item');
  
  burgerNavItems.forEach(item => {
    const span = item.querySelector('span');
    const chevron = item.querySelector('.burger-chevron');
    
    if (span && chevron) {
      const text = span.textContent;
      
      if (text === 'Jumping' || text === 'Features') {
        // Create dropdown content
        const dropdownContent = createBurgerDropdown(text);
        
        // Insert dropdown after the current nav item
        item.parentNode.insertBefore(dropdownContent, item.nextSibling);
        
        // Add click event to toggle dropdown
        item.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const isOpen = dropdownContent.classList.contains('open');
          
          // Close all other dropdowns
          document.querySelectorAll('.burger-dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('open');
            const parentItem = dropdown.previousElementSibling;
            if (parentItem && parentItem.querySelector('.burger-chevron')) {
              parentItem.querySelector('.burger-chevron').classList.remove('rotated');
            }
          });
          
          if (!isOpen) {
            dropdownContent.classList.add('open');
            chevron.classList.add('rotated');
          }
        });
      }
    }
  });
}

function createBurgerDropdown(type) {
  const dropdown = document.createElement('div');
  dropdown.className = 'burger-dropdown-content';
  
  let items = [];
  
  if (type === 'Jumping') {
    items = [
      'Show Jumping',
      'Cross Country',
      'Hunter/Jumper',
      'Eventing',
      'Training'
    ];
  } else if (type === 'Features') {
    items = [
      'Interviews',
      'Behind the Scenes',
      'Training Tips',
      'Equipment Reviews',
      'Event Coverage'
    ];
  }
  
  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'burger-dropdown-item';
    itemElement.textContent = item;
    itemElement.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log(`Clicked on ${item}`);
      closeBurger();
    });
    dropdown.appendChild(itemElement);
  });
  
  return dropdown;
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