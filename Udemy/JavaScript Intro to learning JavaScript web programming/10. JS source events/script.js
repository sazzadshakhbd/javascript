// Javascript Document Object Model
// var myOutput = document.getElementById('output');
var myNumber = 0;
var myClass = document.getElementsByClassName('col-md-3');

function myFunction() {
  myNumber++;
  document.getElementById('output').innerText = "Clicked me " + myNumber;
}

for (var i = 0; i < myClass.length; i++) {
  myClass[i].addEventListener('click', myFunction);
}