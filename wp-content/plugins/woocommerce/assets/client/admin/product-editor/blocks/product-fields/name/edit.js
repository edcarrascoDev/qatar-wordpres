'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.NameBlockEdit = void 0);
const compose_1 = require('@wordpress/compose'),
  data_1 = require('@wordpress/data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  url_1 = require('@wordpress/url'),
  block_templates_1 = require('@woocommerce/block-templates'),
  classnames_1 = __importDefault(require('classnames')),
  components_1 = require('@wordpress/components'),
  core_data_1 = require('@wordpress/core-data'),
  edit_product_link_modal_1 = require('../../../components/edit-product-link-modal'),
  label_1 = require('../../../components/label/label'),
  validation_context_1 = require('../../../contexts/validation-context'),
  use_product_edits_1 = require('../../../hooks/use-product-edits'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  utils_1 = require('../../../utils');
function NameBlockEdit({ attributes: e, clientId: t }) {
  const o = (0, block_templates_1.useWooBlockProps)(e),
    { editEntityRecord: r, saveEntityRecord: n } = (0, data_1.useDispatch)('core'),
    { hasEdit: a } = (0, use_product_edits_1.useProductEdits)(),
    [l, c] = (0, element_1.useState)(!1),
    s = (0, core_data_1.useEntityId)('postType', 'product'),
    i = (0, data_1.useSelect)(e => e('core').getEditedEntityRecord('postType', 'product', s)),
    [_, u] = (0, core_data_1.useEntityProp)('postType', 'product', 'sku'),
    [d, m] = (0, core_data_1.useEntityProp)('postType', 'product', 'name'),
    { prefix: p, suffix: f } = (0, utils_1.getPermalinkParts)(i),
    { ref: k, error: E, validate: y } = (0, validation_context_1.useValidation)(
      'name',
      async function() {
        return d && d !== utils_1.AUTO_DRAFT_NAME
          ? d.length > 120
            ? (0, i18n_1.__)(
                'Please enter a product name shorter than 120 characters.',
                'woocommerce',
              )
            : void 0
          : (0, i18n_1.__)('Name field is required.', 'woocommerce');
      },
      [d],
    ),
    w =
      null != E
        ? E
        : s &&
          ['publish', 'draft'].includes(i.status) &&
          p &&
          (0, element_1.createElement)(
            'span',
            {
              className:
                'woocommerce-product-form__secondary-text product-details-section__product-link',
            },
            (0, i18n_1.__)('Product link', 'woocommerce'),
            ': ',
            (0, element_1.createElement)(
              'a',
              { href: i.permalink, target: '_blank', rel: 'noreferrer' },
              p,
              i.slug || (0, url_1.cleanForSlug)(d),
              f,
            ),
            (0, element_1.createElement)(
              components_1.Button,
              { variant: 'link', onClick: () => c(!0) },
              (0, i18n_1.__)('Edit', 'woocommerce'),
            ),
          ),
    q = (0, compose_1.useInstanceId)(components_1.BaseControl, 'product_name'),
    { selectBlock: b } = (0, data_1.useDispatch)('core/block-editor');
  (0, element_1.useEffect)(() => {
    e.autoFocus && b(t);
  }, []);
  const [h, g] = (0, use_product_entity_prop_1.default)('featured');
  function x() {
    g(!h);
  }
  return (0, element_1.createElement)(
    element_1.Fragment,
    null,
    (0, element_1.createElement)(
      'div',
      { ...o },
      (0, element_1.createElement)(
        components_1.BaseControl,
        {
          id: q,
          label: (0, element_1.createElement)(label_1.Label, {
            label: (0, i18n_1.__)('Name', 'woocommerce'),
            required: !0,
          }),
          className: (0, classnames_1.default)({ 'has-error': E }),
          help: w,
        },
        (0, element_1.createElement)(components_1.__experimentalInputControl, {
          id: q,
          ref: k,
          name: 'name',
          autoFocus: e.autoFocus,
          placeholder: (0, i18n_1.__)('e.g. 12 oz Coffee Mug', 'woocommerce'),
          onChange: m,
          value: d && d !== utils_1.AUTO_DRAFT_NAME ? d : '',
          autoComplete: 'off',
          'data-1p-ignore': !0,
          onBlur: () => {
            a('name') && (_ || E || u((0, url_1.cleanForSlug)(d)), y());
          },
          suffix: (function() {
            const e = (0, i18n_1.__)('Mark as featured', 'woocommerce'),
              t = (0, i18n_1.__)('Unmark as featured', 'woocommerce'),
              o = h ? t : e;
            return (0, element_1.createElement)(
              components_1.Tooltip,
              { text: o, position: 'top center' },
              h
                ? (0, element_1.createElement)(components_1.Button, {
                    icon: icons_1.starFilled,
                    'aria-label': t,
                    onClick: x,
                  })
                : (0, element_1.createElement)(components_1.Button, {
                    icon: icons_1.starEmpty,
                    'aria-label': e,
                    onClick: x,
                  }),
            );
          })(),
        }),
      ),
      l &&
        (0, element_1.createElement)(edit_product_link_modal_1.EditProductLinkModal, {
          permalinkPrefix: p || '',
          permalinkSuffix: f || '',
          product: i,
          onCancel: () => c(!1),
          onSaved: () => c(!1),
          saveHandler: async e => {
            const { slug: t, permalink: o } = await n('postType', 'product', { id: i.id, slug: e });
            if (t && o)
              return (
                r('postType', 'product', i.id, { slug: t, permalink: o }), { slug: t, permalink: o }
              );
          },
        }),
    ),
  );
}
exports.NameBlockEdit = NameBlockEdit;
