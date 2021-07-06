function soma(n1=0, n2=0) {
    sum = n1+n2
    return sum 
}

console.log(soma(3))

/* Se você deixar de colocar algum dos valores do parâmetro real irá ficar x + undefined = Nan . 
Para resolver isso, basta predeterminar os valores. Parametros pré-definidos:
function soma (n1=0, n2=0) --> Ou seja, caso o n1 ou n2 não forem passados irão ser considerados como zero
evitando, assim, o Nan */