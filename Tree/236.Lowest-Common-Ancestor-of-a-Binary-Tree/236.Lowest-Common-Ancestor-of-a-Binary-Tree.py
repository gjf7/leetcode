# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        result = None

        def dfs(root):
            nonlocal result
            if not root:
                return 0

            left = dfs(root.left)
            right = dfs(root.right)
            
            selfVal = 1 if root.val == p.val or root.val == q.val else 0
            if result == None and left + right + selfVal == 2:
                result = TreeNode(root.val)
            return left + right + selfVal
            
        dfs(root)
        return result
        
