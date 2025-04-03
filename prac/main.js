// import { createServer } from 'node:http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.end('<h1>Hello for the live changing code with the help of nodemon  </h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// __dirname & __filename is commanjs module scope function 

// import { a } from "./server.js";
// import ws from "./server.js";
// console.log(a);
// console.log(ws);

import express from 'express';
import about from "./routes/about.js";
const app = express()
const port = 3000

app.use(express.static('public', { index: false }));
app.use('/about' ,about);

app.get('/', (req, res) => {
    res.send('<h1> hello world home page </h1>');
});

app.listen(port, () => {
    console.log(`Exemple app listen on ${port} `);
})
