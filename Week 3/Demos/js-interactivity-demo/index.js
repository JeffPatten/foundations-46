// console.log('hello world')


/* ----------------- COUNTER CODE ------------------ */

let count = 0
const h1Counter = document.querySelector('#counter')
// console.log(h1Counter)

function increase () {
    count++
    // console.log(count)
    h1Counter.textContent = count
}

function decrease () {
    count--
    h1Counter.textContent = count
}

function reset () {
    count = 0
    h1Counter.textContent = count
}

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)


/* ----------------- THEME SWITCHER CODE ------------------ */

function themeSelector (event) {
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    
    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

const themeBtns = document.querySelectorAll('.theme-buttons')

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', themeSelector)
}

