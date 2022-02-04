// create a range function
// range(5) => [1,2,3,4,5]
// range(6,11) => [6,7,8,9,10,11]
// range(10,19, 2) => [10,12,14,16,18]
// range(6, 2) => [6,5,4,3,2,1]
// range(8, -3, 4) => [8,4,0]

function range1(num) {
  const arr = []
  for (let i = 0; i <= num; i++) {
    arr.push(i)
  }

  return arr
}
console.log(range1(5)) // [ 0, 1, 2, 3, 4, 5 ]

function range2(a, b) {
  const arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }

  return arr
}
console.log(range2(6, 11)) // [ 6, 7, 8, 9, 10, 11 ]

function range3(a, b) {
  const arr = []
  for (let i = a; i <= b; i += 2) {
    arr.push(i)
  }

  return arr
}
console.log(range3(10, 19)) // [ 10, 12, 14, 16, 18 ]

function range4(a, b) {
  const arr = []
  for (let i = a; i >= b; i--) {
    arr.push(i)
  }
  return arr
}
console.log(range4(6,2)) // [ 6, 5, 4, 3, 2 ]

function range5(a, b) {
  const arr = []
  for (let i = a; i > b; i -= 4) {
    arr.push(i)
  }
  return arr
}
console.log(range5(8, -3)) // [ 8, 4, 0 ]
