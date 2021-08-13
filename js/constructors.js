console.log('hello');

const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 1
console.log(a);
// a[c] = 2
console.log(a);
console.log(a[b]);
// Функция конструктор это синтаксис ES5 
// Синтаксис. Функции нужны для создания новых объектов

function Constructor(prop1, prop2) {
    this.prop1 = 'prop1'
    this.prop2 = 'prop2'
}
// {///} new
// ДВА СПОСОБА ВЫЗОВА ФУНКЦИЙ !!!!
//  call - Constructor() - обычный вызов функции
//  construct - new Constructor() - вызов функции Конструктора
const newObj = new Constructor()  // {}

// Example

const User = function (login, password) {
    this.login = login
    this.password = password

    this.showLogin = function () {
        console.log(this.login);
    }
}

const user1 = new User('Eugene', 'praol')
console.log(user1);

// User {login: "Eugene", password: "praol"} - Экземпляр конструктора User
// login: "Eugene" - личное св-во объекта
// password: "praol" - личное св-во объекта

// ПРАВИЛО
// Функции добавляем через прототайп
// ====================================
User.prototype.showPass = function () {
    console.log(this.password);
}
//  ===================================

const user2 = new User('Olga', 'parol123')
console.log(user2);

User.prototype.showYour = function () {
    console.log(this.password);
}
User.prototype.showMy = function () {
    console.log(this.password);
}

// 1. Создаем новая функцию на базе иходной
function NewUser(name, age, login, password) {
    // Привязываем исходную функцию и контекст с параметрами
    User.call(this, login, password)
    // Добавляем новые параметры
    this.name = name
    this.age = age
}

// 2. Переписываем prototype новой ф-ции
// и привязываем в него prototype из исходной
NewUser.prototype = Object.create(User.prototype)

// 3. Создаем дополнительно сво-во Kонструктор
NewUser.prototype.constructor = NewUser

// 4. Добавляем новые методы в prototype новой ф-ции
NewUser.prototype.updateAge = function () {
    return this.age += 1
}
// 5. Создаем экземпляр из новой функции
const newUser1 = new NewUser('Valentina', 18, 'hvalentina', 'Saveliy1234')
console.log(newUser1);

newUser1.showLogin()
newUser1.showPass()
console.log(newUser1.updateAge());
