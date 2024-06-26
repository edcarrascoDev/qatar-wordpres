var wc;
(() => {
  var e,
    t,
    o,
    r = {
      3441: (e, t, o) => {
        'use strict';
        o.r(t),
          o.d(t, {
            Button: () => q,
            CheckboxControl: () => Ie.CheckboxControl,
            ExperimentalDiscountsMeta: () => P,
            ExperimentalOrderLocalPickupPackages: () => B,
            ExperimentalOrderMeta: () => C,
            ExperimentalOrderShippingPackages: () => L,
            Label: () => Q,
            Panel: () => K,
            SlotFillProvider: () => v.Kq,
            StoreNotice: () => he,
            StoreNoticesContainer: () => Te,
            Subtotal: () => b,
            TextInput: () => Ce,
            TotalsFees: () => E,
            TotalsItem: () => p,
            TotalsTaxes: () => w,
            TotalsWrapper: () => h,
            ValidatedTextInput: () => He,
            ValidatedTextInputHandle: () => r.ValidatedTextInputHandle,
            ValidationInputError: () => Re,
            __experimentalApplyCheckoutFilter: () => et,
            __experimentalRegisterCheckoutFilters: () => ze,
            applyCheckoutFilter: () => Xe,
            createSlotFill: () => S,
            extensionCartUpdate: () => Be,
            getRegisteredBlocks: () => nt,
            getValidityMessageForInput: () => Pe,
            hasInnerBlocks: () => rt,
            hasValidFills: () => x,
            innerBlockAreas: () => tt,
            isPostcode: () => $e,
            mustContain: () => Me,
            productPriceValidation: () => Ve,
            registerCheckoutBlock: () => ct,
            registerCheckoutFilters: () => Ze,
            useSlot: () => k.A,
            useSlotFills: () => g.A,
          });
        var r = {};
        o.r(r), o.d(r, { A: () => He });
        var n = o(1609),
          a = o(9019),
          c = o.n(a),
          s = o(6087),
          l = (o(1157), o(6175));
        o(9297);
        const i = e => {
            const t =
              (null == e ? void 0 : e.thousandSeparator) ===
              (null == e ? void 0 : e.decimalSeparator);
            return (
              t &&
                console.warn(
                  'Thousand separator and decimal separator are the same. This may cause formatting issues.',
                ),
              {
                thousandSeparator: t ? '' : null == e ? void 0 : e.thousandSeparator,
                decimalSeparator: null == e ? void 0 : e.decimalSeparator,
                fixedDecimalScale: !0,
                prefix: null == e ? void 0 : e.prefix,
                suffix: null == e ? void 0 : e.suffix,
                isNumericString: !0,
              }
            );
          },
          m = ({
            className: e,
            value: t,
            currency: o,
            onValueChange: r,
            displayType: a = 'text',
            ...s
          }) => {
            var m;
            const u = 'string' == typeof t ? parseInt(t, 10) : t;
            if (!Number.isFinite(u)) return null;
            const p = u / 10 ** o.minorUnit;
            if (!Number.isFinite(p)) return null;
            const d = c()(
                'wc-block-formatted-money-amount',
                'wc-block-components-formatted-money-amount',
                e,
              ),
              f =
                null !== (m = s.decimalScale) && void 0 !== m
                  ? m
                  : null == o
                  ? void 0
                  : o.minorUnit,
              b = {
                ...s,
                ...i(o),
                decimalScale: f,
                value: void 0,
                currency: void 0,
                onValueChange: void 0,
              },
              w = r
                ? e => {
                    const t = +e.value * 10 ** o.minorUnit;
                    r(t);
                  }
                : () => {};
            return (0, n.createElement)(l.A, {
              className: d,
              displayType: a,
              ...b,
              value: p,
              onValueChange: w,
            });
          },
          u = ({ value: e, currency: t }) =>
            (0, s.isValidElement)(e)
              ? (0, n.createElement)(
                  'div',
                  { className: 'wc-block-components-totals-item__value' },
                  e,
                )
              : Number.isFinite(e)
              ? (0, n.createElement)(m, {
                  className: 'wc-block-components-totals-item__value',
                  currency: t || {},
                  value: e,
                })
              : null,
          p = ({ className: e, currency: t, label: o, value: r, description: a }) =>
            (0, n.createElement)(
              'div',
              { className: c()('wc-block-components-totals-item', e) },
              (0, n.createElement)(
                'span',
                { className: 'wc-block-components-totals-item__label' },
                o,
              ),
              (0, n.createElement)(u, { value: r, currency: t }),
              (0, n.createElement)(
                'div',
                { className: 'wc-block-components-totals-item__description' },
                a,
              ),
            );
        var d = o(7723);
        const f = window.wc.wcSettings,
          b = ({ currency: e, values: t, className: o }) => {
            const { total_items: r, total_items_tax: a } = t,
              c = parseInt(r, 10),
              s = parseInt(a, 10);
            return (0, n.createElement)(p, {
              className: o,
              currency: e,
              label: (0, d.__)('Subtotal', 'woocommerce'),
              value: (0, f.getSetting)('displayCartPricesIncludingTax', !1) ? c + s : c,
            });
          },
          w = ({ currency: e, values: t, className: o, showRateAfterTaxName: r }) => {
            const { total_tax: a, tax_lines: s } = t;
            if (!(0, f.getSetting)('taxesEnabled', !0) && parseInt(a, 10) <= 0) return null;
            const l = (0, f.getSetting)('displayItemizedTaxes', !1),
              i =
                l && s.length > 0
                  ? (0, n.createElement)(
                      n.Fragment,
                      null,
                      s.map(({ name: t, rate: a, price: s }, l) => {
                        const i = `${t}${r ? ` ${a}` : ''}`;
                        return (0, n.createElement)(p, {
                          key: `tax-line-${l}`,
                          className: c()('wc-block-components-totals-taxes', o),
                          currency: e,
                          label: i,
                          value: parseInt(s, 10),
                        });
                      }),
                      ' ',
                    )
                  : null;
            return l
              ? i
              : (0, n.createElement)(
                  n.Fragment,
                  null,
                  (0, n.createElement)(p, {
                    className: c()('wc-block-components-totals-taxes', o),
                    currency: e,
                    label: (0, d.__)('Taxes', 'woocommerce'),
                    value: parseInt(a, 10),
                    description: null,
                  }),
                );
          },
          E = ({ currency: e, cartFees: t, className: o }) =>
            (0, n.createElement)(
              n.Fragment,
              null,
              t.map(({ id: t, key: r, name: a, totals: s }, l) => {
                const i = parseInt(s.total, 10);
                if (!i) return null;
                const m = parseInt(s.total_tax, 10);
                return (0, n.createElement)(p, {
                  key: t || `${l}-${a}`,
                  className: c()(
                    'wc-block-components-totals-fees',
                    'wc-block-components-totals-fees__' + r,
                    o,
                  ),
                  currency: e,
                  label: a || (0, d.__)('Fee', 'woocommerce'),
                  value: (0, f.getSetting)('displayCartPricesIncludingTax', !1) ? i + m : i,
                });
              }),
            );
        o(7015);
        const h = ({ children: e, slotWrapper: t = !1, className: o }) =>
          s.Children.count(e)
            ? (0, n.createElement)(
                'div',
                { className: c()(o, 'wc-block-components-totals-wrapper', { 'slot-wrapper': t }) },
                e,
              )
            : null;
        var v = o(2305),
          k = o(5596),
          g = o(167),
          _ = o(2294);
        class y extends s.Component {
          constructor(...e) {
            super(...e), (0, _.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)('strong', null, e.status),
                    ': ' + e.statusText,
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const { renderError: e } = this.props,
              { errorMessage: t, hasError: o } = this.state;
            return o
              ? 'function' == typeof e
                ? e(t)
                : (0, n.createElement)('p', null, t)
              : this.props.children;
          }
        }
        const N = y,
          x = e => Array.isArray(e) && e.filter(Boolean).length > 0,
          S = (e, t = null) => {
            const { Fill: o, Slot: r } = (0, v.QJ)(e);
            return {
              Fill: ({ children: e }) =>
                (0, n.createElement)(o, null, o =>
                  s.Children.map(e, e =>
                    (0, n.createElement)(
                      N,
                      { renderError: f.CURRENT_USER_IS_ADMIN ? t : () => null },
                      (0, s.cloneElement)(e, o),
                    ),
                  ),
                ),
              Slot: e => (0, n.createElement)(r, { ...e, bubblesVirtually: !0 }),
            };
          },
          T = '__experimentalOrderMeta',
          { Fill: I, Slot: O } = S(T);
        I.Slot = ({ className: e, extensions: t, cart: o, context: r }) => {
          const a = (0, g.A)(T);
          return (
            x(a) &&
            (0, n.createElement)(
              h,
              { slotWrapper: !0 },
              (0, n.createElement)(O, {
                className: c()(e, 'wc-block-components-order-meta'),
                fillProps: { extensions: t, cart: o, context: r },
              }),
            )
          );
        };
        const C = I,
          A = '__experimentalDiscountsMeta',
          { Fill: R, Slot: M } = S(A);
        R.Slot = ({ className: e, extensions: t, cart: o, context: r }) => {
          const a = (0, g.A)(A);
          return (
            x(a) &&
            (0, n.createElement)(
              h,
              { slotWrapper: !0 },
              (0, n.createElement)(M, {
                className: c()(e, 'wc-block-components-discounts-meta'),
                fillProps: { extensions: t, cart: o, context: r },
              }),
            )
          );
        };
        const P = R,
          { Fill: D, Slot: F } = S('__experimentalOrderShippingPackages');
        D.Slot = ({
          className: e,
          noResultsMessage: t,
          renderOption: o,
          extensions: r,
          cart: a,
          components: s,
          context: l,
          collapsible: i,
          showItems: m,
        }) =>
          (0, n.createElement)(F, {
            className: c()('wc-block-components-shipping-rates-control', e),
            fillProps: {
              collapse: i,
              collapsible: i,
              showItems: m,
              noResultsMessage: t,
              renderOption: o,
              extensions: r,
              cart: a,
              components: s,
              context: l,
            },
          });
        const L = D,
          { Fill: $, Slot: V } = S('__experimentalOrderLocalPickupPackages');
        $.Slot = ({ extensions: e, cart: t, components: o, renderPickupLocation: r }) =>
          (0, n.createElement)(V, {
            className: c()('wc-block-components-local-pickup-rates-control'),
            fillProps: { extensions: e, cart: t, components: o, renderPickupLocation: r },
          });
        const B = $;
        var j = o(7104),
          H = o(9813),
          U = o(224);
        o(5440);
        const K = ({
          children: e,
          className: t,
          initialOpen: o = !1,
          hasBorder: r = !1,
          title: a,
          titleTag: l = 'div',
          state: i,
        }) => {
          let [m, u] = (0, s.useState)(o);
          return (
            Array.isArray(i) && 2 === i.length && ([m, u] = i),
            (0, n.createElement)(
              'div',
              { className: c()(t, 'wc-block-components-panel', { 'has-border': r }) },
              (0, n.createElement)(
                l,
                null,
                (0, n.createElement)(
                  'button',
                  {
                    'aria-expanded': m,
                    className: 'wc-block-components-panel__button',
                    onClick: () => u(!m),
                  },
                  (0, n.createElement)(j.A, {
                    'aria-hidden': 'true',
                    className: 'wc-block-components-panel__button-icon',
                    icon: m ? H.A : U.A,
                  }),
                  a,
                ),
              ),
              m &&
                (0, n.createElement)('div', { className: 'wc-block-components-panel__content' }, e),
            )
          );
        };
        var W = o(8165),
          Y = o(4040),
          G = o.n(Y);
        o(2080), o(7791);
        const Z = () =>
            (0, n.createElement)('span', {
              className: 'wc-block-components-spinner',
              'aria-hidden': 'true',
            }),
          z = (0, s.forwardRef)((e, t) => {
            'showSpinner' in e &&
              G()('showSpinner prop', {
                version: '8.9.0',
                alternative: 'Render a spinner in the button children instead.',
                plugin: 'WooCommerce',
              });
            const {
                className: o,
                showSpinner: r = !1,
                children: a,
                variant: s = 'contained',
                removeTextWrap: l = !1,
                ...i
              } = e,
              m = c()('wc-block-components-button', 'wp-element-button', o, s, {
                'wc-block-components-button--loading': r,
              });
            if ('href' in e)
              return (0, n.createElement)(W.$, {
                render: (0, n.createElement)(
                  'a',
                  { ref: t, href: e.href },
                  r && (0, n.createElement)(Z, null),
                  (0, n.createElement)(
                    'span',
                    { className: 'wc-block-components-button__text' },
                    a,
                  ),
                ),
                className: m,
                ...i,
              });
            const u = l
              ? e.children
              : (0, n.createElement)(
                  'span',
                  { className: 'wc-block-components-button__text' },
                  e.children,
                );
            return (0, n.createElement)(
              W.$,
              { ref: t, className: m, ...i },
              r && (0, n.createElement)(Z, null),
              u,
            );
          }),
          q = z,
          J = ({ label: e, screenReaderLabel: t, wrapperElement: o, wrapperProps: r = {} }) => {
            let a;
            const l = null != e,
              i = null != t;
            return !l && i
              ? ((a = o || 'span'),
                (r = { ...r, className: c()(r.className, 'screen-reader-text') }),
                (0, n.createElement)(a, { ...r }, t))
              : ((a = o || s.Fragment),
                l && i && e !== t
                  ? (0, n.createElement)(
                      a,
                      { ...r },
                      (0, n.createElement)('span', { 'aria-hidden': 'true' }, e),
                      (0, n.createElement)('span', { className: 'screen-reader-text' }, t),
                    )
                  : (0, n.createElement)(a, { ...r }, e));
          },
          Q = J,
          X = window.wp.data,
          ee = window.wc.wcBlocksData,
          te = window.wc.wcTypes;
        let oe = (function(e) {
          return (
            (e.CART = 'wc/cart'),
            (e.CHECKOUT = 'wc/checkout'),
            (e.PAYMENTS = 'wc/checkout/payments'),
            (e.EXPRESS_PAYMENTS = 'wc/checkout/express-payments'),
            (e.CONTACT_INFORMATION = 'wc/checkout/contact-information'),
            (e.SHIPPING_ADDRESS = 'wc/checkout/shipping-address'),
            (e.BILLING_ADDRESS = 'wc/checkout/billing-address'),
            (e.SHIPPING_METHODS = 'wc/checkout/shipping-methods'),
            (e.CHECKOUT_ACTIONS = 'wc/checkout/checkout-actions'),
            (e.ORDER_INFORMATION = 'wc/checkout/additional-information'),
            e
          );
        })({});
        (0, d.__)('Something went wrong. Please contact us to get assistance.', 'woocommerce'),
          o(6249);
        var re = o(1359),
          ne = o.n(re);
        const ae = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
          ce = ['target', 'href', 'rel', 'name', 'download'],
          se = (e, t) => {
            const o = (null == t ? void 0 : t.tags) || ae,
              r = (null == t ? void 0 : t.attr) || ce;
            return ne().sanitize(e, { ALLOWED_TAGS: o, ALLOWED_ATTR: r });
          };
        function le(e, t) {
          const o = (0, s.useRef)();
          return (
            (0, s.useEffect)(() => {
              o.current === e || (t && !t(e, o.current)) || (o.current = e);
            }, [e, t]),
            o.current
          );
        }
        const ie = window.wp.htmlEntities;
        var me = o(1208),
          ue = (o(9345), o(2900)),
          pe = o(2478),
          de = o(8306);
        const fe = e => {
            switch (e) {
              case 'success':
              case 'warning':
              case 'info':
              case 'default':
                return 'polite';
              default:
                return 'assertive';
            }
          },
          be = e => {
            switch (e) {
              case 'success':
                return ue.A;
              case 'warning':
              case 'info':
              case 'error':
                return pe.A;
              default:
                return de.A;
            }
          };
        var we = o(195);
        const Ee = ({
            className: e,
            status: t = 'default',
            children: o,
            spokenMessage: r = o,
            onRemove: a = () => {},
            isDismissible: l = !0,
            politeness: i = fe(t),
            summary: m,
          }) => (
            ((e, t) => {
              const o = 'string' == typeof e ? e : (0, s.renderToString)(e);
              (0, s.useEffect)(() => {
                o && (0, we.speak)(o, t);
              }, [o, t]);
            })(r, i),
            (0, n.createElement)(
              'div',
              {
                className: c()(e, 'wc-block-components-notice-banner', 'is-' + t, {
                  'is-dismissible': l,
                }),
              },
              (0, n.createElement)(j.A, { icon: be(t) }),
              (0, n.createElement)(
                'div',
                { className: 'wc-block-components-notice-banner__content' },
                m &&
                  (0, n.createElement)(
                    'p',
                    { className: 'wc-block-components-notice-banner__summary' },
                    m,
                  ),
                o,
              ),
              !!l &&
                (0, n.createElement)(
                  z,
                  {
                    className: 'wc-block-components-notice-banner__dismiss',
                    'aria-label': (0, d.__)('Dismiss this notice', 'woocommerce'),
                    onClick: e => {
                      'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                        e.preventDefault &&
                        e.preventDefault(),
                        a();
                    },
                    removeTextWrap: !0,
                  },
                  (0, n.createElement)(j.A, { icon: me.A }),
                ),
            )
          ),
          he = ({ className: e, children: t, status: o, ...r }) =>
            (0, n.createElement)(
              Ee,
              { className: c()('wc-block-store-notice', e), status: o, ...r },
              t,
            ),
          ve = ({ className: e, notices: t }) => {
            const o = (0, s.useRef)(null),
              { removeNotice: r } = (0, X.useDispatch)('core/notices'),
              a = t.map(e => e.id),
              l = le(a);
            (0, s.useEffect)(() => {
              const e = o.current;
              if (!e) return;
              const t = e.ownerDocument.activeElement;
              (t &&
                -1 !== ['input', 'select', 'button', 'textarea'].indexOf(t.tagName.toLowerCase()) &&
                'radio' !== t.getAttribute('type')) ||
                (a.filter(e => !l || !l.includes(e)).length &&
                  null != e &&
                  e.scrollIntoView &&
                  e.scrollIntoView({ behavior: 'smooth' }));
            }, [a, l, o]);
            const i = t.filter(({ isDismissible: e }) => !!e),
              m = t.filter(({ isDismissible: e }) => !e),
              u = {
                error: i.filter(({ status: e }) => 'error' === e),
                success: i.filter(({ status: e }) => 'success' === e),
                warning: i.filter(({ status: e }) => 'warning' === e),
                info: i.filter(({ status: e }) => 'info' === e),
                default: i.filter(({ status: e }) => 'default' === e),
              };
            return (0, n.createElement)(
              'div',
              { ref: o, className: c()(e, 'wc-block-components-notices') },
              m.map(e =>
                (0, n.createElement)(
                  he,
                  { key: e.id + '-' + e.context, ...e },
                  (0, n.createElement)(s.RawHTML, null, se((0, ie.decodeEntities)(e.content))),
                ),
              ),
              Object.entries(u).map(([e, t]) => {
                if (!t.length) return null;
                const o = t
                    .filter((e, t, o) => o.findIndex(t => t.content === e.content) === t)
                    .map(e => ({ ...e, content: se((0, ie.decodeEntities)(e.content)) })),
                  a = {
                    key: `store-notice-${e}`,
                    status: e,
                    onRemove: () => {
                      t.forEach(e => {
                        r(e.id, e.context);
                      });
                    },
                  };
                return 1 === o.length
                  ? (0, n.createElement)(
                      he,
                      { ...a },
                      (0, n.createElement)(s.RawHTML, null, t[0].content),
                    )
                  : (0, n.createElement)(
                      he,
                      {
                        ...a,
                        summary:
                          'error' === e
                            ? (0, d.__)(
                                'Please fix the following errors before continuing',
                                'woocommerce',
                              )
                            : '',
                      },
                      (0, n.createElement)(
                        'ul',
                        null,
                        o.map(e =>
                          (0, n.createElement)(
                            'li',
                            { key: e.id + '-' + e.context },
                            (0, n.createElement)(s.RawHTML, null, e.content),
                          ),
                        ),
                      ),
                    );
              }),
            );
          };
        var ke = o(9491),
          ge = o(9910),
          _e = o(6648);
        o(230);
        const ye = ({ onRemove: e = () => {}, children: t, listRef: o, className: r, ...a }) => (
            (0, s.useEffect)(() => {
              const t = setTimeout(() => {
                e();
              }, 1e4);
              return () => clearTimeout(t);
            }, [e]),
            (0, n.createElement)(
              Ee,
              {
                className: c()(r, 'wc-block-components-notice-snackbar'),
                ...a,
                onRemove: () => {
                  o && o.current && o.current.focus(), e();
                },
              },
              t,
            )
          ),
          Ne = ({ notices: e, className: t, onRemove: o = () => {} }) => {
            const r = (0, s.useRef)(null),
              a = (0, ke.useReducedMotion)(),
              l = e => () => o((null == e ? void 0 : e.id) || '');
            return (0, n.createElement)(
              'div',
              {
                className: c()(t, 'wc-block-components-notice-snackbar-list'),
                tabIndex: -1,
                ref: r,
              },
              a
                ? e.map(e => {
                    const { content: t, ...o } = e;
                    return (0, n.createElement)(
                      ye,
                      { ...o, onRemove: l(e), listRef: r, key: e.id },
                      e.content,
                    );
                  })
                : (0, n.createElement)(
                    ge.A,
                    null,
                    e.map(e => {
                      const { content: t, ...o } = e;
                      return (0, n.createElement)(
                        _e.A,
                        { key: 'snackbar-' + e.id, timeout: 500, classNames: 'notice-transition' },
                        (0, n.createElement)(ye, { ...o, onRemove: l(e), listRef: r }, t),
                      );
                    }),
                  ),
            );
          },
          xe = ({ className: e, notices: t }) => {
            const { removeNotice: o } = (0, X.useDispatch)('core/notices');
            return (0, n.createElement)(Ne, {
              className: c()(e, 'wc-block-components-notices__snackbar'),
              notices: t,
              onRemove: e => {
                t.forEach(t => {
                  t.explicitDismiss && t.id === e
                    ? o(t.id, t.context)
                    : t.explicitDismiss || o(t.id, t.context);
                });
              },
            });
          },
          Se = (e, t) => e.map(e => ({ ...e, context: t })),
          Te = ({ className: e = '', context: t = '', additionalNotices: o = [] }) => {
            const { registerContainer: r, unregisterContainer: a } = (0, X.useDispatch)(
                ee.STORE_NOTICES_STORE_KEY,
              ),
              { suppressNotices: c, registeredContainers: l } = (0, X.useSelect)(e => ({
                suppressNotices: e(ee.PAYMENT_STORE_KEY).isExpressPaymentMethodActive(),
                registeredContainers: e(ee.STORE_NOTICES_STORE_KEY).getRegisteredContainers(),
              })),
              i = (0, s.useMemo)(() => (Array.isArray(t) ? t : [t]), [t]),
              m = Object.values(oe).filter(e => i.some(t => e.includes(t + '/')) && !l.includes(e)),
              u = (0, X.useSelect)(e => {
                const { getNotices: t } = e('core/notices');
                return [
                  ...m.flatMap(e => Se(t(e), e)),
                  ...i.flatMap(e => Se(t(e).concat(o), e)),
                ].filter(Boolean);
              });
            return (
              (0, s.useEffect)(
                () => (
                  i.map(e => r(e)),
                  () => {
                    i.map(e => a(e));
                  }
                ),
                [i, r, a],
              ),
              c
                ? null
                : (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)(ve, {
                      className: e,
                      notices: u.filter(e => 'default' === e.type),
                    }),
                    (0, n.createElement)(xe, {
                      className: e,
                      notices: u.filter(e => 'snackbar' === e.type),
                    }),
                  )
            );
          },
          Ie = window.wc.blocksComponents;
        o(4632);
        const Oe = (0, s.forwardRef)(
            (
              {
                className: e,
                id: t,
                type: o = 'text',
                ariaLabel: r,
                ariaDescribedBy: a,
                label: l,
                screenReaderLabel: i,
                disabled: m,
                help: u,
                autoCapitalize: p = 'off',
                autoComplete: d = 'off',
                value: f = '',
                onChange: b,
                required: w = !1,
                onBlur: E = () => {},
                feedback: h,
                ...v
              },
              k,
            ) => {
              const [g, _] = (0, s.useState)(!1);
              return (0, n.createElement)(
                'div',
                { className: c()('wc-block-components-text-input', e, { 'is-active': g || f }) },
                (0, n.createElement)('input', {
                  type: o,
                  id: t,
                  value: (0, ie.decodeEntities)(f),
                  ref: k,
                  autoCapitalize: p,
                  autoComplete: d,
                  onChange: e => {
                    b(e.target.value);
                  },
                  onFocus: () => _(!0),
                  onBlur: e => {
                    E(e.target.value), _(!1);
                  },
                  'aria-label': r || l,
                  disabled: m,
                  'aria-describedby': u && !a ? t + '__help' : a,
                  required: w,
                  ...v,
                }),
                (0, n.createElement)(J, {
                  label: l,
                  screenReaderLabel: i || l,
                  wrapperElement: 'label',
                  wrapperProps: { htmlFor: t },
                  htmlFor: t,
                }),
                !!u &&
                  (0, n.createElement)(
                    'p',
                    { id: t + '__help', className: 'wc-block-components-text-input__help' },
                    u,
                  ),
                h,
              );
            },
          ),
          Ce = Oe;
        o(7235);
        const Ae = ({ errorMessage: e = '', propertyName: t = '', elementId: o = '' }) => {
            const { validationError: r, validationErrorId: a } = (0, X.useSelect)(e => {
              const r = e(ee.VALIDATION_STORE_KEY);
              return {
                validationError: r.getValidationError(t),
                validationErrorId: r.getValidationErrorId(o),
              };
            });
            if (!e || 'string' != typeof e) {
              if (null == r || !r.message || (null != r && r.hidden)) return null;
              e = r.message;
            }
            return (0, n.createElement)(
              'div',
              { className: 'wc-block-components-validation-error', role: 'alert' },
              (0, n.createElement)('p', { id: a }, e),
            );
          },
          Re = Ae,
          Me = (e, t) => {
            if (!e.includes(t))
              throw Error(
                (0,
                d.sprintf) /* translators: %1$s value passed to filter, %2$s : value that must be included. */(
                  /* translators: %1$s value passed to filter, %2$s : value that must be included. */
                  (0, d.__)('Returned value must include %1$s, you passed "%2$s"', 'woocommerce'),
                  t,
                  e,
                ),
              );
            return !0;
          },
          Pe = (e, t) => {
            const {
              valid: o,
              customError: r,
              valueMissing: n,
              badInput: a,
              typeMismatch: c,
            } = t.validity;
            if (o || r) return t.validationMessage;
            const s = (0, d.sprintf) /* translators: %s field label */(
              /* translators: %s field label */
              (0, d.__)('Please enter a valid %s', 'woocommerce'),
              e.toLowerCase(),
            );
            return n || a || c ? s : t.validationMessage || s;
          };
        var De = o(4177);
        const Fe = new Map([
            ['BA', /^([7-8]{1})([0-9]{4})$/],
            [
              'GB',
              /^([A-Z]){1}([0-9]{1,2}|[A-Z][0-9][A-Z]|[A-Z][0-9]{2}|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-Z]{2}){1}|BFPO(?:\s)?([0-9]{1,4})$|BFPO(c\/o[0-9]{1,3})$/i,
            ],
            ['IN', /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/],
            ['JP', /^([0-9]{3})([-]?)([0-9]{4})$/],
            ['KH', /^[0-9]{6}$/],
            ['LI', /^(94[8-9][0-9])$/],
            ['NI', /^[1-9]{1}[0-9]{4}$/],
            ['NL', /^([1-9][0-9]{3})(\s?)(?!SA|SD|SS)[A-Z]{2}$/i],
            ['SI', /^([1-9][0-9]{3})$/],
          ]),
          Le = new Map([...De.O, ...Fe]),
          $e = ({ postcode: e, country: t }) => {
            var o;
            const r = null === (o = Le.get(t)) || void 0 === o ? void 0 : o.test(e);
            return void 0 === r || r;
          },
          Ve = e => Me(e, '<price/>'),
          Be =
            ((0, d.__)('Unable to get cart data from the API.', 'woocommerce'),
            e => {
              const { applyExtensionCartUpdate: t } = (0, X.dispatch)('wc/store/cart');
              return t(e);
            }),
          je = (0, s.forwardRef)(
            (
              {
                className: e,
                id: t,
                type: o = 'text',
                ariaDescribedBy: r,
                errorId: a,
                focusOnMount: l = !1,
                onChange: i,
                showError: m = !0,
                errorMessage: u = '',
                value: p = '',
                customValidation: d = () => !0,
                customFormatter: f = e => e,
                label: b,
                validateOnMount: w = !0,
                instanceId: E = '',
                ...h
              },
              v,
            ) => {
              const [k, g] = (0, s.useState)(!0),
                _ = le(p),
                y = (0, s.useRef)(null),
                N = (0, ke.useInstanceId)(je, '', E),
                x = void 0 !== t ? t : 'textinput-' + N,
                S = void 0 !== a ? a : x,
                { setValidationErrors: T, hideValidationError: I, clearValidationError: O } = (0,
                X.useDispatch)(ee.VALIDATION_STORE_KEY),
                C = (0, s.useRef)(d);
              (0, s.useEffect)(() => {
                C.current = d;
              }, [d]);
              const { validationError: A, validationErrorId: R } = (0, X.useSelect)(e => {
                  const t = e(ee.VALIDATION_STORE_KEY);
                  return {
                    validationError: t.getValidationError(S),
                    validationErrorId: t.getValidationErrorId(S),
                  };
                }),
                M = (0, s.useCallback)(
                  (e = !0) => {
                    const t = y.current || null;
                    null !== t &&
                      ((t.value = t.value.trim()),
                      t.setCustomValidity(''),
                      t.checkValidity() && C.current(t)
                        ? O(S)
                        : T({ [S]: { message: b ? Pe(b, t) : t.validationMessage, hidden: e } }));
                  },
                  [O, S, T, b],
                );
              (0, s.useImperativeHandle)(
                v,
                function() {
                  return {
                    revalidate() {
                      M(!p);
                    },
                  };
                },
                [M, p],
              ),
                (0, s.useEffect)(() => {
                  var e, t;
                  if (
                    p !== _ &&
                    (p || _) &&
                    y &&
                    null !== y.current &&
                    (null === (e = y.current) ||
                    void 0 === e ||
                    null === (t = e.ownerDocument) ||
                    void 0 === t
                      ? void 0
                      : t.activeElement) !== y.current
                  ) {
                    const e = f(y.current.value);
                    e !== p ? i(e) : M(!0);
                  }
                }, [M, f, p, _, i]),
                (0, s.useEffect)(() => {
                  var e;
                  k &&
                    (g(!1),
                    l && (null === (e = y.current) || void 0 === e || e.focus()),
                    (!w && l) || M(!0));
                }, [w, l, k, g, M]),
                (0, s.useEffect)(
                  () => () => {
                    O(S);
                  },
                  [O, S],
                ),
                '' !== u && (0, te.isObject)(A) && (A.message = u);
              const P = (null == A ? void 0 : A.message) && !(null != A && A.hidden),
                D = m && P && R ? R : r;
              return (0, n.createElement)(Ce, {
                className: c()(e, { 'has-error': P }),
                'aria-invalid': !0 === P,
                id: x,
                type: o,
                feedback: m ? (0, n.createElement)(Ae, { errorMessage: u, propertyName: S }) : null,
                ref: y,
                onChange: e => {
                  I(S), M(!0);
                  const t = f(e);
                  t !== p && i(t);
                },
                onBlur: () => M(!1),
                ariaDescribedBy: D,
                value: p,
                title: '',
                label: b,
                ...h,
              });
            },
          ),
          He = je;
        var Ue = o(923),
          Ke = o.n(Ue);
        const We = () => !0;
        let Ye = {},
          Ge = {};
        const Ze = (e, t) => {
            Object.keys(t).includes('couponName') &&
              G()('couponName', {
                alternative: 'coupons',
                plugin: 'WooCommerce Blocks',
                link:
                  'https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/bb921d21f42e21f38df2b1c87b48e07aa4cb0538/docs/extensibility/available-filters.md#coupons',
              }),
              (Ge = {}),
              (Ye = { ...Ye, [e]: t });
          },
          ze = (e, t) => {
            G()('__experimentalRegisterCheckoutFilters', {
              alternative: 'registerCheckoutFilters',
              plugin: 'WooCommerce Blocks',
              link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8346',
              since: '9.6.0',
              hint:
                '__experimentalRegisterCheckoutFilters has graduated to stable and this experimental function will be removed.',
            }),
              Ze(e, t);
          },
          qe = {},
          Je = (e, t, o, r) => {
            qe[e] = { arg: t, extensions: o, defaultValue: r };
          },
          Qe = (e, t) =>
            !(!(0, te.isNull)(e) || !(0, te.isNull)(t)) ||
            ((0, te.isObject)(e) &&
              (0, te.isObject)(t) &&
              Object.keys(e).length === Object.keys(t).length &&
              Object.keys(e).every(o => (0, te.objectHasProp)(t, o) && Ke()(e[o], t[o]))),
          Xe = ({
            filterName: e,
            defaultValue: t,
            extensions: o = null,
            arg: r = null,
            validation: n = We,
          }) => {
            if (
              !((e, t, o, r) => {
                const n = qe[e];
                if (!n) return Je(e, t, o, r), !0;
                const { arg: a = {}, extensions: c = {}, defaultValue: s = null } = n;
                return Qe(t, a)
                  ? !((r === s && Qe(o, c)) || (Je(e, t, o, r), 0))
                  : (Je(e, t, o, r), !0);
              })(e, r, o, t) &&
              void 0 !== Ge[e]
            )
              return Ge[e];
            const a = (e =>
              Object.keys(Ye)
                .map(t => Ye[t][e])
                .filter(Boolean))(e);
            let c = t;
            return (
              a.forEach(e => {
                try {
                  const t = e(c, o || {}, r);
                  if (typeof t != typeof c)
                    throw new Error(
                      (0,
                      d.sprintf) /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */(
                        /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */
                        (0, d.__)(
                          'The type returned by checkout filters must be the same as the type they receive. The function received %1$s but returned %2$s.',
                          'woocommerce',
                        ),
                        typeof c,
                        typeof t,
                      ),
                    );
                  c = n(t) ? t : c;
                } catch (e) {
                  if (f.CURRENT_USER_IS_ADMIN) throw e;
                  console.error(e);
                }
              }),
              (Ge[e] = c),
              c
            );
          },
          et = ({
            filterName: e,
            defaultValue: t,
            extensions: o = null,
            arg: r = null,
            validation: n = We,
          }) => (
            G()('__experimentalApplyCheckoutFilter', {
              alternative: 'applyCheckoutFilter',
              plugin: 'WooCommerce Blocks',
              link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8346',
              since: '9.6.0',
              hint:
                '__experimentalApplyCheckoutFilter has graduated to stable and this experimental function will be removed.',
            }),
            Xe({ filterName: e, defaultValue: t, extensions: o, arg: r, validation: n })
          );
        let tt = (function(e) {
          return (
            (e.CHECKOUT = 'woocommerce/checkout'),
            (e.CHECKOUT_FIELDS = 'woocommerce/checkout-fields-block'),
            (e.CHECKOUT_TOTALS = 'woocommerce/checkout-totals-block'),
            (e.CONTACT_INFORMATION = 'woocommerce/checkout-contact-information-block'),
            (e.SHIPPING_ADDRESS = 'woocommerce/checkout-shipping-address-block'),
            (e.BILLING_ADDRESS = 'woocommerce/checkout-billing-address-block'),
            (e.SHIPPING_METHOD = 'woocommerce/checkout-shipping-method-block'),
            (e.SHIPPING_METHODS = 'woocommerce/checkout-shipping-methods-block'),
            (e.PICKUP_LOCATION = 'woocommerce/checkout-pickup-options-block'),
            (e.PAYMENT_METHODS = 'woocommerce/checkout-payment-methods-block'),
            (e.CART = 'woocommerce/cart'),
            (e.EMPTY_CART = 'woocommerce/empty-cart-block'),
            (e.FILLED_CART = 'woocommerce/filled-cart-block'),
            (e.CART_ITEMS = 'woocommerce/cart-items-block'),
            (e.CART_CROSS_SELLS = 'woocommerce/cart-cross-sells-block'),
            (e.CART_TOTALS = 'woocommerce/cart-totals-block'),
            (e.MINI_CART = 'woocommerce/mini-cart-contents'),
            (e.EMPTY_MINI_CART = 'woocommerce/empty-mini-cart-contents-block'),
            (e.FILLED_MINI_CART = 'woocommerce/filled-mini-cart-contents-block'),
            (e.MINI_CART_TITLE = 'woocommerce/mini-cart-title-block'),
            (e.MINI_CART_ITEMS = 'woocommerce/mini-cart-items-block'),
            (e.MINI_CART_FOOTER = 'woocommerce/mini-cart-footer-block'),
            (e.CART_ORDER_SUMMARY = 'woocommerce/cart-order-summary-block'),
            (e.CART_ORDER_SUMMARY_TOTALS = 'woocommerce/cart-order-summary-totals-block'),
            (e.CHECKOUT_ORDER_SUMMARY = 'woocommerce/checkout-order-summary-block'),
            (e.CHECKOUT_ORDER_SUMMARY_TOTALS = 'woocommerce/checkout-order-summary-totals-block'),
            e
          );
        })({});
        const ot = {},
          rt = e => Object.values(tt).includes(e),
          nt = e =>
            rt(e)
              ? Object.values(ot).filter(({ metadata: t }) =>
                  ((null == t ? void 0 : t.parent) || []).includes(e),
                )
              : [],
          at = window.wc.wcBlocksRegistry,
          ct = e => {
            var t, o, r, n;
            ((e, t, o) => {
              if (!(0, te.isObject)(e)) return;
              const r = typeof e[t];
              if (r !== o)
                throw new Error(
                  `Incorrect value for the ${t} argument when registering a block component. It was a ${r}, but must be a ${o}.`,
                );
            })(e, 'metadata', 'object'),
              (e => {
                if (
                  (((e, t, o) => {
                    const r = typeof t;
                    if (r !== o)
                      throw new Error(
                        `Incorrect value for the blockName argument when registering a checkout block. It was a ${r}, but must be a ${o}.`,
                      );
                  })(0, e, 'string'),
                  !e)
                )
                  throw new Error('Value for the blockName argument must not be empty.');
              })(e.metadata.name),
              (e => {
                if ('string' != typeof e && !Array.isArray(e))
                  throw new Error(
                    `Incorrect value for the parent argument when registering a checkout block. It was a ${typeof e}, but must be a string or array of strings.`,
                  );
                if ('string' == typeof e && !rt(e))
                  throw new Error(
                    'When registering a checkout block, the parent must be a valid inner block area.',
                  );
                if (Array.isArray(e) && !e.some(e => rt(e)))
                  throw new Error(
                    'When registering a checkout block, the parent must be a valid inner block area.',
                  );
              })(e.metadata.parent),
              ((e, t) => {
                const o = e[t];
                if (o) {
                  if ('function' == typeof o) return;
                  if ((0, te.isObject)(o) && o.$$typeof && o.$$typeof === Symbol.for('react.lazy'))
                    return;
                }
                throw new Error(
                  `Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`,
                );
              })(e, 'component'),
              (0, at.registerBlockComponent)({
                blockName: e.metadata.name,
                component: e.component,
              });
            const a =
              'boolean' == typeof e.force
                ? e.force
                : Boolean(
                    null === (t = e.metadata) ||
                      void 0 === t ||
                      null === (o = t.attributes) ||
                      void 0 === o ||
                      null === (r = o.lock) ||
                      void 0 === r ||
                      null === (n = r.default) ||
                      void 0 === n
                      ? void 0
                      : n.remove,
                  );
            ot[e.metadata.name] = {
              blockName: e.metadata.name,
              metadata: e.metadata,
              component: e.component,
              force: a,
            };
          };
      },
      2080: () => {},
      9345: () => {},
      230: () => {},
      9297: () => {},
      5440: () => {},
      7791: () => {},
      6249: () => {},
      4632: () => {},
      7015: () => {},
      1157: () => {},
      7235: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      5795: e => {
        'use strict';
        e.exports = window.ReactDOM;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      4040: e => {
        'use strict';
        e.exports = window.wp.deprecated;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      923: e => {
        'use strict';
        e.exports = window.wp.isShallowEqual;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
      979: e => {
        'use strict';
        e.exports = window.wp.warning;
      },
    },
    n = {};
  function a(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, a), o.exports;
  }
  (a.m = r),
    (e = []),
    (a.O = (t, o, r, n) => {
      if (!o) {
        var c = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, n] = e[m], s = !0, l = 0; l < o.length; l++)
            (!1 & n || c >= n) && Object.keys(a.O).every(e => a.O[e](o[l]))
              ? o.splice(l--, 1)
              : ((s = !1), n < c && (c = n));
          if (s) {
            e.splice(m--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
      e[m] = [o, r, n];
    }),
    (a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (a.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      a.r(n);
      var c = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var s = 2 & r && e; 'object' == typeof s && !~t.indexOf(s); s = o(s))
        Object.getOwnPropertyNames(s).forEach(t => (c[t] = () => e[t]));
      return (c.default = () => e), a.d(n, c), n;
    }),
    (a.d = (e, t) => {
      for (var o in t)
        a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.j = 8157),
    (() => {
      var e = { 8157: 0 };
      a.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [c, s, l] = o,
            i = 0;
          if (c.some(t => 0 !== e[t])) {
            for (r in s) a.o(s, r) && (a.m[r] = s[r]);
            if (l) var m = l(a);
          }
          for (t && t(o); i < c.length; i++) (n = c[i]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return a.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var c = a.O(void 0, [94], () => a(3441));
  (c = a.O(c)), ((wc = void 0 === wc ? {} : wc).blocksCheckout = c);
})();
