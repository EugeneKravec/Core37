// Функция высшего порядка high order function
// callback - функция которая выполняется внутри другой функции

function highOrder(value, callback) {
  //   console.log(`Hello I'm high order function`);
  callback(value);
}
highOrder(`Hello, I'm callback`, setMessage);

// Callback function
function setMessage(message) {
  //   console.log(message);
}

// Example 1
function toDoMeal(prods, zzz) {
  //   console.log(prods);
  let result = zzz(prods);
  //   console.log(result);
  //   console.log(`your dish - `);
}
toDoMeal(['bread', 'meat'], toDoSandwich);
toDoMeal(['banana', 'orange'], toDoSandwich);

//  Callback
function toDoSandwich(arr) {
  //   console.log(arr);
  let isBread = arr.includes('bread');
  //   console.log(isBread);
  return isBread ? `Sandwich for you!` : `no bread`;
}

// Example 2
const results = [{ mail: '', scores: 10 }];
function getResultsByTests(getMax, getMin, mail, ...scores) {
  //   console.log(mail);
  //   console.log(scores);
  // 1 добавляем данные в БД о тесте
  let total = 0;
  for (let i of scores) {
    total += i;
  }
  //   console.log(total);
  const obj = { mail, scores: total };
  results.push(obj);
  //   console.log(results);
  // 2 проверяем изменения
  const scoreArr = [];
  for (let obj of results) {
    // console.log(obj.scores);
    scoreArr.push(obj.scores);
  }
  //   console.log(scoreArr);
  let max = getMax(scoreArr);
  let min = getMin(scoreArr);
  //   console.log(max);
  //   console.log(min);
}
getResultsByTests(getMaxValue, getMinValue, 'a@gmail.com', 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1);
getResultsByTests(getMaxValue, getMinValue, 'a@gmail.com', 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

// Callbacks
function getMaxValue(arr) {
  return Math.max(...arr);
}
function getMinValue(arr) {
  return Math.min(...arr);
}

// Последовательность Фибоначи
// ==============

let firstNum = 100;
const getF = (count, callback) => {
  // local variable
  let firstNum = 0;
  let secondNum = 1;
  const arrWithValues = [firstNum,secondNum]
  // console.log(firstNum);
  // Хочу получить массив с числами токой последовательности

  for (let i = 3; i <= count; i++) {
    let newNum = firstNum + secondNum
    // console.log('newNum', newNum);
    firstNum = secondNum
    secondNum = newNum
    arrWithValues.push(newNum)
  }
 
  
  let result = callback(arrWithValues)

  return result
};
// Вызов функции 

console.log('Только четные',getF(18, getEvenValues));
console.log('Сумма всех',getF(7, getSum));

// callback 
function getEvenValues(arr) {
  const arrValues = []
  for (let num of arr) {
    if (num % 2 === 0) {
      arrValues.push(num)
    }
  }
  return arrValues
}

function getSum(arr) {
  let total = 0
  for (let i of arr) {
    total +=i
  }
  return total
}