class Solution(object):
    
    def findCircleNum(self, isConnected):
        """
        :type isConnected: List[List[int]]
        :rtype: int
        """
        n = len(isConnected)
        parents = [i for i in range(0, n)]
        size = [1] * n
        count = n

        def find(p):
            while p != parents[p]:
                p = parents[p]
            return p

        def union(p, q):
            nonlocal count
            pRoot = find(p)
            qRoot = find(q)

            if (pRoot == qRoot):
                return

            if size[pRoot] < size[qRoot]:
                parents[pRoot] = qRoot
                size[qRoot] += size[pRoot]
            else:
                parents[qRoot] = pRoot
                size[pRoot] += size[qRoot]
            count -= 1

        for i in range(0, n):
            for j in range(i, n):
                if i == j or isConnected[i][j] == 0:
                    continue
                union(i, j)
        return count
