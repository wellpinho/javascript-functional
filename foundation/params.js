function logParams(a,b,c) {
  console.log(a, b, c)
}

logParams(1,2,3)

function logParams2(a,b,c) {
  console.log(a, b, c)
}

logParams(4,5,6,7,8,9)

function logParams3(a,b,c) {
  console.log(a, b, c)
}

const x = logParams(4,5,6)
console.log(x) // undefined

function defaultParams(a,b,c = 3) {
  console.log(a,b,c)
}

defaultParams(7,8,9)
defaultParams(7,8) // 7 8 3
defaultParams(7) // 7 undefined 3

// spread/rest
function logNum(b, ...num) {
  Array.isArray(b) ? console.log('num is an array') : console.log('num is not an array')
  num.map((res) => console.log(res))
}

logNum(1, 2, 3, 4, 5, 6)