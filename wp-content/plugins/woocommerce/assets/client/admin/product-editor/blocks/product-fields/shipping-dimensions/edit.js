'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  data_1 = require('@woocommerce/data'),
  compose_1 = require('@wordpress/compose'),
  core_data_1 = require('@wordpress/core-data'),
  data_2 = require('@wordpress/data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  classnames_1 = __importDefault(require('classnames')),
  components_1 = require('@wordpress/components'),
  use_product_helper_1 = require('../../../hooks/use-product-helper'),
  shipping_dimensions_image_1 = require('../../../components/shipping-dimensions-image'),
  validation_context_1 = require('../../../contexts/validation-context');
function Edit({ attributes: e, clientId: t, context: n }) {
  var o, i, r;
  const l = (0, block_templates_1.useWooBlockProps)(e),
    [s, a] = (0, core_data_1.useEntityProp)('postType', n.postType, 'dimensions'),
    [m, _] = (0, core_data_1.useEntityProp)('postType', n.postType, 'weight'),
    [c] = (0, core_data_1.useEntityProp)('postType', n.postType, 'virtual'),
    [d, u] = (0, element_1.useState)(),
    { formatNumber: p, parseNumber: h } = (0, use_product_helper_1.useProductHelper)(),
    { dimensionUnit: g, weightUnit: v } = (0, data_2.useSelect)(e => {
      const { getOption: t } = e(data_1.OPTIONS_STORE_NAME);
      return {
        dimensionUnit: t('woocommerce_dimension_unit'),
        weightUnit: t('woocommerce_weight_unit'),
      };
    }, []);
  function w(t, n) {
    return {
      name: `dimensions.${t}`,
      value: s ? p(String(s[t])) : void 0,
      onChange: e => a({ ...(null != s ? s : {}), [t]: h(e) }),
      onFocus: () => u(n),
      onBlur: () => u(void 0),
      suffix: g,
      disabled: e.disabled || c,
    };
  }
  const { ref: f, error: E, validate: b } = (0, validation_context_1.useValidation)(
      `dimensions_width-${t}`,
      async function() {
        if ((null == s ? void 0 : s.width) && +s.width <= 0)
          return (0, i18n_1.__)('Width must be greater than zero.', 'woocommerce');
      },
      [null == s ? void 0 : s.width],
    ),
    { ref: I, error: x, validate: B } = (0, validation_context_1.useValidation)(
      `dimensions_length-${t}`,
      async function() {
        if ((null == s ? void 0 : s.length) && +s.length <= 0)
          return (0, i18n_1.__)('Length must be greater than zero.', 'woocommerce');
      },
      [null == s ? void 0 : s.length],
    ),
    { ref: C, error: y, validate: S } = (0, validation_context_1.useValidation)(
      `dimensions_height-${t}`,
      async function() {
        if ((null == s ? void 0 : s.height) && +s.height <= 0)
          return (0, i18n_1.__)('Height must be greater than zero.', 'woocommerce');
      },
      [null == s ? void 0 : s.height],
    ),
    { ref: q, error: N, validate: k } = (0, validation_context_1.useValidation)(
      `weight-${t}`,
      async function() {
        if (m && +m <= 0) return (0, i18n_1.__)('Weight must be greater than zero.', 'woocommerce');
      },
      [m],
    ),
    T = {
      ...w('width', 'A'),
      id: (0, compose_1.useInstanceId)(
        components_1.BaseControl,
        'product_shipping_dimensions_width',
      ),
      ref: f,
      onBlur: b,
    },
    P = {
      ...w('length', 'B'),
      id: (0, compose_1.useInstanceId)(
        components_1.BaseControl,
        'product_shipping_dimensions_length',
      ),
      ref: I,
      onBlur: B,
    },
    D = {
      ...w('height', 'C'),
      id: (0, compose_1.useInstanceId)(
        components_1.BaseControl,
        'product_shipping_dimensions_height',
      ),
      ref: C,
      onBlur: S,
    },
    O = {
      id: (0, compose_1.useInstanceId)(components_1.BaseControl, 'product_shipping_weight'),
      name: 'weight',
      value: p(String(m)),
      onChange: e => _(h(e)),
      suffix: v,
      ref: q,
      onBlur: k,
      disabled: e.disabled || c,
    };
  return (0, element_1.createElement)(
    'div',
    { ...l },
    (0, element_1.createElement)('h4', null, (0, i18n_1.__)('Dimensions', 'woocommerce')),
    (0, element_1.createElement)(
      'div',
      { className: 'wp-block-columns' },
      (0, element_1.createElement)(
        'div',
        { className: 'wp-block-column' },
        (0, element_1.createElement)(
          components_1.BaseControl,
          {
            id: T.id,
            label: (0, element_1.createInterpolateElement)(
              (0, i18n_1.__)('Width <Side />', 'woocommerce'),
              { Side: (0, element_1.createElement)('span', null, 'A') },
            ),
            className: (0, classnames_1.default)({ 'has-error': E }),
            help: E,
          },
          (0, element_1.createElement)(components_1.__experimentalInputControl, { ...T }),
        ),
        (0, element_1.createElement)(
          components_1.BaseControl,
          {
            id: P.id,
            label: (0, element_1.createInterpolateElement)(
              (0, i18n_1.__)('Length <Side />', 'woocommerce'),
              { Side: (0, element_1.createElement)('span', null, 'B') },
            ),
            className: (0, classnames_1.default)({ 'has-error': x }),
            help: x,
          },
          (0, element_1.createElement)(components_1.__experimentalInputControl, { ...P }),
        ),
        (0, element_1.createElement)(
          components_1.BaseControl,
          {
            id: D.id,
            label: (0, element_1.createInterpolateElement)(
              (0, i18n_1.__)('Height <Side />', 'woocommerce'),
              { Side: (0, element_1.createElement)('span', null, 'C') },
            ),
            className: (0, classnames_1.default)({ 'has-error': y }),
            help: y,
          },
          (0, element_1.createElement)(components_1.__experimentalInputControl, { ...D }),
        ),
        (0, element_1.createElement)(
          components_1.BaseControl,
          {
            id: O.id,
            label: (0, i18n_1.__)('Weight', 'woocommerce'),
            className: (0, classnames_1.default)({ 'has-error': N }),
            help: N,
          },
          (0, element_1.createElement)(components_1.__experimentalInputControl, { ...O }),
        ),
      ),
      (0, element_1.createElement)(
        'div',
        { className: 'wp-block-column' },
        (0, element_1.createElement)(shipping_dimensions_image_1.ShippingDimensionsImage, {
          highlight: d,
          className: 'wp-block-woocommerce-product-shipping-dimensions-fields__dimensions-image',
          labels: {
            A: (null === (o = T.value) || void 0 === o ? void 0 : o.length) ? T.value : void 0,
            B: (null === (i = P.value) || void 0 === i ? void 0 : i.length) ? P.value : void 0,
            C: (null === (r = D.value) || void 0 === r ? void 0 : r.length) ? D.value : void 0,
          },
        }),
      ),
    ),
  );
}
exports.Edit = Edit;
