(() => {
  'use strict';
  var e = {
      n: o => {
        var n = o && o.__esModule ? () => o.default : () => o;
        return e.d(n, { a: n }), n;
      },
      d: (o, n) => {
        for (var t in n)
          e.o(n, t) && !e.o(o, t) && Object.defineProperty(o, t, { enumerable: !0, get: n[t] });
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
  var t = e.n(n);
  const c = window.wc.tracks;
  t()(() => {
    const e = document.querySelectorAll('.woocommerce-connect-your-store');
    e.length > 0 &&
      ((0, c.recordEvent)('woo_connect_notice_in_plugins_shown'),
      e.forEach(e => {
        e.addEventListener('click', function() {
          (0, c.recordEvent)('woo_connect_notice_in_plugins_clicked');
        });
      }));
  }),
    ((window.wc = window.wc || {}).wooPluginUpdateConnectNotice = o);
})();
