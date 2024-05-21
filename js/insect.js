const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const won = document.getElementById('winning')
const loss = document.getElementById('lost')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click',() => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const alt = img.getAttribute('alt')
        const src = img.getAttribute('src')
        screens[1].classList.add('up')
        selected_insect = {src,alt}
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt=${selected_insect.alt} style = "transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 1000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    if (m < 10) {
        m = `0${m}`
    }
    if (s < 10) {
        s = `0${s}`
    }
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
    if (score >= 60 && seconds <= 30) {
        message.classList.remove('visible')
        setTimeout(winMessage, 500)
    }
    if (score < 60 && seconds > 30)
    {
        message.classList.remove('visible')
        setTimeout(lossMessage, 500)
    }
}


function winMessage() {
    won.classList.add('visible')
}

function lossMessage() {
    loss.classList.add('visible')
}

function increaseScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x,y}
}




code = document.getElementById('toggle')
container = document.querySelector('.ccontainer')
button = document.querySelector('.fa-solid')

code.addEventListener('click', () => {
    container.classList.toggle('inactive')
    button.classList.toggle('fa-angle-down')
    button.classList.toggle('fa-angle-up')
})


