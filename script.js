document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');

    // Verificar si hay una preferencia guardada en localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        actualizarIconos(true);
    }

    // Evento para cambiar el modo
    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');

        // Guardar el estado en localStorage
        if (isDarkMode) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }

        // Actualizar iconos
        actualizarIconos(isDarkMode);
    });

    function actualizarIconos(isDarkMode) {
        if (isDarkMode) {
            moonIcon.style.left = "5px";
            moonIcon.style.opacity = "1";
            sunIcon.style.left = "25px";
            sunIcon.style.opacity = "0";
        } else {
            moonIcon.style.left = "25px";
            moonIcon.style.opacity = "0";
            sunIcon.style.left = "5px";
            sunIcon.style.opacity = "1";
        }
    }
});
