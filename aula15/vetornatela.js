/*vector = [5,6,7,4,2]

console.log(vector)

vector.sort()

console.log(vector)
console.log('**********************')

for(let pos = 0; pos < vector.length; pos++) {
    //console.log(vector[pos])
    console.log(`A posição ${pos} tem o valor ${vector[pos]}`)
}*/

vector = [2,7,9,3,2]

vector.sort()

console.log(vector)

// Forma mais simplificada de demonstrar o percuso de exibição de um vetor de acordo com as atualizações do Ecmascript
for (let pos in vector) {
    console.log(`A posição ${pos} tem o valor ${vector[pos]}`)
}

console.log(`${vector.indexOf(3)}`)

console.log(`${vector.indexOf(6)}`)