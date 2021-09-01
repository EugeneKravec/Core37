// Spread - распыление

// распыление элементов массива - Math.min(...arr)

const numbers = [1, 2, 3, 4, 5, 6, 7, 84];
// console.log(Math.max(3, 6, 3, 56));
// console.log(Math.max(...numbers)); // Распылили массив
// console.log(Math.min(...numbers));

function getResult(a, b) {
  let total = 0;
  console.log(arguments); // psevdoarray
  // создание нового массива через распыление исходного
  const nums = [...arguments]; // normal array
  for (let num of nums) {
    total += num;
  }
  // console.log(nums);

  return total;
}
// console.log(getResult(2, 5, 4, 5, 6));

const first = [1, 2, 3];
const cloneFirst = first.slice(1, 2);
// console.log('cloneFirst:', cloneFirst);

const newArr = first.concat(cloneFirst);
// console.log(newArr);

const spreadArr = [...first, 444, ...first.slice(1, 2)];
// console.log(spreadArr);

//  Распыление объектов

const product = {
  title: 'Cake',
  name: 'Napoleon',
};

const params = {
  category: 'sweets',
};

// console.log(product);
const newProduct = { ...product, price: 30, ...params };
// console.log(newProduct);

// REST - сбор
const getTotalResult = (...args) => {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
};
let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65);
// console.log('result', result);

result = getTotalResult(22, 35, 1, 25, 31, 24, 44, 6, 78);
// console.log('result', result);
const scoreOfStudents = [];
function getResultsOfTests(mail, ...scores) {
  //   console.log(mail);
  //   console.log(args);
  let totalScore = 0;

  for (let score of scores) {
    totalScore += score;
  }
  // console.log('totalScore', totalScore);

  const obj = {
    email: mail,
    score: totalScore,
  };
  // console.log(obj);
  scoreOfStudents.push(obj);
  console.log(scoreOfStudents);
}

getResultsOfTests('a@gmail.com', 0, 1, 1, 1, 1, 1, 1, 1, 1);
getResultsOfTests('b@gmail.com', 0, 1, 1, 1, 1, 7, 1, 1, 1);
getResultsOfTests('c@gmail.com', 0, 1, 1, 6, 1, 1, 1, 1, 1);
getResultsOfTests('d@gmail.com', 0, 1, 1, 4, 1, 1, 1, 1, 1);
getResultsOfTests('e@gmail.com', 0, 1, 1, 1, 1, 8, 1, 1, 1);
