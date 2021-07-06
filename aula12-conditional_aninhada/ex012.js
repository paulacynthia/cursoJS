/*TRABALHANDO COM HORÁRIOS FIXOS :D*/ 

var now = new Date() // Hora do sistema
var time = now.getHours() // Hora do sistema
console.log(`São exatamente ${time} horas`)

if (time >= 5 && time < 12 ) {
    console.log("Bom dia!")

}else if (time == 12) {
    console.log("Meio-dia!")

}else if (time > 12 && time <= 18) {
    console.log("Boa tarde!")

}else if (time >= 19 && time <= 23) {
    console.log("Boa noite!")

}else if(time <= 4 ) {
    console.log("Boa madrugs!")
}