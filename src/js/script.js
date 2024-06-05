document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    });
});