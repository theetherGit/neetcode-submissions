class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap: Map<number, number> = new Map();
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        for (const [num, freq] of frequencyMap.entries()) {
            buckets[freq].push(num);
        }

        const result: number[] = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

    return result.slice(0, k);
    }
}
