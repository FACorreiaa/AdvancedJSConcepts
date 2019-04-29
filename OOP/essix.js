//Class functions
class Elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    atack() {
        return `atack with ${this.weapon}`
    }
}