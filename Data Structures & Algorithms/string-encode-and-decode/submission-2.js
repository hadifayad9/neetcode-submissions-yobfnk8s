class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    const DELIM = "\u241F";
    let joinedString = [];
    for (let i = 0; i < strs.length; i++) {
      const element = strs[i];
      joinedString.push(element.split("").length);
      joinedString.push(DELIM);
      joinedString.push(element);
    }
    return joinedString.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(strs) {
    const DELIM = "\u241F";

    console.log(strs);
    let strNumCheck = "";
    let joinedArray = [];
    let buffer = [];
    let count = 0;
    let length = "";
    let isReadingLength = true;
    for (let i = 0; i < strs.length; i++) {
      const element = strs[i];
      if (element !== DELIM && isReadingLength) {
        strNumCheck += element;
      }
      if (element === DELIM) {
        length = parseInt(strNumCheck, 10);
        if (length === 0) {
          joinedArray.push("");
          strNumCheck = "";
          length = 1;
          isReadingLength = true;
          continue;
        }
        isReadingLength = false;
        count = 0;
        strNumCheck = "";
        continue;
      }
      if (!isReadingLength) {
        buffer.push(element);
        count++;
      }
      if (count === length) {
        joinedArray.push(buffer.join(""));
        buffer = [];
        isReadingLength = true;
        length = 0;
      }
    }
    return joinedArray;
  }
}
