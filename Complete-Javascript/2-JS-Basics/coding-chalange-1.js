var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;

var BMIMark = markMass / (markHeight * markHeight);
var BMIJohn = johnMass / (johnHeight * johnHeight);
console.log(BMIMark, BMIJohn);

var markHeightBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher then John's? " + markHeightBMI);