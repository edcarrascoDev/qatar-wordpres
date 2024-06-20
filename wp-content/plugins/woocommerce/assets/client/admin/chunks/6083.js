'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [6083],
  {
    6083: (e, o, t) => {
      t.r(o), t.d(o, { default: () => _ });
      var r = t(69307),
        s = t(65736),
        n = t(86020),
        c = t(51393),
        i = t(14599),
        l = t(10153),
        d = t(42960);
      const a = ({ shouldTourBeShown: e, dismissModal: o }) => {
        const { isNewUser: t, loadingPublishedProductsCount: a } = (0, d.E)();
        (0, r.useEffect)(() => {
          e && (0, i.recordEvent)('block_product_editor_spotlight_view');
        }, [e]);
        const [u, p] = (0, r.useState)(!1),
          { maybeShowFeedbackBar: m } = (0, c.__experimentalUseFeedbackBar)();
        if (a) return null;
        if (u)
          return (0, r.createElement)(l.Z, {
            isNewUser: t,
            onCloseGuide: (e, t) => {
              o(),
                'finish' === t
                  ? (0, i.recordEvent)('block_product_editor_spotlight_tell_me_more_click')
                  : (0, i.recordEvent)('block_product_editor_spotlight_dismissed', {
                      current_page: e + 1,
                    }),
                p(!1),
                m();
            },
          });
        if (e) {
          const { heading: e, description: c } = {
            heading: t
              ? (0, s.__)('Meet the product editing form', 'woocommerce')
              : (0, s.__)('Welcome to the new product form!', 'woocommerce'),
            description: t
              ? (0, s.__)(
                  "Discover the product form's unique features with a quick overview of what's included.",
                  'woocommerce',
                )
              : (0, s.__)(
                  "Discover its new features and improvements with a quick overview of what's included.",
                  'woocommerce',
                ),
          };
          return (0, r.createElement)(n.TourKit, {
            config: {
              steps: [
                {
                  meta: {
                    name: 'woocommerce-block-editor-tour',
                    primaryButton: { text: (0, s.__)('View highlights', 'woocommerce') },
                    descriptions: { desktop: c },
                    heading: (0, r.createElement)(
                      r.Fragment,
                      null,
                      (0, r.createElement)('span', null, e),
                      (0, r.createElement)(n.Pill, null, (0, s.__)('Beta', 'woocommerce')),
                    ),
                  },
                  referenceElements: { desktop: '#adminmenuback' },
                },
              ],
              closeHandler: (e, t, r) => {
                'done-btn' === r
                  ? ((0, i.recordEvent)('block_product_editor_spotlight_view_highlights'), p(!0))
                  : (o(),
                    (0, i.recordEvent)('block_product_editor_spotlight_dismissed', {
                      current_page: 0,
                    }),
                    m());
              },
              options: {
                effects: {
                  arrowIndicator: !1,
                  overlay: !1,
                  liveResize: { rootElementSelector: '#adminmenuback', resize: !0 },
                },
                portalParentElement: document.getElementById('wpbody'),
                popperModifiers: [
                  {
                    name: 'bottom-left',
                    enabled: !0,
                    phase: 'beforeWrite',
                    requires: ['computeStyles'],
                    fn: ({ state: e }) => {
                      (e.styles.popper.top = 'auto'),
                        (e.styles.popper.left = 'auto'),
                        (e.styles.popper.bottom = '10px'),
                        (e.styles.popper.transform = 'translate3d(10px, 0px, 0px)');
                    },
                  },
                ],
                classNames: 'woocommerce-block-editor-tourkit',
              },
            },
          });
        }
        return null;
      };
      var u = t(67221),
        p = t(9818);
      const m = 'woocommerce_block_product_tour_shown',
        _ = () => {
          const e = (() => {
            const { updateOptions: e } = (0, p.useDispatch)(u.OPTIONS_STORE_NAME),
              { shouldTourBeShown: o } = (0, p.useSelect)(e => {
                const { getOption: o, hasFinishedResolution: t } = e(u.OPTIONS_STORE_NAME);
                return { shouldTourBeShown: !('yes' === o(m) || !t('getOption', [m])) };
              });
            return {
              dismissModal: () => {
                e({ [m]: 'yes' });
              },
              shouldTourBeShown: o,
            };
          })();
          return (0, r.createElement)(a, e);
        };
    },
  },
]);
