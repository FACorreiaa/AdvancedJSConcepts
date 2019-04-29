//Class functions
class Character {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    atack() {
        return `atack with ${this.weapon}`
    }
}

const fiona = new Elf('Fiona', 'ninja')
const ogre = {
    ...fiona
}
fiona.__proto__

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type
        console.log(this)
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon)
        this.color;
    }
    makeFort() {
        return 'Strongest fort in the world'
    }
}
const doby = new Elf('Doby', 'Magic', 'White')
const shrek = new Ogre('Shrek', 'club', 'green')