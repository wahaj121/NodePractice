// import {a ,b ,c, } from "./main.js";
// console.log(a , b , c);


// import wahaj from "./main.js";
// console.log(wahaj); //export any name bcz this is default export 

const a = require("./mymodule.js");
console.log(a ,__dirname);
console.log(a ,__filename);

// (function(exports, require, module, filename, _dirname) {

// // Module code actually lives here

// });




// const { createServer } = require('node:http');


// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
