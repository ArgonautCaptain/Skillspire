const subtract = (a, b) => a - b;

const add = (a, b) => a + b;

let a = 5;
let b = 3;

console.log(a);
console.log(b);
console.log(a, "-", b, "=", subtract(a, b));
console.log(a, "+", b, "=", add(a, b));

const sumAll = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

console.log("Sum of all numbers in the array is", sumAll(1, 2, 3));