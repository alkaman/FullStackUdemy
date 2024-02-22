function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var randomNumber = Math.random()*names.length;
    
    randomNumber = Math.round(randomNumber);

    return ( names[randomNumber] + " is going to buy lunch today!" );
/******Don't change the code below*******/    
}