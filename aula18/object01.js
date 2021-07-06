// Se você colocar para mostrar o typeof de um array ele retornará object, porque o array é um objeto, mas um objeto é um objeto. Eles são estruturas da mesma classe/origem.

let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p // this é uma palavra que auto referencia ao objeto
}}

console.log(amigo)

// Para acessar os elementos, caso não queira mostrar tudo:
console.log(amigo.nome) // .nome é o atributo

amigo.engordar(2) // a variável tem funções dentro dela :ooooooo
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)