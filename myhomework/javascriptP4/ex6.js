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
const fileData = readFile('C:/Users/M/OneDrive/Desktop/sabaicodehomework/myhomework/hello.txt');
if (fileData !== null) {
  console.log('File data:', fileData);
}