// Task 1
// Создать объект товра со сво-ми name , price, quantity и
// методами, уоторые показывают их текущее значение
// и метожами, что изменяют их значения.

const product = {
  name: 'prod',
  price: 0,
  quantity: 0,
  showName() {
    // console.log(this.name);
  },
  showPrice() {
    // console.log(this.price);
  },
  showQuantity() {
    // console.log(this.quantity);
  },
  changeName(value) {
    return (this.name = value);
  },
  changePrice(value) {
    return (this.price = value);
  },
  changeQuantity(value) {
    return (this.quantity = value);
  },
  //   deleteProp(propName) {
  //     delete this[propName];
  //   },
  updateQuantity(value, isCost) {
    if (isCost) {
      return (this.quantity -= value);
    } else {
      return (this.quantity += value);
    }
  },
};
// console.log(product);
// product.deleteProp('name');
// check up ======= проверка
product.showName();
product.showPrice();
product.showQuantity();

product.changeName('Peach');
product.changePrice(55);
product.changeQuantity(3);

// console.log(product);

product.updateQuantity(2, false);
product.showQuantity();

product.updateQuantity(1, true);
product.showQuantity();

// Task 2
// Добавь к объекту product метод, кторый высчитывает
// стоисоть общего кол-ва текущего товара

product.getTotalPrice = function () {
  return this.price * this.quantity;
};

// console.log(product.getTotalPrice());

// Task 3 массив объектов

// Записать в переменную TotalPrice общую стоимость
// всех товаров в массиве products

const products = [
  { name: 'Grape', price: 80, quantity: 2 },
  { name: 'Banana', price: 30, quantity: 5 },
  { name: 'Kiwi', price: 100, quantity: 1.5 },
];
function getTotalPrice(arr) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);
    totalPrice += products[i].price * products[i].quantity;
  }
  console.log(totalPrice);
}
// checkup ======
getTotalPrice(products);

// Task 4
