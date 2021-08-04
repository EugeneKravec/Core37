// Spread - распыление

// распыление элементов массива - Math.min(...arr)

const numbers = [1, 2, 3, 4, 5, 6, 7, 84];
console.log(Math.max(3, 6, 3, 56));
console.log(Math.max(...numbers)); // Распылили массив
console.log(Math.min(...numbers));

function getResult(a, b) {
  let total = 0;
  console.log(arguments); // psevdoarray
  // создание нового массива через распыление исходного
  const nums = [...arguments]; // normal array
  for (let num of nums) {
    total += num;
  }
  console.log(nums);

  return total;
}
console.log(getResult(2, 5, 4, 5, 6));

const first = [1, 2, 3];
const cloneFirst = first.slice(1, 2);
console.log('cloneFirst:', cloneFirst);

const newArr = first.concat(cloneFirst);
console.log(newArr);

const spreadArr = [...first, 444, ...first.slice(1, 2)];
console.log(spreadArr);
