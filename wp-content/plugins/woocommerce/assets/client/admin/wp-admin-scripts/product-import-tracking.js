(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const o = window.wc.customerEffortScore,
    t = window.wc.navigation,
    r = 'import_products';
  (() => {
    const e = (0, t.getQuery)();
    'product_importer' === e.page &&
      ('done' !== e.step ? (0, o.addExitPage)(r) : (0, o.removeExitPage)(r));
  })(),
    ((window.wc = window.wc || {}).productImportTracking = e);
})();
