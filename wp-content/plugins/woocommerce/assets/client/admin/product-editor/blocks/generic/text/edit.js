'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@woocommerce/components'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  text_control_1 = require('../../../components/text-control'),
  validation_context_1 = require('../../../contexts/validation-context'),
  use_product_edits_1 = require('../../../hooks/use-product-edits'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop'));
function Edit({ attributes: e, context: { postType: t } }) {
  var o;
  const i = (0, block_templates_1.useWooBlockProps)(e),
    {
      property: l,
      label: n,
      placeholder: r,
      required: u,
      pattern: a,
      minLength: s,
      maxLength: d,
      min: c,
      max: _,
      help: m,
      tooltip: v,
      disabled: p,
      type: f,
      suffix: h,
    } = e,
    [y, x] = (0, use_product_entity_prop_1.default)(l, { postType: t, fallbackValue: '' }),
    { hasEdit: g } = (0, use_product_edits_1.useProductEdits)(),
    w = (0, element_1.useRef)(null),
    { error: b, validate: q } = (0, validation_context_1.useValidation)(
      l,
      async function() {
        var e, t, o, i, l, n;
        if (!w.current) return;
        const r = w.current;
        let m = '';
        return (
          r.validity.typeMismatch &&
            (m =
              null !== (e = null == f ? void 0 : f.message) && void 0 !== e
                ? e
                : (0, i18n_1.__)('Invalid value for the field.', 'woocommerce')),
          r.validity.valueMissing &&
            (m =
              'string' == typeof u ? u : (0, i18n_1.__)('This field is required.', 'woocommerce')),
          r.validity.patternMismatch &&
            (m =
              null !== (t = null == a ? void 0 : a.message) && void 0 !== t
                ? t
                : (0, i18n_1.__)('Invalid value for the field.', 'woocommerce')),
          r.validity.tooShort &&
            (m = (0, i18n_1.sprintf)(
              null !== (o = null == s ? void 0 : s.message) && void 0 !== o
                ? o
                : (0, i18n_1.__)('The minimum length of the field is %d', 'woocommerce'),
              null == s ? void 0 : s.value,
            )),
          r.validity.tooLong &&
            (m = (0, i18n_1.sprintf)(
              null !== (i = null == d ? void 0 : d.message) && void 0 !== i
                ? i
                : (0, i18n_1.__)('The maximum length of the field is %d', 'woocommerce'),
              null == d ? void 0 : d.value,
            )),
          r.validity.rangeUnderflow &&
            (m = (0, i18n_1.sprintf)(
              null !== (l = null == c ? void 0 : c.message) && void 0 !== l
                ? l
                : (0, i18n_1.__)('The minimum value of the field is %d', 'woocommerce'),
              null == c ? void 0 : c.value,
            )),
          r.validity.rangeOverflow &&
            (m = (0, i18n_1.sprintf)(
              null !== (n = null == _ ? void 0 : _.message) && void 0 !== n
                ? n
                : (0, i18n_1.__)('The maximum value of the field is %d', 'woocommerce'),
              null == _ ? void 0 : _.value,
            )),
          r.setCustomValidity(m),
          r.validity.valid ? void 0 : r.validationMessage
        );
      },
      [f, u, a, s, d, c, _],
    );
  return (0, element_1.createElement)(
    'div',
    { ...i },
    (0, element_1.createElement)(text_control_1.TextControl, {
      ref: w,
      type: null !== (o = null == f ? void 0 : f.value) && void 0 !== o ? o : 'text',
      value: y,
      disabled: p,
      label: n,
      onChange: x,
      onBlur: () => {
        g(l) && q();
      },
      error: b,
      help: m,
      placeholder: r,
      tooltip: v,
      suffix: (function() {
        if (!h || !y || !w.current) return;
        const e = 'url' === w.current.type && !w.current.validity.typeMismatch;
        return !0 === h && e
          ? (0, element_1.createElement)(
              components_1.Link,
              {
                type: 'external',
                href: y,
                target: '_blank',
                rel: 'noreferrer',
                className: 'wp-block-woocommerce-product-text-field__suffix-link',
              },
              (0, element_1.createElement)(icons_1.Icon, { icon: icons_1.external, size: 20 }),
            )
          : 'string' == typeof h
          ? h
          : void 0;
      })(),
      required: Boolean(u),
      pattern: null == a ? void 0 : a.value,
      minLength: null == s ? void 0 : s.value,
      maxLength: null == d ? void 0 : d.value,
      min: null == c ? void 0 : c.value,
      max: null == _ ? void 0 : _.value,
    }),
  );
}
exports.Edit = Edit;
