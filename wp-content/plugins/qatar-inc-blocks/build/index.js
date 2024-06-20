/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/base-block.js':
      /*!***************************!*\
  !*** ./src/base-block.js ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ BaseBlock,
          /* harmony export */
        });
        class BaseBlock {
          category = 'qatar-inc';
        }

        /***/
      },

    /***/ './src/container-block.js':
      /*!********************************!*\
  !*** ./src/container-block.js ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ContainerBlock: () => /* binding */ ContainerBlock,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./utils */ './src/utils.js',
        );

        const ContainerBlock = ({ title, children }) => {
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            'div',
            {
              className: _utils__WEBPACK_IMPORTED_MODULE_1__.UTILS.CONTAINER,
            },
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              'h2',
              {
                className: _utils__WEBPACK_IMPORTED_MODULE_1__.UTILS.TITLE,
              },
              title,
            ),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              'div',
              {
                className: _utils__WEBPACK_IMPORTED_MODULE_1__.UTILS.WRAPPER,
              },
              children,
            ),
          );
        };

        /***/
      },

    /***/ './src/gallery-slider-item/index.js':
      /*!******************************************!*\
  !*** ./src/gallery-slider-item/index.js ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _base_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../base-block */ './src/base-block.js',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @wordpress/blocks */ '@wordpress/blocks',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../utils */ './src/utils.js',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _container_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../container-block */ './src/container-block.js',
        );

        class GallerySliderItem extends _base_block__WEBPACK_IMPORTED_MODULE_1__['default'] {
          title = 'Imagen';
          parent = ['qatar-inc/gallery-slider'];
          attributes = {
            imageUrl: {},
            imageAlt: {},
            imageId: {},
          };
          selectImage = ({ setAttributes, media }) => {
            const { sizes } = media;
            setAttributes({
              imageId: media.id,
              imageUrl: sizes['gallery-slider-image'].url,
              imageAlt: media.alt,
            });
          };
          edit = ({ attributes, setAttributes }) => {
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _container_block__WEBPACK_IMPORTED_MODULE_5__.ContainerBlock,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Imagen'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaPlaceholder,
                  {
                    onSelect: media =>
                      this.selectImage({
                        setAttributes,
                        media,
                      }),
                    allowedTypes: ['image'],
                    multiple: false,
                    mediaPreview: (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _utils__WEBPACK_IMPORTED_MODULE_3__.ImagePreview,
                      {
                        url: attributes.imageUrl,
                      },
                    ),
                    labels: {
                      title: '',
                      instructions: '',
                    },
                  },
                ),
              ),
            );
          };
          save = ({ attributes }) =>
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              'div',
              {
                className: 'swiper-slide',
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: 'gallery-slider__item',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
                  src: attributes.imageUrl,
                  alt: attributes.imageAlt,
                }),
              ),
            );
        }
        (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(
          'qatar-inc/gallery-slider-item',
          new GallerySliderItem(),
        );

        /***/
      },

    /***/ './src/gallery-slider/index.js':
      /*!*************************************!*\
  !*** ./src/gallery-slider/index.js ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _base_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../base-block */ './src/base-block.js',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @wordpress/blocks */ '@wordpress/blocks',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../utils */ './src/utils.js',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_5__,
        );

        const ALLOWED_BLOCKS = ['qatar-inc/gallery-slider-item'];
        class GallerySlider extends _base_block__WEBPACK_IMPORTED_MODULE_1__['default'] {
          title = 'Carrousel de imágenes';
          attributes = {
            customId: {},
            sectionId: {},
            title: {},
            background: {
              default: 'default',
            },
            paddingTop: {
              default: 5,
            },
            paddingBottom: {
              default: 5,
            },
            onLoad: {
              default: false,
            },
            version: {
              default: '1.0.0',
            },
          };
          renderInspector = ({ attributes, setAttributes }) =>
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody,
                {
                  title: 'Section Options',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl,
                  null,
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Id'),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PlainText,
                      {
                        value: attributes.customId,
                        onChange: customId =>
                          setAttributes({
                            customId,
                          }),
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl,
                      {
                        label: 'Padding Top',
                        value: attributes.paddingTop,
                        onChange: value =>
                          setAttributes({
                            paddingTop: value,
                          }),
                        min: 0,
                        max: 10,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl,
                      {
                        label: 'Padding Bottom',
                        value: attributes.paddingBottom,
                        onChange: value =>
                          setAttributes({
                            paddingBottom: value,
                          }),
                        min: 0,
                        max: 10,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl,
                      {
                        label: 'Color de fondo',
                        value: attributes.background,
                        options: [
                          {
                            label: 'Blanco',
                            value: 'default',
                          },
                          {
                            label: 'Oscuro',
                            value: 'primary',
                          },
                          {
                            label: 'Gris claro',
                            value: 'gray',
                          },
                        ],
                        onChange: value =>
                          setAttributes({
                            background: value,
                          }),
                        __nextHasNoMarginBottom: true,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl,
                      {
                        label: 'Cargar estilos durante la carga',
                        checked: attributes.onLoad,
                        onChange: value =>
                          setAttributes({
                            onLoad: value,
                          }),
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'span',
                      null,
                      'Versi\xF3n de estilos',
                    ),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PlainText,
                      {
                        value: attributes.version,
                        onChange: version =>
                          setAttributes({
                            version,
                          }),
                      },
                    ),
                  ),
                ),
              ),
            );
          edit = ({ attributes, setAttributes, clientId }) => {
            setAttributes({
              sectionId: clientId,
            });
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              'div',
              {
                className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.MAIN_CONTAINER,
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'T\xEDtulo'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText,
                  {
                    value: attributes.title,
                    multine: 'br',
                    id: 'title',
                    onChange: content =>
                      setAttributes({
                        title: content,
                      }),
                    placeholder: 'Título',
                  },
                ),
              ),
              this.renderInspector({
                attributes,
                setAttributes,
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: `${_utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.ROW} ${_utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.ROW}--2`,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks,
                  {
                    template: [ALLOWED_BLOCKS, ALLOWED_BLOCKS, ALLOWED_BLOCKS, ALLOWED_BLOCKS],
                    allowedBlocks: ALLOWED_BLOCKS,
                  },
                ),
              ),
            );
          };
          save = ({ attributes }) => {
            const { themeUri } = blockVars;
            const sectionId = attributes.customId || `Section-${attributes.sectionId}`;
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'style',
                null,
                `
            #${sectionId} {
              padding-top: ${(attributes.paddingTop * 75) / 100}rem;
              padding-bottom: ${(attributes.paddingBottom * 75) / 100}rem;
            } 
            @media only screen and (min-width: 992px) {
              #${sectionId} {
                padding-top: ${attributes.paddingTop}rem;
                padding-bottom: ${attributes.paddingBottom}rem;
              }
            }
          `,
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('link', {
                rel: 'stylesheet',
                href: `${themeUri}/frontend/dist/gallery-slider.css?ver=${attributes.version}`,
                media: 'all',
                onLoad: attributes.onLoad ? "this.media='all'" : null,
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'section',
                {
                  id: sectionId,
                  className: `gallery-slider background--${attributes.background}`,
                },
                attributes.title &&
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content,
                    {
                      className: 'gallery-slider__title headline headline--h3 text-center',
                      tagName: 'h3',
                      value: attributes.title,
                    },
                  ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: 'swiper',
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: 'swiper-wrapper',
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content,
                      null,
                    ),
                  ),
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('script', {
                type: 'module',
                dangerouslySetInnerHTML: {
                  __html: this.swiperMethod(sectionId),
                },
              }),
            );
          };
          swiperMethod = id => {
            return `
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

    const swiper = new Swiper('#${id} .swiper',{
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    })`;
          };
        }
        (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(
          'qatar-inc/gallery-slider',
          new GallerySlider(),
        );

        /***/
      },

    /***/ './src/layout-info-with-media/index.js':
      /*!*********************************************!*\
  !*** ./src/layout-info-with-media/index.js ***!
  \*********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _base_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../base-block */ './src/base-block.js',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @wordpress/blocks */ '@wordpress/blocks',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _container_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../container-block */ './src/container-block.js',
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../utils */ './src/utils.js',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__,
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_6__,
        );

        class LayoutInfoWithMedia extends _base_block__WEBPACK_IMPORTED_MODULE_1__['default'] {
          title = 'Sección de información principal con Imagen';
          attributes = {
            sectionId: {},
            title: {},
            subtitle: {},
            content: {},
            imageUrl: {},
            imageAlt: {},
            linkText: {},
            urlObject: {},
            paddingTop: {},
            paddingBottom: {},
            onLoad: {
              default: false,
            },
            version: {
              default: '1.0.0',
            },
          };
          renderInspector = ({ attributes, setAttributes }) =>
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody,
                {
                  title: 'Otros Ajustes',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl,
                  null,
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl,
                      {
                        label: 'Padding Top',
                        value: attributes.paddingTop,
                        onChange: value =>
                          setAttributes({
                            paddingTop: value,
                          }),
                        min: 1,
                        max: 10,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl,
                      {
                        label: 'Padding Bottom',
                        value: attributes.paddingBottom,
                        onChange: value =>
                          setAttributes({
                            paddingBottom: value,
                          }),
                        min: 1,
                        max: 10,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl,
                      {
                        label: 'Cargar estilos durante la carga',
                        checked: attributes.onLoad,
                        onChange: value =>
                          setAttributes({
                            onLoad: value,
                          }),
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'span',
                      null,
                      'Versi\xF3n de estilos',
                    ),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PlainText,
                      {
                        value: attributes.version,
                        onChange: version =>
                          setAttributes({
                            version,
                          }),
                      },
                    ),
                  ),
                ),
              ),
            );
          edit = ({ attributes, setAttributes, clientId }) => {
            setAttributes({
              sectionId: clientId,
            });
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _container_block__WEBPACK_IMPORTED_MODULE_3__.ContainerBlock,
              {
                title: this.title,
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'span',
                  null,
                  'Imagen de fondo',
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder,
                  {
                    onSelect: el =>
                      setAttributes({
                        imageUrl: el.url,
                        imageAlt: el.alt,
                      }),
                    allowedTypes: ['image'],
                    multiple: false,
                    mediaPreview: (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _utils__WEBPACK_IMPORTED_MODULE_4__.ImagePreview,
                      {
                        url: attributes.imageUrl,
                      },
                    ),
                    labels: {
                      title: '',
                      instructions: '',
                    },
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Subt\xEDtulo'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PlainText,
                  {
                    value: attributes.subtitle,
                    id: 'subtitle',
                    onChange: content =>
                      setAttributes({
                        subtitle: content,
                      }),
                    placeholder: 'Subtítulo',
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'T\xEDtulo'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText,
                  {
                    value: attributes.title,
                    multine: 'br',
                    id: 'title',
                    onChange: content =>
                      setAttributes({
                        title: content,
                      }),
                    placeholder: 'Título',
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'span',
                  null,
                  'Descripci\xF3n',
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText,
                  {
                    id: 'content',
                    multine: 'br',
                    value: attributes.content,
                    tagName: 'span',
                    onChange: content =>
                      setAttributes({
                        content: content,
                      }),
                    placeholder: 'Descripción',
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Link'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PlainText,
                  {
                    placehoder: 'Texto del Link',
                    value: attributes.linkText,
                    onChange: linkText =>
                      setAttributes({
                        linkText,
                      }),
                  },
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalLinkControl,
                  {
                    value: attributes.urlObject,
                    onChange: content =>
                      setAttributes({
                        urlObject: content,
                      }),
                  },
                ),
              ),
              this.renderInspector({
                attributes,
                setAttributes,
              }),
            );
          };
          save = ({ attributes }) => {
            const { themeUri } = blockVars;
            const sectionId = `Section-${attributes.sectionId}`;
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'style',
                null,
                `
            #${sectionId} {
              padding-top: ${(attributes.paddingTop * 75) / 100}rem;
              padding-bottom: ${(attributes.paddingBottom * 75) / 100}rem;
            } 
            @media only screen and (min-width: 992px) {
              #${sectionId} {
                background-image: url('${attributes.imageUrl}');
                padding-top: ${attributes.paddingTop}rem;
                padding-bottom: ${attributes.paddingBottom}rem;
              }
            }
          `,
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  id: sectionId,
                  className: 'custom-post-main',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: 'container',
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: 'custom-post-main__wrapper',
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'h4',
                      {
                        className: 'custom-post-main__subtitle headline headline--h6',
                      },
                      attributes.subtitle,
                    ),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content,
                      {
                        className: 'custom-post-main__title headline headline--h3 headline--light',
                        tagName: 'h1',
                        value: attributes.title,
                      },
                    ),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
                      className: 'separator separator--secondary text-light',
                    }),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content,
                      {
                        tagName: 'p',
                        className: 'text-light',
                        value: attributes.content,
                      },
                    ),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'a',
                      {
                        href: attributes.urlObject?.url,
                        className: 'link link--white',
                        rel: 'noopener noreferrer',
                      },
                      attributes.linkText,
                    ),
                  ),
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('link', {
                  rel: 'stylesheet',
                  href: `${themeUri}/frontend/dist/custom-post-main.css?ver=${attributes.version}`,
                  media: 'all',
                  onLoad: attributes.onLoad ? "this.media='all'" : null,
                }),
              ),
            );
          };
        }
        (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(
          'qatar-inc/layout-info-with-media',
          new LayoutInfoWithMedia(),
        );

        /***/
      },

    /***/ './src/section/index.js':
      /*!******************************!*\
  !*** ./src/section/index.js ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _base_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../base-block */ './src/base-block.js',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @wordpress/blocks */ '@wordpress/blocks',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../utils */ './src/utils.js',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_5__,
        );

        class Section extends _base_block__WEBPACK_IMPORTED_MODULE_1__['default'] {
          title = 'Sección';
          attributes = {
            customId: {},
            sectionId: {},
            background: {
              default: 'default',
            },
            paddingTop: {
              default: 5,
            },
            paddingBottom: {
              default: 5,
            },
          };
          renderInspector = ({ attributes, setAttributes }) =>
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody,
                {
                  title: 'Section Options',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl,
                  null,
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Id'),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PlainText,
                      {
                        value: attributes.customId,
                        onChange: customId =>
                          setAttributes({
                            customId,
                          }),
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl,
                      {
                        label: 'Padding Top',
                        value: attributes.paddingTop,
                        onChange: value =>
                          setAttributes({
                            paddingTop: value,
                          }),
                        min: 0,
                        max: 10,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl,
                      {
                        label: 'Padding Bottom',
                        value: attributes.paddingBottom,
                        onChange: value =>
                          setAttributes({
                            paddingBottom: value,
                          }),
                        min: 0,
                        max: 10,
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl,
                      {
                        label: 'Color de fondo',
                        value: attributes.background,
                        options: [
                          {
                            label: 'Blanco',
                            value: 'default',
                          },
                          {
                            label: 'Oscuro',
                            value: 'primary',
                          },
                          {
                            label: 'Gris claro',
                            value: 'gray',
                          },
                        ],
                        onChange: value =>
                          setAttributes({
                            background: value,
                          }),
                        __nextHasNoMarginBottom: true,
                      },
                    ),
                  ),
                ),
              ),
            );
          edit = ({ attributes, setAttributes, clientId }) => {
            setAttributes({
              sectionId: clientId,
            });
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              'div',
              {
                className: _utils__WEBPACK_IMPORTED_MODULE_3__.UTILS.MAIN_CONTAINER,
              },
              this.renderInspector({
                attributes,
                setAttributes,
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks,
                null,
              ),
            );
          };
          save = ({ attributes }) => {
            const sectionId = attributes.customId || `Section-${attributes.sectionId}`;
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'style',
                null,
                `
            #${sectionId} {
              padding-top: ${(attributes.paddingTop * 75) / 100}rem;
              padding-bottom: ${(attributes.paddingBottom * 75) / 100}rem;
            } 
            @media only screen and (min-width: 992px) {
              #${sectionId} {
                padding-top: ${attributes.paddingTop}rem;
                padding-bottom: ${attributes.paddingBottom}rem;
              }
            }
          `,
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'section',
                {
                  id: sectionId,
                  className: `section background--${attributes.background}`,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: 'container',
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content,
                    null,
                  ),
                ),
              ),
            );
          };
        }
        (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(
          'qatar-inc/section',
          new Section(),
        );

        /***/
      },

    /***/ './src/two-column-text-with-media/index.js':
      /*!*************************************************!*\
  !*** ./src/two-column-text-with-media/index.js ***!
  \*************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _base_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../base-block */ './src/base-block.js',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
        /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../utils */ './src/utils.js',
        );
        /* harmony import */ var _container_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../container-block */ './src/container-block.js',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @wordpress/blocks */ '@wordpress/blocks',
        );
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__,
        );

        class TwoColumnTextWithMedia extends _base_block__WEBPACK_IMPORTED_MODULE_1__['default'] {
          title = 'Bloque de dos columnas texto|imagen';
          parent = ['qatar-inc/section'];
          attributes = {
            imageUrl: {
              attribute: 'src',
              selector: '.two-col-text-img__image img',
            },
            imageId: {
              attribute: 'id',
              selector: '.two-col-text-img__image img',
            },
            imageAlt: {
              attribute: 'alt',
              selector: '.two-col-text-img__image img',
            },
            headline: {
              default: 'h2',
            },
            title: {},
            content: {},
            linkText: {},
            urlObject: {},
            sectionId: {},
            buttonClass: {
              default: 'primary',
            },
            onDark: {
              default: false,
            },
            imageOnLeft: {
              default: false,
            },
            onLoad: {
              default: false,
            },
            version: {
              default: '1.0.0',
            },
          };
          selectImage = ({ setAttributes, media }) => {
            const { sizes } = media;
            if (sizes && sizes['two-column-image']) {
              setAttributes({
                imageId: media.id,
                imageUrl: sizes['two-column-image'].url,
                imageAlt: media.alt,
              });
            } else {
              alert('La Imagen tiene que ser de minimo 566px de ancho y 364px de alto');
            }
          };
          renderInspector = ({ attributes, setAttributes }) =>
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
                {
                  title: 'Ajustes de diseño',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl,
                    {
                      label: 'Mostrar primero la Imagen',
                      checked: attributes.imageOnLeft,
                      onChange: value =>
                        setAttributes({
                          imageOnLeft: value,
                        }),
                    },
                  ),
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl,
                    {
                      label: 'Clase de bot\xF3n',
                      value: attributes.buttonClass,
                      options: [
                        {
                          label: 'Primario',
                          value: 'primary',
                        },
                        {
                          label: 'Secundario (Naranja)',
                          value: 'secondary',
                        },
                        {
                          label: 'Blanco',
                          value: 'on-primary',
                        },
                      ],
                      onChange: value =>
                        setAttributes({
                          buttonClass: value,
                        }),
                      __nextHasNoMarginBottom: true,
                    },
                  ),
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl,
                    {
                      label: 'Tama\xF1o del titulo',
                      value: attributes.headline,
                      options: [
                        {
                          label: 'headline 1',
                          value: 'h1',
                        },
                        {
                          label: 'headline 2',
                          value: 'h2',
                        },
                        {
                          label: 'headline 3',
                          value: 'h3',
                        },
                        {
                          label: 'headline 4',
                          value: 'h4',
                        },
                        {
                          label: 'headline 5',
                          value: 'h5',
                        },
                        {
                          label: 'headline 6',
                          value: 'h6',
                        },
                      ],
                      onChange: value => {
                        setAttributes({
                          headline: value,
                        });
                      },
                      __nextHasNoMarginBottom: true,
                    },
                  ),
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
                {
                  title: 'Otros Ajustes',
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl,
                  null,
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl,
                      {
                        label: 'Mostrar textos blancos',
                        checked: attributes.onDark,
                        onChange: value =>
                          setAttributes({
                            onDark: value,
                          }),
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl,
                      {
                        label: 'Cargar estilos durante la carga',
                        checked: attributes.onLoad,
                        onChange: value =>
                          setAttributes({
                            onLoad: value,
                          }),
                      },
                    ),
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    'div',
                    {
                      className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'span',
                      null,
                      'Versi\xF3n de estilos',
                    ),
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText,
                      {
                        value: attributes.version,
                        onChange: version =>
                          setAttributes({
                            version,
                          }),
                      },
                    ),
                  ),
                ),
              ),
            );
          edit = ({ attributes, setAttributes, clientId }) => {
            setAttributes({
              sectionId: clientId,
            });
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _container_block__WEBPACK_IMPORTED_MODULE_5__.ContainerBlock,
              {
                title: this.title,
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'T\xEDtulo'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText,
                  {
                    value: attributes.title,
                    multine: 'br',
                    id: 'title',
                    onChange: content =>
                      setAttributes({
                        title: content,
                      }),
                    placeholder: 'Título',
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'span',
                  null,
                  'Descripci\xF3n',
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText,
                  {
                    id: 'content',
                    multine: 'br',
                    value: attributes.content,
                    tagName: 'span',
                    onChange: content =>
                      setAttributes({
                        content: content,
                      }),
                    placeholder: 'Descripción',
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Link'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText,
                  {
                    placehoder: 'Texto del Link',
                    value: attributes.linkText,
                    onChange: linkText =>
                      setAttributes({
                        linkText,
                      }),
                  },
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl,
                  {
                    value: attributes.urlObject,
                    onChange: content =>
                      setAttributes({
                        urlObject: content,
                      }),
                  },
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: _utils__WEBPACK_IMPORTED_MODULE_4__.UTILS.FORM_GROUP,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', null, 'Imagen'),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder,
                  {
                    onSelect: media =>
                      this.selectImage({
                        setAttributes,
                        media,
                      }),
                    allowedTypes: ['image'],
                    multiple: false,
                    mediaPreview: (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      _utils__WEBPACK_IMPORTED_MODULE_4__.ImagePreview,
                      {
                        url: attributes.imageUrl,
                      },
                    ),
                    labels: {
                      title: '',
                      instructions: '',
                    },
                  },
                ),
              ),
              this.renderInspector({
                attributes,
                setAttributes,
              }),
            );
          };
          save = ({ attributes }) => {
            const { themeUri } = blockVars;
            const { onDark, headline } = attributes;
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'div',
                {
                  className: `two-col-text-img ${attributes.imageOnLeft &&
                    'two-col-text-img--inverse'}`,
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: 'two-col-text-img__description',
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content,
                    {
                      className: `headline headline--${headline} ${onDark && 'headline--light'}`,
                      tagName: headline,
                      value: attributes.title,
                    },
                  ),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
                    className: 'separator separator--secondary',
                  }),
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content,
                    {
                      className: onDark && 'text-light',
                      tagName: 'p',
                      value: attributes.content,
                    },
                  ),
                  attributes.urlObject?.url &&
                    attributes.linkUrl &&
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'a',
                      {
                        href: attributes.urlObject?.url,
                        className: `mdc-button mdc-button--raised mdc-button--${attributes.buttonClass}`,
                      },
                      attributes.linkText,
                    ),
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'div',
                  {
                    className: 'two-col-text-img__image',
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
                    id: attributes.imageId,
                    src: attributes.imageUrl,
                    alt: attributes.imageAlt,
                  }),
                  attributes.urlObject?.url &&
                    attributes.linkUrl &&
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'a',
                      {
                        href: attributes.urlObject?.url,
                        className: `mdc-button mdc-button--raised mdc-button--${attributes.buttonClass}`,
                      },
                      attributes.linkText,
                    ),
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('link', {
                rel: 'stylesheet',
                href: `${themeUri}/frontend/dist/two-col-text-img.css?ver=${attributes.version}`,
                media: 'all',
                onLoad: attributes.onLoad ? "this.media='all'" : null,
              }),
            );
          };
        }
        (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.registerBlockType)(
          'qatar-inc/two-column-text-with-media',
          new TwoColumnTextWithMedia(),
        );

        /***/
      },

    /***/ './src/utils.js':
      /*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ImagePreview: () => /* binding */ ImagePreview,
          /* harmony export */ UTILS: () => /* binding */ UTILS,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );

        const UTILS = {
          MAIN_CONTAINER: 'main-container',
          CONTAINER: 'container',
          WRAPPER: 'wrapper',
          FORM_GROUP: 'form-group',
          TITLE: 'block-title',
          ROW: 'row',
          INTERNAL_ROW: 'row-internal',
          COL: 'col',
        };
        const ImagePreview = props => {
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            'div',
            {
              className: 'image-preview',
            },
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
              src: props.url,
              alt: '',
            }),
          );
        };

        /***/
      },

    /***/ './src/index.scss':
      /*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "React" ***!
  \************************/
      /***/ module => {
        module.exports = window['React'];

        /***/
      },

    /***/ '@wordpress/block-editor':
      /*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
      /***/ module => {
        module.exports = window['wp']['blockEditor'];

        /***/
      },

    /***/ '@wordpress/blocks':
      /*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
      /***/ module => {
        module.exports = window['wp']['blocks'];

        /***/
      },

    /***/ '@wordpress/components':
      /*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
      /***/ module => {
        module.exports = window['wp']['components'];

        /***/
      },

    /******/
  }; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/

  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/

    /******/ /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__); // Return the exports of the module
    /******/

    /******/ /******/ return module.exports;
    /******/
  } /* webpack/runtime/compat get default export */
  /******/

  /************************************************************************/
  /******/ /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = module => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })(); /* webpack/runtime/define property getters */
  /******/

  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/

  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/

  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = exports => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/

  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index.scss */ './src/index.scss',
    );
    /* harmony import */ var _gallery_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gallery-slider */ './src/gallery-slider/index.js',
    );
    /* harmony import */ var _gallery_slider_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gallery-slider-item */ './src/gallery-slider-item/index.js',
    );
    /* harmony import */ var _layout_info_with_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout-info-with-media */ './src/layout-info-with-media/index.js',
    );
    /* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./section */ './src/section/index.js',
    );
    /* harmony import */ var _two_column_text_with_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./two-column-text-with-media */ './src/two-column-text-with-media/index.js',
    );
  })();

  /******/
})();
//# sourceMappingURL=index.js.map
