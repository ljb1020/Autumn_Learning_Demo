/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 简单双指针
var deleteDuplicates = function (head) {
	if (!head) return null;

	let cur = head;
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			// 值相等即删除
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
};

// map法
var deleteDuplicates1 = function (head) {
	const map = new Map();
	map.set(head.val, 1);
	let before = head;
	let after = head.next;
	while (after) {
		let val = after.val;
		if (map.has(val)) {
			after = after.next;
		} else {
			map.set(val, 1);
			before.next = after;
			before = after;
			after = after.next;
		}
	}
	before.next = null;
	return head;
};
