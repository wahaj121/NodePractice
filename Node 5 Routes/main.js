const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("this is get request")
  res.send('Hello Worl21!')
})
app.post('/', (req, res) => {
    console.log("this is post request ");
  res.send('Hello Wordl post!')
})

// app.put('/', (req, res) => {
//     console.log("this is Put request ");
//   res.send('Hello World put!')  
// })

// show html file 

app.get('/index', (req, res) => {
    console.log("this is index ");
  res.sendFile('template/index.html' , {root: __dirname})  
})

// response.json
app.get('/api', (req, res) => {
  res.json({a:1,b:2})  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});