'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.InsertUrlMenuItem = void 0);
const element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  components_1 = require('@wordpress/components');
function validateInput(e) {
  (e.required = !0),
    e.setCustomValidity(''),
    e.validity.valueMissing &&
      e.setCustomValidity((0, i18n_1.__)('The URL is required', 'woocommerce')),
    e.validity.typeMismatch &&
      e.setCustomValidity((0, i18n_1.__)('Insert a valid URL', 'woocommerce'));
}
function InsertUrlMenuItem({ onUploadSuccess: e, onUploadError: n }) {
  function t(t) {
    t.preventDefault();
    const o = t.currentTarget,
      r = o.url;
    if ((validateInput(r), o.checkValidity())) {
      const n = o.url.value;
      e([{ url: n }]);
    } else n(r.validationMessage);
  }
  function o(e) {
    validateInput(e.target);
  }
  function r(e) {
    validateInput(e.target);
  }
  return (0, element_1.createElement)(components_1.Dropdown, {
    popoverProps: { placement: 'left' },
    renderToggle: ({ isOpen: e, onToggle: n }) =>
      (0, element_1.createElement)(
        components_1.MenuItem,
        {
          'aria-expanded': e,
          icon: icons_1.customLink,
          iconPosition: 'left',
          onClick: n,
          info: (0, i18n_1.__)('Link to a file hosted elsewhere', 'woocommerce'),
        },
        (0, i18n_1.__)('Insert from URL', 'woocommerce'),
      ),
    renderContent: () =>
      (0, element_1.createElement)(
        'form',
        { className: 'components-dropdown-menu__menu', noValidate: !0, onSubmit: t },
        (0, element_1.createElement)(components_1.__experimentalInputControl, {
          name: 'url',
          type: 'url',
          placeholder: (0, i18n_1.__)('Insert URL', 'woocommerce'),
          suffix: (0, element_1.createElement)(components_1.Button, {
            icon: icons_1.keyboardReturn,
            type: 'submit',
          }),
          className: 'woocommerce-inert-url-menu-item__input',
          'aria-label': (0, i18n_1.__)('Insert URL', 'woocommerce'),
          onInput: o,
          onBlur: r,
        }),
      ),
  });
}
exports.InsertUrlMenuItem = InsertUrlMenuItem;
