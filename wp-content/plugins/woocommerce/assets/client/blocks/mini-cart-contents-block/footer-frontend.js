(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [7850, 2974, 6476],
  {
    3566: (e, t, s) => {
      'use strict';
      s.d(t, { p: () => l });
      var n = s(9019),
        a = s.n(n),
        o = s(3993),
        c = s(92),
        r = s(6032);
      const l = e => {
        const t = (e => {
            const t = (0, o.isObject)(e) ? e : { style: {} };
            let s = t.style;
            return (
              (0, o.isString)(s) && (s = JSON.parse(s) || {}),
              (0, o.isObject)(s) || (s = {}),
              { ...t, style: s }
            );
          })(e),
          s = (0, r.BK)(t),
          n = (0, r.aR)(t),
          l = (0, r.fo)(t),
          i = (0, c.x)(t);
        return {
          className: a()(i.className, s.className, n.className, l.className),
          style: { ...i.style, ...s.style, ...n.style, ...l.style },
        };
      };
    },
    92: (e, t, s) => {
      'use strict';
      s.d(t, { x: () => a });
      var n = s(3993);
      const a = e => {
        const t = (0, n.isObject)(e.style.typography) ? e.style.typography : {},
          s = (0, n.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : s,
          style: {
            fontSize: e.fontSize ? `var(--wp--preset--font-size--${e.fontSize})` : t.fontSize,
            fontStyle: t.fontStyle,
            fontWeight: t.fontWeight,
            letterSpacing: t.letterSpacing,
            lineHeight: t.lineHeight,
            textDecoration: t.textDecoration,
            textTransform: t.textTransform,
          },
        };
      };
    },
    6032: (e, t, s) => {
      'use strict';
      s.d(t, { BK: () => m, aR: () => d, fo: () => u });
      var n = s(9019),
        a = s.n(n),
        o = s(1194),
        c = s(9786),
        r = s(3993);
      function l(e = {}) {
        const t = {};
        return (
          (0, c.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, o.c)(t)}-${e}` : '';
      }
      function m(e) {
        var t, s, n, o, c, m, d;
        const { backgroundColor: u, textColor: y, gradient: p, style: v } = e,
          h = i('background-color', u),
          g = i('color', y),
          f = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(p),
          b = f || (null == v || null === (t = v.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: a()(g, f, {
            [h]: !b && !!h,
            'has-text-color':
              y || (null == v || null === (s = v.color) || void 0 === s ? void 0 : s.text),
            'has-background':
              u ||
              (null == v || null === (n = v.color) || void 0 === n ? void 0 : n.background) ||
              p ||
              (null == v || null === (o = v.color) || void 0 === o ? void 0 : o.gradient),
            'has-link-color': (0, r.isObject)(
              null == v || null === (c = v.elements) || void 0 === c ? void 0 : c.link,
            )
              ? null == v ||
                null === (m = v.elements) ||
                void 0 === m ||
                null === (d = m.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: l({ color: (null == v ? void 0 : v.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const s = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: s, style: n } = e,
              o = s ? i('border-color', s) : '';
            return a()({
              'has-border-color':
                !!s || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
              [o]: !!o,
            });
          })(e),
          style: l({ border: s }),
        };
      }
      function u(e) {
        var t;
        return {
          className: void 0,
          style: l({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    7767: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => d });
      var n = s(1609),
        a = s(812),
        o = s(4845),
        c = s(9019),
        r = s.n(c),
        l = s(3566);
      const i = (0, s(7723).__)('View my cart', 'woocommerce');
      var m = s(1692);
      const d = ({ className: e, cartButtonLabel: t, style: s }) => {
        const c = (0, l.p)({ style: s });
        return a.Vo
          ? (0, n.createElement)(
              o.A,
              {
                className: r()(e, c.className, 'wc-block-mini-cart__footer-cart'),
                style: c.style,
                href: a.Vo,
                variant: (0, m.I)(e, 'outlined'),
              },
              t || i,
            )
          : null;
      };
    },
    517: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => y });
      var n = s(1609),
        a = s(812),
        o = s(4845),
        c = s(9019),
        r = s.n(c),
        l = s(3566),
        i = s(7902),
        m = s(2379);
      const d = (0, s(7723).__)('Go to checkout', 'woocommerce');
      var u = s(1692);
      const y = ({ className: e, checkoutButtonLabel: t, style: s }) => {
        const c = (0, l.p)({ style: s }),
          { dispatchOnProceedToCheckout: y } = (0, i.e)();
        return a.tn
          ? (0, n.createElement)(
              o.A,
              {
                className: r()(e, c.className, 'wc-block-mini-cart__footer-checkout'),
                variant: (0, u.I)(e, 'contained'),
                style: c.style,
                href: a.tn,
                onClick: e => {
                  y().then(t => {
                    t.some(m.CR) && e.preventDefault();
                  });
                },
              },
              t || d,
            )
          : null;
      };
    },
    273: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => j });
      var n = s(1609),
        a = s(7723),
        o = s(4656),
        c = s(8529),
        r = s(6087),
        l = s(923),
        i = s.n(l);
      function m(e) {
        const t = (0, r.useRef)(e);
        return i()(e, t.current) || (t.current = e), t.current;
      }
      var d = s(4083),
        u = s(7143),
        y = s(7594);
      var p = s(8605),
        v = s(9019),
        h = s.n(v);
      const g = e =>
          `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
        f = ({ id: e, src: t = null, alt: s = '' }) =>
          t ? (0, n.createElement)('img', { className: g(e), src: t, alt: s }) : null;
      var b = s(812);
      const E = [
        { id: 'alipay', alt: 'Alipay', src: b.sW + 'payment-methods/alipay.svg' },
        { id: 'amex', alt: 'American Express', src: b.sW + 'payment-methods/amex.svg' },
        { id: 'bancontact', alt: 'Bancontact', src: b.sW + 'payment-methods/bancontact.svg' },
        { id: 'diners', alt: 'Diners Club', src: b.sW + 'payment-methods/diners.svg' },
        { id: 'discover', alt: 'Discover', src: b.sW + 'payment-methods/discover.svg' },
        { id: 'eps', alt: 'EPS', src: b.sW + 'payment-methods/eps.svg' },
        { id: 'giropay', alt: 'Giropay', src: b.sW + 'payment-methods/giropay.svg' },
        { id: 'ideal', alt: 'iDeal', src: b.sW + 'payment-methods/ideal.svg' },
        { id: 'jcb', alt: 'JCB', src: b.sW + 'payment-methods/jcb.svg' },
        { id: 'laser', alt: 'Laser', src: b.sW + 'payment-methods/laser.svg' },
        { id: 'maestro', alt: 'Maestro', src: b.sW + 'payment-methods/maestro.svg' },
        { id: 'mastercard', alt: 'Mastercard', src: b.sW + 'payment-methods/mastercard.svg' },
        { id: 'multibanco', alt: 'Multibanco', src: b.sW + 'payment-methods/multibanco.svg' },
        { id: 'p24', alt: 'Przelewy24', src: b.sW + 'payment-methods/p24.svg' },
        { id: 'sepa', alt: 'Sepa', src: b.sW + 'payment-methods/sepa.svg' },
        { id: 'sofort', alt: 'Sofort', src: b.sW + 'payment-methods/sofort.svg' },
        { id: 'unionpay', alt: 'Union Pay', src: b.sW + 'payment-methods/unionpay.svg' },
        { id: 'visa', alt: 'Visa', src: b.sW + 'payment-methods/visa.svg' },
        { id: 'wechat', alt: 'WeChat', src: b.sW + 'payment-methods/wechat.svg' },
      ];
      var P = s(3993);
      s(4957);
      const k = ({ icons: e = [], align: t = 'center', className: s }) => {
          const a = (e => {
            const t = {};
            return (
              e.forEach(e => {
                let s = {};
                'string' == typeof e && (s = { id: e, alt: e, src: null }),
                  'object' == typeof e &&
                    (s = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
                  s.id && (0, P.isString)(s.id) && !t[s.id] && (t[s.id] = s);
              }),
              Object.values(t)
            );
          })(e);
          if (0 === a.length) return null;
          const o = h()(
            'wc-block-components-payment-method-icons',
            {
              'wc-block-components-payment-method-icons--align-left': 'left' === t,
              'wc-block-components-payment-method-icons--align-right': 'right' === t,
            },
            s,
          );
          return (0, n.createElement)(
            'div',
            { className: o },
            a.map(e => {
              const t = { ...e, ...((s = e.id), E.find(e => e.id === s) || {}) };
              var s;
              return (0, n.createElement)(f, { key: 'payment-method-icon-' + e.id, ...t });
            }),
          );
        },
        _ = e =>
          Object.values(e).reduce((e, t) => (null !== t.icons && (e = e.concat(t.icons)), e), []);
      var S = s(5703),
        N = s(4040),
        W = s.n(N),
        M = s(2452),
        w = s(1334);
      const x = (0, r.createContext)({
          onPaymentProcessing: () => () => () => {},
          onPaymentSetup: () => () => () => {},
        }),
        C = ({ children: e }) => {
          const { isProcessing: t, isIdle: s, isCalculating: a, hasError: o } = (0, u.useSelect)(
              e => {
                const t = e(y.CHECKOUT_STORE_KEY);
                return {
                  isProcessing: t.isProcessing(),
                  isIdle: t.isIdle(),
                  hasError: t.hasError(),
                  isCalculating: t.isCalculating(),
                };
              },
            ),
            { isPaymentReady: c } = (0, u.useSelect)(e => {
              const t = e(y.PAYMENT_STORE_KEY);
              return {
                isPaymentProcessing: t.isPaymentProcessing(),
                isPaymentReady: t.isPaymentReady(),
              };
            }),
            { setValidationErrors: l } = (0, u.useDispatch)(y.VALIDATION_STORE_KEY),
            [i, m] = (0, r.useReducer)(M.Ff, {}),
            { onPaymentSetup: d } = (e =>
              (0, r.useMemo)(() => ({ onPaymentSetup: (0, w.Y)('payment_setup', e) }), [e]))(m),
            p = (0, r.useRef)(i);
          (0, r.useEffect)(() => {
            p.current = i;
          }, [i]);
          const {
            __internalSetPaymentProcessing: v,
            __internalSetPaymentIdle: h,
            __internalEmitPaymentProcessingEvent: g,
          } = (0, u.useDispatch)(y.PAYMENT_STORE_KEY);
          (0, r.useEffect)(() => {
            !t || o || a || (v(), g(p.current, l));
          }, [t, o, a, v, g, l]),
            (0, r.useEffect)(() => {
              s && !c && h();
            }, [s, c, h]),
            (0, r.useEffect)(() => {
              o && c && h();
            }, [o, c, h]);
          const f = {
            onPaymentProcessing: (0, r.useMemo)(
              () =>
                function(...e) {
                  return (
                    W()('onPaymentProcessing', {
                      alternative: 'onPaymentSetup',
                      plugin: 'WooCommerce Blocks',
                    }),
                    d(...e)
                  );
                },
              [d],
            ),
            onPaymentSetup: d,
          };
          return (0, n.createElement)(x.Provider, { value: f }, e);
        };
      var I = s(7767),
        O = s(517),
        R = s(1692);
      const T = () => {
          const { paymentMethods: e } = ((e = !1) => {
            const {
                paymentMethodsInitialized: t,
                expressPaymentMethodsInitialized: s,
                availablePaymentMethods: n,
                availableExpressPaymentMethods: a,
              } = (0, u.useSelect)(e => {
                const t = e(y.PAYMENT_STORE_KEY);
                return {
                  paymentMethodsInitialized: t.paymentMethodsInitialized(),
                  expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                  availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                  availablePaymentMethods: t.getAvailablePaymentMethods(),
                };
              }),
              o = Object.values(n).map(({ name: e }) => e),
              c = Object.values(a).map(({ name: e }) => e),
              r = (0, d.getPaymentMethods)(),
              l = (0, d.getExpressPaymentMethods)(),
              i = Object.keys(r).reduce((e, t) => (o.includes(t) && (e[t] = r[t]), e), {}),
              p = Object.keys(l).reduce((e, t) => (c.includes(t) && (e[t] = l[t]), e), {}),
              v = m(i),
              h = m(p);
            return { paymentMethods: e ? h : v, isInitialized: e ? s : t };
          })(!1);
          return (0, n.createElement)(k, { icons: _(e) });
        },
        j = ({ children: e, className: t, cartButtonLabel: s, checkoutButtonLabel: r }) => {
          const { cartTotals: l } = (0, p.V)(),
            i = (0, S.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(l.total_items, 10) + parseInt(l.total_items_tax, 10)
              : parseInt(l.total_items, 10),
            m = (0, R.G)(e);
          return (0, n.createElement)(
            'div',
            { className: h()(t, 'wc-block-mini-cart__footer') },
            (0, n.createElement)(o.TotalsItem, {
              className: 'wc-block-mini-cart__footer-subtotal',
              currency: (0, c.getCurrencyFromPriceResponse)(l),
              label: (0, a.__)('Subtotal', 'woocommerce'),
              value: i,
              description: (0, a.__)(
                'Shipping, taxes, and discounts calculated at checkout.',
                'woocommerce',
              ),
            }),
            (0, n.createElement)(
              'div',
              { className: 'wc-block-mini-cart__footer-actions' },
              m
                ? e
                : (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)(I.default, { cartButtonLabel: s }),
                    (0, n.createElement)(O.default, { checkoutButtonLabel: r }),
                  ),
            ),
            (0, n.createElement)(C, null, (0, n.createElement)(T, null)),
          );
        };
    },
    1692: (e, t, s) => {
      'use strict';
      s.d(t, { G: () => o, I: () => a });
      var n = s(3993);
      const a = (e = '', t) =>
          e.includes('is-style-outline')
            ? 'outlined'
            : e.includes('is-style-fill')
            ? 'contained'
            : t,
        o = e => e.some(e => (Array.isArray(e) ? o(e) : (0, n.isObject)(e) && null !== e.key));
    },
    4957: () => {},
  },
]);
