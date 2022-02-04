function objetoExterno () {
  this.propriedade1 = 'Valor 1'
  this.propriedade2 = 100
  
  const valorRegional = this.propriedade1
  
  this.metodoEmClosure = function () {
    valorInterno = valorRegional

    return valorInterno
  }
}

const instancia = new objetoExterno()
console.log(instancia.metodoEmClosure())