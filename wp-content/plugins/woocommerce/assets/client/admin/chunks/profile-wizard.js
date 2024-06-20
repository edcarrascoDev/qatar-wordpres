'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [7708],
  {
    73224: (e, t, s) => {
      s.d(t, { Z: () => n });
      var o = s(69307),
        r = s(70444);
      const n = (0, o.createElement)(
        r.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, o.createElement)(r.Path, { d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z' }),
      );
    },
    86241: (e, t, s) => {
      s.d(t, { Z: () => n });
      var o = s(69307),
        r = s(70444);
      const n = (0, o.createElement)(
        r.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, o.createElement)(r.Path, { d: 'M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z' }),
      );
    },
    84560: (e, t, s) => {
      s.d(t, { Z: () => n });
      var o = s(69307),
        r = s(70444);
      const n = (0, o.createElement)(
        r.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, o.createElement)(r.Path, {
          d:
            'M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z',
        }),
      );
    },
    99843: (e, t, s) => {
      s.r(t), s.d(t, { default: () => ge });
      var o = s(69307),
        r = s(65736),
        n = s(92694),
        i = s(94333),
        a = s(92819),
        l = s(9818),
        c = s(10431),
        m = s(67221),
        u = s(14599),
        p = s(74617),
        d = s(12314),
        _ = s(55609),
        h = s(86020),
        g = s(87608),
        C = s.n(g),
        w = s(17844),
        y = s(70319);
      const f = [
          { key: 'shopify', label: (0, r.__)('Shopify', 'woocommerce') },
          { key: 'bigcommerce', label: (0, r.__)('BigCommerce', 'woocommerce') },
          { key: 'magento', label: (0, r.__)('Magento', 'woocommerce') },
          { key: 'wix', label: (0, r.__)('Wix', 'woocommerce') },
          { key: 'amazon', label: (0, r.__)('Amazon', 'woocommerce') },
          { key: 'ebay', label: (0, r.__)('eBay', 'woocommerce') },
          { key: 'etsy', label: (0, r.__)('Etsy', 'woocommerce') },
          { key: 'squarespace', label: (0, r.__)('Squarespace', 'woocommerce') },
          { key: 'wish', label: (0, r.__)('Wish', 'woocommerce') },
          { key: 'walmart', label: (0, r.__)('Walmart', 'woocommerce') },
          { key: 'other', label: (0, r.__)('Other', 'woocommerce') },
        ],
        E = [
          { key: '1', label: (0, r.__)("It's just me", 'woocommerce') },
          { key: '<10', label: (0, r.__)('< 10', 'woocommerce') },
          { key: '10-50', label: '10 - 50' },
          { key: '50-250', label: '50 - 250' },
          { key: '+250', label: (0, r.__)('+250', 'woocommerce') },
          { key: 'not specified', label: (0, r.__)("I'd rather not say", 'woocommerce') },
        ],
        b = [
          { key: 'no', label: (0, r.__)('No', 'woocommerce') },
          { key: 'other', label: (0, r.__)('Yes, on another platform', 'woocommerce') },
          {
            key: 'other-woocommerce',
            label: (0, r.__)('Yes, I own a different store powered by WooCommerce', 'woocommerce'),
          },
          {
            key: 'brick-mortar',
            label: (0, r.__)('Yes, in person at physical stores and/or events', 'woocommerce'),
          },
          {
            key: 'brick-mortar-other',
            label: (0, r.__)(
              'Yes, on another platform and in person at physical stores and/or events',
              'woocommerce',
            ),
          },
        ];
      var v = s(24082),
        S = s(81595);
      const k = (e, t) => (0, S.formatValue)(e, 'number', t),
        x = (e, t, s = !1, o = k) =>
          s
            ? (0, r.sprintf)(
                (0, r._x)('%1$s - %2$s', 'store product count or revenue range', 'woocommerce'),
                o(e, t),
                o(e, s),
              )
            : (0, r.sprintf)(
                (0, r._x)('%s+', 'store product count or revenue', 'woocommerce'),
                o(e, t),
              ),
        N = {
          US: 1,
          EU: 0.9,
          IN: 71.24,
          GB: 0.76,
          BR: 4.19,
          VN: 23172.5,
          ID: 14031,
          BD: 84.87,
          PK: 154.8,
          RU: 63.74,
          TR: 5.75,
          MX: 19.37,
          CA: 1.32,
        },
        T = (e, t) => {
          const s = (0, v.w)(t);
          if ('US' === s) return e;
          const o = N[s] || N.US,
            r = o.toString().split('.')[0].length,
            n = Math.pow(10, 2 + r);
          return Math.round((e * o) / n) * n;
        },
        P = (e, t, s) => [
          {
            key: 'none',
            label: (0, r.sprintf)((0, r.__)("%s (I'm just getting started)", 'woocommerce'), s(0)),
          },
          {
            key: 'up-to-2500',
            label: (0, r.sprintf)((0, r.__)('Up to %s', 'woocommerce'), s(T(2500, t))),
          },
          { key: '2500-10000', label: x(e, T(2500, t), T(1e4, t), (e, t) => s(t)) },
          { key: '10000-50000', label: x(e, T(1e4, t), T(5e4, t), (e, t) => s(t)) },
          { key: '50000-250000', label: x(e, T(5e4, t), T(25e4, t), (e, t) => s(t)) },
          {
            key: 'more-than-250000',
            label: (0, r.sprintf)((0, r.__)('More than %s', 'woocommerce'), s(T(25e4, t))),
          },
          { key: 'rather-not-say', label: (0, r.__)("I'd rather not say", 'woocommerce') },
        ];
      var I = s(14812),
        V = s(23374),
        O = s(86241),
        F = s(73224),
        A = s(76357);
      const M = () =>
        (0, o.createElement)(
          'svg',
          {
            width: '200',
            height: '148',
            viewBox: '0 0 200 148',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          (0, o.createElement)(
            'g',
            { clipPath: 'url(#clip0)' },
            (0, o.createElement)('path', {
              d:
                'M197.563 2.53875e-09H62.909C62.3961 0.000450584 61.9043 0.205742 61.5416 0.570805C61.179 0.935868 60.975 1.43087 60.9746 1.94714V50.9404H93.5623C94.4445 50.9415 95.2902 51.2947 95.9141 51.9226C96.5379 52.5505 96.8888 53.4019 96.8899 54.2899V95.7402H197.563C197.843 95.7402 198.119 95.6791 198.373 95.5612C198.627 95.4432 198.853 95.2712 199.034 95.0569C199.05 95.0402 199.064 95.0222 199.076 95.0033C199.192 94.8612 199.285 94.7024 199.354 94.5322C199.451 94.2981 199.501 94.0468 199.5 93.7931V1.94714C199.499 1.43051 199.295 0.935241 198.932 0.57014C198.569 0.20504 198.077 -2.63458e-05 197.563 2.53875e-09Z',
              fill: '#F2F2F2',
            }),
            (0, o.createElement)('path', {
              d: 'M199.222 7.80469H61.25V8.36132H199.222V7.80469Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M65.95 5.84371C66.8662 5.84371 67.609 5.09607 67.609 4.17381C67.609 3.25155 66.8662 2.50391 65.95 2.50391C65.0338 2.50391 64.291 3.25155 64.291 4.17381C64.291 5.09607 65.0338 5.84371 65.95 5.84371Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M70.72 5.84371C71.6363 5.84371 72.379 5.09607 72.379 4.17381C72.379 3.25155 71.6363 2.50391 70.72 2.50391C69.8038 2.50391 69.061 3.25155 69.061 4.17381C69.061 5.09607 69.8038 5.84371 70.72 5.84371Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M75.4896 5.84371C76.4058 5.84371 77.1486 5.09607 77.1486 4.17381C77.1486 3.25155 76.4058 2.50391 75.4896 2.50391C74.5733 2.50391 73.8306 3.25155 73.8306 4.17381C73.8306 5.09607 74.5733 5.84371 75.4896 5.84371Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M164.842 19.957H95.6295C94.8646 19.957 94.1311 20.2629 93.5903 20.8073C93.0494 21.3516 92.7456 22.09 92.7456 22.8599C92.7456 23.6298 93.0494 24.3681 93.5903 24.9125C94.1311 25.4569 94.8646 25.7627 95.6295 25.7627H164.842C165.607 25.7627 166.341 25.4569 166.882 24.9125C167.422 24.3681 167.726 23.6298 167.726 22.8599C167.726 22.09 167.422 21.3516 166.882 20.8073C166.341 20.2629 165.607 19.957 164.842 19.957ZM164.842 25.3161H95.6295C94.9823 25.3161 94.3616 25.0573 93.904 24.5967C93.4464 24.1361 93.1893 23.5113 93.1893 22.8599C93.1893 22.2084 93.4464 21.5837 93.904 21.123C94.3616 20.6624 94.9823 20.4036 95.6295 20.4036H164.842C165.489 20.4036 166.11 20.6624 166.568 21.123C167.025 21.5837 167.283 22.2084 167.283 22.8599C167.283 23.5113 167.025 24.1361 166.568 24.5967C166.11 25.0573 165.489 25.3161 164.842 25.3161Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M186.022 43.0859H116.809C116.044 43.0859 115.31 43.3918 114.769 43.9362C114.229 44.4806 113.925 45.2189 113.925 45.9888C113.925 46.7587 114.229 47.497 114.769 48.0414C115.31 48.5858 116.044 48.8916 116.809 48.8916H186.022C186.786 48.8916 187.52 48.5858 188.061 48.0414C188.602 47.497 188.905 46.7587 188.905 45.9888C188.905 45.2189 188.602 44.4806 188.061 43.9362C187.52 43.3918 186.786 43.0859 186.022 43.0859Z',
              fill: 'white',
            }),
            (0, o.createElement)('path', {
              d:
                'M186.022 53.8047H116.809C116.044 53.8047 115.31 54.1105 114.769 54.6549C114.229 55.1993 113.925 55.9376 113.925 56.7075C113.925 57.4774 114.229 58.2158 114.769 58.7601C115.31 59.3045 116.044 59.6104 116.809 59.6104H186.022C186.786 59.6104 187.52 59.3045 188.061 58.7601C188.602 58.2158 188.905 57.4774 188.905 56.7075C188.905 55.9376 188.602 55.1993 188.061 54.6549C187.52 54.1105 186.786 53.8047 186.022 53.8047Z',
              fill: 'white',
            }),
            (0, o.createElement)('path', {
              d:
                'M186.022 64.5195H116.809C116.044 64.5195 115.31 64.8254 114.769 65.3698C114.229 65.9141 113.925 66.6525 113.925 67.4224C113.925 68.1923 114.229 68.9306 114.769 69.475C115.31 70.0194 116.044 70.3252 116.809 70.3252H186.022C186.786 70.3252 187.52 70.0194 188.061 69.475C188.602 68.9306 188.905 68.1923 188.905 67.4224C188.905 66.6525 188.602 65.9141 188.061 65.3698C187.52 64.8254 186.786 64.5195 186.022 64.5195Z',
              fill: 'white',
            }),
            (0, o.createElement)('path', {
              d:
                'M105.623 38.2852H74.1183C73.4425 38.286 72.7947 38.5565 72.3168 39.0375C71.839 39.5185 71.5702 40.1706 71.5693 40.8508V50.9416H72.013V40.8508C72.0139 40.2891 72.2359 39.7506 72.6306 39.3533C73.0252 38.9561 73.5602 38.7326 74.1183 38.7317H105.623C106.182 38.7322 106.717 38.9556 107.112 39.3529C107.506 39.7502 107.728 40.289 107.729 40.8508V72.5633C107.728 73.1251 107.506 73.6638 107.112 74.0611C106.717 74.4585 106.182 74.6819 105.623 74.6824H96.8897V75.1289H105.623C106.299 75.1285 106.947 74.858 107.425 74.377C107.903 73.8959 108.172 73.2436 108.172 72.5633V40.8508C108.172 40.1705 107.903 39.5182 107.425 39.0371C106.947 38.556 106.299 38.2856 105.623 38.2852Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M23.9309 70.9116C23.8195 70.9162 19.0705 70.5847 18.9492 70.5806L19.3758 66.294L22.0808 66.212L27.2495 56.5756C26.5327 55.1996 27.4148 53.3739 28.9355 53.0925C32 52.3914 33.0526 57.2443 29.9789 57.8901L25.7036 69.6652C25.5695 70.03 25.3278 70.3449 25.011 70.5676C24.6942 70.7904 24.3174 70.9104 23.9309 70.9116Z',
              fill: '#FFB8B8',
            }),
            (0, o.createElement)('path', {
              d:
                'M11.4107 73.118C6.89154 73.1291 6.49482 66.2544 11.024 65.7699C23.0006 65.0415 21.485 62.0137 22.3945 70.9448C22.4224 71.2097 22.3448 71.475 22.1787 71.6824C22.0126 71.8898 21.7715 72.0223 21.5084 72.051L11.803 73.0968C11.6727 73.1109 11.5417 73.1179 11.4107 73.118Z',
              className: 'fill-theme-color',
            }),
            (0, o.createElement)('path', {
              d:
                'M10.3793 51.3852C16.605 54.9512 11.494 64.3601 5.15222 61.0097C-1.0733 57.4438 4.03771 48.0349 10.3793 51.3852Z',
              fill: '#FFB8B8',
            }),
            (0, o.createElement)('path', {
              d: 'M16.0395 132.376L18.759 132.376L20.053 121.816L16.0391 121.817L16.0395 132.376Z',
              fill: '#FFB8B8',
            }),
            (0, o.createElement)('path', {
              d:
                'M15.4567 134.915L24.0042 134.915C23.9716 130.476 18.2546 131.755 15.4565 131.591L15.4567 134.915Z',
              fill: '#2F2E41',
            }),
            (0, o.createElement)('path', {
              d:
                'M4.28218 132.376L7.00167 132.376L8.29564 121.816L4.28174 121.817L4.28218 132.376Z',
              fill: '#FFB8B8',
            }),
            (0, o.createElement)('path', {
              d:
                'M3.69937 134.915L12.2469 134.915C12.2142 130.476 6.49728 131.755 3.69922 131.591L3.69937 134.915Z',
              fill: '#2F2E41',
            }),
            (0, o.createElement)('path', {
              d:
                'M7.37266 128.688C6.71536 128.507 3.14362 129.056 2.72209 128.335C1.24999 113.483 1.57722 98.9486 4.845 90.9619L16.0806 90.2695C18.5931 94.8863 24.3684 125.522 20.8847 127.385L16.4048 127.546C16.1493 127.554 15.8988 127.474 15.6952 127.318C15.4916 127.163 15.3475 126.941 15.2869 126.691L11.539 105.229C10.6057 103.916 8.77111 127.832 8.46815 127.742C8.42864 128.006 8.29626 128.247 8.09515 128.42C7.89404 128.594 7.63762 128.689 7.37266 128.688Z',
              fill: '#2F2E41',
            }),
            (0, o.createElement)('path', {
              d:
                'M4.48843 92.8373C-1.18427 86.8634 2.43414 70.8475 2.25101 71.1881C2.26655 70.7958 3.55141 64.7536 6.87506 63.762C9.51196 62.886 12.4305 65.5063 12.7906 68.1566L16.7406 91.6368C16.7611 91.7646 16.7514 91.8955 16.7123 92.0188C16.6733 92.1422 16.6059 92.2546 16.5158 92.3469C16.71 92.9556 4.76613 92.7153 4.48843 92.8373Z',
              className: 'fill-theme-color',
            }),
            (0, o.createElement)('path', {
              d:
                'M6.32941 55.5845C6.82759 55.2675 7.07312 54.7238 7.36309 54.2285C8.89053 53.3522 10.6464 55.472 12.262 54.6809C16.8302 50.2665 12.1346 48.9642 7.92721 48.7314C6.9333 48.6081 6.08781 48.963 5.33637 49.5492C-3.06805 48.9031 0.962591 60.1519 6.26679 61.6376C7.2033 62.0505 7.90582 61.2148 7.07994 60.4551C5.93728 59.2493 4.52181 56.8221 6.32941 55.5845Z',
              fill: '#2F2E41',
            }),
            (0, o.createElement)('path', {
              d:
                'M93.5621 50.4922H32.779C31.7793 50.4936 30.8209 50.894 30.1139 51.6056C29.407 52.3172 29.0092 53.2819 29.0078 54.2882V131.548C29.0092 132.555 29.407 133.52 30.1139 134.231C30.8209 134.943 31.7793 135.343 32.779 135.345H93.5621C94.5619 135.343 95.5202 134.943 96.2272 134.231C96.9341 133.52 97.3319 132.555 97.3333 131.548V54.2882C97.3319 53.2819 96.9341 52.3172 96.2272 51.6056C95.5202 50.894 94.5619 50.4936 93.5621 50.4922ZM96.8896 131.548C96.8886 132.436 96.5376 133.288 95.9138 133.916C95.29 134.544 94.4443 134.897 93.5621 134.898H32.779C31.8968 134.897 31.0511 134.544 30.4273 133.916C29.8035 133.288 29.4526 132.436 29.4515 131.548V54.2882C29.4526 53.4002 29.8035 52.5489 30.4273 51.921C31.0511 51.2931 31.8968 50.9399 32.779 50.9388H93.5621C94.4443 50.9399 95.29 51.2931 95.9138 51.921C96.5376 52.5489 96.8886 53.4002 96.8896 54.2882V131.548Z',
              fill: '#3F3D56',
            }),
            (0, o.createElement)('path', {
              d:
                'M15.6527 83.0043C13.6494 83.2327 12.7698 78.5402 12.0039 77.3445L15.9936 75.7852L17.2918 78.1751L28.168 78.4472C28.2326 78.3591 28.3032 78.2755 28.3793 78.1971C30.5362 75.9238 34.0488 79.33 31.9 81.5984C31.663 81.8519 31.3752 82.0521 31.0557 82.1855C30.7362 82.319 30.3923 82.3828 30.0465 82.3727C29.7007 82.3627 29.361 82.2789 29.0497 82.1271C28.7384 81.9753 28.4626 81.7588 28.2405 81.4918C27.9719 81.5111 15.9153 83.0114 15.6527 83.0043Z',
              fill: '#FFB8B8',
            }),
            (0, o.createElement)('path', {
              d:
                'M12.6985 80.7664C12.0314 81.4133 6.91061 72.3318 6.5365 72.0751C3.94893 68.0267 10.0405 64.0298 12.6727 68.0562L17.9961 76.2911C18.1402 76.5145 18.1904 76.7864 18.1356 77.047C18.0808 77.3076 17.9255 77.5357 17.7039 77.6812C17.4613 77.7956 12.8697 81.0123 12.6985 80.7664Z',
              className: 'fill-theme-color',
            }),
            (0, o.createElement)('path', {
              d:
                'M81.583 103.974H44.7583C40.9966 103.955 40.9809 98.1877 44.7584 98.168H81.583C85.3421 98.1857 85.3624 103.954 81.583 103.974Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M81.583 114.692H44.7583C40.9966 114.674 40.9809 108.906 44.7584 108.887H81.583C85.3421 108.904 85.3624 114.673 81.583 114.692Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M81.583 125.411H44.7583C40.9966 125.393 40.9809 119.625 44.7584 119.605H81.583C85.3421 119.623 85.3624 125.391 81.583 125.411Z',
              fill: '#CCCCCC',
            }),
            (0, o.createElement)('path', {
              d:
                'M95.3371 57.6387C94.1963 57.6387 93.0812 57.2982 92.1327 56.6603C91.1842 56.0223 90.4449 55.1156 90.0084 54.0548C89.5718 52.9939 89.4576 51.8266 89.6802 50.7004C89.9027 49.5742 90.452 48.5397 91.2587 47.7278C92.0653 46.9159 93.093 46.3629 94.2118 46.1389C95.3307 45.9149 96.4904 46.0299 97.5443 46.4693C98.5982 46.9087 99.499 47.6528 100.133 48.6076C100.767 49.5623 101.105 50.6848 101.105 51.833C101.103 53.3723 100.495 54.8479 99.4136 55.9363C98.3323 57.0247 96.8662 57.637 95.3371 57.6387Z',
              className: 'fill-theme-color',
            }),
            (0, o.createElement)('path', {
              d:
                'M97.999 51.6121H95.5588V48.821C95.5588 48.7617 95.5355 48.7049 95.4939 48.6631C95.4523 48.6212 95.3958 48.5977 95.337 48.5977C95.2782 48.5977 95.2217 48.6212 95.1801 48.6631C95.1385 48.7049 95.1152 48.7617 95.1152 48.821V51.6121H92.675C92.6161 51.6121 92.5597 51.6357 92.5181 51.6775C92.4765 51.7194 92.4531 51.7762 92.4531 51.8354C92.4531 51.8947 92.4765 51.9515 92.5181 51.9933C92.5597 52.0352 92.6161 52.0587 92.675 52.0587H95.1152V54.8499C95.1152 54.9091 95.1385 54.9659 95.1801 55.0078C95.2217 55.0497 95.2782 55.0732 95.337 55.0732C95.3958 55.0732 95.4523 55.0497 95.4939 55.0078C95.5355 54.9659 95.5588 54.9091 95.5588 54.8499V52.0587H97.999C98.0579 52.0587 98.1143 52.0352 98.1559 51.9933C98.1975 51.9515 98.2209 51.8947 98.2209 51.8354C98.2209 51.7762 98.1975 51.7194 98.1559 51.6775C98.1143 51.6357 98.0579 51.6121 97.999 51.6121Z',
              fill: 'white',
            }),
            (0, o.createElement)('path', {
              d:
                'M80.9177 91.2002H45.424C44.4535 91.1991 43.5232 90.8105 42.837 90.1198C42.1508 89.4291 41.7648 88.4926 41.7637 87.5158V67.5086C41.7648 66.5318 42.1508 65.5953 42.837 64.9046C43.5232 64.2139 44.4535 63.8253 45.424 63.8242H80.9177C81.8882 63.8253 82.8185 64.2139 83.5047 64.9046C84.1909 65.5953 84.5769 66.5318 84.578 67.5086V87.5158C84.5769 88.4926 84.1909 89.4291 83.5047 90.1198C82.8185 90.8105 81.8882 91.1991 80.9177 91.2002Z',
              className: 'fill-theme-color',
            }),
          ),
          (0, o.createElement)(
            'defs',
            null,
            (0, o.createElement)(
              'clipPath',
              { id: 'clip0' },
              (0, o.createElement)('rect', {
                width: '199',
                height: '148',
                fill: 'white',
                transform: 'translate(0.5)',
              }),
            ),
          ),
        );
      var R = s(346);
      const L = ['obw/basics', 'obw/grow'],
        B = e =>
          (0, o.createElement)(
            'div',
            { className: 'woocommerce-admin__business-details__free-badge' },
            e.isFreeTrial
              ? (0, r.__)('Free Trial', 'woocommerce')
              : (0, r.__)('Free', 'woocommerce'),
          ),
        z = ({ onChange: e, description: t, isChecked: s, extensionKey: r }) => {
          const n = 'codistoconnect' === r;
          return (0, o.createElement)(
            'div',
            {
              className:
                'woocommerce-admin__business-details__selective-extensions-bundle__extension',
            },
            (0, o.createElement)(_.CheckboxControl, {
              id: 'woocommerce-business-extensions__checkbox',
              checked: s,
              onChange: e,
            }),
            (0, o.createElement)('p', {
              className:
                'woocommerce-admin__business-details__selective-extensions-bundle__description',
              dangerouslySetInnerHTML: (0, R.ZP)(t),
              onClick: e => {
                const t = e.target.closest('a');
                t &&
                  e.currentTarget.contains(t) &&
                  t.href.startsWith('https://woocommerce.com/products/') &&
                  (0, u.recordEvent)('storeprofiler_store_business_features_link_click', {
                    extension_name: t.href.split('https://woocommerce.com/products/')[1],
                  });
              },
            }),
            (0, o.createElement)(B, { isFreeTrial: n, extensionKey: r }),
          );
        },
        Z = ({
          isResolving: e,
          title: t,
          extensions: s,
          installExtensionOptions: r,
          onCheckboxChange: n,
        }) =>
          e
            ? (0, o.createElement)('div', null, (0, o.createElement)(_.Spinner, null))
            : 0 === s.length
            ? null
            : (0, o.createElement)(
                'div',
                null,
                (0, o.createElement)(
                  'div',
                  {
                    className:
                      'woocommerce-admin__business-details__selective-extensions-bundle__category',
                  },
                  t,
                ),
                s.map(({ description: e, key: t }) =>
                  (0, o.createElement)(z, {
                    key: t,
                    extensionKey: t,
                    description: e,
                    isChecked: r[t],
                    onChange: n(t),
                  }),
                ),
              ),
        D = ({
          isInstallingActivating: e,
          onSubmit: t,
          setInstallExtensionOptions: s,
          installableExtensions: n,
          installExtensionOptions: i = { install_extensions: !0 },
        }) => {
          const [a, l] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            e ||
              0 === n.length ||
              s(
                ((e, t) =>
                  e.reduce((e, t) => {
                    const s = t.plugins.reduce(
                      (t, s) => (e.hasOwnProperty(s.key) ? t : { ...t, [s.key]: !0 }),
                      {},
                    );
                    return { ...e, ...s };
                  }, t))(n, i),
              );
          }, [n]);
          const c = e => t => {
            const o = { ...i, [e]: t },
              r = 1 === Object.entries(o).filter(([, e]) => e).length && o.install_extensions;
            s(r ? { ...o, install_extensions: !1 } : { ...i, [e]: t, install_extensions: !0 });
          };
          return (0, o.createElement)(
            'div',
            { className: 'woocommerce-profile-wizard__business-details__free-features' },
            (0, o.createElement)(
              _.Card,
              null,
              (0, o.createElement)(
                'div',
                {
                  className:
                    'woocommerce-profile-wizard__business-details__free-features__illustration',
                },
                (0, o.createElement)(M, null),
              ),
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-admin__business-details__selective-extensions-bundle' },
                (0, o.createElement)(
                  'div',
                  {
                    className:
                      'woocommerce-admin__business-details__selective-extensions-bundle__extension',
                  },
                  (0, o.createElement)(_.CheckboxControl, {
                    checked: i.install_extensions,
                    onChange: e => {
                      var t, o;
                      s(
                        ((t = i),
                        (o = e),
                        Object.entries(t).reduce((e, [t]) => ({ ...e, [t]: o }), {})),
                      );
                    },
                  }),
                  (0, o.createElement)(
                    'p',
                    {
                      className:
                        'woocommerce-admin__business-details__selective-extensions-bundle__description',
                    },
                    (0, r.__)('Add recommended business features to my site', 'woocommerce'),
                  ),
                  (0, o.createElement)(
                    _.Button,
                    {
                      className:
                        'woocommerce-admin__business-details__selective-extensions-bundle__expand',
                      disabled: !n || 0 === n.length,
                      onClick: () => {
                        l(!a),
                          a ||
                            (0, u.recordEvent)(
                              'storeprofiler_store_business_features_accordion_click',
                            );
                      },
                    },
                    (0, o.createElement)(V.Z, { icon: a ? O.Z : F.Z }),
                  ),
                ),
                a &&
                  n.map(({ plugins: e, key: t, title: s }) =>
                    (0, o.createElement)(Z, {
                      key: t,
                      title: s,
                      extensions: e,
                      installExtensionOptions: i,
                      onCheckboxChange: c,
                    }),
                  ),
              ),
              (0, o.createElement)(
                'div',
                {
                  className: 'woocommerce-profile-wizard__business-details__free-features__action',
                },
                (0, o.createElement)(
                  _.Button,
                  {
                    onClick: () => {
                      t(i, n);
                    },
                    isBusy: e,
                    disabled: e,
                    isPrimary: !0,
                  },
                  (0, r.__)('Continue', 'woocommerce'),
                ),
              ),
            ),
            ((e, t) => {
              const s = Object.keys(e).filter(t => e[t] && 'install_extensions' !== t);
              if (0 === s.length) return null;
              const n = s
                .reduce((e, t) => {
                  const s = m.pluginNames[t];
                  return e.includes(s) ? e : [...e, s];
                }, [])
                .join(', ');
              if (t)
                return (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__footnote' },
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'caption', as: 'p', size: '12', lineHeight: '16px' },
                    (0, r.sprintf)(
                      (0, r._n)(
                        'Installing the following plugin: %s',
                        'Installing the following plugins: %s',
                        s.length,
                        'woocommerce',
                      ),
                      n,
                    ),
                  ),
                );
              const i = (0, r.__)(
                  'User accounts are required to use these features.',
                  'woocommerce',
                ),
                a = s.filter(e => 'jetpack' === e || e.includes('woocommerce-services')),
                l =
                  a.includes('jetpack') &&
                  (a.includes('woocommerce-services:shipping') ||
                    a.includes('woocommerce-services:tax'))
                    ? 'Jetpack and WooCommerce Shipping & Tax'
                    : m.pluginNames[a[0]],
                c = (0, r.sprintf)(
                  (0, r._n)(
                    'By installing %s plugin for free you agree to our {{link}}Terms of Service{{/link}}.',
                    'By installing %s plugins for free you agree to our {{link}}Terms of Service{{/link}}.',
                    a.length,
                    'woocommerce',
                  ),
                  l,
                );
              return (0, o.createElement)(
                'div',
                { className: 'woocommerce-profile-wizard__footnote' },
                (0, o.createElement)(
                  I.Text,
                  { variant: 'caption', as: 'p', size: '12', lineHeight: '16px' },
                  (0, r.sprintf)(
                    (0, r._n)(
                      'The following plugin will be installed for free: %1$s. %2$s',
                      'The following plugins will be installed for free: %1$s. %2$s',
                      s.length,
                      'woocommerce',
                    ),
                    n,
                    i,
                  ),
                ),
                a.length > 0 &&
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'caption', as: 'p', size: '12', lineHeight: '16px' },
                    (0, A.Z)({
                      mixedString: c,
                      components: {
                        link: (0, o.createElement)(h.Link, {
                          href: 'https://wordpress.com/tos/',
                          target: '_blank',
                          type: 'external',
                        }),
                      },
                    }),
                  ),
              );
            })(i, e),
          );
        };
      var H = s(53736);
      const U = 'business-details',
        q = 'business-features',
        G = e => ['other', 'brick-mortar', 'brick-mortar-other', 'other-woocommerce'].includes(e),
        j = e =>
          `https://woocommerce.com/migrate/?utm_source=nux&utm_medium=product&utm_campaign=migrate&utm_content=${e}`,
        W = e => ['other', 'brick-mortar-other'].includes(e),
        $ = 'wc-admin-free-features-tab-values';
      class J extends o.Component {
        constructor(e) {
          super(),
            (this.state = {
              isPopoverVisible: !1,
              isValid: !1,
              currentTab: 'business-details',
              savedValues: e.initialValues,
            }),
            (this.onContinue = this.onContinue.bind(this)),
            (this.validate = this.validate.bind(this)),
            (this.persistValues = this.persistValues.bind(this)),
            this.persistProfileItems.bind(this),
            e.trackStepValueChanges(
              e.step.key,
              e.initialValues,
              this.state.savedValues,
              this.persistValues,
            ),
            e.invalidateResolutionForStoreSelector('getFreeExtensions');
        }
        async onContinue(e, t) {
          const { createNotice: s, goToNextStep: o, installAndActivatePlugins: n } = this.props,
            i = t.reduce(
              (e, t) => [...e, ...t.plugins.filter(e => e.is_activated).map(e => e.key)],
              [],
            ),
            a = ((e, t = []) =>
              Object.keys(e)
                .filter(s => e[s] && 'install_extensions' !== s && !t.includes(s))
                .map(H.V7)
                .filter((e, t, s) => s.indexOf(e) === t))(e, i),
            l = (e => {
              const t = {};
              for (let [s, o] of Object.entries(e)) {
                s = (0, H.V7)(s);
                const e = (0, H.br)(s);
                'install_extensions' === s || t[`install_${e}`] || (t[`install_${e}`] = o);
              }
              return t;
            })(e);
          (0, u.recordEvent)('storeprofiler_store_business_features_continue', {
            all_extensions_installed: Object.values(e).every(e => e),
            ...l,
          });
          const c = [this.persistProfileItems({ business_extensions: [...a, ...i] })];
          if (a.length) {
            const t = window.performance.now();
            c.push(
              n(a)
                .then(s => {
                  const o = window.performance.now() - t,
                    r = ((e, t) => {
                      const s = [],
                        o = {};
                      for (let [r] of Object.entries(e)) {
                        r = (0, H.V7)(r);
                        const e = (0, H.br)(r);
                        t &&
                          t.data &&
                          t.data.install_time &&
                          t.data.install_time[r] &&
                          (s.push(e), (o[`install_time_${e}`] = (0, H.Jm)(t.data.install_time[r])));
                      }
                      return (
                        (o.installed_extensions = s),
                        (o.activated_extensions =
                          t && t.data && t.data.activated ? t.data.activated : []),
                        o
                      );
                    })(e, s);
                  (0,
                  u.recordEvent)('storeprofiler_store_business_features_installed_and_activated', {
                    success: !0,
                    total_time: (0, H.Jm)(o),
                    ...r,
                  }),
                    (0, y.a)(s);
                })
                .catch(e => {
                  throw ((0,
                  u.recordEvent)('storeprofiler_store_business_features_installed_and_activated', {
                    success: !1,
                    failed_extensions: Object.keys(e.data || {}).map(e => (0, H.br)(e)),
                  }),
                  (0, y.a)(e),
                  new Error());
                }),
            );
          }
          Promise.all(c)
            .then(() => {
              o({ step: q });
            })
            .catch(() => {
              s(
                'error',
                (0, r.__)('There was a problem updating your business details', 'woocommerce'),
              );
            });
        }
        async persistValues() {
          await this.persistProfileItems();
          try {
            window.localStorage.setItem($, JSON.stringify(this.state.savedValues.freeFeaturesTab));
          } catch (e) {
            this.props.createNotice(
              'error',
              (0, r.__)('There was a problem saving free features state', 'woocommerce'),
            );
          }
        }
        async persistProfileItems(e = {}) {
          const { updateProfileItems: t, createNotice: s } = this.props,
            { businessDetailsTab: o = {} } = this.state.savedValues,
            {
              number_employees: n,
              other_platform: i,
              other_platform_name: a,
              product_count: l,
              revenue: c,
              selling_venues: m,
              setup_client: u,
            } = o,
            p = {
              number_employees: n,
              other_platform: i,
              other_platform_name: 'other' === i ? a : '',
              product_count: l,
              revenue: c,
              selling_venues: m,
              setup_client: u,
              ...e,
            };
          return t(Object.entries(p).reduce((e, [t, s]) => ('' !== s && (e[t] = s), e), {})).catch(
            () => {
              s(
                'error',
                (0, r.__)('There was a problem updating your business details', 'woocommerce'),
              );
            },
          );
        }
        validate(e) {
          const t = {};
          return (
            e.product_count.length ||
              (t.product_count = (0, r.__)('This field is required', 'woocommerce')),
            e.selling_venues.length ||
              (t.selling_venues = (0, r.__)('This field is required', 'woocommerce')),
            !e.other_platform.length &&
              W(e.selling_venues) &&
              (t.other_platform = (0, r.__)('This field is required', 'woocommerce')),
            !e.other_platform_name.trim().length &&
              'other' === e.other_platform &&
              W(e.selling_venues) &&
              (t.other_platform_name = (0, r.__)('This field is required', 'woocommerce')),
            !e.number_employees.length &&
              G(e.selling_venues) &&
              (t.number_employees = (0, r.__)('This field is required', 'woocommerce')),
            !e.revenue.length &&
              G(e.selling_venues) &&
              (t.revenue = (0, r.__)('This field is required', 'woocommerce')),
            0 === Object.keys(t).length && this.setState({ isValid: !0 }),
            t
          );
        }
        trackBusinessDetailsStep({
          number_employees: e,
          other_platform: t,
          other_platform_name: s,
          product_count: o,
          selling_venues: r,
          revenue: n,
          setup_client: i,
        }) {
          const { getCurrencyConfig: a } = this.context;
          (0, u.recordEvent)('storeprofiler_store_business_details_continue_variant', {
            number_employees: e,
            already_selling: r,
            currency: a().code,
            product_number: o,
            revenue: n,
            used_platform: t,
            used_platform_name: s,
            setup_client: i,
            wp_version: (0, p.getSetting)('wpVersion'),
          }),
            (0, u.recordEvent)('storeprofiler_step_complete', {
              step: U,
              wc_version: (0, p.getSetting)('wcVersion'),
            });
        }
        getSelectControlProps(e, t = '') {
          const { className: s, ...o } = e(t);
          return {
            ...o,
            className: C()(`woocommerce-profile-wizard__${t.replace(/\_/g, '-')}`, s),
          };
        }
        renderBusinessDetailsStep() {
          const {
              goToNextStep: e,
              isInstallingActivating: t,
              hasInstallActivateError: s,
            } = this.props,
            { formatAmount: n, getCurrencyConfig: i } = this.context,
            a =
              ((l = i()),
              [
                { key: '0', label: (0, r.__)("I don't have any products yet.", 'woocommerce') },
                { key: '1-10', label: x(l, 1, 10) },
                { key: '11-100', label: x(l, 11, 100) },
                { key: '101-1000', label: x(l, 101, 1e3) },
                { key: '1000+', label: x(l, 1e3) },
              ]);
          var l;
          return (0, o.createElement)(
            h.Form,
            {
              initialValues: this.state.savedValues.businessDetailsTab,
              onSubmit: t => {
                this.props.hasInstallableExtensions
                  ? this.setState({
                      savedValues: { ...this.state.savedValues, businessDetailsTab: t },
                      currentTab: q,
                    })
                  : e({ step: q }),
                  this.trackBusinessDetailsStep(t),
                  (0, u.recordEvent)('storeprofiler_step_view', {
                    step: q,
                    wc_version: (0, p.getSetting)('wcVersion'),
                  });
              },
              onChange: (e, t, s) => {
                const o = { ...this.state.savedValues, businessDetailsTab: t };
                this.setState({ savedValues: o, isValid: s }),
                  this.props.updateCurrentStepValues(this.props.step.key, o);
              },
              validate: this.validate,
            },
            ({ getInputProps: l, handleSubmit: c, values: m, isValidForm: u }) => {
              return (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__step-header' },
                  (0, o.createElement)(
                    _.__experimentalText,
                    { variant: 'title.small', as: 'h2', size: '20', lineHeight: '28px' },
                    (0, r.__)('Tell us about your business', 'woocommerce'),
                  ),
                  (0, o.createElement)(
                    _.__experimentalText,
                    { variant: 'body', as: 'p' },
                    (0, r.__)(
                      "We'd love to know if you are just getting started or you already have a business in place.",
                      'woocommerce',
                    ),
                  ),
                ),
                (0, o.createElement)(
                  _.Card,
                  null,
                  (0, o.createElement)(
                    _.CardBody,
                    null,
                    (0, o.createElement)(
                      h.SelectControl,
                      (0, d.Z)(
                        {
                          excludeSelectedOptions: !1,
                          label: (0, r.__)(
                            'How many products do you plan to display?',
                            'woocommerce',
                          ),
                          options: a,
                          required: !0,
                        },
                        this.getSelectControlProps(l, 'product_count'),
                      ),
                    ),
                    (0, o.createElement)(
                      h.SelectControl,
                      (0, d.Z)(
                        {
                          excludeSelectedOptions: !1,
                          label: (0, r.__)('Currently selling elsewhere?', 'woocommerce'),
                          options: b,
                          required: !0,
                        },
                        this.getSelectControlProps(l, 'selling_venues'),
                      ),
                    ),
                    ((p = m.selling_venues),
                    ['other-woocommerce', 'other', 'brick-mortar-other'].includes(p) &&
                      (0, o.createElement)(
                        _.Notice,
                        {
                          className: 'woocommerce-profile-wizard__wccom-migration-notice',
                          status: 'info',
                          isDismissible: !1,
                        },
                        (0, r.__)('Need help moving your store?', 'woocommerce'),
                        ' ',
                        (0, o.createElement)(
                          _.Button,
                          {
                            href: j(m.selling_venues),
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            variant: 'link',
                          },
                          (0, r.__)('Get free expert advice', 'woocommerce'),
                        ),
                      )),
                    G(m.selling_venues) &&
                      (0, o.createElement)(
                        h.SelectControl,
                        (0, d.Z)(
                          {
                            excludeSelectedOptions: !1,
                            label: (0, r.__)('How many employees do you have?', 'woocommerce'),
                            options: E,
                            required: !0,
                          },
                          this.getSelectControlProps(l, 'number_employees'),
                        ),
                      ),
                    G(m.selling_venues) &&
                      (0, o.createElement)(
                        h.SelectControl,
                        (0, d.Z)(
                          {
                            excludeSelectedOptions: !1,
                            label: (0, r.__)("What's your current annual revenue?", 'woocommerce'),
                            options: P(i(), this.props.settings.woocommerce_default_country, n),
                            required: !0,
                          },
                          this.getSelectControlProps(l, 'revenue'),
                        ),
                      ),
                    W(m.selling_venues) &&
                      (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(
                          'div',
                          { className: 'business-competitors' },
                          (0, o.createElement)(
                            h.SelectControl,
                            (0, d.Z)(
                              {
                                excludeSelectedOptions: !1,
                                label: (0, r.__)(
                                  'Which platform is the store using?',
                                  'woocommerce',
                                ),
                                options: f,
                                required: !0,
                              },
                              this.getSelectControlProps(l, 'other_platform'),
                            ),
                          ),
                          'other' === m.other_platform &&
                            (0, o.createElement)(
                              h.TextControl,
                              (0, d.Z)(
                                {
                                  label: (0, r.__)('What is the platform name?', 'woocommerce'),
                                  required: !0,
                                },
                                this.getSelectControlProps(l, 'other_platform_name'),
                              ),
                            ),
                        ),
                      ),
                  ),
                  (0, o.createElement)(
                    _.CardFooter,
                    { isBorderless: !0 },
                    (0, o.createElement)(
                      _.FlexItem,
                      null,
                      (0, o.createElement)(
                        'div',
                        { className: 'woocommerce-profile-wizard__client' },
                        (0, o.createElement)(
                          _.CheckboxControl,
                          (0, d.Z)(
                            {
                              label: (0, r.__)(
                                "I'm setting up a store for a client",
                                'woocommerce',
                              ),
                            },
                            l('setup_client'),
                          ),
                        ),
                      ),
                    ),
                  ),
                  (0, o.createElement)(
                    _.CardFooter,
                    { justify: 'center' },
                    (0, o.createElement)(
                      _.Button,
                      {
                        isPrimary: !0,
                        onClick: async () => {
                          await c(), this.persistProfileItems();
                        },
                        disabled: !u,
                        'aria-disabled': !u,
                        isBusy: t,
                      },
                      s ? (0, r.__)('Retry', 'woocommerce') : (0, r.__)('Continue', 'woocommerce'),
                    ),
                    s &&
                      (0, o.createElement)(
                        _.Button,
                        {
                          onClick: () => {
                            this.persistProfileItems(), e({ step: q });
                          },
                        },
                        (0, r.__)('Continue without installing', 'woocommerce'),
                      ),
                  ),
                ),
              );
              var p;
            },
          );
        }
        renderFreeFeaturesStep() {
          const { isInstallingActivating: e } = this.props,
            {
              savedValues: { freeFeaturesTab: t },
            } = this.state;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              'div',
              { className: 'woocommerce-profile-wizard__step-header' },
              (0, o.createElement)(
                _.__experimentalText,
                { variant: 'title.small', as: 'h2', size: '20', lineHeight: '28px' },
                (0, r.__)('Included business features', 'woocommerce'),
              ),
              (0, o.createElement)(
                _.__experimentalText,
                { variant: 'body', as: 'p' },
                (0, r.__)(
                  'We recommend enhancing your store with these free extensions',
                  'woocommerce',
                ),
              ),
              (0, o.createElement)(
                _.__experimentalText,
                { variant: 'body', as: 'p' },
                (0, r.__)(
                  'No commitment required - you can remove them at any time.',
                  'woocommerce',
                ),
              ),
            ),
            (0, o.createElement)(D, {
              isInstallingActivating: e,
              onSubmit: this.onContinue,
              installableExtensions: this.props.installableExtensions,
              installExtensionOptions: t.installExtensionOptions,
              setInstallExtensionOptions: e => {
                const s = {
                  ...this.state.savedValues,
                  freeFeaturesTab: { ...t, installExtensionOptions: e },
                };
                this.setState({ savedValues: s }),
                  this.state.savedValues.freeFeaturesTab.installExtensionOptions &&
                    this.props.updateCurrentStepValues(this.props.step.key, s);
              },
            }),
          );
        }
        render() {
          const e = [];
          return this.props.hasFinishedGetFreeExtensionsResolution
            ? (e.push({
                name: this.state.currentTab === U ? 'current-tab' : U,
                id: U,
                title: (0, r.__)('Business details', 'woocommerce'),
              }),
              this.props.hasInstallableExtensions &&
                e.push({
                  name: this.state.currentTab === q ? 'current-tab' : q,
                  id: q,
                  title: (0, r.__)('Free features', 'woocommerce'),
                  className: this.state.isValid ? '' : 'is-disabled',
                }),
              (0, o.createElement)(
                _.TabPanel,
                {
                  activeClass: 'is-active',
                  initialTabName: 'current-tab',
                  onSelect: e => {
                    this.state.currentTab !== e &&
                      'current-tab' !== e &&
                      (this.setState({
                        currentTab: e,
                        savedValues: this.state.savedValues || this.props.initialValues,
                      }),
                      (0, u.recordEvent)('storeprofiler_step_view', {
                        step: e,
                        wc_version: (0, p.getSetting)('wcVersion'),
                      }));
                  },
                  tabs: e,
                },
                e => (0, o.createElement)(o.Fragment, null, this.getTab(e.id)),
              ))
            : (0, o.createElement)(
                'div',
                { className: 'woocommerce-admin__business-details__spinner' },
                (0, o.createElement)(_.Spinner, null),
              );
        }
        getTab(e) {
          return e === U ? this.renderBusinessDetailsStep() : this.renderFreeFeaturesStep();
        }
      }
      J.contextType = w.CurrencyContext;
      const K = (0, i.compose)(
          (0, l.withSelect)(e => {
            const { getSettings: t, getSettingsError: s } = e(m.SETTINGS_STORE_NAME),
              {
                getProfileItems: o,
                getOnboardingError: r,
                getFreeExtensions: n,
                hasFinishedResolution: i,
              } = e(m.ONBOARDING_STORE_NAME),
              { getPluginsError: a, isPluginsRequesting: l } = e(m.PLUGINS_STORE_NAME),
              { general: c = {} } = t('general'),
              u = n(),
              p = o(),
              d = c.woocommerce_default_country ? c.woocommerce_default_country : null,
              _ = u
                ? (({ freeExtensionBundleByCategory: e, country: t, productTypes: s }) =>
                    e.filter(
                      e => (
                        window.wcAdminFeatures &&
                          window.wcAdminFeatures.subscriptions &&
                          'US' === (0, v.so)(t) &&
                          s.includes('subscriptions') &&
                          (e.plugins = e.plugins.filter(
                            e =>
                              'woocommerce-payments' !== e.key ||
                              ('woocommerce-payments' === e.key && !e.is_activated),
                          )),
                        L.includes(e.key)
                      ),
                    ))({
                    freeExtensionBundleByCategory: u,
                    country: d,
                    productTypes: p.product_types || [],
                  })
                : [],
              h = _.some(({ plugins: e }) => e.length > 0);
            return {
              hasInstallActivateError: a('installPlugins') || a('activatePlugins'),
              hasInstallableExtensions: h,
              hasFinishedGetFreeExtensionsResolution: i('getFreeExtensions'),
              installableExtensions: _,
              isError: Boolean(r('updateProfileItems')),
              isSettingsError: Boolean(s('general')),
              isInstallingActivating:
                l('installPlugins') || l('activatePlugins') || l('getJetpackConnectUrl'),
              profileItems: p,
              settings: c,
            };
          }),
          (0, l.withDispatch)(e => {
            const { updateProfileItems: t, invalidateResolutionForStoreSelector: s } = e(
                m.ONBOARDING_STORE_NAME,
              ),
              { installAndActivatePlugins: o } = e(m.PLUGINS_STORE_NAME),
              { createNotice: r } = e('core/notices');
            return {
              createNotice: r,
              installAndActivatePlugins: o,
              updateProfileItems: t,
              invalidateResolutionForStoreSelector: s,
            };
          }),
        )(J),
        Y = e => {
          const { profileItems: t, isLoading: s } = (0, l.useSelect)(e => ({
              isLoading:
                !e(m.ONBOARDING_STORE_NAME).hasFinishedResolution('getProfileItems') ||
                !e(m.SETTINGS_STORE_NAME).hasFinishedResolution('getSettings', ['general']),
              profileItems: e(m.ONBOARDING_STORE_NAME).getProfileItems(),
            })),
            r = (0, o.useMemo)(() => {
              try {
                const e = JSON.parse(window.localStorage.getItem($));
                if (e) return e;
              } catch (e) {}
              return { install_extensions: !0 };
            }, []);
          if (s)
            return (0, o.createElement)(
              'div',
              { className: 'woocommerce-admin__business-details__spinner' },
              (0, o.createElement)(_.Spinner, null),
            );
          const n = {
            businessDetailsTab: {
              number_employees: t.number_employees || '',
              other_platform: t.other_platform || '',
              other_platform_name: t.other_platform_name || '',
              product_count: t.product_count || '',
              selling_venues: t.selling_venues || '',
              revenue: t.revenue || '',
              setup_client: t.setup_client || !1,
            },
            freeFeaturesTab: r,
          };
          return (0, o.createElement)(K, (0, d.Z)({}, e, { initialValues: n }));
        };
      var Q = s(17062);
      const X = (0, Q.O3)('onboarding', {});
      class ee extends o.Component {
        constructor(e) {
          const t = (0, a.get)(e, 'profileItems', {});
          let s = Array.isArray(t.industry) ? [...t.industry] : [];
          const { locationSettings: o } = e;
          if ('US' !== (0, v.w)(o.woocommerce_default_country)) {
            const e = 'cbd-other-hemp-derived-products';
            s = s.filter(t => e !== t && e !== t.slug);
          }
          super(),
            (this.state = { error: null, selected: s, textInputListContent: {} }),
            (this.onContinue = this.onContinue.bind(this)),
            (this.onIndustryChange = this.onIndustryChange.bind(this)),
            (this.onDetailChange = this.onDetailChange.bind(this));
          const r = this.getSelectedSlugs();
          e.trackStepValueChanges(e.step.key, r, r, this.onContinue);
        }
        getSelectedSlugs() {
          return this.state.selected.map(e => e.slug);
        }
        componentDidMount() {
          (0, u.recordEvent)('onboarding_site_heuristics', {
            page_count: X.pageCount,
            post_count: X.postCount,
            is_block_theme: X.isBlockTheme,
          });
        }
        componentDidUpdate() {
          this.props.updateCurrentStepValues(this.props.step.key, this.getSelectedSlugs());
        }
        async onContinue() {
          if ((await this.validateField(), this.state.error)) return;
          const { createNotice: e, isError: t, updateProfileItems: s } = this.props,
            o = this.state.selected.map(e => e.slug),
            n = this.state.selected
              .map(e => e.detail)
              .filter(e => e)
              .join(',');
          return (
            (0, u.recordEvent)('storeprofiler_store_industry_continue', {
              store_industry: o,
              industries_with_detail: n,
            }),
            await s({ industry: this.state.selected }),
            !t ||
              (e('error', (0, r.__)('There was a problem updating your industries', 'woocommerce')),
              Promise.reject())
          );
        }
        async validateField() {
          const e = this.state.selected.length
            ? null
            : (0, r.__)('Please select at least one industry', 'woocommerce');
          this.setState({ error: e });
        }
        onIndustryChange(e) {
          this.setState(
            t => {
              const s = t.selected,
                o = (0, a.find)(s, { slug: e });
              if (o) {
                const s = t.textInputListContent;
                return (
                  (s[e] = o.detail),
                  {
                    selected: (0, a.filter)(t.selected, t => t.slug !== e) || [],
                    textInputListContent: s,
                  }
                );
              }
              return s.push({ slug: e, detail: t.textInputListContent[e] }), { selected: s };
            },
            () => this.validateField(),
          );
        }
        onDetailChange(e, t) {
          this.setState(s => {
            const o = s.selected,
              r = s.textInputListContent;
            return (
              (o[(0, a.findIndex)(o, { slug: t })].detail = e),
              (r[t] = e),
              { selected: o, textInputListContent: r }
            );
          });
        }
        renderIndustryLabel(e, t, s) {
          const { textInputListContent: r } = this.state;
          return (0, o.createElement)(
            o.Fragment,
            null,
            t.label,
            t.use_description &&
              s &&
              (0, o.createElement)(h.TextControl, {
                key: `text-control-${e}`,
                label: t.description_label,
                value: s.detail || r[e] || '',
                onChange: t => this.onDetailChange(t, e),
                className: 'woocommerce-profile-wizard__text',
              }),
          );
        }
        render() {
          const { industries: e } = X,
            { error: t, selected: s } = this.state,
            { locationSettings: n, isProfileItemsRequesting: i } = this.props,
            l = (0, v.w)(n.woocommerce_default_country),
            c = Object.keys(e),
            m = 'US' === l ? c : c.filter(e => 'cbd-other-hemp-derived-products' !== e);
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              'div',
              { className: 'woocommerce-profile-wizard__step-header' },
              (0, o.createElement)(
                I.Text,
                { variant: 'title.small', as: 'h2', size: '20', lineHeight: '28px' },
                (0, r.__)('In which industry does the store operate?', 'woocommerce'),
              ),
              (0, o.createElement)(
                I.Text,
                { variant: 'body', as: 'p' },
                (0, r.__)('Choose any that apply', 'woocommerce'),
              ),
            ),
            (0, o.createElement)(
              _.Card,
              null,
              (0, o.createElement)(
                _.CardBody,
                { size: null },
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__checkbox-group' },
                  m.map(t => {
                    const r = (0, a.find)(s, { slug: t });
                    return (0, o.createElement)(_.CheckboxControl, {
                      key: `checkbox-control-${t}`,
                      label: this.renderIndustryLabel(t, e[t], r),
                      onChange: () => this.onIndustryChange(t),
                      checked: r || !1,
                      className: 'woocommerce-profile-wizard__checkbox',
                    });
                  }),
                  t &&
                    (0, o.createElement)(
                      'span',
                      { className: 'woocommerce-profile-wizard__error' },
                      t,
                    ),
                ),
              ),
              (0, o.createElement)(
                _.CardFooter,
                { isBorderless: !0, justify: 'center' },
                (0, o.createElement)(
                  _.Button,
                  {
                    isPrimary: !0,
                    onClick: () => {
                      this.onContinue().then(this.props.goToNextStep);
                    },
                    isBusy: i,
                    disabled: !s.length || i,
                    'aria-disabled': !s.length || i,
                  },
                  (0, r.__)('Continue', 'woocommerce'),
                ),
              ),
            ),
          );
        }
      }
      const te = (0, i.compose)(
        (0, l.withSelect)(e => {
          const {
              getProfileItems: t,
              getOnboardingError: s,
              isOnboardingRequesting: o,
              hasFinishedResolution: r,
            } = e(m.ONBOARDING_STORE_NAME),
            { getSettings: n, hasFinishedResolution: i } = e(m.SETTINGS_STORE_NAME),
            { general: a = {} } = n('general');
          return {
            isError: Boolean(s('updateProfileItems')),
            profileItems: t(),
            locationSettings: a,
            isProfileItemsRequesting: o('updateProfileItems'),
            isLoading: !r('getProfileItems', []) || !i('getSettings', ['general']),
          };
        }),
        (0, l.withDispatch)(e => {
          const { updateProfileItems: t } = e(m.ONBOARDING_STORE_NAME),
            { createNotice: s } = e('core/notices');
          return { createNotice: s, updateProfileItems: t };
        }),
      )(e =>
        e.isLoading
          ? (0, o.createElement)(
              'div',
              { className: 'woocommerce-admin__industry__spinner', style: { textAlign: 'center' } },
              (0, o.createElement)(_.Spinner, null),
            )
          : (0, o.createElement)(ee, e),
      );
      var se = s(84560);
      function oe({
        annualPrice: e,
        description: t,
        isMonthlyPricing: s,
        label: n,
        moreUrl: i,
        slug: a,
      }) {
        const [l, c] = (0, o.useState)('');
        if (!e) return n;
        const m = (0, r.__)(
          "This product type requires a paid extension.\nWe'll add this to a cart so that\nyou can purchase and install it later.",
          'woocommerce',
        );
        return (0, o.createElement)(
          o.Fragment,
          null,
          (0, o.createElement)(
            'span',
            { className: 'woocommerce-product-wizard__product-types-label' },
            n,
          ),
          (0, o.createElement)(
            _.Button,
            {
              isTertiary: !0,
              label: (0, r.__)(
                'Learn more about recommended free business features',
                'woocommerce',
              ),
              onClick: () => {
                c(!0);
              },
            },
            (0, o.createElement)(V.Z, { icon: se.Z }),
          ),
          l &&
            (0, o.createElement)(
              _.Popover,
              { focusOnMount: 'container', position: 'top center', onClose: () => c(!1) },
              (0, A.Z)({
                mixedString: t + (i ? ' {{moreLink/}}' : ''),
                components: {
                  moreLink: i
                    ? (0, o.createElement)(
                        h.Link,
                        {
                          href: i,
                          target: '_blank',
                          type: 'external',
                          onClick: () =>
                            (0, u.recordEvent)('storeprofiler_store_product_type_learn_more', {
                              product_type: a,
                            }),
                        },
                        (0, r.__)('Learn more', 'woocommerce'),
                      )
                    : '',
                },
              }),
            ),
          (0, o.createElement)(
            _.Tooltip,
            { text: m, position: 'bottom center' },
            (0, o.createElement)(
              h.Pill,
              null,
              (0, o.createElement)('span', { className: 'screen-reader-text' }, m),
              s
                ? (0, r.sprintf)((0, r.__)('$%f per month', 'woocommerce'), (e / 12).toFixed(2))
                : (0, r.sprintf)((0, r.__)('$%f per year', 'woocommerce'), e),
            ),
          ),
        );
      }
      class re extends o.Component {
        constructor() {
          super(),
            (this.state = {
              error: null,
              isMonthlyPricing: !0,
              selected: [],
              isWCPayInstalled: null,
            }),
            (this.onContinue = this.onContinue.bind(this)),
            (this.onChange = this.onChange.bind(this));
        }
        componentDidMount() {
          const { installedPlugins: e, invalidateResolution: t } = this.props,
            { isWCPayInstalled: s } = this.state;
          t('getProductTypes', []),
            null === s &&
              e &&
              this.setState({ isWCPayInstalled: e.includes('woocommerce-payments') });
        }
        componentDidUpdate(e, t) {
          const { profileItems: s, productTypes: o } = this.props;
          if (
            (this.state.selected !== t.selected &&
              this.props.updateCurrentStepValues(this.props.step.key, this.state.selected),
            e.productTypes !== o)
          ) {
            const e = Object.keys(o).filter(e => !!o[e].default);
            this.setState(
              { selected: Array.isArray(s.product_types) ? [...s.product_types] : e },
              () => {
                this.props.trackStepValueChanges(
                  this.props.step.key,
                  [...this.state.selected],
                  this.state.selected,
                  this.onContinue,
                );
              },
            );
          }
        }
        validateField() {
          const e = this.state.selected.length
            ? null
            : (0, r.__)('Please select at least one product type', 'woocommerce');
          return this.setState({ error: e }), !e;
        }
        onContinue(e) {
          const { selected: t } = this.state,
            { installedPlugins: s = [] } = this.props;
          if (!this.validateField()) return;
          const {
              countryCode: o,
              createNotice: n,
              installAndActivatePlugins: i,
              updateProfileItems: a,
              productTypes: l,
            } = this.props,
            c = { product_type: t, wcpay_installed: !1 },
            m = [a({ product_types: t })];
          window.wcAdminFeatures &&
            window.wcAdminFeatures.subscriptions &&
            'US' === o &&
            l.subscriptions &&
            !l.subscriptions.yearly_price &&
            !s.includes('woocommerce-payments') &&
            t.includes('subscriptions') &&
            m.push(
              i(['woocommerce-payments'])
                .then(e => {
                  (c.wcpay_installed = !0),
                    e.data &&
                      e.data.install_time &&
                      e.data.install_time['woocommerce-payments'] &&
                      (c.install_time_wcpay = e.data.install_time['woocommerce-payments']),
                    (0, y.a)(e);
                })
                .catch(e => {
                  throw ((0, y.a)(e), new Error());
                }),
            ),
            Promise.all(m)
              .then(() => {
                (0, u.recordEvent)('storeprofiler_store_product_type_continue', c),
                  'function' == typeof e && e();
              })
              .catch(() =>
                n(
                  'error',
                  (0, r.__)('There was a problem updating your product types', 'woocommerce'),
                ),
              );
        }
        onChange(e) {
          this.setState(
            t => {
              if ((0, a.includes)(t.selected, e))
                return { selected: (0, a.filter)(t.selected, t => t !== e) || [] };
              const s = t.selected;
              return s.push(e), { selected: s };
            },
            () => this.validateField(),
          );
        }
        render() {
          const { productTypes: e = [] } = this.props,
            { error: t, isMonthlyPricing: s, isWCPayInstalled: n, selected: i } = this.state,
            {
              countryCode: a,
              isInstallingActivating: l,
              isProductTypesRequesting: c,
              isProfileItemsRequesting: m,
            } = this.props;
          return c
            ? (0, o.createElement)(
                'div',
                { className: 'woocommerce-profile-wizard__product-types__spinner' },
                (0, o.createElement)(_.Spinner, null),
              )
            : (0, o.createElement)(
                'div',
                { className: 'woocommerce-profile-wizard__product-types' },
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__step-header' },
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'title.small', as: 'h2', size: '20', lineHeight: '28px' },
                    (0, r.__)('What type of products will be listed?', 'woocommerce'),
                  ),
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'body', as: 'p' },
                    (0, r.__)('Choose any that apply', 'woocommerce'),
                  ),
                ),
                (0, o.createElement)(
                  _.Card,
                  null,
                  (0, o.createElement)(
                    _.CardBody,
                    { size: null },
                    Object.keys(e).map(t =>
                      (0, o.createElement)(_.CheckboxControl, {
                        key: t,
                        label: (0, o.createElement)(oe, {
                          description: e[t].description,
                          label: e[t].label,
                          annualPrice: e[t].yearly_price,
                          isMonthlyPricing: s,
                          moreUrl: e[t].more_url,
                          slug: t,
                        }),
                        onChange: () => this.onChange(t),
                        checked: i.includes(t),
                        className: 'woocommerce-profile-wizard__checkbox',
                      }),
                    ),
                    t &&
                      (0, o.createElement)(
                        'span',
                        { className: 'woocommerce-profile-wizard__error' },
                        t,
                      ),
                  ),
                  (0, o.createElement)(
                    _.CardFooter,
                    { isBorderless: !0, justify: 'center' },
                    (0, o.createElement)(
                      _.Button,
                      {
                        isPrimary: !0,
                        onClick: () => {
                          this.onContinue(this.props.goToNextStep);
                        },
                        isBusy: m || l,
                        disabled: !i.length || m || l,
                        'aria-disabled': !i.length || m || l,
                      },
                      (0, r.__)('Continue', 'woocommerce'),
                    ),
                  ),
                ),
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__card-help-footnote' },
                  (0, o.createElement)(
                    'div',
                    {
                      className:
                        'woocommerce-profile-wizard__product-types-pricing-toggle woocommerce-profile-wizard__checkbox',
                    },
                    (0, o.createElement)(
                      'label',
                      { htmlFor: 'woocommerce-product-types__pricing-toggle' },
                      (0, o.createElement)(
                        I.Text,
                        { variant: 'body', as: 'p' },
                        (0, r.__)('Display monthly prices', 'woocommerce'),
                      ),
                      (0, o.createElement)(_.FormToggle, {
                        id: 'woocommerce-product-types__pricing-toggle',
                        checked: s,
                        onChange: () => this.setState({ isMonthlyPricing: !s }),
                      }),
                    ),
                  ),
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'caption', size: '12', lineHeight: '16px' },
                    (0, r.__)(
                      'Billing is annual. All purchases are covered by our 30 day money back guarantee and include access to support and updates. Extensions will be added to a cart for you to purchase later.',
                      'woocommerce',
                    ),
                  ),
                  window.wcAdminFeatures &&
                    window.wcAdminFeatures.subscriptions &&
                    'US' === a &&
                    !n &&
                    e.subscriptions &&
                    !e.subscriptions.yearly_price &&
                    i.includes('subscriptions') &&
                    (0, o.createElement)(
                      I.Text,
                      { variant: 'body', size: '12', lineHeight: '16px', as: 'p' },
                      (0, r.__)(
                        'The following extensions will be added to your site for free: WooPayments. An account is required to use this feature.',
                        'woocommerce',
                      ),
                    ),
                ),
              );
        }
      }
      const ne = (0, i.compose)(
          (0, l.withSelect)(e => {
            const {
                getProfileItems: t,
                getProductTypes: s,
                getOnboardingError: o,
                hasFinishedResolution: r,
                isOnboardingRequesting: n,
              } = e(m.ONBOARDING_STORE_NAME),
              { getSettings: i } = e(m.SETTINGS_STORE_NAME),
              { getInstalledPlugins: a, isPluginsRequesting: l } = e(m.PLUGINS_STORE_NAME),
              { general: c = {} } = i('general');
            return {
              isError: Boolean(o('updateProfileItems')),
              profileItems: t(),
              isProfileItemsRequesting: n('updateProfileItems'),
              installedPlugins: a(),
              isInstallingActivating: l('installPlugins') || l('activatePlugins'),
              countryCode: (0, v.so)(c.woocommerce_default_country),
              productTypes: s(),
              isProductTypesRequesting: !r('getProductTypes'),
            };
          }),
          (0, l.withDispatch)(e => {
            const { updateProfileItems: t } = e(m.ONBOARDING_STORE_NAME),
              { createNotice: s } = e('core/notices'),
              { installAndActivatePlugins: o } = e(m.PLUGINS_STORE_NAME),
              { invalidateResolution: r } = e(m.ONBOARDING_STORE_NAME);
            return {
              createNotice: s,
              installAndActivatePlugins: o,
              invalidateResolution: r,
              updateProfileItems: t,
            };
          }),
        )(re),
        ie = ({ onClose: e, onSave: t }) => {
          const s = (0, r.__)('Save changes?', 'woocommerce'),
            n = (0, r.__)(
              "You're about to go to a different step. Do you want to save the changes you've made here so far?",
              'woocommerce',
            ),
            i = (0, r.__)('Discard', 'woocommerce'),
            a = (0, r.__)('Save', 'woocommerce');
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              _.Modal,
              { title: s, className: 'woocommerce-obw-unsaved-changes', onRequestClose: e },
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-obw-unsaved-changes-modal__wrapper' },
                (0, o.createElement)('div', { className: 'woocommerce-usage-modal__message' }, n),
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-usage-modal__actions' },
                  (0, o.createElement)(_.Button, { onClick: () => e() }, i),
                  (0, o.createElement)(_.Button, { isPrimary: !0, onClick: t }, a),
                ),
              ),
            ),
          );
        };
      class ae extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { showUnsavedChangesModal: !1 }),
            (this.lastClickedStepKey = null),
            (this.onStepClick = this.onStepClick.bind(this));
        }
        shouldWarnForUnsavedChanges(e) {
          if (void 0 !== this.props.stepValueChanges[e]) {
            const t = this.props.stepValueChanges[e].initialValues,
              s = this.props.stepValueChanges[e].currentValues;
            return (
              Array.isArray(t) && Array.isArray(s) && (t.sort(), s.sort()), !(0, a.isEqual)(t, s)
            );
          }
          return !1;
        }
        findCurrentStep() {
          return this.props.steps.find(e => e.key === this.props.currentStep);
        }
        moveToLastClickedStep() {
          this.lastClickedStepKey &&
            ((0, c.updateQueryString)({ step: this.lastClickedStepKey }),
            (this.lastClickedStepKey = null));
        }
        saveCurrentStepChanges() {
          const e = this.findCurrentStep();
          if (!e) return null;
          const t = this.props.stepValueChanges[e.key];
          'function' == typeof t.onSave && t.onSave();
        }
        renderStepper() {
          const { currentStep: e, steps: t } = this.props,
            s = (0, a.filter)(t, e => !!e.label),
            r = s.findIndex(t => t.key === e);
          return (
            s.forEach((e, t) => {
              const o = s[t - 1];
              (e.isComplete = e.isComplete || t < r),
                (!o || o.isComplete || e.isComplete) && (e.onClick = this.onStepClick);
            }),
            (0, o.createElement)(h.Stepper, { steps: s, currentStep: e })
          );
        }
        onStepClick(e) {
          const { currentStep: t } = this.props;
          this.shouldWarnForUnsavedChanges(t)
            ? (this.setState({ showUnsavedChangesModal: !0 }), (this.lastClickedStepKey = e))
            : (0, c.updateQueryString)({ step: e });
        }
        render() {
          const e = this.findCurrentStep();
          return e && e.label
            ? (0, o.createElement)(
                'div',
                { className: 'woocommerce-profile-wizard__header' },
                this.state.showUnsavedChangesModal &&
                  (0, o.createElement)(ie, {
                    onClose: () => {
                      this.setState({ showUnsavedChangesModal: !1 }), this.moveToLastClickedStep();
                    },
                    onSave: () => {
                      this.saveCurrentStepChanges(),
                        this.setState({ showUnsavedChangesModal: !1 }),
                        this.moveToLastClickedStep();
                    },
                  }),
                this.renderStepper(),
              )
            : null;
        }
      }
      var le = s(96483),
        ce = s(63758),
        me = s(63781);
      const ue =
          _.FlexItem ||
          (({ children: e, align: t }) => {
            const s = { display: 'flex', 'justify-content': t ? 'center' : 'flex-start' };
            return (0, o.createElement)('div', { style: s }, e);
          }),
        pe = () =>
          (0, o.createElement)(
            'div',
            { className: 'woocommerce-admin__store-details__spinner' },
            (0, o.createElement)(_.Spinner, null),
          );
      class de extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { showUsageModal: !1, skipping: !1, isSkipSetupPopoverVisible: !1 }),
            (this.onContinue = this.onContinue.bind(this)),
            (this.onSubmit = this.onSubmit.bind(this)),
            (this.validateStoreDetails = this.validateStoreDetails.bind(this)),
            (this.onFormValueChange = this.onFormValueChange.bind(this)),
            (this.changedFormValues = {});
        }
        componentDidUpdate() {
          !1 === this.props.isLoading &&
            0 === Object.keys(this.changedFormValues).length &&
            ((this.changedFormValues = { ...this.props.initialValues }),
            this.props.trackStepValueChanges(
              this.props.step.key,
              this.props.initialValues,
              this.changedFormValues,
              () => {
                this.onContinue(this.changedFormValues);
              },
            ));
        }
        deriveCurrencySettings(e) {
          if (!e) return null;
          const t = this.context,
            s = (0, v.so)(e),
            { currencySymbols: o = {}, localeInfo: r = {} } = (0, Q.O3)('onboarding', {});
          return t.getDataForCountry(s, r, o);
        }
        onSubmit() {
          this.setState({ showUsageModal: !0, skipping: !1 });
        }
        onFormValueChange(e) {
          this.changedFormValues[e.name] = e.value;
        }
        async onContinue(e) {
          const {
              createNotice: t,
              updateProfileItems: s,
              updateAndPersistSettingsForGroup: o,
              profileItems: n,
              settings: i,
              errorsRef: a,
            } = this.props,
            l = this.deriveCurrencySettings(e.countryState);
          this.context.setCurrency(l),
            (0, u.recordEvent)('storeprofiler_store_details_continue', {
              store_country: (0, v.so)(e.countryState),
              derived_currency: l.code,
              email_signup: e.isAgreeMarketing,
            }),
            await o('general', {
              general: {
                ...i,
                woocommerce_store_address: e.addressLine1,
                woocommerce_store_address_2: e.addressLine2,
                woocommerce_default_country: e.countryState,
                woocommerce_store_city: e.city,
                woocommerce_store_postcode: e.postCode,
                woocommerce_currency: l.code,
                woocommerce_currency_pos: l.symbolPosition,
                woocommerce_price_thousand_sep: l.thousandSeparator,
                woocommerce_price_decimal_sep: l.decimalSeparator,
                woocommerce_price_num_decimals: l.precision,
              },
            });
          const c = {
            is_agree_marketing: e.isAgreeMarketing,
            store_email: e.storeEmail,
            is_store_country_set: 'string' == typeof e.countryState && '' !== e.countryState,
          };
          if ('US' !== (0, v.w)(e.countryState) && n.industry && n.industry.length) {
            const e = 'cbd-other-hemp-derived-products',
              t = n.industry.filter(t => e !== t && e !== t.slug);
            c.industry = t;
          }
          let m = [];
          try {
            await s(c);
          } catch (e) {
            e?.data?.params && (m = Object.values(e.data.params));
          }
          if (!Boolean(a.current.settings) && !m.length) return !0;
          t('error', (0, r.__)('There was a problem saving your store details', 'woocommerce')),
            m.forEach(e => t('error', e));
        }
        validateStoreDetails(e) {
          const { getLocale: t } = this.props,
            s = t(e.countryState),
            o = (0, ce.Yt)(s)(e);
          return (
            e.storeEmail &&
              !(0, le.isEmail)(e.storeEmail) &&
              (o.storeEmail = (0, r.__)('Invalid email address', 'woocommerce')),
            !e.isAgreeMarketing ||
              (e.storeEmail && e.storeEmail.trim().length) ||
              (o.storeEmail = (0, r.__)(
                'Please enter your email address to subscribe',
                'woocommerce',
              )),
            o
          );
        }
        render() {
          const { showUsageModal: e, skipping: t, isSkipSetupPopoverVisible: s } = this.state,
            {
              skipProfiler: n,
              isLoading: i,
              isBusy: a,
              initialValues: l,
              invalidateResolutionForStoreSelector: c,
            } = this.props,
            m = (0, r.__)(
              'Manual setup is only recommended for\n experienced WooCommerce users or developers.',
              'woocommerce',
            );
          return i
            ? (0, o.createElement)(
                'div',
                { className: 'woocommerce-profile-wizard__store-details' },
                (0, o.createElement)(pe, null),
              )
            : (0, o.createElement)(
                'div',
                { className: 'woocommerce-profile-wizard__store-details' },
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__step-header' },
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'title.small', as: 'h2', size: '20', lineHeight: '28px' },
                    (0, r.__)('Welcome to WooCommerce', 'woocommerce'),
                  ),
                  (0, o.createElement)(
                    I.Text,
                    { variant: 'body', as: 'p' },
                    (0, r.__)(
                      'Tell us where you run your business to help us configure currency, shipping, taxes, and more in a fully automated way.',
                      'woocommerce',
                    ),
                  ),
                ),
                (0, o.createElement)(
                  h.Form,
                  {
                    initialValues: l,
                    onSubmit: this.onSubmit,
                    validate: this.validateStoreDetails,
                    onChange: this.onFormValueChange,
                  },
                  ({ getInputProps: s, handleSubmit: i, values: l, isValidForm: c, setValue: m }) =>
                    (0, o.createElement)(
                      _.Card,
                      null,
                      e &&
                        (0, o.createElement)(me.Z, {
                          onContinue: () => {
                            t ? n() : this.onContinue(l).then(() => this.props.goToNextStep());
                          },
                          onClose: () => this.setState({ showUsageModal: !1, skipping: !1 }),
                        }),
                      (0, o.createElement)(
                        _.CardBody,
                        null,
                        (0, o.createElement)(ce.IO, { getInputProps: s, setValue: m }),
                        (0, o.createElement)(
                          h.TextControl,
                          (0, d.Z)(
                            {
                              label:
                                (l.isAgreeMarketing, (0, r.__)('Email address', 'woocommerce')),
                              required: l.isAgreeMarketing,
                              autoComplete: 'email',
                            },
                            s('storeEmail'),
                          ),
                        ),
                        (0, o.createElement)(
                          ue,
                          null,
                          (0, o.createElement)(
                            'div',
                            { className: 'woocommerce-profile-wizard__newsletter-signup' },
                            (0, o.createElement)(
                              _.CheckboxControl,
                              (0, d.Z)(
                                {
                                  label: (0, o.createElement)(
                                    o.Fragment,
                                    null,
                                    (0, r.__)(
                                      'Get tips, product updates and inspiration straight to your mailbox.',
                                      'woocommerce',
                                    ),
                                    ' ',
                                    (0, o.createElement)(
                                      'span',
                                      {
                                        className:
                                          'woocommerce-profile-wizard__powered-by-mailchimp',
                                      },
                                      (0, r.__)('Powered by Mailchimp', 'woocommerce'),
                                    ),
                                  ),
                                },
                                s('isAgreeMarketing'),
                              ),
                            ),
                          ),
                        ),
                      ),
                      (0, o.createElement)(
                        _.CardFooter,
                        { justify: 'center' },
                        (0, o.createElement)(
                          _.Button,
                          {
                            isPrimary: !0,
                            onClick: i,
                            isBusy: a,
                            disabled: !c || a,
                            'aria-disabled': !c || a,
                          },
                          (0, r.__)('Continue', 'woocommerce'),
                        ),
                      ),
                    ),
                ),
                (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-profile-wizard__footer' },
                  (0, o.createElement)(
                    _.Button,
                    {
                      isLink: !0,
                      className: 'woocommerce-profile-wizard__footer-link',
                      onClick: () => (
                        c('getTaskLists'), this.setState({ showUsageModal: !0, skipping: !0 }), !1
                      ),
                    },
                    (0, r.__)('Skip setup store details', 'woocommerce'),
                  ),
                  (0, o.createElement)(
                    _.Button,
                    {
                      isTertiary: !0,
                      label: m,
                      onClick: () => this.setState({ isSkipSetupPopoverVisible: !0 }),
                    },
                    (0, o.createElement)(V.Z, { icon: se.Z }),
                  ),
                  s &&
                    (0, o.createElement)(
                      _.Popover,
                      {
                        focusOnMount: 'container',
                        position: 'top center',
                        onClose: () => this.setState({ isSkipSetupPopoverVisible: !1 }),
                      },
                      m,
                    ),
                ),
              );
        }
      }
      de.contextType = w.CurrencyContext;
      const _e = (0, i.compose)(
        (0, l.withSelect)(e => {
          const { getSettings: t, getSettingsError: s, isUpdateSettingsRequesting: r } = e(
              m.SETTINGS_STORE_NAME,
            ),
            {
              getProfileItems: n,
              isOnboardingRequesting: i,
              getEmailPrefill: a,
              hasFinishedResolution: l,
            } = e(m.ONBOARDING_STORE_NAME),
            { getLocale: c, getLocales: u, getCountries: p, hasFinishedResolution: d } = e(
              m.COUNTRIES_STORE_NAME,
            ),
            { isResolving: _ } = e(m.OPTIONS_STORE_NAME),
            h = n(),
            g = a(),
            { general: C = {} } = t('general'),
            w =
              i('updateProfileItems') ||
              r('general') ||
              _('getOption', ['woocommerce_allow_tracking']),
            y = !(
              l('getProfileItems') &&
              l('getEmailPrefill') &&
              d('getLocales') &&
              d('getCountries')
            ),
            f = (0, o.useRef)({ settings: null });
          f.current = { settings: s('general') };
          const E = h.is_store_country_set ? C.woocommerce_default_country : '';
          return (
            p(),
            u(),
            {
              getLocale: c,
              initialValues: {
                addressLine1: C.woocommerce_store_address || '',
                addressLine2: C.woocommerce_store_address_2 || '',
                city: C.woocommerce_store_city || '',
                countryState: E,
                postCode: C.woocommerce_store_postcode || '',
                isAgreeMarketing: 'boolean' == typeof h.is_agree_marketing && h.is_agree_marketing,
                storeEmail: 'string' == typeof h.store_email ? h.store_email : g,
              },
              isLoading: y,
              profileItems: h,
              isBusy: w,
              settings: C,
              errorsRef: f,
            }
          );
        }),
        (0, l.withDispatch)(e => {
          const { createNotice: t } = e('core/notices'),
            { invalidateResolutionForStoreSelector: s, updateProfileItems: o } = e(
              m.ONBOARDING_STORE_NAME,
            ),
            { updateAndPersistSettingsForGroup: r } = e(m.SETTINGS_STORE_NAME);
          return {
            createNotice: t,
            invalidateResolutionForStoreSelector: s,
            updateProfileItems: o,
            updateAndPersistSettingsForGroup: r,
          };
        }),
      )(de);
      class he extends o.Component {
        constructor(e) {
          super(e),
            (this.cachedActivePlugins = e.activePlugins),
            (this.goToNextStep = this.goToNextStep.bind(this)),
            (this.trackStepValueChanges = this.trackStepValueChanges.bind(this)),
            (this.updateCurrentStepValues = this.updateCurrentStepValues.bind(this)),
            (this.stepValueChanges = {});
        }
        componentDidUpdate(e) {
          const { step: t } = e.query,
            { step: s } = this.props.query,
            { isError: o, isGetProfileItemsRequesting: n, createNotice: i } = this.props;
          !n &&
            e.isRequesting &&
            o &&
            i('error', (0, r.__)('There was a problem finishing the setup wizard', 'woocommerce')),
            t !== s &&
              ((window.document.documentElement.scrollTop = 0),
              (0, u.recordEvent)('storeprofiler_step_view', {
                step: this.getCurrentStep().key,
                wc_version: (0, p.getSetting)('wcVersion'),
              }));
        }
        componentDidMount() {
          document.body.classList.remove('woocommerce-admin-is-loading'),
            document.body.classList.add('woocommerce-profile-wizard__body'),
            document.body.classList.add('woocommerce-admin-full-screen'),
            document.body.classList.add('is-wp-toolbar-disabled'),
            (0, u.recordEvent)('storeprofiler_step_view', {
              step: this.getCurrentStep().key,
              wc_version: (0, p.getSetting)('wcVersion'),
            });
        }
        componentWillUnmount() {
          document.body.classList.remove('woocommerce-profile-wizard__body'),
            document.body.classList.remove('woocommerce-admin-full-screen'),
            document.body.classList.remove('is-wp-toolbar-disabled');
        }
        trackStepValueChanges(e, t, s, o) {
          this.stepValueChanges[e] = { initialValues: t, currentValues: s, onSave: o };
        }
        updateCurrentStepValues(e, t) {
          this.stepValueChanges[e] && (this.stepValueChanges[e].currentValues = t);
        }
        getSteps() {
          const { profileItems: e } = this.props,
            t = [];
          return (
            t.push({
              key: 'store-details',
              container: _e,
              label: (0, r.__)('Store Details', 'woocommerce'),
              isComplete: e.hasOwnProperty('setup_client') && null !== e.setup_client,
            }),
            t.push({
              key: 'industry',
              container: te,
              label: (0, r.__)('Industry', 'woocommerce'),
              isComplete: e.hasOwnProperty('industry') && null !== e.industry,
            }),
            t.push({
              key: 'product-types',
              container: ne,
              label: (0, r.__)('Product Types', 'woocommerce'),
              isComplete: e.hasOwnProperty('product_types') && null !== e.product_types,
            }),
            t.push({
              key: 'business-details',
              container: Y,
              label: (0, r.__)('Business Details', 'woocommerce'),
              isComplete: e.hasOwnProperty('product_count') && null !== e.product_count,
            }),
            (0, n.applyFilters)('woocommerce_admin_profile_wizard_steps', t)
          );
        }
        getCurrentStep() {
          const { step: e } = this.props.query;
          return this.getSteps().find(t => t.key === e) || this.getSteps()[0];
        }
        async goToNextStep(e = {}) {
          const { activePlugins: t } = this.props,
            s = this.getCurrentStep(),
            o = this.getSteps().findIndex(e => e.key === s.key);
          (0, u.recordEvent)('storeprofiler_step_complete', {
            step: s.key,
            wc_version: (0, p.getSetting)('wcVersion'),
            ...e,
          }),
            (this.cachedActivePlugins = t);
          const r = this.getSteps()[o + 1];
          if (void 0 !== r) return (0, c.updateQueryString)({ step: r.key });
          this.completeProfiler();
        }
        completeProfiler() {
          const {
            activePlugins: e,
            isJetpackConnected: t,
            notes: s,
            updateNote: o,
            updateProfileItems: r,
            connectToJetpack: n,
          } = this.props;
          (0, u.recordEvent)('storeprofiler_complete');
          const i = e.includes('jetpack') && !t,
            a = s.find(e => 'wc-admin-onboarding-profiler-reminder' === e.name);
          a && o(a.id, { status: 'actioned' }),
            r({ completed: !0 }).then(() => {
              const e = new URL((0, c.getNewPath)({}, '/', {}), window.location.href).href;
              i
                ? (document.body.classList.add('woocommerce-admin-is-loading'), n(() => e))
                : (window.location.href = e);
            });
        }
        skipProfiler() {
          const { createNotice: e, updateProfileItems: t } = this.props;
          t({ skipped: !0 })
            .then(() => {
              (0, u.recordEvent)('storeprofiler_store_details_skip'),
                (0, c.getHistory)().push((0, c.getNewPath)({}, '/', {}));
            })
            .catch(() => {
              e('error', (0, r.__)('There was a problem skipping the setup wizard', 'woocommerce'));
            });
        }
        render() {
          const { query: e } = this.props,
            t = this.getCurrentStep(),
            s = t.key,
            r = (0, o.createElement)(t.container, {
              query: e,
              step: t,
              goToNextStep: this.goToNextStep,
              skipProfiler: () => {
                this.skipProfiler();
              },
              trackStepValueChanges: this.trackStepValueChanges,
              updateCurrentStepValues: this.updateCurrentStepValues,
            }),
            n = this.getSteps().map(e => (0, a.pick)(e, ['key', 'label', 'isComplete'])),
            i = `woocommerce-profile-wizard__container ${s}`;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(ae, {
              currentStep: s,
              steps: n,
              stepValueChanges: this.stepValueChanges,
            }),
            (0, o.createElement)('div', { className: i }, r),
          );
        }
      }
      const ge = (0, i.compose)(
        (0, l.withSelect)(e => {
          const { getNotes: t } = e(m.NOTES_STORE_NAME),
            { getProfileItems: s, getOnboardingError: o } = e(m.ONBOARDING_STORE_NAME),
            { getActivePlugins: r, getPluginsError: n, isJetpackConnected: i } = e(
              m.PLUGINS_STORE_NAME,
            ),
            a = s(),
            l = t({
              page: 1,
              per_page: m.QUERY_DEFAULTS.pageSize,
              type: 'update',
              status: 'unactioned',
            }),
            c = r();
          return {
            getPluginsError: n,
            isError: Boolean(o('updateProfileItems')),
            isJetpackConnected: i(),
            notes: l,
            profileItems: a,
            activePlugins: c,
          };
        }),
        (0, l.withDispatch)(e => {
          const { connectToJetpackWithFailureRedirect: t, createErrorNotice: s } = e(
              m.PLUGINS_STORE_NAME,
            ),
            { updateNote: o } = e(m.NOTES_STORE_NAME),
            { updateOptions: r } = e(m.OPTIONS_STORE_NAME),
            { updateProfileItems: n } = e(m.ONBOARDING_STORE_NAME),
            { createNotice: i } = e('core/notices');
          return {
            connectToJetpack: e => {
              t(e, s, p.getAdminLink);
            },
            createNotice: i,
            updateNote: o,
            updateOptions: r,
            updateProfileItems: n,
          };
        }),
        (0, Q.O3)('plugins')
          ? (0, m.withPluginsHydration)({
              ...(0, Q.O3)('plugins'),
              jetpackStatus: (0, Q.O3)('dataEndpoints', {}).jetpackStatus,
            })
          : a.identity,
      )(he);
    },
    94113: (e, t, s) => {
      s.r(t), s.d(t, { default: () => r });
      var o = s(69307);
      const r = ({}) => (0, o.createElement)('div', null, 'Settings page');
    },
  },
]);
