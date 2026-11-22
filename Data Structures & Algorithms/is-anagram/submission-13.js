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

for(let i=0;i<s.length;i++){
    first[s[i]]=(first[s[i]] || 0) +1;
    second[t[i]]=(second[t[i]] || 0) +1;
}


for( const c in first){
    if(first[c]!== second[c]) return false;
}

return true

}

}