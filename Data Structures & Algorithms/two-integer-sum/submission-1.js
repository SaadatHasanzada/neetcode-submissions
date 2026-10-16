class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const newArr=new Map()
       for (let i=0;i<nums.length;i++){
        let difference=target-nums[i]
       if(newArr.has(difference)) return [i,newArr.get(difference)]
       newArr.set(nums[i],i)
       }
    }
}
