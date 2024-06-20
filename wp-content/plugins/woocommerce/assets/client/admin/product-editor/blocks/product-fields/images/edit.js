'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ImageBlockEdit = void 0);
const i18n_1 = require('@wordpress/i18n'),
  components_1 = require('@wordpress/components'),
  classnames_1 = __importDefault(require('classnames')),
  element_1 = require('@wordpress/element'),
  icons_1 = require('@wordpress/icons'),
  block_templates_1 = require('@woocommerce/block-templates'),
  components_2 = require('@woocommerce/components'),
  tracks_1 = require('@woocommerce/tracks'),
  core_data_1 = require('@wordpress/core-data'),
  place_holder_1 = require('./place-holder'),
  block_slot_fill_1 = require('../../../components/block-slot-fill'),
  map_upload_image_to_image_1 = require('../../../utils/map-upload-image-to-image');
function ImageBlockEdit({ attributes: e, context: o }) {
  var r;
  const { property: a, multiple: t } = e,
    [l, i] = (0, core_data_1.useEntityProp)('postType', o.postType, a),
    [n, _] = (0, element_1.useState)(!1),
    [m, c] = (0, element_1.useState)(!1),
    [s, d] = (0, element_1.useState)(null),
    p = (0, block_templates_1.useWooBlockProps)(e, {
      className: (0, classnames_1.default)({
        'has-images': Array.isArray(l) ? l.length > 0 : Boolean(l),
      }),
    });
  function u(e) {
    return function(o) {
      var r;
      if (((0, tracks_1.recordEvent)(e), Array.isArray(o))) {
        const e = o
          .filter(e => e.id)
          .map(e => ({ id: e.id, name: e.title, src: e.url, alt: e.alt }));
        (null === (r = o[0]) || void 0 === r ? void 0 : r.id) && i([...l, ...e]);
      } else o.id && i((0, map_upload_image_to_image_1.mapUploadImageToImage)(o));
    };
  }
  const g = null !== l && (!Array.isArray(l) || l.length > 0);
  return (0, element_1.createElement)(
    'div',
    { ...p },
    (0, element_1.createElement)(
      'div',
      { className: 'woocommerce-product-form__image-drop-zone' },
      n
        ? (0, element_1.createElement)(
            'div',
            { className: 'woocommerce-product-form__remove-image-drop-zone' },
            (0, element_1.createElement)(
              'span',
              null,
              (0, element_1.createElement)(icons_1.Icon, {
                icon: icons_1.trash,
                size: 20,
                className: 'icon-control',
              }),
              (0, i18n_1.__)('Drop here to remove', 'woocommerce'),
            ),
            (0, element_1.createElement)(components_1.DropZone, {
              onHTMLDrop: () => c(!0),
              onDrop: () => c(!0),
              label: (0, i18n_1.__)('Drop here to remove', 'woocommerce'),
            }),
          )
        : (0, element_1.createElement)(
            block_slot_fill_1.SectionActions,
            null,
            (0, element_1.createElement)(
              'div',
              { className: 'woocommerce-product-form__media-uploader' },
              (0, element_1.createElement)(components_2.MediaUploader, {
                value: Array.isArray(l)
                  ? l.map(({ id: e }) => e)
                  : null !== (r = null == l ? void 0 : l.id) && void 0 !== r
                  ? r
                  : void 0,
                multipleSelect: !!t && 'add',
                onError: () => null,
                onFileUploadChange: u('product_images_add_via_file_upload_area'),
                onMediaGalleryOpen: () => {
                  (0, tracks_1.recordEvent)('product_images_media_gallery_open');
                },
                onSelect: function(e) {
                  if (
                    ((0, tracks_1.recordEvent)('product_images_add_via_media_library'),
                    Array.isArray(e))
                  ) {
                    const o = e
                      .map(map_upload_image_to_image_1.mapUploadImageToImage)
                      .filter(e => null !== e);
                    i(o);
                  } else i((0, map_upload_image_to_image_1.mapUploadImageToImage)(e));
                },
                onUpload: u('product_images_add_via_drag_and_drop_upload'),
                label: '',
                buttonText: (0, i18n_1.__)('Choose an image', 'woocommerce'),
              }),
            ),
          ),
    ),
    g
      ? (0, element_1.createElement)(
          components_2.ImageGallery,
          {
            allowDragging: !1,
            onDragStart: function(e) {
              var o, r;
              if (Array.isArray(l)) {
                const { id: a, dataset: t } = e.target;
                if (a) d(parseInt(a, 10));
                else if (null == t ? void 0 : t.index) {
                  const e = parseInt(t.index, 10);
                  d(
                    null !== (r = null === (o = l[e]) || void 0 === o ? void 0 : o.id) &&
                      void 0 !== r
                      ? r
                      : null,
                  );
                }
                _(e => !e);
              }
            },
            onDragEnd: function() {
              Array.isArray(l) &&
                (m &&
                  s &&
                  ((0, tracks_1.recordEvent)('product_images_remove_image_button_click'),
                  i(l.filter(e => e.id !== s)),
                  c(!1),
                  d(null)),
                _(e => !e));
            },
            onOrderChange: function(e) {
              if (Array.isArray(l)) {
                const o = l.reduce((e, o) => ({ ...e, [`${o.id}`]: o }), {}),
                  r = e
                    .filter(e => {
                      var r;
                      return (
                        (null === (r = null == e ? void 0 : e.props) || void 0 === r
                          ? void 0
                          : r.id) in o
                      );
                    })
                    .map(e => {
                      var r;
                      return o[
                        null === (r = null == e ? void 0 : e.props) || void 0 === r ? void 0 : r.id
                      ];
                    });
                (0, tracks_1.recordEvent)('product_images_change_image_order_via_image_gallery'),
                  i(r);
              }
            },
            onReplace: function({ replaceIndex: e, media: o }) {
              if (
                ((0, tracks_1.recordEvent)('product_images_replace_image_button_click'),
                Array.isArray(l) && !l.some(e => o.id === e.id))
              ) {
                const r = (0, map_upload_image_to_image_1.mapUploadImageToImage)(o);
                if (r) {
                  const o = [...l];
                  (o[e] = r), i(o);
                }
              } else i((0, map_upload_image_to_image_1.mapUploadImageToImage)(o));
            },
            onRemove: function({ removedItem: e }) {
              if (
                ((0, tracks_1.recordEvent)('product_images_remove_image_button_click'),
                Array.isArray(l))
              ) {
                const o = l.filter(o => o.id === e.props.id);
                i(o);
              } else i(null);
            },
            onSelectAsCover: () =>
              (0, tracks_1.recordEvent)('product_images_select_image_as_cover_button_click'),
          },
          (Array.isArray(l) ? l : [l]).map((e, o) =>
            (0, element_1.createElement)(components_2.ImageGalleryItem, {
              key: e.id,
              alt: e.alt,
              src: e.src,
              id: `${e.id}`,
              isCover: t && 0 === o,
            }),
          ),
        )
      : (0, element_1.createElement)(place_holder_1.PlaceHolder, null),
  );
}
exports.ImageBlockEdit = ImageBlockEdit;
