/*const item = document.querySelectorAll('.item')
const h2 = document.querySelectorAll('.h2')


h2.forEach( ( cadaH2 , i )=> {
  h2[i].addEventListener('click', ()=>{

    item.forEach( ( cadaItem , i) => {
      bloque[i].classList.remove('activo')
    })
    item[i].classList.add('activo')
    
  })
})*/

// Obtén la div del acordeón
const accordion = document.querySelector('.accordion');

// Agrega el controlador de eventos para hacer clic en la div del acordeón
accordion.addEventListener('click', function(event) {
  // Verifica si el elemento que se hizo clic es un título del acordeón
  if (event.target.classList.contains('accordion-header')) {
    // Encuentra el contenido del acordeón correspondiente
    const content = event.target.nextElementSibling;

    // Muestra u oculta el contenido del acordeón
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
});