# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root == None:
            return 0

        # 左右子树中必有一个为满二叉树
        leftChildDepth = self.leftDepth(root.left)
        rightChildDepth = self.leftDepth(root.right)
        # 左子树为满二叉树
        if leftChildDepth == rightChildDepth:
            return 1 + 2 ** leftChildDepth - 1 + self.countNodes(root.right)
        # 右子树为满二叉树
        else:
            return 1 + 2 ** rightChildDepth - 1 + self.countNodes(root.left)

    def leftDepth(self, root):
        if root == None:
            return 0
        return 1 + self.leftDepth(root.left)
