'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [2294],
  {
    47478: (e, t, r) => {
      r.d(t, { Z: () => R });
      var a = r(69307),
        s = r(65736),
        n = r(94333),
        i = r(69771),
        o = r(9818),
        l = r(92819),
        u = r(7862),
        c = r.n(u),
        m = r(86020),
        d = r(67221),
        p = r(81921),
        y = r(17844),
        g = r(15152),
        h = r(10431);
      function f(e, t, r = {}) {
        if (!e || 0 === e.length) return null;
        const a = e.slice(0),
          s = a.pop();
        if (s.showFilters(t, r)) {
          const e = (0, h.flattenFilters)(s.filters),
            r = t[s.param] || s.defaultValue || 'all';
          return (0, l.find)(e, { value: r });
        }
        return f(a, t, r);
      }
      function b(e) {
        return t => (0, i.format)(e, t);
      }
      class C extends a.Component {
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
              { date: (0, i.format)('Y-m-d\\TH:i:s', e.date_start), ...r }
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
            n = (0, p.getIntervalForQuery)(e, s),
            { primary: o, secondary: l } = (0, p.getCurrentDates)(e, s);
          return t.data.intervals.map(function(t, s) {
            const u = (0, p.getPreviousDate)(t.date_start, o.after, l.after, e.compare, n),
              c = r.data.intervals[s];
            return {
              date: (0, i.format)('Y-m-d\\TH:i:s', t.date_start),
              primary: {
                label: `${o.label} (${o.range})`,
                labelDate: t.date_start,
                value: t.subtotals[a.key] || 0,
              },
              secondary: {
                label: `${l.label} (${l.range})`,
                labelDate: u.format('YYYY-MM-DD HH:mm:ss'),
                value: (c && c.subtotals[a.key]) || 0,
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
        renderChart(e, t, r, n) {
          const {
              emptySearchResults: i,
              filterParam: o,
              interactiveLegend: l,
              itemsLabel: u,
              legendPosition: c,
              path: y,
              query: g,
              selectedChart: h,
              showHeaderControls: f,
              primaryData: C,
              defaultDateRange: R,
            } = this.props,
            v = (0, p.getIntervalForQuery)(g, R),
            D = (0, p.getAllowedIntervalsForQuery)(g, R),
            q = (0, p.getDateFormatsForInterval)(v, C.data.intervals.length, { type: 'php' }),
            _ = i
              ? (0, s.__)('No data for the current search', 'woocommerce')
              : (0, s.__)('No data for the selected date range', 'woocommerce'),
            { formatAmount: E, getCurrencyConfig: T } = this.context;
          return (0, a.createElement)(m.Chart, {
            allowedIntervals: D,
            data: r,
            dateParser: '%Y-%m-%dT%H:%M:%S',
            emptyMessage: _,
            filterParam: o,
            interactiveLegend: l,
            interval: v,
            isRequesting: t,
            itemsLabel: u,
            legendPosition: c,
            legendTotals: n,
            mode: e,
            path: y,
            query: g,
            screenReaderFormat: b(q.screenReaderFormat),
            showHeaderControls: f,
            title: h.label,
            tooltipLabelFormat: b(q.tooltipLabelFormat),
            tooltipTitle: ('time-comparison' === e && h.label) || null,
            tooltipValueFormat: (0, d.getTooltipValueFormat)(h.type, E),
            chartType: (0, p.getChartTypeForQuery)(g),
            valueType: h.type,
            xFormat: b(q.xFormat),
            x2Format: b(q.x2Format),
            currency: T(),
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
            n = this.getTimeChartData(),
            i = this.getTimeChartTotals();
          return this.renderChart('time-comparison', s, n, i);
        }
        render() {
          const { mode: e } = this.props;
          return 'item-comparison' === e
            ? this.renderItemComparison()
            : this.renderTimeComparison();
        }
      }
      (C.contextType = y.CurrencyContext),
        (C.propTypes = {
          filters: c().array,
          isRequesting: c().bool,
          itemsLabel: c().string,
          limitProperties: c().array,
          mode: c().string,
          path: c().string.isRequired,
          primaryData: c().object,
          query: c().object.isRequired,
          secondaryData: c().object,
          selectedChart: c().shape({
            key: c().string.isRequired,
            label: c().string.isRequired,
            order: c().oneOf(['asc', 'desc']),
            orderby: c().string,
            type: c().oneOf(['average', 'number', 'currency']).isRequired,
          }).isRequired,
        }),
        (C.defaultProps = {
          isRequesting: !1,
          primaryData: { data: { intervals: [] }, isError: !1, isRequesting: !1 },
          secondaryData: { data: { intervals: [] }, isError: !1, isRequesting: !1 },
        });
      const R = (0, n.compose)(
        (0, o.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: a,
              filters: s,
              isRequesting: n,
              limitProperties: i,
              query: o,
              advancedFilters: u,
            } = t,
            c = i || [a],
            m = f(s, o),
            p = (0, l.get)(m, ['settings', 'param']),
            y =
              t.mode ||
              (function(e, t) {
                if (e && t) {
                  const r = (0, l.get)(e, ['settings', 'param']);
                  if (!r || Object.keys(t).includes(r)) return (0, l.get)(e, ['chartMode']);
                }
                return null;
              })(m, o) ||
              'time-comparison',
            { woocommerce_default_date_range: g } = e(d.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            ),
            h = e(d.REPORTS_STORE_NAME),
            b = { mode: y, filterParam: p, defaultDateRange: g };
          if (n) return b;
          const C = c.some(e => o[e] && o[e].length);
          if (o.search && !C) return { ...b, emptySearchResults: !0 };
          const R = r && r.map(e => e.key),
            v = (0, d.getReportChartData)({
              endpoint: a,
              dataType: 'primary',
              query: o,
              selector: h,
              limitBy: c,
              filters: s,
              advancedFilters: u,
              defaultDateRange: g,
              fields: R,
            });
          if ('item-comparison' === y) return { ...b, primaryData: v };
          const D = (0, d.getReportChartData)({
            endpoint: a,
            dataType: 'secondary',
            query: o,
            selector: h,
            limitBy: c,
            filters: s,
            advancedFilters: u,
            defaultDateRange: g,
            fields: R,
          });
          return { ...b, primaryData: v, secondaryData: D };
        }),
      )(C);
    },
    80272: (e, t, r) => {
      r.d(t, { Z: () => b });
      var a = r(69307),
        s = r(65736),
        n = r(94333),
        i = r(9818),
        o = r(7862),
        l = r.n(o),
        u = r(10431),
        c = r(86020),
        m = r(81595),
        d = r(67221),
        p = r(81921),
        y = r(14599),
        g = r(17844),
        h = r(15152);
      class f extends a.Component {
        formatVal(e, t) {
          const { formatAmount: r, getCurrencyConfig: a } = this.context;
          return 'currency' === t ? r(e) : (0, m.formatValue)(a(), t, e);
        }
        getValues(e, t) {
          const { emptySearchResults: r, summaryData: a } = this.props,
            { totals: s } = a,
            n = s.primary ? s.primary[e] : 0,
            i = s.secondary ? s.secondary[e] : 0,
            o = r ? 0 : n,
            l = r ? 0 : i;
          return {
            delta: (0, m.calculateDelta)(o, l),
            prevValue: this.formatVal(l, t),
            value: this.formatVal(o, t),
          };
        }
        render() {
          const {
              charts: e,
              query: t,
              selectedChart: r,
              summaryData: n,
              endpoint: i,
              report: o,
              defaultDateRange: l,
            } = this.props,
            { isError: m, isRequesting: d } = n;
          if (m) return (0, a.createElement)(h.Z, null);
          if (d) return (0, a.createElement)(c.SummaryListPlaceholder, { numberOfItems: e.length });
          const { compare: g } = (0, p.getDateParamsFromQuery)(t, l);
          return (0, a.createElement)(c.SummaryList, null, ({ onToggle: t }) =>
            e.map(e => {
              const {
                  key: n,
                  order: l,
                  orderby: m,
                  label: d,
                  type: p,
                  isReverseTrend: h,
                  labelTooltipText: f,
                } = e,
                b = { chart: n };
              m && (b.orderby = m), l && (b.order = l);
              const C = (0, u.getNewPath)(b),
                R = r.key === n,
                { delta: v, prevValue: D, value: q } = this.getValues(n, p);
              return (0, a.createElement)(c.SummaryNumber, {
                key: n,
                delta: v,
                href: C,
                label: d,
                reverseTrend: h,
                prevLabel:
                  'previous_period' === g
                    ? (0, s.__)('Previous period:', 'woocommerce')
                    : (0, s.__)('Previous year:', 'woocommerce'),
                prevValue: D,
                selected: R,
                value: q,
                labelTooltipText: f,
                onLinkClickCallback: () => {
                  t && t(),
                    (0, y.recordEvent)('analytics_chart_tab_click', { report: o || i, key: n });
                },
              });
            }),
          );
        }
      }
      (f.propTypes = {
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
        (f.defaultProps = { summaryData: { totals: { primary: {}, secondary: {} }, isError: !1 } }),
        (f.contextType = g.CurrencyContext);
      const b = (0, n.compose)(
        (0, i.withSelect)((e, t) => {
          const {
              charts: r,
              endpoint: a,
              limitProperties: s,
              query: n,
              filters: i,
              advancedFilters: o,
            } = t,
            l = s || [a],
            u = l.some(e => n[e] && n[e].length);
          if (n.search && !u) return { emptySearchResults: !0 };
          const c = r && r.map(e => e.key),
            { woocommerce_default_date_range: m } = e(d.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            );
          return {
            summaryData: (0, d.getSummaryNumbers)({
              endpoint: a,
              query: n,
              select: e,
              limitBy: l,
              filters: i,
              advancedFilters: o,
              defaultDateRange: m,
              fields: c,
            }),
            defaultDateRange: m,
          };
        }),
      )(f);
    },
    46358: (e, t, r) => {
      function a(e, t, r) {
        return !!t && e && t <= r === 'instock';
      }
      r.d(t, { d: () => a });
    },
    86806: (e, t, r) => {
      r.d(t, { I: () => s });
      var a = r(65736);
      function s(e) {
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
        V1: () => f,
        YC: () => d,
        hQ: () => p,
        jk: () => y,
        oC: () => g,
        qc: () => m,
        uC: () => b,
      });
      var a = r(96483),
        s = r(86989),
        n = r.n(s),
        i = r(92819),
        o = r(10431),
        l = r(67221),
        u = r(86806),
        c = r(17062);
      function m(e, t = i.identity) {
        return function(r = '', s) {
          const i = 'function' == typeof e ? e(s) : e,
            l = (0, o.getIdsFromQuery)(r);
          if (l.length < 1) return Promise.resolve([]);
          const u = { include: l.join(','), per_page: l.length };
          return n()({ path: (0, a.addQueryArgs)(i, u) }).then(e => e.map(t));
        };
      }
      m(l.NAMESPACE + '/products/attributes', e => ({ key: e.id, label: e.name }));
      const d = m(l.NAMESPACE + '/products/categories', e => ({ key: e.id, label: e.name })),
        p = m(l.NAMESPACE + '/coupons', e => ({ key: e.id, label: e.code })),
        y = m(l.NAMESPACE + '/customers', e => ({ key: e.id, label: e.name })),
        g = m(l.NAMESPACE + '/products', e => ({ key: e.id, label: e.name })),
        h = m(l.NAMESPACE + '/taxes', e => ({ key: e.id, label: (0, u.I)(e) }));
      function f({ attributes: e, name: t }) {
        const r = (0, c.O3)('variationTitleAttributesSeparator', ' - ');
        if (t && t.indexOf(r) > -1) return t;
        const a = (e || []).map(({ option: e }) => e).join(', ');
        return a ? t + r + a : t;
      }
      const b = m(
        ({ products: e }) =>
          e ? l.NAMESPACE + `/products/${e}/variations` : l.NAMESPACE + '/variations',
        e => ({ key: e.id, label: f(e) }),
      );
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
