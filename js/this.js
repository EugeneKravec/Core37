'use strict'
//  Контекст исполнения

// console.log(this);
function showThisDecl() {
    console.log(this);
}
// showThisDecl()

const showThisExpr = function () {
    console.log(this);
}
// showThisExpr()

const showThisArr = ()=> {
    console.log(this);
}
// showThisArr()

const user = {
    name: 'Eugene',
    age: 34,
    showName() {
        console.log(this.name);
        // ============
        const showAge = () => {
            console.log(this.age);
        }
        // ============
        showAge()
    },
}
// user.showName()
// console.log(user);

// Привязка объекта с Call или Applay с мгновенным вызовом
// отличие 
const newUser = {
    name: 'Vova',
    age:22,
}

// user.showName.call(newUser)

const bestUser = {
    name: 'Sara',
    age:18,
}
// user.showName.apply(bestUser)

function toSayHello(manager, group) {
    console.log(`${this.name}, we are glad to see you! 
    I'm ${manager}, your manager. 
    Your group is ${group}`)
}
let manager = 'Sandra'
let group = 38
// toSayHello.call(bestUser, manager, group)

const data = [manager, group]
// toSayHello.apply(newUser, ['Eugene', 34])

// Если нужно передать ссылку на функцию которая
// должна вызваться потом - прибиндить 
// this in callback - bind

const product = {
    name: 'banana',
    price: 25,
    changrPrice(value) {
        return (this.price = value)
    },
}

const fruit1 = {
    name: 'Ananas',
    price:50,
}

function showProduct(product, callback) {
    let price = callback()
    console.log(`${product} costs ${price} now`);
}
// showProduct('fruit', product.changrPrice.bind(product, 20))
// showProduct('fruit1', product.changrPrice.bind(fruit1, 99))

// ЗАДАЧКИ ЗАДАЧКИ

function every(array, callback) {
    const results = []
    for (let arr of array) {
        let condition = callback(arr)
        // console.log(condition);
        results.push(condition)
        console.log(results);
    }

}
every([1,11,111,2,22,33], getLessThenTen)

// callback
function getLessThenTen(number) {
    return number < 10 ? true : false
}