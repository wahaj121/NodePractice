import fs from 'fs/promises';
let a = await fs.readFile("wahaj.txt");

// let b = await fs.writeFile("wahaj.txt" , "\nthis is amazimg promise"); //only write 
let b = await fs.appendFile("wahaj.txt" , "\nthis is amazimg promise"); //updated without delete prev code/text

console.log(a.toString());