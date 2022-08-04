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
  if(!root) return []
  const res = [];
  const helper = (node, level) => {
    if (!res[level]) {
      res[level] = [node.val];
    } else {
      res[level].push(node.val);
    }
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  };
  helper(root, 0);
  return res;
};

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
  const q = [];
  const res = [];
  q.push(root);
  while (q.length) { // []
    const n = q.length; 
    const levelList = [];
    for (let i = 0; i < n; i++) {
      const node = q.shift();
      levelList.push(node.val); 
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right); 
    }
    res.push(levelList);
  }
};




var levelOrder = function(root) {
  if (!root) return [];
  let result = [];
  const queue = [[root, 0]];
  while (queue.length) {
    const [node, level] = queue.shift();
    if (!result[level]) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }
    if (node.left) {
      queue.push([node.left, level + 1]);
    }
    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }
  return result;
};



var levelOrder = function(root) {
  if (!root) {
      return [];
  }
  const result = [];
  let index = 0;
  const help = (index, node) => {
      const { left, right, val } = node;
      if (result[index]) {
          result[index].push(val)
      } else {
          result[index] = [val];
      }
      if (
          left instanceof TreeNode ||
          right instanceof TreeNode
      ) {

          index += 1;
          left instanceof TreeNode && help(index+1, left);
          right instanceof TreeNode && help(index+1, right);
      }
  }
  help(index, root);

  return result;
};


var levelOrderMe = function(root) {
  if (!root) return [];
  let result = [];
  const queue = [[root, 0]];
  while (queue.length) {
    const [node, level] = queue.shift();
    if (!result[level]) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }
    if (node.left) {
      queue.push([node.left, level + 1]);
    }
    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }
  return result;
};