// anonimous function
// IIFE = Immediately Invoked Function Expression
(function (a, b, c) {
  console.log(a + b + c)
})(1,2,3);

(function () {
  const x = 300
  console.log(x)
})();

(() => console.log('Arrow #02'))();

// function expression
const sum = function (a, b) {
  return a + b
}

const result = sum(5, 10)
console.log(result)

const newSum = sum
console.log(newSum(10,10))

const x = result
console.log(x * 5)
