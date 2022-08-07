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
