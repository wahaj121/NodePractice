// for show hell problem 
fs.writeFile("wahaj1.txt" , "2nd txt file created",()=>{
        console.log("done");
        fs.readFile("wahaj.txt" ,(error ,data)=>{
            console.log(error ,data.toString());
            //again
            fs.writeFile("wahaj1.txt" , "2nd txt file created",()=>{
                    console.log("done");
                    fs.readFile("wahaj.txt" ,(error ,data)=>{
                        console.log(error ,data.toString());
                    //again 
                    fs.writeFile("wahaj1.txt" , "2nd txt file created",()=>{
                            console.log("done");
                            fs.readFile("wahaj.txt" ,(error ,data)=>{
                                console.log(error ,data.toString());
                            //again 
                            fs.writeFile("wahaj1.txt" , "2nd txt file created",()=>{
                                    console.log("done");
                                    fs.readFile("wahaj.txt" ,(error ,data)=>{
                                        console.log(error ,data.toString());
                                    });
                                })    
                            });
                        })    
                    });
                })
        });
    })