/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keybord
*/

function Person(name,age){
    this.name = name
    this.age = age
    this.walk = function(){
        return "andando"
    }
}
const luna = new Person('Luna', 25)
const mayk = new Person('Mayk', 28)

console.log(luna.name, luna.age, luna.walk())
console.log(mayk)

//------------------------------------------------------
let name = new String("Luna")
console.log(name)

let date = new Date("2022-11-21")
console.log(date)