// Task 1
// Создать объект товра со сво-ми name , price, quantity и
// методами, уоторые показывают их текущее значение
// и метожами, что изменяют их значения.

// const product = {
//   name: 'prod',
//   price: 0,
//   quantity: 0,
//   showName() {
//     // console.log(this.name);
//   },
//   showPrice() {
//     // console.log(this.price);
//   },
//   showQuantity() {
//     // console.log(this.quantity);
//   },
//   changeName(value) {
//     return (this.name = value);
//   },
//   changePrice(value) {
//     return (this.price = value);
//   },
//   changeQuantity(value) {
//     return (this.quantity = value);
//   },
//   //   deleteProp(propName) {
//   //     delete this[propName];
//   //   },
//   updateQuantity(value, isCost) {
//     if (isCost) {
//       return (this.quantity -= value);
//     } else {
//       return (this.quantity += value);
//     }
//   },
// };
// // console.log(product);
// // product.deleteProp('name');
// // check up ======= проверка
// product.showName();
// product.showPrice();
// product.showQuantity();

// product.changeName('Peach');
// product.changePrice(55);
// product.changeQuantity(3);

// // console.log(product);

// product.updateQuantity(2, false);
// product.showQuantity();

// product.updateQuantity(1, true);
// product.showQuantity();

// // Task 2
// // Добавь к объекту product метод, кторый высчитывает
// // стоисоть общего кол-ва текущего товара

// product.getTotalPrice = function () {
//   return this.price * this.quantity;
// };

// // console.log(product.getTotalPrice());

// // Task 3 массив объектов

// // Записать в переменную TotalPrice общую стоимость
// // всех товаров в массиве products

// const products = [
//   { name: 'Grape', price: 80, quantity: 2 },
//   { name: 'Banana', price: 30, quantity: 5 },
//   { name: 'Kiwi', price: 100, quantity: 1.5 },
// ];
// function getTotalPrice(arr) {
//   let totalPrice = 0;
//   for (let i = 0; i < products.length; i++) {
//     // console.log(products[i]);
//     totalPrice += products[i].price * products[i].quantity;
//   }
//   //   console.log(totalPrice);
// }
// // checkup ======
// getTotalPrice(products);

// // Task 4
// // создать функцию, кторая принимает масси продуктов,
// // название товара, его количество
// // и выводит его стоимость если товра достаточно или сообщает о том,
// // что товара нет на складе в указанном количестве.
// // Написать функцию тремя способами (Expression, Declaration & Arrow)

// const allProducts = [
//   { name: 'bread', price: 20, quantity: 100 },
//   { name: 'milk 2,5%', price: 30, quantity: 24 },
//   { name: 'cheese', price: 300, quantity: 10 },
//   { name: 'chorizzo', price: 560, quantity: 4 },
//   { name: 'lemon', price: 60, quantity: 9 },
//   { name: 'lavazza', price: 250, quantity: 24 },
// ];
// console.log(allProducts);
// function getResponse(arr, prod, count) {
//   console.log(arr);
//   for (let product of arr) {
//     console.log(product.name);
//     //   проверяем
//     if (product.name === prod) {
//       console.log(`${prod} есть на складе`);
//       if (product.quantity >= count) {
//         console.log(`${prod} можете купить`);
//         let cost = product.price * count
//       } else {
//         console.log(`${prod} нет в достаточном количестве`);
//       }
//     } else {
//       console.log(`${prod} нет такого товара на складе`);
//     }
//   }
// }

// getResponse(allProducts, 'lavazza', 5);


// Задание
// Необходимо написать логику обработки заказа пиццы.
// Выполни рефакторинг метода order так, 
// чтобы он принимал вторым и третим параметрами 
// два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, 
// метод order должен возвращать результат вызова колбэка onError, 
// передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'

// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, 
//  метод order должен возвращать результат вызова колбэка onSuccess, 
//  передавая ему аргументом имя заказанной пиццы.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) { },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// 2.
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// 3. 
// class StringBuilder {
//   constructor(baseValue) {
//     this.value = baseValue;
//   }
//   getValue() {
//     console.log(this.value);
//     return this.value;
//   }
//   padEnd(str) {
//     // console.log(`${this.value}${str}`);
//     return this.value = this.value + str;

//   }
//   padStart(str) {
//     // console.log(`${str}${this.value}`);
//     return this.value = str + this.value;
//   }
//   padBoth(str) {
//     return this.value = str + this.value + str;
//   }
// }



// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// builder.getValue(); // '.'
// builder.padStart('^');
// // console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// // console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 4.

// class Storage {
//   #items
//   constructor(items) {
//     this.#items = items
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }

// }


// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 5. 

// class StringBuilder {
//   #value
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

//  6.
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice >= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// 7. 
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return `Внимание! Цена превышает допустимую.`
//     } else { return `Всё хорошо, цена в порядке.` }
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

//  8.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;


//   constructor({ email, accessLevel }) {
//     super(email);
//     this.blacklistedEmails = [];

//     blacklist(email)
//     blacklistedEmails.push(email)
//   };

//   isBlacklisted(email) {
//     return blacklistedEmails.includes(email)
//   };



//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// 9. module 6 =====================================================================
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArr = [];
//   numbers.forEach(element => {
//     newArr.push(element)
//   });
//   newArr.forEach((element, index) => {
//     if (element % 2 === 0) {
//       newArr.splice(index, 1, element + value)
//     }
//   })
//   return newArr
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// 9. module 6 =====================================================================

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] }
// ];

// const allCourses = students.flatMap(student => student.courses);
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(allCourses);
// console.log(uniqueCourses);

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', genres: ['приключения', 'историческое'] },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', genres: ['фантастика', 'мистика'] },
//   { title: 'Красна как кровь', author: 'Ли Танит', genres: ['ужасы', 'мистика', 'приключения'] }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((elem) => elem.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index);
// console.log(allGenres);
// console.log(uniqueGenres);


// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.

{/* <ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. */}

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.querySelector('#gallery')

// const addImg = images.reduce((acc, elem) => {
//   return acc + `<li><img class='image' src=${elem.url} alt=${elem.alt}> </li>`
// }, '')

// gallery.insertAdjacentHTML('beforeend', addImg)

const inputW = document.querySelector('.width')
const inputH = document.querySelector('.height')
const divEl = document.querySelector('.div')
// console.dir(divEl.style.width);

const onChangeW = () => {
    // divEl.style.width = 
}
const onChangeH = () => { }

// inputW.addEventListener('input', onChangeW)
// inputW.addEventListener('input', onChangeH)
