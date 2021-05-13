"use strict";

let tree = {
  mango: "One Peace",
  Lichu: "Two Peace",
  Alovera: "Three Peace",
  Pudina: "Nine Peace",
};
console.log(tree["Pudina"]);

let schoolName = {
  class: {
    room: 20,
    field: 1,
  },
  bench: {
    longbench: 10,
    benchColor: "Grey",
  },
  student: {
    boys: 200,
    girls: {
      baby: 100,
      big: 100,
    },
  },
};

console.log(schoolName["student"]["girls"]["big"]);
