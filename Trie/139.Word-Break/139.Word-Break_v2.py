class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        notebook = {}
        for word in wordDict:
            firstLetter = word[0]
            wordsWithSameFirstLetter = notebook.get(firstLetter, [])
            wordsWithSameFirstLetter.append(word)
            if firstLetter not in notebook:
                notebook[firstLetter] = wordsWithSameFirstLetter
        
        memo = [0] * 301

        def dfs(index):
            if memo[index] == 1:
                return False
            
            if index == len(s):
                return True
            
            if s[index] in notebook:
                wordsWithSameFirstLetter = notebook[s[index]]
                for word in wordsWithSameFirstLetter:
                    if s[index: index + len(word)] == word and dfs(index + len(word)):
                        return True
            memo[index] = 1
            return False

        return dfs(0)
            
