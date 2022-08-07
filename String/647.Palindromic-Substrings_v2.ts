function countSubstrings(s: string): number {
  let t = '#';
  for (const char of s) {
    t = `${t + char}#`;
  }
  const n = t.length;
  const P = new Array(t.length).fill(1);
  let maxRight = -1;
  let maxCenter = -1;
  for (let i = 0; i < n; i++) {
    let r;
    if (maxRight >= i) {
      const j = maxCenter * 2 - i;
      r = Math.min(P[j], maxRight - i);
      while (i - r >= 0 && i + r < n && t[i - r] === t[i + r]) {
        r++;
      }
    } else {
      r = 0;
      while (i - r >= 0 && i + r < n && t[i - r] === t[i + r]) {
        r++;
      }
    }
    P[i] = r - 1;
    if (i + P[i] > maxRight) {
      maxRight = i + P[i];
      maxCenter = i;
    }
  }
  let res = 0;
  for (const r of P) {
    res += Math.floor((r + 1) / 2);
  }
  return res;
}
