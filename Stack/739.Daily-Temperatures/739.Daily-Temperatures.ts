function dailyTemperatures(temperatures: number[]): number[] {
  const ret = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length === 0) {
      stack.push(i);
    } else if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (
        stack.length &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        ret[stack[stack.length - 1]] = i - stack[stack.length - 1];
        stack.pop();
      }
      stack.push(i);
    }
  }
  return ret;
}
