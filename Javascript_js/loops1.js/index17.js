const N = 5;
let first = 0;
let second = 1;

for (let count = 0; count < N; count++) {
  console.log(first);
  const next = first + second;
  first = second;
  second = next;
}
