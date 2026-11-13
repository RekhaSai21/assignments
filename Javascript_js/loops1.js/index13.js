const N = 17;
let isPrime = N > 1;

for (let divisor = 2; divisor * divisor <= N; divisor++) {
  if (N % divisor === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);
