// Colocando uma function dentro da variável 

let v = function(x) {
    let res = x*2
     return res
 }
 
 console.log(v(5))
 
 // Sem criar let no escopo local
 let v = function(x) {
     return x*2
 }
 
 console.log(v(6))

// Arrow function

const v = (x) => {
    return x*2
}

console.log(v(5))