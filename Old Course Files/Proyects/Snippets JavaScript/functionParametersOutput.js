function getMilk( money, costPerBottle ) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy " + calcBottles( money, costPerBottle ) + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange( money, costPerBottle );
}

function calcBottles( startingMoney, costPerBottle ){
    var numberOfBottles = Math.floor( startingMoney / costPerBottle );
    //var numberOfBottles = ( startingMoney - ( startingMoney % costPerBottle ) ) / costPerBottle ;
    return numberOfBottles;
}

function calcChange( startingMoney, costPerBottle ){
    var change = startingMoney % costPerBottle;
    return change;
}

console.log("Hello master, here is yourThere was: " + getMilk( 107.3, 1.5 ) + " change.");