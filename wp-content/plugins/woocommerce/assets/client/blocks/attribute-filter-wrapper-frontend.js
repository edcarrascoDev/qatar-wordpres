(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [490],
  {
    5237: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => s });
      var n = r(1609),
        l = r(7723),
        o = r(4656);
      r(5400);
      const s = ({ name: e, count: t }) =>
        (0, n.createElement)(
          n.Fragment,
          null,
          e,
          null !== t &&
            Number.isFinite(t) &&
            (0, n.createElement)(o.Label, {
              label: t.toString(),
              screenReaderLabel: (0, l.sprintf) /* translators: %s number of products. */(
                /* translators: %s number of products. */
                (0, l._n)('%s product', '%s products', t, 'woocommerce'),
                t,
              ),
              wrapperElement: 'span',
              wrapperProps: { className: 'wc-filter-element-label-list-count' },
            }),
        );
    },
    6179: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => l });
      var n = r(1609);
      r(1626);
      const l = ({ children: e }) =>
        (0, n.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e);
    },
    4054: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => i });
      var n = r(1609),
        l = r(7723),
        o = r(9019),
        s = r.n(o),
        a = r(4656);
      r(8335);
      const i = ({
        className: e,
        /* translators: Reset button text for filters. */
        label: t = (0, l.__)('Reset', 'woocommerce'),
        onClick: r,
        screenReaderLabel: o = (0, l.__)('Reset filter', 'woocommerce'),
      }) =>
        (0, n.createElement)(
          'button',
          { className: s()('wc-block-components-filter-reset-button', e), onClick: r },
          (0, n.createElement)(a.Label, { label: t, screenReaderLabel: o }),
        );
    },
    1745: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => i });
      var n = r(1609),
        l = r(7723),
        o = r(9019),
        s = r.n(o),
        a = r(4656);
      r(1504);
      const i = ({
        className: e,
        isLoading: t,
        disabled: r,
        /* translators: Submit button text for filters. */
        label: o = (0, l.__)('Apply', 'woocommerce'),
        onClick: i,
        screenReaderLabel: c = (0, l.__)('Apply filter', 'woocommerce'),
      }) =>
        (0, n.createElement)(
          'button',
          {
            type: 'submit',
            className: s()(
              'wp-block-button__link',
              'wc-block-filter-submit-button',
              'wc-block-components-filter-submit-button',
              { 'is-loading': t },
              e,
            ),
            disabled: r,
            onClick: i,
          },
          (0, n.createElement)(a.Label, { label: o, screenReaderLabel: c }),
        );
    },
    80: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => a });
      var n = r(1609),
        l = r(1331),
        o = r(9019),
        s = r.n(o);
      r(243);
      const a = ({
        className: e,
        style: t,
        suggestions: r,
        multiple: o = !0,
        saveTransform: a = e => e.trim().replace(/\s/g, '-'),
        messages: i = {},
        validateInput: c = e => r.includes(e),
        label: u = '',
        ...d
      }) =>
        (0, n.createElement)(
          'div',
          {
            className: s()('wc-blocks-components-form-token-field-wrapper', e, {
              'single-selection': !o,
            }),
            style: t,
          },
          (0, n.createElement)(l.A, {
            label: u,
            __experimentalExpandOnFocus: !0,
            __experimentalShowHowTo: !1,
            __experimentalValidateInput: c,
            saveTransform: a,
            maxLength: o ? void 0 : 1,
            suggestions: r,
            messages: i,
            ...d,
          }),
        );
    },
    1561: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => d });
      var n = r(6087),
        l = r(4717),
        o = r(3993),
        s = r(5574),
        a = r(1573),
        i = r(9098),
        c = r(1380),
        u = r(6372);
      const d = ({
        queryAttribute: e,
        queryPrices: t,
        queryStock: r,
        queryRating: d,
        queryState: m,
        isEditor: g = !1,
      }) => {
        let p = (0, u._)();
        p = `${p}-collection-data`;
        const [b] = (0, i.dJ)(p),
          [y, f] = (0, i.xd)('calculate_attribute_counts', [], p),
          [v, h] = (0, i.xd)('calculate_price_range', null, p),
          [_, w] = (0, i.xd)('calculate_stock_status_counts', null, p),
          [E, S] = (0, i.xd)('calculate_rating_counts', null, p),
          x = (0, a.c)(e || {}),
          k = (0, a.c)(t),
          A = (0, a.c)(r),
          C = (0, a.c)(d);
        (0, n.useEffect)(() => {
          'object' == typeof x &&
            Object.keys(x).length &&
            (y.find(e => (0, o.objectHasProp)(x, 'taxonomy') && e.taxonomy === x.taxonomy) ||
              f([...y, x]));
        }, [x, y, f]),
          (0, n.useEffect)(() => {
            v !== k && void 0 !== k && h(k);
          }, [k, h, v]),
          (0, n.useEffect)(() => {
            _ !== A && void 0 !== A && w(A);
          }, [A, w, _]),
          (0, n.useEffect)(() => {
            E !== C && void 0 !== C && S(C);
          }, [C, S, E]);
        const [N, T] = (0, n.useState)(g),
          [L] = (0, l.d7)(N, 200);
        N || T(!0);
        const R = (0, n.useMemo)(
          () =>
            (e => {
              const t = e;
              return (
                Array.isArray(e.calculate_attribute_counts) &&
                  (t.calculate_attribute_counts = (0, s.di)(
                    e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                      taxonomy: e,
                      query_type: t,
                    })),
                  ).asc(['taxonomy', 'query_type'])),
                t
              );
            })(b),
          [b],
        );
        return (0, c.G)({
          namespace: '/wc/store/v1',
          resourceName: 'products/collection-data',
          query: { ...m, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...R },
          shouldSelect: L,
        });
      };
    },
    1380: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => c });
      var n = r(7594),
        l = r(7143),
        o = r(6087),
        s = r(1573),
        a = r(7615),
        i = r(3993);
      const c = e => {
        const {
          namespace: t,
          resourceName: r,
          resourceValues: c = [],
          query: u = {},
          shouldSelect: d = !0,
        } = e;
        if (!t || !r)
          throw new Error(
            'The options object must have valid values for the namespace and the resource properties.',
          );
        const m = (0, o.useRef)({ results: [], isLoading: !0 }),
          g = (0, s.c)(u),
          p = (0, s.c)(c),
          b = (0, a.a)(),
          y = (0, l.useSelect)(
            e => {
              if (!d) return null;
              const l = e(n.COLLECTIONS_STORE_KEY),
                o = [t, r, g, p],
                s = l.getCollectionError(...o);
              if (s) {
                if (!(0, i.isError)(s))
                  throw new Error(
                    'TypeError: `error` object is not an instance of Error constructor',
                  );
                b(s);
              }
              return {
                results: l.getCollection(...o),
                isLoading: !l.hasFinishedResolution('getCollection', o),
              };
            },
            [t, r, p, g, d],
          );
        return null !== y && (m.current = y), m.current;
      };
    },
    9098: (e, t, r) => {
      'use strict';
      r.d(t, { dJ: () => a, xd: () => i });
      var n = r(7594),
        l = r(7143),
        o = r(6087),
        s = (r(923), r(6372));
      const a = e => {
          const t = (0, s._)();
          e = e || t;
          const r = (0, l.useSelect)(
              t => t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
              [e],
            ),
            { setValueForQueryContext: a } = (0, l.useDispatch)(n.QUERY_STATE_STORE_KEY);
          return [
            r,
            (0, o.useCallback)(
              t => {
                a(e, t);
              },
              [e, a],
            ),
          ];
        },
        i = (e, t, r) => {
          const a = (0, s._)();
          r = r || a;
          const i = (0, l.useSelect)(l => l(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t), [
              r,
              e,
            ]),
            { setQueryValue: c } = (0, l.useDispatch)(n.QUERY_STATE_STORE_KEY);
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
    },
    6372: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => o });
      var n = r(6087);
      const l = (0, n.createContext)('page'),
        o = () => (0, n.useContext)(l);
      l.Provider;
    },
    9095: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => l });
      var n = r(6087);
      function l(e, t) {
        const r = (0, n.useRef)();
        return (
          (0, n.useEffect)(() => {
            r.current === e || (t && !t(e, r.current)) || (r.current = e);
          }, [e, t]),
          r.current
        );
      }
    },
    1573: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => s });
      var n = r(6087),
        l = r(923),
        o = r.n(l);
      function s(e) {
        const t = (0, n.useRef)(e);
        return o()(e, t.current) || (t.current = e), t.current;
      }
    },
    3566: (e, t, r) => {
      'use strict';
      r.d(t, { p: () => i });
      var n = r(9019),
        l = r.n(n),
        o = r(3993),
        s = r(92),
        a = r(6032);
      const i = e => {
        const t = (e => {
            const t = (0, o.isObject)(e) ? e : { style: {} };
            let r = t.style;
            return (
              (0, o.isString)(r) && (r = JSON.parse(r) || {}),
              (0, o.isObject)(r) || (r = {}),
              { ...t, style: r }
            );
          })(e),
          r = (0, a.BK)(t),
          n = (0, a.aR)(t),
          i = (0, a.fo)(t),
          c = (0, s.x)(t);
        return {
          className: l()(c.className, r.className, n.className, i.className),
          style: { ...c.style, ...r.style, ...n.style, ...i.style },
        };
      };
    },
    7615: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => l });
      var n = r(6087);
      const l = () => {
        const [, e] = (0, n.useState)();
        return (0, n.useCallback)(t => {
          e(() => {
            throw t;
          });
        }, []);
      };
    },
    92: (e, t, r) => {
      'use strict';
      r.d(t, { x: () => l });
      var n = r(3993);
      const l = e => {
        const t = (0, n.isObject)(e.style.typography) ? e.style.typography : {},
          r = (0, n.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : r,
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
    6032: (e, t, r) => {
      'use strict';
      r.d(t, { BK: () => u, aR: () => d, fo: () => m });
      var n = r(9019),
        l = r.n(n),
        o = r(1194),
        s = r(9786),
        a = r(3993);
      function i(e = {}) {
        const t = {};
        return (
          (0, s.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function c(e, t) {
        return e && t ? `has-${(0, o.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, r, n, o, s, u, d;
        const { backgroundColor: m, textColor: g, gradient: p, style: b } = e,
          y = c('background-color', m),
          f = c('color', g),
          v = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(p),
          h = v || (null == b || null === (t = b.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: l()(f, v, {
            [y]: !h && !!y,
            'has-text-color':
              g || (null == b || null === (r = b.color) || void 0 === r ? void 0 : r.text),
            'has-background':
              m ||
              (null == b || null === (n = b.color) || void 0 === n ? void 0 : n.background) ||
              p ||
              (null == b || null === (o = b.color) || void 0 === o ? void 0 : o.gradient),
            'has-link-color': (0, a.isObject)(
              null == b || null === (s = b.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == b ||
                null === (u = b.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: i({ color: (null == b ? void 0 : b.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const r = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: r, style: n } = e,
              o = r ? c('border-color', r) : '';
            return l()({
              'has-border-color':
                !!r || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
              [o]: !!o,
            });
          })(e),
          style: i({ border: r }),
        };
      }
      function m(e) {
        var t;
        return {
          className: void 0,
          style: i({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    2725: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => K });
      var n = r(1609),
        l = r(9019),
        o = r.n(l),
        s = r(3566),
        a = r(3993),
        i = r(7723),
        c = r(1573),
        u = r(9095),
        d = r(9098),
        m = r(1380),
        g = r(1561),
        p = r(6087),
        b = r(5237),
        y = r(4054),
        f = r(1745),
        v = r(923),
        h = r.n(v),
        _ = r(8537),
        w = r(5703),
        E = r(3832),
        S = r(7104),
        x = r(224),
        k = r(3366),
        A = r(80),
        C = r(6179),
        N = r(6412),
        T = r(9325);
      const L = [
          {
            value: 'preview-1',
            formattedValue: 'preview-1',
            name: 'Blue',
            label: (0, n.createElement)(b.A, { name: 'Blue', count: 3 }),
            textLabel: 'Blue (3)',
          },
          {
            value: 'preview-2',
            formattedValue: 'preview-2',
            name: 'Green',
            label: (0, n.createElement)(b.A, { name: 'Green', count: 3 }),
            textLabel: 'Green (3)',
          },
          {
            value: 'preview-3',
            formattedValue: 'preview-3',
            name: 'Red',
            label: (0, n.createElement)(b.A, { name: 'Red', count: 2 }),
            textLabel: 'Red (2)',
          },
        ],
        R = {
          count: 0,
          has_archives: !0,
          id: 0,
          label: 'Preview',
          name: 'preview',
          order: 'menu_order',
          parent: 0,
          taxonomy: 'preview',
          type: '',
        };
      r(3399);
      const F = JSON.parse(
        '{"uK":{"Do":{"A":"or"},"F8":{"A":3},"Ox":{"A":"list"},"dc":{"A":"multiple"}}}',
      );
      function q() {
        return Math.floor(Math.random() * Date.now());
      }
      const O = e => e.replace('pa_', ''),
        B = (e, t = []) => {
          const r = {};
          t.forEach(e => {
            const { attribute: t, slug: n, operator: l } = e,
              o = O(t),
              s = n.join(','),
              a = `${k.xB}${o}`,
              i = 'in' === l ? 'or' : 'and';
            (r[`${k.nD}${o}`] = s), (r[a] = i);
          });
          const n = (0, E.removeQueryArgs)(e, ...Object.keys(r));
          return (0, E.addQueryArgs)(n, r);
        },
        Q = e => {
          if (e) {
            const t = (0, k.Vf)(`filter_${e.name}`);
            return ('string' == typeof t ? t.split(',') : []).map(e =>
              encodeURIComponent(e).toLowerCase(),
            );
          }
          return [];
        },
        P = e =>
          e
            .trim()
            .replace(/\s/g, '-')
            .replace(/_/g, '-')
            .replace(/-+/g, '-')
            .replace(/[^a-zA-Z0-9-]/g, '');
      var $ = r(4656);
      const I = ({ isLoading: e = !1, options: t, checked: r, onChange: l }) =>
        e
          ? (0, n.createElement)(
              n.Fragment,
              null,
              (0, n.createElement)('span', { className: 'is-loading' }),
              (0, n.createElement)('span', { className: 'is-loading' }),
            )
          : (0, n.createElement)($.CheckboxList, {
              className: 'wc-block-attribute-filter-list',
              options: t,
              checked: r,
              onChange: l,
              isLoading: e,
              isDisabled: e,
            });
      var V = r(4300);
      const j = ({ attributes: e, isEditor: t = !1, getNotice: r = () => null }) => {
          const l = (0, w.getSettingWithCoercion)('hasFilterableProducts', !1, a.isBoolean),
            s = (0, w.getSettingWithCoercion)('isRenderingPhpTemplate', !1, a.isBoolean),
            v = (0, w.getSettingWithCoercion)('pageUrl', window.location.href, a.isString),
            [F, $] = (0, p.useState)(!1),
            j = e.isPreview && !e.attributeId ? R : (0, N.WK)(e.attributeId),
            K = (0, p.useMemo)(() => Q(j), [j]),
            [D, U] = (0, p.useState)(K),
            [W, Y] = (0, p.useState)(q()),
            [H, J] = (0, p.useState)(e.isPreview && !e.attributeId ? L : []),
            [z] = (0, d.dJ)(),
            [G, M] = (0, d.xd)('attributes', []),
            { results: Z, isLoading: X } = (0, m.G)({
              namespace: '/wc/store/v1',
              resourceName: 'products/attributes/terms',
              resourceValues: [(null == j ? void 0 : j.id) || 0],
              shouldSelect: e.attributeId > 0,
              query: { orderby: (null == j ? void 0 : j.orderby) || 'menu_order' },
            }),
            { results: ee, isLoading: te } = (0, g.A)({
              queryAttribute: {
                taxonomy: (null == j ? void 0 : j.taxonomy) || '',
                queryType: e.queryType,
              },
              queryState: z,
              isEditor: t,
            }),
            re = (0, p.useCallback)(
              e =>
                (0, a.objectHasProp)(ee, 'attribute_counts') && Array.isArray(ee.attribute_counts)
                  ? ee.attribute_counts.find(({ term: t }) => t === e)
                  : null,
              [ee],
            );
          (0, p.useEffect)(() => {
            if (X || te) return;
            if (!Array.isArray(Z)) return;
            const t = Z.map(t => {
              const r = re(t.id);
              if (
                !(
                  r ||
                  D.includes(t.slug) ||
                  ((l = t.slug),
                  null != z &&
                    z.attributes &&
                    z.attributes.some(
                      ({ attribute: e, slug: t = [] }) =>
                        e === (null == j ? void 0 : j.taxonomy) && t.includes(l),
                    ))
                )
              )
                return null;
              var l;
              const o = r ? r.count : 0;
              return {
                formattedValue: P(t.slug),
                value: t.slug,
                name: (0, _.decodeEntities)(t.name),
                label: (0, n.createElement)(b.A, {
                  name: (0, _.decodeEntities)(t.name),
                  count: e.showCounts ? o : null,
                }),
                textLabel: e.showCounts
                  ? `${(0, _.decodeEntities)(t.name)} (${o})`
                  : (0, _.decodeEntities)(t.name),
              };
            }).filter(e => !!e);
            J(t), Y(q());
          }, [null == j ? void 0 : j.taxonomy, Z, X, e.showCounts, te, re, D, z.attributes]);
          const ne = (0, p.useCallback)(
              e =>
                Array.isArray(Z)
                  ? Z.reduce((t, r) => (e.includes(r.slug) && t.push(r), t), [])
                  : [],
              [Z],
            ),
            le = (0, p.useCallback)(
              (e, t = !1) => {
                if (
                  ((e = e.map(e => ({ ...e, slug: e.slug.map(e => decodeURIComponent(e)) }))), t)
                ) {
                  if (null == j || !j.taxonomy) return;
                  const t = Object.keys((0, E.getQueryArgs)(window.location.href)),
                    r = O(j.taxonomy),
                    n = t.reduce(
                      (e, t) =>
                        t.includes(k.xB + r) || t.includes(k.nD + r)
                          ? (0, E.removeQueryArgs)(e, t)
                          : e,
                      window.location.href,
                    ),
                    l = B(n, e);
                  (0, k.CH)(l);
                } else {
                  const t = B(v, e);
                  ((e, t) => {
                    const r = Object.entries(t).reduce(
                      (e, [t, r]) => (t.includes('query_type') ? e : { ...e, [t]: r }),
                      {},
                    );
                    return Object.entries(r).reduce((t, [r, n]) => e[r] === n && t, !0);
                  })((0, E.getQueryArgs)(window.location.href), (0, E.getQueryArgs)(t)) ||
                    (0, k.CH)(t);
                }
              },
              [v, null == j ? void 0 : j.taxonomy],
            ),
            oe = t => {
              const r = (0, T.u)(G, M, j, ne(t), 'or' === e.queryType ? 'in' : 'and');
              le(r, 0 === t.length);
            },
            se = (0, p.useCallback)(
              (r, n = !1) => {
                t ||
                  (U(r),
                  (!n && e.showFilterButton) ||
                    (0, T.u)(G, M, j, ne(r), 'or' === e.queryType ? 'in' : 'and'));
              },
              [t, U, G, M, j, ne, e.queryType, e.showFilterButton],
            ),
            ae = (0, p.useMemo)(
              () =>
                (0, a.isAttributeQueryCollection)(G)
                  ? G.filter(({ attribute: e }) => e === (null == j ? void 0 : j.taxonomy)).flatMap(
                      ({ slug: e }) => e,
                    )
                  : [],
              [G, null == j ? void 0 : j.taxonomy],
            ),
            ie = (0, c.c)(ae),
            ce = (0, u.Z)(ie);
          (0, p.useEffect)(() => {
            !ce || h()(ce, ie) || h()(D, ie) || se(ie);
          }, [D, ie, ce, se]);
          const ue = 'single' !== e.selectType,
            de = (0, p.useCallback)(
              e => {
                const t = D.includes(e);
                let r;
                ue
                  ? ((r = D.filter(t => t !== e)), t || (r.push(e), r.sort()))
                  : (r = t ? [] : [e]),
                  se(r);
              },
              [D, ue, se],
            );
          (0, p.useEffect)(() => {
            j &&
              !e.showFilterButton &&
              ((({ currentCheckedFilters: e, hasSetFilterDefaultsFromUrl: t }) =>
                t && 0 === e.length)({ currentCheckedFilters: D, hasSetFilterDefaultsFromUrl: F })
                ? le(G, !0)
                : le(G, !1));
          }, [F, le, G, j, D, e.showFilterButton]),
            (0, p.useEffect)(() => {
              if (!F && !X) return K.length > 0 ? ($(!0), void se(K, !0)) : void (s || $(!0));
            }, [j, F, X, se, K, s]);
          const me = (0, V.$Q)();
          if (!l) return me(!1), null;
          if (!j) return t ? r('noAttributes') : (me(!1), null);
          if (0 === H.length && !X && t) return r('noProducts');
          const ge = `h${e.headingLevel}`,
            pe = !e.isPreview && X,
            be = !e.isPreview && te,
            ye = (pe || be) && 0 === H.length;
          if (!ye && 0 === H.length) return me(!1), null;
          const fe = ue ? !ye && D.length < H.length : !ye && 0 === D.length,
            ve = (0, n.createElement)(
              ge,
              { className: 'wc-block-attribute-filter__title' },
              e.heading,
            ),
            he = ye ? (0, n.createElement)(C.A, null, ve) : ve;
          return (
            me(!0),
            (0, n.createElement)(
              n.Fragment,
              null,
              !t && e.heading && he,
              (0, n.createElement)(
                'div',
                { className: o()('wc-block-attribute-filter', `style-${e.displayStyle}`) },
                'dropdown' === e.displayStyle
                  ? (0, n.createElement)(
                      n.Fragment,
                      null,
                      (0, n.createElement)(A.A, {
                        key: W,
                        className: o()({ 'single-selection': !ue, 'is-loading': ye }),
                        suggestions: H.filter(e => !D.includes(e.value)).map(e => e.formattedValue),
                        disabled: ye,
                        placeholder: (0, i.sprintf) /* translators: %s attribute name. */(
                          /* translators: %s attribute name. */
                          (0, i.__)('Select %s', 'woocommerce'),
                          j.label,
                        ),
                        onChange: e => {
                          !ue && e.length > 1 && (e = [e[e.length - 1]]);
                          const t = [
                            (e = e.map(e => {
                              const t = H.find(t => t.formattedValue === e);
                              return t ? t.value : e;
                            })),
                            D,
                          ].reduce((e, t) => e.filter(e => !t.includes(e)));
                          if (1 === t.length) return de(t[0]);
                          const r = [D, e].reduce((e, t) => e.filter(e => !t.includes(e)));
                          1 === r.length && de(r[0]);
                        },
                        value: D,
                        displayTransform: e => {
                          const t = H.find(t => [t.value, t.formattedValue].includes(e));
                          return t ? t.textLabel : e;
                        },
                        saveTransform: P,
                        messages: {
                          added: (0, i.sprintf) /* translators: %s is the attribute label. */(
                            /* translators: %s is the attribute label. */
                            (0, i.__)('%s filter added.', 'woocommerce'),
                            j.label,
                          ),
                          removed: (0, i.sprintf) /* translators: %s is the attribute label. */(
                            /* translators: %s is the attribute label. */
                            (0, i.__)('%s filter removed.', 'woocommerce'),
                            j.label,
                          ),
                          remove: (0, i.sprintf) /* translators: %s is the attribute label. */(
                            /* translators: %s is the attribute label. */
                            (0, i.__)('Remove %s filter.', 'woocommerce'),
                            j.label.toLocaleLowerCase(),
                          ),
                          __experimentalInvalid: (0,
                          i.sprintf) /* translators: %s is the attribute label. */(
                            /* translators: %s is the attribute label. */
                            (0, i.__)('Invalid %s filter.', 'woocommerce'),
                            j.label.toLocaleLowerCase(),
                          ),
                        },
                      }),
                      fe && (0, n.createElement)(S.A, { icon: x.A, size: 30 }),
                    )
                  : (0, n.createElement)(I, {
                      options: H,
                      checked: D,
                      onChange: de,
                      isLoading: ye,
                      isDisabled: ye,
                    }),
              ),
              (0, n.createElement)(
                'div',
                { className: 'wc-block-attribute-filter__actions' },
                (D.length > 0 || t) &&
                  !ye &&
                  (0, n.createElement)(y.A, {
                    onClick: () => {
                      U([]), Y(q()), F && oe([]);
                    },
                    screenReaderLabel: (0, i.__)('Reset attribute filter', 'woocommerce'),
                  }),
                e.showFilterButton &&
                  (0, n.createElement)(f.A, {
                    className: 'wc-block-attribute-filter__button',
                    isLoading: ye,
                    disabled: (() => {
                      if (pe || be) return !0;
                      const e = Q(j);
                      return e.length === D.length && D.every(t => e.includes(t));
                    })(),
                    onClick: () => oe(D),
                  }),
              ),
            )
          );
        },
        K = e => {
          const t = (0, s.p)(e),
            r =
              ((l = e),
              {
                className: (0, a.isString)(null == l ? void 0 : l.className) ? l.className : '',
                attributeId: parseInt(
                  (0, a.isString)(null == l ? void 0 : l.attributeId) ? l.attributeId : '0',
                  10,
                ),
                showCounts: 'true' === (null == l ? void 0 : l.showCounts),
                queryType:
                  ((0, a.isString)(null == l ? void 0 : l.queryType) && l.queryType) || F.uK.Do.A,
                heading: (0, a.isString)(null == l ? void 0 : l.heading) ? l.heading : '',
                headingLevel:
                  ((0, a.isString)(null == l ? void 0 : l.headingLevel) &&
                    parseInt(l.headingLevel, 10)) ||
                  F.uK.F8.A,
                displayStyle:
                  ((0, a.isString)(null == l ? void 0 : l.displayStyle) && l.displayStyle) ||
                  F.uK.Ox.A,
                showFilterButton: 'true' === (null == l ? void 0 : l.showFilterButton),
                selectType:
                  ((0, a.isString)(null == l ? void 0 : l.selectType) && l.selectType) || F.uK.dc.A,
                isPreview: !1,
              });
          var l;
          return (0, n.createElement)(
            'div',
            {
              className: o()((0, a.isString)(e.className) ? e.className : '', t.className),
              style: t.style,
            },
            (0, n.createElement)(j, { isEditor: !1, attributes: r }),
          );
        };
    },
    9325: (e, t, r) => {
      'use strict';
      r.d(t, { $: () => l, u: () => o });
      var n = r(5574);
      const l = (e = [], t, r, l = '') => {
          const o = e.filter(e => e.attribute === r.taxonomy),
            s = o.length ? o[0] : null;
          if (!(s && s.slug && Array.isArray(s.slug) && s.slug.includes(l))) return;
          const a = s.slug.filter(e => e !== l),
            i = e.filter(e => e.attribute !== r.taxonomy);
          a.length > 0 && ((s.slug = a.sort()), i.push(s)), t((0, n.di)(i).asc('attribute'));
        },
        o = (e = [], t, r, l = [], o = 'in') => {
          if (!r || !r.taxonomy) return [];
          const s = e.filter(e => e.attribute !== r.taxonomy);
          return (
            0 === l.length
              ? t(s)
              : (s.push({
                  attribute: r.taxonomy,
                  operator: o,
                  slug: l.map(({ slug: e }) => e).sort(),
                }),
                t((0, n.di)(s).asc('attribute'))),
            s
          );
        };
    },
    6412: (e, t, r) => {
      'use strict';
      r.d(t, { OJ: () => s, WK: () => o });
      var n = r(5703);
      r(3993), r(7143);
      const l = (0, n.getSetting)('attributes', []).reduce((e, t) => {
          const r =
            (n = t) && n.attribute_name
              ? {
                  id: parseInt(n.attribute_id, 10),
                  name: n.attribute_name,
                  taxonomy: 'pa_' + n.attribute_name,
                  label: n.attribute_label,
                  orderby: n.attribute_orderby,
                }
              : null;
          var n;
          return r && r.id && e.push(r), e;
        }, []),
        o = e => {
          if (e) return l.find(t => t.id === e);
        },
        s = e => {
          if (e) return l.find(t => t.taxonomy === e);
        };
    },
    3366: (e, t, r) => {
      'use strict';
      r.d(t, { CH: () => u, Q: () => d, Vf: () => c, nD: () => i, xB: () => a });
      var n = r(3832),
        l = r(5703),
        o = r(3993);
      const s = (0, l.getSettingWithCoercion)('isRenderingPhpTemplate', !1, o.isBoolean),
        a = 'query_type_',
        i = 'filter_';
      function c(e) {
        return window ? (0, n.getQueryArg)(window.location.href, e) : null;
      }
      function u(e) {
        if (s) {
          const t = new URL(e);
          (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
            t.searchParams.delete('paged'),
            t.searchParams.forEach((e, r) => {
              r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
            }),
            (window.location.href = t.href);
        } else window.history.replaceState({}, '', e);
      }
      const d = e => {
        const t = (0, n.getQueryArgs)(e);
        return (0, n.addQueryArgs)(e, t);
      };
    },
    5400: () => {},
    1626: () => {},
    8335: () => {},
    1504: () => {},
    243: () => {},
    3399: () => {},
  },
]);
