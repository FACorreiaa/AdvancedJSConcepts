const giveAcessTo = (name) => 'Acess granted to ' + name;

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return giveAcessTo(person.name)
}

function sing(person) {
    return 'la la la my name is ' + person.name;
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        return fn(500000)
    } else if (person.level === 'user')
        return fn(5000)
}

letPerson({
    level: 'user',
    name: 'Tim'
}, authenticate)