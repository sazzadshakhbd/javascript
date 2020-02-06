var myOutput = document.getElementById("output");
var myString = 100;
var myNumber = 100;
var output = 'Nothing';

if (myString != myNumber) {
  output = "Same";
} else {
  output = "Different";
}

myOutput.innerHTML = output;