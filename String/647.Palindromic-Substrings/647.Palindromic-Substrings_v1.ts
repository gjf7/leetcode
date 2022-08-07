// 中心扩展
function countSubstrings(s: string): number {
  let res = 0;
  function count(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    // odd number substrings
    count(i, i);
    if (i + 1 < s.length) {
      // even number substrings
      count(i, i + 1);
    }
  }
  return res;
}
