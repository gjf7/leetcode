function decodeString(s: string): string {
  let p = 0;
  return decode();
  function decode(): string {
    let ret = '';
    while (p < s.length && s[p] !== ']') {
      if (isNumber(s[p])) {
        const times = getCount();

        // skip [
        p += 1;

        const str = decode();
        ret += str.repeat(times);

        // skip ]
        p += 1;
      } else {
        ret += s[p];
        p += 1;
      }
    }
    return ret;
  }

  function getCount() {
    let startIdx = p;
    while (p < s.length && isNumber(s[p])) {
      p += 1;
    }
    return parseInt(s.slice(startIdx, p));
  }

  function isNumber(char: string) {
    return /\d/.test(char);
  }
}
