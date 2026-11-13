const N = 167822865219482;
const digitToFind = 2;
let remaining = Math.abs(N);
let count = 0;

do {
  const digit = remaining % 10;
  if (digit === digitToFind) {
    count++;
  }
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(count);
