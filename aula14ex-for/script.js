var GeneradorTable = document.getElementById('generatorTable')
GeneradorTable.addEventListener('click', clicar)

function clicar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('LocalTab')

    if (num.value.length == 0) {
        alert('Por favor, insira um número abaixo:')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for(c=1; c <=10; c++) {
           let item = document.createElement('option') 
           item.text = (`${n} x ${c} = ${n*c}`)
           tab.appendChild(item)
        }
    }
}