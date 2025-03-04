// Función para abrir una ventana específica
function openWindow(id) {
  const windowElement = document.getElementById(id); // Selecciona la ventana por ID
  windowElement.style.display = 'block'; // Cambia su estado a visible
  windowElement.style.left = '100px'; // Posición inicial en el escritorio (izquierda)
  windowElement.style.top = '100px'; // Posición inicial en el escritorio (arriba)
}

// Función para cerrar una ventana específica
function closeWindow(id) {
  const windowElement = document.getElementById(id); // Selecciona la ventana por ID
  windowElement.style.display = 'none'; // Oculta la ventana
}

// Sonidos para las ventanas clasicos de windows 95/98 al abrir y cerrar una ventana


// Alternar la visibilidad del menú de inicio
function toggleStartMenu() {
  const startMenu = document.getElementById('startMenu');
  if (startMenu.style.display === 'block') {
    startMenu.style.display = 'none'; // Ocultar si está visible
  } else {
    startMenu.style.display = 'block'; // Mostrar si está oculto
  }
}
// Función para hacer que las ventanas sean arrastrables
function makeDraggable(element) {
  let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

  const header = element.querySelector('.window-header'); // Usamos un encabezado para arrastrar
  if (!header) {
    console.error('No se encontró el encabezado en la ventana.');
    return;
  }

  header.addEventListener('mousedown', (e) => {
    e.preventDefault();

    // Coordenadas iniciales del ratón
    startX = e.clientX;
    startY = e.clientY;

    // Coordenadas iniciales del elemento
    offsetX = element.offsetLeft;
    offsetY = element.offsetTop;

    // Agregar eventos para mover el ratón
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // Función para mover la ventana
  function onMouseMove(e) {
    const dx = e.clientX - startX; // Diferencia horizontal
    const dy = e.clientY - startY; // Diferencia vertical

    // Actualizar posición del elemento
    element.style.left = offsetX + dx + 'px';
    element.style.top = offsetY + dy + 'px';
  }

  // Función para finalizar el arrastre
  function onMouseUp() {
    // Eliminar los eventos de movimiento al soltar el ratón
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

// Aplicar la función a todas las ventanas después de cargarlas
document.querySelectorAll('.window').forEach((win) => {
  makeDraggable(win);
});

//subcarpetas de educacion
function toggleFolder(element) {
  let nestedList = element.nextElementSibling;
  if (nestedList) {
    nestedList.classList.toggle("active");
  }
}


