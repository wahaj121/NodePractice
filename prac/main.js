import { createServer } from 'node:http';
// import { a } from "./server.js";


// __dirname & __filename is commanjs module scope function 

import ws from "./server.js";
console.log(ws);

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello World for the live changing code with the help of nodemon  </h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// console.log( a );