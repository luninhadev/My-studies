/* ### Sitema de gastos familiar 

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/


let values = {
    income: [500,2500,1300],
    expense: [300,1000,800]
}

function calc (){
    let sumIncome = 0
    let sumExpense = 0
    let balance = 0

    for (i = 0; i < values.income.length; i++){
        sumIncome += values.income[i]
    }
    for (i = 0; i < values.expense.length; i++){
        sumExpense += values.expense[i]
    }
    
    console.log(`Sum of incomes R$${sumIncome.toFixed(2)}`)
    console.log(`Sum of expenses R$${sumExpense.toFixed(2)}`)

    balance = sumIncome - sumExpense

    if (balance > 0){
        resultChecked = console.log(`R$${balance.toFixed(2)} The balance account is positive!`)
    } else if (balance == 0 ){
        resultChecked = console.log(`R$${balance.toFixed(2)} You have no account balance...`)
    } else {
        resultChecked = console.log(`R$${balance.toFixed(2)} The balance account is negative!`)
    }
    
    return sumIncome - sumExpense
}

calc()


