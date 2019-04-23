//Functions are first class citizens
//1
var stuff = function() {
    
}

//2
function a(fn) {
    fn()
}

//3
function b() {
    return function c() {
        console.log('bye')
    }
}

var d = b()
d()


//dont
for (let i = 0; i < 5; i++) {
    function a() {

    }
    a()
}

//do
function a() {

}

for (let i = 0; i < 5; i++) {
    
    a()
}

//dont
function a() {
    return param
}
a()

//do
function a(param) {
    return param
}
a()