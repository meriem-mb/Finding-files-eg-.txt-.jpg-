const fs = require('fs');
const path = require('path');

function searchFilesWithExtension(directory, extension) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            if (path.extname(file) === extension) {
                console.log(`Found file: ${file}`);
            }
        });
    });
}

// Example Usage
searchFilesWithExtension('./', '.txt');
