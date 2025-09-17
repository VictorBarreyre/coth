// Dropdown navigation system

// Function to initialize login dropdown
function initializeLoginDropdown() {
  
  const avatar = document.querySelector('.avatar');
  const loginDropdown = document.querySelector('.login-dropdown');
  
  if (!avatar || !loginDropdown) {
    return;
  }
  
  let loginTimeout;
  
  avatar.addEventListener('mouseenter', () => {
    clearTimeout(loginTimeout);
    
    loginDropdown.style.opacity = '1';
    loginDropdown.style.visibility = 'visible';
    loginDropdown.style.transform = 'translateY(0)';
    loginDropdown.style.pointerEvents = 'all';
  });
  
  avatar.addEventListener('mouseleave', () => {
    loginTimeout = setTimeout(() => {
      loginDropdown.style.opacity = '0';
      loginDropdown.style.visibility = 'hidden';
      loginDropdown.style.transform = 'translateY(-10px)';
      loginDropdown.style.pointerEvents = 'none';
    }, 100);
  });
  
  loginDropdown.addEventListener('mouseenter', () => {
    clearTimeout(loginTimeout);
  });
  
  loginDropdown.addEventListener('mouseleave', () => {
    loginDropdown.style.opacity = '0';
    loginDropdown.style.visibility = 'hidden';
    loginDropdown.style.transform = 'translateY(-10px)';
    loginDropdown.style.pointerEvents = 'none';
  });
}

// Function to initialize dropdown menus
function initializeDropdowns() {
  
  // Create dropdown structure
  const dropdownData = {
    sports: ['Jumping', 'Dressage', 'Eventing', 'Racing', 'Polo', 'Vaulting', 'Endurance', 'Driving'],
    features: ['Interviews', 'Analysis', 'Opinion', 'History', 'Training', 'Health', 'Equipment', 'Travel']
  };

  // Get the nav links and chevrons - they should be available now
  const sportsLink = document.querySelector('.text-wrapper-2');
  const featuresLink = document.querySelector('.text-wrapper-3');
  const sportsChevron = document.querySelector('.symboles-chevrons');
  const featuresChevron = document.querySelector('.icon-wrapper');
  
  
  // Create dropdown for Sports
  if (sportsLink) {
    const sportsDropdown = createDropdown(dropdownData.sports, 'sports-dropdown');
    document.body.appendChild(sportsDropdown);
    
    // Create a hover zone that includes link + chevron
    let sportsTimeout;
    
    const showSportsDropdown = () => {
      clearTimeout(sportsTimeout);
      
      // Position the dropdown correctly
      const rect = sportsLink.getBoundingClientRect();
      sportsDropdown.style.left = rect.left + 'px';
      sportsDropdown.style.top = (rect.bottom + 2) + 'px';
      
      sportsDropdown.style.display = 'block';
      setTimeout(() => {
        sportsDropdown.style.opacity = '1';
        sportsDropdown.style.transform = 'translateY(0)';
      }, 10);
    };
    
    const hideSportsDropdown = () => {
      sportsTimeout = setTimeout(() => {
        sportsDropdown.style.opacity = '0';
        sportsDropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          sportsDropdown.style.display = 'none';
        }, 150);
      }, 300);
    };
    
    // Create invisible hover zone that covers link + chevron + gap
    const sportsHoverZone = document.createElement('div');
    sportsHoverZone.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9998;
    `;
    document.body.appendChild(sportsHoverZone);
    
    const updateSportsHoverZone = () => {
      const linkRect = sportsLink.getBoundingClientRect();
      const chevronRect = sportsChevron ? sportsChevron.getBoundingClientRect() : linkRect;
      
      const left = Math.min(linkRect.left, chevronRect.left) - 10;
      const right = Math.max(linkRect.right, chevronRect.right) + 10;
      const top = Math.min(linkRect.top, chevronRect.top) - 10;
      const bottom = Math.max(linkRect.bottom, chevronRect.bottom) + 20; // Plus d'espace vers le dropdown
      
      sportsHoverZone.style.left = left + 'px';
      sportsHoverZone.style.top = top + 'px';
      sportsHoverZone.style.width = (right - left) + 'px';
      sportsHoverZone.style.height = (bottom - top) + 'px';
      sportsHoverZone.style.pointerEvents = 'auto';
    };
    
    // Update hover zone on page load and resize
    updateSportsHoverZone();
    window.addEventListener('resize', updateSportsHoverZone);
    
    // Event listeners for the hover zone
    sportsHoverZone.addEventListener('mouseenter', showSportsDropdown);
    sportsHoverZone.addEventListener('mouseleave', hideSportsDropdown);
    
    sportsDropdown.addEventListener('mouseenter', () => {
      clearTimeout(sportsTimeout);
    });
    
    sportsDropdown.addEventListener('mouseleave', hideSportsDropdown);
  }
  
  // Create dropdown for Features
  if (featuresLink) {
    const featuresDropdown = createDropdown(dropdownData.features, 'features-dropdown');
    document.body.appendChild(featuresDropdown);
    
    // Create a hover zone that includes link + chevron
    let featuresTimeout;
    
    const showFeaturesDropdown = () => {
      clearTimeout(featuresTimeout);
      
      // Position the dropdown correctly
      const rect = featuresLink.getBoundingClientRect();
      featuresDropdown.style.left = rect.left + 'px';
      featuresDropdown.style.top = (rect.bottom + 2) + 'px';
      
      featuresDropdown.style.display = 'block';
      setTimeout(() => {
        featuresDropdown.style.opacity = '1';
        featuresDropdown.style.transform = 'translateY(0)';
      }, 10);
    };
    
    const hideFeaturesDropdown = () => {
      featuresTimeout = setTimeout(() => {
        featuresDropdown.style.opacity = '0';
        featuresDropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          featuresDropdown.style.display = 'none';
        }, 150);
      }, 300);
    };
    
    // Create invisible hover zone that covers link + chevron + gap
    const featuresHoverZone = document.createElement('div');
    featuresHoverZone.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9998;
    `;
    document.body.appendChild(featuresHoverZone);
    
    const updateFeaturesHoverZone = () => {
      const linkRect = featuresLink.getBoundingClientRect();
      const chevronRect = featuresChevron ? featuresChevron.getBoundingClientRect() : linkRect;
      
      const left = Math.min(linkRect.left, chevronRect.left) - 10;
      const right = Math.max(linkRect.right, chevronRect.right) + 10;
      const top = Math.min(linkRect.top, chevronRect.top) - 10;
      const bottom = Math.max(linkRect.bottom, chevronRect.bottom) + 20; // Plus d'espace vers le dropdown
      
      featuresHoverZone.style.left = left + 'px';
      featuresHoverZone.style.top = top + 'px';
      featuresHoverZone.style.width = (right - left) + 'px';
      featuresHoverZone.style.height = (bottom - top) + 'px';
      featuresHoverZone.style.pointerEvents = 'auto';
    };
    
    // Update hover zone on page load and resize
    updateFeaturesHoverZone();
    window.addEventListener('resize', updateFeaturesHoverZone);
    
    // Event listeners for the hover zone
    featuresHoverZone.addEventListener('mouseenter', showFeaturesDropdown);
    featuresHoverZone.addEventListener('mouseleave', hideFeaturesDropdown);
    
    featuresDropdown.addEventListener('mouseenter', () => {
      clearTimeout(featuresTimeout);
    });
    
    featuresDropdown.addEventListener('mouseleave', hideFeaturesDropdown);
  }
}

