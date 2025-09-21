let massiv = [3, 6, 9, 2];

function filter(arr, delet) {
  const result = [];
  for (const element of arr) {
    if(delet(element)) {
      result.push(element);
    }
  }
  return result;
}

const delet = (num) => num < 5;

console.log(filter(massiv, delet));

