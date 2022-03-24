// filter
const filter = [6, 5, 7, 3, 9, 10].filter(fn => {
  return fn <= 7
})
console.log(filter) // [ 6, 5, 7, 3 ]

// callback
const carrinho = [
  { name: 'Caneta', quantity: 10, price: 7.99 },
  { name: 'Impressora', quantity: 0, price: 649.50 },
  { name: 'Caderno', quantity: 4, price: 27.99 },
  { name: 'Lápis', quantity: 3, price: 5.82 },
  { name: 'Tesoura', quantity: 1, price: 19.20 },
]

const quantityMoreThanZero = item => item.quantity > 0 && item.price > 20
const getName = item => item.name

const itemFilter = carrinho.filter(quantityMoreThanZero)
const itemFilter2 = carrinho
  .filter(quantityMoreThanZero)
  .map(getName)

console.log(itemFilter)
console.log(itemFilter2)

Array.prototype.meuFilter = function(fn) {
  const newArr = []

  for (let i = 0; i < this.length; i++) {
    if (fn (this[i], i, this)) {
      newArr.push(this[i])
    }
  }

  return newArr
}