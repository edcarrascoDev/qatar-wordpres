(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [636],
  {
    4597: (e, t, s) => {
      'use strict';
      s.d(t, { l: () => V });
      var r = s(1609),
        n = s(4656),
        o = s(6087),
        a = s(7723),
        l = s(8537),
        i = s(9019),
        d = s.n(i),
        c = s(332),
        u = s(3993),
        p = s(7143),
        m = s(7594);
      s(1707);
      const h = ({
        id: e,
        className: t,
        label: s,
        onChange: l,
        options: i,
        value: h,
        required: g = !1,
        errorId: E,
        autoComplete: f = 'off',
        errorMessage: v = (0, a.__)('Please select a valid option', 'woocommerce'),
      }) => {
        const b = (0, o.useRef)(null),
          y = (0, o.useId)(),
          _ = e || 'control-' + y,
          C = E || _,
          { setValidationErrors: k, clearValidationError: A } = (0, p.useDispatch)(
            m.VALIDATION_STORE_KEY,
          ),
          { error: S, validationErrorId: w } = (0, p.useSelect)(e => {
            const t = e(m.VALIDATION_STORE_KEY);
            return { error: t.getValidationError(C), validationErrorId: t.getValidationErrorId(C) };
          });
        return (
          (0, o.useEffect)(
            () => (
              !g || h ? A(C) : k({ [C]: { message: v, hidden: !0 } }),
              () => {
                A(C);
              }
            ),
            [A, h, C, v, g, k],
          ),
          (0, r.createElement)(
            'div',
            {
              id: _,
              className: d()('wc-block-components-combobox', t, {
                'is-active': h,
                'has-error': (null == S ? void 0 : S.message) && !(null != S && S.hidden),
              }),
              ref: b,
            },
            (0, r.createElement)(c.A, {
              className: 'wc-block-components-combobox-control',
              label: s,
              onChange: l,
              onFilterValueChange: e => {
                if (e.length) {
                  const t = (0, u.isObject)(b.current)
                    ? b.current.ownerDocument.activeElement
                    : void 0;
                  if (t && (0, u.isObject)(b.current) && b.current.contains(t)) return;
                  const s = e.toLocaleUpperCase(),
                    r = i.find(e => e.value.toLocaleUpperCase() === s);
                  if (r) return void l(r.value);
                  const n = i.find(e => e.label.toLocaleUpperCase().startsWith(s));
                  n && l(n.value);
                }
              },
              options: i,
              value: h || '',
              allowReset: !1,
              autoComplete: f,
              'aria-invalid': (null == S ? void 0 : S.message) && !(null != S && S.hidden),
              'aria-errormessage': w,
            }),
            (0, r.createElement)(n.ValidationInputError, { propertyName: C }),
          )
        );
      };
      s(2931);
      const g = ({
        className: e,
        countries: t,
        id: s,
        label: n,
        onChange: i,
        value: c = '',
        autoComplete: u = 'off',
        required: p = !1,
        errorId: m,
        errorMessage: g = (0, a.__)('Please select a country', 'woocommerce'),
      }) => {
        const E = (0, o.useMemo)(
          () => Object.entries(t).map(([e, t]) => ({ value: e, label: (0, l.decodeEntities)(t) })),
          [t],
        );
        return (0, r.createElement)(
          'div',
          { className: d()(e, 'wc-block-components-country-input') },
          (0, r.createElement)(h, {
            id: s,
            label: n,
            onChange: i,
            options: E,
            value: c,
            errorId: m,
            errorMessage: g,
            required: p,
            autoComplete: u,
          }),
        );
      };
      var E = s(812);
      const f = e => (0, r.createElement)(g, { countries: E.AG, ...e }),
        v = e => (0, r.createElement)(g, { countries: E.G3, ...e });
      s(8824);
      const b = (e, t) => {
          const s = t.find(
            t =>
              t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
              t.value.toLocaleUpperCase() === e.toLocaleUpperCase(),
          );
          return s ? s.value : '';
        },
        y = ({
          className: e,
          id: t,
          states: s,
          country: i,
          label: c,
          onChange: u,
          autoComplete: p = 'off',
          value: m = '',
          required: g = !1,
          errorId: E = '',
        }) => {
          const f = s[i],
            v = (0, o.useMemo)(
              () =>
                f
                  ? Object.keys(f).map(e => ({ value: e, label: (0, l.decodeEntities)(f[e]) }))
                  : [],
              [f],
            ),
            y = (0, o.useCallback)(
              e => {
                const t = v.length > 0 ? b(e, v) : e;
                t !== m && u(t);
              },
              [u, v, m],
            ),
            _ = (0, o.useRef)(m);
          return (
            (0, o.useEffect)(() => {
              _.current !== m && (_.current = m);
            }, [m]),
            (0, o.useEffect)(() => {
              if (v.length > 0 && _.current) {
                const e = b(_.current, v);
                e !== _.current && y(e);
              }
            }, [v, y]),
            v.length > 0
              ? (0, r.createElement)(h, {
                  className: d()(e, 'wc-block-components-state-input'),
                  id: t,
                  label: c,
                  onChange: y,
                  options: v,
                  value: m,
                  errorMessage: (0, a.__)('Please select a state.', 'woocommerce'),
                  errorId: E,
                  required: g,
                  autoComplete: p,
                })
              : (0, r.createElement)(n.ValidatedTextInput, {
                  className: e,
                  id: t,
                  label: c,
                  onChange: y,
                  autoComplete: p,
                  value: m,
                  required: g,
                })
          );
        },
        _ = e => (0, r.createElement)(y, { states: E.uz, ...e }),
        C = e => (0, r.createElement)(y, { states: E.SL, ...e });
      var k = s(9491),
        A = s(1573),
        S = s(923),
        w = s.n(S),
        T = s(8585);
      var I = s(1e3),
        N = s(3832);
      const F = ({ field: e, props: t, onChange: s, value: l }) => {
          var i;
          const d = null !== (i = null == e ? void 0 : e.required) && void 0 !== i && i,
            [c, u] = (0, o.useState)(() => Boolean(l) || d);
          return (0, r.createElement)(
            o.Fragment,
            null,
            c
              ? (0, r.createElement)(n.ValidatedTextInput, {
                  ...t,
                  type: e.type,
                  label: d ? e.label : e.optionalLabel,
                  className: `wc-block-components-address-form__${e.key}`,
                  value: l,
                  onChange: t => s(e.key, t),
                })
              : (0, r.createElement)(
                  'button',
                  {
                    className: 'wc-block-components-address-form__address_2-toggle',
                    onClick: () => u(!0),
                  },
                  (0, a.sprintf)(
                    // translators: %s: address 2 field label.
                    // translators: %s: address 2 field label.
                    (0, a.__)('+ Add %s', 'woocommerce'),
                    e.label.toLowerCase(),
                  ),
                ),
          );
        },
        O = (e, t, s) => ({
          id: `${t}-${null == e ? void 0 : e.key}`.replaceAll('/', '-'),
          errorId: `${s}_${null == e ? void 0 : e.key}`,
          label:
            null != e && e.required
              ? null == e
                ? void 0
                : e.label
              : null == e
              ? void 0
              : e.optionalLabel,
          autoCapitalize: null == e ? void 0 : e.autocapitalize,
          autoComplete: null == e ? void 0 : e.autocomplete,
          errorMessage: null == e ? void 0 : e.errorMessage,
          required: null == e ? void 0 : e.required,
          className: `wc-block-components-address-form__${null == e ? void 0 : e.key}`.replaceAll(
            '/',
            '-',
          ),
          ...(null == e ? void 0 : e.attributes),
        }),
        P = (e, t, s) => ({
          field: t.find(t => t.key === e),
          value: (0, u.objectHasProp)(s, e) ? s[e] : void 0,
        }),
        R = ({ formId: e, address1: t, address2: s, addressType: o, onChange: a }) => {
          var l, i, d, c;
          const u = t ? O(t.field, e, o) : void 0,
            p = s ? O(s.field, e, o) : void 0;
          return (0, r.createElement)(
            r.Fragment,
            null,
            t &&
              (0, r.createElement)(n.ValidatedTextInput, {
                ...u,
                type: null === (l = t.field) || void 0 === l ? void 0 : l.type,
                label: null === (i = t.field) || void 0 === i ? void 0 : i.label,
                className: `wc-block-components-address-form__${
                  null === (d = t.field) || void 0 === d ? void 0 : d.key
                }`,
                value: t.value,
                onChange: e => {
                  var s;
                  return a(null === (s = t.field) || void 0 === s ? void 0 : s.key, e);
                },
              }),
            (null == s ? void 0 : s.field) &&
              !(null != s && null !== (c = s.field) && void 0 !== c && c.hidden) &&
              (0, r.createElement)(F, {
                field: s.field,
                props: p,
                onChange: a,
                value: null == s ? void 0 : s.value,
              }),
          );
        },
        D = ({
          id: e = '',
          fields: t,
          fieldConfig: s = {},
          onChange: l,
          addressType: i = 'shipping',
          values: c,
          children: g,
        }) => {
          const E = (0, k.useInstanceId)(D),
            b = (0, A.c)(t),
            y = (0, A.c)(s),
            S = (0, A.c)((0, u.objectHasProp)(c, 'country') ? c.country : ''),
            F = (0, o.useMemo)(() => {
              const e = (0, T.A)(b, y, S);
              return {
                fields: e,
                addressType: i,
                required: e.filter(e => e.required),
                hidden: e.filter(e => e.hidden),
              };
            }, [b, y, S, i]),
            V = (0, o.useRef)({});
          return (
            (0, o.useEffect)(() => {
              const e = { ...c, ...Object.fromEntries(F.hidden.map(e => [e.key, ''])) };
              w()(c, e) || l(e);
            }, [l, F, c]),
            (0, o.useEffect)(() => {
              'shipping' === i &&
                (0, u.objectHasProp)(c, 'country') &&
                (e => {
                  const t = 'shipping_country',
                    s = (0, p.select)(m.VALIDATION_STORE_KEY).getValidationError(t);
                  !e.country &&
                    (e.city || e.state || e.postcode) &&
                    (s
                      ? (0, p.dispatch)(m.VALIDATION_STORE_KEY).showValidationError(t)
                      : (0, p.dispatch)(m.VALIDATION_STORE_KEY).setValidationErrors({
                          [t]: {
                            message: (0, a.__)('Please select your country', 'woocommerce'),
                            hidden: !1,
                          },
                        })),
                    s &&
                      e.country &&
                      (0, p.dispatch)(m.VALIDATION_STORE_KEY).clearValidationError(t);
                })(c);
            }, [c, i]),
            (0, o.useEffect)(() => {
              var e, t;
              null === (e = V.current) ||
                void 0 === e ||
                null === (t = e.postcode) ||
                void 0 === t ||
                t.revalidate();
            }, [S]),
            (e = e || `${E}`),
            (0, r.createElement)(
              'div',
              { id: e, className: 'wc-block-components-address-form' },
              F.fields.map(t => {
                if (t.hidden) return null;
                const s = O(t, e, i);
                if (
                  ('email' === t.key && ((s.id = 'email'), (s.errorId = 'billing_email')),
                  'checkbox' === t.type)
                )
                  return (0, r.createElement)(n.CheckboxControl, {
                    key: t.key,
                    checked: Boolean(c[t.key]),
                    onChange: e => {
                      l({ ...c, [t.key]: e });
                    },
                    ...s,
                  });
                if ('address_1' === t.key) {
                  const s = P('address_1', F.fields, c),
                    n = P('address_2', F.fields, c);
                  return (0, r.createElement)(R, {
                    address1: s,
                    address2: n,
                    addressType: i,
                    formId: e,
                    key: t.key,
                    onChange: (e, t) => {
                      l({ ...c, [e]: t });
                    },
                  });
                }
                if ('address_2' === t.key) return null;
                if ('country' === t.key && (0, u.objectHasProp)(c, 'country')) {
                  const e = 'shipping' === i ? v : f;
                  return (0, r.createElement)(e, {
                    key: t.key,
                    ...s,
                    value: c.country,
                    onChange: e => {
                      l({ ...c, country: e, state: '', postcode: '' });
                    },
                  });
                }
                if ('state' === t.key && (0, u.objectHasProp)(c, 'state')) {
                  const e = 'shipping' === i ? C : _;
                  return (0, r.createElement)(e, {
                    key: t.key,
                    ...s,
                    country: c.country,
                    value: c.state,
                    onChange: e => l({ ...c, state: e }),
                  });
                }
                return 'select' === t.type
                  ? void 0 === t.options
                    ? null
                    : (0, r.createElement)(h, {
                        key: t.key,
                        ...s,
                        className: d()(
                          'wc-block-components-select-input',
                          `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                        ),
                        value: c[t.key],
                        onChange: e => {
                          l({ ...c, [t.key]: e });
                        },
                        options: t.options,
                      })
                  : (0, r.createElement)(n.ValidatedTextInput, {
                      key: t.key,
                      ref: e => (V.current[t.key] = e),
                      ...s,
                      type: t.type,
                      value: c[t.key],
                      onChange: e => l({ ...c, [t.key]: e }),
                      customFormatter: e =>
                        'postcode' === t.key ? e.trimStart().toUpperCase() : e,
                      customValidation: e =>
                        ((e, t, s) =>
                          !(
                            (e.required || e.value) &&
                            ('postcode' === t &&
                            s &&
                            !(0, I.isPostcode)({ postcode: e.value, country: s })
                              ? (e.setCustomValidity(
                                  (0, a.__)('Please enter a valid postcode', 'woocommerce'),
                                ),
                                1)
                              : 'email' === t &&
                                !(0, N.isEmail)(e.value) &&
                                (e.setCustomValidity(
                                  (0, a.__)('Please enter a valid email address', 'woocommerce'),
                                ),
                                1))
                          ))(e, t.key, (0, u.objectHasProp)(c, 'country') ? c.country : ''),
                    });
              }),
              g,
            )
          );
        },
        V = D;
    },
    3494: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var r = s(1609),
        n = s(6087),
        o = s(8107),
        a = s(4717);
      const l = ['BUTTON', 'FIELDSET', 'INPUT', 'OPTGROUP', 'OPTION', 'SELECT', 'TEXTAREA', 'A'],
        i = ({ children: e, style: t = {}, ...s }) => {
          const i = (0, n.useRef)(null),
            d = () => {
              i.current &&
                o.focus.focusable.find(i.current).forEach(e => {
                  l.includes(e.nodeName) && e.setAttribute('tabindex', '-1'),
                    e.hasAttribute('contenteditable') && e.setAttribute('contenteditable', 'false');
                });
            },
            c = (0, a.YQ)(d, 0, { leading: !0 });
          return (
            (0, n.useLayoutEffect)(() => {
              let e;
              return (
                d(),
                i.current &&
                  ((e = new window.MutationObserver(c)),
                  e.observe(i.current, { childList: !0, attributes: !0, subtree: !0 })),
                () => {
                  e && e.disconnect(), c.cancel();
                }
              );
            }, [c]),
            (0, r.createElement)(
              'div',
              {
                ref: i,
                'aria-disabled': 'true',
                style: { userSelect: 'none', pointerEvents: 'none', cursor: 'normal', ...t },
                ...s,
              },
              e,
            )
          );
        };
    },
    5251: (e, t, s) => {
      'use strict';
      s.d(t, { C: () => d });
      var r = s(5703),
        n = s(6087),
        o = s(7143),
        a = s(7594),
        l = s(4107),
        i = s(4958);
      const d = () => {
        const { needsShipping: e } = (0, i.m)(),
          { useShippingAsBilling: t, prefersCollection: s } = (0, o.useSelect)(e => ({
            useShippingAsBilling: e(a.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),
            prefersCollection: e(a.CHECKOUT_STORE_KEY).prefersCollection(),
          })),
          { __internalSetUseShippingAsBilling: d } = (0, o.useDispatch)(a.CHECKOUT_STORE_KEY),
          {
            billingAddress: c,
            setBillingAddress: u,
            shippingAddress: p,
            setShippingAddress: m,
          } = (0, l.q)(),
          h = (0, n.useCallback)(
            e => {
              u({ email: e });
            },
            [u],
          ),
          g = (0, r.getSetting)('forcedBillingAddress', !1);
        return {
          shippingAddress: p,
          billingAddress: c,
          setShippingAddress: m,
          setBillingAddress: u,
          setEmail: h,
          defaultFields: r.defaultFields,
          useShippingAsBilling: t,
          setUseShippingAsBilling: d,
          needsShipping: e,
          showShippingFields: !g && e && !s,
          showShippingMethods: e && !s,
          showBillingFields: !e || !t || !!s,
          forcedBillingAddress: g,
          useBillingAsShipping: g || !!s,
        };
      };
    },
    4107: (e, t, s) => {
      'use strict';
      s.d(t, { q: () => o });
      var r = s(7143),
        n = s(7594);
      const o = () => {
        const { customerData: e, isInitialized: t } = (0, r.useSelect)(e => {
            const t = e(n.CART_STORE_KEY);
            return {
              customerData: t.getCustomerData(),
              isInitialized: t.hasFinishedResolution('getCartData'),
            };
          }),
          { setShippingAddress: s, setBillingAddress: o } = (0, r.useDispatch)(n.CART_STORE_KEY);
        return {
          isInitialized: t,
          billingAddress: e.billingAddress,
          shippingAddress: e.shippingAddress,
          setBillingAddress: o,
          setShippingAddress: s,
        };
      };
    },
    1573: (e, t, s) => {
      'use strict';
      s.d(t, { c: () => a });
      var r = s(6087),
        n = s(923),
        o = s.n(n);
      function a(e) {
        const t = (0, r.useRef)(e);
        return o()(e, t.current) || (t.current = e), t.current;
      }
    },
    3127: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var r = s(1609),
        n = s(7723),
        o = s(3993),
        a = s(5703),
        l = s(6398);
      s(1094);
      const i = ({ address: e, onEdit: t, target: s, fieldConfig: i }) => {
        const d = (0, a.getSetting)('countryData', {});
        let c = (0, a.getSetting)(
          'defaultAddressFormat',
          '{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}\n{postcode}\n{country}',
        );
        (0, o.objectHasProp)(d, null == e ? void 0 : e.country) &&
          (0, o.objectHasProp)(d[e.country], 'format') &&
          (0, o.isString)(d[e.country].format) &&
          (c = d[e.country].format);
        const { name: u, address: p } = (0, l.M0)(e, c);
        return (0, r.createElement)(
          'div',
          { className: 'wc-block-components-address-card' },
          (0, r.createElement)(
            'address',
            null,
            (0, r.createElement)(
              'span',
              { className: 'wc-block-components-address-card__address-section' },
              u,
            ),
            (0, r.createElement)(
              'div',
              { className: 'wc-block-components-address-card__address-section' },
              p
                .filter(e => !!e)
                .map((e, t) => (0, r.createElement)('span', { key: 'address-' + t }, e)),
            ),
            e.phone && !i.phone.hidden
              ? (0, r.createElement)(
                  'div',
                  {
                    key: 'address-phone',
                    className: 'wc-block-components-address-card__address-section',
                  },
                  e.phone,
                )
              : '',
          ),
          t &&
            (0, r.createElement)(
              'a',
              {
                role: 'button',
                href: '#' + s,
                className: 'wc-block-components-address-card__edit',
                'aria-label': (0, n.__)('Edit address', 'woocommerce'),
                onClick: e => {
                  t(), e.preventDefault();
                },
              },
              (0, n.__)('Edit', 'woocommerce'),
            ),
        );
      };
    },
    8202: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var r = s(1609),
        n = s(9019),
        o = s.n(n);
      s(7259);
      const a = ({ isEditing: e = !1, addressCard: t, addressForm: s }) => {
        const n = o()('wc-block-components-address-address-wrapper', { 'is-editing': e });
        return (0, r.createElement)(
          'div',
          { className: n },
          (0, r.createElement)(
            'div',
            { className: 'wc-block-components-address-card-wrapper' },
            t(),
          ),
          (0, r.createElement)(
            'div',
            { className: 'wc-block-components-address-form-wrapper' },
            s(),
          ),
        );
      };
    },
    9017: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => n });
      var r = s(7723);
      const n = ({
        defaultTitle: e = (0, r.__)('Step', 'woocommerce'),
        defaultDescription: t = (0, r.__)('Step description text.', 'woocommerce'),
        defaultShowStepNumber: s = !0,
      }) => ({
        title: { type: 'string', default: e },
        description: { type: 'string', default: t },
        showStepNumber: { type: 'boolean', default: s },
      });
    },
    7275: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => I });
      var r = s(1609),
        n = s(9019),
        o = s.n(n),
        a = s(1616),
        l = s(4656),
        i = s(5251),
        d = s(7143),
        c = s(7594),
        u = s(7723),
        p = s(6087),
        m = s(4375),
        h = s(2663),
        g = s(2379),
        E = s(3494),
        f = s(5703),
        v = s(5683),
        b = s(4597),
        y = s(3603),
        _ = s(812),
        C = s(8202),
        k = s(3127);
      const A = ({ addressFieldsConfig: e, defaultEditing: t = !1 }) => {
          const {
              shippingAddress: s,
              setShippingAddress: n,
              setBillingAddress: o,
              useShippingAsBilling: a,
            } = (0, i.C)(),
            { dispatchCheckoutEvent: l } = (0, y.y)(),
            [u, m] = (0, p.useState)(t),
            { hasValidationErrors: h, invalidProps: g } = (0, d.useSelect)(e => {
              const t = e(c.VALIDATION_STORE_KEY);
              return {
                hasValidationErrors: t.hasValidationErrors(),
                invalidProps: Object.keys(s)
                  .filter(e => void 0 !== t.getValidationError('shipping_' + e))
                  .filter(Boolean),
              };
            });
          (0, p.useEffect)(() => {
            g.length > 0 && !1 === u && m(!0);
          }, [u, h, g.length]);
          const E = (0, p.useCallback)(
              e => {
                n(e), a && (o(e), l('set-billing-address')), l('set-shipping-address');
              },
              [l, o, n, a],
            ),
            f = (0, p.useCallback)(
              () =>
                (0, r.createElement)(k.A, {
                  address: s,
                  target: 'shipping',
                  onEdit: () => {
                    m(!0);
                  },
                  fieldConfig: e,
                }),
              [s, e],
            ),
            v = (0, p.useCallback)(
              () =>
                (0, r.createElement)(b.l, {
                  id: 'shipping',
                  addressType: 'shipping',
                  onChange: E,
                  values: s,
                  fields: _.Hw,
                  fieldConfig: e,
                }),
              [e, E, s],
            );
          return (0, r.createElement)(C.A, { isEditing: u, addressCard: f, addressForm: v });
        },
        S = ({
          showCompanyField: e = !1,
          requireCompanyField: t = !1,
          showApartmentField: s = !1,
          requireApartmentField: n = !1,
          showPhoneField: o = !1,
          requirePhoneField: a = !1,
        }) => {
          const {
              setBillingAddress: b,
              shippingAddress: y,
              billingAddress: _,
              useShippingAsBilling: C,
              setUseShippingAsBilling: k,
            } = (0, i.C)(),
            { isEditor: S } = (0, h.m)(),
            w = 0 === (0, f.getSetting)('currentUserId'),
            T = () => {
              const t = { ...y };
              o || delete t.phone, e && delete t.company, b(t);
            };
          (0, m.Su)(() => {
            C && T();
          });
          const I = (0, p.useMemo)(
              () => ({
                company: { hidden: !e, required: t },
                address_2: { hidden: !s, required: n },
                phone: { hidden: !o, required: a },
              }),
              [e, t, s, n, o, a],
            ),
            N = S ? E.A : p.Fragment,
            F = C ? [g.tG.SHIPPING_ADDRESS, g.tG.BILLING_ADDRESS] : [g.tG.SHIPPING_ADDRESS],
            O = !(!y.address_1 || (!y.first_name && !y.last_name)),
            { cartDataLoaded: P } = (0, d.useSelect)(e => ({
              cartDataLoaded: e(c.CART_STORE_KEY).hasFinishedResolution('getCartData'),
            })),
            R = S || !O;
          return (0, r.createElement)(
            p.Fragment,
            null,
            (0, r.createElement)(l.StoreNoticesContainer, { context: F }),
            (0, r.createElement)(
              N,
              null,
              P ? (0, r.createElement)(A, { addressFieldsConfig: I, defaultEditing: R }) : null,
            ),
            (0, r.createElement)(l.CheckboxControl, {
              className: 'wc-block-checkout__use-address-for-billing',
              label: (0, u.__)('Use same address for billing', 'woocommerce'),
              checked: C,
              onChange: e => {
                k(e),
                  e
                    ? T()
                    : (e => {
                        if (!e || !w) return;
                        const t = (0, v.ln)(e);
                        b(t);
                      })(_);
              },
            }),
          );
        },
        w = {
          ...(0, s(9017).A)({
            defaultTitle: (0, u.__)('Shipping address', 'woocommerce'),
            defaultDescription: (0, u.__)(
              'Enter the address where you want your order delivered.',
              'woocommerce',
            ),
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
        };
      var T = s(9292);
      const I = (0, a.withFilteredAttributes)(w)(
        ({ title: e, description: t, children: s, className: n }) => {
          const a = (0, d.useSelect)(e => e(c.CHECKOUT_STORE_KEY).isProcessing()),
            { showShippingFields: u } = (0, i.C)(),
            {
              showCompanyField: p,
              requireCompanyField: m,
              showApartmentField: h,
              requireApartmentField: g,
              showPhoneField: E,
              requirePhoneField: f,
              showFormStepNumbers: v,
            } = (0, T.Oy)();
          return u
            ? (0, r.createElement)(
                l.FormStep,
                {
                  id: 'shipping-fields',
                  disabled: a,
                  className: o()('wc-block-checkout__shipping-fields', n),
                  title: e,
                  description: t,
                  showStepNumber: v,
                },
                (0, r.createElement)(S, {
                  showCompanyField: p,
                  requireCompanyField: m,
                  showApartmentField: h,
                  requireApartmentField: g,
                  showPhoneField: E,
                  requirePhoneField: f,
                }),
                s,
              )
            : null;
        },
      );
    },
    1707: () => {},
    2931: () => {},
    8824: () => {},
    1094: () => {},
    7259: () => {},
  },
]);
