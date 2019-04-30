const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const amazonHistory = []

//1. Add items to cart
//2. Add 3% tax to item in cart
//3. Buy item: cart --> purchases
//4. Empry cart
const compose = (f, g) => (...args) => f(g(...args));

purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, {
    name: 'laptop',
    prince: 200
})

function purchaseItem(...fns) {
    return fns.reduce(compose)
}

function additemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {
        cart: updateCart
    })
}

function applyTaxToItems(user) {
    const {
        cart
    } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, {
        cart: updatedCart
    })
}

function buyItem(user) {
    return Object.assign({}, user, {
        purchases: user.cart
    })
}

function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {
        cart: []
    })
}

//refund
function refundItem() {

}