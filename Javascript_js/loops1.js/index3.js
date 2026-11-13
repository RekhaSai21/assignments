const N = 7;
let number = 1;
let sum = 0;

do {
  if (number % 2 !== 0) {
    sum += number;
  }
  number++;
} while (number <= N);

console.log(sum);
