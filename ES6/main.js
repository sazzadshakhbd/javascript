"use strict";
function result(x, y, ...marks) {
  let sum = 0;
  for (let i of marks) {
    sum = sum + i;
  }

  console.log(sum);
}
result(100, 200, 10, 20, 30, 40, 50, 60);
