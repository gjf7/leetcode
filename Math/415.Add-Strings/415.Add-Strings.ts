function addStrings(num1: string, num2: string): string {
  const n1 = num1.split('');
  const n2 = num2.split('');
  const n = Math.max(n1.length, n2.length);
  const ret = new Array(n + 1).fill(0);

  let i = n1.length - 1;
  let j = n2.length - 1;
  for (let k = n; k > 0; k--) {
    const number1 = i < 0 ? 0 : parseInt(n1[i--]);
    const number2 = j < 0 ? 0 : parseInt(n2[j--]);

    ret[k] += number1 + number2;
    ret[k - 1] = Math.floor(ret[k] / 10);
    ret[k] %= 10;
  }
  if (ret[0] === 0) {
    ret.shift();
  }
  return ret.join('');
}
