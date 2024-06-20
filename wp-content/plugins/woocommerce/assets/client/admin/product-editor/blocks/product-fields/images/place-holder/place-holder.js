'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.PlaceHolder = void 0);
const element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  products_1 = require('./imgs/products');
function PlaceHolder() {
  return (0, element_1.createElement)(
    'div',
    { className: 'woocommerce-image-placeholder__wrapper' },
    (0, element_1.createElement)(products_1.Products, null),
    (0, element_1.createElement)(
      'p',
      null,
      (0, i18n_1.__)(
        'For best results, offer a variety of product images, like close-up details, lifestyle scenes, and color variations.',
        'woocommerce',
      ),
    ),
  );
}
exports.PlaceHolder = PlaceHolder;
