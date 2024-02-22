var yourName = prompt("What is your name?").toLowerCase();
var firstLetter = (yourName.slice(0,1)).toUpperCase();
alert("Hello, " + firstLetter + yourName.slice(1,yourName.length) + ".");

/* Short Code*/
// alert("Hello, " + prompt("What is your name?").slice(0,1)).toUpperCase() + prompt("What is your name?").slice(1,yourName.length).toLowerCase() + ".");