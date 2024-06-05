const button = document.getElementById('button')
const main = document.querySelector('main')
const theme = document.getElementById('themeSwitcher')

theme.addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('$secundary-color', '#FFDFC0')
        root.style.setProperty('$font-color', '#341f0a')
        root.style.setProperty('$primary-color', '##ffffff')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('$secundary-color', '#ffffff')
        root.style.setProperty('$font-color', '#FFDFC0')
        root.style.setProperty('$primary-color', '#341f0a')
        main.dataset.theme = 'dark'
    }
})
