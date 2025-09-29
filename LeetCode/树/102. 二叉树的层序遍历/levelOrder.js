/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const ans = [];
	if (!root) return ans;

	const queue = [root];
	while (queue.length) {
		const len = queue.length;
		const line = [];
		for (let i = 0; i < len; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			line.push(node.val);
		}
		ans.push(line);
	}
	return ans;
};
