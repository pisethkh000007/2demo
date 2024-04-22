const fs = require('fs').promises;

// Function to read a file using a Promise
function readFilePromise(filePath) {
    return fs.readFile(filePath, 'utf8');
}

// Function to write to a file using a Promise
function writeFilePromise(filePath, data) {
    return fs.writeFile(filePath, data);
}

// Example usage:
readFilePromise('C:/Users/M/OneDrive/Desktop/sabaicodehomework/myhomework/JavascriptP6/test.txt')
    .then(data => {
        console.log('File content:', data);
        // Modify data if needed
        return data.toUpperCase(); // Example modification
    })
    .then(modifiedData => {
        // Write modified data to another file
        return writeFilePromise('output.txt', modifiedData);
    })
    .then(() => {
        console.log('Data has been written to output.txt');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
