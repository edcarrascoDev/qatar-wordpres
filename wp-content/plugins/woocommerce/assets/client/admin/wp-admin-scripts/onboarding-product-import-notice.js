(() => {
  'use strict';
  var e = {
      n: t => {
        var o = t && t.__esModule ? () => t.default : () => t;
        return e.d(o, { a: o }), o;
      },
      d: (t, o) => {
        for (var n in o)
          e.o(o, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    t = {};
  e.r(t);
  const o = window.wp.i18n,
    n = window.wp.domReady;
  var r = e.n(n);
  const i = window.wc.wcSettings;
  r()(() => {
    const e = document.querySelector('.wc-actions');
    if (e) {
      const t = document.querySelector('.wc-actions .button-primary');
      t && (t.classList.remove('button'), t.classList.remove('button-primary'));
      const n = document.createElement('a');
      n.classList.add('button'),
        n.classList.add('button-primary'),
        n.setAttribute('href', (0, i.getAdminLink)('admin.php?page=wc-admin')),
        (n.innerText = (0, o.__)('Continue setup', 'woocommerce')),
        e.appendChild(n);
    }
  }),
    ((window.wc = window.wc || {}).onboardingProductImportNotice = t);
})();
