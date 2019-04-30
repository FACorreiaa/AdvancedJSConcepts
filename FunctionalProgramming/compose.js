//compose
const compose = (f, g) => (data) => f(g(data0))
const multiplyByThree = (num) => num * 3
const takeAbsolute = (num) => Math.abs(num)
const multiplyAndAbsolute = compose(multiplyByThree, takeAbsolute)