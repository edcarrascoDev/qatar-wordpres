'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [2502],
  {
    87246: (e, t, o) => {
      o.r(t), o.d(t, { default: () => g });
      var r = o(69307),
        s = o(7862),
        a = o.n(s),
        c = o(65736),
        l = o(92694);
      const n = (0, l.applyFilters)('woocommerce_admin_stock_report_advanced_filters', {
          filters: {},
          title: (0, c._x)(
            'Products Match <select/> Filters',
            'A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        }),
        i = (0, l.applyFilters)('woocommerce_admin_stock_report_filters', [
          {
            label: (0, c.__)('Show', 'woocommerce'),
            staticParams: ['paged', 'per_page'],
            param: 'type',
            showFilters: () => !0,
            filters: [
              { label: (0, c.__)('All products', 'woocommerce'), value: 'all' },
              { label: (0, c.__)('Out of stock', 'woocommerce'), value: 'outofstock' },
              { label: (0, c.__)('Low stock', 'woocommerce'), value: 'lowstock' },
              { label: (0, c.__)('In stock', 'woocommerce'), value: 'instock' },
              { label: (0, c.__)('On backorder', 'woocommerce'), value: 'onbackorder' },
            ],
          },
          {
            label: (0, c.__)('Filter by', 'woocommerce'),
            staticParams: ['paged', 'per_page'],
            param: 'filter',
            showFilters: () => Object.keys(n.filters).length,
            filters: [
              { label: (0, c.__)('All Products', 'woocommerce'), value: 'all' },
              { label: (0, c.__)('Advanced Filters', 'woocommerce'), value: 'advanced' },
            ],
          },
        ]);
      var m = o(22629),
        u = o(86020),
        d = o(10431),
        _ = o(81595),
        p = o(74617),
        k = o(17844),
        w = o(42968);
      const b = (0, o(17062).O3)('stockStatuses', {});
      class y extends r.Component {
        constructor() {
          super(),
            (this.getHeadersContent = this.getHeadersContent.bind(this)),
            (this.getRowsContent = this.getRowsContent.bind(this)),
            (this.getSummary = this.getSummary.bind(this));
        }
        getHeadersContent() {
          return [
            {
              label: (0, c.__)('Product / Variation', 'woocommerce'),
              key: 'title',
              required: !0,
              isLeftAligned: !0,
              isSortable: !0,
            },
            { label: (0, c.__)('SKU', 'woocommerce'), key: 'sku', isSortable: !0 },
            {
              label: (0, c.__)('Status', 'woocommerce'),
              key: 'stock_status',
              isSortable: !0,
              defaultSort: !0,
            },
            { label: (0, c.__)('Stock', 'woocommerce'), key: 'stock_quantity', isSortable: !0 },
          ];
        }
        getRowsContent(e = []) {
          const { query: t } = this.props,
            o = (0, d.getPersistedQuery)(t);
          return e.map(e => {
            const {
                id: t,
                manage_stock: s,
                parent_id: a,
                sku: l,
                stock_quantity: n,
                stock_status: i,
                low_stock_amount: k,
              } = e,
              w = (0, m.decodeEntities)(e.name),
              y = (0, d.getNewPath)(o, '/analytics/products', {
                filter: 'single_product',
                products: a || t,
              }),
              h = (0, r.createElement)(u.Link, { href: y, type: 'wc-admin' }, w),
              f = (0, p.getAdminLink)('post.php?action=edit&post=' + (a || t));
            var g, v, C;
            return [
              { display: h, value: w },
              { display: l, value: l },
              {
                display:
                  ((g = i),
                  (C = k),
                  (v = n) && g && v <= C === 'instock'
                    ? (0, r.createElement)(
                        u.Link,
                        { href: f, type: 'wp-admin' },
                        (0, c._x)('Low', 'Indication of a low quantity', 'woocommerce'),
                      )
                    : (0, r.createElement)(u.Link, { href: f, type: 'wp-admin' }, b[i])),
                value: b[i],
              },
              {
                display: s
                  ? (0, _.formatValue)(this.context.getCurrencyConfig(), 'number', n)
                  : (0, c.__)('N/A', 'woocommerce'),
                value: n,
              },
            ];
          });
        }
        getSummary(e) {
          const {
              products: t = 0,
              outofstock: o = 0,
              lowstock: r = 0,
              instock: s = 0,
              onbackorder: a = 0,
            } = e,
            l = this.context.getCurrencyConfig();
          return [
            {
              label: (0, c._n)('Product', 'Products', t, 'woocommerce'),
              value: (0, _.formatValue)(l, 'number', t),
            },
            {
              label: (0, c.__)('Out of stock', 'woocommerce'),
              value: (0, _.formatValue)(l, 'number', o),
            },
            {
              label: (0, c.__)('Low stock', 'woocommerce'),
              value: (0, _.formatValue)(l, 'number', r),
            },
            {
              label: (0, c.__)('On backorder', 'woocommerce'),
              value: (0, _.formatValue)(l, 'number', a),
            },
            {
              label: (0, c.__)('In stock', 'woocommerce'),
              value: (0, _.formatValue)(l, 'number', s),
            },
          ];
        }
        render() {
          const { advancedFilters: e, filters: t, query: o } = this.props;
          return (0, r.createElement)(w.Z, {
            endpoint: 'stock',
            getHeadersContent: this.getHeadersContent,
            getRowsContent: this.getRowsContent,
            getSummary: this.getSummary,
            summaryFields: ['products', 'outofstock', 'lowstock', 'instock', 'onbackorder'],
            query: o,
            tableQuery: {
              orderby: o.orderby || 'stock_status',
              order: o.order || 'asc',
              type: o.type || 'all',
            },
            title: (0, c.__)('Stock', 'woocommerce'),
            filters: t,
            advancedFilters: e,
          });
        }
      }
      y.contextType = k.CurrencyContext;
      const h = y;
      var f = o(31511);
      class g extends r.Component {
        render() {
          const { query: e, path: t } = this.props;
          return (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(f.Z, {
              query: e,
              path: t,
              showDatePicker: !1,
              filters: i,
              advancedFilters: n,
              report: 'stock',
            }),
            (0, r.createElement)(h, { query: e, filters: i, advancedFilters: n }),
          );
        }
      }
      g.propTypes = { query: a().object.isRequired };
    },
  },
]);
