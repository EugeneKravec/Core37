// forEach - short

const numbers = [1, 2, 3, 4, 5]
console.log('Start numbers:', numbers);

const newArr = []
const forEachResults = numbers.forEach((num) => newArr.push(num + 1))

console.log('forEachResults', newArr);

// ========================================

//  MAP - short

const mapResults = numbers.map((item) => item + 1)
console.log('mapResults', mapResults);

// ========================================

// Filter - short
const filterResult = numbers.filter((elem) => elem >= 2 && elem <= 4)
console.log('filterResult', filterResult);

// ========================================

// Find - short
const findResult = numbers.find((i) => i > 2 && i < 5)
console.log('findResult', findResult);

// ========================================

// Every - short
const everyResult = numbers.every((elem) => elem > 3)
console.log('everyResult', everyResult);

// ========================================

// Some -short
const someResult = numbers.some((elem) => elem > 3)
console.log('someResult', someResult);

// ========================================

// Sort - short
const fruit = ['banana', 'apples', 'orange']
const sortResult = fruit.sort().reverse()
console.log('sortResult', sortResult);
console.log(fruit);

const ages = [54, 32, 17, 85, 100, -22, -3]
const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges);

// ========================================

// Reduce короткие не получатся. 
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

// Цепочка методов 
// Chain of methods

const students = [
    { name: 'Phill', age: 21, gender: 'male' },
    { name: 'Margo', age: 27, gender: 'female' },
    { name: 'Ann', age: 32, gender: 'female' },
    { name: 'Edd', age: 41, gender: 'male' },
    { name: 'Bill', age: 35, gender: 'male' },
]

const result = students
    .filter((student) => student.gender === 'female')
    .map((girl) => girl.name)
    .sort()
console.log('result-1', result);

const result2 = students
    .map((student) => student.age)
    .sort((a, b) => a - b)
console.log('result2', result2);

// ==== найти среднее значение из всех Reduce

const result3 = students.reduce((acc, elem, i, arr) => {
    console.log(acc += elem.age / arr.length);
    return acc
}, 0)