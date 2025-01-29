const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {

    body.classList.toggle('dark-mode');


    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');


    if (body.classList.contains('dark-mode')) {
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
});
