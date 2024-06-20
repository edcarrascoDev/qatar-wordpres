'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Products = void 0);
const element_1 = require('@wordpress/element'),
  compose_1 = require('@wordpress/compose');
function Products({ ...e }) {
  const t = (0, compose_1.useInstanceId)(Products, 'clip-path'),
    l = (0, compose_1.useInstanceId)(Products, 'clip-path'),
    r = (0, compose_1.useInstanceId)(Products, 'clip-path'),
    n = (0, compose_1.useInstanceId)(Products, 'clip-path'),
    a = (0, compose_1.useInstanceId)(Products, 'filter');
  return (0, element_1.createElement)(
    'svg',
    {
      'aria-hidden': 'true',
      width: '330',
      height: '179',
      ...e,
      viewBox: '0 0 330 179',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    (0, element_1.createElement)(
      'g',
      { clipPath: `url(#${t})` },
      (0, element_1.createElement)('rect', {
        y: '34.9561',
        width: '115.163',
        height: '115.163',
        rx: '8',
        transform: 'rotate(-9.4741 0 34.9561)',
        fill: 'white',
      }),
      (0, element_1.createElement)('rect', {
        width: '118',
        height: '90',
        transform: 'translate(0.671875 47.5995) rotate(-9.4741)',
        fill: 'white',
      }),
      (0, element_1.createElement)('path', {
        d:
          'M75.235 56.0601C69.3054 57.0496 66.0444 58.6594 64.4714 61.2948C64.9933 56.6155 66.7756 52.8705 70.5469 49.1187C65.5862 50.6193 62.9649 53.0368 61.9995 56.0314C60.1145 53.5147 56.8502 52.0794 51.6706 52.2687C56.4559 54.5926 59.3572 57.5538 61.3707 61.8123C59.0272 59.8305 55.4201 59.3667 49.4906 60.3563C57.1121 62.4959 60.2617 64.7157 63.3629 69.1178L64.9571 68.8517C66.4609 63.6812 68.7212 60.5585 75.2328 56.0605L75.235 56.0601Z',
        fill: '#DDDDDD',
      }),
      (0, element_1.createElement)('path', {
        d:
          'M75.7883 109.541C77.9458 108.305 86.066 105.026 84.7028 96.8581C83.8932 92.0066 78.8948 89.0793 73.7718 89.0612C75.8672 87.9672 78.5654 84.2027 77.9617 80.585C77.1839 75.9242 72.6559 74.7684 69.0874 74.6227C68.9099 73.5588 71.8268 67.4299 71.8268 67.4299L55.982 70.0741C55.982 70.0741 60.731 74.9237 60.9085 75.9876C57.5783 77.2876 53.6734 79.8476 54.4511 84.5084C55.0549 88.1261 58.8293 90.8105 61.1664 91.1648C56.3243 92.8489 52.5503 97.2401 53.3594 102.089C54.723 110.26 63.4677 110.724 65.9092 111.19C60.5417 112.609 58.1704 115.192 58.0308 116.964L85.1178 112.444C84.4073 110.814 81.3259 109.141 75.7913 109.541L75.7883 109.541Z',
        fill: '#F0F0F0',
      }),
    ),
    (0, element_1.createElement)('rect', {
      x: '0.575481',
      y: '35.3669',
      width: '114.163',
      height: '114.163',
      rx: '7.5',
      transform: 'rotate(-9.4741 0.575481 35.3669)',
      stroke: '#CCCCCC',
    }),
    (0, element_1.createElement)(
      'g',
      { clipPath: `url(#${l})` },
      (0, element_1.createElement)('rect', {
        x: '106',
        y: '71',
        width: '108',
        height: '108',
        rx: '8',
        fill: 'white',
      }),
      (0, element_1.createElement)(
        'g',
        { clipPath: `url(#${n})`, filter: `url(#${a})` },
        (0, element_1.createElement)('rect', {
          width: '148',
          height: '113',
          transform: 'translate(86 68.5)',
          fill: 'white',
        }),
        (0, element_1.createElement)('path', {
          d:
            'M190.129 99.2362C176.411 99.2362 168.467 101.637 163.937 106.983C166.869 96.6368 172.287 88.8691 182.185 81.8339C170.456 83.3498 163.648 87.811 160.35 94.1951C157.053 87.8161 150.245 83.3549 138.516 81.8339C148.414 88.8691 153.832 96.6317 156.764 106.983C152.234 101.637 144.289 99.2362 130.572 99.2362C146.922 106.922 153.177 113.108 158.504 124.192H162.192C167.519 113.108 173.779 106.922 190.124 99.2362H190.129Z',
          fill: '#DDDDDD',
        }),
        (0, element_1.createElement)('path', {
          d:
            'M171.287 219.941C176.607 217.968 196.115 213.634 196.115 194.717C196.115 183.482 185.964 175.007 174.44 173.04C179.567 171.363 187.054 163.896 187.054 155.518C187.054 144.724 177.297 140.418 169.32 138.748C169.32 136.284 178.187 123.572 178.187 123.572H141.532C141.532 123.572 150.399 136.284 150.399 138.748C142.416 140.425 132.665 144.724 132.665 155.518C132.665 163.896 140.152 171.363 145.279 173.04C133.749 175.014 123.605 183.489 123.605 194.717C123.605 213.64 143.112 217.974 148.433 219.941C135.819 221.121 129.512 226.049 128.532 229.99H191.195C190.208 226.049 183.901 221.121 171.294 219.941H171.287Z',
          fill: '#F0F0F0',
        }),
      ),
    ),
    (0, element_1.createElement)('rect', {
      x: '106.5',
      y: '71.5',
      width: '107',
      height: '107',
      rx: '7.5',
      stroke: '#CCCCCC',
    }),
    (0, element_1.createElement)(
      'g',
      { clipPath: `url(#${r})` },
      (0, element_1.createElement)('rect', {
        x: '213.602',
        width: '117.576',
        height: '117.576',
        rx: '8',
        transform: 'rotate(9.10319 213.602 0)',
        fill: 'white',
      }),
      (0, element_1.createElement)('rect', {
        width: '118',
        height: '90',
        transform: 'translate(211.211 13.5808) rotate(9.10319)',
        fill: 'white',
      }),
      (0, element_1.createElement)('path', {
        d:
          'M279.072 45.3017C273.162 44.3548 269.574 44.8397 267.254 46.8279C269.231 42.5774 272.1 39.6085 276.85 37.264C271.692 37.1068 268.451 38.5568 266.591 41.0766C265.61 38.1037 262.985 35.7138 258.037 34.2496C261.815 37.9605 263.614 41.6752 264.164 46.3327C262.581 43.7191 259.324 42.1374 253.414 41.1905C259.928 45.6271 262.196 48.7209 263.727 53.8589L265.315 54.1135C268.375 49.7109 271.498 47.481 279.07 45.3014L279.072 45.3017Z',
        fill: '#E0E0E0',
      }),
      (0, element_1.createElement)('path', {
        d:
          'M262.631 95.9482C265.059 95.466 273.762 94.9474 275.067 86.8065C275.842 81.9713 272.053 77.6233 267.224 75.9814C269.549 75.6136 273.289 72.9168 273.867 69.3112C274.611 64.666 270.704 62.1391 267.383 60.8697C267.553 59.8094 272.25 54.9507 272.25 54.9507L256.458 52.4204C256.458 52.4204 259.401 58.5033 259.232 59.5636C255.676 59.7342 251.179 60.9115 250.435 65.5567C249.857 69.1623 252.568 72.8927 254.661 73.9684C249.557 74.0219 244.603 76.9689 243.829 81.8012C242.524 89.945 250.629 93.1569 252.785 94.3706C247.27 94.0077 244.213 95.693 243.519 97.3212L270.515 101.647C270.362 99.8828 267.984 97.3268 262.634 95.9487L262.631 95.9482Z',
        fill: '#F0F0F0',
      }),
      (0, element_1.createElement)('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d:
          'M239.562 96.9769C238.554 94.0517 238.285 89.8732 239.007 85.3673C239.729 80.8615 241.29 76.9762 243.162 74.5126L232.691 72.8348C233.7 75.76 233.969 79.9386 233.247 84.4444C232.525 88.9502 230.964 92.8356 229.091 95.2991L239.562 96.9769Z',
        fill: '#F0F0F0',
      }),
      (0, element_1.createElement)('path', {
        d:
          'M241.466 51.1999L235.767 50.2867L218.224 70.9461L233.092 73.3285L242.508 74.8372L257.376 77.2196L247.166 52.1132L241.466 51.1999Z',
        fill: '#E0E0E0',
      }),
      (0, element_1.createElement)('path', {
        d: 'M253.979 68.868L224.06 64.0739L218.224 70.9461L253.979 68.868Z',
        fill: '#F0F0F0',
      }),
      (0, element_1.createElement)('path', {
        d: 'M250.583 60.513L229.897 57.1984L224.06 64.074L250.583 60.513Z',
        fill: '#F0F0F0',
      }),
      (0, element_1.createElement)('path', {
        d: 'M247.166 52.1131L235.767 50.2866L229.896 57.1984L247.166 52.1131Z',
        fill: '#F0F0F0',
      }),
      (0, element_1.createElement)('path', {
        d: 'M278.485 84.1128L296.917 87.0663L292.88 105.325L276.616 102.719L278.485 84.1128Z',
        fill: '#F0F0F0',
      }),
      (0, element_1.createElement)('path', {
        d:
          'M290.23 80.8727C289.873 83.0995 287.856 84.6278 287.856 84.6278C287.856 84.6278 286.417 82.5457 286.774 80.3189C287.13 78.0921 289.148 76.5637 289.148 76.5637C289.148 76.5637 290.586 78.6458 290.23 80.8727Z',
        fill: '#E0E0E0',
      }),
      (0, element_1.createElement)('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M295.836 91.9567L277.984 89.0963L278.485 84.1128L296.917 87.0662L295.836 91.9567Z',
        fill: '#E0E0E0',
      }),
    ),
    (0, element_1.createElement)('rect', {
      x: '214.017',
      y: '0.572809',
      width: '116.576',
      height: '116.576',
      rx: '7.5',
      transform: 'rotate(9.10319 214.017 0.572809)',
      stroke: '#CCCCCC',
    }),
    (0, element_1.createElement)(
      'defs',
      null,
      (0, element_1.createElement)(
        'filter',
        {
          id: a,
          x: '86',
          y: '52.5',
          width: '148',
          height: '129',
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB',
        },
        (0, element_1.createElement)('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix',
        }),
        (0, element_1.createElement)('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'BackgroundImageFix',
          result: 'shape',
        }),
        (0, element_1.createElement)('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha',
        }),
        (0, element_1.createElement)('feOffset', { dy: '-16' }),
        (0, element_1.createElement)('feGaussianBlur', { stdDeviation: '15' }),
        (0, element_1.createElement)('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1',
        }),
        (0, element_1.createElement)('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0',
        }),
        (0, element_1.createElement)('feBlend', {
          mode: 'normal',
          in2: 'shape',
          result: 'effect1_innerShadow_853_49189',
        }),
      ),
      (0, element_1.createElement)(
        'clipPath',
        { id: t },
        (0, element_1.createElement)('rect', {
          y: '34.9561',
          width: '115.163',
          height: '115.163',
          rx: '8',
          transform: 'rotate(-9.4741 0 34.9561)',
          fill: 'white',
        }),
      ),
      (0, element_1.createElement)(
        'clipPath',
        { id: l },
        (0, element_1.createElement)('rect', {
          x: '106',
          y: '71',
          width: '108',
          height: '108',
          rx: '8',
          fill: 'white',
        }),
      ),
      (0, element_1.createElement)(
        'clipPath',
        { id: n },
        (0, element_1.createElement)('rect', {
          width: '148',
          height: '113',
          fill: 'white',
          transform: 'translate(86 68.5)',
        }),
      ),
      (0, element_1.createElement)(
        'clipPath',
        { id: r },
        (0, element_1.createElement)('rect', {
          x: '213.602',
          width: '117.576',
          height: '117.576',
          rx: '8',
          transform: 'rotate(9.10319 213.602 0)',
          fill: 'white',
        }),
      ),
    ),
  );
}
exports.Products = Products;
