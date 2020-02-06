// Javascript Document
var myOutput = document.getElementById('output')
// Working with variables
var myString = '1010';
var myBoolean = false;
var myNumber = 10;
var myArray = ['Hello 2', 100];
var myObject = {
  firstName: "Sazzad",
  lastName: "Shakh"
}
var output = "Nothing";

function myFunction(a, b) {
  var myNumberX = myNumber + a + b;
  myNumber = myNumber * 2;
  // console.log(myNumber);
  return (myNumber);
}

// output = myFunction(5, 5);
// console.log(myNumber);

// output += myFunction(5, 5);
// output += myFunction("Sazzad", "shakh");
output += myFunction(232315, 1335);

myOutput.innerHTML = output;