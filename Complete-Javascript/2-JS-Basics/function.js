function calculateAge(birthYear) {
  return 2020 - birthYear;
}
var johnAge = calculateAge(1998);
var mikeAge = calculateAge(1934);
var maryAge = calculateAge(1983);
console.log(johnAge, mikeAge, maryAge);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retire = 65 - age;

  if (retire > 0) {
    console.log(firstName + ' retires in ' + retire + ' years.');
  } else {
    console.log(firstName + ' is already retired');
  }
}
yearsUntilRetirement(1998, 'John');
yearsUntilRetirement(1954, 'Mike');
yearsUntilRetirement(1969, 'Mary');