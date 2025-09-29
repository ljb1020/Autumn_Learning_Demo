/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 标记法
// var hasCycle = function (head) {
// 	if (!head) return false;
// 	while (head) {
// 		if (head.tag) return true;
// 		head.tag = true;
// 		head = head.next;
// 	}
// 	return false;
// };

// 快慢指针
var hasCycle = function (head) {
	if (!head) return false;
	let fast = head;
	let slow = head;
	while (fast !== null) {
		fast = fast.next;
		if (fast === null) return false;
		fast = fast.next;
		slow = slow.next;
		if (fast === slow) return true;
	}
	return false;
};
