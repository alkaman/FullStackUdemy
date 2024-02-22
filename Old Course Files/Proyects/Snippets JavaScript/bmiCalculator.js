function bmiCalculator( weight, height ){
    return (weight/(height*height));
}
/* Using Math.pow */
function bmiCalculator( weight, height ){
    return ( weight / Math.pow( height , 2 ) );
}
/* Using Math.pow and round*/
function bmiCalculator3( weight, height ){
    return Math.round ( ( weight / Math.pow( height , 2 ) ) );
}


function bmiCalculator2 (weight, height) {
    var bmi = Math.round ( ( weight / Math.pow( height , 2 ) ) );
    var interpretation;
    if(bmi < 18.5)
    {
        interpretation = ( "Your BMI is " + bmi + ", so you are underweight." );
    } else{
        if(bmi >= 18.5 && bmi <= 24.9)
        {
            interpretation = ( "Your BMI is " + bmi + ", so you have a normal weight." );
        } else {
            interpretation = ( "Your BMI is " + bmi + ", so you are overweight." );
        }
    }
    return interpretation;