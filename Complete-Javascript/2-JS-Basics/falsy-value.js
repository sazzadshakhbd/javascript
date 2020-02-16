//  Falsy value = 0, undefined, nul, NaN
var height = 0;

if (height || height === 0) {
  console.log('Height is defined');
} else {
  console.log('Height is undefined');
}

// Equalite Operator

var numbers = 36;
if (numbers === '36') {
  console.log('The == operator is type coercion');
}