class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left=0;
        let right=s.length-1
let pattern=/[^a-zA-Z0-9]/

        while(left<right){
            if(pattern.test(s[left])){
                left++;
                continue
            }
             if(pattern.test(s[right])){
                right--;
                continue
            }

            if(s[left].toLowerCase()!==s[right].toLowerCase()) return false

            left++
            right--
        }
        return true
    }
}
