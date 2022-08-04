function findAnagrams(s: string, p: string): number[] {
  const targetMap = new Map<string, number>();
  const windowMap = new Map<string, number>();
  const ret: number[] = [];
  for (let i = 0; i < p.length; i++) {
    targetMap.set(p[i], (targetMap.get(p[i]) || 0) + 1);
  }
  let startIndex = 0;
  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    const char = s[endIndex];
    windowMap.set(char, (windowMap.get(char) || 0) + 1);
    while (windowMap.get(char) > (targetMap.get(char) || 0)) {
      windowMap.set(s[startIndex], windowMap.get(s[startIndex]) - 1);
      startIndex += 1;
    }
    if (endIndex - startIndex + 1 == p.length) {
      ret.push(startIndex);
    }
  }
  return ret;
}
