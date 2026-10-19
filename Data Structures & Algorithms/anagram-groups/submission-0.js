class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */



    groupAnagrams(strs) {
        const result={}
       for (const str of strs){
        const key=str.split("").sort().join("")
       if(!result[key]){
        result[key]=[]
       }

       result[key].push(str)

       }
       return Object.values(result)
    }
}
