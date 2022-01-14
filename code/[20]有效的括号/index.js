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

var isValids = function(s) {
  const stack = [];
  const isLeft = single => (
    single === '(' ||
    single === '{' ||
    single === '['
  );
  const isMatch = (l, r) => (
    l === '(' && r === ')' ||
    l === '{' && r === '}' ||
    l === '[' && r === ']'
  )
  for (const single of s) {
    if (isLeft(single)) {
      stack.push(single);
    } else {
      if (!isMatch(stack.pop(), single)) {
        return false;
      }
    }
  }
  return !stack.length;
};


