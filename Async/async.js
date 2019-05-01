//async await
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left')
    await movePlayer(10, 'Right')
    await movePlayer(100, 'Left')
}

//promise
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(400, 'Left'))

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

//async
const getData = async function () {
    try {
        const [users, posts, algums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
        }))
    } catch (err) {
        console.log('ups', err);
    }

}

//promise
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))