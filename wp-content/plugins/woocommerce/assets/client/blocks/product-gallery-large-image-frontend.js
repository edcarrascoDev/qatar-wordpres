var wc;
(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wc.__experimentalInteractivity,
    o = e => (0, t.getContext)(e),
    { state: r, actions: s } = (0, t.store)('woocommerce/product-gallery');
  let n = !1;
  const l = {
    state: {
      get styles() {
        const { styles: e } = o();
        return Object.entries(null != e ? e : []).reduce((e, [t, o]) => {
          const r = `${t}:${o};`;
          return e.length > 0 ? `${e} ${r}` : r;
        }, '');
      },
    },
    actions: {
      startZoom: e => {
        if (!e.target.classList.contains('wc-block-woocommerce-product-gallery-large-image__image'))
          return s.resetZoom();
        const t = e.target,
          r = (e.offsetX / t.clientWidth) * 100,
          n = (e.offsetY / t.clientHeight) * 100,
          { styles: l } = o();
        l && ((l.transform = 'scale(1.3)'), (l['transform-origin'] = `${r}% ${n}%`));
      },
      resetZoom: () => {
        const e = o();
        e.styles && ((e.styles.transform = 'scale(1.0)'), (e.styles['transform-origin'] = ''));
      },
    },
    callbacks: {
      scrollInto: () => {
        if (!r.isSelected) return;
        const { isDialogOpen: e } = o(),
          { ref: s } = (0, t.getElement)();
        e === n && s.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }),
          e &&
            e !== n &&
            s.closest('dialog') &&
            (s.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'center' }),
            (n = e)),
          e ||
            e === n ||
            (s.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'center' }),
            (n = e));
      },
    },
  };
  (0, t.store)('woocommerce/product-gallery', l),
    ((wc = void 0 === wc ? {} : wc)['product-gallery-large-image'] = e);
})();
