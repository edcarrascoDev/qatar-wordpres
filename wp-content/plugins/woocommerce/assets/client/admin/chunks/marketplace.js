'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [9669],
  {
    73224: (e, t, o) => {
      o.d(t, { Z: () => a });
      var r = o(69307),
        c = o(70444);
      const a = (0, r.createElement)(
        c.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, r.createElement)(c.Path, { d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z' }),
      );
    },
    86241: (e, t, o) => {
      o.d(t, { Z: () => a });
      var r = o(69307),
        c = o(70444);
      const a = (0, r.createElement)(
        c.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, r.createElement)(c.Path, { d: 'M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z' }),
      );
    },
    84560: (e, t, o) => {
      o.d(t, { Z: () => a });
      var r = o(69307),
        c = o(70444);
      const a = (0, r.createElement)(
        c.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(c.Path, {
          d:
            'M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z',
        }),
      );
    },
    25918: (e, t, o) => {
      o.d(t, { Z: () => a });
      var r = o(69307),
        c = o(70444);
      const a = (0, r.createElement)(
        c.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(c.Path, {
          fillRule: 'evenodd',
          d:
            'M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z',
          clipRule: 'evenodd',
        }),
      );
    },
    41790: (e, t, o) => {
      o.d(t, { FV: () => n, G3: () => c, RA: () => r, Sj: () => a });
      const r = ['image'],
        c = 60,
        a = 20,
        n = 200;
    },
    84279: (e, t, o) => {
      o.d(t, { LU: () => c, id: () => a });
      var r = o(92694);
      const c = 'entrepreneur-signup';
      (0, r.addFilter)(
        'woocommerce_admin_persisted_queries',
        'woocommerce_admin_customize_your_store',
        e => (e.push('ref'), e),
      );
      const a = () => new URLSearchParams(window.location.search).get('ref') === c;
    },
    33342: (e, t, o) => {
      o.d(t, {
        jf: () => b,
        mt: () => M,
        vY: () => f,
        nC: () => v,
        sw: () => E,
        B_: () => h,
        $p: () => N,
        wO: () => k,
      });
      var r = o(69307),
        c = o(65736),
        a = o(87608),
        n = o.n(a),
        s = o(55609),
        i = o(10431),
        l = o(76357),
        m = o(86020),
        u = o(9818);
      const d = ({ siteUrl: e }) =>
        (0, r.createElement)('iframe', {
          className: 'preview-iframe',
          src: e,
          title: 'Preview',
          tabIndex: -1,
        });
      var p = o(17062),
        _ = o(52228),
        w = o(34081),
        g = o(76373);
      const y = ({
          bannerTitle: e,
          bannerText: t,
          bannerClass: o,
          showAIDisclaimer: a,
          buttonIsLink: i,
          bannerButtonOnClick: u,
          bannerButtonText: d,
          secondaryButton: p,
          previewBanner: _,
          children: w,
        }) =>
          (0, r.createElement)(
            'div',
            { className: n()('woocommerce-customize-store-banner', o) },
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store-banner-content' },
              (0, r.createElement)(
                'div',
                { className: 'banner-actions' },
                (0, r.createElement)('h1', null, e),
                (0, r.createElement)('p', null, t),
                d &&
                  (0, r.createElement)(
                    s.Button,
                    { onClick: () => u && u(), variant: i ? 'link' : 'primary' },
                    d,
                  ),
                p,
                a &&
                  (0, r.createElement)(
                    'p',
                    { className: 'ai-disclaimer' },
                    (0, l.Z)({
                      mixedString: (0, c.__)(
                        'Powered by experimental AI. {{link}}Learn more{{/link}}',
                        'woocommerce',
                      ),
                      components: {
                        link: (0, r.createElement)(m.Link, {
                          href: 'https://automattic.com/ai-guidelines',
                          target: '_blank',
                          type: 'external',
                        }),
                      },
                    }),
                  ),
              ),
              w,
            ),
            _,
          ),
        h = () =>
          (0, r.createElement)(y, {
            bannerTitle: (0, c.__)('Looking to design your store using AI?', 'woocommerce'),
            bannerText: (0, c.__)(
              "Unfortunately, the [AI Store designer] isn't available right now as we can't detect your network. Please check your internet connection.",
              'woocommerce',
            ),
            bannerClass: 'offline-banner',
            bannerButtonOnClick: () => {},
            showAIDisclaimer: !0,
          }),
        E = ({ sendEvent: e }) =>
          (0, r.createElement)(y, {
            bannerTitle: (0, c.__)('Looking to design your store using AI?', 'woocommerce'),
            bannerText: (0, c.__)(
              "It looks like you're using Jetpack's offline mode — switch to online mode to start designing with AI.",
              'woocommerce',
            ),
            bannerClass: 'offline-banner',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e({ type: 'JETPACK_OFFLINE_HOWTO' });
            },
            bannerButtonText: (0, c.__)('Find out how', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        v = ({ setOpenDesignChangeWarningModal: e }) =>
          (0, r.createElement)(y, {
            bannerTitle: (0, c.__)('Use the power of AI to design your store', 'woocommerce'),
            bannerText: (0, c.__)(
              'Design the look of your store, create pages, and generate copy using our built-in AI tools.',
              'woocommerce',
            ),
            bannerClass: '',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e(!0);
            },
            bannerButtonText: (0, c.__)('Design with AI', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        b = ({ sendEvent: e }) =>
          (0, r.createElement)(y, {
            bannerTitle: (0, c.__)('Use the power of AI to design your store', 'woocommerce'),
            bannerText: (0, c.__)(
              'Design the look of your store, create pages, and generate copy using our built-in AI tools.',
              'woocommerce',
            ),
            bannerClass: '',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e({ type: 'DESIGN_WITH_AI' });
            },
            bannerButtonText: (0, c.__)('Design with AI', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        k = ({ setOpenDesignChangeWarningModal: e }) =>
          (0, r.createElement)(y, {
            bannerTitle: (0, c.__)('Use the power of AI to design your store', 'woocommerce'),
            bannerText: (0, c.__)(
              'Design the look of your store, create pages, and generate copy using our built-in AI tools.',
              'woocommerce',
            ),
            bannerClass: '',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e(!0);
            },
            bannerButtonText: (0, c.__)('Design with AI', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        N = ({ redirectToCYSFlow: e }) => {
          const [t, o] = (0, r.useState)(!1),
            a = (0, u.useSelect)(e => e('core').getCurrentTheme(), []),
            n = 'twentytwentyfour' === a?.stylesheet;
          return (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(y, {
              bannerTitle: (0, c.__)('Design your own', 'woocommerce'),
              bannerText: (0, c.__)(
                'Quickly create a beautiful store using our built-in store designer. Choose your layout, select a style, and much more.',
                'woocommerce',
              ),
              bannerClass: 'no-ai-banner',
              bannerButtonText: (0, c.__)('Start designing', 'woocommerce'),
              bannerButtonOnClick: () => {
                n ? e() : o(!0);
              },
              showAIDisclaimer: !1,
            }),
            t && (0, r.createElement)(w.Nh, { setIsModalOpen: o, redirectToCYSFlow: e }),
          );
        },
        M = ({ setOpenDesignChangeWarningModal: e }) => {
          const t = (0, r.createElement)(
              s.Button,
              {
                className: '',
                onClick: () => {
                  (0, g.L)('customize_your_store_intro_create_a_new_one_click'), e(!0);
                },
                variant: 'secondary',
              },
              (0, c.__)('Create a new one', 'woocommerce'),
            ),
            o = (0, p.O3)('siteUrl') + '?cys-hide-admin-bar=1';
          return (0, r.createElement)(
            y,
            {
              bannerTitle: (0, c.__)('Customize your custom theme', 'woocommerce'),
              bannerText: (0, c.__)(
                'Keep customizing the look of your AI-generated store, or start over and create a new one.',
                'woocommerce',
              ),
              bannerClass: 'existing-ai-theme-banner',
              buttonIsLink: !1,
              bannerButtonOnClick: () => {
                (0, g.L)('customize_your_store_intro_customize_click'),
                  (0, _.tJ)(
                    window,
                    (0, i.getNewPath)({ customizing: !0 }, '/customize-store/assembler-hub', {}),
                  );
              },
              bannerButtonText: (0, c.__)('Customize', 'woocommerce'),
              secondaryButton: t,
              showAIDisclaimer: !0,
            },
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-block-preview-container' },
              (0, r.createElement)(
                'div',
                { className: 'iframe-container' },
                (0, r.createElement)(d, { siteUrl: o }),
              ),
            ),
          );
        },
        f = () => {
          const e = (0, p.O3)('siteUrl') + '?cys-hide-admin-bar=1';
          return (0, r.createElement)(y, {
            bannerTitle: (0, c.__)('Edit your custom theme', 'woocommerce'),
            bannerText: (0, c.__)(
              'Continue to customize your store using the store designer. Change your color palette, fonts, page layouts, and more.',
              'woocommerce',
            ),
            bannerClass: 'existing-no-ai-theme-banner',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              (0, g.L)('customize_your_store_intro_customize_click'),
                (0, _.tJ)(
                  window,
                  (0, i.getNewPath)({ customizing: !0 }, '/customize-store/assembler-hub', {}),
                );
            },
            bannerButtonText: (0, c.__)('Customize your theme', 'woocommerce'),
            showAIDisclaimer: !1,
            previewBanner: (0, r.createElement)(d, { siteUrl: e }),
          });
        };
    },
    34081: (e, t, o) => {
      o.d(t, { Fc: () => m, MO: () => l, Nh: () => d, ab: () => u });
      var r = o(69307),
        c = o(55609),
        a = o(65736),
        n = o(86020),
        s = o(17062),
        i = o(76373);
      const l = ({
          setOpenDesignChangeWarningModal: e,
          sendEvent: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, r.createElement)(
            c.Modal,
            {
              className: o,
              title: (0, a.__)('Are you sure you want to start a new design?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, r.createInterpolateElement)(
                (0, a.__)(
                  "The Store Designer will create a new store design for you, and you'll lose any changes you've made to your active theme. If you'd prefer to continue editing your theme, you can do so via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                ),
                {
                  EditorLink: (0, r.createElement)(n.Link, {
                    onClick: () => (window.open(`${s.SX}site-editor.php`, '_blank'), !1),
                    href: '',
                  }),
                },
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, r.createElement)(
                c.Button,
                { onClick: () => e(!1), variant: 'link' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                c.Button,
                { onClick: () => t({ type: 'DESIGN_WITH_AI' }), variant: 'primary' },
                (0, a.__)('Design with AI', 'woocommerce'),
              ),
            ),
          ),
        m = ({
          setOpenDesignChangeWarningModal: e,
          sendEvent: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, r.createElement)(
            c.Modal,
            {
              className: o,
              title: (0, a.__)('Are you sure you want to start a new design?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, r.createInterpolateElement)(
                (0, a.__)(
                  "The Store Designer will create a new store design for you, and you'll lose any changes you've made to your active theme. If you'd prefer to continue editing your theme, you can do so via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                ),
                {
                  EditorLink: (0, r.createElement)(n.Link, {
                    onClick: () => (window.open(`${s.SX}site-editor.php`, '_blank'), !1),
                    href: '',
                  }),
                },
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, r.createElement)(
                c.Button,
                { onClick: () => e(!1), variant: 'link' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                c.Button,
                { onClick: () => t({ type: 'DESIGN_WITH_AI' }), variant: 'primary' },
                (0, a.__)('Design with AI', 'woocommerce'),
              ),
            ),
          ),
        u = ({
          setOpenDesignChangeWarningModal: e,
          sendEvent: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, r.createElement)(
            c.Modal,
            {
              className: o,
              title: (0, a.__)('Are you sure you want to start over?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, r.createInterpolateElement)(
                (0, a.__)(
                  "You'll be asked to provide your business info again, and will lose your existing AI design. If you want to customize your existing design, you can do so via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                ),
                {
                  EditorLink: (0, r.createElement)(n.Link, {
                    onClick: () => (window.open(`${s.SX}site-editor.php`, '_blank'), !1),
                    href: '',
                  }),
                },
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, r.createElement)(
                c.Button,
                { onClick: () => e(!1), variant: 'link' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                c.Button,
                {
                  onClick: () => {
                    t({ type: 'DESIGN_WITH_AI' }),
                      (0, i.L)('customize_your_store_intro_start_again_click');
                  },
                  variant: 'primary',
                },
                (0, a.__)('Start again', 'woocommerce'),
              ),
            ),
          ),
        d = ({ setIsModalOpen: e, redirectToCYSFlow: t }) =>
          (0, r.createElement)(
            c.Modal,
            {
              className: 'woocommerce-customize-store__theme-switch-warning-modal',
              title: (0, a.__)('Are you sure you want to design a new theme?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, a.__)(
                'Your active theme will be changed and you could lose any changes you’ve made to it.',
                'woocommerce',
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__theme-switch-warning-modal-footer' },
              (0, r.createElement)(
                c.Button,
                {
                  onClick: () => {
                    e(!1);
                  },
                  variant: 'link',
                },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                c.Button,
                {
                  onClick: () => {
                    e(!1), (0, i.L)('customize_your_store_agree_to_theme_switch_click'), t();
                  },
                  variant: 'primary',
                },
                (0, a.__)('Design a new theme', 'woocommerce'),
              ),
            ),
          );
    },
    76373: (e, t, o) => {
      o.d(t, { L: () => n });
      var r = o(14599),
        c = o(84279),
        a = o(34052);
      const n = (e, t) => {
        (0, a.V)() && (0, c.id)()
          ? (0, r.recordEvent)(e, { ...t, ref: c.LU })
          : (0, r.recordEvent)(e, t);
      };
    },
    52228: (e, t, o) => {
      o.d(t, {
        $$: () => d,
        FT: () => l,
        RS: () => i,
        cK: () => u,
        cL: () => a,
        eP: () => n,
        nO: () => c,
        rS: () => p,
        sr: () => s,
        tJ: () => m,
      });
      var r = o(41790);
      function c(e) {
        window.parent.postMessage(e, '*');
      }
      function a(e) {
        return e.document !== e.parent.document;
      }
      function n() {
        window.parent.postMessage({ type: 'iframe-loaded' }, '*');
      }
      function s(e) {
        window.addEventListener('message', t => {
          'iframe-loaded' === t.data.type && e();
        });
      }
      function i(e) {
        window.addEventListener('message', t => {
          'assemberBackButtonClicked' === t.data.type && e();
        });
      }
      function l() {
        const e = e => {
          'navigate' === e.data.type && (window.location.href = e.data.url);
        };
        return (
          window.addEventListener('message', e, !1),
          () => {
            window.removeEventListener('message', e, !1);
          }
        );
      }
      function m(e, t) {
        a(e) ? e.parent.postMessage({ type: 'navigate', url: t }, '*') : (e.location.href = t);
      }
      function u(e) {
        const t = e.contentDocument || e.contentWindow?.document;
        t?.addEventListener('click', function(e) {
          if (e.target) {
            const t = e.target?.closest('a');
            t && '_blank' === t.target
              ? (e.preventDefault(), window.open(t.href, '_blank'))
              : t && (e.preventDefault(), (window.location.href = t.href));
          }
        });
      }
      const d = (e, t = r.G3) =>
          e.replaceAll(/<!-- wp:site-logo\s*(\{.*?\})?\s*\/-->/g, (e, o) => {
            if (o) {
              const e = JSON.parse(o);
              return (e.width = t), `\x3c!-- wp:site-logo ${JSON.stringify(e)} /--\x3e`;
            }
            return `\x3c!-- wp:site-logo {"width":${t}} /--\x3e`;
          }),
        p = (e, t) =>
          e
            .map((e, o, r) => {
              const c = r[o + 1];
              if (!c) return [e];
              const a = [e],
                n = (c.progress - e.progress) / t;
              for (let o = 0; o < t; o++) a.push({ ...e, progress: e.progress + (o + 1) * n });
              return a;
            })
            .flat();
    },
    12845: (e, t, o) => {
      o.r(t), o.d(t, { default: () => $t });
      var r = o(69307),
        c = o(17062);
      const a = (0, r.createContext)({
        isLoading: !1,
        setIsLoading: () => {},
        selectedTab: '',
        setSelectedTab: () => {},
        isProductInstalled: () => !1,
        addInstalledProduct: () => {},
        hasBusinessServices: !1,
        setHasBusinessServices: () => {},
      });
      function n(e) {
        const [t, o] = (0, r.useState)(!0),
          [n, s] = (0, r.useState)(''),
          [i, l] = (0, r.useState)([]),
          [m, u] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          const e = (0, c.O3)('wccomHelper', {}),
            t = e?.installedProducts;
          l(t);
        }, []);
        const d = {
          isLoading: t,
          setIsLoading: o,
          selectedTab: n,
          setSelectedTab: s,
          isProductInstalled: function(e) {
            return i.includes(e);
          },
          addInstalledProduct: function(e) {
            l([...i, e]);
          },
          hasBusinessServices: m,
          setHasBusinessServices: u,
        };
        return (0, r.createElement)(a.Provider, { value: d }, e.children);
      }
      var s = o(65736);
      function i() {
        return (0, r.createElement)(
          'h1',
          { className: 'woocommerce-marketplace__header-title' },
          (0, s.__)('Extensions', 'woocommerce'),
        );
      }
      var l = o(55609),
        m = o(70444);
      const u = (0, r.createElement)(
        m.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(m.Path, {
          fillRule: 'evenodd',
          d:
            'M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
          clipRule: 'evenodd',
        }),
      );
      var d = o(23374),
        p = o(12532);
      const _ = (0, r.createElement)(
        m.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(m.Path, {
          d:
            'M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z',
        }),
      );
      function w(e) {
        const { setIsModalOpen: t, disconnectURL: o } = e,
          [c, a] = (0, r.useState)(!1),
          n = () => t(!1);
        return (0, r.createElement)(
          l.Modal,
          {
            title: (0, s.__)('Are you sure?', 'woocommerce'),
            onRequestClose: n,
            focusOnMount: !0,
            className: 'woocommerce-marketplace__header-account-modal',
            style: { borderRadius: 4 },
            overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
          },
          (0, r.createElement)(
            'p',
            { className: 'woocommerce-marketplace__header-account-modal-text' },
            (0, s.__)(
              'Keep your your account connected to manage your subscriptions, get updates and support for your extensions and themes.',
              'woocommerce',
            ),
          ),
          (0, r.createElement)(
            l.ButtonGroup,
            { className: 'woocommerce-marketplace__header-account-modal-button-group' },
            (0, r.createElement)(
              l.Button,
              {
                variant: 'tertiary',
                href: o,
                onClick: () => a(!c),
                isBusy: c,
                isDestructive: !0,
                className: 'woocommerce-marketplace__header-account-modal-button',
              },
              (0, s.__)('Disconnect account', 'woocommerce'),
            ),
            (0, r.createElement)(
              l.Button,
              {
                variant: 'primary',
                onClick: n,
                className: 'woocommerce-marketplace__header-account-modal-button',
              },
              (0, s.__)('Keep connected', 'woocommerce'),
            ),
          ),
        );
      }
      const g = 'discover',
        y = 'https://woocommerce.com',
        h = '/extensions',
        E = '/wp-json/wccom-extensions/1.0/search',
        v = '/wp-json/wccom-extensions/1.0/categories',
        b = 60,
        k = 8,
        N = y + '/cart/',
        M =
          y +
          '/document/managing-woocommerce-com-subscriptions/#transfer-a-woocommerce-com-subscription',
        f = y + '/document/managing-woocommerce-com-subscriptions/#share-a-subscription',
        C = c.SX + 'plugins.php',
        I = y + '/product-download/woo-update-manager';
      var x = o(86989),
        T = o.n(x),
        D = o(9818);
      let S = (function(e) {
          return (
            (e.theme = 'theme'),
            (e.extension = 'extension'),
            (e.businessService = 'business-service'),
            e
          );
        })({}),
        A = (function(e) {
          return (
            (e.theme = 'theme'),
            (e.extension = 'extension'),
            (e.businessService = 'business-service'),
            (e.all = 'all'),
            e
          );
        })({}),
        z = (function(e) {
          return (e.Success = 'success'), (e.Error = 'error'), e;
        })({});
      const L = { notices: {} },
        O = (0, D.createReduxStore)('woocommerce-admin/subscription-notices', {
          reducer(e = L, t) {
            switch (t.type) {
              case 'ADD_NOTICE':
                return {
                  ...e,
                  notices: {
                    ...e.notices,
                    [t.productKey]: {
                      productKey: t.productKey,
                      message: t.message,
                      status: t.status,
                      options: t.options,
                    },
                  },
                };
              case 'REMOVE_NOTICE':
                const o = { ...e.notices };
                return o[t.productKey] && delete o[t.productKey], { ...e, notices: o };
            }
            return e;
          },
          actions: {
            addNotice: (e, t, o, r) => ({
              type: 'ADD_NOTICE',
              productKey: e,
              message: t,
              status: o,
              options: r,
            }),
            removeNotice: e => ({ type: 'REMOVE_NOTICE', productKey: e }),
          },
          selectors: {
            notices: e => (e ? Object.values(e.notices) : []),
            getNotice(e, t) {
              if (e) return e.notices[t];
            },
          },
        });
      (0, D.register)(O);
      const j = 100,
        U = new Map();
      function P() {
        for (; U.size > j; ) U.delete(U.keys().next().value);
      }
      async function B(e, t) {
        return U.get(e)
          ? new Promise(t => {
              t(U.get(e));
            })
          : new Promise((o, r) => {
              fetch(e, { signal: t })
                .then(e => {
                  if (!e.ok) throw new Error(e.statusText);
                  return e.json();
                })
                .then(t => {
                  U.set(e, t), P(), o(t);
                })
                .catch(() => {
                  r();
                });
            });
      }
      async function Q(e, t) {
        const o = y + E + '?' + e.toString();
        return new Promise((e, r) => {
          B(o, t)
            .then(t => {
              const o = t.products.map(e => {
                var t, o, r;
                return {
                  id: e.id,
                  slug: e.slug,
                  title: e.title,
                  image: e.image,
                  type: e.type,
                  freemium_type: e.freemium_type,
                  description: e.excerpt,
                  vendorName: e.vendor_name,
                  vendorUrl: e.vendor_url,
                  icon: e.icon,
                  url: e.link,
                  price: null !== (t = e.raw_price) && void 0 !== t ? t : e.price,
                  averageRating: null !== (o = e.rating) && void 0 !== o ? o : null,
                  reviewsCount: null !== (r = e.reviews_count) && void 0 !== r ? r : null,
                  isInstallable: e.is_installable,
                  featuredImage: e.featured_image,
                  productCategory: e.product_category,
                  color: e.color,
                };
              });
              e(o);
            })
            .catch(() => r);
        });
      }
      async function R() {
        let e = '/wc/v3/marketplace/featured';
        c.MV.userLocale && (e = `${e}?locale=${c.MV.userLocale}`);
        try {
          return await (async function(e) {
            const t = JSON.stringify(e);
            return U.get(t)
              ? new Promise(e => {
                  e(U.get(t));
                })
              : new Promise((o, r) => {
                  T()(e)
                    .then(e => {
                      U.set(t, e), P(), o(e);
                    })
                    .catch(() => {
                      r();
                    });
                });
          })({ path: e.toString() });
        } catch (e) {
          return [];
        }
      }
      function Y(e) {
        if (!0 === e.active) return Promise.resolve();
        const t = new URLSearchParams();
        return (
          t.append('product_key', e.product_key),
          T()({
            path: '/wc/v3/marketplace/subscriptions/connect'.toString(),
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: t,
          })
        );
      }
      function Z(e, t) {
        return new Promise((o, r) => {
          window.wp.updates
            ? window.wp.updates.ajax(e, {
                ...t,
                success: e => {
                  o({ success: !0, data: e });
                },
                error: e => {
                  r({ success: !1, data: { message: e.errorMessage } });
                },
              })
            : r((0, s.__)('Please reload and try again', 'woocommerce'));
        });
      }
      function G(e, t) {
        return Z('install-' + e, { slug: t });
      }
      function F(e, t, o, c) {
        o === z.Error
          ? (0, D.dispatch)(O).addNotice(e, t, o, c)
          : (c?.icon || (c = { ...c, icon: (0, r.createElement)(l.Icon, { icon: 'saved' }) }),
            (0, D.dispatch)('core/notices').createSuccessNotice(t, c));
      }
      const W = e => {
          (0, D.dispatch)(O).removeNotice(e);
        },
        V = e => ({
          id: e.product_id,
          title: e.product_name,
          image: '',
          type: e.product_type,
          description: '',
          vendorName: '',
          vendorUrl: '',
          icon: e.product_icon,
          url: e.product_url,
          price: -1,
          averageRating: null,
          reviewsCount: null,
          isInstallable: !1,
        }),
        H = (e, t) => {
          if (!e) return e;
          const o = new URL(e);
          return o
            ? (t.forEach(([e, t]) => {
                o.searchParams.set(e, t);
              }),
              o.toString())
            : e;
        },
        $ = e =>
          H(N, [
            ['renew_product', e.product_id.toString()],
            ['product_key', e.product_key],
            ['order_id', e.order_id.toString()],
          ]),
        K = e => H(N, [['add-to-cart', e.product_id.toString()]]),
        J = () => {
          const e = (0, c.O3)('wccomHelper', {});
          return e.connectURL
            ? H(e.connectURL, [['redirect_admin_url', encodeURIComponent(window.location.href)]])
            : '';
        };
      function X() {
        var e, t;
        const [o, a] = (0, r.useState)(!1),
          n = () => a(!0),
          i = (0, c.O3)('wccomHelper', {}),
          m = null !== (e = i?.isConnected) && void 0 !== e && e,
          g = J(),
          h = i?.userEmail,
          E = null !== (t = i?.userAvatar) && void 0 !== t ? t : u,
          v = y + '/my-dashboard/',
          b = m ? v : g,
          k = m ? (0, s.__)('Connected', 'woocommerce') : (0, s.__)('Not Connected', 'woocommerce');
        return (0, r.createElement)(
          r.Fragment,
          null,
          (0, r.createElement)(
            l.DropdownMenu,
            {
              className: 'woocommerce-marketplace__user-menu',
              icon: m
                ? (0, r.createElement)('img', {
                    src: E,
                    alt: '',
                    className: 'woocommerce-marketplace__menu-avatar-image',
                  })
                : u,
              label: (0, s.__)('User options', 'woocommerce'),
            },
            () =>
              (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  l.MenuGroup,
                  { className: 'woocommerce-layout__homescreen-display-options', label: k },
                  (0, r.createElement)(
                    l.MenuItem,
                    { className: 'woocommerce-marketplace__menu-item', href: b },
                    m
                      ? (0, r.createElement)(
                          r.Fragment,
                          null,
                          (0, r.createElement)(d.Z, {
                            icon: u,
                            size: 24,
                            className: 'woocommerce-marketplace__menu-icon',
                          }),
                          (0, r.createElement)(
                            'span',
                            { className: 'woocommerce-marketplace__main-text' },
                            h,
                          ),
                        )
                      : (0, r.createElement)(
                          r.Fragment,
                          null,
                          (0, r.createElement)(d.Z, {
                            icon: u,
                            size: 24,
                            className: 'woocommerce-marketplace__menu-icon',
                          }),
                          (0, r.createElement)(
                            'div',
                            { className: 'woocommerce-marketplace__menu-text' },
                            (0, s.__)('Connect account', 'woocommerce'),
                            (0, r.createElement)(
                              'span',
                              { className: 'woocommerce-marketplace__sub-text' },
                              (0, s.__)(
                                'Manage your subscriptions, get updates and support for your extensions and themes.',
                                'woocommerce',
                              ),
                            ),
                          ),
                        ),
                  ),
                  (0, r.createElement)(
                    l.MenuItem,
                    { href: v },
                    (0, r.createElement)(d.Z, {
                      icon: p.Z,
                      size: 24,
                      className: 'woocommerce-marketplace__menu-icon',
                    }),
                    (0, s.__)('WooCommerce.com account', 'woocommerce'),
                  ),
                ),
                m &&
                  (0, r.createElement)(
                    l.MenuGroup,
                    { className: 'woocommerce-layout__homescreen-display-options' },
                    (0, r.createElement)(
                      l.MenuItem,
                      { onClick: n },
                      (0, r.createElement)(d.Z, {
                        icon: _,
                        size: 24,
                        className: 'woocommerce-marketplace__menu-icon',
                      }),
                      (0, s.__)('Disconnect account', 'woocommerce'),
                    ),
                  ),
              ),
          ),
          o && (0, r.createElement)(w, { setIsModalOpen: a, disconnectURL: g }),
        );
      }
      var q,
        ee = o(87608),
        te = o.n(ee),
        oe = o(10431);
      const re = (0, c.O3)('wccomHelper', {}),
        ce = null !== (q = re?.wooUpdateCount) && void 0 !== q ? q : 0,
        ae = {
          search: {
            name: 'search',
            title: (0, s.__)('Search results', 'woocommerce'),
            showUpdateCount: !1,
            updateCount: 0,
          },
          discover: {
            name: 'discover',
            title: (0, s.__)('Discover', 'woocommerce'),
            showUpdateCount: !1,
            updateCount: 0,
          },
          extensions: {
            name: 'extensions',
            title: (0, s.__)('Browse', 'woocommerce'),
            showUpdateCount: !1,
            updateCount: 0,
          },
          themes: {
            name: 'themes',
            title: (0, s.__)('Themes', 'woocommerce'),
            showUpdateCount: !1,
            updateCount: 0,
          },
          'business-services': {
            name: 'business-services',
            title: (0, s.__)('Business services', 'woocommerce'),
            showUpdateCount: !1,
            updateCount: 0,
          },
          'my-subscriptions': {
            name: 'my-subscriptions',
            title: (0, s.__)('My subscriptions', 'woocommerce'),
            showUpdateCount: !0,
            updateCount: ce,
          },
        },
        ne = (e, t = !1) => {
          if ('' === e) return ae;
          const o = { ...ae };
          return 'search' !== e && delete o.search, t || delete o['business-services'], o;
        },
        se = e => {
          const { additionalClassNames: t } = e,
            o = (0, r.useContext)(a),
            { selectedTab: c, setSelectedTab: n, hasBusinessServices: s } = o,
            [i, m] = (0, r.useState)(ne('')),
            u = (0, oe.useQuery)();
          return (
            (0, r.useEffect)(() => {
              u?.tab && ae[u.tab] ? n(u.tab) : Object.keys(u).length > 0 && n(g);
            }, [u, n]),
            (0, r.useEffect)(() => {
              m(ne(c, s));
            }, [c, s]),
            (0, r.createElement)(
              'nav',
              { className: te()('woocommerce-marketplace__tabs', t || []) },
              ((e, t) => {
                const { selectedTab: o, setSelectedTab: c } = e,
                  a = e => {
                    e !== o &&
                      (c(e),
                      (e => {
                        (0, oe.navigateTo)({
                          url: (0, oe.getNewPath)({ tab: e === g ? void 0 : e }, h, {}),
                        });
                      })(e));
                  },
                  n = [];
                for (const e in t)
                  n.push(
                    ae[e]?.href
                      ? (0, r.createElement)(
                          'a',
                          {
                            className: te()(
                              'woocommerce-marketplace__tab-button',
                              'components-button',
                              `woocommerce-marketplace__tab-${e}`,
                            ),
                            href: ae[e]?.href,
                            key: e,
                          },
                          ae[e]?.title,
                        )
                      : (0, r.createElement)(
                          l.Button,
                          {
                            className: te()(
                              'woocommerce-marketplace__tab-button',
                              `woocommerce-marketplace__tab-${e}`,
                              { 'is-active': e === o },
                            ),
                            onClick: () => a(e),
                            key: e,
                          },
                          ae[e]?.title,
                          ae[e]?.showUpdateCount &&
                            ae[e]?.updateCount > 0 &&
                            (0, r.createElement)(
                              'span',
                              { className: 'woocommerce-marketplace__update-count' },
                              (0, r.createElement)('span', null, ' ', ae[e]?.updateCount, ' '),
                            ),
                        ),
                  );
                return n;
              })(o, i),
            )
          );
        },
        ie = (0, r.createElement)(
          m.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, r.createElement)(m.Path, {
            d:
              'M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z',
          }),
        ),
        le = (0, s.__)('Search for extensions, themes, and business services', 'woocommerce'),
        me = (0, s.__)('Search for extensions and themes', 'woocommerce'),
        ue = function() {
          const [e, t] = (0, r.useState)(''),
            { hasBusinessServices: o } = (0, r.useContext)(a),
            c = (0, oe.useQuery)(),
            n = o ? le : me;
          (0, r.useEffect)(() => {
            c.term ? t(c.term) : t('');
          }, [c.term]),
            (0, r.useEffect)(() => {
              'search' !== c.tab && t('');
            }, [c.tab]);
          const i = () => {
            const t = e.trim(),
              o = {};
            return (
              '' !== t && ((o.term = t), (o.tab = 'search')),
              (0, oe.navigateTo)({ url: (0, oe.getNewPath)(o, h, {}) }),
              []
            );
          };
          return (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__search' },
            (0, r.createElement)(
              'label',
              { className: 'screen-reader-text', htmlFor: 'woocommerce-marketplace-search-query' },
              n,
            ),
            (0, r.createElement)('input', {
              id: 'woocommerce-marketplace-search-query',
              value: e,
              className: 'woocommerce-marketplace__search-input',
              type: 'search',
              name: 'woocommerce-marketplace-search-query',
              placeholder: n,
              onChange: e => {
                t(e.target.value);
              },
              onKeyUp: e => {
                'Enter' === e.key && i(), 'Escape' === e.key && t('');
              },
            }),
            (0, r.createElement)(
              'button',
              {
                id: 'woocommerce-marketplace-search-button',
                className: 'woocommerce-marketplace__search-button',
                'aria-label': (0, s.__)('Search', 'woocommerce'),
                onClick: i,
              },
              (0, r.createElement)(d.Z, { icon: ie, size: 32 }),
            ),
          );
        };
      function de() {
        return (0, r.createElement)(
          'header',
          { className: 'woocommerce-marketplace__header' },
          (0, r.createElement)(i, null),
          (0, r.createElement)(se, {
            additionalClassNames: ['woocommerce-marketplace__header-tabs'],
          }),
          (0, r.createElement)(ue, null),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__header-meta' },
            (0, r.createElement)(X, null),
          ),
        );
      }
      var pe = o(14599),
        _e = o(96483),
        we = o(67221);
      const ge = function(e) {
          const { product: t } = e,
            { user: o, currentUserCan: c } = (0, we.useUser)(),
            { selectedTab: n, isProductInstalled: i } = (0, r.useContext)(a);
          return (
            (m = t),
            !(
              o &&
              m &&
              c('install_plugins') &&
              m.isInstallable &&
              'theme' !== m.type &&
              'discover' !== n
            ) ||
            (m.slug && i(m.slug))
              ? (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-marketplace__product-card__price' },
                    (0, r.createElement)(
                      'span',
                      { className: 'woocommerce-marketplace__product-card__price-label' },
                      0 === t.price
                        ? (0, s.__)('Free download', 'woocommerce')
                        : 'primary' === t.freemium_type
                        ? (0, s.__)('Free plan available', 'woocommerce')
                        : '$' + t.price,
                    ),
                    (0, r.createElement)(
                      'span',
                      { className: 'woocommerce-marketplace__product-card__price-billing' },
                      'primary' === t.freemium_type
                        ? ''
                        : 0 !== t.price
                        ? (0, s.__)(' annually', 'woocommerce')
                        : '',
                    ),
                  ),
                  (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-marketplace__product-card__rating' },
                    null !== t.averageRating &&
                      (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(
                          'span',
                          { className: 'woocommerce-marketplace__product-card__rating-icon' },
                          (0, r.createElement)(l.Icon, { icon: 'star-filled', size: 16 }),
                        ),
                        (0, r.createElement)(
                          'span',
                          { className: 'woocommerce-marketplace__product-card__rating-average' },
                          t.averageRating,
                        ),
                        (0, r.createElement)(
                          'span',
                          { className: 'woocommerce-marketplace__product-card__rating-count' },
                          '(',
                          t.reviewsCount,
                          ')',
                        ),
                      ),
                  ),
                )
              : (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-marketplace__product-card__add-to-store' },
                    (0, r.createElement)(
                      l.Button,
                      {
                        variant: 'secondary',
                        onClick: function() {
                          (0, pe.recordEvent)('marketplace_add_to_store_clicked', {
                            product_id: t.id,
                          }),
                            (0, oe.navigateTo)({
                              url: (0, oe.getNewPath)({ installProduct: t.id }),
                            });
                        },
                      },
                      (0, s.__)('Add to Store', 'woocommerce'),
                    ),
                  ),
                )
          );
          var m;
        },
        ye = function(e) {
          var t;
          const { isLoading: o, type: c } = e,
            a = (0, oe.useQuery)(),
            n =
              null !== (t = e.product) && void 0 !== t
                ? t
                : {
                    title: '',
                    description: '',
                    vendorName: '',
                    vendorUrl: '',
                    icon: '',
                    label: null,
                    primary_color: null,
                    url: '',
                    price: 0,
                    image: '',
                    averageRating: null,
                    reviewsCount: null,
                    featuredImage: '',
                    color: '',
                    productCategory: '',
                  };
          function i() {
            return 'promoted' === n.label;
          }
          function m(t, o) {
            const r = e.tracksData;
            r.position && (o.position = r.position),
              r.label && (o.label = r.label),
              r.group && (o.group = r.group),
              r.searchTerm && (o.search_term = r.searchTerm),
              r.category && (o.category = r.category),
              (0, pe.queueRecordEvent)(t, o);
          }
          const u = c === S.theme,
            d = c === S.businessService;
          let p = n?.vendorName;
          n?.vendorName &&
            n?.vendorUrl &&
            (p = (0, r.createElement)(
              'a',
              {
                href: n.vendorUrl,
                rel: 'noopener noreferrer',
                onClick: () => {
                  m('marketplace_product_card_vendor_clicked', {
                    product: n.title,
                    vendor: n.vendorName,
                    product_type: c,
                  });
                },
              },
              n.vendorName,
            ));
          const _ = te()(
              'woocommerce-marketplace__product-card',
              `woocommerce-marketplace__product-card--${c}`,
              { 'is-loading': o, 'is-small': e.small, 'is-sponsored': i() },
            ),
            w = () =>
              (0, r.createElement)(
                'a',
                {
                  className: 'woocommerce-marketplace__product-card__link',
                  href: a.ref ? H(n.url, [['utm_content', a.ref]]) : n.url,
                  rel: 'noopener noreferrer',
                  onClick: () => {
                    m('marketplace_product_card_clicked', {
                      product: n.title,
                      vendor: n.vendorName,
                      product_type: c,
                    });
                  },
                },
                o ? ' ' : n.title,
              );
          return (0, r.createElement)(
            l.Card,
            {
              className: _,
              'aria-hidden': o,
              style:
                i() && n.primary_color
                  ? {
                      background: `linear-gradient(${n.primary_color} 0, ${n.primary_color} 5px, white 5px, white)`,
                    }
                  : {},
            },
            d
              ? (0, r.createElement)(
                  () =>
                    (0, r.createElement)(
                      'div',
                      { className: 'woocommerce-marketplace__business-card' },
                      (0, r.createElement)(
                        'div',
                        {
                          className: 'woocommerce-marketplace__business-card__header',
                          style: { backgroundColor: n.color },
                        },
                        (0, r.createElement)('img', { src: `${n.featuredImage}?h=288`, alt: '' }),
                      ),
                      (0, r.createElement)(
                        'div',
                        { className: 'woocommerce-marketplace__business-card__content' },
                        (0, r.createElement)(
                          'div',
                          { className: 'woocommerce-marketplace__business-card__main-content' },
                          (0, r.createElement)('h2', null, (0, r.createElement)(w, null)),
                          (0, r.createElement)('p', null, n.description),
                        ),
                        (0, r.createElement)(
                          'div',
                          { className: 'woocommerce-marketplace__business-card__badge' },
                          (0, r.createElement)('span', null, n.productCategory),
                        ),
                      ),
                    ),
                  null,
                )
              : (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-marketplace__product-card__content' },
                  u &&
                    (0, r.createElement)(
                      'div',
                      { className: 'woocommerce-marketplace__product-card__image' },
                      !o &&
                        (0, r.createElement)('img', {
                          className: 'woocommerce-marketplace__product-card__image-inner',
                          src: n.image,
                          alt: n.title,
                        }),
                    ),
                  (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-marketplace__product-card__header' },
                    (0, r.createElement)(
                      'div',
                      { className: 'woocommerce-marketplace__product-card__details' },
                      !u &&
                        (0, r.createElement)(
                          r.Fragment,
                          null,
                          o &&
                            (0, r.createElement)('div', {
                              className: 'woocommerce-marketplace__product-card__icon',
                            }),
                          !o &&
                            n.icon &&
                            (0, r.createElement)('img', {
                              className: 'woocommerce-marketplace__product-card__icon',
                              src: n.icon,
                              alt: n.title,
                            }),
                        ),
                      (0, r.createElement)(
                        'div',
                        { className: 'woocommerce-marketplace__product-card__meta' },
                        (0, r.createElement)(
                          'h2',
                          { className: 'woocommerce-marketplace__product-card__title' },
                          (0, r.createElement)(w, null),
                        ),
                        o &&
                          (0, r.createElement)(
                            'p',
                            { className: 'woocommerce-marketplace__product-card__vendor-details' },
                            (0, r.createElement)('span', {
                              className: 'woocommerce-marketplace__product-card__vendor',
                            }),
                          ),
                        !o &&
                          (0, r.createElement)(
                            'p',
                            { className: 'woocommerce-marketplace__product-card__vendor-details' },
                            p &&
                              (0, r.createElement)(
                                'span',
                                { className: 'woocommerce-marketplace__product-card__vendor' },
                                (0, r.createElement)('span', null, (0, s.__)('By ', 'woocommerce')),
                                p,
                              ),
                            p &&
                              i() &&
                              (0, r.createElement)(
                                'span',
                                {
                                  'aria-hidden': 'true',
                                  className:
                                    'woocommerce-marketplace__product-card__vendor-details__separator',
                                },
                                '·',
                              ),
                            i() &&
                              (0, r.createElement)(
                                'span',
                                {
                                  className:
                                    'woocommerce-marketplace__product-card__sponsored-label',
                                },
                                (0, s.__)('Sponsored', 'woocommerce'),
                              ),
                          ),
                      ),
                    ),
                  ),
                  !u &&
                    (0, r.createElement)(
                      'p',
                      { className: 'woocommerce-marketplace__product-card__description' },
                      !o && n.description,
                    ),
                  (0, r.createElement)(
                    'footer',
                    { className: 'woocommerce-marketplace__product-card__footer' },
                    o &&
                      (0, r.createElement)('div', {
                        className: 'woocommerce-marketplace__product-card__price',
                      }),
                    !o && e.product && (0, r.createElement)(ge, { product: e.product }),
                  ),
                ),
          );
        };
      var he = o(33342);
      function Ee(e) {
        const t = (0, c.O3)('wccomHelper', {}),
          o = te()('woocommerce-marketplace__product-list-content', e.className),
          [a, n] = (0, r.useState)(1),
          s = () => {
            const e = window.innerWidth;
            n(e >= 1920 ? 4 : e >= 1024 ? 3 : e >= 769 ? 2 : 1);
          };
        (0, r.useEffect)(
          () => (
            s(), window.addEventListener('resize', s), () => window.removeEventListener('resize', s)
          ),
          [],
        );
        const i = 2 * a - 1;
        return (0, r.createElement)(
          r.Fragment,
          null,
          (0, r.createElement)(
            'div',
            { className: o },
            e.products.map((o, a) =>
              (0, r.createElement)(
                r.Fragment,
                { key: o.id },
                (0, r.createElement)(ye, {
                  key: o.id,
                  type: e.type,
                  product: {
                    id: o.id,
                    slug: o.slug,
                    title: o.title,
                    image: o.image,
                    type: o.type,
                    freemium_type: o.freemium_type,
                    icon: o.icon,
                    label: o.label,
                    primary_color: o.primary_color,
                    vendorName: o.vendorName,
                    vendorUrl: o.vendorUrl
                      ? H(o.vendorUrl, [
                          ['utm_source', 'extensionsscreen'],
                          ['utm_medium', 'product'],
                          ['utm_campaign', 'wcaddons'],
                          ['utm_content', 'devpartner'],
                        ])
                      : '',
                    price: o.price,
                    url: H(
                      o.url,
                      Object.entries({
                        ...t.inAppPurchaseURLParams,
                        ...(void 0 !== e.productGroup ? { utm_group: e.productGroup } : {}),
                      }),
                    ),
                    averageRating: o.averageRating,
                    reviewsCount: o.reviewsCount,
                    description: o.description,
                    isInstallable: o.isInstallable,
                    color: o.color,
                    featuredImage: o.featuredImage,
                    productCategory: o.productCategory,
                  },
                  tracksData: {
                    position: a + 1,
                    ...(o.label && { label: o.label }),
                    ...(e.group && { group: e.group }),
                    ...(e.searchTerm && { searchTerm: e.searchTerm }),
                    ...(e.category && { category: e.category }),
                  },
                }),
                a === i &&
                  'theme' === e.type &&
                  (0, r.createElement)(he.$p, {
                    redirectToCYSFlow: () => {
                      const e = (0, _e.addQueryArgs)(`${c.SX}admin.php`, {
                        page: 'wc-admin',
                        path: '/customize-store/design',
                      });
                      window.location.href = e;
                    },
                  }),
              ),
            ),
          ),
        );
      }
      var ve = o(86020);
      function be(e) {
        const { title: t, groupURL: o } = e,
          c = '' === t,
          a = te()('woocommerce-marketplace__product-list-header', { 'is-loading': c });
        return (0, r.createElement)(
          'div',
          { className: a, 'aria-hidden': c },
          (0, r.createElement)(
            'h2',
            { className: 'woocommerce-marketplace__product-list-title' },
            t,
          ),
          null !== o &&
            (0, r.createElement)(
              'span',
              { className: 'woocommerce-marketplace__product-list-link' },
              (0, r.createElement)(
                ve.Link,
                {
                  href: o,
                  target: '_blank',
                  onClick: () => {
                    (0, pe.recordEvent)('marketplace_see_more_clicked', {
                      group_title: t,
                      group_url: o,
                    });
                  },
                },
                (0, s.__)('See more', 'woocommerce'),
              ),
            ),
        );
      }
      function ke(e) {
        const { title: t, products: o, groupURL: c, type: a, productGroup: n } = e;
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__product-list' },
          (0, r.createElement)(be, { title: t, groupURL: c }),
          (0, r.createElement)(Ee, { group: t, products: o, type: a, productGroup: n }),
        );
      }
      function Ne(e) {
        const { hasTitle: t, type: o } = e,
          c = e.placeholderCount || 12;
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__product-list' },
          !1 !== t && (0, r.createElement)(be, { title: '', groupURL: null }),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__product-list-content' },
            [...Array(c)].map((e, t) =>
              (0, r.createElement)(ye, { key: t, isLoading: !0, type: o, tracksData: {} }),
            ),
          ),
        );
      }
      function Me() {
        const [e, t] = (0, r.useState)([]),
          o = (0, r.useContext)(a),
          { isLoading: c, setIsLoading: n } = o;
        if (
          ((0, r.useEffect)(() => {
            n(!0),
              R()
                .then(e => (Array.isArray(e) ? e : []))
                .then(e => {
                  t(e),
                    (function(e) {
                      const t = e.flatMap(e => e.items).map(e => e.id);
                      (0, pe.recordEvent)('marketplace_discover_viewed', {
                        view: 'discover',
                        product_ids: t,
                      });
                    })(e);
                })
                .finally(() => {
                  n(!1);
                });
          }, []),
          c)
        )
          return (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__discover' },
            (0, r.createElement)(Ne, { placeholderCount: 9, type: S.extension }),
          );
        const s = e.flatMap(e => e);
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__discover' },
          s.map(e =>
            (0, r.createElement)(ke, {
              key: e.id,
              productGroup: e.id,
              title: e.title,
              products: e.items,
              groupURL: e.url,
              type: e.itemType,
            }),
          ),
        );
      }
      var fe = o(12314);
      function Ce(e) {
        const t = '' === e.label,
          o = te()('woocommerce-marketplace__category-item-button', {
            'woocommerce-marketplace__category-item-button--selected': e.selected,
            'is-loading': t,
          });
        return (0, r.createElement)(
          'button',
          {
            className: o,
            onClick: function(e) {
              const t = e.currentTarget.value;
              t && (0, oe.navigateTo)({ url: (0, oe.getNewPath)({ category: t }) });
            },
            value: e.slug,
            'aria-hidden': t,
          },
          e.label,
        );
      }
      var Ie = o(86241),
        xe = o(73224);
      function Te(e) {
        function t(t) {
          const o = t.currentTarget.value;
          o && (e.onClick(), (0, oe.navigateTo)({ url: (0, oe.getNewPath)({ category: o }) }));
        }
        return (0, r.createElement)(
          'ul',
          { className: 'woocommerce-marketplace__category-dropdown-list' },
          e.categories.map(o =>
            (0, r.createElement)(
              'li',
              { className: 'woocommerce-marketplace__category-dropdown-item', key: o.slug },
              (0, r.createElement)(
                'button',
                {
                  className: te()('woocommerce-marketplace__category-dropdown-item-button', {
                    'woocommerce-marketplace__category-dropdown-item-button--selected':
                      o.slug === e.selected?.slug,
                  }),
                  value: o.slug,
                  onClick: t,
                },
                o.label,
              ),
            ),
          ),
        );
      }
      function De(e) {
        return (0, r.createElement)(l.Dropdown, {
          renderToggle: ({ isOpen: t, onToggle: o }) =>
            (0, r.createElement)(
              'button',
              {
                onClick: () => {
                  t ||
                    (0, pe.recordEvent)('marketplace_category_dropdown_opened', { type: e.type }),
                    o();
                },
                className: e.buttonClassName,
                'aria-label': (0, s.__)('Toggle category dropdown', 'woocommerce'),
              },
              e.label,
              (0, r.createElement)(d.Z, { icon: t ? Ie.Z : xe.Z, size: e.arrowIconSize }),
            ),
          className: e.className,
          renderContent: ({ onToggle: t }) =>
            (0, r.createElement)(Te, {
              categories: e.categories,
              selected: e.selected,
              onClick: t,
            }),
          contentClassName: e.contentClassName,
        });
      }
      const Se = {
        [S.extension]: '_all',
        [S.theme]: 'themes',
        [S.businessService]: 'business-services',
      };
      function Ae(e) {
        const [t, o] = (0, r.useState)([]),
          [a, n] = (0, r.useState)([]),
          [i, l] = (0, r.useState)(),
          [m, u] = (0, r.useState)(!1),
          d = (0, oe.useQuery)();
        return (
          (0, r.useEffect)(() => {
            let o = Se[e.type];
            d.category && (o = d.category);
            const r = t.concat(a).find(e => e.slug === o);
            r && l(r);
          }, [d.category, e.type, t, a]),
          (0, r.useEffect)(() => {
            u(!0),
              (function(e) {
                const t = new URL(y + v);
                return (
                  c.MV.userLocale && t.searchParams.set('locale', c.MV.userLocale),
                  e === S.theme
                    ? t.searchParams.set('parent', 'themes')
                    : e === S.businessService && t.searchParams.set('parent', 'business-services'),
                  B(t.toString())
                    .then(e => e)
                    .catch(() => [])
                );
              })(e.type)
                .then(e => {
                  const t = e
                      .map(e => ({ ...e, selected: !1 }))
                      .filter(e => '_featured' !== e.slug),
                    r = t.slice(0, 7),
                    c = t.slice(7);
                  o(r), n(c);
                })
                .catch(() => {
                  o([]), n([]);
                })
                .finally(() => {
                  u(!1);
                });
          }, [e.type]),
          m
            ? (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  'ul',
                  { className: 'woocommerce-marketplace__category-selector' },
                  [...Array(5)].map((e, t) =>
                    (0, r.createElement)(
                      'li',
                      { key: t, className: 'woocommerce-marketplace__category-item' },
                      (0, r.createElement)(Ce, { slug: '', label: '', selected: !1 }),
                    ),
                  ),
                ),
              )
            : (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  'ul',
                  { className: 'woocommerce-marketplace__category-selector' },
                  t.map(e =>
                    (0, r.createElement)(
                      'li',
                      { className: 'woocommerce-marketplace__category-item', key: e.slug },
                      (0, r.createElement)(Ce, (0, fe.Z)({}, e, { selected: e.slug === i?.slug })),
                    ),
                  ),
                  (0, r.createElement)(
                    'li',
                    { className: 'woocommerce-marketplace__category-item' },
                    a.length > 0 &&
                      (0, r.createElement)(De, {
                        type: e.type,
                        label: (0, s.__)('More', 'woocommerce'),
                        categories: a,
                        buttonClassName: te()('woocommerce-marketplace__category-item-button', {
                          'woocommerce-marketplace__category-item-button--selected':
                            !!i && a.find(e => e.slug === i.slug),
                        }),
                        contentClassName: 'woocommerce-marketplace__category-item-content',
                        arrowIconSize: 20,
                        selected: i,
                      }),
                  ),
                ),
                (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-marketplace__category-selector--full-width' },
                  (0, r.createElement)(De, {
                    type: e.type,
                    label: (function() {
                      const e = (0, s.__)('All Categories', 'woocommerce');
                      return i ? ('All' === i.label ? e : i.label) : e;
                    })(),
                    categories: t.concat(a),
                    buttonClassName: 'woocommerce-marketplace__category-dropdown-button',
                    className: 'woocommerce-marketplace__category-dropdown',
                    contentClassName: 'woocommerce-marketplace__category-dropdown-content',
                    selected: i,
                  }),
                ),
              )
        );
      }
      function ze(e) {
        const [t, o] = (0, r.useState)(),
          [c, a] = (0, r.useState)(!1),
          n = (0, oe.useQuery)(),
          i = 'search' === n.tab && n.section,
          l = {
            [A.all]: ['most-popular', 'popular-themes', 'business-services'],
            [A.theme]: ['popular-themes'],
            [A.extension]: ['most-popular'],
            [A.businessService]: ['business-services'],
          };
        return (
          (0, r.useEffect)(() => {
            a(!0),
              R()
                .then(t => {
                  const r = l[e.type];
                  if (!r) return;
                  const c = t.filter(e => r.includes(e.id));
                  c &&
                    (c.forEach(e => {
                      e.items = e.items.slice(0, 4);
                    }),
                    o(c));
                })
                .catch(() => {
                  o(void 0);
                })
                .finally(() => {
                  a(!1);
                });
          }, []),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__no-results' },
            (function() {
              if (!i) return (0, r.createElement)(r.Fragment, null);
              if (e.type === A.all) return (0, r.createElement)(r.Fragment, null);
              let t = S.extension;
              return (
                e.type === A.theme && (t = S.theme),
                e.type === A.businessService && (t = S.businessService),
                (0, r.createElement)(Ae, { type: t })
              );
            })(),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-marketplace__no-results__content' },
              (0, r.createElement)(
                'h2',
                { className: 'woocommerce-marketplace__no-results__heading' },
                e.showHeading ? e.heading : '',
              ),
              (0, r.createElement)(
                'p',
                { className: 'woocommerce-marketplace__no-results__description' },
                (0, s.__)(
                  'Try searching again using a different term, or take a look at our recommendations below.',
                  'woocommerce',
                ),
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-marketplace__no-results__product-groups' },
              c
                ? (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(Ne, { type: S.extension, placeholderCount: 4 }),
                    (0, r.createElement)(Ne, { type: S.theme, placeholderCount: 4 }),
                    (0, r.createElement)(Ne, { type: S.businessService, placeholderCount: 4 }),
                  )
                : t && 0 !== t.length
                ? (0, r.createElement)(
                    r.Fragment,
                    null,
                    t.map(e => {
                      return (0, r.createElement)(ke, {
                        title:
                          ((t = e.id),
                          'popular-themes' === t
                            ? (0, s.__)('Our favorite themes', 'woocommerce')
                            : 'business-services' === t
                            ? (0, s.__)('Services to help your business grow', 'woocommerce')
                            : (0, s.__)('Most popular extensions', 'woocommerce')),
                        products: e.items,
                        groupURL: e.url,
                        productGroup: e.id,
                        type: e.itemType,
                        key: e.id,
                      });
                      var t;
                    }),
                  )
                : (0, r.createElement)(r.Fragment, null),
            ),
          )
        );
      }
      var Le = o(34081);
      const Oe = {
        [S.extension]: {
          label: (0, s.__)('extensions', 'woocommerce'),
          singularLabel: (0, s.__)('extension', 'woocommerce'),
        },
        [S.theme]: {
          label: (0, s.__)('themes', 'woocommerce'),
          singularLabel: (0, s.__)('theme', 'woocommerce'),
        },
        [S.businessService]: {
          label: (0, s.__)('business services', 'woocommerce'),
          singularLabel: (0, s.__)('business service', 'woocommerce'),
        },
      };
      function je(e) {
        var t, o, n, i;
        const m = (0, r.useContext)(a),
          { isLoading: u, selectedTab: d } = m,
          p = Oe[e.type].label,
          _ = Oe[e.type].singularLabel,
          w = (0, oe.useQuery)(),
          g = w?.category,
          y = null !== (t = e.perPage) && void 0 !== t ? t : b,
          h = (0, D.useSelect)(e => e('core').getCurrentTheme(), []),
          E = 'twentytwentyfour' === h?.stylesheet,
          [v, k] = (0, r.useState)(!1),
          N = (0, _e.addQueryArgs)(`${c.SX}admin.php`, {
            page: 'wc-admin',
            path: '/customize-store/design',
          }),
          M = (0, _e.addQueryArgs)(`${c.SX}admin.php`, {
            page: 'wc-admin',
            path: '/customize-store/assembler-hub',
          }),
          f = (0, D.useSelect)(e => e(we.ONBOARDING_STORE_NAME).getTask('customize-store'), []),
          C = null !== (o = e.showAllButton) && void 0 !== o && o,
          I = null !== (n = e.products?.length) && void 0 !== n ? n : 0,
          x = null !== (i = e.products?.slice(0, y)) && void 0 !== i ? i : [];
        let T = (0, s.sprintf)((0, s.__)('0 %s found', 'woocommerce'), p);
        I > 0 &&
          (T = (0, s.sprintf)((0, s._n)('%1$s %2$s', '%1$s %3$s', I, 'woocommerce'), I, _, p));
        const z = 'business services' === p ? 'business-services' : p,
          L = 'woocommerce-marketplace__search-',
          O = te()(L + z),
          j = te()('woocommerce-marketplace__product-list-title', L + 'product-list-title--' + z, {
            'is-loading': u,
          }),
          U = te()('woocommerce-marketplace__view-all-button', L + 'button-' + z);
        if (0 === x.length) {
          let t = A.all;
          switch (e.type) {
            case S.extension:
              t = A.extension;
              break;
            case S.theme:
              t = A.theme;
              break;
            case S.businessService:
              t = A.businessService;
          }
          return (0, r.createElement)(ze, { type: t, showHeading: !1 });
        }
        const P = te()(C ? 'woocommerce-marketplace__product-list-content--collapsed' : '');
        return u
          ? (0, r.createElement)(
              r.Fragment,
              null,
              e.categorySelector && (0, r.createElement)(Ae, { type: e.type }),
              (0, r.createElement)(Ne, { hasTitle: !1, type: e.type }),
            )
          : (0, r.createElement)(
              'div',
              { className: O },
              'business-services' !== d &&
                (0, r.createElement)('h2', { className: j }, u ? ' ' : T),
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-marketplace__sub-header' },
                e.categorySelector && (0, r.createElement)(Ae, { type: e.type }),
                'theme' === e.type &&
                  (0, r.createElement)(l.Button, {
                    className: 'woocommerce-marketplace__customize-your-store-button',
                    variant: 'secondary',
                    text: (0, s.__)('Design your own', 'woocommerce'),
                    onClick: () => {
                      E ? (window.location.href = f?.isComplete ? M : N) : k(!0);
                    },
                  }),
              ),
              v &&
                (0, r.createElement)(Le.Nh, {
                  setIsModalOpen: k,
                  redirectToCYSFlow: () => {
                    window.location.href = N;
                  },
                }),
              (0, r.createElement)(Ee, {
                products: x,
                type: e.type,
                className: P,
                searchTerm: e.searchTerm,
                category: g,
              }),
              'theme' === e.type &&
                (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-marketplace__browse-wp-theme-directory' },
                  (0, r.createElement)(
                    'b',
                    null,
                    (0, s.__)('Didn’t find a theme you like?', 'woocommerce'),
                  ),
                  (0, r.createInterpolateElement)(
                    (0, s.__)(
                      ' Browse the <a>WordPress.org theme directory</a> to discover more.',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)('a', {
                        href: c.SX + 'theme-install.php?search=e-commerce',
                      }),
                    },
                  ),
                ),
              C &&
                (0, r.createElement)(l.Button, {
                  className: U,
                  variant: 'secondary',
                  text: (0, s.__)('View all', 'woocommerce'),
                  onClick: () => {
                    return (
                      (t = e.type),
                      void (0, oe.navigateTo)({ url: (0, oe.getNewPath)({ section: t }) })
                    );
                    var t;
                  },
                }),
            );
      }
      function Ue(e) {
        const t = e.products.filter(e => e.type === S.extension),
          o = e.products.filter(e => e.type === S.theme),
          c = e.products.filter(e => e.type === S.businessService),
          n = t.length > 0,
          i = o.length > 0,
          l = c.length > 0,
          m = n && !i && !l,
          u = i && !n && !l,
          d = l && !n && !i,
          p = (0, r.useContext)(a),
          { isLoading: _, hasBusinessServices: w } = p,
          g = (0, oe.useQuery)(),
          y = !!g.section,
          h = g.term ? g.term : '';
        function E(e, t, o = {}) {
          var c, a, n;
          return (0, r.createElement)(je, {
            products: e,
            type: t,
            categorySelector: null !== (c = o.categorySelector) && void 0 !== c ? c : y,
            searchTerm: h,
            showAllButton: null === (a = o.showAllButton) || void 0 === a || a,
            perPage: null !== (n = o.perPage) && void 0 !== n ? n : b,
          });
        }
        function v(e = {}) {
          return E(t, S.extension, e);
        }
        function N(e = {}) {
          return E(o, S.theme, e);
        }
        function M(e = {}) {
          return E(c, S.businessService, e);
        }
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__search-results' },
          g?.section === A.extension
            ? v({ showAllButton: !1 })
            : g?.section === A.theme
            ? N({ showAllButton: !1 })
            : g?.section === A.businessService
            ? M({ showAllButton: !1 })
            : _
            ? (0, r.createElement)(r.Fragment, null, v(), N(), M())
            : _ || n || i || l
            ? (0, r.createElement)(
                r.Fragment,
                null,
                n
                  ? v({
                      categorySelector: m || void 0,
                      showAllButton: !m && void 0,
                      perPage: m ? b : k,
                    })
                  : null,
                i
                  ? N({
                      categorySelector: u || void 0,
                      showAllButton: !u && void 0,
                      perPage: u ? b : k,
                    })
                  : null,
                l
                  ? M({
                      categorySelector: d || void 0,
                      showAllButton: !d && void 0,
                      perPage: d ? b : k,
                    })
                  : null,
              )
            : (0, r.createElement)(ze, {
                type: A.all,
                showHeading: !0,
                heading: w
                  ? (0, s.__)('No extensions, themes or business services found…', 'woocommerce')
                  : (0, s.__)('No extensions or themes found…', 'woocommerce'),
              }),
        );
      }
      const Pe = (0, r.createContext)({
        subscriptions: [],
        setSubscriptions: () => {},
        loadSubscriptions: () => new Promise(() => {}),
        refreshSubscriptions: () => new Promise(() => {}),
        isLoading: !0,
        setIsLoading: () => {},
      });
      function Be(e) {
        const [t, o] = (0, r.useState)([]),
          [c, a] = (0, r.useState)(!0),
          n = e => (
            !0 === e && a(!0),
            (async function() {
              return await T()({ path: '/wc/v3/marketplace/subscriptions'.toString() });
            })()
              .then(e => {
                o(e);
              })
              .finally(() => {
                e && a(!1);
              })
          ),
          i = e => (
            e && a(!0),
            (async function() {
              return await T()({ path: '/wc/v3/marketplace/refresh'.toString(), method: 'POST' });
            })()
              .then(e => {
                o(e);
              })
              .finally(() => {
                e && a(!1);
              })
          );
        (0, r.useEffect)(() => {
          new URLSearchParams(window.location.search).get('install')
            ? i(!0).catch(e => {
                F(
                  'woocommerce-marketplace-refresh-subscriptions',
                  (0, s.sprintf)(
                    (0, s.__)('Error refreshing subscriptions: %s', 'woocommerce'),
                    e.message,
                  ),
                  z.Error,
                );
              })
            : n(!0).catch(e => {
                F(
                  'woocommerce-marketplace-load-subscriptions',
                  (0, s.sprintf)(
                    (0, s.__)('Error loading subscriptions: %s', 'woocommerce'),
                    e.message,
                  ),
                  z.Error,
                );
              });
        }, []);
        const l = {
          subscriptions: t,
          setSubscriptions: o,
          loadSubscriptions: n,
          refreshSubscriptions: i,
          isLoading: c,
          setIsLoading: a,
        };
        return (0, r.createElement)(Pe.Provider, { value: l }, e.children);
      }
      const Qe = [
        { key: 'name', label: (0, s.__)('Name', 'woocommerce') },
        { key: 'expiry', label: (0, s.__)('Expiry/Renewal date', 'woocommerce') },
        { key: 'autoRenew', label: (0, s.__)('Auto-renew', 'woocommerce') },
        { key: 'version', label: (0, s.__)('Version', 'woocommerce') },
      ];
      function Re(e) {
        if (e.isLoading)
          return (0, r.createElement)(ve.TablePlaceholder, {
            caption: (0, s.__)('Loading your subscriptions', 'woocommerce'),
            headers: e.headers,
          });
        const t = e.headers.map(e => ({
          ...e,
          cellClassName: 'woocommerce-marketplace__my-subscriptions__table__header--' + e.key,
        }));
        return (0, r.createElement)(ve.Table, {
          className: 'woocommerce-marketplace__my-subscriptions__table',
          headers: t,
          rows: e.rows,
        });
      }
      function Ye(e) {
        const t = [...Qe, { key: 'actions', label: (0, s.__)('Actions', 'woocommerce') }];
        if (!(e.isLoading || (e.rows && 0 !== e.rows.length))) {
          const e = (0, oe.getNewPath)({}, h, {}),
            t = (0, r.createInterpolateElement)(
              (0, s.__)(
                'No extensions or themes installed. <a>Browse the Marketplace</a>',
                'woocommerce',
              ),
              { a: (0, r.createElement)('a', { href: e }) },
            );
          return (0, r.createElement)(ve.EmptyTable, { numberOfRows: 4 }, t);
        }
        return (0, r.createElement)(Re, { rows: e.rows, isLoading: e.isLoading, headers: t });
      }
      function Ze(e) {
        const t = [...Qe, { key: 'actions', label: (0, s.__)('Actions', 'woocommerce') }];
        return (0, r.createElement)(Re, { rows: e.rows, isLoading: e.isLoading, headers: t });
      }
      var Ge = o(69771);
      const Fe = (0, r.createElement)(
        m.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(m.Path, {
          d:
            'M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z',
        }),
      );
      let We = (function(e) {
        return (e.Warning = 'warning'), (e.Error = 'error'), (e.Info = 'info'), e;
      })({});
      function Ve(e) {
        var t;
        const [o, c] = (0, r.useState)(!1),
          { loadSubscriptions: a } = (0, r.useContext)(Pe),
          n = () => {
            (0, pe.recordEvent)('marketplace_product_connect_button_clicked', {
              product_zip_slug: e.subscription.zip_slug,
              product_id: e.subscription.product_id,
            }),
              c(!0),
              W(e.subscription.product_key),
              Y(e.subscription)
                .then(() => {
                  a(!1).then(() => {
                    F(
                      e.subscription.product_key,
                      (0, s.sprintf)(
                        (0, s.__)('%s successfully connected.', 'woocommerce'),
                        e.subscription.product_name,
                      ),
                      z.Success,
                    ),
                      c(!1),
                      e.onClose && e.onClose();
                  });
                })
                .catch(() => {
                  F(
                    e.subscription.product_key,
                    (0, s.sprintf)(
                      (0, s.__)('%s couldn’t be connected.', 'woocommerce'),
                      e.subscription.product_name,
                    ),
                    z.Error,
                    { actions: [{ label: (0, s.__)('Try again', 'woocommerce'), onClick: n }] },
                  ),
                    c(!1),
                    e.onClose && e.onClose();
                });
          };
        return (0, r.createElement)(
          l.Button,
          {
            onClick: n,
            variant: null !== (t = e.variant) && void 0 !== t ? t : 'secondary',
            isBusy: o,
            disabled: o,
          },
          (0, s.__)('Connect', 'woocommerce'),
        );
      }
      const He = { installingProducts: [] },
        $e = (0, D.createReduxStore)('woocommerce-admin/installing', {
          reducer(e = He, t) {
            switch (t.type) {
              case 'START_INSTALLING':
                return { ...e, installingProducts: [...e.installingProducts, t.productKey] };
              case 'STOP_INSTALLING':
                return {
                  ...e,
                  installingProducts: [...e.installingProducts.filter(e => e !== t.productKey)],
                };
            }
            return e;
          },
          actions: {
            startInstalling: e => ({ type: 'START_INSTALLING', productKey: e }),
            stopInstalling: e => ({ type: 'STOP_INSTALLING', productKey: e }),
          },
          selectors: { isInstalling: (e, t) => !!e && e.installingProducts.includes(t) },
        });
      function Ke(e) {
        var t;
        const { loadSubscriptions: o } = (0, r.useContext)(Pe),
          c = (0, D.useSelect)(t => t($e).isInstalling(e.subscription.product_key), [
            e.subscription.product_key,
          ]),
          a = () => {
            (0, D.dispatch)($e).stopInstalling(e.subscription.product_key);
          },
          n = () => {
            var t;
            (0, pe.recordEvent)('marketplace_product_install_button_clicked', {
              product_zip_slug: e.subscription.zip_slug,
              product_id: e.subscription.product_id,
              product_current_version: e.subscription.version,
            }),
              (0, D.dispatch)($e).startInstalling(e.subscription.product_key),
              W(e.subscription.product_key),
              e.subscription.is_installable
                ? (function(e) {
                    return Y(e).then(() =>
                      G(e.product_type, e.zip_slug)
                        .then(() =>
                          (function(e) {
                            if (!0 === e.local.active) return Promise.resolve();
                            const t = new URLSearchParams();
                            return (
                              t.append('product_key', e.product_key),
                              T()({
                                path: '/wc/v3/marketplace/subscriptions/activate'.toString(),
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                body: t,
                              })
                                .then(() => Promise.resolve())
                                .catch(() =>
                                  Promise.reject({
                                    success: !1,
                                    data: {
                                      message: (0, s.sprintf)(
                                        (0, s.__)(
                                          '%s could not be activated. Please activate it manually.',
                                          'woocommerce',
                                        ),
                                        e.product_name,
                                      ),
                                    },
                                  }),
                                )
                            );
                          })(e),
                        )
                        .catch(t =>
                          (function(e) {
                            if (!1 === e.active) return Promise.resolve();
                            const t = new URLSearchParams();
                            return (
                              t.append('product_key', e.product_key),
                              T()({
                                path: '/wc/v3/marketplace/subscriptions/disconnect'.toString(),
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                body: t,
                              })
                            );
                          })(e).finally(() => Promise.reject(t)),
                        ),
                    );
                  })(e.subscription)
                    .then(() => {
                      o(!1).then(() => {
                        F(
                          e.subscription.product_key,
                          (0, s.sprintf)(
                            (0, s.__)('%s successfully installed.', 'woocommerce'),
                            e.subscription.product_name,
                          ),
                          z.Success,
                        ),
                          a();
                      }),
                        (0, pe.recordEvent)('marketplace_product_installed', {
                          product_zip_slug: e.subscription.zip_slug,
                          product_id: e.subscription.product_id,
                          product_current_version: e.subscription.version,
                        }),
                        e.onSuccess && e.onSuccess();
                    })
                    .catch(t => {
                      o(!1).then(() => {
                        let o = (0, s.sprintf)(
                          (0, s.__)('%s couldn’t be installed.', 'woocommerce'),
                          e.subscription.product_name,
                        );
                        !1 === t?.success && t?.data.message && (o += ' ' + t.data.message),
                          F(e.subscription.product_key, o, z.Error, {
                            actions: [{ label: (0, s.__)('Try again', 'woocommerce'), onClick: n }],
                          }),
                          a(),
                          e.onError && e.onError();
                      }),
                        (0, pe.recordEvent)('marketplace_product_install_failed', {
                          product_zip_slug: e.subscription.zip_slug,
                          product_id: e.subscription.product_id,
                          product_current_version: e.subscription.version,
                          error_message: t?.data?.message,
                        });
                    })
                : ((t = e.subscription),
                  T()({
                    path:
                      '/wc/v3/marketplace/subscriptions/install-url?product_key=' + t.product_key,
                  }).then(e => e?.data.url)).then(t => {
                    (0, pe.recordEvent)('marketplace_product_install_url', {
                      product_zip_slug: e.subscription.zip_slug,
                      product_id: e.subscription.product_id,
                      product_current_version: e.subscription.version,
                      product_install_url: t,
                    }),
                      a(),
                      t
                        ? window.open(t, '_self')
                        : F(
                            e.subscription.product_key,
                            (0, s.sprintf)(
                              (0, s.__)(
                                '%s couldn’t be installed. Please install the product manually.',
                                'woocommerce',
                              ),
                              e.subscription.product_name,
                            ),
                            z.Error,
                          );
                  });
          };
        return (0, r.createElement)(
          l.Button,
          {
            variant: null !== (t = e.variant) && void 0 !== t ? t : 'link',
            isBusy: c,
            disabled: c,
            onClick: n,
          },
          (0, s.__)('Install', 'woocommerce'),
        );
      }
      function Je(e) {
        var t;
        return (0, r.createElement)(
          l.Button,
          {
            href: $(e.subscription),
            variant: null !== (t = e.variant) && void 0 !== t ? t : 'secondary',
            onClick: function() {
              (0, pe.queueRecordEvent)('marketplace_renew_button_clicked', {
                product_zip_slug: e.subscription.zip_slug,
                product_id: e.subscription.product_id,
              });
            },
          },
          (0, s.__)('Renew', 'woocommerce'),
        );
      }
      function Xe(e) {
        var t;
        return (0, r.createElement)(
          l.Button,
          {
            href: K(e.subscription),
            variant: null !== (t = e.variant) && void 0 !== t ? t : 'secondary',
            onClick: function() {
              (0, pe.queueRecordEvent)('marketplace_subscribe_button_clicked', {
                product_zip_slug: e.subscription.zip_slug,
                product_id: e.subscription.product_id,
              });
            },
          },
          (0, s.__)('Subscribe', 'woocommerce'),
        );
      }
      function qe(e) {
        return (0, r.createElement)(
          l.Modal,
          {
            title: (0, s.__)('Connect to update', 'woocommerce'),
            onRequestClose: e.onClose,
            focusOnMount: !0,
            className: 'woocommerce-marketplace__header-account-modal',
            style: { borderRadius: 4 },
            overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
          },
          (0, r.createElement)(
            'p',
            { className: 'woocommerce-marketplace__header-account-modal-text' },
            (0, s.sprintf)(
              (0, s.__)(
                'Version %s is available. To enable this update you need to connect your subscription to this store.',
                'woocommerce',
              ),
              e.subscription.version,
            ),
          ),
          (0, r.createElement)(
            l.ButtonGroup,
            { className: 'woocommerce-marketplace__header-account-modal-button-group' },
            (0, r.createElement)(
              l.Button,
              {
                variant: 'tertiary',
                onClick: e.onClose,
                className: 'woocommerce-marketplace__header-account-modal-button',
              },
              (0, s.__)('Cancel', 'woocommerce'),
            ),
            (0, r.createElement)(Ve, {
              subscription: e.subscription,
              onClose: e.onClose,
              variant: 'primary',
            }),
          ),
        );
      }
      function et(e) {
        return (0, r.createElement)(
          l.Modal,
          {
            title: (0, s.__)('Renew to update', 'woocommerce'),
            onRequestClose: e.onClose,
            focusOnMount: !0,
            className: 'woocommerce-marketplace__header-account-modal',
            style: { borderRadius: 4 },
            overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
          },
          (0, r.createElement)(
            'p',
            { className: 'woocommerce-marketplace__header-account-modal-text' },
            (0, s.sprintf)(
              (0, s.__)(
                'Version %s is available. To enable this update you need to renew your subscription.',
                'woocommerce',
              ),
              e.subscription.version,
            ),
          ),
          (0, r.createElement)(
            l.ButtonGroup,
            { className: 'woocommerce-marketplace__header-account-modal-button-group' },
            (0, r.createElement)(
              l.Button,
              {
                variant: 'tertiary',
                onClick: e.onClose,
                className: 'woocommerce-marketplace__header-account-modal-button',
              },
              (0, s.__)('Cancel', 'woocommerce'),
            ),
            (0, r.createElement)(Je, { subscription: e.subscription, variant: 'primary' }),
          ),
        );
      }
      function tt(e) {
        return (0, r.createElement)(
          l.Modal,
          {
            title: (0, s.__)('Subscribe to update', 'woocommerce'),
            onRequestClose: e.onClose,
            focusOnMount: !0,
            className: 'woocommerce-marketplace__header-account-modal',
            style: { borderRadius: 4 },
            overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
          },
          (0, r.createElement)(
            'p',
            { className: 'woocommerce-marketplace__header-account-modal-text' },
            (0, s.sprintf)(
              (0, s.__)(
                'Version %s is available. To enable this update you need to purchase a subscription.',
                'woocommerce',
              ),
              e.subscription.version,
            ),
          ),
          (0, r.createElement)(
            l.ButtonGroup,
            { className: 'woocommerce-marketplace__header-account-modal-button-group' },
            (0, r.createElement)(
              l.Button,
              {
                variant: 'tertiary',
                onClick: e.onClose,
                className: 'woocommerce-marketplace__header-account-modal-button',
              },
              (0, s.__)('Cancel', 'woocommerce'),
            ),
            (0, r.createElement)(Xe, { subscription: e.subscription, variant: 'primary' }),
          ),
        );
      }
      (0, D.register)($e);
      var ot = o(346);
      function rt(e) {
        const t = (0, c.O3)('wccomHelper', {});
        return t?.wooUpdateManagerInstalled
          ? t?.wooUpdateManagerActive
            ? null
            : (0, r.createElement)(
                l.Modal,
                {
                  title: (0, s.__)('Access your updates', 'woocommerce'),
                  onRequestClose: e.onClose,
                  focusOnMount: !0,
                  className: 'woocommerce-marketplace__header-account-modal',
                  style: { borderRadius: 4 },
                  overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
                },
                (0, r.createElement)(
                  'p',
                  { className: 'woocommerce-marketplace__header-account-modal-text' },
                  (0, r.createElement)('span', {
                    dangerouslySetInnerHTML: (0, ot.ZP)(
                      (0, s.sprintf)(
                        (0, s.__)(
                          'Version %s is available. To access this update, please <b>activate the WooCommerce.com Update Manager</b> extension.',
                          'woocommerce',
                        ),
                        e.subscription.version,
                      ),
                    ),
                  }),
                ),
                (0, r.createElement)(
                  l.ButtonGroup,
                  { className: 'woocommerce-marketplace__header-account-modal-button-group' },
                  (0, r.createElement)(
                    l.Button,
                    { onClick: e.onClose, variant: 'link' },
                    (0, s.__)('Cancel', 'woocommerce'),
                  ),
                  (0, r.createElement)(
                    l.Button,
                    { href: C, variant: 'primary' },
                    (0, s.__)('Activate', 'woocommerce'),
                  ),
                ),
              )
          : (0, r.createElement)(
              l.Modal,
              {
                title: (0, s.__)('Access your updates', 'woocommerce'),
                onRequestClose: e.onClose,
                focusOnMount: !0,
                className: 'woocommerce-marketplace__header-account-modal',
                style: { borderRadius: 4 },
                overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
              },
              (0, r.createElement)(
                'p',
                { className: 'woocommerce-marketplace__header-account-modal-text' },
                (0, r.createElement)('span', {
                  dangerouslySetInnerHTML: (0, ot.ZP)(
                    (0, s.sprintf)(
                      (0, s.__)(
                        'Version %s is available. To access this update, please first <b>install the WooCommerce.com Update Manager</b> extension. Alternatively, you can download and install it manually.',
                        'woocommerce',
                      ),
                      e.subscription.version,
                    ),
                  ),
                }),
              ),
              (0, r.createElement)(
                l.ButtonGroup,
                { className: 'woocommerce-marketplace__header-account-modal-button-group' },
                (0, r.createElement)(
                  l.Button,
                  { href: I, variant: 'secondary' },
                  (0, s.__)('Download', 'woocommerce'),
                ),
                (0, r.createElement)(
                  l.Button,
                  { href: t?.wooUpdateManagerInstallUrl, variant: 'primary' },
                  (0, s.__)('Install', 'woocommerce'),
                ),
              ),
            );
      }
      function ct(e) {
        const [t, o] = (0, r.useState)(!1),
          [c, a] = (0, r.useState)(!1),
          { loadSubscriptions: n } = (0, r.useContext)(Pe),
          i =
            e.subscription.active &&
            e.subscription.local &&
            e.subscription.local.slug &&
            e.subscription.local.path &&
            e.wooUpdateManagerActive;
        return (0, r.createElement)(
          r.Fragment,
          null,
          t
            ? '' === e.subscription.product_key
              ? (0, r.createElement)(tt, { onClose: () => o(!1), subscription: e.subscription })
              : e.subscription.expired
              ? (0, r.createElement)(et, { subscription: e.subscription, onClose: () => o(!1) })
              : e.subscription.active
              ? e.wooUpdateManagerActive
                ? null
                : (0, r.createElement)(rt, { subscription: e.subscription, onClose: () => o(!1) })
              : (0, r.createElement)(qe, { subscription: e.subscription, onClose: () => o(!1) })
            : null,
          (0, r.createElement)(
            l.Button,
            {
              variant: 'link',
              className: 'woocommerce-marketplace__my-subscriptions-update',
              onClick: function t() {
                var r;
                (0, pe.recordEvent)('marketplace_product_update_button_clicked', {
                  product_zip_slug: e.subscription.zip_slug,
                  product_id: e.subscription.product_id,
                  product_installed_version: e.subscription.local.installed,
                  product_current_version: e.subscription.version,
                }),
                  i
                    ? (W(e.subscription.product_key),
                      window.wp.updates
                        ? (a(!0),
                          ((r = e.subscription),
                          Z('update-' + r.product_type, {
                            slug: r.local.slug,
                            [r.product_type]: r.local.path,
                          }))
                            .then(() => {
                              n(!1).then(() => {
                                F(
                                  e.subscription.product_key,
                                  (0, s.sprintf)(
                                    (0, s.__)('%s updated successfully.', 'woocommerce'),
                                    e.subscription.product_name,
                                  ),
                                  z.Success,
                                ),
                                  a(!1);
                              }),
                                (0, pe.recordEvent)('marketplace_product_updated', {
                                  product_zip_slug: e.subscription.zip_slug,
                                  product_id: e.subscription.product_id,
                                  product_installed_version: e.subscription.local.installed,
                                  product_current_version: e.subscription.version,
                                });
                            })
                            .catch(() => {
                              F(
                                e.subscription.product_key,
                                (0, s.sprintf)(
                                  (0, s.__)('%s couldn’t be updated.', 'woocommerce'),
                                  e.subscription.product_name,
                                ),
                                z.Error,
                                {
                                  actions: [
                                    { label: (0, s.__)('Try again', 'woocommerce'), onClick: t },
                                  ],
                                },
                              ),
                                a(!1),
                                (0, pe.recordEvent)('marketplace_product_update_failed', {
                                  product_zip_slug: e.subscription.zip_slug,
                                  product_id: e.subscription.product_id,
                                  product_installed_version: e.subscription.local.installed,
                                  product_current_version: e.subscription.version,
                                });
                            }))
                        : F(
                            e.subscription.product_key,
                            (0, s.sprintf)(
                              (0, s.__)('%s couldn’t be updated.', 'woocommerce'),
                              e.subscription.product_name,
                            ),
                            z.Error,
                            {
                              actions: [
                                {
                                  label: (0, s.__)('Reload page and try again', 'woocommerce'),
                                  onClick: () => {
                                    window.location.reload();
                                  },
                                },
                              ],
                            },
                          ))
                    : o(!0);
              },
              isBusy: c,
              disabled: c,
              label: (0, s.sprintf)(
                (0, s.__)('Update to %s', 'woocommerce'),
                e.subscription.version,
              ),
              showTooltip: !0,
              tooltipPosition: 'top center',
            },
            c ? (0, s.__)('Updating', 'woocommerce') : (0, s.__)('Update', 'woocommerce'),
          ),
        );
      }
      var at = o(84560);
      function nt(e) {
        const [t, o] = (0, r.useState)(!1);
        return (0, r.createElement)(
          'button',
          {
            onClick: () => {
              o(!t);
            },
            className: `woocommerce-marketplace__my-subscriptions__product-status woocommerce-marketplace__my-subscriptions__product-status--${e.level}`,
          },
          (0, r.createElement)(d.Z, { icon: at.Z, size: 16 }),
          e.text,
          '' !== e.explanation &&
            t &&
            (0, r.createElement)(
              l.Popover,
              {
                className: 'woocommerce-marketplace__my-subscriptions__popover',
                position: 'top center',
                focusOnMount: !1,
              },
              e.explanation,
            ),
        );
      }
      var st = o(85797);
      function it(e) {
        const t = [
          {
            title: (0, s.__)('Manage in Plugins', 'woocommerce'),
            icon: (0, r.createElement)(r.Fragment, null),
            onClick: () => {
              window.location.href = c.SX + 'plugins.php';
            },
          },
        ];
        return (
          e.subscription.is_shared ||
            t.unshift({
              title: (0, s.__)('Manage on WooCommerce.com', 'woocommerce'),
              icon: (0, r.createElement)(r.Fragment, null),
              onClick: () => {
                window.open('https://woocommerce.com/my-account/my-subscriptions', '_blank');
              },
            }),
          e.subscription.documentation_url &&
            t.unshift({
              title: (0, s.__)('View documentation', 'woocommerce'),
              icon: (0, r.createElement)(r.Fragment, null),
              onClick: () => {
                window.open(e.subscription.documentation_url, '_blank');
              },
            }),
          (0, r.createElement)(l.DropdownMenu, {
            icon: st.Z,
            label: (0, s.__)('Actions', 'woocommerce'),
            controls: t,
          })
        );
      }
      function lt(e) {
        return (0, r.createElement)(
          'span',
          { className: 'woocommerce-marketplace__my-subscriptions-version' },
          e.span,
        );
      }
      function mt(e) {
        const t = (0, c.O3)('wccomHelper', {});
        return e.local.version === e.version
          ? (0, r.createElement)(lt, { span: e.local.version })
          : e.local.version && e.version
          ? (0, r.createElement)(ct, {
              subscription: e,
              wooUpdateManagerActive: t?.wooUpdateManagerActive,
            })
          : e.version
          ? (0, r.createElement)(lt, { span: e.version })
          : e.local.version
          ? (0, r.createElement)(lt, { span: e.local.version })
          : '';
      }
      function ut(e) {
        return H(e, [
          ['utm_source', 'subscriptionsscreen'],
          ['utm_medium', 'product'],
          ['utm_campaign', 'wcaddons'],
          ['utm_content', 'product-name'],
        ]);
      }
      function dt(e) {
        var t;
        let o = (0, r.createElement)(d.Z, { icon: Fe, size: 40 });
        e.product_icon &&
          (o = (0, r.createElement)('img', {
            src: e.product_icon,
            alt: (0, s.sprintf)((0, s.__)('%s icon', 'woocommerce'), e.product_name),
          }));
        const c = (function(e) {
          return '' === e.product_key
            ? {
                text: (0, s.__)('No subscription', 'woocommerce'),
                level: We.Error,
                explanation: (0, r.createInterpolateElement)(
                  (0, s.__)(
                    'To receive updates and support, please <purchase>purchase</purchase> a subscription or use a subscription from another account by <sharing>sharing</sharing> or <transferring>transferring</transferring>.',
                    'woocommerce',
                  ),
                  {
                    purchase: (0, r.createElement)(
                      'a',
                      { href: K(e), rel: 'nofollow noopener noreferrer' },
                      'renew',
                    ),
                    sharing: (0, r.createElement)(
                      'a',
                      { href: M, rel: 'nofollow noopener noreferrer' },
                      'sharing',
                    ),
                    transferring: (0, r.createElement)(
                      'a',
                      { href: M, rel: 'nofollow noopener noreferrer' },
                      'sharing',
                    ),
                  },
                ),
              }
            : e.local.installed && !e.active
            ? {
                text: (0, s.__)('Not connected', 'woocommerce'),
                level: We.Warning,
                explanation: (0, s.__)(
                  'To receive updates and support, please connect your subscription to this store.',
                  'woocommerce',
                ),
              }
            : !!e.expired && {
                text: (0, s.__)('Expired', 'woocommerce'),
                level: We.Error,
                explanation: (0, r.createInterpolateElement)(
                  (0, s.__)(
                    'To receive updates and support, please <renew>renew</renew> this subscription or use a subscription from another account by <sharing>sharing</sharing> or <transferring>transferring</transferring>.',
                    'woocommerce',
                  ),
                  {
                    renew: (0, r.createElement)(
                      'a',
                      { href: $(e), rel: 'nofollow noopener noreferrer' },
                      'renew',
                    ),
                    sharing: (0, r.createElement)(
                      'a',
                      { href: M, rel: 'nofollow noopener noreferrer' },
                      'sharing',
                    ),
                    transferring: (0, r.createElement)(
                      'a',
                      { href: M, rel: 'nofollow noopener noreferrer' },
                      'sharing',
                    ),
                  },
                ),
              };
        })(e);
        return {
          display: (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__my-subscriptions__product' },
            (0, r.createElement)(
              'a',
              { href: ut(e.product_url), target: '_blank', rel: 'noreferrer' },
              (0, r.createElement)(
                'span',
                { className: 'woocommerce-marketplace__my-subscriptions__product-icon' },
                o,
              ),
            ),
            (0, r.createElement)(
              'a',
              {
                href: ut(e.product_url),
                className: 'woocommerce-marketplace__my-subscriptions__product-name',
                target: '_blank',
                rel: 'noreferrer',
              },
              e.product_name,
            ),
            (0, r.createElement)(
              'span',
              { className: 'woocommerce-marketplace__my-subscriptions__product-statuses' },
              c &&
                (0, r.createElement)(nt, {
                  text: c.text,
                  level: c.level,
                  explanation: null !== (t = c.explanation) && void 0 !== t ? t : '',
                }),
              e.is_shared &&
                (0, r.createElement)(nt, {
                  text: (0, s.__)('Shared with you', 'woocommerce'),
                  level: We.Info,
                  explanation: (0, r.createInterpolateElement)(
                    (0, s.sprintf)(
                      (0, s.__)(
                        'This subscription was shared by <email>%s</email>. <link>Learn more</link>.',
                        'woocommerce',
                      ),
                      e.owner_email,
                    ),
                    {
                      email: (0, r.createElement)(
                        'strong',
                        { style: { overflowWrap: 'anywhere' } },
                        'email',
                      ),
                      link: (0, r.createElement)(
                        'a',
                        { href: f, rel: 'nofollow noopener noreferrer' },
                        'Learn more',
                      ),
                    },
                  ),
                }),
            ),
          ),
          value: e.product_name,
        };
      }
      function pt(e) {
        const t = e.expires;
        if (!0 === e.local.installed && '' === e.product_key) return { display: '', value: '' };
        let o = (0, s.__)('Never expires', 'woocommerce');
        return (
          t && (o = (0, Ge.gmdateI18n)('j M, Y', new Date(1e3 * t))),
          {
            display: (0, r.createElement)(
              'span',
              { className: 'woocommerce-marketplace__my-subscriptions__expiry-date' },
              o,
            ),
            value: t,
          }
        );
      }
      function _t(e) {
        return {
          display: e.autorenew ? (0, s.__)('On', 'woocommerce') : (0, s.__)('Off', 'woocommerce'),
          value: e.autorenew,
        };
      }
      function wt(e) {
        return { display: mt(e) };
      }
      function gt(e) {
        let t = null;
        return (
          '' === e.product_key
            ? (t = (0, r.createElement)(Xe, { subscription: e }))
            : e.expired
            ? (t = (0, r.createElement)(Je, { subscription: e }))
            : !1 === e.local.installed && !1 === e.subscription_installed
            ? (t = (0, r.createElement)(Ke, { subscription: e }))
            : !1 === e.active &&
              !0 === e.subscription_available &&
              (t = (0, r.createElement)(Ve, { subscription: e, variant: 'link' })),
          {
            display: (0, r.createElement)(
              'div',
              { className: 'woocommerce-marketplace__my-subscriptions__actions' },
              t,
              (0, r.createElement)(it, { subscription: e }),
            ),
          }
        );
      }
      const yt =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAwMDIgMi4yNVY0QzE2LjQxODUgNCAyMC4wMDAzIDcuNTgxNzIgMjAuMDAwMyAxMkMyMC4wMDAzIDE1LjcyNzcgMTcuNDUwNyAxOC44NTk5IDE0LjAwMDMgMTkuNzQ4VjE5Ljc0NzlDMTMuODMwMSAxOS43OTE3IDEzLjY1NzcgMTkuODMwMSAxMy40ODMzIDE5Ljg2MjhDMTMuMzM3MSAxOS44OTA1IDEzLjE5MDYgMTkuOTE0IDEzLjA0NDIgMTkuOTMzNEwxMy4wNDQxIDE5LjkzMjVDMTIuNzAyNCAxOS45NzcgMTIuMzUzOSAyMCAxMiAyMEMxMS42NDYgMjAgMTEuMjk3NSAxOS45NzcgMTAuOTU1NiAxOS45MzI0TDEwLjk1NTYgMTkuOTMyN0MxMC45MTQ4IDE5LjkyNzMgMTAuODc0IDE5LjkyMTYgMTAuODMzMyAxOS45MTU1QzkuNjEwMzYgMTkuNzM2OSA4LjQ3NzIyIDE5LjI4MTUgNy40OTk0OSAxOC42MTVDNy4zNzM2NSAxOC41Mjk1IDcuMjUwMTEgMTguNDQwNCA3LjEyOTA0IDE4LjM0NzdMNy4xMjk1NCAxOC4zNDdDNi41NzU0NiAxNy45MjEyIDYuMDc4NzIgMTcuNDI0NSA1LjY1MjkxIDE2Ljg3MDRMNS42NTE3MSAxNi44NzEzQzUuNDg1NTEgMTYuNjU0NSA1LjMyOTQxIDE2LjQyNzYgNS4xODQzOCAxNi4xOTExQzQuNjk0NTMgMTUuMzk2MiA0LjMzOTg1IDE0LjUwOTEgNC4xNTIzOSAxMy41NjE5QzQuMTE3ODggMTMuMzg5NSA0LjA4OTI1IDEzLjIxNjggNC4wNjY0MSAxMy4wNDQxTDQuMDY3NDkgMTMuMDQzOUM0LjAyMjk3IDEyLjcwMjIgNCAxMi4zNTM4IDQgMTJDNCAxMS42NDYgNC4wMjI5OSAxMS4yOTc0IDQuMDY3NTYgMTAuOTU1NUw0LjA2NzA4IDEwLjk1NTVDNC4wNzY5NCAxMC44ODExIDQuMDg3ODQgMTAuODA3IDQuMDk5NzYgMTAuNzMzQzQuMjgxIDkuNTk0IDQuNzAyNjYgOC41MzUwNyA1LjMxMTA5IDcuNjA5OTJDNS40MTg2NCA3LjQ0NTcyIDUuNTMyMzYgNy4yODUyNSA1LjY1MjEgNy4xMjg5MUw1LjY1Mjk0IDcuMTI5NTVDNS42NTUzNSA3LjEyNjQxIDUuNjU3NzcgNy4xMjMyNyA1LjY2MDE4IDcuMTIwMTRMNi44NjAzNyA4LjAyMDI4QzYuNzQwMTUgOC4xNzUzMSA2LjYyNjc5IDguMzM1OTMgNi41MjA3NCA4LjUwMTY4QzYuMDYwNDMgOS4yMjQzOSA1Ljc0NTQgMTAuMDMzMyA1LjU5NjM5IDEwLjg3ODVDNS41MzMwMyAxMS4yNDI4IDUuNSAxMS42MTc2IDUuNSAxMkM1LjUgMTIuNDc1MSA1LjU1MDk2IDEyLjkzODIgNS42NDc3MiAxMy4zODQzQzUuNzI4OTQgMTMuNzU0NCA1Ljg0Mzk3IDE0LjEyMzMgNS45OTQ3NSAxNC40ODczQzYuMTE3NTQgMTQuNzgzNyA2LjI1OTM4IDE1LjA2NTcgNi40MTgxMyAxNS4zMzI1QzYuOTE2NzIgMTYuMTY1OCA3LjU5NjYzIDE2Ljg3ODIgOC40MDMzNSAxNy40MTUxQzkuMTc2ODIgMTcuOTI3NSAxMC4wNTQgMTguMjcxIDEwLjk3MTQgMTguNDE5MUMxMS4zMDY0IDE4LjQ3MjMgMTEuNjUgMTguNSAxMiAxOC41QzEyLjQ1MDYgMTguNSAxMi44OTA0IDE4LjQ1NDIgMTMuMzE1MSAxOC4zNjY5QzEzLjUyNjMgMTguMzIzIDEzLjczNzIgMTguMjY4MSAxMy45NDcgMTguMjAxOUwxMy45NDc0IDE4LjIwMzJDMTYuNTg1OSAxNy4zNzU4IDE4LjUgMTQuOTExNCAxOC41IDEyQzE4LjUgOC40MTAyMyAxNS41OSA1LjUwMDEzIDEyLjAwMDIgNS41VjcuMjVMOS4wMDAyNCA0Ljc1TDEyLjAwMDIgMi4yNVoiIGZpbGw9IiMwMDdDQkEiLz4KPC9zdmc+',
        ht = 'woocommerce-marketplace-refresh-subscriptions';
      function Et() {
        const { refreshSubscriptions: e } = (0, r.useContext)(Pe),
          [t, o] = (0, r.useState)(!1),
          c = () => {
            t ||
              (W(ht),
              o(!0),
              e()
                .then(() => {
                  F(ht, (0, s.__)('Subscriptions refreshed.', 'woocommerce'), z.Success);
                })
                .catch(e => {
                  F(
                    ht,
                    (0, s.sprintf)(
                      (0, s.__)('Error refreshing subscriptions: %s', 'woocommerce'),
                      e.message,
                    ),
                    z.Error,
                    { actions: [{ label: (0, s.__)('Try again', 'woocommerce'), onClick: c }] },
                  );
                })
                .finally(() => {
                  o(!1);
                }));
          };
        return (0, r.createElement)(
          l.Button,
          { className: 'woocommerce-marketplace__refresh-subscriptions', onClick: c, isBusy: t },
          (0, r.createElement)('img', {
            src: yt,
            alt: (0, s.__)('Refresh subscriptions', 'woocommerce'),
            className: 'woocommerce-marketplace__refresh-subscriptions-icon',
          }),
          (0, s.__)('Refresh', 'woocommerce'),
        );
      }
      const vt =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImFsZXJ0Ij4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMkMyMCA3LjU4MTcyIDE2LjQxODMgNCAxMiA0QzcuNTgxNzIgNCA0IDcuNTgxNzIgNCAxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMFoiIHN0cm9rZT0iI0NDMTgxOCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNMTMgN0gxMVYxM0gxM1Y3WiIgZmlsbD0iI0NDMTgxOCIvPgo8cGF0aCBpZD0iVmVjdG9yXzMiIGQ9Ik0xMyAxNUgxMVYxN0gxM1YxNVoiIGZpbGw9IiNDQzE4MTgiLz4KPC9nPgo8L3N2Zz4K';
      function bt() {
        const e = (0, D.useSelect)(e => e(O).notices(), []),
          t = e =>
            e.options?.actions
              ? e.options?.actions.map(e => ({ ...e, variant: 'link', className: 'is-link' }))
              : [],
          o = [];
        for (const c of e)
          o.push(
            (0, r.createElement)(
              l.Notice,
              {
                className: 'woocommerce-marketplace__notice--error',
                status: c.status,
                onRemove: () => W(c.productKey),
                key: c.productKey,
                actions: t(c),
              },
              (0, r.createElement)('img', { src: vt, alt: '', width: 24, height: 24 }),
              c.message,
            ),
          );
        return (0, r.createElement)(r.Fragment, null, o);
      }
      function kt(e) {
        var t;
        const o = new URL(J());
        return (
          e.install && o.searchParams.set('install', e.install),
          (0, r.createElement)(
            l.Button,
            { href: o.href, variant: null !== (t = e.variant) && void 0 !== t ? t : 'secondary' },
            (0, s.__)('Connect Account', 'woocommerce'),
          )
        );
      }
      function Nt() {
        const e = (0, oe.useQuery)(),
          t = e?.install,
          o = (0, c.O3)('wccomHelper', {}),
          a = !!o?.isConnected,
          [n, i] = (0, r.useState)(!1),
          [m, u] = (0, r.useState)(!1),
          { subscriptions: d, isLoading: p } = (0, r.useContext)(Pe),
          _ = d.find(e => e.product_key === t),
          w = (0, r.useCallback)(() => {
            (0, oe.navigateTo)({ url: (0, oe.getNewPath)({ ...e, install: void 0 }, h, {}) });
          }, [e]);
        (0, r.useEffect)(() => {
          p ||
            (t && a && !p && !_
              ? (F(
                  t,
                  (0, s.sprintf)(
                    (0, s.__)('Could not find subscription with product key %s.', 'woocommerce'),
                    t,
                  ),
                  z.Error,
                ),
                w())
              : i(!!t));
        }, [a, p, t, w, _]),
          (0, r.useEffect)(() => {
            _ && _.local.installed && u(!0);
          }, [_]);
        const g = () => {
          w(), i(!1);
        };
        return n
          ? (0, r.createElement)(
              l.Modal,
              {
                title: m
                  ? (0, s.__)('You are ready to go!', 'woocommerce')
                  : (0, s.__)('Add to store', 'woocommerce'),
                onRequestClose: g,
                focusOnMount: !0,
                className: 'woocommerce-marketplace__header-account-modal has-size-medium',
                style: { borderRadius: 4 },
                overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
              },
              (() => {
                if (!a)
                  return (0, r.createElement)(
                    l.Notice,
                    { status: 'warning', isDismissible: !1 },
                    (0, s.__)(
                      'In order to install a product, you need to first connect your account.',
                      'woocommerce',
                    ),
                  );
                if (_) {
                  const e = m
                    ? (0, s.__)(
                        'Keep the momentum going and start setting up your extension.',
                        'woocommerce',
                      )
                    : (0, s.__)('Would you like to install this extension?', 'woocommerce');
                  return (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(
                      'p',
                      { className: 'woocommerce-marketplace__header-account-modal-text' },
                      e,
                    ),
                    (0, r.createElement)(ye, {
                      product: V(_),
                      small: !0,
                      tracksData: { position: 1, group: 'subscriptions', label: 'install' },
                    }),
                  );
                }
              })(),
              (() => {
                const e = [];
                return (
                  m
                    ? (e.push(
                        (0, r.createElement)(
                          l.Button,
                          {
                            variant: 'secondary',
                            href: _?.documentation_url,
                            target: '_blank',
                            className: 'woocommerce-marketplace__header-account-modal-button',
                            key: 'docs',
                          },
                          (0, s.__)('View docs', 'woocommerce'),
                        ),
                      ),
                      e.push(
                        (0, r.createElement)(
                          l.Button,
                          {
                            variant: 'primary',
                            href: C,
                            className: 'woocommerce-marketplace__header-account-modal-button',
                            key: 'plugin-list',
                          },
                          (0, s.__)('View in Plugins', 'woocommerce'),
                        ),
                      ))
                    : (e.push(
                        (0, r.createElement)(
                          l.Button,
                          {
                            variant: 'tertiary',
                            onClick: g,
                            className: 'woocommerce-marketplace__header-account-modal-button',
                            key: 'cancel',
                          },
                          (0, s.__)('Cancel', 'woocommerce'),
                        ),
                      ),
                      a
                        ? _ &&
                          e.push(
                            (0, r.createElement)(Ke, {
                              subscription: _,
                              variant: 'primary',
                              onError: g,
                              key: 'install',
                            }),
                          )
                        : e.push(
                            (0, r.createElement)(kt, {
                              variant: 'primary',
                              install: t,
                              key: 'connect',
                            }),
                          )),
                  (0, r.createElement)(
                    l.ButtonGroup,
                    { className: 'woocommerce-marketplace__header-account-modal-button-group' },
                    e,
                  )
                );
              })(),
            )
          : null;
      }
      function Mt() {
        const { subscriptions: e, isLoading: t } = (0, r.useContext)(Pe),
          o = (0, c.O3)('wccomHelper', {}),
          a = (0, r.createInterpolateElement)(
            (0, s.__)(
              'WooCommerce.com extensions and themes installed on this store. To see all your subscriptions go to <a>your account<custom_icon /></a> on WooCommerce.com.',
              'woocommerce',
            ),
            {
              a: (0, r.createElement)(
                'a',
                {
                  href: 'https://woocommerce.com/my-account/my-subscriptions',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'your account',
              ),
              custom_icon: (0, r.createElement)(d.Z, { icon: p.Z, size: 12 }),
            },
          ),
          n = e.filter(e => e.subscription_installed),
          i = e.filter(
            e => !e.subscription_installed && o?.wooUpdateManagerPluginSlug !== e.product_slug,
          );
        if (!o?.isConnected) {
          const e = (0, s.__)(
            "Connect your store to WooCommerce.com using the WooCommerce.com Update Manager. Once connected, you'll be able to manage your subscriptions, receive product updates, and access streamlined support from this screen.",
            'woocommerce',
          );
          return (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__my-subscriptions--connect' },
            (0, r.createElement)(Nt, null),
            (0, r.createElement)('div', {
              className: 'woocommerce-marketplace__my-subscriptions__icon',
            }),
            (0, r.createElement)(
              'h2',
              { className: 'woocommerce-marketplace__my-subscriptions__header' },
              (0, s.__)('Manage your subscriptions', 'woocommerce'),
            ),
            (0, r.createElement)(
              'p',
              { className: 'woocommerce-marketplace__my-subscriptions__description' },
              e,
            ),
            (0, r.createElement)(
              l.Button,
              { href: J(), variant: 'primary' },
              (0, s.__)('Connect your store', 'woocommerce'),
            ),
          );
        }
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__my-subscriptions' },
          (0, r.createElement)(Nt, null),
          (0, r.createElement)(
            'section',
            { className: 'woocommerce-marketplace__my-subscriptions__notices' },
            (0, r.createElement)(bt, null),
          ),
          (0, r.createElement)(
            'section',
            {
              className:
                'woocommerce-marketplace__my-subscriptions-section woocommerce-marketplace__my-subscriptions__installed',
            },
            (0, r.createElement)(
              'header',
              { className: 'woocommerce-marketplace__my-subscriptions__header' },
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-marketplace__my-subscriptions__header-content' },
                (0, r.createElement)(
                  'h2',
                  { className: 'woocommerce-marketplace__my-subscriptions__heading' },
                  (0, s.__)('Installed on this store', 'woocommerce'),
                ),
                (0, r.createElement)(
                  'p',
                  { className: 'woocommerce-marketplace__my-subscriptions__table-description' },
                  a,
                ),
              ),
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-marketplace__my-subscriptions__header-refresh' },
                (0, r.createElement)(Et, null),
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-marketplace__my-subscriptions__table-wrapper' },
              (0, r.createElement)(Ye, {
                isLoading: t,
                rows: n.map(e =>
                  (function(e) {
                    return [dt(e), pt(e), _t(e), wt(e), gt(e)];
                  })(e),
                ),
              }),
            ),
          ),
          i.length > 0 &&
            (0, r.createElement)(
              'section',
              {
                className:
                  'woocommerce-marketplace__my-subscriptions-section woocommerce-marketplace__my-subscriptions__available',
              },
              (0, r.createElement)(
                'h2',
                { className: 'woocommerce-marketplace__my-subscriptions__heading' },
                (0, s.__)('Available to use', 'woocommerce'),
              ),
              (0, r.createElement)(
                'p',
                { className: 'woocommerce-marketplace__my-subscriptions__table-description' },
                (0, s.__)("WooCommerce.com subscriptions you haven't used yet.", 'woocommerce'),
              ),
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-marketplace__my-subscriptions__table-wrapper' },
                (0, r.createElement)(Ze, {
                  isLoading: t,
                  rows: i.map(e =>
                    (function(e) {
                      return [dt(e), pt(e), _t(e), wt(e), gt(e)];
                    })(e),
                  ),
                }),
              ),
            ),
        );
      }
      var ft = (function(e) {
        return (
          (e[(e.notConnected = 0)] = 'notConnected'),
          (e[(e.notInstalled = 1)] = 'notInstalled'),
          (e[(e.installing = 2)] = 'installing'),
          (e[(e.installedCanActivate = 3)] = 'installedCanActivate'),
          (e[(e.installedCannotActivate = 4)] = 'installedCannotActivate'),
          (e[(e.installFailed = 5)] = 'installFailed'),
          (e[(e.activating = 6)] = 'activating'),
          (e[(e.activated = 7)] = 'activated'),
          (e[(e.activationFailed = 8)] = 'activationFailed'),
          e
        );
      })(ft || {});
      const Ct = function(e) {
        const [t, o] = (0, r.useState)(ft.notInstalled),
          [n, i] = (0, r.useState)(),
          [m, u] = (0, r.useState)(),
          [d, p] = (0, r.useState)(),
          [_, w] = (0, r.useState)(),
          [g, y] = (0, r.useState)(),
          [E, v] = (0, r.useState)(!1),
          [b, k] = (0, r.useState)(),
          { addInstalledProduct: N } = (0, r.useContext)(a),
          M = (0, oe.useQuery)();
        function f() {
          o(ft.notInstalled),
            k(void 0),
            (0, oe.navigateTo)({
              url: (0, oe.getNewPath)({ ...M, install: void 0, installProduct: void 0 }, h, {}),
            });
        }
        return (
          (0, r.useEffect)(() => {
            const e = (0, c.O3)('wccomHelper', {});
            u(e?.installedProducts), p(e?.isConnected);
          }, []),
          (0, r.useEffect)(() => {
            if ((v(!1), !M.installProduct)) return;
            const t = parseInt(M.installProduct, 10),
              r = e.products.find(e => e.id === t);
            if (r) {
              if (m && m.find(e => e === r.slug)) return;
              d
                ? o(ft.notInstalled)
                : (o(ft.notConnected),
                  k({
                    status: 'warning',
                    message: (0, s.__)(
                      'In order to install a product, you need to first connect your account.',
                      'woocommerce',
                    ),
                  })),
                v(!0),
                i(r);
            }
          }, [M, e.products, m, d]),
          n && E
            ? (0, r.createElement)(
                l.Modal,
                {
                  title:
                    t === ft.activated
                      ? (0, s.__)('You are ready to go!', 'woocommerce')
                      : (0, s.__)('Add to Store', 'woocommerce'),
                  onRequestClose: f,
                  focusOnMount: !0,
                  className: 'woocommerce-marketplace__header-account-modal has-size-medium',
                  style: { borderRadius: 4 },
                  overlayClassName: 'woocommerce-marketplace__header-account-modal-overlay',
                },
                b &&
                  (0, r.createElement)(
                    l.Notice,
                    { status: b.status, isDismissible: !1 },
                    b.message,
                  ),
                (0, r.createElement)(
                  'p',
                  { className: 'woocommerce-marketplace__header-account-modal-text' },
                  t === ft.notConnected
                    ? ''
                    : t === ft.installedCanActivate || t === ft.activating
                    ? (0, s.__)(
                        'Extension successfully installed. Would you like to activate it?',
                        'woocommerce',
                      )
                    : t === ft.installedCannotActivate
                    ? (0, s.__)(
                        "Extension successfully installed but we can't activate it at the moment. Please visit the plugins page to see more.",
                        'woocommerce',
                      )
                    : t === ft.activated
                    ? (0, s.__)(
                        'Keep the momentum going and start setting up your extension.',
                        'woocommerce',
                      )
                    : (0, s.__)('Would you like to install this extension?', 'woocommerce'),
                ),
                n &&
                  (0, r.createElement)(ye, {
                    product: n,
                    small: !0,
                    tracksData: { position: 1, group: 'install-flow', label: 'install' },
                  }),
                (0, r.createElement)(
                  l.ButtonGroup,
                  { className: 'woocommerce-marketplace__header-account-modal-button-group' },
                  t === ft.activated
                    ? g
                      ? (0, r.createElement)(
                          l.Button,
                          {
                            variant: 'tertiary',
                            href: g,
                            className: 'woocommerce-marketplace__header-account-modal-button',
                            key: 'docs',
                          },
                          (0, s.__)('View Docs', 'woocommerce'),
                        )
                      : (0, r.createElement)(r.Fragment, null)
                    : (0, r.createElement)(
                        l.Button,
                        {
                          variant: 'tertiary',
                          onClick: f,
                          className: 'woocommerce-marketplace__header-account-modal-button',
                          key: 'cancel',
                        },
                        (0, s.__)('Cancel', 'woocommerce'),
                      ),
                  t === ft.notConnected
                    ? (0, r.createElement)(kt, { variant: 'primary', key: 'connect' })
                    : t === ft.installedCanActivate || t === ft.activating
                    ? (0, r.createElement)(
                        l.Button,
                        {
                          variant: 'primary',
                          onClick: function() {
                            _ &&
                              (o(ft.activating),
                              (0, pe.recordEvent)('marketplace_activate_new_product_clicked', {
                                product_id: n ? n.id : 0,
                              }),
                              fetch(_)
                                .then(() => {
                                  o(ft.activated);
                                })
                                .catch(() => {
                                  o(ft.activationFailed),
                                    k({
                                      status: 'error',
                                      message: (0, s.__)(
                                        'Activation failed. Please try again from the plugins page.',
                                        'woocommerce',
                                      ),
                                    });
                                }));
                          },
                          key: 'activate',
                          isBusy: t === ft.activating,
                          disabled: t === ft.activating,
                        },
                        (0, s.__)('Activate', 'woocommerce'),
                      )
                    : t === ft.activated ||
                      t === ft.installedCannotActivate ||
                      t === ft.activationFailed
                    ? (0, r.createElement)(
                        l.Button,
                        {
                          variant: 'primary',
                          href: C,
                          className: 'woocommerce-marketplace__header-account-modal-button',
                          key: 'plugin-list',
                        },
                        (0, s.__)('View in Plugins', 'woocommerce'),
                      )
                    : (0, r.createElement)(
                        l.Button,
                        {
                          variant: 'primary',
                          onClick: function() {
                            var e;
                            n &&
                              n.id &&
                              ((0, pe.recordEvent)('marketplace_install_new_product_clicked', {
                                product_id: n.id,
                              }),
                              o(ft.installing),
                              ((e = n.id),
                              T()({
                                path: '/wc/v3/marketplace/create-order',
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ product_id: e }),
                              }))
                                .then(e => {
                                  if (!e.success) throw e;
                                  var t;
                                  return (
                                    (0, D.dispatch)($e).startInstalling(n.id),
                                    y(e.data.documentation_url),
                                    n.slug && N(null !== (t = n.slug) && void 0 !== t ? t : ''),
                                    G(e.data.product_type, e.data.zip_slug).then(e => {
                                      (0, D.dispatch)($e).stopInstalling(n.id),
                                        e.data.activateUrl
                                          ? (w(e.data.activateUrl), o(ft.installedCanActivate))
                                          : o(ft.installedCannotActivate);
                                    })
                                  );
                                })
                                .catch(e => {
                                  var t;
                                  e.data.redirect_location
                                    ? (k({
                                        status: 'warning',
                                        message: (0, s.__)(
                                          'We need your address to complete installing this product. We will redirect you to WooCommerce.com checkout. Afterwards, you will be able to install the product.',
                                          'woocommerce',
                                        ),
                                      }),
                                      setTimeout(() => {
                                        window.location.href = e.data.redirect_location;
                                      }, 5e3))
                                    : (o(ft.installFailed),
                                      k({
                                        status: 'error',
                                        message:
                                          null !== (t = e.data.message) && void 0 !== t
                                            ? t
                                            : (0, s.__)(
                                                'An error occurred. Please try again later.',
                                                'woocommerce',
                                              ),
                                      }));
                                }));
                          },
                          key: 'install',
                          isBusy: t === ft.installing,
                          disabled: t === ft.installing || t === ft.installFailed,
                        },
                        (0, s.__)('Install', 'woocommerce'),
                      ),
                ),
              )
            : (0, r.createElement)(r.Fragment, null)
        );
      };
      var It = o(47642),
        xt = o(25918),
        Tt = o(28601);
      const Dt = { info: at.Z, check: It.Z, percent: xt.Z };
      function St(e) {
        const {
            id: t,
            description: o,
            children: c,
            icon: a,
            isDismissible: n = !0,
            variant: s = 'info',
            onClose: i,
            onLoad: l,
          } = e,
          [m, u] = (0, r.useState)(
            'true' !== localStorage.getItem(`wc-marketplaceNoticeClosed-${t}`),
          );
        if (
          ((0, r.useEffect)(() => {
            m && 'function' == typeof l && l();
          }, [m]),
          !m)
        )
          return null;
        const p = te()('woocommerce-marketplace__notice', `woocommerce-marketplace__notice--${s}`, {
            'is-dismissible': n,
          }),
          _ = Dt[a || 'info'],
          w = te()(
            'woocommerce-marketplace__notice-icon',
            `woocommerce-marketplace__notice-icon--${s}`,
          );
        return (0, r.createElement)(
          'div',
          { className: p },
          a &&
            (0, r.createElement)('span', { className: w }, (0, r.createElement)(d.Z, { icon: _ })),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__notice-content' },
            (0, r.createElement)('p', {
              className: 'woocommerce-marketplace__notice-description',
              dangerouslySetInnerHTML: (0, ot.ZP)(o),
            }),
            c &&
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-marketplace__notice-children' },
                c,
              ),
          ),
          n &&
            (0, r.createElement)(
              'button',
              {
                className: 'woocommerce-marketplace__notice-close',
                'aria-label': 'Close',
                onClick: () => {
                  u(!1),
                    localStorage.setItem(`wc-marketplaceNoticeClosed-${t}`, 'true'),
                    'function' == typeof i && i();
                },
              },
              (0, r.createElement)(d.Z, { icon: Tt.Z }),
            ),
        );
      }
      const At = () => {
        var e;
        const t = new URLSearchParams(window.location.search),
          o = t.get('page');
        if ('wc-admin' !== o) return null;
        const a = null !== (e = window?.wcMarketplace?.promotions) && void 0 !== e ? e : [],
          n = Date.now(),
          s = decodeURIComponent(t.get('path') || ''),
          i = t.get('tab');
        return (0, r.createElement)(
          r.Fragment,
          null,
          a.map((e, t) => {
            if (!e.pages) return null;
            if (
              !e.pages.some(e => {
                const t = e.path.startsWith('/') ? e.path : `/${e.path}`,
                  r = s.startsWith('/') ? s : `/${s}`;
                return e.page === o && t === r && e.tab ? e.tab === i : !i;
              })
            )
              return null;
            const a = new Date(e.date_from_gmt).getTime(),
              l = new Date(e.date_to_gmt).getTime();
            return n < a || n > l
              ? null
              : 'notice' === e.format && e?.content
              ? (0, r.createElement)(St, {
                  key: t,
                  id: null !== (m = e.menu_item_id) && void 0 !== m ? m : `promotion-${t}`,
                  description: e.content[c.MV.userLocale] || e.content.en_US,
                  variant: e.style ? e.style : 'info',
                  icon: e?.icon || '',
                  isDismissible: e.is_dismissible || !1,
                })
              : null;
            var m;
          }),
        );
      };
      function zt() {
        const e = 'woo-connect-notice-marketplace-dismissed',
          t = (0, c.O3)('wccomHelper', {}),
          o = t?.woocomConnectNoticeType || 'none';
        if ('none' === o) return null;
        const a = localStorage.getItem(e),
          n = new Date(a || ''),
          i = new Date();
        i.setMonth(i.getMonth() - 1),
          (null === a || isNaN(n.valueOf()) || i.valueOf() > n.valueOf()) &&
            (localStorage.removeItem('wc-marketplaceNoticeClosed-woo-connect-notice'),
            localStorage.removeItem(e));
        let m = '';
        return (
          'long' === o &&
            ((m = m.concat(
              (0, s.__)(
                'Your store might be at risk as you are running old versions of WooCommerce plugins.',
                'woocommerce',
              ),
            )),
            (m = m.concat(' '))),
          (m = m.concat(
            (0, s.__)(
              '<strong>Connect your store to WooCommerce.com</strong> to get updates and streamlined support for your subscriptions.',
              'woocommerce',
            ),
          )),
          (0, r.createElement)(
            St,
            {
              id: 'woo-connect-notice',
              description: m,
              isDismissible: !0,
              variant: 'error',
              onClose: () => {
                localStorage.setItem(e, new Date().toString()),
                  (0, pe.recordEvent)('woo_connect_notice_in_marketplace_dismissed');
              },
              onLoad: () => {
                (0, pe.recordEvent)('woo_connect_notice_in_marketplace_shown');
              },
            },
            (0, r.createElement)(
              l.Button,
              {
                href: J(),
                variant: 'secondary',
                onClick: () => (
                  (0, pe.recordEvent)('woo_connect_notice_in_marketplace_clicked'), !0
                ),
              },
              (0, s.__)('Connect', 'woocommerce'),
            ),
          )
        );
      }
      function Lt() {
        const e = (0, c.O3)('wccomHelper', {});
        return e?.isConnected
          ? e?.wooUpdateManagerActive || e?.wooUpdateManagerInstalled
            ? e?.wooUpdateManagerInstalled && !e?.wooUpdateManagerActive
              ? (0, r.createElement)(
                  'section',
                  { className: 'woocommerce-marketplace__woo-update-manager-plugin__notices' },
                  (0, r.createElement)(
                    l.Notice,
                    { status: 'error', isDismissible: !1 },
                    (0, r.createElement)('span', {
                      dangerouslySetInnerHTML: (0, ot.ZP)(
                        (0, s.__)(
                          'Activate the <b>WooCommerce.com Update Manager</b> to continue receiving the updates and streamlined support included in your WooCommerce.com subscriptions.',
                          'woocommerce',
                        ),
                      ),
                    }),
                    (0, r.createElement)(
                      'div',
                      { className: 'components-notice__buttons' },
                      (0, r.createElement)(
                        l.Button,
                        { href: C, variant: 'secondary' },
                        (0, s.__)('Activate', 'woocommerce'),
                      ),
                    ),
                  ),
                )
              : null
            : (0, r.createElement)(
                'section',
                { className: 'woocommerce-marketplace__woo-update-manager-plugin__notices' },
                (0, r.createElement)(
                  l.Notice,
                  { status: 'error', isDismissible: !1 },
                  (0, r.createElement)('span', {
                    dangerouslySetInnerHTML: (0, ot.ZP)(
                      (0, s.__)(
                        'Please install the <b>WooCommerce.com Update Manager</b> to continue receiving the updates and streamlined support included in your WooCommerce.com subscriptions.<br/>Alternatively, you can download and install it manually.',
                        'woocommerce',
                      ),
                    ),
                  }),
                  (0, r.createElement)(
                    'div',
                    { className: 'components-notice__buttons' },
                    (0, r.createElement)(
                      l.Button,
                      { href: e?.wooUpdateManagerInstallUrl, variant: 'secondary' },
                      (0, s.__)('Install', 'woocommerce'),
                    ),
                    (0, r.createElement)(
                      l.Button,
                      { href: I, variant: 'link' },
                      (0, s.__)('Download', 'woocommerce'),
                    ),
                  ),
                ),
              )
          : null;
      }
      function Ot(e) {
        const { type: t } = e,
          o = (0, c.O3)('wccomHelper', {}),
          a = {
            'woo-subscription-expired-notice': {
              shown: 'woo_subscription_expired_notice_in_marketplace_shown',
              clicked: 'woo_subscription_expired_notice_in_marketplace_clicked',
              dismissed: 'woo_subscription_expired_notice_in_marketplace_dismissed',
            },
            'woo-subscription-expiring-notice': {
              shown: 'woo_subscription_expiring_notice_in_marketplace_shown',
              clicked: 'woo_subscription_expiring_notice_in_marketplace_clicked',
              dismissed: 'woo_subscription_expiring_notice_in_marketplace_dismissed',
            },
          };
        let n = null,
          s = '';
        const i = o?.dismissNoticeNonce || '';
        if ('expired' === t)
          (n = o?.subscription_expired_notice || {}), (s = 'woo-subscription-expired-notice');
        else {
          if ('expiring' !== t) return null;
          (n = o?.subscription_expiring_notice || {}), (s = 'woo-subscription-expiring-notice');
        }
        return o.isConnected && n?.description
          ? (0, r.createElement)(
              St,
              {
                id: s,
                description: n.description,
                isDismissible: !0,
                variant: 'error',
                onClose: () => {
                  (0, pe.recordEvent)(a[s].dismissed);
                  const e = { notice_id: s, dismiss_notice_nonce: i };
                  T()({ path: '/wc-admin/notice/dismiss', method: 'POST', data: e });
                },
                onLoad: function() {
                  (0, pe.recordEvent)(a[s].shown);
                },
              },
              (0, r.createElement)(
                l.Button,
                {
                  href: n.button_link,
                  variant: 'secondary',
                  onClick: function() {
                    (0, pe.recordEvent)(a[s].clicked);
                  },
                },
                n.button_text,
              ),
            )
          : null;
      }
      function jt() {
        const e = (0, r.useContext)(a),
          [t, o] = (0, r.useState)([]),
          { setIsLoading: n, selectedTab: s, setHasBusinessServices: i } = e,
          l = (0, oe.useQuery)();
        return (
          (0, r.useEffect)(() => {
            const e = ['', 'themes', 'business-services'],
              t = e.map(() => new AbortController());
            e.forEach((e, o) => {
              const r = new URLSearchParams();
              '' !== e && r.append('category', e);
              const a = (0, c.O3)('wccomHelper', !1);
              return (
                a.storeCountry && r.append('country', a.storeCountry),
                Q(r, t[o].signal).then(t => {
                  'business-services' === e && i(t.length > 0);
                }),
                () => {
                  t.forEach(e => {
                    e.abort();
                  });
                }
              );
            });
          }, []),
          (0, r.useEffect)(() => {
            const e = new AbortController();
            if (void 0 === l.tab || (l.tab && ['', 'discover'].includes(l.tab))) return;
            n(!0), o([]);
            const t = new URLSearchParams();
            l.term && t.append('term', l.term),
              l.category
                ? t.append('category', '_all' === l.category ? '' : l.category)
                : 'themes' === l?.tab
                ? t.append('category', 'themes')
                : 'business-services' === l?.tab
                ? t.append('category', 'business-services')
                : 'search' === l?.tab &&
                  t.append('category', 'extensions-themes-business-services');
            const r = (0, c.O3)('wccomHelper', !1);
            return (
              r.storeCountry && t.append('country', r.storeCountry),
              Q(t, e.signal)
                .then(e => {
                  o(e);
                })
                .catch(() => {
                  o([]);
                })
                .finally(() => {
                  const e = {
                    view: l?.tab,
                    search_term: l?.term,
                    product_type: l?.section,
                    category: l?.category,
                  };
                  !(function(e) {
                    if ('' === e.category) return;
                    const t = e.view || 'discover',
                      o = e.search_term || null,
                      r = e.product_type || null,
                      c = e.category || null,
                      a = {
                        ...(t && { view: t }),
                        ...(o && { search_term: o }),
                        ...(r && { product_type: r }),
                        ...(c && { category: c }),
                      };
                    t &&
                      ['extensions', 'themes', 'business-services'].includes(t) &&
                      !c &&
                      (a.category = '_all'),
                      t && 'search' === t && r && !c && (a.category = '_all'),
                      (0, pe.recordEvent)('marketplace_view', a);
                  })(e),
                    (function(e) {
                      if (e.product_type) return;
                      let t = 'extensions_view';
                      const o = e.view || '_featured',
                        r = e.search_term || null,
                        c = e.category || null,
                        a = {
                          ...(o && { section: o }),
                          ...(r && { search_term: r }),
                          version: '2',
                        };
                      switch (o) {
                        case 'extensions':
                          a.section = c || '_all';
                          break;
                        case 'themes':
                          a.section = 'themes';
                          break;
                        case 'search':
                          (t = 'extensions_view_search'),
                            (a.section = o),
                            (a.search_term = r || '');
                          break;
                        case 'my-subscriptions':
                          (t = 'subscriptions_view'), (a.section = 'helper');
                      }
                      (0, pe.recordEvent)(t, a);
                    })(e),
                    n(!1);
                }),
              () => {
                e.abort();
              }
            );
          }, [l.term, l.category, l?.tab, n, l?.section]),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__content' },
            (0, r.createElement)(At, null),
            (0, r.createElement)(Ct, { products: t }),
            'business-services' !== s && 'my-subscriptions' !== s && (0, r.createElement)(zt, null),
            'business-services' !== s && (0, r.createElement)(Lt, null),
            'business-services' !== s && (0, r.createElement)(Ot, { type: 'expired' }),
            'business-services' !== s && (0, r.createElement)(Ot, { type: 'expiring' }),
            (() => {
              switch (s) {
                case 'extensions':
                  return (0, r.createElement)(je, {
                    products: t,
                    categorySelector: !0,
                    type: S.extension,
                  });
                case 'themes':
                  return (0, r.createElement)(je, {
                    products: t,
                    categorySelector: !0,
                    type: S.theme,
                  });
                case 'business-services':
                  return (0, r.createElement)(je, {
                    products: t,
                    categorySelector: !0,
                    type: S.businessService,
                  });
                case 'search':
                  return (0, r.createElement)(Ue, { products: t, type: A.all });
                case 'discover':
                  return (0, r.createElement)(Me, null);
                case 'my-subscriptions':
                  return (0, r.createElement)(Be, null, (0, r.createElement)(Mt, null));
                default:
                  return (0, r.createElement)(r.Fragment, null);
              }
            })(),
          )
        );
      }
      const Ut = (0, r.createElement)(
          m.SVG,
          { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
          (0, r.createElement)(m.Path, {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M6.68822 16.625L5.5 17.8145L5.5 5.5L18.5 5.5L18.5 16.625L6.68822 16.625ZM7.31 18.125L19 18.125C19.5523 18.125 20 17.6773 20 17.125L20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19.5247C4 19.8173 4.16123 20.086 4.41935 20.2237C4.72711 20.3878 5.10601 20.3313 5.35252 20.0845L7.31 18.125ZM16 9.99997H8V8.49997H16V9.99997ZM8 14H13V12.5H8V14Z',
          }),
        ),
        Pt = (0, r.createElement)(
          m.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, r.createElement)(m.Path, {
            d:
              'M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }),
        );
      function Bt(e) {
        const { icon: t, title: o, description: c } = e;
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__icon-group' },
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__icon-group-headline' },
            (0, r.createElement)(d.Z, {
              icon: t,
              size: 20,
              className: 'woocommerce-marketplace__icon-group-icon',
            }),
            (0, r.createElement)(
              'h3',
              { className: 'woocommerce-marketplace__icon-group-title' },
              o,
            ),
          ),
          (0, r.createElement)(
            'p',
            { className: 'woocommerce-marketplace__icon-group-description' },
            c,
          ),
        );
      }
      const Qt =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IlciIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMjU2XzE4NDQ2MykiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM2NDY5NzAiLz4KPHJlY3QgaWQ9IlJlY3RhbmdsZSAxIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSIyIiBmaWxsPSIjNjQ2OTcwIi8+CjxnIGlkPSJTcGVlY2ggYnViYmxlIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTMuMDQ4NTUgMy44NjA0N0MzLjIwMzYgMy42NzMxMiAzLjQyOTcxIDMuNTU2ODMgMy42NzUyIDMuNTUwMzdDNC4xNzkxMSAzLjUxODA3IDQuNDY5ODMgMy43NTcxMSA0LjU0NzM1IDQuMjY3NDdDNC44NTc0NSA2LjM0NzcxIDUuMTkzMzkgOC4xMTc4NiA1LjU0ODcxIDkuNTcxNDRMNy43Mzg3OCA1LjQxMDk2QzcuOTM5MDUgNS4wMzYyNiA4LjE4NDU0IDQuODM1OTkgOC40ODgxOCA0LjgxNjYxQzguOTI3NDkgNC43ODQzIDkuMTk4ODIgNS4wNjIxIDkuMzA4NjUgNS42NTY0NUM5LjUxNTM4IDYuODE5MzIgOS44MzE5NCA3Ljk2MjgxIDEwLjI1MTkgOS4wNjc1M0MxMC41MTY3IDYuNTM1MDYgMTAuOTU2IDQuNzAwMzIgMTEuNTY5OCAzLjU2OTc1QzExLjY5MjUgMy4zMTEzNCAxMS45NDQ1IDMuMTQzMzcgMTIuMjI4NyAzLjEzMDQ1QzEyLjQ1NDkgMy4xMTEwNyAxMi42ODEgMy4xODIxMyAxMi44NTU0IDMuMzMwNzJDMTMuMDM2MyAzLjQ2NjM5IDEzLjE0NjEgMy42Nzk1OCAxMy4xNTkgMy45MDU2OUMxMy4xNzE5IDQuMDczNjYgMTMuMTM5NiA0LjI0MTYzIDEzLjA2MjEgNC4zODM3NkMxMi42NzQ1IDUuMTA3MzIgMTIuMzUxNSA2LjMwODk1IDEyLjA5OTUgNy45ODg2NUMxMS44NTQgOS42MTAyIDExLjc1NzEgMTAuODgyOSAxMS44MjE3IDExLjc5MzhDMTEuODQ3NiAxMi4wMTk5IDExLjgwMjQgMTIuMjQ2IDExLjcwNTQgMTIuNDQ2M0MxMS42MDg1IDEyLjY1MyAxMS40MDE4IDEyLjc5NTIgMTEuMTc1NyAxMi44MDgxQzEwLjkxMDggMTIuODI3NSAxMC42NTI0IDEyLjcwNDcgMTAuMzg3NSAxMi40Mzk4QzkuNDU3MjQgMTEuNDkwMiA4LjcyMDc2IDEwLjA3NTMgOC4xNzgwOCA4LjE5NTM4QzcuNTM4NTEgOS40NzQ1MyA3LjA1Mzk4IDEwLjQzNzEgNi43Mzc0MiAxMS4wNzAyQzYuMTQ5NTMgMTIuMjAwOCA1LjY0NTYyIDEyLjc3NTggNS4yMzIxNSAxMi44MDgxQzQuOTYwODIgMTIuODI3NSA0LjcyODI1IDEyLjYwMTQgNC41NDA5IDEyLjEyMzNDNC4wMzA1MyAxMC44MTgzIDMuNDgxNCA4LjI5MjI5IDIuODkzNSA0LjU0NTI3QzIuODQxODIgNC4yOTk3OCAyLjg5OTk2IDQuMDU0MjggMy4wNDg1NSAzLjg2MDQ3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEyNTZfMTg0NDYzIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=',
        Rt = (0, r.createInterpolateElement)(
          (0, s.__)('30-day <a>money-back guarantee</a>', 'woocommerce'),
          { a: (0, r.createElement)('a', { href: y + '/refund-policy/' }) },
        ),
        Yt = (0, r.createInterpolateElement)(
          (0, s.__)('<a>Get help</a> when you need it', 'woocommerce'),
          { a: (0, r.createElement)('a', { href: y + '/docs/' }) },
        ),
        Zt = (0, r.createInterpolateElement)(
          (0, s.__)('<a>Products</a> you can trust', 'woocommerce'),
          { a: (0, r.createElement)('a', { href: y + '/products/' }) },
        );
      function Gt() {
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__footer-content' },
          (0, r.createElement)(
            'h2',
            { className: 'woocommerce-marketplace__footer-title' },
            (0, s.__)(
              'Hundreds of vetted products and services. Unlimited potential.',
              'woocommerce',
            ),
          ),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__footer-columns' },
            (0, r.createElement)(Bt, {
              icon: It.Z,
              title: Rt,
              description: (0, s.__)(
                "If you change your mind within 30 days of your purchase, we'll give you a full refund — hassle-free.",
                'woocommerce',
              ),
            }),
            (0, r.createElement)(Bt, {
              icon: Ut,
              title: Yt,
              description: (0, s.__)(
                'With detailed documentation and a global support team, help is always available if you need it.',
                'woocommerce',
              ),
            }),
            (0, r.createElement)(Bt, {
              icon: Pt,
              title: Zt,
              description: (0, s.__)(
                'Everything in the Marketplace has been built by our own team or by our trusted partners, so you can be sure of its quality.',
                'woocommerce',
              ),
            }),
          ),
          (0, r.createElement)(
            'div',
            { className: 'woocommerce-marketplace__footer-logo' },
            (0, r.createElement)('img', { src: Qt, alt: 'Woo Logo', 'aria-hidden': 'true' }),
            (0, r.createElement)('span', null, (0, s.__)('Woo Marketplace', 'woocommerce')),
          ),
        );
      }
      function Ft() {
        return (0, r.createElement)(
          'div',
          { className: 'woocommerce-marketplace__footer' },
          (0, r.createElement)(Gt, null),
        );
      }
      function Wt(e) {
        const { title: t, fieldName: o, onValueChange: c, validationFailed: a } = e,
          n = [
            { value: 1, emoji: '😔', label: (0, s.__)('Strongly disagree', 'woocommerce') },
            { value: 2, emoji: '🙁', label: (0, s.__)('Disagree', 'woocommerce') },
            { value: 3, emoji: '😐', label: (0, s.__)('Neutral', 'woocommerce') },
            { value: 4, emoji: '🙂', label: (0, s.__)('Agree', 'woocommerce') },
            { value: 5, emoji: '😍', label: (0, s.__)('Strongly agree', 'woocommerce') },
          ],
          i = te()('woocommerce-marketplace__likert-scale', { 'validation-failed': a });
        function l(e) {
          c(parseInt(e.target.value, 10));
        }
        return (0, r.createElement)(
          r.Fragment,
          null,
          (0, r.createElement)('h2', null, t),
          (0, r.createElement)(
            'ol',
            { className: i },
            n.map(e => {
              const t = `${o}_${e.value}`;
              return (0, r.createElement)(
                'li',
                { key: t, className: 'woocommerce-marketplace__likert-scale-item' },
                (0, r.createElement)('input', {
                  type: 'radio',
                  name: o,
                  value: e.value,
                  id: t,
                  onChange: l,
                  className: 'screen-reader-text',
                }),
                (0, r.createElement)(
                  'label',
                  { htmlFor: t },
                  (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-marketplace__likert-scale-icon' },
                    e.emoji,
                  ),
                  (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-marketplace__likert-scale-text' },
                    e.label,
                  ),
                ),
              );
            }),
          ),
        );
      }
      function Vt() {
        const e = 'marketplace_redesign_2023_dismissals',
          t = 'marketplace_redesign_2023_last_shown_date',
          o = (0, r.useContext)(a),
          { isLoading: c } = o,
          n = () => localStorage.setItem(t, new Date().toDateString()),
          i = () => parseInt(localStorage.getItem(e) || '0', 10),
          m = () => {
            n(), localStorage.setItem(e, `${i() + 1}`);
          },
          [u, d] = (0, r.useState)(!1),
          [p, _] = (0, r.useState)(''),
          [w, g] = (0, r.useState)(0),
          [y, h] = (0, r.useState)(!1),
          [E, v] = (0, r.useState)(0),
          [b, k] = (0, r.useState)(!1),
          N = () => d(!0),
          M = () => {
            m(), d(!1);
          },
          { createNotice: f } = (0, D.useDispatch)('core/notices');
        function C() {
          f('success', (0, s.__)('How easy is it to find an extension?', 'woocommerce'), {
            type: 'snackbar',
            icon: (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'svg',
                {
                  color: '#fff',
                  strokeWidth: '1.5',
                  viewBox: '0 0 28.873 8.9823',
                  style: { height: '8px', marginLeft: '-7px' },
                },
                (0, r.createElement)('path', {
                  className: 'l',
                  d:
                    'm4.1223 1.1216 19.12-0.014142 4.3982 3.38-4.3982 3.38-19.12-0.014142a3.34 3.34 0 0 1-2.39-0.97581 3.37 3.37 0 0 1 0.00707-4.773 3.34 3.34 0 0 1 2.383-0.98288z',
                  stroke: '#fff',
                }),
                (0, r.createElement)('line', {
                  className: 'l',
                  x1: '6.7669',
                  x2: '6.7669',
                  y1: '7.8533',
                  y2: '1.1216',
                  stroke: '#fff',
                }),
                (0, r.createElement)('path', {
                  className: 'l',
                  d:
                    'm23.235 1.1146 4.4053 3.3729-4.3982 3.38a6.59 6.59 0 0 1-0.89096-3.3517 6.59 6.59 0 0 1 0.88388-3.4012z',
                  stroke: '#fff',
                }),
                (0, r.createElement)('line', {
                  className: 'l',
                  x1: '6.7669',
                  x2: '22.323',
                  y1: '4.4875',
                  y2: '4.4875',
                  stroke: '#fff',
                }),
              ),
            ),
            explicitDismiss: !0,
            onDismiss: m,
            actions: [{ onClick: N, label: 'Give feedback' }],
          });
        }
        return (
          (0, r.useEffect)(
            function() {
              if (c) return;
              if (i() >= 1) return;
              if (new Date().toDateString() === localStorage.getItem(t)) return;
              const e = setTimeout(C, 5e3);
              return (
                n(),
                () => {
                  clearTimeout(e);
                }
              );
            },
            [c],
          ),
          new Date('2024-01-01') > new Date()
            ? (0, r.createElement)(
                r.Fragment,
                null,
                u &&
                  (0, r.createElement)(
                    l.Modal,
                    {
                      title: (0, s.__)('How easy was it to find an extension?', 'woocommerce'),
                      onRequestClose: M,
                      className: 'woocommerce-marketplace__feedback-modal',
                    },
                    (0, r.createElement)(
                      'p',
                      null,
                      (0, s.__)(
                        'Your feedback will help us create a better experience for people like you! Please tell us to what extent you agree or disagree with the statements below.',
                        'woocommerce',
                      ),
                    ),
                    (0, r.createElement)(Wt, {
                      fieldName: 'extension_screen_easy_to_find',
                      title: (0, s.__)('It was easy to find an extension', 'woocommerce'),
                      onValueChange: function(e) {
                        h(!1), g(e);
                      },
                      validationFailed: y,
                    }),
                    (0, r.createElement)(Wt, {
                      fieldName: 'extension_screen_meets_my_needs',
                      title: (0, s.__)(
                        'The Extensions screen’s functionality meets my needs',
                        'woocommerce',
                      ),
                      onValueChange: function(e) {
                        k(!1), v(e);
                      },
                      validationFailed: b,
                    }),
                    (0, r.createElement)(l.TextareaControl, {
                      label: (0, s.__)('Additional thoughts', 'woocommerce'),
                      value: p,
                      onChange: e => _(e),
                    }),
                    (0, r.createElement)(
                      'p',
                      { className: 'woocommerce-marketplace__feedback-modal-buttons' },
                      (0, r.createElement)(l.Button, {
                        variant: 'tertiary',
                        onClick: M,
                        text: (0, s.__)('Cancel', 'woocommerce'),
                      }),
                      (0, r.createElement)(l.Button, {
                        variant: 'primary',
                        onClick: function() {
                          if (0 === w || 0 === E) return 0 === w && h(!0), void (0 === E && k(!0));
                          (0, pe.recordEvent)('ces_feedback', {
                            action: 'marketplace_redesign_2023',
                            score: w,
                            score_second_question: E,
                            score_combined: w + E,
                            thoughts: p,
                          }),
                            d(!1),
                            n(),
                            localStorage.setItem(e, '1');
                        },
                        text: (0, s.__)('Send', 'woocommerce'),
                      }),
                    ),
                  ),
              )
            : (0, r.createElement)(r.Fragment, null)
        );
      }
      function Ht() {
        const { selectedTab: e } = (0, r.useContext)(a),
          t = 'woocommerce-marketplace' + (e ? ' woocommerce-marketplace--' + e : '');
        return (0, r.createElement)(
          'div',
          { className: t },
          (0, r.createElement)(de, null),
          (0, r.createElement)(jt, null),
          (0, r.createElement)(Vt, null),
          (0, r.createElement)(Ft, null),
        );
      }
      function $t() {
        return (0, r.createElement)(n, null, (0, r.createElement)(Ht, null));
      }
    },
  },
]);
