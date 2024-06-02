let products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "watch", price: 200 },
];

function productNamesArray() {
  return products.map((product) => product.name);
}
console.log(productNamesArray());

function productMoreThen500() {
  return products.filter((product) => product.price > 500);
}
console.log(productMoreThen500());

function totalPrice() {
  return products.reduce((total, product) => (total += product.price), 0);
}
console.log(totalPrice());
