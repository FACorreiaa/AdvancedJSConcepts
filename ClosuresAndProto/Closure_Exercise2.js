const array = [1, 2, 3, 4]
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log(' I am at index ' + i)
    }, 3000)

}

//or
for (var j = 0; j < array.length; j++) {
    (function (closureJ) {
        setTimeout(function () {
            console.log(' I am at index' + closureJ)
        }, 3000)
    })(j)
}