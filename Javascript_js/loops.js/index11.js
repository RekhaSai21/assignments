const N = 123456;
let remaining = Math.abs(N);
let position = 1;
let sum = 0;

do {
  const digit = remaining % 10;
  if (position % 2 === 0) {
    sum += digit;
  }
  remaining = Math.floor(remaining / 10);
  position++;
} while (remaining > 0);

console.log(sum);
