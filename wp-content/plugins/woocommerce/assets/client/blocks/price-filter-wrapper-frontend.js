(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3515],
  {
    6179: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => i });
      var r = n(1609);
      n(1626);
      const i = ({ children: e }) =>
        (0, r.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e);
    },
    4054: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      var r = n(1609),
        i = n(7723),
        o = n(9019),
        c = n.n(o),
        l = n(4656);
      n(8335);
      const a = ({
        className: e,
        /* translators: Reset button text for filters. */
        label: t = (0, i.__)('Reset', 'woocommerce'),
        onClick: n,
        screenReaderLabel: o = (0, i.__)('Reset filter', 'woocommerce'),
      }) =>
        (0, r.createElement)(
          'button',
          { className: c()('wc-block-components-filter-reset-button', e), onClick: n },
          (0, r.createElement)(l.Label, { label: t, screenReaderLabel: o }),
        );
    },
    1745: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      var r = n(1609),
        i = n(7723),
        o = n(9019),
        c = n.n(o),
        l = n(4656);
      n(1504);
      const a = ({
        className: e,
        isLoading: t,
        disabled: n,
        /* translators: Submit button text for filters. */
        label: o = (0, i.__)('Apply', 'woocommerce'),
        onClick: a,
        screenReaderLabel: s = (0, i.__)('Apply filter', 'woocommerce'),
      }) =>
        (0, r.createElement)(
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
            disabled: n,
            onClick: a,
          },
          (0, r.createElement)(l.Label, { label: o, screenReaderLabel: s }),
        );
    },
    1561: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => m });
      var r = n(6087),
        i = n(4717),
        o = n(3993),
        c = n(5574),
        l = n(1573),
        a = n(9098),
        s = n(1380),
        u = n(6372);
      const m = ({
        queryAttribute: e,
        queryPrices: t,
        queryStock: n,
        queryRating: m,
        queryState: d,
        isEditor: p = !1,
      }) => {
        let b = (0, u._)();
        b = `${b}-collection-data`;
        const [_] = (0, a.dJ)(b),
          [f, g] = (0, a.xd)('calculate_attribute_counts', [], b),
          [v, h] = (0, a.xd)('calculate_price_range', null, b),
          [y, w] = (0, a.xd)('calculate_stock_status_counts', null, b),
          [k, E] = (0, a.xd)('calculate_rating_counts', null, b),
          x = (0, l.c)(e || {}),
          N = (0, l.c)(t),
          S = (0, l.c)(n),
          C = (0, l.c)(m);
        (0, r.useEffect)(() => {
          'object' == typeof x &&
            Object.keys(x).length &&
            (f.find(e => (0, o.objectHasProp)(x, 'taxonomy') && e.taxonomy === x.taxonomy) ||
              g([...f, x]));
        }, [x, f, g]),
          (0, r.useEffect)(() => {
            v !== N && void 0 !== N && h(N);
          }, [N, h, v]),
          (0, r.useEffect)(() => {
            y !== S && void 0 !== S && w(S);
          }, [S, w, y]),
          (0, r.useEffect)(() => {
            k !== C && void 0 !== C && E(C);
          }, [C, E, k]);
        const [F, R] = (0, r.useState)(p),
          [A] = (0, i.d7)(F, 200);
        F || R(!0);
        const U = (0, r.useMemo)(
          () =>
            (e => {
              const t = e;
              return (
                Array.isArray(e.calculate_attribute_counts) &&
                  (t.calculate_attribute_counts = (0, c.di)(
                    e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                      taxonomy: e,
                      query_type: t,
                    })),
                  ).asc(['taxonomy', 'query_type'])),
                t
              );
            })(_),
          [_],
        );
        return (0, s.G)({
          namespace: '/wc/store/v1',
          resourceName: 'products/collection-data',
          query: { ...d, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...U },
          shouldSelect: A,
        });
      };
    },
    1380: (e, t, n) => {
      'use strict';
      n.d(t, { G: () => s });
      var r = n(7594),
        i = n(7143),
        o = n(6087),
        c = n(1573),
        l = n(7615),
        a = n(3993);
      const s = e => {
        const {
          namespace: t,
          resourceName: n,
          resourceValues: s = [],
          query: u = {},
          shouldSelect: m = !0,
        } = e;
        if (!t || !n)
          throw new Error(
            'The options object must have valid values for the namespace and the resource properties.',
          );
        const d = (0, o.useRef)({ results: [], isLoading: !0 }),
          p = (0, c.c)(u),
          b = (0, c.c)(s),
          _ = (0, l.a)(),
          f = (0, i.useSelect)(
            e => {
              if (!m) return null;
              const i = e(r.COLLECTIONS_STORE_KEY),
                o = [t, n, p, b],
                c = i.getCollectionError(...o);
              if (c) {
                if (!(0, a.isError)(c))
                  throw new Error(
                    'TypeError: `error` object is not an instance of Error constructor',
                  );
                _(c);
              }
              return {
                results: i.getCollection(...o),
                isLoading: !i.hasFinishedResolution('getCollection', o),
              };
            },
            [t, n, b, p, m],
          );
        return null !== f && (d.current = f), d.current;
      };
    },
    9098: (e, t, n) => {
      'use strict';
      n.d(t, { dJ: () => l, xd: () => a });
      var r = n(7594),
        i = n(7143),
        o = n(6087),
        c = (n(923), n(6372));
      const l = e => {
          const t = (0, c._)();
          e = e || t;
          const n = (0, i.useSelect)(
              t => t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
              [e],
            ),
            { setValueForQueryContext: l } = (0, i.useDispatch)(r.QUERY_STATE_STORE_KEY);
          return [
            n,
            (0, o.useCallback)(
              t => {
                l(e, t);
              },
              [e, l],
            ),
          ];
        },
        a = (e, t, n) => {
          const l = (0, c._)();
          n = n || l;
          const a = (0, i.useSelect)(i => i(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n, e, t), [
              n,
              e,
            ]),
            { setQueryValue: s } = (0, i.useDispatch)(r.QUERY_STATE_STORE_KEY);
          return [
            a,
            (0, o.useCallback)(
              t => {
                s(n, e, t);
              },
              [n, e, s],
            ),
          ];
        };
    },
    6372: (e, t, n) => {
      'use strict';
      n.d(t, { _: () => o });
      var r = n(6087);
      const i = (0, r.createContext)('page'),
        o = () => (0, r.useContext)(i);
      i.Provider;
    },
    9095: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i });
      var r = n(6087);
      function i(e, t) {
        const n = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            n.current === e || (t && !t(e, n.current)) || (n.current = e);
          }, [e, t]),
          n.current
        );
      }
    },
    1573: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => c });
      var r = n(6087),
        i = n(923),
        o = n.n(i);
      function c(e) {
        const t = (0, r.useRef)(e);
        return o()(e, t.current) || (t.current = e), t.current;
      }
    },
    3566: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => a });
      var r = n(9019),
        i = n.n(r),
        o = n(3993),
        c = n(92),
        l = n(6032);
      const a = e => {
        const t = (e => {
            const t = (0, o.isObject)(e) ? e : { style: {} };
            let n = t.style;
            return (
              (0, o.isString)(n) && (n = JSON.parse(n) || {}),
              (0, o.isObject)(n) || (n = {}),
              { ...t, style: n }
            );
          })(e),
          n = (0, l.BK)(t),
          r = (0, l.aR)(t),
          a = (0, l.fo)(t),
          s = (0, c.x)(t);
        return {
          className: i()(s.className, n.className, r.className, a.className),
          style: { ...s.style, ...n.style, ...r.style, ...a.style },
        };
      };
    },
    7615: (e, t, n) => {
      'use strict';
      n.d(t, { a: () => i });
      var r = n(6087);
      const i = () => {
        const [, e] = (0, r.useState)();
        return (0, r.useCallback)(t => {
          e(() => {
            throw t;
          });
        }, []);
      };
    },
    92: (e, t, n) => {
      'use strict';
      n.d(t, { x: () => i });
      var r = n(3993);
      const i = e => {
        const t = (0, r.isObject)(e.style.typography) ? e.style.typography : {},
          n = (0, r.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : n,
          style: {
            fontSize: e.fontSize ? `var(--wp--preset--font-size--${e.fontSize})` : t.fontSize,
            fontStyle: t.fontStyle,
            fontWeight: t.fontWeight,
            letterSpacing: t.letterSpacing,
            lineHeight: t.lineHeight,
            textDecoration: t.textDecoration,
            textTransform: t.textTransform,
          },
        };
      };
    },
    6032: (e, t, n) => {
      'use strict';
      n.d(t, { BK: () => u, aR: () => m, fo: () => d });
      var r = n(9019),
        i = n.n(r),
        o = n(1194),
        c = n(9786),
        l = n(3993);
      function a(e = {}) {
        const t = {};
        return (
          (0, c.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function s(e, t) {
        return e && t ? `has-${(0, o.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, n, r, o, c, u, m;
        const { backgroundColor: d, textColor: p, gradient: b, style: _ } = e,
          f = s('background-color', d),
          g = s('color', p),
          v = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(b),
          h = v || (null == _ || null === (t = _.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: i()(g, v, {
            [f]: !h && !!f,
            'has-text-color':
              p || (null == _ || null === (n = _.color) || void 0 === n ? void 0 : n.text),
            'has-background':
              d ||
              (null == _ || null === (r = _.color) || void 0 === r ? void 0 : r.background) ||
              b ||
              (null == _ || null === (o = _.color) || void 0 === o ? void 0 : o.gradient),
            'has-link-color': (0, l.isObject)(
              null == _ || null === (c = _.elements) || void 0 === c ? void 0 : c.link,
            )
              ? null == _ ||
                null === (u = _.elements) ||
                void 0 === u ||
                null === (m = u.link) ||
                void 0 === m
                ? void 0
                : m.color
              : void 0,
          }),
          style: a({ color: (null == _ ? void 0 : _.color) || {} }),
        };
      }
      function m(e) {
        var t;
        const n = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: n, style: r } = e,
              o = n ? s('border-color', n) : '';
            return i()({
              'has-border-color':
                !!n || !(null == r || null === (t = r.border) || void 0 === t || !t.color),
              [o]: !!o,
            });
          })(e),
          style: a({ border: n }),
        };
      }
      function d(e) {
        var t;
        return {
          className: void 0,
          style: a({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    890: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => P });
      var r = n(1609),
        i = n(9019),
        o = n.n(i),
        c = n(3566),
        l = n(3993),
        a = n(9095),
        s = n(9098),
        u = n(1561),
        m = n(6087),
        d = n(7723),
        p = n(4656),
        b = n(4717);
      n(9505);
      const _ = (e, t, n, r = 1, i = !1) => {
        let [o, c] = e;
        const l = e => Number.isFinite(e);
        return (
          l(o) || (o = t || 0),
          l(c) || (c = n || r),
          l(t) && t > o && (o = t),
          l(n) && n <= o && (o = n - r),
          l(t) && t >= c && (c = t + r),
          l(n) && n < c && (c = n),
          !i && o >= c && (o = c - r),
          i && c <= o && (c = o + r),
          [o, c]
        );
      };
      var f = n(1745);
      const g = ({ maxConstraint: e, minorUnit: t }) => ({ floatValue: n }) =>
          void 0 !== n && n <= e / 10 ** t && n > 0,
        v = ({ minConstraint: e, currentMaxValue: t, minorUnit: n }) => ({ floatValue: r }) =>
          void 0 !== r && r >= e / 10 ** n && r < t / 10 ** n;
      var h = n(4054);
      const y = ({
        minPrice: e,
        maxPrice: t,
        minConstraint: n,
        maxConstraint: i,
        onChange: c,
        step: a,
        currency: s,
        showInputFields: u = !0,
        showFilterButton: y = !1,
        inlineInput: w = !0,
        isLoading: k = !1,
        isUpdating: E = !1,
        isEditor: x = !1,
        onSubmit: N = () => {},
      }) => {
        const S = (0, m.useRef)(null),
          C = (0, m.useRef)(null),
          F = a || 10 ** s.minorUnit,
          [R, A] = (0, m.useState)(e),
          [U, L] = (0, m.useState)(t),
          P = (0, m.useRef)(null),
          [T, I] = (0, m.useState)(0);
        (0, m.useEffect)(() => {
          A(e);
        }, [e]),
          (0, m.useEffect)(() => {
            L(t);
          }, [t]),
          (0, m.useLayoutEffect)(() => {
            var e;
            w && P.current && I(null === (e = P.current) || void 0 === e ? void 0 : e.offsetWidth);
          }, [w, I]);
        const O = (0, m.useMemo)(() => isFinite(n) && isFinite(i), [n, i]),
          B = (0, m.useMemo)(
            () =>
              isFinite(e) && isFinite(t) && O
                ? {
                    '--low': ((e - n) / (i - n)) * 100 + '%',
                    '--high': ((t - n) / (i - n)) * 100 + '%',
                  }
                : { '--low': '0%', '--high': '100%' },
            [e, t, n, i, O],
          ),
          j = (0, m.useCallback)(
            e => {
              if (k || !O || !S.current || !C.current) return;
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = S.current.offsetWidth,
                o = +S.current.value,
                c = C.current.offsetWidth,
                l = +C.current.value,
                a = r * (o / i),
                s = c * (l / i);
              Math.abs(n - a) > Math.abs(n - s)
                ? ((S.current.style.zIndex = '20'), (C.current.style.zIndex = '21'))
                : ((S.current.style.zIndex = '21'), (C.current.style.zIndex = '20'));
            },
            [k, i, O],
          ),
          M = (0, m.useCallback)(
            r => {
              const o = r.target.classList.contains('wc-block-price-filter__range-input--min'),
                l = +r.target.value,
                a = o ? [Math.round(l / F) * F, t] : [e, Math.round(l / F) * F],
                s = _(a, n, i, F, o);
              c(s);
            },
            [c, e, t, n, i, F],
          ),
          Q = (0, m.useCallback)(
            e => {
              if (
                e.relatedTarget &&
                e.relatedTarget.classList &&
                e.relatedTarget.classList.contains('wc-block-price-filter__amount')
              )
                return;
              const t = e.target.classList.contains('wc-block-price-filter__amount--min');
              if (R >= U) {
                const e = _([0, U], null, null, F, t);
                return c([parseInt(e[0], 10), parseInt(e[1], 10)]);
              }
              const n = _([R, U], null, null, F, t);
              c(n);
            },
            [c, F, R, U],
          ),
          q = (0, b.YQ)(N, 600),
          V = o()(
            'wc-block-price-filter',
            'wc-block-components-price-slider',
            u && 'wc-block-price-filter--has-input-fields',
            u && 'wc-block-components-price-slider--has-input-fields',
            y && 'wc-block-price-filter--has-filter-button',
            y && 'wc-block-components-price-slider--has-filter-button',
            !O && 'is-disabled',
            (w || T <= 300) && 'wc-block-components-price-slider--is-input-inline',
          ),
          W = (0, l.isObject)(S.current) ? S.current.ownerDocument.activeElement : void 0,
          Y = W && W === S.current ? F : 1,
          $ = W && W === C.current ? F : 1,
          H = String(R / 10 ** s.minorUnit),
          K = String(U / 10 ** s.minorUnit),
          z = w && T > 300,
          D = (0, r.createElement)(
            'div',
            {
              className: o()(
                'wc-block-price-filter__range-input-wrapper',
                'wc-block-components-price-slider__range-input-wrapper',
                { 'is-loading': k && E },
              ),
              onMouseMove: j,
              onFocus: j,
            },
            O &&
              (0, r.createElement)(
                'div',
                { 'aria-hidden': u },
                (0, r.createElement)('div', {
                  className:
                    'wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress',
                  style: B,
                }),
                (0, r.createElement)('input', {
                  type: 'range',
                  className:
                    'wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min',
                  'aria-label': (0, d.__)('Filter products by minimum price', 'woocommerce'),
                  'aria-valuetext': H,
                  value: Number.isFinite(e) ? e : n,
                  onChange: M,
                  step: Y,
                  min: n,
                  max: i,
                  ref: S,
                  disabled: k && !O,
                  tabIndex: u ? -1 : 0,
                }),
                (0, r.createElement)('input', {
                  type: 'range',
                  className:
                    'wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max',
                  'aria-label': (0, d.__)('Filter products by maximum price', 'woocommerce'),
                  'aria-valuetext': K,
                  value: Number.isFinite(t) ? t : i,
                  onChange: M,
                  step: $,
                  min: n,
                  max: i,
                  ref: C,
                  disabled: k,
                  tabIndex: u ? -1 : 0,
                }),
              ),
          ),
          J = e =>
            `wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,
          Z = { currency: s, decimalScale: 0 },
          G = { ...Z, displayType: 'input', allowNegative: !1, disabled: k || !O, onBlur: Q };
        return (0, r.createElement)(
          'div',
          { className: V, ref: P },
          (!z || !u) && D,
          u &&
            (0, r.createElement)(
              'div',
              {
                className:
                  'wc-block-price-filter__controls wc-block-components-price-slider__controls',
              },
              E
                ? (0, r.createElement)('div', { className: 'input-loading' })
                : (0, r.createElement)(p.FormattedMonetaryAmount, {
                    ...G,
                    className: J('min'),
                    'aria-label': (0, d.__)('Filter products by minimum price', 'woocommerce'),
                    isAllowed: v({ minConstraint: n, minorUnit: s.minorUnit, currentMaxValue: U }),
                    onValueChange: e => {
                      e !== R && A(e);
                    },
                    value: R,
                  }),
              z && D,
              E
                ? (0, r.createElement)('div', { className: 'input-loading' })
                : (0, r.createElement)(p.FormattedMonetaryAmount, {
                    ...G,
                    className: J('max'),
                    'aria-label': (0, d.__)('Filter products by maximum price', 'woocommerce'),
                    isAllowed: g({ maxConstraint: i, minorUnit: s.minorUnit }),
                    onValueChange: e => {
                      e !== U && L(e);
                    },
                    value: U,
                  }),
            ),
          !u &&
            !E &&
            Number.isFinite(e) &&
            Number.isFinite(t) &&
            (0, r.createElement)(
              'div',
              {
                className:
                  'wc-block-price-filter__range-text wc-block-components-price-slider__range-text',
              },
              (0, r.createElement)(p.FormattedMonetaryAmount, { ...Z, value: e }),
              (0, r.createElement)(p.FormattedMonetaryAmount, { ...Z, value: t }),
            ),
          (0, r.createElement)(
            'div',
            { className: 'wc-block-components-price-slider__actions' },
            (x || (!E && (e !== n || t !== i))) &&
              (0, r.createElement)(h.A, {
                onClick: () => {
                  c([n, i]), q();
                },
                screenReaderLabel: (0, d.__)('Reset price filter', 'woocommerce'),
              }),
            y &&
              (0, r.createElement)(f.A, {
                className: 'wc-block-price-filter__button wc-block-components-price-slider__button',
                isLoading: E,
                disabled: k || !O,
                onClick: N,
                screenReaderLabel: (0, d.__)('Apply price filter', 'woocommerce'),
              }),
          ),
        );
      };
      var w = n(6179),
        k = n(8529),
        E = n(5703),
        x = n(3832),
        N = n(3366);
      const S = 'ROUND_UP',
        C = 'ROUND_DOWN',
        F = (e, t, n) => {
          const r = 10 * 10 ** t;
          let i = null;
          const o = parseFloat(e);
          isNaN(o) ||
            (n === S ? (i = Math.ceil(o / r) * r) : n === C && (i = Math.floor(o / r) * r));
          const c = (0, a.Z)(i, Number.isFinite);
          return Number.isFinite(i) ? i : c;
        };
      n(8836);
      var R = n(4300);
      function A(e, t) {
        return Number(e) * 10 ** t;
      }
      const U = ({ attributes: e, isEditor: t = !1 }) => {
          const n = (0, R.$Q)(),
            i = (0, E.getSettingWithCoercion)('hasFilterableProducts', !1, l.isBoolean),
            o = (0, E.getSettingWithCoercion)('isRenderingPhpTemplate', !1, l.isBoolean),
            [c, d] = (0, m.useState)(!1),
            p = (0, N.Vf)('min_price'),
            _ = (0, N.Vf)('max_price'),
            [f] = (0, s.dJ)(),
            { results: g, isLoading: v } = (0, u.A)({
              queryPrices: !0,
              queryState: f,
              isEditor: t,
            }),
            h = (0, k.getCurrencyFromPriceResponse)(
              (0, l.objectHasProp)(g, 'price_range') ? g.price_range : void 0,
            ),
            [U, L] = (0, s.xd)('min_price'),
            [P, T] = (0, s.xd)('max_price'),
            [I, O] = (0, m.useState)(A(p, h.minorUnit) || null),
            [B, j] = (0, m.useState)(A(_, h.minorUnit) || null),
            { minConstraint: M, maxConstraint: Q } = (({
              minPrice: e,
              maxPrice: t,
              minorUnit: n,
            }) => ({ minConstraint: F(e || '', n, C), maxConstraint: F(t || '', n, S) }))({
              minPrice:
                (0, l.objectHasProp)(g, 'price_range') &&
                (0, l.objectHasProp)(g.price_range, 'min_price') &&
                (0, l.isString)(g.price_range.min_price)
                  ? g.price_range.min_price
                  : void 0,
              maxPrice:
                (0, l.objectHasProp)(g, 'price_range') &&
                (0, l.objectHasProp)(g.price_range, 'max_price') &&
                (0, l.isString)(g.price_range.max_price)
                  ? g.price_range.max_price
                  : void 0,
              minorUnit: h.minorUnit,
            });
          (0, m.useEffect)(() => {
            c || (L(A(p, h.minorUnit)), T(A(_, h.minorUnit)), d(!0));
          }, [h.minorUnit, c, _, p, T, L]);
          const [q, V] = (0, m.useState)(v),
            W = (0, m.useCallback)(
              (e, t) => {
                const n = t >= Number(Q) ? void 0 : t,
                  r = e <= Number(M) ? void 0 : e;
                if (window) {
                  const e = (function(e, t) {
                    const n = {};
                    for (const [e, r] of Object.entries(t)) r ? (n[e] = r.toString()) : delete n[e];
                    const r = (0, x.removeQueryArgs)(e, ...Object.keys(t));
                    return (0, x.addQueryArgs)(r, n);
                  })(window.location.href, {
                    min_price: r / 10 ** h.minorUnit,
                    max_price: n / 10 ** h.minorUnit,
                  });
                  window.location.href !== e && (0, N.CH)(e);
                }
                L(r), T(n);
              },
              [M, Q, L, T, h.minorUnit],
            ),
            Y = (0, b.YQ)(W, 500),
            $ = (0, m.useCallback)(
              t => {
                V(!0),
                  t[0] !== I && O(t[0]),
                  t[1] !== B && j(t[1]),
                  o && c && !e.showFilterButton && Y(t[0], t[1]);
              },
              [I, B, O, j, o, c, Y, e.showFilterButton],
            );
          (0, m.useEffect)(() => {
            e.showFilterButton || o || Y(I, B);
          }, [I, B, e.showFilterButton, Y, o]);
          const H = (0, a.Z)(U),
            K = (0, a.Z)(P),
            z = (0, a.Z)(M),
            D = (0, a.Z)(Q);
          if (
            ((0, m.useEffect)(() => {
              (!Number.isFinite(I) || (U !== H && U !== I) || (M !== z && M !== I)) &&
                O(Number.isFinite(U) ? U : M),
                (!Number.isFinite(B) || (P !== K && P !== B) || (Q !== D && Q !== B)) &&
                  j(Number.isFinite(P) ? P : Q);
            }, [I, B, U, P, M, Q, z, D, H, K]),
            !i)
          )
            return n(!1), null;
          if (!v && (null === M || null === Q || M === Q)) return n(!1), null;
          const J = `h${e.headingLevel}`;
          n(!0), !v && q && V(!1);
          const Z = (0, r.createElement)(
              J,
              { className: 'wc-block-price-filter__title' },
              e.heading,
            ),
            G = v && q ? (0, r.createElement)(w.A, null, Z) : Z;
          return (0, r.createElement)(
            r.Fragment,
            null,
            !t && e.heading && G,
            (0, r.createElement)(
              'div',
              { className: 'wc-block-price-slider' },
              (0, r.createElement)(y, {
                minConstraint: M,
                maxConstraint: Q,
                minPrice: I,
                maxPrice: B,
                currency: h,
                showInputFields: e.showInputFields,
                inlineInput: e.inlineInput,
                showFilterButton: e.showFilterButton,
                onChange: $,
                onSubmit: () => W(I, B),
                isLoading: v,
                isUpdating: q,
                isEditor: t,
              }),
            ),
          );
        },
        L = JSON.parse('{"uK":{"F8":{"A":3}}}'),
        P = e => {
          const t = (0, c.p)(e),
            n =
              ((i = e),
              {
                heading: (0, l.isString)(null == i ? void 0 : i.heading) ? i.heading : '',
                headingLevel:
                  ((0, l.isString)(null == i ? void 0 : i.headingLevel) &&
                    parseInt(i.headingLevel, 10)) ||
                  L.uK.F8.A,
                showFilterButton: 'true' === (null == i ? void 0 : i.showFilterButton),
                showInputFields: 'false' !== (null == i ? void 0 : i.showInputFields),
                inlineInput: 'true' === (null == i ? void 0 : i.inlineInput),
              });
          var i;
          return (0, r.createElement)(
            'div',
            {
              className: o()((0, l.isString)(e.className) ? e.className : '', t.className),
              style: t.style,
            },
            (0, r.createElement)(U, { isEditor: !1, attributes: n }),
          );
        };
    },
    3366: (e, t, n) => {
      'use strict';
      n.d(t, { CH: () => u, Q: () => m, Vf: () => s, nD: () => a, xB: () => l });
      var r = n(3832),
        i = n(5703),
        o = n(3993);
      const c = (0, i.getSettingWithCoercion)('isRenderingPhpTemplate', !1, o.isBoolean),
        l = 'query_type_',
        a = 'filter_';
      function s(e) {
        return window ? (0, r.getQueryArg)(window.location.href, e) : null;
      }
      function u(e) {
        if (c) {
          const t = new URL(e);
          (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
            t.searchParams.delete('paged'),
            t.searchParams.forEach((e, n) => {
              n.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(n);
            }),
            (window.location.href = t.href);
        } else window.history.replaceState({}, '', e);
      }
      const m = e => {
        const t = (0, r.getQueryArgs)(e);
        return (0, r.addQueryArgs)(e, t);
      };
    },
    1626: () => {},
    8335: () => {},
    1504: () => {},
    9505: () => {},
    8836: () => {},
  },
]);
