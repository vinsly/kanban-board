window.$on = function(target, type, calllback, useCapture) {
  target.addEventListener(type, calllback, !!useCapture);
}

window.qa = function (selector, scope) {
  return (scope || document).querySelector(selector);
}