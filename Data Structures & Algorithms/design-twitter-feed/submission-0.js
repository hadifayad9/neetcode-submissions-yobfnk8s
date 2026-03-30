class MaxHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data.length ? this.data[0] : undefined;
  }

  push(val) {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      let parent = this.getParentIndex(i);
      if (this.data[i][0] > this.data[parent][0]) {
        this.swap(i, parent);
        i = parent;
      } else {
        break;
      }
    }
  }
  pop() {
    if (this.data.length === 0) return undefined;
    if (this.data.length === 1) return this.data.pop();

    this.swap(0, this.data.length - 1);
    const removed = this.data.pop();

    let i = 0;

    while (true) {
      const left = this.getLeftChildIndex(i);
      const right = this.getRightChildIndex(i);
      let smallest = i;

      if (
        left < this.data.length &&
        this.data[left][0] > this.data[smallest][0]
      ) {
        smallest = left;
      }

      if (
        right < this.data.length &&
        this.data[right][0] > this.data[smallest][0]
      ) {
        smallest = right;
      }
      if (smallest === i) break;
      this.swap(i, smallest);
      i = smallest;
    }
    return removed;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

/**
Design Twitter
Medium Topics Company Tags
Hints

Implement a simplified version of Twitter which allows users to post tweets, follow/unfollow each other, and view the 10 most recent tweets within their own news feed.

Users and tweets are uniquely identified by their IDs (integers).

Implement the following methods:

    Twitter() Initializes the twitter object.
    void postTweet(int userId, int tweetId) Publish a new tweet with ID tweetId by the user userId. You may assume that each tweetId is unique.
    List<Integer> getNewsFeed(int userId) Fetches at most the 10 most recent tweet IDs in the user's news feed. Each item must be posted by users who the user is following or by the user themself. Tweets IDs should be ordered from most recent to least recent.
    void follow(int followerId, int followeeId) The user with ID followerId follows the user with ID followeeId.
    void unfollow(int followerId, int followeeId) The user with ID followerId unfollows the user with ID followeeId.


 */
class Twitter {
  constructor() {
    this.timestamp = 0;
    this.userTweets = {};
    this.userFollowees = {};
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.userTweets.hasOwnProperty(userId)) {
      this.userTweets[userId] = [];
    }
    if (!this.userFollowees.hasOwnProperty(userId)) {
      this.userFollowees[userId] = new Set().add(userId);
    }
    this.userTweets[userId].push([tweetId, this.timestamp++]);
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    let result = [];
    let maxHeap = new MaxHeap();
    if (!this.userFollowees.hasOwnProperty(userId)) {
      this.userFollowees[userId] = new Set().add(userId);
    }
    const userList = this.userFollowees[userId];
    for (const element of userList) {
      if (
        this.userTweets.hasOwnProperty(element) &&
        this.userTweets[element].length !== 0
      ) {
        maxHeap.push([
          this.userTweets[element][this.userTweets[element].length - 1][1],
          element,
          this.userTweets[element].length - 1,
        ]);
      }
    }
    while (maxHeap.size() && result.length < 10) {
      const recentTweet = maxHeap.pop();
      result.push(this.userTweets[recentTweet[1]][recentTweet[2]][0]);
      if (recentTweet[2] > 0) {
        maxHeap.push([
          this.userTweets[recentTweet[1]][recentTweet[2] - 1][1],
          recentTweet[1],
          recentTweet[2] - 1,
        ]);
      }
    }
    return result;
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (!this.userFollowees.hasOwnProperty(followerId)) {
      this.userFollowees[followerId] = new Set().add(followerId);
    }
    this.userFollowees[followerId].add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (this.userFollowees.hasOwnProperty(followerId)) {
      if (followeeId !== followerId) {
        this.userFollowees[followerId].delete(followeeId);
      }
    }
  }
}
