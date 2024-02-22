var output = [];
var counter = 1;

function fizzBuzz() {
    if(counter % 3 === 0)
    {
        if(counter % 5 === 0)
        {
            output.push( "Fizzbuzz" );
        }else{
        output.push( "Fizz" );
            }
    }else{
        if( ( counter % 5 === 0 ) )
        {
            output.push( "Buzz" );
        }else
            output.push( counter );
        }
    counter ++;
    console.log( output );
}