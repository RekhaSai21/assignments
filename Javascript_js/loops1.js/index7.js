const N = 1203;
let remaining = N;
let reversed = 0;

while (remaining > 0) {
  const digit = remaining % 10;
  reversed = reversed * 10 + digit;
  remaining = Math.floor(remaining / 10);
}

console.log(reversed);
