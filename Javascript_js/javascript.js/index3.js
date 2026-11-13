const numbers = [12, -5, 7, 0, 3, 11, -2, 17];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sum += numbers[i];
  }
}

console.log(sum);
