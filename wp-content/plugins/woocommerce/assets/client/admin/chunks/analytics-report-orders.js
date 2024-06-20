'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [3576],
  {
    80272: (e, t, r) => {
      r.d(t, { Z: () => g });
      var o = r(69307),
        a = r(65736),
        s = r(94333),
        n = r(9818),
        i = r(7862),
        l = r.n(i),
        c = r(10431),
        u = r(86020),
        m = r(81595),
        d = r(67221),
        p = r(81921),
        _ = r(14599),
        y = r(17844),
        h = r(15152);
      class b extends o.Component {
        formatVal(e, t) {
          const { formatAmount: r, getCurrencyConfig: o } = this.context;
          return 'currency' === t ? r(e) : (0, m.formatValue)(o(), t, e);
        }
        getValues(e, t) {
          const { emptySearchResults: r, summaryData: o } = this.props,
            { totals: a } = o,
            s = a.primary ? a.primary[e] : 0,
            n = a.secondary ? a.secondary[e] : 0,
            i = r ? 0 : s,
            l = r ? 0 : n;
          return {
            delta: (0, m.calculateDelta)(i, l),
            prevValue: this.formatVal(l, t),
            value: this.formatVal(i, t),
          };
        }
        render() {
          const {
              charts: e,
              query: t,
              selectedChart: r,
              summaryData: s,
              endpoint: n,
              report: i,
              defaultDateRange: l,
            } = this.props,
            { isError: m, isRequesting: d } = s;
          if (m) return (0, o.createElement)(h.Z, null);
          if (d) return (0, o.createElement)(u.SummaryListPlaceholder, { numberOfItems: e.length });
          const { compare: y } = (0, p.getDateParamsFromQuery)(t, l);
          return (0, o.createElement)(u.SummaryList, null, ({ onToggle: t }) =>
            e.map(e => {
              const {
                  key: s,
                  order: l,
                  orderby: m,
                  label: d,
                  type: p,
                  isReverseTrend: h,
                  labelTooltipText: b,
                } = e,
                g = { chart: s };
              m && (g.orderby = m), l && (g.order = l);
              const f = (0, c.getNewPath)(g),
                w = r.key === s,
                { delta: v, prevValue: C, value: k } = this.getValues(s, p);
              return (0, o.createElement)(u.SummaryNumber, {
                key: s,
                delta: v,
                href: f,
                label: d,
                reverseTrend: h,
                prevLabel:
                  'previous_period' === y
                    ? (0, a.__)('Previous period:', 'woocommerce')
                    : (0, a.__)('Previous year:', 'woocommerce'),
                prevValue: C,
                selected: w,
                value: k,
                labelTooltipText: b,
                onLinkClickCallback: () => {
                  t && t(),
                    (0, _.recordEvent)('analytics_chart_tab_click', { report: i || n, key: s });
                },
              });
            }),
          );
        }
      }
      (b.propTypes = {
        charts: l().array.isRequired,
        endpoint: l().string.isRequired,
        limitProperties: l().array,
        query: l().object.isRequired,
        selectedChart: l().shape({
          key: l().string.isRequired,
          label: l().string.isRequired,
          order: l().oneOf(['asc', 'desc']),
          orderby: l().string,
          type: l().oneOf(['average', 'number', 'currency']).isRequired,
        }).isRequired,
        summaryData: l().object,
        report: l().string,
      }),
        (b.defaultProps = { summaryData: { totals: { primary: {}, secondary: {} }, isError: !1 } }),
        (b.contextType = y.CurrencyContext);
      const g = (0, s.compose)(
        (0, n.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: o,
              limitProperties: a,
              query: s,
              filters: n,
              advancedFilters: i,
            } = t,
            l = a || [o],
            c = l.some(e => s[e] && s[e].length);
          if (s.search && !c) return { emptySearchResults: !0 };
          const u = r && r.map(e => e.key),
            { woocommerce_default_date_range: m } = e(d.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            );
          return {
            summaryData: (0, d.getSummaryNumbers)({
              endpoint: o,
              query: s,
              select: e,
              limitBy: l,
              filters: n,
              advancedFilters: i,
              defaultDateRange: m,
              fields: u,
            }),
            defaultDateRange: m,
          };
        }),
      )(b);
    },
    12181: (e, t, r) => {
      r.r(t), r.d(t, { default: () => k });
      var o = r(69307),
        a = r(7862),
        s = r.n(a),
        n = r(65736),
        i = r(25447),
        l = r(83573),
        c = r(92819),
        u = r(86020),
        m = r(81595),
        d = r(10431),
        p = r(81921),
        _ = r(17844),
        y = r(42968),
        h = r(17062);
      class b extends o.Component {
        constructor() {
          super(),
            (this.getHeadersContent = this.getHeadersContent.bind(this)),
            (this.getRowsContent = this.getRowsContent.bind(this)),
            (this.getSummary = this.getSummary.bind(this));
        }
        getHeadersContent() {
          return [
            {
              label: (0, n.__)('Date', 'woocommerce'),
              key: 'date',
              required: !0,
              defaultSort: !0,
              isLeftAligned: !0,
              isSortable: !0,
            },
            {
              label: (0, n.__)('Order #', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Order Number', 'woocommerce'),
              key: 'order_number',
              required: !0,
            },
            {
              label: (0, n.__)('Status', 'woocommerce'),
              key: 'status',
              required: !1,
              isSortable: !1,
            },
            {
              label: (0, n.__)('Customer', 'woocommerce'),
              key: 'customer_id',
              required: !1,
              isSortable: !1,
            },
            {
              label: (0, n.__)('Customer type', 'woocommerce'),
              key: 'customer_type',
              required: !1,
              isSortable: !1,
            },
            {
              label: (0, n.__)('Product(s)', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Products', 'woocommerce'),
              key: 'products',
              required: !1,
              isSortable: !1,
            },
            {
              label: (0, n.__)('Items sold', 'woocommerce'),
              key: 'num_items_sold',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Coupon(s)', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Coupons', 'woocommerce'),
              key: 'coupons',
              required: !1,
              isSortable: !1,
            },
            {
              label: (0, n.__)('Net sales', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Net sales', 'woocommerce'),
              key: 'net_total',
              required: !0,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Attribution', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Attribution', 'woocommerce'),
              key: 'attribution',
              required: !1,
              isSortable: !1,
            },
          ];
        }
        getCustomerName(e) {
          const { first_name: t, last_name: r } = e || {};
          return t || r ? [t, r].join(' ') : '';
        }
        getRowsContent(e) {
          const { query: t } = this.props,
            r = (0, d.getPersistedQuery)(t),
            a = (0, h.O3)('dateFormat', p.defaultTableDateFormat),
            { render: s, getCurrencyConfig: i } = this.context;
          return (0, c.map)(e, e => {
            const {
                currency: t,
                date: l,
                net_total: c,
                num_items_sold: p,
                order_id: _,
                order_number: y,
                parent_id: b,
                status: g,
                customer_type: f,
              } = e,
              w = e.extended_info || {},
              { coupons: v, customer: C, products: k } = w,
              q = k
                .sort((e, t) => t.quantity - e.quantity)
                .map(e => ({
                  label: e.name,
                  quantity: e.quantity,
                  href: (0, d.getNewPath)(r, '/analytics/products', {
                    filter: 'single_product',
                    products: e.id,
                  }),
                })),
              S = v.map(e => ({
                label: e.code,
                href: (0, d.getNewPath)(r, '/analytics/coupons', {
                  filter: 'single_coupon',
                  coupons: e.id,
                }),
              }));
            return [
              { display: (0, o.createElement)(u.Date, { date: l, visibleFormat: a }), value: l },
              {
                display: (0, o.createElement)(
                  u.Link,
                  {
                    href:
                      'post.php?post=' + (b || _) + '&action=edit' + (b ? '#order_refunds' : ''),
                    type: 'wp-admin',
                  },
                  y,
                ),
                value: y,
              },
              {
                display: (0, o.createElement)(u.OrderStatus, {
                  className: 'woocommerce-orders-table__status',
                  order: { status: g },
                  labelPositionToLeft: !0,
                  orderStatusMap: (0, h.O3)('orderStatuses', {}),
                }),
                value: g,
              },
              { display: this.getCustomerName(C), value: this.getCustomerName(C) },
              { display: ((E = f), E.charAt(0).toUpperCase() + E.slice(1)), value: f },
              {
                display: this.renderList(
                  q.length ? [q[0]] : [],
                  q.map(e => ({
                    label: (0, n.sprintf)(
                      (0, n.__)('%1$s× %2$s', 'woocommerce'),
                      e.quantity,
                      e.label,
                    ),
                    href: e.href,
                  })),
                ),
                value: q
                  .map(({ quantity: e, label: t }) =>
                    (0, n.sprintf)((0, n.__)('%1$s× %2$s', 'woocommerce'), e, t),
                  )
                  .join(', '),
              },
              { display: (0, m.formatValue)(i(), 'number', p), value: p },
              {
                display: this.renderList(S.length ? [S[0]] : [], S),
                value: S.map(e => e.label).join(', '),
              },
              { display: s(c, t), value: c },
              { display: w.attribution.origin, value: w.attribution.origin },
            ];
            var E;
          });
        }
        getSummary(e) {
          const {
              orders_count: t = 0,
              total_customers: r = 0,
              products: o = 0,
              num_items_sold: a = 0,
              coupons_count: s = 0,
              net_revenue: i = 0,
            } = e,
            { formatAmount: l, getCurrencyConfig: c } = this.context,
            u = c();
          return [
            {
              label: (0, n._n)('Order', 'Orders', t, 'woocommerce'),
              value: (0, m.formatValue)(u, 'number', t),
            },
            {
              label: (0, n._n)(' Customer', ' Customers', r, 'woocommerce'),
              value: (0, m.formatValue)(u, 'number', r),
            },
            {
              label: (0, n._n)('Product', 'Products', o, 'woocommerce'),
              value: (0, m.formatValue)(u, 'number', o),
            },
            {
              label: (0, n._n)('Item sold', 'Items sold', a, 'woocommerce'),
              value: (0, m.formatValue)(u, 'number', a),
            },
            {
              label: (0, n._n)('Coupon', 'Coupons', s, 'woocommerce'),
              value: (0, m.formatValue)(u, 'number', s),
            },
            { label: (0, n.__)('net sales', 'woocommerce'), value: l(i) },
          ];
        }
        renderLinks(e = []) {
          return e.map((e, t) =>
            (0, o.createElement)(u.Link, { href: e.href, key: t, type: 'wc-admin' }, e.label),
          );
        }
        renderList(e, t) {
          return (0, o.createElement)(
            o.Fragment,
            null,
            this.renderLinks(e),
            t.length > 1 && (0, o.createElement)(u.ViewMoreList, { items: this.renderLinks(t) }),
          );
        }
        render() {
          const { query: e, filters: t, advancedFilters: r } = this.props;
          return (0, o.createElement)(y.Z, {
            endpoint: 'orders',
            getHeadersContent: this.getHeadersContent,
            getRowsContent: this.getRowsContent,
            getSummary: this.getSummary,
            summaryFields: [
              'orders_count',
              'total_customers',
              'products',
              'num_items_sold',
              'coupons_count',
              'net_revenue',
            ],
            query: e,
            tableQuery: { extended_info: !0 },
            title: (0, n.__)('Orders', 'woocommerce'),
            columnPrefsKey: 'orders_report_columns',
            filters: t,
            advancedFilters: r,
          });
        }
      }
      b.contextType = _.CurrencyContext;
      const g = b;
      var f = r(47478),
        w = r(80272),
        v = r(31511),
        C = r(40116);
      class k extends o.Component {
        render() {
          const { path: e, query: t } = this.props;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(v.Z, {
              query: t,
              path: e,
              filters: i.u8,
              advancedFilters: i.be,
              report: 'orders',
            }),
            (0, o.createElement)(w.Z, {
              charts: i.O3,
              endpoint: 'orders',
              query: t,
              selectedChart: (0, l.Z)(t.chart, i.O3),
              filters: i.u8,
              advancedFilters: i.be,
            }),
            (0, o.createElement)(f.Z, {
              charts: i.O3,
              endpoint: 'orders',
              path: e,
              query: t,
              selectedChart: (0, l.Z)(t.chart, i.O3),
              filters: i.u8,
              advancedFilters: i.be,
            }),
            (0, o.createElement)(g, { query: t, filters: i.u8, advancedFilters: i.be }),
            (0, o.createElement)(C.I, {
              optionName: 'woocommerce_orders_report_date_tour_shown',
              headingText: (0, n.__)(
                'Orders are now reported based on the payment dates ✅',
                'woocommerce',
              ),
            }),
          );
        }
      }
      k.propTypes = { path: s().string.isRequired, query: s().object.isRequired };
    },
    40116: (e, t, r) => {
      r.d(t, { I: () => u });
      var o = r(86020),
        a = r(65736),
        s = r(67221),
        n = r(69307),
        i = r(9818),
        l = r(74617);
      const c = 'woocommerce_date_type',
        u = ({ optionName: e, headingText: t }) => {
          const [r, u] = (0, n.useState)(!1),
            { updateOptions: m } = (0, i.useDispatch)(s.OPTIONS_STORE_NAME),
            { shouldShowTour: d, isResolving: p } = (0, i.useSelect)(t => {
              const { getOption: r, hasFinishedResolution: o } = t(s.OPTIONS_STORE_NAME);
              return {
                shouldShowTour: 'yes' !== r(e) && !1 === r(c),
                isResolving: !(o('getOption', [e]) && o('getOption', [c])),
              };
            });
          if (r || !d || p) return null;
          const _ = {
            steps: [
              {
                referenceElements: {
                  desktop: '.woocommerce-filters-filter > .components-dropdown',
                },
                focusElement: { desktop: '.woocommerce-filters-filter > .components-dropdown' },
                meta: {
                  name: 'product-feedback-',
                  heading: t,
                  descriptions: {
                    desktop: (0, n.createInterpolateElement)(
                      (0, a.__)(
                        'We now collect orders in this table based on when the payment went through, rather than when they were placed. You can change this in <link>settings</link>.',
                        'woocommerce',
                      ),
                      {
                        link: (0, n.createElement)('a', {
                          href: (0, l.getAdminLink)(
                            'admin.php?page=wc-admin&path=/analytics/settings',
                          ),
                          'aria-label': (0, a.__)('Analytics date settings', 'woocommerce'),
                        }),
                      },
                    ),
                  },
                  primaryButton: { text: (0, a.__)('Got it', 'woocommerce') },
                },
                options: { classNames: { desktop: 'woocommerce-revenue-report-date-tour' } },
              },
            ],
            closeHandler: () => {
              m({ [e]: 'yes' }), u(!0);
            },
          };
          return (0, n.createElement)(o.TourKit, { config: _ });
        };
    },
    83573: (e, t, r) => {
      r.d(t, { Z: () => a });
      var o = r(92819);
      function a(e, t = []) {
        return (0, o.find)(t, { key: e }) || t[0];
      }
    },
  },
]);
