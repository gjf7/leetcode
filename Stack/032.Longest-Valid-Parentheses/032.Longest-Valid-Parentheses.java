class Solution {
    public int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        int ret = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else if (!stack.isEmpty() && s.charAt(stack.peek()) == '(') {
                stack.pop();
                ret = Math.max(ret, stack.isEmpty() ? i + 1 : i - stack.peek());
            } else {
                stack.push(i);
            }
        }
        return ret;
    }
}