// Function to create dropdown menu
function createDropdown(items, className) {
  const dropdown = document.createElement('div');
  dropdown.className = className + ' nav-dropdown';
  dropdown.style.cssText = `
    position: fixed;
    width: 206px;
    height: 345px;
    background: #0C004F;
    overflow: hidden;
    display: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.15s ease, transform 0.15s ease;
    z-index: 9999;
  `;
  
  // Add items with exact positioning from Figma
  items.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    const topPosition = 15 + (index * 42); // 15px start, 42px spacing
    
    // Special style for "Jumping" - semi-transparent
    const isJumping = item === 'Jumping';
    const color = isJumping ? 'rgba(255, 255, 255, 0.50)' : 'white';
    
    itemDiv.style.cssText = `
      left: 18px;
      top: ${topPosition}px;
      position: absolute;
      justify-content: center;
      display: flex;
      flex-direction: column;
      color: ${color};
      font-size: 12px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      word-wrap: break-word;
      cursor: pointer;
      transition: color 0.15s ease;
    `;
    
    itemDiv.textContent = item;
    
    // Add hover effect
    itemDiv.addEventListener('mouseenter', () => {
      if (!isJumping) {
        itemDiv.style.color = 'rgba(255, 255, 255, 0.8)';
      }
    });
    
    itemDiv.addEventListener('mouseleave', () => {
      itemDiv.style.color = color;
    });
    
    // Add click handler
    itemDiv.addEventListener('click', () => {
      if (item === 'Jumping') {
        window.location.href = 'pages/category_flexed.html';
      } else {
        // For other items, you can add specific navigation logic here
      }
    });
    
    dropdown.appendChild(itemDiv);
    
    // Add separator lines (except for last item)
    if (index < items.length - 1) {
      const separator = document.createElement('div');
      separator.style.cssText = `
        width: 166px;
        height: 0px;
        left: 20px;
        top: ${topPosition + 32}px;
        position: absolute;
        outline: 1px rgba(255, 255, 255, 0.50) solid;
        outline-offset: -0.50px;
      `;
      dropdown.appendChild(separator);
    }
  });
  
  return dropdown;
}