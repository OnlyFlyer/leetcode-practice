/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  const help = (arr, node) => {
    const length = arr.length;
    const mid = Math.floor((length - 1) / 2);
    const midValue = arr[mid];
    const leftArr = mid === 0 ? [] : arr.slice(0, mid);
    const rightArr = arr.slice(mid + 1);

    node.val = midValue;
    leftArr.length && (node.left = help(leftArr, new TreeNode()));
    rightArr.length && (node.right = help(rightArr, new TreeNode()));
    return node;
  }
  return help(nums, new TreeNode());
};
