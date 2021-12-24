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
