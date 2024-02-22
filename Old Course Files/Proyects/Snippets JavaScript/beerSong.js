function beerSong(){
    var counter = 99;
    while ( counter > 0 )
    {
        if( ( ( counter - 1 ) > 2 ) ){
            console.log(  counter + " bottles of beer on the wall. " +  counter + " bottles of beer.");
            console.log(  "Take one pass it around. " +   (counter - 1 ) + " bottles of beer.");
        }else if (counter !== 1) {
            console.log(  counter + " bottles of beer on the wall. " +  counter + " bottles of beer.");
            console.log(  "Take one pass it around. " + (counter - 1 ) + " bottle of beer.");
        }else{
            console.log(  counter + " bottle of beer on the wall. " +  counter + " bottle of beer.");
            console.log(  "Take one pass it around. No more bottles of beer on the wall, no more bottles of beer");
        }
        counter --;
    }
    
    console.log( "Go to the store and buy some more, 99 bottles of beer on the wall..." );
}