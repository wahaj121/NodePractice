import express from "express";
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    // Resolving the current directory using import.meta.url
    const __dirname = path.resolve(); // Ensures it's an absolute path from the current directory

    // Using path.join to properly join the current directory with templates/index.html
    const filePath = path.join(__dirname, 'templates', 'index.html');

    res.sendFile(filePath);  // Correct file path
});

export default router;  // ES6 export
