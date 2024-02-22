/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

/* 1 */
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

/* User Input */
inquirer
  .prompt([
    {
      name: 'url',
      message: 'Example:\nhttps://www.google.com/\ntype url to generate QR Image:'
    },
  ])
  .then(answers => {
    console.log('Answer:', answers.url);

    /* User input to Qr-image */
    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_link.png'));

    /* User Input to txt */
    fs.writeFile("qr_link.txt",answers.url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  });