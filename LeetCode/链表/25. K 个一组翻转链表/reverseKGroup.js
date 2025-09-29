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
var reverseKGroup = function (head, k) {
	const newHead = new ListNode();
	let p = newHead;
	const arr = [];

	while (head) {
		// arr没装满k个或者head非空 就继续装
		while (arr.length < k && head) {
			arr.push(head);
			head = head.next;
		}
		if (arr.length === k) {
			while (arr.length) {
				p.next = arr.pop();
				p = p.next;
			}
		} else {
			while (arr.length) {
				p.next = arr.shift();
				p = p.next;
			}
		}
	}
	p.next = null;
	return newHead.next;
};
