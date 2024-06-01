const fruits = ["apple", "banana", "cherry", "date", "fig"];
const vegetables = ["carrot", "broccoli", "spinach", "potato", "onion"];

console.log("Fruits:", fruits);
console.log("Vegetables:", vegetables);

const groceries = [...fruits, ...vegetables];
console.log(groceries);