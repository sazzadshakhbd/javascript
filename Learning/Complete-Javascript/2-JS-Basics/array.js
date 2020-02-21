var names = ['John', 'Mark', 'Jane'];
var years = [1999, 1969, 1984];
console.log(names[2]);

names[1] = 'Ben';
console.log(names);

names.push('Mary');
console.log(names);

var stuart = ['John', 'Smith', 1990, 'teacher', false];
console.log(stuart);

stuart.push('blue');
console.log(stuart);

stuart.unshift('Mr');
console.log(stuart);

stuart.pop();
console.log(stuart);

stuart.pop();
console.log(stuart);

stuart.shift();
console.log(stuart);

console.log(stuart.indexOf('teacher'));
console.log(stuart.indexOf(34));

var isDesigner = stuart.indexOf('Designer') === -1 ? 'Stuart is not a Designer' : 'Stuart is a Designer';
console.log(isDesigner);