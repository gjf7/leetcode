# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        pathLengthMax = 0
        def maxDepthOfTree(root):
            nonlocal pathLengthMax
            if not root:
                return 0

            leftChildDepth = maxDepthOfTree(root.left)
            rightChildDepth = maxDepthOfTree(root.right)

            childDepthMax = max(leftChildDepth, rightChildDepth)
            pathLengthMax = max(pathLengthMax,  leftChildDepth + rightChildDepth) # 这里要的是长度

            return childDepthMax + 1

        maxDepthOfTree(root)
        return pathLengthMax
        
