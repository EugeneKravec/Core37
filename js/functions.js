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
    console.log(`iteration-${i + 1}`);
    if (array[i] === value) return `Значение ${value} есть в массиве`;
  }
  return `Значение ${value} !есть в массиве`;
}

console.log(getValues([4, 6, 7, 3, 8, 4, 0, 2], 6));

console.log(getValues([4, 6, 7, 3, 8, 4, 0, 2], 5));
