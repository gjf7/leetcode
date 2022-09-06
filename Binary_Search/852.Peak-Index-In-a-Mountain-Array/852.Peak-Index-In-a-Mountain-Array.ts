function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const middle = right - Math.floor((right - left) / 2); // [0 1] 到 1， middle - 1永远存在
    if (arr[middle] > arr[middle - 1]) {
      left = middle; // [0 1] 到 1， left = 1 不会死循环
    } else {
      right = middle - 1;
    }
  }
  return left;
}
