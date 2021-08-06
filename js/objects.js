// console.log({});
const obj = {
  // props(key: value;) - сво-во объекта
  prop_a: 'A',
  prop_b: 'B',
  prop_c: 2,
  prop_d: null,
  prop_e: true,
  name: 'Eugene',
  age: 31,
  isOnline: false,
  isStudent: true,
  skills: ['HTML', 'CSS'],
  misic: {
    bands: ['Bi-2'],
    songs: ['yo'],
  },

  // methods
  // ES5 - 2009
  showName1: function () {
    console.log('Hello');
  },
  // ES6 - 2015
  showName2() {
    console.log('World');
  },
};

// console.log(obj);

// Получить значение сво-ва в консоли GET READ

// console.log('name:', obj.name);
// console.log('age:', obj.age);
// obj.showName1();
// obj.showName2();

// console.log('name:', obj['name']);
// console.log('age:', obj['age']);

// Изменить значение сво-ва в объекте UPDATE

// console.log('age:', obj.age);
// obj.age = 18;
// console.log('age:', obj.age);

// не задано значение такому сво-ву - поэтому undefined
// obj.languages;
// console.log(obj.languages);

// Добавили сво-во в объект POST CREATE
// obj.languages = ['ukr', 'rus', 'eng'];
// console.log(obj.languages);

// Удалить - редко используется, чтобы не было разрыва шаблона

// delete obj.languages;
// console.log(obj.languages);

// Короткое сво-во - shotr props

let age = 30;
// console.log(age);
// Если имя ключа и значение приносящей переменной
// одинаковы, мы можем запистаь только ключ

const skills = ['HTML', 'CSS'];

const myUser = {
  age,
  skills,
};
// console.log(myUser);

// Вычисляемые сво-ва obj[var]

let key1 = 'name';
let key2 = 'lastName';
let key3 = 'skills';

const nextUser = {
  studentName: 'user',
  [key1]: 'user',
};

// console.log(nextUser);
// console.log('key1');
// console.log('key2');
// console.log('key3');

for (const prop in nextUser) {
  // console.log('key-', prop);
  // if (Object.hasOwnProperty.call(object, key)) {
  //   const element = object[key];
  // }
}

const object = {};
for (const key in object) {
  // console.log('key-', key);
}

const product = {
  price: 10,
};
// console.log('product', product);

// Создание нового объекта со свойствами другого
// Наследование Конструктор Object.create()
const newProduct = Object.create(product);
// console.log('newProduct', newProduct);

// newProduct.price = 100;

const newNewProduct = Object.create(newProduct);
// console.log('newNewProduct', newNewProduct);
newNewProduct.title = 'product';

for (let key in newNewProduct) {
  if (newNewProduct.hasOwnProperty(key)) {
    // console.log('key of newNewProd = ', key);
    // console.log(newNewProduct[key]);
  }
}

// obj.hasOwnProperty;
// console.log(newNewProduct.hasOwnProperty('price'));
// console.log(newProduct.hasOwnProperty('price'));
// console.log(product.hasOwnProperty('price'));

// Object.keys(obj) - массив ключей
// Object.values(obj) - массив значений
// Object.entries(obj) - многомерный массив свойств
// [[ключ: значение],[ключ: значение],[ключ: значение]]

// 1
const myKeys = Object.keys(obj);

// console.log(myKeys);
// console.log(myKeys[0]); // key at index 0
// console.log(obj[myKeys[0]]);
//          obj['prop_a']

// 2
const myValues = Object.values(obj);
// console.log(myValues);

const prod = {
  count: 2,
  price: 10,
};

const vals = Object.values(prod);
// console.log(vals);

const totalPrice = vals[0] * vals[1];
// console.log(totalPrice);

// 3
const myEntries = Object.entries(obj);
// console.log(myEntries);

// THIS this ===>
let userName = 'dkfjs;l';
const user = {
  userName: 'Super User',
  showUserName() {
    return `Hello ${this.userName}`;
    // Контест исполнения, местоимение
    // заменяет имя обращения объекта по имени
  },
};
// console.log(user.showUserName());

function calculateMeanTemperature({
  today: { low: todayLow, high: todayHigh },
  tomorrow: { low: tomorrowLow, high: tomorrowHigh },
}) {
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
// const number1 = 999;
// let sun = 0;
// for (let i = 0; i <= number1; i += 1) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sun = sun + i;
//   }
// }
// console.log(sun);
// const number1 = 100;
// let firstNum = 0;
// let secondNum =
// // let fibonachiNum =
// for (let i = 1; i <= number1; i += 1) {
//   console.log(i);
//   firstNum = firstNum + i;
// }
// console.log(firstNum);

let firstNum = 1;
let secondNum = 2;
let fibonachiNum = 0;
let sum = 2;

while (true) {
  // let fibonachiNum = array[array.length - 1] + array[array.length - 2];
  fibonachiNum = firstNum + secondNum;

  if (fibonachiNum > 4000000) {
    break;
  }
  firstNum = secondNum;
  secondNum = fibonachiNum;

  if (fibonachiNum % 2 === 0) {
    sum += fibonachiNum;
  }
}
console.log(sum);
console.log(fibonachiNum); // 4613732 4000001
