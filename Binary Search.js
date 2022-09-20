function binarySearch(arr, num) {
  let s = 0;
  let e = arr.length - 1;
  let m = Math.floor((s + e) / 2);

  while (arr[m] !== num) {
    if (arr[m] > num) {
      e = m - 1;
    } else {
      s = m + 1;
    }
    m = Math.floor((s + e) / 2);
    if (e === 0 || s === arr.length) {
      return false;
    }
  }
  return m;
}
