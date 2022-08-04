function minAddToMakeValid(s: string): number {
  let ret = 0;
  let count = 0;
  for (const c of s) {
    if (c === '(') {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) {
        count = 0;
        ret += 1;
      }
    }
  }
  return ret + count;
}
