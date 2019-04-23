const obj = {
    two() {
        return 2
    }
}

obj.two()

function three() {
    return 3;
}

three.call()

const four = new Function('return 4')
four()

//proto
function woohoo() {
    console.log('woohooo')
}

woohoo.yell = 'ahhhh'

const specialObj = {
    yell: 'ahhhhh',
    name: 'woohoo',
    (): console.log('woohoo')
}