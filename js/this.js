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

const showThisArr = () => {
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
    age: 22,
}

// user.showName.call(newUser)

const bestUser = {
    name: 'Sara',
    age: 18,
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
    price: 50,
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
// let result = every([1, 11, 111, 2, 22, 33], getLessThenTen)
// console.log(result);

// callback
function getLessThenTen(number) {
    return number < 10 ? true : false
}
function getMoreThenTen(number) {
    return number > 10 ? true : false
}
// result = every([1, 2, 3, 23, 5], getMoreThenTen)
// result = every([11, 21, 31, 23, 51], getMoreThenTen)

// Exersize 2

function compact(array, calback) {
    const nweArray = []
    for (let value of array) {
        console.log(Boolean(value));
        // if (Boolean(value)) nweArray.push(value)
        calback(value, nweArray)
    }
    return nweArray
}

function getFalseValues(eleement, falsyValues) {
    if (!Boolean(eleement)) falsyValues.push(eleement)
}
function getNotFalseValues(element, notFalsyValues) {
    if (Boolean(element)) notFalsyValues.push(element)
}


// console.log(compact([1, 0, '', null, 'Hello']));
// console.log(compact([Infinity, ' ', {}, []]));
// console.log(compact([1, 0, '', null, 'Hello'], getFalseValues));
// console.log(compact([1, 0, '', null, 'Hello'], getNotFalseValues));

const orderA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]

const orderB = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]

function showDeliveryStatus(array) {
    let progress;
    let message;
    const results = [];
    for (let order of array) {
        // console.log(order.deliveryProgress);
        // let { deliveryProgress: progress } = order

        // console.log(results);
        progress = order.deliveryProgress
        // console.log(progress);
        if (progress === 100) {
            message = 'Done';
            results.push(message)
        } else if (progress < 100) {
            message = 'In progress'
            results.push(message);
        } else if (progress === null) {
            message - 'Ready to delivery';
            results.push(message)
        }

        return results.join(', ')
    }


}
// console.log(showDeliveryStatus(orderA));
console.log(showDeliveryStatus(orderB));
