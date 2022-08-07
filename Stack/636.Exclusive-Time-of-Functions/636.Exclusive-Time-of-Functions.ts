function exclusiveTime(n: number, logs: string[]): number[] {
  const ret = new Array(n).fill(0);
  const stack: number[][] = [];
  for (let i = 0; i < logs.length; i++) {
    const s = logs[i];
    const sArray = s.split(':');
    const startFlag = sArray[1] === 'start' ? true : false;
    const id = parseInt(sArray[0]);
    const timeStamp = parseInt(sArray[2]);

    if (startFlag) {
      stack.push([id, timeStamp]);
    } else {
      const start = stack.pop()[1];
      const runtime = timeStamp - start + 1;
      ret[id] += runtime;
      if (stack.length !== 0) {
        ret[stack[stack.length - 1][0]] -= runtime;
      }
    }
  }
  return ret;
}
