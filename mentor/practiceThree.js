// Задчки
// ======================================================

// Дана строка; нужно написать функцию, которая позволяет
// вернуть значение true, если строка является
// палиндромом, и false — если нет.

function isPalindrom(params) {
    const reverseString = params.split('').reverse().join('')
    return reverseString === params
}

console.log(isPalindrom('alla'));
// =======================================================

// Напиши функцию-конструктор User, которая создает объект со свойствами login и email
// . В prototype функции-конструктора добавь метод getCredentials(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

function User(login, email) {
    this.login = login
    this.email = email
}

User.prototype.getCredentials = function () {
    console.log(`This is login:${this.login} and this is mail: ${this.email}`);
}

const user1 = new User('Eugene', 'eugene@mail.com')
console.log(user1);
user1.getCredentials()
// ==========================================================

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров,
// и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(arr) {
        this.items = arr
    }

    getItems() {
        return this.items
    }
    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        if (this.items.includes(item)) {

            this.items.splice(this.items.indexOf(item), 1)
        }
    }
}

const newStorage = new Storage(['dorn', 'ivan'])
console.log(newStorage);
console.log(newStorage.getItems());
newStorage.addItem('yo')
newStorage.removeItem('ivan')

// ===============================================================

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    static getSpecs(car) {
        console.log(`
        maxSpeed - ${car.maxSpeed}, 
        speed - ${car.speed},
        isOn - ${car.isOn},
        distance - ${car.distance},
        price - ${car.price}`);
    }

    constructor(config) {
        this.speed = 0
        this._price = config.price
        this.maxSpeed = config.maxSpeed
        this.isOn = false
        this.distance = 0
    }

    get price() {
        return this._price
    }
    set price(newPrice) {
        this._price = newPrice
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false
        this.speed = 0
    }
    /*
       * Добавялет к свойству speed полученное значение,
       * при условии что результирующая скорость
       * не больше чем значение свойства maxSpeed
       */
    accelerate(value) {
        if ((this.speed + value) <= this.maxSpeed && this.isOn) {
            this.speed += value

        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if ((this.speed - value) > 0) {
            this.speed -= value
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) {
            this.distance = hours * this.speed
        }

    }
}

const myCar = new Car({ price: 25, maxSpeed: 600 })
console.log(myCar);
myCar.turnOn(true)
myCar.accelerate(65)

myCar.drive(7)

Car.getSpecs(myCar)