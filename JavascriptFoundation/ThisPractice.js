//this exercise

var b = {
    name: 'fernando',
    say() {
        console.log(this)
    }
}

var c = {
    name: 'fernando',
    say() {
        return function() {
            console.log(this)
        }
    }
}

var d = {
    name: 'fernando',
    say() {
        return () => {
            console.log(this)
        }
    }
}

b.say() //object b
c.say()() //window object
d.say()() //object
