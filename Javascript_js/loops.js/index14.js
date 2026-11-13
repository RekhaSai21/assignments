const N = 60;

for (let number = 1; number <= N; number++) {
  if (number < 10) {
    console.log("Small");
  } else if (number <= 50) {
    console.log("Medium");
  } else {
    console.log("Large");
  }
}
