class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = new Set(nums);
        let starter;
        let result=1;
    
      


    
       if(!nums.length) return 0

      for(const val of uniqueNums){
     
        
   
   if(!uniqueNums.has(val-1) && uniqueNums.has(val+1)){
    starter=val;
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