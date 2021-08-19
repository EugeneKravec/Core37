let myVar = 'Eugene'
// console.log(myVar);

function changeName(name) {
    return myVar = name
}
// console.log(changeName('Olga'));

// ==================================

const scores = [13, 12, 14, 15, 16]
function getBestResults(results) {
    // console.log(...results);
    // console.log(Math.max(...results));
    return (results = Math.max(...results))
}

// console.log(getBestResults(scores));

// ==================================

const numbers = [1, 2, 3, 4, 5]
function updateArr(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        // console.log(arr);
        arr[i] += 1
    }
    return arr
}
console.log(updateArr(numbers));
