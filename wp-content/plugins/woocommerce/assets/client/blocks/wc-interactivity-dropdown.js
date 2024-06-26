(() => {
  var e = { 305: () => {} },
    t = {};
  function l(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var s = (t[o] = { exports: {} });
    return e[o](s, s.exports, l), s.exports;
  }
  l.r = e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  };
  var o = {};
  (() => {
    'use strict';
    l.r(o);
    const e = window.wc.__experimentalInteractivity;
    l(305),
      (0, e.store)('woocommerce/interactivity-dropdown', {
        state: {
          get placeholderText() {
            const { selectType: t, selectedItems: l, defaultPlaceholder: o } = (0, e.getContext)();
            var n;
            return 'single' === t
              ? null != l && l.length && l[0].label
                ? null === (n = l[0]) || void 0 === n
                  ? void 0
                  : n.label
                : o
              : 'multiple' === t && 0 === l.length
              ? o
              : '';
          },
          get isSelected() {
            const { item: t, selectedItems: l } = (0, e.getContext)();
            return l.some(e => e.value === t.value && e.label === t.label);
          },
        },
        actions: {
          toggleIsOpen: () => {
            const t = (0, e.getContext)();
            t.isOpen = !t.isOpen;
          },
          unselectDropdownItem: t => {
            const l = (0, e.getContext)(),
              {
                item: { label: o, value: n },
                selectedItems: s,
              } = l,
              i = s || [],
              a = i.findIndex(e => e.value === n && e.label === o);
            -1 !== a && i.splice(a, 1), t.stopPropagation();
          },
          selectDropdownItem: t => {
            const l = (0, e.getContext)(),
              {
                item: { label: o, value: n },
                selectedItems: s,
              } = l,
              i = s.findIndex(e => e.value === n && e.label === o);
            -1 !== i && s.splice(i, 1),
              'single' === l.selectType && -1 === i
                ? s.splice(0, 1, { label: o, value: n })
                : -1 === i && s.push({ label: o, value: n }),
              (l.isOpen = !1),
              t.stopPropagation();
          },
        },
      });
  })(),
    ((this.wc = this.wc || {})['wc-interactivity-dropdown'] = o);
})();
