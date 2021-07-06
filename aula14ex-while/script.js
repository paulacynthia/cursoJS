var table = document.getElementById('GeradorDeTab')
table.addEventListener('click', clicar)

function clicar () {
    
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, insira um número:')

    }else {

        let n = Number(num.value) // Para pegar o valor do número
        let c = 1
        tab.innerHTML = '' // Para limpar o select a cada loop 

        while(c <= 10 ) {
            let item = document.createElement('option') // Adicionar o elemento no select. É como se fosse no html e criasse um option

            item.text = `${n} x ${c} = ${n*c}` // Parte de dentro do option

            item.value = `tab${c}` // Para saber qual foi o item selecionado

            tab.appendChild(item) // Adicionar um elemento filho que será o item

            c++ // Não pode esquecer de incrementar o valor de c
        }
    }
}