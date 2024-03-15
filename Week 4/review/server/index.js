// importing the packages we need
const express = require('express')
const cors = require('cors')

// Creating an instance of express to use.
const app = express()

// Middleware - sets up the server to be able to use json and cors
app.use(express.json())
app.use(cors())

// Endpoints
app.get('/get', (req, res) => {
    res.status(200).send('Request handled')
})

app.get('/get/:id', (req, res) => {
    console.log(req.params)
    console.log(req.params.id)

    res.status(200).send(`The param you sent was ${req.params.id}`)
})


app.post('/post', (req, res) => {
    console.log(req.body)
    const {name, hobbies} = req.body  // let name = 'Jeff', let hobbies = 'Board Games'

    res.status(200).send(`The body you sent contains ${name} and ${hobbies}`)
})


// Sets up the server to listen for requests from the front end
app.listen(3434, () => console.log('Server 3434 reporting for duty'))