class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        commonLength = len(strs[0])
        for i in range(1, len(strs)):
            j = 0
            while j < min(len(strs[i]), commonLength):
                if strs[i][j] != strs[0][j]:
                    break
                j += 1

            if j == 0:
                return ""
            else:
                commonLength = j

        return strs[0][0:commonLength]
