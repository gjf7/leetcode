function calculate(s: string): number {
  const str = '+' + s.replace(/\s/g, '');
  const stack = [];
  let i = 0;
  while (i < str.length) {
    let j = i + 1;
    while (/\d/.test(str[j])) {
      j += 1;
    }
    const num = parseInt(str.slice(i + 1, j));
    if (str[i] === '*') {
      const last = stack.pop();
      stack.push(last * num);
    } else if (str[i] === '/') {
      const last = stack.pop();
      if (last > 0) {
        stack.push(Math.floor(last / num));
      } else {
        stack.push(Math.ceil(last / num));
      }
    } else if (str[i] === '-') {
      stack.push(-num);
    } else {
      stack.push(num);
    }
    i = j;
  }

  let ret = 0;
  for (let num of stack) {
    ret += num;
  }
  return ret;
}
