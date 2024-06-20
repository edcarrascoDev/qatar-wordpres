'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.TabButton = exports.DEFAULT_TAB_ORDER = void 0);
const components_1 = require('@wordpress/components'),
  classnames_1 = __importDefault(require('classnames')),
  element_1 = require('@wordpress/element'),
  constants_1 = require('../../../components/tabs/constants');
exports.DEFAULT_TAB_ORDER = 100;
const OrderedWrapper = ({ children: e }) =>
  (0, element_1.createElement)(element_1.Fragment, null, e);
function TabButton({
  children: e,
  className: t,
  id: o,
  order: r = exports.DEFAULT_TAB_ORDER,
  selected: n = !1,
}) {
  const s = (0, classnames_1.default)('wp-block-woocommerce-product-tab__button', t, {
    'is-selected': n,
  });
  return (0, element_1.createElement)(
    components_1.Fill,
    { name: constants_1.TABS_SLOT_NAME },
    t => {
      const { onClick: c } = t;
      return (0, element_1.createElement)(
        OrderedWrapper,
        { order: r },
        (0, element_1.createElement)(
          components_1.Button,
          {
            key: o,
            className: s,
            onClick: () => c(o),
            id: `woocommerce-product-tab__${o}`,
            'aria-controls': `woocommerce-product-tab__${o}-content`,
            'aria-selected': n,
          },
          e,
        ),
      );
    },
  );
}
exports.TabButton = TabButton;
