var firstName = 'Sazzad';
var status = 'Married';

if (status === 'single') {
  console.log(firstName + ' is ' + status);
} else {
  console.log(firstName + ' will hopfully marry soon: ');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is Married ');
} else {
  console.log(firstName + ' will hopfully marry soon: ');
}

var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;

var BMIMark = markMass / (markHeight * markHeight);
var BMIJohn = johnMass / (johnHeight * johnHeight);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI higher then John's");
} else {
  console.log("John's BMI higher then Mark's");
}