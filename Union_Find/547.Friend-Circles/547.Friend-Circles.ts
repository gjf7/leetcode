function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const parents = new Array(n).fill(null).map((value, index) => index);
  const sizes = new Array<number>(n).fill(1);
  let count = n;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i === j || isConnected[i][j] === 0) continue;
      union(i, j);
    }
  }
  return count;

  function find(p: number) {
    while (p !== parents[p]) {
      p = parents[p];
    }
    return p;
  }

  function union(p: number, q: number) {
    const pRoot = find(p);
    const qRoot = find(q);

    if (pRoot === qRoot) {
      return;
    }

    if (sizes[pRoot] > sizes[qRoot]) {
      sizes[pRoot] += sizes[qRoot];
      parents[qRoot] = pRoot;
    } else {
      sizes[qRoot] += sizes[pRoot];
      parents[pRoot] = qRoot;
    }
    count -= 1;
  }
}
