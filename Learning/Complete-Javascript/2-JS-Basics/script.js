// Lecture 1
console.log("Hello World!");

// Lecture 2 (Variable and Data-types)

var firstName = "Sazzad"; /* Camelcase */
console.log(firstName);

var lastname = "Shakh"; /* String */
var age = 35; /* Number */

var fullAge = true; /* Boolean */
console.log(fullAge);

var job; /* Undefined */
console.log(job);

/* var function = 78;  (Reserved Keyword)
console.log(function); */

// Lecture 3
console.log(firstName + " " + age); // Type coercion

var designation, isMarried;
(designation = "Teacher"), (isMarried = true);
console.log(
  firstName +
    " is a " +
    age +
    " years old. He is a " +
    designation +
    ". Is he Maried? " +
    isMarried
);

// this declearation called a variable mutation
age = "Thirty Five";
designation = "Front End Developer";
isMarried = false;

// alert(
//   firstName +
//     " is a " +
//     age +
//     " years old. He is a " +
//     designation +
//     ". Is he Maried? " +
//     isMarried
// );

// var lastname = prompt("What is your last name?");
// console.log(firstName + " " + lastname);

/* Basics Operator */
var year, sazzadBirthYear, marjiaBirthyear;

now = 2020;
sazzadBirthYear = now - 37;
marjiaBirthyear = now - 23;

console.group(now + 2);
console.group(now * 2);
console.group(now / 2);
console.group(now - 2);

// Logical operator

var adibBirth, nishiBirth;
adibBirth = 12;
nishiBirth = 10;

bothComapre = adibBirth > nishiBirth;
console.log(bothComapre);

// typeof operator
console.log(typeof adibBirth);
console.log(typeof bothComapre);
console.log(typeof "how many types");
var x;
console.log(typeof x);

/***************************
 Operator Precedence
 */

var rahimTillNow = 2020;
var rahimBirthYear = 1989;
var rahimTotalAge = 18;

// Multiple Operators
var isRahimFullAge = rahimTillNow - rahimBirthYear >= rahimTotalAge;
console.log(isRahimFullAge);

// Grouping operator
var rahimTotalBirthAge = rahimTillNow - rahimBirthYear;
var rahimAgeMark = 35;
var rahimAverage = (rahimTotalBirthAge + rahimAgeMark) / 2;
console.log(rahimAverage);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // Output 26
console.log(x, y);

// More Operators

x *= 2;
console.log(x);

x = x + 10;
console.log(x);

x -= 5;
console.log(x);

x++;
console.log(x);
