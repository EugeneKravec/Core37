console.log(1);

class Class {
    // тут создаем сво-ва
    constructor(prop1 = 0, prop2 = 1) {
        this.prop1 = prop1
        this.prop2 = prop2
    }
    // тут добавляем методы
    // this.method: function (params) {} ES5

    //  ES6 below
    method1() {
        console.log(this.prop1);
    }
    method2(value) {
        return (this.prop2 = value)
    }
}

// Examples
// Create Class
class User {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
    showLogin() {
        console.log(this.login);
    }
}

// Создаем экземпляр
// Create instance of Class (instance = new Object)

const user1 = new User('Euegene', 'ghjghj')
// console.log(user1);

// Создаем наследуемый класс на базе исходного
// Create inherit Class

class NewUser extends User {
    constructor(name, age, login, password) {
        // инициализируем исходный класс
        super(login, password)
        this.name = name
        this.age = age
    }
    updateAge() {
        return (this.age += 1)
    }
}

// Create instance of the NewClass

const newUser1 = new NewUser('Olga', 25, 'Helga', 'tuyi')
// console.log(newUser1);
// console.log(newUser1.updateAge());
// newUser1.showLogin();

// Сво-ва аксессоры getter & setter
// get - получить, set - задать

class BaseProduct {
    constructor(title, price) {
        this._title = title
        this._price = price // негласное правило
        // делать нижнее подчеркивание для get & set

    }
    // get & set
    get price() {
        return this._price
    }
    set price(value) {
        return this._price = value
    }

    get title() { return this._title }
    set title(value) { return this._title = value }

}

const baseProduct = new BaseProduct('Banana', 25)
console.log(baseProduct);

// Плохая практика получать значение св=ва напрямую
// делать через GET
console.log('Сво-во _price:', baseProduct._price); // Bad practice
console.log("price by getter:", baseProduct.price); // Good practice

// Меняем значение через set
baseProduct.price = 35
console.log("price after setter:", baseProduct.price);


console.log('Сво-во _title:', baseProduct._title); // Bad practice
console.log("title by getter:", baseProduct.title); // Good practice

// Меняем значение через set
baseProduct.title = 'Orange'
console.log("title after setter:", baseProduct.title);


// ============================================
// Статические сво-ва и методы

class Comment {
    // записываются до метода конструктор
    static name = 'anonim'
    static showName() {
        console.log(this.name);
    }

    constructor(author, text) {
        this.author = author
        this.text = text
    }
}

const comment1 = new Comment('Pushkin', 'some text')
console.log(comment1);
console.log(comment1.author);
console.log(comment1.text);

// Вызываем статические сво-ва
console.log(comment1.name); // undefined
console.log(Comment.name);

// comment1.showName() // comment1.showName is not a function
Comment.showName()