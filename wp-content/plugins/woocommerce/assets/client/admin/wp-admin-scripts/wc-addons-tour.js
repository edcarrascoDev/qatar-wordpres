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
    o = window.wc.components,
    r = window.wc.tracks,
    n = window.wp.data,
    a = window.wc.data,
    c = e => {
      const t = (document.getElementById('wpadminbar')?.offsetHeight || 0) + 8;
      e.top < t
        ? window.scrollBy(0, e.top - t)
        : e.bottom > window.innerHeight && window.scrollBy(0, e.bottom - window.innerHeight);
    },
    s = window.wp.i18n,
    m = document.createElement('div');
  m.setAttribute('id', 'wc-addons-tour-root'),
    (0, t.render)(
      (0, t.createElement)(() => {
        const [e, m] = (0, t.useState)(!0),
          { updateOptions: l } = (0, n.useDispatch)(a.OPTIONS_STORE_NAME),
          i = (() => {
            const e = (0, t.createElement)('br');
            return [
              {
                referenceElements: {
                  desktop: '#adminmenu a[href="admin.php?page=wc-admin&path=%2Fextensions"]',
                },
                focusElement: {
                  desktop: '#adminmenu a[href="admin.php?page=wc-admin&path=%2Fextensions"]',
                },
                meta: {
                  name: 'wc-extensions-menu-item',
                  heading: (0, s.__)('Welcome to the WooCommerce Marketplace', 'woocommerce'),
                  descriptions: {
                    desktop: (0, t.createInterpolateElement)(
                      (0, s.__)(
                        "Power up your store by adding extra functionality with extensions or integrate your store with other software and services.<br/><br/>Here you'll find hundreds of trusted solutions for your store — all reviewed and approved by the Woo team.<br/><br/>You can also browse the Woo Marketplace at WooCommerce.com.",
                        'woocommerce',
                      ),
                      { br: e },
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '.woocommerce-marketplace__search' },
                focusElement: { desktop: '.woocommerce-marketplace__search' },
                meta: {
                  name: 'wc-extensions-search',
                  heading: (0, s.__)('Find exactly what you need', 'woocommerce'),
                  descriptions: {
                    desktop: (0, s.__)(
                      'Use the search box to find specific extensions or solutions.',
                      'woocommerce',
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '.woocommerce-marketplace__tab-browse' },
                focusElement: { desktop: '.woocommerce-marketplace__tab-browse' },
                meta: {
                  name: 'wc-addons-categories',
                  heading: (0, s.__)('Browse for new ideas', 'woocommerce'),
                  descriptions: {
                    desktop: (0, t.createInterpolateElement)(
                      (0, s.__)(
                        "Or if you're not sure exactly what you need, you can browse all available extensions by category.",
                        'woocommerce',
                      ),
                      { br: e },
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '.woocommerce-marketplace__discover:first-child' },
                focusElement: { desktop: '.woocommerce-marketplace__discover:first-child' },
                meta: {
                  name: 'wc-addons-featured',
                  heading: (0, s.__)('Learn more about each product', 'woocommerce'),
                  descriptions: {
                    desktop: (0, t.createInterpolateElement)(
                      (0, s.__)(
                        'Scroll down to see all of the relevant extensions and solutions.<br/><br/>Click on any solution to learn more about its features, any installation requirements, and available documentation.',
                        'woocommerce',
                      ),
                      { br: e },
                    ),
                  },
                },
              },
              {
                referenceElements: { desktop: '.woocommerce-marketplace__header-meta' },
                focusElement: { desktop: '.woocommerce-marketplace__header-meta' },
                meta: {
                  name: 'wc-addons-my-subscriptions',
                  heading: (0, s.__)('Manage your purchases', 'woocommerce'),
                  descriptions: {
                    desktop: (0, t.createInterpolateElement)(
                      (0, s.__)(
                        "All of your Woo Marketplace purchases can be found here, or on WooCommerce.com.<br/><br/>Every purchase is backed by our <a1>30-day money-back guarantee</a1>, and includes <a2>email and live chat support</a2>.<br/><br/>That's it! You're now ready to power up your store.",
                        'woocommerce',
                      ),
                      {
                        a1: (0, t.createElement)(
                          'a',
                          {
                            href: 'https://woocommerce.com/refund-policy/',
                            'aria-label': (0, s.__)('Refund policy', 'woocommerce'),
                          },
                          (0, s.__)('30-day money-back guarantee', 'woocommerce'),
                        ),
                        a2: (0, t.createElement)(
                          'a',
                          {
                            href: 'https://woocommerce.com/my-account/create-a-ticket/',
                            'aria-label': (0, s.__)('Contact support', 'woocommerce'),
                          },
                          (0, s.__)('email and live chat support', 'woocommerce'),
                        ),
                        br: e,
                      },
                    ),
                  },
                },
              },
            ];
          })();
        if (
          ((0, t.useEffect)(() => {
            if ('true' === new URLSearchParams(location.search).get('tutorial')) {
              const e = ((e, t, o) => {
                const n = document.querySelector(e);
                let a = n?.getBoundingClientRect().top;
                const c = setInterval(() => {
                  const e = n?.getBoundingClientRect().top;
                  a === e &&
                    ((() => {
                      const e = i[0]?.meta?.name;
                      m(!0), (0, r.recordEvent)('in_app_marketplace_tour_started', { step: e });
                    })(),
                    clearInterval(c)),
                    (a = e);
                }, 500);
                return c;
              })(i[0].referenceElements?.desktop || '');
              return () => clearInterval(e);
            }
          }, []),
          (0, t.useEffect)(() => {
            if (e) {
              function t() {
                const e = document.querySelector('.tour-kit-frame__container');
                e && c(e.getBoundingClientRect());
              }
              const o = setTimeout(t, 500),
                r = ((e, t, o) => {
                  const r = document.querySelector('.woocommerce-marketplace');
                  let n = r?.offsetTop;
                  return setInterval(() => {
                    const e = r?.offsetTop;
                    n !== e && t(), (n = e);
                  }, 150);
                })(0, t);
              return () => {
                clearTimeout(o), clearInterval(r);
              };
            }
          }, [e]),
          !e)
        )
          return null;
        const d = (({ closeHandler: e, onNextStepHandler: t, autoScrollBlock: o, steps: r }) => {
          let n = null,
            a = null;
          const s = 'top-start';
          return {
            placement: s,
            options: {
              effects: {
                spotlight: {
                  interactivity: { enabled: !0, rootElementSelector: '.woocommerce-marketplace' },
                },
                autoScroll: { behavior: 'auto', block: o },
              },
              popperModifiers: [
                { name: 'offset', options: { offset: [20, 20] } },
                {
                  name: 'flip',
                  options: {
                    allowedAutoPlacements: ['right', 'bottom', 'top'],
                    fallbackPlacements: ['bottom-start', 'right'],
                    flipVariations: !1,
                    boundry: 'clippingParents',
                  },
                },
                {
                  name: 'inAppTourPopperModifications',
                  enabled: !0,
                  phase: 'read',
                  fn({ state: e, instance: t }) {
                    if (a !== e.elements.reference) {
                      const o = e.elements.reference.closest('#adminmenu') ? 'right' : s;
                      e.placement !== o && t.setOptions({ placement: o });
                    }
                    const o = e.elements.popper.getBoundingClientRect(),
                      r = e.elements.arrow?.getBoundingClientRect(),
                      m = r?.height || 0;
                    a !== e.elements.reference &&
                      0 !== m &&
                      n !== o.top &&
                      (c(o), (n = o.top), (a = e.elements.reference));
                  },
                },
              ],
              callbacks: { onNextStep: t },
            },
            steps: r,
            closeHandler: e,
          };
        })({
          closeHandler: (e, t) => {
            m(!1), l({ woocommerce_admin_dismissed_in_app_marketplace_tour: 'yes' });
            const o = new URL(window.location.href);
            if (
              (o.searchParams.delete('tutorial'),
              window.history.replaceState(null, '', o),
              i.length - 1 === t)
            )
              (0, r.recordEvent)('in_app_marketplace_tour_completed');
            else {
              const o = e[t]?.meta?.name;
              (0, r.recordEvent)('in_app_marketplace_tour_dismissed', { step: o });
            }
          },
          onNextStepHandler: e => {
            const t = i[e]?.meta?.name || '';
            (0, r.recordEvent)('in_app_marketplace_tour_step_viewed', { step: t });
          },
          autoScrollBlock: 'center',
          steps: i,
        });
        return (0, t.createElement)(o.TourKit, { config: d });
      }, null),
      document.body.appendChild(m),
    ),
    ((window.wc = window.wc || {}).wcAddonsTour = e);
})();
