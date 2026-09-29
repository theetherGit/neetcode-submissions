class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numberSet = new Set(nums);
        let longestSeq = 0;
    
        for (let index = 0; index < nums.length; index++) {
            const isBegining = !numberSet.has(nums[index] - 1)
            if (isBegining) {
                let currentNumber = nums[index]
                let currentLongestSeq = 1;
                while(numberSet.has(currentNumber+1)) {
                    currentLongestSeq += 1;
                    currentNumber+=1
                }
                longestSeq= currentLongestSeq > longestSeq ? currentLongestSeq : longestSeq
            }
        }
        return longestSeq;
    }
}
