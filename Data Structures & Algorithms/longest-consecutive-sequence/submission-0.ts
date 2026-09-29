class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numberSet = new Set(nums);
        let consecutiveSequenceLength = 0;
        for (let num of numberSet) {
            if(!numberSet.has(num -1)) {
                let length = 1;
                while(numberSet.has(num + length)) {
                    length++;
                }
                consecutiveSequenceLength = consecutiveSequenceLength > length ? consecutiveSequenceLength : length
            }
        }
        return consecutiveSequenceLength
    }
}
