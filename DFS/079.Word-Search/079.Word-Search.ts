function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;
    const used = new Array(m).fill(null).map(() => new Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;

    function dfs(i: number, j: number, wordCursor: number) {
        if (i < 0 || i >= m || j < 0 || j > n) {
            return false;
        }

        if (used[i][j] || word[wordCursor] !== board[i][j]) {
            return false;
        }

        if (wordCursor == word.length - 1) {
            return true
        }

        used[i][j] = true

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (const [row, column] of directions) {
            if (dfs(i + row, j + column, wordCursor + 1)) {
                return true
            }
        }

        used[i][j] = false
    }
};
