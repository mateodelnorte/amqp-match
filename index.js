module.exports = function match (actual, expected) {
  if (actual === expected) return true;
  var regexString = '^' + expected.replace(/\*/g, '([^.]+)').replace(/#/g, '([^.]+\.?)+') + '$';
  return actual.search(regexString) !== -1;
};

