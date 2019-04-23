//pass by value
var a = 5;
var b = 10;

b++;
console.log(a)
console.log(b)


let obj1 = {
    name: 'Nando', pass: '123'
}

let obj2 = obj1

obj2.pass = 'easy'

console.log(obj1) //pass: easy
console.log(obj2) //pass: easy

let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: {
        deep: 'hi'
    }
}

let obj2 = {
    ...obj
}

console.log(obj);
console.log(obj2);

let obj3 = JSON.parse(JSON.stringify(obj))
console.log(obj3)