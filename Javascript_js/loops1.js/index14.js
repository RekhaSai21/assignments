const N = 10;
let primeCount = 0;

for (let number = 2; number <= N; number++) {
  let isPrime = true;

  for (let divisor = 2; divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeCount++;
  }
}

console.log(primeCount);
