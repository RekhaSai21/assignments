const N = 50;
let sum = 0;

for (let number = 1; number <= N; number++) {
  if (number % 2 !== 0) {
    sum += number;
  }
}

console.log(sum);
