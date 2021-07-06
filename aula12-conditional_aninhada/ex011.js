/* SISTEMA DE VOTAÇÃO:
 Idades:
0 - Não vota: menores de 16 anos
1 - Opcional: 16 anos  ou 65 anos
2 - Obrgatório: a partir de 18 anos*/ 

var idade = 12
console.log(`Sua idade é: ${idade}`)

if(idade < 16) { // Se a idade é menor que 16 == false, obviamente ela é maior ou igual a 16
    console.log(`Não vota!`)
}else if (idade >= 16 && idade < 18 || idade > 65) { // O que torna esse começo de código desnecessário xD. Aí vamos de novo, se a idade não for menor do que 18, obviamente é maior ou igual a 18. Então, não precisará do próximo if, só o else
    console.log(`Voto opcional!`)
}else if (idade >= 18) { 
    console.log(`Voto obrigatório!`)
}

/* REFATORAÇÃO: */

var idade = 67
console.log(`Sua idade é: ${idade}`)
if(idade < 16) { //Se idade for abaixo de 16 não vota
    console.log(`Não vota!`)
}else if (idade < 18 || idade > 65) { // Entre 16 e 18 o voto é opcional
    console.log(`Voto opcional!`)
}else { //Acima de 18
    console.log(`Voto obrigatório!`)
}