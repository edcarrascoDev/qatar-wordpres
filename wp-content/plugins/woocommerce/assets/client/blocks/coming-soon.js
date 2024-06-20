(() => {
  'use strict';
  var n = {};
  (n => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(n, '__esModule', { value: !0 });
  })(n);
  const e = window.wp.i18n,
    o = window.wp.blocks,
    t = window.React,
    r = window.wp.blockEditor,
    l = window.wp.components,
    i = (n = '#bea0f2') =>
      `\n    /* Reset */\n    h1, p, a {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        vertical-align: baseline;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n    }\n    body,\n    body.custom-background {\n        margin: 0;\n        background-color: ${n};\n        font-family: 'Inter', sans-serif;\n        min-width: 320px;\n        --wp--preset--color--contrast: #111111;\n        --wp--style--global--wide-size: 1280px;\n    }\n    body .is-layout-constrained > .alignwide {\n        margin: 0 auto;\n    }\n    .wp-container-core-group-is-layout-4.wp-container-core-group-is-layout-4 {\n        justify-content: space-between;\n    }\n    .is-layout-flex {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        margin: 0;\n    }\n    .wp-block-site-title p {\n        line-height: normal;\n    }\n    .wp-block-site-title a {\n        font-weight: 600;\n        font-size: 20px;\n        font-style: normal;\n        line-height: normal;\n        letter-spacing: -0.4px;\n        color: var(--wp--preset--color--contrast);\n        text-decoration: none;\n    }\n    .wp-block-social-links {\n        gap: 0.5em 18px;\n    }\n    .woocommerce-coming-soon-social-login {\n        gap: 48px;\n    }\n    .wp-block-loginout {\n        background-color: #000000;\n        border-radius: 6px;\n        display: flex;\n        height: 40px;\n        width: 74px;\n        justify-content: center;\n        align-items: center;\n        gap: 10px;\n        box-sizing: border-box;\n    }\n    .wp-block-loginout a {\n        color: #ffffff;\n        text-decoration: none;\n        line-height: 17px;\n        font-size: 14px;\n        font-weight: 500;\n    }\n    .wp-block-spacer {\n        margin: 0;\n    }\n    .woocommerce-coming-soon-banner-container {\n        padding-inline: min(5.5rem, 8vw);\n        margin: 0;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n\t@media (max-width: 660px) {\n\t\t.woocommerce-coming-soon-banner-container {\n\t\t\tpadding-inline: 0;\n\t\t}\n\t}\n    .woocommerce-coming-soon-banner-container > .wp-block-group__inner-container {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n    .woocommerce-coming-soon-powered-by-woo {\n        width: 100%;\n        --wp--preset--spacing--30: 0;\n        --wp--preset--spacing--10: 19px;\n    }\n    .woocommerce-coming-soon-powered-by-woo p {\n        font-style: normal;\n        font-weight: 400;\n        line-height: 160%; /* 19.2px */\n        letter-spacing: -0.12px;\n        color: #3C434A;\n        font-size: 12px;\n        font-family: Inter;\n    }\n    .woocommerce-coming-soon-powered-by-woo a {\n        font-family: Inter;\n    }\n    body .is-layout-constrained > .woocommerce-coming-soon-banner.alignwide {\n        max-width: 820px;\n    }\n    .coming-soon-is-vertically-aligned-center {\n        width: 100%;\n        align-items: stretch;\n    }\n    .coming-soon-cover .wp-block-cover__background {\n        background-color: ${n} !important;\n    }\n    .woocommerce-coming-soon-header {\n        height: 40px;\n    }\n    .woocommerce-coming-soon-banner {\n        font-size: clamp(27px, 1.74rem + ((1vw - 3px) * 2), 48px);\n        font-weight: 400;\n        line-height: 58px;\n        font-family: 'Cardo', serif;\n        letter-spacing: normal;\n        text-align: center;\n        font-style: normal;\n        max-width: 820px;\n        color: var(--wp--preset--color--contrast);\n        margin: 0 auto;\n        text-wrap: balance;\n    }`,
    c = JSON.parse(
      '{"name":"woocommerce/coming-soon","category":"woocommerce","title":"Coming Soon","attributes":{"color":{"type":"string"},"storeOnly":{"type":"boolean","default":false}},"supports":{"color":{"background":false,"text":true}}}',
    );
  (0, o.registerBlockType)(c, {
    title: (0, e.__)('Coming Soon', 'woocommerce'),
    edit: function({ attributes: n, setAttributes: o }) {
      const { color: c, storeOnly: a } = n,
        s = { ...(0, r.useBlockProps)() };
      return a
        ? (0, t.createElement)(
            t.Fragment,
            null,
            (0, t.createElement)('div', { ...s }, (0, t.createElement)(r.InnerBlocks, null)),
            (0, t.createElement)('style', null, '.woocommerce-breadcrumb {display: none;}'),
          )
        : (0, t.createElement)(
            t.Fragment,
            null,
            (0, t.createElement)(
              r.InspectorControls,
              null,
              (0, t.createElement)(
                l.PanelBody,
                { title: (0, e.__)('Settings', 'woocommerce') },
                (0, t.createElement)(l.ColorPicker, {
                  color: c,
                  onChange: n => o({ color: n }),
                  enableAlpha: !0,
                  defaultValue: '#bea0f2',
                }),
              ),
            ),
            (0, t.createElement)('div', { ...s }, (0, t.createElement)(r.InnerBlocks, null)),
            (0, t.createElement)('style', null, i(c)),
          );
    },
    save: function({ attributes: n }) {
      const { color: e, storeOnly: o } = n,
        l = { ...r.useBlockProps.save() };
      return o
        ? (0, t.createElement)(
            'div',
            { ...l },
            (0, t.createElement)(r.InnerBlocks.Content, null),
            (0, t.createElement)('style', null, '.woocommerce-breadcrumb {display: none;}'),
          )
        : (0, t.createElement)(
            'div',
            { ...l },
            (0, t.createElement)(r.InnerBlocks.Content, null),
            (0, t.createElement)('style', null, i(e)),
          );
    },
    apiVersion: 2,
  }),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['coming-soon'] = n);
})();
