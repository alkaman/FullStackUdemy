function isLeap(year) {
    
/**************Don't change the code above****************/    
    var answer;
        //Write your code here.    
    if( (year % 4 )!== 0){
        answer = "Not leap year.";
    } 
    else
    {
        if( (year % 100 ) !== 0)
        {
            answer = "Leap year.";
        }
        else 
        {
            if( (year % 400 ) === 0)
            {
                answer = "Leap year.";
            }
            else 
            {
                answer = "Not leap year.";
            }  
        }
    }
    return answer;

/**************Don't change the code below****************/    

}