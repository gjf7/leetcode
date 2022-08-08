class Solution {
    private Node root;
    private int[] memo;
    private class Node {
        private boolean isKey;
        private HashMap<Character, Node> next;
        private Node(boolean isKey) {
            this.isKey = isKey;
            next = new HashMap<>();
        }
    }
    public boolean wordBreak(String s, List<String> wordDict) {
        initTrie(wordDict);
        memo = new int[s.length()];
        return dfs(0, s.length(), s);
    }
    private void initTrie(List<String> wordDict) {
        root = new Node(false);
        Node curr = root;
        for (String word : wordDict) {
            for (char c: word.toCharArray()) {
                if (!curr.next.containsKey(c)) {
                    curr.next.put(c, new Node(false));
                }
                curr = curr.next.get(c);
            }
            curr.isKey = true;
            curr = root;
        }
    }
    private boolean dfs(int index,int sLen, String s) {
        if (index == sLen) {
            return true;
        }

        if (memo[index] == 1) {
            return false;
        }

        Node curr = root;
        for (int i = index; i < sLen; i++) {
            char c = s.charAt(i);
            if (curr.next.containsKey(c)) {
                curr = curr.next.get(c);
                if (curr.isKey && dfs(i + 1, sLen, s)) {
                    return true;
                }
            } else {
                break;
            }
        }
        memo[index] = 1;
        return false;
    }
}
