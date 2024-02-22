var yourName = prompt("Input your name");
var lovesName = prompt("Input your love partners name");
var loveScore = Math.random();
loveScore *= 100;
loveScore = Math.round( loveScore ) + 1;
if ( loveScore > 70){
    alert( "love score between " + yourName + " & " + lovesName +" is: " + loveScore + "%, your love is like a hurricane." );    
}
if ( loveScore > 30 && loveScore <= 70){
    alert( "love score between " + yourName + " & " + lovesName +" is: " + loveScore + "%." );
}
if ( loveScore <= 30){
    alert( "love score between " + yourName + " & " + lovesName +" is: " + loveScore + "%, you are like oil and water." );
}
