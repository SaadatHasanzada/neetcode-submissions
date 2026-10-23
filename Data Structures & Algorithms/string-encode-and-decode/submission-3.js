class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */ 

    //  [] [""]
  
    //. 4#hiiii2#hi
 
    encode(strs) {
      let res=[];

      for(let str of strs){
         res.push(String(str.length),"#",str)
      }
      console.log(res.join(""))
      return res.join("")

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // 5#Hello5#World
    decode(str) {

        let res=[];
        let i=0;

        while(i<str.length){
let j=i;
while(str[j]!=="#"){
    j++;
}
let length=Number(str.substring(i,j))
i=j+1;
j=i+length;
res.push(str.substring(i,j))
i=j

        }

return res

    }
}

