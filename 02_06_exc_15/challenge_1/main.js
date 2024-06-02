const inventory = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];

function arrayToObject() {
  return inventory.reduce((acc, product) => {
    acc[product.id] = {
      id: product.id,
      name: product.name,
      price: product.price,
    };
    return acc;
  }, {});
}

console.log(arrayToObject());
