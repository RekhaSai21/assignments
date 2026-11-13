function mergeSortedArrays(A, B) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    if (A[i] <= B[j]) {
      merged.push(A[i]);
      i++;
    } else {
      merged.push(B[j]);
      j++;
    }
  }

  while (i < A.length) {
    merged.push(A[i]);
    i++;
  }

  while (j < B.length) {
    merged.push(B[j]);
    j++;
  }

  return merged;
}

const numbersA = [1, 3, 5];
const numbersB = [2, 4, 6];
console.log(mergeSortedArrays(numbersA, numbersB));

const stringsA = ["a", "c"];
const stringsB = ["b", "d"];
console.log(mergeSortedArrays(stringsA, stringsB));
