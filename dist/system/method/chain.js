System.register(['../decorators'], function (_export) {
  'use strict';

  var Decorators, chain;

  _export('_chain', _chain);

  function _chain(fn) {
    return function () {
      fn.apply(this, arguments);
      return this;
    };
  }

  return {
    setters: [function (_decorators) {
      Decorators = _decorators.Decorators;
    }],
    execute: function () {
      chain = Decorators.configure.parameterizedDecorator('chain', _chain);

      _export('chain', chain);
    }
  };
});
//# sourceMappingURL=../method/chain.js.map