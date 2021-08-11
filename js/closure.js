//  Замыкания
// Счетчик самый наглядный пример замыкания

document.getElementById("dec").addEventListener('click', () => {
    
    let count = productCounter.decrement(5)
    document.getElementById('count').textContent = count
});

document.getElementById("inc").addEventListener('click', () => {
    
    let count = productCounter.increment(5)
    document.getElementById('count').textContent = count
});

// document.getElementById("count");

const productCounter = createCounter()
console.log(productCounter);

productCounter.increment(5)
console.log(productCounter);

function createCounter() {
    // Lexical Environment
    let current = 0

    function increment(value) {
        console.log(current);
        return (current += value)
    }

    function decrement(value) {
        console.log(current);
        if (current <= 0) return
        return (current -= value)
    }
    // Lexical Environment
    return {increment, decrement, current}
}