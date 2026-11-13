const arr = [0, 1, 0, 3, 12];
let nextNonzeroIndex = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[nextNonzeroIndex] = arr[i];
    nextNonzeroIndex++;
  }
}

while (nextNonzeroIndex < arr.length) {
  arr[nextNonzeroIndex] = 0;
  nextNonzeroIndex++;
}

console.log(arr);
