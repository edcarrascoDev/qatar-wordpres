'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.VariableProductTour = void 0);
const element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  components_1 = require('@woocommerce/components'),
  data_1 = require('@woocommerce/data'),
  tracks_1 = require('@woocommerce/tracks'),
  data_2 = require('@wordpress/data'),
  core_data_1 = require('@wordpress/core-data'),
  constants_1 = require('../../../constants'),
  VariableProductTour = () => {
    const [e, o] = (0, element_1.useState)(!1),
      t = (0, core_data_1.useEntityId)('postType', 'product'),
      r = (0, element_1.useRef)(),
      a = (0, element_1.useMemo)(
        () => ({
          product_id: t,
          page: 1,
          per_page: constants_1.DEFAULT_VARIATION_PER_PAGE_OPTION,
          order: 'asc',
          orderby: 'menu_order',
        }),
        [t],
      ),
      { totalCount: c } = (0, data_2.useSelect)(
        e => {
          const { getProductVariationsTotalCount: o } = e(
            data_1.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
          );
          return { totalCount: o(a) };
        },
        [t],
      ),
      { updateUserPreferences: n, variable_product_block_tour_shown: s } = (0,
      data_1.useUserPreferences)(),
      i = {
        placement: 'top',
        steps: [
          {
            referenceElements: { desktop: '.wp-block-woocommerce-product-variation-items-field' },
            focusElement: { desktop: '.wp-block-woocommerce-product-variation-items-field' },
            meta: {
              name: 'product-variations-2',
              heading: (0, i18n_1.__)('⚡️ This product now has variations', 'woocommerce'),
              descriptions: {
                desktop: (0, i18n_1.__)(
                  'From now on, you’ll manage pricing, shipping, and inventory for each variation individually—just like any other product in your store.',
                  'woocommerce',
                ),
              },
              primaryButton: { text: (0, i18n_1.__)('Got it', 'woocommerce') },
            },
          },
        ],
        options: {
          classNames: ['variation-items-product-tour'],
          effects: { arrowIndicator: !0, spotlight: { interactivity: { enabled: !0 } } },
          callbacks: {
            onStepViewOnce: () => {
              (0, tracks_1.recordEvent)('variable_product_block_tour_shown', { variable_count: c });
            },
          },
          popperModifiers: [{ name: 'offset', options: { offset: [0, 32] } }],
        },
        closeHandler: () => {
          n({ variable_product_block_tour_shown: 'yes' }),
            o(!1),
            (0, tracks_1.recordEvent)('variable_product_block_tour_dismissed');
        },
      };
    (0, element_1.useEffect)(() => {
      const t = r.current !== c && c > 0 && 0 === r.current;
      (r.current = c), t && !e && o(!0);
    }, [c]);
    const { hasShownProductEditorTour: u } = (0, data_2.useSelect)(e => {
      const { getOption: o } = e(data_1.OPTIONS_STORE_NAME);
      return { hasShownProductEditorTour: 'yes' === o('woocommerce_block_product_tour_shown') };
    });
    return 'yes' !== s && e && u
      ? (0, element_1.createElement)(components_1.TourKit, { config: i })
      : null;
  };
exports.VariableProductTour = VariableProductTour;
