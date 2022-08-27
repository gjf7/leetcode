function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const ret = [];
    let left = intervals[0][0];
    let right = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= left && intervals[i][0] <= right) {
            left = Math.min(left, intervals[i][0]);
            right = Math.max(right, intervals[i][1]);
        } else {
            ret.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        }
    }
    
    ret.push([left, right]);

    return ret;
};
