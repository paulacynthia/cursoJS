const Verificar = () => {
    var data = new Date() /* Para pegar a data atual do sistema*/ 
    var ano = data.getFullYear() /*Full Year: ano com os 4 digítos*/
    var  YearOfForm = document.getElementById('txtano')
    var res = document.querySelector('div#saidas')

    if (YearOfForm.value.length == 0 || Number(YearOfForm.value) > ano) { /* Verificando se o ano está vazio ou se ele é maior do que o ano atual */
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(YearOfForm.value)
        var gênero = ''
        var img = document.createElement('img') /* Foto colocada dinamicante: */
        img.setAttribute('id', 'foto') /* ==  <img id='foto'> no html*/


        if (fsex[0].checked) { /* Ou seja, o que estiver marcado na posição 0, é masculino */
            gênero = 'homem'
            document.body.style.background = 'rgb(70, 142, 236)'
            if (idade >= 0 && idade < 10) /* Se idade estiver entre 0 e 10 ele é uma criança */ {
                img.setAttribute('src', './assets/littleboy.jpg')

            }else if (idade < 21) { // Abaixo de 21
                // Jovem
                img.setAttribute('src', './assets/youngman.jpg')

            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/adultman.jpg')
              
            }else {
                // Idoso 
                img.setAttribute('src', './assets/elderlyman.jpg')
            }
        } else if (fsex[1].checked) {
            document.body.style.background = '#f3c1c2'
            gênero = 'mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/littegirl.jpg')
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/youngwoman.jpg')
            }else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/adultwoman.jpg')
            }else {
                // Idosa
                img.setAttribute('src', './assets/elderlywoman.jpg')
            }
        }

        saidas.style.textAlign = 'center'
        saidas.innerHTML = `Detectamos  ${gênero} com ${idade} anos`
        saidas.appendChild(img) /* appendChild == serve para adicionar um conteúdo abaixo do texto. Isto é, adicionar um elemento, que no caso é a imagem */
    }
}

