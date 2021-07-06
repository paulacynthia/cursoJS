/* Condiciona Múltipla: SWITCH */

var now = new Date();
var DayOfWeek = now.getDay();

/*Dias da semana para o JS:
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado */


// Não esqueça o BREAK!

// Não é bacana utilizar o switch para trabalhar com intervalo, ele é para números inteiros e strings :))

switch (DayOfWeek) {
    case 0: 
        console.log("Hoje é domingo! Descanse!")
        break

    case 1:
        console.log("Hoje é segunda! Trabalhe!")
        break

    case 2:
        console.log("Hoje é terça! Trabalhe!")
        break

    case 3:
        console.log("Hoje é quarta! Trabalhe!")
        break

    case 4:
        console.log("Hoje é quinta! Trabalhe!")
        break

    case 5:
        console.log("Hoje é sexta! Trabalhe!")
        break

    case 6:
        console.log("Hoje é sábado! Descanse!")
        break

    default:
        console.log("[ERRO] Dia inserido é inválido!")
        break

}