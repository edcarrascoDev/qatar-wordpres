var wc;
(() => {
  var e,
    t,
    r,
    n = {
      9114: (e, t, r) => {
        'use strict';
        r.r(t);
        var n = r(1609),
          o = r(6087),
          i = r(2294),
          c = r(7723);
        const a = window.wc.wcSettings;
        var s, l, u, p, m, d, b, g, _, w;
        const f = (0, a.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          E = f.pluginUrl + 'assets/images/',
          h =
            (f.pluginUrl,
            f.buildPhase,
            null === (s = a.STORE_PAGES.shop) || void 0 === s || s.permalink,
            null === (l = a.STORE_PAGES.checkout) || void 0 === l || l.id,
            null === (u = a.STORE_PAGES.checkout) || void 0 === u || u.permalink,
            null === (p = a.STORE_PAGES.privacy) || void 0 === p || p.permalink,
            null === (m = a.STORE_PAGES.privacy) || void 0 === m || m.title,
            null === (d = a.STORE_PAGES.terms) || void 0 === d || d.permalink,
            null === (b = a.STORE_PAGES.terms) || void 0 === b || b.title,
            null === (g = a.STORE_PAGES.cart) || void 0 === g || g.id,
            null === (_ = a.STORE_PAGES.cart) || void 0 === _ || _.permalink,
            null !== (w = a.STORE_PAGES.myaccount) && void 0 !== w && w.permalink
              ? a.STORE_PAGES.myaccount.permalink
              : (0, a.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, a.getSetting)('localPickupEnabled', !1),
            (0, a.getSetting)('countries', {})),
          k = (0, a.getSetting)('countryData', {}),
          y =
            (Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, h[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, h[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(Object.keys(k).map(e => [e, k[e].locale || []])),
            {
              address: [
                'first_name',
                'last_name',
                'company',
                'address_1',
                'address_2',
                'city',
                'postcode',
                'country',
                'state',
                'phone',
              ],
              contact: ['email'],
              order: [],
            }),
          v =
            ((0, a.getSetting)('addressFieldsLocations', y).address,
            (0, a.getSetting)('addressFieldsLocations', y).contact,
            (0, a.getSetting)('addressFieldsLocations', y).order,
            (0, a.getSetting)('additionalOrderFields', {}),
            (0, a.getSetting)('additionalContactFields', {}),
            (0, a.getSetting)('additionalAddressFields', {}),
            ({
              imageUrl: e = `${E}/block-error.svg`,
              header: t = (0, c.__)('Oops!', 'woocommerce'),
              text: r = (0, c.__)('There was an error loading the content.', 'woocommerce'),
              errorMessage: o,
              errorMessagePrefix: i = (0, c.__)('Error:', 'woocommerce'),
              button: a,
              showErrorBlock: s = !0,
            }) =>
              s
                ? (0, n.createElement)(
                    'div',
                    { className: 'wc-block-error wc-block-components-error' },
                    e &&
                      (0, n.createElement)('img', {
                        className: 'wc-block-error__image wc-block-components-error__image',
                        src: e,
                        alt: '',
                      }),
                    (0, n.createElement)(
                      'div',
                      { className: 'wc-block-error__content wc-block-components-error__content' },
                      t &&
                        (0, n.createElement)(
                          'p',
                          { className: 'wc-block-error__header wc-block-components-error__header' },
                          t,
                        ),
                      r &&
                        (0, n.createElement)(
                          'p',
                          { className: 'wc-block-error__text wc-block-components-error__text' },
                          r,
                        ),
                      o &&
                        (0, n.createElement)(
                          'p',
                          {
                            className: 'wc-block-error__message wc-block-components-error__message',
                          },
                          i ? i + ' ' : '',
                          o,
                        ),
                      a &&
                        (0, n.createElement)(
                          'p',
                          { className: 'wc-block-error__button wc-block-components-error__button' },
                          a,
                        ),
                    ),
                  )
                : null);
        r(9407);
        class S extends o.Component {
          constructor(...e) {
            super(...e), (0, i.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)('strong', null, e.status),
                    ': ',
                    e.statusText,
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: t,
                showErrorMessage: r = !0,
                showErrorBlock: o = !0,
                text: i,
                errorMessagePrefix: c,
                renderError: a,
                button: s,
              } = this.props,
              { errorMessage: l, hasError: u } = this.state;
            return u
              ? 'function' == typeof a
                ? a({ errorMessage: l })
                : (0, n.createElement)(v, {
                    showErrorBlock: o,
                    errorMessage: r ? l : null,
                    header: e,
                    imageUrl: t,
                    text: i,
                    errorMessagePrefix: c,
                    button: s,
                  })
              : this.props.children;
          }
        }
        const x = S,
          P = ['.wp-block-woocommerce-cart'],
          F = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: i = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, c) => {
                const a = r(t, c),
                  s = i(t, c),
                  l = { ...t.dataset, ...(a.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: i = {},
                  errorBoundaryProps: c = {},
                }) => {
                  (0, o.render)(
                    (0, n.createElement)(
                      x,
                      { ...c },
                      (0, n.createElement)(
                        o.Suspense,
                        {
                          fallback: (0, n.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, n.createElement)(e, { ...i, attributes: r }),
                      ),
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: t, props: a, attributes: l, errorBoundaryProps: s });
              });
          };
        function O(e, t) {
          const r = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              r.current === e || (t && !t(e, r.current)) || (r.current = e);
            }, [e, t]),
            r.current
          );
        }
        const C = window.wc.wcBlocksData,
          N = window.wp.data;
        var R = r(923),
          A = r.n(R);
        const B = (0, o.createContext)('page'),
          T = () => (0, o.useContext)(B),
          j =
            (B.Provider,
            e => {
              const t = T();
              e = e || t;
              const r = (0, N.useSelect)(
                  t => t(C.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: n } = (0, N.useDispatch)(C.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, o.useCallback)(
                  t => {
                    n(e, t);
                  },
                  [e, n],
                ),
              ];
            }),
          U = (e, t, r) => {
            const n = T();
            r = r || n;
            const i = (0, N.useSelect)(
                n => n(C.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: c } = (0, N.useDispatch)(C.QUERY_STATE_STORE_KEY);
            return [
              i,
              (0, o.useCallback)(
                t => {
                  c(r, e, t);
                },
                [r, e, c],
              ),
            ];
          };
        var L = r(4717);
        const M = window.wc.wcTypes;
        var I = r(5574);
        function q(e) {
          const t = (0, o.useRef)(e);
          return A()(e, t.current) || (t.current = e), t.current;
        }
        const Q = ({
          queryAttribute: e,
          queryPrices: t,
          queryStock: r,
          queryRating: n,
          queryState: i,
          isEditor: c = !1,
        }) => {
          let a = T();
          a = `${a}-collection-data`;
          const [s] = j(a),
            [l, u] = U('calculate_attribute_counts', [], a),
            [p, m] = U('calculate_price_range', null, a),
            [d, b] = U('calculate_stock_status_counts', null, a),
            [g, _] = U('calculate_rating_counts', null, a),
            w = q(e || {}),
            f = q(t),
            E = q(r),
            h = q(n);
          (0, o.useEffect)(() => {
            'object' == typeof w &&
              Object.keys(w).length &&
              (l.find(e => (0, M.objectHasProp)(w, 'taxonomy') && e.taxonomy === w.taxonomy) ||
                u([...l, w]));
          }, [w, l, u]),
            (0, o.useEffect)(() => {
              p !== f && void 0 !== f && m(f);
            }, [f, m, p]),
            (0, o.useEffect)(() => {
              d !== E && void 0 !== E && b(E);
            }, [E, b, d]),
            (0, o.useEffect)(() => {
              g !== h && void 0 !== h && _(h);
            }, [h, _, g]);
          const [k, y] = (0, o.useState)(c),
            [v] = (0, L.d7)(k, 200);
          k || y(!0);
          const S = (0, o.useMemo)(
            () =>
              (e => {
                const t = e;
                return (
                  Array.isArray(e.calculate_attribute_counts) &&
                    (t.calculate_attribute_counts = (0, I.di)(
                      e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                        taxonomy: e,
                        query_type: t,
                      })),
                    ).asc(['taxonomy', 'query_type'])),
                  t
                );
              })(s),
            [s],
          );
          return (e => {
            const {
              namespace: t,
              resourceName: r,
              resourceValues: n = [],
              query: i = {},
              shouldSelect: c = !0,
            } = e;
            if (!t || !r)
              throw new Error(
                'The options object must have valid values for the namespace and the resource properties.',
              );
            const a = (0, o.useRef)({ results: [], isLoading: !0 }),
              s = q(i),
              l = q(n),
              u = (() => {
                const [, e] = (0, o.useState)();
                return (0, o.useCallback)(t => {
                  e(() => {
                    throw t;
                  });
                }, []);
              })(),
              p = (0, N.useSelect)(
                e => {
                  if (!c) return null;
                  const n = e(C.COLLECTIONS_STORE_KEY),
                    o = [t, r, s, l],
                    i = n.getCollectionError(...o);
                  if (i) {
                    if (!(0, M.isError)(i))
                      throw new Error(
                        'TypeError: `error` object is not an instance of Error constructor',
                      );
                    u(i);
                  }
                  return {
                    results: n.getCollection(...o),
                    isLoading: !n.hasFinishedResolution('getCollection', o),
                  };
                },
                [t, r, l, s, c],
              );
            return null !== p && (a.current = p), a.current;
          })({
            namespace: '/wc/store/v1',
            resourceName: 'products/collection-data',
            query: { ...i, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...S },
            shouldSelect: v,
          });
        };
        var G = r(9019),
          V = r.n(G);
        const Y = window.wc.blocksComponents;
        r(9505);
        const D = (e, t, r, n = 1, o = !1) => {
          let [i, c] = e;
          const a = e => Number.isFinite(e);
          return (
            a(i) || (i = t || 0),
            a(c) || (c = r || n),
            a(t) && t > i && (i = t),
            a(r) && r <= i && (i = r - n),
            a(t) && t >= c && (c = t + n),
            a(r) && r < c && (c = r),
            !o && i >= c && (i = c - n),
            o && c <= i && (c = i + n),
            [i, c]
          );
        };
        r(1504);
        const W = ({
            className: e,
            isLoading: t,
            disabled: r,
            /* translators: Submit button text for filters. */
            label: o = (0, c.__)('Apply', 'woocommerce'),
            onClick: i,
            screenReaderLabel: a = (0, c.__)('Apply filter', 'woocommerce'),
          }) =>
            (0, n.createElement)(
              'button',
              {
                type: 'submit',
                className: V()(
                  'wp-block-button__link',
                  'wc-block-filter-submit-button',
                  'wc-block-components-filter-submit-button',
                  { 'is-loading': t },
                  e,
                ),
                disabled: r,
                onClick: i,
              },
              (0, n.createElement)(Y.Label, { label: o, screenReaderLabel: a }),
            ),
          K = ({ maxConstraint: e, minorUnit: t }) => ({ floatValue: r }) =>
            void 0 !== r && r <= e / 10 ** t && r > 0,
          H = ({ minConstraint: e, currentMaxValue: t, minorUnit: r }) => ({ floatValue: n }) =>
            void 0 !== n && n >= e / 10 ** r && n < t / 10 ** r;
        r(8335);
        const $ = ({
            className: e,
            /* translators: Reset button text for filters. */
            label: t = (0, c.__)('Reset', 'woocommerce'),
            onClick: r,
            screenReaderLabel: o = (0, c.__)('Reset filter', 'woocommerce'),
          }) =>
            (0, n.createElement)(
              'button',
              { className: V()('wc-block-components-filter-reset-button', e), onClick: r },
              (0, n.createElement)(Y.Label, { label: t, screenReaderLabel: o }),
            ),
          z = ({
            minPrice: e,
            maxPrice: t,
            minConstraint: r,
            maxConstraint: i,
            onChange: a,
            step: s,
            currency: l,
            showInputFields: u = !0,
            showFilterButton: p = !1,
            inlineInput: m = !0,
            isLoading: d = !1,
            isUpdating: b = !1,
            isEditor: g = !1,
            onSubmit: _ = () => {},
          }) => {
            const w = (0, o.useRef)(null),
              f = (0, o.useRef)(null),
              E = s || 10 ** l.minorUnit,
              [h, k] = (0, o.useState)(e),
              [y, v] = (0, o.useState)(t),
              S = (0, o.useRef)(null),
              [x, P] = (0, o.useState)(0);
            (0, o.useEffect)(() => {
              k(e);
            }, [e]),
              (0, o.useEffect)(() => {
                v(t);
              }, [t]),
              (0, o.useLayoutEffect)(() => {
                var e;
                m &&
                  S.current &&
                  P(null === (e = S.current) || void 0 === e ? void 0 : e.offsetWidth);
              }, [m, P]);
            const F = (0, o.useMemo)(() => isFinite(r) && isFinite(i), [r, i]),
              O = (0, o.useMemo)(
                () =>
                  isFinite(e) && isFinite(t) && F
                    ? {
                        '--low': ((e - r) / (i - r)) * 100 + '%',
                        '--high': ((t - r) / (i - r)) * 100 + '%',
                      }
                    : { '--low': '0%', '--high': '100%' },
                [e, t, r, i, F],
              ),
              C = (0, o.useCallback)(
                e => {
                  if (d || !F || !w.current || !f.current) return;
                  const t = e.target.getBoundingClientRect(),
                    r = e.clientX - t.left,
                    n = w.current.offsetWidth,
                    o = +w.current.value,
                    c = f.current.offsetWidth,
                    a = +f.current.value,
                    s = n * (o / i),
                    l = c * (a / i);
                  Math.abs(r - s) > Math.abs(r - l)
                    ? ((w.current.style.zIndex = '20'), (f.current.style.zIndex = '21'))
                    : ((w.current.style.zIndex = '21'), (f.current.style.zIndex = '20'));
                },
                [d, i, F],
              ),
              N = (0, o.useCallback)(
                n => {
                  const o = n.target.classList.contains('wc-block-price-filter__range-input--min'),
                    c = +n.target.value,
                    s = o ? [Math.round(c / E) * E, t] : [e, Math.round(c / E) * E],
                    l = D(s, r, i, E, o);
                  a(l);
                },
                [a, e, t, r, i, E],
              ),
              R = (0, o.useCallback)(
                e => {
                  if (
                    e.relatedTarget &&
                    e.relatedTarget.classList &&
                    e.relatedTarget.classList.contains('wc-block-price-filter__amount')
                  )
                    return;
                  const t = e.target.classList.contains('wc-block-price-filter__amount--min');
                  if (h >= y) {
                    const e = D([0, y], null, null, E, t);
                    return a([parseInt(e[0], 10), parseInt(e[1], 10)]);
                  }
                  const r = D([h, y], null, null, E, t);
                  a(r);
                },
                [a, E, h, y],
              ),
              A = (0, L.YQ)(_, 600),
              B = V()(
                'wc-block-price-filter',
                'wc-block-components-price-slider',
                u && 'wc-block-price-filter--has-input-fields',
                u && 'wc-block-components-price-slider--has-input-fields',
                p && 'wc-block-price-filter--has-filter-button',
                p && 'wc-block-components-price-slider--has-filter-button',
                !F && 'is-disabled',
                (m || x <= 300) && 'wc-block-components-price-slider--is-input-inline',
              ),
              T = (0, M.isObject)(w.current) ? w.current.ownerDocument.activeElement : void 0,
              j = T && T === w.current ? E : 1,
              U = T && T === f.current ? E : 1,
              I = String(h / 10 ** l.minorUnit),
              q = String(y / 10 ** l.minorUnit),
              Q = m && x > 300,
              G = (0, n.createElement)(
                'div',
                {
                  className: V()(
                    'wc-block-price-filter__range-input-wrapper',
                    'wc-block-components-price-slider__range-input-wrapper',
                    { 'is-loading': d && b },
                  ),
                  onMouseMove: C,
                  onFocus: C,
                },
                F &&
                  (0, n.createElement)(
                    'div',
                    { 'aria-hidden': u },
                    (0, n.createElement)('div', {
                      className:
                        'wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress',
                      style: O,
                    }),
                    (0, n.createElement)('input', {
                      type: 'range',
                      className:
                        'wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min',
                      'aria-label': (0, c.__)('Filter products by minimum price', 'woocommerce'),
                      'aria-valuetext': I,
                      value: Number.isFinite(e) ? e : r,
                      onChange: N,
                      step: j,
                      min: r,
                      max: i,
                      ref: w,
                      disabled: d && !F,
                      tabIndex: u ? -1 : 0,
                    }),
                    (0, n.createElement)('input', {
                      type: 'range',
                      className:
                        'wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max',
                      'aria-label': (0, c.__)('Filter products by maximum price', 'woocommerce'),
                      'aria-valuetext': q,
                      value: Number.isFinite(t) ? t : i,
                      onChange: N,
                      step: U,
                      min: r,
                      max: i,
                      ref: f,
                      disabled: d,
                      tabIndex: u ? -1 : 0,
                    }),
                  ),
              ),
              z = e =>
                `wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,
              J = { currency: l, decimalScale: 0 },
              X = { ...J, displayType: 'input', allowNegative: !1, disabled: d || !F, onBlur: R };
            return (0, n.createElement)(
              'div',
              { className: B, ref: S },
              (!Q || !u) && G,
              u &&
                (0, n.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-price-filter__controls wc-block-components-price-slider__controls',
                  },
                  b
                    ? (0, n.createElement)('div', { className: 'input-loading' })
                    : (0, n.createElement)(Y.FormattedMonetaryAmount, {
                        ...X,
                        className: z('min'),
                        'aria-label': (0, c.__)('Filter products by minimum price', 'woocommerce'),
                        isAllowed: H({
                          minConstraint: r,
                          minorUnit: l.minorUnit,
                          currentMaxValue: y,
                        }),
                        onValueChange: e => {
                          e !== h && k(e);
                        },
                        value: h,
                      }),
                  Q && G,
                  b
                    ? (0, n.createElement)('div', { className: 'input-loading' })
                    : (0, n.createElement)(Y.FormattedMonetaryAmount, {
                        ...X,
                        className: z('max'),
                        'aria-label': (0, c.__)('Filter products by maximum price', 'woocommerce'),
                        isAllowed: K({ maxConstraint: i, minorUnit: l.minorUnit }),
                        onValueChange: e => {
                          e !== y && v(e);
                        },
                        value: y,
                      }),
                ),
              !u &&
                !b &&
                Number.isFinite(e) &&
                Number.isFinite(t) &&
                (0, n.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-price-filter__range-text wc-block-components-price-slider__range-text',
                  },
                  (0, n.createElement)(Y.FormattedMonetaryAmount, { ...J, value: e }),
                  (0, n.createElement)(Y.FormattedMonetaryAmount, { ...J, value: t }),
                ),
              (0, n.createElement)(
                'div',
                { className: 'wc-block-components-price-slider__actions' },
                (g || (!b && (e !== r || t !== i))) &&
                  (0, n.createElement)($, {
                    onClick: () => {
                      a([r, i]), A();
                    },
                    screenReaderLabel: (0, c.__)('Reset price filter', 'woocommerce'),
                  }),
                p &&
                  (0, n.createElement)(W, {
                    className:
                      'wc-block-price-filter__button wc-block-components-price-slider__button',
                    isLoading: b,
                    disabled: d || !F,
                    onClick: _,
                    screenReaderLabel: (0, c.__)('Apply price filter', 'woocommerce'),
                  }),
              ),
            );
          };
        r(1626);
        const J = ({ children: e }) =>
            (0, n.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e),
          X = window.wc.priceFormat,
          Z = window.wp.url,
          ee = (0, a.getSettingWithCoercion)('isRenderingPhpTemplate', !1, M.isBoolean);
        function te(e) {
          return window ? (0, Z.getQueryArg)(window.location.href, e) : null;
        }
        function re(e) {
          if (ee) {
            const t = new URL(e);
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
              t.searchParams.delete('paged'),
              t.searchParams.forEach((e, r) => {
                r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
              }),
              (window.location.href = t.href);
          } else window.history.replaceState({}, '', e);
        }
        const ne = 'ROUND_UP',
          oe = 'ROUND_DOWN',
          ie = (e, t, r) => {
            const n = 10 * 10 ** t;
            let o = null;
            const i = parseFloat(e);
            isNaN(i) ||
              (r === ne ? (o = Math.ceil(i / n) * n) : r === oe && (o = Math.floor(i / n) * n));
            const c = O(o, Number.isFinite);
            return Number.isFinite(o) ? o : c;
          };
        r(8836);
        const ce = (0, o.createContext)({});
        function ae(e, t) {
          return Number(e) * 10 ** t;
        }
        const se = JSON.parse('{"uK":{"F8":{"A":3}}}');
        (e => {
          const t = document.body.querySelectorAll(P.join(',')),
            { Block: r, getProps: n, getErrorBoundaryProps: o, selector: i } = e;
          (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: n, wrappers: o }) => {
            const i = document.body.querySelectorAll(n);
            o &&
              o.length > 0 &&
              Array.prototype.filter.call(
                i,
                e =>
                  !((e, t) => Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(
                    e,
                    o,
                  ),
              ),
              F({ Block: e, containers: i, getProps: t, getErrorBoundaryProps: r });
          })({ Block: r, getProps: n, getErrorBoundaryProps: o, selector: i, wrappers: t }),
            Array.prototype.forEach.call(t, t => {
              t.addEventListener('wc-blocks_render_blocks_frontend', () => {
                (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: n, wrapper: o }) => {
                  const i = o.querySelectorAll(n);
                  F({ Block: e, containers: i, getProps: t, getErrorBoundaryProps: r });
                })({ ...e, wrapper: t });
              });
            });
        })({
          selector: '.wp-block-woocommerce-price-filter',
          Block: ({ attributes: e, isEditor: t = !1 }) => {
            const r = (() => {
                const { wrapper: e } = (0, o.useContext)(ce);
                return t => {
                  e && e.current && (e.current.hidden = !t);
                };
              })(),
              i = (0, a.getSettingWithCoercion)('hasFilterableProducts', !1, M.isBoolean),
              c = (0, a.getSettingWithCoercion)('isRenderingPhpTemplate', !1, M.isBoolean),
              [s, l] = (0, o.useState)(!1),
              u = te('min_price'),
              p = te('max_price'),
              [m] = j(),
              { results: d, isLoading: b } = Q({ queryPrices: !0, queryState: m, isEditor: t }),
              g = (0, X.getCurrencyFromPriceResponse)(
                (0, M.objectHasProp)(d, 'price_range') ? d.price_range : void 0,
              ),
              [_, w] = U('min_price'),
              [f, E] = U('max_price'),
              [h, k] = (0, o.useState)(ae(u, g.minorUnit) || null),
              [y, v] = (0, o.useState)(ae(p, g.minorUnit) || null),
              { minConstraint: S, maxConstraint: x } = (({
                minPrice: e,
                maxPrice: t,
                minorUnit: r,
              }) => ({ minConstraint: ie(e || '', r, oe), maxConstraint: ie(t || '', r, ne) }))({
                minPrice:
                  (0, M.objectHasProp)(d, 'price_range') &&
                  (0, M.objectHasProp)(d.price_range, 'min_price') &&
                  (0, M.isString)(d.price_range.min_price)
                    ? d.price_range.min_price
                    : void 0,
                maxPrice:
                  (0, M.objectHasProp)(d, 'price_range') &&
                  (0, M.objectHasProp)(d.price_range, 'max_price') &&
                  (0, M.isString)(d.price_range.max_price)
                    ? d.price_range.max_price
                    : void 0,
                minorUnit: g.minorUnit,
              });
            (0, o.useEffect)(() => {
              s || (w(ae(u, g.minorUnit)), E(ae(p, g.minorUnit)), l(!0));
            }, [g.minorUnit, s, p, u, E, w]);
            const [P, F] = (0, o.useState)(b),
              C = (0, o.useCallback)(
                (e, t) => {
                  const r = t >= Number(x) ? void 0 : t,
                    n = e <= Number(S) ? void 0 : e;
                  if (window) {
                    const e = (function(e, t) {
                      const r = {};
                      for (const [e, n] of Object.entries(t))
                        n ? (r[e] = n.toString()) : delete r[e];
                      const n = (0, Z.removeQueryArgs)(e, ...Object.keys(t));
                      return (0, Z.addQueryArgs)(n, r);
                    })(window.location.href, {
                      min_price: n / 10 ** g.minorUnit,
                      max_price: r / 10 ** g.minorUnit,
                    });
                    window.location.href !== e && re(e);
                  }
                  w(n), E(r);
                },
                [S, x, w, E, g.minorUnit],
              ),
              N = (0, L.YQ)(C, 500),
              R = (0, o.useCallback)(
                t => {
                  F(!0),
                    t[0] !== h && k(t[0]),
                    t[1] !== y && v(t[1]),
                    c && s && !e.showFilterButton && N(t[0], t[1]);
                },
                [h, y, k, v, c, s, N, e.showFilterButton],
              );
            (0, o.useEffect)(() => {
              e.showFilterButton || c || N(h, y);
            }, [h, y, e.showFilterButton, N, c]);
            const A = O(_),
              B = O(f),
              T = O(S),
              I = O(x);
            if (
              ((0, o.useEffect)(() => {
                (!Number.isFinite(h) || (_ !== A && _ !== h) || (S !== T && S !== h)) &&
                  k(Number.isFinite(_) ? _ : S),
                  (!Number.isFinite(y) || (f !== B && f !== y) || (x !== I && x !== y)) &&
                    v(Number.isFinite(f) ? f : x);
              }, [h, y, _, f, S, x, T, I, A, B]),
              !i)
            )
              return r(!1), null;
            if (!b && (null === S || null === x || S === x)) return r(!1), null;
            const q = `h${e.headingLevel}`;
            r(!0), !b && P && F(!1);
            const G = (0, n.createElement)(
                q,
                { className: 'wc-block-price-filter__title' },
                e.heading,
              ),
              V = b && P ? (0, n.createElement)(J, null, G) : G;
            return (0, n.createElement)(
              n.Fragment,
              null,
              !t && e.heading && V,
              (0, n.createElement)(
                'div',
                { className: 'wc-block-price-slider' },
                (0, n.createElement)(z, {
                  minConstraint: S,
                  maxConstraint: x,
                  minPrice: h,
                  maxPrice: y,
                  currency: g,
                  showInputFields: e.showInputFields,
                  inlineInput: e.inlineInput,
                  showFilterButton: e.showFilterButton,
                  onChange: R,
                  onSubmit: () => C(h, y),
                  isLoading: b,
                  isUpdating: P,
                  isEditor: t,
                }),
              ),
            );
          },
          getProps: e => {
            return {
              attributes:
                ((t = e.dataset),
                {
                  heading: (0, M.isString)(null == t ? void 0 : t.heading) ? t.heading : '',
                  headingLevel:
                    ((0, M.isString)(null == t ? void 0 : t.headingLevel) &&
                      parseInt(t.headingLevel, 10)) ||
                    se.uK.F8.A,
                  showFilterButton: 'true' === (null == t ? void 0 : t.showFilterButton),
                  showInputFields: 'false' !== (null == t ? void 0 : t.showInputFields),
                  inlineInput: 'true' === (null == t ? void 0 : t.inlineInput),
                }),
              isEditor: !1,
            };
            var t;
          },
        });
      },
      9407: () => {},
      1626: () => {},
      8335: () => {},
      1504: () => {},
      9505: () => {},
      8836: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
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
    },
    o = {};
  function i(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return n[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = n),
    (e = []),
    (i.O = (t, r, n, o) => {
      if (!r) {
        var c = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, n, o] = e[u], a = !0, s = 0; s < r.length; s++)
            (!1 & o || c >= o) && Object.keys(i.O).every(e => i.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((a = !1), o < c && (c = o));
          if (a) {
            e.splice(u--, 1);
            var l = n();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      o = o || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
      e[u] = [r, n, o];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ('object' == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && 'function' == typeof e.then) return e;
      }
      var o = Object.create(null);
      i.r(o);
      var c = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & n && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (c[t] = () => e[t]));
      return (c.default = () => e), i.d(o, c), o;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 1493),
    (() => {
      var e = { 1493: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var n,
            o,
            [c, a, s] = r,
            l = 0;
          if (c.some(t => 0 !== e[t])) {
            for (n in a) i.o(a, n) && (i.m[n] = a[n]);
            if (s) var u = s(i);
          }
          for (t && t(r); l < c.length; l++) (o = c[l]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return i.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var c = i.O(void 0, [94], () => i(9114));
  (c = i.O(c)), ((wc = void 0 === wc ? {} : wc)['price-filter'] = c);
})();
