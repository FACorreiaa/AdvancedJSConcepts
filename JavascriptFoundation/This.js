//this is the object that the function is a property of
//this refers to the object
//using this gives  methods access to the object
//execute the same code for multiple objects
const obj = {
    name: 'Billy', 
    sing() {
        return 'lalala' + this.name
    },
    singAgain() {
        return this.sing() + '!'
    }
}

//object example
function importantPerson() {
    console.log(this.name+'!')
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Jacob',
    importantperson: importantPerson
}

obj1.importantPerson()

//call()
function a() {
    console.log('hi')
}

a.call() //hi
a.apply() //hi

const wizard = {
    name: 'Merlin', 
    health: 100,
    heal() {
        this.health = 100;
    }
}

wizard.heal() //100

const archer = {
    name: 'Robin Hood',
    health: 30
}

//apply()
wizard.heal.apply(archer, 50, 30)

//bind()
function multiply(a,b) {
    return a*b
}

let multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(4))

let multiplyByTen = multiply.bind(this, 10)
console.log(multiplyByTen(4))

