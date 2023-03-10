function findContinuousSequence(target: number): number[][] {
  const n = Math.ceil(target / 2);

  const result = [];

  let left = 1;
  let windowSum = 0;
  for (let right = 1; right <= n; right++) {
    windowSum += right;

    while (windowSum > target) {
      windowSum -= left;
      left += 1;
    }

    if (windowSum === target) {
      result.push(
        new Array(right - left + 1)
          .fill(undefined)
          .map((v, index) => left + index)
      );
    }
  }

  return result;
}
