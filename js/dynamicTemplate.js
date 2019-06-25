var createHtmlNode = function(tag, className, text, val) {
  let node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text) {
    node.textContent = text;
  }
  if (val) {
    node.value = val;
  }
  return node;
}