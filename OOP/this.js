//new binding this
function Person(name, age) {
    this.name = name
    this.age = age
}

const personOne = new Person('Fernando', 123)

//implicit binding
const personTwo = {
    name: 'Nando',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}

//explicit binding
const personThree = {
    name: 'Nando',
    age: 40,
    hi: function () {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

//lexical scope
const personFour = {
    name: 'lel',
    age: 40,
    hi: function () {
        var inner = () => {
            console.log('hi' + this.name)
        }
    }
}