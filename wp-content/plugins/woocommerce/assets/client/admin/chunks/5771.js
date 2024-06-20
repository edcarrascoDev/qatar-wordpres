'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [5771],
  {
    84560: (e, t, o) => {
      o.d(t, { Z: () => c });
      var n = o(69307),
        r = o(70444);
      const c = (0, n.createElement)(
        r.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(r.Path, {
          d:
            'M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z',
        }),
      );
    },
    36018: (e, t, o) => {
      o.d(t, { _$: () => v, U_: () => h, XG: () => T, b: () => m });
      var n = o(69307),
        r = o(65736),
        c = o(55609),
        a = o(9818),
        i = o(75606),
        l = o(46530),
        s = o(51393),
        d = o(3188);
      const m = ({ onClick: e }) => {
        const { showCesModal: t } = (0, a.useDispatch)(i.STORE_KEY),
          { isDescendantOf: o } = (0, l.useLayoutContext)();
        return (0, n.createElement)(
          c.MenuItem,
          {
            onClick: () => {
              t(
                {
                  action: 'new_product',
                  showDescription: !1,
                  title: (0, r.__)('What do you think of the new product form?', 'woocommerce'),
                  firstQuestion: (0, r.__)(
                    'The product editing screen is easy to use',
                    'woocommerce',
                  ),
                  secondQuestion: (0, r.__)(
                    "The product editing screen's functionality meets my needs",
                    'woocommerce',
                  ),
                  onsubmitLabel: (0, r.__)(
                    "Thanks for the feedback — we'll put it to good use!",
                    'woocommerce',
                  ),
                  getExtraFieldsToBeShown: (e, t, o) =>
                    (0, n.createElement)(
                      n.Fragment,
                      null,
                      (0, n.createElement)(
                        c.BaseControl,
                        {
                          id: 'feedback_additional_thoughts',
                          className: 'woocommerce-product-feedback__additional-thoughts',
                          label: (0, n.createInterpolateElement)(
                            (0, r.__)('ADDITIONAL THOUGHTS <optional />', 'woocommerce'),
                            {
                              optional: (0, n.createElement)(
                                'span',
                                { className: 'woocommerce-product-feedback__optional-input' },
                                (0, r.__)('(OPTIONAL)', 'woocommerce'),
                              ),
                            },
                          ),
                        },
                        (0, n.createElement)(c.TextareaControl, {
                          value: e.additional_thoughts || '',
                          onChange: o => t({ ...e, additional_thoughts: o }),
                          help: o?.additional_thoughts || '',
                        }),
                      ),
                      (0, n.createElement)(
                        c.BaseControl,
                        {
                          id: 'feedback_email',
                          className: 'woocommerce-product-feedback__email',
                          label: (0, n.createInterpolateElement)(
                            (0, r.__)('YOUR EMAIL ADDRESS <optional />', 'woocommerce'),
                            {
                              optional: (0, n.createElement)(
                                'span',
                                { className: 'woocommerce-product-feedback__optional-input' },
                                (0, r.__)('(OPTIONAL)', 'woocommerce'),
                              ),
                            },
                          ),
                        },
                        (0, n.createElement)(c.TextControl, {
                          value: e.email || '',
                          onChange: o => t({ ...e, email: o }),
                          help: o?.email || '',
                        }),
                        (0, n.createElement)(
                          'span',
                          null,
                          (0, r.__)(
                            'In case you want to participate in further discussion and future user research.',
                            'woocommerce',
                          ),
                        ),
                      ),
                    ),
                  validateExtraFields: ({ email: e = '', additional_thoughts: t = '' }) => {
                    const o = {};
                    return (
                      e.length > 0 &&
                        !(0, s.isValidEmail)(e) &&
                        (o.email = (0, r.__)('Please enter a valid email address.', 'woocommerce')),
                      t?.length > 500 &&
                        (o.additional_thoughts = (0, r.__)(
                          'Please enter no more than 500 characters.',
                          'woocommerce',
                        )),
                      o
                    );
                  },
                },
                { shouldShowComments: () => !1 },
                { type: 'snackbar' },
                { block_editor: o('product-block-editor') },
              ),
                e();
            },
            icon: (0, n.createElement)(d.A, null),
            iconPosition: 'right',
          },
          (0, r.__)('Share feedback', 'woocommerce'),
        );
      };
      var u = o(74617),
        _ = o(67221),
        p = o(17062);
      const h = ({ onClick: e, productId: t }) => {
        const { showProductMVPFeedbackModal: o } = (0, a.useDispatch)(i.STORE_KEY),
          { allowTracking: l, resolving: s } = (0, a.useSelect)(e => {
            const { getOption: t, hasFinishedResolution: o } = e(_.OPTIONS_STORE_NAME);
            return {
              allowTracking: 'yes' === (t(i.ALLOW_TRACKING_OPTION_NAME) || 'no'),
              resolving: !o('getOption', [i.ALLOW_TRACKING_OPTION_NAME]),
            };
          }),
          d = (0, p.O3)('_feature_nonce'),
          m = t
            ? (0, u.getAdminLink)(
                `post.php?post=${t}&action=edit&product_block_editor=0&_feature_nonce=${d}`,
              )
            : (0, u.getAdminLink)(
                `post-new.php?post_type=product&product_block_editor=0&_feature_nonce=${d}`,
              );
        return s
          ? null
          : (0, n.createElement)(
              c.MenuItem,
              {
                onClick: function() {
                  l ? o() : (window.location.href = m), e();
                },
                info: (0, r.__)(
                  'Save changes and go back to the classic product editing screen.',
                  'woocommerce',
                ),
              },
              (0, r.__)('Turn off the new product form', 'woocommerce'),
            );
      };
      var g = o(23374),
        w = o(84560),
        E = o(10153),
        f = o(42960);
      const v = ({ onClick: e = () => null, onCloseGuide: t }) => {
        const [o, a] = (0, n.useState)(!1),
          { isNewUser: i } = (0, f.E)();
        return (0, n.createElement)(
          n.Fragment,
          null,
          (0, n.createElement)(
            c.MenuItem,
            {
              onClick: () => {
                a(!0), e();
              },
              icon: (0, n.createElement)(g.Z, { icon: w.Z }),
              iconPosition: 'right',
            },
            (0, r.__)('About the form…', 'woocommerce'),
          ),
          o &&
            (0, n.createElement)(E.Z, {
              isNewUser: i,
              onCloseGuide: () => {
                a(!1), t();
              },
            }),
        );
      };
      var b = o(85597),
        k = o(10431),
        C = o(14599),
        y = o(37798);
      const T = ({ onClose: e }) => {
        const [t, o] = (0, n.useState)(!1),
          { productId: i } = (0, b.UO)(),
          l = (0, y.useEntityId)('postType', 'product_variation'),
          {
            invalidateVariationList: d,
            goToNextVariation: m,
            goToPreviousVariation: u,
            numberOfVariations: p,
          } = (0, s.__experimentalUseVariationSwitcher)({
            parentId: i ? parseInt(i, 10) : void 0,
            variationId: l,
          }),
          [h] = (0, y.useEntityProp)('postType', 'product_variation', 'name'),
          [g] = (0, y.useEntityProp)('postType', 'product_variation', 'status'),
          { deleteProductVariation: w } = (0, a.useDispatch)(
            _.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
          ),
          { createSuccessNotice: E, createErrorNotice: f } = (0, a.useDispatch)('core/notices');
        return (0, n.createElement)(
          n.Fragment,
          null,
          (0, n.createElement)(
            c.MenuGroup,
            null,
            (0, n.createElement)(
              c.MenuItem,
              {
                isDestructive: !0,
                variant: 'tertiary',
                onClick: function() {
                  (0, C.recordEvent)('product_dropdown_option_click', {
                    selected_option: 'delete_variation',
                    product_id: i,
                    variation_id: l,
                    product_status: g,
                  }),
                    o(!0);
                },
              },
              (0, r.__)('Delete variation', 'woocommerce'),
            ),
          ),
          t &&
            (0, n.createElement)(s.RemoveConfirmationModal, {
              title: (0, r.sprintf)((0, r.__)('Delete %s?', 'woocommerce'), h),
              description: (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)(
                  'p',
                  null,
                  (0, r.__)(
                    'If you continue, this variation with all of its information will be deleted and customers will no longer be able to purchase it.',
                    'woocommerce',
                  ),
                ),
                (0, n.createElement)(
                  'strong',
                  null,
                  (0, r.__)('Deleted variations cannot be restored.', 'woocommerce'),
                ),
              ),
              onRemove: async function() {
                return (
                  (0, C.recordEvent)('product_delete_variation_modal', {
                    action: 'delete',
                    product_id: i,
                    variation_id: l,
                    product_status: g,
                  }),
                  w({ product_id: i, id: l })
                    .then(() => {
                      E((0, r.sprintf)((0, r.__)('%s deleted.', 'woocommerce'), h)),
                        o(!1),
                        e(),
                        d(),
                        p && p > 1
                          ? m() || u()
                          : (0, k.navigateTo)({ url: (0, k.getNewPath)({}, `/product/${i}`) });
                    })
                    .catch(() => {
                      f((0, r.__)('Failed to delete the variation.', 'woocommerce'));
                    })
                );
              },
              onCancel: function() {
                (0, C.recordEvent)('product_delete_variation_modal', {
                  action: 'close',
                  product_id: i,
                  variation_id: l,
                  product_status: g,
                }),
                  o(!1);
              },
            }),
        );
      };
    },
    5771: (e, t, o) => {
      o.d(t, { e: () => d });
      var n = o(69307),
        r = o(55609),
        c = o(65736),
        a = o(14599),
        i = o(9818),
        l = o(37798),
        s = o(36018);
      const d = ({ productType: e = 'product', onClose: t }) => {
        var o;
        const [d] = (0, l.useEntityProp)('postType', e, 'id'),
          m = (0, i.useSelect)(
            t => {
              const { getEntityRecord: o } = t('core');
              return o('postType', e, d);
            },
            [d, e],
          ),
          u = e => {
            (0, a.recordEvent)('product_dropdown_option_click', {
              selected_option: e,
              product_type: m.type,
              product_status: m.status,
            });
          };
        return (0, n.createElement)(
          n.Fragment,
          null,
          (0, n.createElement)(
            r.MenuGroup,
            { label: (0, c.__)('New product form (Beta)', 'woocommerce') },
            (0, n.createElement)(s._$, {
              onClick: () => {
                u('about');
              },
              onCloseGuide: () => {
                t();
              },
            }),
            (0, n.createElement)(s.b, {
              onClick: () => {
                u('feedback'), t();
              },
            }),
          ),
          (0, n.createElement)(
            r.MenuGroup,
            null,
            (0, n.createElement)(s.U_, {
              productId: null !== (o = m.parent_id) && void 0 !== o ? o : m.id,
              onClick: () => {
                u('classic_editor'), t();
              },
            }),
          ),
        );
      };
    },
    10153: (e, t, o) => {
      o.d(t, { Z: () => p });
      var n = o(69307),
        r = o(65736),
        c = o(87608),
        a = o.n(c),
        i = o(55609),
        l = o(70444);
      const s = ({ isSelected: e }) =>
        (0, n.createElement)(
          l.SVG,
          { width: '8', height: '8', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          (0, n.createElement)(l.Circle, {
            cx: '4',
            cy: '4',
            r: '4',
            fill: e ? '#419ECD' : '#E1E3E6',
          }),
        );
      function d({ currentPage: e, numberOfPages: t, setCurrentPage: o }) {
        return (0, n.createElement)(
          'ul',
          {
            className: 'components-guide__page-control',
            'aria-label': (0, r.__)('Guide controls', 'woocommerce'),
          },
          Array.from({ length: t }).map((c, a) =>
            (0, n.createElement)(
              'li',
              { key: a, 'aria-current': a === e ? 'step' : void 0 },
              (0, n.createElement)(i.Button, {
                key: a,
                icon: (0, n.createElement)(s, { isSelected: a === e }),
                'aria-label': (0, r.sprintf)(
                  (0, r.__)('Page %1$d of %2$d', 'woocommerce'),
                  a + 1,
                  t,
                ),
                onClick: () => o(a),
              }),
            ),
          ),
        );
      }
      const m = function({
          className: e,
          contentLabel: t,
          finishButtonText: o = (0, r.__)('Finish', 'woocommerce'),
          finishButtonLink: c,
          onFinish: l,
          pages: s = [],
        }) {
          const m = (0, n.useRef)(null),
            [u, _] = (0, n.useState)(0),
            p = u > 0,
            h = u < s.length - 1,
            g = () => {
              p && _(u - 1);
            },
            w = () => {
              h && _(u + 1);
            };
          return 0 === s.length
            ? null
            : (0, n.createElement)(
                i.Modal,
                {
                  className: a()('components-guide', e),
                  title: t,
                  onRequestClose: () => {
                    l(u, 'close');
                  },
                  onKeyDown: e => {
                    'ArrowLeft' === e.code
                      ? (g(), e.preventDefault())
                      : 'ArrowRight' === e.code && (w(), e.preventDefault());
                  },
                  ref: m,
                },
                (0, n.createElement)(
                  'div',
                  { className: 'components-guide__container' },
                  (0, n.createElement)(
                    'div',
                    { className: 'components-guide__page' },
                    s[u].image,
                    s.length > 1 &&
                      (0, n.createElement)(d, {
                        currentPage: u,
                        numberOfPages: s.length,
                        setCurrentPage: _,
                      }),
                    s[u].content,
                  ),
                  (0, n.createElement)(
                    'div',
                    { className: 'components-guide__footer' },
                    p &&
                      (0, n.createElement)(
                        i.Button,
                        {
                          className: 'components-guide__back-button',
                          variant: 'tertiary',
                          onClick: g,
                        },
                        (0, r.__)('Previous', 'woocommerce'),
                      ),
                    h &&
                      (0, n.createElement)(
                        i.Button,
                        {
                          className: 'components-guide__forward-button',
                          variant: 'primary',
                          onClick: w,
                        },
                        (0, r.__)('Next', 'woocommerce'),
                      ),
                    !h &&
                      (0, n.createElement)(
                        i.Button,
                        {
                          className: 'components-guide__finish-button',
                          variant: 'primary',
                          href: c,
                          target: c ? '_blank' : void 0,
                          rel: c ? 'noopener' : void 0,
                          onClick: () => l(u, 'finish'),
                        },
                        o,
                      ),
                  ),
                ),
              );
        },
        u = ({ page: e }) =>
          (0, n.createElement)(
            n.Fragment,
            null,
            (0, n.createElement)(
              'h1',
              { className: 'woocommerce-block-editor-guide__heading' },
              e.heading,
            ),
            (0, n.createElement)(
              'p',
              { className: 'woocommerce-block-editor-guide__text' },
              e.text,
            ),
          ),
        _ = ({ page: e }) =>
          (0, n.createElement)('div', {
            className: `woocommerce-block-editor-guide__header woocommerce-block-editor-guide__header-${e.index +
              1}`,
          }),
        p = ({ onCloseGuide: e }) => {
          const t = [
            {
              heading: (0, r.__)('Fresh and modern interface', 'woocommerce'),
              text: (0, r.__)(
                'Everything you need to create and sell your products, all in one place. From photos and descriptions to pricing and inventory, all of your product settings can be found here.',
                'woocommerce',
              ),
            },
            {
              heading: (0, r.__)('Content-rich product descriptions', 'woocommerce'),
              text: (0, r.__)(
                "Show off what's great about your products and engage your customers with content-rich product descriptions. Add images, videos, and any other content they might need to make a purchase.",
                'woocommerce',
              ),
            },
            {
              heading: (0, r.__)('Lightning fast performance ', 'woocommerce'),
              text: (0, r.__)(
                'Get your products listed and available for purchase in no time! Our modern technology ensures a reliable and streamlined experience.',
                'woocommerce',
              ),
            },
            {
              heading: (0, r.__)('More features are on the way', 'woocommerce'),
              text: (0, r.__)(
                "We're actively working on adding more features to the product form, including the ability to add digital products, variations, and more. Watch this space!",
                'woocommerce',
              ),
            },
          ].map((e, t) => ({
            content: (0, n.createElement)(u, { page: e }),
            image: (0, n.createElement)(_, { page: { ...e, index: t } }),
          }));
          return (0, n.createElement)(m, {
            className: 'woocommerce-block-editor-guide',
            contentLabel: '',
            finishButtonText: (0, r.__)('Tell me more', 'woocommerce'),
            finishButtonLink: 'https://woocommerce.com/product-form-beta',
            onFinish: e,
            pages: t,
          });
        };
    },
    42960: (e, t, o) => {
      o.d(t, { E: () => a });
      var n = o(67221),
        r = o(9818);
      const c = { status: 'publish', _fields: ['id'] },
        a = () =>
          (0, r.useSelect)(e => {
            const { getProductsTotalCount: t, hasFinishedResolution: o } = e(n.PRODUCTS_STORE_NAME),
              r = t(c, 0);
            return {
              publishedProductsCount: r,
              loadingPublishedProductsCount: !o('getProductsTotalCount', [c, 0]),
              isNewUser: r < 1,
            };
          });
    },
  },
]);
