// Controles básicos receptores de valores:
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = [] // Criado de forma global para analisar os dados

// Function que irá receber um número:
function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Também irá receber um número para saber se ele tá na lista ou não, vai receber: número e lista
// o inLista irá passar o valor e a lista
// lista = array valores 

function inLista (n, l) {
    if(l.indexOf(Number(n)) != -1) { // -1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

// Vai ter que verificar se é um número e se não está na lista para assim, poder adicionar: 


function Adicionar() {
    if(isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Para adicionar no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 

        for(let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }

        media = soma/tot 
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}