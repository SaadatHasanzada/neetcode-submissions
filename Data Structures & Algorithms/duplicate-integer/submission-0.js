class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const copied=new Set(nums)

        if(nums.length!==copied.size) return true
        return  false
    }
}
