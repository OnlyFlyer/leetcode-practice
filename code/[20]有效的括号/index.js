var isValid = function(s) {
  if (s.length === 0) return true;
  const a = ['()', '[]', '{}']
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    stack.push(item);
    const len = stack.length;
    const left = stack[len-2];
    const right = stack[len-1];
    if (len >= 2 && a.includes(left + right)) {
      stack.pop();
      stack.pop();
    }
  }
  return !stack.length
};
