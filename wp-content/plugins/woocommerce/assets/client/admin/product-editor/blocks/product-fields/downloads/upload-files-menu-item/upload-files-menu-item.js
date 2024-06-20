'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.UploadFilesMenuItem = void 0);
const components_1 = require('@wordpress/components'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  media_utils_1 = require('@wordpress/media-utils');
function UploadFilesMenuItem({
  allowedTypes: e,
  maxUploadFileSize: o = 1e7,
  onUploadSuccess: n,
  onUploadError: i,
}) {
  return (0, element_1.createElement)(components_1.FormFileUpload, {
    multiple: !0,
    onChange: function(l) {
      const r = l.currentTarget.files;
      (0, media_utils_1.uploadMedia)({
        allowedTypes: e,
        filesList: r,
        maxUploadFileSize: o,
        onFileChange: n,
        onError: i,
        additionalData: { type: 'downloadable_product' },
      });
    },
    render: ({ openFileDialog: e }) =>
      (0, element_1.createElement)(
        components_1.MenuItem,
        {
          icon: icons_1.upload,
          iconPosition: 'left',
          onClick: e,
          info: (0, i18n_1.__)('Select files from your device', 'woocommerce'),
        },
        (0, i18n_1.__)('Upload', 'woocommerce'),
      ),
  });
}
exports.UploadFilesMenuItem = UploadFilesMenuItem;
