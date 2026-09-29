class TrieNode {
  constructor() {
    // Stores child nodes where the key is the character and the value is a TrieNode
    this.children = {};
    // Flag to mark if a full word terminates at this node
    this.isEndOfWord = false;
  }
}

class PrefixTree {
  constructor() {
    // The root node is empty and signifies the start of the Trie
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * Time Complexity: O(m), where m is the length of the word.
   * Space Complexity: O(m), in the worst case where no characters share prefixes.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      // If the character doesn't exist as a child, create a new node
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      // Move deeper into the tree
      currentNode = currentNode.children[char];
    }

    // Explicitly mark the end of the word
    currentNode.isEndOfWord = true;
  }

  /**
   * Returns true if the word is in the trie.
   * Time Complexity: O(m), where m is the length of the word.
   * Space Complexity: O(1).
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    return currentNode !== null && currentNode.isEndOfWord;
  }

  /**
   * Returns true if there is any word in the trie that starts with the given prefix.
   * Time Complexity: O(m), where m is the length of the prefix.
   * Space Complexity: O(1).
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    return currentNode !== null;
  }
}
