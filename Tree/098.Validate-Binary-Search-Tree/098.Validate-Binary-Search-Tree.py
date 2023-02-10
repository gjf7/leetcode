# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def dfs(root, minValue, maxValue):
            if root == None:
                return True
            
            return root.val > minValue and root.val < maxValue and dfs(root.left, minValue, root.val) and dfs(root.right, root.val, maxValue)
        return dfs(root, float('-inf'), float('inf'))
