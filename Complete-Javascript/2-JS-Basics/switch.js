var firstName = 'John';
var job = 'Web developer';
switch (job) {
  case 'Teacher':
    console.log(firstName + ' is a ' + job);
    break;
  case 'Driver':
    console.log(firstName + ' is a ' + job);
    break;
  case 'Web developer':
    console.log(firstName + ' is a ' + job);
    break;
  default:
    console.log('Nothing Services');
}

var age = 24;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age <= 24 && age > 13:
    console.log(firstName + ' is a teenager');
    break;
  default:
    console.log(firstName + ' is a baby');
}