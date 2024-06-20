'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [2397],
  {
    15152: (e, o, r) => {
      r.d(o, { Z: () => m });
      var t = r(69307),
        c = r(65736),
        a = r(7862),
        l = r.n(a),
        s = r(86020);
      function n({ className: e }) {
        const o = (0, c.__)(
            'There was an error getting your stats. Please try again.',
            'woocommerce',
          ),
          r = (0, c.__)('Reload', 'woocommerce');
        return (0, t.createElement)(s.EmptyContent, {
          className: e,
          title: o,
          actionLabel: r,
          actionCallback: () => {
            window.location.reload();
          },
        });
      }
      n.propTypes = { className: l().string };
      const m = n;
    },
    1602: (e, o, r) => {
      r.d(o, { O3: () => m, be: () => i, u8: () => _ });
      var t = r(65736),
        c = r(92694),
        a = r(9818),
        l = r(75606),
        s = r(20513);
      const { addCesSurveyForAnalytics: n } = (0, a.dispatch)(l.STORE_KEY),
        m = (0, c.applyFilters)('woocommerce_admin_coupons_report_charts', [
          {
            key: 'orders_count',
            label: (0, t.__)('Discounted orders', 'woocommerce'),
            order: 'desc',
            orderby: 'orders_count',
            type: 'number',
          },
          {
            key: 'amount',
            label: (0, t.__)('Amount', 'woocommerce'),
            order: 'desc',
            orderby: 'amount',
            type: 'currency',
          },
        ]),
        i = (0, c.applyFilters)('woocommerce_admin_coupon_report_advanced_filters', {
          filters: {},
          title: (0, t._x)(
            'Coupons match <select/> filters',
            'A sentence describing filters for Coupons. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        }),
        d = [
          { label: (0, t.__)('All coupons', 'woocommerce'), value: 'all' },
          {
            label: (0, t.__)('Single coupon', 'woocommerce'),
            value: 'select_coupon',
            chartMode: 'item-comparison',
            subFilters: [
              {
                component: 'Search',
                value: 'single_coupon',
                chartMode: 'item-comparison',
                path: ['select_coupon'],
                settings: {
                  type: 'coupons',
                  param: 'coupons',
                  getLabels: s.hQ,
                  labels: {
                    placeholder: (0, t.__)('Type to search for a coupon', 'woocommerce'),
                    button: (0, t.__)('Single Coupon', 'woocommerce'),
                  },
                },
              },
            ],
          },
          {
            label: (0, t.__)('Comparison', 'woocommerce'),
            value: 'compare-coupons',
            settings: {
              type: 'coupons',
              param: 'coupons',
              getLabels: s.hQ,
              labels: {
                title: (0, t.__)('Compare Coupon Codes', 'woocommerce'),
                update: (0, t.__)('Compare', 'woocommerce'),
                helpText: (0, t.__)(
                  'Check at least two coupon codes below to compare',
                  'woocommerce',
                ),
              },
              onClick: n,
            },
          },
        ];
      Object.keys(i.filters).length &&
        d.push({ label: (0, t.__)('Advanced filters', 'woocommerce'), value: 'advanced' });
      const _ = (0, c.applyFilters)('woocommerce_admin_coupons_report_filters', [
        {
          label: (0, t.__)('Show', 'woocommerce'),
          staticParams: ['chartType', 'paged', 'per_page'],
          param: 'filter',
          showFilters: () => !0,
          filters: d,
        },
      ]);
    },
    65925: (e, o, r) => {
      r.d(o, { O3: () => l, be: () => n, u8: () => s });
      var t = r(65736),
        c = r(92694),
        a = r(20513);
      const l = (0, c.applyFilters)('woocommerce_admin_downloads_report_charts', [
          { key: 'download_count', label: (0, t.__)('Downloads', 'woocommerce'), type: 'number' },
        ]),
        s = (0, c.applyFilters)('woocommerce_admin_downloads_report_filters', [
          {
            label: (0, t.__)('Show', 'woocommerce'),
            staticParams: ['chartType', 'paged', 'per_page'],
            param: 'filter',
            showFilters: () => !0,
            filters: [
              { label: (0, t.__)('All downloads', 'woocommerce'), value: 'all' },
              { label: (0, t.__)('Advanced filters', 'woocommerce'), value: 'advanced' },
            ],
          },
        ]),
        n = (0, c.applyFilters)('woocommerce_admin_downloads_report_advanced_filters', {
          title: (0, t._x)(
            'Downloads match <select/> filters',
            'A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg',
            'woocommerce',
          ),
          filters: {
            product: {
              labels: {
                add: (0, t.__)('Product', 'woocommerce'),
                placeholder: (0, t.__)('Search', 'woocommerce'),
                remove: (0, t.__)('Remove product filter', 'woocommerce'),
                rule: (0, t.__)('Select a product filter match', 'woocommerce'),
                title: (0, t.__)('<title>Product</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, t.__)('Select product', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, t._x)('Includes', 'products', 'woocommerce') },
                { value: 'excludes', label: (0, t._x)('Excludes', 'products', 'woocommerce') },
              ],
              input: { component: 'Search', type: 'products', getLabels: a.oC },
            },
            customer: {
              labels: {
                add: (0, t.__)('Username', 'woocommerce'),
                placeholder: (0, t.__)('Search customer username', 'woocommerce'),
                remove: (0, t.__)('Remove customer username filter', 'woocommerce'),
                rule: (0, t.__)('Select a customer username filter match', 'woocommerce'),
                title: (0, t.__)('<title>Username</title> <rule/> <filter />', 'woocommerce'),
                filter: (0, t.__)('Select customer username', 'woocommerce'),
              },
              rules: [
                {
                  value: 'includes',
                  label: (0, t._x)('Includes', 'customer usernames', 'woocommerce'),
                },
                {
                  value: 'excludes',
                  label: (0, t._x)('Excludes', 'customer usernames', 'woocommerce'),
                },
              ],
              input: { component: 'Search', type: 'usernames', getLabels: a.jk },
            },
            order: {
              labels: {
                add: (0, t.__)('Order #', 'woocommerce'),
                placeholder: (0, t.__)('Search order number', 'woocommerce'),
                remove: (0, t.__)('Remove order number filter', 'woocommerce'),
                rule: (0, t.__)('Select a order number filter match', 'woocommerce'),
                title: (0, t.__)('<title>Order #</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, t.__)('Select order number', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, t._x)('Includes', 'order numbers', 'woocommerce') },
                { value: 'excludes', label: (0, t._x)('Excludes', 'order numbers', 'woocommerce') },
              ],
              input: {
                component: 'Search',
                type: 'orders',
                getLabels: async e => {
                  const o = e.split(',');
                  return await o.map(e => ({ id: e, label: '#' + e }));
                },
              },
            },
            ip_address: {
              labels: {
                add: (0, t.__)('IP Address', 'woocommerce'),
                placeholder: (0, t.__)('Search IP address', 'woocommerce'),
                remove: (0, t.__)('Remove IP address filter', 'woocommerce'),
                rule: (0, t.__)('Select an IP address filter match', 'woocommerce'),
                title: (0, t.__)('<title>IP Address</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, t.__)('Select IP address', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, t._x)('Includes', 'IP addresses', 'woocommerce') },
                { value: 'excludes', label: (0, t._x)('Excludes', 'IP addresses', 'woocommerce') },
              ],
              input: {
                component: 'Search',
                type: 'downloadIps',
                getLabels: async e => {
                  const o = e.split(',');
                  return await o.map(e => ({ id: e, label: e }));
                },
              },
            },
          },
        });
    },
    25297: (e, o, r) => {
      r.d(o, { O3: () => m, be: () => _, u8: () => p });
      var t = r(65736),
        c = r(92694),
        a = r(9818),
        l = r(75606),
        s = r(20513);
      const { addCesSurveyForAnalytics: n } = (0, a.dispatch)(l.STORE_KEY),
        m = (0, c.applyFilters)('woocommerce_admin_products_report_charts', [
          {
            key: 'items_sold',
            label: (0, t.__)('Items sold', 'woocommerce'),
            order: 'desc',
            orderby: 'items_sold',
            type: 'number',
          },
          {
            key: 'net_revenue',
            label: (0, t.__)('Net sales', 'woocommerce'),
            order: 'desc',
            orderby: 'net_revenue',
            type: 'currency',
          },
          {
            key: 'orders_count',
            label: (0, t.__)('Orders', 'woocommerce'),
            order: 'desc',
            orderby: 'orders_count',
            type: 'number',
          },
        ]),
        i = {
          label: (0, t.__)('Show', 'woocommerce'),
          staticParams: ['chartType', 'paged', 'per_page'],
          param: 'filter',
          showFilters: () => !0,
          filters: [
            { label: (0, t.__)('All products', 'woocommerce'), value: 'all' },
            {
              label: (0, t.__)('Single product', 'woocommerce'),
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
                    getLabels: s.oC,
                    labels: {
                      placeholder: (0, t.__)('Type to search for a product', 'woocommerce'),
                      button: (0, t.__)('Single product', 'woocommerce'),
                    },
                  },
                },
              ],
            },
            {
              label: (0, t.__)('Comparison', 'woocommerce'),
              value: 'compare-products',
              chartMode: 'item-comparison',
              settings: {
                type: 'products',
                param: 'products',
                getLabels: s.oC,
                labels: {
                  helpText: (0, t.__)(
                    'Check at least two products below to compare',
                    'woocommerce',
                  ),
                  placeholder: (0, t.__)('Search for products to compare', 'woocommerce'),
                  title: (0, t.__)('Compare Products', 'woocommerce'),
                  update: (0, t.__)('Compare', 'woocommerce'),
                },
                onClick: n,
              },
            },
          ],
        },
        d = {
          showFilters: e => 'single_product' === e.filter && !!e.products && e['is-variable'],
          staticParams: ['filter', 'products', 'chartType', 'paged', 'per_page'],
          param: 'filter-variations',
          filters: [
            {
              label: (0, t.__)('All variations', 'woocommerce'),
              chartMode: 'item-comparison',
              value: 'all',
            },
            {
              label: (0, t.__)('Single variation', 'woocommerce'),
              value: 'select_variation',
              subFilters: [
                {
                  component: 'Search',
                  value: 'single_variation',
                  path: ['select_variation'],
                  settings: {
                    type: 'variations',
                    param: 'variations',
                    getLabels: s.uC,
                    labels: {
                      placeholder: (0, t.__)('Type to search for a variation', 'woocommerce'),
                      button: (0, t.__)('Single variation', 'woocommerce'),
                    },
                  },
                },
              ],
            },
            {
              label: (0, t.__)('Comparison', 'woocommerce'),
              chartMode: 'item-comparison',
              value: 'compare-variations',
              settings: {
                type: 'variations',
                param: 'variations',
                getLabels: s.uC,
                labels: {
                  helpText: (0, t.__)(
                    'Check at least two variations below to compare',
                    'woocommerce',
                  ),
                  placeholder: (0, t.__)('Search for variations to compare', 'woocommerce'),
                  title: (0, t.__)('Compare Variations', 'woocommerce'),
                  update: (0, t.__)('Compare', 'woocommerce'),
                },
              },
            },
          ],
        },
        _ = (0, c.applyFilters)('woocommerce_admin_products_report_advanced_filters', {
          filters: {},
          title: (0, t._x)(
            'Products Match <select/> Filters',
            'A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        });
      Object.keys(_.filters).length &&
        (i.filters.push({ label: (0, t.__)('Advanced Filters', 'woocommerce'), value: 'advanced' }),
        d.filters.push({ label: (0, t.__)('Advanced Filters', 'woocommerce'), value: 'advanced' }));
      const p = (0, c.applyFilters)('woocommerce_admin_products_report_filters', [i, d]);
    },
    74457: (e, o, r) => {
      r.d(o, { O3: () => a, be: () => l, u8: () => n });
      var t = r(65736),
        c = r(92694);
      const a = (0, c.applyFilters)('woocommerce_admin_revenue_report_charts', [
          {
            key: 'gross_sales',
            label: (0, t.__)('Gross sales', 'woocommerce'),
            order: 'desc',
            orderby: 'gross_sales',
            type: 'currency',
            isReverseTrend: !1,
          },
          {
            key: 'refunds',
            label: (0, t.__)('Returns', 'woocommerce'),
            order: 'desc',
            orderby: 'refunds',
            type: 'currency',
            isReverseTrend: !0,
          },
          {
            key: 'coupons',
            label: (0, t.__)('Coupons', 'woocommerce'),
            order: 'desc',
            orderby: 'coupons',
            type: 'currency',
            isReverseTrend: !1,
          },
          {
            key: 'net_revenue',
            label: (0, t.__)('Net sales', 'woocommerce'),
            orderby: 'net_revenue',
            type: 'currency',
            isReverseTrend: !1,
            labelTooltipText: (0, t.__)(
              'Full refunds are not deducted from tax or net sales totals',
              'woocommerce',
            ),
          },
          {
            key: 'taxes',
            label: (0, t.__)('Taxes', 'woocommerce'),
            order: 'desc',
            orderby: 'taxes',
            type: 'currency',
            isReverseTrend: !1,
            labelTooltipText: (0, t.__)(
              'Full refunds are not deducted from tax or net sales totals',
              'woocommerce',
            ),
          },
          {
            key: 'shipping',
            label: (0, t.__)('Shipping', 'woocommerce'),
            orderby: 'shipping',
            type: 'currency',
            isReverseTrend: !1,
          },
          {
            key: 'total_sales',
            label: (0, t.__)('Total sales', 'woocommerce'),
            order: 'desc',
            orderby: 'total_sales',
            type: 'currency',
            isReverseTrend: !1,
          },
        ]),
        l = (0, c.applyFilters)('woocommerce_admin_revenue_report_advanced_filters', {
          filters: {},
          title: (0, t._x)(
            'Revenue Matches <select/> Filters',
            'A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        }),
        s = [];
      Object.keys(l.filters).length &&
        (s.push({ label: (0, t.__)('All Revenue', 'woocommerce'), value: 'all' }),
        s.push({ label: (0, t.__)('Advanced Filters', 'woocommerce'), value: 'advanced' }));
      const n = (0, c.applyFilters)('woocommerce_admin_revenue_report_filters', [
        {
          label: (0, t.__)('Show', 'woocommerce'),
          staticParams: ['chartType', 'paged', 'per_page'],
          param: 'filter',
          showFilters: () => s.length > 0,
          filters: s,
        },
      ]);
    },
    56703: (e, o, r) => {
      r.d(o, { O3: () => d, be: () => _, u8: () => u });
      var t = r(65736),
        c = r(92694),
        a = r(75606),
        l = r(67221),
        s = r(9818),
        n = r(20513),
        m = r(86806);
      const { addCesSurveyForAnalytics: i } = (0, s.dispatch)(a.STORE_KEY),
        d = (0, c.applyFilters)('woocommerce_admin_taxes_report_charts', [
          {
            key: 'total_tax',
            label: (0, t.__)('Total tax', 'woocommerce'),
            order: 'desc',
            orderby: 'total_tax',
            type: 'currency',
          },
          {
            key: 'order_tax',
            label: (0, t.__)('Order tax', 'woocommerce'),
            order: 'desc',
            orderby: 'order_tax',
            type: 'currency',
          },
          {
            key: 'shipping_tax',
            label: (0, t.__)('Shipping tax', 'woocommerce'),
            order: 'desc',
            orderby: 'shipping_tax',
            type: 'currency',
          },
          {
            key: 'orders_count',
            label: (0, t.__)('Orders', 'woocommerce'),
            order: 'desc',
            orderby: 'orders_count',
            type: 'number',
          },
        ]),
        _ = (0, c.applyFilters)('woocommerce_admin_taxes_report_advanced_filters', {
          filters: {},
          title: (0, t._x)(
            'Taxes match <select/> filters',
            'A sentence describing filters for Taxes. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        }),
        p = [
          { label: (0, t.__)('All taxes', 'woocommerce'), value: 'all' },
          {
            label: (0, t.__)('Comparison', 'woocommerce'),
            value: 'compare-taxes',
            chartMode: 'item-comparison',
            settings: {
              type: 'taxes',
              param: 'taxes',
              getLabels: (0, n.qc)(l.NAMESPACE + '/taxes', e => ({
                id: e.id,
                key: e.id,
                label: (0, m.I)(e),
              })),
              labels: {
                helpText: (0, t.__)('Check at least two tax codes below to compare', 'woocommerce'),
                placeholder: (0, t.__)('Search for tax codes to compare', 'woocommerce'),
                title: (0, t.__)('Compare Tax Codes', 'woocommerce'),
                update: (0, t.__)('Compare', 'woocommerce'),
              },
              onClick: i,
            },
          },
        ];
      Object.keys(_.filters).length &&
        p.push({ label: (0, t.__)('Advanced filters', 'woocommerce'), value: 'advanced' });
      const u = (0, c.applyFilters)('woocommerce_admin_taxes_report_filters', [
        {
          label: (0, t.__)('Show', 'woocommerce'),
          staticParams: ['chartType', 'paged', 'per_page'],
          param: 'filter',
          showFilters: () => !0,
          filters: p,
        },
      ]);
    },
    21999: (e, o, r) => {
      r.r(o), r.d(o, { default: () => j });
      var t = r(69307),
        c = r(65736),
        a = r(87608),
        l = r.n(a),
        s = r(39389),
        n = r(22578),
        m = r(7862),
        i = r.n(m),
        d = r(55609),
        _ = r(86020),
        p = r(67221),
        u = r(81921),
        h = r(14599),
        w = r(37708),
        b = r(10431),
        y = r(74617),
        v = r(14812),
        f = r(47478);
      class g extends t.Component {
        constructor(...e) {
          super(...e),
            (0, w.Z)(this, 'handleChartClick', () => {
              const { selectedChart: e } = this.props;
              (0, b.getHistory)().push(this.getChartPath(e));
            });
        }
        getChartPath(e) {
          return (0, b.getNewPath)(
            { chart: e.key },
            '/analytics/' + e.endpoint,
            (0, b.getPersistedQuery)(),
          );
        }
        render() {
          const {
            charts: e,
            endpoint: o,
            path: r,
            query: a,
            selectedChart: l,
            filters: s,
          } = this.props;
          return l
            ? (0, t.createElement)(
                'div',
                {
                  role: 'presentation',
                  className: 'woocommerce-dashboard__chart-block-wrapper',
                  onClick: this.handleChartClick,
                },
                (0, t.createElement)(
                  d.Card,
                  { className: 'woocommerce-dashboard__chart-block' },
                  (0, t.createElement)(
                    d.CardHeader,
                    null,
                    (0, t.createElement)(
                      v.Text,
                      { as: 'h3', size: 16, weight: 600, color: '#23282d' },
                      l.label,
                    ),
                  ),
                  (0, t.createElement)(
                    d.CardBody,
                    { size: null },
                    (0, t.createElement)(
                      'a',
                      {
                        className: 'screen-reader-text',
                        href: (0, y.getAdminLink)(this.getChartPath(l)),
                      },
                      (0, c.sprintf)((0, c.__)('%s Report', 'woocommerce'), l.label),
                    ),
                    (0, t.createElement)(f.Z, {
                      charts: e,
                      endpoint: o,
                      query: a,
                      interactiveLegend: !1,
                      legendPosition: 'bottom',
                      path: r,
                      selectedChart: l,
                      showHeaderControls: !1,
                      filters: s,
                    }),
                  ),
                ),
              )
            : null;
        }
      }
      g.propTypes = {
        charts: i().array,
        endpoint: i().string.isRequired,
        path: i().string.isRequired,
        query: i().object.isRequired,
        selectedChart: i().object.isRequired,
      };
      const k = g;
      var x = r(92694),
        C = r(25447),
        S = r(25297),
        T = r(74457),
        E = r(1602),
        O = r(56703),
        F = r(65925);
      const P = {
          revenue: T.O3,
          orders: C.O3,
          products: S.O3,
          coupons: E.O3,
          taxes: O.O3,
          downloads: F.O3,
        },
        R = [
          { label: (0, c.__)('Total sales', 'woocommerce'), report: 'revenue', key: 'total_sales' },
          { label: (0, c.__)('Net sales', 'woocommerce'), report: 'revenue', key: 'net_revenue' },
          { label: (0, c.__)('Orders', 'woocommerce'), report: 'orders', key: 'orders_count' },
          {
            label: (0, c.__)('Average order value', 'woocommerce'),
            report: 'orders',
            key: 'avg_order_value',
          },
          { label: (0, c.__)('Items sold', 'woocommerce'), report: 'products', key: 'items_sold' },
          { label: (0, c.__)('Returns', 'woocommerce'), report: 'revenue', key: 'refunds' },
          {
            label: (0, c.__)('Discounted orders', 'woocommerce'),
            report: 'coupons',
            key: 'orders_count',
          },
          { label: (0, c.__)('Gross discounted', 'woocommerce'), report: 'coupons', key: 'amount' },
          { label: (0, c.__)('Total tax', 'woocommerce'), report: 'taxes', key: 'total_tax' },
          { label: (0, c.__)('Order tax', 'woocommerce'), report: 'taxes', key: 'order_tax' },
          { label: (0, c.__)('Shipping tax', 'woocommerce'), report: 'taxes', key: 'shipping_tax' },
          { label: (0, c.__)('Shipping', 'woocommerce'), report: 'revenue', key: 'shipping' },
          {
            label: (0, c.__)('Downloads', 'woocommerce'),
            report: 'downloads',
            key: 'download_count',
          },
        ],
        A = (0, x.applyFilters)(
          'woocommerce_admin_dashboard_charts_filter',
          R.map(e => ({
            ...P[e.report].find(o => o.key === e.key),
            label: e.label,
            endpoint: e.report,
          })),
        ),
        I = e => {
          const {
              controls: o,
              hiddenBlocks: r,
              isFirst: a,
              isLast: m,
              onMove: i,
              onRemove: w,
              onTitleBlur: b,
              onTitleChange: y,
              onToggleHiddenBlock: v,
              path: f,
              title: g,
              titleInput: x,
              filters: C,
              defaultDateRange: S,
            } = e,
            { updateUserPreferences: T, ...E } = (0, p.useUserPreferences)(),
            [O, F] = (0, t.useState)(E.dashboard_chart_type || 'line'),
            [P, R] = (0, t.useState)(E.dashboard_chart_interval || 'day'),
            I = { ...e.query, chartType: O, interval: P },
            j = e => () => {
              F(e),
                T({ dashboard_chart_type: e }),
                (0, h.recordEvent)('dash_charts_type_toggle', { chart_type: e });
            };
          return (0, t.createElement)(
            'div',
            { className: 'woocommerce-dashboard__dashboard-charts' },
            (0, t.createElement)(
              _.SectionHeader,
              {
                title: g || (0, c.__)('Charts', 'woocommerce'),
                menu: (0, t.createElement)(_.EllipsisMenu, {
                  label: (0, c.__)('Choose which charts to display', 'woocommerce'),
                  renderContent: ({ onToggle: e }) =>
                    (0, t.createElement)(
                      t.Fragment,
                      null,
                      (0, t.createElement)(_.MenuTitle, null, (0, c.__)('Charts', 'woocommerce')),
                      (({ hiddenBlocks: e, onToggleHiddenBlock: o }) =>
                        A.map(r => {
                          const c = r.endpoint + '_' + r.key,
                            a = !e.includes(c);
                          return (0, t.createElement)(
                            _.MenuItem,
                            {
                              checked: a,
                              isCheckbox: !0,
                              isClickable: !0,
                              key: r.endpoint + '_' + r.key,
                              onInvoke: () => {
                                o(c)(),
                                  (0, h.recordEvent)('dash_charts_chart_toggle', {
                                    status: a ? 'off' : 'on',
                                    key: c,
                                  });
                              },
                            },
                            r.label,
                          );
                        }))({ hiddenBlocks: r, onToggleHiddenBlock: v }),
                      (0, t.createElement)(o, {
                        onToggle: e,
                        onMove: i,
                        onRemove: w,
                        isFirst: a,
                        isLast: m,
                        onTitleBlur: b,
                        onTitleChange: y,
                        titleInput: x,
                      }),
                    ),
                }),
                className: 'has-interval-select',
              },
              (({ chartInterval: e, setInterval: o, query: r, defaultDateRange: a }) => {
                const l = (0, u.getAllowedIntervalsForQuery)(r, a);
                if (!l || l.length < 1) return null;
                const s = {
                  hour: (0, c.__)('By hour', 'woocommerce'),
                  day: (0, c.__)('By day', 'woocommerce'),
                  week: (0, c.__)('By week', 'woocommerce'),
                  month: (0, c.__)('By month', 'woocommerce'),
                  quarter: (0, c.__)('By quarter', 'woocommerce'),
                  year: (0, c.__)('By year', 'woocommerce'),
                };
                return (0, t.createElement)(d.SelectControl, {
                  className: 'woocommerce-chart__interval-select',
                  value: e,
                  options: l.map(e => ({ value: e, label: s[e] })),
                  'aria-label': 'Chart period',
                  onChange: o,
                });
              })({
                chartInterval: P,
                setInterval: e => {
                  R(e),
                    T({ dashboard_chart_interval: e }),
                    (0, h.recordEvent)('dash_charts_interval', { interval: e });
                },
                query: I,
                defaultDateRange: S,
              }),
              (0, t.createElement)(
                d.NavigableMenu,
                {
                  className: 'woocommerce-chart__types',
                  orientation: 'horizontal',
                  role: 'menubar',
                },
                (0, t.createElement)(
                  d.Button,
                  {
                    className: l()('woocommerce-chart__type-button', {
                      'woocommerce-chart__type-button-selected':
                        !I.chartType || 'line' === I.chartType,
                    }),
                    title: (0, c.__)('Line chart', 'woocommerce'),
                    'aria-checked': 'line' === I.chartType,
                    role: 'menuitemradio',
                    tabIndex: 'line' === I.chartType ? 0 : -1,
                    onClick: j('line'),
                  },
                  (0, t.createElement)(s.Z, null),
                ),
                (0, t.createElement)(
                  d.Button,
                  {
                    className: l()('woocommerce-chart__type-button', {
                      'woocommerce-chart__type-button-selected': 'bar' === I.chartType,
                    }),
                    title: (0, c.__)('Bar chart', 'woocommerce'),
                    'aria-checked': 'bar' === I.chartType,
                    role: 'menuitemradio',
                    tabIndex: 'bar' === I.chartType ? 0 : -1,
                    onClick: j('bar'),
                  },
                  (0, t.createElement)(n.Z, null),
                ),
              ),
            ),
            (({ hiddenBlocks: e, path: o, query: r, filters: c }) => {
              const a = A.reduce(
                (e, o) => (
                  void 0 === e[o.endpoint] && (e[o.endpoint] = []), e[o.endpoint].push(o), e
                ),
                {},
              );
              return (0, t.createElement)(
                'div',
                { className: 'woocommerce-dashboard__columns' },
                A.map(l =>
                  e.includes(l.endpoint + '_' + l.key)
                    ? null
                    : (0, t.createElement)(k, {
                        charts: a[l.endpoint],
                        endpoint: l.endpoint,
                        key: l.endpoint + '_' + l.key,
                        path: o,
                        query: r,
                        selectedChart: l,
                        filters: c,
                      }),
                ),
              );
            })({ hiddenBlocks: r, path: f, query: I, filters: C }),
          );
        };
      I.propTypes = {
        path: i().string.isRequired,
        query: i().object.isRequired,
        defaultDateRange: i().string.isRequired,
      };
      const j = I;
    },
    39389: (e, o, r) => {
      o.Z = function(e) {
        var o = e.size,
          r = void 0 === o ? 24 : o,
          t = e.onClick,
          s = (e.icon, e.className),
          n = (function(e, o) {
            if (null == e) return {};
            var r,
              t,
              c = (function(e, o) {
                if (null == e) return {};
                var r,
                  t,
                  c = {},
                  a = Object.keys(e);
                for (t = 0; t < a.length; t++) (r = a[t]), 0 <= o.indexOf(r) || (c[r] = e[r]);
                return c;
              })(e, o);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (t = 0; t < a.length; t++)
                (r = a[t]),
                  0 <= o.indexOf(r) ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]));
            }
            return c;
          })(e, a),
          m = ['gridicon', 'gridicons-line-graph', s, !1, !1, !1].filter(Boolean).join(' ');
        return c.default.createElement(
          'svg',
          l({ className: m, height: r, width: r, onClick: t }, n, {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
          }),
          c.default.createElement(
            'g',
            null,
            c.default.createElement('path', {
              d:
                'M3 19h18v2H3zm3-3c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3L8.8 10H9c.5 0 1-.2 1.3-.5l2.7 1.4v.1c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-.9-.5-1.3L17.8 7h.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .5.2 1 .5 1.3L15.2 9H15c-.5 0-1 .2-1.3.5L11 8.2V8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .5.2 1 .5 1.3L6.2 12H6c-1.1 0-2 .9-2 2s.9 2 2 2z',
            }),
          ),
        );
      };
      var t,
        c = (t = r(99196)) && t.__esModule ? t : { default: t },
        a = ['size', 'onClick', 'icon', 'className'];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var o, r = 1; r < arguments.length; r++)
                  for (var t in (o = arguments[r]))
                    Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
                return e;
              }),
          l.apply(this, arguments)
        );
      }
    },
    22578: (e, o, r) => {
      o.Z = function(e) {
        var o = e.size,
          r = void 0 === o ? 24 : o,
          t = e.onClick,
          s = (e.icon, e.className),
          n = (function(e, o) {
            if (null == e) return {};
            var r,
              t,
              c = (function(e, o) {
                if (null == e) return {};
                var r,
                  t,
                  c = {},
                  a = Object.keys(e);
                for (t = 0; t < a.length; t++) (r = a[t]), 0 <= o.indexOf(r) || (c[r] = e[r]);
                return c;
              })(e, o);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (t = 0; t < a.length; t++)
                (r = a[t]),
                  0 <= o.indexOf(r) ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]));
            }
            return c;
          })(e, a),
          m = [
            'gridicon',
            'gridicons-stats-alt',
            s,
            !1,
            !1,
            !!(function(e) {
              return 0 == e % 18;
            })(r) && 'needs-offset-y',
          ]
            .filter(Boolean)
            .join(' ');
        return c.default.createElement(
          'svg',
          l({ className: m, height: r, width: r, onClick: t }, n, {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
          }),
          c.default.createElement(
            'g',
            null,
            c.default.createElement('path', {
              d: 'M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z',
            }),
          ),
        );
      };
      var t,
        c = (t = r(99196)) && t.__esModule ? t : { default: t },
        a = ['size', 'onClick', 'icon', 'className'];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var o, r = 1; r < arguments.length; r++)
                  for (var t in (o = arguments[r]))
                    Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
                return e;
              }),
          l.apply(this, arguments)
        );
      }
    },
    37708: (e, o, r) => {
      r.d(o, { Z: () => c });
      var t = r(71948);
      function c(e, o, r) {
        return (
          (o = (0, t.Z)(o)) in e
            ? Object.defineProperty(e, o, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = r),
          e
        );
      }
    },
    33544: (e, o, r) => {
      r.d(o, { Z: () => c });
      var t = r(64156);
      function c(e, o) {
        if ('object' !== (0, t.Z)(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var c = r.call(e, o || 'default');
          if ('object' !== (0, t.Z)(c)) return c;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === o ? String : Number)(e);
      }
    },
    71948: (e, o, r) => {
      r.d(o, { Z: () => a });
      var t = r(64156),
        c = r(33544);
      function a(e) {
        var o = (0, c.Z)(e, 'string');
        return 'symbol' === (0, t.Z)(o) ? o : String(o);
      }
    },
    64156: (e, o, r) => {
      function t(e) {
        return (
          (t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          t(e)
        );
      }
      r.d(o, { Z: () => t });
    },
  },
]);
