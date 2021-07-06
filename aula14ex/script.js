function contar() {

    // Armazenando as variáveis obtidas no HTML com DOM:

    let number1 = document.getElementById('start')
    let number2 = document.getElementById('end')
    let pass = document.getElementById('pass')
    let res = document.getElementById('res')

    // Testando se nenhum campo está vazio: VALIDAÇÃO: 

    if (number1.value.length == 0 || number2.value.length == 0 || pass.value.length == 0) {
        // Ler sobre içamento!
        alert('[ERRO] Preencha todos os campos!')
        res.innerHTML = `Impossível contar! \u{1F613}`
    } else {
        res.innerHTML = 'Contando: <br> '

        /* Criar mais três variáveis para receber as variáveis globais convertidas 
        para number e com .value para adquirir o seu valor */

        let i = Number(number1.value)
        let f = Number(number2.value)
        let p = Number(pass.value)

        // Se o passo for zero:

        if (p <= 0) {
            window.alert('Passo inválido! Reconsiderando passo como 1...')
            p = 1
        }

        /* Na estrutura de repetição, há a criação de uma nova variável para obedecer as especificações dela, 
        nisso ela recebe a variável local criada no else e assim, há a conclusão dá sua estrutura */

        if (i < f) {
            // Contagem Crescente

            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
                // Configuração do JS '/u e chaves' para rodar o código de emoji do unicode, só funciona assim, e entre crases
            }

        } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}