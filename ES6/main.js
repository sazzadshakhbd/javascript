"use strict";

let tree = {
  mango: "One Peace",
  Lichu: "Two Peace",
  Alovera: "Three Peace",
  Pudina: "Nine Peace",
};
for (let props in tree) {
  console.log(props + " = " + tree[props]);
}
