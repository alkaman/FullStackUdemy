/*Code for more Readabilty*/
var paragraph = prompt("Enter your text");
var paragraphCount = paragraph.length;
var maxCharacters = 140;
alert("You have written " + paragraphCount + " characters, you have " + (maxCharacters-paragraphCount) + " characters left.");

/*Short Code*/
/*
var paragraph = prompt("Enter your text");
alert("You have written " + paragraph.length + " characters, you have " + (140-paragraph.length) + " characters left.");
*/