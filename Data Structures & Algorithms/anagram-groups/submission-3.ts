class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output: Map<string, string[]> = new Map()
        for(const str of strs) {
            const sortedString = str.split('').sort().join('')
            if (output.has(sortedString)) {
                output.get(sortedString)!.push(str)
            } else {
                output.set(sortedString, [str])
            }
        }
        return Array.from(output.values());
    }
}
