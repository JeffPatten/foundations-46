const baseUrl = 'http://localhost:3434'

// Grab the element
const getButton = document.querySelector('#get-button')
const postButton = document.querySelector('#post-button')
const inputElem = document.querySelector('#input-element')
const paramButton = document.querySelector('#param-button')

// Write its functionality - write a function
function getFunc() {
    axios.get(`${baseUrl}/get`)
    .then((res) => {
        console.log(res.data)
    })
}

function postFunc() {
    let myObj = {
        name: 'Jeff',
        hobbies: 'Board Games'
    }
    
    axios.post(`${baseUrl}/post`, myObj)
    .then((res)=> {
        console.log(res.data)
    })
}

function paramFunc(){
    const id = inputElem.value

    axios.get(`${baseUrl}/get/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
}

// attach the functionality to an element - add an event listener

getButton.addEventListener('click', getFunc)
postButton.addEventListener('click', postFunc)
paramButton.addEventListener('click', paramFunc)