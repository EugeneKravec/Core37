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

const { title: productTitle } = products.parfums.female[0];
console.log('pT', productTitle);
