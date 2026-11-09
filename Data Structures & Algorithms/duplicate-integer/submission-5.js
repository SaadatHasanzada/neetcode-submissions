class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueN=new Set(nums)
        if(nums.length!==uniqueN.size) return true;

        return false
    }
}

