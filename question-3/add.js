// Importing file and path modules
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Function to create log files.
const createLogFiles = () => {
    // If Logs directory doesnot exist, it creates one.
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
        console.log("Logs directory created.");
    }

    // Change the current directory to logs directory.
    process.chdir(logsDirectory);
    console.log("Current directory changed to Logs directory.");

    // Creating 10 log files.
    for (let i = 0; i < 10; i++) {
        const fileName = `logfiles${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`${fileName} created`);        
    }
};

createLogFiles();