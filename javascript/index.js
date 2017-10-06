console.log("Inside");
console.warn("Warning");
console.error("abc");
/*
var hungry = true;
var thirsty = true;
if (hungry){
    console.error("I am hungry");
    console.warn("I am very hungry");
}
else if (thristy){
    console.error("I am not hungry");
    console.warn("I am not very hungry");
}
else{
    console.log("I'm bored");
}

var buffetPrice =  function(age){
    var price = 0;
    if (isNaN(age))
    {
        return -1;
    }
    if (age<=0)
        return -1;
    
    if (age<10)
        price = 20;
    else if (age<21)
        price = 30;
    else
        price = 40;
    return price;
}

var myAge = parseInt(prompt("Enter the person's age:"));
var finalprice = buffetPrice(myAge);
if (finalprice ==-1)
{
    alert("Wrong input");    
    console.log ("Input a number from greater than 0");
}
else
    console.log("Final price: " + finalprice);


var mul = function(n,m){
    return (n*m);
}

for (var outer = 2; outer<13;outer++){
    //console.warn("\nMultiplication table: %d", outer);
    for(var inner = 1; inner<13;inner++){
        //string concatenation
        //console.log(outer+" * "+ inner + "= " + mul(outer,inner));
        //string interpolation
       // console.log("%d * %d = %d", outer, inner, mul(outer,inner)); 
    }
}
//How many time does the double loop loop?  11x12

//Do assignment
//Guesing game:  5 tries
//output lower, higher or correct.
//if correct, exit
//after 5 tries, show the answer. 
*/
var TIMES=5;
var toGuess =7;
var counter = 1;
var myGuess =-1;
var result = "";

var evaluate = function(myNum,toGuess){
    if(myNum < toGuess){
        return("higher");
    }
    else if (myNum==toGuess)
    {
        return ("CORRECT!");
    }
    return("lower");
}
while (counter <= TIMES){
    myGuess = parseInt(prompt("Number between 1-10"));
    result = evaluate(myGuess,toGuess);
    console.log("Times: %d my guess: %d, result: %s",counter, myGuess,result);

    if (result == "CORRECT!");
        break;
    counter++;
}


