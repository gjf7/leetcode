function topKFrequent(nums: number[], k: number): number[] {
  const ret: number[] = [];
  const notebook = new Map();

  for (let i = 0; i < nums.length; i++) {
    notebook.set(nums[i], (notebook.get(nums[i]) || 0) + 1);
  }

  // 找K，具体的频率是多少
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const f = (left + right) >> 1;
    if (countFreqGreaterOrEqual(f) >= k) {
      left = f;
    } else {
      right = f - 1;
    }
  }
  const f = left;

  for (const [k, v] of notebook) {
    if (v >= f) {
      ret.push(k);
    }
  }
  return ret;
  function countFreqGreaterOrEqual(f: number) {
    let counter = 0;
    for (const [, v] of notebook) {
      if (v >= f) {
        counter++;
      }
    }
    return counter;
  }
}
