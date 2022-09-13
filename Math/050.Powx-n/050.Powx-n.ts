function myPow(x: number, n: number): number {
  if (x === 0 || x === 1) {
    return x;
  } else if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    return myPow(x, n / 2) ** 2;
  } else {
    return x * myPow(x, n - 1);
  }
}
