// Sticky Navigation Bar
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Seleccionamos todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu__ul a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace

    // Obtenemos el ID del destino desde el atributo href
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Comprobamos si existe la sección
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
        behavior: 'smooth'
      });

      // Cierra el menú hamburguesa si está abierto (en mobile)
      const menuCheckbox = document.querySelector('.menu');
      if (menuCheckbox && menuCheckbox.checked) {
        menuCheckbox.checked = false;
      }
    }
  });
});



const images = {
  todo: [
    'img/image--one.png',
    'img/image--two.png',
    'img/image--three.png',
    'img/image--four.png',
    'img/image--five.png',
    'img/image--six.png',
  ],
  ilustraciones: ['img/image--one.png', 'img/image--two.png', 'img/image--three.png'],
  digitales: ['img/image--six.png'],
  otros: ['img/image--four.png', 'img/image--five.png'],
};

function showCategory(category) {
  const grid = document.getElementById('images-grid');
  grid.innerHTML = ''; 

  const categoryImages = images[category];
  categoryImages.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image; 
    grid.appendChild(imgElement);
  });
}

showCategory('todo');
  
