/*
To execute run from hyper console:
copy with ctrl+c:
cd "D:\Alan\Programacion\Web Development\Proyects\Node JS"
Paste with right click.
node index.js
*/
//jshint esversion:6
const fs = require("fs");

fs.copyFileSync("file1.txt","file2.txt");
