// switch

let expression = ''

switch(expression){
    case 'a':
        // código
        console.log('a')
        break // sem o break ele segue para próxima expressão
    case 'b':
        // código para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

//------------------------------------------------------

// Exemplo

function calculate(number1, operator, number2){
    let result = 0

    switch(operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(8, '-', 4))
console.log(calculate(4, '*', 8))
console.log(calculate(8, '/', 4))
console.log(calculate(4, 'a', 8))