const numbers = [12, -5, 7, 0, 3, 11, -2, 17];

for (let i = 0; i < numbers.length; i++) {
  let isPrime = numbers[i] > 1;

  for (let divisor = 2; divisor * divisor <= numbers[i]; divisor++) {
    if (numbers[i] % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(numbers[i]);
  }
}
