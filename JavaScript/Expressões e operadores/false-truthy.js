/* 
    FALSY
    Quando um valor é considerado false em contexto onde um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( true ? 'verdadeiro' : 'falso')
console.log( 0 ? 'verdadeiro' : 'falso')
console.log( -0 ? 'verdadeiro' : 'falso')
console.log( "" ? 'verdadeiro' : 'falso')
console.log( null ? 'verdadeiro' : 'falso')
console.log( undefined ? 'verdadeiro' : 'falso')
console.log( NaN ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde u booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log({} ? 'verdadeiro' : 'falso')
console.log([] ? 'verdadeiro' : 'falso')
console.log(1 ? 'verdadeiro' : 'falso')
console.log(3.23 ? 'verdadeiro' : 'falso')
console.log("0" ? 'verdadeiro' : 'falso')
console.log("false" ? 'verdadeiro' : 'falso')
console.log(-1 ? 'verdadeiro' : 'falso')
console.log(Infinity ? 'verdadeiro' : 'falso')
console.log(-Infinity ? 'verdadeiro' : 'falso')