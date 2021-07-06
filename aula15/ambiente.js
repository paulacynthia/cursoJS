let num = [5, 8, 9, 3]

// Caso você não queira perder os valores que já estão no vetor e deseja apenas acrescentar mais:
num.push(6)

// Colocando o vetor em ordem crescente:
num.sort()

console.log(`Nosso vetor é: ${num}`)
console.log(num) // Se colocar só o num sem template string aparecerá apenas os colchetes

// Para mostrar o comprimento do vetor:
console.log(`O vetor possui ${num.length} posições!`)

// Para mostrar as posições do conteúdo dos vetores de forma separada:
console.log(`A primeira posição do vetor é ocupada pelo número: ${num[0]}`)

//
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor inserido não existe no vetor!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}



/*
let vector = [9,6,4,7,2,3]

vector.push(97)

vector.sort()

console.log(`O nosso vetor é: ${vector}`)

console.log(vector)

console.log(`O tamanho do vetor é: ${vector.length}`)

*/
