function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c // fat = fat * c

        // 1 = 5*1 => 5 = 5*2
    }
    return fat
}

console.log(fatorial(5))