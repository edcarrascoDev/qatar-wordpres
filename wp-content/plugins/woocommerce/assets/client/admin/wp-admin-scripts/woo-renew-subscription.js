(() => {
  'use strict';
  var e = {
      n: o => {
        var n = o && o.__esModule ? () => o.default : () => o;
        return e.d(n, { a: n }), n;
      },
      d: (o, n) => {
        for (var r in n)
          e.o(n, r) && !e.o(o, r) && Object.defineProperty(o, r, { enumerable: !0, get: n[r] });
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
  const n = window.wp.domReady;
  var r = e.n(n);
  const t = window.wc.tracks;
  r()(() => {
    const e = document.querySelectorAll('.woocommerce-renew-subscription');
    e.length > 0 &&
      ((0, t.recordEvent)('woo_renew_subscription_in_plugins_shown'),
      e.forEach(e => {
        e.addEventListener('click', function() {
          (0, t.recordEvent)('woo_renew_subscription_in_plugins_clicked');
        });
      }));
  }),
    ((window.wc = window.wc || {}).wooRenewSubscription = o);
})();
