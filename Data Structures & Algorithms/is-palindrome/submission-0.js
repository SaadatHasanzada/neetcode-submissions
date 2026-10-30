class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=s.split(" ").join().replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
console.log(str)
 let left=0;
        let right=str.length-1
        while(left<right){
            if(str[left]!==str[right]) return false
            left++
            right--
        }
        return true
    }
}
