(() => {
  var e = {
      31772: (e, t, n) => {
        'use strict';
        var s = n(25148);
        function i() {}
        function o() {}
        (o.resetWarningCache = i),
          (e.exports = function() {
            function e(e, t, n, i, o, r) {
              if (r !== s) {
                var a = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((a.name = 'Invariant Violation'), a);
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
              checkPropTypes: o,
              resetWarningCache: i,
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
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var o = (t[s] = { exports: {} });
    return e[s](o, o.exports, n), o.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var s in t)
        n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var s = {};
  (() => {
    'use strict';
    n.r(s);
    const e = window.wp.element,
      t = window.wc.data;
    function i(e) {
      return (
        (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        i(e)
      );
    }
    function o(e, t, n) {
      return (
        (t = (function(e) {
          var t = (function(e, t) {
            if ('object' !== i(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var s = n.call(e, 'string');
              if ('object' !== i(s)) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' === i(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const r = window.wp.i18n,
      a = window.wp.components,
      c = window.wp.compose,
      l = window.React;
    function p(e) {
      return e.startsWith('{{/')
        ? { type: 'componentClose', value: e.replace(/\W/g, '') }
        : e.endsWith('/}}')
        ? { type: 'componentSelfClosing', value: e.replace(/\W/g, '') }
        : e.startsWith('{{')
        ? { type: 'componentOpen', value: e.replace(/\W/g, '') }
        : { type: 'string', value: e };
    }
    function d(e, t) {
      let n,
        s,
        i = [];
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        if ('string' !== r.type) {
          if (void 0 === t[r.value])
            throw new Error(`Invalid interpolation, missing component node: \`${r.value}\``);
          if ('object' != typeof t[r.value])
            throw new Error(
              `Invalid interpolation, component node must be a ReactElement or null: \`${r.value}\``,
            );
          if ('componentClose' === r.type)
            throw new Error(`Missing opening component token: \`${r.value}\``);
          if ('componentOpen' === r.type) {
            (n = t[r.value]), (s = o);
            break;
          }
          i.push(t[r.value]);
        } else i.push(r.value);
      }
      if (n) {
        const o = (function(e, t) {
            const n = t[e];
            let s = 0;
            for (let i = e + 1; i < t.length; i++) {
              const e = t[i];
              if (e.value === n.value) {
                if ('componentOpen' === e.type) {
                  s++;
                  continue;
                }
                if ('componentClose' === e.type) {
                  if (0 === s) return i;
                  s--;
                }
              }
            }
            throw new Error('Missing closing component token `' + n.value + '`');
          })(s, e),
          r = d(e.slice(s + 1, o), t),
          a = (0, l.cloneElement)(n, {}, r);
        if ((i.push(a), o < e.length - 1)) {
          const n = d(e.slice(o + 1), t);
          i = i.concat(n);
        }
      }
      return (
        (i = i.filter(Boolean)),
        0 === i.length ? null : 1 === i.length ? i[0] : (0, l.createElement)(l.Fragment, null, ...i)
      );
    }
    function m(e) {
      const { mixedString: t, components: n, throwErrors: s } = e;
      if (!n) return t;
      if ('object' != typeof n) {
        if (s)
          throw new Error(
            `Interpolation Error: unable to process \`${t}\` because components is not an object`,
          );
        return t;
      }
      const i = (function(e) {
        return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(p);
      })(t);
      try {
        return d(i, n);
      } catch (e) {
        if (s)
          throw new Error(
            `Interpolation Error: unable to process \`${t}\` because of error \`${e.message}\``,
          );
        return t;
      }
    }
    var u = n(7862),
      h = n.n(u);
    const w = window.lodash,
      g = window.wp.data,
      b = window.wc.tracks,
      _ = window.wc.wcSettings;
    class y extends e.Component {
      constructor(...e) {
        super(...e),
          o(this, 'setDismissed', e => {
            this.props.updateOptions({ woocommerce_shipping_dismissed_timestamp: e });
          }),
          o(this, 'hideBanner', () => {
            document.getElementById('woocommerce-admin-print-label').style.display = 'none';
          }),
          o(this, 'remindMeLaterClicked', () => {
            const { onCloseAll: e, trackElementClicked: t } = this.props;
            this.setDismissed(Date.now()),
              e(),
              this.hideBanner(),
              t('shipping_banner_dismiss_modal_remind_me_later');
          }),
          o(this, 'closeForeverClicked', () => {
            const { onCloseAll: e, trackElementClicked: t } = this.props;
            this.setDismissed(-1),
              e(),
              this.hideBanner(),
              t('shipping_banner_dismiss_modal_close_forever');
          });
      }
      render() {
        const { onClose: t, visible: n } = this.props;
        return n
          ? (0, e.createElement)(
              a.Modal,
              {
                title: (0, r.__)('Are you sure?', 'woocommerce'),
                onRequestClose: t,
                className: 'wc-admin-shipping-banner__dismiss-modal',
              },
              (0, e.createElement)(
                'p',
                { className: 'wc-admin-shipping-banner__dismiss-modal-help-text' },
                (0, r.__)(
                  'With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.',
                  'woocommerce',
                ),
              ),
              (0, e.createElement)(
                'div',
                { className: 'wc-admin-shipping-banner__dismiss-modal-actions' },
                (0, e.createElement)(
                  a.Button,
                  { isSecondary: !0, onClick: this.remindMeLaterClicked },
                  (0, r.__)('Remind me later', 'woocommerce'),
                ),
                (0, e.createElement)(
                  a.Button,
                  { isPrimary: !0, onClick: this.closeForeverClicked },
                  (0, r.__)("I don't need this", 'woocommerce'),
                ),
              ),
            )
          : null;
      }
    }
    const v = (0, c.compose)(
        (0, g.withDispatch)(e => {
          const { updateOptions: n } = e(t.OPTIONS_STORE_NAME);
          return { updateOptions: n };
        }),
      )(y),
      S = function(t) {
        let { icon: n, size: s = 24, ...i } = t;
        return (0, e.cloneElement)(n, { width: s, height: s, ...i });
      },
      f = window.wp.primitives,
      E = (0, e.createElement)(
        f.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-2 -2 24 24' },
        (0, e.createElement)(f.Path, {
          d:
            'M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z',
        }),
      ),
      k = 'install',
      C = 'activate',
      P = 'setup',
      B = {
        download: (0, r.__)('download', 'woocommerce'),
        [k]: (0, r.__)('install', 'woocommerce'),
        [C]: (0, r.__)('activate', 'woocommerce'),
        [P]: (0, r.__)('set up', 'woocommerce'),
        start: (0, r.__)('start', 'woocommerce'),
      };
    function L({ isSetupError: t, errorReason: n }) {
      return t
        ? (0, e.createElement)(
            'div',
            { className: 'wc-admin-shipping-banner-install-error' },
            (0, e.createElement)(S, { icon: E, className: 'warning-icon' }),
            (e => {
              const t = e in B ? B[e] : B[P];
              return (0, r.sprintf)(
                (0, r.__)(
                  'Unable to %s the plugin. Refresh the page and try again.',
                  'woocommerce',
                ),
                t,
              );
            })(n),
          )
        : null;
    }
    const x = window.wp.apiFetch;
    var O = n.n(x);
    const A = (0, _.getSetting)('wcAssetUrl', ''),
      T = 'woocommerce-services';
    class M extends e.Component {
      constructor(e) {
        super(e),
          o(this, 'isSetupError', () => this.state.wcsSetupError),
          o(this, 'closeDismissModal', () => {
            this.setState({ isDismissModalOpen: !1 }),
              this.trackElementClicked('shipping_banner_dismiss_modal_close_button');
          }),
          o(this, 'openDismissModal', () => {
            this.setState({ isDismissModalOpen: !0 }),
              this.trackElementClicked('shipping_banner_dimiss');
          }),
          o(this, 'hideBanner', () => {
            this.setState({ showShippingBanner: !1 });
          }),
          o(this, 'createShippingLabelClicked', () => {
            const { activePlugins: e } = this.props;
            this.setState({ isShippingLabelButtonBusy: !0 }),
              this.trackElementClicked('shipping_banner_create_label'),
              e.includes(T) ? this.acceptTosAndGetWCSAssets() : this.installAndActivatePlugins(T);
          }),
          o(this, 'woocommerceServiceLinkClicked', () => {
            this.trackElementClicked('shipping_banner_woocommerce_service_link');
          }),
          o(this, 'trackBannerEvent', (e, t = {}) => {
            const { activePlugins: n, isJetpackConnected: s } = this.props;
            (0, b.recordEvent)(e, {
              banner_name: 'wcadmin_install_wcs_prompt',
              jetpack_installed: n.includes('jetpack'),
              jetpack_connected: s,
              wcs_installed: n.includes(T),
              ...t,
            });
          }),
          o(this, 'trackImpression', () => {
            this.trackBannerEvent('banner_impression');
          }),
          o(this, 'trackElementClicked', e => {
            this.trackBannerEvent('banner_element_clicked', { element: e });
          }),
          o(this, 'getInstallText', () => {
            const { activePlugins: e } = this.props;
            return e.includes(T)
              ? (0, r.__)(
                  'You\'ve already installed WooCommerce Shipping. By clicking "Create shipping label", you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',
                  'woocommerce',
                )
              : (0, r.__)(
                  'By clicking "Create shipping label", {{wcsLink}}WooCommerce Shipping{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',
                  'woocommerce',
                );
          });
        const t = new URL(window.location.href).searchParams.get('post');
        this.state = {
          showShippingBanner: !0,
          isDismissModalOpen: !1,
          setupErrorReason: P,
          orderId: parseInt(t, 10),
          wcsAssetsLoaded: !1,
          wcsAssetsLoading: !1,
          wcsSetupError: !1,
          isShippingLabelButtonBusy: !1,
          installText: this.getInstallText(),
          isWcsModalOpen: !1,
        };
      }
      componentDidMount() {
        const { showShippingBanner: e } = this.state;
        e && this.trackImpression();
      }
      async installAndActivatePlugins(e) {
        const { installPlugins: t, activatePlugins: n, isRequesting: s } = this.props;
        if (s) return !1;
        !0 === (await t([e])).success
          ? !0 === (await n([e])).success
            ? this.acceptTosAndGetWCSAssets()
            : this.setState({ setupErrorReason: C, wcsSetupError: !0 })
          : this.setState({ setupErrorReason: k, wcsSetupError: !0 });
      }
      acceptTosAndGetWCSAssets() {
        return O()({ path: '/wc/v1/connect/tos', method: 'POST', data: { accepted: !0 } })
          .then(() => O()({ path: '/wc/v1/connect/assets', method: 'GET' }))
          .then(e => this.loadWcsAssets(e))
          .catch(() => this.setState({ wcsSetupError: !0 }));
      }
      generateMetaBoxHtml(e, t, n) {
        const s = JSON.stringify(n).replace(/"/g, '&quot;');
        return `\n<div id="${e}" class="postbox">\n\t<div class="postbox-header">\n\t\t<h2 class="hndle"><span>${t}</span></h2>\n\t\t<div class="handle-actions">\n\t\t\t<button type="button" class="handlediv" aria-expanded="true">\n\t\t\t\t<span class="screen-reader-text">${(0,
        r.__)(
          'Toggle panel:',
          'woocommerce',
        )} ${t}</span>\n\t\t\t\t<span class="toggle-indicator" aria-hidden="true"></span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div class="inside">\n\t\t<div class="wcc-root woocommerce wc-connect-create-shipping-label" data-args="${s}">\n\t\t</div>\n\t</div>\n</div>\n`;
      }
      loadWcsAssets({ assets: e }) {
        if (this.state.wcsAssetsLoaded || this.state.wcsAssetsLoading)
          return void this.openWcsModal();
        this.setState({ wcsAssetsLoading: !0 });
        const t = e.wc_connect_admin_script,
          n = e.wc_connect_admin_style;
        if (void 0 === window.wcsPluginData) {
          const e = t.substring(0, t.lastIndexOf('/') + 1);
          window.wcsPluginData = { assetPath: e };
        }
        const { orderId: s } = this.state,
          { itemsCount: i } = this.props,
          o = this.generateMetaBoxHtml(
            'woocommerce-order-label',
            (0, r.__)('Shipping Label', 'woocommerce'),
            { order: { id: s }, context: 'shipping_label', items: i },
          );
        document.getElementById('woocommerce-order-data').insertAdjacentHTML('beforebegin', o);
        const a = this.generateMetaBoxHtml(
          'woocommerce-order-shipment-tracking',
          (0, r.__)('Shipment Tracking', 'woocommerce'),
          { order: { id: s }, context: 'shipment_tracking', items: i },
        );
        document.getElementById('woocommerce-order-actions').insertAdjacentHTML('afterend', a),
          window.jQuery &&
            (window.jQuery('#normal-sortables').sortable('refresh'),
            window.jQuery('#side-sortables').sortable('refresh'),
            window.jQuery('#woocommerce-order-label').hide()),
          Promise.all([
            new Promise((e, n) => {
              const s = document.createElement('script');
              (s.src = t),
                (s.async = !0),
                (s.onload = e),
                (s.onerror = n),
                document.body.appendChild(s);
            }),
            new Promise((e, t) => {
              if ('' !== n) {
                const s = document.getElementsByTagName('head')[0],
                  i = document.createElement('link');
                (i.rel = 'stylesheet'),
                  (i.type = 'text/css'),
                  (i.href = n),
                  (i.media = 'all'),
                  (i.onload = e),
                  (i.onerror = t),
                  s.appendChild(i);
              } else e();
            }),
          ]).then(() => {
            this.setState({
              wcsAssetsLoaded: !0,
              wcsAssetsLoading: !1,
              isShippingLabelButtonBusy: !1,
            }),
              this.openWcsModal();
          });
      }
      openWcsModal() {
        window.wcsGetAppStoreAsync &&
          window.wcsGetAppStoreAsync('wc-connect-create-shipping-label').then(e => {
            const t = e.getState(),
              { orderId: n } = this.state,
              s = t.ui.selectedSiteId,
              i = e.subscribe(() => {
                const t = e.getState(),
                  o = (0, w.get)(
                    t,
                    ['extensions', 'woocommerce', 'woocommerceServices', s, 'shippingLabel', n],
                    null,
                  ),
                  a = (0, w.get)(
                    t,
                    ['extensions', 'woocommerce', 'woocommerceServices', s, 'labelSettings'],
                    null,
                  ),
                  c = (0, w.get)(
                    t,
                    ['extensions', 'woocommerce', 'woocommerceServices', s, 'packages'],
                    null,
                  ),
                  l = (0, w.get)(t, ['extensions', 'woocommerce', 'sites', s, 'data', 'locations']);
                o &&
                  a &&
                  a.meta &&
                  c &&
                  l &&
                  (o.loaded &&
                  a.meta.isLoaded &&
                  c.isLoaded &&
                  (0, w.isArray)(l) &&
                  !this.state.isWcsModalOpen
                    ? (window.jQuery &&
                        (this.setState({ isWcsModalOpen: !0 }),
                        window.jQuery('.shipping-label__new-label-button').click()),
                      e.dispatch({
                        type: 'NOTICE_CREATE',
                        notice: {
                          duration: 1e4,
                          status: 'is-success',
                          text: (0, r.__)('Plugin installed and activated', 'woocommerce'),
                        },
                      }))
                    : o.showPurchaseDialog &&
                      (i(), window.jQuery && window.jQuery('#woocommerce-order-label').show()));
              });
            document.getElementById('woocommerce-admin-print-label').style.display = 'none';
          });
      }
      render() {
        const {
          isDismissModalOpen: t,
          showShippingBanner: n,
          isShippingLabelButtonBusy: s,
        } = this.state;
        return n
          ? (0, e.createElement)(
              'div',
              null,
              (0, e.createElement)(
                'div',
                { className: 'wc-admin-shipping-banner-container' },
                (0, e.createElement)('img', {
                  className: 'wc-admin-shipping-banner-illustration',
                  src: A + 'images/shippingillustration.svg',
                  alt: (0, r.__)('Shipping ', 'woocommerce'),
                }),
                (0, e.createElement)(
                  'div',
                  { className: 'wc-admin-shipping-banner-blob' },
                  (0, e.createElement)(
                    'h3',
                    null,
                    (0, r.__)('Print discounted shipping labels with a click.', 'woocommerce'),
                  ),
                  (0, e.createElement)(
                    'p',
                    null,
                    m({
                      mixedString: this.state.installText,
                      components: {
                        tosLink: (0, e.createElement)(a.ExternalLink, {
                          href: 'https://wordpress.com/tos',
                          target: '_blank',
                          type: 'external',
                        }),
                        wcsLink: (0, e.createElement)(a.ExternalLink, {
                          href: 'https://woocommerce.com/products/shipping/?utm_medium=product',
                          target: '_blank',
                          type: 'external',
                          onClick: this.woocommerceServiceLinkClicked,
                        }),
                      },
                    }),
                  ),
                  (0, e.createElement)(L, {
                    isSetupError: this.isSetupError(),
                    errorReason: this.state.setupErrorReason,
                  }),
                ),
                (0, e.createElement)(
                  a.Button,
                  {
                    disabled: s,
                    isPrimary: !0,
                    isBusy: s,
                    onClick: this.createShippingLabelClicked,
                  },
                  (0, r.__)('Create shipping label', 'woocommerce'),
                ),
                (0, e.createElement)(
                  'button',
                  {
                    onClick: this.openDismissModal,
                    type: 'button',
                    className: 'notice-dismiss',
                    disabled: this.state.isShippingLabelButtonBusy,
                  },
                  (0, e.createElement)(
                    'span',
                    { className: 'screen-reader-text' },
                    (0, r.__)('Close Print Label Banner.', 'woocommerce'),
                  ),
                ),
              ),
              (0, e.createElement)(v, {
                visible: t,
                onClose: this.closeDismissModal,
                onCloseAll: this.hideBanner,
                trackElementClicked: this.trackElementClicked,
              }),
            )
          : null;
      }
    }
    M.propTypes = {
      itemsCount: h().number.isRequired,
      isJetpackConnected: h().bool.isRequired,
      activePlugins: h().array.isRequired,
      activatePlugins: h().func.isRequired,
      installPlugins: h().func.isRequired,
      isRequesting: h().bool.isRequired,
    };
    const R = (0, c.compose)(
        (0, g.withSelect)(e => {
          const { isPluginsRequesting: n, isJetpackConnected: s, getActivePlugins: i } = e(
            t.PLUGINS_STORE_NAME,
          );
          return {
            isRequesting: n('activatePlugins') || n('installPlugins'),
            isJetpackConnected: s(),
            activePlugins: i(),
          };
        }),
        (0, g.withDispatch)(e => {
          const { activatePlugins: n, installPlugins: s } = e(t.PLUGINS_STORE_NAME);
          return { activatePlugins: n, installPlugins: s };
        }),
      )(M),
      j = ['wcAdminSettings', 'preloadSettings'],
      I = (0, _.getSetting)('admin', {}),
      W = Object.keys(I).reduce((e, t) => (j.includes(t) || (e[t] = I[t]), e), {});
    function N(e, t = !1, n = e => e) {
      if (j.includes(e))
        throw new Error(
          (0, r.__)('Mutable settings should be accessed via data store.', 'woocommerce'),
        );
      return n(W.hasOwnProperty(e) ? W[e] : t, t);
    }
    (0, _.getSetting)('adminUrl'),
      (0, _.getSetting)('countries'),
      (0, _.getSetting)('currency'),
      (0, _.getSetting)('locale'),
      (0, _.getSetting)('siteTitle'),
      (0, _.getSetting)('wcAssetUrl'),
      N('orderStatuses');
    const D = document.getElementById('wc-admin-shipping-banner-root'),
      q = (D.dataset.args && JSON.parse(D.dataset.args)) || {},
      $ = (0, t.withPluginsHydration)({
        ...N('plugins'),
        jetpackStatus: N('dataEndpoints', {}).jetpackStatus,
      })(R);
    (0, e.render)((0, e.createElement)($, { itemsCount: q.items }), D);
  })(),
    ((window.wc = window.wc || {}).printShippingLabelBanner = s);
})();
