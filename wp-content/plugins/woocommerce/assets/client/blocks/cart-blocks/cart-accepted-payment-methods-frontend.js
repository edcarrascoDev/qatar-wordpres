(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [7073],
  {
    490: (e, t, s) => {
      'use strict';
      s.d(t, { n: () => c });
      var a = s(812);
      const n = [
          { id: 'alipay', alt: 'Alipay', src: a.sW + 'payment-methods/alipay.svg' },
          { id: 'amex', alt: 'American Express', src: a.sW + 'payment-methods/amex.svg' },
          { id: 'bancontact', alt: 'Bancontact', src: a.sW + 'payment-methods/bancontact.svg' },
          { id: 'diners', alt: 'Diners Club', src: a.sW + 'payment-methods/diners.svg' },
          { id: 'discover', alt: 'Discover', src: a.sW + 'payment-methods/discover.svg' },
          { id: 'eps', alt: 'EPS', src: a.sW + 'payment-methods/eps.svg' },
          { id: 'giropay', alt: 'Giropay', src: a.sW + 'payment-methods/giropay.svg' },
          { id: 'ideal', alt: 'iDeal', src: a.sW + 'payment-methods/ideal.svg' },
          { id: 'jcb', alt: 'JCB', src: a.sW + 'payment-methods/jcb.svg' },
          { id: 'laser', alt: 'Laser', src: a.sW + 'payment-methods/laser.svg' },
          { id: 'maestro', alt: 'Maestro', src: a.sW + 'payment-methods/maestro.svg' },
          { id: 'mastercard', alt: 'Mastercard', src: a.sW + 'payment-methods/mastercard.svg' },
          { id: 'multibanco', alt: 'Multibanco', src: a.sW + 'payment-methods/multibanco.svg' },
          { id: 'p24', alt: 'Przelewy24', src: a.sW + 'payment-methods/p24.svg' },
          { id: 'sepa', alt: 'Sepa', src: a.sW + 'payment-methods/sepa.svg' },
          { id: 'sofort', alt: 'Sofort', src: a.sW + 'payment-methods/sofort.svg' },
          { id: 'unionpay', alt: 'Union Pay', src: a.sW + 'payment-methods/unionpay.svg' },
          { id: 'visa', alt: 'Visa', src: a.sW + 'payment-methods/visa.svg' },
          { id: 'wechat', alt: 'WeChat', src: a.sW + 'payment-methods/wechat.svg' },
        ],
        c = e => n.find(t => t.id === e) || {};
    },
    8390: (e, t, s) => {
      'use strict';
      s.d(t, { h: () => d });
      var a = s(1609),
        n = s(9019),
        c = s.n(n),
        o = s(8344),
        i = s(490),
        r = s(6159);
      s(4957);
      const d = ({ icons: e = [], align: t = 'center', className: s }) => {
        const n = (0, r.l)(e);
        if (0 === n.length) return null;
        const d = c()(
          'wc-block-components-payment-method-icons',
          {
            'wc-block-components-payment-method-icons--align-left': 'left' === t,
            'wc-block-components-payment-method-icons--align-right': 'right' === t,
          },
          s,
        );
        return (0, a.createElement)(
          'div',
          { className: d },
          n.map(e => {
            const t = { ...e, ...(0, i.n)(e.id) };
            return (0, a.createElement)(o.A, { key: 'payment-method-icon-' + e.id, ...t });
          }),
        );
      };
    },
    8344: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => c });
      var a = s(1609);
      const n = e =>
          `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
        c = ({ id: e, src: t = null, alt: s = '' }) =>
          t ? (0, a.createElement)('img', { className: n(e), src: t, alt: s }) : null;
    },
    6159: (e, t, s) => {
      'use strict';
      s.d(t, { l: () => n });
      var a = s(3993);
      const n = e => {
        const t = {};
        return (
          e.forEach(e => {
            let s = {};
            'string' == typeof e && (s = { id: e, alt: e, src: null }),
              'object' == typeof e &&
                (s = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
              s.id && (0, a.isString)(s.id) && !t[s.id] && (t[s.id] = s);
          }),
          Object.values(t)
        );
      };
    },
    6379: (e, t, s) => {
      'use strict';
      s.d(t, { m: () => r, u: () => d });
      var a = s(1573),
        n = s(4083),
        c = s(7143),
        o = s(7594);
      const i = (e = !1) => {
          const {
              paymentMethodsInitialized: t,
              expressPaymentMethodsInitialized: s,
              availablePaymentMethods: i,
              availableExpressPaymentMethods: r,
            } = (0, c.useSelect)(e => {
              const t = e(o.PAYMENT_STORE_KEY);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
              };
            }),
            d = Object.values(i).map(({ name: e }) => e),
            l = Object.values(r).map(({ name: e }) => e),
            m = (0, n.getPaymentMethods)(),
            p = (0, n.getExpressPaymentMethods)(),
            y = Object.keys(m).reduce((e, t) => (d.includes(t) && (e[t] = m[t]), e), {}),
            h = Object.keys(p).reduce((e, t) => (l.includes(t) && (e[t] = p[t]), e), {}),
            u = (0, a.c)(y),
            v = (0, a.c)(h);
          return { paymentMethods: e ? v : u, isInitialized: e ? s : t };
        },
        r = () => i(!1),
        d = () => i(!0);
    },
    1573: (e, t, s) => {
      'use strict';
      s.d(t, { c: () => o });
      var a = s(6087),
        n = s(923),
        c = s.n(n);
      function o(e) {
        const t = (0, a.useRef)(e);
        return c()(e, t.current) || (t.current = e), t.current;
      }
    },
    8722: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => i });
      var a = s(1609),
        n = s(8390),
        c = s(6379);
      const o = e =>
          Object.values(e).reduce((e, t) => (null !== t.icons && (e = e.concat(t.icons)), e), []),
        i = ({ className: e }) => {
          const { paymentMethods: t } = (0, c.m)();
          return (0, a.createElement)(n.h, { className: e, icons: o(t) });
        };
    },
    4957: () => {},
  },
]);
