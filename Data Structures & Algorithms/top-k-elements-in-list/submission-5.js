class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
let bucket={}
let result=[]

for(const num of nums){
if(!bucket[num]) {bucket[num]=0}
bucket[num]+=1;

}

const sortedList=Object.entries(bucket).sort((a,b)=>b[1]-a[1])

return sortedList.slice(0,k).map((arr)=>arr[0])



    }
}
