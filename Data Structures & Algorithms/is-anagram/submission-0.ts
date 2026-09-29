class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        if (s === t) return true;
        
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}
