// Part 1
/*
const fs = require("fs");

fs.writeFile("Message.txt","Hello world!",(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
*/

// Part 2
const fs = require("fs");

fs.readFile('message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 