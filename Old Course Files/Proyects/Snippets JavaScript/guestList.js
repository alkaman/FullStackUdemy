var guestList = ["Angela","Alan","Roberto","Carlos","Juan","Pedro",];

var guestName = prompt("Input your name:");

if(guestList.includes(guestName)){
    console.log("Welcome " + guestName + " , enter please.");
}
else {
    console.log(guestName + " you are not on the guest list.");
}
