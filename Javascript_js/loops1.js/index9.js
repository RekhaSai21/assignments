const N = 58249;
let remaining = N;
let largestDigit = 0;

do {
  const digit = remaining % 10;
  if (digit > largestDigit) {
    largestDigit = digit;
  }
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(largestDigit);
