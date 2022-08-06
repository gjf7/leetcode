function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  if (firstList.length === 0 || secondList.length === 0) {
    return [];
  }
  let ans: number[][] = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    let left = Math.max(firstList[i][0], secondList[j][0]);
    let right = Math.min(firstList[i][1], secondList[j][1]);
    if (left <= right) {
      ans.push([left, right]);
    }
    // 哪个右区间元素较小，就向前移动一位
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
}
