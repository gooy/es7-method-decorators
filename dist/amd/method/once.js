define(["exports", "../decorators"], function (exports, _decorators) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._once = _once;

  function _once(fn, args, key) {
    var mode = null;
    if (args) mode = args[0];

    return function () {
      var cacheProp = "__once__";
      this[cacheProp] = this[cacheProp] || new WeakMap();
      var cache = this[cacheProp];

      if (cache.get(this[key]) === true) {
        if (mode) {
          var error = new Error("alreadyExecuted");
          if (mode === "throw") throw error;
          if (typeof mode === "function") mode.call(this, error);
        }
        return;
      }
      cache.set(this[key], true);
      return fn.apply(this, arguments);
    };
  }

  var once = _decorators.Decorators.decorator(_once);
  exports.once = once;
});
//# sourceMappingURL=../method/once.js.map