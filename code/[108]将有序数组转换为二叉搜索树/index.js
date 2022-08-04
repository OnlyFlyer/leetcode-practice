// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

// 示例1：

// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

// 示例2:

// 输入：nums = [1,3]
// 输出：[3,1]

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
