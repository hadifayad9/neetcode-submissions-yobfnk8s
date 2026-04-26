class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isPalindrome(s) {
    if (s.length <= 1) {
      return true;
    }
    let filteredString = s.replace(/[^a-zA-Z0-9]/g, "");
    let charArrays = filteredString.toLowerCase().split("").join("");
    let left = 0;
    let right = charArrays.length - 1;
    while (left < right) {
      if (charArrays[left] !== charArrays[right]) {
        return false;
      }
      right--;
      left++;
    }
    return true;
  }
}
