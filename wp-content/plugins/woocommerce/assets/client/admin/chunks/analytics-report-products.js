'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [6824],
  {
    5029: (e, t, o) => {
      o.d(t, { Z: () => l });
      var r = o(69307),
        s = o(92819),
        a = o(55609),
        c = o(22629),
        i = o(86020),
        n = o(10431);
      class l extends r.Component {
        getCategoryAncestorIds(e, t) {
          const o = [];
          let r = e.parent;
          for (; r; ) o.unshift(r), (r = t.get(r).parent);
          return o;
        }
        getCategoryAncestors(e, t) {
          const o = this.getCategoryAncestorIds(e, t);
          if (o.length)
            return 1 === o.length
              ? t.get((0, s.first)(o)).name + ' › '
              : 2 === o.length
              ? t.get((0, s.first)(o)).name + ' › ' + t.get((0, s.last)(o)).name + ' › '
              : t.get((0, s.first)(o)).name + ' … ' + t.get((0, s.last)(o)).name + ' › ';
        }
        render() {
          const { categories: e, category: t, query: o } = this.props,
            s = (0, n.getPersistedQuery)(o);
          return t
            ? (0, r.createElement)(
                'div',
                { className: 'woocommerce-table__breadcrumbs' },
                (0, c.decodeEntities)(this.getCategoryAncestors(t, e)),
                (0, r.createElement)(
                  i.Link,
                  {
                    href: (0, n.getNewPath)(s, '/analytics/categories', {
                      filter: 'single_category',
                      categories: t.id,
                    }),
                    type: 'wc-admin',
                  },
                  (0, c.decodeEntities)(t.name),
                ),
              )
            : (0, r.createElement)(a.Spinner, null);
        }
      }
    },
    25297: (e, t, o) => {
      o.d(t, { O3: () => l, be: () => d, u8: () => p });
      var r = o(65736),
        s = o(92694),
        a = o(9818),
        c = o(75606),
        i = o(20513);
      const { addCesSurveyForAnalytics: n } = (0, a.dispatch)(c.STORE_KEY),
        l = (0, s.applyFilters)('woocommerce_admin_products_report_charts', [
          {
            key: 'items_sold',
            label: (0, r.__)('Items sold', 'woocommerce'),
            order: 'desc',
            orderby: 'items_sold',
            type: 'number',
          },
          {
            key: 'net_revenue',
            label: (0, r.__)('Net sales', 'woocommerce'),
            order: 'desc',
            orderby: 'net_revenue',
            type: 'currency',
          },
          {
            key: 'orders_count',
            label: (0, r.__)('Orders', 'woocommerce'),
            order: 'desc',
            orderby: 'orders_count',
            type: 'number',
          },
        ]),
        m = {
          label: (0, r.__)('Show', 'woocommerce'),
          staticParams: ['chartType', 'paged', 'per_page'],
          param: 'filter',
          showFilters: () => !0,
          filters: [
            { label: (0, r.__)('All products', 'woocommerce'), value: 'all' },
            {
              label: (0, r.__)('Single product', 'woocommerce'),
              value: 'select_product',
              chartMode: 'item-comparison',
              subFilters: [
                {
                  component: 'Search',
                  value: 'single_product',
                  chartMode: 'item-comparison',
                  path: ['select_product'],
                  settings: {
                    type: 'products',
                    param: 'products',
                    getLabels: i.oC,
                    labels: {
                      placeholder: (0, r.__)('Type to search for a product', 'woocommerce'),
                      button: (0, r.__)('Single product', 'woocommerce'),
                    },
                  },
                },
              ],
            },
            {
              label: (0, r.__)('Comparison', 'woocommerce'),
              value: 'compare-products',
              chartMode: 'item-comparison',
              settings: {
                type: 'products',
                param: 'products',
                getLabels: i.oC,
                labels: {
                  helpText: (0, r.__)(
                    'Check at least two products below to compare',
                    'woocommerce',
                  ),
                  placeholder: (0, r.__)('Search for products to compare', 'woocommerce'),
                  title: (0, r.__)('Compare Products', 'woocommerce'),
                  update: (0, r.__)('Compare', 'woocommerce'),
                },
                onClick: n,
              },
            },
          ],
        },
        u = {
          showFilters: e => 'single_product' === e.filter && !!e.products && e['is-variable'],
          staticParams: ['filter', 'products', 'chartType', 'paged', 'per_page'],
          param: 'filter-variations',
          filters: [
            {
              label: (0, r.__)('All variations', 'woocommerce'),
              chartMode: 'item-comparison',
              value: 'all',
            },
            {
              label: (0, r.__)('Single variation', 'woocommerce'),
              value: 'select_variation',
              subFilters: [
                {
                  component: 'Search',
                  value: 'single_variation',
                  path: ['select_variation'],
                  settings: {
                    type: 'variations',
                    param: 'variations',
                    getLabels: i.uC,
                    labels: {
                      placeholder: (0, r.__)('Type to search for a variation', 'woocommerce'),
                      button: (0, r.__)('Single variation', 'woocommerce'),
                    },
                  },
                },
              ],
            },
            {
              label: (0, r.__)('Comparison', 'woocommerce'),
              chartMode: 'item-comparison',
              value: 'compare-variations',
              settings: {
                type: 'variations',
                param: 'variations',
                getLabels: i.uC,
                labels: {
                  helpText: (0, r.__)(
                    'Check at least two variations below to compare',
                    'woocommerce',
                  ),
                  placeholder: (0, r.__)('Search for variations to compare', 'woocommerce'),
                  title: (0, r.__)('Compare Variations', 'woocommerce'),
                  update: (0, r.__)('Compare', 'woocommerce'),
                },
              },
            },
          ],
        },
        d = (0, s.applyFilters)('woocommerce_admin_products_report_advanced_filters', {
          filters: {},
          title: (0, r._x)(
            'Products Match <select/> Filters',
            'A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        });
      Object.keys(d.filters).length &&
        (m.filters.push({ label: (0, r.__)('Advanced Filters', 'woocommerce'), value: 'advanced' }),
        u.filters.push({ label: (0, r.__)('Advanced Filters', 'woocommerce'), value: 'advanced' }));
      const p = (0, s.applyFilters)('woocommerce_admin_products_report_filters', [m, u]);
    },
    80119: (e, t, o) => {
      o.r(t), o.d(t, { default: () => w });
      var r = o(69307),
        s = o(65736),
        a = o(94333),
        c = o(7862),
        i = o.n(c),
        n = o(67221),
        l = o(9818),
        m = o(25297),
        u = o(83573),
        d = o(33863),
        p = o(47478),
        _ = o(15152),
        y = o(80272),
        g = o(5938),
        b = o(31511);
      class h extends r.Component {
        getChartMeta() {
          const { query: e, isSingleProductView: t, isSingleProductVariable: o } = this.props,
            r =
              ('compare-products' === e.filter && e.products && e.products.split(',').length > 1) ||
              (t && o)
                ? 'item-comparison'
                : 'time-comparison';
          return {
            compareObject: t && o ? 'variations' : 'products',
            itemsLabel:
              t && o
                ? (0, s.__)('%d variations', 'woocommerce')
                : (0, s.__)('%d products', 'woocommerce'),
            mode: r,
          };
        }
        render() {
          const { compareObject: e, itemsLabel: t, mode: o } = this.getChartMeta(),
            {
              path: s,
              query: a,
              isError: c,
              isRequesting: i,
              isSingleProductVariable: n,
            } = this.props;
          if (c) return (0, r.createElement)(_.Z, null);
          const l = { ...a };
          return (
            'item-comparison' === o && (l.segmentby = 'products' === e ? 'product' : 'variation'),
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(b.Z, {
                query: a,
                path: s,
                filters: m.u8,
                advancedFilters: m.be,
                report: 'products',
              }),
              (0, r.createElement)(y.Z, {
                mode: o,
                charts: m.O3,
                endpoint: 'products',
                isRequesting: i,
                query: l,
                selectedChart: (0, u.Z)(a.chart, m.O3),
                filters: m.u8,
                advancedFilters: m.be,
              }),
              (0, r.createElement)(p.Z, {
                charts: m.O3,
                mode: o,
                filters: m.u8,
                advancedFilters: m.be,
                endpoint: 'products',
                isRequesting: i,
                itemsLabel: t,
                path: s,
                query: l,
                selectedChart: (0, u.Z)(l.chart, m.O3),
              }),
              n
                ? (0, r.createElement)(g.Z, {
                    baseSearchQuery: { filter: 'single_product' },
                    isRequesting: i,
                    query: a,
                    filters: m.u8,
                    advancedFilters: m.be,
                  })
                : (0, r.createElement)(d.Z, {
                    isRequesting: i,
                    query: a,
                    filters: m.u8,
                    advancedFilters: m.be,
                  }),
            )
          );
        }
      }
      h.propTypes = { path: i().string.isRequired, query: i().object.isRequired };
      const w = (0, a.compose)(
        (0, l.withSelect)((e, t) => {
          const { query: o, isRequesting: r } = t,
            s = !o.search && o.products && 1 === o.products.split(',').length,
            { getItems: a, isResolving: c, getItemsError: i } = e(n.ITEMS_STORE_NAME);
          if (r) return { query: { ...o }, isSingleProductView: s, isRequesting: r };
          if (s) {
            const e = parseInt(o.products, 10),
              t = { include: e },
              r = a('products', t),
              n = r && r.get(e) && 'variable' === r.get(e).type,
              l = c('getItems', ['products', t]),
              m = Boolean(i('products', t));
            return {
              query: { ...o, 'is-variable': n },
              isSingleProductView: s,
              isRequesting: l,
              isSingleProductVariable: n,
              isError: m,
            };
          }
          return { query: o, isSingleProductView: s };
        }),
      )(h);
    },
    33863: (e, t, o) => {
      o.d(t, { Z: () => S });
      var r = o(69307),
        s = o(65736),
        a = o(94333),
        c = o(22629),
        i = o(9818),
        n = o(92819),
        l = o(10431),
        m = o(86020),
        u = o(81595),
        d = o(74617),
        p = o(67221),
        _ = o(17844),
        y = o(5029),
        g = o(46358),
        b = o(42968),
        h = o(17062);
      const w = (0, h.O3)('manageStock', 'no'),
        v = (0, h.O3)('stockStatuses', {});
      class f extends r.Component {
        constructor() {
          super(),
            (this.getHeadersContent = this.getHeadersContent.bind(this)),
            (this.getRowsContent = this.getRowsContent.bind(this)),
            (this.getSummary = this.getSummary.bind(this));
        }
        getHeadersContent() {
          return [
            {
              label: (0, s.__)('Product title', 'woocommerce'),
              key: 'product_name',
              required: !0,
              isLeftAligned: !0,
              isSortable: !0,
            },
            {
              label: (0, s.__)('SKU', 'woocommerce'),
              key: 'sku',
              hiddenByDefault: !0,
              isSortable: !0,
            },
            {
              label: (0, s.__)('Items sold', 'woocommerce'),
              key: 'items_sold',
              required: !0,
              defaultSort: !0,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, s.__)('Net sales', 'woocommerce'),
              screenReaderLabel: (0, s.__)('Net sales', 'woocommerce'),
              key: 'net_revenue',
              required: !0,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, s.__)('Orders', 'woocommerce'),
              key: 'orders_count',
              isSortable: !0,
              isNumeric: !0,
            },
            { label: (0, s.__)('Category', 'woocommerce'), key: 'product_cat' },
            { label: (0, s.__)('Variations', 'woocommerce'), key: 'variations', isSortable: !0 },
            'yes' === w ? { label: (0, s.__)('Status', 'woocommerce'), key: 'stock_status' } : null,
            'yes' === w
              ? { label: (0, s.__)('Stock', 'woocommerce'), key: 'stock', isNumeric: !0 }
              : null,
          ].filter(Boolean);
        }
        getRowsContent(e = []) {
          const { query: t } = this.props,
            o = (0, l.getPersistedQuery)(t),
            { render: a, formatDecimal: i, getCurrencyConfig: p } = this.context,
            _ = p();
          return (0, n.map)(e, e => {
            const { product_id: n, items_sold: p, net_revenue: b, orders_count: h } = e,
              f = e.extended_info || {},
              {
                category_ids: S,
                low_stock_amount: C,
                manage_stock: k,
                sku: q,
                stock_status: E,
                stock_quantity: R,
                variations: x = [],
              } = f,
              F = (0, c.decodeEntities)(f.name),
              P = (0, l.getNewPath)(o, '/analytics/orders', {
                filter: 'advanced',
                product_includes: n,
              }),
              N = (0, l.getNewPath)(o, '/analytics/products', {
                filter: 'single_product',
                products: n,
              }),
              { categories: V } = this.props,
              A = (S && V && S.map(e => V.get(e)).filter(Boolean)) || [],
              L = (0, g.d)(E, R, C)
                ? (0, r.createElement)(
                    m.Link,
                    {
                      href: (0, d.getAdminLink)('post.php?action=edit&post=' + n),
                      type: 'wp-admin',
                    },
                    (0, s._x)('Low', 'Indication of a low quantity', 'woocommerce'),
                  )
                : v[E];
            return [
              { display: (0, r.createElement)(m.Link, { href: N, type: 'wc-admin' }, F), value: F },
              { display: q, value: q },
              { display: (0, u.formatValue)(_, 'number', p), value: p },
              { display: a(b), value: i(b) },
              { display: (0, r.createElement)(m.Link, { href: P, type: 'wc-admin' }, h), value: h },
              {
                display: (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-table__product-categories' },
                  A[0] && (0, r.createElement)(y.Z, { category: A[0], categories: V }),
                  A.length > 1 &&
                    (0, r.createElement)(m.Tag, {
                      label: (0, s.sprintf)(
                        (0, s._x)('+%d more', 'categories', 'woocommerce'),
                        A.length - 1,
                      ),
                      popoverContents: A.map(e =>
                        (0, r.createElement)(y.Z, {
                          category: e,
                          categories: V,
                          key: e.id,
                          query: t,
                        }),
                      ),
                    }),
                ),
                value: A.map(e => e.name).join(', '),
              },
              { display: (0, u.formatValue)(_, 'number', x.length), value: x.length },
              'yes' === w
                ? { display: k ? L : (0, s.__)('N/A', 'woocommerce'), value: k ? v[E] : null }
                : null,
              'yes' === w
                ? {
                    display: k
                      ? (0, u.formatValue)(_, 'number', R)
                      : (0, s.__)('N/A', 'woocommerce'),
                    value: R,
                  }
                : null,
            ].filter(Boolean);
          });
        }
        getSummary(e) {
          const {
              products_count: t = 0,
              items_sold: o = 0,
              net_revenue: r = 0,
              orders_count: a = 0,
            } = e,
            { formatAmount: c, getCurrencyConfig: i } = this.context,
            n = i();
          return [
            {
              label: (0, s._n)('Product', 'Products', t, 'woocommerce'),
              value: (0, u.formatValue)(n, 'number', t),
            },
            {
              label: (0, s._n)('Item sold', 'Items sold', o, 'woocommerce'),
              value: (0, u.formatValue)(n, 'number', o),
            },
            { label: (0, s.__)('Net sales', 'woocommerce'), value: c(r) },
            {
              label: (0, s._n)('Order', 'Orders', a, 'woocommerce'),
              value: (0, u.formatValue)(n, 'number', a),
            },
          ];
        }
        render() {
          const {
              advancedFilters: e,
              baseSearchQuery: t,
              filters: o,
              hideCompare: a,
              isRequesting: c,
              query: i,
            } = this.props,
            n = {
              helpText: (0, s.__)('Check at least two products below to compare', 'woocommerce'),
              placeholder: (0, s.__)('Search by product name or SKU', 'woocommerce'),
            };
          return (0, r.createElement)(b.Z, {
            compareBy: a ? void 0 : 'products',
            endpoint: 'products',
            getHeadersContent: this.getHeadersContent,
            getRowsContent: this.getRowsContent,
            getSummary: this.getSummary,
            summaryFields: ['products_count', 'items_sold', 'net_revenue', 'orders_count'],
            itemIdField: 'product_id',
            isRequesting: c,
            labels: n,
            query: i,
            searchBy: 'products',
            baseSearchQuery: t,
            tableQuery: {
              orderby: i.orderby || 'items_sold',
              order: i.order || 'desc',
              extended_info: !0,
              segmentby: i.segmentby,
            },
            title: (0, s.__)('Products', 'woocommerce'),
            columnPrefsKey: 'products_report_columns',
            filters: o,
            advancedFilters: e,
          });
        }
      }
      f.contextType = _.CurrencyContext;
      const S = (0, a.compose)(
        (0, i.withSelect)((e, t) => {
          const { query: o, isRequesting: r } = t,
            { getItems: s, getItemsError: a, isResolving: c } = e(p.ITEMS_STORE_NAME);
          if (r || (o.search && (!o.products || !o.products.length))) return {};
          const i = { per_page: -1 };
          return {
            categories: s('categories', i),
            isError: Boolean(a('categories', i)),
            isRequesting: c('getItems', ['categories', i]),
          };
        }),
      )(f);
    },
    5938: (e, t, o) => {
      o.d(t, { Z: () => w });
      var r = o(69307),
        s = o(65736),
        a = o(92694),
        c = o(92819),
        i = o(86020),
        n = o(10431),
        l = o(81595),
        m = o(74617),
        u = o(17844),
        d = o(42968),
        p = o(46358),
        _ = o(20513),
        y = o(17062);
      const g = (0, y.O3)('manageStock', 'no'),
        b = (0, y.O3)('stockStatuses', {});
      class h extends r.Component {
        constructor() {
          super(),
            (this.getHeadersContent = this.getHeadersContent.bind(this)),
            (this.getRowsContent = this.getRowsContent.bind(this)),
            (this.getSummary = this.getSummary.bind(this));
        }
        getHeadersContent() {
          return [
            {
              label: (0, s.__)('Product / Variation title', 'woocommerce'),
              key: 'name',
              required: !0,
              isLeftAligned: !0,
            },
            {
              label: (0, s.__)('SKU', 'woocommerce'),
              key: 'sku',
              hiddenByDefault: !0,
              isSortable: !0,
            },
            {
              label: (0, s.__)('Items sold', 'woocommerce'),
              key: 'items_sold',
              required: !0,
              defaultSort: !0,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, s.__)('Net sales', 'woocommerce'),
              screenReaderLabel: (0, s.__)('Net sales', 'woocommerce'),
              key: 'net_revenue',
              required: !0,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, s.__)('Orders', 'woocommerce'),
              key: 'orders_count',
              isSortable: !0,
              isNumeric: !0,
            },
            'yes' === g ? { label: (0, s.__)('Status', 'woocommerce'), key: 'stock_status' } : null,
            'yes' === g
              ? { label: (0, s.__)('Stock', 'woocommerce'), key: 'stock', isNumeric: !0 }
              : null,
          ].filter(Boolean);
        }
        getRowsContent(e = []) {
          const { query: t } = this.props,
            o = (0, n.getPersistedQuery)(t),
            { formatAmount: a, formatDecimal: u, getCurrencyConfig: d } = this.context;
          return (0, c.map)(e, e => {
            const {
                items_sold: t,
                net_revenue: c,
                orders_count: y,
                product_id: h,
                variation_id: w,
              } = e,
              v = e.extended_info || {},
              { stock_status: f, stock_quantity: S, low_stock_amount: C, deleted: k, sku: q } = v,
              E = ((R = e), (0, _.V1)(R.extended_info || {}));
            var R;
            const x = (0, n.getNewPath)(o, '/analytics/orders', {
                filter: 'advanced',
                variation_includes: w,
              }),
              F = (0, m.getAdminLink)(`post.php?post=${h}&action=edit`);
            return [
              {
                display: k
                  ? E + ' ' + (0, s.__)('(Deleted)', 'woocommerce')
                  : (0, r.createElement)(i.Link, { href: F, type: 'wp-admin' }, E),
                value: E,
              },
              { display: q, value: q },
              { display: (0, l.formatValue)(d(), 'number', t), value: t },
              { display: a(c), value: u(c) },
              { display: (0, r.createElement)(i.Link, { href: x, type: 'wc-admin' }, y), value: y },
              'yes' === g
                ? {
                    display: (0, p.d)(f, S, C)
                      ? (0, r.createElement)(
                          i.Link,
                          { href: F, type: 'wp-admin' },
                          (0, s._x)('Low', 'Indication of a low quantity', 'woocommerce'),
                        )
                      : b[f],
                    value: b[f],
                  }
                : null,
              'yes' === g ? { display: S, value: S } : null,
            ].filter(Boolean);
          });
        }
        getSummary(e) {
          const { query: t } = this.props,
            {
              variations_count: o = 0,
              items_sold: r = 0,
              net_revenue: c = 0,
              orders_count: i = 0,
            } = e,
            { formatAmount: n, getCurrencyConfig: m } = this.context,
            u = m();
          return [
            {
              label: (0, a.applyFilters)(
                'experimental_woocommerce_admin_variations_report_table_summary_variations_count_label',
                (0, s._n)('variation sold', 'variations sold', o, 'woocommerce'),
                o,
                t,
              ),
              value: (0, l.formatValue)(u, 'number', o),
            },
            {
              label: (0, s._n)('item sold', 'items sold', r, 'woocommerce'),
              value: (0, l.formatValue)(u, 'number', r),
            },
            { label: (0, s.__)('net sales', 'woocommerce'), value: n(c) },
            {
              label: (0, s._n)('orders', 'orders', i, 'woocommerce'),
              value: (0, l.formatValue)(u, 'number', i),
            },
          ];
        }
        render() {
          const {
              advancedFilters: e,
              baseSearchQuery: t,
              filters: o,
              isRequesting: c,
              query: i,
            } = this.props,
            n = {
              helpText: (0, s.__)('Check at least two variations below to compare', 'woocommerce'),
              placeholder: (0, s.__)('Search by variation name or SKU', 'woocommerce'),
            };
          return (0, r.createElement)(d.Z, {
            baseSearchQuery: t,
            compareBy: 'variations',
            compareParam: 'filter-variations',
            endpoint: 'variations',
            getHeadersContent: this.getHeadersContent,
            getRowsContent: this.getRowsContent,
            isRequesting: c,
            itemIdField: 'variation_id',
            labels: n,
            query: i,
            getSummary: this.getSummary,
            summaryFields: ['variations_count', 'items_sold', 'net_revenue', 'orders_count'],
            tableQuery: {
              orderby: i.orderby || 'items_sold',
              order: i.order || 'desc',
              extended_info: !0,
              product_includes: i.product_includes,
              variations: i.variations,
            },
            title: (0, a.applyFilters)(
              'experimental_woocommerce_admin_variations_report_table_title',
              (0, s.__)('Variations', 'woocommerce'),
              i,
            ),
            columnPrefsKey: 'variations_report_columns',
            filters: o,
            advancedFilters: e,
          });
        }
      }
      h.contextType = u.CurrencyContext;
      const w = h;
    },
  },
]);
