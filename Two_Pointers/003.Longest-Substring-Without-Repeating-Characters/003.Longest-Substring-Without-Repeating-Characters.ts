function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let ret = 0;
  let start = 0;
  let end = 0;
  while (end < s.length) {
    if (!map.has(s[end]) || map.get(s[end]) === 0) {
      map.set(s[end], (map.get(s[end]) || 0) + 1);
      end++;
    } else {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
    ret = Math.max(ret, end - start);
  }

  return ret;
}
