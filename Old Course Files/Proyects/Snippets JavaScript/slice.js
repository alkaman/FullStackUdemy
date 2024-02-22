var paragraph = prompt("Enter your text (Max 140 characters):");
alert(paragraph.slice(0,140));
alert("paragraph been cut to: " + paragraph.slice(0,140).length + " characters.");

/*short version*/
/*
alert(prompt("Enter your text (Max 140 characters):").slice(0,140));
*/