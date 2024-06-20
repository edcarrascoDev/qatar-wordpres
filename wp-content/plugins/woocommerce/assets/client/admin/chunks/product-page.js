'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [7387],
  {
    3995: (e, t, r) => {
      r.r(t), r.d(t, { default: () => _ });
      var n = r(69307),
        o = r(51393),
        c = r(86020),
        l = r(14599),
        d = r(99196),
        a = r(98817),
        u = r(85597),
        i = r(46530),
        s = r(9818),
        p = r(5771);
      (0, o.productEditorHeaderApiFetchMiddleware)(), (0, o.productApiFetchMiddleware)();
      const m = (0, d.lazy)(() => r.e(6083).then(r.bind(r, 6083))),
        E = (0, d.lazy)(() =>
          Promise.resolve()
            .then(r.t.bind(r, 51393, 23))
            .then(e => ({ default: e.__experimentalProductMVPFeedbackModalContainer })),
        );
      function _() {
        const { productId: e } = (0, u.UO)(),
          t = (function(e) {
            const { saveEntityRecord: t } = (0, s.useDispatch)('core'),
              [r, c] = (0, n.useState)(void 0);
            return (
              (0, n.useEffect)(() => {
                (e
                  ? (0, s.resolveSelect)('core').getEntityRecord(
                      'postType',
                      'product',
                      Number.parseInt(e, 10),
                    )
                  : t('postType', 'product', { title: o.AUTO_DRAFT_NAME, status: 'auto-draft' })
                )
                  .then(e => {
                    c(e);
                  })
                  .catch(e => {
                    throw (c(void 0), e);
                  });
              }, [e]),
              r
            );
          })(e);
        return (
          (0, d.useEffect)(() => {
            document.body.classList.add('is-product-editor'),
              (0, a.registerPlugin)('wc-admin-product-editor', {
                scope: 'woocommerce-product-block-editor',
                render: () =>
                  (0, d.useContext)(o.__experimentalEditorLoadingContext)
                    ? null
                    : (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)(
                          o.__experimentalWooProductMoreMenuItem,
                          null,
                          ({ onClose: e }) => (0, n.createElement)(p.e, { onClose: e }),
                        ),
                        (0, n.createElement)(
                          i.WooFooterItem,
                          null,
                          (0, n.createElement)(
                            n.Fragment,
                            null,
                            (0, n.createElement)(o.__experimentalProductMVPCESFooter, {
                              productType: 'product',
                            }),
                            (0, n.createElement)(
                              d.Suspense,
                              { fallback: (0, n.createElement)(c.Spinner, null) },
                              (0, n.createElement)(E, { productId: e ? parseInt(e, 10) : void 0 }),
                            ),
                          ),
                        ),
                        (0, n.createElement)(
                          d.Suspense,
                          { fallback: (0, n.createElement)(c.Spinner, null) },
                          (0, n.createElement)(m, null),
                        ),
                      ),
              });
            const t = (0, o.__experimentalInitBlocks)();
            return () => {
              document.body.classList.remove('is-product-editor'),
                (0, a.unregisterPlugin)('wc-admin-more-menu'),
                t();
            };
          }, [e]),
          (0, d.useEffect)(
            function() {
              e
                ? (0, l.recordEvent)('product_edit_view', {
                    source: o.TRACKS_SOURCE,
                    product_id: e,
                  })
                : (0, l.recordEvent)('product_add_view', { source: o.TRACKS_SOURCE });
            },
            [e],
          ),
          (0, n.createElement)(
            n.Fragment,
            null,
            (0, n.createElement)(o.__experimentalEditor, { product: t }),
          )
        );
      }
    },
  },
]);
