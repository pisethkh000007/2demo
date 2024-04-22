const fs = require('fs');

// Step 1: Read the content of input.txt
function readFileContents(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

// Step 2: Append "First modification" to the content and write it to output1.txt
function writeFileContents(filePath, contents, callback) {
  fs.writeFile(filePath, contents, 'utf8', (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

// Example usage
const inputFilePath = 'input.txt';
const output1FilePath = 'output1.txt';
const output2FilePath = 'output2.txt';

// Step 1: Read the content of input.txt
readFileContents(inputFilePath, (err, inputContent) => {
  if (err) {
    console.error('Error reading input file:', err);
  } else {
    // Append "First modification" to the content
    const modifiedContent = inputContent + 'First modification';

    // Step 2: Write the modified content to output1.txt
    writeFileContents(output1FilePath, modifiedContent, (err) => {
      if (err) {
        console.error('Error writing to output1 file:', err);
      } else {
        // Step 3: Read the content of output1.txt
        readFileContents(output1FilePath, (err, output1Content) => {
          if (err) {
            console.error('Error reading output1 file:', err);
          } else {
            // Append "Second modification" to the content
            const modifiedOutput1Content = output1Content + 'Second modification';

            // Step 4: Write the modified content to output2.txt
            writeFileContents(output2FilePath, modifiedOutput1Content, (err) => {
              if (err) {
                console.error('Error writing to output2 file:', err);
              } else {
                // Step 5: Read the content of output2.txt and print to the console
                readFileContents(output2FilePath, (err, output2Content) => {
                  if (err) {
                    console.error('Error reading output2 file:', err);
                  } else {
                    console.log('Final output:');
                    console.log(output2Content);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});