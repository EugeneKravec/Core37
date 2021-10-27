// Promise - это конструктор. Из конструктора мы можем создать много эксземпляров
console.dir(Promise);

// const newPromise = new Promise(callback)

// function callback(resolve, reject) {
//     resolve('1')
//     reject('2')
// }

// == 2 ==

let condition = 1

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        condition ? resolve(condition) : reject(condition)


    }, 3000)

})

// console.log(newPromise)

// setTimeout(() => {
//     console.log(newPromise)
// }, 1000)


// Экземпляр Промиса имеет 2 состояния
// Pending - до исполнения
// Settles - исполнился
// Fulfilled - если все хорошо, (вызван метод resolve)
// Rejected - если все НЕ хорошо, (вызван метод rejected)

//== Если обрабатывать промис то только через Then
// newPromise.then(
//     (success) => { console.log('Then', success); }, // Примет р-т от resolve('1')
//     (error) => { console.log('Then', error); } // Примет р-т от reject('2')
// )

//== Но лучше в then обрабатывать успех, а в catch - ошибки
// newPromise
//     .then((success) => console.log('Then', success)) // Примет р-т от resolve('1')
//     .catch((error) => console.log('Then', error));  // Примет р-т от reject('2'))

// а когда нам нужно что-то исполнить в любом случае
// пришел успех или ошибка

// newPromise
//     .then((success) => console.log('Then', success))
//     .catch((error) => console.log('Catch', error))
//     .finally(() => console.log('Ты мололдец в любом случае!!!'))

// Частон нужно обработать в несколько этапов успешный промис

// newPromise
//     .then((firstSuccess) => {
//         console.log('firstSuccess', firstSuccess);
//         return firstSuccess + 3;
//     })
//     .then((secondSuccess) => {
//         console.log('secondSuccess', secondSuccess)
//         return secondSuccess + 3
//     })
//     .then((thirdSuccess) => console.log('thirdSuccess', thirdSuccess))
//     .catch((error) => console.log('Catch', error))
//     .finally(() => console.log('Ты мололдец в любом случае!!!'))

// ХОЧУ ОБРАБОТАТЬ НЕСКОЛЬКО РАЗНЫХ ПРОМИСОВ

const prom1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 0)
})
const prom2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(2)
    }, 500)
})
const prom3 = new Promise((res, rej) => {
    setTimeout(() => {
        // rej(3)
    }, 1000)
})

// Promise.all([prom1, prom2, prom3])
//     .then((ok) => {
//         console.log('ok', ok);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })

// Promise.race([prom1, prom2, prom3])
//     .then((ok) => {
//         console.log('ok', ok);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })

// Promise.resolve(1)
// // new Promise((res) => {
// //     res(1)
// // })
// Promise.reject(0)
// // new Promise((rej) => {
// //     rej(1)
// // })
// Promise.finally()

// NOT GOOD
// function main(ok, neOk) {
//     condition ? ok() : neOk()
// }--*++**-

// Very GOOD
condition = 0
function mainProm() {
    return condition ? Promise.resolve('ok') : Promise.reject('neOk')
}
const result = mainProm()
console.log(result);

result
    .then((ok) => {
        console.log(ok);
    })
    .catch((error) => {
        console.log(error);
    })