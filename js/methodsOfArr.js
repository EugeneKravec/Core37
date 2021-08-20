// array.method(callback)
//  elem, index, array
// callback = () => { }

// array.method((elem, index, array)=>{})

// 1. forEach - алльтернатива цикла for
//  array.forEach() => возвращает undefined

// 2. map 
// array.map() => возвращает всегда массив
//  той же длины, что и исходный

// 3. filter
//  array.filter() => возвращает всегда массив
// только тех элементов, что прошли условия

// 4. find 
// array.find() => возвращает только 1 елемент.
// который прошел проверку условием. Уникальный

// 5.every
// array.every() => true |\ false 
// каждый елемент массива прошел проверку условия - ТРУ

// 6.some
// array.some() => true |\ false 
// когда хоть один прошел проверку

// 7.sort
// array.sort() => мутирует исходный массив
// Сортирует от А до Я и от 0 до 10

// 8. reduce 
// array.reduce() => возвращает, что угодно
// ({}, [], 0, '')
// ==================================================

const numbers = [1, 2, 3, 4, 5]

const forEachResults = numbers.forEach((num) => {
    // console.log(num);
})
console.log('forEachResults', forEachResults);

// ========================================

const mapResults = numbers.map((item) => {
    console.log(item);
    return item + 1
})
console.log('Исходный:', numbers);
console.log('mapResults', mapResults);

// =========================================

const filterResult = numbers.filter((elem) => {
    return elem >= 2 && elem <= 4
})
console.log('filterResult', filterResult);

// =======================================

const findResult = numbers.find((i) => {
    return i > 2 && i < 5
})
console.log('findResult', findResult);
// Filter вернет только 1 элемент, прошедший условие
// ========================================

const everyResult = numbers.every((elem) => {
    // console.log('everyResult', elem);
    return elem > 3
})
console.log('everyResult', everyResult);

// ========================================

const someResult = numbers.some((elem) => {
    // console.log('someResult', elem);
    return elem > 3
})
console.log('someResult', someResult);

// ========================================

const fruit = ['banana', 'apples', 'orange']
const sortResult = fruit.sort().reverse()
console.log('sortResult', sortResult);
console.log(fruit);

const ages = [54, 32, 17, 85, 100, -22, -3]
const sortAges = ages.sort((a, b) => {
    return a - b
})
console.log(sortAges);
// ========================================

const reduceResultArray = numbers.reduce((acc, elem) => {
    // console.log(acc, elem);
    acc.push(elem)
    return acc
}, [])
console.log('reduceResultArray', reduceResultArray);

const reduceResultObj = numbers.reduce((newObj, number) => {
    // console.log(newObj, number);
    newObj[number] = number
    return newObj
}, {})
console.log('reduceResultObj', reduceResultObj);

const reduceResultnumber = numbers.reduce((total, num) => {
    // console.log(total, num);
    total += num
    return total
}, 0)
console.log('reduceResultnumber', reduceResultnumber);

// ========================================