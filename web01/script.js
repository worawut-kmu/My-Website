console.log('Hello My Website');

// simple dark/light theme toggle
const toggle = document.getElementById('toggleTheme');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}