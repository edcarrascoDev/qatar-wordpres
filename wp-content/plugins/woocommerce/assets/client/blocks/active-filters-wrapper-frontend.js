(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3821],
  {
    6179: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n });
      var l = r(1609);
      r(1626);
      const n = ({ children: e }) =>
        (0, l.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e);
    },
    1380: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => c });
      var l = r(7594),
        n = r(7143),
        s = r(6087),
        i = r(1573),
        a = r(7615),
        o = r(3993);
      const c = e => {
        const {
          namespace: t,
          resourceName: r,
          resourceValues: c = [],
          query: u = {},
          shouldSelect: m = !0,
        } = e;
        if (!t || !r)
          throw new Error(
            'The options object must have valid values for the namespace and the resource properties.',
          );
        const d = (0, s.useRef)({ results: [], isLoading: !0 }),
          y = (0, i.c)(u),
          f = (0, i.c)(c),
          p = (0, a.a)(),
          g = (0, n.useSelect)(
            e => {
              if (!m) return null;
              const n = e(l.COLLECTIONS_STORE_KEY),
                s = [t, r, y, f],
                i = n.getCollectionError(...s);
              if (i) {
                if (!(0, o.isError)(i))
                  throw new Error(
                    'TypeError: `error` object is not an instance of Error constructor',
                  );
                p(i);
              }
              return {
                results: n.getCollection(...s),
                isLoading: !n.hasFinishedResolution('getCollection', s),
              };
            },
            [t, r, f, y, m],
          );
        return null !== g && (d.current = g), d.current;
      };
    },
    9098: (e, t, r) => {
      'use strict';
      r.d(t, { dJ: () => a, xd: () => o });
      var l = r(7594),
        n = r(7143),
        s = r(6087),
        i = (r(923), r(6372));
      const a = e => {
          const t = (0, i._)();
          e = e || t;
          const r = (0, n.useSelect)(
              t => t(l.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
              [e],
            ),
            { setValueForQueryContext: a } = (0, n.useDispatch)(l.QUERY_STATE_STORE_KEY);
          return [
            r,
            (0, s.useCallback)(
              t => {
                a(e, t);
              },
              [e, a],
            ),
          ];
        },
        o = (e, t, r) => {
          const a = (0, i._)();
          r = r || a;
          const o = (0, n.useSelect)(n => n(l.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t), [
              r,
              e,
            ]),
            { setQueryValue: c } = (0, n.useDispatch)(l.QUERY_STATE_STORE_KEY);
          return [
            o,
            (0, s.useCallback)(
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
      r.d(t, { _: () => s });
      var l = r(6087);
      const n = (0, l.createContext)('page'),
        s = () => (0, l.useContext)(n);
      n.Provider;
    },
    1573: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => i });
      var l = r(6087),
        n = r(923),
        s = r.n(n);
      function i(e) {
        const t = (0, l.useRef)(e);
        return s()(e, t.current) || (t.current = e), t.current;
      }
    },
    3566: (e, t, r) => {
      'use strict';
      r.d(t, { p: () => o });
      var l = r(9019),
        n = r.n(l),
        s = r(3993),
        i = r(92),
        a = r(6032);
      const o = e => {
        const t = (e => {
            const t = (0, s.isObject)(e) ? e : { style: {} };
            let r = t.style;
            return (
              (0, s.isString)(r) && (r = JSON.parse(r) || {}),
              (0, s.isObject)(r) || (r = {}),
              { ...t, style: r }
            );
          })(e),
          r = (0, a.BK)(t),
          l = (0, a.aR)(t),
          o = (0, a.fo)(t),
          c = (0, i.x)(t);
        return {
          className: n()(c.className, r.className, l.className, o.className),
          style: { ...c.style, ...r.style, ...l.style, ...o.style },
        };
      };
    },
    7615: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => n });
      var l = r(6087);
      const n = () => {
        const [, e] = (0, l.useState)();
        return (0, l.useCallback)(t => {
          e(() => {
            throw t;
          });
        }, []);
      };
    },
    92: (e, t, r) => {
      'use strict';
      r.d(t, { x: () => n });
      var l = r(3993);
      const n = e => {
        const t = (0, l.isObject)(e.style.typography) ? e.style.typography : {},
          r = (0, l.isString)(t.fontFamily) ? t.fontFamily : '';
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
      r.d(t, { BK: () => u, aR: () => m, fo: () => d });
      var l = r(9019),
        n = r.n(l),
        s = r(1194),
        i = r(9786),
        a = r(3993);
      function o(e = {}) {
        const t = {};
        return (
          (0, i.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function c(e, t) {
        return e && t ? `has-${(0, s.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, r, l, s, i, u, m;
        const { backgroundColor: d, textColor: y, gradient: f, style: p } = e,
          g = c('background-color', d),
          b = c('color', y),
          _ = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(f),
          h = _ || (null == p || null === (t = p.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: n()(b, _, {
            [g]: !h && !!g,
            'has-text-color':
              y || (null == p || null === (r = p.color) || void 0 === r ? void 0 : r.text),
            'has-background':
              d ||
              (null == p || null === (l = p.color) || void 0 === l ? void 0 : l.background) ||
              f ||
              (null == p || null === (s = p.color) || void 0 === s ? void 0 : s.gradient),
            'has-link-color': (0, a.isObject)(
              null == p || null === (i = p.elements) || void 0 === i ? void 0 : i.link,
            )
              ? null == p ||
                null === (u = p.elements) ||
                void 0 === u ||
                null === (m = u.link) ||
                void 0 === m
                ? void 0
                : m.color
              : void 0,
          }),
          style: o({ color: (null == p ? void 0 : p.color) || {} }),
        };
      }
      function m(e) {
        var t;
        const r = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: r, style: l } = e,
              s = r ? c('border-color', r) : '';
            return n()({
              'has-border-color':
                !!r || !(null == l || null === (t = l.border) || void 0 === t || !t.color),
              [s]: !!s,
            });
          })(e),
          style: o({ border: r }),
        };
      }
      function d(e) {
        var t;
        return {
          className: void 0,
          style: o({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    3476: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => L });
      var l = r(1609),
        n = r(9019),
        s = r.n(n),
        i = r(3566),
        a = r(3993),
        o = r(7723),
        c = r(9098),
        u = r(5703),
        m = r(6087),
        d = r(4656),
        y = r(3366),
        f = r(6179);
      r(910);
      var p = r(6412),
        g = r(8529),
        b = r(3832),
        _ = r(7104),
        h = r(8098);
      const v = JSON.parse('{"uK":{"O":{"A":"list"},"F":{"A":3}}}'),
        S = (e, t) =>
          Number.isFinite(e) && Number.isFinite(t)
            ? (0, o.sprintf) /* translators: %1$s min price, %2$s max price */(
                /* translators: %1$s min price, %2$s max price */
                (0, o.__)('Between %1$s and %2$s', 'woocommerce'),
                (0, g.formatPrice)(e),
                (0, g.formatPrice)(t),
              )
            : Number.isFinite(e)
            ? (0, o.sprintf) /* translators: %s min price */(
                /* translators: %s min price */
                (0, o.__)('From %s', 'woocommerce'),
                (0, g.formatPrice)(e),
              )
            : (0, o.sprintf) /* translators: %s max price */(
                /* translators: %s max price */
                (0, o.__)('Up to %s', 'woocommerce'),
                (0, g.formatPrice)(t),
              ),
        w = ({
          type: e,
          name: t,
          prefix: r = '',
          removeCallback: n = () => null,
          showLabel: s = !0,
          displayStyle: i,
        }) => {
          const a = r ? (0, l.createElement)(l.Fragment, null, r, ' ', t) : t,
            c = (0,
            o.sprintf) /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */(
              /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
              (0, o.__)('Remove %s filter', 'woocommerce'),
              t,
            );
          return (0, l.createElement)(
            'li',
            { className: 'wc-block-active-filters__list-item', key: e + ':' + t },
            s &&
              (0, l.createElement)(
                'span',
                { className: 'wc-block-active-filters__list-item-type' },
                e + ': ',
              ),
            'chips' === i
              ? (0, l.createElement)(d.RemovableChip, {
                  element: 'span',
                  text: a,
                  onRemove: n,
                  radius: 'large',
                  ariaLabel: c,
                })
              : (0, l.createElement)(
                  'span',
                  { className: 'wc-block-active-filters__list-item-name' },
                  (0, l.createElement)(
                    'button',
                    { className: 'wc-block-active-filters__list-item-remove', onClick: n },
                    (0, l.createElement)(_.A, {
                      className: 'wc-block-components-chip__remove-icon',
                      icon: h.A,
                      size: 16,
                    }),
                    (0, l.createElement)(d.Label, { screenReaderLabel: c }),
                  ),
                  a,
                ),
          );
        },
        E = (...e) => {
          if (!window) return;
          const t = window.location.href,
            r = (0, b.getQueryArgs)(t),
            l = (0, b.removeQueryArgs)(t, ...Object.keys(r));
          e.forEach(e => {
            if ('string' == typeof e) return delete r[e];
            if ('object' == typeof e) {
              const t = Object.keys(e)[0],
                l = r[t].toString().split(',');
              r[t] = l.filter(r => r !== e[t]).join(',');
            }
          });
          const n = Object.fromEntries(Object.entries(r).filter(([, e]) => e)),
            s = (0, b.addQueryArgs)(l, n);
          (0, y.CH)(s);
        },
        k = ['min_price', 'max_price', 'rating_filter', 'filter_', 'query_type_'],
        C = e => {
          let t = !1;
          for (let r = 0; k.length > r; r++) {
            const l = k[r];
            if (l === e.substring(0, l.length)) {
              t = !0;
              break;
            }
          }
          return t;
        };
      var N = r(1380),
        x = r(8537),
        A = r(9325);
      const O = ({
          attributeObject: e,
          slugs: t = [],
          operator: r = 'in',
          displayStyle: n,
          isLoadingCallback: s,
        }) => {
          const { results: i, isLoading: d } = (0, N.G)({
              namespace: '/wc/store/v1',
              resourceName: 'products/attributes/terms',
              resourceValues: [e.id],
            }),
            [y, f] = (0, c.xd)('attributes', []);
          if (
            ((0, m.useEffect)(() => {
              s(d);
            }, [d, s]),
            !Array.isArray(i) ||
              !(0, a.isAttributeTermCollection)(i) ||
              !(0, a.isAttributeQueryCollection)(y))
          )
            return null;
          const p = e.label,
            g = (0, u.getSettingWithCoercion)('isRenderingPhpTemplate', !1, a.isBoolean);
          return (0, l.createElement)(
            'li',
            null,
            (0, l.createElement)(
              'span',
              { className: 'wc-block-active-filters__list-item-type' },
              p,
              ':',
            ),
            (0, l.createElement)(
              'ul',
              null,
              t.map((t, s) => {
                const a = i.find(e => e.slug === t);
                if (!a) return null;
                let c = '';
                return (
                  s > 0 &&
                    'and' === r &&
                    (c = (0, l.createElement)(
                      'span',
                      { className: 'wc-block-active-filters__list-item-operator' },
                      (0, o.__)('All', 'woocommerce'),
                    )),
                  w({
                    type: p,
                    name: (0, x.decodeEntities)(a.name || t),
                    prefix: c,
                    isLoading: d,
                    removeCallback: () => {
                      const r = y.find(({ attribute: t }) => t === `pa_${e.name}`);
                      1 === (null == r ? void 0 : r.slug.length)
                        ? E(`query_type_${e.name}`, `filter_${e.name}`)
                        : E({ [`filter_${e.name}`]: t }),
                        g || (0, A.$)(y, f, e, t);
                    },
                    showLabel: !1,
                    displayStyle: n,
                  })
                );
              }),
            ),
          );
        },
        R = ({ displayStyle: e, isLoading: t }) =>
          t
            ? (0, l.createElement)(
                l.Fragment,
                null,
                [...Array('list' === e ? 2 : 3)].map((t, r) =>
                  (0, l.createElement)(
                    'li',
                    {
                      className:
                        'list' === e ? 'show-loading-state-list' : 'show-loading-state-chips',
                      key: r,
                    },
                    (0, l.createElement)('span', { className: 'show-loading-state__inner' }),
                  ),
                ),
              )
            : null;
      var F = r(4300);
      const Q = ({ attributes: e, isEditor: t = !1 }) => {
          const r = (0, F.$Q)(),
            n = (function() {
              const e = (0, m.useRef)(!1);
              return (
                (0, m.useEffect)(
                  () => (
                    (e.current = !0),
                    () => {
                      e.current = !1;
                    }
                  ),
                  [],
                ),
                (0, m.useCallback)(() => e.current, [])
              );
            })()(),
            i = (0, u.getSettingWithCoercion)('isRenderingPhpTemplate', !1, a.isBoolean),
            [g, _] = (0, m.useState)(!0),
            h =
              (() => {
                if (!window) return !1;
                const e = window.location.href,
                  t = (0, b.getQueryArgs)(e),
                  r = Object.keys(t);
                let l = !1;
                for (let e = 0; r.length > e; e++) {
                  const t = r[e];
                  if (C(t)) {
                    l = !0;
                    break;
                  }
                }
                return l;
              })() &&
              !t &&
              g,
            [v, k] = (0, c.xd)('attributes', []),
            [N, x] = (0, c.xd)('stock_status', []),
            [A, Q] = (0, c.xd)('min_price'),
            [L, T] = (0, c.xd)('max_price'),
            [j, $] = (0, c.xd)('rating'),
            P = (0, u.getSetting)('stockStatusOptions', []),
            K = (0, u.getSetting)('attributes', []),
            B = (0, m.useMemo)(() => {
              if (
                h ||
                0 === N.length ||
                !(0, a.isStockStatusQueryCollection)(N) ||
                !(0, a.isStockStatusOptions)(P)
              )
                return null;
              const t = (0, o.__)('Stock Status', 'woocommerce');
              return (0, l.createElement)(
                'li',
                null,
                (0, l.createElement)(
                  'span',
                  { className: 'wc-block-active-filters__list-item-type' },
                  t,
                  ':',
                ),
                (0, l.createElement)(
                  'ul',
                  null,
                  N.map(r =>
                    w({
                      type: t,
                      name: P[r],
                      removeCallback: () => {
                        if ((E({ filter_stock_status: r }), !i)) {
                          const e = N.filter(e => e !== r);
                          x(e);
                        }
                      },
                      showLabel: !1,
                      displayStyle: e.displayStyle,
                    }),
                  ),
                ),
              );
            }, [h, P, N, x, e.displayStyle, i]),
            W = (0, m.useMemo)(
              () =>
                h || (!Number.isFinite(A) && !Number.isFinite(L))
                  ? null
                  : w({
                      type: (0, o.__)('Price', 'woocommerce'),
                      name: S(A, L),
                      removeCallback: () => {
                        E('max_price', 'min_price'), i || (Q(void 0), T(void 0));
                      },
                      displayStyle: e.displayStyle,
                    }),
              [h, A, L, e.displayStyle, Q, T, i],
            ),
            Y = (0, m.useMemo)(
              () =>
                (!(0, a.isAttributeQueryCollection)(v) && n) ||
                (!v.length &&
                  !(e => {
                    if (!window) return !1;
                    const t = e.map(e => `filter_${e.attribute_name}`),
                      r = window.location.href,
                      l = (0, b.getQueryArgs)(r),
                      n = Object.keys(l);
                    let s = !1;
                    for (let e = 0; n.length > e; e++) {
                      const r = n[e];
                      if (t.includes(r)) {
                        s = !0;
                        break;
                      }
                    }
                    return s;
                  })(K))
                  ? (g && _(!1), null)
                  : v.map(t => {
                      const r = (0, p.OJ)(t.attribute);
                      return r
                        ? (0, l.createElement)(O, {
                            attributeObject: r,
                            displayStyle: e.displayStyle,
                            slugs: t.slug,
                            key: t.attribute,
                            operator: t.operator,
                            isLoadingCallback: _,
                          })
                        : (g && _(!1), null);
                    }),
              [v, n, K, g, e.displayStyle],
            );
          (0, m.useEffect)(() => {
            var e;
            if (!i) return;
            if (j.length && j.length > 0) return;
            const t =
              null === (e = (0, y.Vf)('rating_filter')) || void 0 === e ? void 0 : e.toString();
            t && $(t.split(','));
          }, [i, j, $]);
          const V = (0, m.useMemo)(() => {
            if (h || 0 === j.length || !(0, a.isRatingQueryCollection)(j)) return null;
            const t = (0, o.__)('Rating', 'woocommerce');
            return (0, l.createElement)(
              'li',
              null,
              (0, l.createElement)(
                'span',
                { className: 'wc-block-active-filters__list-item-type' },
                t,
                ':',
              ),
              (0, l.createElement)(
                'ul',
                null,
                j.map(r =>
                  w({
                    type: t,
                    name: (0,
                    o.sprintf) /* translators: %s is referring to the average rating value */(
                      /* translators: %s is referring to the average rating value */
                      (0, o.__)('Rated %s out of 5', 'woocommerce'),
                      r,
                    ),
                    removeCallback: () => {
                      if ((E({ rating_filter: r }), !i)) {
                        const e = j.filter(e => e !== r);
                        $(e);
                      }
                    },
                    showLabel: !1,
                    displayStyle: e.displayStyle,
                  }),
                ),
              ),
            );
          }, [h, j, $, e.displayStyle, i]);
          if (
            !h &&
            !(
              v.length > 0 ||
              N.length > 0 ||
              j.length > 0 ||
              Number.isFinite(A) ||
              Number.isFinite(L)
            ) &&
            !t
          )
            return r(!1), null;
          const z = `h${e.headingLevel}`,
            J = (0, l.createElement)(z, { className: 'wc-block-active-filters__title' }, e.heading),
            U = h ? (0, l.createElement)(f.A, null, J) : J;
          if (!(0, u.getSettingWithCoercion)('hasFilterableProducts', !1, a.isBoolean))
            return r(!1), null;
          r(!0);
          const q = s()('wc-block-active-filters__list', {
            'wc-block-active-filters__list--chips': 'chips' === e.displayStyle,
            'wc-block-active-filters--loading': h,
          });
          return (0, l.createElement)(
            l.Fragment,
            null,
            !t && e.heading && U,
            (0, l.createElement)(
              'div',
              { className: 'wc-block-active-filters' },
              (0, l.createElement)(
                'ul',
                { className: q },
                t
                  ? (0, l.createElement)(
                      l.Fragment,
                      null,
                      w({
                        type: (0, o.__)('Size', 'woocommerce'),
                        name: (0, o.__)('Small', 'woocommerce'),
                        displayStyle: e.displayStyle,
                      }),
                      w({
                        type: (0, o.__)('Color', 'woocommerce'),
                        name: (0, o.__)('Blue', 'woocommerce'),
                        displayStyle: e.displayStyle,
                      }),
                    )
                  : (0, l.createElement)(
                      l.Fragment,
                      null,
                      (0, l.createElement)(R, { isLoading: h, displayStyle: e.displayStyle }),
                      W,
                      B,
                      Y,
                      V,
                    ),
              ),
              h
                ? (0, l.createElement)('span', {
                    className: 'wc-block-active-filters__clear-all-placeholder',
                  })
                : (0, l.createElement)(
                    'button',
                    {
                      className: 'wc-block-active-filters__clear-all',
                      onClick: () => {
                        (() => {
                          if (!window) return;
                          const e = window.location.href,
                            t = (0, b.getQueryArgs)(e),
                            r = (0, b.removeQueryArgs)(e, ...Object.keys(t)),
                            l = Object.fromEntries(
                              Object.keys(t)
                                .filter(e => !C(e))
                                .map(e => [e, t[e]]),
                            ),
                            n = (0, b.addQueryArgs)(r, l);
                          (0, y.CH)(n);
                        })(),
                          i || (Q(void 0), T(void 0), k([]), x([]), $([]));
                      },
                    },
                    (0, l.createElement)(d.Label, {
                      label: (0, o.__)('Clear All', 'woocommerce'),
                      screenReaderLabel: (0, o.__)('Clear All Filters', 'woocommerce'),
                    }),
                  ),
            ),
          );
        },
        L = e => {
          const t = (0, i.p)(e),
            r =
              ((n = e),
              {
                heading: (0, a.isString)(null == n ? void 0 : n.heading) ? n.heading : '',
                headingLevel:
                  ((0, a.isString)(null == n ? void 0 : n.headingLevel) &&
                    parseInt(n.headingLevel, 10)) ||
                  v.uK.F.A,
                displayStyle:
                  ((0, a.isString)(null == n ? void 0 : n.displayStyle) && n.displayStyle) ||
                  v.uK.O.A,
              });
          var n;
          return (0, l.createElement)(
            'div',
            {
              className: s()((0, a.isString)(e.className) ? e.className : '', t.className),
              style: t.style,
            },
            (0, l.createElement)(Q, { isEditor: !1, attributes: r }),
          );
        };
    },
    9325: (e, t, r) => {
      'use strict';
      r.d(t, { $: () => n, u: () => s });
      var l = r(5574);
      const n = (e = [], t, r, n = '') => {
          const s = e.filter(e => e.attribute === r.taxonomy),
            i = s.length ? s[0] : null;
          if (!(i && i.slug && Array.isArray(i.slug) && i.slug.includes(n))) return;
          const a = i.slug.filter(e => e !== n),
            o = e.filter(e => e.attribute !== r.taxonomy);
          a.length > 0 && ((i.slug = a.sort()), o.push(i)), t((0, l.di)(o).asc('attribute'));
        },
        s = (e = [], t, r, n = [], s = 'in') => {
          if (!r || !r.taxonomy) return [];
          const i = e.filter(e => e.attribute !== r.taxonomy);
          return (
            0 === n.length
              ? t(i)
              : (i.push({
                  attribute: r.taxonomy,
                  operator: s,
                  slug: n.map(({ slug: e }) => e).sort(),
                }),
                t((0, l.di)(i).asc('attribute'))),
            i
          );
        };
    },
    6412: (e, t, r) => {
      'use strict';
      r.d(t, { OJ: () => i, WK: () => s });
      var l = r(5703);
      r(3993), r(7143);
      const n = (0, l.getSetting)('attributes', []).reduce((e, t) => {
          const r =
            (l = t) && l.attribute_name
              ? {
                  id: parseInt(l.attribute_id, 10),
                  name: l.attribute_name,
                  taxonomy: 'pa_' + l.attribute_name,
                  label: l.attribute_label,
                  orderby: l.attribute_orderby,
                }
              : null;
          var l;
          return r && r.id && e.push(r), e;
        }, []),
        s = e => {
          if (e) return n.find(t => t.id === e);
        },
        i = e => {
          if (e) return n.find(t => t.taxonomy === e);
        };
    },
    3366: (e, t, r) => {
      'use strict';
      r.d(t, { CH: () => u, Q: () => m, Vf: () => c, nD: () => o, xB: () => a });
      var l = r(3832),
        n = r(5703),
        s = r(3993);
      const i = (0, n.getSettingWithCoercion)('isRenderingPhpTemplate', !1, s.isBoolean),
        a = 'query_type_',
        o = 'filter_';
      function c(e) {
        return window ? (0, l.getQueryArg)(window.location.href, e) : null;
      }
      function u(e) {
        if (i) {
          const t = new URL(e);
          (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
            t.searchParams.delete('paged'),
            t.searchParams.forEach((e, r) => {
              r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
            }),
            (window.location.href = t.href);
        } else window.history.replaceState({}, '', e);
      }
      const m = e => {
        const t = (0, l.getQueryArgs)(e);
        return (0, l.addQueryArgs)(e, t);
      };
    },
    1626: () => {},
    910: () => {},
  },
]);
