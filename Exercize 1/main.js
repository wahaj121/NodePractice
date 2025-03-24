// You have to write a Node.js program to clear clutter inside
// of a directory and organize the contents of that directory
// into different folders

// for example, these files become
// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf
// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

// const fs = require("fs");
// const path = require("path");

// fs.readdir("clutter", (err, files) => {

//     if (err) {
//         throw new Error("error");

//     } else {
//         const allfiles = files
//         // path.extname(files)
//         const extname = new Set(allfiles.map(ext => ext.split('.').pop()));
//         console.log(extname);
//     }
//     const folderPath = (path.join(__dirname, `myfolder ,${path.extname}`), { recursive: true });
//     fs.mkdirSync(folderPath);
//     fs.renameSync(allfiles, folderPath, (err) => {
//         if (err) {
//             console.log("file not moved");
//         } else {
//             console.log("file moved");
//         }
//     }
//     )
// }
// )


const fs = require("fs");
const path = require("path");

fs.readdir("clutter", (err, files) => {
    if (err) {
        console.error("Error reading directory:", err.message);
        return;
    }

    const uniqueExtensions = new Set(files.map(file => path.extname(file).slice(1)));
    console.log("Unique File Extensions:", uniqueExtensions);

    uniqueExtensions.forEach(ext => {
        const folderPath = path.join(__dirname, `myfolder_${ext}`);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        files.forEach(file => {
            if (path.extname(file).slice(1) === ext) {
                const oldPath = path.join(__dirname, "clutter", file);
                const newPath = path.join(folderPath, file);

                fs.renameSync(oldPath, newPath);
                console.log(`${file} moved to ${folderPath}`);
            }
        });
    });
});
