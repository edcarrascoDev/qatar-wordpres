'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [4854],
  {
    47478: (e, t, r) => {
      r.d(t, { Z: () => w });
      var a = r(69307),
        o = r(65736),
        s = r(94333),
        n = r(69771),
        l = r(9818),
        i = r(92819),
        c = r(7862),
        m = r.n(c),
        d = r(86020),
        u = r(67221),
        p = r(81921),
        y = r(17844),
        _ = r(15152),
        h = r(10431);
      function g(e, t, r = {}) {
        if (!e || 0 === e.length) return null;
        const a = e.slice(0),
          o = a.pop();
        if (o.showFilters(t, r)) {
          const e = (0, h.flattenFilters)(o.filters),
            r = t[o.param] || o.defaultValue || 'all';
          return (0, i.find)(e, { value: r });
        }
        return g(a, t, r);
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
              defaultDateRange: o,
            } = this.props,
            s = (0, p.getIntervalForQuery)(e, o),
            { primary: l, secondary: i } = (0, p.getCurrentDates)(e, o);
          return t.data.intervals.map(function(t, o) {
            const c = (0, p.getPreviousDate)(t.date_start, l.after, i.after, e.compare, s),
              m = r.data.intervals[o];
            return {
              date: (0, n.format)('Y-m-d\\TH:i:s', t.date_start),
              primary: {
                label: `${l.label} (${l.range})`,
                labelDate: t.date_start,
                value: t.subtotals[a.key] || 0,
              },
              secondary: {
                label: `${i.label} (${i.range})`,
                labelDate: c.format('YYYY-MM-DD HH:mm:ss'),
                value: (m && m.subtotals[a.key]) || 0,
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
        renderChart(e, t, r, s) {
          const {
              emptySearchResults: n,
              filterParam: l,
              interactiveLegend: i,
              itemsLabel: c,
              legendPosition: m,
              path: y,
              query: _,
              selectedChart: h,
              showHeaderControls: g,
              primaryData: b,
              defaultDateRange: w,
            } = this.props,
            v = (0, p.getIntervalForQuery)(_, w),
            C = (0, p.getAllowedIntervalsForQuery)(_, w),
            R = (0, p.getDateFormatsForInterval)(v, b.data.intervals.length, { type: 'php' }),
            S = n
              ? (0, o.__)('No data for the current search', 'woocommerce')
              : (0, o.__)('No data for the selected date range', 'woocommerce'),
            { formatAmount: D, getCurrencyConfig: E } = this.context;
          return (0, a.createElement)(d.Chart, {
            allowedIntervals: C,
            data: r,
            dateParser: '%Y-%m-%dT%H:%M:%S',
            emptyMessage: S,
            filterParam: l,
            interactiveLegend: i,
            interval: v,
            isRequesting: t,
            itemsLabel: c,
            legendPosition: m,
            legendTotals: s,
            mode: e,
            path: y,
            query: _,
            screenReaderFormat: f(R.screenReaderFormat),
            showHeaderControls: g,
            title: h.label,
            tooltipLabelFormat: f(R.tooltipLabelFormat),
            tooltipTitle: ('time-comparison' === e && h.label) || null,
            tooltipValueFormat: (0, u.getTooltipValueFormat)(h.type, D),
            chartType: (0, p.getChartTypeForQuery)(_),
            valueType: h.type,
            xFormat: f(R.xFormat),
            x2Format: f(R.x2Format),
            currency: E(),
          });
        }
        renderItemComparison() {
          const { isRequesting: e, primaryData: t } = this.props;
          if (t.isError) return (0, a.createElement)(_.Z, null);
          const r = e || t.isRequesting,
            o = this.getItemChartData();
          return this.renderChart('item-comparison', r, o);
        }
        renderTimeComparison() {
          const { isRequesting: e, primaryData: t, secondaryData: r } = this.props;
          if (!t || t.isError || r.isError) return (0, a.createElement)(_.Z, null);
          const o = e || t.isRequesting || r.isRequesting,
            s = this.getTimeChartData(),
            n = this.getTimeChartTotals();
          return this.renderChart('time-comparison', o, s, n);
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
      const w = (0, s.compose)(
        (0, l.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: a,
              filters: o,
              isRequesting: s,
              limitProperties: n,
              query: l,
              advancedFilters: c,
            } = t,
            m = n || [a],
            d = g(o, l),
            p = (0, i.get)(d, ['settings', 'param']),
            y =
              t.mode ||
              (function(e, t) {
                if (e && t) {
                  const r = (0, i.get)(e, ['settings', 'param']);
                  if (!r || Object.keys(t).includes(r)) return (0, i.get)(e, ['chartMode']);
                }
                return null;
              })(d, l) ||
              'time-comparison',
            { woocommerce_default_date_range: _ } = e(u.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            ),
            h = e(u.REPORTS_STORE_NAME),
            f = { mode: y, filterParam: p, defaultDateRange: _ };
          if (s) return f;
          const b = m.some(e => l[e] && l[e].length);
          if (l.search && !b) return { ...f, emptySearchResults: !0 };
          const w = r && r.map(e => e.key),
            v = (0, u.getReportChartData)({
              endpoint: a,
              dataType: 'primary',
              query: l,
              selector: h,
              limitBy: m,
              filters: o,
              advancedFilters: c,
              defaultDateRange: _,
              fields: w,
            });
          if ('item-comparison' === y) return { ...f, primaryData: v };
          const C = (0, u.getReportChartData)({
            endpoint: a,
            dataType: 'secondary',
            query: l,
            selector: h,
            limitBy: m,
            filters: o,
            advancedFilters: c,
            defaultDateRange: _,
            fields: w,
          });
          return { ...f, primaryData: v, secondaryData: C };
        }),
      )(b);
    },
    80272: (e, t, r) => {
      r.d(t, { Z: () => f });
      var a = r(69307),
        o = r(65736),
        s = r(94333),
        n = r(9818),
        l = r(7862),
        i = r.n(l),
        c = r(10431),
        m = r(86020),
        d = r(81595),
        u = r(67221),
        p = r(81921),
        y = r(14599),
        _ = r(17844),
        h = r(15152);
      class g extends a.Component {
        formatVal(e, t) {
          const { formatAmount: r, getCurrencyConfig: a } = this.context;
          return 'currency' === t ? r(e) : (0, d.formatValue)(a(), t, e);
        }
        getValues(e, t) {
          const { emptySearchResults: r, summaryData: a } = this.props,
            { totals: o } = a,
            s = o.primary ? o.primary[e] : 0,
            n = o.secondary ? o.secondary[e] : 0,
            l = r ? 0 : s,
            i = r ? 0 : n;
          return {
            delta: (0, d.calculateDelta)(l, i),
            prevValue: this.formatVal(i, t),
            value: this.formatVal(l, t),
          };
        }
        render() {
          const {
              charts: e,
              query: t,
              selectedChart: r,
              summaryData: s,
              endpoint: n,
              report: l,
              defaultDateRange: i,
            } = this.props,
            { isError: d, isRequesting: u } = s;
          if (d) return (0, a.createElement)(h.Z, null);
          if (u) return (0, a.createElement)(m.SummaryListPlaceholder, { numberOfItems: e.length });
          const { compare: _ } = (0, p.getDateParamsFromQuery)(t, i);
          return (0, a.createElement)(m.SummaryList, null, ({ onToggle: t }) =>
            e.map(e => {
              const {
                  key: s,
                  order: i,
                  orderby: d,
                  label: u,
                  type: p,
                  isReverseTrend: h,
                  labelTooltipText: g,
                } = e,
                f = { chart: s };
              d && (f.orderby = d), i && (f.order = i);
              const b = (0, c.getNewPath)(f),
                w = r.key === s,
                { delta: v, prevValue: C, value: R } = this.getValues(s, p);
              return (0, a.createElement)(m.SummaryNumber, {
                key: s,
                delta: v,
                href: b,
                label: u,
                reverseTrend: h,
                prevLabel:
                  'previous_period' === _
                    ? (0, o.__)('Previous period:', 'woocommerce')
                    : (0, o.__)('Previous year:', 'woocommerce'),
                prevValue: C,
                selected: w,
                value: R,
                labelTooltipText: g,
                onLinkClickCallback: () => {
                  t && t(),
                    (0, y.recordEvent)('analytics_chart_tab_click', { report: l || n, key: s });
                },
              });
            }),
          );
        }
      }
      (g.propTypes = {
        charts: i().array.isRequired,
        endpoint: i().string.isRequired,
        limitProperties: i().array,
        query: i().object.isRequired,
        selectedChart: i().shape({
          key: i().string.isRequired,
          label: i().string.isRequired,
          order: i().oneOf(['asc', 'desc']),
          orderby: i().string,
          type: i().oneOf(['average', 'number', 'currency']).isRequired,
        }).isRequired,
        summaryData: i().object,
        report: i().string,
      }),
        (g.defaultProps = { summaryData: { totals: { primary: {}, secondary: {} }, isError: !1 } }),
        (g.contextType = _.CurrencyContext);
      const f = (0, s.compose)(
        (0, n.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: a,
              limitProperties: o,
              query: s,
              filters: n,
              advancedFilters: l,
            } = t,
            i = o || [a],
            c = i.some(e => s[e] && s[e].length);
          if (s.search && !c) return { emptySearchResults: !0 };
          const m = r && r.map(e => e.key),
            { woocommerce_default_date_range: d } = e(u.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            );
          return {
            summaryData: (0, u.getSummaryNumbers)({
              endpoint: a,
              query: s,
              select: e,
              limitBy: i,
              filters: n,
              advancedFilters: l,
              defaultDateRange: d,
              fields: m,
            }),
            defaultDateRange: d,
          };
        }),
      )(g);
    },
    65925: (e, t, r) => {
      r.d(t, { O3: () => n, be: () => i, u8: () => l });
      var a = r(65736),
        o = r(92694),
        s = r(20513);
      const n = (0, o.applyFilters)('woocommerce_admin_downloads_report_charts', [
          { key: 'download_count', label: (0, a.__)('Downloads', 'woocommerce'), type: 'number' },
        ]),
        l = (0, o.applyFilters)('woocommerce_admin_downloads_report_filters', [
          {
            label: (0, a.__)('Show', 'woocommerce'),
            staticParams: ['chartType', 'paged', 'per_page'],
            param: 'filter',
            showFilters: () => !0,
            filters: [
              { label: (0, a.__)('All downloads', 'woocommerce'), value: 'all' },
              { label: (0, a.__)('Advanced filters', 'woocommerce'), value: 'advanced' },
            ],
          },
        ]),
        i = (0, o.applyFilters)('woocommerce_admin_downloads_report_advanced_filters', {
          title: (0, a._x)(
            'Downloads match <select/> filters',
            'A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg',
            'woocommerce',
          ),
          filters: {
            product: {
              labels: {
                add: (0, a.__)('Product', 'woocommerce'),
                placeholder: (0, a.__)('Search', 'woocommerce'),
                remove: (0, a.__)('Remove product filter', 'woocommerce'),
                rule: (0, a.__)('Select a product filter match', 'woocommerce'),
                title: (0, a.__)('<title>Product</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, a.__)('Select product', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, a._x)('Includes', 'products', 'woocommerce') },
                { value: 'excludes', label: (0, a._x)('Excludes', 'products', 'woocommerce') },
              ],
              input: { component: 'Search', type: 'products', getLabels: s.oC },
            },
            customer: {
              labels: {
                add: (0, a.__)('Username', 'woocommerce'),
                placeholder: (0, a.__)('Search customer username', 'woocommerce'),
                remove: (0, a.__)('Remove customer username filter', 'woocommerce'),
                rule: (0, a.__)('Select a customer username filter match', 'woocommerce'),
                title: (0, a.__)('<title>Username</title> <rule/> <filter />', 'woocommerce'),
                filter: (0, a.__)('Select customer username', 'woocommerce'),
              },
              rules: [
                {
                  value: 'includes',
                  label: (0, a._x)('Includes', 'customer usernames', 'woocommerce'),
                },
                {
                  value: 'excludes',
                  label: (0, a._x)('Excludes', 'customer usernames', 'woocommerce'),
                },
              ],
              input: { component: 'Search', type: 'usernames', getLabels: s.jk },
            },
            order: {
              labels: {
                add: (0, a.__)('Order #', 'woocommerce'),
                placeholder: (0, a.__)('Search order number', 'woocommerce'),
                remove: (0, a.__)('Remove order number filter', 'woocommerce'),
                rule: (0, a.__)('Select a order number filter match', 'woocommerce'),
                title: (0, a.__)('<title>Order #</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, a.__)('Select order number', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, a._x)('Includes', 'order numbers', 'woocommerce') },
                { value: 'excludes', label: (0, a._x)('Excludes', 'order numbers', 'woocommerce') },
              ],
              input: {
                component: 'Search',
                type: 'orders',
                getLabels: async e => {
                  const t = e.split(',');
                  return await t.map(e => ({ id: e, label: '#' + e }));
                },
              },
            },
            ip_address: {
              labels: {
                add: (0, a.__)('IP Address', 'woocommerce'),
                placeholder: (0, a.__)('Search IP address', 'woocommerce'),
                remove: (0, a.__)('Remove IP address filter', 'woocommerce'),
                rule: (0, a.__)('Select an IP address filter match', 'woocommerce'),
                title: (0, a.__)('<title>IP Address</title> <rule/> <filter/>', 'woocommerce'),
                filter: (0, a.__)('Select IP address', 'woocommerce'),
              },
              rules: [
                { value: 'includes', label: (0, a._x)('Includes', 'IP addresses', 'woocommerce') },
                { value: 'excludes', label: (0, a._x)('Excludes', 'IP addresses', 'woocommerce') },
              ],
              input: {
                component: 'Search',
                type: 'downloadIps',
                getLabels: async e => {
                  const t = e.split(',');
                  return await t.map(e => ({ id: e, label: e }));
                },
              },
            },
          },
        });
    },
    49025: (e, t, r) => {
      r.r(t), r.d(t, { default: () => q });
      var a = r(69307),
        o = r(7862),
        s = r.n(o),
        n = r(65925),
        l = r(65736),
        i = r(9818),
        c = r(92819),
        m = r(76292),
        d = r.n(m),
        u = r(86020),
        p = r(10431),
        y = r(81595),
        _ = r(74617),
        h = r(67221),
        g = r(81921),
        f = r(17844),
        b = r(42968),
        w = r(17062);
      class v extends a.Component {
        constructor() {
          super(),
            (this.getHeadersContent = this.getHeadersContent.bind(this)),
            (this.getRowsContent = this.getRowsContent.bind(this)),
            (this.getSummary = this.getSummary.bind(this));
        }
        getHeadersContent() {
          return [
            {
              label: (0, l.__)('Date', 'woocommerce'),
              key: 'date',
              defaultSort: !0,
              required: !0,
              isLeftAligned: !0,
              isSortable: !0,
            },
            {
              label: (0, l.__)('Product title', 'woocommerce'),
              key: 'product',
              isSortable: !0,
              required: !0,
            },
            { label: (0, l.__)('File name', 'woocommerce'), key: 'file_name' },
            {
              label: (0, l.__)('Order #', 'woocommerce'),
              screenReaderLabel: (0, l.__)('Order Number', 'woocommerce'),
              key: 'order_number',
            },
            { label: (0, l.__)('Username', 'woocommerce'), key: 'user_id' },
            { label: (0, l.__)('IP', 'woocommerce'), key: 'ip_address' },
          ];
        }
        getRowsContent(e) {
          const { query: t } = this.props,
            r = (0, p.getPersistedQuery)(t),
            o = (0, w.O3)('dateFormat', g.defaultTableDateFormat);
          return (0, c.map)(e, e => {
            const {
                _embedded: t,
                date: s,
                file_name: n,
                file_path: i,
                ip_address: c,
                order_id: m,
                order_number: d,
                product_id: y,
                username: h,
              } = e,
              { code: g, name: f } = t.product[0];
            let b, w;
            if ('woocommerce_rest_product_invalid_id' === g)
              (b = (0, l.__)('(Deleted)', 'woocommerce')),
                (w = (0, l.__)('(Deleted)', 'woocommerce'));
            else {
              const e = (0, p.getNewPath)(r, '/analytics/products', {
                filter: 'single_product',
                products: y,
              });
              (b = (0, a.createElement)(u.Link, { href: e, type: 'wc-admin' }, f)), (w = f);
            }
            return [
              { display: (0, a.createElement)(u.Date, { date: s, visibleFormat: o }), value: s },
              { display: b, value: w },
              { display: (0, a.createElement)(u.Link, { href: i, type: 'external' }, n), value: n },
              {
                display: (0, a.createElement)(
                  u.Link,
                  { href: (0, _.getAdminLink)(`post.php?post=${m}&action=edit`), type: 'wp-admin' },
                  d,
                ),
                value: d,
              },
              { display: h, value: h },
              { display: c, value: c },
            ];
          });
        }
        getSummary(e) {
          const { download_count: t = 0 } = e,
            { query: r, defaultDateRange: a } = this.props,
            o = (0, g.getCurrentDates)(r, a),
            s = d()(o.primary.after),
            n = d()(o.primary.before).diff(s, 'days') + 1,
            i = this.context.getCurrencyConfig();
          return [
            {
              label: (0, l._n)('day', 'days', n, 'woocommerce'),
              value: (0, y.formatValue)(i, 'number', n),
            },
            {
              label: (0, l._n)('Download', 'Downloads', t, 'woocommerce'),
              value: (0, y.formatValue)(i, 'number', t),
            },
          ];
        }
        render() {
          const { query: e, filters: t, advancedFilters: r } = this.props;
          return (0, a.createElement)(b.Z, {
            endpoint: 'downloads',
            getHeadersContent: this.getHeadersContent,
            getRowsContent: this.getRowsContent,
            getSummary: this.getSummary,
            summaryFields: ['download_count'],
            query: e,
            tableQuery: { _embed: !0 },
            title: (0, l.__)('Downloads', 'woocommerce'),
            columnPrefsKey: 'downloads_report_columns',
            filters: t,
            advancedFilters: r,
          });
        }
      }
      v.contextType = f.CurrencyContext;
      const C = (0, i.withSelect)(e => {
        const { woocommerce_default_date_range: t } = e(h.SETTINGS_STORE_NAME).getSetting(
          'wc_admin',
          'wcAdminSettings',
        );
        return { defaultDateRange: t };
      })(v);
      var R = r(83573),
        S = r(47478),
        D = r(80272),
        E = r(31511);
      class q extends a.Component {
        render() {
          const { query: e, path: t } = this.props;
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(E.Z, {
              query: e,
              path: t,
              filters: n.u8,
              advancedFilters: n.be,
              report: 'downloads',
            }),
            (0, a.createElement)(D.Z, {
              charts: n.O3,
              endpoint: 'downloads',
              query: e,
              selectedChart: (0, R.Z)(e.chart, n.O3),
              filters: n.u8,
              advancedFilters: n.be,
            }),
            (0, a.createElement)(S.Z, {
              charts: n.O3,
              endpoint: 'downloads',
              path: t,
              query: e,
              selectedChart: (0, R.Z)(e.chart, n.O3),
              filters: n.u8,
              advancedFilters: n.be,
            }),
            (0, a.createElement)(C, { query: e, filters: n.u8, advancedFilters: n.be }),
          );
        }
      }
      q.propTypes = { query: s().object.isRequired };
    },
    86806: (e, t, r) => {
      r.d(t, { I: () => o });
      var a = r(65736);
      function o(e) {
        return [e.country, e.state, e.name || (0, a.__)('TAX', 'woocommerce'), e.priority]
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
        FI: () => h,
        V1: () => g,
        YC: () => u,
        hQ: () => p,
        jk: () => y,
        oC: () => _,
        qc: () => d,
        uC: () => f,
      });
      var a = r(96483),
        o = r(86989),
        s = r.n(o),
        n = r(92819),
        l = r(10431),
        i = r(67221),
        c = r(86806),
        m = r(17062);
      function d(e, t = n.identity) {
        return function(r = '', o) {
          const n = 'function' == typeof e ? e(o) : e,
            i = (0, l.getIdsFromQuery)(r);
          if (i.length < 1) return Promise.resolve([]);
          const c = { include: i.join(','), per_page: i.length };
          return s()({ path: (0, a.addQueryArgs)(n, c) }).then(e => e.map(t));
        };
      }
      d(i.NAMESPACE + '/products/attributes', e => ({ key: e.id, label: e.name }));
      const u = d(i.NAMESPACE + '/products/categories', e => ({ key: e.id, label: e.name })),
        p = d(i.NAMESPACE + '/coupons', e => ({ key: e.id, label: e.code })),
        y = d(i.NAMESPACE + '/customers', e => ({ key: e.id, label: e.name })),
        _ = d(i.NAMESPACE + '/products', e => ({ key: e.id, label: e.name })),
        h = d(i.NAMESPACE + '/taxes', e => ({ key: e.id, label: (0, c.I)(e) }));
      function g({ attributes: e, name: t }) {
        const r = (0, m.O3)('variationTitleAttributesSeparator', ' - ');
        if (t && t.indexOf(r) > -1) return t;
        const a = (e || []).map(({ option: e }) => e).join(', ');
        return a ? t + r + a : t;
      }
      const f = d(
        ({ products: e }) =>
          e ? i.NAMESPACE + `/products/${e}/variations` : i.NAMESPACE + '/variations',
        e => ({ key: e.id, label: g(e) }),
      );
    },
    83573: (e, t, r) => {
      r.d(t, { Z: () => o });
      var a = r(92819);
      function o(e, t = []) {
        return (0, a.find)(t, { key: e }) || t[0];
      }
    },
  },
]);
