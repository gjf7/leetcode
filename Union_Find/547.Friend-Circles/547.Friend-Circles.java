class Solution {
    int[] parents;
    int[] size;
    int count;
    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        parents = new int[n];
        size = new int[n];
        count = n;
        for (int i = 0; i < n; i++) {
            parents[i] = i;
            size[i] = 1;
        }

        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (i == j || isConnected[i][j] == 0) {
                    continue;
                }
                union(i, j);
            }
        }
        return count;
    }
    
    private int find(int p) {
        while (p != parents[p]) {
            p = parents[p];
        }
        return p;
    }

    private void union(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);
        
        if (pRoot == qRoot) {
            return;
        }

        if (size[pRoot] < size[qRoot]) {
            parents[pRoot] = qRoot;
            size[qRoot] += size[pRoot];
        } else {
            parents[qRoot] = pRoot;
            size[pRoot] += size[qRoot];
        }
        count -= 1;
    }
}
