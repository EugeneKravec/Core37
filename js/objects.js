console.log({});
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

console.log(obj);

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
console.log(age);
// Если имя ключа и значение приносящей переменной
// одинаковы, мы можем запистаь только ключ

const skills = ['HTML', 'CSS'];

const myUser = {
  age,
  skills,
};
console.log(myUser);

// Вычисляемые сво-ва obj[var]
