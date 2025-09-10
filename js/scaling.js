// Page scaling system

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