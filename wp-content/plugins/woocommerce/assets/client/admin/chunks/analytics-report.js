'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [8544],
  {
    15152: (e, r, t) => {
      t.d(r, { Z: () => l });
      var s = t(69307),
        n = t(65736),
        o = t(7862),
        a = t.n(o),
        c = t(86020);
      function i({ className: e }) {
        const r = (0, n.__)(
            'There was an error getting your stats. Please try again.',
            'woocommerce',
          ),
          t = (0, n.__)('Reload', 'woocommerce');
        return (0, s.createElement)(c.EmptyContent, {
          className: e,
          title: r,
          actionLabel: t,
          actionCallback: () => {
            window.location.reload();
          },
        });
      }
      i.propTypes = { className: a().string };
      const l = i;
    },
    91200: (e, r, t) => {
      t.r(r), t.d(r, { default: () => y });
      var s = t(69307),
        n = t(94333),
        o = t(9818),
        a = t(7862),
        c = t.n(a),
        i = t(92819),
        l = t(10431),
        p = t(67221),
        u = t(17844),
        m = t(97593),
        h = t(15152),
        g = t(37701);
      const d = ({ params: e, path: r }) => e.report || r.replace(/^\/+/, '');
      class E extends s.Component {
        constructor() {
          super(...arguments), (this.state = { hasError: !1 });
        }
        componentDidCatch(e) {
          this.setState({ hasError: !0 }), console.warn(e);
        }
        render() {
          if (this.state.hasError) return null;
          const { isError: e } = this.props;
          if (e) return (0, s.createElement)(h.Z, null);
          const r = d(this.props),
            t = (0, i.find)((0, g.Z)(), { report: r });
          if (!t) return (0, s.createElement)(m.E, null);
          const n = t.component;
          return (0, s.createElement)(
            u.CurrencyContext.Provider,
            { value: (0, u.getFilteredCurrencyInstance)((0, l.getQuery)()) },
            (0, s.createElement)(n, this.props),
          );
        }
      }
      E.propTypes = { params: c().object.isRequired };
      const y = (0, n.compose)(
        (0, o.withSelect)((e, r) => {
          const t = (0, l.getQuery)(),
            { search: s } = t,
            n = e(p.ITEMS_STORE_NAME);
          if (!s) return {};
          const o = d(r),
            a = (0, l.getSearchWords)(t),
            c = 'categories' === o && 'single_category' === t.filter ? 'products' : o,
            i = (0, p.searchItemsByString)(n, c, a, { per_page: 100 }),
            { isError: u, isRequesting: m, items: h } = i,
            g = Object.keys(h);
          return g.length
            ? { isError: u, isRequesting: m, query: { ...r.query, [c]: g.join(',') } }
            : { isError: u, isRequesting: m };
        }),
      )(E);
    },
  },
]);
