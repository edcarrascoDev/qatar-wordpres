/*! For license information please see marketing-coupons.js.LICENSE.txt */
(() => {
  var e = {
      87608: (e, t) => {
        var n;
        !(function() {
          'use strict';
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ('string' === a || 'number' === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ('object' === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes('[native code]')
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
                }
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function() {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      31772: (e, t, n) => {
        'use strict';
        var r = n(25148);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function() {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var s = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((s.name = 'Invariant Violation'), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      7862: (e, t, n) => {
        e.exports = n(31772)();
      },
      25148: e => {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var r = {};
  (() => {
    'use strict';
    n.r(r);
    var e = {};
    n.r(e),
      n.d(e, {
        amazonEbayIntegration: () => y,
        automatewoo: () => _,
        automatewooAlt: () => x,
        automatewooBirthdays: () => _,
        automatewooReferrals: () => _,
        blank: () => C,
        creativeMailByConstantContact: () => G,
        facebook: () => M,
        facebookForWoocommerce: () => M,
        googleAds: () => O,
        googleListingsAndAds: () => O,
        hubspotForWoocommerce: () => L,
        integrationWithSalesforce: () => H,
        klaviyo: () => I,
        mailchimpForWoocommerce: () => A,
        mailpoet: () => V,
        pinterest: () => R,
        pinterestForWoocommerce: () => R,
        tiktokForBusiness: () => $,
        trustpilotReviews: () => U,
        vimeo: () => j,
        woocommerceAmazonEbayIntegration: () => y,
        woocommerceFreeGiftCoupons: () => z,
        woocommerceGroupCoupons: () => W,
        woocommerceSmartCoupons: () => q,
        woocommerceStoreCredit: () => B,
        woocommerceUrlCoupons: () => F,
        woocommerceZapier: () => Z,
        zeroBsCrm: () => D,
      });
    var t = {};
    n.r(t),
      n.d(t, {
        activateInstalledPlugin: () => rt,
        handleFetchError: () => et,
        installAndActivateRecommendedPlugin: () => ot,
        loadInstalledPluginsAfterActivation: () => nt,
        receiveActivatingPlugin: () => Xe,
        receiveBlogPosts: () => Ye,
        receiveInstalledPlugins: () => Ke,
        receiveRecommendedPlugins: () => Qe,
        removeActivatingPlugin: () => Je,
        setError: () => tt,
      });
    var o = {};
    n.r(o),
      n.d(o, {
        getActivatingPlugins: () => it,
        getBlogPosts: () => ct,
        getBlogPostsError: () => lt,
        getInstalledPlugins: () => at,
        getRecommendedPlugins: () => st,
      });
    var a = {};
    n.r(a), n.d(a, { getBlogPosts: () => dt, getRecommendedPlugins: () => mt });
    const i = window.wp.element,
      s = window.wp.i18n,
      c = window.wc.data;
    function l() {
      return (
        (l = Object.assign
          ? Object.assign.bind()
          : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        l.apply(this, arguments)
      );
    }
    const m = window.wp.compose;
    var d = n(87608),
      u = n.n(d);
    const p = window.wp.data;
    var g = n(7862),
      h = n.n(g);
    const E = window.wc.tracks,
      f = function(e) {
        let { icon: t, size: n = 24, ...r } = e;
        return (0, i.cloneElement)(t, { width: n, height: n, ...r });
      },
      w = window.lodash,
      v = window.wp.primitives,
      C = (0, i.createElement)(v.SVG, {
        width: '36',
        height: '36',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      }),
      y = (0, i.createElement)(
        v.SVG,
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '100',
          height: '100',
          viewBox: '0 0 100 100',
        },
        (0, i.createElement)(
          'defs',
          null,
          (0, i.createElement)(
            'clipPath',
            { id: 'b' },
            (0, i.createElement)('rect', { width: '100', height: '100' }),
          ),
        ),
        (0, i.createElement)(
          'g',
          { id: 'a', clipPath: 'url(#b)' },
          (0, i.createElement)('rect', { width: '100', height: '100', fill: '#fff' }),
          (0, i.createElement)('rect', { width: '100', height: '100', fill: '#eee' }),
          (0, i.createElement)(
            'g',
            { transform: 'translate(9 25.655)' },
            (0, i.createElement)(v.Path, {
              d:
                'M179.753,195.8c-4.732,3.488-11.591,5.349-17.5,5.349a31.66,31.66,0,0,1-21.374-8.156c-.443-.4-.046-.946.486-.634a43.018,43.018,0,0,0,21.384,5.671,42.523,42.523,0,0,0,16.312-3.335c.8-.34,1.471.525.688,1.106',
              transform: 'translate(-129.235 -176.611)',
              fill: '#f90',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M577.807,183.949c-.6-.773-4-.365-5.522-.184-.464.057-.535-.347-.117-.638,2.7-1.9,7.142-1.354,7.66-.716s-.135,5.09-2.676,7.213c-.39.326-.762.152-.588-.28.571-1.425,1.85-4.619,1.244-5.395',
              transform: 'translate(-525.323 -167.01)',
              fill: '#f90',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M572.708,6.758V4.908a.457.457,0,0,1,.468-.468h8.284a.461.461,0,0,1,.479.468V6.493a2.605,2.605,0,0,1-.624,1.163l-4.292,6.129a9.146,9.146,0,0,1,4.725,1.014.843.843,0,0,1,.44.72v1.974c0,.269-.3.585-.61.422a9.542,9.542,0,0,0-8.752.014c-.287.156-.588-.156-.588-.425V15.627a2.238,2.238,0,0,1,.3-1.272l4.973-7.132h-4.328a.458.458,0,0,1-.479-.464',
              transform: 'translate(-525.64 -4.078)',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M173.431,15.624h-2.52a.476.476,0,0,1-.45-.429V2.261a.473.473,0,0,1,.486-.464h2.35a.475.475,0,0,1,.457.432V3.92h.046a3.463,3.463,0,0,1,6.589,0,3.722,3.722,0,0,1,6.4-.982c.8,1.088.634,2.669.634,4.055l0,8.163a.476.476,0,0,1-.486.468h-2.517a.479.479,0,0,1-.454-.468V8.3a16.192,16.192,0,0,0-.071-2.424,1.312,1.312,0,0,0-1.482-1.113,1.674,1.674,0,0,0-1.506,1.06,7.831,7.831,0,0,0-.234,2.478v6.855a.476.476,0,0,1-.486.468h-2.517a.476.476,0,0,1-.454-.468l0-6.855c0-1.443.238-3.566-1.553-3.566-1.811,0-1.74,2.07-1.74,3.566v6.855a.476.476,0,0,1-.486.468',
              transform: 'translate(-156.58 -1.399)',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M714.982,1.524c3.739,0,5.763,3.211,5.763,7.295,0,3.945-2.237,7.075-5.763,7.075-3.672,0-5.671-3.211-5.671-7.213,0-4.027,2.024-7.156,5.671-7.156M715,4.164c-1.857,0-1.974,2.531-1.974,4.108s-.025,4.955,1.953,4.955c1.953,0,2.045-2.722,2.045-4.381a11.959,11.959,0,0,0-.376-3.431A1.577,1.577,0,0,0,715,4.164',
              transform: 'translate(-651.552 -1.399)',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M875.817,15.624h-2.51a.479.479,0,0,1-.454-.468l0-12.938a.477.477,0,0,1,.486-.422h2.336a.482.482,0,0,1,.45.362V4.136h.046c.705-1.769,1.694-2.612,3.435-2.612a3.307,3.307,0,0,1,2.942,1.524c.659,1.035.659,2.775.659,4.027v8.142a.484.484,0,0,1-.486.408h-2.527a.477.477,0,0,1-.447-.408V8.191c0-1.414.163-3.484-1.577-3.484a1.647,1.647,0,0,0-1.457,1.035,5.724,5.724,0,0,0-.4,2.449v6.965a.485.485,0,0,1-.493.468',
              transform: 'translate(-801.775 -1.399)',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M413.163,8.046a4.93,4.93,0,0,1-.471,2.673,2.048,2.048,0,0,1-1.744,1.145c-.968,0-1.535-.737-1.535-1.825,0-2.148,1.925-2.538,3.75-2.538v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.143,6.143,0,0,1-1.446-1.68,4.991,4.991,0,0,1-4.154,1.833,3.575,3.575,0,0,1-3.771-3.927,4.277,4.277,0,0,1,2.687-4.119,17.463,17.463,0,0,1,4.739-.876V5.154a3.214,3.214,0,0,0-.308-1.825,1.677,1.677,0,0,0-1.414-.656,1.917,1.917,0,0,0-2.024,1.514.527.527,0,0,1-.439.461l-2.442-.262a.444.444,0,0,1-.376-.528C406.719.893,409.4,0,411.795,0a5.714,5.714,0,0,1,3.8,1.255C416.818,2.4,416.7,3.928,416.7,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.477.477,0,0,1-.011.67c-.514.429-1.428,1.226-1.932,1.673l0-.007',
              transform: 'translate(-372.698 0)',
              fillRule: 'evenodd',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M7.426,8.046a4.93,4.93,0,0,1-.471,2.673,2.043,2.043,0,0,1-1.744,1.145c-.968,0-1.531-.737-1.531-1.825C3.679,7.89,5.6,7.5,7.426,7.5v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.2,6.2,0,0,1-1.446-1.68A4.986,4.986,0,0,1,3.771,14.4,3.576,3.576,0,0,1,0,10.474,4.282,4.282,0,0,1,2.687,6.356,17.462,17.462,0,0,1,7.426,5.48V5.154a3.243,3.243,0,0,0-.3-1.825,1.686,1.686,0,0,0-1.414-.656A1.921,1.921,0,0,0,3.679,4.186a.527.527,0,0,1-.436.461L.8,4.385a.446.446,0,0,1-.376-.528C.985.893,3.662,0,6.058,0a5.714,5.714,0,0,1,3.8,1.255C11.08,2.4,10.963,3.928,10.963,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.473.473,0,0,1-.007.67c-.514.429-1.428,1.226-1.932,1.673l-.007-.007',
              transform: 'translate(0 0)',
              fillRule: 'evenodd',
            }),
          ),
          (0, i.createElement)(
            'g',
            { transform: 'translate(18.9 54.637)' },
            (0, i.createElement)(v.Path, {
              d:
                'M8.055,26.308C3.716,26.308.1,28.149.1,33.7c0,4.4,2.431,7.171,8.067,7.171,6.633,0,7.059-4.37,7.059-4.37H12.011s-.689,2.353-4.04,2.353a4.4,4.4,0,0,1-4.693-4.428H15.562V32.807c0-2.557-1.623-6.5-7.507-6.5Zm-.112,2.073c2.6,0,4.37,1.592,4.37,3.977H3.349C3.349,29.826,5.661,28.381,7.943,28.381Z',
              transform: 'translate(0 -20.83)',
              fill: '#e53238',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M75.169.1V17.254c0,.974-.069,2.341-.069,2.341h3.066s.11-.982.11-1.879c0,0,1.515,2.37,5.633,2.37a6.961,6.961,0,0,0,7.283-7.325A6.922,6.922,0,0,0,83.915,5.52c-4.279,0-5.609,2.311-5.609,2.311V.1Zm7.955,7.542c2.945,0,4.818,2.186,4.818,5.119a4.857,4.857,0,0,1-4.8,5.2c-3.143,0-4.839-2.454-4.839-5.175C78.306,10.254,79.827,7.642,83.123,7.642Z',
              transform: 'translate(-59.609)',
              fill: '#0064d2',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M159.834,26.308c-6.528,0-6.947,3.574-6.947,4.146h3.249s.17-2.087,3.473-2.087c2.146,0,3.809.982,3.809,2.871v.672h-3.809c-5.057,0-7.731,1.479-7.731,4.482,0,2.955,2.47,4.562,5.809,4.562,4.55,0,6.015-2.514,6.015-2.514,0,1,.077,1.985.077,1.985h2.888s-.112-1.221-.112-2V31.669c0-4.428-3.572-5.36-6.722-5.36Zm3.585,7.619v.9c0,1.169-.721,4.075-4.968,4.075-2.326,0-3.323-1.161-3.323-2.507C155.128,33.943,158.486,33.927,163.419,33.927Z',
              transform: 'translate(-120.634 -20.83)',
              fill: '#f5af02',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M214.879,29.041h3.655l5.246,10.51,5.234-10.51h3.311l-9.533,18.711h-3.473l2.751-5.216Z',
              transform: 'translate(-170.706 -23.002)',
              fill: '#86b817',
            }),
          ),
        ),
      ),
      _ = (0, i.createElement)(
        v.SVG,
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '100',
          height: '100',
          viewBox: '0 0 100 100',
        },
        (0, i.createElement)(
          'defs',
          null,
          (0, i.createElement)(
            'clipPath',
            { id: 'b' },
            (0, i.createElement)('rect', { width: '100', height: '100' }),
          ),
        ),
        (0, i.createElement)(
          'g',
          { id: 'a', clipPath: 'url(#b)' },
          (0, i.createElement)('rect', { width: '100', height: '100', fill: '#fff' }),
          (0, i.createElement)('rect', { width: '100', height: '100', fill: '#7532e4' }),
          (0, i.createElement)(
            'g',
            { transform: 'translate(-43.503 -133.512)' },
            (0, i.createElement)(v.Path, {
              d:
                'M78.217,193.13H64.405l-2.823,7.764H54.6L67.648,166.9h7.669l12.934,33.995H81.059Zm-11.6-6.047h9.4L71.33,174.245Z',
              transform: 'translate(0 0)',
              fill: '#1ff2e6',
            }),
            (0, i.createElement)(v.Path, {
              d:
                'M246.639,166.9h6.753l-9.4,33.995h-6.81l-7.764-24.208-7.764,24.208h-6.906L205.3,166.9h7l6.238,23.388,7.535-23.388h6.849l7.592,23.483Z',
              transform: 'translate(-121.952)',
              fill: '#1ff2e6',
            }),
          ),
        ),
      ),
      x = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg' },
        (0, i.createElement)(v.Path, {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M4.67708 14.1615h3.77084l.77604 2.1198h1.96354L7.65625 7H5.5625L2 16.2813h1.90625l.77083-2.1198zm3.17188-1.6511H5.28125l1.28646-3.50519 1.28125 3.50519zM22.9791 7h-1.8437l-1.6719 6.4115L17.3906 7h-1.8698l-2.0573 6.3854L11.7604 7H9.8489l2.5781 9.2813h1.8854l2.1198-6.60942 2.1198 6.60942h1.8594L22.9791 7z',
        }),
      ),
      k = window.wc.wcSettings,
      b = ['wcAdminSettings', 'preloadSettings'],
      P = (0, k.getSetting)('admin', {}),
      N = Object.keys(P).reduce((e, t) => (b.includes(t) || (e[t] = P[t]), e), {});
    function S(e, t = !1, n = e => e) {
      if (b.includes(e))
        throw new Error(
          (0, s.__)('Mutable settings should be accessed via data store.', 'woocommerce'),
        );
      return n(N.hasOwnProperty(e) ? N[e] : t, t);
    }
    (0, k.getSetting)('adminUrl'),
      (0, k.getSetting)('countries'),
      (0, k.getSetting)('currency'),
      (0, k.getSetting)('locale'),
      (0, k.getSetting)('siteTitle');
    const T = (0, k.getSetting)('wcAssetUrl');
    S('orderStatuses');
    const M = (0, i.createElement)('img', {
        src: `${T}images/marketing/facebook.svg`,
        alt: (0, s.__)('Facebook', 'woocommerce'),
        style: { padding: '4px' },
      }),
      R = (0, i.createElement)(
        v.SVG,
        {
          width: '303',
          height: '303',
          viewBox: '-30 -30 303 303',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/SVG',
        },
        (0, i.createElement)(v.Path, {
          fill: '#E60023',
          d:
            'M121.5,0C54.4,0,0,54.4,0,121.5C0,173,32,217,77.2,234.7c-1.1-9.6-2-24.4,0.4-34.9 c2.2-9.5,14.2-60.4,14.2-60.4s-3.6-7.3-3.6-18c0-16.9,9.8-29.5,22-29.5c10.4,0,15.4,7.8,15.4,17.1c0,10.4-6.6,26-10.1,40.5 c-2.9,12.1,6.1,22,18,22c21.6,0,38.2-22.8,38.2-55.6c0-29.1-20.9-49.4-50.8-49.4C86.3,66.5,66,92.4,66,119.2c0,10.4,4,21.6,9,27.7 c1,1.2,1.1,2.3,0.8,3.5c-0.9,3.8-3,12.1-3.4,13.8c-0.5,2.2-1.8,2.7-4.1,1.6c-15.2-7.1-24.7-29.2-24.7-47.1 c0-38.3,27.8-73.5,80.3-73.5c42.1,0,74.9,30,74.9,70.2c0,41.9-26.4,75.6-63,75.6c-12.3,0-23.9-6.4-27.8-14c0,0-6.1,23.2-7.6,28.9 c-2.7,10.6-10.1,23.8-15.1,31.9c11.4,3.5,23.4,5.4,36,5.4c67.1,0,121.5-54.4,121.5-121.5C243,54.4,188.6,0,121.5,0z',
        }),
      ),
      O = (0, i.createElement)('img', {
        src: `${T}images/marketing/google.svg`,
        alt: (0, s.__)('Google', 'woocommerce'),
        style: { padding: '4px' },
      }),
      L = (0, i.createElement)(
        v.SVG,
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '100',
          height: '100',
          viewBox: '0 0 100 100',
        },
        (0, i.createElement)(
          'defs',
          null,
          (0, i.createElement)(
            'clipPath',
            { id: 'b' },
            (0, i.createElement)('rect', { width: '100', height: '100' }),
          ),
        ),
        (0, i.createElement)(
          'g',
          { id: 'a', clipPath: 'url(#b)' },
          (0, i.createElement)('rect', { width: '100', height: '100', fill: '#fff' }),
          (0, i.createElement)(v.Path, {
            d:
              'M100,100H0V0H100V100ZM40.665,75.539a6.446,6.446,0,1,0,6.447,6.447,6.376,6.376,0,0,0-.3-1.843L54.158,72.8A19.808,19.808,0,1,0,69.206,37.48h.015V28.455a6.959,6.959,0,0,0,4.013-6.273v-.211a6.971,6.971,0,0,0-6.952-6.953H66.07a6.97,6.97,0,0,0-6.952,6.953v.211a6.957,6.957,0,0,0,4.013,6.273V37.5a19.745,19.745,0,0,0-9.376,4.126L28.935,22.295a7.919,7.919,0,0,0-4.148-9.145,7.845,7.845,0,0,0-3.5-.817,7.919,7.919,0,1,0,3.938,14.786l24.4,19a19.775,19.775,0,0,0,.3,22.3l-7.426,7.427A6.362,6.362,0,0,0,40.665,75.539Zm25.522-8.321h0l-.023,0a10.164,10.164,0,0,1,.023-20.328H66.2a10.166,10.166,0,0,1-.012,20.333Z',
            fill: '#ff7a59',
          }),
        ),
      ),
      A = (0, i.createElement)(
        v.SVG,
        {
          width: '36',
          height: '36',
          viewBox: '0 0 36 36',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        (0, i.createElement)('rect', { width: '36', height: '36', rx: '3', fill: '#FFE071' }),
        (0, i.createElement)(v.Path, {
          d:
            'M24.0534 17.2863C24.2392 17.2638 24.4176 17.2625 24.5813 17.2863C24.6764 17.0647 24.6923 16.6823 24.6071 16.2661C24.4808 15.6471 24.3091 15.2728 23.9546 15.331C23.6002 15.3892 23.5873 15.8374 23.7143 16.4564C23.7848 16.8043 23.9117 17.1023 24.0534 17.2863Z',
          fill: 'black',
        }),
        (0, i.createElement)(v.Path, {
          d:
            'M21.0119 17.7757C21.2652 17.8889 21.4209 17.9647 21.4823 17.899C21.5215 17.8576 21.5099 17.7794 21.4491 17.6786C21.3241 17.4702 21.0665 17.2587 20.7937 17.1404C20.2357 16.895 19.5697 16.9764 19.0559 17.3532C18.886 17.4802 18.7254 17.6555 18.7487 17.7625C18.756 17.7969 18.7812 17.8232 18.8413 17.8314C18.9811 17.8476 19.4698 17.5954 20.0321 17.5603C20.4294 17.5353 20.7587 17.6624 21.0119 17.7757Z',
          fill: 'black',
        }),
        (0, i.createElement)(v.Path, {
          d:
            'M20.5024 18.073C20.1725 18.1262 19.9904 18.237 19.8733 18.3409C19.7733 18.4298 19.712 18.5281 19.7126 18.5975C19.7126 18.6307 19.7267 18.6495 19.7378 18.6589C19.7531 18.6726 19.7709 18.6802 19.7923 18.6802C19.8671 18.6802 20.0339 18.6119 20.0339 18.6119C20.4932 18.4442 20.7961 18.4642 21.0966 18.4993C21.2627 18.518 21.3406 18.5287 21.3774 18.4705C21.3884 18.4536 21.4013 18.4179 21.3682 18.3628C21.2903 18.2339 20.9568 18.0179 20.5024 18.073Z',
          fill: 'black',
        }),
        (0, i.createElement)(v.Path, {
          d:
            'M23.0263 19.1626C23.2501 19.2753 23.4972 19.2309 23.5775 19.0644C23.6578 18.8973 23.5413 18.6713 23.3169 18.5587C23.0925 18.446 22.846 18.4904 22.7657 18.6569C22.6859 18.824 22.8025 19.0506 23.0263 19.1626Z',
          fill: 'black',
        }),
        (0, i.createElement)(v.Path, {
          d:
            'M24.4673 17.8777C24.2851 17.8746 24.1343 18.0786 24.13 18.3334C24.1257 18.5881 24.2698 18.7971 24.4519 18.8003C24.634 18.8034 24.7849 18.5994 24.7892 18.3446C24.7935 18.0899 24.6494 17.8809 24.4673 17.8777Z',
          fill: 'black',
        }),
        (0, i.createElement)(v.Path, {
          d:
            'M12.2373 22.4735C12.1919 22.4153 12.1177 22.4335 12.0454 22.4504C11.9951 22.4623 11.9381 22.476 11.8755 22.4748C11.7419 22.4723 11.6284 22.4134 11.5646 22.3139C11.4819 22.1837 11.4868 21.9903 11.5781 21.7682C11.5904 21.7381 11.6051 21.7049 11.6211 21.6686C11.767 21.3344 12.0117 20.7743 11.7369 20.241C11.5303 19.8398 11.1937 19.5895 10.7884 19.5369C10.3996 19.4868 9.99919 19.6339 9.7441 19.9212C9.34124 20.3749 9.27808 20.9921 9.35595 21.2099C9.38477 21.29 9.42892 21.3119 9.46142 21.3163C9.5301 21.3257 9.63127 21.275 9.69505 21.1003C9.69934 21.0878 9.70547 21.0684 9.71344 21.0434C9.74165 20.9514 9.79438 20.7799 9.88084 20.6422C9.98508 20.4763 10.147 20.3618 10.3371 20.3205C10.5308 20.2779 10.7289 20.3161 10.8944 20.4269C11.1765 20.6153 11.285 20.9683 11.1648 21.305C11.1023 21.479 11.0011 21.812 11.0238 22.0855C11.0692 22.6394 11.4028 22.8616 11.7026 22.8854C11.9939 22.8966 12.1981 22.7295 12.2496 22.6075C12.279 22.5361 12.2539 22.4923 12.2373 22.4735Z',
          fill: 'black',
        }),
        (0, i.createElement)(v.Path, {
          d:
            'M29.0624 21.4609C29.0513 21.4209 28.979 21.1511 28.8796 20.8263C28.7803 20.5015 28.6773 20.2724 28.6773 20.2724C29.0759 19.6634 29.0826 19.1189 29.0299 18.8109C28.9735 18.4285 28.8177 18.1031 28.5031 17.7663C28.1892 17.4296 27.5466 17.0847 26.6434 16.8262C26.5403 16.7968 26.1994 16.7011 26.1694 16.6917C26.1669 16.6717 26.1442 15.5513 26.124 15.0706C26.1093 14.7233 26.0798 14.18 25.9149 13.6455C25.7181 12.922 25.3759 12.2886 24.9479 11.8836C26.1283 10.635 26.8647 9.25926 26.8629 8.07947C26.8592 5.81 24.1293 5.1234 20.7642 6.54542C20.7605 6.54667 20.0565 6.85147 20.051 6.8546C20.048 6.85147 18.7621 5.56402 18.7431 5.5465C14.907 2.13103 2.91255 15.7391 6.7474 19.0444L7.58562 19.7692C7.36794 20.3437 7.28271 21.0028 7.35261 21.7107C7.44213 22.6201 7.90202 23.4926 8.64704 24.166C9.35404 24.8057 10.2842 25.2106 11.1868 25.21C12.6793 28.72 16.0886 30.8737 20.0872 30.9951C24.3758 31.1253 27.9758 29.0711 29.4842 25.3815C29.583 25.1224 30.0018 23.9557 30.0018 22.9255C30.0005 21.8903 29.4272 21.4609 29.0624 21.4609ZM11.5161 24.2236C11.3861 24.2461 11.2531 24.2555 11.1188 24.2518C9.82374 24.2161 8.42445 23.0263 8.28526 21.6143C8.13135 20.054 8.91255 18.8535 10.2953 18.5687C10.4608 18.5349 10.6601 18.5149 10.876 18.5268C11.651 18.57 12.7928 19.1777 13.0534 20.9002C13.2845 22.4261 12.9172 23.9801 11.5161 24.2236ZM10.0696 17.6361C9.20872 17.807 8.45021 18.3052 7.98603 18.9931C7.70887 18.7571 7.19195 18.3002 7.10059 18.1218C6.35986 16.686 7.90877 13.8946 8.99104 12.318C11.6657 8.42245 15.8544 5.4739 17.7939 6.00903C18.1091 6.10041 19.1533 7.33591 19.1533 7.33591C19.1533 7.33591 17.2151 8.43372 15.4172 9.96402C12.9951 11.8667 11.1654 14.6338 10.0696 17.6361ZM23.6657 23.6403C23.694 23.6284 23.7136 23.5952 23.7099 23.5627C23.7056 23.5226 23.6706 23.4932 23.6314 23.4976C23.6314 23.4976 21.6024 23.8043 19.6856 23.0876C19.8941 22.3948 20.4496 22.6451 21.2884 22.714C22.8012 22.806 24.1563 22.5807 25.1582 22.2871C26.0265 22.033 27.1664 21.5317 28.0525 20.8182C28.3511 21.4879 28.4565 22.2252 28.4565 22.2252C28.4565 22.2252 28.6877 22.1832 28.8809 22.304C29.0636 22.4186 29.1973 22.657 29.1059 23.2735C28.9195 24.4252 28.44 25.3596 27.6343 26.2196C27.1437 26.7585 26.5477 27.2273 25.8665 27.5684C25.5047 27.7624 25.119 27.9301 24.7118 28.0659C21.6735 29.0786 18.5628 27.9652 17.5603 25.5737C17.4799 25.394 17.4125 25.2056 17.3592 25.0091C16.9318 23.4331 17.2948 21.5423 18.4285 20.3525V20.3519C18.4984 20.2761 18.5696 20.1866 18.5696 20.0746C18.5696 19.9807 18.5113 19.8818 18.4604 19.8111C18.0637 19.224 16.6896 18.2232 16.9655 16.2861C17.1635 14.8948 18.3556 13.9146 19.4673 13.9728C19.5611 13.9778 19.6549 13.9835 19.7487 13.9891C20.2307 14.0179 20.6507 14.0811 21.0468 14.098C21.7103 14.1274 22.3069 14.0285 23.0139 13.4277C23.2525 13.2249 23.4438 13.049 23.7669 12.9933C23.8006 12.9877 23.8853 12.9564 24.0545 12.9645C24.2268 12.9739 24.3911 13.0221 24.5389 13.1222C25.1055 13.5072 25.1858 14.4391 25.2153 15.1213C25.2318 15.5106 25.2778 16.4526 25.2937 16.7224C25.3299 17.3407 25.4887 17.4277 25.8113 17.536C25.9922 17.5967 26.1608 17.6424 26.4085 17.7131C27.1584 17.9278 27.603 18.1462 27.8838 18.426C28.0512 18.6013 28.1285 18.7872 28.153 18.9643C28.2413 19.6227 27.6521 20.4364 26.0921 21.1755C24.3868 21.9836 22.3174 22.1882 20.888 22.0255C20.7783 22.013 20.3883 21.9679 20.3871 21.9679C19.2435 21.8108 18.591 23.3192 19.2778 24.3525C19.7199 25.0185 20.9248 25.4522 22.1303 25.4522C24.8939 25.4529 27.0186 24.248 27.8084 23.2078C27.8323 23.1765 27.8342 23.1734 27.8716 23.1158C27.9102 23.0557 27.8783 23.0232 27.8299 23.057C27.1842 23.5076 24.3169 25.2976 21.2492 24.7594C21.2492 24.7594 20.8764 24.6968 20.5361 24.5616C20.2656 24.4546 19.6997 24.1886 19.631 23.5958C22.107 24.3788 23.6657 23.6403 23.6657 23.6403ZM19.7444 23.1677C19.7444 23.1684 19.7444 23.1684 19.7444 23.1677C19.745 23.169 19.745 23.169 19.745 23.1696C19.745 23.169 19.7444 23.1684 19.7444 23.1677ZM15.0088 12.3023C15.9599 11.1807 17.1304 10.2056 18.1784 9.65858C18.2145 9.6398 18.2532 9.67986 18.2336 9.71616C18.1502 9.87013 17.9901 10.1993 17.9392 10.4497C17.9313 10.4885 17.9729 10.5179 18.0048 10.4954C18.6573 10.0416 19.7916 9.55531 20.7875 9.49272C20.8304 9.49022 20.8506 9.54592 20.8169 9.57283C20.6654 9.69113 20.4999 9.85511 20.3791 10.021C20.3582 10.0491 20.3779 10.0898 20.4122 10.0898C21.1112 10.0948 22.0966 10.3446 22.7386 10.712C22.7821 10.737 22.7509 10.8227 22.7024 10.8115C21.7305 10.5843 20.1406 10.4115 18.488 10.8227C17.0133 11.1901 15.8875 11.7572 15.0665 12.3668C15.0254 12.3981 14.9757 12.3418 15.0088 12.3023Z',
          fill: 'black',
        }),
      ),
      V = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-30 -30 212.02 216.4' },
        (0, i.createElement)(v.Path, {
          fill: '#fe5301',
          d:
            'M37.71,89.1c3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V35.7l17,45.1a12.68,12.68,0,0,0,3.7,5.4c1.6,1.3,4,2,7.2,2a12.54,12.54,0,0,0,5.9-1.4,8.41,8.41,0,0,0,3.9-5l18.1-50V81a8.53,8.53,0,0,0,2.1,6.1c1.4,1.4,3.7,2.2,6.9,2.2,3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V8.7a7.48,7.48,0,0,0-3.3-6.6c-2.1-1.4-5-2.1-8.6-2.1a19.3,19.3,0,0,0-9.4,2,11.63,11.63,0,0,0-5.1,6.8L74.91,67.1,54.41,8.4a12.4,12.4,0,0,0-4.5-6.2c-2.1-1.5-5-2.2-8.8-2.2a16.51,16.51,0,0,0-8.9,2.1c-2.3,1.5-3.5,3.9-3.5,7.2V80.8c0,2.8.7,4.8,2,6.2C32.21,88.4,34.41,89.1,37.71,89.1Z',
        }),
        (0, i.createElement)(v.Path, {
          fill: '#fe5301',
          d:
            'M149,116.6l-2.4-1.9a7.4,7.4,0,0,0-9.4.3,19.65,19.65,0,0,1-12.5,4.6h-21.4A37.08,37.08,0,0,0,77,130.5l-1.1,1.2-1.1-1.1a37.25,37.25,0,0,0-26.3-10.9H27a19.59,19.59,0,0,1-12.4-4.6,7.28,7.28,0,0,0-9.4-.3l-2.4,1.9A7.43,7.43,0,0,0,0,122.2a7.14,7.14,0,0,0,2.4,5.7A37.28,37.28,0,0,0,27,137.4h21.6a19.59,19.59,0,0,1,18.9,14.4v.2c.1.7,1.2,4.4,8.5,4.4s8.4-3.7,8.5-4.4v-.2a19.59,19.59,0,0,1,18.9-14.4H125a37.28,37.28,0,0,0,24.6-9.5,7.42,7.42,0,0,0,2.4-5.7A7.86,7.86,0,0,0,149,116.6Z',
        }),
      ),
      I = (0, i.createElement)('img', {
        src: `${T}images/marketing/klaviyo.png`,
        alt: (0, s.__)('Klaviyo', 'woocommerce'),
      }),
      G = (0, i.createElement)('img', {
        src: `${T}images/marketing/creative-mail-by-constant-contact.png`,
        alt: (0, s.__)('Creative Mail by Constant Contact', 'woocommerce'),
      }),
      D = (0, i.createElement)('img', {
        src: `${T}images/marketing/jetpack-crm.svg`,
        alt: (0, s.__)('Jetpack CRM', 'woocommerce'),
      }),
      H = (0, i.createElement)('img', {
        src: `${T}images/marketing/salesforce.jpg`,
        alt: (0, s.__)('Salesforce', 'woocommerce'),
      }),
      $ = (0, i.createElement)('img', {
        src: `${T}images/marketing/tiktok.jpg`,
        alt: (0, s.__)('TikTok', 'woocommerce'),
      }),
      Z = (0, i.createElement)('img', {
        src: `${T}images/marketing/zapier.png`,
        alt: (0, s.__)('Zapier', 'woocommerce'),
      }),
      j = (0, i.createElement)('img', {
        src: `${T}images/marketing/vimeo.png`,
        alt: (0, s.__)('Vimeo', 'woocommerce'),
      }),
      U = (0, i.createElement)('img', {
        src: `${T}images/marketing/trustpilot.png`,
        alt: (0, s.__)('Trustpilot', 'woocommerce'),
      }),
      B = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, i.createElement)(v.Path, {
          d:
            'M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z',
        }),
      ),
      z = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg' },
        (0, i.createElement)(v.Path, {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M14.75 9C16.1307 9 17.25 7.88071 17.25 6.5C17.25 5.11929 16.1307 4 14.75 4C13.3693 4 12.25 5.11929 12.25 6.5C12.25 5.11929 11.1307 4 9.75 4C8.36929 4 7.25 5.11929 7.25 6.5C7.25 7.88071 8.36929 9 9.75 9H4V20L20 20V9L14.75 9ZM14.75 7.5C15.3023 7.5 15.75 7.05228 15.75 6.5C15.75 5.94772 15.3023 5.5 14.75 5.5C14.1977 5.5 13.75 5.94772 13.75 6.5V7.5H14.75ZM18.5 18.5V10.5H13V18.5H18.5ZM11.5 18.5H5.5L5.5 10.5H11.5L11.5 18.5ZM8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5H10.75V6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5Z',
        }),
      ),
      F = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, i.createElement)(v.Path, {
          d:
            'M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z',
        }),
      ),
      W = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, i.createElement)(v.Path, {
          d:
            'M17.5 9a2 2 0 11-4 0 2 2 0 014 0zm-4.25 8v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM8.5 11a2 2 0 100-4 2 2 0 000 4z',
        }),
      ),
      q = (0, i.createElement)(
        v.SVG,
        { xmlns: 'http://www.w3.org/2000/svg' },
        (0, i.createElement)(v.Path, {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M15 16.5H9V15h6v1.5zM15.0052 5.99481c-1.6597-1.65973-4.3507-1.65973-6.0104 0-1.65973 1.65973-1.65973 4.35069 0 6.01039.29289.2929.29289.7678 0 1.0607-.2929.2929-.76777.2929-1.06066 0-2.24552-2.2455-2.24552-5.88624 0-8.13175 2.24556-2.24551 5.88616-2.24551 8.13176 0 2.2455 2.24551 2.2455 5.88625 0 8.13175-.2929.2929-.7678.2929-1.0607 0-.2929-.2929-.2929-.7678 0-1.0607 1.6597-1.6597 1.6597-4.35066 0-6.01039zM14 19.5h-4V18h4v1.5z',
        }),
      );
    class K extends i.Component {
      render() {
        const t = (0, w.camelCase)(this.props.product);
        let n = C;
        return (
          t in e && (n = e[t]),
          (0, i.createElement)(
            'div',
            { className: u()(this.props.className, 'woocommerce-admin-marketing-product-icon') },
            (0, i.createElement)(f, { icon: n, size: 36 }),
          )
        );
      }
    }
    K.propTypes = { product: h().string.isRequired, className: h().string };
    const X = K,
      J = window.wc.components,
      Q = window.React;
    var Y = n.n(Q);
    function ee(e) {
      return e.startsWith('{{/')
        ? { type: 'componentClose', value: e.replace(/\W/g, '') }
        : e.endsWith('/}}')
        ? { type: 'componentSelfClosing', value: e.replace(/\W/g, '') }
        : e.startsWith('{{')
        ? { type: 'componentOpen', value: e.replace(/\W/g, '') }
        : { type: 'string', value: e };
    }
    function te(e, t) {
      let n,
        r,
        o = [];
      for (let a = 0; a < e.length; a++) {
        const i = e[a];
        if ('string' !== i.type) {
          if (void 0 === t[i.value])
            throw new Error(`Invalid interpolation, missing component node: \`${i.value}\``);
          if ('object' != typeof t[i.value])
            throw new Error(
              `Invalid interpolation, component node must be a ReactElement or null: \`${i.value}\``,
            );
          if ('componentClose' === i.type)
            throw new Error(`Missing opening component token: \`${i.value}\``);
          if ('componentOpen' === i.type) {
            (n = t[i.value]), (r = a);
            break;
          }
          o.push(t[i.value]);
        } else o.push(i.value);
      }
      if (n) {
        const a = (function(e, t) {
            const n = t[e];
            let r = 0;
            for (let o = e + 1; o < t.length; o++) {
              const e = t[o];
              if (e.value === n.value) {
                if ('componentOpen' === e.type) {
                  r++;
                  continue;
                }
                if ('componentClose' === e.type) {
                  if (0 === r) return o;
                  r--;
                }
              }
            }
            throw new Error('Missing closing component token `' + n.value + '`');
          })(r, e),
          i = te(e.slice(r + 1, a), t),
          s = (0, Q.cloneElement)(n, {}, i);
        if ((o.push(s), a < e.length - 1)) {
          const n = te(e.slice(a + 1), t);
          o = o.concat(n);
        }
      }
      return (
        (o = o.filter(Boolean)),
        0 === o.length ? null : 1 === o.length ? o[0] : (0, Q.createElement)(Q.Fragment, null, ...o)
      );
    }
    function ne(e) {
      const { mixedString: t, components: n, throwErrors: r } = e;
      if (!n) return t;
      if ('object' != typeof n) {
        if (r)
          throw new Error(
            `Interpolation Error: unable to process \`${t}\` because components is not an object`,
          );
        return t;
      }
      const o = (function(e) {
        return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(ee);
      })(t);
      try {
        return te(o, n);
      } catch (e) {
        if (r)
          throw new Error(
            `Interpolation Error: unable to process \`${t}\` because of error \`${e.message}\``,
          );
        return t;
      }
    }
    const re = () =>
        ne({
          mixedString: (0, s.__)(
            'Read {{link}}the WooCommerce blog{{/link}} for more tips on marketing your store',
            'woocommerce',
          ),
          components: {
            link: (0, i.createElement)(J.Link, {
              type: 'external',
              href: 'https://woocommerce.com/blog/marketing/coupons/?utm_medium=product',
              target: '_blank',
            }),
          },
        }),
      oe = window.wp.components,
      ae = window.wp.url,
      ie = ({ title: e, description: t, url: n, product: r, category: o }) => {
        const a = 'woocommerce-marketing-recommended-extensions-item',
          s = ((e, t = {}) => {
            const { pathname: n, search: r } = window.location,
              o = (0, k.getSetting)('connectNonce', '');
            return (
              (t = {
                'wccom-site': (0, k.getSetting)('siteUrl'),
                'wccom-back': n + r,
                'wccom-woo-version': (0, k.getSetting)('wcVersion'),
                'wccom-connect-nonce': o,
                ...t,
              }),
              (0, ae.addQueryArgs)(e, t)
            );
          })(n);
        return (
          'coupons' === o && 'automatewoo' === r && (r = 'automatewoo-alt'),
          (0, i.createElement)(
            'a',
            {
              href: s,
              className: a,
              onClick: () => {
                (0, E.recordEvent)('marketing_recommended_extension', {
                  name: e,
                  source: S('allowMarketplaceSuggestions', !1)
                    ? 'woocommerce.com'
                    : 'plugin-woocommerce',
                });
              },
            },
            (0, i.createElement)(X, { product: r }),
            (0, i.createElement)(
              'div',
              { className: `${a}__text` },
              (0, i.createElement)('h4', null, e),
              (0, i.createElement)('p', null, t),
            ),
          )
        );
      };
    ie.propTypes = {
      title: h().string.isRequired,
      description: h().string.isRequired,
      url: h().string.isRequired,
      product: h().string.isRequired,
      category: h().string.isRequired,
    };
    const se = ie,
      ce = () => {
        const e = 'is-loading woocommerce-marketing-recommended-extensions-item';
        return (0, i.createElement)(
          'div',
          { className: e, 'aria-hidden': 'true' },
          (0, i.createElement)('div', {
            className: 'woocommerce-admin-marketing-product-icon is-placeholder',
          }),
          (0, i.createElement)(
            'div',
            { className: `${e}__text` },
            (0, i.createElement)('h4', { className: 'is-placeholder', 'aria-hidden': 'true' }),
            (0, i.createElement)(
              'p',
              null,
              (0, i.createElement)('span', { className: 'is-placeholder' }),
              (0, i.createElement)('span', { className: 'is-placeholder' }),
              (0, i.createElement)('span', { className: 'is-placeholder' }),
            ),
          ),
        );
      },
      le = 'wc/marketing',
      me = '/wc-admin/marketing',
      de = window.wc.experimental,
      ue = e => {
        const { title: t, description: n, children: r, className: o } = e;
        return (0, i.createElement)(
          oe.Card,
          { className: u()(o, 'woocommerce-admin-marketing-card') },
          (0, i.createElement)(
            oe.CardHeader,
            null,
            (0, i.createElement)(
              'div',
              null,
              (0, i.createElement)(
                de.Text,
                { variant: 'title.small', as: 'p', size: '20', lineHeight: '28px' },
                t,
              ),
              (0, i.createElement)(
                de.Text,
                {
                  variant: 'subtitle.small',
                  as: 'p',
                  className: 'woocommerce-admin-marketing-card-subtitle',
                  size: '14',
                  lineHeight: '20px',
                },
                n,
              ),
            ),
          ),
          (0, i.createElement)(oe.CardBody, null, r),
        );
      };
    ue.propTypes = {
      title: h().string,
      description: h().string,
      className: h().string,
      children: h().node,
    };
    const pe = ue,
      ge = ({ extensions: e, isLoading: t, title: n, description: r, category: o }) => {
        if (0 === e.length && !t) return null;
        const a = o ? `woocommerce-marketing-recommended-extensions-card__category-${o}` : '';
        return (0, i.createElement)(
          pe,
          {
            title: n,
            description: r,
            className: u()('woocommerce-marketing-recommended-extensions-card', a),
          },
          t
            ? (0, i.createElement)(
                'div',
                {
                  className: u()(
                    'woocommerce-marketing-recommended-extensions-card__items',
                    'woocommerce-marketing-recommended-extensions-card__items--count-5',
                  ),
                },
                [...Array(5).keys()].map(e => (0, i.createElement)(ce, { key: e })),
              )
            : (0, i.createElement)(
                'div',
                {
                  className: u()(
                    'woocommerce-marketing-recommended-extensions-card__items',
                    `woocommerce-marketing-recommended-extensions-card__items--count-${e.length}`,
                  ),
                },
                e.map(e => (0, i.createElement)(se, l({ key: e.product, category: o }, e))),
              ),
        );
      };
    (ge.propTypes = {
      extensions: h().arrayOf(h().object).isRequired,
      isLoading: h().bool.isRequired,
      title: h().string,
      description: h().string,
      category: h().string,
    }),
      (ge.defaultProps = {
        title: (0, s.__)('Recommended extensions', 'woocommerce'),
        description: (0, s.__)(
          'Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.',
          'woocommerce',
        ),
      });
    const he = (0, m.compose)(
      (0, p.withSelect)((e, t) => {
        const { getRecommendedPlugins: n, isResolving: r } = e(le);
        return { extensions: n(t.category), isLoading: r('getRecommendedPlugins', [t.category]) };
      }),
      (0, p.withDispatch)(e => {
        const { createNotice: t } = e('core/notices');
        return { createNotice: t };
      }),
    )(ge);
    function Ee(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    }
    function fe() {
      return (
        (fe = Object.assign
          ? Object.assign.bind()
          : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        fe.apply(this, arguments)
      );
    }
    function we(e, t) {
      return (
        (we = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function(e, t) {
              return (e.__proto__ = t), e;
            }),
        we(e, t)
      );
    }
    function ve(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), we(e, t);
    }
    const Ce = Y().createContext(null);
    function ye(e, t) {
      var n = Object.create(null);
      return (
        e &&
          Q.Children.map(e, function(e) {
            return e;
          }).forEach(function(e) {
            n[e.key] = (function(e) {
              return t && (0, Q.isValidElement)(e) ? t(e) : e;
            })(e);
          }),
        n
      );
    }
    function _e(e, t, n) {
      return null != n[t] ? n[t] : e.props[t];
    }
    function xe(e, t, n) {
      var r = ye(e.children),
        o = (function(e, t) {
          function n(n) {
            return n in t ? t[n] : e[n];
          }
          (e = e || {}), (t = t || {});
          var r,
            o = Object.create(null),
            a = [];
          for (var i in e) i in t ? a.length && ((o[i] = a), (a = [])) : a.push(i);
          var s = {};
          for (var c in t) {
            if (o[c])
              for (r = 0; r < o[c].length; r++) {
                var l = o[c][r];
                s[o[c][r]] = n(l);
              }
            s[c] = n(c);
          }
          for (r = 0; r < a.length; r++) s[a[r]] = n(a[r]);
          return s;
        })(t, r);
      return (
        Object.keys(o).forEach(function(a) {
          var i = o[a];
          if ((0, Q.isValidElement)(i)) {
            var s = a in t,
              c = a in r,
              l = t[a],
              m = (0, Q.isValidElement)(l) && !l.props.in;
            !c || (s && !m)
              ? c || !s || m
                ? c &&
                  s &&
                  (0, Q.isValidElement)(l) &&
                  (o[a] = (0, Q.cloneElement)(i, {
                    onExited: n.bind(null, i),
                    in: l.props.in,
                    exit: _e(i, 'exit', e),
                    enter: _e(i, 'enter', e),
                  }))
                : (o[a] = (0, Q.cloneElement)(i, { in: !1 }))
              : (o[a] = (0, Q.cloneElement)(i, {
                  onExited: n.bind(null, i),
                  in: !0,
                  exit: _e(i, 'exit', e),
                  enter: _e(i, 'enter', e),
                }));
          }
        }),
        o
      );
    }
    var ke =
        Object.values ||
        function(e) {
          return Object.keys(e).map(function(t) {
            return e[t];
          });
        },
      be = (function(e) {
        function t(t, n) {
          var r,
            o = (r = e.call(this, t, n) || this).handleExited.bind(
              (function(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(r),
            );
          return (
            (r.state = { contextValue: { isMounting: !0 }, handleExited: o, firstRender: !0 }), r
          );
        }
        ve(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
          }),
          (n.componentWillUnmount = function() {
            this.mounted = !1;
          }),
          (t.getDerivedStateFromProps = function(e, t) {
            var n,
              r,
              o = t.children,
              a = t.handleExited;
            return {
              children: t.firstRender
                ? ((n = e),
                  (r = a),
                  ye(n.children, function(e) {
                    return (0,
                    Q.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: _e(e, 'appear', n), enter: _e(e, 'enter', n), exit: _e(e, 'exit', n) });
                  }))
                : xe(e, o, a),
              firstRender: !1,
            };
          }),
          (n.handleExited = function(e, t) {
            var n = ye(this.props.children);
            e.key in n ||
              (e.props.onExited && e.props.onExited(t),
              this.mounted &&
                this.setState(function(t) {
                  var n = fe({}, t.children);
                  return delete n[e.key], { children: n };
                }));
          }),
          (n.render = function() {
            var e = this.props,
              t = e.component,
              n = e.childFactory,
              r = Ee(e, ['component', 'childFactory']),
              o = this.state.contextValue,
              a = ke(this.state.children).map(n);
            return (
              delete r.appear,
              delete r.enter,
              delete r.exit,
              null === t
                ? Y().createElement(Ce.Provider, { value: o }, a)
                : Y().createElement(Ce.Provider, { value: o }, Y().createElement(t, r, a))
            );
          }),
          t
        );
      })(Y().Component);
    (be.propTypes = {}),
      (be.defaultProps = {
        component: 'div',
        childFactory: function(e) {
          return e;
        },
      });
    const Pe = be;
    function Ne(e, t) {
      return e
        .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
    }
    const Se = window.ReactDOM;
    var Te = n.n(Se);
    var Me = function(e) {
        return e.scrollTop;
      },
      Re = 'unmounted',
      Oe = 'exited',
      Le = 'entering',
      Ae = 'entered',
      Ve = 'exiting',
      Ie = (function(e) {
        function t(t, n) {
          var r;
          r = e.call(this, t, n) || this;
          var o,
            a = n && !n.isMounting ? t.enter : t.appear;
          return (
            (r.appearStatus = null),
            t.in
              ? a
                ? ((o = Oe), (r.appearStatus = Le))
                : (o = Ae)
              : (o = t.unmountOnExit || t.mountOnEnter ? Re : Oe),
            (r.state = { status: o }),
            (r.nextCallback = null),
            r
          );
        }
        ve(t, e),
          (t.getDerivedStateFromProps = function(e, t) {
            return e.in && t.status === Re ? { status: Oe } : null;
          });
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
          }),
          (n.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
              var n = this.state.status;
              this.props.in ? n !== Le && n !== Ae && (t = Le) : (n !== Le && n !== Ae) || (t = Ve);
            }
            this.updateStatus(!1, t);
          }),
          (n.componentWillUnmount = function() {
            this.cancelNextCallback();
          }),
          (n.getTimeouts = function() {
            var e,
              t,
              n,
              r = this.props.timeout;
            return (
              (e = t = n = r),
              null != r &&
                'number' != typeof r &&
                ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
              { exit: e, enter: t, appear: n }
            );
          }),
          (n.updateStatus = function(e, t) {
            if ((void 0 === e && (e = !1), null !== t))
              if ((this.cancelNextCallback(), t === Le)) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var n = this.props.nodeRef ? this.props.nodeRef.current : Te().findDOMNode(this);
                  n && Me(n);
                }
                this.performEnter(e);
              } else this.performExit();
            else
              this.props.unmountOnExit && this.state.status === Oe && this.setState({ status: Re });
          }),
          (n.performEnter = function(e) {
            var t = this,
              n = this.props.enter,
              r = this.context ? this.context.isMounting : e,
              o = this.props.nodeRef ? [r] : [Te().findDOMNode(this), r],
              a = o[0],
              i = o[1],
              s = this.getTimeouts(),
              c = r ? s.appear : s.enter;
            e || n
              ? (this.props.onEnter(a, i),
                this.safeSetState({ status: Le }, function() {
                  t.props.onEntering(a, i),
                    t.onTransitionEnd(c, function() {
                      t.safeSetState({ status: Ae }, function() {
                        t.props.onEntered(a, i);
                      });
                    });
                }))
              : this.safeSetState({ status: Ae }, function() {
                  t.props.onEntered(a);
                });
          }),
          (n.performExit = function() {
            var e = this,
              t = this.props.exit,
              n = this.getTimeouts(),
              r = this.props.nodeRef ? void 0 : Te().findDOMNode(this);
            t
              ? (this.props.onExit(r),
                this.safeSetState({ status: Ve }, function() {
                  e.props.onExiting(r),
                    e.onTransitionEnd(n.exit, function() {
                      e.safeSetState({ status: Oe }, function() {
                        e.props.onExited(r);
                      });
                    });
                }))
              : this.safeSetState({ status: Oe }, function() {
                  e.props.onExited(r);
                });
          }),
          (n.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (n.safeSetState = function(e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (n.setNextCallback = function(e) {
            var t = this,
              n = !0;
            return (
              (this.nextCallback = function(r) {
                n && ((n = !1), (t.nextCallback = null), e(r));
              }),
              (this.nextCallback.cancel = function() {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            var n = this.props.nodeRef ? this.props.nodeRef.current : Te().findDOMNode(this),
              r = null == e && !this.props.addEndListener;
            if (n && !r) {
              if (this.props.addEndListener) {
                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                  a = o[0],
                  i = o[1];
                this.props.addEndListener(a, i);
              }
              null != e && setTimeout(this.nextCallback, e);
            } else setTimeout(this.nextCallback, 0);
          }),
          (n.render = function() {
            var e = this.state.status;
            if (e === Re) return null;
            var t = this.props,
              n = t.children,
              r =
                (t.in,
                t.mountOnEnter,
                t.unmountOnExit,
                t.appear,
                t.enter,
                t.exit,
                t.timeout,
                t.addEndListener,
                t.onEnter,
                t.onEntering,
                t.onEntered,
                t.onExit,
                t.onExiting,
                t.onExited,
                t.nodeRef,
                Ee(t, [
                  'children',
                  'in',
                  'mountOnEnter',
                  'unmountOnExit',
                  'appear',
                  'enter',
                  'exit',
                  'timeout',
                  'addEndListener',
                  'onEnter',
                  'onEntering',
                  'onEntered',
                  'onExit',
                  'onExiting',
                  'onExited',
                  'nodeRef',
                ]));
            return Y().createElement(
              Ce.Provider,
              { value: null },
              'function' == typeof n ? n(e, r) : Y().cloneElement(Y().Children.only(n), r),
            );
          }),
          t
        );
      })(Y().Component);
    function Ge() {}
    (Ie.contextType = Ce),
      (Ie.propTypes = {}),
      (Ie.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: Ge,
        onEntering: Ge,
        onEntered: Ge,
        onExit: Ge,
        onExiting: Ge,
        onExited: Ge,
      }),
      (Ie.UNMOUNTED = Re),
      (Ie.EXITED = Oe),
      (Ie.ENTERING = Le),
      (Ie.ENTERED = Ae),
      (Ie.EXITING = Ve);
    const De = Ie;
    var He = function(e, t) {
        return (
          e &&
          t &&
          t.split(' ').forEach(function(t) {
            return (
              (r = t),
              void ((n = e).classList
                ? n.classList.remove(r)
                : 'string' == typeof n.className
                ? (n.className = Ne(n.className, r))
                : n.setAttribute('class', Ne((n.className && n.className.baseVal) || '', r)))
            );
            var n, r;
          })
        );
      },
      $e = (function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
              appear: {},
              enter: {},
              exit: {},
            }),
            (t.onEnter = function(e, n) {
              var r = t.resolveArguments(e, n),
                o = r[0],
                a = r[1];
              t.removeClasses(o, 'exit'),
                t.addClass(o, a ? 'appear' : 'enter', 'base'),
                t.props.onEnter && t.props.onEnter(e, n);
            }),
            (t.onEntering = function(e, n) {
              var r = t.resolveArguments(e, n),
                o = r[0],
                a = r[1] ? 'appear' : 'enter';
              t.addClass(o, a, 'active'), t.props.onEntering && t.props.onEntering(e, n);
            }),
            (t.onEntered = function(e, n) {
              var r = t.resolveArguments(e, n),
                o = r[0],
                a = r[1] ? 'appear' : 'enter';
              t.removeClasses(o, a),
                t.addClass(o, a, 'done'),
                t.props.onEntered && t.props.onEntered(e, n);
            }),
            (t.onExit = function(e) {
              var n = t.resolveArguments(e)[0];
              t.removeClasses(n, 'appear'),
                t.removeClasses(n, 'enter'),
                t.addClass(n, 'exit', 'base'),
                t.props.onExit && t.props.onExit(e);
            }),
            (t.onExiting = function(e) {
              var n = t.resolveArguments(e)[0];
              t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
            }),
            (t.onExited = function(e) {
              var n = t.resolveArguments(e)[0];
              t.removeClasses(n, 'exit'),
                t.addClass(n, 'exit', 'done'),
                t.props.onExited && t.props.onExited(e);
            }),
            (t.resolveArguments = function(e, n) {
              return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
            }),
            (t.getClassNames = function(e) {
              var n = t.props.classNames,
                r = 'string' == typeof n,
                o = r ? (r && n ? n + '-' : '') + e : n[e];
              return {
                baseClassName: o,
                activeClassName: r ? o + '-active' : n[e + 'Active'],
                doneClassName: r ? o + '-done' : n[e + 'Done'],
              };
            }),
            t
          );
        }
        ve(t, e);
        var n = t.prototype;
        return (
          (n.addClass = function(e, t, n) {
            var r = this.getClassNames(t)[n + 'ClassName'],
              o = this.getClassNames('enter').doneClassName;
            'appear' === t && 'done' === n && o && (r += ' ' + o),
              'active' === n && e && Me(e),
              r &&
                ((this.appliedClasses[t][n] = r),
                (function(e, t) {
                  e &&
                    t &&
                    t.split(' ').forEach(function(t) {
                      return (
                        (r = t),
                        void ((n = e).classList
                          ? n.classList.add(r)
                          : (function(e, t) {
                              return e.classList
                                ? !!t && e.classList.contains(t)
                                : -1 !==
                                    (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                                      ' ' + t + ' ',
                                    );
                            })(n, r) ||
                            ('string' == typeof n.className
                              ? (n.className = n.className + ' ' + r)
                              : n.setAttribute(
                                  'class',
                                  ((n.className && n.className.baseVal) || '') + ' ' + r,
                                )))
                      );
                      var n, r;
                    });
                })(e, r));
          }),
          (n.removeClasses = function(e, t) {
            var n = this.appliedClasses[t],
              r = n.base,
              o = n.active,
              a = n.done;
            (this.appliedClasses[t] = {}), r && He(e, r), o && He(e, o), a && He(e, a);
          }),
          (n.render = function() {
            var e = this.props,
              t = (e.classNames, Ee(e, ['classNames']));
            return Y().createElement(
              De,
              fe({}, t, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited,
              }),
            );
          }),
          t
        );
      })(Y().Component);
    ($e.defaultProps = { classNames: '' }), ($e.propTypes = {});
    const Ze = $e,
      je = ({ children: e, animationKey: t, animate: n }) => {
        const [r, o] = (0, i.useState)(null),
          a = (0, i.useRef)(),
          s = u()('woocommerce-marketing-slider', n && `animate-${n}`),
          c = {};
        r && (c.height = r);
        const l = (0, w.debounce)(() => {
          const e = a.current.querySelector('.woocommerce-marketing-slider__slide');
          o(e.clientHeight);
        }, 50);
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener('resize', l),
              () => {
                window.removeEventListener('resize', l);
              }
            ),
            [],
          ),
          (0, i.createElement)(
            'div',
            { className: s, ref: a, style: c },
            (0, i.createElement)(
              Pe,
              null,
              (0, i.createElement)(
                Ze,
                {
                  timeout: 320,
                  classNames: 'slide',
                  key: t,
                  onEnter: () => {
                    const e = a.current.querySelector('.slide-enter');
                    o(e.clientHeight);
                  },
                },
                (0, i.createElement)(
                  'div',
                  { className: 'woocommerce-marketing-slider__slide' },
                  e,
                ),
              ),
            ),
          )
        );
      };
    je.propTypes = {
      animationKey: h().any.isRequired,
      animate: h().oneOf([null, 'left', 'right']),
    };
    const Ue = je,
      Be = e => {
        const t = 'woocommerce-marketing-knowledgebase-card__post';
        return (0, i.createElement)(
          'div',
          { className: `is-loading ${t}`, key: e, 'aria-hidden': 'true' },
          (0, i.createElement)('div', { className: `${t}-img is-placeholder` }),
          (0, i.createElement)(
            'div',
            { className: `${t}-text` },
            (0, i.createElement)('h3', { className: 'is-placeholder', 'aria-hidden': 'true' }),
            (0, i.createElement)('p', { className: `${t}-meta is-placeholder` }),
          ),
        );
      },
      ze = ({ posts: e, isLoading: t, error: n, title: r, description: o, category: a }) => {
        const [c, l] = (0, i.useState)(1),
          [m, d] = (0, i.useState)(null),
          p = a ? `woocommerce-marketing-knowledgebase-card__category-${a}` : '';
        return (0, i.createElement)(
          pe,
          {
            title: r,
            description: o,
            className: u()('woocommerce-marketing-knowledgebase-card', p),
          },
          t
            ? (0, i.createElement)(
                'div',
                { className: 'woocommerce-marketing-knowledgebase-card__posts' },
                (0, i.createElement)(
                  'div',
                  { className: 'woocommerce-marketing-knowledgebase-card__page' },
                  (0, i.createElement)(Be, null),
                  (0, i.createElement)(Be, null),
                ),
              )
            : n
            ? (() => {
                const e = (0, s.__)("Oops, our posts aren't loading right now", 'woocommerce');
                return (0, i.createElement)(J.EmptyContent, {
                  title: e,
                  message: (0, i.createElement)(re, null),
                  illustration: '',
                  actionLabel: '',
                });
              })()
            : 0 === e.length
            ? (() => {
                const e = (0, s.__)('No posts yet', 'woocommerce');
                return (0, i.createElement)(J.EmptyContent, {
                  title: e,
                  message: (0, i.createElement)(re, null),
                  illustration: '',
                  actionLabel: '',
                });
              })()
            : (0, i.createElement)(
                'div',
                { className: 'woocommerce-marketing-knowledgebase-card__posts' },
                (0, i.createElement)(
                  Ue,
                  { animationKey: c, animate: m },
                  (() => {
                    const t = e.slice(2 * (c - 1), 2 * (c - 1) + 2),
                      n = u()('woocommerce-marketing-knowledgebase-card__page', {
                        'page-with-single-post': 1 === t.length,
                      }),
                      r = t.map((e, t) =>
                        (0, i.createElement)(
                          'a',
                          {
                            className: 'woocommerce-marketing-knowledgebase-card__post',
                            href: e.link,
                            key: t,
                            onClick: () => {
                              (e => {
                                (0, E.recordEvent)('marketing_knowledge_article', {
                                  title: e.title,
                                });
                              })(e);
                            },
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          },
                          !!e.image &&
                            (0, i.createElement)(
                              'div',
                              { className: 'woocommerce-marketing-knowledgebase-card__post-img' },
                              (0, i.createElement)('img', { src: e.image, alt: '' }),
                            ),
                          (0, i.createElement)(
                            'div',
                            { className: 'woocommerce-marketing-knowledgebase-card__post-text' },
                            (0, i.createElement)('h3', null, e.title),
                            (0, i.createElement)(
                              'p',
                              { className: 'woocommerce-marketing-knowledgebase-card__post-meta' },
                              (0, s.__)('By', 'woocommerce') + ' ',
                              e.author_name,
                              !!e.author_avatar &&
                                (0, i.createElement)('img', {
                                  src: e.author_avatar.replace('s=96', 's=32'),
                                  className: 'woocommerce-gravatar',
                                  alt: '',
                                  width: '16',
                                  height: '16',
                                }),
                            ),
                          ),
                        ),
                      );
                    return (0, i.createElement)('div', { className: n }, r);
                  })(),
                ),
                (0, i.createElement)(J.Pagination, {
                  page: c,
                  perPage: 2,
                  total: e.length,
                  onPageChange: e => {
                    let t;
                    e > c
                      ? ((t = 'left'),
                        (0, E.recordEvent)('marketing_knowledge_carousel', {
                          direction: 'forward',
                          page: e,
                        }))
                      : ((t = 'right'),
                        (0, E.recordEvent)('marketing_knowledge_carousel', {
                          direction: 'back',
                          page: e,
                        })),
                      l(e),
                      d(t);
                  },
                  showPagePicker: !1,
                  showPerPagePicker: !1,
                  showPageArrowsLabel: !1,
                }),
              ),
        );
      };
    (ze.propTypes = {
      posts: h().arrayOf(h().object).isRequired,
      isLoading: h().bool.isRequired,
      title: h().string,
      description: h().string,
      category: h().string,
    }),
      (ze.defaultProps = {
        title: (0, s.__)('WooCommerce knowledge base', 'woocommerce'),
        description: (0, s.__)(
          'Learn the ins and outs of successful marketing from the experts at WooCommerce.',
          'woocommerce',
        ),
      });
    const Fe = (0, m.compose)(
        (0, p.withSelect)((e, t) => {
          const { getBlogPosts: n, getBlogPostsError: r, isResolving: o } = e(le);
          return {
            posts: n(t.category),
            isLoading: o('getBlogPosts', [t.category]),
            error: r(t.category),
          };
        }),
        (0, p.withDispatch)(e => {
          const { createNotice: t } = e('core/notices');
          return { createNotice: t };
        }),
      )(ze),
      We = window.wp.dataControls,
      qe = {
        SET_INSTALLED_PLUGINS: 'SET_INSTALLED_PLUGINS',
        SET_ACTIVATING_PLUGIN: 'SET_ACTIVATING_PLUGIN',
        REMOVE_ACTIVATING_PLUGIN: 'REMOVE_ACTIVATING_PLUGIN',
        SET_RECOMMENDED_PLUGINS: 'SET_RECOMMENDED_PLUGINS',
        INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN: 'INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN',
        SET_BLOG_POSTS: 'SET_BLOG_POSTS',
        SET_ERROR: 'SET_ERROR',
      };
    function Ke(e) {
      return { type: qe.SET_INSTALLED_PLUGINS, plugins: e };
    }
    function Xe(e) {
      return { type: qe.SET_ACTIVATING_PLUGIN, pluginSlug: e };
    }
    function Je(e) {
      return { type: qe.REMOVE_ACTIVATING_PLUGIN, pluginSlug: e };
    }
    function Qe(e, t) {
      return { type: qe.SET_RECOMMENDED_PLUGINS, data: { plugins: e, category: t } };
    }
    function Ye(e, t) {
      return { type: qe.SET_BLOG_POSTS, data: { posts: e, category: t } };
    }
    function et(e, t) {
      const { createNotice: n } = (0, p.dispatch)('core/notices');
      n('error', t), console.log(e);
    }
    function tt(e, t) {
      return { type: qe.SET_ERROR, category: e, error: t };
    }
    function* nt(e) {
      try {
        const t = yield (0, We.apiFetch)({ path: `${me}/overview/installed-plugins` });
        if (!t) throw new Error();
        yield Ke(t), yield Je(e);
      } catch (e) {
        yield et(e, (0, s.__)('There was an error loading installed extensions.', 'woocommerce'));
      }
    }
    function* rt(e) {
      const { createNotice: t } = (0, p.dispatch)('core/notices');
      yield Xe(e);
      try {
        if (
          !(yield (0, We.apiFetch)({
            path: me + '/overview/activate-plugin',
            method: 'POST',
            data: { plugin: e },
          }))
        )
          throw new Error();
        yield t(
          'success',
          (0, s.__)('The extension has been successfully activated.', 'woocommerce'),
        ),
          yield nt(e);
      } catch (t) {
        yield et(
          t,
          (0, s.__)('There was an error trying to activate the extension.', 'woocommerce'),
        ),
          yield Je(e);
      }
      return !0;
    }
    function* ot(e, t) {
      return {
        type: qe.INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN,
        data: { pluginSlug: e, category: t },
      };
    }
    function at(e) {
      return e.installedPlugins;
    }
    function it(e) {
      return e.activatingPlugins;
    }
    function st(e, t) {
      return e.recommendedPlugins[t] || [];
    }
    function ct(e, t) {
      return e.blogPosts[t] || [];
    }
    function lt(e, t) {
      return e.errors.blogPosts && e.errors.blogPosts[t];
    }
    function* mt(e) {
      try {
        const t = yield e ? `&category=${e}` : '',
          n = yield (0, We.apiFetch)({ path: `${me}/recommended?per_page=50${t}` });
        if (!n) throw new Error();
        yield Qe(n, e);
      } catch (e) {
        yield et(e, (0, s.__)('There was an error loading recommended extensions.', 'woocommerce'));
      }
    }
    function* dt(e) {
      try {
        const t = yield e ? `?category=${e}` : '',
          n = yield (0, We.apiFetch)({ path: `${me}/knowledge-base${t}`, method: 'GET' });
        if (!n) throw new Error();
        yield Ye(n, e);
      } catch (t) {
        yield tt(e, t);
      }
    }
    const { installedExtensions: ut } = S('marketing', {}),
      pt = {
        installedPlugins: ut,
        activatingPlugins: [],
        recommendedPlugins: {},
        blogPosts: {},
        errors: {},
      };
    (0, p.registerStore)(le, {
      actions: t,
      selectors: o,
      resolvers: a,
      controls: We.controls,
      reducer: (e = pt, t) => {
        switch (t.type) {
          case qe.SET_INSTALLED_PLUGINS:
            return { ...e, installedPlugins: t.plugins };
          case qe.SET_ACTIVATING_PLUGIN:
            return { ...e, activatingPlugins: [...e.activatingPlugins, t.pluginSlug] };
          case qe.REMOVE_ACTIVATING_PLUGIN:
            return { ...e, activatingPlugins: (0, w.without)(e.activatingPlugins, t.pluginSlug) };
          case qe.SET_RECOMMENDED_PLUGINS:
            return {
              ...e,
              recommendedPlugins: { ...e.recommendedPlugins, [t.data.category]: t.data.plugins },
            };
          case qe.INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN:
            const n = e.recommendedPlugins[t.data.category]?.filter(
              e => e.product !== t.data.pluginSlug,
            );
            return { ...e, recommendedPlugins: { ...e.recommendedPlugins, [t.data.category]: n } };
          case qe.SET_BLOG_POSTS:
            return { ...e, blogPosts: { ...e.blogPosts, [t.data.category]: t.data.posts } };
          case qe.SET_ERROR:
            return {
              ...e,
              errors: { ...e.errors, blogPosts: { ...e.errors.blogPosts, [t.category]: t.error } },
            };
          default:
            return e;
        }
      },
    });
    const gt = () => {
        const { currentUserCan: e } = (0, c.useUser)(),
          t = !(!S('allowMarketplaceSuggestions', !1) || !e('install_plugins'));
        return (0, i.createElement)(
          'div',
          { className: 'woocommerce-marketing-coupons' },
          t &&
            (0, i.createElement)(he, {
              title: (0, s.__)('Recommended coupon extensions', 'woocommerce'),
              description: (0, s.__)(
                'Take your coupon marketing to the next level with our recommended coupon extensions.',
                'woocommerce',
              ),
              category: 'coupons',
            }),
          (0, i.createElement)(Fe, {
            category: 'coupons',
            description: (0, s.__)(
              'Learn the ins and outs of successful coupon marketing from the experts at WooCommerce.',
              'woocommerce',
            ),
          }),
        );
      },
      ht = document.getElementById('posts-filter');
    if (ht) {
      const e = document.createElement('div');
      e.setAttribute('id', 'coupon-root'),
        (0, i.render)((0, i.createElement)(gt, null), ht.parentNode.appendChild(e));
    }
  })(),
    ((window.wc = window.wc || {}).marketingCoupons = r);
})();
