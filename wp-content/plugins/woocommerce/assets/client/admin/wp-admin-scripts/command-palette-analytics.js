(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wp.i18n,
    o = window.wp.element,
    n = window.wp.primitives,
    i = (0, o.createElement)(
      n.SVG,
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
      (0, o.createElement)(n.Path, {
        fillRule: 'evenodd',
        d: 'M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z',
        clipRule: 'evenodd',
      }),
    ),
    r = window.wp.plugins,
    a = window.wp.url,
    c = window.wp.commands,
    d = window.wp.data,
    l = window.wc.tracks,
    w = window.wp.htmlEntities;
  (0, r.registerPlugin)('woocommerce-analytics-commands-registration', {
    render: () => {
      const { editedPostType: e } = (() => {
          const { currentPostType: e } = (0, d.useSelect)(e => {
              const t = e('core/editor');
              if (!t) return { currentPostType: null };
              const { getCurrentPostType: o } = t;
              return { currentPostType: o() };
            }),
            { editedPostType: t } = (0, d.useSelect)(e => {
              const t = e('core/edit-site');
              if (!t) return { editedPostType: null };
              const { getEditedPostType: o } = t;
              return { editedPostType: o() };
            });
          return { editedPostType: t || e };
        })(),
        n = e ? e + '-editor' : null;
      return (
        (0, o.useEffect)(() => {
          window.hasOwnProperty('wcCommandPaletteAnalytics') &&
            window.wcCommandPaletteAnalytics.hasOwnProperty('reports') &&
            Array.isArray(window.wcCommandPaletteAnalytics.reports) &&
            window.wcCommandPaletteAnalytics.reports.forEach(e => {
              (({ label: e, path: o, origin: n }) => {
                (({ name: e, label: t, icon: o, callback: n, origin: i }) => {
                  (0, d.dispatch)(c.store).registerCommand({
                    name: e,
                    label: (0, w.decodeEntities)(t),
                    icon: o,
                    callback: (...t) => {
                      (0, l.queueRecordEvent)('woocommerce_command_palette_submit', {
                        name: e,
                        origin: i,
                      }),
                        n(...t);
                    },
                  });
                })({
                  name: `woocommerce${o}`,
                  label: (0, t.sprintf)((0, t.__)('WooCommerce Analytics: %s', 'woocommerce'), e),
                  icon: i,
                  callback: () => {
                    document.location = (0, a.addQueryArgs)('admin.php', {
                      page: 'wc-admin',
                      path: o,
                    });
                  },
                  origin: n,
                });
              })({ label: e.title, path: e.path, origin: n });
            });
        }, [n]),
        null
      );
    },
  }),
    ((window.wc = window.wc || {}).commandPaletteAnalytics = e);
})();
