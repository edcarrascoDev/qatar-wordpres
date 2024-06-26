var wc;
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
  const o = ({ handle: e, src: t, version: o }) => {
      const n = t.split('?');
      (null == n ? void 0 : n.length) > 1 && (t = n[0]);
      const r = `#${e}-js, #${e}-js-prefetch, script[src*="${t}"]`;
      if (0 === document.querySelectorAll(r).length) {
        const n = document.createElement('link');
        (n.href = o ? `${t}?ver=${o}` : t),
          (n.rel = 'preload'),
          (n.as = 'script'),
          (n.id = `${e}-js-prefetch`),
          document.head.appendChild(n);
      }
    },
    n = window.wc.wcTypes,
    r = (e, t = '') => {
      var o, n;
      if (
        'wc-blocks-registry-js' === e &&
        'object' ==
          typeof (null === (o = window) || void 0 === o || null === (n = o.wc) || void 0 === n
            ? void 0
            : n.wcBlocksRegistry)
      )
        return !0;
      const r = t.split('?');
      (null == r ? void 0 : r.length) > 1 && (t = r[0]);
      const c = t ? `script#${e}, script[src*="${t}"]` : `script#${e}`;
      return document.querySelectorAll(c).length > 0;
    },
    c = e => {
      if (!(0, n.isString)(e.id) || r(e.id, null == e ? void 0 : e.src)) return;
      const t = document.createElement('script');
      for (const o in e) {
        if (!e.hasOwnProperty(o)) continue;
        const r = o;
        if ('onload' === r || 'onerror' === r) continue;
        const c = e[r];
        (0, n.isString)(c) && (t[r] = c);
      }
      'function' == typeof e.onload && (t.onload = e.onload),
        'function' == typeof e.onerror && (t.onerror = e.onerror),
        document.body.appendChild(t);
    },
    i = ({ handle: e, src: t, version: o, after: n, before: i, translations: a }) =>
      new Promise((s, d) => {
        r(`${e}-js`, t) && s(),
          a && c({ id: `${e}-js-translations`, innerHTML: a }),
          i && c({ id: `${e}-js-before`, innerHTML: i }),
          c({
            id: `${e}-js`,
            onerror: d,
            onload: () => {
              n && c({ id: `${e}-js-after`, innerHTML: n }), s();
            },
            src: o ? `${t}?ver=${o}` : t,
          });
      }),
    a = window.CustomEvent || null,
    s = (e, t, o = !1, n = !1) => {
      if ('function' != typeof jQuery) return () => {};
      const r = () => {
        ((e, { bubbles: t = !1, cancelable: o = !1, element: n, detail: r = {} }) => {
          if (!a) return;
          n || (n = document.body);
          const c = new a(e, { bubbles: t, cancelable: o, detail: r });
          n.dispatchEvent(c);
        })(t, { bubbles: o, cancelable: n });
      };
      return jQuery(document).on(e, r), () => jQuery(document).off(e, r);
    },
    d = window.wp.i18n,
    l = window.wc.priceFormat,
    u = window.wc.wcSettings,
    m = window.wp.apiFetch;
  var w = e.n(m);
  const _ = e => {
    if (!e) return;
    const [t, o] = e,
      r = (0, u.getSettingWithCoercion)('displayCartPricesIncludingTax', !1, n.isBoolean),
      c = ((e, t) => {
        const o = (0, l.getCurrencyFromPriceResponse)(e),
          n = t
            ? parseInt(e.total_items, 10) + parseInt(e.total_items_tax, 10)
            : parseInt(e.total_items, 10);
        return (0, l.formatPrice)(n, o);
      })(t, r),
      i = document.querySelectorAll('.wc-block-mini-cart'),
      a = document.querySelectorAll('.wc-block-mini-cart__badge'),
      s = document.querySelectorAll('.wc-block-mini-cart__amount');
    i.forEach(e => {
      if (!(e instanceof HTMLElement)) return;
      const n = e.querySelector('.wc-block-mini-cart__button');
      null == n ||
        n.setAttribute(
          'aria-label',
          e.dataset.hasHiddenPrice
            ? (0, d.sprintf) /* translators: %s number of products in cart. */(
                /* translators: %s number of products in cart. */
                (0, d._n)('%1$d item in cart', '%1$d items in cart', o, 'woocommerce'),
                o,
              )
            : (0,
              d.sprintf) /* translators: %1$d is the number of products in the cart. %2$s is the cart total */(
                /* translators: %1$d is the number of products in the cart. %2$s is the cart total */
                (0, d._n)(
                  '%1$d item in cart, total price of %2$s',
                  '%1$d items in cart, total price of %2$s',
                  o,
                  'woocommerce',
                ),
                o,
                c,
              ),
        ),
        (e.dataset.cartTotals = JSON.stringify(t)),
        (e.dataset.cartItemsCount = o.toString());
    }),
      a.forEach(e => {
        (o > 0 || '' !== e.textContent) && (e.textContent = o.toString());
      }),
      s.forEach(e => {
        e.textContent = c;
      }),
      o > 0 &&
        document.querySelectorAll('.wc-block-mini-cart__tax-label').forEach(e => {
          e.removeAttribute('hidden');
        });
  };
  function b(e, t) {
    if (!e) return null;
    const o = window.getComputedStyle(e)[t];
    return 'rgba(0, 0, 0, 0)' !== o && 'transparent' !== o ? o : b(e.parentElement, t);
  }
  _(
    (() => {
      const e = localStorage.getItem('wc-blocks_mini_cart_totals');
      if (!e) return;
      const t = JSON.parse(e);
      return [t.totals, t.itemsCount];
    })(),
  ),
    (async () =>
      w()({ path: '/wc/store/v1/cart' })
        .then(
          e => (
            localStorage.setItem(
              'wc-blocks_mini_cart_totals',
              JSON.stringify({ totals: e.totals, itemsCount: e.items_count }),
            ),
            [e.totals, e.items_count]
          ),
        )
        .catch(e => {
          console.error(e);
        }))().then(_),
    (function() {
      const e = document.createElement('style'),
        t = getComputedStyle(document.body).backgroundColor,
        o = document.querySelector('.wc-block-mini-cart__button'),
        n = b(o, 'backgroundColor') || '#fff',
        r = b(o, 'color') || '#000';
      e.appendChild(
        document.createTextNode(
          `:where(.wp-block-woocommerce-mini-cart-contents) {\n\t\t\t\tbackground-color: ${t};\n\t\t\t}\n\t\t\t:where(.wc-block-mini-cart__badge) {\n\t\t\t\tbackground-color: ${r};\n\t\t\t\tcolor: ${n};\n\t\t\t}`,
        ),
      ),
        document.head.appendChild(e);
    })(),
    window.addEventListener('load', () => {
      const e = document.querySelectorAll('.wc-block-mini-cart');
      let t = !1;
      if (0 === e.length) return;
      const n = window.wcBlocksMiniCartFrontendDependencies;
      for (const e in n) {
        const t = n[e];
        o({ handle: e, ...t });
      }
      const r = s('adding_to_cart', 'wc-blocks_adding_to_cart'),
        c = s('added_to_cart', 'wc-blocks_added_to_cart'),
        a = s('removed_from_cart', 'wc-blocks_removed_from_cart'),
        d = async () => {
          if (!t) {
            (t = !0), document.body.removeEventListener('wc-blocks_adding_to_cart', d), r();
            for (const e in n) {
              const t = n[e];
              await i({ handle: e, ...t });
            }
          }
        };
      document.body.addEventListener('wc-blocks_adding_to_cart', d),
        window.addEventListener('pageshow', e => {
          ((null != e && e.persisted) ||
            'back_forward' ===
              (window.performance && window.performance.getEntriesByType('navigation').length
                ? window.performance.getEntriesByType('navigation')[0].type
                : '')) &&
            d();
        }),
        e.forEach((e, o) => {
          if (!(e instanceof HTMLElement)) return;
          const n = e.querySelector('.wc-block-mini-cart__button'),
            r = e.querySelector('.wc-block-components-drawer__screen-overlay');
          if (!n || !r) return;
          const i = () => {
              t || d(),
                document.body.removeEventListener('wc-blocks_added_to_cart', u),
                document.body.removeEventListener('wc-blocks_removed_from_cart', l),
                c(),
                a();
            },
            s = () => {
              (e.dataset.isInitiallyOpen = 'true'),
                r.classList.add('wc-block-components-drawer__screen-overlay--with-slide-in'),
                r.classList.remove('wc-block-components-drawer__screen-overlay--is-hidden'),
                i();
            },
            l = () => {
              (e.dataset.isInitiallyOpen = 'false'), i();
            };
          n.addEventListener('mouseover', d),
            n.addEventListener('focus', d),
            n.addEventListener('click', s);
          const u =
            'open_drawer' === e.dataset.addToCartBehaviour
              ? () => {
                  s();
                }
              : l;
          0 === o &&
            (document.body.addEventListener('wc-blocks_added_to_cart', u),
            document.body.addEventListener('wc-blocks_removed_from_cart', l));
        });
    }),
    ((wc = void 0 === wc ? {} : wc)['mini-cart'] = t);
})();
