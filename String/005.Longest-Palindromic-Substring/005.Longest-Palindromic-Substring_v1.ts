function longestPalindrome(s: string): string {
  let max = 0;
  let maxString = '';
  function count(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left > max) {
      max = right - left;
      maxString = s.slice(left + 1, right);
    }
  }
  for (let i = 0; i < s.length; i++) {
    count(i, i);
    if (i + 1 < s.length) {
      count(i, i + 1);
    }
  }
  return maxString;
}
