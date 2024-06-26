(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [2227],
  {
    4597: (e, t, o) => {
      'use strict';
      o.d(t, { l: () => P });
      var r = o(1609),
        l = o(4656),
        a = o(6087),
        n = o(7723),
        s = o(8537),
        i = o(9019),
        c = o.n(i),
        d = o(332),
        u = o(3993),
        p = o(7143),
        m = o(7594);
      o(1707);
      const f = ({
        id: e,
        className: t,
        label: o,
        onChange: s,
        options: i,
        value: f,
        required: v = !1,
        errorId: y,
        autoComplete: E = 'off',
        errorMessage: b = (0, n.__)('Please select a valid option', 'woocommerce'),
      }) => {
        const k = (0, a.useRef)(null),
          h = (0, a.useId)(),
          g = e || 'control-' + h,
          _ = y || g,
          { setValidationErrors: C, clearValidationError: w } = (0, p.useDispatch)(
            m.VALIDATION_STORE_KEY,
          ),
          { error: I, validationErrorId: N } = (0, p.useSelect)(e => {
            const t = e(m.VALIDATION_STORE_KEY);
            return { error: t.getValidationError(_), validationErrorId: t.getValidationErrorId(_) };
          });
        return (
          (0, a.useEffect)(
            () => (
              !v || f ? w(_) : C({ [_]: { message: b, hidden: !0 } }),
              () => {
                w(_);
              }
            ),
            [w, f, _, b, v, C],
          ),
          (0, r.createElement)(
            'div',
            {
              id: g,
              className: c()('wc-block-components-combobox', t, {
                'is-active': f,
                'has-error': (null == I ? void 0 : I.message) && !(null != I && I.hidden),
              }),
              ref: k,
            },
            (0, r.createElement)(d.A, {
              className: 'wc-block-components-combobox-control',
              label: o,
              onChange: s,
              onFilterValueChange: e => {
                if (e.length) {
                  const t = (0, u.isObject)(k.current)
                    ? k.current.ownerDocument.activeElement
                    : void 0;
                  if (t && (0, u.isObject)(k.current) && k.current.contains(t)) return;
                  const o = e.toLocaleUpperCase(),
                    r = i.find(e => e.value.toLocaleUpperCase() === o);
                  if (r) return void s(r.value);
                  const l = i.find(e => e.label.toLocaleUpperCase().startsWith(o));
                  l && s(l.value);
                }
              },
              options: i,
              value: f || '',
              allowReset: !1,
              autoComplete: E,
              'aria-invalid': (null == I ? void 0 : I.message) && !(null != I && I.hidden),
              'aria-errormessage': N,
            }),
            (0, r.createElement)(l.ValidationInputError, { propertyName: _ }),
          )
        );
      };
      o(2931);
      const v = ({
        className: e,
        countries: t,
        id: o,
        label: l,
        onChange: i,
        value: d = '',
        autoComplete: u = 'off',
        required: p = !1,
        errorId: m,
        errorMessage: v = (0, n.__)('Please select a country', 'woocommerce'),
      }) => {
        const y = (0, a.useMemo)(
          () => Object.entries(t).map(([e, t]) => ({ value: e, label: (0, s.decodeEntities)(t) })),
          [t],
        );
        return (0, r.createElement)(
          'div',
          { className: c()(e, 'wc-block-components-country-input') },
          (0, r.createElement)(f, {
            id: o,
            label: l,
            onChange: i,
            options: y,
            value: d,
            errorId: m,
            errorMessage: v,
            required: p,
            autoComplete: u,
          }),
        );
      };
      var y = o(812);
      const E = e => (0, r.createElement)(v, { countries: y.AG, ...e }),
        b = e => (0, r.createElement)(v, { countries: y.G3, ...e });
      o(8824);
      const k = (e, t) => {
          const o = t.find(
            t =>
              t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
              t.value.toLocaleUpperCase() === e.toLocaleUpperCase(),
          );
          return o ? o.value : '';
        },
        h = ({
          className: e,
          id: t,
          states: o,
          country: i,
          label: d,
          onChange: u,
          autoComplete: p = 'off',
          value: m = '',
          required: v = !1,
          errorId: y = '',
        }) => {
          const E = o[i],
            b = (0, a.useMemo)(
              () =>
                E
                  ? Object.keys(E).map(e => ({ value: e, label: (0, s.decodeEntities)(E[e]) }))
                  : [],
              [E],
            ),
            h = (0, a.useCallback)(
              e => {
                const t = b.length > 0 ? k(e, b) : e;
                t !== m && u(t);
              },
              [u, b, m],
            ),
            g = (0, a.useRef)(m);
          return (
            (0, a.useEffect)(() => {
              g.current !== m && (g.current = m);
            }, [m]),
            (0, a.useEffect)(() => {
              if (b.length > 0 && g.current) {
                const e = k(g.current, b);
                e !== g.current && h(e);
              }
            }, [b, h]),
            b.length > 0
              ? (0, r.createElement)(f, {
                  className: c()(e, 'wc-block-components-state-input'),
                  id: t,
                  label: d,
                  onChange: h,
                  options: b,
                  value: m,
                  errorMessage: (0, n.__)('Please select a state.', 'woocommerce'),
                  errorId: y,
                  required: v,
                  autoComplete: p,
                })
              : (0, r.createElement)(l.ValidatedTextInput, {
                  className: e,
                  id: t,
                  label: d,
                  onChange: h,
                  autoComplete: p,
                  value: m,
                  required: v,
                })
          );
        },
        g = e => (0, r.createElement)(h, { states: y.uz, ...e }),
        _ = e => (0, r.createElement)(h, { states: y.SL, ...e });
      var C = o(9491),
        w = o(1573),
        I = o(923),
        N = o.n(I),
        T = o(8585);
      var O = o(1e3),
        A = o(3832);
      const S = ({ field: e, props: t, onChange: o, value: s }) => {
          var i;
          const c = null !== (i = null == e ? void 0 : e.required) && void 0 !== i && i,
            [d, u] = (0, a.useState)(() => Boolean(s) || c);
          return (0, r.createElement)(
            a.Fragment,
            null,
            d
              ? (0, r.createElement)(l.ValidatedTextInput, {
                  ...t,
                  type: e.type,
                  label: c ? e.label : e.optionalLabel,
                  className: `wc-block-components-address-form__${e.key}`,
                  value: s,
                  onChange: t => o(e.key, t),
                })
              : (0, r.createElement)(
                  'button',
                  {
                    className: 'wc-block-components-address-form__address_2-toggle',
                    onClick: () => u(!0),
                  },
                  (0, n.sprintf)(
                    // translators: %s: address 2 field label.
                    // translators: %s: address 2 field label.
                    (0, n.__)('+ Add %s', 'woocommerce'),
                    e.label.toLowerCase(),
                  ),
                ),
          );
        },
        V = (e, t, o) => ({
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
        L = (e, t, o) => ({
          field: t.find(t => t.key === e),
          value: (0, u.objectHasProp)(o, e) ? o[e] : void 0,
        }),
        R = ({ formId: e, address1: t, address2: o, addressType: a, onChange: n }) => {
          var s, i, c, d;
          const u = t ? V(t.field, e, a) : void 0,
            p = o ? V(o.field, e, a) : void 0;
          return (0, r.createElement)(
            r.Fragment,
            null,
            t &&
              (0, r.createElement)(l.ValidatedTextInput, {
                ...u,
                type: null === (s = t.field) || void 0 === s ? void 0 : s.type,
                label: null === (i = t.field) || void 0 === i ? void 0 : i.label,
                className: `wc-block-components-address-form__${
                  null === (c = t.field) || void 0 === c ? void 0 : c.key
                }`,
                value: t.value,
                onChange: e => {
                  var o;
                  return n(null === (o = t.field) || void 0 === o ? void 0 : o.key, e);
                },
              }),
            (null == o ? void 0 : o.field) &&
              !(null != o && null !== (d = o.field) && void 0 !== d && d.hidden) &&
              (0, r.createElement)(S, {
                field: o.field,
                props: p,
                onChange: n,
                value: null == o ? void 0 : o.value,
              }),
          );
        },
        F = ({
          id: e = '',
          fields: t,
          fieldConfig: o = {},
          onChange: s,
          addressType: i = 'shipping',
          values: d,
          children: v,
        }) => {
          const y = (0, C.useInstanceId)(F),
            k = (0, w.c)(t),
            h = (0, w.c)(o),
            I = (0, w.c)((0, u.objectHasProp)(d, 'country') ? d.country : ''),
            S = (0, a.useMemo)(() => {
              const e = (0, T.A)(k, h, I);
              return {
                fields: e,
                addressType: i,
                required: e.filter(e => e.required),
                hidden: e.filter(e => e.hidden),
              };
            }, [k, h, I, i]),
            P = (0, a.useRef)({});
          return (
            (0, a.useEffect)(() => {
              const e = { ...d, ...Object.fromEntries(S.hidden.map(e => [e.key, ''])) };
              N()(d, e) || s(e);
            }, [s, S, d]),
            (0, a.useEffect)(() => {
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
                            message: (0, n.__)('Please select your country', 'woocommerce'),
                            hidden: !1,
                          },
                        })),
                    o &&
                      e.country &&
                      (0, p.dispatch)(m.VALIDATION_STORE_KEY).clearValidationError(t);
                })(d);
            }, [d, i]),
            (0, a.useEffect)(() => {
              var e, t;
              null === (e = P.current) ||
                void 0 === e ||
                null === (t = e.postcode) ||
                void 0 === t ||
                t.revalidate();
            }, [I]),
            (e = e || `${y}`),
            (0, r.createElement)(
              'div',
              { id: e, className: 'wc-block-components-address-form' },
              S.fields.map(t => {
                if (t.hidden) return null;
                const o = V(t, e, i);
                if (
                  ('email' === t.key && ((o.id = 'email'), (o.errorId = 'billing_email')),
                  'checkbox' === t.type)
                )
                  return (0, r.createElement)(l.CheckboxControl, {
                    key: t.key,
                    checked: Boolean(d[t.key]),
                    onChange: e => {
                      s({ ...d, [t.key]: e });
                    },
                    ...o,
                  });
                if ('address_1' === t.key) {
                  const o = L('address_1', S.fields, d),
                    l = L('address_2', S.fields, d);
                  return (0, r.createElement)(R, {
                    address1: o,
                    address2: l,
                    addressType: i,
                    formId: e,
                    key: t.key,
                    onChange: (e, t) => {
                      s({ ...d, [e]: t });
                    },
                  });
                }
                if ('address_2' === t.key) return null;
                if ('country' === t.key && (0, u.objectHasProp)(d, 'country')) {
                  const e = 'shipping' === i ? b : E;
                  return (0, r.createElement)(e, {
                    key: t.key,
                    ...o,
                    value: d.country,
                    onChange: e => {
                      s({ ...d, country: e, state: '', postcode: '' });
                    },
                  });
                }
                if ('state' === t.key && (0, u.objectHasProp)(d, 'state')) {
                  const e = 'shipping' === i ? _ : g;
                  return (0, r.createElement)(e, {
                    key: t.key,
                    ...o,
                    country: d.country,
                    value: d.state,
                    onChange: e => s({ ...d, state: e }),
                  });
                }
                return 'select' === t.type
                  ? void 0 === t.options
                    ? null
                    : (0, r.createElement)(f, {
                        key: t.key,
                        ...o,
                        className: c()(
                          'wc-block-components-select-input',
                          `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                        ),
                        value: d[t.key],
                        onChange: e => {
                          s({ ...d, [t.key]: e });
                        },
                        options: t.options,
                      })
                  : (0, r.createElement)(l.ValidatedTextInput, {
                      key: t.key,
                      ref: e => (P.current[t.key] = e),
                      ...o,
                      type: t.type,
                      value: d[t.key],
                      onChange: e => s({ ...d, [t.key]: e }),
                      customFormatter: e =>
                        'postcode' === t.key ? e.trimStart().toUpperCase() : e,
                      customValidation: e =>
                        ((e, t, o) =>
                          !(
                            (e.required || e.value) &&
                            ('postcode' === t &&
                            o &&
                            !(0, O.isPostcode)({ postcode: e.value, country: o })
                              ? (e.setCustomValidity(
                                  (0, n.__)('Please enter a valid postcode', 'woocommerce'),
                                ),
                                1)
                              : 'email' === t &&
                                !(0, A.isEmail)(e.value) &&
                                (e.setCustomValidity(
                                  (0, n.__)('Please enter a valid email address', 'woocommerce'),
                                ),
                                1))
                          ))(e, t.key, (0, u.objectHasProp)(d, 'country') ? d.country : ''),
                    });
              }),
              v,
            )
          );
        },
        P = F;
    },
    1573: (e, t, o) => {
      'use strict';
      o.d(t, { c: () => n });
      var r = o(6087),
        l = o(923),
        a = o.n(l);
      function n(e) {
        const t = (0, r.useRef)(e);
        return a()(e, t.current) || (t.current = e), t.current;
      }
    },
    9017: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => l });
      var r = o(7723);
      const l = ({
        defaultTitle: e = (0, r.__)('Step', 'woocommerce'),
        defaultDescription: t = (0, r.__)('Step description text.', 'woocommerce'),
        defaultShowStepNumber: o = !0,
      }) => ({
        title: { type: 'string', default: e },
        description: { type: 'string', default: t },
        showStepNumber: { type: 'boolean', default: o },
      });
    },
    7912: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => E });
      var r = o(1609),
        l = o(9019),
        a = o.n(l),
        n = o(4656),
        s = o(812),
        i = o(7143),
        c = o(7594),
        d = o(1616),
        u = o(9292),
        p = o(2379),
        m = o(4597);
      const f = () => {
        const { additionalFields: e } = (0, i.useSelect)(e => ({
            additionalFields: e(c.CHECKOUT_STORE_KEY).getAdditionalFields(),
          })),
          { setAdditionalFields: t } = (0, i.useDispatch)(c.CHECKOUT_STORE_KEY),
          o = { ...e };
        return 0 === s.pt.length
          ? null
          : (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(n.StoreNoticesContainer, { context: p.tG.ORDER_INFORMATION }),
              (0, r.createElement)(m.l, {
                id: 'additional-information',
                addressType: 'additional-information',
                onChange: e => {
                  t(e);
                },
                values: o,
                fields: s.pt,
              }),
            );
      };
      var v = o(7723);
      const y = {
          ...(0, o(9017).A)({
            defaultTitle: (0, v.__)('Additional order information', 'woocommerce'),
            defaultDescription: '',
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !1, remove: !0 } },
        },
        E = (0, d.withFilteredAttributes)(y)(
          ({ title: e, description: t, children: o, className: l }) => {
            const { showFormStepNumbers: d } = (0, u.Oy)(),
              p = (0, i.useSelect)(e => e(c.CHECKOUT_STORE_KEY).isProcessing());
            return 0 === s.pt.length
              ? null
              : (0, r.createElement)(
                  n.FormStep,
                  {
                    id: 'additional-information-fields',
                    disabled: p,
                    className: a()('wc-block-checkout__additional-information-fields', l),
                    title: e,
                    description: t,
                    showStepNumber: d,
                  },
                  (0, r.createElement)(f, null),
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
