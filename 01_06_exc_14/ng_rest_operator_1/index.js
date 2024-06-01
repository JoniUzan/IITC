function sumAll(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 3, 4, 6, 8));
