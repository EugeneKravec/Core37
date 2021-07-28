// Создание функций

// Finction Expression - функцинальное выражение

// myFuncDecl(); - Можно вызвать до объявления

const myFunc = function (param1, param2) {
  // Перечисляем действия, инструкции, которые должны выполняться
  console.log(`Это функцинальное выражение c параметрами ${param1} & ${param2}`);
  //   console.log(param1, param2);
};

// Finction Declaration - Декларативное объявление функции
// (не хранится в переменной)
function myFuncDecl(param) {
  console.log(`Это декларативное объявление`);
}

// Arrow function - ES6 (year 2015) - Аналог Finction Expression

const myArrowFunc = param1 => {
  console.log(`This is arrow function`);
};

// Вызовы функций

// myFunc('Hello', 'Baby');
// myFuncDecl();
// myArrowFunc();

// Params & Arguments - параметры и аргументы
// Default params - значения задаются при объявлении переменной
let user;
function toSayHallo(userName = 'User') {
  alert(`${userName}, рады вас приветствовать!`);
}
// toSayHallo('Eugene');
// toSayHallo(user);

function showInfo(userAge, userName) {
  //   console.log(`Hello, my name is ${userName}. I am ${userAge} years old`);
}
showInfo('Eugene', 34);

// Arguments & ...args - если мы не знаем сколько задавать параметров
// Псевдомассивово около 20 шт
function getResults(...allParams) {
  //   console.log(arguments);
  //   console.log('allParams', allParams);
  for (const elem of arguments) {
    // console.log(elem);
  }
  //   arguments.push(1);
  // Преобразование псевдомассива в массив
  const myArgs = Array.from(arguments);
  //   console.log(myArgs);
  myArgs.push(1);
  //   console.log(myArgs);
}

getResults(0, 1, 2);
getResults();

// В стрелочной функции нет "arguments", вместо него rest & spread
// rest - собирает в массив аргументы, котрые передаются в функцию
// spread - распыляет массив или объект, чтобы получить значения
const getArrayRes = (...allParams) => {
  //   console.log(arguments);
  //   console.log(allParams);
};
getArrayRes(4, 5, 6, 6, 34, 3);

// Guard Clause условие выхода из функции

function getValues(array, value) {
  //   console.log(array);
  for (let i = 0; i < array.length; i += 1) {
    // console.log(`iteration-${i + 1}`);
    if (array[i] === value) return `Значение ${value} есть в массиве`;
  }
  return `Значение ${value} !есть в массиве`;
}
let result = getValues([4, 6, 7, 3, 8, 4, 0, 2], 6);
// console.log(result);

result = getValues([4, 6, 7, 3, 8, 4, 0, 2], 5);
// console.log(result);

function getSpam(text, words) {
  // console.log(text);
  // console.log(words);
  for (let word of words) {
    // console.log(word);
    if (text.includes(word)) return `SPAMM!!!`;
  }
  return text;
}
const arr = ['sapiente', 'dolor'];
let value = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Non, quam distinctio quae hic nemo placeat, amet
        minima sapiente corrupti aliquam cupiditate velit quo reiciendis pariatur iste tempora voluptatem temporibus
        suscipit?`;
// console.log(getSpam(value, arr));

// Arrow func & return

// const getTotal = (a, b) => {
//   return a + b;
// };

const getTotal = (a, b) => a + b; // неявный возврат
console.log(getTotal(2, 5));

const greet = user => `Hello ${user}`;
console.log(greet('World'));

//  Задачки =>

function checkYear(year) {
  let condition = year % 4 === 0;
  if (condition) return `${year} высокосный`;
  return `${year} не высокосный`;
}
console.log(checkYear(2021));

// =>
function game() {
  let comp = Math.round(Math.random() * (10 - 1) + 1);
  let user = prompt('Введите число от 1 до 10');
  // console.log(comp, user);

  if (comp == user) return `You win`;
  return `You lose`;
}
// console.log(game());

// =>

function getMathResult() {
  let num1 = prompt(`Enter first number`);
  let num2 = prompt(`Enter second number`);
  let symbol = prompt(`Enter symbol number`);

  let total = 0;
  console.log(num1, num2, symbol);

  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2);
      break;
    case '-':
      total = num1 - num2;
      break;
    case '*':
      total = num1 * num2;
      break;
    case '/':
      total = num1 / num2;
      break;

    default:
      console.error('Error');
  }

  return total;
}
console.log('result', getMathResult());

console.log(2 + 2 + '2');
console.log(2 + '2' + '2');
console.log('2' + 2 + 2);
