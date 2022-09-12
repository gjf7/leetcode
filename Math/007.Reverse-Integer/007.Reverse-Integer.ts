function reverse(x: number): number {
  const numMax = 2 ** 31;
  const numMin = -(2 ** 31 - 1);
  let num = x;

  const isNegative = num < 0;
  num = Math.abs(num);
  let ret = 0;
  while (num > 0) {
    ret = ret * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  ret = isNegative ? -ret : ret;
  const isOutOfRange = ret > numMax || ret < numMin;
  return isOutOfRange ? 0 : ret;
}
