(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const o = window.wp.plugins,
    t = window.wp.i18n,
    n = window.wp.element,
    r = window.wp.primitives,
    c = (0, n.createElement)(
      r.SVG,
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
      (0, n.createElement)(r.Path, {
        d:
          'M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z',
      }),
    ),
    a = (0, n.createElement)(
      r.SVG,
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
      (0, n.createElement)(r.Path, {
        fillRule: 'evenodd',
        d:
          'M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z',
        clipRule: 'evenodd',
      }),
    ),
    i = (0, n.createElement)(
      r.SVG,
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
      (0, n.createElement)(r.Path, { d: 'M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z' }),
    ),
    d = window.wp.data,
    s = window.wp.coreData,
    m = window.wp.url,
    l = window.wc.tracks,
    w = window.wp.commands,
    u = window.wp.htmlEntities,
    p = ({ name: e, label: o, icon: t, callback: n, origin: r }) => {
      (0, d.dispatch)(w.store).registerCommand({
        name: e,
        label: (0, u.decodeEntities)(o),
        icon: t,
        callback: (...o) => {
          (0, l.queueRecordEvent)('woocommerce_command_palette_submit', { name: e, origin: r }),
            n(...o);
        },
      });
    },
    g = () => {
      const { currentPostType: e } = (0, d.useSelect)(e => {
          const o = e('core/editor');
          if (!o) return { currentPostType: null };
          const { getCurrentPostType: t } = o;
          return { currentPostType: t() };
        }),
        { editedPostType: o } = (0, d.useSelect)(e => {
          const o = e('core/edit-site');
          if (!o) return { editedPostType: null };
          const { getEditedPostType: t } = o;
          return { editedPostType: t() };
        });
      return { editedPostType: o || e };
    };
  function h({ search: e }) {
    const { editedPostType: o } = g(),
      r = o ? o + '-editor' : null,
      c = (0, n.useRef)(null);
    (0, n.useEffect)(
      () => (
        '' !== e &&
          (clearTimeout(c.current),
          (c.current = setTimeout(() => {
            (0, l.recordEvent)('woocommerce_command_palette_search', { value: e, origin: r });
          }, 300))),
        () => {
          clearTimeout(c.current);
        }
      ),
      [e, r],
    );
    const i = 'product',
      { records: w, isLoading: p } = (0, d.useSelect)(
        o => {
          const { getEntityRecords: t } = o(s.store),
            n = {
              search: e || void 0,
              per_page: 10,
              orderby: e ? 'relevance' : 'date',
              status: ['publish', 'future', 'draft', 'pending', 'private'],
            };
          return {
            records: t('postType', i, n),
            isLoading: !o(s.store).hasFinishedResolution('getEntityRecords', ['postType', i, n]),
          };
        },
        [e],
      );
    return {
      commands: (0, n.useMemo)(
        () =>
          (null != w ? w : []).map(e => ({
            name: i + '-' + e.id,
            searchLabel: e.title?.rendered + ' ' + e.id,
            label: e.title?.rendered
              ? (0, u.decodeEntities)(e.title?.rendered)
              : (0, t.__)('(no title)', 'woocommerce'),
            icon: a,
            callback: ({ close: o }) => {
              (0, l.queueRecordEvent)('woocommerce_command_palette_submit', {
                name: 'woocommerce/product',
                origin: r,
              });
              const t = { post: e.id, action: 'edit' },
                n = (0, m.addQueryArgs)('post.php', t);
              (document.location = n), o();
            },
          })),
        [w, r],
      ),
      isLoading: p,
    };
  }
  (0, o.registerPlugin)('woocommerce-commands-registration', {
    render: () => {
      const { editedPostType: e } = g(),
        o = e ? e + '-editor' : null,
        { isCommandPaletteOpen: r } = (0, d.useSelect)(e => {
          const { isOpen: o } = e(w.store);
          return { isCommandPaletteOpen: o() };
        }, []),
        s = (0, n.useRef)(!1);
      return (
        (0, n.useEffect)(() => {
          r && !s.current && (0, l.recordEvent)('woocommerce_command_palette_open', { origin: o }),
            (s.current = r);
        }, [r, o]),
        (0, n.useEffect)(() => {
          p({
            name: 'woocommerce/add-new-product',
            label: (0, t.__)('Add new product', 'woocommerce'),
            icon: i,
            callback: () => {
              document.location = (0, m.addQueryArgs)('post-new.php', { post_type: 'product' });
            },
            origin: o,
          }),
            p({
              name: 'woocommerce/add-new-order',
              label: (0, t.__)('Add new order', 'woocommerce'),
              icon: i,
              callback: () => {
                document.location = (0, m.addQueryArgs)('admin.php', {
                  page: 'wc-orders',
                  action: 'new',
                });
              },
              origin: o,
            }),
            p({
              name: 'woocommerce/view-products',
              label: (0, t.__)('Products', 'woocommerce'),
              icon: a,
              callback: () => {
                document.location = (0, m.addQueryArgs)('edit.php', { post_type: 'product' });
              },
              origin: o,
            }),
            p({
              name: 'woocommerce/view-orders',
              label: (0, t.__)('Orders', 'woocommerce'),
              icon: a,
              callback: () => {
                document.location = (0, m.addQueryArgs)('admin.php', { page: 'wc-orders' });
              },
              origin: o,
            }),
            (0, d.dispatch)(w.store).registerCommandLoader({
              name: 'woocommerce/product',
              hook: h,
            }),
            window.hasOwnProperty('wcCommandPaletteSettings') &&
              window.wcCommandPaletteSettings.hasOwnProperty('settingsTabs') &&
              Array.isArray(window.wcCommandPaletteSettings.settingsTabs) &&
              window.wcCommandPaletteSettings.settingsTabs.forEach(e => {
                (({ label: e, tab: o, origin: n }) => {
                  p({
                    name: `woocommerce/settings-${o}`,
                    label: (0, t.sprintf)((0, t.__)('WooCommerce Settings: %s', 'woocommerce'), e),
                    icon: c,
                    callback: () => {
                      document.location = (0, m.addQueryArgs)('admin.php', {
                        page: 'wc-settings',
                        tab: o,
                      });
                    },
                    origin: n,
                  });
                })({ label: e.label, tab: e.key, origin: o });
              });
        }, [o]),
        null
      );
    },
  }),
    ((window.wc = window.wc || {}).commandPalette = e);
})();
