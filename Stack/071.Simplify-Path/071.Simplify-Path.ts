function simplifyPath(path: string): string {
  const stack = [];
  const pathArray = path.split('/');
  for (let i = 0; i < pathArray.length; i++) {
    switch (pathArray[i]) {
      case '':
        // do nothing
        break;
      case '.':
        // do nothing
        break;
      case '..':
        stack.pop();
        break;
      default:
        stack.push(pathArray[i]);
    }
  }
  return `/${stack.join('/')}`;
}
