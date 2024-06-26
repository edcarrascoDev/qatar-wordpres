'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [9319],
  {
    8901: (e, i, t) => {
      t.r(i), t.d(i, { default: () => N });
      var o = t(51609),
        c = t(36561),
        s = t.n(c),
        n = t(41616),
        p = t(14656),
        r = t(47143),
        a = t(47594),
        l = t(14958),
        h = t(40812),
        g = t(99292),
        d = t(27723),
        m = t(90770),
        u = t(21279),
        k = t(6122),
        _ = t(86087),
        w = t(18531),
        E = t(15703),
        C = t(56713),
        b = t(18144),
        T = t(89854);
      t(93832);
      var x = t(74845);
      const v = {
          hidden: !0,
          message: (0, d.__)('Shipping options are not available', 'woocommerce'),
        },
        S = ({
          checked: e,
          rate: i,
          showPrice: t,
          showIcon: c,
          toggleText: n,
          multiple: p,
          onClick: r,
        }) =>
          (0, o.createElement)(
            x.A,
            {
              role: 'radio',
              removeTextWrap: !0,
              onClick: r,
              className: s()('wc-block-checkout__shipping-method-option', {
                'wc-block-checkout__shipping-method-option--selected': 'pickup' === e,
              }),
            },
            !0 === c &&
              (0, o.createElement)(m.A, {
                icon: u.A,
                size: 28,
                className: 'wc-block-checkout__shipping-method-option-icon',
              }),
            (0, o.createElement)(
              'span',
              { className: 'wc-block-checkout__shipping-method-option-title' },
              n,
            ),
            !0 === t && (0, o.createElement)(C.e, { multiple: p, minRate: i.min, maxRate: i.max }),
          ),
        A = ({
          checked: e,
          rate: i,
          showPrice: t,
          showIcon: c,
          toggleText: n,
          onClick: p,
          shippingCostRequiresAddress: l = !1,
        }) => {
          const h = (0, r.useSelect)(e =>
              e(a.CART_STORE_KEY)
                .getShippingRates()
                .some(({ shipping_rates: e }) => !e.every(w.J_)),
            ),
            g =
              l &&
              (() => {
                const e = (0, r.select)('wc/store/validation'),
                  i = e.getValidationError('shipping_state'),
                  t = e.getValidationError('shipping_address_1'),
                  o = e.getValidationError('shipping_country'),
                  c = e.getValidationError('shipping_postcode');
                return [e.getValidationError('shipping_city'), i, t, o, c].some(e => void 0 !== e);
              })() &&
              !h,
            u = void 0 !== i.min && void 0 !== i.max,
            { setValidationErrors: E, clearValidationError: b } = (0, r.useDispatch)(
              a.VALIDATION_STORE_KEY,
            );
          (0, _.useEffect)(() => {
            'shipping' !== e || u ? b('shipping-rates-error') : E({ 'shipping-rates-error': v });
          }, [e, b, u, E]);
          const T =
            void 0 === i.min || g
              ? (0, o.createElement)(
                  'span',
                  { className: 'wc-block-checkout__shipping-method-option-price' },
                  (0, d.__)('calculated with an address', 'woocommerce'),
                )
              : (0, o.createElement)(C.e, { minRate: i.min, maxRate: i.max });
          return (0, o.createElement)(
            x.A,
            {
              role: 'radio',
              onClick: p,
              removeTextWrap: !0,
              className: s()('wc-block-checkout__shipping-method-option', {
                'wc-block-checkout__shipping-method-option--selected': 'shipping' === e,
              }),
            },
            !0 === c &&
              (0, o.createElement)(m.A, {
                icon: k.A,
                size: 28,
                className: 'wc-block-checkout__shipping-method-option-icon',
              }),
            (0, o.createElement)(
              'span',
              { className: 'wc-block-checkout__shipping-method-option-title' },
              n,
            ),
            !0 === t && T,
          );
        },
        P = ({
          checked: e,
          onChange: i,
          showPrice: t,
          showIcon: c,
          localPickupText: s,
          shippingText: n,
        }) => {
          var p, r;
          const { shippingRates: a } = (0, l.m)(),
            h = (0, E.getSetting)('shippingCostRequiresAddress', !1),
            g = (0, E.getSetting)('localPickupText', s || T.A);
          return (0, o.createElement)(
            'div',
            {
              id: 'shipping-method',
              className: 'components-button-group wc-block-checkout__shipping-method-container',
              role: 'radiogroup',
            },
            (0, o.createElement)(A, {
              checked: e,
              onClick: () => {
                i('shipping');
              },
              rate: (0, b.L)(null === (p = a[0]) || void 0 === p ? void 0 : p.shipping_rates),
              showPrice: t,
              showIcon: c,
              shippingCostRequiresAddress: h,
              toggleText: n || T.x,
            }),
            (0, o.createElement)(S, {
              checked: e,
              onClick: () => {
                i('pickup');
              },
              rate: (0, b._)(null === (r = a[0]) || void 0 === r ? void 0 : r.shipping_rates),
              multiple: a.length > 1,
              showPrice: t,
              showIcon: c,
              toggleText: g,
            }),
          );
        };
      var R = t(3530);
      const N = (0, n.withFilteredAttributes)(R.A)(
        ({
          title: e,
          description: i,
          children: t,
          className: c,
          showPrice: n,
          showIcon: d,
          shippingText: m,
          localPickupText: u,
        }) => {
          const { showFormStepNumbers: k } = (0, g.Oy)(),
            { checkoutIsProcessing: _, prefersCollection: w } = (0, r.useSelect)(e => {
              const i = e(a.CHECKOUT_STORE_KEY);
              return {
                checkoutIsProcessing: i.isProcessing(),
                prefersCollection: i.prefersCollection(),
              };
            }),
            { setPrefersCollection: E } = (0, r.useDispatch)(a.CHECKOUT_STORE_KEY),
            { shippingRates: C, needsShipping: b, hasCalculatedShipping: T, isCollectable: x } = (0,
            l.m)();
          return b && T && C && x && h.F7
            ? (0, o.createElement)(
                p.FormStep,
                {
                  id: 'shipping-method',
                  disabled: _,
                  className: s()('wc-block-checkout__shipping-method', c),
                  title: e,
                  description: i,
                  showStepNumber: k,
                },
                (0, o.createElement)(P, {
                  checked: w ? 'pickup' : 'shipping',
                  onChange: e => {
                    E('pickup' === e);
                  },
                  showPrice: n,
                  showIcon: d,
                  localPickupText: u,
                  shippingText: m,
                }),
                t,
              )
            : null;
        },
      );
    },
  },
]);
