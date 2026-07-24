/***Variables***/
var userName;
var food;



/***main code ***/
 
alert("wellcome to Ryu's ramen");
userName = prompt("what is your name");
alert("Hello " +userName+ " i will take youre order");
 food = prompt("we currently have dimsum, ramen, porkbelly and chicken feet");
 alert("so you would like " +food+ " is that correct?");
 alert("that will be 12bucks please pay at the counter");
 if(food == "dimsum"){
    alert("thank you for ordering dimsum");
    if(food == "ramen"){
        alert("thank you for ordering ramen");
        if(food == "porkbelly"){
            alert("thank you for ordering porkbelly");
            if(food == "chicken feet"){
                alert("thank you for ordering chicken feet");
            }
        }