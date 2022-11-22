// Manipulando Strings e Números

// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 847.87475
console.log(number.toFixed(2).replace(".",","))// o retorno disso será uma String

console.log(Number(number.toFixed(2)))// convertendo String em número

//Não é toda String que pode virar número
//por exemplo:
console.log(Number(number.toFixed(2).replace(".",",")))// o retorno disso é NaN (não é um número)
// pq o .replace não pode ser usado pra colocar virgula em um tipo númerico