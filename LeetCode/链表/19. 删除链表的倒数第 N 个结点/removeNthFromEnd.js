/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let p = head;
	// 先求节点个数
	let len = 0;
	while (p) {
		p = p.next;
		len += 1;
	}
	p = head;
	// 目标删除倒数第n个 即正数len - n + 1
	if (n === len) return head.next;
	// 定位到要删除的节点的前一个
	let count = 1;
	while (count !== len - n) {
		p = p.next;
		count++;
	}
	p.next = p.next.next;
	return head;
};
