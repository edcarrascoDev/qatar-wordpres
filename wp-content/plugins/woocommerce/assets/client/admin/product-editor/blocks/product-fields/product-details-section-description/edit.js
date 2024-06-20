'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
      ? function(e, t, o, n) {
          void 0 === n && (n = o);
          var r = Object.getOwnPropertyDescriptor(t, o);
          (r && !('get' in r ? !t.__esModule : r.writable || r.configurable)) ||
            (r = {
              enumerable: !0,
              get: function() {
                return t[o];
              },
            }),
            Object.defineProperty(e, n, r);
        }
      : function(e, t, o, n) {
          void 0 === n && (n = o), (e[n] = t[o]);
        }),
  __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function(e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function(e, t) {
          e.default = t;
        }),
  __importStar =
    (this && this.__importStar) ||
    function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var o in e)
          'default' !== o && Object.prototype.hasOwnProperty.call(e, o) && __createBinding(t, e, o);
      return __setModuleDefault(t, e), t;
    },
  __importDefault =
    (this && this.__importDefault) ||
    function(e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ProductDetailsSectionDescriptionBlockEdit = void 0);
const classnames_1 = __importDefault(require('classnames')),
  components_1 = require('@wordpress/components'),
  data_1 = require('@wordpress/data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons = __importStar(require('@wordpress/icons')),
  block_templates_1 = require('@woocommerce/block-templates'),
  navigation_1 = require('@woocommerce/navigation'),
  tracks_1 = require('@woocommerce/tracks'),
  core_data_1 = require('@wordpress/core-data'),
  block_slot_fill_1 = require('../../../components/block-slot-fill'),
  validation_context_1 = require('../../../contexts/validation-context'),
  constants_1 = require('../../../constants'),
  get_product_error_message_1 = require('../../../utils/get-product-error-message'),
  wooIcons = __importStar(require('../../../icons'));
function ProductDetailsSectionDescriptionBlockEdit({ attributes: e, clientId: t }) {
  var o;
  const n = (0, block_templates_1.useWooBlockProps)(e),
    { productTemplates: r, productTemplate: c } = (0, data_1.useSelect)(e => {
      const { getEditorSettings: t } = e('core/editor');
      return t();
    }),
    [a, i] = r.reduce(
      ([e, t], o) => (o.isSelectableByUser && (o.layoutTemplateId ? e.push(o) : t.push(o)), [e, t]),
      [[], []],
    ),
    l = (0, core_data_1.useEntityId)('postType', 'product'),
    { validate: s } = (0, validation_context_1.useValidations)(),
    { editEntityRecord: d, saveEditedEntityRecord: _, saveEntityRecord: u } = (0,
    data_1.useDispatch)('core'),
    { createSuccessNotice: m, createErrorNotice: p } = (0, data_1.useDispatch)('core/notices'),
    v = (0, data_1.useSelect)(
      e => {
        const { getBlockRootClientId: o } = e('core/block-editor');
        return o(t);
      },
      [t],
    ),
    [w, f] = (0, element_1.useState)(),
    { isSaving: g } = (0, data_1.useSelect)(
      e => {
        const { isSavingEntityRecord: t } = e('core');
        return { isSaving: t('postType', 'product', l) };
      },
      [l],
    );
  if (v)
    return (0, element_1.createElement)(
      block_slot_fill_1.BlockFill,
      { name: 'section-description', slotContainerBlockName: 'woocommerce/product-section' },
      (0, element_1.createElement)(
        'div',
        { ...n },
        (0, element_1.createElement)(
          'p',
          null,
          (0, element_1.createInterpolateElement)(
            (0, i18n_1.__)('This is a <ProductTemplate />.', 'woocommerce'),
            {
              ProductTemplate: (0, element_1.createElement)(
                'span',
                null,
                null === (o = null == c ? void 0 : c.title) || void 0 === o
                  ? void 0
                  : o.toLowerCase(),
              ),
            },
          ),
        ),
        (0, element_1.createElement)(components_1.Dropdown, {
          focusOnMount: !0,
          popoverProps: { placement: 'bottom-start' },
          renderToggle: ({ isOpen: e, onToggle: t }) =>
            (0, element_1.createElement)(
              components_1.Button,
              { 'aria-expanded': e, variant: 'link', onClick: k(e, t) },
              (0, element_1.createElement)(
                'span',
                null,
                (0, i18n_1.__)('Change product type', 'woocommerce'),
              ),
            ),
          renderContent: ({ onClose: e }) =>
            (0, element_1.createElement)(
              'div',
              {
                className:
                  'wp-block-woocommerce-product-details-section-description__dropdown components-dropdown-menu__menu',
              },
              (0, element_1.createElement)(components_1.MenuGroup, null, a.map(y(e))),
              i.length > 0 &&
                (0, element_1.createElement)(
                  components_1.MenuGroup,
                  null,
                  (0, element_1.createElement)(components_1.Dropdown, {
                    popoverProps: { placement: 'right-start' },
                    renderToggle: ({ isOpen: e, onToggle: t }) =>
                      (0, element_1.createElement)(
                        components_1.MenuItem,
                        {
                          'aria-expanded': e,
                          icon: h('chevronRight'),
                          iconPosition: 'right',
                          onClick: t,
                        },
                        (0, element_1.createElement)(
                          'span',
                          null,
                          (0, i18n_1.__)('More', 'woocommerce'),
                        ),
                      ),
                    renderContent: () =>
                      (0, element_1.createElement)(
                        'div',
                        {
                          className:
                            'wp-block-woocommerce-product-details-section-description__dropdown components-dropdown-menu__menu',
                        },
                        (0, element_1.createElement)(components_1.MenuGroup, null, i.map(y(e))),
                      ),
                  }),
                ),
            ),
        }),
        Boolean(w) &&
          (0, element_1.createElement)(
            components_1.Modal,
            {
              title: (0, i18n_1.__)('Change product type?', 'woocommerce'),
              className: 'wp-block-woocommerce-product-details-section-description__modal',
              onRequestClose: () => {
                f(void 0);
              },
            },
            (0, element_1.createElement)(
              'p',
              null,
              (0, element_1.createElement)(
                'b',
                null,
                (0, i18n_1.__)(
                  'This product type isn’t supported by the updated product editing experience yet.',
                  'woocommerce',
                ),
              ),
            ),
            (0, element_1.createElement)(
              'p',
              null,
              (0, i18n_1.__)(
                'You’ll be taken to the classic editing screen that isn’t optimized for commerce but offers advanced functionality and supports all extensions.',
                'woocommerce',
              ),
            ),
            (0, element_1.createElement)(
              'div',
              {
                className:
                  'wp-block-woocommerce-product-details-section-description__modal-actions',
              },
              (0, element_1.createElement)(
                components_1.Button,
                {
                  variant: 'secondary',
                  'aria-disabled': g,
                  onClick: () => {
                    g || f(void 0);
                  },
                },
                (0, i18n_1.__)('Cancel', 'woocommerce'),
              ),
              (0, element_1.createElement)(
                components_1.Button,
                {
                  variant: 'primary',
                  isBusy: g,
                  'aria-disabled': g,
                  onClick: async function() {
                    var e, t;
                    try {
                      if (g) return;
                      const { id: o, productData: n } = w;
                      await s(n);
                      const r =
                          null !== (e = await _('postType', 'product', l, { throwOnError: !0 })) &&
                          void 0 !== e
                            ? e
                            : { id: l },
                        c =
                          null !== (t = null == n ? void 0 : n.meta_data) && void 0 !== t ? t : [];
                      await u(
                        'postType',
                        'product',
                        {
                          ...r,
                          ...n,
                          meta_data: [...c, { key: '_product_template_id', value: o }],
                        },
                        { throwOnError: !0 },
                      ),
                        m((0, i18n_1.__)('Product type changed.', 'woocommerce')),
                        (0, tracks_1.recordEvent)('product_template_changed', {
                          source: constants_1.TRACKS_SOURCE,
                          template: o,
                        }),
                        (window.location.href = (0, navigation_1.getNewPath)({}, `/product/${l}`));
                    } catch (e) {
                      const t = (0, get_product_error_message_1.getProductErrorMessage)(e);
                      p(t);
                    }
                  },
                },
                (0, i18n_1.__)('Change', 'woocommerce'),
              ),
            ),
          ),
      ),
    );
  function E(e, t) {
    return async function() {
      var o;
      try {
        if (
          ((0, tracks_1.recordEvent)('product_template_selector_selected', {
            source: constants_1.TRACKS_SOURCE,
            selected_template: e.id,
            unsupported_template: !e.layoutTemplateId,
          }),
          !e.layoutTemplateId)
        )
          return f(e), void t();
        await s(e.productData);
        const n = null !== (o = e.productData.meta_data) && void 0 !== o ? o : [];
        await d('postType', 'product', l, {
          ...e.productData,
          meta_data: [...n, { key: '_product_template_id', value: e.id }],
        }),
          await _('postType', 'product', l, { throwOnError: !0 }),
          m((0, i18n_1.__)('Product type changed.', 'woocommerce')),
          (0, tracks_1.recordEvent)('product_template_changed', {
            source: constants_1.TRACKS_SOURCE,
            template: e.id,
          });
      } catch (e) {
        const t = (0, get_product_error_message_1.getProductErrorMessage)(e);
        p(t);
      }
      t();
    };
  }
  function h(e, t) {
    if (!e) return;
    const { Icon: o } = icons;
    let n;
    if (/^https?:\/\//.test(e)) n = (0, element_1.createElement)('img', { src: e, alt: t });
    else {
      if (!(e in icons) && !(e in wooIcons)) return;
      n = icons[e] || wooIcons[e];
    }
    return (0, element_1.createElement)(o, { icon: n, size: 24 });
  }
  function y(e) {
    return function(t) {
      var o;
      const n = (null == c ? void 0 : c.id) === t.id;
      return (0, element_1.createElement)(
        components_1.MenuItem,
        {
          key: t.id,
          info: null !== (o = t.description) && void 0 !== o ? o : void 0,
          isSelected: n,
          icon: n ? h('check') : h(t.icon, t.title),
          iconPosition: 'left',
          role: 'menuitemradio',
          onClick: E(t, e),
          className: (0, classnames_1.default)({ 'components-menu-item__button--selected': n }),
        },
        t.title,
      );
    };
  }
  function k(e, t) {
    return function() {
      t(),
        e ||
          (0, tracks_1.recordEvent)('product_template_selector_open', {
            source: constants_1.TRACKS_SOURCE,
            supported_templates: a.map(e => e.id),
            unsupported_template: i.map(e => e.id),
          });
    };
  }
}
exports.ProductDetailsSectionDescriptionBlockEdit = ProductDetailsSectionDescriptionBlockEdit;
