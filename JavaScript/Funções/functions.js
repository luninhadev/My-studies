// function expression
// function anonymous
let total = 0

// parâmetros (parameters)
// o number1 só existe dentro do escopo
const sum = function(number1, number2){
    let total = number1 + number2 // sempre definir o tipo de variável!!
    return total
}

// essas variáveis são diferentes das variáveis do parametro acima
let number1 = 16
let number2 = 22 

sum(2,3) // arguments - argumentos]
sum (number1, number2)
console.log(`O primeiro número é ${number1}`)
console.log(`O segundo número é ${number2}`)
console.log(`A soma deles é ${sum(number1, number2)}`) // quando a função não tem retorno ela retorna undefined

console.log(total)

//--------------------------------------------------------
// function scope
let subject = 'create vídeo'

// quando tenho parametro na função a variável de fora do escopo não será alterada
function createThink(subject){
    subject = 'study'
    return subject
}

console.log(createThink(subject))// aqui pegamos o return da função
console.log(subject) // aqui pegamos a variável de fora

//------------------------------------------------------
// function hoisting

sayMyName();

function sayMyName(){
    console.log('Luna')
}

console.log(sayMyName)

//------------------------------------------------------
// Arrow function

const myName = (name) => {
    console.log(name)
}
myName('Luna')

//------------------------------------------------------
// callback function

function yourName(name){
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a função callback')
}
yourName(
    () => {
        console.log('etou em um callback')
    }
)