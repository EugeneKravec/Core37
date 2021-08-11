//  Call stack абстракция
// LIFO принцип исполнения стека вызовов

// | 6 | Last in - First out
// | 5 |
// | 4 |
// | 3 |
// | 2 |
// | 1 |

first()
function first() {
    console.log(`this is 1 function STARTED`);
    second()
    console.log(`this is 1 function FINISHED`);
}
function second() {
    console.log(`this is 2 function STARTED`);
    third()
    console.log(`this is 2 function FINISHED`);
}
function third() {
    console.log(`this is 3 function STARTED`);
    fourth()
    console.log(`this is 3 function FINISHED`);
}
function fourth() {
    console.log(`this is 4 function STARTED`);
    fifth()
    console.log(`this is 4 function FINISHED`);
}
function fifth() {
    console.log(`this is 5 function STARTED`);
    sixth()
    console.log(`this is 5 function FINISHED`);
}
function sixth() {
    console.log(`this is 6 function STARTED`);
    console.log(`this is 6 function FINISHED`);
}

