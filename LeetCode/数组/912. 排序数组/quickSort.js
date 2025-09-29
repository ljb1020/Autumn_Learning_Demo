/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	quickSort(nums, 0, nums.length - 1);
	return nums;
};

function quickSort(nums, left, right) {
	if (left > right) return;
	let pivot = Math.floor(Math.random() * (right - left + 1) + left);
	const [L, R] = partition(nums, left, right, pivot);
	quickSort(nums, left, L - 1);
	quickSort(nums, R + 1, right);
}

function partition(nums, left, right, pivot) {
	const pivotVal = nums[pivot];
	let i = left;
	while (i <= right) {
		if (nums[i] < pivotVal) {
			swap(nums, left, i);
			left++;
			i++;
		} else if (nums[i] === pivotVal) {
			i++;
		} else {
			swap(nums, right, i);
			right--;
		}
	}
	return [left, right];
}

function swap(nums, a, b) {
	let temp = nums[a];
	nums[a] = nums[b];
	nums[b] = temp;
}
