class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        int n = s.length();
        int[] need = new int[26];
        for (int i = 0; i < p.length(); i++) {
            need[p.charAt(i) - 'a'] += 1;
        }
        
        List<Integer> ret = new ArrayList<>();

        int start = 0;
        int end = 0;
        for (; end < n; end++) {
            int index = s.charAt(end) - 'a';
            need[index] -= 1;
            while (need[index] < 0) {
                need[s.charAt(start) - 'a'] += 1;
                start += 1;
            }
            if (end - start + 1 == p.length()) {
                ret.add(start);
            }
        }
        return ret;
    }
}
