var firstName, age;
firstName = 'john';
age = 14;

age >= 18 ? console.log(firstName + ' drinks bear') :
  console.log(firstName + ' drinks juice');

age <= 4 ? console.log(firstName + ' is older') : console.log(firstName + ' is a baby ');

if (age <= 14) {
  console.log(firstName + ' is older');
} else {
  console.log(firstName + ' is a baby ');
}