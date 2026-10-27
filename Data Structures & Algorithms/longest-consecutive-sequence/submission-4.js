class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(!nums.length) return 0


        const uniqueNums = new Set(nums);
        let result=1;

        

        for(const val of uniqueNums){
            if(!uniqueNums.has(val-1)){
                 let starter=val;
                 let i=1;
                 let max=1;
    
                    while(uniqueNums.has(starter+i)){
                        max++
                        i++;
                               }
          result=Math.max(result,max)
   }

   

     
}
return result




    }
}
[]