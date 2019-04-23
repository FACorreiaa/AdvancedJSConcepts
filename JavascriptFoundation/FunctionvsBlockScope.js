//function score
//vs
//block scope

if (5 > 4) {
    var secret = '123456'
}

secret; //works

function a() {
    var secret = '123456'
}

secret; //doesnt work

if (5 > 4) {
    let secret = '123456'
}

secret; //doesnt work


function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);
}

loop()
//0
//1
//2
//3
//4
//final 5


function loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);
}

loop()
//i is not defined
//because of the block scope