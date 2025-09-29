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
var insertionSortList = function (head) {
	if (!head) return head;

	const dummyNode = new ListNode(0);
	dummyNode.next = head;
	let lastSorted = head;
	let cur = head.next;

	while (cur) {
		if (cur.val >= lastSorted.val) {
			lastSorted = lastSorted.next;
		} else {
			let pre = dummyNode;
			while (pre.next.val <= cur.val) {
				pre = pre.next;
			}
			lastSorted.next = cur.next;
			cur.next = pre.next;
			pre.next = cur;
		}
		cur = lastSorted.next;
	}
};
