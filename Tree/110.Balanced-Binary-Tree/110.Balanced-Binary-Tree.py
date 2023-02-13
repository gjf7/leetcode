# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.dfs(root)['isBalanced']
    
    def dfs(self, root):
        if not root:
            return { 'isBalanced': True, 'height': 0 }

        left = self.dfs(root.left)
        right = self.dfs(root.right)
        
        return { 'isBalanced': left['isBalanced'] and right['isBalanced'] and abs(left['height'] - right['height']) <= 1, 'height': max(left['height'], right['height']) + 1 }
