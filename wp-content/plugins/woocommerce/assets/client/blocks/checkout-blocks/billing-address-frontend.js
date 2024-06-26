(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [4037],
  {
    4597: (e, t, s) => {
      'use strict';
      s.d(t, { l: () => D });
      var r = s(1609),
        n = s(4656),
        l = s(6087),
        o = s(7723),
        a = s(8537),
        i = s(9019),
        d = s.n(i),
        c = s(332),
        u = s(3993),
        p = s(7143),
        m = s(7594);
      s(1707);
      const g = ({
        id: e,
        className: t,
        label: s,
        onChange: a,
        options: i,
        value: g,
        required: h = !1,
        errorId: E,
        autoComplete: f = 'off',
        errorMessage: v = (0, o.__)('Please select a valid option', 'woocommerce'),
      }) => {
        const b = (0, l.useRef)(null),
          y = (0, l.useId)(),
          _ = e || 'control-' + y,
          C = E || _,
          { setValidationErrors: A, clearValidationError: k } = (0, p.useDispatch)(
            m.VALIDATION_STORE_KEY,
          ),
          { error: S, validationErrorId: w } = (0, p.useSelect)(e => {
            const t = e(m.VALIDATION_STORE_KEY);
            return { error: t.getValidationError(C), validationErrorId: t.getValidationErrorId(C) };
          });
        return (
          (0, l.useEffect)(
            () => (
              !h || g ? k(C) : A({ [C]: { message: v, hidden: !0 } }),
              () => {
                k(C);
              }
            ),
            [k, g, C, v, h, A],
          ),
          (0, r.createElement)(
            'div',
            {
              id: _,
              className: d()('wc-block-components-combobox', t, {
                'is-active': g,
                'has-error': (null == S ? void 0 : S.message) && !(null != S && S.hidden),
              }),
              ref: b,
            },
            (0, r.createElement)(c.A, {
              className: 'wc-block-components-combobox-control',
              label: s,
              onChange: a,
              onFilterValueChange: e => {
                if (e.length) {
                  const t = (0, u.isObject)(b.current)
                    ? b.current.ownerDocument.activeElement
                    : void 0;
                  if (t && (0, u.isObject)(b.current) && b.current.contains(t)) return;
                  const s = e.toLocaleUpperCase(),
                    r = i.find(e => e.value.toLocaleUpperCase() === s);
                  if (r) return void a(r.value);
                  const n = i.find(e => e.label.toLocaleUpperCase().startsWith(s));
                  n && a(n.value);
                }
              },
              options: i,
              value: g || '',
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
      const h = ({
        className: e,
        countries: t,
        id: s,
        label: n,
        onChange: i,
        value: c = '',
        autoComplete: u = 'off',
        required: p = !1,
        errorId: m,
        errorMessage: h = (0, o.__)('Please select a country', 'woocommerce'),
      }) => {
        const E = (0, l.useMemo)(
          () => Object.entries(t).map(([e, t]) => ({ value: e, label: (0, a.decodeEntities)(t) })),
          [t],
        );
        return (0, r.createElement)(
          'div',
          { className: d()(e, 'wc-block-components-country-input') },
          (0, r.createElement)(g, {
            id: s,
            label: n,
            onChange: i,
            options: E,
            value: c,
            errorId: m,
            errorMessage: h,
            required: p,
            autoComplete: u,
          }),
        );
      };
      var E = s(812);
      const f = e => (0, r.createElement)(h, { countries: E.AG, ...e }),
        v = e => (0, r.createElement)(h, { countries: E.G3, ...e });
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
          required: h = !1,
          errorId: E = '',
        }) => {
          const f = s[i],
            v = (0, l.useMemo)(
              () =>
                f
                  ? Object.keys(f).map(e => ({ value: e, label: (0, a.decodeEntities)(f[e]) }))
                  : [],
              [f],
            ),
            y = (0, l.useCallback)(
              e => {
                const t = v.length > 0 ? b(e, v) : e;
                t !== m && u(t);
              },
              [u, v, m],
            ),
            _ = (0, l.useRef)(m);
          return (
            (0, l.useEffect)(() => {
              _.current !== m && (_.current = m);
            }, [m]),
            (0, l.useEffect)(() => {
              if (v.length > 0 && _.current) {
                const e = b(_.current, v);
                e !== _.current && y(e);
              }
            }, [v, y]),
            v.length > 0
              ? (0, r.createElement)(g, {
                  className: d()(e, 'wc-block-components-state-input'),
                  id: t,
                  label: c,
                  onChange: y,
                  options: v,
                  value: m,
                  errorMessage: (0, o.__)('Please select a state.', 'woocommerce'),
                  errorId: E,
                  required: h,
                  autoComplete: p,
                })
              : (0, r.createElement)(n.ValidatedTextInput, {
                  className: e,
                  id: t,
                  label: c,
                  onChange: y,
                  autoComplete: p,
                  value: m,
                  required: h,
                })
          );
        },
        _ = e => (0, r.createElement)(y, { states: E.uz, ...e }),
        C = e => (0, r.createElement)(y, { states: E.SL, ...e });
      var A = s(9491),
        k = s(1573),
        S = s(923),
        w = s.n(S),
        T = s(8585);
      var I = s(1e3),
        N = s(3832);
      const F = ({ field: e, props: t, onChange: s, value: a }) => {
          var i;
          const d = null !== (i = null == e ? void 0 : e.required) && void 0 !== i && i,
            [c, u] = (0, l.useState)(() => Boolean(a) || d);
          return (0, r.createElement)(
            l.Fragment,
            null,
            c
              ? (0, r.createElement)(n.ValidatedTextInput, {
                  ...t,
                  type: e.type,
                  label: d ? e.label : e.optionalLabel,
                  className: `wc-block-components-address-form__${e.key}`,
                  value: a,
                  onChange: t => s(e.key, t),
                })
              : (0, r.createElement)(
                  'button',
                  {
                    className: 'wc-block-components-address-form__address_2-toggle',
                    onClick: () => u(!0),
                  },
                  (0, o.sprintf)(
                    // translators: %s: address 2 field label.
                    // translators: %s: address 2 field label.
                    (0, o.__)('+ Add %s', 'woocommerce'),
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
        B = (e, t, s) => ({
          field: t.find(t => t.key === e),
          value: (0, u.objectHasProp)(s, e) ? s[e] : void 0,
        }),
        P = ({ formId: e, address1: t, address2: s, addressType: l, onChange: o }) => {
          var a, i, d, c;
          const u = t ? O(t.field, e, l) : void 0,
            p = s ? O(s.field, e, l) : void 0;
          return (0, r.createElement)(
            r.Fragment,
            null,
            t &&
              (0, r.createElement)(n.ValidatedTextInput, {
                ...u,
                type: null === (a = t.field) || void 0 === a ? void 0 : a.type,
                label: null === (i = t.field) || void 0 === i ? void 0 : i.label,
                className: `wc-block-components-address-form__${
                  null === (d = t.field) || void 0 === d ? void 0 : d.key
                }`,
                value: t.value,
                onChange: e => {
                  var s;
                  return o(null === (s = t.field) || void 0 === s ? void 0 : s.key, e);
                },
              }),
            (null == s ? void 0 : s.field) &&
              !(null != s && null !== (c = s.field) && void 0 !== c && c.hidden) &&
              (0, r.createElement)(F, {
                field: s.field,
                props: p,
                onChange: o,
                value: null == s ? void 0 : s.value,
              }),
          );
        },
        R = ({
          id: e = '',
          fields: t,
          fieldConfig: s = {},
          onChange: a,
          addressType: i = 'shipping',
          values: c,
          children: h,
        }) => {
          const E = (0, A.useInstanceId)(R),
            b = (0, k.c)(t),
            y = (0, k.c)(s),
            S = (0, k.c)((0, u.objectHasProp)(c, 'country') ? c.country : ''),
            F = (0, l.useMemo)(() => {
              const e = (0, T.A)(b, y, S);
              return {
                fields: e,
                addressType: i,
                required: e.filter(e => e.required),
                hidden: e.filter(e => e.hidden),
              };
            }, [b, y, S, i]),
            D = (0, l.useRef)({});
          return (
            (0, l.useEffect)(() => {
              const e = { ...c, ...Object.fromEntries(F.hidden.map(e => [e.key, ''])) };
              w()(c, e) || a(e);
            }, [a, F, c]),
            (0, l.useEffect)(() => {
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
                            message: (0, o.__)('Please select your country', 'woocommerce'),
                            hidden: !1,
                          },
                        })),
                    s &&
                      e.country &&
                      (0, p.dispatch)(m.VALIDATION_STORE_KEY).clearValidationError(t);
                })(c);
            }, [c, i]),
            (0, l.useEffect)(() => {
              var e, t;
              null === (e = D.current) ||
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
                      a({ ...c, [t.key]: e });
                    },
                    ...s,
                  });
                if ('address_1' === t.key) {
                  const s = B('address_1', F.fields, c),
                    n = B('address_2', F.fields, c);
                  return (0, r.createElement)(P, {
                    address1: s,
                    address2: n,
                    addressType: i,
                    formId: e,
                    key: t.key,
                    onChange: (e, t) => {
                      a({ ...c, [e]: t });
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
                      a({ ...c, country: e, state: '', postcode: '' });
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
                    onChange: e => a({ ...c, state: e }),
                  });
                }
                return 'select' === t.type
                  ? void 0 === t.options
                    ? null
                    : (0, r.createElement)(g, {
                        key: t.key,
                        ...s,
                        className: d()(
                          'wc-block-components-select-input',
                          `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                        ),
                        value: c[t.key],
                        onChange: e => {
                          a({ ...c, [t.key]: e });
                        },
                        options: t.options,
                      })
                  : (0, r.createElement)(n.ValidatedTextInput, {
                      key: t.key,
                      ref: e => (D.current[t.key] = e),
                      ...s,
                      type: t.type,
                      value: c[t.key],
                      onChange: e => a({ ...c, [t.key]: e }),
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
                                  (0, o.__)('Please enter a valid postcode', 'woocommerce'),
                                ),
                                1)
                              : 'email' === t &&
                                !(0, N.isEmail)(e.value) &&
                                (e.setCustomValidity(
                                  (0, o.__)('Please enter a valid email address', 'woocommerce'),
                                ),
                                1))
                          ))(e, t.key, (0, u.objectHasProp)(c, 'country') ? c.country : ''),
                    });
              }),
              h,
            )
          );
        },
        D = R;
    },
    3494: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var r = s(1609),
        n = s(6087),
        l = s(8107),
        o = s(4717);
      const a = ['BUTTON', 'FIELDSET', 'INPUT', 'OPTGROUP', 'OPTION', 'SELECT', 'TEXTAREA', 'A'],
        i = ({ children: e, style: t = {}, ...s }) => {
          const i = (0, n.useRef)(null),
            d = () => {
              i.current &&
                l.focus.focusable.find(i.current).forEach(e => {
                  a.includes(e.nodeName) && e.setAttribute('tabindex', '-1'),
                    e.hasAttribute('contenteditable') && e.setAttribute('contenteditable', 'false');
                });
            },
            c = (0, o.YQ)(d, 0, { leading: !0 });
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
        l = s(7143),
        o = s(7594),
        a = s(4107),
        i = s(4958);
      const d = () => {
        const { needsShipping: e } = (0, i.m)(),
          { useShippingAsBilling: t, prefersCollection: s } = (0, l.useSelect)(e => ({
            useShippingAsBilling: e(o.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),
            prefersCollection: e(o.CHECKOUT_STORE_KEY).prefersCollection(),
          })),
          { __internalSetUseShippingAsBilling: d } = (0, l.useDispatch)(o.CHECKOUT_STORE_KEY),
          {
            billingAddress: c,
            setBillingAddress: u,
            shippingAddress: p,
            setShippingAddress: m,
          } = (0, a.q)(),
          g = (0, n.useCallback)(
            e => {
              u({ email: e });
            },
            [u],
          ),
          h = (0, r.getSetting)('forcedBillingAddress', !1);
        return {
          shippingAddress: p,
          billingAddress: c,
          setShippingAddress: m,
          setBillingAddress: u,
          setEmail: g,
          defaultFields: r.defaultFields,
          useShippingAsBilling: t,
          setUseShippingAsBilling: d,
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
      s.d(t, { q: () => l });
      var r = s(7143),
        n = s(7594);
      const l = () => {
        const { customerData: e, isInitialized: t } = (0, r.useSelect)(e => {
            const t = e(n.CART_STORE_KEY);
            return {
              customerData: t.getCustomerData(),
              isInitialized: t.hasFinishedResolution('getCartData'),
            };
          }),
          { setShippingAddress: s, setBillingAddress: l } = (0, r.useDispatch)(n.CART_STORE_KEY);
        return {
          isInitialized: t,
          billingAddress: e.billingAddress,
          shippingAddress: e.shippingAddress,
          setBillingAddress: l,
          setShippingAddress: s,
        };
      };
    },
    1573: (e, t, s) => {
      'use strict';
      s.d(t, { c: () => o });
      var r = s(6087),
        n = s(923),
        l = s.n(n);
      function o(e) {
        const t = (0, r.useRef)(e);
        return l()(e, t.current) || (t.current = e), t.current;
      }
    },
    3127: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var r = s(1609),
        n = s(7723),
        l = s(3993),
        o = s(5703),
        a = s(6398);
      s(1094);
      const i = ({ address: e, onEdit: t, target: s, fieldConfig: i }) => {
        const d = (0, o.getSetting)('countryData', {});
        let c = (0, o.getSetting)(
          'defaultAddressFormat',
          '{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}\n{postcode}\n{country}',
        );
        (0, l.objectHasProp)(d, null == e ? void 0 : e.country) &&
          (0, l.objectHasProp)(d[e.country], 'format') &&
          (0, l.isString)(d[e.country].format) &&
          (c = d[e.country].format);
        const { name: u, address: p } = (0, a.M0)(e, c);
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
      s.d(t, { A: () => o });
      var r = s(1609),
        n = s(9019),
        l = s.n(n);
      s(7259);
      const o = ({ isEditing: e = !1, addressCard: t, addressForm: s }) => {
        const n = l()('wc-block-components-address-address-wrapper', { 'is-editing': e });
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
    9463: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => P });
      var r = s(1609),
        n = s(9019),
        l = s.n(n),
        o = s(1616),
        a = s(4656),
        i = s(5251),
        d = s(7143),
        c = s(7594),
        u = s(6087),
        p = s(4375),
        m = s(2663),
        g = s(2379),
        h = s(3494),
        E = s(923),
        f = s.n(E),
        v = s(4597),
        b = s(3603),
        y = s(812),
        _ = s(8202),
        C = s(3127);
      const A = ({ addressFieldsConfig: e, defaultEditing: t = !1 }) => {
          const {
              billingAddress: s,
              setShippingAddress: n,
              setBillingAddress: l,
              useBillingAsShipping: o,
            } = (0, i.C)(),
            { dispatchCheckoutEvent: a } = (0, b.y)(),
            [p, m] = (0, u.useState)(t),
            { hasValidationErrors: g, invalidProps: h } = (0, d.useSelect)(e => {
              const t = e(c.VALIDATION_STORE_KEY);
              return {
                hasValidationErrors: t.hasValidationErrors(),
                invalidProps: Object.keys(s)
                  .filter(e => 'email' !== e && void 0 !== t.getValidationError('billing_' + e))
                  .filter(Boolean),
              };
            });
          (0, u.useEffect)(() => {
            h.length > 0 && !1 === p && m(!0);
          }, [p, g, h.length]);
          const E = (0, u.useCallback)(
              e => {
                l(e), o && (n(e), a('set-shipping-address')), a('set-billing-address');
              },
              [a, l, n, o],
            ),
            f = (0, u.useCallback)(
              () =>
                (0, r.createElement)(C.A, {
                  address: s,
                  target: 'billing',
                  onEdit: () => {
                    m(!0);
                  },
                  fieldConfig: e,
                }),
              [s, e],
            ),
            A = (0, u.useCallback)(
              () =>
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(v.l, {
                    id: 'billing',
                    addressType: 'billing',
                    onChange: E,
                    values: s,
                    fields: y.Hw,
                    fieldConfig: e,
                  }),
                ),
              [e, s, E],
            );
          return (0, r.createElement)(_.A, { isEditing: p, addressCard: f, addressForm: A });
        },
        k = ({
          showCompanyField: e = !1,
          requireCompanyField: t = !1,
          showApartmentField: s = !1,
          requireApartmentField: n = !1,
          showPhoneField: l = !1,
          requirePhoneField: o = !1,
        }) => {
          const {
              shippingAddress: E,
              billingAddress: v,
              setShippingAddress: b,
              useBillingAsShipping: y,
            } = (0, i.C)(),
            { isEditor: _ } = (0, m.m)();
          (0, p.Su)(() => {
            if (y) {
              const { email: t, ...s } = v,
                r = { ...s };
              l || delete r.phone, e && delete r.company, b(r);
            }
          });
          const C = (0, u.useMemo)(
              () => ({
                company: { hidden: !e, required: t },
                address_2: { hidden: !s, required: n },
                phone: { hidden: !l, required: o },
              }),
              [e, t, s, n, l, o],
            ),
            k = _ ? h.A : u.Fragment,
            S = y ? [g.tG.BILLING_ADDRESS, g.tG.SHIPPING_ADDRESS] : [g.tG.BILLING_ADDRESS],
            { cartDataLoaded: w } = (0, d.useSelect)(e => ({
              cartDataLoaded: e(c.CART_STORE_KEY).hasFinishedResolution('getCartData'),
            })),
            T = !(!v.address_1 || (!v.first_name && !v.last_name)),
            { email: I, ...N } = v,
            F = f()(N, E),
            O = _ || !T || F;
          return (0, r.createElement)(
            u.Fragment,
            null,
            (0, r.createElement)(a.StoreNoticesContainer, { context: S }),
            (0, r.createElement)(
              k,
              null,
              w ? (0, r.createElement)(A, { addressFieldsConfig: C, defaultEditing: O }) : null,
            ),
          );
        };
      var S = s(9017),
        w = s(7723);
      const T = (0, w.__)('Billing address', 'woocommerce'),
        I = (0, w.__)('Enter the billing address that matches your payment method.', 'woocommerce'),
        N = (0, w.__)('Billing and shipping address', 'woocommerce'),
        F = (0, w.__)(
          'Enter the billing and shipping address that matches your payment method.',
          'woocommerce',
        ),
        O = {
          ...(0, S.A)({ defaultTitle: T, defaultDescription: I }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
        };
      var B = s(9292);
      const P = (0, o.withFilteredAttributes)(O)(
        ({ title: e, description: t, children: s, className: n }) => {
          const { showFormStepNumbers: o } = (0, B.Oy)(),
            u = (0, d.useSelect)(e => e(c.CHECKOUT_STORE_KEY).isProcessing()),
            {
              showCompanyField: p,
              requireCompanyField: m,
              showApartmentField: g,
              requireApartmentField: h,
              showPhoneField: E,
              requirePhoneField: f,
            } = (0, B.Oy)(),
            { showBillingFields: v, forcedBillingAddress: b, useBillingAsShipping: y } = (0, i.C)();
          return v || y
            ? ((e = ((e, t) => (t ? (e === T ? N : e) : e === N ? T : e))(e, b)),
              (t = ((e, t) => (t ? (e === I ? F : e) : e === F ? I : e))(t, b)),
              (0, r.createElement)(
                a.FormStep,
                {
                  id: 'billing-fields',
                  disabled: u,
                  className: l()('wc-block-checkout__billing-fields', n),
                  title: e,
                  description: t,
                  showStepNumber: o,
                },
                (0, r.createElement)(k, {
                  showCompanyField: p,
                  requireCompanyField: m,
                  showApartmentField: g,
                  requireApartmentField: h,
                  showPhoneField: E,
                  requirePhoneField: f,
                }),
                s,
              ))
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
