const fs = require('fs');

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFilePromise(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function processFiles() {
  try {
    const file1Content = await readFilePromise('C:/Users/M/OneDrive/Desktop/sabaicodehomework/myhomework/JavascriptP6/test1.txt');
    const file2Content = await readFilePromise('C:/Users/M/OneDrive/Desktop/sabaicodehomework/myhomework/JavascriptP6/test1.txt');
    
    const combinedContent = file1Content + '\n' + file2Content;
    
    await writeFilePromise('output.txt', combinedContent);
    
    console.log('Files processed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

processFiles();