const animalsGroup1 = [
    'Lion',
    'Monkey',
    'Cat'
    
]
let animalsGroup2 = [
    {
        name: 'Dog',
        age: 4
    },
    {
        name: 'Parrot',
        age: 5
    },
    {
        name: 'Snake',
        age: 4
    }
]
    
// acessar valores
console.log(animalsGroup1[0])
console.log(animalsGroup1.length)

// renderizar todos os elementos do array utilizando estrutura de repetição

console.log('Grupo 1 de animais')
for (i = 0; i <= 2; i ++){
    console.log(animalsGroup1[i])
}

console.log('Grupo 2 de animais')
for (i = 0; i <= 2; i ++){
    console.log(animalsGroup2[i].name)
}
