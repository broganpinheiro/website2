code = document.getElementById('toggle')
container = document.querySelector('.ccontainer')
button = document.querySelector('.fa-solid')

code.addEventListener('click', () => {
    container.classList.toggle('inactive')
    button.classList.toggle('fa-angle-down')
    button.classList.toggle('fa-angle-up')
})


