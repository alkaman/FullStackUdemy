function getMilk( money ) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy " + ( ( money - ( money % 1.5 ) ) / 1.5 ) + " bottles of milk.");
    console.log("Buy " + (Math.floor( money / 1.5 )) + " bottles of milk.");
    console.log("There was: " + ( money % 1.5 ) + " money left.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk( 107.3 );