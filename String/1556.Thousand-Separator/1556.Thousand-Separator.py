class Solution:
    def thousandSeparator(self, n: int) -> str:
        return re.sub(r'\B(?=(\d{3})+$)', '.', str(n))
