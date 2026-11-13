const N = 101101;
let remaining = Math.abs(N);
let isBinary = true;

do {
  const digit = remaining % 10;
  if (digit !== 0 && digit !== 1) {
    isBinary = false;
    break;
  }
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(isBinary ? "Binary number" : "Not a binary number");
