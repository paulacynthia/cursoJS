var interations = document.getElementById('button_click')
interations = addEventListener('click', clicar)

function clicar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('sele_res')

    if (num.value.length == 0) {
        alert('Por favor, insira um número:')
    } else if (num.value >= 1 && num.value <= 100) {

        let n = Number(num.value)
        let item = document.createElement('option') 
        item.text = `Valor ${n} adicionado!`
        tab.appendChild(item)

    }else {
        alert('Insira um número entre 1 e 100.')
    }

 
}