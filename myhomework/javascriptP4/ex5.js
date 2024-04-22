const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

const filePath = 'C:/Users/M/OneDrive/Desktop/sabaicodehomework/myhomework/javascriptP4/hello.txt';
const fileData = readFile(filePath);

if (fileData !== null) {
  console.log('File data:', fileData);
}