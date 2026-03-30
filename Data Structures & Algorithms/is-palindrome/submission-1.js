class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isPalindrome(s) {
    if (s.length <= 1) {
      return true;
    }
    const lettersOnlyString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const charArray = [...lettersOnlyString];
    let left = 0;
    let right = charArray.length - 1;
    while (left < right) {
      if (charArray[left] !== charArray[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
