const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

app.use('/blog', blog)

// built-in middleware 
app.use(express.static("public"))

// middleware 1
// Client Request  --->  Middleware  --->  Route Handler  --->  Response

app.use((req, res, next) => {
    console.log('LOGGED1')
    next()
})

// middleware 2
// Client Request  --->  Middleware  --->  Route Handler  --->  Response

app.use((req, res, next) => {
    console.log(req.headers);
    req.username = "wahaj"
    fs.appendFileSync("logs.txt", ` Request: at ${Date.now()} is a ${req.method}\n`)
    // console.log(` Request: at ${Date.now()} is a ${req.method}`)
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World2')
})

app.get('/about', (req, res) => {
    res.send('Welcom to About Page' + " " + req.username)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})