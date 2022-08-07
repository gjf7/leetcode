function generateParenthesis(n: number): string[] {
  const ret: string[] = [];
  backTrace('', 0, 0);
  return ret;
  function backTrace(current: string, left: number, right: number) {
    if (current.length === n * 2) {
      if (left === right) {
        ret.push(current);
      }
      return;
    }
    if (left < n) {
      backTrace(`${current}(`, left + 1, right);
    }
    if (left > right) {
      backTrace(`${current})`, left, right + 1);
    }
  }
}
