// throw



function sayMyName(name = ''){
    if (name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')
}

// try...catch  ele tenta rodar o código se ele não conseguir ele vai pro catch
try{
    sayMyName()
}catch(e){
    console.log(e)
}
console.log('após a função de erro')

// se vc só chamar a function assim sayMyName() o console retorna um erro 'Uncaught Nome é obrigatório'