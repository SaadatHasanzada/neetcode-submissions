class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let minB=prices[0]
       let max=0;

       for(let sell of prices){
        max=Math.max(max,sell-minB);
        minB=Math.min(minB,sell)
       }
       return max
     

    }
}
