const N = 10;
let number = 1;
let sum = 0;

while (number <= N) {
  if (number % 3 === 0 || number % 5 === 0) {
    sum += number;
  }
  number++;
}

console.log(sum);
