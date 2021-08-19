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
console.log(forEachResults);

const mapResults = numbers.map((item) => {
    console.log(item);
    return item
})
console.log(mapResults);