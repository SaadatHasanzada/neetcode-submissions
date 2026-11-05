class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

//[1,2,3,4,5,6,7,7]

    maxArea(heights) {
        
let i=0;
let j=heights.length-1;
let max=0;

 while(i<j){
    let w=j-i; //7 6
    let h=Math.min(heights[i],heights[j]) // 1
    let t=w*h;// 7
    max=Math.max(t,max); //7

    if(heights[i]<heights[j]){
        i++;
    }
    else{
        j--
    }
 }
 return max;

    }
}
