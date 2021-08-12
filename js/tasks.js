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

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) { },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);
