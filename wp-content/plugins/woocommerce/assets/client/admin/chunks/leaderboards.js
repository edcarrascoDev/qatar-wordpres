'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [727],
  {
    15152: (e, r, t) => {
      t.d(r, { Z: () => i });
      var a = t(69307),
        o = t(65736),
        s = t(7862),
        l = t.n(s),
        n = t(86020);
      function d({ className: e }) {
        const r = (0, o.__)(
            'There was an error getting your stats. Please try again.',
            'woocommerce',
          ),
          t = (0, o.__)('Reload', 'woocommerce');
        return (0, a.createElement)(n.EmptyContent, {
          className: e,
          title: r,
          actionLabel: t,
          actionCallback: () => {
            window.location.reload();
          },
        });
      }
      d.propTypes = { className: l().string };
      const i = d;
    },
    15850: (e, r, t) => {
      t.r(r), t.d(r, { default: () => T });
      var a = t(69307),
        o = t(65736),
        s = t(94333),
        l = t(7862),
        n = t.n(l),
        d = t(55609),
        i = t(9818),
        c = t(86020),
        m = t(67221),
        u = t(14599),
        b = t(10431),
        g = t(14812),
        p = t(15152),
        h = t(346);
      class w extends a.Component {
        getFormattedHeaders() {
          return this.props.headers.map((e, r) => ({
            isLeftAligned: 0 === r,
            hiddenByDefault: !1,
            isSortable: !1,
            key: e.label,
            label: e.label,
          }));
        }
        getFormattedRows() {
          return this.props.rows.map(e =>
            e.map(e => ({
              display: (0, a.createElement)('div', {
                dangerouslySetInnerHTML: (0, h.ZP)(e.display),
              }),
              value: e.value,
            })),
          );
        }
        render() {
          const { isRequesting: e, isError: r, totalRows: t, title: s } = this.props,
            l = 'woocommerce-leaderboard';
          if (r) return (0, a.createElement)(p.Z, { className: l });
          const n = this.getFormattedRows();
          return e || 0 !== n.length
            ? (0, a.createElement)(c.TableCard, {
                className: l,
                headers: this.getFormattedHeaders(),
                isLoading: e,
                rows: n,
                rowsPerPage: t,
                showMenu: !1,
                title: s,
                totalRows: t,
              })
            : (0, a.createElement)(
                d.Card,
                { className: l },
                (0, a.createElement)(
                  d.CardHeader,
                  null,
                  (0, a.createElement)(
                    g.Text,
                    { size: 16, weight: 600, as: 'h3', color: '#23282d' },
                    s,
                  ),
                ),
                (0, a.createElement)(
                  d.CardBody,
                  { size: null },
                  (0, a.createElement)(
                    c.EmptyTable,
                    null,
                    (0, o.__)('No data recorded for the selected time period.', 'woocommerce'),
                  ),
                ),
              );
        }
      }
      (w.propTypes = {
        headers: n().arrayOf(n().shape({ label: n().string })),
        id: n().string.isRequired,
        query: n().object,
        rows: n().arrayOf(
          n().arrayOf(
            n().shape({
              display: n().node,
              value: n().oneOfType([n().string, n().number, n().bool]),
            }),
          ),
        ).isRequired,
        title: n().string.isRequired,
        totalRows: n().number.isRequired,
      }),
        (w.defaultProps = { rows: [], isError: !1, isRequesting: !1 });
      const _ = (0, s.compose)(
        (0, i.withSelect)((e, r) => {
          const { id: t, query: a, totalRows: o, filters: s } = r,
            { woocommerce_default_date_range: l } = e(m.SETTINGS_STORE_NAME).getSetting(
              'wc_admin',
              'wcAdminSettings',
            ),
            n = (0, m.getFilterQuery)({ filters: s, query: a }),
            d = {
              id: t,
              per_page: o,
              persisted_query: (0, b.getPersistedQuery)(a),
              query: a,
              select: e,
              defaultDateRange: l,
              filterQuery: n,
            };
          return (0, m.getLeaderboard)(d);
        }),
      )(w);
      var y = t(17062);
      const E = e => {
        const {
            allLeaderboards: r,
            controls: t,
            isFirst: s,
            isLast: l,
            hiddenBlocks: n,
            onMove: i,
            onRemove: b,
            onTitleBlur: g,
            onTitleChange: p,
            onToggleHiddenBlock: h,
            query: w,
            title: y,
            titleInput: E,
            filters: T,
          } = e,
          { updateUserPreferences: f, ...k } = (0, m.useUserPreferences)(),
          [R, q] = (0, a.useState)(parseInt(k.dashboard_leaderboard_rows || 5, 10)),
          v = e => {
            q(parseInt(e, 10));
            const r = { dashboard_leaderboard_rows: parseInt(e, 10) };
            f(r);
          };
        return (0, a.createElement)(
          a.Fragment,
          null,
          (0, a.createElement)(
            'div',
            { className: 'woocommerce-dashboard__dashboard-leaderboards' },
            (0, a.createElement)(c.SectionHeader, {
              title: y || (0, o.__)('Leaderboards', 'woocommerce'),
              menu: (0, a.createElement)(c.EllipsisMenu, {
                label: (0, o.__)(
                  'Choose which leaderboards to display and other settings',
                  'woocommerce',
                ),
                renderContent: ({ onToggle: e }) =>
                  (0, a.createElement)(
                    a.Fragment,
                    null,
                    (0, a.createElement)(
                      c.MenuTitle,
                      null,
                      (0, o.__)('Leaderboards', 'woocommerce'),
                    ),
                    (({ allLeaderboards: e, hiddenBlocks: r, onToggleHiddenBlock: t }) =>
                      e.map(e => {
                        const o = !r.includes(e.id);
                        return (0, a.createElement)(
                          c.MenuItem,
                          {
                            checked: o,
                            isCheckbox: !0,
                            isClickable: !0,
                            key: e.id,
                            onInvoke: () => {
                              t(e.id)(),
                                (0, u.recordEvent)('dash_leaderboards_toggle', {
                                  status: o ? 'off' : 'on',
                                  key: e.id,
                                });
                            },
                          },
                          e.label,
                        );
                      }))({ allLeaderboards: r, hiddenBlocks: n, onToggleHiddenBlock: h }),
                    (0, a.createElement)(
                      c.MenuItem,
                      null,
                      (0, a.createElement)(d.SelectControl, {
                        className: 'woocommerce-dashboard__dashboard-leaderboards__select',
                        label: (0, o.__)('Rows per table', 'woocommerce'),
                        value: R,
                        options: Array.from({ length: 20 }, (e, r) => ({ v: r + 1, label: r + 1 })),
                        onChange: v,
                      }),
                    ),
                    (0, a.createElement)(t, {
                      onToggle: e,
                      onMove: i,
                      onRemove: b,
                      isFirst: s,
                      isLast: l,
                      onTitleBlur: g,
                      onTitleChange: p,
                      titleInput: E,
                    }),
                  ),
              }),
            }),
            (0, a.createElement)(
              'div',
              { className: 'woocommerce-dashboard__columns' },
              (({ allLeaderboards: e, hiddenBlocks: r, query: t, rowsPerTable: o, filters: s }) =>
                e.map(e => {
                  if (!r.includes(e.id))
                    return (0, a.createElement)(_, {
                      headers: e.headers,
                      id: e.id,
                      key: e.id,
                      query: t,
                      title: e.label,
                      totalRows: o,
                      filters: s,
                    });
                }))({ allLeaderboards: r, hiddenBlocks: n, query: w, rowsPerTable: R, filters: T }),
            ),
          ),
        );
      };
      E.propTypes = { query: n().object.isRequired };
      const T = (0, s.compose)(
        (0, i.withSelect)(e => {
          const { getItems: r, getItemsError: t } = e(m.ITEMS_STORE_NAME),
            { leaderboards: a } = (0, y.O3)('dataEndpoints', { leaderboards: [] });
          return { allLeaderboards: a, getItems: r, getItemsError: t };
        }),
      )(E);
    },
  },
]);