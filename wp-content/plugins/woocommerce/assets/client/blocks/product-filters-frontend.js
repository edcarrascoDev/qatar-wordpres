var wc;
(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e),
    (0, window.wc.__experimentalInteractivity.store)('woocommerce/product-filters', {
      state: {},
      actions: {},
      callbacks: {},
    }),
    ((wc = void 0 === wc ? {} : wc)['product-filters'] = e);
})();
