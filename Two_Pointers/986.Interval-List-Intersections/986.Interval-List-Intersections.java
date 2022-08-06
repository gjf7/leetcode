class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        List<int[]> ret = new ArrayList<>(); 
        int i = 0;
        int j = 0;
        while (i < firstList.length && j < secondList.length) {
            int start = Math.max(firstList[i][0], secondList[j][0]);
            int end = Math.min(firstList[i][1], secondList[j][1]);
            if (end >= start) {
                ret.add(new int[]{start, end});
            }
            if (firstList[i][1] < secondList[j][1]) {
                i++;
            } else {
                j++;
            }
        }
        return ret.toArray(new int[ret.size()][]);
    }
}
