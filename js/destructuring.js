// Деструктуризация (отностися к сущностям)

const product = {
  title: 'mask',
  price: 100,
  values: ['50ml', '30ml', '100ml'],
};

function showTitle(name) {
  console.log(`this product is ${name}`);
}

showTitle('Parfume');
console.log(product.title);

showTitle(product.title);
const { title: myTitle } = product; // деструктуризация
showTitle(myTitle);

const products = {
  parfums: {
    male: [
      {
        title: 'Home',
        name: 'Dior',
        price: '3000',
      },
    ],
    female: [
      {
        title: 'Jadore',
        name: 'Dior',
        price: '2800',
      },
    ],
  },
  masks: {},
};
console.log(products.parfums.female[0].title);
let title = products.parfums.female[0].title;
console.log(title);

// Destructuring
// const { property1 } = obj

const { title: productTitle, name, price } = products.parfums.female[0];
console.log('Rename productTitle', productTitle);
console.log('name', name);
console.log('price', price);

const { title: productTitleMale, name: nameMale, price: priceMale } = products.parfums.male[0];
console.log('Rename productTitleMale', productTitleMale);
console.log('name', nameMale);
console.log('price', priceMale);

const { female, male } = products.parfums;
console.log(female, male);

// Деструктуризация массивов

const rgb = [255, 39, 45];
console.log(rgb);

// const [] = array

const [red, , blue] = rgb;
console.log('red:', red);
// console.log('green:', green);
console.log('blue:', blue);
