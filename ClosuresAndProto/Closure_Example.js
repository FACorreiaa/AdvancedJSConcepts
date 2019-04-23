const boo = (string) => (firstname) => (lastName) => console.log(`${string} ${firstName} ${lastName}`)

const booString = boo('hi')
const booStringName = booString()