//object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {
    tiger,
    ...rest
} = animals;

//finally
Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    })).then(results => {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
    }).catch(() => console.log('error'))
    .finally(() => console.log('extra'))

//for await of
const loopThroughUrl = url => {
    for (const url of urls) {
        console.log(url);
    }
}
const getData = async function () {
    try {
        const [users, posts, algums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
        }))
    } catch (err) {
        console.log('ups', err);
    }



}

const getDataTwo = async function () {
    const arrayOfPromises = this.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}