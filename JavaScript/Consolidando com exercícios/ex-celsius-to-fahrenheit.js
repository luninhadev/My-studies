/*
    ## Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 +32
*/

function convertTemperature (temperature, unit_measurement){
    let result 
    if ((typeof(temperature) === 'string') && (unit_measurement === 'C' || unit_measurement === 'c')){
        result = temperature * 9/5 + 32
        console.log(`Converting ${temperature} Celsius to Fahrenheit:`)
        console.log(`Result ${result} Fahrenheit`)

    } else if ((typeof(temperature) === 'string') && (unit_measurement === 'F' || unit_measurement === 'f')){
        result = (temperature - 32) * 5/9
        console.log(`Converting ${temperature} Fahrenheit to Celsius:`)
        console.log(`Result ${result} Fahrenheit`)
        console.log(temperature)

    } else {
        console.log('Invalid value! ')
    }
}

convertTemperature('25','C')

