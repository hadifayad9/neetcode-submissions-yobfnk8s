/**
 *Implement Trie (Prefix Tree)
Medium Topics Company Tags
Hints

A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the PrefixTree class:

    PrefixTree() Initializes the prefix tree object.
    void insert(String word) Inserts the string word into the prefix tree.
    boolean search(String word) Returns true if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
    boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Example 1:

Input:
["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

Output:
[null, null, true, false, true, null, true]

Explanation:
PrefixTree prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");    // return true
prefixTree.search("do");     // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do");     // return true

Constraints:

    1 <= word.length, prefix.length <= 1000
    word and prefix are made up of lowercase English letters.

 */
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class PrefixTree {
  constructor() {
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
    for (let char of word) {
      if (!currentNode.children.hasOwnProperty(char)) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = true;
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
    for (let char of word) {
      if (!currentNode.children.hasOwnProperty(char)) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.endOfWord;
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
    for (let char of prefix) {
      if (!currentNode.children.hasOwnProperty(char)) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
}

const prefixTree = new PrefixTree();
prefixTree.insert('dog');
prefixTree.search('dog'); // return true
prefixTree.search('do'); // return false
prefixTree.startsWith('do'); // return true
prefixTree.insert('do');
prefixTree.search('do'); // return true
