const arr = [2, "a", 2, "b", "a", 3];
const uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
  let alreadyExists = false;

  for (let j = 0; j < uniqueArray.length; j++) {
    if (arr[i] === uniqueArray[j]) {
      alreadyExists = true;
      break;
    }
  }

  if (!alreadyExists) {
    uniqueArray.push(arr[i]);
  }
}

console.log(uniqueArray);
