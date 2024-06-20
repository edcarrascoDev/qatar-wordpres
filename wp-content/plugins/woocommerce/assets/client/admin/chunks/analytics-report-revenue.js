'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [3994],
  {
    47478: (e, t, r) => {
      r.d(t, { Z: () => v });
      var a = r(69307),
        s = r(65736),
        o = r(94333),
        n = r(69771),
        i = r(9818),
        l = r(92819),
        c = r(7862),
        m = r.n(c),
        u = r(86020),
        d = r(67221),
        p = r(81921),
        y = r(17844),
        g = r(15152),
        _ = r(10431);
      function h(e, t, r = {}) {
        if (!e || 0 === e.length) return null;
        const a = e.slice(0),
          s = a.pop();
        if (s.showFilters(t, r)) {
          const e = (0, _.flattenFilters)(s.filters),
            r = t[s.param] || s.defaultValue || 'all';
          return (0, l.find)(e, { value: r });
        }
        return h(a, t, r);
      }
      function f(e) {
        return t => (0, n.format)(e, t);
      }
      class b extends a.Component {
        shouldComponentUpdate(e) {
          return (
            e.isRequesting !== this.props.isRequesting ||
            e.primaryData.isRequesting !== this.props.primaryData.isRequesting ||
            e.secondaryData.isRequesting !== this.props.secondaryData.isRequesting ||
            !(0, l.isEqual)(e.query, this.props.query)
          );
        }
        getItemChartData() {
          const { primaryData: e, selectedChart: t } = this.props;
          return e.data.intervals.map(function(e) {
            const r = {};
            return (
              e.subtotals.segments.forEach(function(e) {
                if (e.segment_label) {
                  const a = r[e.segment_label]
                    ? e.segment_label + ' (#' + e.segment_id + ')'
                    : e.segment_label;
                  r[e.segment_id] = { label: a, value: e.subtotals[t.key] || 0 };
                }
              }),
              { date: (0, n.format)('Y-m-d\\TH:i:s', e.date_start), ...r }
            );
          });
        }
        getTimeChartData() {
          const {
              query: e,
              primaryData: t,
              secondaryData: r,
              selectedChart: a,
              defaultDateRange: s,
            } = this.props,
            o = (0, p.getIntervalForQuery)(e, s),
            { primary: i, secondary: l } = (0, p.getCurrentDates)(e, s);
          return t.data.intervals.map(function(t, s) {
            const c = (0, p.getPreviousDate)(t.date_start, i.after, l.after, e.compare, o),
              m = r.data.intervals[s];
            return {
              date: (0, n.format)('Y-m-d\\TH:i:s', t.date_start),
              primary: {
                label: `${i.label} (${i.range})`,
                labelDate: t.date_start,
                value: t.subtotals[a.key] || 0,
              },
              secondary: {
                label: `${l.label} (${l.range})`,
                labelDate: c.format('YYYY-MM-DD HH:mm:ss'),
                value: (m && m.subtotals[a.key]) || 0,
              },
            };
          });
        }
        getTimeChartTotals() {
          const { primaryData: e, secondaryData: t, selectedChart: r } = this.props;
          return {
            primary: (0, l.get)(e, ['data', 'totals', r.key], null),
            secondary: (0, l.get)(t, ['data', 'totals', r.key], null),
          };
        }
        renderChart(e, t, r, o) {
          const {
              emptySearchResults: n,
              filterParam: i,
              interactiveLegend: l,
              itemsLabel: c,
              legendPosition: m,
              path: y,
              query: g,
              selectedChart: _,
              showHeaderControls: h,
              primaryData: b,
              defaultDateRange: v,
            } = this.props,
            R = (0, p.getIntervalForQuery)(g, v),
            w = (0, p.getAllowedIntervalsForQuery)(g, v),
            T = (0, p.getDateFormatsForInterval)(R, b.data.intervals.length, { type: 'php' }),
            q = n
              ? (0, s.__)('No data for the current search', 'woocommerce')
              : (0, s.__)('No data for the selected date range', 'woocommerce'),
            { formatAmount: C, getCurrencyConfig: S } = this.context;
          return (0, a.createElement)(u.Chart, {
            allowedIntervals: w,
            data: r,
            dateParser: '%Y-%m-%dT%H:%M:%S',
            emptyMessage: q,
            filterParam: i,
            interactiveLegend: l,
            interval: R,
            isRequesting: t,
            itemsLabel: c,
            legendPosition: m,
            legendTotals: o,
            mode: e,
            path: y,
            query: g,
            screenReaderFormat: f(T.screenReaderFormat),
            showHeaderControls: h,
            title: _.label,
            tooltipLabelFormat: f(T.tooltipLabelFormat),
            tooltipTitle: ('time-comparison' === e && _.label) || null,
            tooltipValueFormat: (0, d.getTooltipValueFormat)(_.type, C),
            chartType: (0, p.getChartTypeForQuery)(g),
            valueType: _.type,
            xFormat: f(T.xFormat),
            x2Format: f(T.x2Format),
            currency: S(),
          });
        }
        renderItemComparison() {
          const { isRequesting: e, primaryData: t } = this.props;
          if (t.isError) return (0, a.createElement)(g.Z, null);
          const r = e || t.isRequesting,
            s = this.getItemChartData();
          return this.renderChart('item-comparison', r, s);
        }
        renderTimeComparison() {
          const { isRequesting: e, primaryData: t, secondaryData: r } = this.props;
          if (!t || t.isError || r.isError) return (0, a.createElement)(g.Z, null);
          const s = e || t.isRequesting || r.isRequesting,
            o = this.getTimeChartData(),
            n = this.getTimeChartTotals();
          return this.renderChart('time-comparison', s, o, n);
        }
        render() {
          const { mode: e } = this.props;
          return 'item-comparison' === e
            ? this.renderItemComparison()
            : this.renderTimeComparison();
        }
      }
      (b.contextType = y.CurrencyContext),
        (b.propTypes = {
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
        (b.defaultProps = {
          isRequesting: !1,
          primaryData: { data: { intervals: [] }, isError: !1, isRequesting: !1 },
          secondaryData: { data: { intervals: [] }, isError: !1, isRequesting: !1 },
        });
      const v = (0, o.compose)(
        (0, i.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: a,
              filters: s,
              isRequesting: o,
              limitProperties: n,
              query: i,
              advancedFilters: c,
            } = t,
            m = n || [a],
            u = h(s, i),
            p = (0, l.get)(u, ['settings', 'param']),
            y =
              t.mode ||
              (function(e, t) {
                if (e && t) {
                  const r = (0, l.get)(e, ['settings', 'param']);
                  if (!r || Object.keys(t).includes(r)) return (0, l.get)(e, ['chartMode']);
                }
                return null;
              })(u, i) ||
              'time-comparison',
            { woocommerce_default_date_range: g } = e(d.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            ),
            _ = e(d.REPORTS_STORE_NAME),
            f = { mode: y, filterParam: p, defaultDateRange: g };
          if (o) return f;
          const b = m.some(e => i[e] && i[e].length);
          if (i.search && !b) return { ...f, emptySearchResults: !0 };
          const v = r && r.map(e => e.key),
            R = (0, d.getReportChartData)({
              endpoint: a,
              dataType: 'primary',
              query: i,
              selector: _,
              limitBy: m,
              filters: s,
              advancedFilters: c,
              defaultDateRange: g,
              fields: v,
            });
          if ('item-comparison' === y) return { ...f, primaryData: R };
          const w = (0, d.getReportChartData)({
            endpoint: a,
            dataType: 'secondary',
            query: i,
            selector: _,
            limitBy: m,
            filters: s,
            advancedFilters: c,
            defaultDateRange: g,
            fields: v,
          });
          return { ...f, primaryData: R, secondaryData: w };
        }),
      )(b);
    },
    80272: (e, t, r) => {
      r.d(t, { Z: () => f });
      var a = r(69307),
        s = r(65736),
        o = r(94333),
        n = r(9818),
        i = r(7862),
        l = r.n(i),
        c = r(10431),
        m = r(86020),
        u = r(81595),
        d = r(67221),
        p = r(81921),
        y = r(14599),
        g = r(17844),
        _ = r(15152);
      class h extends a.Component {
        formatVal(e, t) {
          const { formatAmount: r, getCurrencyConfig: a } = this.context;
          return 'currency' === t ? r(e) : (0, u.formatValue)(a(), t, e);
        }
        getValues(e, t) {
          const { emptySearchResults: r, summaryData: a } = this.props,
            { totals: s } = a,
            o = s.primary ? s.primary[e] : 0,
            n = s.secondary ? s.secondary[e] : 0,
            i = r ? 0 : o,
            l = r ? 0 : n;
          return {
            delta: (0, u.calculateDelta)(i, l),
            prevValue: this.formatVal(l, t),
            value: this.formatVal(i, t),
          };
        }
        render() {
          const {
              charts: e,
              query: t,
              selectedChart: r,
              summaryData: o,
              endpoint: n,
              report: i,
              defaultDateRange: l,
            } = this.props,
            { isError: u, isRequesting: d } = o;
          if (u) return (0, a.createElement)(_.Z, null);
          if (d) return (0, a.createElement)(m.SummaryListPlaceholder, { numberOfItems: e.length });
          const { compare: g } = (0, p.getDateParamsFromQuery)(t, l);
          return (0, a.createElement)(m.SummaryList, null, ({ onToggle: t }) =>
            e.map(e => {
              const {
                  key: o,
                  order: l,
                  orderby: u,
                  label: d,
                  type: p,
                  isReverseTrend: _,
                  labelTooltipText: h,
                } = e,
                f = { chart: o };
              u && (f.orderby = u), l && (f.order = l);
              const b = (0, c.getNewPath)(f),
                v = r.key === o,
                { delta: R, prevValue: w, value: T } = this.getValues(o, p);
              return (0, a.createElement)(m.SummaryNumber, {
                key: o,
                delta: R,
                href: b,
                label: d,
                reverseTrend: _,
                prevLabel:
                  'previous_period' === g
                    ? (0, s.__)('Previous period:', 'woocommerce')
                    : (0, s.__)('Previous year:', 'woocommerce'),
                prevValue: w,
                selected: v,
                value: T,
                labelTooltipText: h,
                onLinkClickCallback: () => {
                  t && t(),
                    (0, y.recordEvent)('analytics_chart_tab_click', { report: i || n, key: o });
                },
              });
            }),
          );
        }
      }
      (h.propTypes = {
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
        (h.defaultProps = { summaryData: { totals: { primary: {}, secondary: {} }, isError: !1 } }),
        (h.contextType = g.CurrencyContext);
      const f = (0, o.compose)(
        (0, n.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: a,
              limitProperties: s,
              query: o,
              filters: n,
              advancedFilters: i,
            } = t,
            l = s || [a],
            c = l.some(e => o[e] && o[e].length);
          if (o.search && !c) return { emptySearchResults: !0 };
          const m = r && r.map(e => e.key),
            { woocommerce_default_date_range: u } = e(d.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            );
          return {
            summaryData: (0, d.getSummaryNumbers)({
              endpoint: a,
              query: o,
              select: e,
              limitBy: l,
              filters: n,
              advancedFilters: i,
              defaultDateRange: u,
              fields: m,
            }),
            defaultDateRange: u,
          };
        }),
      )(h);
    },
    74457: (e, t, r) => {
      r.d(t, { O3: () => o, be: () => n, u8: () => l });
      var a = r(65736),
        s = r(92694);
      const o = (0, s.applyFilters)('woocommerce_admin_revenue_report_charts', [
          {
            key: 'gross_sales',
            label: (0, a.__)('Gross sales', 'woocommerce'),
            order: 'desc',
            orderby: 'gross_sales',
            type: 'currency',
            isReverseTrend: !1,
          },
          {
            key: 'refunds',
            label: (0, a.__)('Returns', 'woocommerce'),
            order: 'desc',
            orderby: 'refunds',
            type: 'currency',
            isReverseTrend: !0,
          },
          {
            key: 'coupons',
            label: (0, a.__)('Coupons', 'woocommerce'),
            order: 'desc',
            orderby: 'coupons',
            type: 'currency',
            isReverseTrend: !1,
          },
          {
            key: 'net_revenue',
            label: (0, a.__)('Net sales', 'woocommerce'),
            orderby: 'net_revenue',
            type: 'currency',
            isReverseTrend: !1,
            labelTooltipText: (0, a.__)(
              'Full refunds are not deducted from tax or net sales totals',
              'woocommerce',
            ),
          },
          {
            key: 'taxes',
            label: (0, a.__)('Taxes', 'woocommerce'),
            order: 'desc',
            orderby: 'taxes',
            type: 'currency',
            isReverseTrend: !1,
            labelTooltipText: (0, a.__)(
              'Full refunds are not deducted from tax or net sales totals',
              'woocommerce',
            ),
          },
          {
            key: 'shipping',
            label: (0, a.__)('Shipping', 'woocommerce'),
            orderby: 'shipping',
            type: 'currency',
            isReverseTrend: !1,
          },
          {
            key: 'total_sales',
            label: (0, a.__)('Total sales', 'woocommerce'),
            order: 'desc',
            orderby: 'total_sales',
            type: 'currency',
            isReverseTrend: !1,
          },
        ]),
        n = (0, s.applyFilters)('woocommerce_admin_revenue_report_advanced_filters', {
          filters: {},
          title: (0, a._x)(
            'Revenue Matches <select/> Filters',
            'A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
            'woocommerce',
          ),
        }),
        i = [];
      Object.keys(n.filters).length &&
        (i.push({ label: (0, a.__)('All Revenue', 'woocommerce'), value: 'all' }),
        i.push({ label: (0, a.__)('Advanced Filters', 'woocommerce'), value: 'advanced' }));
      const l = (0, s.applyFilters)('woocommerce_admin_revenue_report_filters', [
        {
          label: (0, a.__)('Show', 'woocommerce'),
          staticParams: ['chartType', 'paged', 'per_page'],
          param: 'filter',
          showFilters: () => i.length > 0,
          filters: i,
        },
      ]);
    },
    28056: (e, t, r) => {
      r.r(t), r.d(t, { default: () => x });
      var a = r(69307),
        s = r(7862),
        o = r.n(s),
        n = r(65736),
        i = r(74457),
        l = r(83573),
        c = r(47478),
        m = r(80272),
        u = r(69771),
        d = r(9818),
        p = r(94333),
        y = r(92819),
        g = r(86020),
        _ = r(81595),
        h = r(67221),
        f = r(81921),
        b = r(67905),
        v = r(17844),
        R = r(42968),
        w = r(17062);
      const T = [],
        q = [
          'orders_count',
          'gross_sales',
          'total_sales',
          'refunds',
          'coupons',
          'taxes',
          'shipping',
          'net_revenue',
        ];
      class C extends a.Component {
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
              label: (0, n.__)('Orders', 'woocommerce'),
              key: 'orders_count',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Gross sales', 'woocommerce'),
              key: 'gross_sales',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Returns', 'woocommerce'),
              key: 'refunds',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Coupons', 'woocommerce'),
              key: 'coupons',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Net sales', 'woocommerce'),
              key: 'net_revenue',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Taxes', 'woocommerce'),
              key: 'taxes',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Shipping', 'woocommerce'),
              key: 'shipping',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
            {
              label: (0, n.__)('Total sales', 'woocommerce'),
              key: 'total_sales',
              required: !1,
              isSortable: !0,
              isNumeric: !0,
            },
          ];
        }
        getRowsContent(e = []) {
          const t = (0, w.O3)('dateFormat', f.defaultTableDateFormat),
            { formatAmount: r, render: s, formatDecimal: o, getCurrencyConfig: n } = this.context;
          return e.map(e => {
            const {
                coupons: i,
                gross_sales: l,
                total_sales: c,
                net_revenue: m,
                orders_count: d,
                refunds: p,
                shipping: y,
                taxes: h,
              } = e.subtotals,
              f = (0, a.createElement)(
                g.Link,
                {
                  href:
                    `edit.php?post_type=shop_order&order_date_type=${this.props.dateType}&m=` +
                    (0, u.format)('Ymd', e.date_start),
                  type: 'wp-admin',
                },
                (0, _.formatValue)(n(), 'number', d),
              );
            return [
              {
                display: (0, a.createElement)(g.Date, { date: e.date_start, visibleFormat: t }),
                value: e.date_start,
              },
              { display: f, value: Number(d) },
              { display: s(l), value: o(l) },
              { display: r(p), value: o(p) },
              { display: r(i), value: o(i) },
              { display: s(m), value: o(m) },
              { display: s(h), value: o(h) },
              { display: s(y), value: o(y) },
              { display: s(c), value: o(c) },
            ];
          });
        }
        getSummary(e, t = 0) {
          const {
              orders_count: r = 0,
              gross_sales: a = 0,
              total_sales: s = 0,
              refunds: o = 0,
              coupons: i = 0,
              taxes: l = 0,
              shipping: c = 0,
              net_revenue: m = 0,
            } = e,
            { formatAmount: u, getCurrencyConfig: d } = this.context,
            p = d();
          return [
            {
              label: (0, n._n)('day', 'days', t, 'woocommerce'),
              value: (0, _.formatValue)(p, 'number', t),
            },
            {
              label: (0, n._n)('order', 'orders', r, 'woocommerce'),
              value: (0, _.formatValue)(p, 'number', r),
            },
            { label: (0, n.__)('Gross sales', 'woocommerce'), value: u(a) },
            { label: (0, n.__)('Returns', 'woocommerce'), value: u(o) },
            { label: (0, n.__)('Coupons', 'woocommerce'), value: u(i) },
            { label: (0, n.__)('Net sales', 'woocommerce'), value: u(m) },
            { label: (0, n.__)('Taxes', 'woocommerce'), value: u(l) },
            { label: (0, n.__)('Shipping', 'woocommerce'), value: u(c) },
            { label: (0, n.__)('Total sales', 'woocommerce'), value: u(s) },
          ];
        }
        render() {
          const { advancedFilters: e, filters: t, tableData: r, query: s } = this.props;
          return (0, a.createElement)(R.Z, {
            endpoint: 'revenue',
            getHeadersContent: this.getHeadersContent,
            getRowsContent: this.getRowsContent,
            getSummary: this.getSummary,
            summaryFields: q,
            query: s,
            tableData: r,
            title: (0, n.__)('Revenue', 'woocommerce'),
            columnPrefsKey: 'revenue_report_columns',
            filters: t,
            advancedFilters: e,
          });
        }
      }
      C.contextType = v.CurrencyContext;
      const S = (0, y.memoize)(
          (e, t, r, a, s) => ({
            tableData: {
              items: {
                data: (0, y.get)(a, ['data', 'intervals'], T),
                totalResults: (0, y.get)(a, ['totalResults'], 0),
              },
              isError: e,
              isRequesting: t,
              query: r,
            },
            dateType: s,
          }),
          (e, t, r, a, s) =>
            [
              e,
              t,
              (0, b.stringify)(r),
              (0, y.get)(a, ['totalResults'], 0),
              (0, y.get)(a, ['data', 'intervals'], T).length,
              s,
            ].join(':'),
        ),
        D = (0, y.memoize)(
          (e, t, r, a, s) => ({
            interval: 'day',
            orderby: t,
            order: e,
            page: r,
            per_page: a,
            after: (0, f.appendTimestamp)(s.primary.after, 'start'),
            before: (0, f.appendTimestamp)(s.primary.before, 'end'),
          }),
          (e, t, r, a, s) => [e, t, r, a, s.primary.after, s.primary.before].join(':'),
        ),
        E = (0, p.compose)(
          (0, d.withSelect)((e, t) => {
            const { query: r, filters: a, advancedFilters: s } = t,
              { woocommerce_default_date_range: o } = e(h.SETTINGS_STORE_NAME).getSetting(
                'wc_admin',
                'wcAdminSettings',
              ),
              { getOption: n } = e(h.OPTIONS_STORE_NAME),
              i = n('woocommerce_date_type') || 'date_paid',
              l = (0, f.getCurrentDates)(r, o),
              { getReportStats: c, getReportStatsError: m, isResolving: u } = e(
                h.REPORTS_STORE_NAME,
              ),
              d = D(
                r.order || 'desc',
                r.orderby || 'date',
                r.paged || 1,
                r.per_page || h.QUERY_DEFAULTS.pageSize,
                l,
              ),
              p = (0, h.getReportTableQuery)({
                endpoint: 'revenue',
                query: r,
                select: e,
                tableQuery: d,
                filters: a,
                advancedFilters: s,
              }),
              y = c('revenue', p),
              g = Boolean(m('revenue', p)),
              _ = u('getReportStats', ['revenue', p]);
            return S(g, _, d, y, i);
          }),
        )(C);
      var k = r(31511),
        F = r(40116);
      class x extends a.Component {
        render() {
          const { path: e, query: t } = this.props;
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(k.Z, {
              query: t,
              path: e,
              report: 'revenue',
              filters: i.u8,
              advancedFilters: i.be,
            }),
            (0, a.createElement)(m.Z, {
              charts: i.O3,
              endpoint: 'revenue',
              query: t,
              selectedChart: (0, l.Z)(t.chart, i.O3),
              filters: i.u8,
              advancedFilters: i.be,
            }),
            (0, a.createElement)(c.Z, {
              charts: i.O3,
              endpoint: 'revenue',
              path: e,
              query: t,
              selectedChart: (0, l.Z)(t.chart, i.O3),
              filters: i.u8,
              advancedFilters: i.be,
            }),
            (0, a.createElement)(E, { query: t, filters: i.u8, advancedFilters: i.be }),
            (0, a.createElement)(F.I, {
              optionName: 'woocommerce_revenue_report_date_tour_shown',
              headingText: (0, n.__)('Revenue is now reported from paid orders ✅', 'woocommerce'),
            }),
          );
        }
      }
      x.propTypes = { path: o().string.isRequired, query: o().object.isRequired };
    },
    40116: (e, t, r) => {
      r.d(t, { I: () => m });
      var a = r(86020),
        s = r(65736),
        o = r(67221),
        n = r(69307),
        i = r(9818),
        l = r(74617);
      const c = 'woocommerce_date_type',
        m = ({ optionName: e, headingText: t }) => {
          const [r, m] = (0, n.useState)(!1),
            { updateOptions: u } = (0, i.useDispatch)(o.OPTIONS_STORE_NAME),
            { shouldShowTour: d, isResolving: p } = (0, i.useSelect)(t => {
              const { getOption: r, hasFinishedResolution: a } = t(o.OPTIONS_STORE_NAME);
              return {
                shouldShowTour: 'yes' !== r(e) && !1 === r(c),
                isResolving: !(a('getOption', [e]) && a('getOption', [c])),
              };
            });
          if (r || !d || p) return null;
          const y = {
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
                      (0, s.__)(
                        'We now collect orders in this table based on when the payment went through, rather than when they were placed. You can change this in <link>settings</link>.',
                        'woocommerce',
                      ),
                      {
                        link: (0, n.createElement)('a', {
                          href: (0, l.getAdminLink)(
                            'admin.php?page=wc-admin&path=/analytics/settings',
                          ),
                          'aria-label': (0, s.__)('Analytics date settings', 'woocommerce'),
                        }),
                      },
                    ),
                  },
                  primaryButton: { text: (0, s.__)('Got it', 'woocommerce') },
                },
                options: { classNames: { desktop: 'woocommerce-revenue-report-date-tour' } },
              },
            ],
            closeHandler: () => {
              u({ [e]: 'yes' }), m(!0);
            },
          };
          return (0, n.createElement)(a.TourKit, { config: y });
        };
    },
    83573: (e, t, r) => {
      r.d(t, { Z: () => s });
      var a = r(92819);
      function s(e, t = []) {
        return (0, a.find)(t, { key: e }) || t[0];
      }
    },
  },
]);
