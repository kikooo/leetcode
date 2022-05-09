/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/**
 * 测试用例
 * [1,2,3,4,5]
 * 2
 */
var reverseKGroup = function(head, k) {
  let map = [];
  let item = head;
  let index = 0;
  while(item) {
      map[Math.floor(index / k)] = map[Math.floor(index / k)] || [];
      map[Math.floor(index / k)].push(item);
      item = item.next;
      index += 1;
  }

  let start = {};
  let target = start;
  map.forEach(item => {
      if (item.length < k) {
          while(item.length) {
              target.next = item.shift();
              target = target.next;
          }
      } else {
          while(item.length) {
              target.next = item.pop();
              target = target.next;
          }
      }
      // 解决链表循环报错
      target.next = null;
  });
  return start.next;
};