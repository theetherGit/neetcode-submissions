class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numberSet = new Set(nums);
        let consecutiveSequenceLength = 0;
        for (let index = 0; index < nums.length; index++) {
            if(!numberSet.has(nums[index] -1)) {
                let length = 1;
                while(numberSet.has(nums[index] + length)) {
                    length++;
                }
                consecutiveSequenceLength = consecutiveSequenceLength > length ? consecutiveSequenceLength : length
            }
        }
        return consecutiveSequenceLength
    }
}
