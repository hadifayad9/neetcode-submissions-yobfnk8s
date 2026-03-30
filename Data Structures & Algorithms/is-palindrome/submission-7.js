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
    let charString = filteredString.toLowerCase().split("");
    let left = 0;
    let right = charString.length - 1;
    while (left < right) {
      if (charString[left] !== charString[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
