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
delete array[1];
delete array[2];

console.log(array[1]);
console.log(array[2]);

// console.log(array);

// add element by index
array[1] = 'HTML';
array[2] = 'CSS';
console.log(array);

// Iteration by array
// // break & continue                           i = i + 1
for (let i = 0; i < array.length; i += 1) {
  console.log('break');
  if (typeof array[i] === 'string') {
    break;
  }
  console.log(`Iteration - ${i + 1}`, array[i]);
  // console.log(`index: `, i);
}

// Multidimentional arrays - многомерные массивы

const multiArray = [
  [1, 10, 100, 1000],
  [2, 20, 200, 2000],
  [3, 30, 300, 3000],
];
// console.log(multiArray.length);
// console.log(multiArray[1]);
let it = 1;
for (let zzz of multiArray) {
  console.log(`Iteration - ${it}`, zzz);
  it += 1;
  for (let xxx of zzz) {
    console.log(`x`, xxx + 1);
  }
}
