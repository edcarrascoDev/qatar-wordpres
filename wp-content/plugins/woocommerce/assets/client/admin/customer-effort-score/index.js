/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      87608: (e, o) => {
        var t;
        !(function() {
          'use strict';
          var n = {}.hasOwnProperty;
          function r() {
            for (var e = [], o = 0; o < arguments.length; o++) {
              var t = arguments[o];
              if (t) {
                var s = typeof t;
                if ('string' === s || 'number' === s) e.push(t);
                else if (Array.isArray(t)) {
                  if (t.length) {
                    var i = r.apply(null, t);
                    i && e.push(i);
                  }
                } else if ('object' === s) {
                  if (
                    t.toString !== Object.prototype.toString &&
                    !t.toString.toString().includes('[native code]')
                  ) {
                    e.push(t.toString());
                    continue;
                  }
                  for (var c in t) n.call(t, c) && t[c] && e.push(c);
                }
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((r.default = r), (e.exports = r))
            : void 0 ===
                (t = function() {
                  return r;
                }.apply(o, [])) || (e.exports = t);
        })();
      },
      31772: (e, o, t) => {
        'use strict';
        var n = t(25148);
        function r() {}
        function s() {}
        (s.resetWarningCache = r),
          (e.exports = function() {
            function e(e, o, t, r, s, i) {
              if (i !== n) {
                var c = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((c.name = 'Invariant Violation'), c);
              }
            }
            function o() {
              return e;
            }
            e.isRequired = e;
            var t = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: o,
              element: e,
              elementType: e,
              instanceOf: o,
              node: e,
              objectOf: o,
              oneOf: o,
              oneOfType: o,
              shape: o,
              exact: o,
              checkPropTypes: s,
              resetWarningCache: r,
            };
            return (t.PropTypes = t), t;
          });
      },
      7862: (e, o, t) => {
        e.exports = t(31772)();
      },
      25148: e => {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
    },
    o = {};
  function t(n) {
    var r = o[n];
    if (void 0 !== r) return r.exports;
    var s = (o[n] = { exports: {} });
    return e[n](s, s.exports, t), s.exports;
  }
  (t.n = e => {
    var o = e && e.__esModule ? () => e.default : () => e;
    return t.d(o, { a: o }), o;
  }),
    (t.d = (e, o) => {
      for (var n in o)
        t.o(o, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: o[n] });
    }),
    (t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (t.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var n = {};
  (() => {
    'use strict';
    t.r(n),
      t.d(n, {
        ADMIN_INSTALL_TIMESTAMP_OPTION_NAME: () => h,
        ALLOW_TRACKING_OPTION_NAME: () => S,
        CustomerEffortScore: () => _,
        CustomerEffortScoreModalContainer: () => J,
        CustomerEffortScoreTracks: () => Z,
        CustomerEffortScoreTracksContainer: () => te,
        CustomerFeedbackModal: () => m,
        CustomerFeedbackSimple: () => se,
        FeedbackModal: () => ie,
        QUEUE_OPTION_NAME: () => U,
        SHOWN_FOR_ACTIONS_OPTION_NAME: () => E,
        STORE_KEY: () => W,
        addCustomerEffortScoreExitPageListener: () => M,
        addExitPage: () => O,
        getExitPageData: () => C,
        getStoreAgeInWeeks: () => N,
        removeCustomerEffortScoreExitPageListener: () => T,
        removeExitPage: () => P,
        triggerExitPageCesSurvey: () => D,
        useCustomerEffortScoreExitPageTracker: () => ae,
        useCustomerEffortScoreModal: () => ce,
      });
    var e = {};
    t.r(e),
      t.d(e, {
        addCesSurvey: () => L,
        addCesSurveyForAnalytics: () => I,
        addCesSurveyForCustomerSearch: () => H,
        hideCesModal: () => F,
        hideProductMVPFeedbackModal: () => B,
        setCesSurveyQueue: () => Q,
        showCesModal: () => R,
        showProductMVPFeedbackModal: () => V,
      });
    var o = {};
    t.r(o), t.d(o, { getCesSurveyQueue: () => j });
    var r = {};
    t.r(r),
      t.d(r, {
        getCesSurveyQueue: () => Y,
        getVisibleCESModalData: () => K,
        isProductMVPFeedbackModalVisible: () => z,
      });
    const s = window.wp.element;
    var i = t(7862),
      c = t.n(i);
    const a = window.wp.i18n,
      l = window.wp.data,
      u = window.wp.components,
      d = window.wc.experimental;
    function m({
      recordScoreCallback: e,
      title: o = (0, a.__)('Please share your feedback', 'woocommerce'),
      description: t,
      showDescription: n = !0,
      firstQuestion: r,
      secondQuestion: i,
      defaultScore: c = NaN,
      onCloseModal: l,
      customOptions: m,
      shouldShowComments: p = (e, o) => [e, o].some(e => 1 === e || 2 === e),
      getExtraFieldsToBeShown: _,
      validateExtraFields: w,
    }) {
      const f =
          m && m.length > 0
            ? m
            : [
                { label: (0, a.__)('Strongly disagree', 'woocommerce'), value: '1' },
                { label: (0, a.__)('Disagree', 'woocommerce'), value: '2' },
                { label: (0, a.__)('Neutral', 'woocommerce'), value: '3' },
                { label: (0, a.__)('Agree', 'woocommerce'), value: '4' },
                { label: (0, a.__)('Strongly Agree', 'woocommerce'), value: '5' },
              ],
        [g, h] = (0, s.useState)(c || NaN),
        [S, E] = (0, s.useState)(c || NaN),
        [b, y] = (0, s.useState)(''),
        [v, C] = (0, s.useState)(!1),
        [O, P] = (0, s.useState)(!0),
        [k, M] = (0, s.useState)({}),
        [T, D] = (0, s.useState)({}),
        N = () => {
          P(!1), l && l();
        },
        x = (e, o) => {
          const t = parseInt(e, 10);
          o(t), C(!Number.isInteger(t));
        };
      return O
        ? (0, s.createElement)(
            u.Modal,
            {
              className: 'woocommerce-customer-effort-score',
              title: o,
              onRequestClose: N,
              shouldCloseOnClickOutside: !1,
            },
            n &&
              (0, s.createElement)(
                d.Text,
                {
                  variant: 'body',
                  as: 'p',
                  className: 'woocommerce-customer-effort-score__intro',
                  size: 14,
                  lineHeight: '20px',
                  marginBottom: '1.5em',
                },
                t ||
                  (0, a.__)(
                    'Your feedback will help create a better experience for thousands of merchants like you. Please tell us to what extent you agree or disagree with the statements below.',
                    'woocommerce',
                  ),
              ),
            (0, s.createElement)(
              d.Text,
              { variant: 'subtitle.small', as: 'p', weight: '600', size: '14', lineHeight: '20px' },
              r,
            ),
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-customer-effort-score__selection' },
              (0, s.createElement)(u.RadioControl, {
                selected: g.toString(10),
                options: f,
                onChange: e => x(e, h),
              }),
            ),
            i &&
              (0, s.createElement)(
                d.Text,
                {
                  variant: 'subtitle.small',
                  as: 'p',
                  weight: '600',
                  size: '14',
                  lineHeight: '20px',
                },
                i,
              ),
            i &&
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customer-effort-score__selection' },
                (0, s.createElement)(u.RadioControl, {
                  selected: S.toString(10),
                  options: f,
                  onChange: e => x(e, E),
                }),
              ),
            'function' == typeof p &&
              p(g, S) &&
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customer-effort-score__comments' },
                (0, s.createElement)(u.TextareaControl, {
                  label: (0, a.__)(
                    'How is that screen useful to you? What features would you add or change?',
                    'woocommerce',
                  ),
                  help: (0, a.__)(
                    'Your feedback will go to the WooCommerce development team',
                    'woocommerce',
                  ),
                  value: b,
                  placeholder: (0, a.__)(
                    'Optional, but much apprecated. We love reading your feedback!',
                    'woocommerce',
                  ),
                  onChange: e => y(e),
                  rows: 5,
                }),
              ),
            v &&
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customer-effort-score__errors', role: 'alert' },
                (0, s.createElement)(
                  d.Text,
                  { variant: 'body', as: 'p' },
                  (0, a.__)(
                    'Please tell us to what extent you agree or disagree with the statements above.',
                    'woocommerce',
                  ),
                ),
              ),
            'function' == typeof _ && _(k, M, T),
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-customer-effort-score__buttons' },
              (0, s.createElement)(
                u.Button,
                { isTertiary: !0, onClick: N, name: 'cancel' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, s.createElement)(
                u.Button,
                {
                  isPrimary: !0,
                  onClick: () => {
                    const o = !Number.isInteger(g) || (i && !Number.isInteger(S));
                    o && C(!0);
                    const t = 'function' == typeof w ? w(k) : {},
                      n = 0 === Object.keys(t).length;
                    !o && n ? (P(!1), e(g, S, b, k)) : D(t);
                  },
                  name: 'send',
                },
                (0, a.__)('Share', 'woocommerce'),
              ),
            ),
          )
        : null;
    }
    m.propTypes = {
      recordScoreCallback: c().func.isRequired,
      title: c().string,
      firstQuestion: c().string.isRequired,
      secondQuestion: c().string,
      defaultScore: c().number,
      onCloseModal: c().func,
      getExtraFieldsToBeShown: c().func,
      validateExtraFields: c().func,
    };
    const p = () => {},
      _ = ({
        recordScoreCallback: e,
        title: o,
        description: t,
        showDescription: n = !0,
        noticeLabel: r,
        firstQuestion: i,
        secondQuestion: c,
        onNoticeShownCallback: u = p,
        onNoticeDismissedCallback: d = p,
        onModalShownCallback: _ = p,
        onModalDismissedCallback: w = p,
        icon: f,
        shouldShowComments: g = (e, o) => [e, o].some(e => 1 === e || 2 === e),
        getExtraFieldsToBeShown: h,
        validateExtraFields: S,
      }) => {
        const [E, b] = (0, s.useState)(!0),
          [y, v] = (0, s.useState)(!1),
          { createNotice: C } = (0, l.useDispatch)('core/notices2');
        return (
          (0, s.useEffect)(() => {
            E &&
              (C('success', r || o, {
                actions: [
                  {
                    label: (0, a.__)('Give feedback', 'woocommerce'),
                    onClick: () => {
                      v(!0), _();
                    },
                  },
                ],
                icon: f,
                explicitDismiss: !0,
                onDismiss: d,
              }),
              b(!1),
              u());
          }, [E]),
          E
            ? null
            : y
            ? (0, s.createElement)(m, {
                title: o,
                description: t,
                showDescription: n,
                firstQuestion: i,
                secondQuestion: c,
                recordScoreCallback: e,
                onCloseModal: w,
                shouldShowComments: g,
                getExtraFieldsToBeShown: h,
                validateExtraFields: S,
              })
            : null
        );
      };
    _.propTypes = {
      recordScoreCallback: c().func.isRequired,
      title: c().string,
      onNoticeShownCallback: c().func,
      onNoticeDismissedCallback: c().func,
      onModalShownCallback: c().func,
      icon: c().element,
      firstQuestion: c().string.isRequired,
      secondQuestion: c().string,
      shouldShowComments: c().func,
    };
    const w = window.wc.data,
      f = window.wc.tracks,
      g = window.wc.navigation,
      h = 'woocommerce_admin_install_timestamp',
      S = 'woocommerce_allow_tracking',
      E = 'woocommerce_ces_shown_for_actions',
      b = 'customer-effort-score-exit-page';
    let y = !1;
    const v = (0, l.resolveSelect)(w.OPTIONS_STORE_NAME)
        .getOption(S)
        .then(e => {
          y = 'yes' === e;
        }),
      C = () => {
        if (!window.localStorage) return [];
        const e = window.localStorage.getItem(b),
          o = e ? JSON.parse(e) : [];
        return Array.isArray(o) ? o : [];
      },
      O = async e => {
        if ((await v, !window.localStorage || !y)) return;
        let o = C();
        o.find(o => o === e) || o.push(e),
          (o = o.slice(-10)),
          window.localStorage.setItem(b, JSON.stringify(o));
      },
      P = e => {
        if (!window.localStorage) return;
        let o = C();
        (o = o.filter(o => o !== e)),
          (o = o.slice(-10)),
          window.localStorage.setItem(b, JSON.stringify(o));
      },
      k = {},
      M = (e, o) => {
        (k[e] = () => {
          o() && O(e);
        }),
          window.addEventListener('unload', k[e]);
      },
      T = e => {
        k[e] && window.removeEventListener('unload', k[e], { capture: !0 });
      };
    function D() {
      var e;
      const o = C();
      if (null == o ? void 0 : o.length) {
        if (
          !(function(e) {
            const o = { import_products: () => 'product_importer' !== (0, g.getQuery)().page };
            return !o[e] || o[e]();
          })(o[0])
        )
          return;
        const t = (function(e) {
          switch (e) {
            case 'product_edit_view':
            case 'editing_new_product':
              return {
                action: 'editing_new_product' === e ? 'new_product' : e,
                noticeLabel: (0, a.__)(
                  'How is your experience with editing products?',
                  'woocommerce',
                ),
                title: (0, a.__)("How's your experience with editing products?", 'woocommerce'),
                description: (0, a.__)(
                  'We noticed you started editing a product, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.',
                  'woocommerce',
                ),
                firstQuestion: (0, a.__)(
                  'The product editing screen is easy to use',
                  'woocommerce',
                ),
                secondQuestion: (0, a.__)(
                  "The product editing screen's functionality meets my needs",
                  'woocommerce',
                ),
              };
            case 'product_add_view':
            case 'new_product':
              return {
                action: e,
                noticeLabel: (0, a.__)(
                  'How is your experience with creating products?',
                  'woocommerce',
                ),
                title: (0, a.__)('How is your experience with creating products?', 'woocommerce'),
                description: (0, a.__)(
                  'We noticed you started creating a product, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.',
                  'woocommerce',
                ),
                firstQuestion: (0, a.__)(
                  'The product creation screen is easy to use',
                  'woocommerce',
                ),
                secondQuestion: (0, a.__)(
                  "The product creation screen's functionality meets my needs",
                  'woocommerce',
                ),
              };
            case 'settings_change':
              return {
                action: e,
                icon: '⚙️',
                noticeLabel: (0, a.__)('Did you find the right setting?', 'woocommerce'),
                title: (0, a.__)('How’s your experience with settings?', 'woocommerce'),
                description: (0, a.__)(
                  'We noticed you started changing store settings, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.',
                  'woocommerce',
                ),
                firstQuestion: (0, a.__)('The settings screen is easy to use', 'woocommerce'),
                secondQuestion: (0, a.__)(
                  "The settings screen's functionality meets my needs",
                  'woocommerce',
                ),
              };
            case 'shop_order_update':
              return {
                action: e,
                icon: '📦',
                noticeLabel: (0, a.__)(
                  'How easy or difficult was it to update this order?',
                  'woocommerce',
                ),
                title: (0, a.__)("How's your experience with orders?", 'woocommerce'),
                description: (0, a.__)(
                  'We noticed you started editing an order, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.',
                  'woocommerce',
                ),
                firstQuestion: (0, a.__)('The order editing screen is easy to use', 'woocommerce'),
                secondQuestion: (0, a.__)(
                  "The order details screen's functionality meets my needs",
                  'woocommerce',
                ),
              };
            case 'import_products':
              return {
                action: e,
                icon: '🔄',
                noticeLabel: (0, a.__)(
                  'How is your experience with importing products?',
                  'woocommerce',
                ),
                title: (0, a.__)("How's your experience with importing products?", 'woocommerce'),
                description: (0, a.__)(
                  'We noticed you started importing products, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.',
                  'woocommerce',
                ),
                firstQuestion: (0, a.__)('The product import screen is easy to use', 'woocommerce'),
                secondQuestion: (0, a.__)(
                  "The product import screen's functionality meets my needs",
                  'woocommerce',
                ),
              };
            default:
              return null;
          }
        })(o[0]);
        (null === (e = null == t ? void 0 : t.title) || void 0 === e ? void 0 : e.length) &&
          (0, l.dispatch)('wc/customer-effort-score').addCesSurvey({
            ...t,
            pageNow: window.pagenow,
            adminPage: window.adminpage,
            props: { ces_location: 'outside' },
          }),
          P(o[0]);
      }
    }
    function N(e) {
      if (0 === e) return null;
      const o = Date.now() - 1e3 * e;
      return Math.round(o / w.WEEK);
    }
    const x = window.wp.dataControls,
      A = {
        SET_CES_SURVEY_QUEUE: 'SET_CES_SURVEY_QUEUE',
        ADD_CES_SURVEY: 'ADD_CES_SURVEY',
        SHOW_CES_MODAL: 'SHOW_CES_MODAL',
        HIDE_CES_MODAL: 'HIDE_CES_MODAL',
        SHOW_PRODUCT_MVP_FEEDBACK_MODAL: 'SHOW_PRODUCT_MVP_FEEDBACK_MODAL',
        HIDE_PRODUCT_MVP_FEEDBACK_MODAL: 'HIDE_PRODUCT_MVP_FEEDBACK_MODAL',
      };
    function Q(e) {
      return { type: A.SET_CES_SURVEY_QUEUE, queue: e };
    }
    function L({
      action: e,
      title: o,
      description: t,
      noticeLabel: n,
      firstQuestion: r,
      secondQuestion: s,
      icon: i,
      pageNow: c = window.pagenow,
      adminPage: a = window.adminpage,
      onsubmitLabel: l,
      props: u = {},
    }) {
      return {
        type: A.ADD_CES_SURVEY,
        action: e,
        title: o,
        description: t,
        noticeLabel: n,
        firstQuestion: r,
        secondQuestion: s,
        icon: i,
        pageNow: c,
        adminPage: a,
        onsubmit_label: l,
        props: u,
      };
    }
    function R(e = {}, o = {}, t = {}, n = {}) {
      return {
        type: A.SHOW_CES_MODAL,
        surveyProps: e,
        onsubmit_label: e.onsubmitLabel || '',
        props: o,
        onSubmitNoticeProps: t,
        tracksProps: n,
      };
    }
    function F() {
      return { type: A.HIDE_CES_MODAL };
    }
    function I() {
      return L({
        action: 'analytics_filtered',
        title: (0, a.__)('How easy was it to filter your store analytics?', 'woocommerce'),
        firstQuestion: (0, a.__)(
          'The filters in the analytics screen are easy to use.',
          'woocommerce',
        ),
        secondQuestion: (0, a.__)("The filters' functionality meets my needs.", 'woocommerce'),
        pageNow: 'woocommerce_page_wc-admin',
        adminPage: 'woocommerce_page_wc-admin',
      });
    }
    function H() {
      return L({
        action: 'ces_search',
        title: (0, a.__)('How easy was it to use search?', 'woocommerce'),
        firstQuestion: (0, a.__)(
          'The search feature in WooCommerce is easy to use.',
          'woocommerce',
        ),
        secondQuestion: (0, a.__)("The search's functionality meets my needs.", 'woocommerce'),
        pageNow: 'woocommerce_page_wc-admin',
        adminPage: 'woocommerce_page_wc-admin',
        onsubmit_label: void 0,
        props: { search_area: 'customer' },
      });
    }
    function V() {
      return { type: A.SHOW_PRODUCT_MVP_FEEDBACK_MODAL };
    }
    function B() {
      return { type: A.HIDE_PRODUCT_MVP_FEEDBACK_MODAL };
    }
    const W = 'wc/customer-effort-score',
      q = '/wc-admin',
      U = 'woocommerce_ces_tracks_queue';
    function* j() {
      const e = yield (0, x.apiFetch)({ path: `${q}/options?options=${U}` });
      if (!e) throw new Error();
      yield Q(e[U] || []);
    }
    function Y(e) {
      return e.queue;
    }
    function K(e) {
      return e.showCESModal ? e.cesModalData : void 0;
    }
    function z(e) {
      return e.showProductMVPFeedbackModal;
    }
    const G = {
        queue: [],
        cesModalData: void 0,
        showCESModal: !1,
        showProductMVPFeedbackModal: !1,
      },
      J =
        ((0, l.registerStore)(W, {
          actions: e,
          selectors: r,
          resolvers: o,
          controls: x.controls,
          reducer: (e = G, o) => {
            switch (o.type) {
              case A.SET_CES_SURVEY_QUEUE:
                return { ...e, queue: [...e.queue, ...o.queue] };
              case A.HIDE_CES_MODAL:
                return { ...e, showCESModal: !1, cesModalData: void 0 };
              case A.SHOW_CES_MODAL:
                const t = {
                  action: o.surveyProps.action,
                  showDescription: o.surveyProps.showDescription,
                  title: o.surveyProps.title,
                  onSubmitLabel: o.onsubmit_label,
                  firstQuestion: o.surveyProps.firstQuestion,
                  secondQuestion: o.surveyProps.secondQuestion,
                  onSubmitNoticeProps: o.onSubmitNoticeProps || {},
                  props: o.props,
                  tracksProps: o.tracksProps,
                  getExtraFieldsToBeShown: o.surveyProps.getExtraFieldsToBeShown,
                  validateExtraFields: o.surveyProps.validateExtraFields,
                };
                return { ...e, showCESModal: !0, cesModalData: t };
              case A.ADD_CES_SURVEY:
                if (e.queue.filter(e => e.action === o.action).length) return e;
                const n = {
                  action: o.action,
                  title: o.title,
                  description: o.description,
                  noticeLabel: o.noticeLabel,
                  firstQuestion: o.firstQuestion,
                  secondQuestion: o.secondQuestion,
                  icon: o.icon,
                  pagenow: o.pageNow,
                  adminpage: o.adminPage,
                  onSubmitLabel: o.onSubmitLabel,
                  props: o.props,
                };
                return { ...e, queue: [...e.queue, n] };
              case A.SHOW_PRODUCT_MVP_FEEDBACK_MODAL:
                return { ...e, showProductMVPFeedbackModal: !0 };
              case A.HIDE_PRODUCT_MVP_FEEDBACK_MODAL:
                return { ...e, showProductMVPFeedbackModal: !1 };
              default:
                return e;
            }
          },
        }),
        () => {
          var e;
          const { createSuccessNotice: o } = (0, l.useDispatch)('core/notices'),
            { hideCesModal: t } = (0, l.useDispatch)(W),
            { storeAgeInWeeks: n, resolving: r, visibleCESModalData: i } = (0, l.useSelect)(e => {
              const { getOption: o, hasFinishedResolution: t } = e(w.OPTIONS_STORE_NAME),
                { getVisibleCESModalData: n } = e(W),
                r = o(h) || 0,
                s = null === r || !t('getOption', [h]);
              return { storeAgeInWeeks: N(r), visibleCESModalData: n(), resolving: s };
            });
          return !i || r
            ? null
            : (0, s.createElement)(m, {
                title: i.title,
                showDescription: i.showDescription,
                firstQuestion: i.firstQuestion,
                secondQuestion: i.secondQuestion,
                recordScoreCallback: (...e) => {
                  var r, s;
                  ((e, t, r, s = {}) => {
                    (0, f.recordEvent)('ces_feedback', {
                      action: i.action,
                      score: e,
                      score_second_question: null != t ? t : null,
                      score_combined: e + (null != t ? t : 0),
                      comments: r || '',
                      ...s,
                      store_age: n,
                      ...i.tracksProps,
                    }),
                      o(
                        i.onSubmitLabel ||
                          (0, a.__)(
                            "Thanks for the feedback. We'll put it to good use!",
                            'woocommerce',
                          ),
                        i.onSubmitNoticeProps || {},
                      );
                  })(...e),
                    t(),
                    null ===
                      (s = null === (r = i.props) || void 0 === r ? void 0 : r.onRecordScore) ||
                      void 0 === s ||
                      s.call(r);
                },
                onCloseModal: () => {
                  var e, o;
                  null === (o = null === (e = i.props) || void 0 === e ? void 0 : e.onCloseModal) ||
                    void 0 === o ||
                    o.call(e),
                    t();
                },
                shouldShowComments:
                  null === (e = i.props) || void 0 === e ? void 0 : e.shouldShowComments,
                getExtraFieldsToBeShown: i.getExtraFieldsToBeShown,
                validateExtraFields: i.validateExtraFields,
              });
        }),
      $ = window.wp.compose;
    function X({
      action: e,
      trackProps: o,
      title: t,
      description: n,
      noticeLabel: r,
      firstQuestion: i,
      secondQuestion: c,
      icon: l,
      onSubmitLabel: u = (0, a.__)('Thank you for your feedback!', 'woocommerce'),
      cesShownForActions: d,
      allowTracking: m,
      resolving: p,
      storeAgeInWeeks: w,
      updateOptions: g,
      createNotice: h,
    }) {
      const [S, b] = (0, s.useState)(!1);
      return p
        ? null
        : m
        ? d && -1 !== d.indexOf(e) && !S
          ? null
          : (0, s.createElement)(_, {
              recordScoreCallback: (t, n, r) => {
                (0, f.recordEvent)('ces_feedback', {
                  action: e,
                  score: t,
                  score_second_question: n,
                  score_combined: t + n,
                  comments: r || '',
                  store_age: w,
                  ces_location: 'inside',
                  ...o,
                }),
                  h('success', u);
              },
              title: t,
              description: n,
              noticeLabel: r,
              firstQuestion: i,
              secondQuestion: c,
              onNoticeShownCallback: () => {
                (0, f.recordEvent)('ces_snackbar_view', {
                  action: e,
                  store_age: w,
                  ces_location: 'inside',
                  ...o,
                }),
                  (d && d.includes(e)) || g({ [E]: [e, ...(d || [])] });
              },
              onNoticeDismissedCallback: () => {
                (0, f.recordEvent)('ces_snackbar_dismiss', {
                  action: e,
                  store_age: w,
                  ces_location: 'inside',
                  ...o,
                });
              },
              onModalShownCallback: () => {
                b(!0),
                  (0, f.recordEvent)('ces_view', {
                    action: e,
                    store_age: w,
                    ces_location: 'inside',
                    ...o,
                  });
              },
              onModalDismissedCallback: () => {
                (0, f.recordEvent)('ces_view_dismiss', {
                  action: e,
                  store_age: w,
                  ces_location: 'inside',
                  ...o,
                });
              },
              icon: (0, s.createElement)(
                'span',
                {
                  style: { height: 21, width: 21 },
                  role: 'img',
                  'aria-label': (0, a.__)('Pencil icon', 'woocommerce'),
                },
                l || '✏',
              ),
            })
        : null;
    }
    X.propTypes = {
      action: c().string.isRequired,
      trackProps: c().object,
      title: c().string.isRequired,
      onSubmitLabel: c().string,
      cesShownForActions: c().arrayOf(c().string),
      allowTracking: c().bool,
      resolving: c().bool.isRequired,
      storeAgeInWeeks: c().number,
      updateOptions: c().func,
      createNotice: c().func,
    };
    const Z = (0, $.compose)(
        (0, l.withSelect)(e => {
          const { getOption: o, hasFinishedResolution: t } = e(w.OPTIONS_STORE_NAME),
            n = o(E),
            r = N(o(h) || 0);
          return {
            cesShownForActions: n,
            allowTracking: 'yes' === (o(S) || 'no'),
            storeAgeInWeeks: r,
            resolving:
              !t('getOption', [E]) || null === r || !t('getOption', [h]) || !t('getOption', [S]),
          };
        }),
        (0, l.withDispatch)(e => {
          const { updateOptions: o } = e(w.OPTIONS_STORE_NAME),
            { createNotice: t } = e('core/notices');
          return { updateOptions: o, createNotice: t };
        }),
      )(X),
      ee = window.React;
    function oe({ queue: e, resolving: o, clearQueue: t }) {
      const n = e.filter(e => e.pagenow === window.pagenow && e.adminpage === window.adminpage);
      return (
        (0, ee.useEffect)(() => {
          n.length && t();
        }, [n]),
        o
          ? null
          : (0, s.createElement)(
              s.Fragment,
              null,
              n.map((e, o) =>
                (0, s.createElement)(Z, {
                  key: o,
                  action: e.action,
                  description: e.description,
                  noticeLabel: e.noticeLabel,
                  firstQuestion: e.firstQuestion,
                  secondQuestion: e.secondQuestion,
                  icon: e.icon,
                  title: e.title,
                  onSubmitLabel: e.onsubmit_label,
                  trackProps: e.props || {},
                }),
              ),
            )
      );
    }
    oe.propTypes = { queue: c().arrayOf(c().object), resolving: c().bool, clearQueue: c().func };
    const te = (0, $.compose)(
      (0, l.withSelect)(e => {
        const { getCesSurveyQueue: o, isResolving: t } = e(W);
        return { queue: o(), resolving: t('getOption', [U]) };
      }),
      (0, l.withDispatch)(e => {
        const { updateOptions: o } = e(w.OPTIONS_STORE_NAME);
        return {
          clearQueue: () => {
            o({
              woocommerce_clear_ces_tracks_queue_for_page: {
                pagenow: window.pagenow,
                adminpage: window.adminpage,
              },
            });
          },
        };
      }),
    )(oe);
    var ne = t(87608),
      re = t.n(ne);
    const se = ({ onSelect: e, label: o, selectedValue: t }) => {
      const n = [
        { tooltip: (0, a.__)('Very difficult', 'woocommerce'), value: 1, emoji: '😞' },
        { tooltip: (0, a.__)('Difficult', 'woocommerce'), value: 2, emoji: '🙁' },
        { tooltip: (0, a.__)('Neutral', 'woocommerce'), value: 3, emoji: '😑' },
        { tooltip: (0, a.__)('Good', 'woocommerce'), value: 4, emoji: '🙂' },
        { tooltip: (0, a.__)('Very good', 'woocommerce'), value: 5, emoji: '😍' },
      ];
      return (0, s.createElement)(
        'div',
        { className: 'customer-feedback-simple__container' },
        (0, s.createElement)(
          d.Text,
          { variant: 'subtitle.small', as: 'p', size: '13', lineHeight: '16px' },
          o,
        ),
        (0, s.createElement)(
          'div',
          { className: 'customer-feedback-simple__selection' },
          n.map(o =>
            (0, s.createElement)(
              u.Tooltip,
              { text: o.tooltip, key: o.value, position: 'top center' },
              (0, s.createElement)(
                u.Button,
                {
                  onClick: () => {
                    e(o.value);
                  },
                  className: re()({ 'is-selected': t === o.value }),
                },
                o.emoji,
              ),
            ),
          ),
        ),
      );
    };
    function ie({
      onSubmit: e,
      title: o,
      description: t,
      onModalClose: n,
      onCancel: r,
      children: i,
      isSubmitButtonDisabled: c,
      submitButtonLabel: a,
      cancelButtonLabel: l,
      className: m,
    }) {
      const [p, _] = (0, s.useState)(!0);
      return p
        ? (0, s.createElement)(
            u.Modal,
            {
              className: re()('woocommerce-feedback-modal', m),
              title: o,
              onRequestClose: () => {
                _(!1), n && n();
              },
              shouldCloseOnClickOutside: !1,
            },
            t &&
              (0, s.createElement)(
                d.Text,
                {
                  variant: 'body',
                  as: 'p',
                  className: 'woocommerce-feedback-modal__description',
                  size: 14,
                  lineHeight: '20px',
                  marginBottom: '1.5em',
                },
                t,
              ),
            i,
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-feedback-modal__buttons' },
              (0, s.createElement)(u.Button, { isTertiary: !0, onClick: r, name: 'cancel' }, l),
              (0, s.createElement)(
                u.Button,
                {
                  isPrimary: !c,
                  isSecondary: c,
                  onClick: () => {
                    e(), _(!1);
                  },
                  name: 'send',
                  disabled: c,
                },
                a,
              ),
            ),
          )
        : null;
    }
    (se.propTypes = {
      onSelect: c().func.isRequired,
      label: c().string.isRequired,
      selectedValue: c().number,
    }),
      (ie.propTypes = {
        onSubmit: c().func.isRequired,
        title: c().string,
        description: c().string,
        onModalClose: c().func,
        isSubmitButtonDisabled: c().bool,
        submitButtonLabel: c().string,
        cancelButtonLabel: c().string,
      });
    const ce = () => {
        const { showCesModal: e, showProductMVPFeedbackModal: o } = (0, l.useDispatch)(W),
          { updateOptions: t } = (0, l.useDispatch)(w.OPTIONS_STORE_NAME),
          { wasPreviouslyShown: n, isLoading: r } = (0, l.useSelect)(e => {
            const { getOption: o, hasFinishedResolution: t } = e(w.OPTIONS_STORE_NAME),
              n = o(E) || [];
            return { wasPreviouslyShown: e => n.includes(e), isLoading: !t('getOption', [E]) };
          });
        return {
          wasPreviouslyShown: n,
          isLoading: r,
          showCesModal: (o = {}, n = {}, r = {}, s = {}) => {
            e(o, n, r, s),
              (async e => {
                const { getOption: o } = (0, l.resolveSelect)(w.OPTIONS_STORE_NAME),
                  n = (await o(E)) || [];
                t({ [E]: [e, ...n] });
              })(o.action);
          },
          showProductMVPFeedbackModal: o,
        };
      },
      ae = (e, o) => {
        const t = (0, s.useRef)(o);
        (0, s.useEffect)(() => {
          t.current = o;
        }, [o]),
          (0, s.useEffect)(
            () => () => {
              t.current && O(e);
            },
            [],
          ),
          (0, s.useEffect)(
            () => (
              M(e, () => o),
              () => {
                T(e);
              }
            ),
            [o],
          );
      };
  })(),
    ((window.wc = window.wc || {}).customerEffortScore = n);
})();
