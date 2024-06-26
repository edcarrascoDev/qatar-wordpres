(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [7660],
  {
    5237: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l });
      var o = s(1609),
        n = s(7723),
        r = s(4656);
      s(5400);
      const l = ({ name: e, count: t }) =>
        (0, o.createElement)(
          o.Fragment,
          null,
          e,
          null !== t &&
            Number.isFinite(t) &&
            (0, o.createElement)(r.Label, {
              label: t.toString(),
              screenReaderLabel: (0, n.sprintf) /* translators: %s number of products. */(
                /* translators: %s number of products. */
                (0, n._n)('%s product', '%s products', t, 'woocommerce'),
                t,
              ),
              wrapperElement: 'span',
              wrapperProps: { className: 'wc-filter-element-label-list-count' },
            }),
        );
    },
    6179: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => n });
      var o = s(1609);
      s(1626);
      const n = ({ children: e }) =>
        (0, o.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e);
    },
    4054: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var o = s(1609),
        n = s(7723),
        r = s(9019),
        l = s.n(r),
        c = s(4656);
      s(8335);
      const a = ({
        className: e,
        /* translators: Reset button text for filters. */
        label: t = (0, n.__)('Reset', 'woocommerce'),
        onClick: s,
        screenReaderLabel: r = (0, n.__)('Reset filter', 'woocommerce'),
      }) =>
        (0, o.createElement)(
          'button',
          { className: l()('wc-block-components-filter-reset-button', e), onClick: s },
          (0, o.createElement)(c.Label, { label: t, screenReaderLabel: r }),
        );
    },
    1745: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var o = s(1609),
        n = s(7723),
        r = s(9019),
        l = s.n(r),
        c = s(4656);
      s(1504);
      const a = ({
        className: e,
        isLoading: t,
        disabled: s,
        /* translators: Submit button text for filters. */
        label: r = (0, n.__)('Apply', 'woocommerce'),
        onClick: a,
        screenReaderLabel: i = (0, n.__)('Apply filter', 'woocommerce'),
      }) =>
        (0, o.createElement)(
          'button',
          {
            type: 'submit',
            className: l()(
              'wp-block-button__link',
              'wc-block-filter-submit-button',
              'wc-block-components-filter-submit-button',
              { 'is-loading': t },
              e,
            ),
            disabled: s,
            onClick: a,
          },
          (0, o.createElement)(c.Label, { label: r, screenReaderLabel: i }),
        );
    },
    80: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => c });
      var o = s(1609),
        n = s(1331),
        r = s(9019),
        l = s.n(r);
      s(243);
      const c = ({
        className: e,
        style: t,
        suggestions: s,
        multiple: r = !0,
        saveTransform: c = e => e.trim().replace(/\s/g, '-'),
        messages: a = {},
        validateInput: i = e => s.includes(e),
        label: u = '',
        ...d
      }) =>
        (0, o.createElement)(
          'div',
          {
            className: l()('wc-blocks-components-form-token-field-wrapper', e, {
              'single-selection': !r,
            }),
            style: t,
          },
          (0, o.createElement)(n.A, {
            label: u,
            __experimentalExpandOnFocus: !0,
            __experimentalShowHowTo: !1,
            __experimentalValidateInput: i,
            saveTransform: c,
            maxLength: r ? void 0 : 1,
            suggestions: s,
            messages: a,
            ...d,
          }),
        );
    },
    1561: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => d });
      var o = s(6087),
        n = s(4717),
        r = s(3993),
        l = s(5574),
        c = s(1573),
        a = s(9098),
        i = s(1380),
        u = s(6372);
      const d = ({
        queryAttribute: e,
        queryPrices: t,
        queryStock: s,
        queryRating: d,
        queryState: m,
        isEditor: f = !1,
      }) => {
        let g = (0, u._)();
        g = `${g}-collection-data`;
        const [p] = (0, a.dJ)(g),
          [v, b] = (0, a.xd)('calculate_attribute_counts', [], g),
          [y, h] = (0, a.xd)('calculate_price_range', null, g),
          [_, k] = (0, a.xd)('calculate_stock_status_counts', null, g),
          [w, E] = (0, a.xd)('calculate_rating_counts', null, g),
          S = (0, c.c)(e || {}),
          A = (0, c.c)(t),
          C = (0, c.c)(s),
          x = (0, c.c)(d);
        (0, o.useEffect)(() => {
          'object' == typeof S &&
            Object.keys(S).length &&
            (v.find(e => (0, r.objectHasProp)(S, 'taxonomy') && e.taxonomy === S.taxonomy) ||
              b([...v, S]));
        }, [S, v, b]),
          (0, o.useEffect)(() => {
            y !== A && void 0 !== A && h(A);
          }, [A, h, y]),
          (0, o.useEffect)(() => {
            _ !== C && void 0 !== C && k(C);
          }, [C, k, _]),
          (0, o.useEffect)(() => {
            w !== x && void 0 !== x && E(x);
          }, [x, E, w]);
        const [N, R] = (0, o.useState)(f),
          [T] = (0, n.d7)(N, 200);
        N || R(!0);
        const L = (0, o.useMemo)(
          () =>
            (e => {
              const t = e;
              return (
                Array.isArray(e.calculate_attribute_counts) &&
                  (t.calculate_attribute_counts = (0, l.di)(
                    e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                      taxonomy: e,
                      query_type: t,
                    })),
                  ).asc(['taxonomy', 'query_type'])),
                t
              );
            })(p),
          [p],
        );
        return (0, i.G)({
          namespace: '/wc/store/v1',
          resourceName: 'products/collection-data',
          query: { ...m, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...L },
          shouldSelect: T,
        });
      };
    },
    1380: (e, t, s) => {
      'use strict';
      s.d(t, { G: () => i });
      var o = s(7594),
        n = s(7143),
        r = s(6087),
        l = s(1573),
        c = s(7615),
        a = s(3993);
      const i = e => {
        const {
          namespace: t,
          resourceName: s,
          resourceValues: i = [],
          query: u = {},
          shouldSelect: d = !0,
        } = e;
        if (!t || !s)
          throw new Error(
            'The options object must have valid values for the namespace and the resource properties.',
          );
        const m = (0, r.useRef)({ results: [], isLoading: !0 }),
          f = (0, l.c)(u),
          g = (0, l.c)(i),
          p = (0, c.a)(),
          v = (0, n.useSelect)(
            e => {
              if (!d) return null;
              const n = e(o.COLLECTIONS_STORE_KEY),
                r = [t, s, f, g],
                l = n.getCollectionError(...r);
              if (l) {
                if (!(0, a.isError)(l))
                  throw new Error(
                    'TypeError: `error` object is not an instance of Error constructor',
                  );
                p(l);
              }
              return {
                results: n.getCollection(...r),
                isLoading: !n.hasFinishedResolution('getCollection', r),
              };
            },
            [t, s, g, f, d],
          );
        return null !== v && (m.current = v), m.current;
      };
    },
    9098: (e, t, s) => {
      'use strict';
      s.d(t, { dJ: () => c, xd: () => a });
      var o = s(7594),
        n = s(7143),
        r = s(6087),
        l = (s(923), s(6372));
      const c = e => {
          const t = (0, l._)();
          e = e || t;
          const s = (0, n.useSelect)(
              t => t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
              [e],
            ),
            { setValueForQueryContext: c } = (0, n.useDispatch)(o.QUERY_STATE_STORE_KEY);
          return [
            s,
            (0, r.useCallback)(
              t => {
                c(e, t);
              },
              [e, c],
            ),
          ];
        },
        a = (e, t, s) => {
          const c = (0, l._)();
          s = s || c;
          const a = (0, n.useSelect)(n => n(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(s, e, t), [
              s,
              e,
            ]),
            { setQueryValue: i } = (0, n.useDispatch)(o.QUERY_STATE_STORE_KEY);
          return [
            a,
            (0, r.useCallback)(
              t => {
                i(s, e, t);
              },
              [s, e, i],
            ),
          ];
        };
    },
    6372: (e, t, s) => {
      'use strict';
      s.d(t, { _: () => r });
      var o = s(6087);
      const n = (0, o.createContext)('page'),
        r = () => (0, o.useContext)(n);
      n.Provider;
    },
    9095: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => n });
      var o = s(6087);
      function n(e, t) {
        const s = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            s.current === e || (t && !t(e, s.current)) || (s.current = e);
          }, [e, t]),
          s.current
        );
      }
    },
    1573: (e, t, s) => {
      'use strict';
      s.d(t, { c: () => l });
      var o = s(6087),
        n = s(923),
        r = s.n(n);
      function l(e) {
        const t = (0, o.useRef)(e);
        return r()(e, t.current) || (t.current = e), t.current;
      }
    },
    3566: (e, t, s) => {
      'use strict';
      s.d(t, { p: () => a });
      var o = s(9019),
        n = s.n(o),
        r = s(3993),
        l = s(92),
        c = s(6032);
      const a = e => {
        const t = (e => {
            const t = (0, r.isObject)(e) ? e : { style: {} };
            let s = t.style;
            return (
              (0, r.isString)(s) && (s = JSON.parse(s) || {}),
              (0, r.isObject)(s) || (s = {}),
              { ...t, style: s }
            );
          })(e),
          s = (0, c.BK)(t),
          o = (0, c.aR)(t),
          a = (0, c.fo)(t),
          i = (0, l.x)(t);
        return {
          className: n()(i.className, s.className, o.className, a.className),
          style: { ...i.style, ...s.style, ...o.style, ...a.style },
        };
      };
    },
    7615: (e, t, s) => {
      'use strict';
      s.d(t, { a: () => n });
      var o = s(6087);
      const n = () => {
        const [, e] = (0, o.useState)();
        return (0, o.useCallback)(t => {
          e(() => {
            throw t;
          });
        }, []);
      };
    },
    92: (e, t, s) => {
      'use strict';
      s.d(t, { x: () => n });
      var o = s(3993);
      const n = e => {
        const t = (0, o.isObject)(e.style.typography) ? e.style.typography : {},
          s = (0, o.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : s,
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
    6032: (e, t, s) => {
      'use strict';
      s.d(t, { BK: () => u, aR: () => d, fo: () => m });
      var o = s(9019),
        n = s.n(o),
        r = s(1194),
        l = s(9786),
        c = s(3993);
      function a(e = {}) {
        const t = {};
        return (
          (0, l.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, r.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, s, o, r, l, u, d;
        const { backgroundColor: m, textColor: f, gradient: g, style: p } = e,
          v = i('background-color', m),
          b = i('color', f),
          y = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(g),
          h = y || (null == p || null === (t = p.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: n()(b, y, {
            [v]: !h && !!v,
            'has-text-color':
              f || (null == p || null === (s = p.color) || void 0 === s ? void 0 : s.text),
            'has-background':
              m ||
              (null == p || null === (o = p.color) || void 0 === o ? void 0 : o.background) ||
              g ||
              (null == p || null === (r = p.color) || void 0 === r ? void 0 : r.gradient),
            'has-link-color': (0, c.isObject)(
              null == p || null === (l = p.elements) || void 0 === l ? void 0 : l.link,
            )
              ? null == p ||
                null === (u = p.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: a({ color: (null == p ? void 0 : p.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const s = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: s, style: o } = e,
              r = s ? i('border-color', s) : '';
            return n()({
              'has-border-color':
                !!s || !(null == o || null === (t = o.border) || void 0 === t || !t.color),
              [r]: !!r,
            });
          })(e),
          style: a({ border: s }),
        };
      }
      function m(e) {
        var t;
        return {
          className: void 0,
          style: a({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    4735: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => q });
      var o = s(1609),
        n = s(9019),
        r = s.n(n),
        l = s(3566),
        c = s(3993),
        a = s(7723),
        i = s(195),
        u = s(7104),
        d = s(224),
        m = s(1573),
        f = s(9095),
        g = s(9098),
        p = s(1561),
        v = s(5703),
        b = s(6087),
        y = s(4656),
        h = s(1745),
        _ = s(4054),
        k = s(6179),
        w = s(5237),
        E = s(80),
        S = s(923),
        A = s.n(S),
        C = s(8537),
        x = s(3832),
        N = s(3366);
      const R = [
        {
          value: 'preview-1',
          name: 'In Stock',
          label: (0, o.createElement)(w.A, { name: 'In Stock', count: 3 }),
          textLabel: 'In Stock (3)',
        },
        {
          value: 'preview-2',
          name: 'Out of stock',
          label: (0, o.createElement)(w.A, { name: 'Out of stock', count: 3 }),
          textLabel: 'Out of stock (3)',
        },
        {
          value: 'preview-3',
          name: 'On backorder',
          label: (0, o.createElement)(w.A, { name: 'On backorder', count: 2 }),
          textLabel: 'On backorder (2)',
        },
      ];
      s(5837);
      const T = JSON.parse('{"uK":{"F8":{"A":3},"Ox":{"A":"list"},"dc":{"A":"multiple"}}}');
      function L() {
        return Math.floor(Math.random() * Date.now());
      }
      const O = e =>
        e
          .trim()
          .replace(/\s/g, '')
          .replace(/_/g, '-')
          .replace(/-+/g, '-')
          .replace(/[^a-zA-Z0-9-]/g, '');
      var F = s(4300);
      const P = N.nD + 'stock_status',
        Q = ({ attributes: e, isEditor: t = !1 }) => {
          const s = (0, F.$Q)(),
            n = (0, v.getSettingWithCoercion)('isRenderingPhpTemplate', !1, c.isBoolean),
            [l, S] = (0, b.useState)(!1),
            { outofstock: T, ...Q } = (0, v.getSetting)('stockStatusOptions', {}),
            q = (0, b.useRef)(
              (0, v.getSetting)('hideOutOfStockItems', !1) ? Q : { outofstock: T, ...Q },
            ),
            j = (0, b.useMemo)(
              () =>
                ((e, t = 'filter_stock_status') => {
                  const s = (0, N.Vf)(t);
                  if (!s) return [];
                  const o = (0, c.isString)(s) ? s.split(',') : s,
                    n = Object.keys(e);
                  return o.filter(e => n.includes(e));
                })(q.current, P),
              [],
            ),
            [B, K] = (0, b.useState)(j),
            [$, I] = (0, b.useState)(e.isPreview ? R : []),
            [Y] = (0, b.useState)(
              Object.entries(q.current)
                .map(([e, t]) => ({ slug: e, name: t }))
                .filter(e => !!e.name)
                .sort((e, t) => e.slug.localeCompare(t.slug)),
            ),
            [D] = (0, g.dJ)(),
            [H, V] = (0, g.xd)('stock_status', j),
            { results: z, isLoading: J } = (0, p.A)({ queryStock: !0, queryState: D, isEditor: t }),
            W = (0, b.useCallback)(
              e =>
                (0, c.objectHasProp)(z, 'stock_status_counts') &&
                Array.isArray(z.stock_status_counts)
                  ? z.stock_status_counts.find(
                      ({ status: t, count: s }) => t === e && 0 !== Number(s),
                    )
                  : null,
              [z],
            ),
            [M, U] = (0, b.useState)(L());
          (0, b.useEffect)(() => {
            if (J || e.isPreview) return;
            const t = Y.map(t => {
              const s = W(t.slug);
              if (
                !(
                  s ||
                  B.includes(t.slug) ||
                  ((n = t.slug),
                  null != D &&
                    D.stock_status &&
                    D.stock_status.some(({ status: e = [] }) => e.includes(n)))
                )
              )
                return null;
              var n;
              const r = s ? Number(s.count) : 0;
              return {
                value: t.slug,
                name: (0, C.decodeEntities)(t.name),
                label: (0, o.createElement)(w.A, {
                  name: (0, C.decodeEntities)(t.name),
                  count: e.showCounts ? r : null,
                }),
                textLabel: e.showCounts
                  ? `${(0, C.decodeEntities)(t.name)} (${r})`
                  : (0, C.decodeEntities)(t.name),
              };
            }).filter(e => !!e);
            I(t), U(L());
          }, [e.showCounts, e.isPreview, J, W, B, D.stock_status, Y]);
          const Z = 'single' !== e.selectType,
            G = (0, b.useCallback)(
              e => {
                t ||
                  (e && !n && V(e),
                  (e => {
                    if (!window) return;
                    if (0 === e.length) {
                      const e = (0, x.removeQueryArgs)(window.location.href, P);
                      return void (e !== (0, N.Q)(window.location.href) && (0, N.CH)(e));
                    }
                    const t = (0, x.addQueryArgs)(window.location.href, { [P]: e.join(',') });
                    t !== (0, N.Q)(window.location.href) && (0, N.CH)(t);
                  })(e));
              },
              [t, V, n],
            );
          (0, b.useEffect)(() => {
            e.showFilterButton || G(B);
          }, [e.showFilterButton, B, G]);
          const X = (0, b.useMemo)(() => H, [H]),
            ee = (0, m.c)(X),
            te = (0, f.Z)(ee);
          (0, b.useEffect)(() => {
            A()(te, ee) || A()(B, ee) || K(ee);
          }, [B, ee, te]),
            (0, b.useEffect)(() => {
              l || (V(j), S(!0));
            }, [V, l, S, j]);
          const se = (0, b.useCallback)(
            e => {
              const t = e => {
                  const t = $.find(t => t.value === e);
                  return t ? t.name : null;
                },
                s = ({ filterAdded: e, filterRemoved: s }) => {
                  const o = e ? t(e) : null,
                    n = s ? t(s) : null;
                  o
                    ? (0, i.speak)(
                        (0,
                        a.sprintf) /* translators: %s stock statuses (for example: 'instock'...) */(
                          /* translators: %s stock statuses (for example: 'instock'...) */
                          (0, a.__)('%s filter added.', 'woocommerce'),
                          o,
                        ),
                      )
                    : n &&
                      (0, i.speak)(
                        (0,
                        a.sprintf) /* translators: %s stock statuses (for example:'instock'...) */(
                          /* translators: %s stock statuses (for example:'instock'...) */
                          (0, a.__)('%s filter removed.', 'woocommerce'),
                          n,
                        ),
                      );
                },
                o = B.includes(e);
              if (!Z) {
                const t = o ? [] : [e];
                return s(o ? { filterRemoved: e } : { filterAdded: e }), void K(t);
              }
              if (o) {
                const t = B.filter(t => t !== e);
                return s({ filterRemoved: e }), void K(t);
              }
              const n = [...B, e].sort();
              s({ filterAdded: e }), K(n);
            },
            [B, Z, $],
          );
          if (!J && 0 === $.length) return s(!1), null;
          const oe = `h${e.headingLevel}`,
            ne = (!e.isPreview && !q.current) || 0 === $.length,
            re = !e.isPreview && J;
          if (!(0, v.getSettingWithCoercion)('hasFilterableProducts', !1, c.isBoolean))
            return s(!1), null;
          const le = Z ? !ne && B.length < $.length : !ne && 0 === B.length,
            ce = (0, o.createElement)(oe, { className: 'wc-block-stock-filter__title' }, e.heading),
            ae = ne ? (0, o.createElement)(k.A, null, ce) : ce;
          return (
            s(!0),
            (0, o.createElement)(
              o.Fragment,
              null,
              !t && e.heading && ae,
              (0, o.createElement)(
                'div',
                {
                  className: r()('wc-block-stock-filter', `style-${e.displayStyle}`, {
                    'is-loading': ne,
                  }),
                },
                'dropdown' === e.displayStyle
                  ? (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(E.A, {
                        key: M,
                        className: r()({ 'single-selection': !Z, 'is-loading': ne }),
                        suggestions: $.filter(e => !B.includes(e.value)).map(e => e.value),
                        disabled: ne,
                        placeholder: (0, a.__)('Select stock status', 'woocommerce'),
                        onChange: e => {
                          !Z && e.length > 1 && (e = e.slice(-1));
                          const t = [
                            (e = e.map(e => {
                              const t = $.find(t => t.value === e);
                              return t ? t.value : e;
                            })),
                            B,
                          ].reduce((e, t) => e.filter(e => !t.includes(e)));
                          if (1 === t.length) return se(t[0]);
                          const s = [B, e].reduce((e, t) => e.filter(e => !t.includes(e)));
                          1 === s.length && se(s[0]);
                        },
                        value: B,
                        displayTransform: e => {
                          const t = $.find(t => t.value === e);
                          return t ? t.textLabel : e;
                        },
                        saveTransform: O,
                        messages: {
                          added: (0, a.__)('Stock filter added.', 'woocommerce'),
                          removed: (0, a.__)('Stock filter removed.', 'woocommerce'),
                          remove: (0, a.__)('Remove stock filter.', 'woocommerce'),
                          __experimentalInvalid: (0, a.__)('Invalid stock filter.', 'woocommerce'),
                        },
                      }),
                      le && (0, o.createElement)(u.A, { icon: d.A, size: 30 }),
                    )
                  : (0, o.createElement)(y.CheckboxList, {
                      className: 'wc-block-stock-filter-list',
                      options: $,
                      checked: B,
                      onChange: se,
                      isLoading: ne,
                      isDisabled: re,
                    }),
              ),
              (0, o.createElement)(
                'div',
                { className: 'wc-block-stock-filter__actions' },
                (B.length > 0 || t) &&
                  !ne &&
                  (0, o.createElement)(_.A, {
                    onClick: () => {
                      K([]), G([]);
                    },
                    screenReaderLabel: (0, a.__)('Reset stock filter', 'woocommerce'),
                  }),
                e.showFilterButton &&
                  (0, o.createElement)(h.A, {
                    className: 'wc-block-stock-filter__button',
                    isLoading: ne,
                    disabled: ne || re,
                    onClick: () => G(B),
                  }),
              ),
            )
          );
        },
        q = e => {
          const t = (0, l.p)(e),
            s =
              ((n = e),
              {
                heading: (0, c.isString)(null == n ? void 0 : n.heading) ? n.heading : '',
                headingLevel:
                  ((0, c.isString)(null == n ? void 0 : n.headingLevel) &&
                    parseInt(n.headingLevel, 10)) ||
                  T.uK.F8.A,
                showFilterButton: 'true' === (null == n ? void 0 : n.showFilterButton),
                showCounts: 'true' === (null == n ? void 0 : n.showCounts),
                isPreview: !1,
                displayStyle:
                  ((0, c.isString)(null == n ? void 0 : n.displayStyle) && n.displayStyle) ||
                  T.uK.Ox.A,
                selectType:
                  ((0, c.isString)(null == n ? void 0 : n.selectType) && n.selectType) || T.uK.dc.A,
              });
          var n;
          return (0, o.createElement)(
            'div',
            {
              className: r()((0, c.isString)(e.className) ? e.className : '', t.className),
              style: t.style,
            },
            (0, o.createElement)(Q, { isEditor: !1, attributes: s }),
          );
        };
    },
    3366: (e, t, s) => {
      'use strict';
      s.d(t, { CH: () => u, Q: () => d, Vf: () => i, nD: () => a, xB: () => c });
      var o = s(3832),
        n = s(5703),
        r = s(3993);
      const l = (0, n.getSettingWithCoercion)('isRenderingPhpTemplate', !1, r.isBoolean),
        c = 'query_type_',
        a = 'filter_';
      function i(e) {
        return window ? (0, o.getQueryArg)(window.location.href, e) : null;
      }
      function u(e) {
        if (l) {
          const t = new URL(e);
          (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
            t.searchParams.delete('paged'),
            t.searchParams.forEach((e, s) => {
              s.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(s);
            }),
            (window.location.href = t.href);
        } else window.history.replaceState({}, '', e);
      }
      const d = e => {
        const t = (0, o.getQueryArgs)(e);
        return (0, o.addQueryArgs)(e, t);
      };
    },
    5400: () => {},
    1626: () => {},
    8335: () => {},
    1504: () => {},
    243: () => {},
    5837: () => {},
  },
]);
