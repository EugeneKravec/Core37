// Promise - это конструктор. Из конструктора мы можем создать много эксземпляров
console.dir(Promise);

// const newPromise = new Promise(callback)

// function callback(resolve, reject) {
//     resolve('1')
//     reject('2')
// }

// == 2 ==

let condition = 0

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        condition ? resolve('1') : reject('2')


    }, 3000)

})

console.log(newPromise)

setTimeout(() => {
    console.log(newPromise)
}, 4000)


// Экземпляр Промиса имеет 2 состояния
// Pending - до исполнения
// Settles - исполнился
// Fulfilled - если все хорошо, (вызван метод resolve)
// Rejected - если все НЕ хорошо, (вызван метод rejected)
