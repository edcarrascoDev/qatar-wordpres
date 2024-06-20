'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [6924],
  {
    47478: (e, t, r) => {
      r.d(t, { Z: () => w });
      var o = r(69307),
        a = r(65736),
        l = r(94333),
        c = r(69771),
        s = r(9818),
        i = r(92819),
        n = r(7862),
        m = r.n(n),
        u = r(86020),
        d = r(67221),
        p = r(81921),
        _ = r(17844),
        f = r(15152),
        y = r(10431);
      function b(e, t, r = {}) {
        if (!e || 0 === e.length) return null;
        const o = e.slice(0),
          a = o.pop();
        if (a.showFilters(t, r)) {
          const e = (0, y.flattenFilters)(a.filters),
            r = t[a.param] || a.defaultValue || 'all';
          return (0, i.find)(e, { value: r });
        }
        return b(o, t, r);
      }
      function g(e) {
        return t => (0, c.format)(e, t);
      }
      class h extends o.Component {
        shouldComponentUpdate(e) {
          return (
            e.isRequesting !== this.props.isRequesting ||
            e.primaryData.isRequesting !== this.props.primaryData.isRequesting ||
            e.secondaryData.isRequesting !== this.props.secondaryData.isRequesting ||
            !(0, i.isEqual)(e.query, this.props.query)
          );
        }
        getItemChartData() {
          const { primaryData: e, selectedChart: t } = this.props;
          return e.data.intervals.map(function(e) {
            const r = {};
            return (
              e.subtotals.segments.forEach(function(e) {
                if (e.segment_label) {
                  const o = r[e.segment_label]
                    ? e.segment_label + ' (#' + e.segment_id + ')'
                    : e.segment_label;
                  r[e.segment_id] = { label: o, value: e.subtotals[t.key] || 0 };
                }
              }),
              { date: (0, c.format)('Y-m-d\\TH:i:s', e.date_start), ...r }
            );
          });
        }
        getTimeChartData() {
          const {
              query: e,
              primaryData: t,
              secondaryData: r,
              selectedChart: o,
              defaultDateRange: a,
            } = this.props,
            l = (0, p.getIntervalForQuery)(e, a),
            { primary: s, secondary: i } = (0, p.getCurrentDates)(e, a);
          return t.data.intervals.map(function(t, a) {
            const n = (0, p.getPreviousDate)(t.date_start, s.after, i.after, e.compare, l),
              m = r.data.intervals[a];
            return {
              date: (0, c.format)('Y-m-d\\TH:i:s', t.date_start),
              primary: {
                label: `${s.label} (${s.range})`,
                labelDate: t.date_start,
                value: t.subtotals[o.key] || 0,
              },
              secondary: {
                label: `${i.label} (${i.range})`,
                labelDate: n.format('YYYY-MM-DD HH:mm:ss'),
                value: (m && m.subtotals[o.key]) || 0,
              },
            };
          });
        }
        getTimeChartTotals() {
          const { primaryData: e, secondaryData: t, selectedChart: r } = this.props;
          return {
            primary: (0, i.get)(e, ['data', 'totals', r.key], null),
            secondary: (0, i.get)(t, ['data', 'totals', r.key], null),
          };
        }
        renderChart(e, t, r, l) {
          const {
              emptySearchResults: c,
              filterParam: s,
              interactiveLegend: i,
              itemsLabel: n,
              legendPosition: m,
              path: _,
              query: f,
              selectedChart: y,
              showHeaderControls: b,
              primaryData: h,
              defaultDateRange: w,
            } = this.props,
            v = (0, p.getIntervalForQuery)(f, w),
            C = (0, p.getAllowedIntervalsForQuery)(f, w),
            S = (0, p.getDateFormatsForInterval)(v, h.data.intervals.length, { type: 'php' }),
            R = c
              ? (0, a.__)('No data for the current search', 'woocommerce')
              : (0, a.__)('No data for the selected date range', 'woocommerce'),
            { formatAmount: x, getCurrencyConfig: D } = this.context;
          return (0, o.createElement)(u.Chart, {
            allowedIntervals: C,
            data: r,
            dateParser: '%Y-%m-%dT%H:%M:%S',
            emptyMessage: R,
            filterParam: s,
            interactiveLegend: i,
            interval: v,
            isRequesting: t,
            itemsLabel: n,
            legendPosition: m,
            legendTotals: l,
            mode: e,
            path: _,
            query: f,
            screenReaderFormat: g(S.screenReaderFormat),
            showHeaderControls: b,
            title: y.label,
            tooltipLabelFormat: g(S.tooltipLabelFormat),
            tooltipTitle: ('time-comparison' === e && y.label) || null,
            tooltipValueFormat: (0, d.getTooltipValueFormat)(y.type, x),
            chartType: (0, p.getChartTypeForQuery)(f),
            valueType: y.type,
            xFormat: g(S.xFormat),
            x2Format: g(S.x2Format),
            currency: D(),
          });
        }
        renderItemComparison() {
          const { isRequesting: e, primaryData: t } = this.props;
          if (t.isError) return (0, o.createElement)(f.Z, null);
          const r = e || t.isRequesting,
            a = this.getItemChartData();
          return this.renderChart('item-comparison', r, a);
        }
        renderTimeComparison() {
          const { isRequesting: e, primaryData: t, secondaryData: r } = this.props;
          if (!t || t.isError || r.isError) return (0, o.createElement)(f.Z, null);
          const a = e || t.isRequesting || r.isRequesting,
            l = this.getTimeChartData(),
            c = this.getTimeChartTotals();
          return this.renderChart('time-comparison', a, l, c);
        }
        render() {
          const { mode: e } = this.props;
          return 'item-comparison' === e
            ? this.renderItemComparison()
            : this.renderTimeComparison();
        }
      }
      (h.contextType = _.CurrencyContext),
        (h.propTypes = {
          filters: m().array,
          isRequesting: m().bool,
          itemsLabel: m().string,
          limitProperties: m().array,
          mode: m().string,
          path: m().string.isRequired,
          primaryData: m().object,
          query: m().object.isRequired,
          secondaryData: m().object,
          selectedChart: m().shape({
            key: m().string.isRequired,
            label: m().string.isRequired,
            order: m().oneOf(['asc', 'desc']),
            orderby: m().string,
            type: m().oneOf(['average', 'number', 'currency']).isRequired,
          }).isRequired,
        }),
        (h.defaultProps = {
          isRequesting: !1,
          primaryData: { data: { intervals: [] }, isError: !1, isRequesting: !1 },
          secondaryData: { data: { intervals: [] }, isError: !1, isRequesting: !1 },
        });
      const w = (0, l.compose)(
        (0, s.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: o,
              filters: a,
              isRequesting: l,
              limitProperties: c,
              query: s,
              advancedFilters: n,
            } = t,
            m = c || [o],
            u = b(a, s),
            p = (0, i.get)(u, ['settings', 'param']),
            _ =
              t.mode ||
              (function(e, t) {
                if (e && t) {
                  const r = (0, i.get)(e, ['settings', 'param']);
                  if (!r || Object.keys(t).includes(r)) return (0, i.get)(e, ['chartMode']);
                }
                return null;
              })(u, s) ||
              'time-comparison',
            { woocommerce_default_date_range: f } = e(d.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            ),
            y = e(d.REPORTS_STORE_NAME),
            g = { mode: _, filterParam: p, defaultDateRange: f };
          if (l) return g;
          const h = m.some(e => s[e] && s[e].length);
          if (s.search && !h) return { ...g, emptySearchResults: !0 };
          const w = r && r.map(e => e.key),
            v = (0, d.getReportChartData)({
              endpoint: o,
              dataType: 'primary',
              query: s,
              selector: y,
              limitBy: m,
              filters: a,
              advancedFilters: n,
              defaultDateRange: f,
              fields: w,
            });
          if ('item-comparison' === _) return { ...g, primaryData: v };
          const C = (0, d.getReportChartData)({
            endpoint: o,
            dataType: 'secondary',
            query: s,
            selector: y,
            limitBy: m,
            filters: a,
            advancedFilters: n,
            defaultDateRange: f,
            fields: w,
          });
          return { ...g, primaryData: v, secondaryData: C };
        }),
      )(h);
    },
    25447: (e, t, r) => {
      r.d(t, { O3: () => s, be: () => n, u8: () => i });
      var o = r(65736),
        a = r(92694),
        l = r(20513),
        c = r(17062);
      const s = (0, a.applyFilters)('woocommerce_admin_orders_report_charts', [
          { key: 'orders_count', label: (0, o.__)('Orders', 'woocommerce'), type: 'number' },
          {
            key: 'net_revenue',
            label: (0, o.__)('Net sales', 'woocommerce'),
            order: 'desc',
            orderby: 'net_total',
            type: 'currency',
          },
          {
            key: 'avg_order_value',
            label: (0, o.__)('Average order value', 'woocommerce'),
            type: 'currency',
          },
          {
            key: 'avg_items_per_order',
            label: (0, o.__)('Average items per order', 'woocommerce'),
            order: 'desc',
            orderby: 'num_items_sold',
            type: 'average',
          },
        ]),
        i = (0, a.applyFilters)('woocommerce_admin_orders_report_filters', [
          {
            label: (0, o.__)('Show', 'woocommerce'),
            staticParams: ['chartType', 'paged', 'per_page'],
            param: 'filter',
            showFilters: () => !0,
            filters: [
              { label: (0, o.__)('All orders', 'woocommerce'), value: 'all' },
              { label: (0, o.__)('Advanced filters', 'woocommerce'), value: 'advanced' },
            ],
          },
        ]),
        n = (0, a.applyFilters)('woocommerce_admin_orders_report_advanced_filters', {
          title: (0, o._x)(
            'Orders match <select/> filters',
            'A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
          filters: {
            status: {
              labels: {
                add: (0, o.__)('Order status', 'woocommerce'),
                remove: (0, o.__)('Remove order status filter', 'woocommerce'),
                rule: (0, o.__)('Select an order status filter match', 'woocommerce'),
                title: (0, o.__)('<title>Order status</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, o.__)('Select an order status', 'woocommerce'),
              },
              rules: [
                { value: 'is', label: (0, o._x)('Is', 'order status', 'woocommerce') },
                { value: 'is_not', label: (0, o._x)('Is Not', 'order status', 'woocommerce') },
              ],
              input: {
                component: 'SelectControl',
                options: Object.keys(c.rq).map(e => ({ value: e, label: c.rq[e] })),
              },
            },
            product: {
              labels: {
                add: (0, o.__)('Product', 'woocommerce'),
                placeholder: (0, o.__)('Search products', 'woocommerce'),
                remove: (0, o.__)('Remove product filter', 'woocommerce'),
                rule: (0, o.__)('Select a product filter match', 'woocommerce'),
                title: (0, o.__)('<title>Product</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, o.__)('Select products', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, o._x)('Includes', 'products', 'woocommerce') },
                { value: 'excludes', label: (0, o._x)('Excludes', 'products', 'woocommerce') },
              ],
              input: { component: 'Search', type: 'products', getLabels: l.oC },
            },
            variation: {
              labels: {
                add: (0, o.__)('Product variation', 'woocommerce'),
                placeholder: (0, o.__)('Search product variations', 'woocommerce'),
                remove: (0, o.__)('Remove product variation filter', 'woocommerce'),
                rule: (0, o.__)('Select a product variation filter match', 'woocommerce'),
                title: (0, o.__)(
                  '<title>Product variation</title> <rule/> <filter/>',
                  'woocommerce',
                ),
                filter: (0, o.__)('Select variation', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, o._x)('Includes', 'variations', 'woocommerce') },
                { value: 'excludes', label: (0, o._x)('Excludes', 'variations', 'woocommerce') },
              ],
              input: { component: 'Search', type: 'variations', getLabels: l.uC },
            },
            coupon: {
              labels: {
                add: (0, o.__)('Coupon code', 'woocommerce'),
                placeholder: (0, o.__)('Search coupons', 'woocommerce'),
                remove: (0, o.__)('Remove coupon filter', 'woocommerce'),
                rule: (0, o.__)('Select a coupon filter match', 'woocommerce'),
                title: (0, o.__)('<title>Coupon code</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, o.__)('Select coupon codes', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, o._x)('Includes', 'coupon code', 'woocommerce') },
                { value: 'excludes', label: (0, o._x)('Excludes', 'coupon code', 'woocommerce') },
              ],
              input: { component: 'Search', type: 'coupons', getLabels: l.hQ },
            },
            customer_type: {
              labels: {
                add: (0, o.__)('Customer type', 'woocommerce'),
                remove: (0, o.__)('Remove customer filter', 'woocommerce'),
                rule: (0, o.__)('Select a customer filter match', 'woocommerce'),
                title: (0, o.__)('<title>Customer is</title> <filter/>', 'woocommerce'),
                filter: (0, o.__)('Select a customer type', 'woocommerce'),
              },
              input: {
                component: 'SelectControl',
                options: [
                  { value: 'new', label: (0, o.__)('New', 'woocommerce') },
                  { value: 'returning', label: (0, o.__)('Returning', 'woocommerce') },
                ],
                defaultOption: 'new',
              },
            },
            refunds: {
              labels: {
                add: (0, o.__)('Refund', 'woocommerce'),
                remove: (0, o.__)('Remove refund filter', 'woocommerce'),
                rule: (0, o.__)('Select a refund filter match', 'woocommerce'),
                title: (0, o.__)('<title>Refund</title> <filter/>', 'woocommerce'),
                filter: (0, o.__)('Select a refund type', 'woocommerce'),
              },
              input: {
                component: 'SelectControl',
                options: [
                  { value: 'all', label: (0, o.__)('All', 'woocommerce') },
                  { value: 'partial', label: (0, o.__)('Partially refunded', 'woocommerce') },
                  { value: 'full', label: (0, o.__)('Fully refunded', 'woocommerce') },
                  { value: 'none', label: (0, o.__)('None', 'woocommerce') },
                ],
                defaultOption: 'all',
              },
            },
            tax_rate: {
              labels: {
                add: (0, o.__)('Tax rate', 'woocommerce'),
                placeholder: (0, o.__)('Search tax rates', 'woocommerce'),
                remove: (0, o.__)('Remove tax rate filter', 'woocommerce'),
                rule: (0, o.__)('Select a tax rate filter match', 'woocommerce'),
                title: (0, o.__)('<title>Tax Rate</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, o.__)('Select tax rates', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, o._x)('Includes', 'tax rate', 'woocommerce') },
                { value: 'excludes', label: (0, o._x)('Excludes', 'tax rate', 'woocommerce') },
              ],
              input: { component: 'Search', type: 'taxes', getLabels: l.FI },
            },
            attribute: {
              allowMultiple: !0,
              labels: {
                add: (0, o.__)('Product attribute', 'woocommerce'),
                placeholder: (0, o.__)('Search product attributes', 'woocommerce'),
                remove: (0, o.__)('Remove product attribute filter', 'woocommerce'),
                rule: (0, o.__)('Select a product attribute filter match', 'woocommerce'),
                title: (0, o.__)(
                  '<title>Product attribute</title> <rule/> <filter/>',
                  'woocommerce',
                ),
                filter: (0, o.__)('Select attributes', 'woocommerce'),
              },
              rules: [
                { value: 'is', label: (0, o._x)('Is', 'product attribute', 'woocommerce') },
                { value: 'is_not', label: (0, o._x)('Is Not', 'product attribute', 'woocommerce') },
              ],
              input: { component: 'ProductAttribute' },
            },
          },
        });
    },
    86806: (e, t, r) => {
      r.d(t, { I: () => a });
      var o = r(65736);
      function a(e) {
        return [e.country, e.state, e.name || (0, o.__)('TAX', 'woocommerce'), e.priority]
          .map(e =>
            e
              .toString()
              .toUpperCase()
              .trim(),
          )
          .filter(Boolean)
          .join('-');
      }
    },
    20513: (e, t, r) => {
      r.d(t, {
        FI: () => y,
        V1: () => b,
        YC: () => d,
        hQ: () => p,
        jk: () => _,
        oC: () => f,
        qc: () => u,
        uC: () => g,
      });
      var o = r(96483),
        a = r(86989),
        l = r.n(a),
        c = r(92819),
        s = r(10431),
        i = r(67221),
        n = r(86806),
        m = r(17062);
      function u(e, t = c.identity) {
        return function(r = '', a) {
          const c = 'function' == typeof e ? e(a) : e,
            i = (0, s.getIdsFromQuery)(r);
          if (i.length < 1) return Promise.resolve([]);
          const n = { include: i.join(','), per_page: i.length };
          return l()({ path: (0, o.addQueryArgs)(c, n) }).then(e => e.map(t));
        };
      }
      u(i.NAMESPACE + '/products/attributes', e => ({ key: e.id, label: e.name }));
      const d = u(i.NAMESPACE + '/products/categories', e => ({ key: e.id, label: e.name })),
        p = u(i.NAMESPACE + '/coupons', e => ({ key: e.id, label: e.code })),
        _ = u(i.NAMESPACE + '/customers', e => ({ key: e.id, label: e.name })),
        f = u(i.NAMESPACE + '/products', e => ({ key: e.id, label: e.name })),
        y = u(i.NAMESPACE + '/taxes', e => ({ key: e.id, label: (0, n.I)(e) }));
      function b({ attributes: e, name: t }) {
        const r = (0, m.O3)('variationTitleAttributesSeparator', ' - ');
        if (t && t.indexOf(r) > -1) return t;
        const o = (e || []).map(({ option: e }) => e).join(', ');
        return o ? t + r + o : t;
      }
      const g = u(
        ({ products: e }) =>
          e ? i.NAMESPACE + `/products/${e}/variations` : i.NAMESPACE + '/variations',
        e => ({ key: e.id, label: b(e) }),
      );
    },
  },
]);
