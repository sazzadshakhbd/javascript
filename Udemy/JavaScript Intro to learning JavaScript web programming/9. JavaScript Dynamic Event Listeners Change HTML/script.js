var myOutput = document.getElementById('output');
var myButton = document.getElementById('myButton');
var myNumber = 0;
// console.log(myButton);
// console.log(this.myButton);
// myButton.onclick = function myfunction() { console.log('clicked') };
myButton.onclick = function () { myFunction() };


function myFunction() {
  myNumber++;
  document.getElementById('output').innerHTML = "Clicked me" + " " + myNumber;
}

// var output = 'Nothing <br> Next Line';
// myOutput.innerHTML = output;
