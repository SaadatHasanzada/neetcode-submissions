class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

      const charCounts = new Map();



 for (const char of s) {
            charCounts.set(char, (charCounts.get(char) || 0) + 1);
        }

    for (const char of t) {
            const count = charCounts.get(char);
            
            if (!count) return false; 
            
            charCounts.set(char, count - 1);
        }
return true
        
    }
}
