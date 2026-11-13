const arr = ["x", 3, "y", 1, 2, "z"];
const rearranged = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    rearranged.push(arr[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    rearranged.push(arr[i]);
  }
}

for (let i = 0; i < rearranged.length; i++) {
  arr[i] = rearranged[i];
}

console.log(arr);
