'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.EditDownloadsModal = void 0);
const i18n_1 = require('@wordpress/i18n'),
  element_1 = require('@wordpress/element'),
  icons_1 = require('@wordpress/icons'),
  data_1 = require('@wordpress/data'),
  tracks_1 = require('@woocommerce/tracks'),
  components_1 = require('@woocommerce/components'),
  components_2 = require('@wordpress/components'),
  union_icon_1 = require('./images/union-icon'),
  downloads_custom_image_1 = require('./images/downloads-custom-image'),
  EditDownloadsModal = ({
    downloableItem: e,
    onCancel: o,
    onChange: n,
    onRemove: t,
    onSave: a,
  }) => {
    const { createNotice: l } = (0, data_1.useDispatch)('core/notices'),
      [c, m] = (0, element_1.useState)(!1),
      { id: r = 0, file: i = '', name: s = '' } = e;
    return (0, element_1.createElement)(
      components_2.Modal,
      {
        title: (0, i18n_1.sprintf)((0, i18n_1.__)('Edit %s', 'woocommerce'), s),
        onRequestClose: e => {
          e.isPropagationStopped() ||
            c ||
            ((0, tracks_1.recordEvent)('product_downloads_modal_cancel'), o());
        },
        className: 'woocommerce-edit-downloads-modal',
      },
      (0, element_1.createElement)(
        'div',
        { className: 'woocommerce-edit-downloads-modal__preview' },
        (0, element_1.createElement)(
          components_1.ImageGallery,
          { allowDragging: !1, columns: 1 },
          ((e = '') => {
            if (!e) return;
            const o = (e.split('.').pop() || '').toLowerCase();
            return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(o);
          })(i)
            ? (0, element_1.createElement)(components_1.ImageGalleryItem, {
                key: r,
                alt: s,
                src: i,
                id: `${r}`,
                isCover: !1,
              })
            : (0, element_1.createElement)(downloads_custom_image_1.DownloadsCustomImage, null),
        ),
        (0, element_1.createElement)(
          'div',
          { className: 'components-form-file-upload' },
          (0, element_1.createElement)('p', null, s),
        ),
      ),
      (0, element_1.createElement)(
        components_2.BaseControl,
        {
          id: 'file-name-help',
          className: 'woocommerce-edit-downloads-modal__file-name',
          help: (0, i18n_1.__)(
            'Your customers will see this on the thank-you page and in their order confirmation email.',
            'woocommerce',
          ),
        },
        (0, element_1.createElement)(components_2.__experimentalInputControl, {
          id: 'file-name',
          label: (0, i18n_1.__)('FILE NAME', 'woocommerce'),
          name: 'file-name',
          value: s || '',
          onChange: n,
        }),
      ),
      (0, element_1.createElement)(
        'div',
        { className: 'woocommerce-edit-downloads-modal__file-url' },
        (0, element_1.createElement)(components_2.__experimentalInputControl, {
          disabled: !0,
          id: 'file-url',
          label: (0, i18n_1.__)('FILE URL', 'woocommerce'),
          name: 'file-url',
          value: i || '',
          suffix: (0, element_1.createElement)(components_2.Button, {
            icon: (0, element_1.createElement)(union_icon_1.UnionIcon, null),
            onClick: async function() {
              (0, tracks_1.recordEvent)('product_downloads_modal_copy_url_to_clipboard'),
                m(!0),
                await (async function(e) {
                  if ('clipboard' in navigator) await navigator.clipboard.writeText(e);
                  else {
                    const o = document.createElement('textarea');
                    (o.value = e),
                      document.body.appendChild(o),
                      o.select(),
                      document.execCommand('copy'),
                      document.body.removeChild(o);
                  }
                  await void l(
                    'success',
                    (0, i18n_1.__)('URL copied successfully.', 'woocommerce'),
                  );
                })(i),
                m(!1);
            },
          }),
        }),
      ),
      (0, element_1.createElement)(
        'div',
        { className: 'woocommerce-edit-downloads-modal__buttons' },
        (0, element_1.createElement)(
          'div',
          { className: 'woocommerce-edit-downloads-modal__buttons-left' },
          (0, element_1.createElement)(
            components_2.Button,
            {
              icon: icons_1.trash,
              isDestructive: !0,
              variant: 'tertiary',
              label: (0, i18n_1.__)('Delete', 'woocommerce'),
              onClick: () => {
                (0, tracks_1.recordEvent)('product_downloads_modal_delete'), t();
              },
            },
            (0, i18n_1.__)('Delete file', 'woocommerce'),
          ),
        ),
        (0, element_1.createElement)(
          'div',
          { className: 'woocommerce-edit-downloads-modal__buttons-right' },
          (0, element_1.createElement)(
            components_2.Button,
            {
              label: (0, i18n_1.__)('Cancel', 'woocommerce'),
              onClick: () => {
                (0, tracks_1.recordEvent)('product_downloads_modal_cancel'), o();
              },
              variant: 'tertiary',
            },
            (0, i18n_1.__)('Cancel', 'woocommerce'),
          ),
          (0, element_1.createElement)(
            components_2.Button,
            {
              label: (0, i18n_1.__)('Update', 'woocommerce'),
              onClick: () => {
                (0, tracks_1.recordEvent)('product_downloads_modal_update'), a();
              },
              variant: 'primary',
            },
            (0, i18n_1.__)('Update', 'woocommerce'),
          ),
        ),
      ),
    );
  };
exports.EditDownloadsModal = EditDownloadsModal;
