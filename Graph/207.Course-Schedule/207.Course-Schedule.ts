function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const marked = new Array(numCourses).fill(0);
  const stack = new Array(numCourses).fill(0);
  const next = new Array(numCourses).fill(null).map(() => []);

  for (const p of prerequisites) {
    next[p[1]].push(p[0]);
  }
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === false) return false;
  }
  return true;
  function dfs(current: number): boolean {
    if (stack[current] === 1) {
      return false;
    }

    if (marked[current] === 1) {
      return true;
    }

    marked[current] = 1;
    stack[current] = 1;
    for (const net of next[current]) {
      if (dfs(net) === false) {
        return false;
      }
    }
    stack[current] = 0;
    return true;
  }
}
