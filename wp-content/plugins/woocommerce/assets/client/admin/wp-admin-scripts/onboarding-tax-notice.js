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
    n = window.wp.data,
    i = window.wp.domReady;
  var a = e.n(i);
  const r = window.wc.wcSettings,
    c = e =>
      e && !e.disabled
        ? new Promise(e => {
            window.requestAnimationFrame(e);
          }).then(() => c(e))
        : Promise.resolve(!0),
    d = () => {
      const e = document.querySelector('.woocommerce-save-button');
      e.classList.contains('has-tax') ||
        c(e).then(() => {
          document.querySelector('.wc_tax_rates .tips') &&
            (e.classList.add('has-tax'),
            (0, n.dispatch)('core/notices').createSuccessNotice(
              (0, o.__)("You've added your first tax rate!", 'woocommerce'),
              {
                id: 'WOOCOMMERCE_ONBOARDING_TAX_NOTICE',
                actions: [
                  {
                    url: (0, r.getAdminLink)('admin.php?page=wc-admin'),
                    label: (0, o.__)('Continue setup.', 'woocommerce'),
                  },
                ],
              },
            ));
        });
    };
  a()(() => {
    const e = document.querySelector('.woocommerce-save-button');
    window.htmlSettingsTaxLocalizeScript &&
      window.htmlSettingsTaxLocalizeScript.rates &&
      !window.htmlSettingsTaxLocalizeScript.rates.length &&
      e &&
      e.addEventListener('click', d);
  }),
    ((window.wc = window.wc || {}).onboardingTaxNotice = t);
})();
