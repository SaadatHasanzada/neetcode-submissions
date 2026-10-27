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
                 let i=1;
           
    
                    while(uniqueNums.has(val+i)){
                       
                        i++;
                               }
          result=Math.max(result,i)
   }

   

     
}
return result




    }
}
[]