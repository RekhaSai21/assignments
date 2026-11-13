const N = 12345;
let remaining = N;
let digitCount = 0;

while (remaining > 0) {
  digitCount++;
  remaining = Math.floor(remaining / 10);
}

console.log(digitCount);
