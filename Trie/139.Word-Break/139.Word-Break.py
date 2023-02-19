
class TireNode:
    def __init__(self, isWord):
        self.next = [None] * 26
        self.isWord = isWord

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        root = self.buildTrie(wordDict)
        memo = [0] * 301
        return self.dfs(0, s, root, memo)
        
    def buildTrie(self, wordDict):
        root = TireNode(False)

        for word in wordDict:
            current = root

            for char in word:
                charIndex = self.getCharIndex(char)
                if current.next[charIndex] == None:
                    current.next[charIndex] = TireNode(False)
                current = current.next[charIndex]

            current.isWord = True

        return root
    
    def dfs(self, index, s, tireRoot, memo):
        if index == len(s):
            return True

        if memo[index] == 1:
            return False
        
        node = tireRoot

        for i in range(index, len(s)):
            charIndex = ord(s[i]) - 97
            if node.next[charIndex] != None:
                node = node.next[charIndex]
                if node.isWord and self.dfs(i + 1, s, tireRoot, memo):
                    return True
            else:
                break

        memo[index] = 1
        return False
    
    def getCharIndex(self, char):
        return ord(char) - 97
