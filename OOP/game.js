//factory functions
crateElf = (name, weapon) => {
    return {
        name,
        weapon,
        atack = () => {
            `atack with ${weapon}`
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.atack()
//or 

//Object.create
const elfFunction = {
    atack() {
        return 'atack with ' + this.weapon
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunction)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
peter.atack()
//or
//Constructor functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}