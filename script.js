let massiv = [3, 6, 9, 2];

function filter(arr) {
  const result = [];
  for (const element of arr) {
    if(element < 5) {
      result.push(element);
    }
  }
  return result;
}

console.log(filter(massiv));

