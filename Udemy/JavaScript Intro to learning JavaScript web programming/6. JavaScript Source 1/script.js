// Javascript Document
var myOutput = document.getElementById('output');
// Working with variables
var myString = "Sazzad";
var myBoolean = true;
var myNumber = 100;

var myArray = [myString, myNumber];
console.log(myArray);

var myObject = {
  firstName: "Sazzad",
  lastname: "Shakh",
  age: myNumber
}
console.log(myObject);

var myFriend = new Object();
myFriend["firstName"] = "Sazzad";
myFriend["lastName"] = "Shakh";
console.log(myFriend);