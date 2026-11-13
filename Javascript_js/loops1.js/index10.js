const N = 1223122;
const digitToFind = 2;
let remaining = N;
let count = 0;

while (remaining > 0) {
  if (remaining % 10 === digitToFind) {
    count++;
  }
  remaining = Math.floor(remaining / 10);
}

console.log(count);
