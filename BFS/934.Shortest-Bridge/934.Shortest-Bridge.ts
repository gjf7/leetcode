function shortestBridge(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const queue: [number, number][] = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let foundFirstIsland = false;
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                foundFirstIsland = true;
                break;
            }
        }
        if (foundFirstIsland) {
            break;
        }
    }
    let step = 1;
    while (queue.length > 0) {
        let size = queue.length
        while (size) {
            const [i, j] = queue[0];
            queue.shift();
            for (const [x, y] of directions) {
                const row = i + x;
                const column = j + y;
                if (row < 0 || row >= m || column < 0 || column >= n || grid[row][column] === 2) {
                    continue;
                }

                if (grid[row][column] === 0) {
                    grid[row][column] = 2;
                    queue.push([row, column]);
                }

                if (grid[row][column] === 1) {
                    return step - 1;
                }
            }
            size -= 1;
        }
        step += 1;
    }


    function dfs(i: number, j: number) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }

        if (grid[i][j] === 0 || grid[i][j] === 2) {
            return;
        }

        grid[i][j] = 2;
        queue.push([i, j]);

        for (const [x, y] of directions) {
            dfs(i + x, j + y);
        }
    }
};
