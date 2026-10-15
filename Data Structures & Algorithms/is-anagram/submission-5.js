class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
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

console.log(sortedA,sortedB)
console.log(sortedA.get("r"))
console.log(sortedB.get("r"))

const largerMap = sortedA.size >= sortedB.size ? sortedA : sortedB;

for (const key of largerMap.keys()){
    if(sortedA.get(key)!==sortedB.get(key)) return false
}
return true
        
    }
}
