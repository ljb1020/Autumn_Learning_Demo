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
var deleteDuplicates = function (head) {
	if (!head) return head;

	let newHead = new ListNode(0, head);
	let pre = newHead;
	let cur = head;
	while (cur) {
		while (cur.next && cur.val === cur.next.val) {
			cur = cur.next;
		}
		// pre.next !== cur 时候 说明中间有因为重复而删除，所以这个值的节点不应该存入
		if (pre.next === cur) {
			pre = pre.next;
			cur = cur.next;
		} else {
			pre.next = cur.next;
			cur = cur.next;
		}
	}
	return newHead.next;
};
