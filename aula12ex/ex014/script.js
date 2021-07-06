function carregar () {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var now = new Date()
    var time = now.getHours()

    msg.innerHTML = (`Agora são ${time} horas.`)

    if (time >= 0 && time < 12) {
        img.src = './assets/fotomanha.jpg'
        document.body.style.background = '#c88239'
    }else if (time >= 12 && time <=18 ) {
        img.src = './assets/fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = './assets/fotonoite.jpg'
        document.body.style.background = '#15141a'
    }
}