(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [5806],
  {
    4845: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => d });
      var n = s(1609),
        i = s(8165),
        a = s(6087),
        c = s(9019),
        o = s.n(c),
        r = s(4040),
        l = s.n(r),
        p = (s(2080), s(8730));
      const d = (0, a.forwardRef)((e, t) => {
        'showSpinner' in e &&
          l()('showSpinner prop', {
            version: '8.9.0',
            alternative: 'Render a spinner in the button children instead.',
            plugin: 'WooCommerce',
          });
        const {
            className: s,
            showSpinner: a = !1,
            children: c,
            variant: r = 'contained',
            removeTextWrap: d = !1,
            ...m
          } = e,
          g = o()('wc-block-components-button', 'wp-element-button', s, r, {
            'wc-block-components-button--loading': a,
          });
        if ('href' in e)
          return (0, n.createElement)(i.$, {
            render: (0, n.createElement)(
              'a',
              { ref: t, href: e.href },
              a && (0, n.createElement)(p.A, null),
              (0, n.createElement)('span', { className: 'wc-block-components-button__text' }, c),
            ),
            className: g,
            ...m,
          });
        const u = d
          ? e.children
          : (0, n.createElement)(
              'span',
              { className: 'wc-block-components-button__text' },
              e.children,
            );
        return (0, n.createElement)(
          i.$,
          { ref: t, className: g, ...m },
          a && (0, n.createElement)(p.A, null),
          u,
        );
      });
    },
    8067: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => v });
      var n = s(1609),
        i = s(9019),
        a = s.n(i),
        c = s(7723),
        o = s(8537),
        r = s(4656),
        l = s(6087),
        p = s(4958),
        d = s(1359),
        m = s.n(d);
      const g = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
        u = ['target', 'href', 'rel', 'name', 'download'],
        h = (e, t) => {
          const s = (null == t ? void 0 : t.tags) || g,
            n = (null == t ? void 0 : t.attr) || u;
          return m().sanitize(e, { ALLOWED_TAGS: s, ALLOWED_ATTR: n });
        };
      var _ = s(7143),
        b = s(7594),
        E = s(9095),
        w = s(8529),
        k = s(5703);
      const f = e => {
          const t = (0, k.getSetting)('displayCartPricesIncludingTax', !1)
            ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
            : parseInt(e.price, 10);
          let s = (0, n.createElement)(
            n.Fragment,
            null,
            Number.isFinite(t) &&
              (0, n.createElement)(r.FormattedMonetaryAmount, {
                currency: (0, w.getCurrencyFromPriceResponse)(e),
                value: t,
              }),
            Number.isFinite(t) && e.delivery_time ? ' — ' : null,
            (0, o.decodeEntities)(e.delivery_time),
          );
          return (
            0 === t &&
              (s = (0, n.createElement)(
                'span',
                {
                  className:
                    'wc-block-components-shipping-rates-control__package__description--free',
                },
                (0, c.__)('Free', 'woocommerce'),
              )),
            { label: (0, o.decodeEntities)(e.name), value: e.rate_id, description: s }
          );
        },
        S = ({
          className: e = '',
          noResultsMessage: t,
          onSelectRate: s,
          rates: i,
          renderOption: a = f,
          selectedRate: c,
          disabled: o = !1,
          highlightChecked: p = !1,
        }) => {
          const d = (null == c ? void 0 : c.rate_id) || '',
            m = (0, E.Z)(d),
            [g, u] = (0, l.useState)(() => d || (i.length > 0 ? i[0].rate_id : void 0));
          return (
            (0, l.useEffect)(() => {
              d && d !== m && d !== g && u(d);
            }, [d, g, m]),
            (0, l.useEffect)(() => {
              !g && i.length > 0 && (u(i[0].rate_id), s(i[0].rate_id));
            }, [s, i, g]),
            (0, l.useEffect)(() => {
              g && s(g);
            }, [s, g]),
            0 === i.length
              ? t
              : (0, n.createElement)(r.RadioControl, {
                  className: e,
                  onChange: e => {
                    u(e), s(e);
                  },
                  highlightChecked: p,
                  disabled: o,
                  selected: g,
                  options: i.map(a),
                })
          );
        };
      s(2867);
      const v = ({
        packageId: e,
        className: t = '',
        noResultsMessage: s,
        renderOption: i,
        packageData: d,
        collapsible: m,
        showItems: g,
        highlightChecked: u = !1,
      }) => {
        var E;
        const { selectShippingRate: w, isSelectingRate: k } = (0, p.m)(),
          f =
            (0, _.useSelect)(e => {
              var t, s, n;
              return null === (t = e(b.CART_STORE_KEY)) ||
                void 0 === t ||
                null === (s = t.getCartData()) ||
                void 0 === s ||
                null === (n = s.shippingRates) ||
                void 0 === n
                ? void 0
                : n.length;
            }) > 1 ||
            document.querySelectorAll('.wc-block-components-shipping-rates-control__package')
              .length > 1,
          v = null != g ? g : f,
          A = null != m ? m : f,
          R = (0, n.createElement)(
            n.Fragment,
            null,
            (A || v) &&
              (0, n.createElement)('div', {
                className: 'wc-block-components-shipping-rates-control__package-title',
                dangerouslySetInnerHTML: { __html: h(d.name) },
              }),
            v &&
              (0, n.createElement)(
                'ul',
                { className: 'wc-block-components-shipping-rates-control__package-items' },
                Object.values(d.items).map(e => {
                  const t = (0, o.decodeEntities)(e.name),
                    s = e.quantity;
                  return (0, n.createElement)(
                    'li',
                    {
                      key: e.key,
                      className: 'wc-block-components-shipping-rates-control__package-item',
                    },
                    (0, n.createElement)(r.Label, {
                      label: s > 1 ? `${t} × ${s}` : `${t}`,
                      screenReaderLabel: (0,
                      c.sprintf) /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */(
                        /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                        (0, c._n)('%1$s (%2$d unit)', '%1$s (%2$d units)', s, 'woocommerce'),
                        t,
                        s,
                      ),
                    }),
                  );
                }),
              ),
          ),
          C = (0, l.useCallback)(
            t => {
              w(t, e);
            },
            [e, w],
          ),
          N = {
            className: t,
            noResultsMessage: s,
            rates: d.shipping_rates,
            onSelectRate: C,
            selectedRate: d.shipping_rates.find(e => e.selected),
            renderOption: i,
            disabled: k,
            highlightChecked: u,
          },
          y = (0, l.useMemo)(() => {
            var e;
            return null == d || null === (e = d.shipping_rates) || void 0 === e
              ? void 0
              : e.findIndex(e => (null == e ? void 0 : e.selected));
          }, [null == d ? void 0 : d.shipping_rates]);
        return A
          ? (0, n.createElement)(
              r.Panel,
              {
                className: a()('wc-block-components-shipping-rates-control__package', t, {
                  'wc-block-components-shipping-rates-control__package--disabled': k,
                }),
                initialOpen: !1,
                title: R,
              },
              (0, n.createElement)(S, { ...N }),
            )
          : (0, n.createElement)(
              'div',
              {
                className: a()('wc-block-components-shipping-rates-control__package', t, {
                  'wc-block-components-shipping-rates-control__package--disabled': k,
                  'wc-block-components-shipping-rates-control__package--first-selected':
                    !k && 0 === y,
                  'wc-block-components-shipping-rates-control__package--last-selected':
                    !k &&
                    y ===
                      (null == d || null === (E = d.shipping_rates) || void 0 === E
                        ? void 0
                        : E.length) -
                        1,
                }),
              },
              R,
              (0, n.createElement)(S, { ...N }),
            );
      };
    },
    8460: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => b });
      var n = s(1609),
        i = s(7723),
        a = s(6087),
        c = s(5416),
        o = s(1e3),
        r = s(8531),
        l = s(8605),
        p = s(2663),
        d = s(4958),
        m = s(6988),
        g = s(3993),
        u = s(8067),
        h = s(195);
      const _ = ({
          packages: e,
          showItems: t,
          collapsible: s,
          noResultsMessage: i,
          renderOption: a,
          context: c = '',
        }) =>
          e.length
            ? (0, n.createElement)(
                n.Fragment,
                null,
                e.map(({ package_id: e, ...o }) =>
                  (0, n.createElement)(u.A, {
                    highlightChecked: 'woocommerce/cart' !== c,
                    key: e,
                    packageId: e,
                    packageData: o,
                    collapsible: s,
                    showItems: t,
                    noResultsMessage: i,
                    renderOption: a,
                  }),
                ),
              )
            : null,
        b = ({
          shippingRates: e,
          isLoadingRates: t,
          className: s,
          collapsible: b,
          showItems: E,
          noResultsMessage: w,
          renderOption: k,
          context: f,
        }) => {
          (0, a.useEffect)(() => {
            var s, n;
            t ||
              ((s = (0, r.T4)(e)),
              (n = (0, r.Lb)(e)),
              1 === s
                ? (0, h.speak)(
                    (0, i.sprintf) /* translators: %d number of shipping options found. */(
                      /* translators: %d number of shipping options found. */
                      (0, i._n)(
                        '%d shipping option was found.',
                        '%d shipping options were found.',
                        n,
                        'woocommerce',
                      ),
                      n,
                    ),
                  )
                : (0, h.speak)(
                    (0, i.sprintf) /* translators: %d number of shipping packages packages. */(
                      /* translators: %d number of shipping packages packages. */
                      (0, i._n)(
                        'Shipping option searched for %d package.',
                        'Shipping options searched for %d packages.',
                        s,
                        'woocommerce',
                      ),
                      s,
                    ) +
                      ' ' +
                      (0, i.sprintf) /* translators: %d number of shipping options available. */(
                        /* translators: %d number of shipping options available. */
                        (0, i._n)(
                          '%d shipping option was found',
                          '%d shipping options were found',
                          n,
                          'woocommerce',
                        ),
                        n,
                      ),
                  ));
          }, [t, e]);
          const { extensions: S, receiveCart: v, ...A } = (0, l.V)(),
            R = {
              className: s,
              collapsible: b,
              showItems: E,
              noResultsMessage: w,
              renderOption: k,
              extensions: S,
              cart: A,
              components: { ShippingRatesControlPackage: u.A },
              context: f,
            },
            { isEditor: C } = (0, p.m)(),
            { hasSelectedLocalPickup: N, selectedRates: y } = (0, d.m)(),
            O = (0, g.isObject)(y) ? Object.values(y) : [],
            T = O.every(e => e === O[0]);
          return (0, n.createElement)(
            c.A,
            {
              isLoading: t,
              screenReaderLabel: (0, i.__)('Loading shipping rates…', 'woocommerce'),
              showSpinner: !0,
            },
            N &&
              'woocommerce/cart' === f &&
              e.length > 1 &&
              !T &&
              !C &&
              (0, n.createElement)(
                m.A,
                { className: 'wc-block-components-notice', isDismissible: !1, status: 'warning' },
                (0, i.__)('Multiple shipments must have the same pickup location', 'woocommerce'),
              ),
            (0, n.createElement)(o.ExperimentalOrderShippingPackages.Slot, { ...R }),
            (0, n.createElement)(
              o.ExperimentalOrderShippingPackages,
              null,
              (0, n.createElement)(_, { packages: e, noResultsMessage: w, renderOption: k }),
            ),
          );
        };
    },
    5416: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => r });
      var n = s(1609),
        i = s(7723),
        a = s(9019),
        c = s.n(a),
        o = s(4656);
      s(8375);
      const r = ({
        children: e,
        className: t,
        screenReaderLabel: s,
        showSpinner: a = !1,
        isLoading: r = !0,
      }) =>
        (0, n.createElement)(
          'div',
          { className: c()(t, { 'wc-block-components-loading-mask': r }) },
          r && a && (0, n.createElement)(o.Spinner, null),
          (0, n.createElement)(
            'div',
            {
              className: c()({ 'wc-block-components-loading-mask__children': r }),
              'aria-hidden': r,
            },
            e,
          ),
          r &&
            (0, n.createElement)(
              'span',
              { className: 'screen-reader-text' },
              s || (0, i.__)('Loading…', 'woocommerce'),
            ),
        );
    },
    6988: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => m });
      var n = s(1609),
        i = s(9019),
        a = s.n(i),
        c = s(7723),
        o = s(7104),
        r = s(1208),
        l = (s(9345), s(9113)),
        p = s(4845),
        d = s(7666);
      const m = ({
        className: e,
        status: t = 'default',
        children: s,
        spokenMessage: i = s,
        onRemove: m = () => {},
        isDismissible: g = !0,
        politeness: u = (0, l.A)(t),
        summary: h,
      }) => (
        (0, d.$)(i, u),
        (0, n.createElement)(
          'div',
          {
            className: a()(e, 'wc-block-components-notice-banner', 'is-' + t, {
              'is-dismissible': g,
            }),
          },
          (0, n.createElement)(o.A, { icon: (0, l.c)(t) }),
          (0, n.createElement)(
            'div',
            { className: 'wc-block-components-notice-banner__content' },
            h &&
              (0, n.createElement)(
                'p',
                { className: 'wc-block-components-notice-banner__summary' },
                h,
              ),
            s,
          ),
          !!g &&
            (0, n.createElement)(
              p.A,
              {
                className: 'wc-block-components-notice-banner__dismiss',
                'aria-label': (0, c.__)('Dismiss this notice', 'woocommerce'),
                onClick: e => {
                  'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                    e.preventDefault &&
                    e.preventDefault(),
                    m();
                },
                removeTextWrap: !0,
              },
              (0, n.createElement)(o.A, { icon: r.A }),
            ),
        )
      );
    },
    9113: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => c, c: () => o });
      var n = s(2900),
        i = s(2478),
        a = s(8306);
      const c = e => {
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
        o = e => {
          switch (e) {
            case 'success':
              return n.A;
            case 'warning':
            case 'info':
            case 'error':
              return i.A;
            default:
              return a.A;
          }
        };
    },
    5251: (e, t, s) => {
      'use strict';
      s.d(t, { C: () => l });
      var n = s(5703),
        i = s(6087),
        a = s(7143),
        c = s(7594),
        o = s(4107),
        r = s(4958);
      const l = () => {
        const { needsShipping: e } = (0, r.m)(),
          { useShippingAsBilling: t, prefersCollection: s } = (0, a.useSelect)(e => ({
            useShippingAsBilling: e(c.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),
            prefersCollection: e(c.CHECKOUT_STORE_KEY).prefersCollection(),
          })),
          { __internalSetUseShippingAsBilling: l } = (0, a.useDispatch)(c.CHECKOUT_STORE_KEY),
          {
            billingAddress: p,
            setBillingAddress: d,
            shippingAddress: m,
            setShippingAddress: g,
          } = (0, o.q)(),
          u = (0, i.useCallback)(
            e => {
              d({ email: e });
            },
            [d],
          ),
          h = (0, n.getSetting)('forcedBillingAddress', !1);
        return {
          shippingAddress: m,
          billingAddress: p,
          setShippingAddress: g,
          setBillingAddress: d,
          setEmail: u,
          defaultFields: n.defaultFields,
          useShippingAsBilling: t,
          setUseShippingAsBilling: l,
          needsShipping: e,
          showShippingFields: !h && e && !s,
          showShippingMethods: e && !s,
          showBillingFields: !e || !t || !!s,
          forcedBillingAddress: h,
          useBillingAsShipping: h || !!s,
        };
      };
    },
    4107: (e, t, s) => {
      'use strict';
      s.d(t, { q: () => a });
      var n = s(7143),
        i = s(7594);
      const a = () => {
        const { customerData: e, isInitialized: t } = (0, n.useSelect)(e => {
            const t = e(i.CART_STORE_KEY);
            return {
              customerData: t.getCustomerData(),
              isInitialized: t.hasFinishedResolution('getCartData'),
            };
          }),
          { setShippingAddress: s, setBillingAddress: a } = (0, n.useDispatch)(i.CART_STORE_KEY);
        return {
          isInitialized: t,
          billingAddress: e.billingAddress,
          shippingAddress: e.shippingAddress,
          setBillingAddress: a,
          setShippingAddress: s,
        };
      };
    },
    7666: (e, t, s) => {
      'use strict';
      s.d(t, { $: () => a });
      var n = s(6087),
        i = s(195);
      const a = (e, t) => {
        const s = 'string' == typeof e ? e : (0, n.renderToString)(e);
        (0, n.useEffect)(() => {
          s && (0, i.speak)(s, t);
        }, [s, t]);
      };
    },
    9017: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var n = s(7723);
      const i = ({
        defaultTitle: e = (0, n.__)('Step', 'woocommerce'),
        defaultDescription: t = (0, n.__)('Step description text.', 'woocommerce'),
        defaultShowStepNumber: s = !0,
      }) => ({
        title: { type: 'string', default: e },
        description: { type: 'string', default: t },
        showStepNumber: { type: 'boolean', default: s },
      });
    },
    3701: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => N });
      var n = s(1609),
        i = s(9019),
        a = s.n(i),
        c = s(1616),
        o = s(4656),
        r = s(5251),
        l = s(7143),
        p = s(7594),
        d = s(9292),
        m = s(7723),
        g = s(4958),
        u = s(4107),
        h = s(8460),
        _ = s(8531),
        b = s(5683),
        E = s(8529),
        w = s(2663),
        k = s(2379),
        f = s(8537),
        S = s(5703),
        v = s(6988);
      const A = e => {
          const t = (0, S.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10),
            s =
              0 === t
                ? (0, n.createElement)(
                    'span',
                    { className: 'wc-block-checkout__shipping-option--free' },
                    (0, m.__)('Free', 'woocommerce'),
                  )
                : (0, n.createElement)(o.FormattedMonetaryAmount, {
                    currency: (0, E.getCurrencyFromPriceResponse)(e),
                    value: t,
                  });
          return {
            label: (0, f.decodeEntities)(e.name),
            value: e.rate_id,
            description: (0, f.decodeEntities)(e.description),
            secondaryLabel: s,
            secondaryDescription: (0, f.decodeEntities)(e.delivery_time),
          };
        },
        R = ({ noShippingPlaceholder: e = null }) => {
          const { isEditor: t } = (0, w.m)(),
            {
              shippingRates: s,
              needsShipping: i,
              isLoadingRates: a,
              hasCalculatedShipping: c,
              isCollectable: r,
            } = (0, g.m)(),
            { shippingAddress: l } = (0, u.q)(),
            p = r
              ? s.map(e => ({
                  ...e,
                  shipping_rates: e.shipping_rates.filter(e => !(0, _.jV)(e.method_id)),
                }))
              : s;
          if (!i) return null;
          const d = (0, _.T4)(s);
          if (!c && !d)
            return (0, n.createElement)(
              'p',
              null,
              (0, m.__)(
                'Shipping options will be displayed here after entering your full shipping address.',
                'woocommerce',
              ),
            );
          const E = (0, b.KY)(l);
          return (0, n.createElement)(
            n.Fragment,
            null,
            (0, n.createElement)(o.StoreNoticesContainer, { context: k.tG.SHIPPING_METHODS }),
            t && !d
              ? e
              : (0, n.createElement)(h.A, {
                  noResultsMessage: (0, n.createElement)(
                    n.Fragment,
                    null,
                    E
                      ? (0, n.createElement)(
                          v.A,
                          {
                            isDismissible: !1,
                            className:
                              'wc-block-components-shipping-rates-control__no-results-notice',
                            status: 'warning',
                          },
                          (0, m.__)(
                            'There are no shipping options available. Please check your shipping address.',
                            'woocommerce',
                          ),
                        )
                      : (0, m.__)(
                          'Add a shipping address to view shipping options.',
                          'woocommerce',
                        ),
                  ),
                  renderOption: A,
                  collapsible: !1,
                  shippingRates: p,
                  isLoadingRates: a,
                  context: 'woocommerce/checkout',
                }),
          );
        },
        C = {
          ...(0, s(9017).A)({
            defaultTitle: (0, m.__)('Shipping options', 'woocommerce'),
            defaultDescription: '',
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
        },
        N = (0, c.withFilteredAttributes)(C)(
          ({ title: e, description: t, children: s, className: i }) => {
            const { showFormStepNumbers: c } = (0, d.Oy)(),
              m = (0, l.useSelect)(e => e(p.CHECKOUT_STORE_KEY).isProcessing()),
              { showShippingMethods: g } = (0, r.C)();
            return g
              ? (0, n.createElement)(
                  o.FormStep,
                  {
                    id: 'shipping-option',
                    disabled: m,
                    className: a()('wc-block-checkout__shipping-option', i),
                    title: e,
                    description: t,
                    showStepNumber: c,
                  },
                  (0, n.createElement)(R, null),
                  s,
                )
              : null;
          },
        );
    },
    8730: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var n = s(1609);
      s(7791);
      const i = () =>
        (0, n.createElement)('span', {
          className: 'wc-block-components-spinner',
          'aria-hidden': 'true',
        });
    },
    2080: () => {},
    2867: () => {},
    8375: () => {},
    9345: () => {},
    7791: () => {},
  },
]);
