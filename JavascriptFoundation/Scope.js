function sayMyname() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        console.log(c)
        return function printName() {
            var c = 'c';
            return 'Fernando Correia'
        }
    }
}

sayMyname()()()

//scope means what is the variable access 
//context is more about object based, whats the value of the this keyword