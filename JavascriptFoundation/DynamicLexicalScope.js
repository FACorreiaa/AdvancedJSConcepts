//In Javascript our lexical scope (available data plus variables where the function was defined)
//determines our available variables. Not where the function is called (dynamic scope)

const a = function {
    console.log('a', this)
    const b = function() {
        console.log('b', this)
        const c = {
            hi: function() {
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}

//a -> window
//b -> window
//c -> hi: f

const obj = {
    name: 'Billy', 
    sing() {
        console.log('a', this);
        var anotherFunc = () =>  {
            console.log('b', this)
        }
        anotherFunc()
    }
}
