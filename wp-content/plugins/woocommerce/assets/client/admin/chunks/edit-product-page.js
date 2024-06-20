'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [3307],
  {
    89097: (e, t, o) => {
      o.d(t, { Z: () => a });
      var r = o(69307),
        n = o(70444);
      const a = (0, r.createElement)(
        n.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(n.Path, {
          d: 'M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z',
        }),
      );
    },
    862: (e, t, o) => {
      o.r(t), o.d(t, { default: () => h });
      var r = o(69307),
        n = o(14599),
        a = o(9818),
        c = o(55609),
        i = o(67221),
        s = o(43553),
        l = o(51393),
        m = o(65736),
        d = o(86020);
      const u = ({ onClose: e }) => {
          const t = {
            placement: 'auto',
            options: {
              effects: {
                spotlight: { interactivity: { enabled: !1 } },
                liveResize: { mutation: !0, resize: !0 },
              },
            },
            steps: [
              {
                referenceElements: {
                  desktop:
                    '.woocommerce-product-form-tab__general .woocommerce-form-section__content',
                },
                meta: {
                  name: 'story',
                  heading: (0, m.__)('📣 Tell a story about your product', 'woocommerce'),
                  descriptions: {
                    desktop: (0, m.__)(
                      'The product form will help you describe your product field by field—from basic details like name and description to attributes the customers can use to find it on your store.',
                      'woocommerce',
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '#tab-panel-0-pricing' },
                meta: {
                  name: 'tabs',
                  heading: (0, m.__)('✍️ Set up pricing & more', 'woocommerce'),
                  descriptions: {
                    desktop: (0, m.__)(
                      'When done, use the tabs to switch between other details and settings. In the future, you’ll also find here extensions and plugins.',
                      'woocommerce',
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '.woocommerce-product-form-actions' },
                meta: {
                  name: 'actions',
                  heading: (0, m.__)('🔍 Preview and publish', 'woocommerce'),
                  descriptions: {
                    desktop: (0, m.__)(
                      'With all the details in place, use the buttons at the top to easily preview and publish your product. Click the arrow button for more options.',
                      'woocommerce',
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '.woocommerce-product-form-more-menu' },
                meta: {
                  name: 'more',
                  heading: (0, m.__)('⚙️ Looking for more?', 'woocommerce'),
                  descriptions: {
                    desktop: (0, m.__)(
                      'If the form doesn’t yet have all the features you need —it’s still in development— you can switch to the classic editor anytime.',
                      'woocommerce',
                    ),
                  },
                },
              },
            ],
            closeHandler: e,
          };
          return (0, r.createElement)(d.TourKit, { config: t });
        },
        p = o.p + '46f3be5272a3932c5a1a.png',
        _ = ({ onClose: e, onStart: t }) =>
          (0, r.createElement)(
            c.Modal,
            {
              bodyOpenClassName: 'woocommerce-product-tour-modal__modal-open',
              className: 'woocommerce-product-tour-modal',
              onRequestClose: () => e(),
              overlayClassName: 'woocommerce-product-tour-modal__overlay',
              shouldCloseOnClickOutside: !1,
              title: (0, m.__)('Meet the product editing form', 'woocommerce'),
            },
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-product-tour-modal__header-img' },
              (0, r.createElement)('img', {
                src: p,
                alt: (0, m.__)('Product editing tour', 'woocommerce'),
              }),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-product-tour-modal__content' },
              (0, r.createElement)(
                'p',
                null,
                (0, m.__)(
                  'Let us show you how to navigate the form and create this product from start to finish in no time.',
                  'woocommerce',
                ),
              ),
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-product-tour-modal__actions' },
                (0, r.createElement)(
                  c.Button,
                  { variant: 'tertiary', onClick: () => e() },
                  (0, m.__)("I'll explore on my own", 'woocommerce'),
                ),
                (0, r.createElement)(
                  c.Button,
                  {
                    variant: 'primary',
                    onClick: () => {
                      t();
                    },
                  },
                  (0, m.__)('Show me around (10s)', 'woocommerce'),
                ),
              ),
            ),
          ),
        E = 'woocommerce_product_tour_modal_hidden',
        w = () => {
          const {
              dismissModal: e,
              endTour: t,
              isModalHidden: o,
              isTouring: n,
              startTour: c,
            } = (() => {
              const [e, t] = (0, r.useState)(!1),
                { updateOptions: o } = (0, a.useDispatch)(i.OPTIONS_STORE_NAME),
                { isModalHidden: n } = (0, a.useSelect)(e => {
                  const { getOption: t, hasFinishedResolution: o } = e(i.OPTIONS_STORE_NAME);
                  return { isModalHidden: 'yes' === t(E) || !o('getOption', [E]) };
                }),
                c = () => {
                  o({ [E]: 'yes' });
                };
              return {
                dismissModal: c,
                endTour: () => {
                  t(!1);
                },
                isModalHidden: n,
                isTouring: e,
                startTour: () => {
                  c(), t(!0);
                },
              };
            })(),
            { maybeShowFeedbackBar: s } = (0, l.__experimentalUseFeedbackBar)();
          return n
            ? (0, r.createElement)(u, {
                onClose: () => {
                  t(), s();
                },
              })
            : o
            ? null
            : (0, r.createElement)(_, {
                onClose: () => {
                  e(), s();
                },
                onStart: c,
              });
        },
        h = () => {
          const { isLoading: e } = (0, a.useSelect)(e => {
            const { hasFinishedResolution: t } = e(i.EXPERIMENTAL_PRODUCT_FORM_STORE_NAME);
            return { isLoading: !t('getProductForm') };
          });
          return (
            (0, r.useEffect)(() => {
              (0, n.recordEvent)('view_new_product_management_experience');
            }, []),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-add-product' },
              e
                ? (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-edit-product__spinner' },
                    (0, r.createElement)(c.Spinner, null),
                  )
                : (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(s.H, null),
                    (0, r.createElement)(w, null),
                  ),
            )
          );
        };
    },
    46760: (e, t, o) => {
      o.r(t), o.d(t, { default: () => S });
      var r = o(69307),
        n = o(65736),
        a = o(67221),
        c = o(14599),
        i = o(9818),
        s = o(86020),
        l = o(85597),
        m = o(43553),
        d = o(11701),
        u = o(12314),
        p = o(98817),
        _ = o(23374),
        E = o(70444);
      const w = (0, r.createElement)(
        E.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(E.Path, {
          d: 'M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z',
        }),
      );
      var h = o(89097),
        g = o(87608),
        v = o.n(g);
      function f({
        actionLabel: e,
        actionHref: t,
        prevHref: o,
        prevLabel: a,
        nextHref: c,
        nextLabel: i,
        className: l,
        ...m
      }) {
        const d = {
            className: 'posts-navigation__prev',
            'aria-label': null != a ? a : (0, n.__)('Previous post', 'woocommerce'),
            children: (0, r.createElement)(_.Z, { icon: w, size: 24, fill: 'currentColor' }),
          },
          p = {
            className: 'posts-navigation__next',
            'aria-label': null != i ? i : (0, n.__)('Next post', 'woocommerce'),
            children: (0, r.createElement)(_.Z, { icon: h.Z, size: 24, fill: 'currentColor' }),
          };
        return (0, r.createElement)(
          'nav',
          (0, u.Z)({}, m, { className: v()(l, 'posts-navigation') }),
          o
            ? (0, r.createElement)(s.Link, (0, u.Z)({}, d, { type: 'wc-admin', href: o }))
            : (0, r.createElement)(
                'div',
                (0, u.Z)({}, d, { tabIndex: -1, role: 'button', 'aria-disabled': 'true' }),
              ),
          (0, r.createElement)(
            s.Link,
            { className: 'posts-navigation__action', type: 'wc-admin', href: t },
            e,
          ),
          c
            ? (0, r.createElement)(s.Link, (0, u.Z)({}, p, { type: 'wc-admin', href: c }))
            : (0, r.createElement)(
                'div',
                (0, u.Z)({}, p, { tabIndex: -1, role: 'button', 'aria-disabled': 'true' }),
              ),
        );
      }
      var b = o(94539),
        P = o(25775);
      const y = () => (0, r.createElement)(r.Fragment, null, (0, r.createElement)(P.t, null));
      var T = o(10431);
      const N = ({ product: e, productVariation: t }) => {
          const o = (0, r.useRef)(),
            a = (0, r.useRef)(null),
            c = (function({ product: e, productVariation: t }) {
              var o;
              const { variations: r } = e,
                n = null != r ? r : [],
                a = n.indexOf(null !== (o = t.id) && void 0 !== o ? o : -1),
                c = a > 0,
                i = a < n.length - 1,
                s = c ? n[a - 1] : void 0,
                l = i ? n[a + 1] : void 0,
                m = (0, T.getPersistedQuery)();
              return {
                actionHref: (0, T.getNewPath)(m, `/product/${e.id}`, {}),
                prevHref: s ? (0, T.getNewPath)(m, `/product/${e.id}/variation/${s}`, {}) : void 0,
                nextHref: l ? (0, T.getNewPath)(m, `/product/${e.id}/variation/${l}`, {}) : void 0,
              };
            })({ product: e, productVariation: t });
          return (
            (0, r.useEffect)(() => {
              t && o.current !== t.id && (a.current?.resetForm(t), (o.current = t.id));
            }, [t]),
            (0, r.createElement)(
              s.SlotContextProvider,
              null,
              (0, r.createElement)(
                s.Form,
                { initialValues: t, errors: {}, ref: a },
                (0, r.createElement)(y, null),
                (0, r.createElement)(d.a, { key: t.id, id: 'variation', product: t }),
                (0, r.createElement)(b.H, null),
                (0, r.createElement)(
                  'div',
                  { className: 'product-variation-form__navigation' },
                  (0, r.createElement)(
                    f,
                    (0, u.Z)({}, c, {
                      actionLabel: (0, n.__)('Return to main product', 'woocommerce'),
                      prevLabel: (0, n.__)('Previous product variation', 'woocommerce'),
                      nextLabel: (0, n.__)('Next product variation', 'woocommerce'),
                    }),
                  ),
                ),
                (0, r.createElement)(p.PluginArea, { scope: 'woocommerce-product-editor' }),
              ),
            )
          );
        },
        S = () => {
          const { productId: e, variationId: t } = (0, l.UO)(),
            o = !!t,
            u = (0, r.useRef)(),
            p = (0, r.useRef)(null),
            { product: _, isLoading: E, isPendingAction: w, productVariation: h } = (0,
            i.useSelect)(r => {
              const {
                  getProduct: n,
                  hasFinishedResolution: c,
                  isPending: i,
                  getPermalinkParts: s,
                } = r(a.PRODUCTS_STORE_NAME),
                { hasFinishedResolution: l } = r(a.EXPERIMENTAL_PRODUCT_FORM_STORE_NAME),
                { getProductVariation: m, hasFinishedResolution: d } = r(
                  a.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
                );
              if (e) {
                const r = n(parseInt(e, 10), void 0);
                return {
                  product: s(parseInt(e, 10)) && r ? r : void 0,
                  productVariation: o && m({ id: parseInt(t, 10), product_id: parseInt(e, 10) }),
                  isLoading: !(
                    c('getProduct', [parseInt(e, 10)]) &&
                    c('getPermalinkParts', [parseInt(e, 10)]) &&
                    o &&
                    d('getProductVariation', [parseInt(t, 10)]) &&
                    l('getProductForm')
                  ),
                  isPendingAction:
                    i('createProduct') ||
                    i('deleteProduct', parseInt(e, 10)) ||
                    i('updateProduct', parseInt(e, 10)),
                };
              }
              return { isLoading: !1, isPendingAction: !1 };
            });
          (0, r.useEffect)(() => {
            u.current && _ && u.current.id !== _.id && p.current && p.current.resetForm(_),
              (u.current = _);
          }, [_]),
            (0, r.useEffect)(() => {
              (0, c.recordEvent)('view_new_product_management_experience');
            }, []);
          const g =
            u.current?.id === _?.id && 'trash' !== u.current?.status && 'trash' === _?.status;
          return (0, r.createElement)(
            'div',
            { className: 'woocommerce-edit-product' },
            E && !_
              ? (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-edit-product__spinner' },
                  (0, r.createElement)(s.Spinner, null),
                )
              : null,
            _ &&
              'trash' === _.status &&
              !w &&
              !g &&
              (0, r.createElement)(
                d.a,
                { id: 'error' },
                (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-edit-product__error' },
                  (0, n.__)(
                    'You cannot edit this item because it is in the Trash. Please restore it and try again.',
                    'woocommerce',
                  ),
                ),
              ),
            h && _ && (0, r.createElement)(N, { product: _, productVariation: h }),
            !o &&
              _ &&
              ('trash' !== _.status || g) &&
              (0, r.createElement)(m.H, { formRef: p, product: _ }),
          );
        };
    },
    94539: (e, t, o) => {
      o.d(t, { H: () => a });
      var r = o(69307),
        n = o(51393);
      const a = ({ product: e }) =>
        (0, r.createElement)(
          r.Fragment,
          null,
          e && (0, r.createElement)(n.__experimentalProductMVPCESFooter, { productType: e.type }),
          (0, r.createElement)(n.__experimentalProductMVPFeedbackModalContainer, null),
        );
    },
    11701: (e, t, o) => {
      o.d(t, { a: () => m });
      var r = o(69307),
        n = o(65736),
        a = o(55609),
        c = o(10431),
        i = o(51393),
        s = o(87608),
        l = o.n(s);
      const m = ({ id: e, product: t }) => {
        const o = (0, c.getQuery)();
        (0, r.useEffect)(
          () => (
            window.document.body.classList.add('woocommerce-admin-product-layout'),
            () => {
              window.document.body.classList.remove('woocommerce-admin-product-layout');
            }
          ),
          [],
        );
        const { adminBarHeight: s, headerHeight: m } = (() => {
          const [e, t] = (0, r.useState)(60),
            [o, n] = (0, r.useState)(32);
          return (
            (0, r.useEffect)(() => {
              const e = document.querySelector('#wpbody'),
                o = new MutationObserver(() => {
                  t(parseInt(e.style.marginTop, 10));
                });
              return (
                o.observe(e, { attributes: !0 }),
                () => {
                  o.disconnect();
                }
              );
            }, []),
            (0, r.useLayoutEffect)(() => {
              const e = () => {
                const e = document.querySelector('#wpadminbar');
                n(e.clientHeight);
              };
              return (
                window.addEventListener('resize', e),
                () => {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
            { adminBarHeight: o, headerHeight: e }
          );
        })();
        (0, r.useEffect)(() => {
          const e = document.querySelector('.product-form-layout .components-tab-panel__tabs');
          e && (e.style.top = s + m + 'px');
        }, [s, m]);
        const d = e =>
          e.map(e => ({
            name: e.name,
            title: e.disabled
              ? (0, r.createElement)(
                  a.Tooltip,
                  {
                    text: (0, n.__)(
                      'Manage individual variation details in the Options tab.',
                      'woocommerce',
                    ),
                  },
                  (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-product-form-tab__item-inner' },
                    (0, r.createElement)(
                      'span',
                      { className: 'woocommerce-product-form-tab__item-inner-text' },
                      e.title,
                    ),
                  ),
                )
              : (0, r.createElement)(
                  'span',
                  { className: 'woocommerce-product-form-tab__item-inner' },
                  (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-product-form-tab__item-inner-text' },
                    e.title,
                  ),
                ),
            disabled: e.disabled,
          }));
        return (0, r.createElement)(
          r.Fragment,
          null,
          (0, r.createElement)(
            i.__experimentalWooProductTabItem.Slot,
            { template: 'tab/' + e, fillProps: { product: t } },
            (e, n) => {
              var i;
              return e.length > 0
                ? (0, r.createElement)(
                    a.TabPanel,
                    {
                      className: 'product-form-layout',
                      activeClass: 'is-active',
                      tabs: d(e),
                      initialTabName: null !== (i = o.tab) && void 0 !== i ? i : e[0].name,
                      onSelect: e => {
                        (window.document.documentElement.scrollTop = 0),
                          (0, c.navigateTo)({ url: (0, c.getNewPath)({ tab: e }) });
                      },
                    },
                    e => {
                      const o = l()(
                          'woocommerce-product-form-tab',
                          'woocommerce-product-form-tab__' + e.name,
                        ),
                        a = n[e.name];
                      return (0, r.createElement)(
                        'div',
                        { className: o, key: e.name },
                        'function' == typeof a ? a(t) : a,
                      );
                    },
                  )
                : null;
            },
          ),
        );
      };
    },
    43553: (e, t, o) => {
      o.d(t, { H: () => I });
      var r = o(69307),
        n = o(86020),
        a = o(98817),
        c = o(65736),
        i = o(55609),
        s = o(9818),
        l = o(46530),
        m = o(85797),
        d = o(67221),
        u = o(75606),
        p = o(36018);
      const _ = () => {
        const { values: e } = (0, n.useFormContext)(),
          { resolving: t } = (0, s.useSelect)(e => {
            const { hasFinishedResolution: t } = e(d.OPTIONS_STORE_NAME);
            return { resolving: !t('getOption', [u.ALLOW_TRACKING_OPTION_NAME]) };
          });
        return t
          ? null
          : (0, r.createElement)(
              l.WooHeaderItem,
              null,
              (0, r.createElement)(
                i.DropdownMenu,
                {
                  className: 'woocommerce-product-form-more-menu',
                  label: (0, c.__)('More product options', 'woocommerce'),
                  icon: m.Z,
                },
                ({ onClose: t }) =>
                  (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(p.b, { onClick: t }),
                    (0, r.createElement)(p.U_, { productId: e.id, onClick: t }),
                  ),
              ),
            );
      };
      var E = o(12314),
        w = o(78018),
        h = o(28601),
        g = o(51393);
      const v = () => {
        const { getCheckboxControlProps: e, getInputProps: t } = (0, n.useFormContext)(),
          [o, a] = (0, r.useState)(!1);
        return (0, r.createElement)(
          l.WooHeaderItem,
          null,
          (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(i.Button, {
              'aria-label': (0, c.__)('Settings', 'woocommerce'),
              icon: w.Z,
              isPressed: o,
              onClick: () => a(!o),
              className: 'woocommerce-product-settings__toggle',
            }),
            o &&
              (0, r.createElement)(
                i.Panel,
                { className: 'woocommerce-product-settings__panel' },
                (0, r.createElement)(
                  i.PanelHeader,
                  { label: (0, c.__)('Settings', 'woocommerce') },
                  (0, r.createElement)(i.Button, {
                    icon: h.Z,
                    onClick: () => a(!1),
                    'aria-label': (0, c.__)('Close settings', 'woocommerce'),
                  }),
                ),
                (0, r.createElement)(
                  i.PanelBody,
                  { title: (0, c.__)('Advanced', 'woocommerce') },
                  (0, r.createElement)(
                    i.CheckboxControl,
                    (0, E.Z)(
                      { label: (0, c.__)('Enable reviews', 'woocommerce') },
                      e('reviews_allowed', (0, g.getCheckboxTracks)('reviews_allowed')),
                    ),
                  ),
                  (0, r.createElement)(
                    i.TextControl,
                    (0, E.Z)(
                      { label: (0, c.__)('Menu order', 'woocommerce'), type: 'number' },
                      t('menu_order'),
                    ),
                  ),
                ),
              ),
          ),
        );
      };
      var f = o(25775);
      const b = () =>
        (0, r.createElement)(
          r.Fragment,
          null,
          (0, r.createElement)(f.t, null),
          (0, r.createElement)(v, null),
          (0, r.createElement)(_, null),
        );
      var P = o(11701),
        y = o(76292),
        T = o.n(y);
      function N(e) {
        const t = {},
          o = T()(e.date_on_sale_from_gmt, T().ISO_8601, !0),
          r = T()(e.date_on_sale_to_gmt, T().ISO_8601, !0);
        return (
          e.date_on_sale_from_gmt &&
            !o.isValid() &&
            (t.date_on_sale_from_gmt = (0, c.__)('Please enter a valid date.', 'woocommerce')),
          e.date_on_sale_to_gmt &&
            !r.isValid() &&
            (t.date_on_sale_to_gmt = (0, c.__)('Please enter a valid date.', 'woocommerce')),
          o.isAfter(r) &&
            (t.date_on_sale_from_gmt = (0, c.__)(
              'The start date of the sale must be before the end date.',
              'woocommerce',
            )),
          r.isBefore(o) &&
            (t.date_on_sale_to_gmt = (0, c.__)(
              'The end date of the sale must be after the start date.',
              'woocommerce',
            )),
          t
        );
      }
      const S = e => {
        let t = {};
        var o, r;
        return (
          (t = ((e, t) => {
            const o = { ...t };
            return (
              e.stock_quantity &&
                e.stock_quantity < 0 &&
                (o.stock_quantity = (0, c.__)(
                  'Stock quantity must be a positive number.',
                  'woocommerce',
                )),
              e.low_stock_amount &&
                e.low_stock_amount < 0 &&
                (o.low_stock_amount = (0, c.__)(
                  'Stock quantity must be a positive number.',
                  'woocommerce',
                )),
              o
            );
          })(e, t)),
          e.name?.length || (t.name = (0, c.__)('This field is required.', 'woocommerce')),
          e.name &&
            e.name.length > 120 &&
            (t.name = (0, c.__)(
              'Please enter a product name shorter than 120 characters.',
              'woocommerce',
            )),
          e.regular_price &&
            !/^[0-9.,]+$/.test(e.regular_price) &&
            (t.regular_price = (0, c.__)(
              'Please enter a price with one monetary decimal point without thousand separators and currency symbols.',
              'woocommerce',
            )),
          e.sale_price &&
            !/^[0-9.,]+$/.test(e.sale_price) &&
            (t.sale_price = (0, c.__)(
              'Please enter a price with one monetary decimal point without thousand separators and currency symbols.',
              'woocommerce',
            )),
          e.sale_price &&
            (!e.regular_price || parseFloat(e.sale_price) >= parseFloat(e?.regular_price)) &&
            (t.sale_price = (0, c.__)(
              'Sale price cannot be equal to or higher than regular price.',
              'woocommerce',
            )),
          (t = { ...t, ...N(e) }),
          e.dimensions?.width &&
            +e.dimensions.width <= 0 &&
            (t.dimensions = { width: (0, c.__)('Width must be higher than zero.', 'woocommerce') }),
          e.dimensions?.length &&
            +e.dimensions.length <= 0 &&
            (t.dimensions = {
              ...(null !== (o = t.dimensions) && void 0 !== o ? o : {}),
              length: (0, c.__)('Length must be higher than zero.', 'woocommerce'),
            }),
          e.dimensions?.height &&
            +e.dimensions.height <= 0 &&
            (t.dimensions = {
              ...(null !== (r = t.dimensions) && void 0 !== r ? r : {}),
              height: (0, c.__)('Height must be higher than zero.', 'woocommerce'),
            }),
          e.weight &&
            +e.weight <= 0 &&
            (t.weight = (0, c.__)('Weight must be higher than zero.', 'woocommerce')),
          t
        );
      };
      var k = o(94539);
      const I = ({ product: e, formRef: t }) =>
        (0, r.createElement)(
          n.SlotContextProvider,
          null,
          (0, r.createElement)(
            n.Form,
            {
              initialValues: e || {
                backorders: 'no',
                name: '',
                reviews_allowed: !0,
                sku: '',
                stock_quantity: 0,
                stock_status: 'instock',
              },
              ref: t,
              errors: {},
              validate: S,
            },
            (0, r.createElement)(b, null),
            (0, r.createElement)(P.a, { id: 'general', product: e }),
            (0, r.createElement)(k.H, { product: e }),
            (0, r.createElement)(a.PluginArea, { scope: 'woocommerce-product-editor' }),
          ),
        );
    },
    25775: (e, t, o) => {
      o.d(t, { t: () => f });
      var r = o(69307),
        n = o(65736),
        a = o(46530),
        c = o(67221),
        i = o(74617),
        s = o(10431),
        l = o(51393),
        m = o(86020),
        d = o(85597),
        u = o(9818),
        p = o(23374),
        _ = o(70444);
      const E = (0, r.createElement)(
          _.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, r.createElement)(_.Path, {
            d:
              'M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z',
          }),
        ),
        w = ({ breadcrumbs: e }) => {
          const t =
            e.length > 3
              ? [e[0], { title: (0, r.createElement)(r.Fragment, null, '…') }, e[e.length - 1]]
              : e;
          return (0, r.createElement)(
            'span',
            { className: 'woocommerce-product-breadcrumbs' },
            t.map(e => {
              const { href: t, title: o, type: n } = e;
              return (0, r.createElement)(
                r.Fragment,
                { key: t },
                (0, r.createElement)(
                  'span',
                  { className: 'woocommerce-product-breadcrumbs__item' },
                  t ? (0, r.createElement)(m.Link, { href: t, type: n || 'wp-admin' }, o) : o,
                ),
                (0, r.createElement)(
                  'span',
                  { className: 'woocommerce-product-breadcrumbs__separator' },
                  (0, r.createElement)(p.Z, { icon: E }),
                ),
              );
            }),
          );
        };
      var h = o(87608),
        g = o.n(h);
      const v = () => {
          const { productId: e } = (0, d.UO)(),
            t = (0, u.useSelect)(t =>
              e ? t(c.PRODUCTS_STORE_NAME).getProduct(parseInt(e, 10), void 0) : void 0,
            ),
            o = (0, l.getProductStatus)(t);
          return (0, r.createElement)(
            m.Pill,
            { className: g()('woocommerce-product-status', `is-${o}`) },
            l.PRODUCT_STATUS_LABELS[o],
          );
        },
        f = () => {
          const { values: e } = (0, m.useFormContext)(),
            { productId: t, variationId: o } = (0, d.UO)(),
            { isLoading: p, persistedName: _, productVariation: E } = (0, u.useSelect)(e => {
              const { getProduct: r, hasFinishedResolution: n } = e(c.PRODUCTS_STORE_NAME),
                { getProductVariation: a, hasFinishedResolution: i } = e(
                  c.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
                ),
                s = t ? r(parseInt(t, 10)) : null,
                l = o && t ? a({ id: parseInt(o, 10), product_id: parseInt(t, 10) }) : null,
                m = t && !n('getProduct', [parseInt(t, 10)]),
                d =
                  o &&
                  t &&
                  !i('getProductVariation', [{ id: parseInt(o, 10), product_id: parseInt(t, 10) }]);
              return { persistedName: s?.name, productVariation: l, isLoading: m || d };
            }),
            h = (0, l.getProductTitle)(e.name, e.type, _),
            g = E && (0, l.getProductVariationTitle)(E),
            f = [
              {
                href: (0, i.getAdminLink)('edit.php?post_type=product'),
                title: (0, n.__)('Products', 'woocommerce'),
              },
              {
                href: (0, s.getNewPath)({}, '/product/' + t),
                type: 'wc-admin',
                title: (0, r.createElement)(r.Fragment, null, h, (0, r.createElement)(v, null)),
              },
              g && {
                title: (0, r.createElement)(
                  'span',
                  { title: g },
                  (0, l.getTruncatedProductVariationTitle)(E),
                ),
              },
            ].filter(e => !!e),
            b = f.pop();
          return p
            ? null
            : (0, r.createElement)(
                a.WooHeaderPageTitle,
                null,
                (0, r.createElement)(
                  'span',
                  { className: 'woocommerce-product-title' },
                  (0, r.createElement)(w, { breadcrumbs: f }),
                  (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-product-title__wrapper' },
                    b?.title,
                  ),
                ),
              );
        };
    },
    90185: (e, t, o) => {
      o.r(t), o.d(t, { default: () => u });
      var r = o(69307),
        n = o(51393),
        a = o(14599),
        c = o(46530),
        i = o(98817),
        s = o(85597),
        l = o(5771),
        m = o(9818),
        d = o(36018);
      function u() {
        const { productId: e, variationId: t } = (0, s.UO)(),
          o = (function(e) {
            const [t, o] = (0, r.useState)(void 0);
            return (
              (0, r.useEffect)(() => {
                (0, m.resolveSelect)('core')
                  .getEntityRecord('postType', 'product_variation', Number.parseInt(e, 10))
                  .then(e => {
                    o(e);
                  })
                  .catch(e => {
                    throw (o(void 0), e);
                  });
              }, [e]),
              t
            );
          })(t);
        return (
          (0, r.useEffect)(() => {
            (0, i.registerPlugin)('wc-admin-more-menu', {
              scope: 'woocommerce-product-block-editor',
              render: () =>
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    n.__experimentalWooProductMoreMenuItem,
                    null,
                    ({ onClose: e }) =>
                      (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(d.XG, { onClose: e }),
                        (0, r.createElement)(l.e, { productType: 'product_variation', onClose: e }),
                      ),
                  ),
                ),
            });
            const e = (0, n.__experimentalInitBlocks)();
            return () => {
              (0, i.unregisterPlugin)('wc-admin-more-menu'), e();
            };
          }, []),
          (0, r.useEffect)(
            function() {
              e
                ? (0, a.recordEvent)('product_edit_view', {
                    source: n.TRACKS_SOURCE,
                    product_id: e,
                  })
                : (0, a.recordEvent)('product_add_view', { source: n.TRACKS_SOURCE });
            },
            [e],
          ),
          (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(n.__experimentalEditor, {
              product: o,
              productType: 'product_variation',
            }),
            (0, r.createElement)(
              c.WooFooterItem,
              { order: 0 },
              (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(n.__experimentalVariationSwitcherFooter, {
                  parentId: o?.parent_id,
                  variationId: o?.id,
                }),
                (0, r.createElement)(n.__experimentalProductMVPFeedbackModalContainer, {
                  productId: o?.parent_id,
                }),
              ),
            ),
          )
        );
      }
      (0, n.productEditorHeaderApiFetchMiddleware)(), (0, n.productApiFetchMiddleware)();
    },
  },
]);
