function restoreIpAddresses(s: string): string[] {
  let ret: string[] = [];
  let current: number[] = [];
  backTrace(0);
  return ret;
  function backTrace(index: number) {
    if (current.length === 4) {
      if (index === s.length) {
        ret.push(current.join('.'));
      }
      return;
    }

    for (let i = index; i <= index + 3 && i < s.length; i++) {
      if (i === index || s[index] !== '0') {
        const num = parseInt(s.slice(index, i + 1));
        if (num <= 255) {
          current.push(num);
          backTrace(i + 1);
          current.pop();
        }
      }
    }
  }
}
