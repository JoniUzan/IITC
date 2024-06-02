let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => console.log(number, index));
duoble = numbers.map((number) => (number *= 2));
function filretedNumbers() {
  return numbers.filter((number) => number % 2 === 0);
}
console.log(filretedNumbers());

function sum() {
  return numbers.reduce((sum, number) => (sum += number), 0);
}
console.log(sum());
