(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [9837],
  {
    4845: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => d });
      var o = n(1609),
        a = n(8165),
        s = n(6087),
        r = n(9019),
        c = n.n(r),
        l = n(4040),
        i = n.n(l),
        p = (n(2080), n(8730));
      const d = (0, s.forwardRef)((e, t) => {
        'showSpinner' in e &&
          i()('showSpinner prop', {
            version: '8.9.0',
            alternative: 'Render a spinner in the button children instead.',
            plugin: 'WooCommerce',
          });
        const {
            className: n,
            showSpinner: s = !1,
            children: r,
            variant: l = 'contained',
            removeTextWrap: d = !1,
            ...u
          } = e,
          m = c()('wc-block-components-button', 'wp-element-button', n, l, {
            'wc-block-components-button--loading': s,
          });
        if ('href' in e)
          return (0, o.createElement)(a.$, {
            render: (0, o.createElement)(
              'a',
              { ref: t, href: e.href },
              s && (0, o.createElement)(p.A, null),
              (0, o.createElement)('span', { className: 'wc-block-components-button__text' }, r),
            ),
            className: m,
            ...u,
          });
        const g = d
          ? e.children
          : (0, o.createElement)(
              'span',
              { className: 'wc-block-components-button__text' },
              e.children,
            );
        return (0, o.createElement)(
          a.$,
          { ref: t, className: m, ...u },
          s && (0, o.createElement)(p.A, null),
          g,
        );
      });
    },
    4597: (e, t, n) => {
      'use strict';
      n.d(t, { l: () => D });
      var o = n(1609),
        a = n(4656),
        s = n(6087),
        r = n(7723),
        c = n(8537),
        l = n(9019),
        i = n.n(l),
        p = n(332),
        d = n(3993),
        u = n(7143),
        m = n(7594);
      n(1707);
      const g = ({
        id: e,
        className: t,
        label: n,
        onChange: c,
        options: l,
        value: g,
        required: h = !1,
        errorId: _,
        autoComplete: v = 'off',
        errorMessage: E = (0, r.__)('Please select a valid option', 'woocommerce'),
      }) => {
        const b = (0, s.useRef)(null),
          f = (0, s.useId)(),
          k = e || 'control-' + f,
          w = _ || k,
          { setValidationErrors: C, clearValidationError: y } = (0, u.useDispatch)(
            m.VALIDATION_STORE_KEY,
          ),
          { error: A, validationErrorId: I } = (0, u.useSelect)(e => {
            const t = e(m.VALIDATION_STORE_KEY);
            return { error: t.getValidationError(w), validationErrorId: t.getValidationErrorId(w) };
          });
        return (
          (0, s.useEffect)(
            () => (
              !h || g ? y(w) : C({ [w]: { message: E, hidden: !0 } }),
              () => {
                y(w);
              }
            ),
            [y, g, w, E, h, C],
          ),
          (0, o.createElement)(
            'div',
            {
              id: k,
              className: i()('wc-block-components-combobox', t, {
                'is-active': g,
                'has-error': (null == A ? void 0 : A.message) && !(null != A && A.hidden),
              }),
              ref: b,
            },
            (0, o.createElement)(p.A, {
              className: 'wc-block-components-combobox-control',
              label: n,
              onChange: c,
              onFilterValueChange: e => {
                if (e.length) {
                  const t = (0, d.isObject)(b.current)
                    ? b.current.ownerDocument.activeElement
                    : void 0;
                  if (t && (0, d.isObject)(b.current) && b.current.contains(t)) return;
                  const n = e.toLocaleUpperCase(),
                    o = l.find(e => e.value.toLocaleUpperCase() === n);
                  if (o) return void c(o.value);
                  const a = l.find(e => e.label.toLocaleUpperCase().startsWith(n));
                  a && c(a.value);
                }
              },
              options: l,
              value: g || '',
              allowReset: !1,
              autoComplete: v,
              'aria-invalid': (null == A ? void 0 : A.message) && !(null != A && A.hidden),
              'aria-errormessage': I,
            }),
            (0, o.createElement)(a.ValidationInputError, { propertyName: w }),
          )
        );
      };
      n(2931);
      const h = ({
        className: e,
        countries: t,
        id: n,
        label: a,
        onChange: l,
        value: p = '',
        autoComplete: d = 'off',
        required: u = !1,
        errorId: m,
        errorMessage: h = (0, r.__)('Please select a country', 'woocommerce'),
      }) => {
        const _ = (0, s.useMemo)(
          () => Object.entries(t).map(([e, t]) => ({ value: e, label: (0, c.decodeEntities)(t) })),
          [t],
        );
        return (0, o.createElement)(
          'div',
          { className: i()(e, 'wc-block-components-country-input') },
          (0, o.createElement)(g, {
            id: n,
            label: a,
            onChange: l,
            options: _,
            value: p,
            errorId: m,
            errorMessage: h,
            required: u,
            autoComplete: d,
          }),
        );
      };
      var _ = n(812);
      const v = e => (0, o.createElement)(h, { countries: _.AG, ...e }),
        E = e => (0, o.createElement)(h, { countries: _.G3, ...e });
      n(8824);
      const b = (e, t) => {
          const n = t.find(
            t =>
              t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
              t.value.toLocaleUpperCase() === e.toLocaleUpperCase(),
          );
          return n ? n.value : '';
        },
        f = ({
          className: e,
          id: t,
          states: n,
          country: l,
          label: p,
          onChange: d,
          autoComplete: u = 'off',
          value: m = '',
          required: h = !1,
          errorId: _ = '',
        }) => {
          const v = n[l],
            E = (0, s.useMemo)(
              () =>
                v
                  ? Object.keys(v).map(e => ({ value: e, label: (0, c.decodeEntities)(v[e]) }))
                  : [],
              [v],
            ),
            f = (0, s.useCallback)(
              e => {
                const t = E.length > 0 ? b(e, E) : e;
                t !== m && d(t);
              },
              [d, E, m],
            ),
            k = (0, s.useRef)(m);
          return (
            (0, s.useEffect)(() => {
              k.current !== m && (k.current = m);
            }, [m]),
            (0, s.useEffect)(() => {
              if (E.length > 0 && k.current) {
                const e = b(k.current, E);
                e !== k.current && f(e);
              }
            }, [E, f]),
            E.length > 0
              ? (0, o.createElement)(g, {
                  className: i()(e, 'wc-block-components-state-input'),
                  id: t,
                  label: p,
                  onChange: f,
                  options: E,
                  value: m,
                  errorMessage: (0, r.__)('Please select a state.', 'woocommerce'),
                  errorId: _,
                  required: h,
                  autoComplete: u,
                })
              : (0, o.createElement)(a.ValidatedTextInput, {
                  className: e,
                  id: t,
                  label: p,
                  onChange: f,
                  autoComplete: u,
                  value: m,
                  required: h,
                })
          );
        },
        k = e => (0, o.createElement)(f, { states: _.uz, ...e }),
        w = e => (0, o.createElement)(f, { states: _.SL, ...e });
      var C = n(9491),
        y = n(1573),
        A = n(923),
        I = n.n(A),
        S = n(8585);
      var N = n(1e3),
        R = n(3832);
      const O = ({ field: e, props: t, onChange: n, value: c }) => {
          var l;
          const i = null !== (l = null == e ? void 0 : e.required) && void 0 !== l && l,
            [p, d] = (0, s.useState)(() => Boolean(c) || i);
          return (0, o.createElement)(
            s.Fragment,
            null,
            p
              ? (0, o.createElement)(a.ValidatedTextInput, {
                  ...t,
                  type: e.type,
                  label: i ? e.label : e.optionalLabel,
                  className: `wc-block-components-address-form__${e.key}`,
                  value: c,
                  onChange: t => n(e.key, t),
                })
              : (0, o.createElement)(
                  'button',
                  {
                    className: 'wc-block-components-address-form__address_2-toggle',
                    onClick: () => d(!0),
                  },
                  (0, r.sprintf)(
                    // translators: %s: address 2 field label.
                    // translators: %s: address 2 field label.
                    (0, r.__)('+ Add %s', 'woocommerce'),
                    e.label.toLowerCase(),
                  ),
                ),
          );
        },
        T = (e, t, n) => ({
          id: `${t}-${null == e ? void 0 : e.key}`.replaceAll('/', '-'),
          errorId: `${n}_${null == e ? void 0 : e.key}`,
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
        x = (e, t, n) => ({
          field: t.find(t => t.key === e),
          value: (0, d.objectHasProp)(n, e) ? n[e] : void 0,
        }),
        L = ({ formId: e, address1: t, address2: n, addressType: s, onChange: r }) => {
          var c, l, i, p;
          const d = t ? T(t.field, e, s) : void 0,
            u = n ? T(n.field, e, s) : void 0;
          return (0, o.createElement)(
            o.Fragment,
            null,
            t &&
              (0, o.createElement)(a.ValidatedTextInput, {
                ...d,
                type: null === (c = t.field) || void 0 === c ? void 0 : c.type,
                label: null === (l = t.field) || void 0 === l ? void 0 : l.label,
                className: `wc-block-components-address-form__${
                  null === (i = t.field) || void 0 === i ? void 0 : i.key
                }`,
                value: t.value,
                onChange: e => {
                  var n;
                  return r(null === (n = t.field) || void 0 === n ? void 0 : n.key, e);
                },
              }),
            (null == n ? void 0 : n.field) &&
              !(null != n && null !== (p = n.field) && void 0 !== p && p.hidden) &&
              (0, o.createElement)(O, {
                field: n.field,
                props: u,
                onChange: r,
                value: null == n ? void 0 : n.value,
              }),
          );
        },
        V = ({
          id: e = '',
          fields: t,
          fieldConfig: n = {},
          onChange: c,
          addressType: l = 'shipping',
          values: p,
          children: h,
        }) => {
          const _ = (0, C.useInstanceId)(V),
            b = (0, y.c)(t),
            f = (0, y.c)(n),
            A = (0, y.c)((0, d.objectHasProp)(p, 'country') ? p.country : ''),
            O = (0, s.useMemo)(() => {
              const e = (0, S.A)(b, f, A);
              return {
                fields: e,
                addressType: l,
                required: e.filter(e => e.required),
                hidden: e.filter(e => e.hidden),
              };
            }, [b, f, A, l]),
            D = (0, s.useRef)({});
          return (
            (0, s.useEffect)(() => {
              const e = { ...p, ...Object.fromEntries(O.hidden.map(e => [e.key, ''])) };
              I()(p, e) || c(e);
            }, [c, O, p]),
            (0, s.useEffect)(() => {
              'shipping' === l &&
                (0, d.objectHasProp)(p, 'country') &&
                (e => {
                  const t = 'shipping_country',
                    n = (0, u.select)(m.VALIDATION_STORE_KEY).getValidationError(t);
                  !e.country &&
                    (e.city || e.state || e.postcode) &&
                    (n
                      ? (0, u.dispatch)(m.VALIDATION_STORE_KEY).showValidationError(t)
                      : (0, u.dispatch)(m.VALIDATION_STORE_KEY).setValidationErrors({
                          [t]: {
                            message: (0, r.__)('Please select your country', 'woocommerce'),
                            hidden: !1,
                          },
                        })),
                    n &&
                      e.country &&
                      (0, u.dispatch)(m.VALIDATION_STORE_KEY).clearValidationError(t);
                })(p);
            }, [p, l]),
            (0, s.useEffect)(() => {
              var e, t;
              null === (e = D.current) ||
                void 0 === e ||
                null === (t = e.postcode) ||
                void 0 === t ||
                t.revalidate();
            }, [A]),
            (e = e || `${_}`),
            (0, o.createElement)(
              'div',
              { id: e, className: 'wc-block-components-address-form' },
              O.fields.map(t => {
                if (t.hidden) return null;
                const n = T(t, e, l);
                if (
                  ('email' === t.key && ((n.id = 'email'), (n.errorId = 'billing_email')),
                  'checkbox' === t.type)
                )
                  return (0, o.createElement)(a.CheckboxControl, {
                    key: t.key,
                    checked: Boolean(p[t.key]),
                    onChange: e => {
                      c({ ...p, [t.key]: e });
                    },
                    ...n,
                  });
                if ('address_1' === t.key) {
                  const n = x('address_1', O.fields, p),
                    a = x('address_2', O.fields, p);
                  return (0, o.createElement)(L, {
                    address1: n,
                    address2: a,
                    addressType: l,
                    formId: e,
                    key: t.key,
                    onChange: (e, t) => {
                      c({ ...p, [e]: t });
                    },
                  });
                }
                if ('address_2' === t.key) return null;
                if ('country' === t.key && (0, d.objectHasProp)(p, 'country')) {
                  const e = 'shipping' === l ? E : v;
                  return (0, o.createElement)(e, {
                    key: t.key,
                    ...n,
                    value: p.country,
                    onChange: e => {
                      c({ ...p, country: e, state: '', postcode: '' });
                    },
                  });
                }
                if ('state' === t.key && (0, d.objectHasProp)(p, 'state')) {
                  const e = 'shipping' === l ? w : k;
                  return (0, o.createElement)(e, {
                    key: t.key,
                    ...n,
                    country: p.country,
                    value: p.state,
                    onChange: e => c({ ...p, state: e }),
                  });
                }
                return 'select' === t.type
                  ? void 0 === t.options
                    ? null
                    : (0, o.createElement)(g, {
                        key: t.key,
                        ...n,
                        className: i()(
                          'wc-block-components-select-input',
                          `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                        ),
                        value: p[t.key],
                        onChange: e => {
                          c({ ...p, [t.key]: e });
                        },
                        options: t.options,
                      })
                  : (0, o.createElement)(a.ValidatedTextInput, {
                      key: t.key,
                      ref: e => (D.current[t.key] = e),
                      ...n,
                      type: t.type,
                      value: p[t.key],
                      onChange: e => c({ ...p, [t.key]: e }),
                      customFormatter: e =>
                        'postcode' === t.key ? e.trimStart().toUpperCase() : e,
                      customValidation: e =>
                        ((e, t, n) =>
                          !(
                            (e.required || e.value) &&
                            ('postcode' === t &&
                            n &&
                            !(0, N.isPostcode)({ postcode: e.value, country: n })
                              ? (e.setCustomValidity(
                                  (0, r.__)('Please enter a valid postcode', 'woocommerce'),
                                ),
                                1)
                              : 'email' === t &&
                                !(0, R.isEmail)(e.value) &&
                                (e.setCustomValidity(
                                  (0, r.__)('Please enter a valid email address', 'woocommerce'),
                                ),
                                1))
                          ))(e, t.key, (0, d.objectHasProp)(p, 'country') ? p.country : ''),
                    });
              }),
              h,
            )
          );
        },
        D = V;
    },
    8067: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => C });
      var o = n(1609),
        a = n(9019),
        s = n.n(a),
        r = n(7723),
        c = n(8537),
        l = n(4656),
        i = n(6087),
        p = n(4958),
        d = n(1359),
        u = n.n(d);
      const m = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
        g = ['target', 'href', 'rel', 'name', 'download'],
        h = (e, t) => {
          const n = (null == t ? void 0 : t.tags) || m,
            o = (null == t ? void 0 : t.attr) || g;
          return u().sanitize(e, { ALLOWED_TAGS: n, ALLOWED_ATTR: o });
        };
      var _ = n(7143),
        v = n(7594),
        E = n(9095),
        b = n(8529),
        f = n(5703);
      const k = e => {
          const t = (0, f.getSetting)('displayCartPricesIncludingTax', !1)
            ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
            : parseInt(e.price, 10);
          let n = (0, o.createElement)(
            o.Fragment,
            null,
            Number.isFinite(t) &&
              (0, o.createElement)(l.FormattedMonetaryAmount, {
                currency: (0, b.getCurrencyFromPriceResponse)(e),
                value: t,
              }),
            Number.isFinite(t) && e.delivery_time ? ' — ' : null,
            (0, c.decodeEntities)(e.delivery_time),
          );
          return (
            0 === t &&
              (n = (0, o.createElement)(
                'span',
                {
                  className:
                    'wc-block-components-shipping-rates-control__package__description--free',
                },
                (0, r.__)('Free', 'woocommerce'),
              )),
            { label: (0, c.decodeEntities)(e.name), value: e.rate_id, description: n }
          );
        },
        w = ({
          className: e = '',
          noResultsMessage: t,
          onSelectRate: n,
          rates: a,
          renderOption: s = k,
          selectedRate: r,
          disabled: c = !1,
          highlightChecked: p = !1,
        }) => {
          const d = (null == r ? void 0 : r.rate_id) || '',
            u = (0, E.Z)(d),
            [m, g] = (0, i.useState)(() => d || (a.length > 0 ? a[0].rate_id : void 0));
          return (
            (0, i.useEffect)(() => {
              d && d !== u && d !== m && g(d);
            }, [d, m, u]),
            (0, i.useEffect)(() => {
              !m && a.length > 0 && (g(a[0].rate_id), n(a[0].rate_id));
            }, [n, a, m]),
            (0, i.useEffect)(() => {
              m && n(m);
            }, [n, m]),
            0 === a.length
              ? t
              : (0, o.createElement)(l.RadioControl, {
                  className: e,
                  onChange: e => {
                    g(e), n(e);
                  },
                  highlightChecked: p,
                  disabled: c,
                  selected: m,
                  options: a.map(s),
                })
          );
        };
      n(2867);
      const C = ({
        packageId: e,
        className: t = '',
        noResultsMessage: n,
        renderOption: a,
        packageData: d,
        collapsible: u,
        showItems: m,
        highlightChecked: g = !1,
      }) => {
        var E;
        const { selectShippingRate: b, isSelectingRate: f } = (0, p.m)(),
          k =
            (0, _.useSelect)(e => {
              var t, n, o;
              return null === (t = e(v.CART_STORE_KEY)) ||
                void 0 === t ||
                null === (n = t.getCartData()) ||
                void 0 === n ||
                null === (o = n.shippingRates) ||
                void 0 === o
                ? void 0
                : o.length;
            }) > 1 ||
            document.querySelectorAll('.wc-block-components-shipping-rates-control__package')
              .length > 1,
          C = null != m ? m : k,
          y = null != u ? u : k,
          A = (0, o.createElement)(
            o.Fragment,
            null,
            (y || C) &&
              (0, o.createElement)('div', {
                className: 'wc-block-components-shipping-rates-control__package-title',
                dangerouslySetInnerHTML: { __html: h(d.name) },
              }),
            C &&
              (0, o.createElement)(
                'ul',
                { className: 'wc-block-components-shipping-rates-control__package-items' },
                Object.values(d.items).map(e => {
                  const t = (0, c.decodeEntities)(e.name),
                    n = e.quantity;
                  return (0, o.createElement)(
                    'li',
                    {
                      key: e.key,
                      className: 'wc-block-components-shipping-rates-control__package-item',
                    },
                    (0, o.createElement)(l.Label, {
                      label: n > 1 ? `${t} × ${n}` : `${t}`,
                      screenReaderLabel: (0,
                      r.sprintf) /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */(
                        /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                        (0, r._n)('%1$s (%2$d unit)', '%1$s (%2$d units)', n, 'woocommerce'),
                        t,
                        n,
                      ),
                    }),
                  );
                }),
              ),
          ),
          I = (0, i.useCallback)(
            t => {
              b(t, e);
            },
            [e, b],
          ),
          S = {
            className: t,
            noResultsMessage: n,
            rates: d.shipping_rates,
            onSelectRate: I,
            selectedRate: d.shipping_rates.find(e => e.selected),
            renderOption: a,
            disabled: f,
            highlightChecked: g,
          },
          N = (0, i.useMemo)(() => {
            var e;
            return null == d || null === (e = d.shipping_rates) || void 0 === e
              ? void 0
              : e.findIndex(e => (null == e ? void 0 : e.selected));
          }, [null == d ? void 0 : d.shipping_rates]);
        return y
          ? (0, o.createElement)(
              l.Panel,
              {
                className: s()('wc-block-components-shipping-rates-control__package', t, {
                  'wc-block-components-shipping-rates-control__package--disabled': f,
                }),
                initialOpen: !1,
                title: A,
              },
              (0, o.createElement)(w, { ...S }),
            )
          : (0, o.createElement)(
              'div',
              {
                className: s()('wc-block-components-shipping-rates-control__package', t, {
                  'wc-block-components-shipping-rates-control__package--disabled': f,
                  'wc-block-components-shipping-rates-control__package--first-selected':
                    !f && 0 === N,
                  'wc-block-components-shipping-rates-control__package--last-selected':
                    !f &&
                    N ===
                      (null == d || null === (E = d.shipping_rates) || void 0 === E
                        ? void 0
                        : E.length) -
                        1,
                }),
              },
              A,
              (0, o.createElement)(w, { ...S }),
            );
      };
    },
    8460: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => v });
      var o = n(1609),
        a = n(7723),
        s = n(6087),
        r = n(5416),
        c = n(1e3),
        l = n(8531),
        i = n(8605),
        p = n(2663),
        d = n(4958),
        u = n(6988),
        m = n(3993),
        g = n(8067),
        h = n(195);
      const _ = ({
          packages: e,
          showItems: t,
          collapsible: n,
          noResultsMessage: a,
          renderOption: s,
          context: r = '',
        }) =>
          e.length
            ? (0, o.createElement)(
                o.Fragment,
                null,
                e.map(({ package_id: e, ...c }) =>
                  (0, o.createElement)(g.A, {
                    highlightChecked: 'woocommerce/cart' !== r,
                    key: e,
                    packageId: e,
                    packageData: c,
                    collapsible: n,
                    showItems: t,
                    noResultsMessage: a,
                    renderOption: s,
                  }),
                ),
              )
            : null,
        v = ({
          shippingRates: e,
          isLoadingRates: t,
          className: n,
          collapsible: v,
          showItems: E,
          noResultsMessage: b,
          renderOption: f,
          context: k,
        }) => {
          (0, s.useEffect)(() => {
            var n, o;
            t ||
              ((n = (0, l.T4)(e)),
              (o = (0, l.Lb)(e)),
              1 === n
                ? (0, h.speak)(
                    (0, a.sprintf) /* translators: %d number of shipping options found. */(
                      /* translators: %d number of shipping options found. */
                      (0, a._n)(
                        '%d shipping option was found.',
                        '%d shipping options were found.',
                        o,
                        'woocommerce',
                      ),
                      o,
                    ),
                  )
                : (0, h.speak)(
                    (0, a.sprintf) /* translators: %d number of shipping packages packages. */(
                      /* translators: %d number of shipping packages packages. */
                      (0, a._n)(
                        'Shipping option searched for %d package.',
                        'Shipping options searched for %d packages.',
                        n,
                        'woocommerce',
                      ),
                      n,
                    ) +
                      ' ' +
                      (0, a.sprintf) /* translators: %d number of shipping options available. */(
                        /* translators: %d number of shipping options available. */
                        (0, a._n)(
                          '%d shipping option was found',
                          '%d shipping options were found',
                          o,
                          'woocommerce',
                        ),
                        o,
                      ),
                  ));
          }, [t, e]);
          const { extensions: w, receiveCart: C, ...y } = (0, i.V)(),
            A = {
              className: n,
              collapsible: v,
              showItems: E,
              noResultsMessage: b,
              renderOption: f,
              extensions: w,
              cart: y,
              components: { ShippingRatesControlPackage: g.A },
              context: k,
            },
            { isEditor: I } = (0, p.m)(),
            { hasSelectedLocalPickup: S, selectedRates: N } = (0, d.m)(),
            R = (0, m.isObject)(N) ? Object.values(N) : [],
            O = R.every(e => e === R[0]);
          return (0, o.createElement)(
            r.A,
            {
              isLoading: t,
              screenReaderLabel: (0, a.__)('Loading shipping rates…', 'woocommerce'),
              showSpinner: !0,
            },
            S &&
              'woocommerce/cart' === k &&
              e.length > 1 &&
              !O &&
              !I &&
              (0, o.createElement)(
                u.A,
                { className: 'wc-block-components-notice', isDismissible: !1, status: 'warning' },
                (0, a.__)('Multiple shipments must have the same pickup location', 'woocommerce'),
              ),
            (0, o.createElement)(c.ExperimentalOrderShippingPackages.Slot, { ...A }),
            (0, o.createElement)(
              c.ExperimentalOrderShippingPackages,
              null,
              (0, o.createElement)(_, { packages: e, noResultsMessage: b, renderOption: f }),
            ),
          );
        };
    },
    6716: (e, t, n) => {
      'use strict';
      n.d(t, { _i: () => u, n$: () => _, Ay: () => k, w7: () => H });
      var o = n(1609),
        a = n(7723),
        s = n(6087),
        r = n(4845),
        c = n(5416),
        l = n(9491),
        i = n(4656),
        p = n(7143),
        d = n(7594);
      n(3048);
      const u = (0, l.withInstanceId)(
        ({ instanceId: e, isLoading: t = !1, onSubmit: n, displayCouponForm: l = !1 }) => {
          const [u, m] = (0, s.useState)(''),
            [g, h] = (0, s.useState)(l),
            _ = `wc-block-components-totals-coupon__input-${e}`,
            { validationErrorId: v } = (0, p.useSelect)(e => ({
              validationErrorId: e(d.VALIDATION_STORE_KEY).getValidationErrorId(_),
            }));
          return (0, o.createElement)(
            i.Panel,
            {
              className: 'wc-block-components-totals-coupon',
              initialOpen: g,
              hasBorder: !1,
              title: (0, a.__)('Add a coupon', 'woocommerce'),
              state: [g, h],
            },
            (0, o.createElement)(
              c.A,
              {
                screenReaderLabel: (0, a.__)('Applying coupon…', 'woocommerce'),
                isLoading: t,
                showSpinner: !1,
              },
              (0, o.createElement)(
                'div',
                { className: 'wc-block-components-totals-coupon__content' },
                (0, o.createElement)(
                  'form',
                  {
                    className: 'wc-block-components-totals-coupon__form',
                    id: 'wc-block-components-totals-coupon__form',
                  },
                  (0, o.createElement)(i.ValidatedTextInput, {
                    id: _,
                    errorId: 'coupon',
                    className: 'wc-block-components-totals-coupon__input',
                    label: (0, a.__)('Enter code', 'woocommerce'),
                    value: u,
                    ariaDescribedBy: v,
                    onChange: e => {
                      m(e);
                    },
                    focusOnMount: !0,
                    validateOnMount: !1,
                    showError: !1,
                  }),
                  (0, o.createElement)(
                    r.A,
                    {
                      className: 'wc-block-components-totals-coupon__button',
                      disabled: t || !u,
                      showSpinner: t,
                      onClick: e => {
                        var t;
                        e.preventDefault(),
                          void 0 !== n
                            ? null === (t = n(u)) ||
                              void 0 === t ||
                              t.then(e => {
                                e && (m(''), h(!1));
                              })
                            : (m(''), h(!0));
                      },
                      type: 'submit',
                    },
                    (0, a.__)('Apply', 'woocommerce'),
                  ),
                ),
                (0, o.createElement)(i.ValidationInputError, {
                  propertyName: 'coupon',
                  elementId: _,
                }),
              ),
            ),
          );
        },
      );
      var m = n(1e3),
        g = n(5703);
      n(265);
      const h = { context: 'summary' },
        _ = ({
          cartCoupons: e = [],
          currency: t,
          isRemovingCoupon: n,
          removeCoupon: s,
          values: r,
        }) => {
          const { total_discount: l, total_discount_tax: p } = r,
            d = parseInt(l, 10);
          if (!d && 0 === e.length) return null;
          const u = parseInt(p, 10),
            _ = (0, g.getSetting)('displayCartPricesIncludingTax', !1) ? d + u : d,
            v = (0, m.applyCheckoutFilter)({ arg: h, filterName: 'coupons', defaultValue: e });
          return (0, o.createElement)(i.TotalsItem, {
            className: 'wc-block-components-totals-discount',
            currency: t,
            description:
              0 !== v.length &&
              (0, o.createElement)(
                c.A,
                {
                  screenReaderLabel: (0, a.__)('Removing coupon…', 'woocommerce'),
                  isLoading: n,
                  showSpinner: !1,
                },
                (0, o.createElement)(
                  'ul',
                  { className: 'wc-block-components-totals-discount__coupon-list' },
                  v.map(e =>
                    (0, o.createElement)(i.RemovableChip, {
                      key: 'coupon-' + e.code,
                      className: 'wc-block-components-totals-discount__coupon-list-item',
                      text: e.label,
                      screenReaderText: (0, a.sprintf) /* translators: %s Coupon code. */(
                        /* translators: %s Coupon code. */
                        (0, a.__)('Coupon: %s', 'woocommerce'),
                        e.label,
                      ),
                      disabled: n,
                      onRemove: () => {
                        s(e.code);
                      },
                      radius: 'large',
                      ariaLabel: (0, a.sprintf) /* translators: %s is a coupon code. */(
                        /* translators: %s is a coupon code. */
                        (0, a.__)('Remove coupon "%s"', 'woocommerce'),
                        e.label,
                      ),
                    }),
                  ),
                ),
              ),
            label: _ ? (0, a.__)('Discount', 'woocommerce') : (0, a.__)('Coupons', 'woocommerce'),
            value: _ ? -1 * _ : '-',
          });
        };
      var v = n(9019),
        E = n.n(v),
        b = n(8605),
        f = n(8529);
      n(7919);
      const k = ({ currency: e, values: t, className: n }) => {
        const r =
            (0, g.getSetting)('taxesEnabled', !0) &&
            (0, g.getSetting)('displayCartPricesIncludingTax', !1),
          { total_price: c, total_tax: l, tax_lines: p } = t,
          { receiveCart: d, ...u } = (0, b.V)(),
          h = (0, m.applyCheckoutFilter)({
            filterName: 'totalLabel',
            defaultValue: (0, a.__)('Total', 'woocommerce'),
            extensions: u.extensions,
            arg: { cart: u },
          }),
          _ = (0, m.applyCheckoutFilter)({
            filterName: 'totalValue',
            defaultValue: '<price/>',
            extensions: u.extensions,
            arg: { cart: u },
            validation: m.productPriceValidation,
          }),
          v = (0, o.createElement)(i.FormattedMonetaryAmount, {
            className: 'wc-block-components-totals-footer-item-tax-value',
            currency: e,
            value: parseInt(c, 10),
          }),
          k = (0, s.createInterpolateElement)(_, { price: v }),
          w = parseInt(l, 10),
          C =
            p && p.length > 0
              ? (0, a.sprintf) /* translators: %s is a list of tax rates */(
                  /* translators: %s is a list of tax rates */
                  (0, a.__)('Including %s', 'woocommerce'),
                  p.map(({ name: t, price: n }) => `${(0, f.formatPrice)(n, e)} ${t}`).join(', '),
                )
              : (0, a.__)('Including <TaxAmount/> in taxes', 'woocommerce');
        return (0, o.createElement)(i.TotalsItem, {
          className: E()('wc-block-components-totals-footer-item', n),
          currency: e,
          label: h,
          value: k,
          description:
            r &&
            0 !== w &&
            (0, o.createElement)(
              'p',
              { className: 'wc-block-components-totals-footer-item-tax' },
              (0, s.createInterpolateElement)(C, {
                TaxAmount: (0, o.createElement)(i.FormattedMonetaryAmount, {
                  className: 'wc-block-components-totals-footer-item-tax-value',
                  currency: e,
                  value: w,
                }),
              }),
            ),
        });
      };
      var w = n(8537);
      const C = ({ selectedShippingRates: e }) =>
        (0, o.createElement)(
          'div',
          {
            className:
              'wc-block-components-totals-item__description wc-block-components-totals-shipping__via',
          },
          (0, w.decodeEntities)(e.filter((t, n) => e.indexOf(t) === n).join(', ')),
        );
      var y = n(8531),
        A = n(5683),
        I = n(4107),
        S = n(7524),
        N = n(923),
        R = n.n(N);
      let O = null;
      n(7051);
      var T = n(4597);
      const x = ({ address: e, onUpdate: t, onCancel: n, addressFields: c }) => {
          const [l, i] = (0, s.useState)(e),
            { showAllValidationErrors: u } = (0, p.useDispatch)(d.VALIDATION_STORE_KEY),
            m = (function(e) {
              const t = (0, s.useRef)(null),
                n = (0, s.useRef)(null),
                o = (0, s.useRef)(e);
              return (
                (0, s.useEffect)(() => {
                  o.current = e;
                }, [e]),
                (0, s.useCallback)(e => {
                  if (e) (t.current = e), (n.current = e.ownerDocument.activeElement);
                  else if (n.current) {
                    var a, s, r;
                    const e =
                      null === (a = t.current) || void 0 === a
                        ? void 0
                        : a.contains(
                            null === (s = t.current) || void 0 === s
                              ? void 0
                              : s.ownerDocument.activeElement,
                          );
                    var c;
                    if (
                      (null !== (r = t.current) &&
                        void 0 !== r &&
                        r.isConnected &&
                        !e &&
                        ((null !== (c = O) && void 0 !== c) || (O = n.current)),
                      o.current)
                    )
                      o.current();
                    else {
                      var l;
                      const e = n.current;
                      null === (l = null != e && e.isConnected ? e : O) ||
                        void 0 === l ||
                        l.focus();
                    }
                    O = null;
                  }
                }, [])
              );
            })(),
            { hasValidationErrors: g, isCustomerDataUpdating: h } = (0, p.useSelect)(e => ({
              hasValidationErrors: e(d.VALIDATION_STORE_KEY).hasValidationErrors,
              isCustomerDataUpdating: e(d.CART_STORE_KEY).isCustomerDataUpdating(),
            }));
          return (0, o.createElement)(
            'form',
            { className: 'wc-block-components-shipping-calculator-address', ref: m },
            (0, o.createElement)(T.l, { fields: c, onChange: i, values: l }),
            (0, o.createElement)(
              r.A,
              {
                className: 'wc-block-components-shipping-calculator-address__button',
                disabled: h,
                onClick: o => (o.preventDefault(), R()(l, e) ? n() : (u(), g() ? void 0 : t(l))),
                type: 'submit',
              },
              (0, a.__)('Update', 'woocommerce'),
            ),
          );
        },
        L = ({
          onUpdate: e = () => {},
          onCancel: t = () => {},
          addressFields: n = ['country', 'state', 'city', 'postcode'],
        }) => {
          const { shippingAddress: a } = (0, I.q)(),
            s = 'wc/cart/shipping-calculator';
          return (0, o.createElement)(
            'div',
            { className: 'wc-block-components-shipping-calculator' },
            (0, o.createElement)(i.StoreNoticesContainer, { context: s }),
            (0, o.createElement)(x, {
              address: a,
              addressFields: n,
              onCancel: t,
              onUpdate: t => {
                (0, p.dispatch)(d.CART_STORE_KEY)
                  .updateCustomerData({ shipping_address: t }, !1)
                  .then(() => {
                    (0, S.jj)(s), e(t);
                  })
                  .catch(e => {
                    (0, d.processErrorResponse)(e, s);
                  });
              },
            }),
          );
        };
      var V = n(8156);
      const D = ({
          label: e = (0, a.__)('Calculate', 'woocommerce'),
          isShippingCalculatorOpen: t,
          setIsShippingCalculatorOpen: n,
        }) =>
          (0, o.createElement)(
            'button',
            {
              className: 'wc-block-components-totals-shipping__change-address__link',
              id: 'wc-block-components-totals-shipping__change-address__link',
              onClick: e => {
                e.preventDefault(), n(!t);
              },
              'aria-label': e,
              'aria-expanded': t,
            },
            e,
          ),
        M = ({
          showCalculator: e,
          isShippingCalculatorOpen: t,
          setIsShippingCalculatorOpen: n,
          isCheckout: s = !1,
        }) =>
          e
            ? (0, o.createElement)(D, {
                label: (0, a.__)('Add an address for shipping options', 'woocommerce'),
                isShippingCalculatorOpen: t,
                setIsShippingCalculatorOpen: n,
              })
            : (0, o.createElement)(
                'em',
                null,
                s
                  ? (0, a.__)('No shipping options available', 'woocommerce')
                  : (0, a.__)('Calculated during checkout', 'woocommerce'),
              );
      var P = n(2663),
        F = n(3993);
      const j = () => {
          const { pickupAddress: e } = (0, p.useSelect)(e => {
            const t = e('wc/store/cart')
              .getShippingRates()
              .flatMap(e => e.shipping_rates)
              .find(e => e.selected && (0, y.J_)(e));
            if ((0, F.isObject)(t) && (0, F.objectHasProp)(t, 'meta_data')) {
              const e = t.meta_data.find(e => 'pickup_address' === e.key);
              if ((0, F.isObject)(e) && (0, F.objectHasProp)(e, 'value') && e.value)
                return { pickupAddress: e.value };
            }
            return (0, F.isObject)(t), { pickupAddress: void 0 };
          });
          return void 0 === e
            ? null
            : (0, o.createElement)(
                'span',
                { className: 'wc-block-components-shipping-address' },
                (0, a.sprintf) /* translators: %s: shipping method name, e.g. "Amazon Locker" */(
                  /* translators: %s: shipping method name, e.g. "Amazon Locker" */
                  (0, a.__)('Collection from %s', 'woocommerce'),
                  e,
                ) + ' ',
              );
        },
        $ = ({ formattedLocation: e }) =>
          e
            ? (0, o.createElement)(
                'span',
                { className: 'wc-block-components-shipping-address' },
                (0, a.sprintf) /* translators: %s location. */(
                  /* translators: %s location. */
                  (0, a.__)('Shipping to %s', 'woocommerce'),
                  e,
                ) + ' ',
              )
            : null,
        K = ({
          showCalculator: e,
          isShippingCalculatorOpen: t,
          setIsShippingCalculatorOpen: n,
          shippingAddress: s,
        }) => {
          const { isEditor: r } = (0, P.m)(),
            c = (0, p.useSelect)(e => e(d.CHECKOUT_STORE_KEY).prefersCollection()),
            l = (0, g.getSetting)('activeShippingZones'),
            i =
              l.length > 1 &&
              l.some(
                e =>
                  'Everywhere' === e.description ||
                  'Locations outside all other zones' === e.description,
              ),
            u = !!(0, A.i0)(s);
          if (!u && !r && !i) return null;
          const m = u
              ? (0, a.__)('Change address', 'woocommerce')
              : (0, a.__)('Calculate shipping for your location', 'woocommerce'),
            h = (0, A.i0)(s);
          return (0, o.createElement)(
            o.Fragment,
            null,
            c ? (0, o.createElement)(j, null) : (0, o.createElement)($, { formattedLocation: h }),
            e &&
              (0, o.createElement)(D, {
                label: m,
                isShippingCalculatorOpen: t,
                setIsShippingCalculatorOpen: n,
              }),
          );
        };
      var U = n(6988),
        q = n(8460);
      const Y = ({ hasRates: e, shippingRates: t, isLoadingRates: n, isAddressComplete: s }) => {
        const r = e
          ? (0, a.__)('Shipping options', 'woocommerce')
          : (0, a.__)('Choose a shipping option', 'woocommerce');
        return (0, o.createElement)(
          'fieldset',
          { className: 'wc-block-components-totals-shipping__fieldset' },
          (0, o.createElement)('legend', { className: 'screen-reader-text' }, r),
          (0, o.createElement)(q.A, {
            className: 'wc-block-components-totals-shipping__options',
            noResultsMessage: (0, o.createElement)(
              o.Fragment,
              null,
              s &&
                (0, o.createElement)(
                  U.A,
                  {
                    isDismissible: !1,
                    className: 'wc-block-components-shipping-rates-control__no-results-notice',
                    status: 'warning',
                  },
                  (0, a.__)(
                    'There are no shipping options available. Please check your shipping address.',
                    'woocommerce',
                  ),
                ),
            ),
            shippingRates: t,
            isLoadingRates: n,
            context: 'woocommerce/cart',
          }),
        );
      };
      n(8399);
      const H = ({
        currency: e,
        values: t,
        showCalculator: n = !0,
        showRateSelector: r = !0,
        isCheckout: c = !1,
        className: l,
      }) => {
        const [u, m] = (0, s.useState)(!1),
          {
            shippingAddress: g,
            cartHasCalculatedShipping: h,
            shippingRates: _,
            isLoadingRates: v,
          } = (0, b.V)(),
          f = (0, V.mH)(t),
          k = (0, V.HI)(_) || f > 0,
          w = n && u,
          I = (0, p.useSelect)(e => e(d.CHECKOUT_STORE_KEY).prefersCollection()),
          S = _.flatMap(e =>
            e.shipping_rates
              .filter(e => (I && (0, y.J_)(e) && e.selected) || (!I && e.selected))
              .flatMap(e => e.name),
          ),
          N = (0, A.KY)(g),
          R = (0, V.R4)(k, I, _),
          O = 0 === f ? (0, o.createElement)('strong', null, (0, a.__)('Free', 'woocommerce')) : f;
        return (0, o.createElement)(
          'div',
          { className: E()('wc-block-components-totals-shipping', l) },
          (0, o.createElement)(i.TotalsItem, {
            label: (0, a.__)('Shipping', 'woocommerce'),
            value:
              !R && h
                ? O
                : (!N || c) &&
                  (0, o.createElement)(M, {
                    showCalculator: n,
                    isCheckout: c,
                    isShippingCalculatorOpen: u,
                    setIsShippingCalculatorOpen: m,
                  }),
            description:
              (!R && h) || (N && !c)
                ? (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(C, { selectedShippingRates: S }),
                    (0, o.createElement)(K, {
                      shippingAddress: g,
                      showCalculator: n,
                      isShippingCalculatorOpen: u,
                      setIsShippingCalculatorOpen: m,
                    }),
                  )
                : null,
            currency: e,
          }),
          w &&
            (0, o.createElement)(L, {
              onUpdate: () => {
                m(!1);
              },
              onCancel: () => {
                m(!1);
              },
            }),
          r &&
            h &&
            !w &&
            (0, o.createElement)(Y, {
              hasRates: k,
              shippingRates: _,
              isLoadingRates: v,
              isAddressComplete: N,
            }),
        );
      };
    },
    8156: (e, t, n) => {
      'use strict';
      n.d(t, { HI: () => s, R4: () => c, mH: () => r });
      var o = n(5703),
        a = n(8531);
      const s = e => e.some(e => e.shipping_rates.length),
        r = e =>
          (0, o.getSetting)('displayCartPricesIncludingTax', !1)
            ? parseInt(e.total_shipping, 10) + parseInt(e.total_shipping_tax, 10)
            : parseInt(e.total_shipping, 10),
        c = (e, t, n) =>
          !e || (!t && n.some(e => !e.shipping_rates.some(e => !(0, a.jV)(e.method_id))));
    },
    6988: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => u });
      var o = n(1609),
        a = n(9019),
        s = n.n(a),
        r = n(7723),
        c = n(7104),
        l = n(1208),
        i = (n(9345), n(9113)),
        p = n(4845),
        d = n(7666);
      const u = ({
        className: e,
        status: t = 'default',
        children: n,
        spokenMessage: a = n,
        onRemove: u = () => {},
        isDismissible: m = !0,
        politeness: g = (0, i.A)(t),
        summary: h,
      }) => (
        (0, d.$)(a, g),
        (0, o.createElement)(
          'div',
          {
            className: s()(e, 'wc-block-components-notice-banner', 'is-' + t, {
              'is-dismissible': m,
            }),
          },
          (0, o.createElement)(c.A, { icon: (0, i.c)(t) }),
          (0, o.createElement)(
            'div',
            { className: 'wc-block-components-notice-banner__content' },
            h &&
              (0, o.createElement)(
                'p',
                { className: 'wc-block-components-notice-banner__summary' },
                h,
              ),
            n,
          ),
          !!m &&
            (0, o.createElement)(
              p.A,
              {
                className: 'wc-block-components-notice-banner__dismiss',
                'aria-label': (0, r.__)('Dismiss this notice', 'woocommerce'),
                onClick: e => {
                  'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                    e.preventDefault &&
                    e.preventDefault(),
                    u();
                },
                removeTextWrap: !0,
              },
              (0, o.createElement)(c.A, { icon: l.A }),
            ),
        )
      );
    },
    9113: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => r, c: () => c });
      var o = n(2900),
        a = n(2478),
        s = n(8306);
      const r = e => {
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
        c = e => {
          switch (e) {
            case 'success':
              return o.A;
            case 'warning':
            case 'info':
            case 'error':
              return a.A;
            default:
              return s.A;
          }
        };
    },
    4107: (e, t, n) => {
      'use strict';
      n.d(t, { q: () => s });
      var o = n(7143),
        a = n(7594);
      const s = () => {
        const { customerData: e, isInitialized: t } = (0, o.useSelect)(e => {
            const t = e(a.CART_STORE_KEY);
            return {
              customerData: t.getCustomerData(),
              isInitialized: t.hasFinishedResolution('getCartData'),
            };
          }),
          { setShippingAddress: n, setBillingAddress: s } = (0, o.useDispatch)(a.CART_STORE_KEY);
        return {
          isInitialized: t,
          billingAddress: e.billingAddress,
          shippingAddress: e.shippingAddress,
          setBillingAddress: s,
          setShippingAddress: n,
        };
      };
    },
    1573: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => r });
      var o = n(6087),
        a = n(923),
        s = n.n(a);
      function r(e) {
        const t = (0, o.useRef)(e);
        return s()(e, t.current) || (t.current = e), t.current;
      }
    },
    7666: (e, t, n) => {
      'use strict';
      n.d(t, { $: () => s });
      var o = n(6087),
        a = n(195);
      const s = (e, t) => {
        const n = 'string' == typeof e ? e : (0, o.renderToString)(e);
        (0, o.useEffect)(() => {
          n && (0, a.speak)(n, t);
        }, [n, t]);
      };
    },
    7906: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => i });
      var o = n(1609),
        a = n(6716),
        s = n(8529),
        r = n(8605),
        c = n(1e3);
      const l = () => {
          const { extensions: e, receiveCart: t, ...n } = (0, r.V)(),
            a = { extensions: e, cart: n, context: 'woocommerce/cart' };
          return (0, o.createElement)(c.ExperimentalOrderMeta.Slot, { ...a });
        },
        i = ({ children: e, className: t = '' }) => {
          const { cartTotals: n } = (0, r.V)(),
            c = (0, s.getCurrencyFromPriceResponse)(n);
          return (0, o.createElement)(
            'div',
            { className: t },
            e,
            (0, o.createElement)(
              'div',
              { className: 'wc-block-components-totals-wrapper' },
              (0, o.createElement)(a.Ay, { currency: c, values: n }),
            ),
            (0, o.createElement)(l, null),
          );
        };
    },
    8730: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      var o = n(1609);
      n(7791);
      const a = () =>
        (0, o.createElement)('span', {
          className: 'wc-block-components-spinner',
          'aria-hidden': 'true',
        });
    },
    2080: () => {},
    7051: () => {},
    2867: () => {},
    3048: () => {},
    265: () => {},
    7919: () => {},
    8399: () => {},
    1707: () => {},
    2931: () => {},
    9345: () => {},
    8824: () => {},
    7791: () => {},
  },
]);
