class ListNode {
  constructor(val = 0, key) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.left = new ListNode(0, 0);
    this.right = new ListNode(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
    this.cache = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.remove(node);
      this.insert(node);
      return node.val;
    } else {
      return -1;
    }
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      node.val = value;
      this.remove(node);
      this.insert(node);
    } else {
      this.cache.set(key, new ListNode(value, key));
      this.insert(this.cache.get(key));
      if (this.cache.size > this.capacity) {
        let lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key);
      }
    }
  }
  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  insert(node) {
    let prev = this.right.prev;
    let next = this.right;
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
  }
}

