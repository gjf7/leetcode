function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const num1Array = num1.split('').reverse();
  const num2Array = num2.split('').reverse();
  let ret = new Array(num1.length + num2.length).fill(0);
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      ret[i + j] += parseInt(num1Array[i]) * parseInt(num2Array[j]);
      ret[i + j + 1] += Math.floor(ret[i + j] / 10);
      ret[i + j] %= 10;
    }
  }
  ret = ret.reverse();
  let index = 0;
  while (ret[index] === 0) {
    index++;
  }
  return ret.join('').slice(index);
}
