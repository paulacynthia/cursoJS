/*C O N D I C I O N A I S */

console.log("O console funcionou corretamente!") // No node.js para escrever na tela o document.write não funciona, por isso, utiliza-se o console.log

var vel = 60.5
console.log(`A velocidade do seu carro é de ${vel}Km/h`)
console.log(`Dirija sempre usando o cinto de segurança!`)


/* Caso você deseje mutar o serhumaninho por limite de velocidade ultrapassado e só colocar o console.log com a informação, qualquer serhumaninho seria mutado. Por isso, existe as condicionais em que você pode executar uma condição, como o próprio nome diz, que dependendo se é true or false irá cair no bloco correspondente. Assim, mutando que precisa ser mutado sem muito esforço do programador == automação. */

/* Técnica de organização do seu código == Indentação == Recuo (Tecla Tab) */


if (vel > 60) { // Condição Simples porque não tem else (se não)
    console.log(`Você ultrapassou o limite de velocidade permitido. MULTADO!`)
}