const N = 153;
let remaining = N;
let digitCount = 0;

while (remaining > 0) {
  digitCount++;
  remaining = Math.floor(remaining / 10);
}

remaining = N;
let digitPowerSum = 0;

while (remaining > 0) {
  const digit = remaining % 10;
  digitPowerSum += Math.pow(digit, digitCount);
  remaining = Math.floor(remaining / 10);
}

console.log(N === digitPowerSum);
