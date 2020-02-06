var myOutput = document.getElementById("output");
var output = "Nothing";
function myFunction(a, b) {
  result = a + b;
  return result;
}
alert("Hello");
output = myFunction(5, 5);

myOutput.innerHTML = output;
