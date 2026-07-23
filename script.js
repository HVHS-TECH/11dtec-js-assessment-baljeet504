/***Variables***/
var userName;
var food;



/***main code ***/
 
alert("wellcome to Ryu's ramen");
userName = prompt("what is your name");
alert("Hello " +userName+ " i will take youre order");


document.getElementById('myBtn').addEventListener('click', function() {
  food = prompt("would you like dimsum,Ramen or something like that")
});