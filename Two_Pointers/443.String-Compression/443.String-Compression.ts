function compress(chars: string[]): number {
  let str = '';

  for (let i = 0; i < chars.length; i++) {
    const startChar = chars[i];
    let count = 1;
    while (i + 1 < chars.length && chars[i + 1] === startChar) {
      i += 1;
      count += 1;
    }

    str += startChar;
    if (count !== 1) {
      str += count;
    }
  }

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i];
  }

  return str.length;
}
