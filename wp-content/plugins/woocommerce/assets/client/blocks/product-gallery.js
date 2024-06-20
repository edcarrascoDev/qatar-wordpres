(() => {
  var e,
    t,
    o,
    l = {
      7746: (e, t, o) => {
        'use strict';
        o.r(t);
        var l = o(4997);
        const r = JSON.parse(
          '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery","version":"1.0.0","title":"Product Gallery (Beta)","description":"Showcase your products relevant images and media.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"multiple":false,"interactivity":true},"textdomain":"woocommerce","usesContext":["postId"],"providesContext":{"thumbnailsPosition":"thumbnailsPosition","thumbnailsNumberOfThumbnails":"thumbnailsNumberOfThumbnails","productGalleryClientId":"productGalleryClientId","nextPreviousButtonsPosition":"nextPreviousButtonsPosition","pagerDisplayMode":"pagerDisplayMode","hoverZoom":"hoverZoom","fullScreenOnClick":"fullScreenOnClick","mode":"mode","cropImages":"cropImages"},"attributes":{"thumbnailsPosition":{"type":"string","default":"left"},"thumbnailsNumberOfThumbnails":{"type":"number","default":3},"pagerDisplayMode":{"type":"string","default":"dots"},"productGalleryClientId":{"type":"string","default":""},"cropImages":{"type":"boolean","default":false},"hoverZoom":{"type":"boolean","default":true},"fullScreenOnClick":{"type":"boolean","default":true},"nextPreviousButtonsPosition":{"type":"string","default":"insideTheImage"},"mode":{"type":"string","default":"standard"}},"viewScript":"wc-product-gallery-frontend","example":{}}',
        );
        var n = o(1609),
          i = o(4715),
          a = o(6087),
          c = o(7143);
        const s = ({ blocks: e, findCondition: t }) => {
          for (const o of e) {
            if (t(o)) return o;
            if (o.innerBlocks) {
              const e = s({ blocks: o.innerBlocks, findCondition: t });
              if (e) return e;
            }
          }
        };
        var m = o(6307);
        const u = e => {
            switch (e) {
              case 'bottom':
              case 'off':
                return { type: 'flex', orientation: 'vertical' };
              default:
                return { type: 'flex', flexWrap: 'nowrap' };
            }
          },
          d = e => ('lock' === e ? { lock: { move: !0, remove: !0 } } : { lock: {} }),
          p = (e, t) => {
            if (void 0 !== t) {
              const o = { ...t, attributes: { ...t.attributes, ...e } };
              (0, c.dispatch)('core/block-editor').updateBlock(t.clientId, o);
            }
          },
          g = ({ blocks: e, lockBlocks: t }) => {
            for (const o of e) p(d(t ? 'lock' : 'unlock'), o);
          },
          h = (e, t) => {
            const o = (0, c.select)('core/block-editor').getBlock(t);
            null == o ||
              o.innerBlocks.forEach(t => {
                'core/group' === t.name && p({ layout: u(e) }, t);
              });
          },
          w = e => {
            var t;
            return `wc-block-product-gallery--has-next-previous-buttons-${
              null === (t = (0, m.e)(e)) || void 0 === t ? void 0 : t.classname
            }`;
          };
        var f = o(6427),
          b = o(7723),
          v = o(5922),
          C = o(8599),
          y = o(9727);
        const E = ({ attributes: e, setAttributes: t, context: o }) => {
            const { cropImages: l, hoverZoom: r, fullScreenOnClick: a } = e,
              {
                productGalleryClientId: c,
                pagerDisplayMode: s,
                nextPreviousButtonsPosition: m,
                thumbnailsNumberOfThumbnails: u,
                thumbnailsPosition: d,
              } = o;
            return (0, n.createElement)(
              i.InspectorControls,
              null,
              (0, n.createElement)(
                f.PanelBody,
                { title: (0, b.__)('Gallery Navigation', 'woocommerce') },
                (0, n.createElement)(C.l, {
                  context: { productGalleryClientId: c, pagerDisplayMode: s },
                }),
                (0, n.createElement)(y.e, {
                  context: { productGalleryClientId: c, nextPreviousButtonsPosition: m },
                }),
                (0, n.createElement)(v.j, {
                  context: {
                    productGalleryClientId: c,
                    thumbnailsNumberOfThumbnails: u,
                    thumbnailsPosition: d,
                  },
                }),
              ),
              (0, n.createElement)(
                f.PanelBody,
                { title: (0, b.__)('Media Settings', 'woocommerce') },
                (0, n.createElement)(f.ToggleControl, {
                  label: (0, b.__)('Crop images to fit', 'woocommerce'),
                  help: (0, b.__)(
                    'Images will be cropped to fit within a square space.',
                    'woocommerce',
                  ),
                  checked: l,
                  onChange: () => t({ cropImages: !l }),
                  className: 'wc-block-product-gallery__crop-images',
                }),
                (0, n.createElement)(f.ToggleControl, {
                  label: (0, b.__)('Zoom while hovering', 'woocommerce'),
                  help: (0, b.__)(
                    'While hovering the large image will zoom in by 30%.',
                    'woocommerce',
                  ),
                  checked: r,
                  onChange: () => t({ hoverZoom: !r }),
                }),
                (0, n.createElement)(f.ToggleControl, {
                  label: (0, b.__)('Open pop-up when clicked', 'woocommerce'),
                  help: (0, b.__)(
                    'Clicking on the large image will open a full-screen gallery experience.',
                    'woocommerce',
                  ),
                  checked: a,
                  onChange: () => t({ fullScreenOnClick: !a }),
                }),
              ),
            );
          },
          k = [
            [
              'core/group',
              {
                layout: { type: 'flex', flexWrap: 'nowrap', verticalAlignment: 'top' },
                metadata: { name: 'Gallery Area' },
              },
              [
                ['woocommerce/product-gallery-thumbnails', d('lock')],
                [
                  'core/group',
                  {
                    layout: {
                      type: 'flex',
                      orientation: 'vertical',
                      justifyContent: 'center',
                      verticalAlignment: 'top',
                    },
                    style: { layout: { selfStretch: 'fixed', flexSize: '100%' } },
                    metadata: { name: 'Large Image and Navigation' },
                    ...d('lock'),
                  },
                  [
                    [
                      'woocommerce/product-gallery-large-image',
                      d('lock'),
                      [
                        [
                          'woocommerce/product-sale-badge',
                          {
                            align: 'right',
                            style: {
                              spacing: {
                                margin: { top: '4px', right: '4px', bottom: '4px', left: '4px' },
                              },
                            },
                            lock: { move: !0 },
                          },
                        ],
                        [
                          'woocommerce/product-gallery-large-image-next-previous',
                          {
                            layout: { type: 'flex', verticalAlignment: 'bottom' },
                            lock: { move: !0, remove: !0 },
                          },
                        ],
                      ],
                    ],
                    ['woocommerce/product-gallery-pager', { lock: { move: !0, remove: !0 } }],
                  ],
                ],
              ],
            ],
          ];
        var x = o(9019),
          _ = o.n(x);
        const L = {
          icon: () =>
            (0, n.createElement)(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, n.createElement)('path', {
                d:
                  'M19 3H5C4.4 3 4 3.4 4 4V11C4 11.5 4.4 12 5 12H19C19.5 12 20 11.6 20 11V4C20 3.4 19.6 3 19 3ZM5.5 10.5V10.1L7.3 8.8L8.6 9.6C8.9 9.8 9.3 9.8 9.5 9.5L11 8.1L13.4 10.5H5.5ZM18.5 10.5H15.6L11.6 6.5C11.3 6.2 10.8 6.2 10.5 6.5L8.9 8L7.7 7.2C7.4 7 7.1 7 6.8 7.2L5.5 8.2V4.5H18.5V10.5Z',
                fill: 'currentColor',
              }),
              (0, n.createElement)('rect', {
                x: '4.75',
                y: '15.5',
                width: '5',
                height: '4.5',
                rx: '1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                fill: 'none',
              }),
              (0, n.createElement)('rect', {
                x: '12.25',
                y: '15.5',
                width: '5',
                height: '4.5',
                rx: '1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                fill: 'none',
              }),
            ),
          edit: ({ clientId: e, attributes: t, setAttributes: o }) => {
            const l = (0, i.useBlockProps)({ className: w(t.nextPreviousButtonsPosition) }),
              { currentTemplateId: r, templateType: m } = (0, c.useSelect)(
                e => ({
                  currentTemplateId: e('core/edit-site').getEditedPostId(),
                  templateType: e('core/edit-site').getEditedPostType(),
                }),
                [],
              );
            return (
              (0, a.useEffect)(() => {
                const l = ((e, t) =>
                  'wp_template_part' === t && e.includes('product-gallery') ? 'full' : 'standard')(
                  r,
                  m,
                );
                o({ ...t, mode: l, productGalleryClientId: e }),
                  ((e, t) => {
                    const { getBlock: o, getBlockRootClientId: l, getBlockIndex: r } = (0,
                      c.select)('core/block-editor'),
                      { moveBlockToPosition: n } = (0, c.dispatch)('core/block-editor'),
                      i = o(t);
                    if (i) {
                      const o = i.innerBlocks.length ? i.innerBlocks[0].attributes.layout : null,
                        a = s({
                          blocks: [i],
                          findCondition: e => 'woocommerce/product-gallery-thumbnails' === e.name,
                        }),
                        c = s({
                          blocks: [i],
                          findCondition(e) {
                            var t;
                            return Boolean(
                              null === (t = e.innerBlocks) || void 0 === t
                                ? void 0
                                : t.find(e => 'woocommerce/product-gallery-large-image' === e.name),
                            );
                          },
                        }),
                        m = r((null == c ? void 0 : c.clientId) || ''),
                        d = r((null == a ? void 0 : a.clientId) || '');
                      if (c && a && -1 !== m && -1 !== d) {
                        g({ blocks: [a, c], lockBlocks: !1 });
                        const { thumbnailsPosition: r } = e;
                        if ((h(r, t), h(r, i.innerBlocks[0].clientId), o)) {
                          const e = u(r).orientation;
                          p({ layout: { ...o, orientation: e } }, i.innerBlocks[0]);
                        }
                        ((('bottom' === r || 'right' === r) && d < m) || ('left' === r && d > m)) &&
                          n(a.clientId, l(a.clientId) || void 0, l(c.clientId) || void 0, m),
                          g({ blocks: [a, c], lockBlocks: !0 });
                      }
                    }
                  })(t, e);
              }, [o, t, e, r, m]),
              (0, n.createElement)(
                'div',
                { ...l },
                (0, n.createElement)(
                  i.InspectorControls,
                  null,
                  (0, n.createElement)(E, {
                    attributes: t,
                    setAttributes: o,
                    context: {
                      productGalleryClientId: e,
                      pagerDisplayMode: t.pagerDisplayMode,
                      thumbnailsPosition: t.thumbnailsPosition,
                      thumbnailsNumberOfThumbnails: t.thumbnailsNumberOfThumbnails,
                      nextPreviousButtonsPosition: t.nextPreviousButtonsPosition,
                    },
                  }),
                ),
                (0, n.createElement)(i.InnerBlocks, {
                  allowedBlocks: [
                    'woocommerce/product-gallery-large-image',
                    'woocommerce/product-gallery-thumbnails',
                  ],
                  templateLock: !1,
                  template: k,
                }),
              )
            );
          },
          save: ({ attributes: e }) => {
            const t = i.useBlockProps.save({
                className: _()('wc-block-product-gallery', w(e.nextPreviousButtonsPosition)),
              }),
              o = i.useInnerBlocksProps.save(t);
            return (0, n.createElement)('div', { ...o });
          },
        };
        o(5478), o(6819), o(2730), o(8129), (0, l.registerBlockType)(r, L);
      },
      7940: (e, t, o) => {
        'use strict';
        o.d(t, {
          CQ: () => s,
          In: () => n,
          QX: () => c,
          j1: () => a,
          kp: () => u,
          nR: () => i,
          vT: () => m,
        });
        var l = o(1609),
          r = o(5573);
        const n = () =>
            (0, l.createElement)(
              'svg',
              {
                width: '18',
                height: '18',
                viewBox: '0 0 18 18',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, l.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M6.22448 1.5L1.5 6.81504V11.7072L5.12953 9.06066C5.38061 8.87758 5.71858 8.86829 5.97934 9.0373L8.90601 10.9342L12.4772 7.46225C12.7683 7.17925 13.2317 7.17925 13.5228 7.46225L16.5 10.3568V2C16.5 1.72386 16.2761 1.5 16 1.5H6.22448ZM1.5 13.5636V16C1.5 16.2761 1.72386 16.5 2 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V12.4032L16.4772 12.4266L13 9.04603L9.52279 12.4266C9.27191 12.6706 8.88569 12.7086 8.59206 12.5183L5.59643 10.5766L1.5 13.5636ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z',
                fill: '#1E1E1E',
              }),
            ),
          i = () =>
            (0, l.createElement)(
              r.SVG,
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '49',
                height: '48',
                viewBox: '0 0 49 48',
                fill: 'none',
                className: 'wc-block-product-gallery-large-image-next-previous-right--inside-image',
              },
              (0, l.createElement)(
                'g',
                { filter: 'url(#filter0_b_397_11354)' },
                (0, l.createElement)('rect', {
                  x: '0.5',
                  width: '48',
                  height: '48',
                  rx: '5',
                  fill: 'black',
                  fillOpacity: '0.5',
                }),
                (0, l.createElement)('path', {
                  d: 'M21.7001 12L19.3 14L28.5 24L19.3 34L21.7001 36L32.5 24L21.7001 12Z',
                  fill: 'white',
                }),
              ),
              (0, l.createElement)(
                'defs',
                null,
                (0, l.createElement)(
                  'filter',
                  {
                    id: 'filter0_b_397_11354',
                    x: '-9.5',
                    y: '-10',
                    width: '68',
                    height: '68',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                  },
                  (0, l.createElement)('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix',
                  }),
                  (0, l.createElement)('feGaussianBlur', {
                    in: 'BackgroundImageFix',
                    stdDeviation: '5',
                  }),
                  (0, l.createElement)('feComposite', {
                    in2: 'SourceAlpha',
                    operator: 'in',
                    result: 'effect1_backgroundBlur_397_11354',
                  }),
                  (0, l.createElement)('feBlend', {
                    mode: 'normal',
                    in: 'SourceGraphic',
                    in2: 'effect1_backgroundBlur_397_11354',
                    result: 'shape',
                  }),
                ),
              ),
            ),
          a = () =>
            (0, l.createElement)(
              r.SVG,
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '49',
                height: '48',
                viewBox: '0 0 49 48',
                fill: 'none',
                className: 'wc-block-product-gallery-large-image-next-previous-left--inside-image',
              },
              (0, l.createElement)(
                'g',
                { filter: 'url(#filter0_b_397_11356)' },
                (0, l.createElement)('rect', {
                  x: '0.5',
                  width: '48',
                  height: '48',
                  rx: '5',
                  fill: 'black',
                  fillOpacity: '0.5',
                }),
                (0, l.createElement)('path', {
                  d: 'M28.1 12L30.5 14L21.3 24L30.5 34L28.1 36L17.3 24L28.1 12Z',
                  fill: 'white',
                }),
              ),
              (0, l.createElement)(
                'defs',
                null,
                (0, l.createElement)(
                  'filter',
                  {
                    id: 'filter0_b_397_11356',
                    x: '-9.5',
                    y: '-10',
                    width: '68',
                    height: '68',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                  },
                  (0, l.createElement)('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix',
                  }),
                  (0, l.createElement)('feGaussianBlur', {
                    in: 'BackgroundImageFix',
                    stdDeviation: '5',
                  }),
                  (0, l.createElement)('feComposite', {
                    in2: 'SourceAlpha',
                    operator: 'in',
                    result: 'effect1_backgroundBlur_397_11356',
                  }),
                  (0, l.createElement)('feBlend', {
                    mode: 'normal',
                    in: 'SourceGraphic',
                    in2: 'effect1_backgroundBlur_397_11356',
                    result: 'shape',
                  }),
                ),
              ),
            ),
          c = () =>
            (0, l.createElement)(
              r.SVG,
              {
                width: '10',
                height: '16',
                viewBox: '0 0 10 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                className:
                  'wc-block-product-gallery-large-image-next-previous-right--outside-image',
              },
              (0, l.createElement)('path', {
                d: 'M1 1.28516L8 8.28516L1 15.2852',
                stroke: 'black',
                strokeWidth: '1.5',
              }),
            ),
          s = () =>
            (0, l.createElement)(
              r.SVG,
              {
                width: '10',
                height: '16',
                viewBox: '0 0 10 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                className: 'wc-block-product-gallery-large-image-next-previous-left--outside-image',
              },
              (0, l.createElement)('path', {
                d: 'M9 1.28516L2 8.28516L9 15.2852',
                stroke: 'black',
                strokeWidth: '1.5',
              }),
            ),
          m = () =>
            (0, l.createElement)(
              r.SVG,
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '30',
                height: '18',
                viewBox: '0 0 30 18',
                fill: 'none',
              },
              (0, l.createElement)('path', {
                d:
                  'M4.525 8.8L6.825 6.5L5.825 5.5L3.525 7.8C2.825 8.5 2.825 9.6 3.525 10.3L5.825 12.6L6.925 11.5L4.625 9.2C4.425 9.1 4.425 8.9 4.525 8.8Z',
                fill: 'currentColor',
              }),
              (0, l.createElement)('path', {
                d:
                  'M25.4 8.8L23.1 6.5L24.1 5.5L26.4 7.8C27.1 8.5 27.1 9.6 26.4 10.3L24.1 12.6L23 11.5L25.3 9.2C25.5 9.1 25.5 8.9 25.4 8.8Z',
                fill: 'currentColor',
              }),
              (0, l.createElement)('rect', {
                x: '0.75',
                y: '0.75',
                width: '28.5',
                height: '16.5',
                rx: '1.25',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
            ),
          u = () =>
            (0, l.createElement)(
              r.SVG,
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '38',
                height: '18',
                viewBox: '0 0 38 18',
                fill: 'none',
              },
              (0, l.createElement)('path', {
                d:
                  'M1.525 8.3L5.825 4L4.825 3L0.525 7.3C-0.175 8 -0.175 9.1 0.525 9.8L4.825 14.1L5.925 13L1.625 8.7C1.425 8.6 1.425 8.4 1.525 8.3Z',
                fill: 'currentColor',
              }),
              (0, l.createElement)('path', {
                d:
                  'M37.325 7.3L33.025 3L31.925 4.1L36.2251 8.4C36.3251 8.5 36.3251 8.7 36.2251 8.8L31.925 13.1L33.025 14.2L37.325 9.9C38.025 9.1 38.025 8 37.325 7.3Z',
                fill: 'currentColor',
              }),
              (0, l.createElement)('path', {
                d:
                  'M25.925 0H11.925C10.825 0 9.92505 0.9 9.92505 2V16C9.92505 17.1 10.825 18 11.925 18H25.925C27.025 18 27.925 17.1 27.925 16V2C27.925 0.9 27.025 0 25.925 0ZM11.925 1.5H25.925C26.225 1.5 26.425 1.7 26.425 2V10.4L23.425 7.5C23.125 7.2 22.625 7.2 22.425 7.5L18.825 11L15.925 9C15.625 8.8 15.325 8.8 15.125 9L11.525 11.6V2C11.425 1.7 11.625 1.5 11.925 1.5ZM25.925 16.5H11.925C11.625 16.5 11.425 16.3 11.425 16V13.6L15.525 10.6L18.525 12.5C18.825 12.7 19.225 12.7 19.425 12.4L22.925 9L26.425 12.4V16C26.425 16.3 26.225 16.5 25.925 16.5Z',
                fill: 'currentColor',
              }),
            );
      },
      6819: (e, t, o) => {
        'use strict';
        var l = o(4997),
          r = o(1609),
          n = o(4715),
          i = o(6087),
          a = o(6427),
          c = o(9019),
          s = o.n(c),
          m = (o(431), o(9727)),
          u = o(6307);
        const d = e => {
            switch (e) {
              case 'top':
                return 'flex-start';
              case 'center':
                return 'center';
              default:
                return 'flex-end';
            }
          },
          p = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-large-image-next-previous","version":"1.0.0","title":"Next/Previous Buttons","description":"Display next and previous buttons.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["nextPreviousButtonsPosition","productGalleryClientId","postId"],"textdomain":"woocommerce","supports":{"layout":{"default":{"type":"flex","verticalAlignment":"bottom"},"allowVerticalAlignment":true,"allowJustification":false,"allowOrientation":false,"allowInheriting":false}},"ancestor":["woocommerce/product-gallery-large-image"]}',
          );
        var g = o(7940);
        (0, l.registerBlockType)(p, {
          icon: g.In,
          edit: ({ attributes: e, context: t }) => {
            var o;
            const l = (0, n.useBlockProps)({
                style: {
                  width: '100%',
                  alignItems: d(
                    null === (o = e.layout) || void 0 === o ? void 0 : o.verticalAlignment,
                  ),
                },
                className: s()(
                  'wc-block-editor-product-gallery-large-image-next-previous',
                  'wc-block-product-gallery-large-image-next-previous',
                ),
              }),
              c = (0, i.useMemo)(() => (0, u.e)(t.nextPreviousButtonsPosition), [
                t.nextPreviousButtonsPosition,
              ]);
            return (0, r.createElement)(
              'div',
              { ...l },
              (0, r.createElement)(
                n.InspectorControls,
                null,
                (0, r.createElement)(a.PanelBody, null, (0, r.createElement)(m.e, { context: t })),
              ),
              (0, r.createElement)(
                'div',
                {
                  className: s()(
                    'wc-block-product-gallery-large-image-next-previous-container',
                    `wc-block-product-gallery-large-image-next-previous--${
                      null == c ? void 0 : c.classname
                    }`,
                  ),
                },
                (null == c ? void 0 : c.PrevButtonImage) &&
                  (0, r.createElement)(c.PrevButtonImage, null),
                (null == c ? void 0 : c.NextButtonImage) &&
                  (0, r.createElement)(c.NextButtonImage, null),
              ),
            );
          },
          save: () => (0, r.createElement)('div', { ...n.useBlockProps.save() }),
        });
      },
      9727: (e, t, o) => {
        'use strict';
        o.d(t, { e: () => d });
        var l = o(1609),
          r = o(7723),
          n = o(7143),
          i = o(4715),
          a = o(6427),
          c = o(4727),
          s = o(7940);
        const m = {
            [c.j.insideTheImage]: (0, l.createElement)(s.vT, null),
            [c.j.outsideTheImage]: (0, l.createElement)(s.kp, null),
          },
          u = e => {
            switch (e) {
              case c.j.insideTheImage:
                return (0, r.__)(
                  'Next and previous buttons will appear inside the large image.',
                  'woocommerce',
                );
              case c.j.outsideTheImage:
                return (0, r.__)(
                  'Next and previous buttons will appear on outside the large image.',
                  'woocommerce',
                );
              default:
                return (0, r.__)('No next or previous button will be displayed.', 'woocommerce');
            }
          },
          d = ({ context: e }) => {
            const { productGalleryClientId: t, nextPreviousButtonsPosition: o } = e,
              { updateBlockAttributes: s } = (0, n.useDispatch)(i.store);
            return (0, l.createElement)(
              a.__experimentalToggleGroupControl,
              {
                label: (0, r.__)('Next/Prev Buttons', 'woocommerce'),
                className: 'wc-block-editor-product-gallery-large-image-next-previous-settings',
                style: { width: '100%' },
                onChange: e => s(t, { nextPreviousButtonsPosition: e }),
                help: u(o),
                value: o,
              },
              (0, l.createElement)(a.__experimentalToggleGroupControlOption, {
                value: c.j.off,
                label: (0, r.__)('Off', 'woocommerce'),
              }),
              (0, l.createElement)(a.__experimentalToggleGroupControlOption, {
                value: c.j.insideTheImage,
                label: m.insideTheImage,
              }),
              (0, l.createElement)(a.__experimentalToggleGroupControlOption, {
                value: c.j.outsideTheImage,
                label: m.outsideTheImage,
              }),
            );
          };
      },
      4727: (e, t, o) => {
        'use strict';
        o.d(t, { j: () => l });
        let l = (function(e) {
          return (
            (e.off = 'off'),
            (e.insideTheImage = 'insideTheImage'),
            (e.outsideTheImage = 'outsideTheImage'),
            e
          );
        })({});
      },
      6307: (e, t, o) => {
        'use strict';
        o.d(t, { e: () => r });
        var l = o(7940);
        const r = e => {
          switch (e) {
            case 'insideTheImage':
              return { PrevButtonImage: l.j1, NextButtonImage: l.nR, classname: 'inside-image' };
            case 'outsideTheImage':
              return { PrevButtonImage: l.CQ, NextButtonImage: l.QX, classname: 'outside-image' };
            default:
              return null;
          }
        };
      },
      8527: (e, t, o) => {
        'use strict';
        o.d(t, { q: () => l });
        let l = (function(e) {
          return (e.DIGITS = 'digits'), (e.DOTS = 'dots'), (e.OFF = 'off'), e;
        })({});
      },
      4508: (e, t, o) => {
        'use strict';
        o.d(t, { AI: () => i, Ht: () => a, WX: () => s, hl: () => n, xy: () => c });
        var l = o(1609),
          r = o(5573);
        const n = () =>
            (0, l.createElement)(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, l.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M5.00018 11L7.00018 11L7.00018 13H5.00018V11ZM11.0002 11L13.0002 11V13H11.0002V11ZM17.0002 11L19.0002 11V13H17.0002V11Z',
                fill: 'currentColor',
              }),
            ),
          i = (0, l.createElement)(
            r.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 12 12' },
            (0, l.createElement)('circle', {
              cx: '6',
              cy: '6',
              r: '6',
              fill: 'black',
              fillOpacity: '0.2',
            }),
          ),
          a = (0, l.createElement)(
            r.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 12 12' },
            (0, l.createElement)('circle', { cx: '6', cy: '6', r: '6', fill: 'black' }),
          ),
          c = () =>
            (0, l.createElement)(
              r.SVG,
              {
                width: '80',
                height: '36',
                viewBox: '0 0 80 36',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, l.createElement)('circle', {
                cx: '32.6665',
                cy: '18',
                r: '3',
                fill: 'currentColor',
              }),
              (0, l.createElement)('circle', {
                cx: '40.6665',
                cy: '18',
                r: '2.25',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
              (0, l.createElement)('circle', {
                cx: '48.6665',
                cy: '18',
                r: '2.25',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
            ),
          s = () =>
            (0, l.createElement)(
              r.SVG,
              {
                width: '80',
                height: '36',
                viewBox: '0 0 80 36',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, l.createElement)('path', {
                d:
                  'M30.1417 22H31.9288V14.9541H30.1417L28.3497 16.1748V17.7178L30.0489 16.5703H30.1417V22ZM36.9771 22H41.7231V21.0674H38.4663V20.9697L39.9604 19.4805C41.2397 18.2109 41.6108 17.5957 41.6108 16.7949V16.7803C41.6108 15.6182 40.644 14.7832 39.3306 14.7832C37.9146 14.7832 36.9185 15.6914 36.9136 16.9805L36.9233 16.9902H37.9487L37.9536 16.9756C37.9536 16.2041 38.481 15.6865 39.272 15.6865C40.0435 15.6865 40.5171 16.1943 40.5171 16.8828V16.8975C40.5171 17.4688 40.2485 17.8301 39.3159 18.8018L36.9771 21.2578V22ZM48.7392 22.1318C50.2333 22.1318 51.2929 21.2627 51.2929 20.0518V20.042C51.2929 19.0557 50.5995 18.4307 49.5644 18.3379V18.3135C50.4237 18.1328 51.0487 17.5469 51.0487 16.6729V16.6631C51.0487 15.5742 50.1308 14.8223 48.7294 14.8223C47.3524 14.8223 46.4149 15.6084 46.3075 16.7949L46.3026 16.8486H47.328L47.3329 16.7998C47.4013 16.1357 47.9481 15.7207 48.7294 15.7207C49.5253 15.7207 49.9843 16.1211 49.9843 16.8047V16.8145C49.9843 17.4688 49.4374 17.9424 48.6317 17.9424H47.8065V18.792H48.6659C49.6034 18.792 50.1796 19.2363 50.1796 20.0322V20.042C50.1796 20.7354 49.5985 21.2188 48.7392 21.2188C47.8651 21.2188 47.2743 20.7695 47.206 20.1299L47.2011 20.0811H46.1562L46.161 20.1396C46.2538 21.3066 47.2353 22.1318 48.7392 22.1318Z',
                fill: 'currentColor',
              }),
            );
      },
      2730: (e, t, o) => {
        'use strict';
        var l = o(4997),
          r = o(4508),
          n = o(1609),
          i = o(7104),
          a = o(4715),
          c = o(6427),
          s = o(9019),
          m = o.n(s),
          u = o(8599),
          d = o(8527);
        const p = () => {
            const e = Array.from({ length: 4 }, (e, t) => {
              const o = 0 === t;
              return (0, n.createElement)(
                'li',
                {
                  className:
                    'wc-block-editor-product-gallery-pager__item ' + (o ? 'is-active' : ''),
                  key: t,
                },
                t + 1,
              );
            });
            return (0, n.createElement)(
              'ul',
              { className: 'wc-block-editor-product-gallery-pager__pager' },
              e,
            );
          },
          g = e => {
            const { iconClass: t } = e,
              o = Array.from({ length: 3 }, (e, o) => {
                const l = 0 === o ? r.Ht : r.AI;
                return (0, n.createElement)(
                  'li',
                  { key: o },
                  (0, n.createElement)(i.A, { className: t, icon: l, size: 12 }),
                );
              });
            return (0, n.createElement)(
              'ul',
              { className: 'wc-block-editor-product-gallery-pager__pager' },
              o,
            );
          },
          h = e => {
            const { pagerDisplayMode: t } = e;
            switch (t) {
              case d.q.DOTS:
                return (0, n.createElement)(g, null);
              case d.q.DIGITS:
                return (0, n.createElement)(p, null);
              case d.q.OFF:
                return null;
              default:
                return (0, n.createElement)(g, null);
            }
          },
          w = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-pager","version":"1.0.0","title":"Pager","description":"Display the gallery pager.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"],"usesContext":["pagerDisplayMode","productGalleryClientId","thumbnailsNumberOfThumbnails","postId"]}',
          );
        o(4063),
          (0, l.registerBlockType)(w, {
            icon: r.hl,
            edit: e => {
              const { context: t } = e,
                o = (0, a.useBlockProps)({
                  className: m()(
                    'wc-block-editor-product-gallery-pager',
                    'wc-block-product-gallery-pager',
                  ),
                });
              return (0, n.createElement)(
                'div',
                { ...o },
                (0, n.createElement)(
                  a.InspectorControls,
                  null,
                  (0, n.createElement)(
                    c.PanelBody,
                    null,
                    (0, n.createElement)(u.l, { context: t }),
                  ),
                ),
                (0, n.createElement)(h, { pagerDisplayMode: t.pagerDisplayMode }),
              );
            },
            save: () => null,
          });
      },
      8599: (e, t, o) => {
        'use strict';
        o.d(t, { l: () => u });
        var l = o(1609),
          r = o(4715),
          n = o(7143),
          i = o(7723),
          a = o(6427),
          c = o(8527),
          s = o(4508);
        const m = e => {
            switch (e) {
              case c.q.DIGITS:
                return (0, i.__)(
                  'A list of numbers will show to indicate the number of items.',
                  'woocommerce',
                );
              case c.q.DOTS:
                return (0, i.__)(
                  'A series of dots will show to indicate the number of items.',
                  'woocommerce',
                );
              default:
                return (0, i.__)('No pager will be displayed.', 'woocommerce');
            }
          },
          u = ({ context: e }) => {
            const { productGalleryClientId: t, pagerDisplayMode: o } = e,
              { updateBlockAttributes: u } = (0, n.useDispatch)(r.store);
            return (0, l.createElement)(
              a.__experimentalToggleGroupControl,
              {
                label: (0, i.__)('Pager', 'woocommerce'),
                style: { width: '100%' },
                onChange: e => {
                  u(t, { pagerDisplayMode: e });
                },
                help: m(o),
                value: o,
              },
              (0, l.createElement)(a.__experimentalToggleGroupControlOption, {
                value: c.q.OFF,
                label: (0, i.__)('Off', 'woocommerce'),
              }),
              (0, l.createElement)(a.__experimentalToggleGroupControlOption, {
                value: c.q.DOTS,
                label: (0, l.createElement)(s.xy, null),
              }),
              (0, l.createElement)(a.__experimentalToggleGroupControlOption, {
                value: c.q.DIGITS,
                label: (0, l.createElement)(s.WX, null),
              }),
            );
          };
      },
      5922: (e, t, o) => {
        'use strict';
        o.d(t, { j: () => g });
        var l = o(1609),
          r = o(4715),
          n = o(7723),
          i = o(7104),
          a = o(9933),
          c = o(819),
          s = o(9286),
          m = o(7143),
          u = o(6427),
          d = o(2165);
        const p = {
            [d.P.OFF]: (0, n.__)('No thumbnails will be displayed.', 'woocommerce'),
            [d.P.LEFT]: (0, n.__)(
              'A strip of small images will appear to the left of the main gallery image.',
              'woocommerce',
            ),
            [d.P.BOTTOM]: (0, n.__)(
              'A strip of small images will appear below the main gallery image.',
              'woocommerce',
            ),
            [d.P.RIGHT]: (0, n.__)(
              'A strip of small images will appear to the right of the main gallery image.',
              'woocommerce',
            ),
          },
          g = ({ context: e }) => {
            const { productGalleryClientId: t } = e,
              { updateBlockAttributes: o } = (0, m.useDispatch)(r.store);
            return (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(
                u.__experimentalToggleGroupControl,
                {
                  className: 'wc-block-editor-product-gallery-thumbnails__position-toggle',
                  isBlock: !0,
                  label: (0, n.__)('Thumbnails', 'woocommerce'),
                  value: e.thumbnailsPosition,
                  help: p[e.thumbnailsPosition],
                  onChange: e => o(t, { thumbnailsPosition: e }),
                },
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: d.P.OFF,
                  label: (0, n.__)('Off', 'woocommerce'),
                }),
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: d.P.LEFT,
                  label: (0, l.createElement)(i.A, { size: 32, icon: a.A }),
                }),
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: d.P.BOTTOM,
                  label: (0, l.createElement)(i.A, { size: 32, icon: c.A }),
                }),
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: d.P.RIGHT,
                  label: (0, l.createElement)(i.A, { size: 32, icon: s.A }),
                }),
              ),
              e.thumbnailsPosition !== d.P.OFF &&
                (0, l.createElement)(u.RangeControl, {
                  label: (0, n.__)('Number of Thumbnails', 'woocommerce'),
                  value: e.thumbnailsNumberOfThumbnails,
                  onChange: e => o(t, { thumbnailsNumberOfThumbnails: Math.round(e) }),
                  help: (0, n.__)(
                    'Choose how many thumbnails (3-8) will display. If more images exist, a “View all” button will display.',
                    'woocommerce',
                  ),
                  max: 8,
                  min: 3,
                  step: 1,
                }),
            );
          };
      },
      2165: (e, t, o) => {
        'use strict';
        o.d(t, { P: () => l });
        let l = (function(e) {
          return (e.OFF = 'off'), (e.LEFT = 'left'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), e;
        })({});
      },
      8129: (e, t, o) => {
        'use strict';
        var l = o(4997),
          r = o(1609);
        var n = o(4715),
          i = o(6427);
        const a = window.wc.wcSettings;
        var c, s, m, u, d, p, g, h, w, f;
        const b = (0, a.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          v = b.pluginUrl + 'assets/images/',
          C =
            (b.pluginUrl,
            b.buildPhase,
            null === (c = a.STORE_PAGES.shop) || void 0 === c || c.permalink,
            null === (s = a.STORE_PAGES.checkout) || void 0 === s || s.id,
            null === (m = a.STORE_PAGES.checkout) || void 0 === m || m.permalink,
            null === (u = a.STORE_PAGES.privacy) || void 0 === u || u.permalink,
            null === (d = a.STORE_PAGES.privacy) || void 0 === d || d.title,
            null === (p = a.STORE_PAGES.terms) || void 0 === p || p.permalink,
            null === (g = a.STORE_PAGES.terms) || void 0 === g || g.title,
            null === (h = a.STORE_PAGES.cart) || void 0 === h || h.id,
            null === (w = a.STORE_PAGES.cart) || void 0 === w || w.permalink,
            null !== (f = a.STORE_PAGES.myaccount) && void 0 !== f && f.permalink
              ? a.STORE_PAGES.myaccount.permalink
              : (0, a.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, a.getSetting)('localPickupEnabled', !1),
            (0, a.getSetting)('countries', {})),
          y = (0, a.getSetting)('countryData', {}),
          E =
            (Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, C[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, C[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(Object.keys(y).map(e => [e, y[e].locale || []])),
            {
              address: [
                'first_name',
                'last_name',
                'company',
                'address_1',
                'address_2',
                'city',
                'postcode',
                'country',
                'state',
                'phone',
              ],
              contact: ['email'],
              order: [],
            });
        (0, a.getSetting)('addressFieldsLocations', E).address,
          (0, a.getSetting)('addressFieldsLocations', E).contact,
          (0, a.getSetting)('addressFieldsLocations', E).order,
          (0, a.getSetting)('additionalOrderFields', {}),
          (0, a.getSetting)('additionalContactFields', {}),
          (0, a.getSetting)('additionalAddressFields', {});
        var k = o(9019),
          x = o.n(k),
          _ = (o(1565), o(5922)),
          L = o(2165);
        const O = JSON.parse(
          '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-thumbnails","version":"1.0.0","title":"Thumbnails","description":"Display the Thumbnails of a product.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["postId","thumbnailsPosition","thumbnailsNumberOfThumbnails","productGalleryClientId","mode","cropImages"],"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"],"supports":{"spacing":{"margin":true,"__experimentalDefaultControls":{"margin":true}}}}',
        );
        (0, l.registerBlockType)(O, {
          icon: () =>
            (0, r.createElement)(
              'svg',
              {
                width: '19',
                height: '19',
                viewBox: '0 0 19 19',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, r.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M13.375 1.5H1.625C1.55596 1.5 1.5 1.55596 1.5 1.625V9.87895L4.35871 8.33965C4.5696 8.22609 4.82204 8.22009 5.03808 8.3235L7.42329 9.46513L10.3126 7.39076C10.574 7.20308 10.926 7.20308 11.1874 7.39076L13.5 9.05108V1.625C13.5 1.55596 13.444 1.5 13.375 1.5ZM13.5 10.8976L10.75 8.92328L7.93741 10.9426C7.71497 11.1023 7.42319 11.1281 7.1762 11.0098L4.73428 9.84105L1.5 11.5826V13.375C1.5 13.444 1.55596 13.5 1.625 13.5H13.375C13.444 13.5 13.5 13.444 13.5 13.375V10.8976ZM1.625 0C0.727537 0 0 0.727538 0 1.625V13.375C0 14.2725 0.727538 15 1.625 15H13.375C14.2725 15 15 14.2725 15 13.375V1.625C15 0.727537 14.2725 0 13.375 0H1.625ZM17.25 5V16C17.25 16.6909 16.6909 17.25 16.0011 17.25H3V18.75H16.0011C17.5204 18.75 18.75 17.5183 18.75 16V5H17.25Z',
                fill: '#1E1E1E',
              }),
            ),
          edit: ({ attributes: e, setAttributes: t, context: o }) => {
            const l = (0, n.useBlockProps)({
              className: x()(
                'wc-block-product-gallery-thumbnails',
                `wc-block-product-gallery-thumbnails--number-of-thumbnails-${o.thumbnailsNumberOfThumbnails}`,
                `wc-block-product-gallery-thumbnails--position-${o.thumbnailsPosition}`,
              ),
            });
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'div',
                { ...l },
                (0, r.createElement)(
                  n.InspectorControls,
                  null,
                  (0, r.createElement)(
                    i.PanelBody,
                    null,
                    (0, r.createElement)(_.j, { attributes: e, setAttributes: t, context: o }),
                  ),
                ),
                (0, r.createElement)(
                  i.Disabled,
                  null,
                  (0, r.createElement)(
                    () =>
                      o.thumbnailsPosition !== L.P.OFF
                        ? (0, r.createElement)(
                            'div',
                            { className: 'wc-block-editor-product-gallery-thumbnails' },
                            [...Array(o.thumbnailsNumberOfThumbnails).keys()].map(e =>
                              (0, r.createElement)(
                                'div',
                                {
                                  className: 'wc-block-product-gallery-thumbnails__thumbnail',
                                  key: e,
                                },
                                (0, r.createElement)('img', {
                                  src: `${v}block-placeholders/product-image-gallery.svg`,
                                  alt: 'Placeholder',
                                }),
                              ),
                            ),
                          )
                        : null,
                    null,
                  ),
                ),
              ),
            );
          },
          save: () => null,
        });
      },
      819: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => n });
        var l = o(1609),
          r = o(5573);
        const n = (0, l.createElement)(
          r.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' },
          (0, l.createElement)('path', {
            d:
              'M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM5 4.5H19C19.3 4.5 19.5 4.7 19.5 5V8.4L16.5 5.5C16.2 5.2 15.7 5.2 15.5 5.5L11.9 9L9 7C8.7 6.8 8.4 6.8 8.2 7L4.6 9.6V5C4.5 4.7 4.7 4.5 5 4.5ZM19 12.5H5C4.7 12.5 4.5 12.3 4.5 12V11.6L8.6 8.6L11.6 10.5C11.9 10.7 12.3 10.7 12.5 10.4L16 7L19.5 10.4V12C19.5 12.3 19.3 12.5 19 12.5Z',
            fill: 'currentColor',
          }),
          (0, l.createElement)('rect', {
            x: '6.25',
            y: '15.75',
            width: '4.5',
            height: '4.5',
            rx: '1.25',
            stroke: 'currentColor',
            strokeWidth: '1.5',
          }),
          (0, l.createElement)('rect', {
            x: '13.25',
            y: '15.75',
            width: '4.5',
            height: '4.5',
            rx: '1.25',
            stroke: 'currentColor',
            strokeWidth: '1.5',
          }),
        );
      },
      9933: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => n });
        var l = o(1609),
          r = o(5573);
        const n = (0, l.createElement)(
          r.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 25 24', fill: 'none' },
          (0, l.createElement)(
            'g',
            { clipPath: 'url(#clip0_420_11645)' },
            (0, l.createElement)('path', {
              d:
                'M22.5 3H10.5C9.4 3 8.5 3.9 8.5 5V19C8.5 20.1 9.4 21 10.5 21H22.5C23.6 21 24.5 20.1 24.5 19V5C24.5 3.9 23.6 3 22.5 3ZM10.5 4.5H22.5C22.8 4.5 23 4.7 23 5V13.4L21 10.5C20.7 10.2 20.2 10.2 20 10.5L16.4 14L13.5 12C13.2 11.8 12.9 11.8 12.7 12L10.1 14.6V5C10 4.7 10.2 4.5 10.5 4.5ZM22.5 19.5H10.5C10.2 19.5 10 19.3 10 19V16.6L13.1 13.6L16.1 15.5C16.4 15.7 16.8 15.7 17 15.4L20.5 12L23 15.4V19C23 19.3 22.8 19.5 22.5 19.5Z',
              fill: 'currentColor',
            }),
            (0, l.createElement)('rect', {
              x: '1.25',
              y: '3.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
            (0, l.createElement)('rect', {
              x: '1.25',
              y: '10.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
          ),
          (0, l.createElement)(
            'defs',
            null,
            (0, l.createElement)(
              'clipPath',
              { id: 'clip0_420_11645' },
              (0, l.createElement)('rect', {
                width: '24',
                height: '24',
                fill: 'white',
                transform: 'translate(0.5)',
              }),
            ),
          ),
        );
      },
      9286: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => n });
        var l = o(1609),
          r = o(5573);
        const n = (0, l.createElement)(
          r.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 25 24', fill: 'none' },
          (0, l.createElement)(
            'g',
            { clipPath: 'url(#clip0_420_11656)' },
            (0, l.createElement)('path', {
              d:
                'M14.5 3H2.5C1.4 3 0.5 3.9 0.5 5V19C0.5 20.1 1.4 21 2.5 21H14.5C15.6 21 16.5 20.1 16.5 19V5C16.5 3.9 15.6 3 14.5 3ZM2.5 4.5H14.5C14.8 4.5 15 4.7 15 5V13.4L13 10.5C12.7 10.2 12.2 10.2 12 10.5L8.4 14L5.5 12C5.2 11.8 4.9 11.8 4.7 12L2.1 14.6V5C2 4.7 2.2 4.5 2.5 4.5ZM14.5 19.5H2.5C2.2 19.5 2 19.3 2 19V16.6L5.1 13.6L8.1 15.5C8.4 15.7 8.8 15.7 9 15.4L12.5 12L15 15.4V19C15 19.3 14.8 19.5 14.5 19.5Z',
              fill: 'currentColor',
            }),
            (0, l.createElement)('rect', {
              x: '19.25',
              y: '3.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
            (0, l.createElement)('rect', {
              x: '19.25',
              y: '10.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
          ),
          (0, l.createElement)(
            'defs',
            null,
            (0, l.createElement)(
              'clipPath',
              { id: 'clip0_420_11656' },
              (0, l.createElement)('rect', {
                width: '24',
                height: '24',
                fill: 'currentColor',
                transform: 'translate(0.5)',
              }),
            ),
          ),
        );
      },
      431: () => {},
      4063: () => {},
      1565: () => {},
      5478: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      4715: e => {
        'use strict';
        e.exports = window.wp.blockEditor;
      },
      4997: e => {
        'use strict';
        e.exports = window.wp.blocks;
      },
      6427: e => {
        'use strict';
        e.exports = window.wp.components;
      },
      7143: e => {
        'use strict';
        e.exports = window.wp.data;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
    },
    r = {};
  function n(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { exports: {} });
    return l[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = l),
    (e = []),
    (n.O = (t, o, l, r) => {
      if (!o) {
        var i = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, l, r] = e[m], a = !0, c = 0; c < o.length; c++)
            (!1 & r || i >= r) && Object.keys(n.O).every(e => n.O[e](o[c]))
              ? o.splice(c--, 1)
              : ((a = !1), r < i && (i = r));
          if (a) {
            e.splice(m--, 1);
            var s = l();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      r = r || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > r; m--) e[m] = e[m - 1];
      e[m] = [o, l, r];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, l) {
      if ((1 & l && (e = this(e)), 8 & l)) return e;
      if ('object' == typeof e && e) {
        if (4 & l && e.__esModule) return e;
        if (16 & l && 'function' == typeof e.then) return e;
      }
      var r = Object.create(null);
      n.r(r);
      var i = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & l && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (i[t] = () => e[t]));
      return (i.default = () => e), n.d(r, i), r;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 6749),
    (() => {
      var e = { 6749: 0, 5375: 0, 2631: 0, 6565: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var l,
            r,
            [i, a, c] = o,
            s = 0;
          if (i.some(t => 0 !== e[t])) {
            for (l in a) n.o(a, l) && (n.m[l] = a[l]);
            if (c) var m = c(n);
          }
          for (t && t(o); s < i.length; s++) (r = i[s]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return n.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var i = n.O(void 0, [94], () => n(7746));
  (i = n.O(i)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-gallery'] = i);
})();
