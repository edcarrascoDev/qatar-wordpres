(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wp.element,
    a = window.wp.i18n,
    o = window.wp.components,
    n = window.wp.data,
    c = window.wp.compose,
    r = window.wc.data,
    i = window.wc.tracks,
    s = window.wc.explat,
    d = (0, c.compose)(
      (0, n.withDispatch)(e => {
        const { updateOptions: t } = e(r.OPTIONS_STORE_NAME);
        return { updateOptions: t };
      }),
    )(({ updateOptions: e }) => {
      const [n, c] = (0, t.useState)(!1),
        [r, d] = (0, t.useState)(!1),
        m = (0, t.useRef)(document.querySelector('#woocommerce_navigation_enabled')),
        w = async t => (
          'function' == typeof window.wcTracks.enable &&
            (t
              ? window.wcTracks.enable(() => {
                  (0, s.initializeExPlat)();
                })
              : (window.wcTracks.isEnabled = !1)),
          t && (0, i.recordEvent)('settings_features_tracking_enabled'),
          e({ woocommerce_allow_tracking: t ? 'yes' : 'no' })
        );
      return (
        (0, t.useEffect)(() => {
          if (!m.current) return;
          const e = e => {
              e.target.checked && ((e.target.checked = !1), c(!0));
            },
            t = m.current;
          return t.addEventListener('change', e, !1), () => t.removeEventListener('change', e);
        }, []),
        m.current && n
          ? (0, t.createElement)(
              o.Modal,
              {
                title: (0, a.__)('Build a Better WooCommerce', 'woocommerce'),
                onRequestClose: () => c(!1),
                className: 'woocommerce-beta-features-tracking-modal',
              },
              (0, t.createElement)(
                'p',
                null,
                (0, a.__)(
                  'Testing new features requires sharing non-sensitive data via ',
                  'woocommerce',
                ),
                (0, t.createElement)(
                  'a',
                  { href: 'https://woocommerce.com/usage-tracking?utm_medium=product' },
                  (0, a.__)('usage tracking', 'woocommerce'),
                ),
                (0, a.__)(
                  '. Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.',
                  'woocommerce',
                ),
              ),
              (0, t.createElement)(
                'div',
                { className: 'woocommerce-beta-features-tracking-modal__checkbox' },
                (0, t.createElement)(o.CheckboxControl, {
                  label: 'Enable usage tracking',
                  onChange: d,
                  checked: r,
                }),
              ),
              (0, t.createElement)(
                'div',
                { className: 'woocommerce-beta-features-tracking-modal__actions' },
                (0, t.createElement)(
                  o.Button,
                  {
                    isPrimary: !0,
                    onClick: async () => {
                      r ? (await w(!0), (m.current.checked = !0)) : await w(!1), c(!1);
                    },
                  },
                  (0, a.__)('Save', 'woocommerce'),
                ),
              ),
            )
          : null
      );
    }),
    m = document.createElement('div');
  m.setAttribute('id', 'beta-features-tracking'),
    (0, t.render)((0, t.createElement)(d, null), document.body.appendChild(m)),
    ((window.wc = window.wc || {}).betaFeaturesTrackingModal = e);
})();
