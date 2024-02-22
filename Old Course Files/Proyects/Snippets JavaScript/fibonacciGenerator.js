function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var output = [0,1];
    if(n <= 1){
        output.pop();
    }else{
        for( var i = 0; i < (n - 2); i++ ){
            output.push( output[i] + output[i+1] );
        }
    }
    
    return output;
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}