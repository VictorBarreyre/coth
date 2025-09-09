// ==========================================
// INTERACTIONS JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // SPORTS DROPDOWN FUNCTIONALITY
    // ==========================================
    const sportsNav = document.getElementById('sportsNav');
    const sportsChevron = document.getElementById('sportsChevron');
    const sportsDropdown = document.getElementById('sportsDropdown');
    
    let isDropdownOpen = false;
    let dropdownTimeout;
    
    function showDropdown() {
        clearTimeout(dropdownTimeout);
        sportsDropdown.classList.add('active');
        isDropdownOpen = true;
    }
    
    function hideDropdown() {
        dropdownTimeout = setTimeout(() => {
            sportsDropdown.classList.remove('active');
            isDropdownOpen = false;
        }, 200);
    }
    
    // Sports navigation hover events
    if (sportsNav) {
        sportsNav.addEventListener('mouseenter', showDropdown);
        sportsNav.addEventListener('mouseleave', hideDropdown);
    }
    
    if (sportsChevron) {
        sportsChevron.addEventListener('mouseenter', showDropdown);
        sportsChevron.addEventListener('mouseleave', hideDropdown);
        sportsChevron.addEventListener('click', function(e) {
            e.preventDefault();
            if (isDropdownOpen) {
                hideDropdown();
            } else {
                showDropdown();
            }
        });
    }
    
    // Dropdown menu hover events
    if (sportsDropdown) {
        sportsDropdown.addEventListener('mouseenter', () => {
            clearTimeout(dropdownTimeout);
        });
        sportsDropdown.addEventListener('mouseleave', hideDropdown);
        
        // Dropdown item clicks
        const dropdownItems = sportsDropdown.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                dropdownItems.forEach(i => i.classList.remove('active'));
                // Add active class to clicked item
                this.classList.add('active');
                // Update navigation text
                if (sportsNav) {
                    sportsNav.textContent = this.textContent;
                }
                // Hide dropdown
                hideDropdown();
            });
        });
    }
    
    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================
    const searchButton = document.getElementById('searchButton') || document.querySelector('.loupe');
    const searchContainer = searchButton ? searchButton.closest('.overlap') : null;
    
    let isSearchExpanded = false;
    
    function toggleSearch() {
        isSearchExpanded = !isSearchExpanded;
        
        if (isSearchExpanded) {
            searchContainer.classList.add('expanded');
            // Focus on search input if it exists
            const searchInput = searchContainer.querySelector('input');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 300);
            }
        } else {
            searchContainer.classList.remove('expanded');
        }
    }
    
    // Search functionality for loupe button
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (!isSearchExpanded) {
                toggleSearch();
            } else {
                // Perform search functionality here
                console.log('Performing search...');
            }
        });
    }
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (isSearchExpanded && !searchContainer.contains(e.target)) {
            toggleSearch();
        }
    });
    
    // ==========================================
    // LOGIN PANEL FUNCTIONALITY
    // ==========================================
    const avatarButton = document.getElementById('avatarButton') || document.querySelector('.avatar');
    const loginPanel = document.getElementById('loginPanel');
    
    let isLoginOpen = false;
    let loginTimeout;
    
    function showLogin() {
        clearTimeout(loginTimeout);
        loginPanel.classList.add('active');
        isLoginOpen = true;
    }
    
    function hideLogin() {
        loginTimeout = setTimeout(() => {
            loginPanel.classList.remove('active');
            isLoginOpen = false;
        }, 200);
    }
    
    // Avatar button events
    if (avatarButton) {
        avatarButton.addEventListener('mouseenter', showLogin);
        avatarButton.addEventListener('mouseleave', hideLogin);
        avatarButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (isLoginOpen) {
                hideLogin();
            } else {
                showLogin();
            }
        });
    }
    
    // Login panel hover events
    if (loginPanel) {
        loginPanel.addEventListener('mouseenter', () => {
            clearTimeout(loginTimeout);
        });
        loginPanel.addEventListener('mouseleave', hideLogin);
        
        // Login form functionality
        const loginForm = loginPanel.querySelector('.login-form');
        const loginSubmit = loginPanel.querySelector('.login-submit');
        
        if (loginSubmit) {
            loginSubmit.addEventListener('click', function(e) {
                e.preventDefault();
                // Handle login submission here
                console.log('Login submitted');
                hideLogin();
            });
        }
        
        // Remember me checkbox
        const rememberCheckbox = loginPanel.querySelector('.remember-checkbox');
        if (rememberCheckbox) {
            rememberCheckbox.addEventListener('change', function() {
                console.log('Remember me:', this.checked);
            });
        }
        
        // Forgot password and register links
        const forgotPassword = loginPanel.querySelector('.forgot-password');
        const registerLink = loginPanel.querySelector('.register-link');
        
        if (forgotPassword) {
            forgotPassword.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Forgot password clicked');
                // Handle forgot password functionality
            });
        }
        
        if (registerLink) {
            registerLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Register clicked');
                // Handle register functionality
            });
        }
    }
    
    // Close login panel when clicking outside
    document.addEventListener('click', function(e) {
        if (isLoginOpen && !avatarButton.contains(e.target) && !loginPanel.contains(e.target)) {
            hideLogin();
        }
    });
    
    // ==========================================
    // PAGINATION FUNCTIONALITY
    // ==========================================
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const paginationPrev = document.querySelector('.pagination-prev');
    const paginationNext = document.querySelector('.pagination-next');
    
    let currentPage = 1;
    
    // Pagination number clicks
    paginationNumbers.forEach(number => {
        if (number.classList.contains('pagination-dots')) return;
        
        number.addEventListener('click', function() {
            // Remove active class from all numbers
            paginationNumbers.forEach(n => n.classList.remove('active'));
            // Add active class to clicked number
            this.classList.add('active');
            currentPage = parseInt(this.textContent);
            console.log('Page changed to:', currentPage);
            // Here you would typically load new content
            loadPage(currentPage);
        });
    });
    
    // Previous button
    if (paginationPrev) {
        paginationPrev.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updateActivePage();
                loadPage(currentPage);
            }
        });
    }
    
    // Next button
    if (paginationNext) {
        paginationNext.addEventListener('click', function() {
            const maxPage = 122; // Based on your design
            if (currentPage < maxPage) {
                currentPage++;
                updateActivePage();
                loadPage(currentPage);
            }
        });
    }
    
    function updateActivePage() {
        paginationNumbers.forEach(n => n.classList.remove('active'));
        const currentPageElement = Array.from(paginationNumbers).find(n => 
            parseInt(n.textContent) === currentPage
        );
        if (currentPageElement) {
            currentPageElement.classList.add('active');
        }
    }
    
    function loadPage(page) {
        console.log('Loading page:', page);
        // Here you would typically make an AJAX request to load new articles
        // For now, we'll just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // ==========================================
    // TAB FUNCTIONALITY (Live Results)
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            const tabName = this.textContent;
            console.log('Tab switched to:', tabName);
            
            // Here you would typically load different content based on the tab
            loadTabContent(tabName);
        });
    });
    
    function loadTabContent(tabName) {
        // Mock function to simulate loading different tab content
        const resultsList = document.querySelector('.results-list');
        if (resultsList) {
            console.log('Loading content for tab:', tabName);
            // Here you would update the results based on the selected tab
        }
    }
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // NEWSLETTER ARROW CLICK
    // ==========================================
    const newsletterArrow = document.querySelector('.newsletter-arrow');
    if (newsletterArrow) {
        newsletterArrow.addEventListener('click', function() {
            // Scroll to main newsletter section
            const mainNewsletter = document.querySelector('.newsletter-bottom');
            if (mainNewsletter) {
                mainNewsletter.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // ==========================================
    // VIDEO PLAY BUTTON
    // ==========================================
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            console.log('Video play clicked');
            // Here you would typically start video playback
            // For now, we'll just add a visual feedback
            this.style.background = 'rgba(255, 255, 255, 0.3)';
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 200);
        });
    }
    
    // ==========================================
    // MORE LINKS FUNCTIONALITY
    // ==========================================
    const moreLinks = document.querySelectorAll('.more-link');
    
    moreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            console.log('More link clicked:', linkText);
            
            if (linkText.includes('News')) {
                // Handle "More News" click
                console.log('Loading more news...');
            } else if (linkText.includes('Results')) {
                // Handle "More Results" click
                console.log('Loading more results...');
            }
        });
    });
    
    // ==========================================
    // SUBSCRIBE BUTTONS
    // ==========================================
    const subscribeButtons = document.querySelectorAll('.magazine-subscribe, .newsletter-subscribe-btn, .login-submit');
    
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('Subscribe/Action button clicked:', buttonText);
            
            // Add visual feedback
            const originalBackground = this.style.background;
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            
            setTimeout(() => {
                this.style.background = originalBackground;
            }, 200);
        });
    });
    
    // ==========================================
    // KEYBOARD ACCESSIBILITY
    // ==========================================
    
    // Escape key to close dropdowns/panels
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (isDropdownOpen) {
                hideDropdown();
            }
            if (isLoginOpen) {
                hideLogin();
            }
            if (isSearchExpanded) {
                toggleSearch();
            }
        }
    });
    
    // Tab navigation for dropdowns
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && isDropdownOpen) {
            const dropdownItems = sportsDropdown.querySelectorAll('.dropdown-item');
            const focusedElement = document.activeElement;
            const currentIndex = Array.from(dropdownItems).indexOf(focusedElement);
            
            if (e.shiftKey) {
                // Shift+Tab - go to previous item
                if (currentIndex > 0) {
                    e.preventDefault();
                    dropdownItems[currentIndex - 1].focus();
                }
            } else {
                // Tab - go to next item
                if (currentIndex < dropdownItems.length - 1) {
                    e.preventDefault();
                    dropdownItems[currentIndex + 1].focus();
                }
            }
        }
    });
    
    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Debounced window resize handler
    const handleResize = debounce(() => {
        // Handle any resize-specific logic here
        console.log('Window resized');
    }, 250);
    
    window.addEventListener('resize', handleResize);
    
    // ==========================================
    // LOADING STATES
    // ==========================================
    
    function showLoading(element) {
        if (element) {
            element.style.opacity = '0.6';
            element.style.pointerEvents = 'none';
        }
    }
    
    function hideLoading(element) {
        if (element) {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
        }
    }
    
    // ==========================================
    // CONSOLE LOG FOR DEBUGGING
    // ==========================================
    console.log('Category page interactions loaded successfully');
    
});

// ==========================================
// GLOBAL UTILITY FUNCTIONS
// ==========================================

// Function to simulate API calls
function simulateApiCall(action, data = {}) {
    return new Promise((resolve) => {
        console.log(`Simulating API call: ${action}`, data);
        setTimeout(() => {
            resolve({ success: true, message: `${action} completed` });
        }, 1000);
    });
}

// Function to show toast notifications (if you want to implement them later)
function showToast(message, type = 'info') {
    console.log(`Toast: [${type.toUpperCase()}] ${message}`);
    // Here you could implement actual toast notifications
}

// Function to handle form submissions
function handleFormSubmission(formData, endpoint) {
    showLoading(document.querySelector('.login-submit'));
    
    simulateApiCall('form_submission', { formData, endpoint })
        .then(response => {
            showToast(response.message, 'success');
        })
        .catch(error => {
            showToast('An error occurred', 'error');
            console.error('Form submission error:', error);
        })
        .finally(() => {
            hideLoading(document.querySelector('.login-submit'));
        });
}