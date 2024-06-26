var wc;
(() => {
  var e = { 3984: () => {} },
    t = {};
  function i(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, i), a.exports;
  }
  i.r = e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  };
  var n = {};
  (() => {
    'use strict';
    i.r(n);
    const e = window.wc.__experimentalInteractivity;
    i(3984);
    const t = e =>
        e &&
        e instanceof window.HTMLAnchorElement &&
        e.href &&
        (!e.target || '_self' === e.target) &&
        e.origin === window.location.origin,
      o = {
        state: {
          get startAnimation() {
            return 'start' === (0, e.getContext)().animation;
          },
          get finishAnimation() {
            return 'finish' === (0, e.getContext)().animation;
          },
        },
        actions: {
          *navigate(i) {
            var n, o, a;
            const c = (0, e.getContext)(),
              { ref: r } = (0, e.getElement)(),
              s =
                null == r ||
                null === (n = r.closest('[data-wc-navigation-id]')) ||
                void 0 === n ||
                null === (o = n.dataset) ||
                void 0 === o
                  ? void 0
                  : o.wcNavigationId;
            var l;
            if (
              ((null == r || null === (a = r.closest('[data-wc-navigation-id]')) || void 0 === a
                ? void 0
                : a.dataset.wcNavigationDisabled) &&
                (yield ((l = r.href), window.location.assign(l), new Promise(() => {}))),
              t(r) &&
                (e =>
                  !(
                    0 !== e.button ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.shiftKey ||
                    e.defaultPrevented
                  ))(i))
            ) {
              i.preventDefault();
              const t = setTimeout(() => {
                (c.accessibilityMessage = c.accessibilityLoadingMessage), (c.animation = 'start');
              }, 400);
              yield (0, e.navigate)(r.href),
                clearTimeout(t),
                (c.accessibilityMessage =
                  c.accessibilityLoadedMessage +
                  (c.accessibilityMessage === c.accessibilityLoadedMessage ? ' ' : '')),
                (c.animation = 'finish'),
                (c.isPrefetchNextOrPreviousLink = !!r.href),
                (function(e) {
                  if (!e) return;
                  const t = `[data-wc-navigation-id=${e}] .wc-block-product-template .wc-block-product`,
                    i = document.querySelector(t);
                  if (i) {
                    const e = i.getBoundingClientRect();
                    (e.top >= 0 &&
                      e.left >= 0 &&
                      e.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                      e.right <= (window.innerWidth || document.documentElement.clientWidth)) ||
                      i.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                })(s);
            }
          },
          *prefetchOnHover() {
            var i;
            const { ref: n } = (0, e.getElement)();
            (null == n || null === (i = n.closest('[data-wc-navigation-id]')) || void 0 === i
              ? void 0
              : i.dataset.wcNavigationDisabled) ||
              (t(n) && (yield (0, e.prefetch)(n.href)));
          },
        },
        callbacks: {
          *prefetch() {
            var i;
            const { ref: n } = (0, e.getElement)();
            if (
              null == n || null === (i = n.closest('[data-wc-navigation-id]')) || void 0 === i
                ? void 0
                : i.dataset.wcNavigationDisabled
            )
              return;
            const o = (0, e.getContext)();
            null != o && o.isPrefetchNextOrPreviousLink && t(n) && (yield (0, e.prefetch)(n.href));
          },
        },
      };
    (0, e.store)('woocommerce/product-collection', o);
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-collection'] = n);
})();
