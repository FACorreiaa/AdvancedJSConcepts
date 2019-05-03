//'fernando
function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'not a string'
    }

    const backwardsArray = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i = 0; i--) {
        backwardsArray.push(str[i])
    }

    return backwardsArray.join('')
}

//or
function reverseV2(str) {
    return str.split('').reverse().join('')
}

//or
const reverseV3 = str => [...str].reverse().join('');