const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function intersectArrays() {
  return array1.filter((item1) => {
    if (array2.includes(item1)) {
      return item1;
    }
  });
}

console.log(intersectArrays());
