// Dropdown navigation system

// Function to initialize dropdown menus
function initializeDropdowns() {
  console.log('Initializing dropdowns...');
  
  // Create dropdown structure
  const dropdownData = {
    sports: ['Jumping', 'Dressage', 'Eventing', 'Racing', 'Polo', 'Vaulting', 'Endurance', 'Driving'],
    features: ['Interviews', 'Analysis', 'Opinion', 'History', 'Training', 'Health', 'Equipment', 'Travel']
  };

  // Get the nav links - they should be available now
  const sportsLink = document.querySelector('.text-wrapper-2');
  const featuresLink = document.querySelector('.text-wrapper-3');
  
  console.log('Sports link found:', !!sportsLink);
  console.log('Features link found:', !!featuresLink);
  console.log('Sports link element:', sportsLink);
  console.log('Features link element:', featuresLink);
  
  // Create dropdown for Sports
  if (sportsLink) {
    console.log('Creating Sports dropdown');
    const sportsDropdown = createDropdown(dropdownData.sports, 'sports-dropdown');
    document.body.appendChild(sportsDropdown);
    
    // Add hover events
    let sportsTimeout;
    sportsLink.addEventListener('mouseenter', () => {
      clearTimeout(sportsTimeout);
      console.log('Sports hover enter');
      
      // Position the dropdown correctly
      const rect = sportsLink.getBoundingClientRect();
      sportsDropdown.style.left = rect.left + 'px';
      sportsDropdown.style.top = (rect.bottom + 18) + 'px';
      
      sportsDropdown.style.display = 'block';
      setTimeout(() => {
        sportsDropdown.style.opacity = '1';
        sportsDropdown.style.transform = 'translateY(0)';
      }, 10);
    });
    
    sportsLink.addEventListener('mouseleave', () => {
      console.log('Sports hover leave');
      sportsTimeout = setTimeout(() => {
        sportsDropdown.style.opacity = '0';
        sportsDropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          sportsDropdown.style.display = 'none';
        }, 300);
      }, 200);
    });
    
    sportsDropdown.addEventListener('mouseenter', () => {
      clearTimeout(sportsTimeout);
    });
    
    sportsDropdown.addEventListener('mouseleave', () => {
      sportsDropdown.style.opacity = '0';
      sportsDropdown.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        sportsDropdown.style.display = 'none';
      }, 300);
    });
  }
  
  // Create dropdown for Features
  if (featuresLink) {
    console.log('Creating Features dropdown');
    const featuresDropdown = createDropdown(dropdownData.features, 'features-dropdown');
    document.body.appendChild(featuresDropdown);
    
    // Add hover events
    let featuresTimeout;
    featuresLink.addEventListener('mouseenter', () => {
      clearTimeout(featuresTimeout);
      console.log('Features hover enter');
      
      // Position the dropdown correctly
      const rect = featuresLink.getBoundingClientRect();
      featuresDropdown.style.left = rect.left + 'px';
      featuresDropdown.style.top = (rect.bottom + 18) + 'px';
      
      featuresDropdown.style.display = 'block';
      setTimeout(() => {
        featuresDropdown.style.opacity = '1';
        featuresDropdown.style.transform = 'translateY(0)';
      }, 10);
    });
    
    featuresLink.addEventListener('mouseleave', () => {
      console.log('Features hover leave');
      featuresTimeout = setTimeout(() => {
        featuresDropdown.style.opacity = '0';
        featuresDropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          featuresDropdown.style.display = 'none';
        }, 300);
      }, 200);
    });
    
    featuresDropdown.addEventListener('mouseenter', () => {
      clearTimeout(featuresTimeout);
    });
    
    featuresDropdown.addEventListener('mouseleave', () => {
      featuresDropdown.style.opacity = '0';
      featuresDropdown.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        featuresDropdown.style.display = 'none';
      }, 300);
    });
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
    transition: opacity 0.3s ease, transform 0.3s ease;
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
      font-size: 14px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      word-wrap: break-word;
      cursor: pointer;
      transition: color 0.3s ease;
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
        window.location.href = 'category_flexed.html';
      } else {
        // For other items, you can add specific navigation logic here
        console.log(`Clicked on ${item}`);
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