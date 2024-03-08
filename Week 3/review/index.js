let pizza1 = document.querySelector('#pizza1')
let pizza2 = document.querySelector('#pizza2')
let pizza3 = document.querySelector('#pizza3')
let pizzaForm = document.querySelector('form')

const pepperoni = () => {
    alert(`Pepperoni is the best!`)
}

const bbq = () => {
    alert(`Everyone loves barbeque chicken!`)
}

const hawaiian = () => {
    alert(`..Why is there pineapple on my pizza?`)
}

const suggestion = (e) => {
    e.preventDefault()

    alert(`Great Suggestion! We'll get to it in 10 business years`)
}

pizza1.addEventListener('mouseover', pepperoni)
pizza2.addEventListener('click', bbq)
pizza3.addEventListener('dblclick', hawaiian)

pizzaForm.addEventListener('submit', suggestion)