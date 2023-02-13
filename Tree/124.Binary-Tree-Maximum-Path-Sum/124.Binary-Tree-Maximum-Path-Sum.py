# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        result = float('-inf')
        
        
        def maxDownPathSum(root):
            nonlocal result
            if not root:
                return 0
            
            leftSumMax =  maxDownPathSum(root.left)
            rightSumMax = maxDownPathSum(root.right)
            
            sum = root.val
            if leftSumMax > 0:
                sum += leftSumMax
            if rightSumMax > 0:
                sum += rightSumMax
            result = max(sum, result)
            
            return max(leftSumMax, rightSumMax, 0) + root.val
        
        maxDownPathSum(root)
        return result

        
