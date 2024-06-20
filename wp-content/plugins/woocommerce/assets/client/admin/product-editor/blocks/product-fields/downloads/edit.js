'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.DownloadBlockEdit = void 0);
const i18n_1 = require('@wordpress/i18n'),
  components_1 = require('@wordpress/components'),
  data_1 = require('@wordpress/data'),
  element_1 = require('@wordpress/element'),
  icons_1 = require('@wordpress/icons'),
  block_templates_1 = require('@woocommerce/block-templates'),
  components_2 = require('@woocommerce/components'),
  core_data_1 = require('@wordpress/core-data'),
  downloads_menu_1 = require('./downloads-menu'),
  manage_download_limits_modal_1 = require('../../../components/manage-download-limits-modal'),
  edit_downloads_modal_1 = require('./edit-downloads-modal'),
  upload_image_1 = require('./upload-image'),
  block_slot_fill_1 = require('../../../components/block-slot-fill');
function getFileName(e) {
  var o;
  const [t] = null !== (o = null == e ? void 0 : e.split('/').reverse()) && void 0 !== o ? o : [];
  return t;
}
function stringifyId(e) {
  return e ? String(e) : '';
}
function stringifyEntityId(e) {
  return { ...e, id: stringifyId(e.id) };
}
function DownloadBlockEdit({ attributes: e, context: { postType: o } }) {
  const t = (0, block_templates_1.useWooBlockProps)(e),
    [n, l] = (0, core_data_1.useEntityProp)('postType', o, 'downloads'),
    [a, i] = (0, core_data_1.useEntityProp)('postType', o, 'download_limit'),
    [r, d] = (0, core_data_1.useEntityProp)('postType', o, 'download_expiry'),
    [c, m] = (0, element_1.useState)(),
    { allowedMimeTypes: s } = (0, data_1.useSelect)(e => {
      const { getEditorSettings: o } = e('core/editor');
      return o();
    }),
    _ = s ? Object.values(s) : [],
    { createErrorNotice: p } = (0, data_1.useDispatch)('core/notices'),
    [u, w] = (0, element_1.useState)(!1);
  function f(e) {
    if (!Array.isArray(e)) return;
    const o = e.filter(e => !n.some(o => o.file === e.url));
    if (
      (o.length !== e.length &&
        p(
          1 === e.length
            ? (0, i18n_1.__)('This file has already been added', 'woocommerce')
            : (0, i18n_1.__)('Some of these files have already been added', 'woocommerce'),
        ),
      o.length)
    ) {
      const e = o.map(e => ({
          id: stringifyId(e.id),
          file: e.url,
          name: e.title || e.alt || e.caption || getFileName(e.url),
        })),
        t = n.map(stringifyEntityId);
      t.push(...e), l(t);
    }
  }
  function y(e) {
    const o = n.reduce(function(o, t) {
      return t.file === e.file ? o : [...o, stringifyEntityId(t)];
    }, []);
    l(o);
  }
  function E(e) {
    return function() {
      y(e);
    };
  }
  function g(e) {
    return function() {
      m(stringifyEntityId(e));
    };
  }
  function b(e) {
    p(
      'string' == typeof e
        ? e
        : (0, i18n_1.__)('There was an error uploading files', 'woocommerce'),
    );
  }
  return (0, element_1.createElement)(
    'div',
    { ...t },
    (0, element_1.createElement)(
      block_slot_fill_1.SectionActions,
      null,
      Boolean(n.length) &&
        (0, element_1.createElement)(
          components_1.Button,
          {
            variant: 'tertiary',
            onClick: function() {
              w(!0);
            },
          },
          (0, i18n_1.__)('Manage limits', 'woocommerce'),
        ),
      (0, element_1.createElement)(downloads_menu_1.DownloadsMenu, {
        allowedTypes: _,
        onUploadSuccess: f,
        onUploadError: b,
      }),
    ),
    (0, element_1.createElement)(
      'div',
      { className: 'wp-block-woocommerce-product-downloads-field__body' },
      (0, element_1.createElement)(components_2.MediaUploader, {
        label: Boolean(n.length)
          ? ''
          : (0, element_1.createElement)(
              'div',
              { className: 'wp-block-woocommerce-product-downloads-field__drop-zone-content' },
              (0, element_1.createElement)(upload_image_1.UploadImage, null),
              (0, element_1.createElement)(
                'p',
                { className: 'wp-block-woocommerce-product-downloads-field__drop-zone-label' },
                (0, element_1.createInterpolateElement)(
                  (0, i18n_1.__)(
                    'Supported file types: <Types /> and more. <link>View all</link>',
                    'woocommerce',
                  ),
                  {
                    Types: (0, element_1.createElement)(
                      element_1.Fragment,
                      null,
                      'PNG, JPG, PDF, PPT, DOC, MP3, MP4',
                    ),
                    link: (0, element_1.createElement)('a', {
                      href: 'https://codex.wordpress.org/Uploading_Files',
                      target: '_blank',
                      rel: 'noreferrer',
                      onClick: e => e.stopPropagation(),
                    }),
                  },
                ),
              ),
            ),
        buttonText: '',
        allowedMediaTypes: _,
        multipleSelect: 'add',
        onUpload: f,
        onFileUploadChange: f,
        onError: b,
        additionalData: { type: 'downloadable_product' },
      }),
      Boolean(n.length) &&
        (0, element_1.createElement)(
          components_2.Sortable,
          { className: 'wp-block-woocommerce-product-downloads-field__table' },
          n.map(e => {
            const o = getFileName(e.file),
              t = e.file.startsWith('blob');
            return (0, element_1.createElement)(
              components_2.ListItem,
              { key: e.file, className: 'wp-block-woocommerce-product-downloads-field__table-row' },
              (0, element_1.createElement)(
                'div',
                { className: 'wp-block-woocommerce-product-downloads-field__table-filename' },
                (0, element_1.createElement)('span', null, e.name),
                e.name !== o &&
                  (0, element_1.createElement)(
                    'span',
                    {
                      className:
                        'wp-block-woocommerce-product-downloads-field__table-filename-description',
                    },
                    o,
                  ),
              ),
              (0, element_1.createElement)(
                'div',
                { className: 'wp-block-woocommerce-product-downloads-field__table-actions' },
                t &&
                  (0, element_1.createElement)(components_1.Spinner, {
                    'aria-label': (0, i18n_1.__)('Uploading file', 'woocommerce'),
                  }),
                !t &&
                  (0, element_1.createElement)(
                    components_1.Button,
                    { onClick: g(e), variant: 'tertiary' },
                    (0, i18n_1.__)('Edit', 'woocommerce'),
                  ),
                (0, element_1.createElement)(components_1.Button, {
                  icon: icons_1.closeSmall,
                  label: (0, i18n_1.__)('Remove file', 'woocommerce'),
                  disabled: t,
                  onClick: E(e),
                }),
              ),
            );
          }),
        ),
    ),
    u &&
      (0, element_1.createElement)(manage_download_limits_modal_1.ManageDownloadLimitsModal, {
        initialValue: { downloadLimit: a, downloadExpiry: r },
        onSubmit: function(e) {
          i(e.downloadLimit), d(e.downloadExpiry), w(!1);
        },
        onClose: function() {
          w(!1);
        },
      }),
    c &&
      (0, element_1.createElement)(edit_downloads_modal_1.EditDownloadsModal, {
        downloableItem: { ...c },
        onCancel: () => m(null),
        onRemove: () => {
          y(c), m(null);
        },
        onChange: e => {
          m({ ...c, name: e });
        },
        onSave:
          ((k = c),
          function() {
            const e = n.map(stringifyEntityId).map(e => (e.id === k.id ? k : e));
            l(e), m(null);
          }),
        onUploadSuccess: function(e) {
          var o;
          if (
            !Array.isArray(e) ||
            !(null == e ? void 0 : e.length) ||
            void 0 === (null === (o = e[0]) || void 0 === o ? void 0 : o.id)
          )
            return;
          const t = {
              id: stringifyId(e[0].id),
              file: e[0].url,
              name: e[0].title || e[0].alt || e[0].caption || getFileName(e[0].url),
            },
            a = n.map(e =>
              e.file === (null == c ? void 0 : c.file)
                ? stringifyEntityId(t)
                : stringifyEntityId(e),
            );
          l(a), m(t);
        },
        onUploadError: b,
      }),
  );
  var k;
}
exports.DownloadBlockEdit = DownloadBlockEdit;
