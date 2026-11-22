class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

if(s.length!==t.length) return false;

 const first={};
 const second={};

for( let c of s){
    first[c]=first[c]+1 || 1
    }

for( let c of t){
    second[c]=second[c]+1 || 1
    }


for( let c in first){
    if(first[c]!== second[c]) return false;
}

return true

}

}