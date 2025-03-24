const fs = require("fs");
const path = require("path");

fs.readdir("clutter" , (err,files)=>{
    if(err){
        console.error("Error Reading Directory:",err.message);
        return;
    }

    const uniqueExtension = new Set(files.map(file=> path.extname(file).slice(1)));
    console.log("Unique File Extension", uniqueExtension);

    uniqueExtension.forEach(ext => {
        const folderpath = path.join(__dirname, `${ext}_folder`);
        if(!fs.existsSync(folderpath)){
            fs.mkdirSync(folderpath , {recursive:true});
        }
    
        files.forEach(file=>{
            if(path.extname(file).slice(1) === ext){
                const oldpath = path.join(__dirname,"clutter" , file);
                   const newpath = path.join(folderpath,file);

                fs.renameSync(oldpath , newpath);
                console.log(`${file} moved to ${folderpath}`); 
            }
        });
    });
});