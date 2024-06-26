(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3398],
  {
    4597: (e, t, o) => {
      'use strict';
      o.d(t, { l: () => L });
      var l = o(1609),
        n = o(4656),
        r = o(6087),
        s = o(7723),
        a = o(8537),
        i = o(9019),
        c = o.n(i),
        d = o(332),
        u = o(3993),
        p = o(7143),
        m = o(7594);
      o(1707);
      const g = ({
        id: e,
        className: t,
        label: o,
        onChange: a,
        options: i,
        value: g,
        required: h = !1,
        errorId: f,
        autoComplete: E = 'off',
        errorMessage: v = (0, s.__)('Please select a valid option', 'woocommerce'),
      }) => {
        const C = (0, r.useRef)(null),
          y = (0, r.useId)(),
          _ = e || 'control-' + y,
          b = f || _,
          { setValidationErrors: k, clearValidationError: A } = (0, p.useDispatch)(
            m.VALIDATION_STORE_KEY,
          ),
          { error: S, validationErrorId: w } = (0, p.useSelect)(e => {
            const t = e(m.VALIDATION_STORE_KEY);
            return { error: t.getValidationError(b), validationErrorId: t.getValidationErrorId(b) };
          });
        return (
          (0, r.useEffect)(
            () => (
              !h || g ? A(b) : k({ [b]: { message: v, hidden: !0 } }),
              () => {
                A(b);
              }
            ),
            [A, g, b, v, h, k],
          ),
          (0, l.createElement)(
            'div',
            {
              id: _,
              className: c()('wc-block-components-combobox', t, {
                'is-active': g,
                'has-error': (null == S ? void 0 : S.message) && !(null != S && S.hidden),
              }),
              ref: C,
            },
            (0, l.createElement)(d.A, {
              className: 'wc-block-components-combobox-control',
              label: o,
              onChange: a,
              onFilterValueChange: e => {
                if (e.length) {
                  const t = (0, u.isObject)(C.current)
                    ? C.current.ownerDocument.activeElement
                    : void 0;
                  if (t && (0, u.isObject)(C.current) && C.current.contains(t)) return;
                  const o = e.toLocaleUpperCase(),
                    l = i.find(e => e.value.toLocaleUpperCase() === o);
                  if (l) return void a(l.value);
                  const n = i.find(e => e.label.toLocaleUpperCase().startsWith(o));
                  n && a(n.value);
                }
              },
              options: i,
              value: g || '',
              allowReset: !1,
              autoComplete: E,
              'aria-invalid': (null == S ? void 0 : S.message) && !(null != S && S.hidden),
              'aria-errormessage': w,
            }),
            (0, l.createElement)(n.ValidationInputError, { propertyName: b }),
          )
        );
      };
      o(2931);
      const h = ({
        className: e,
        countries: t,
        id: o,
        label: n,
        onChange: i,
        value: d = '',
        autoComplete: u = 'off',
        required: p = !1,
        errorId: m,
        errorMessage: h = (0, s.__)('Please select a country', 'woocommerce'),
      }) => {
        const f = (0, r.useMemo)(
          () => Object.entries(t).map(([e, t]) => ({ value: e, label: (0, a.decodeEntities)(t) })),
          [t],
        );
        return (0, l.createElement)(
          'div',
          { className: c()(e, 'wc-block-components-country-input') },
          (0, l.createElement)(g, {
            id: o,
            label: n,
            onChange: i,
            options: f,
            value: d,
            errorId: m,
            errorMessage: h,
            required: p,
            autoComplete: u,
          }),
        );
      };
      var f = o(812);
      const E = e => (0, l.createElement)(h, { countries: f.AG, ...e }),
        v = e => (0, l.createElement)(h, { countries: f.G3, ...e });
      o(8824);
      const C = (e, t) => {
          const o = t.find(
            t =>
              t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
              t.value.toLocaleUpperCase() === e.toLocaleUpperCase(),
          );
          return o ? o.value : '';
        },
        y = ({
          className: e,
          id: t,
          states: o,
          country: i,
          label: d,
          onChange: u,
          autoComplete: p = 'off',
          value: m = '',
          required: h = !1,
          errorId: f = '',
        }) => {
          const E = o[i],
            v = (0, r.useMemo)(
              () =>
                E
                  ? Object.keys(E).map(e => ({ value: e, label: (0, a.decodeEntities)(E[e]) }))
                  : [],
              [E],
            ),
            y = (0, r.useCallback)(
              e => {
                const t = v.length > 0 ? C(e, v) : e;
                t !== m && u(t);
              },
              [u, v, m],
            ),
            _ = (0, r.useRef)(m);
          return (
            (0, r.useEffect)(() => {
              _.current !== m && (_.current = m);
            }, [m]),
            (0, r.useEffect)(() => {
              if (v.length > 0 && _.current) {
                const e = C(_.current, v);
                e !== _.current && y(e);
              }
            }, [v, y]),
            v.length > 0
              ? (0, l.createElement)(g, {
                  className: c()(e, 'wc-block-components-state-input'),
                  id: t,
                  label: d,
                  onChange: y,
                  options: v,
                  value: m,
                  errorMessage: (0, s.__)('Please select a state.', 'woocommerce'),
                  errorId: f,
                  required: h,
                  autoComplete: p,
                })
              : (0, l.createElement)(n.ValidatedTextInput, {
                  className: e,
                  id: t,
                  label: d,
                  onChange: y,
                  autoComplete: p,
                  value: m,
                  required: h,
                })
          );
        },
        _ = e => (0, l.createElement)(y, { states: f.uz, ...e }),
        b = e => (0, l.createElement)(y, { states: f.SL, ...e });
      var k = o(9491),
        A = o(1573),
        S = o(923),
        w = o.n(S),
        T = o(8585);
      var I = o(1e3),
        O = o(3832);
      const N = ({ field: e, props: t, onChange: o, value: a }) => {
          var i;
          const c = null !== (i = null == e ? void 0 : e.required) && void 0 !== i && i,
            [d, u] = (0, r.useState)(() => Boolean(a) || c);
          return (0, l.createElement)(
            r.Fragment,
            null,
            d
              ? (0, l.createElement)(n.ValidatedTextInput, {
                  ...t,
                  type: e.type,
                  label: c ? e.label : e.optionalLabel,
                  className: `wc-block-components-address-form__${e.key}`,
                  value: a,
                  onChange: t => o(e.key, t),
                })
              : (0, l.createElement)(
                  'button',
                  {
                    className: 'wc-block-components-address-form__address_2-toggle',
                    onClick: () => u(!0),
                  },
                  (0, s.sprintf)(
                    // translators: %s: address 2 field label.
                    // translators: %s: address 2 field label.
                    (0, s.__)('+ Add %s', 'woocommerce'),
                    e.label.toLowerCase(),
                  ),
                ),
          );
        },
        R = (e, t, o) => ({
          id: `${t}-${null == e ? void 0 : e.key}`.replaceAll('/', '-'),
          errorId: `${o}_${null == e ? void 0 : e.key}`,
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
        V = (e, t, o) => ({
          field: t.find(t => t.key === e),
          value: (0, u.objectHasProp)(o, e) ? o[e] : void 0,
        }),
        K = ({ formId: e, address1: t, address2: o, addressType: r, onChange: s }) => {
          var a, i, c, d;
          const u = t ? R(t.field, e, r) : void 0,
            p = o ? R(o.field, e, r) : void 0;
          return (0, l.createElement)(
            l.Fragment,
            null,
            t &&
              (0, l.createElement)(n.ValidatedTextInput, {
                ...u,
                type: null === (a = t.field) || void 0 === a ? void 0 : a.type,
                label: null === (i = t.field) || void 0 === i ? void 0 : i.label,
                className: `wc-block-components-address-form__${
                  null === (c = t.field) || void 0 === c ? void 0 : c.key
                }`,
                value: t.value,
                onChange: e => {
                  var o;
                  return s(null === (o = t.field) || void 0 === o ? void 0 : o.key, e);
                },
              }),
            (null == o ? void 0 : o.field) &&
              !(null != o && null !== (d = o.field) && void 0 !== d && d.hidden) &&
              (0, l.createElement)(N, {
                field: o.field,
                props: p,
                onChange: s,
                value: null == o ? void 0 : o.value,
              }),
          );
        },
        F = ({
          id: e = '',
          fields: t,
          fieldConfig: o = {},
          onChange: a,
          addressType: i = 'shipping',
          values: d,
          children: h,
        }) => {
          const f = (0, k.useInstanceId)(F),
            C = (0, A.c)(t),
            y = (0, A.c)(o),
            S = (0, A.c)((0, u.objectHasProp)(d, 'country') ? d.country : ''),
            N = (0, r.useMemo)(() => {
              const e = (0, T.A)(C, y, S);
              return {
                fields: e,
                addressType: i,
                required: e.filter(e => e.required),
                hidden: e.filter(e => e.hidden),
              };
            }, [C, y, S, i]),
            L = (0, r.useRef)({});
          return (
            (0, r.useEffect)(() => {
              const e = { ...d, ...Object.fromEntries(N.hidden.map(e => [e.key, ''])) };
              w()(d, e) || a(e);
            }, [a, N, d]),
            (0, r.useEffect)(() => {
              'shipping' === i &&
                (0, u.objectHasProp)(d, 'country') &&
                (e => {
                  const t = 'shipping_country',
                    o = (0, p.select)(m.VALIDATION_STORE_KEY).getValidationError(t);
                  !e.country &&
                    (e.city || e.state || e.postcode) &&
                    (o
                      ? (0, p.dispatch)(m.VALIDATION_STORE_KEY).showValidationError(t)
                      : (0, p.dispatch)(m.VALIDATION_STORE_KEY).setValidationErrors({
                          [t]: {
                            message: (0, s.__)('Please select your country', 'woocommerce'),
                            hidden: !1,
                          },
                        })),
                    o &&
                      e.country &&
                      (0, p.dispatch)(m.VALIDATION_STORE_KEY).clearValidationError(t);
                })(d);
            }, [d, i]),
            (0, r.useEffect)(() => {
              var e, t;
              null === (e = L.current) ||
                void 0 === e ||
                null === (t = e.postcode) ||
                void 0 === t ||
                t.revalidate();
            }, [S]),
            (e = e || `${f}`),
            (0, l.createElement)(
              'div',
              { id: e, className: 'wc-block-components-address-form' },
              N.fields.map(t => {
                if (t.hidden) return null;
                const o = R(t, e, i);
                if (
                  ('email' === t.key && ((o.id = 'email'), (o.errorId = 'billing_email')),
                  'checkbox' === t.type)
                )
                  return (0, l.createElement)(n.CheckboxControl, {
                    key: t.key,
                    checked: Boolean(d[t.key]),
                    onChange: e => {
                      a({ ...d, [t.key]: e });
                    },
                    ...o,
                  });
                if ('address_1' === t.key) {
                  const o = V('address_1', N.fields, d),
                    n = V('address_2', N.fields, d);
                  return (0, l.createElement)(K, {
                    address1: o,
                    address2: n,
                    addressType: i,
                    formId: e,
                    key: t.key,
                    onChange: (e, t) => {
                      a({ ...d, [e]: t });
                    },
                  });
                }
                if ('address_2' === t.key) return null;
                if ('country' === t.key && (0, u.objectHasProp)(d, 'country')) {
                  const e = 'shipping' === i ? v : E;
                  return (0, l.createElement)(e, {
                    key: t.key,
                    ...o,
                    value: d.country,
                    onChange: e => {
                      a({ ...d, country: e, state: '', postcode: '' });
                    },
                  });
                }
                if ('state' === t.key && (0, u.objectHasProp)(d, 'state')) {
                  const e = 'shipping' === i ? b : _;
                  return (0, l.createElement)(e, {
                    key: t.key,
                    ...o,
                    country: d.country,
                    value: d.state,
                    onChange: e => a({ ...d, state: e }),
                  });
                }
                return 'select' === t.type
                  ? void 0 === t.options
                    ? null
                    : (0, l.createElement)(g, {
                        key: t.key,
                        ...o,
                        className: c()(
                          'wc-block-components-select-input',
                          `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                        ),
                        value: d[t.key],
                        onChange: e => {
                          a({ ...d, [t.key]: e });
                        },
                        options: t.options,
                      })
                  : (0, l.createElement)(n.ValidatedTextInput, {
                      key: t.key,
                      ref: e => (L.current[t.key] = e),
                      ...o,
                      type: t.type,
                      value: d[t.key],
                      onChange: e => a({ ...d, [t.key]: e }),
                      customFormatter: e =>
                        'postcode' === t.key ? e.trimStart().toUpperCase() : e,
                      customValidation: e =>
                        ((e, t, o) =>
                          !(
                            (e.required || e.value) &&
                            ('postcode' === t &&
                            o &&
                            !(0, I.isPostcode)({ postcode: e.value, country: o })
                              ? (e.setCustomValidity(
                                  (0, s.__)('Please enter a valid postcode', 'woocommerce'),
                                ),
                                1)
                              : 'email' === t &&
                                !(0, O.isEmail)(e.value) &&
                                (e.setCustomValidity(
                                  (0, s.__)('Please enter a valid email address', 'woocommerce'),
                                ),
                                1))
                          ))(e, t.key, (0, u.objectHasProp)(d, 'country') ? d.country : ''),
                    });
              }),
              h,
            )
          );
        },
        L = F;
    },
    5251: (e, t, o) => {
      'use strict';
      o.d(t, { C: () => c });
      var l = o(5703),
        n = o(6087),
        r = o(7143),
        s = o(7594),
        a = o(4107),
        i = o(4958);
      const c = () => {
        const { needsShipping: e } = (0, i.m)(),
          { useShippingAsBilling: t, prefersCollection: o } = (0, r.useSelect)(e => ({
            useShippingAsBilling: e(s.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),
            prefersCollection: e(s.CHECKOUT_STORE_KEY).prefersCollection(),
          })),
          { __internalSetUseShippingAsBilling: c } = (0, r.useDispatch)(s.CHECKOUT_STORE_KEY),
          {
            billingAddress: d,
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
          h = (0, l.getSetting)('forcedBillingAddress', !1);
        return {
          shippingAddress: p,
          billingAddress: d,
          setShippingAddress: m,
          setBillingAddress: u,
          setEmail: g,
          defaultFields: l.defaultFields,
          useShippingAsBilling: t,
          setUseShippingAsBilling: c,
          needsShipping: e,
          showShippingFields: !h && e && !o,
          showShippingMethods: e && !o,
          showBillingFields: !e || !t || !!o,
          forcedBillingAddress: h,
          useBillingAsShipping: h || !!o,
        };
      };
    },
    4107: (e, t, o) => {
      'use strict';
      o.d(t, { q: () => r });
      var l = o(7143),
        n = o(7594);
      const r = () => {
        const { customerData: e, isInitialized: t } = (0, l.useSelect)(e => {
            const t = e(n.CART_STORE_KEY);
            return {
              customerData: t.getCustomerData(),
              isInitialized: t.hasFinishedResolution('getCartData'),
            };
          }),
          { setShippingAddress: o, setBillingAddress: r } = (0, l.useDispatch)(n.CART_STORE_KEY);
        return {
          isInitialized: t,
          billingAddress: e.billingAddress,
          shippingAddress: e.shippingAddress,
          setBillingAddress: r,
          setShippingAddress: o,
        };
      };
    },
    1573: (e, t, o) => {
      'use strict';
      o.d(t, { c: () => s });
      var l = o(6087),
        n = o(923),
        r = o.n(n);
      function s(e) {
        const t = (0, l.useRef)(e);
        return r()(e, t.current) || (t.current = e), t.current;
      }
    },
    9017: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => n });
      var l = o(7723);
      const n = ({
        defaultTitle: e = (0, l.__)('Step', 'woocommerce'),
        defaultDescription: t = (0, l.__)('Step description text.', 'woocommerce'),
        defaultShowStepNumber: o = !0,
      }) => ({
        title: { type: 'string', default: e },
        description: { type: 'string', default: t },
        showStepNumber: { type: 'boolean', default: o },
      });
    },
    6994: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => b });
      var l = o(1609),
        n = o(9019),
        r = o.n(n),
        s = o(1616),
        a = o(4656),
        i = o(7143),
        c = o(7594),
        d = o(9292),
        u = o(7723),
        p = o(5251),
        m = o(3603),
        g = o(2379),
        h = o(5703),
        f = o(812),
        E = o(4597);
      const v = () => {
          const { customerId: e, shouldCreateAccount: t, additionalFields: o } = (0, i.useSelect)(
              e => {
                const t = e(c.CHECKOUT_STORE_KEY);
                return {
                  customerId: t.getCustomerId(),
                  shouldCreateAccount: t.getShouldCreateAccount(),
                  additionalFields: t.getAdditionalFields(),
                };
              },
            ),
            { __internalSetShouldCreateAccount: n, setAdditionalFields: r } = (0, i.useDispatch)(
              c.CHECKOUT_STORE_KEY,
            ),
            { billingAddress: s, setEmail: d } = (0, p.C)(),
            { dispatchCheckoutEvent: v } = (0, m.y)(),
            C =
              !e &&
              (0, h.getSetting)('checkoutAllowsGuest', !1) &&
              (0, h.getSetting)('checkoutAllowsSignup', !1) &&
              (0, l.createElement)(a.CheckboxControl, {
                className: 'wc-block-checkout__create-account',
                label: (0, u.__)('Create an account?', 'woocommerce'),
                checked: t,
                onChange: e => n(e),
              }),
            y = { email: s.email, ...o };
          return (0, l.createElement)(
            l.Fragment,
            null,
            (0, l.createElement)(a.StoreNoticesContainer, { context: g.tG.CONTACT_INFORMATION }),
            (0, l.createElement)(
              E.l,
              {
                id: 'contact',
                addressType: 'contact',
                onChange: e => {
                  const { email: t, ...o } = e;
                  d(t), v('set-email-address'), r(o);
                },
                values: y,
                fields: f.fO,
              },
              C,
            ),
          );
        },
        C = {
          ...(0, o(9017).A)({
            defaultTitle: (0, u.__)('Contact information', 'woocommerce'),
            defaultDescription: (0, u.__)(
              "We'll use this email to send you details and updates about your order.",
              'woocommerce',
            ),
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { remove: !0, move: !0 } },
        },
        y = `${f.aW}?redirect_to=${encodeURIComponent(window.location.href)}`,
        _ = () => {
          const e = (0, i.useSelect)(e => e(c.CHECKOUT_STORE_KEY).getCustomerId());
          return !(0, h.getSetting)('checkoutShowLoginReminder', !0) || e
            ? null
            : (0, l.createElement)(
                l.Fragment,
                null,
                (0, u.__)('Already have an account? ', 'woocommerce'),
                (0, l.createElement)('a', { href: y }, (0, u.__)('Log in.', 'woocommerce')),
              );
        },
        b = (0, s.withFilteredAttributes)(C)(
          ({ title: e, description: t, children: o, className: n }) => {
            const s = (0, i.useSelect)(e => e(c.CHECKOUT_STORE_KEY).isProcessing()),
              { showFormStepNumbers: u } = (0, d.Oy)();
            return (0, l.createElement)(
              a.FormStep,
              {
                id: 'contact-fields',
                disabled: s,
                className: r()('wc-block-checkout__contact-fields', n),
                title: e,
                description: t,
                showStepNumber: u,
                stepHeadingContent: () => (0, l.createElement)(_, null),
              },
              (0, l.createElement)(v, null),
              o,
            );
          },
        );
    },
    1707: () => {},
    2931: () => {},
    8824: () => {},
  },
]);
