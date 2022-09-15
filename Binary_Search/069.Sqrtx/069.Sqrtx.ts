function mySqrt(x: number): number {
  if (x === 1) {
    return 1;
  }

  let left = 0;
  let right = x >> 1;
  while (left < right) {
    const middle = right - Math.floor((right - left) / 2); // [0 1]
    if (middle * middle <= x) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }
  return left;
}
/* 保留n位小数版本 */
function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }
  let low = 0;
  let high = x;
  let current = 0;
  let middle = 0;
  while (Math.abs(current - x) > 1e-8) {
    middle = (low + high) / 2;
    current = middle * middle;
    if (current < x) {
      low = middle;
    } else {
      high = middle;
    }
  }
  return Math.floor(middle); // toFixed()
}
