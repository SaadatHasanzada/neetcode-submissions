class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

 const first={};
 const second={};
 const longest=s.length>t.length ? first : second

for( let c of s){
    first[c]=first[c]+1 || 1
    }

for( let c of t){
    second[c]=second[c]+1 || 1
    }


for( let c in longest){
    if(first[c]!== second[c]) return false;
}

return true

}

}