// Page scaling system

// Function to scale content to fit screen
function scaleContent() {
  const wrapper = document.getElementById('scaleWrapper');
  if (!wrapper) return;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const contentWidth = 1920; // Largeur originale du design

  if (windowWidth < contentWidth) {
    const scale = windowWidth / contentWidth;

    // Set min-height so that after scaling, wrapper is at least 100vh
    wrapper.style.minHeight = (windowHeight / scale) + 'px';

    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.transformOrigin = 'top left';

    // Ajuste la hauteur du body pour correspondre exactement au contenu scalé
    const originalHeight = wrapper.offsetHeight;
    document.body.style.height = (originalHeight * scale) + 'px';
  } else {
    wrapper.style.minHeight = '100vh';
    wrapper.style.transform = 'scale(1)';
    document.body.style.height = 'auto';
  }
}