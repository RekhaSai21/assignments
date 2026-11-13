const N = 50;
let count = 0;

for (let number = 1; number <= N; number++) {
  if (number % 3 === 0) {
    count++;
  }
}

console.log(count);
