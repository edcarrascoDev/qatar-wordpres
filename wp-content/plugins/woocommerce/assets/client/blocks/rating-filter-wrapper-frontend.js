(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [8021],
  {
    4054: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => c });
      var n = r(1609),
        o = r(7723),
        l = r(9019),
        s = r.n(l),
        a = r(4656);
      r(8335);
      const c = ({
        className: e,
        /* translators: Reset button text for filters. */
        label: t = (0, o.__)('Reset', 'woocommerce'),
        onClick: r,
        screenReaderLabel: l = (0, o.__)('Reset filter', 'woocommerce'),
      }) =>
        (0, n.createElement)(
          'button',
          { className: s()('wc-block-components-filter-reset-button', e), onClick: r },
          (0, n.createElement)(a.Label, { label: t, screenReaderLabel: l }),
        );
    },
    1745: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => c });
      var n = r(1609),
        o = r(7723),
        l = r(9019),
        s = r.n(l),
        a = r(4656);
      r(1504);
      const c = ({
        className: e,
        isLoading: t,
        disabled: r,
        /* translators: Submit button text for filters. */
        label: l = (0, o.__)('Apply', 'woocommerce'),
        onClick: c,
        screenReaderLabel: i = (0, o.__)('Apply filter', 'woocommerce'),
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
            onClick: c,
          },
          (0, n.createElement)(a.Label, { label: l, screenReaderLabel: i }),
        );
    },
    80: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => a });
      var n = r(1609),
        o = r(1331),
        l = r(9019),
        s = r.n(l);
      r(243);
      const a = ({
        className: e,
        style: t,
        suggestions: r,
        multiple: l = !0,
        saveTransform: a = e => e.trim().replace(/\s/g, '-'),
        messages: c = {},
        validateInput: i = e => r.includes(e),
        label: u = '',
        ...d
      }) =>
        (0, n.createElement)(
          'div',
          {
            className: s()('wc-blocks-components-form-token-field-wrapper', e, {
              'single-selection': !l,
            }),
            style: t,
          },
          (0, n.createElement)(o.A, {
            label: u,
            __experimentalExpandOnFocus: !0,
            __experimentalShowHowTo: !1,
            __experimentalValidateInput: i,
            saveTransform: a,
            maxLength: l ? void 0 : 1,
            suggestions: r,
            messages: c,
            ...d,
          }),
        );
    },
    1561: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => d });
      var n = r(6087),
        o = r(4717),
        l = r(3993),
        s = r(5574),
        a = r(1573),
        c = r(9098),
        i = r(1380),
        u = r(6372);
      const d = ({
        queryAttribute: e,
        queryPrices: t,
        queryStock: r,
        queryRating: d,
        queryState: m,
        isEditor: g = !1,
      }) => {
        let f = (0, u._)();
        f = `${f}-collection-data`;
        const [p] = (0, c.dJ)(f),
          [v, y] = (0, c.xd)('calculate_attribute_counts', [], f),
          [b, _] = (0, c.xd)('calculate_price_range', null, f),
          [h, w] = (0, c.xd)('calculate_stock_status_counts', null, f),
          [E, k] = (0, c.xd)('calculate_rating_counts', null, f),
          S = (0, a.c)(e || {}),
          C = (0, a.c)(t),
          N = (0, a.c)(r),
          R = (0, a.c)(d);
        (0, n.useEffect)(() => {
          'object' == typeof S &&
            Object.keys(S).length &&
            (v.find(e => (0, l.objectHasProp)(S, 'taxonomy') && e.taxonomy === S.taxonomy) ||
              y([...v, S]));
        }, [S, v, y]),
          (0, n.useEffect)(() => {
            b !== C && void 0 !== C && _(C);
          }, [C, _, b]),
          (0, n.useEffect)(() => {
            h !== N && void 0 !== N && w(N);
          }, [N, w, h]),
          (0, n.useEffect)(() => {
            E !== R && void 0 !== R && k(R);
          }, [R, k, E]);
        const [x, A] = (0, n.useState)(g),
          [T] = (0, o.d7)(x, 200);
        x || A(!0);
        const P = (0, n.useMemo)(
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
            })(p),
          [p],
        );
        return (0, i.G)({
          namespace: '/wc/store/v1',
          resourceName: 'products/collection-data',
          query: { ...m, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...P },
          shouldSelect: T,
        });
      };
    },
    1380: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => i });
      var n = r(7594),
        o = r(7143),
        l = r(6087),
        s = r(1573),
        a = r(7615),
        c = r(3993);
      const i = e => {
        const {
          namespace: t,
          resourceName: r,
          resourceValues: i = [],
          query: u = {},
          shouldSelect: d = !0,
        } = e;
        if (!t || !r)
          throw new Error(
            'The options object must have valid values for the namespace and the resource properties.',
          );
        const m = (0, l.useRef)({ results: [], isLoading: !0 }),
          g = (0, s.c)(u),
          f = (0, s.c)(i),
          p = (0, a.a)(),
          v = (0, o.useSelect)(
            e => {
              if (!d) return null;
              const o = e(n.COLLECTIONS_STORE_KEY),
                l = [t, r, g, f],
                s = o.getCollectionError(...l);
              if (s) {
                if (!(0, c.isError)(s))
                  throw new Error(
                    'TypeError: `error` object is not an instance of Error constructor',
                  );
                p(s);
              }
              return {
                results: o.getCollection(...l),
                isLoading: !o.hasFinishedResolution('getCollection', l),
              };
            },
            [t, r, f, g, d],
          );
        return null !== v && (m.current = v), m.current;
      };
    },
    9098: (e, t, r) => {
      'use strict';
      r.d(t, { dJ: () => a, xd: () => c });
      var n = r(7594),
        o = r(7143),
        l = r(6087),
        s = (r(923), r(6372));
      const a = e => {
          const t = (0, s._)();
          e = e || t;
          const r = (0, o.useSelect)(
              t => t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
              [e],
            ),
            { setValueForQueryContext: a } = (0, o.useDispatch)(n.QUERY_STATE_STORE_KEY);
          return [
            r,
            (0, l.useCallback)(
              t => {
                a(e, t);
              },
              [e, a],
            ),
          ];
        },
        c = (e, t, r) => {
          const a = (0, s._)();
          r = r || a;
          const c = (0, o.useSelect)(o => o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t), [
              r,
              e,
            ]),
            { setQueryValue: i } = (0, o.useDispatch)(n.QUERY_STATE_STORE_KEY);
          return [
            c,
            (0, l.useCallback)(
              t => {
                i(r, e, t);
              },
              [r, e, i],
            ),
          ];
        };
    },
    6372: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => l });
      var n = r(6087);
      const o = (0, n.createContext)('page'),
        l = () => (0, n.useContext)(o);
      o.Provider;
    },
    9095: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => o });
      var n = r(6087);
      function o(e, t) {
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
        o = r(923),
        l = r.n(o);
      function s(e) {
        const t = (0, n.useRef)(e);
        return l()(e, t.current) || (t.current = e), t.current;
      }
    },
    3566: (e, t, r) => {
      'use strict';
      r.d(t, { p: () => c });
      var n = r(9019),
        o = r.n(n),
        l = r(3993),
        s = r(92),
        a = r(6032);
      const c = e => {
        const t = (e => {
            const t = (0, l.isObject)(e) ? e : { style: {} };
            let r = t.style;
            return (
              (0, l.isString)(r) && (r = JSON.parse(r) || {}),
              (0, l.isObject)(r) || (r = {}),
              { ...t, style: r }
            );
          })(e),
          r = (0, a.BK)(t),
          n = (0, a.aR)(t),
          c = (0, a.fo)(t),
          i = (0, s.x)(t);
        return {
          className: o()(i.className, r.className, n.className, c.className),
          style: { ...i.style, ...r.style, ...n.style, ...c.style },
        };
      };
    },
    7615: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => o });
      var n = r(6087);
      const o = () => {
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
      r.d(t, { x: () => o });
      var n = r(3993);
      const o = e => {
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
        o = r.n(n),
        l = r(1194),
        s = r(9786),
        a = r(3993);
      function c(e = {}) {
        const t = {};
        return (
          (0, s.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, l.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, r, n, l, s, u, d;
        const { backgroundColor: m, textColor: g, gradient: f, style: p } = e,
          v = i('background-color', m),
          y = i('color', g),
          b = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(f),
          _ = b || (null == p || null === (t = p.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: o()(y, b, {
            [v]: !_ && !!v,
            'has-text-color':
              g || (null == p || null === (r = p.color) || void 0 === r ? void 0 : r.text),
            'has-background':
              m ||
              (null == p || null === (n = p.color) || void 0 === n ? void 0 : n.background) ||
              f ||
              (null == p || null === (l = p.color) || void 0 === l ? void 0 : l.gradient),
            'has-link-color': (0, a.isObject)(
              null == p || null === (s = p.elements) || void 0 === s ? void 0 : s.link,
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
          style: c({ color: (null == p ? void 0 : p.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const r = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: r, style: n } = e,
              l = r ? i('border-color', r) : '';
            return o()({
              'has-border-color':
                !!r || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
              [l]: !!l,
            });
          })(e),
          style: c({ border: r }),
        };
      }
      function m(e) {
        var t;
        return {
          className: void 0,
          style: c({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    9747: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => j });
      var n = r(1609),
        o = r(9019),
        l = r.n(o),
        s = r(3566),
        a = r(3993),
        c = r(7723),
        i = r(195),
        u = r(7104),
        d = r(224);
      r(8887);
      const m = ({ className: e, rating: t, ratedProductsCount: r }) => {
        const o = l()('wc-block-components-product-rating', e),
          s = { width: (t / 5) * 100 + '%' },
          a = (0, c.sprintf) /* translators: %f is referring to the average rating value */(
            /* translators: %f is referring to the average rating value */
            (0, c.__)('Rated %f out of 5', 'woocommerce'),
            t,
          ),
          i = {
            __html: (0,
            c.sprintf) /* translators: %s is the rating value wrapped in HTML strong tags. */(
              /* translators: %s is the rating value wrapped in HTML strong tags. */
              (0, c.__)('Rated %s out of 5', 'woocommerce'),
              (0, c.sprintf)('<strong class="rating">%f</strong>', t),
            ),
          };
        return (0, n.createElement)(
          'div',
          { className: o },
          (0, n.createElement)(
            'div',
            {
              className: 'wc-block-components-product-rating__stars',
              role: 'img',
              'aria-label': a,
            },
            (0, n.createElement)('span', { style: s, dangerouslySetInnerHTML: i }),
          ),
          null !== r
            ? (0, n.createElement)(
                'span',
                { className: 'wc-block-components-product-rating-count' },
                '(',
                r,
                ')',
              )
            : null,
        );
      };
      var g = r(1573),
        f = r(9095),
        p = r(9098),
        v = r(1561),
        y = r(5703),
        b = r(923),
        _ = r.n(b),
        h = r(6087),
        w = r(4656),
        E = r(1745),
        k = r(4054),
        S = r(80),
        C = r(3832),
        N = r(3366);
      const R = [
        {
          label: (0, n.createElement)(m, { key: 5, rating: 5, ratedProductsCount: null }),
          value: '5',
        },
        {
          label: (0, n.createElement)(m, { key: 4, rating: 4, ratedProductsCount: null }),
          value: '4',
        },
        {
          label: (0, n.createElement)(m, { key: 3, rating: 3, ratedProductsCount: null }),
          value: '3',
        },
        {
          label: (0, n.createElement)(m, { key: 2, rating: 2, ratedProductsCount: null }),
          value: '2',
        },
        {
          label: (0, n.createElement)(m, { key: 1, rating: 1, ratedProductsCount: null }),
          value: '1',
        },
      ];
      r(8692);
      const x = JSON.parse('{"uK":{"Ox":{"A":"list"},"dc":{"A":"multiple"}}}');
      function A() {
        return Math.floor(Math.random() * Date.now());
      }
      const T = e =>
        e
          .trim()
          .replace(/\s/g, '-')
          .replace(/_/g, '-')
          .replace(/-+/g, '-')
          .replace(/[^a-zA-Z0-9-]/g, '');
      var P = r(4300);
      const L = 'rating_filter',
        O = e =>
          (0, c.sprintf) /* translators: %s is referring to the average rating value */(
            /* translators: %s is referring to the average rating value */
            (0, c.__)('Rated %s out of 5 filter added.', 'woocommerce'),
            e,
          ),
        F = e =>
          (0, c.sprintf) /* translators: %s is referring to the average rating value */(
            /* translators: %s is referring to the average rating value */
            (0, c.__)('Rated %s out of 5 filter added.', 'woocommerce'),
            e,
          ),
        Q = ({ attributes: e, isEditor: t, noRatingsNotice: r = null }) => {
          const o = (0, P.$Q)(),
            s = (0, y.getSettingWithCoercion)('isRenderingPhpTemplate', !1, a.isBoolean),
            [b, x] = (0, h.useState)(!1),
            [Q] = (0, p.dJ)(),
            { results: j, isLoading: q } = (0, v.A)({
              queryRating: !0,
              queryState: Q,
              isEditor: t,
            }),
            [B, K] = (0, h.useState)(e.isPreview ? R : []),
            H = !e.isPreview && q && 0 === B.length,
            Y = !e.isPreview && q,
            $ = (0, h.useMemo)(
              () =>
                ((e = 'filter_rating') => {
                  const t = (0, N.Vf)(e);
                  return t ? ((0, a.isString)(t) ? t.split(',') : t) : [];
                })('rating_filter'),
              [],
            ),
            [V, z] = (0, h.useState)($),
            [D, J] = (0, p.xd)('rating', $),
            [W, I] = (0, h.useState)(A()),
            [M, U] = (0, h.useState)(!1),
            Z = 'single' !== e.selectType,
            G = Z ? !H && V.length < B.length : !H && 0 === V.length,
            X = (0, h.useCallback)(
              e => {
                t ||
                  (e && !s && J(e),
                  (e => {
                    if (!window) return;
                    if (0 === e.length) {
                      const e = (0, C.removeQueryArgs)(window.location.href, L);
                      return void (e !== (0, N.Q)(window.location.href) && (0, N.CH)(e));
                    }
                    const t = (0, C.addQueryArgs)(window.location.href, { [L]: e.join(',') });
                    t !== (0, N.Q)(window.location.href) && (0, N.CH)(t);
                  })(e));
              },
              [t, J, s],
            );
          (0, h.useEffect)(() => {
            e.showFilterButton || X(V);
          }, [e.showFilterButton, V, X]);
          const ee = (0, h.useMemo)(() => D, [D]),
            te = (0, g.c)(ee),
            re = (0, f.Z)(te);
          (0, h.useEffect)(() => {
            _()(re, te) || _()(V, te) || z(te);
          }, [V, te, re]),
            (0, h.useEffect)(() => {
              b || (J($), x(!0));
            }, [J, b, x, $]),
            (0, h.useEffect)(() => {
              if (q || e.isPreview) return;
              const r =
                !q && (0, a.objectHasProp)(j, 'rating_counts') && Array.isArray(j.rating_counts)
                  ? [...j.rating_counts].reverse()
                  : [];
              if (t && 0 === r.length) return K(R), void U(!0);
              const o = r
                .filter(e => (0, a.isObject)(e) && Object.keys(e).length > 0)
                .map(t => {
                  var r;
                  return {
                    label: (0, n.createElement)(m, {
                      key: null == t ? void 0 : t.rating,
                      rating: null == t ? void 0 : t.rating,
                      ratedProductsCount: e.showCounts ? (null == t ? void 0 : t.count) : null,
                    }),
                    value:
                      null == t || null === (r = t.rating) || void 0 === r ? void 0 : r.toString(),
                  };
                });
              K(o), I(A());
            }, [e.showCounts, e.isPreview, j, q, D, t]);
          const ne = (0, h.useCallback)(
            e => {
              const t = V.includes(e);
              if (!Z) {
                const r = t ? [] : [e];
                return (0, i.speak)(t ? F(e) : O(e)), void z(r);
              }
              if (t) {
                const t = V.filter(t => t !== e);
                return (0, i.speak)(F(e)), void z(t);
              }
              const r = [...V, e].sort((e, t) => Number(t) - Number(e));
              (0, i.speak)(O(e)), z(r);
            },
            [V, Z],
          );
          return (q || 0 !== B.length) &&
            (0, y.getSettingWithCoercion)('hasFilterableProducts', !1, a.isBoolean)
            ? (o(!0),
              (0, n.createElement)(
                n.Fragment,
                null,
                M && r,
                (0, n.createElement)(
                  'div',
                  {
                    className: l()('wc-block-rating-filter', `style-${e.displayStyle}`, {
                      'is-loading': H,
                    }),
                  },
                  'dropdown' === e.displayStyle
                    ? (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)(S.A, {
                          key: W,
                          className: l()({ 'single-selection': !Z, 'is-loading': H }),
                          style: { borderStyle: 'none' },
                          suggestions: B.filter(e => !V.includes(e.value)).map(e => e.value),
                          disabled: H,
                          placeholder: (0, c.__)('Select Rating', 'woocommerce'),
                          onChange: e => {
                            !Z && e.length > 1 && (e = [e[e.length - 1]]);
                            const t = [
                              (e = e.map(e => {
                                const t = B.find(t => t.value === e);
                                return t ? t.value : e;
                              })),
                              V,
                            ].reduce((e, t) => e.filter(e => !t.includes(e)));
                            if (1 === t.length) return ne(t[0]);
                            const r = [V, e].reduce((e, t) => e.filter(e => !t.includes(e)));
                            1 === r.length && ne(r[0]);
                          },
                          value: V,
                          displayTransform: e => {
                            const t = {
                                value: e,
                                label: (0, n.createElement)(m, {
                                  key: Number(e),
                                  rating: Number(e),
                                  ratedProductsCount: 0,
                                }),
                              },
                              r = B.find(t => t.value === e) || t,
                              { label: o, value: l } = r;
                            return Object.assign({}, o, {
                              toLocaleLowerCase: () => l,
                              substring: (e, t) => (0 === e && 1 === t ? o : ''),
                            });
                          },
                          saveTransform: T,
                          messages: {
                            added: (0, c.__)('Rating filter added.', 'woocommerce'),
                            removed: (0, c.__)('Rating filter removed.', 'woocommerce'),
                            remove: (0, c.__)('Remove rating filter.', 'woocommerce'),
                            __experimentalInvalid: (0, c.__)(
                              'Invalid rating filter.',
                              'woocommerce',
                            ),
                          },
                        }),
                        G && (0, n.createElement)(u.A, { icon: d.A, size: 30 }),
                      )
                    : (0, n.createElement)(w.CheckboxList, {
                        className: 'wc-block-rating-filter-list',
                        options: B,
                        checked: V,
                        onChange: e => {
                          ne(e.toString());
                        },
                        isLoading: H,
                        isDisabled: Y,
                      }),
                ),
                (0, n.createElement)(
                  'div',
                  { className: 'wc-block-rating-filter__actions' },
                  (V.length > 0 || t) &&
                    !H &&
                    (0, n.createElement)(k.A, {
                      onClick: () => {
                        z([]), J([]), X([]);
                      },
                      screenReaderLabel: (0, c.__)('Reset rating filter', 'woocommerce'),
                    }),
                  e.showFilterButton &&
                    (0, n.createElement)(E.A, {
                      className: 'wc-block-rating-filter__button',
                      isLoading: H,
                      disabled: H || Y,
                      onClick: () => X(V),
                    }),
                ),
              ))
            : (o(!1), null);
        },
        j = e => {
          const t = (0, s.p)(e),
            r = {
              showFilterButton: 'true' === (null == (o = e) ? void 0 : o.showFilterButton),
              showCounts: 'true' === (null == o ? void 0 : o.showCounts),
              isPreview: !1,
              displayStyle:
                ((0, a.isString)(null == o ? void 0 : o.displayStyle) && o.displayStyle) ||
                x.uK.Ox.A,
              selectType:
                ((0, a.isString)(null == o ? void 0 : o.selectType) && o.selectType) || x.uK.dc.A,
            };
          var o;
          return (0, n.createElement)(
            'div',
            {
              className: l()((0, a.isString)(e.className) ? e.className : '', t.className),
              style: t.style,
            },
            (0, n.createElement)(Q, { isEditor: !1, attributes: r }),
          );
        };
    },
    3366: (e, t, r) => {
      'use strict';
      r.d(t, { CH: () => u, Q: () => d, Vf: () => i, nD: () => c, xB: () => a });
      var n = r(3832),
        o = r(5703),
        l = r(3993);
      const s = (0, o.getSettingWithCoercion)('isRenderingPhpTemplate', !1, l.isBoolean),
        a = 'query_type_',
        c = 'filter_';
      function i(e) {
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
    8335: () => {},
    1504: () => {},
    243: () => {},
    8887: () => {},
    8692: () => {},
  },
]);
