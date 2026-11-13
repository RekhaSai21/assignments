const arr = [1, 2, 3, 4, 5];
let k = 2;

if (arr.length > 0) {
  k = k % arr.length;

  function reverseRange(start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverseRange(0, arr.length - 1);
  reverseRange(0, k - 1);
  reverseRange(k, arr.length - 1);
}

console.log(arr);
