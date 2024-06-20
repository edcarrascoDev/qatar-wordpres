(() => {
  'use strict';
  var e = {
      n: o => {
        var t = o && o.__esModule ? () => o.default : () => o;
        return e.d(t, { a: t }), t;
      },
      d: (o, t) => {
        for (var n in t)
          e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, { enumerable: !0, get: t[n] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    o = {};
  e.r(o);
  const t = window.wp.i18n,
    n = window.wp.data,
    r = window.wp.domReady;
  var d = e.n(r);
  const i = window.wc.wcSettings;
  d()(() => {
    (0, n.dispatch)('core/notices').createSuccessNotice(
      (0, t.__)('🎉 Congrats on adding your first product!', 'woocommerce'),
      {
        id: 'WOOCOMMERCE_ONBOARDING_PRODUCT_NOTICE',
        actions: [
          {
            url: (0, i.getAdminLink)('admin.php?page=wc-admin'),
            label: (0, t.__)('Continue setup.', 'woocommerce'),
          },
        ],
      },
    );
  }),
    ((window.wc = window.wc || {}).onboardingProductNotice = o);
})();
