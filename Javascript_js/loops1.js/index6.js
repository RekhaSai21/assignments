const N = 409;
let remaining = N;
let sum = 0;

do {
  sum += remaining % 10;
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(sum);
