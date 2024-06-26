(() => {
  var e,
    t,
    r,
    n = {
      2767: (e, t, r) => {
        'use strict';
        r.r(t);
        var n = r(1609);
        const o = window.wp.blocks;
        var i = r(9019),
          c = r.n(i),
          a = r(7104),
          l = r(3576);
        const s = window.wp.blockEditor;
        var u = r(7723);
        const m = window.wc.wcSettings;
        var p, d, b, w, _, g, f, h, k, E;
        const y = (0, m.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          v =
            (y.pluginUrl,
            y.pluginUrl,
            y.buildPhase,
            null === (p = m.STORE_PAGES.shop) || void 0 === p || p.permalink,
            null === (d = m.STORE_PAGES.checkout) || void 0 === d || d.id,
            null === (b = m.STORE_PAGES.checkout) || void 0 === b || b.permalink,
            null === (w = m.STORE_PAGES.privacy) || void 0 === w || w.permalink,
            null === (_ = m.STORE_PAGES.privacy) || void 0 === _ || _.title,
            null === (g = m.STORE_PAGES.terms) || void 0 === g || g.permalink,
            null === (f = m.STORE_PAGES.terms) || void 0 === f || f.title,
            null === (h = m.STORE_PAGES.cart) || void 0 === h || h.id,
            null === (k = m.STORE_PAGES.cart) || void 0 === k || k.permalink,
            null !== (E = m.STORE_PAGES.myaccount) && void 0 !== E && E.permalink
              ? m.STORE_PAGES.myaccount.permalink
              : (0, m.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, m.getSetting)('localPickupEnabled', !1),
            (0, m.getSetting)('countries', {})),
          S = (0, m.getSetting)('countryData', {}),
          C =
            (Object.fromEntries(
              Object.keys(S)
                .filter(e => !0 === S[e].allowBilling)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(S)
                .filter(e => !0 === S[e].allowBilling)
                .map(e => [e, S[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(S)
                .filter(e => !0 === S[e].allowShipping)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(S)
                .filter(e => !0 === S[e].allowShipping)
                .map(e => [e, S[e].states || []]),
            ),
            Object.fromEntries(Object.keys(S).map(e => [e, S[e].locale || []])),
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
            });
        (0, m.getSetting)('addressFieldsLocations', C).address,
          (0, m.getSetting)('addressFieldsLocations', C).contact,
          (0, m.getSetting)('addressFieldsLocations', C).order,
          (0, m.getSetting)('additionalOrderFields', {}),
          (0, m.getSetting)('additionalContactFields', {}),
          (0, m.getSetting)('additionalAddressFields', {});
        var x = r(9491);
        r(4302);
        const F = (0, x.withInstanceId)(
          ({ className: e, headingLevel: t, onChange: r, heading: o, instanceId: i }) => {
            const c = `h${t}`;
            return (0, n.createElement)(
              c,
              { className: e },
              (0, n.createElement)(
                'label',
                { className: 'screen-reader-text', htmlFor: `block-title-${i}` },
                (0, u.__)('Block title', 'woocommerce'),
              ),
              (0, n.createElement)(s.PlainText, {
                id: `block-title-${i}`,
                className: 'wc-block-editor-components-title',
                value: o,
                onChange: r,
                style: { backgroundColor: 'transparent' },
              }),
            );
          },
        );
        var N = r(4133);
        const O = window.wp.components;
        var P = r(6087);
        function T(e, t) {
          const r = (0, P.useRef)();
          return (
            (0, P.useEffect)(() => {
              r.current === e || (t && !t(e, r.current)) || (r.current = e);
            }, [e, t]),
            r.current
          );
        }
        const R = window.wc.wcBlocksData,
          A = window.wp.data;
        var B = r(923),
          j = r.n(B);
        const L = (0, P.createContext)('page'),
          U = () => (0, P.useContext)(L),
          I =
            (L.Provider,
            e => {
              const t = U();
              e = e || t;
              const r = (0, A.useSelect)(
                  t => t(R.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: n } = (0, A.useDispatch)(R.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, P.useCallback)(
                  t => {
                    n(e, t);
                  },
                  [e, n],
                ),
              ];
            }),
          M = (e, t, r) => {
            const n = U();
            r = r || n;
            const o = (0, A.useSelect)(
                n => n(R.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: i } = (0, A.useDispatch)(R.QUERY_STATE_STORE_KEY);
            return [
              o,
              (0, P.useCallback)(
                t => {
                  i(r, e, t);
                },
                [r, e, i],
              ),
            ];
          };
        var q = r(4717);
        const G = window.wc.wcTypes;
        var Q = r(5574);
        function V(e) {
          const t = (0, P.useRef)(e);
          return j()(e, t.current) || (t.current = e), t.current;
        }
        const W = ({
            queryAttribute: e,
            queryPrices: t,
            queryStock: r,
            queryRating: n,
            queryState: o,
            isEditor: i = !1,
          }) => {
            let c = U();
            c = `${c}-collection-data`;
            const [a] = I(c),
              [l, s] = M('calculate_attribute_counts', [], c),
              [u, m] = M('calculate_price_range', null, c),
              [p, d] = M('calculate_stock_status_counts', null, c),
              [b, w] = M('calculate_rating_counts', null, c),
              _ = V(e || {}),
              g = V(t),
              f = V(r),
              h = V(n);
            (0, P.useEffect)(() => {
              'object' == typeof _ &&
                Object.keys(_).length &&
                (l.find(e => (0, G.objectHasProp)(_, 'taxonomy') && e.taxonomy === _.taxonomy) ||
                  s([...l, _]));
            }, [_, l, s]),
              (0, P.useEffect)(() => {
                u !== g && void 0 !== g && m(g);
              }, [g, m, u]),
              (0, P.useEffect)(() => {
                p !== f && void 0 !== f && d(f);
              }, [f, d, p]),
              (0, P.useEffect)(() => {
                b !== h && void 0 !== h && w(h);
              }, [h, w, b]);
            const [k, E] = (0, P.useState)(i),
              [y] = (0, q.d7)(k, 200);
            k || E(!0);
            const v = (0, P.useMemo)(
              () =>
                (e => {
                  const t = e;
                  return (
                    Array.isArray(e.calculate_attribute_counts) &&
                      (t.calculate_attribute_counts = (0, Q.di)(
                        e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                          taxonomy: e,
                          query_type: t,
                        })),
                      ).asc(['taxonomy', 'query_type'])),
                    t
                  );
                })(a),
              [a],
            );
            return (e => {
              const {
                namespace: t,
                resourceName: r,
                resourceValues: n = [],
                query: o = {},
                shouldSelect: i = !0,
              } = e;
              if (!t || !r)
                throw new Error(
                  'The options object must have valid values for the namespace and the resource properties.',
                );
              const c = (0, P.useRef)({ results: [], isLoading: !0 }),
                a = V(o),
                l = V(n),
                s = (() => {
                  const [, e] = (0, P.useState)();
                  return (0, P.useCallback)(t => {
                    e(() => {
                      throw t;
                    });
                  }, []);
                })(),
                u = (0, A.useSelect)(
                  e => {
                    if (!i) return null;
                    const n = e(R.COLLECTIONS_STORE_KEY),
                      o = [t, r, a, l],
                      c = n.getCollectionError(...o);
                    if (c) {
                      if (!(0, G.isError)(c))
                        throw new Error(
                          'TypeError: `error` object is not an instance of Error constructor',
                        );
                      s(c);
                    }
                    return {
                      results: n.getCollection(...o),
                      isLoading: !n.hasFinishedResolution('getCollection', o),
                    };
                  },
                  [t, r, l, a, i],
                );
              return null !== u && (c.current = u), c.current;
            })({
              namespace: '/wc/store/v1',
              resourceName: 'products/collection-data',
              query: { ...o, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...v },
              shouldSelect: y,
            });
          },
          D = window.wc.blocksComponents;
        r(9505);
        const Y = (e, t, r, n = 1, o = !1) => {
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
        const $ = ({
            className: e,
            isLoading: t,
            disabled: r,
            /* translators: Submit button text for filters. */
            label: o = (0, u.__)('Apply', 'woocommerce'),
            onClick: i,
            screenReaderLabel: a = (0, u.__)('Apply filter', 'woocommerce'),
          }) =>
            (0, n.createElement)(
              'button',
              {
                type: 'submit',
                className: c()(
                  'wp-block-button__link',
                  'wc-block-filter-submit-button',
                  'wc-block-components-filter-submit-button',
                  { 'is-loading': t },
                  e,
                ),
                disabled: r,
                onClick: i,
              },
              (0, n.createElement)(D.Label, { label: o, screenReaderLabel: a }),
            ),
          H = ({ maxConstraint: e, minorUnit: t }) => ({ floatValue: r }) =>
            void 0 !== r && r <= e / 10 ** t && r > 0,
          K = ({ minConstraint: e, currentMaxValue: t, minorUnit: r }) => ({ floatValue: n }) =>
            void 0 !== n && n >= e / 10 ** r && n < t / 10 ** r;
        r(8335);
        const z = ({
            className: e,
            /* translators: Reset button text for filters. */
            label: t = (0, u.__)('Reset', 'woocommerce'),
            onClick: r,
            screenReaderLabel: o = (0, u.__)('Reset filter', 'woocommerce'),
          }) =>
            (0, n.createElement)(
              'button',
              { className: c()('wc-block-components-filter-reset-button', e), onClick: r },
              (0, n.createElement)(D.Label, { label: t, screenReaderLabel: o }),
            ),
          J = ({
            minPrice: e,
            maxPrice: t,
            minConstraint: r,
            maxConstraint: o,
            onChange: i,
            step: a,
            currency: l,
            showInputFields: s = !0,
            showFilterButton: m = !1,
            inlineInput: p = !0,
            isLoading: d = !1,
            isUpdating: b = !1,
            isEditor: w = !1,
            onSubmit: _ = () => {},
          }) => {
            const g = (0, P.useRef)(null),
              f = (0, P.useRef)(null),
              h = a || 10 ** l.minorUnit,
              [k, E] = (0, P.useState)(e),
              [y, v] = (0, P.useState)(t),
              S = (0, P.useRef)(null),
              [C, x] = (0, P.useState)(0);
            (0, P.useEffect)(() => {
              E(e);
            }, [e]),
              (0, P.useEffect)(() => {
                v(t);
              }, [t]),
              (0, P.useLayoutEffect)(() => {
                var e;
                p &&
                  S.current &&
                  x(null === (e = S.current) || void 0 === e ? void 0 : e.offsetWidth);
              }, [p, x]);
            const F = (0, P.useMemo)(() => isFinite(r) && isFinite(o), [r, o]),
              N = (0, P.useMemo)(
                () =>
                  isFinite(e) && isFinite(t) && F
                    ? {
                        '--low': ((e - r) / (o - r)) * 100 + '%',
                        '--high': ((t - r) / (o - r)) * 100 + '%',
                      }
                    : { '--low': '0%', '--high': '100%' },
                [e, t, r, o, F],
              ),
              O = (0, P.useCallback)(
                e => {
                  if (d || !F || !g.current || !f.current) return;
                  const t = e.target.getBoundingClientRect(),
                    r = e.clientX - t.left,
                    n = g.current.offsetWidth,
                    i = +g.current.value,
                    c = f.current.offsetWidth,
                    a = +f.current.value,
                    l = n * (i / o),
                    s = c * (a / o);
                  Math.abs(r - l) > Math.abs(r - s)
                    ? ((g.current.style.zIndex = '20'), (f.current.style.zIndex = '21'))
                    : ((g.current.style.zIndex = '21'), (f.current.style.zIndex = '20'));
                },
                [d, o, F],
              ),
              T = (0, P.useCallback)(
                n => {
                  const c = n.target.classList.contains('wc-block-price-filter__range-input--min'),
                    a = +n.target.value,
                    l = c ? [Math.round(a / h) * h, t] : [e, Math.round(a / h) * h],
                    s = Y(l, r, o, h, c);
                  i(s);
                },
                [i, e, t, r, o, h],
              ),
              R = (0, P.useCallback)(
                e => {
                  if (
                    e.relatedTarget &&
                    e.relatedTarget.classList &&
                    e.relatedTarget.classList.contains('wc-block-price-filter__amount')
                  )
                    return;
                  const t = e.target.classList.contains('wc-block-price-filter__amount--min');
                  if (k >= y) {
                    const e = Y([0, y], null, null, h, t);
                    return i([parseInt(e[0], 10), parseInt(e[1], 10)]);
                  }
                  const r = Y([k, y], null, null, h, t);
                  i(r);
                },
                [i, h, k, y],
              ),
              A = (0, q.YQ)(_, 600),
              B = c()(
                'wc-block-price-filter',
                'wc-block-components-price-slider',
                s && 'wc-block-price-filter--has-input-fields',
                s && 'wc-block-components-price-slider--has-input-fields',
                m && 'wc-block-price-filter--has-filter-button',
                m && 'wc-block-components-price-slider--has-filter-button',
                !F && 'is-disabled',
                (p || C <= 300) && 'wc-block-components-price-slider--is-input-inline',
              ),
              j = (0, G.isObject)(g.current) ? g.current.ownerDocument.activeElement : void 0,
              L = j && j === g.current ? h : 1,
              U = j && j === f.current ? h : 1,
              I = String(k / 10 ** l.minorUnit),
              M = String(y / 10 ** l.minorUnit),
              Q = p && C > 300,
              V = (0, n.createElement)(
                'div',
                {
                  className: c()(
                    'wc-block-price-filter__range-input-wrapper',
                    'wc-block-components-price-slider__range-input-wrapper',
                    { 'is-loading': d && b },
                  ),
                  onMouseMove: O,
                  onFocus: O,
                },
                F &&
                  (0, n.createElement)(
                    'div',
                    { 'aria-hidden': s },
                    (0, n.createElement)('div', {
                      className:
                        'wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress',
                      style: N,
                    }),
                    (0, n.createElement)('input', {
                      type: 'range',
                      className:
                        'wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min',
                      'aria-label': (0, u.__)('Filter products by minimum price', 'woocommerce'),
                      'aria-valuetext': I,
                      value: Number.isFinite(e) ? e : r,
                      onChange: T,
                      step: L,
                      min: r,
                      max: o,
                      ref: g,
                      disabled: d && !F,
                      tabIndex: s ? -1 : 0,
                    }),
                    (0, n.createElement)('input', {
                      type: 'range',
                      className:
                        'wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max',
                      'aria-label': (0, u.__)('Filter products by maximum price', 'woocommerce'),
                      'aria-valuetext': M,
                      value: Number.isFinite(t) ? t : o,
                      onChange: T,
                      step: U,
                      min: r,
                      max: o,
                      ref: f,
                      disabled: d,
                      tabIndex: s ? -1 : 0,
                    }),
                  ),
              ),
              W = e =>
                `wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,
              J = { currency: l, decimalScale: 0 },
              X = { ...J, displayType: 'input', allowNegative: !1, disabled: d || !F, onBlur: R };
            return (0, n.createElement)(
              'div',
              { className: B, ref: S },
              (!Q || !s) && V,
              s &&
                (0, n.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-price-filter__controls wc-block-components-price-slider__controls',
                  },
                  b
                    ? (0, n.createElement)('div', { className: 'input-loading' })
                    : (0, n.createElement)(D.FormattedMonetaryAmount, {
                        ...X,
                        className: W('min'),
                        'aria-label': (0, u.__)('Filter products by minimum price', 'woocommerce'),
                        isAllowed: K({
                          minConstraint: r,
                          minorUnit: l.minorUnit,
                          currentMaxValue: y,
                        }),
                        onValueChange: e => {
                          e !== k && E(e);
                        },
                        value: k,
                      }),
                  Q && V,
                  b
                    ? (0, n.createElement)('div', { className: 'input-loading' })
                    : (0, n.createElement)(D.FormattedMonetaryAmount, {
                        ...X,
                        className: W('max'),
                        'aria-label': (0, u.__)('Filter products by maximum price', 'woocommerce'),
                        isAllowed: H({ maxConstraint: o, minorUnit: l.minorUnit }),
                        onValueChange: e => {
                          e !== y && v(e);
                        },
                        value: y,
                      }),
                ),
              !s &&
                !b &&
                Number.isFinite(e) &&
                Number.isFinite(t) &&
                (0, n.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-price-filter__range-text wc-block-components-price-slider__range-text',
                  },
                  (0, n.createElement)(D.FormattedMonetaryAmount, { ...J, value: e }),
                  (0, n.createElement)(D.FormattedMonetaryAmount, { ...J, value: t }),
                ),
              (0, n.createElement)(
                'div',
                { className: 'wc-block-components-price-slider__actions' },
                (w || (!b && (e !== r || t !== o))) &&
                  (0, n.createElement)(z, {
                    onClick: () => {
                      i([r, o]), A();
                    },
                    screenReaderLabel: (0, u.__)('Reset price filter', 'woocommerce'),
                  }),
                m &&
                  (0, n.createElement)($, {
                    className:
                      'wc-block-price-filter__button wc-block-components-price-slider__button',
                    isLoading: b,
                    disabled: d || !F,
                    onClick: _,
                    screenReaderLabel: (0, u.__)('Apply price filter', 'woocommerce'),
                  }),
              ),
            );
          };
        r(1626);
        const X = ({ children: e }) =>
            (0, n.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e),
          Z = window.wc.priceFormat,
          ee = window.wp.url,
          te = (0, m.getSettingWithCoercion)('isRenderingPhpTemplate', !1, G.isBoolean);
        function re(e) {
          return window ? (0, ee.getQueryArg)(window.location.href, e) : null;
        }
        function ne(e) {
          if (te) {
            const t = new URL(e);
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
              t.searchParams.delete('paged'),
              t.searchParams.forEach((e, r) => {
                r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
              }),
              (window.location.href = t.href);
          } else window.history.replaceState({}, '', e);
        }
        const oe = 'ROUND_UP',
          ie = 'ROUND_DOWN',
          ce = (e, t, r) => {
            const n = 10 * 10 ** t;
            let o = null;
            const i = parseFloat(e);
            isNaN(i) ||
              (r === oe ? (o = Math.ceil(i / n) * n) : r === ie && (o = Math.floor(i / n) * n));
            const c = T(o, Number.isFinite);
            return Number.isFinite(o) ? o : c;
          };
        r(8836);
        const ae = (0, P.createContext)({});
        function le(e, t) {
          return Number(e) * 10 ** t;
        }
        const se = ({ attributes: e, isEditor: t = !1 }) => {
          const r = (() => {
              const { wrapper: e } = (0, P.useContext)(ae);
              return t => {
                e && e.current && (e.current.hidden = !t);
              };
            })(),
            o = (0, m.getSettingWithCoercion)('hasFilterableProducts', !1, G.isBoolean),
            i = (0, m.getSettingWithCoercion)('isRenderingPhpTemplate', !1, G.isBoolean),
            [c, a] = (0, P.useState)(!1),
            l = re('min_price'),
            s = re('max_price'),
            [u] = I(),
            { results: p, isLoading: d } = W({ queryPrices: !0, queryState: u, isEditor: t }),
            b = (0, Z.getCurrencyFromPriceResponse)(
              (0, G.objectHasProp)(p, 'price_range') ? p.price_range : void 0,
            ),
            [w, _] = M('min_price'),
            [g, f] = M('max_price'),
            [h, k] = (0, P.useState)(le(l, b.minorUnit) || null),
            [E, y] = (0, P.useState)(le(s, b.minorUnit) || null),
            { minConstraint: v, maxConstraint: S } = (({
              minPrice: e,
              maxPrice: t,
              minorUnit: r,
            }) => ({ minConstraint: ce(e || '', r, ie), maxConstraint: ce(t || '', r, oe) }))({
              minPrice:
                (0, G.objectHasProp)(p, 'price_range') &&
                (0, G.objectHasProp)(p.price_range, 'min_price') &&
                (0, G.isString)(p.price_range.min_price)
                  ? p.price_range.min_price
                  : void 0,
              maxPrice:
                (0, G.objectHasProp)(p, 'price_range') &&
                (0, G.objectHasProp)(p.price_range, 'max_price') &&
                (0, G.isString)(p.price_range.max_price)
                  ? p.price_range.max_price
                  : void 0,
              minorUnit: b.minorUnit,
            });
          (0, P.useEffect)(() => {
            c || (_(le(l, b.minorUnit)), f(le(s, b.minorUnit)), a(!0));
          }, [b.minorUnit, c, s, l, f, _]);
          const [C, x] = (0, P.useState)(d),
            F = (0, P.useCallback)(
              (e, t) => {
                const r = t >= Number(S) ? void 0 : t,
                  n = e <= Number(v) ? void 0 : e;
                if (window) {
                  const e = (function(e, t) {
                    const r = {};
                    for (const [e, n] of Object.entries(t)) n ? (r[e] = n.toString()) : delete r[e];
                    const n = (0, ee.removeQueryArgs)(e, ...Object.keys(t));
                    return (0, ee.addQueryArgs)(n, r);
                  })(window.location.href, {
                    min_price: n / 10 ** b.minorUnit,
                    max_price: r / 10 ** b.minorUnit,
                  });
                  window.location.href !== e && ne(e);
                }
                _(n), f(r);
              },
              [v, S, _, f, b.minorUnit],
            ),
            N = (0, q.YQ)(F, 500),
            O = (0, P.useCallback)(
              t => {
                x(!0),
                  t[0] !== h && k(t[0]),
                  t[1] !== E && y(t[1]),
                  i && c && !e.showFilterButton && N(t[0], t[1]);
              },
              [h, E, k, y, i, c, N, e.showFilterButton],
            );
          (0, P.useEffect)(() => {
            e.showFilterButton || i || N(h, E);
          }, [h, E, e.showFilterButton, N, i]);
          const R = T(w),
            A = T(g),
            B = T(v),
            j = T(S);
          if (
            ((0, P.useEffect)(() => {
              (!Number.isFinite(h) || (w !== R && w !== h) || (v !== B && v !== h)) &&
                k(Number.isFinite(w) ? w : v),
                (!Number.isFinite(E) || (g !== A && g !== E) || (S !== j && S !== E)) &&
                  y(Number.isFinite(g) ? g : S);
            }, [h, E, w, g, v, S, B, j, R, A]),
            !o)
          )
            return r(!1), null;
          if (!d && (null === v || null === S || v === S)) return r(!1), null;
          const L = `h${e.headingLevel}`;
          r(!0), !d && C && x(!1);
          const U = (0, n.createElement)(
              L,
              { className: 'wc-block-price-filter__title' },
              e.heading,
            ),
            Q = d && C ? (0, n.createElement)(X, null, U) : U;
          return (0, n.createElement)(
            n.Fragment,
            null,
            !t && e.heading && Q,
            (0, n.createElement)(
              'div',
              { className: 'wc-block-price-slider' },
              (0, n.createElement)(J, {
                minConstraint: v,
                maxConstraint: S,
                minPrice: h,
                maxPrice: E,
                currency: b,
                showInputFields: e.showInputFields,
                inlineInput: e.inlineInput,
                showFilterButton: e.showFilterButton,
                onChange: O,
                onSubmit: () => F(h, E),
                isLoading: d,
                isUpdating: C,
                isEditor: t,
              }),
            ),
          );
        };
        r(6562);
        const ue = ({ clientId: e, setAttributes: t, filterType: r, attributes: i }) => {
            const { replaceBlock: c } = (0, A.useDispatch)('core/block-editor'),
              { heading: a, headingLevel: l } = i;
            if (
              (0, A.useSelect)(
                t => {
                  const { getBlockParentsByBlockName: r } = t('core/block-editor');
                  return r(e, 'woocommerce/filter-wrapper').length > 0;
                },
                [e],
              ) ||
              !r
            )
              return null;
            const m = [
              (0, n.createElement)(
                O.Button,
                {
                  key: 'convert',
                  onClick: () => {
                    const n = [(0, o.createBlock)(`woocommerce/${r}`, { ...i, heading: '' })];
                    a &&
                      '' !== a &&
                      n.unshift(
                        (0, o.createBlock)('core/heading', {
                          content: a,
                          level: null != l ? l : 2,
                        }),
                      ),
                      c(
                        e,
                        (0, o.createBlock)(
                          'woocommerce/filter-wrapper',
                          { heading: a, filterType: r },
                          [...n],
                        ),
                      ),
                      t({ heading: '', lock: { remove: !0 } });
                  },
                  variant: 'primary',
                },
                (0, u.__)('Upgrade block', 'woocommerce'),
              ),
            ];
            return (0, n.createElement)(
              s.Warning,
              { actions: m },
              (0, u.__)(
                'Filter block: We have improved this block to make styling easier. Upgrade it using the button below.',
                'woocommerce',
              ),
            );
          },
          me = JSON.parse(
            '{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          pe = {
            heading: { type: 'string', default: (0, u.__)('Filter by price', 'woocommerce') },
          },
          de = [
            {
              attributes: { ...me.attributes, ...pe },
              save: ({ attributes: e }) => {
                const {
                    className: t,
                    showInputFields: r,
                    showFilterButton: o,
                    heading: i,
                    headingLevel: a,
                  } = e,
                  l = {
                    'data-showinputfields': r,
                    'data-showfilterbutton': o,
                    'data-heading': i,
                    'data-heading-level': a,
                  };
                return (0, n.createElement)(
                  'div',
                  { ...s.useBlockProps.save({ className: c()('is-loading', t) }), ...l },
                  (0, n.createElement)('span', {
                    'aria-hidden': !0,
                    className: 'wc-block-product-categories__placeholder',
                  }),
                );
              },
            },
          ];
        (0, o.registerBlockType)(me, {
          icon: {
            src: (0, n.createElement)(a.A, {
              icon: l.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...me.attributes, ...pe },
          edit: function({ attributes: e, setAttributes: t, clientId: r }) {
            const {
                heading: o,
                headingLevel: i,
                showInputFields: c,
                inlineInput: p,
                showFilterButton: d,
              } = e,
              b = (0, s.useBlockProps)();
            return (0, n.createElement)(
              'div',
              { ...b },
              0 === y.productCount
                ? (0, n.createElement)(
                    O.Placeholder,
                    {
                      className: 'wc-block-price-slider',
                      icon: (0, n.createElement)(a.A, { icon: l.A }),
                      label: (0, u.__)('Filter by Price', 'woocommerce'),
                      instructions: (0, u.__)(
                        'Display a slider to filter products in your store by price.',
                        'woocommerce',
                      ),
                    },
                    (0, n.createElement)(
                      'p',
                      null,
                      (0, u.__)(
                        'To filter your products by price you first need to assign prices to your products.',
                        'woocommerce',
                      ),
                    ),
                    (0, n.createElement)(
                      O.Button,
                      {
                        className: 'wc-block-price-slider__add-product-button',
                        variant: 'secondary',
                        href: (0, m.getAdminLink)('post-new.php?post_type=product'),
                        target: '_top',
                      },
                      (0, u.__)('Add new product', 'woocommerce') + ' ',
                      (0, n.createElement)(a.A, { icon: N.A }),
                    ),
                    (0, n.createElement)(
                      O.Button,
                      {
                        className: 'wc-block-price-slider__read_more_button',
                        variant: 'tertiary',
                        href: 'https://woocommerce.com/document/managing-products/',
                        target: '_blank',
                      },
                      (0, u.__)('Learn more', 'woocommerce'),
                    ),
                  )
                : (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)(
                      s.InspectorControls,
                      { key: 'inspector' },
                      (0, n.createElement)(
                        O.PanelBody,
                        { title: (0, u.__)('Settings', 'woocommerce') },
                        (0, n.createElement)(
                          O.__experimentalToggleGroupControl,
                          {
                            label: (0, u.__)('Price Range Selector', 'woocommerce'),
                            value: c ? 'editable' : 'text',
                            onChange: e => t({ showInputFields: 'editable' === e }),
                            className: 'wc-block-price-filter__price-range-toggle',
                          },
                          (0, n.createElement)(O.__experimentalToggleGroupControlOption, {
                            value: 'editable',
                            label: (0, u.__)('Editable', 'woocommerce'),
                          }),
                          (0, n.createElement)(O.__experimentalToggleGroupControlOption, {
                            value: 'text',
                            label: (0, u.__)('Text', 'woocommerce'),
                          }),
                        ),
                        c &&
                          (0, n.createElement)(O.ToggleControl, {
                            label: (0, u.__)('Inline input fields', 'woocommerce'),
                            checked: p,
                            onChange: () => t({ inlineInput: !p }),
                            help: (0, u.__)(
                              'Show input fields inline with the slider.',
                              'woocommerce',
                            ),
                          }),
                        (0, n.createElement)(O.ToggleControl, {
                          label: (0, u.__)("Show 'Apply filters' button", 'woocommerce'),
                          help: (0, u.__)(
                            'Products will update when the button is clicked.',
                            'woocommerce',
                          ),
                          checked: d,
                          onChange: () => t({ showFilterButton: !d }),
                        }),
                      ),
                    ),
                    (0, n.createElement)(ue, {
                      attributes: e,
                      clientId: r,
                      setAttributes: t,
                      filterType: 'price-filter',
                    }),
                    o &&
                      (0, n.createElement)(F, {
                        className: 'wc-block-price-filter__title',
                        headingLevel: i,
                        heading: o,
                        onChange: e => t({ heading: e }),
                      }),
                    (0, n.createElement)(
                      O.Disabled,
                      null,
                      (0, n.createElement)(se, { attributes: e, isEditor: !0 }),
                    ),
                  ),
            );
          },
          save({ attributes: e }) {
            const { className: t } = e;
            return (0, n.createElement)(
              'div',
              { ...s.useBlockProps.save({ className: c()('is-loading', t) }) },
              (0, n.createElement)('span', {
                'aria-hidden': !0,
                className: 'wc-block-product-categories__placeholder',
              }),
            );
          },
          deprecated: de,
        });
      },
      1626: () => {},
      8335: () => {},
      1504: () => {},
      9505: () => {},
      6562: () => {},
      8836: () => {},
      4302: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
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
          for (var [r, n, o] = e[u], a = !0, l = 0; l < r.length; l++)
            (!1 & o || c >= o) && Object.keys(i.O).every(e => i.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), o < c && (c = o));
          if (a) {
            e.splice(u--, 1);
            var s = n();
            void 0 !== s && (t = s);
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
            [c, a, l] = r,
            s = 0;
          if (c.some(t => 0 !== e[t])) {
            for (n in a) i.o(a, n) && (i.m[n] = a[n]);
            if (l) var u = l(i);
          }
          for (t && t(r); s < c.length; s++) (o = c[s]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return i.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var c = i.O(void 0, [94], () => i(2767));
  (c = i.O(c)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['price-filter'] = c);
})();
