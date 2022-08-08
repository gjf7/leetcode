class TrieNode {
  public next: Array<TrieNode | null>;
  public isEnd: Boolean;
  public constructor() {
    this.next = new Array(26);
    this.isEnd = false;
    for (let i = 0; i < 26; i++) {
      this.next[i] = null;
    }
  }
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const root = new TrieNode();
  const memo = new Array(301).fill(0);

  for (const word of wordDict) {
    let node = root;
    for (const char of word) {
      if (node.next[char.charCodeAt(0) - 97] === null) {
        node.next[char.charCodeAt(0) - 97] = new TrieNode();
      }
      node = node.next[char.charCodeAt(0) - 97];
    }
    node.isEnd = true;
  }

  return dfs(s, 0, root, memo);
}

function dfs(
  s: string,
  index: number,
  root: TrieNode,
  memo: number[]
): boolean {
  if (index === s.length) {
    return true;
  }

  if (memo[index] === 1) {
    return false;
  }

  let node = root;
  for (let i = index; i < s.length; i++) {
    if (node.next[s[i].charCodeAt(0) - 97] !== null) {
      node = node.next[s[i].charCodeAt(0) - 97];
      if (node.isEnd && dfs(s, i + 1, root, memo)) {
        return true;
      }
    } else {
      break;
    }
  }
  memo[index] = 1;
  return false;
}
