class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
            let a = nums1;
    let b = nums2;
    let total = a.length + b.length;
    let half = Math.floor(total / 2);
    if (b.length < a.length) {
      [a, b] = [b, a];
    }

    let left = 0;
    let right = a.length - 1;

    while (true) {
      let partitionA = Math.floor((left + right) / 2);
      let partitionB = half - partitionA - 2;

      let Aleft = partitionA >= 0 ? a[partitionA] : -Infinity;
      let Aright = partitionA + 1 < a.length ? a[partitionA + 1] : Infinity;
      let Bleft = partitionB >= 0 ? b[partitionB] : -Infinity;
      let Bright = partitionB + 1 < b.length ? b[partitionB + 1] : Infinity;

      if (Aleft <= Bright && Bleft <= Aright) {
        //Odd Length
        if (total % 2 === 1) {
          return Math.min(Aright, Bright);
        }
        //Even Length
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      } else if (Aleft > Bright) {
        right = partitionA - 1;
      } else {
        left = partitionA + 1;
      }
    }
    }
}
