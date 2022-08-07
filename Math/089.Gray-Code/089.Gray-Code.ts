function grayCode(n: number): number[] {
  const ret: number[] = [0, 1];
  for (let i = 1; i < n; i++) {
    for (let j = ret.length - 1; j >= 0; j--) {
      ret.push(ret[j] + 2 ** i);
    }
  }
  return ret;
}
