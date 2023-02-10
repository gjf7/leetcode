# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        result = 0
        def dfs(root, sum):
            nonlocal result
            if not root:
                return

            sum = sum * 10 + root.val
            if root.left == None and root.right == None:
                result += sum
            dfs(root.left, sum)
            dfs(root.right, sum)
        dfs(root, 0)
        return result
