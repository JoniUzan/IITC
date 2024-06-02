const duplicates = [1, 2, 2, 3, 4, 4, 5];
duplicates.includes;

function uniqueValues() {
  return duplicates.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}
console.log(uniqueValues());