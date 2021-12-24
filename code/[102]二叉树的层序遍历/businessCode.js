const handleInputChange = (value, currentNode, tree) => {
  const helper = (list, id) => {
    if (!list) return;
    list.forEach(item => {
      if (item.id === id) {
        if (item.children) {
          item.score = item.children.reduce((prev, cur) => prev + cur.score, 0);
        } else {
          item.score = value;
        }
        helper(tree, item.pId);
      } else if (item.children) {
        helper(item.children, id);
      }
    });
  };
  helper(tree, currentNode.id);
  return tree;
};
