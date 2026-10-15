class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        const sortedA=new Map()
        const sortedB=new Map()

for(const char of s) {
    if(sortedA.has(char)) { sortedA.set(char, sortedA.get(char) + 1) } 
    else {sortedA.set(char,1)}
}

for(const char of t) {
    if(sortedB.has(char)) { sortedB.set(char, sortedB.get(char) + 1) } 
    else {sortedB.set(char,1)}
}


for (const key of sortedA.keys()){
    if(sortedA.get(key)!==sortedB.get(key)) return false
}
return true
        
    }
}
