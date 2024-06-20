'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.CreateTaxonomyModal = void 0);
const i18n_1 = require('@wordpress/i18n'),
  components_1 = require('@wordpress/components'),
  element_1 = require('@wordpress/element'),
  data_1 = require('@wordpress/data'),
  components_2 = require('@woocommerce/components'),
  compose_1 = require('@wordpress/compose'),
  classnames_1 = __importDefault(require('classnames')),
  use_taxonomy_search_1 = __importDefault(require('./use-taxonomy-search')),
  CreateTaxonomyModal = ({
    onCancel: e,
    onCreate: t,
    initialName: o,
    slug: n,
    hierarchical: a,
    dialogNameHelpText: r,
    parentTaxonomyText: l,
    title: m,
  }) => {
    const [s, c] = (0, element_1.useState)(''),
      [_, i] = (0, element_1.useState)([]),
      { searchEntity: u, isResolving: p } = (0, use_taxonomy_search_1.default)(n),
      d = (0, compose_1.useDebounce)(
        (0, element_1.useCallback)(e => u(e || '').then(i), []),
        150,
      );
    (0, element_1.useEffect)(() => {
      d('');
    }, []);
    const { saveEntityRecord: y } = (0, data_1.useDispatch)('core'),
      [w, x] = (0, element_1.useState)(!1),
      [h, C] = (0, element_1.useState)(null),
      [v, E] = (0, element_1.useState)(o || ''),
      [S, f] = (0, element_1.useState)(null),
      g = (0, compose_1.useInstanceId)(components_1.BaseControl, 'taxonomy_name'),
      b = (0, compose_1.useInstanceId)(
        components_2.__experimentalSelectTreeControl,
        'parent-taxonomy-select',
      );
    return (0, element_1.createElement)(
      components_1.Modal,
      { title: m, onRequestClose: e, className: 'woocommerce-create-new-taxonomy-modal' },
      (0, element_1.createElement)(
        'div',
        { className: 'woocommerce-create-new-taxonomy-modal__wrapper' },
        (0, element_1.createElement)(
          components_1.BaseControl,
          {
            id: g,
            label: (0, i18n_1.__)('Name', 'woocommerce'),
            help: h || r,
            className: (0, classnames_1.default)({ 'has-error': h }),
          },
          (0, element_1.createElement)(components_1.TextControl, { id: g, value: v, onChange: E }),
        ),
        a &&
          (0, element_1.createElement)(components_2.__experimentalSelectTreeControl, {
            isLoading: p,
            label: (0, element_1.createInterpolateElement)(
              `${l || (0, i18n_1.__)('Parent', 'woocommerce')} <optional/>`,
              {
                optional: (0, element_1.createElement)(
                  'span',
                  { className: 'woocommerce-create-new-taxonomy-modal__optional' },
                  (0, i18n_1.__)('(optional)', 'woocommerce'),
                ),
              },
            ),
            id: b,
            items: _.map(e => ({
              label: e.name,
              value: String(e.id),
              parent: e.parent > 0 ? String(e.parent) : void 0,
            })),
            shouldNotRecursivelySelect: !0,
            selected: S ? { value: String(S.id), label: S.name } : void 0,
            onSelect: e =>
              e && f({ id: +e.value, name: e.label, parent: e.parent ? +e.parent : 0 }),
            onRemove: () => f(null),
            onInputChange: e => {
              d(e), c(e || '');
            },
            createValue: s,
          }),
        (0, element_1.createElement)(
          'div',
          { className: 'woocommerce-create-new-taxonomy-modal__buttons' },
          (0, element_1.createElement)(
            components_1.Button,
            { variant: 'tertiary', onClick: e, disabled: w },
            (0, i18n_1.__)('Cancel', 'woocommerce'),
          ),
          (0, element_1.createElement)(
            components_1.Button,
            {
              variant: 'primary',
              disabled: 0 === v.length || w,
              isBusy: w,
              onClick: async () => {
                C(null), x(!0);
                try {
                  const e = await y(
                    'taxonomy',
                    n,
                    { name: v, parent: S ? S.id : null },
                    { throwOnError: !0 },
                  );
                  x(!1), t(e);
                } catch (e) {
                  if ((x(!1), !e.message))
                    throw (C((0, i18n_1.__)('Failed to create taxonomy', 'woocommerce')), e);
                  C(e.message);
                }
              },
            },
            (0, i18n_1.__)('Create', 'woocommerce'),
          ),
        ),
      ),
    );
  };
exports.CreateTaxonomyModal = CreateTaxonomyModal;