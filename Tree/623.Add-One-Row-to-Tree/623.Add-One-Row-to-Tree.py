# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        def dfs(root, depth, direction):
            # 可能是最后一层
            if depth == 1:
                if direction == 1:
                    return TreeNode(val, root)
                else:
                    return TreeNode(val, None, root)
            if not root:
                return root
            root.left = dfs(root.left, depth - 1, 1)
            root.right = dfs(root.right, depth - 1, -1)
            return root
        return dfs(root, depth, 1) #可能在第一层
                
