function printName() {
    return 'Fernando Correia';
}

function findname() {
    return printName()
}

function sayMyname() {
    return findname()
}

sayMyname()

//In Javascript our Lexical Scope 
// (available data plus variables where the function was defined)
// determines our available variables.
// Not where the function is called (dynamic scope)