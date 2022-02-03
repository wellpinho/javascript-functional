// anonimous function
(function (a, b, c) {
  return a + b + c
})

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
