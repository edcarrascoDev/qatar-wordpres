(() => {
  var e = { 739: () => {} },
    t = {};
  function o(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var c = (t[r] = { exports: {} });
    return e[r](c, c.exports, o), c.exports;
  }
  o.r = e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  };
  var r = {};
  (() => {
    'use strict';
    o.r(r);
    const e = window.wc.__experimentalInteractivity;
    o(739),
      (0, e.store)('woocommerce/interactivity-checkbox-list', {
        state: {},
        actions: {
          selectCheckboxItem: t => {
            const o = (0, e.getContext)(),
              r = t.target.value;
            o.items = o.items.map(e =>
              e.value.toString() === r ? { ...e, checked: !e.checked } : e,
            );
          },
        },
      });
  })(),
    ((this.wc = this.wc || {})['wc-interactivity-checkbox-list'] = r);
})();
