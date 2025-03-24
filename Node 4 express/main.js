const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) 

app.get('/', (req, res) => {
  res.send('Hello World! wahaj')
});
// app.get('/about', (req, res) => {
//   res.send('Hello about!')
// });
// app.get('/contact', (req, res) => {
//   res.send('Hello contact!')
// });

app.get('/blog/:slug', (req, res) => {
    //for URL : http://127.0.0.1:3000/blog/javacript?mode=dark

    console.log(req.params); //will output { slug: 'javacript' }
    console.log(req.query); // will output  { mode: 'dark' }

  res.send(`Hello New ${req.params.slug} `)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})