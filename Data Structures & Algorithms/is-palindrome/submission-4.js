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
    let charArray = filteredString.toLowerCase().split("");
    let left = 0;
    let right = charArray.length - 1;
    while (left < right) {
     if (charArray[left] !== charArray[right])  {
        return false;
      }
      right--;
      left++;
    }
    return true;
  }
}
