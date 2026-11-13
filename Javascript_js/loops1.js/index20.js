const N = 48275;
let remaining = N;
let evenDigitSum = 0;
let oddDigitSum = 0;

do {
  const digit = remaining % 10;
  if (digit % 2 === 0) {
    evenDigitSum += digit;
  } else {
    oddDigitSum += digit;
  }
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log("Even digit sum:", evenDigitSum);
console.log("Odd digit sum:", oddDigitSum);
