// Importing file and path modules
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const removeLogFiles = () => {
    if (fs.existsSync(logsDirectory)) {

        // Reading all the files from logs directory.
        const files = fs.readdirSync(logsDirectory);
    
        // Outputs the names of the files to be deleted to console.
        if (files.length > 0) {
            console.log("Deleting the following files:");
            files.forEach(function (file) {
                console.log(file);
                fs.unlinkSync(path.join(logsDirectory, file));
            }) 
        } 
        else {
            console.log("No files to delete in the Logs directory.");
        }
        
        fs.rmdirSync(logsDirectory);
        console.log("Logs Directory removed")
    }
    else {
        console.log("Logs Directory doesnot exist.")
    }
};

removeLogFiles();