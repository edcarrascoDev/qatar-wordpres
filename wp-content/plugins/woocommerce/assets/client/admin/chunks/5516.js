'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [5516],
  {
    93914: (e, t, o) => {
      o.d(t, { Z: () => s });
      var r = o(69307),
        c = o(65736),
        a = o(55609),
        n = o(14812);
      const s = ({ onCancel: e, onImport: t }) =>
        (0, r.createElement)(
          a.Modal,
          {
            className: 'woocommerce-products-load-sample-product-confirm-modal',
            overlayClassName: 'woocommerce-products-load-sample-product-confirm-modal-overlay',
            title: (0, c.__)('Load sample products', 'woocommerce'),
            onRequestClose: e,
          },
          (0, r.createElement)(
            n.Text,
            { className: 'woocommerce-confirmation-modal__message' },
            (0, c.__)(
              "We'll import images from WooCommerce.com to set up your sample products.",
              'woocommerce',
            ),
          ),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-confirmation-modal-actions' },
            (0, r.createElement)(
              a.Button,
              { isSecondary: !0, onClick: e },
              (0, c.__)('Cancel', 'woocommerce'),
            ),
            (0, r.createElement)(
              a.Button,
              { isPrimary: !0, onClick: t },
              (0, c.__)('Import sample products', 'woocommerce'),
            ),
          ),
        );
    },
    69359: (e, t, o) => {
      o.d(t, { Z: () => i });
      var r = o(69307),
        c = o(65736),
        a = o(55609),
        n = o(36840),
        s = o(14812);
      const i = () =>
        (0, r.createElement)(
          a.Modal,
          {
            className: 'woocommerce-products-load-sample-product-modal',
            overlayClassName: 'woocommerce-products-load-sample-product-modal-overlay',
            title: '',
            onRequestClose: () => {},
          },
          (0, r.createElement)(n.Spinner, { color: '#007cba', size: 48 }),
          (0, r.createElement)(
            s.Text,
            { className: 'woocommerce-load-sample-product-modal__title' },
            (0, c.__)('Loading sample products', 'woocommerce'),
          ),
          (0, r.createElement)(
            s.Text,
            { className: 'woocommerce-load-sample-product-modal__description' },
            (0, c.__)('We are loading 9 sample products into your store', 'woocommerce'),
          ),
        );
    },
    35192: (e, t, o) => {
      o.d(t, { Z: () => d });
      var r = o(65736),
        c = o(86989),
        a = o.n(c),
        n = o(67221),
        s = o(9818),
        i = o(69307),
        l = o(14599),
        m = o(69987);
      const d = ({ redirectUrlAfterSuccess: e }) => {
        const [t, o] = (0, i.useState)(!1),
          { createNotice: c } = (0, s.useDispatch)('core/notices'),
          { recordCompletionTime: d } = (0, m.Z)('products');
        return {
          loadSampleProduct: async () => {
            (0, l.recordEvent)('tasklist_add_product', { method: 'sample_product' }), d(), o(!0);
            try {
              if (
                (await a()({
                  path: `${n.WC_ADMIN_NAMESPACE}/onboarding/tasks/import_sample_products`,
                  method: 'POST',
                }),
                e)
              )
                return void (window.location.href = e);
            } catch (e) {
              const t =
                e instanceof Error && e.message
                  ? e.message
                  : (0, r.__)('There was an error importing the sample products', 'woocommerce');
              c('error', t);
            }
            o(!1);
          },
          isLoadingSampleProducts: t,
        };
      };
    },
    75516: (e, t, o) => {
      o.r(t), o.d(t, { Products: () => b });
      var r = o(69307),
        c = o(65736),
        a = o(71310),
        n = o(14812),
        s = o(98817),
        i = o(55609),
        l = o(74617),
        m = o(23374),
        d = o(86241),
        p = o(73224),
        u = o(14599),
        _ = o(17062),
        w = o(35048),
        k = o(35231),
        h = o(53389),
        E = o(76357),
        g = o(86020),
        y = o(69987);
      const f = () => {
        const { recordCompletionTime: e } = (0, y.Z)('products');
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-products-footer' },
          (0, r.createElement)(
            n.Text,
            { className: 'woocommerce-products-footer__selling-somewhere-else' },
            (0, c.__)('Are you already selling somewhere else?', 'woocommerce'),
          ),
          (0, r.createElement)(
            n.Text,
            { className: 'woocommerce-products-footer__import-options' },
            (0, E.Z)({
              mixedString: (0, c.__)(
                '{{importCSVLink}}Import your products from a CSV file{{/importCSVLink}}.',
                'woocommerce',
              ),
              components: {
                importCSVLink: (0, r.createElement)(
                  g.Link,
                  {
                    onClick: () => (
                      (0, u.recordEvent)('tasklist_add_product', { method: 'import' }),
                      e(),
                      (window.location.href = (0, l.getAdminLink)(
                        'edit.php?post_type=product&page=product_importer&wc_onboarding_active_task=products',
                      )),
                      !1
                    ),
                    href: '',
                    type: 'wc-admin',
                  },
                  (0, r.createElement)(r.Fragment, null),
                ),
              },
            }),
          ),
        );
      };
      var v = o(69359),
        C = o(35192),
        Z = o(93914);
      const L = ({ isExpanded: e, onClick: t }) =>
          (0, r.createElement)(
            i.Button,
            { className: 'woocommerce-task-products__button-view-less-product-types', onClick: t },
            e
              ? (0, c.__)('View less product types', 'woocommerce')
              : (0, c.__)('View more product types', 'woocommerce'),
            (0, r.createElement)(m.Z, { icon: e ? d.Z : p.Z }),
          ),
        b = () => {
          const [e, t] = (0, r.useState)(!1),
            [o, a] = (0, r.useState)(!1),
            s = (0, w.r)(
              (() => {
                const e = (0, _.O3)('onboarding');
                return (e?.profile && e?.profile.product_types) || ['physical'];
              })(),
            ),
            { productTypes: i, isRequesting: m } = (0, k.Z)((0, w.Q)(), s),
            { recordCompletionTime: d } = (0, y.Z)('products'),
            p = (0, r.useMemo)(
              () =>
                i.map(e => ({
                  ...e,
                  onClick: () => {
                    e.onClick(), d();
                  },
                })),
              [d, i],
            ),
            { loadSampleProduct: E, isLoadingSampleProducts: g } = (0, C.Z)({
              redirectUrlAfterSuccess: (0, l.getAdminLink)(
                'edit.php?post_type=product&wc_onboarding_active_task=products',
              ),
            }),
            b = (0, r.useMemo)(() => {
              const t = p.filter(e => s.includes(e.key));
              return e && p.forEach(e => !t.includes(e) && t.push(e)), t;
            }, [s, e, p]);
          return (0, r.createElement)(
            'div',
            { className: 'woocommerce-task-products' },
            (0, r.createElement)(
              n.Text,
              { variant: 'title', as: 'h2', className: 'woocommerce-task-products__title' },
              (0, c.__)('What product do you want to add?', 'woocommerce'),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-product-content' },
              (0, r.createElement)(h.Z, {
                items: b,
                onClickLoadSampleProduct: () => a(!0),
                showOtherOptions: e,
                isTaskListItemClicked: m,
              }),
              (0, r.createElement)(L, {
                isExpanded: e,
                onClick: () => {
                  e || (0, u.recordEvent)('tasklist_view_more_product_types_click'), t(!e);
                },
              }),
              (0, r.createElement)(f, null),
            ),
            g
              ? (0, r.createElement)(v.Z, null)
              : o &&
                  (0, r.createElement)(Z.Z, {
                    onCancel: () => {
                      a(!1), (0, u.recordEvent)('tasklist_cancel_load_sample_products_click');
                    },
                    onImport: () => {
                      a(!1), E();
                    },
                  }),
          );
        },
        x = () =>
          (0, r.createElement)(
            a.WooOnboardingTask,
            { id: 'products' },
            (0, r.createElement)(b, null),
          );
      (0, s.registerPlugin)('wc-admin-onboarding-task-products', {
        scope: 'woocommerce-tasks',
        render: () => (0, r.createElement)(x, null),
      });
    },
    53389: (e, t, o) => {
      o.d(t, { Z: () => d });
      var r = o(69307),
        c = o(65736),
        a = o(86020),
        n = o(14812),
        s = o(76357),
        i = o(74617),
        l = o(14599),
        m = o(69987);
      const d = ({
        items: e,
        onClickLoadSampleProduct: t,
        showOtherOptions: o = !0,
        isTaskListItemClicked: d = !1,
      }) => {
        const { recordCompletionTime: p } = (0, m.Z)('products');
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-products-stack' },
          d &&
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-stack__overlay-spinner' },
              (0, r.createElement)(a.Spinner, { className: 'list-overlay' }),
            ),
          (0, r.createElement)(a.List, { items: e }),
          o &&
            (0, r.createElement)(
              n.Text,
              { className: 'woocommerce-stack__other-options' },
              (0, s.Z)({
                mixedString: (0, c.__)(
                  'Can’t find your product type? {{sbLink}}Start Blank{{/sbLink}} or {{LspLink}}Load Sample Products{{/LspLink}} to see what they look like in your store.',
                  'woocommerce',
                ),
                components: {
                  sbLink: (0, r.createElement)(
                    a.Link,
                    {
                      onClick: () => (
                        (0, l.recordEvent)('tasklist_add_product', { method: 'manually' }),
                        p(),
                        (window.location.href = (0, i.getAdminLink)(
                          'post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true',
                        )),
                        !1
                      ),
                      href: '',
                      type: 'wc-admin',
                    },
                    (0, r.createElement)(r.Fragment, null),
                  ),
                  LspLink: (0, r.createElement)(
                    a.Link,
                    { href: '', type: 'wc-admin', onClick: () => (t(), !1) },
                    (0, r.createElement)(r.Fragment, null),
                  ),
                },
              }),
            ),
        );
      };
    },
    35231: (e, t, o) => {
      o.d(t, { Z: () => p });
      var r = o(69307),
        c = o(14599),
        a = o(9818),
        n = o(67221),
        s = o(10431),
        i = o(74617),
        l = o(73516),
        m = o(70319),
        d = o(17062);
      const p = (e, t = [], { onClick: o } = {}) => {
        const { createProductByType: p, isRequesting: u } = (() => {
          const { createProductFromTemplate: e } = (0, a.useDispatch)(n.ITEMS_STORE_NAME),
            [t, o] = (0, r.useState)(!1),
            c = window.wcAdminFeatures['new-product-management-experience'],
            p = async (t, o) => {
              if ('physical' === t || 'variable' === t || 'digital' === t)
                return o
                  ? (0, i.getAdminLink)('post-new.php?post_type=product')
                  : (0, s.getNewPath)({}, '/add-product', {});
              try {
                const r = await e({ template_name: t, status: 'draft' }, { _fields: ['id'] });
                if (r && r.id)
                  return o
                    ? (0, i.getAdminLink)(
                        `post.php?post=${r.id}&action=edit&wc_onboarding_active_task=products&tutorial=true&tutorial_type=${t}`,
                      )
                    : (0, s.getNewPath)({}, '/product/' + r.id, {});
                throw new Error('Unexpected empty data response from server');
              } catch (e) {
                (0, m.a)(e);
              }
            };
          return {
            createProductByType: async e => {
              if (
                (o(!0),
                'physical' === e ||
                  'variable' === e ||
                  'digital' === e ||
                  'grouped' === e ||
                  'external' === e)
              ) {
                if (c) {
                  const t = await p(e, !1);
                  return void (t && (0, s.navigateTo)({ url: t }));
                }
                if (
                  'treatment' ===
                  (
                    await (0, l.loadExperimentAssignment)(
                      'woocommerce_product_creation_experience_pricing_to_general_202406',
                    )
                  ).variationName
                ) {
                  const t = await p(e, !0),
                    o = (0, d.O3)('_feature_nonce');
                  return void (window.location.href =
                    t + `&product_block_editor=1&_feature_nonce=${o}`);
                }
              }
              const t = await p(e, !0);
              t && (0, s.navigateTo)({ url: t }), o(!1);
            },
            isRequesting: t,
          };
        })();
        return {
          productTypes: (0, r.useMemo)(
            () =>
              e.map(e => ({
                ...e,
                onClick: () => {
                  'function' == typeof e?.onClick ? e.onClick() : p(e.key),
                    (0, c.recordEvent)('tasklist_add_product', { method: 'product_template' }),
                    (0, c.recordEvent)('tasklist_product_template_selection', {
                      product_type: e.key,
                      is_suggested: t.includes(e.key),
                    }),
                    'function' == typeof o && o();
                },
              })),
            [e, p, o, t],
          ),
          isRequesting: u,
        };
      };
    },
    35048: (e, t, o) => {
      o.d(t, { Q: () => k, r: () => h });
      var r = o(92819),
        c = o(92694),
        a = o(69307),
        n = o(65736),
        s = o(40031),
        i = o(910),
        l = o(71896),
        m = o(23374),
        d = o(83619);
      const p = Object.freeze([
          {
            key: 'physical',
            title: (0, n.__)('Physical product', 'woocommerce'),
            content: (0, n.__)('A tangible item that gets delivered to customers.', 'woocommerce'),
            before: (0, a.createElement)(s.Z, null),
            after: (0, a.createElement)(m.Z, { icon: d.Z }),
          },
          {
            key: 'digital',
            title: (0, n.__)('Digital product', 'woocommerce'),
            content: (0, n.__)(
              'A digital product like service, downloadable book, music or video.',
              'woocommerce',
            ),
            before: (0, a.createElement)(i.Z, null),
            after: (0, a.createElement)(m.Z, { icon: d.Z }),
          },
          {
            key: 'variable',
            title: (0, n.__)('Variable product', 'woocommerce'),
            content: (0, n.__)('A product with variations like color or size.', 'woocommerce'),
            before: (0, a.createElement)(l.Z, null),
            after: (0, a.createElement)(m.Z, { icon: d.Z }),
          },
          {
            key: 'grouped',
            title: (0, n.__)('Grouped product', 'woocommerce'),
            content: (0, n.__)('A collection of related products.', 'woocommerce'),
            before: (0, a.createElement)(
              () =>
                (0, a.createElement)(
                  'svg',
                  {
                    width: '25',
                    height: '24',
                    viewBox: '0 0 25 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  (0, a.createElement)(
                    'mask',
                    {
                      id: 'mask0_1133_132667',
                      style: { maskType: 'alpha' },
                      maskUnits: 'userSpaceOnUse',
                      x: '2',
                      y: '2',
                      width: '21',
                      height: '20',
                    },
                    (0, a.createElement)('path', {
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      d:
                        'M16.5 2.34497L10.84 7.99497V3.65497H2.84003V11.655H10.84V7.99497L16.5 13.655H12.84V21.655H20.84V13.655H16.5L22.16 7.99497L16.5 2.34497ZM19.33 8.00497L16.5 5.17497L13.67 8.00497L16.5 10.835L19.33 8.00497ZM8.84003 9.65497V5.65497H4.84003V9.65497H8.84003ZM18.84 15.655V19.655H14.84V15.655H18.84ZM8.84003 19.655V15.655H4.84003V19.655H8.84003ZM2.84003 13.655H10.84V21.655H2.84003V13.655Z',
                      fill: 'white',
                    }),
                  ),
                  (0, a.createElement)(
                    'g',
                    { mask: 'url(#mask0_1133_132667)' },
                    (0, a.createElement)('rect', { x: '0.5', width: '24', height: '24' }),
                  ),
                ),
              null,
            ),
            after: (0, a.createElement)(m.Z, { icon: d.Z }),
          },
          {
            key: 'external',
            title: (0, n.__)('External product', 'woocommerce'),
            content: (0, n.__)('Link a product to an external website.', 'woocommerce'),
            before: (0, a.createElement)(
              () =>
                (0, a.createElement)(
                  'svg',
                  {
                    width: '25',
                    height: '24',
                    viewBox: '0 0 25 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  (0, a.createElement)(
                    'mask',
                    {
                      id: 'mask0_1133_132681',
                      style: { maskType: 'alpha' },
                      maskUnits: 'userSpaceOnUse',
                      x: '2',
                      y: '7',
                      width: '21',
                      height: '10',
                    },
                    (0, a.createElement)('path', {
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      d:
                        'M11.5 15H7.5C5.85 15 4.5 13.65 4.5 12C4.5 10.35 5.85 9 7.5 9H11.5V7H7.5C4.74 7 2.5 9.24 2.5 12C2.5 14.76 4.74 17 7.5 17H11.5V15ZM17.5 7H13.5V9H17.5C19.15 9 20.5 10.35 20.5 12C20.5 13.65 19.15 15 17.5 15H13.5V17H17.5C20.26 17 22.5 14.76 22.5 12C22.5 9.24 20.26 7 17.5 7ZM16.5 11H8.5V13H16.5V11Z',
                      fill: 'white',
                    }),
                  ),
                  (0, a.createElement)(
                    'g',
                    { mask: 'url(#mask0_1133_132681)' },
                    (0, a.createElement)('rect', { x: '0.5', width: '24', height: '24' }),
                  ),
                ),
              null,
            ),
            after: (0, a.createElement)(m.Z, { icon: d.Z }),
          },
        ]),
        u =
          ((0, n.__)('can’t decide?', 'woocommerce'),
          (0, n.__)(
            'Load sample products and see what they look like in your store.',
            'woocommerce',
          ),
          (0, a.createElement)(
            () =>
              (0, a.createElement)(
                'svg',
                {
                  width: '25',
                  height: '24',
                  viewBox: '0 0 25 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                (0, a.createElement)(
                  'mask',
                  {
                    id: 'mask0_1133_132689',
                    style: { maskType: 'alpha' },
                    maskUnits: 'userSpaceOnUse',
                    x: '5',
                    y: '2',
                    width: '15',
                    height: '20',
                  },
                  (0, a.createElement)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M12.5 2C8.64 2 5.5 5.14 5.5 9C5.5 11.38 6.69 13.47 8.5 14.74V17C8.5 17.55 8.95 18 9.5 18H15.5C16.05 18 16.5 17.55 16.5 17V14.74C18.31 13.47 19.5 11.38 19.5 9C19.5 5.14 16.36 2 12.5 2ZM9.5 21C9.5 21.55 9.95 22 10.5 22H14.5C15.05 22 15.5 21.55 15.5 21V20H9.5V21ZM14.5 13.7L15.35 13.1C16.7 12.16 17.5 10.63 17.5 9C17.5 6.24 15.26 4 12.5 4C9.74 4 7.5 6.24 7.5 9C7.5 10.63 8.3 12.16 9.65 13.1L10.5 13.7V16H14.5V13.7Z',
                    fill: 'white',
                  }),
                ),
                (0, a.createElement)(
                  'g',
                  { mask: 'url(#mask0_1133_132689)' },
                  (0, a.createElement)('rect', {
                    x: '0.5',
                    width: '24',
                    height: '24',
                    fill: '#757575',
                  }),
                ),
              ),
            null,
          ),
          (0, a.createElement)(m.Z, { icon: d.Z }),
          Object.freeze({
            physical: ['physical', 'variable', 'grouped'],
            downloads: ['digital'],
            'downloads,physical': ['physical', 'digital'],
          })),
        _ = u.physical,
        w = ['physical', 'downloads'],
        k = ({ exclude: e } = {}) => {
          const t = (0, c.applyFilters)('experimental_woocommerce_tasklist_product_types', []);
          let o = [...p, ...t];
          return e && e?.length > 0 && (o = o.filter(t => !e.includes(t.key))), o;
        },
        h = e => {
          const t = (0, r.intersection)(e, w)
            .sort()
            .join(',');
          return u.hasOwnProperty(t) ? u[t] : _;
        };
    },
    69987: (e, t, o) => {
      o.d(t, { Z: () => n });
      var r = o(69307),
        c = o(14599),
        a = o(53736);
      const n = (e, t) => {
        const o = (0, r.useRef)(t || window.performance.now());
        return {
          recordCompletionTime: () => {
            (0, c.recordEvent)('task_completion_time', {
              task_name: e,
              time: (0, a.Jm)(window.performance.now() - o.current),
            });
          },
        };
      };
    },
  },
]);
