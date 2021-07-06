vector = ['casa', 'bola', 'notebook', 'escova']

vector.sort()

console.log(vector)

for (let pos in vector) {
    console.log(`A posição ${pos} tem o valor ${vector[pos]}`)
}

let verification = vector.indexOf('bola')

if (verification == -1) {
    console.log(`O objeto inserido não foi encontrado! `)
} else {
    console.log(`O objeto inserido está na posição: ${verification}`)
}
