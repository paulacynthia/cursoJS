function ParOuImpar (c) {
    if (c%2 == 0) {
        return "PAR!"
    }else {
        return "ÍMPAR!"
    }
}

/* Com var:
let teste = ParOuImpar(10)
console.log(teste)
*/

// Sem var, chamando a function diretamente e só passando o parâmetro real
console.log(ParOuImpar(4))