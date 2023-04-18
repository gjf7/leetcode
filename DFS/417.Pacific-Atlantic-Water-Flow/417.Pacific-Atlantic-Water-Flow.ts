function pacificAtlantic(heights: number[][]): number[][] {
    const result = []
    const m = heights.length
    const n = heights[0].length
    const canReachPacific = new Array(m).fill(null).map(() => new Array(n).fill(false))
    const canReachAtlantic = new Array(m).fill(null).map(() => new Array(n).fill(false))
    for (let i = 0; i < n; i++) {
        dfs(0, i, canReachPacific)
        dfs(m - 1, i, canReachAtlantic)
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, canReachPacific)
        dfs(i, n - 1, canReachAtlantic)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (canReachPacific[i][j] && canReachAtlantic[i][j]) {
                result.push([i , j])
            }
        }
    }

    return result

    function dfs(i: number, j: number, canReach: boolean[][]) {
        if (canReach[i][j] == true) {
            return
        }

        canReach[i][j] = true
        
        const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]]

        for (let k = 0; k < direction.length; k++) {
            const row = i + direction[k][0]
            const column = j + direction[k][1]
            if (row >= 0 && row < m && column >= 0 && column < n && heights[row][column] >= heights[i][j]) {
                dfs(row, column, canReach)
            }
        }
    }
    
};
