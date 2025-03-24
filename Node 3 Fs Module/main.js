const { error } = require("console");
const fs = require("fs")

console.log("starting");

// fs.writeFileSync("wahaj.txt" ,"wahaj.txt file successfully created"); // this is not work asyncronously therfore use this =>
    fs.writeFile("wahaj1.txt" , "2nd txt file created",()=>{
        console.log("done");
        fs.readFile("wahaj.txt" ,(error ,data)=>{
            console.log(error ,data.toString());
        });
    }) // output starting ,ending ,done
    
    fs.appendFile("wahaj.txt","\nappend text", (e,d)=>{
        console.log(e ,d);
    })

console.log("ending");

// use code before type is common in package.json 