class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.hasOwnProperty(char)) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function dfs(node, index) {
      let currentNode = node;
      if (index === word.length) {
        return node.endOfWord;
      }
      for (let i = index; i < word.length; i++) {
        const element = word[i];
        if (element === '.') {
          for (const child of Object.values(currentNode.children)) {
            if (dfs(child, i + 1)) {
              return true;
            }
          }
          return false;
        }
        if (!currentNode.children.hasOwnProperty(element)) {
          return false;
        }
        currentNode = currentNode.children[element];
      }
      return currentNode.endOfWord;
    }
    return dfs(this.root, 0);
  }
}