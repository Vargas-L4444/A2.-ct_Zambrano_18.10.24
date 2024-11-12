// Selección de pestañas
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// Función para activar la pestaña seleccionada
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Quitar la clase 'active' de todas las pestañas y contenido
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Añadir la clase 'active' a la pestaña y contenido correspondiente
        link.classList.add('active');
        document.getElementById(link.getAttribute('data-tab')).classList.add('active');
    });
});
