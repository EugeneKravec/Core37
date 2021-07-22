// Arrays
const array = [1, 2, 3, 'JavaScript', 4, 5, 6];
// console.log(array);

// Кол-во элементов
// console.log(array.length);

// Получить значение элемента массива GET запрос
// console.log(array[1]);
// console.log(array[3]);

// Изменить значение элемента массива PATCH запрос
array[0] = 'I Love';
// console.log(array);

// Изменить значение элемента массива DELETE запрос
// delete array[1];
// delete array[2];

// console.log(array[1]);
// console.log(array[2]);

// console.log(array);

// add element by index
array[1] = 'HTML';
array[2] = 'CSS';
console.log(array);

// Iteration by array
// // break & continue                           i = i + 1
// for (let i = 0; i < array.length; i += 1) {
//   console.log('break');
//   if (typeof array[i] === 'string') {
//     break;
//   }
//   console.log(`Iteration - ${i + 1}`, array[i]);
//   // console.log(`index: `, i);
// }

// Multidimentional arrays - многомерные массивы

// const multiArray = [
//   [1, 10, 100, 1000],
//   [2, 20, 200, 2000],
//   [3, 30, 300, 3000],
// ];
// console.log(multiArray.length);
// console.log(multiArray[1]);
// let it = 1;
// for (let zzz of multiArray) {
// console.log(`Iteration - ${it}`, zzz);
// it += 1;
// for (let xxx of zzz) {
//   console.log(`x`, xxx + 1);
// }
// }

// let age = 30;
// console.log('age', age);

// let myAge = age; // Xerox
// console.log('myAge', myAge);

// age = 31;
// console.log('age31', age);
// console.log('myAge', myAge);
// console.log(age === myAge);
// ==========================
const numbers = [12, 23, 34, 45];
// console.log(numbers);

const myNumbers = numbers;
// console.log(myNumbers);

numbers[0] = 100500;
// console.log(myNumbers);
// console.log(numbers);

// Array Methods (Метод конструктора Array)

// console.log('numbers', numbers);

// Method slice()
const mySliceNumbers = numbers.slice();
// console.log('mySliceNumbers', mySliceNumbers);

numbers[0] = 12;
// console.log('numbers', numbers);
// console.log('mySliceNumbers', mySliceNumbers);

const firstTwoElems = numbers.slice(0, 2);
// console.log(firstTwoElems);

// split() - Преобразование строки в массив
let myString = 'my String';

for (const string of myString) {
  console.log(string);
}
// console.log(myString.length);
// console.log(typeof myString);
// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);
// console.log(myString[4]);
// console.log(myString[5]);
// console.log(myString[6]);
// console.log(myString[7]);
// console.log(myString[8]);

const arrFromString = myString.split('S');
console.log(arrFromString);

// join() - Преобразование массива в строку

const myArr = ['I', 'Love', 'JS'];
console.log(myArr);

let arrayToString = myArr.join('[');
console.log(arrayToString);