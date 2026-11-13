const N = 583729;
let remaining = Math.abs(N);
let smallestDigit = 9;

do {
  const digit = remaining % 10;
  if (digit < smallestDigit) {
    smallestDigit = digit;
  }
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(smallestDigit);
