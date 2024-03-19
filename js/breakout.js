rules = document.getElementById('rules-btn')
hiderules = document.getElementById('close-btn')
toggle = document.querySelector('.rules')


// Rules open and close event handlers
rules.addEventListener('click', () => {
    toggle.classList.add('show')
})

hiderules.addEventListener('click', () => {
    toggle.classList.remove('show')
})



