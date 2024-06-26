var wc;
(() => {
  var e,
    t,
    n,
    o = {
      9517: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            Button: () => u,
            CheckboxControl: () => h,
            CheckboxList: () => E,
            Chip: () => v,
            FormStep: () => y,
            FormattedMonetaryAmount: () => S,
            Label: () => I,
            Panel: () => R,
            RadioControl: () => D,
            RadioControlAccordion: () => L,
            RadioControlOption: () => $,
            RadioControlOptionLayout: () => A,
            RemovableChip: () => _,
            SortSelect: () => F,
            Spinner: () => m,
            StoreNotice: () => Z,
            StoreNoticesContainer: () => de,
            Subtotal: () => ye,
            TextInput: () => pe,
            Textarea: () => ue,
            Title: () => g,
            TotalsFees: () => Ce,
            TotalsItem: () => ge,
            TotalsTaxes: () => xe,
            TotalsWrapper: () => Se,
            ValidatedTextInput: () => fe,
            ValidationInputError: () => he,
          });
        var o = n(1609),
          c = n(8165),
          a = n(6087),
          r = n(9019),
          l = n.n(r),
          s = n(4040),
          i = n.n(s);
        n(2080), n(7791);
        const m = () =>
            (0, o.createElement)('span', {
              className: 'wc-block-components-spinner',
              'aria-hidden': 'true',
            }),
          d = (0, a.forwardRef)((e, t) => {
            'showSpinner' in e &&
              i()('showSpinner prop', {
                version: '8.9.0',
                alternative: 'Render a spinner in the button children instead.',
                plugin: 'WooCommerce',
              });
            const {
                className: n,
                showSpinner: a = !1,
                children: r,
                variant: s = 'contained',
                removeTextWrap: d = !1,
                ...u
              } = e,
              p = l()('wc-block-components-button', 'wp-element-button', n, s, {
                'wc-block-components-button--loading': a,
              });
            if ('href' in e)
              return (0, o.createElement)(c.$, {
                render: (0, o.createElement)(
                  'a',
                  { ref: t, href: e.href },
                  a && (0, o.createElement)(m, null),
                  (0, o.createElement)(
                    'span',
                    { className: 'wc-block-components-button__text' },
                    r,
                  ),
                ),
                className: p,
                ...u,
              });
            const b = d
              ? e.children
              : (0, o.createElement)(
                  'span',
                  { className: 'wc-block-components-button__text' },
                  e.children,
                );
            return (0, o.createElement)(
              c.$,
              { ref: t, className: p, ...u },
              a && (0, o.createElement)(m, null),
              b,
            );
          }),
          u = d;
        var p = n(9491);
        n(2031);
        const b = ({
            className: e,
            label: t,
            id: n,
            onChange: c,
            children: a,
            hasError: r = !1,
            checked: s = !1,
            disabled: i = !1,
            ...m
          }) => {
            const d = (0, p.useInstanceId)(b),
              u = n || `checkbox-control-${d}`;
            return (0, o.createElement)(
              'div',
              { className: l()('wc-block-components-checkbox', { 'has-error': r }, e) },
              (0, o.createElement)(
                'label',
                { htmlFor: u },
                (0, o.createElement)('input', {
                  id: u,
                  className: 'wc-block-components-checkbox__input',
                  type: 'checkbox',
                  onChange: e => c(e.target.checked),
                  'aria-invalid': !0 === r,
                  checked: s,
                  disabled: !!i,
                  ...m,
                }),
                (0, o.createElement)(
                  'svg',
                  {
                    className: 'wc-block-components-checkbox__mark',
                    'aria-hidden': 'true',
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 20',
                  },
                  (0, o.createElement)('path', {
                    d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
                  }),
                ),
                t &&
                  (0, o.createElement)(
                    'span',
                    { className: 'wc-block-components-checkbox__label' },
                    t,
                  ),
                a,
              ),
            );
          },
          h = b;
        var w = n(7723);
        n(294);
        const E = ({
          className: e,
          onChange: t,
          options: n = [],
          checked: c = [],
          isLoading: r = !1,
          isDisabled: s = !1,
          limit: i = 10,
        }) => {
          const [m, d] = (0, a.useState)(!1),
            u = (0, a.useMemo)(
              () =>
                [...Array(5)].map((e, t) =>
                  (0, o.createElement)(
                    'li',
                    { key: t, style: { width: Math.floor(75 * Math.random()) + 25 + '%' } },
                    ' ',
                  ),
                ),
              [],
            ),
            p = (0, a.useMemo)(() => {
              const e = n.length - i;
              return (
                !m &&
                (0, o.createElement)(
                  'li',
                  { key: 'show-more', className: 'show-more' },
                  (0, o.createElement)(
                    'button',
                    {
                      onClick: () => {
                        d(!0);
                      },
                      'aria-expanded': !1,
                      'aria-label': (0,
                      w.sprintf) /* translators: %s is referring the remaining count of options */(
                        /* translators: %s is referring the remaining count of options */
                        (0, w._n)('Show %s more option', 'Show %s more options', e, 'woocommerce'),
                        e,
                      ),
                    },
                    (0, w.sprintf) /* translators: %s number of options to reveal. */(
                      /* translators: %s number of options to reveal. */
                      (0, w._n)('Show %s more', 'Show %s more', e, 'woocommerce'),
                      e,
                    ),
                  ),
                )
              );
            }, [n, i, m]),
            h = (0, a.useMemo)(
              () =>
                m &&
                (0, o.createElement)(
                  'li',
                  { key: 'show-less', className: 'show-less' },
                  (0, o.createElement)(
                    'button',
                    {
                      onClick: () => {
                        d(!1);
                      },
                      'aria-expanded': !0,
                      'aria-label': (0, w.__)('Show less options', 'woocommerce'),
                    },
                    (0, w.__)('Show less', 'woocommerce'),
                  ),
                ),
              [m],
            ),
            E = (0, a.useMemo)(() => {
              const e = n.length > i + 5;
              return (0, o.createElement)(
                a.Fragment,
                null,
                n.map((n, r) =>
                  (0, o.createElement)(
                    a.Fragment,
                    { key: n.value },
                    (0, o.createElement)(
                      'li',
                      { ...(e && !m && r >= i && { hidden: !0 }) },
                      (0, o.createElement)(b, {
                        id: n.value,
                        className: 'wc-block-checkbox-list__checkbox',
                        label: n.label,
                        checked: c.includes(n.value),
                        onChange: () => {
                          t(n.value);
                        },
                        disabled: s,
                      }),
                    ),
                    e && r === i - 1 && p,
                  ),
                ),
                e && h,
              );
            }, [n, t, c, m, i, h, p, s]),
            v = l()(
              'wc-block-checkbox-list',
              'wc-block-components-checkbox-list',
              { 'is-loading': r },
              e,
            );
          return (0, o.createElement)('ul', { className: v }, r ? u : E);
        };
        n(4456);
        const v = ({
          text: e,
          screenReaderText: t = '',
          element: n = 'li',
          className: c = '',
          radius: a = 'small',
          children: r = null,
          ...s
        }) => {
          const i = n,
            m = l()(c, 'wc-block-components-chip', 'wc-block-components-chip--radius-' + a),
            d = Boolean(t && t !== e);
          return (0, o.createElement)(
            i,
            { className: m, ...s },
            (0, o.createElement)(
              'span',
              { 'aria-hidden': d, className: 'wc-block-components-chip__text' },
              e,
            ),
            d && (0, o.createElement)('span', { className: 'screen-reader-text' }, t),
            r,
          );
        };
        var k = n(7104),
          f = n(8098);
        const _ = ({
          ariaLabel: e = '',
          className: t = '',
          disabled: n = !1,
          onRemove: c = () => {},
          removeOnAnyClick: a = !1,
          text: r,
          screenReaderText: s = '',
          ...i
        }) => {
          const m = a ? 'span' : 'button';
          if (!e) {
            const t = s && 'string' == typeof s ? s : r;
            e =
              'string' != typeof t /* translators: Remove chip. */ /* translators: Remove chip. */
                ? (0, w.__)('Remove', 'woocommerce')
                : (0, w.sprintf) /* translators: %s text of the chip to remove. */(
                    /* translators: %s text of the chip to remove. */
                    (0, w.__)('Remove "%s"', 'woocommerce'),
                    t,
                  );
          }
          const d = {
              'aria-label': e,
              disabled: n,
              onClick: c,
              onKeyDown: e => {
                ('Backspace' !== e.key && 'Delete' !== e.key) || c();
              },
            },
            u = a ? d : {},
            p = a ? { 'aria-hidden': !0 } : d;
          return (0, o.createElement)(
            v,
            {
              ...i,
              ...u,
              className: l()(t, 'is-removable'),
              element: a ? 'button' : i.element,
              screenReaderText: s,
              text: r,
            },
            (0, o.createElement)(
              m,
              { className: 'wc-block-components-chip__remove', ...p },
              (0, o.createElement)(k.A, {
                className: 'wc-block-components-chip__remove-icon',
                icon: f.A,
                size: 16,
                role: 'img',
              }),
            ),
          );
        };
        n(2849), n(1908);
        const g = ({ children: e, className: t = '', headingLevel: n, ...c }) => {
            const a = l()('wc-block-components-title', t),
              r = `h${n}`;
            return (0, o.createElement)(r, { className: a, ...c }, e);
          },
          N = ({ title: e, stepHeadingContent: t }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-block-components-checkout-step__heading' },
              (0, o.createElement)(
                g,
                {
                  'aria-hidden': 'true',
                  className: 'wc-block-components-checkout-step__title',
                  headingLevel: '2',
                },
                e,
              ),
              !!t &&
                (0, o.createElement)(
                  'span',
                  { className: 'wc-block-components-checkout-step__heading-content' },
                  t,
                ),
            ),
          y = ({
            id: e,
            className: t,
            title: n,
            legend: c,
            description: a,
            children: r,
            disabled: s = !1,
            showStepNumber: i = !0,
            stepHeadingContent: m = () => {},
          }) => {
            const d = c || n ? 'fieldset' : 'div';
            return (0, o.createElement)(
              d,
              {
                className: l()(t, 'wc-block-components-checkout-step', {
                  'wc-block-components-checkout-step--with-step-number': i,
                  'wc-block-components-checkout-step--disabled': s,
                }),
                id: e,
                disabled: s,
              },
              !(!c && !n) &&
                (0, o.createElement)('legend', { className: 'screen-reader-text' }, c || n),
              !!n && (0, o.createElement)(N, { title: n, stepHeadingContent: m() }),
              (0, o.createElement)(
                'div',
                { className: 'wc-block-components-checkout-step__container' },
                !!a &&
                  (0, o.createElement)(
                    'p',
                    { className: 'wc-block-components-checkout-step__description' },
                    a,
                  ),
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-components-checkout-step__content' },
                  r,
                ),
              ),
            );
          };
        var x = n(6175);
        n(9297);
        const C = e => {
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
          S = ({
            className: e,
            value: t,
            currency: n,
            onValueChange: c,
            displayType: a = 'text',
            ...r
          }) => {
            var s;
            const i = 'string' == typeof t ? parseInt(t, 10) : t;
            if (!Number.isFinite(i)) return null;
            const m = i / 10 ** n.minorUnit;
            if (!Number.isFinite(m)) return null;
            const d = l()(
                'wc-block-formatted-money-amount',
                'wc-block-components-formatted-money-amount',
                e,
              ),
              u =
                null !== (s = r.decimalScale) && void 0 !== s
                  ? s
                  : null == n
                  ? void 0
                  : n.minorUnit,
              p = {
                ...r,
                ...C(n),
                decimalScale: u,
                value: void 0,
                currency: void 0,
                onValueChange: void 0,
              },
              b = c
                ? e => {
                    const t = +e.value * 10 ** n.minorUnit;
                    c(t);
                  }
                : () => {};
            return (0, o.createElement)(x.A, {
              className: d,
              displayType: a,
              ...p,
              value: m,
              onValueChange: b,
            });
          },
          I = ({ label: e, screenReaderLabel: t, wrapperElement: n, wrapperProps: c = {} }) => {
            let r;
            const s = null != e,
              i = null != t;
            return !s && i
              ? ((r = n || 'span'),
                (c = { ...c, className: l()(c.className, 'screen-reader-text') }),
                (0, o.createElement)(r, { ...c }, t))
              : ((r = n || a.Fragment),
                s && i && e !== t
                  ? (0, o.createElement)(
                      r,
                      { ...c },
                      (0, o.createElement)('span', { 'aria-hidden': 'true' }, e),
                      (0, o.createElement)('span', { className: 'screen-reader-text' }, t),
                    )
                  : (0, o.createElement)(r, { ...c }, e));
          };
        var T = n(9813),
          O = n(224);
        n(5440);
        const R = ({
            children: e,
            className: t,
            initialOpen: n = !1,
            hasBorder: c = !1,
            title: r,
            titleTag: s = 'div',
            state: i,
          }) => {
            let [m, d] = (0, a.useState)(n);
            return (
              Array.isArray(i) && 2 === i.length && ([m, d] = i),
              (0, o.createElement)(
                'div',
                { className: l()(t, 'wc-block-components-panel', { 'has-border': c }) },
                (0, o.createElement)(
                  s,
                  null,
                  (0, o.createElement)(
                    'button',
                    {
                      'aria-expanded': m,
                      className: 'wc-block-components-panel__button',
                      onClick: () => d(!m),
                    },
                    (0, o.createElement)(k.A, {
                      'aria-hidden': 'true',
                      className: 'wc-block-components-panel__button-icon',
                      icon: m ? T.A : O.A,
                    }),
                    r,
                  ),
                ),
                m &&
                  (0, o.createElement)(
                    'div',
                    { className: 'wc-block-components-panel__content' },
                    e,
                  ),
              )
            );
          },
          A = ({ label: e, secondaryLabel: t, description: n, secondaryDescription: c, id: a }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-block-components-radio-control__option-layout' },
              (0, o.createElement)(
                'div',
                { className: 'wc-block-components-radio-control__label-group' },
                e &&
                  (0, o.createElement)(
                    'span',
                    {
                      id: a && `${a}__label`,
                      className: 'wc-block-components-radio-control__label',
                    },
                    e,
                  ),
                t &&
                  (0, o.createElement)(
                    'span',
                    {
                      id: a && `${a}__secondary-label`,
                      className: 'wc-block-components-radio-control__secondary-label',
                    },
                    t,
                  ),
              ),
              (n || c) &&
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-components-radio-control__description-group' },
                  n &&
                    (0, o.createElement)(
                      'span',
                      {
                        id: a && `${a}__description`,
                        className: 'wc-block-components-radio-control__description',
                      },
                      n,
                    ),
                  c &&
                    (0, o.createElement)(
                      'span',
                      {
                        id: a && `${a}__secondary-description`,
                        className: 'wc-block-components-radio-control__secondary-description',
                      },
                      c,
                    ),
                ),
            ),
          $ = ({
            checked: e,
            name: t,
            onChange: n,
            option: c,
            disabled: a = !1,
            highlightChecked: r = !1,
          }) => {
            const {
              value: s,
              label: i,
              description: m,
              secondaryLabel: d,
              secondaryDescription: u,
            } = c;
            return (0, o.createElement)(
              'label',
              {
                className: l()('wc-block-components-radio-control__option', {
                  'wc-block-components-radio-control__option-checked': e,
                  'wc-block-components-radio-control__option--checked-option-highlighted': e && r,
                }),
                htmlFor: `${t}-${s}`,
              },
              (0, o.createElement)('input', {
                id: `${t}-${s}`,
                className: 'wc-block-components-radio-control__input',
                type: 'radio',
                name: t,
                value: s,
                onChange: e => n(e.target.value),
                checked: e,
                'aria-describedby': l()({
                  [`${t}-${s}__label`]: i,
                  [`${t}-${s}__secondary-label`]: d,
                  [`${t}-${s}__description`]: m,
                  [`${t}-${s}__secondary-description`]: u,
                }),
                disabled: a,
              }),
              (0, o.createElement)(A, {
                id: `${t}-${s}`,
                label: i,
                secondaryLabel: d,
                description: m,
                secondaryDescription: u,
              }),
            );
          };
        n(6785);
        const M = ({
            className: e = '',
            id: t,
            selected: n = '',
            onChange: c,
            options: r = [],
            disabled: s = !1,
            highlightChecked: i = !1,
          }) => {
            const m = (0, p.useInstanceId)(M),
              d = t || m,
              u = (0, a.useMemo)(() => r.findIndex(e => e.value === n), [r, n]);
            return r.length
              ? (0, o.createElement)(
                  'div',
                  {
                    className: l()(
                      'wc-block-components-radio-control',
                      {
                        'wc-block-components-radio-control--highlight-checked--first-selected':
                          i && 0 === u,
                        'wc-block-components-radio-control--highlight-checked--last-selected':
                          i && u === r.length - 1,
                        'wc-block-components-radio-control--highlight-checked': i,
                      },
                      e,
                    ),
                  },
                  r.map(e =>
                    (0, o.createElement)($, {
                      highlightChecked: i,
                      key: `${d}-${e.value}`,
                      name: `radio-control-${d}`,
                      checked: e.value === n,
                      option: e,
                      onChange: t => {
                        c(t), 'function' == typeof e.onChange && e.onChange(t);
                      },
                      disabled: s,
                    }),
                  ),
                )
              : null;
          },
          D = M,
          L = (0, p.withInstanceId)(
            ({
              className: e,
              instanceId: t,
              id: n,
              selected: c,
              onChange: r,
              options: s = [],
              highlightChecked: i = !1,
            }) => {
              const m = n || t,
                d = (0, a.useMemo)(() => s.findIndex(e => e.value === c), [s, c]);
              return s.length
                ? (0, o.createElement)(
                    'div',
                    {
                      className: l()(
                        'wc-block-components-radio-control',
                        {
                          'wc-block-components-radio-control--highlight-checked': i,
                          'wc-block-components-radio-control--highlight-checked--first-selected':
                            i && 0 === d,
                          'wc-block-components-radio-control--highlight-checked--last-selected':
                            i && d === s.length - 1,
                        },
                        e,
                      ),
                    },
                    s.map(e => {
                      const t = 'object' == typeof e && 'content' in e,
                        n = e.value === c;
                      return (0, o.createElement)(
                        'div',
                        {
                          className: l()('wc-block-components-radio-control-accordion-option', {
                            'wc-block-components-radio-control-accordion-option--checked-option-highlighted':
                              n && i,
                          }),
                          key: e.value,
                        },
                        (0, o.createElement)($, {
                          name: `radio-control-${m}`,
                          checked: n,
                          option: e,
                          onChange: t => {
                            r(t), 'function' == typeof e.onChange && e.onChange(t);
                          },
                        }),
                        t &&
                          n &&
                          (0, o.createElement)(
                            'div',
                            {
                              className: l()(
                                'wc-block-components-radio-control-accordion-content',
                                { 'wc-block-components-radio-control-accordion-content-hide': !n },
                              ),
                            },
                            e.content,
                          ),
                      );
                    }),
                  )
                : null;
            },
          );
        n(3149);
        const F = (0, p.withInstanceId)(
          ({
            className: e,
            instanceId: t,
            label: n = '',
            onChange: c,
            options: a,
            screenReaderLabel: r,
            value: s = '',
            readOnly: i = !1,
          }) => {
            const m = `wc-block-components-sort-select__select-${t}`;
            return (0, o.createElement)(
              'div',
              { className: l()('wc-block-sort-select', 'wc-block-components-sort-select', e) },
              (0, o.createElement)(I, {
                label: n,
                screenReaderLabel: r,
                wrapperElement: 'label',
                wrapperProps: {
                  className: 'wc-block-sort-select__label wc-block-components-sort-select__label',
                  htmlFor: m,
                },
              }),
              (0, o.createElement)(
                'select',
                {
                  disabled: !!i,
                  id: m,
                  className: 'wc-block-sort-select__select wc-block-components-sort-select__select',
                  onChange: c,
                  value: s,
                },
                a &&
                  a.map(e => (0, o.createElement)('option', { key: e.key, value: e.key }, e.label)),
              ),
            );
          },
        );
        var P = n(1208),
          V = (n(9345), n(2900)),
          B = n(2478),
          j = n(8306);
        const H = e => {
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
          K = e => {
            switch (e) {
              case 'success':
                return V.A;
              case 'warning':
              case 'info':
              case 'error':
                return B.A;
              default:
                return j.A;
            }
          };
        var W = n(195);
        const Y = ({
            className: e,
            status: t = 'default',
            children: n,
            spokenMessage: c = n,
            onRemove: r = () => {},
            isDismissible: s = !0,
            politeness: i = H(t),
            summary: m,
          }) => (
            ((e, t) => {
              const n = 'string' == typeof e ? e : (0, a.renderToString)(e);
              (0, a.useEffect)(() => {
                n && (0, W.speak)(n, t);
              }, [n, t]);
            })(c, i),
            (0, o.createElement)(
              'div',
              {
                className: l()(e, 'wc-block-components-notice-banner', 'is-' + t, {
                  'is-dismissible': s,
                }),
              },
              (0, o.createElement)(k.A, { icon: K(t) }),
              (0, o.createElement)(
                'div',
                { className: 'wc-block-components-notice-banner__content' },
                m &&
                  (0, o.createElement)(
                    'p',
                    { className: 'wc-block-components-notice-banner__summary' },
                    m,
                  ),
                n,
              ),
              !!s &&
                (0, o.createElement)(
                  d,
                  {
                    className: 'wc-block-components-notice-banner__dismiss',
                    'aria-label': (0, w.__)('Dismiss this notice', 'woocommerce'),
                    onClick: e => {
                      'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                        e.preventDefault &&
                        e.preventDefault(),
                        r();
                    },
                    removeTextWrap: !0,
                  },
                  (0, o.createElement)(k.A, { icon: P.A }),
                ),
            )
          ),
          Z = ({ className: e, children: t, status: n, ...c }) =>
            (0, o.createElement)(
              Y,
              { className: l()('wc-block-store-notice', e), status: n, ...c },
              t,
            ),
          z = window.wp.data,
          G = window.wc.wcBlocksData,
          U = window.wc.wcTypes;
        let J = (function(e) {
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
        (0, w.__)('Something went wrong. Please contact us to get assistance.', 'woocommerce'),
          n(6249);
        var q = n(1359),
          X = n.n(q);
        const Q = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
          ee = ['target', 'href', 'rel', 'name', 'download'],
          te = (e, t) => {
            const n = (null == t ? void 0 : t.tags) || Q,
              o = (null == t ? void 0 : t.attr) || ee;
            return X().sanitize(e, { ALLOWED_TAGS: n, ALLOWED_ATTR: o });
          };
        function ne(e, t) {
          const n = (0, a.useRef)();
          return (
            (0, a.useEffect)(() => {
              n.current === e || (t && !t(e, n.current)) || (n.current = e);
            }, [e, t]),
            n.current
          );
        }
        const oe = window.wp.htmlEntities,
          ce = ({ className: e, notices: t }) => {
            const n = (0, a.useRef)(null),
              { removeNotice: c } = (0, z.useDispatch)('core/notices'),
              r = t.map(e => e.id),
              s = ne(r);
            (0, a.useEffect)(() => {
              const e = n.current;
              if (!e) return;
              const t = e.ownerDocument.activeElement;
              (t &&
                -1 !== ['input', 'select', 'button', 'textarea'].indexOf(t.tagName.toLowerCase()) &&
                'radio' !== t.getAttribute('type')) ||
                (r.filter(e => !s || !s.includes(e)).length &&
                  null != e &&
                  e.scrollIntoView &&
                  e.scrollIntoView({ behavior: 'smooth' }));
            }, [r, s, n]);
            const i = t.filter(({ isDismissible: e }) => !!e),
              m = t.filter(({ isDismissible: e }) => !e),
              d = {
                error: i.filter(({ status: e }) => 'error' === e),
                success: i.filter(({ status: e }) => 'success' === e),
                warning: i.filter(({ status: e }) => 'warning' === e),
                info: i.filter(({ status: e }) => 'info' === e),
                default: i.filter(({ status: e }) => 'default' === e),
              };
            return (0, o.createElement)(
              'div',
              { ref: n, className: l()(e, 'wc-block-components-notices') },
              m.map(e =>
                (0, o.createElement)(
                  Z,
                  { key: e.id + '-' + e.context, ...e },
                  (0, o.createElement)(a.RawHTML, null, te((0, oe.decodeEntities)(e.content))),
                ),
              ),
              Object.entries(d).map(([e, t]) => {
                if (!t.length) return null;
                const n = t
                    .filter((e, t, n) => n.findIndex(t => t.content === e.content) === t)
                    .map(e => ({ ...e, content: te((0, oe.decodeEntities)(e.content)) })),
                  r = {
                    key: `store-notice-${e}`,
                    status: e,
                    onRemove: () => {
                      t.forEach(e => {
                        c(e.id, e.context);
                      });
                    },
                  };
                return 1 === n.length
                  ? (0, o.createElement)(
                      Z,
                      { ...r },
                      (0, o.createElement)(a.RawHTML, null, t[0].content),
                    )
                  : (0, o.createElement)(
                      Z,
                      {
                        ...r,
                        summary:
                          'error' === e
                            ? (0, w.__)(
                                'Please fix the following errors before continuing',
                                'woocommerce',
                              )
                            : '',
                      },
                      (0, o.createElement)(
                        'ul',
                        null,
                        n.map(e =>
                          (0, o.createElement)(
                            'li',
                            { key: e.id + '-' + e.context },
                            (0, o.createElement)(a.RawHTML, null, e.content),
                          ),
                        ),
                      ),
                    );
              }),
            );
          };
        var ae = n(9910),
          re = n(6648);
        n(230);
        const le = ({ onRemove: e = () => {}, children: t, listRef: n, className: c, ...r }) => (
            (0, a.useEffect)(() => {
              const t = setTimeout(() => {
                e();
              }, 1e4);
              return () => clearTimeout(t);
            }, [e]),
            (0, o.createElement)(
              Y,
              {
                className: l()(c, 'wc-block-components-notice-snackbar'),
                ...r,
                onRemove: () => {
                  n && n.current && n.current.focus(), e();
                },
              },
              t,
            )
          ),
          se = ({ notices: e, className: t, onRemove: n = () => {} }) => {
            const c = (0, a.useRef)(null),
              r = (0, p.useReducedMotion)(),
              s = e => () => n((null == e ? void 0 : e.id) || '');
            return (0, o.createElement)(
              'div',
              {
                className: l()(t, 'wc-block-components-notice-snackbar-list'),
                tabIndex: -1,
                ref: c,
              },
              r
                ? e.map(e => {
                    const { content: t, ...n } = e;
                    return (0, o.createElement)(
                      le,
                      { ...n, onRemove: s(e), listRef: c, key: e.id },
                      e.content,
                    );
                  })
                : (0, o.createElement)(
                    ae.A,
                    null,
                    e.map(e => {
                      const { content: t, ...n } = e;
                      return (0, o.createElement)(
                        re.A,
                        { key: 'snackbar-' + e.id, timeout: 500, classNames: 'notice-transition' },
                        (0, o.createElement)(le, { ...n, onRemove: s(e), listRef: c }, t),
                      );
                    }),
                  ),
            );
          },
          ie = ({ className: e, notices: t }) => {
            const { removeNotice: n } = (0, z.useDispatch)('core/notices');
            return (0, o.createElement)(se, {
              className: l()(e, 'wc-block-components-notices__snackbar'),
              notices: t,
              onRemove: e => {
                t.forEach(t => {
                  t.explicitDismiss && t.id === e
                    ? n(t.id, t.context)
                    : t.explicitDismiss || n(t.id, t.context);
                });
              },
            });
          },
          me = (e, t) => e.map(e => ({ ...e, context: t })),
          de = ({ className: e = '', context: t = '', additionalNotices: n = [] }) => {
            const { registerContainer: c, unregisterContainer: r } = (0, z.useDispatch)(
                G.STORE_NOTICES_STORE_KEY,
              ),
              { suppressNotices: l, registeredContainers: s } = (0, z.useSelect)(e => ({
                suppressNotices: e(G.PAYMENT_STORE_KEY).isExpressPaymentMethodActive(),
                registeredContainers: e(G.STORE_NOTICES_STORE_KEY).getRegisteredContainers(),
              })),
              i = (0, a.useMemo)(() => (Array.isArray(t) ? t : [t]), [t]),
              m = Object.values(J).filter(e => i.some(t => e.includes(t + '/')) && !s.includes(e)),
              d = (0, z.useSelect)(e => {
                const { getNotices: t } = e('core/notices');
                return [
                  ...m.flatMap(e => me(t(e), e)),
                  ...i.flatMap(e => me(t(e).concat(n), e)),
                ].filter(Boolean);
              });
            return (
              (0, a.useEffect)(
                () => (
                  i.map(e => c(e)),
                  () => {
                    i.map(e => r(e));
                  }
                ),
                [i, c, r],
              ),
              l
                ? null
                : (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(ce, {
                      className: e,
                      notices: d.filter(e => 'default' === e.type),
                    }),
                    (0, o.createElement)(ie, {
                      className: e,
                      notices: d.filter(e => 'snackbar' === e.type),
                    }),
                  )
            );
          };
        n(8112);
        const ue = ({
          className: e = '',
          disabled: t = !1,
          onTextChange: n,
          placeholder: c,
          value: a = '',
        }) =>
          (0, o.createElement)('textarea', {
            className: l()('wc-block-components-textarea', e),
            disabled: t,
            onChange: e => {
              n(e.target.value);
            },
            placeholder: c,
            rows: 2,
            value: a,
          });
        n(4632);
        const pe = (0, a.forwardRef)(
          (
            {
              className: e,
              id: t,
              type: n = 'text',
              ariaLabel: c,
              ariaDescribedBy: r,
              label: s,
              screenReaderLabel: i,
              disabled: m,
              help: d,
              autoCapitalize: u = 'off',
              autoComplete: p = 'off',
              value: b = '',
              onChange: h,
              required: w = !1,
              onBlur: E = () => {},
              feedback: v,
              ...k
            },
            f,
          ) => {
            const [_, g] = (0, a.useState)(!1);
            return (0, o.createElement)(
              'div',
              { className: l()('wc-block-components-text-input', e, { 'is-active': _ || b }) },
              (0, o.createElement)('input', {
                type: n,
                id: t,
                value: (0, oe.decodeEntities)(b),
                ref: f,
                autoCapitalize: u,
                autoComplete: p,
                onChange: e => {
                  h(e.target.value);
                },
                onFocus: () => g(!0),
                onBlur: e => {
                  E(e.target.value), g(!1);
                },
                'aria-label': c || s,
                disabled: m,
                'aria-describedby': d && !r ? t + '__help' : r,
                required: w,
                ...k,
              }),
              (0, o.createElement)(I, {
                label: s,
                screenReaderLabel: i || s,
                wrapperElement: 'label',
                wrapperProps: { htmlFor: t },
                htmlFor: t,
              }),
              !!d &&
                (0, o.createElement)(
                  'p',
                  { id: t + '__help', className: 'wc-block-components-text-input__help' },
                  d,
                ),
              v,
            );
          },
        );
        n(7235);
        const be = ({ errorMessage: e = '', propertyName: t = '', elementId: n = '' }) => {
            const { validationError: c, validationErrorId: a } = (0, z.useSelect)(e => {
              const o = e(G.VALIDATION_STORE_KEY);
              return {
                validationError: o.getValidationError(t),
                validationErrorId: o.getValidationErrorId(n),
              };
            });
            if (!e || 'string' != typeof e) {
              if (null == c || !c.message || (null != c && c.hidden)) return null;
              e = c.message;
            }
            return (0, o.createElement)(
              'div',
              { className: 'wc-block-components-validation-error', role: 'alert' },
              (0, o.createElement)('p', { id: a }, e),
            );
          },
          he = be,
          we = (e, t) => {
            const {
              valid: n,
              customError: o,
              valueMissing: c,
              badInput: a,
              typeMismatch: r,
            } = t.validity;
            if (n || o) return t.validationMessage;
            const l = (0, w.sprintf) /* translators: %s field label */(
              /* translators: %s field label */
              (0, w.__)('Please enter a valid %s', 'woocommerce'),
              e.toLowerCase(),
            );
            return c || a || r ? l : t.validationMessage || l;
          };
        var Ee = n(4177);
        const ve = new Map([
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
          ke =
            (new Map([...Ee.O, ...ve]),
            (0, a.forwardRef)(
              (
                {
                  className: e,
                  id: t,
                  type: n = 'text',
                  ariaDescribedBy: c,
                  errorId: r,
                  focusOnMount: s = !1,
                  onChange: i,
                  showError: m = !0,
                  errorMessage: d = '',
                  value: u = '',
                  customValidation: b = () => !0,
                  customFormatter: h = e => e,
                  label: w,
                  validateOnMount: E = !0,
                  instanceId: v = '',
                  ...k
                },
                f,
              ) => {
                const [_, g] = (0, a.useState)(!0),
                  N = ne(u),
                  y = (0, a.useRef)(null),
                  x = (0, p.useInstanceId)(ke, '', v),
                  C = void 0 !== t ? t : 'textinput-' + x,
                  S = void 0 !== r ? r : C,
                  { setValidationErrors: I, hideValidationError: T, clearValidationError: O } = (0,
                  z.useDispatch)(G.VALIDATION_STORE_KEY),
                  R = (0, a.useRef)(b);
                (0, a.useEffect)(() => {
                  R.current = b;
                }, [b]);
                const { validationError: A, validationErrorId: $ } = (0, z.useSelect)(e => {
                    const t = e(G.VALIDATION_STORE_KEY);
                    return {
                      validationError: t.getValidationError(S),
                      validationErrorId: t.getValidationErrorId(S),
                    };
                  }),
                  M = (0, a.useCallback)(
                    (e = !0) => {
                      const t = y.current || null;
                      null !== t &&
                        ((t.value = t.value.trim()),
                        t.setCustomValidity(''),
                        t.checkValidity() && R.current(t)
                          ? O(S)
                          : I({ [S]: { message: w ? we(w, t) : t.validationMessage, hidden: e } }));
                    },
                    [O, S, I, w],
                  );
                (0, a.useImperativeHandle)(
                  f,
                  function() {
                    return {
                      revalidate() {
                        M(!u);
                      },
                    };
                  },
                  [M, u],
                ),
                  (0, a.useEffect)(() => {
                    var e, t;
                    if (
                      u !== N &&
                      (u || N) &&
                      y &&
                      null !== y.current &&
                      (null === (e = y.current) ||
                      void 0 === e ||
                      null === (t = e.ownerDocument) ||
                      void 0 === t
                        ? void 0
                        : t.activeElement) !== y.current
                    ) {
                      const e = h(y.current.value);
                      e !== u ? i(e) : M(!0);
                    }
                  }, [M, h, u, N, i]),
                  (0, a.useEffect)(() => {
                    var e;
                    _ &&
                      (g(!1),
                      s && (null === (e = y.current) || void 0 === e || e.focus()),
                      (!E && s) || M(!0));
                  }, [E, s, _, g, M]),
                  (0, a.useEffect)(
                    () => () => {
                      O(S);
                    },
                    [O, S],
                  ),
                  '' !== d && (0, U.isObject)(A) && (A.message = d);
                const D = (null == A ? void 0 : A.message) && !(null != A && A.hidden),
                  L = m && D && $ ? $ : c;
                return (0, o.createElement)(pe, {
                  className: l()(e, { 'has-error': D }),
                  'aria-invalid': !0 === D,
                  id: C,
                  type: n,
                  feedback: m
                    ? (0, o.createElement)(be, { errorMessage: d, propertyName: S })
                    : null,
                  ref: y,
                  onChange: e => {
                    T(S), M(!0);
                    const t = h(e);
                    t !== u && i(t);
                  },
                  onBlur: () => M(!1),
                  ariaDescribedBy: L,
                  value: u,
                  title: '',
                  label: w,
                  ...k,
                });
              },
            )),
          fe = ke;
        n(1157);
        const _e = ({ value: e, currency: t }) =>
            (0, a.isValidElement)(e)
              ? (0, o.createElement)(
                  'div',
                  { className: 'wc-block-components-totals-item__value' },
                  e,
                )
              : Number.isFinite(e)
              ? (0, o.createElement)(S, {
                  className: 'wc-block-components-totals-item__value',
                  currency: t || {},
                  value: e,
                })
              : null,
          ge = ({ className: e, currency: t, label: n, value: c, description: a }) =>
            (0, o.createElement)(
              'div',
              { className: l()('wc-block-components-totals-item', e) },
              (0, o.createElement)(
                'span',
                { className: 'wc-block-components-totals-item__label' },
                n,
              ),
              (0, o.createElement)(_e, { value: c, currency: t }),
              (0, o.createElement)(
                'div',
                { className: 'wc-block-components-totals-item__description' },
                a,
              ),
            ),
          Ne = window.wc.wcSettings,
          ye = ({ currency: e, values: t, className: n }) => {
            const { total_items: c, total_items_tax: a } = t,
              r = parseInt(c, 10),
              l = parseInt(a, 10);
            return (0, o.createElement)(ge, {
              className: n,
              currency: e,
              label: (0, w.__)('Subtotal', 'woocommerce'),
              value: (0, Ne.getSetting)('displayCartPricesIncludingTax', !1) ? r + l : r,
            });
          },
          xe = ({ currency: e, values: t, className: n, showRateAfterTaxName: c }) => {
            const { total_tax: a, tax_lines: r } = t;
            if (!(0, Ne.getSetting)('taxesEnabled', !0) && parseInt(a, 10) <= 0) return null;
            const s = (0, Ne.getSetting)('displayItemizedTaxes', !1),
              i =
                s && r.length > 0
                  ? (0, o.createElement)(
                      o.Fragment,
                      null,
                      r.map(({ name: t, rate: a, price: r }, s) => {
                        const i = `${t}${c ? ` ${a}` : ''}`;
                        return (0, o.createElement)(ge, {
                          key: `tax-line-${s}`,
                          className: l()('wc-block-components-totals-taxes', n),
                          currency: e,
                          label: i,
                          value: parseInt(r, 10),
                        });
                      }),
                      ' ',
                    )
                  : null;
            return s
              ? i
              : (0, o.createElement)(
                  o.Fragment,
                  null,
                  (0, o.createElement)(ge, {
                    className: l()('wc-block-components-totals-taxes', n),
                    currency: e,
                    label: (0, w.__)('Taxes', 'woocommerce'),
                    value: parseInt(a, 10),
                    description: null,
                  }),
                );
          },
          Ce = ({ currency: e, cartFees: t, className: n }) =>
            (0, o.createElement)(
              o.Fragment,
              null,
              t.map(({ id: t, key: c, name: a, totals: r }, s) => {
                const i = parseInt(r.total, 10);
                if (!i) return null;
                const m = parseInt(r.total_tax, 10);
                return (0, o.createElement)(ge, {
                  key: t || `${s}-${a}`,
                  className: l()(
                    'wc-block-components-totals-fees',
                    'wc-block-components-totals-fees__' + c,
                    n,
                  ),
                  currency: e,
                  label: a || (0, w.__)('Fee', 'woocommerce'),
                  value: (0, Ne.getSetting)('displayCartPricesIncludingTax', !1) ? i + m : i,
                });
              }),
            );
        n(7015);
        const Se = ({ children: e, slotWrapper: t = !1, className: n }) =>
          a.Children.count(e)
            ? (0, o.createElement)(
                'div',
                { className: l()(n, 'wc-block-components-totals-wrapper', { 'slot-wrapper': t }) },
                e,
              )
            : null;
      },
      2080: () => {},
      9345: () => {},
      230: () => {},
      2031: () => {},
      294: () => {},
      4456: () => {},
      2849: () => {},
      9297: () => {},
      5440: () => {},
      6785: () => {},
      3149: () => {},
      7791: () => {},
      6249: () => {},
      4632: () => {},
      8112: () => {},
      1908: () => {},
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
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
    },
    c = {};
  function a(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var n = (c[e] = { exports: {} });
    return o[e].call(n.exports, n, n.exports, a), n.exports;
  }
  (a.m = o),
    (e = []),
    (a.O = (t, n, o, c) => {
      if (!n) {
        var r = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [n, o, c] = e[m], l = !0, s = 0; s < n.length; s++)
            (!1 & c || r >= c) && Object.keys(a.O).every(e => a.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((l = !1), c < r && (r = c));
          if (l) {
            e.splice(m--, 1);
            var i = o();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      c = c || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > c; m--) e[m] = e[m - 1];
      e[m] = [n, o, c];
    }),
    (a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (a.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var c = Object.create(null);
      a.r(c);
      var r = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var l = 2 & o && e; 'object' == typeof l && !~t.indexOf(l); l = n(l))
        Object.getOwnPropertyNames(l).forEach(t => (r[t] = () => e[t]));
      return (r.default = () => e), a.d(c, r), c;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.j = 6981),
    (() => {
      var e = { 6981: 0 };
      a.O.j = t => 0 === e[t];
      var t = (t, n) => {
          var o,
            c,
            [r, l, s] = n,
            i = 0;
          if (r.some(t => 0 !== e[t])) {
            for (o in l) a.o(l, o) && (a.m[o] = l[o]);
            if (s) var m = s(a);
          }
          for (t && t(n); i < r.length; i++) (c = r[i]), a.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return a.O(m);
        },
        n = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var r = a.O(void 0, [94], () => a(9517));
  (r = a.O(r)), ((wc = void 0 === wc ? {} : wc).blocksComponents = r);
})();
