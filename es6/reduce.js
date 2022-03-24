/*
** Wellington Pinho
*/
const cart = [
  { name: 'Pen', quantity: 10, price: 1.99 },
  { name: 'Glue', quantity: 0, price: 1.50 },
  { name: 'Pencil', quantity: 3, price: 1.82 },
  { name: 'Scissors', quantity: 1, price: 12.20 },
]

const total = cart.map(item => item.price * item.quantity)

const arr = total.reduce((acc, curr) => acc + curr)

console.log(arr) // 37.56
