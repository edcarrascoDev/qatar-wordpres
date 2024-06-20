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
    o = window.wp.hooks,
    r = window.wp.i18n,
    c = window.wc.components,
    n = window.wc.tracks,
    i = ({ iframeSelector: e, isActive: o }) => (
      (0, t.useEffect)(() => {
        if (!o) return;
        const t = (({ iframeSelector: e, childSelector: t, className: o }) => {
          const r = document.querySelector(e),
            c = r?.contentDocument || (r?.contentWindow && r?.contentWindow.document);
          if (c) {
            const e = () => r?.classList.add(o),
              n = () => r?.classList.remove(o),
              i = c.querySelector(t);
            return (
              i?.addEventListener('focus', e),
              i?.addEventListener('blur', n),
              () => {
                i?.removeEventListener('focus', e), i?.removeEventListener('blur', n);
              }
            );
          }
          return () => ({});
        })({ iframeSelector: `${e}`, childSelector: '#tinymce', className: 'focus-within' });
        return () => {
          t();
        };
      }, [o, e]),
      {
        style: o
          ? `\n\t\t\t\t${e}.focus-within {\n\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t}\n\t\t\t\t`
          : null,
      }
    ),
    d = ({ editorWrapSelector: e }) => {
      const o = (0, t.useRef)(document.querySelector(e));
      o || console.warn(`Editor Wrap ${e} not found`);
      const [r, c] = (0, t.useState)(
        o.current && o.current.classList.contains('html-active') ? 'html' : 'tmce',
      );
      return (
        (0, t.useEffect)(() => {
          const t = e => {
              e.target && c(e.target.classList.contains('switch-html') ? 'html' : 'tmce');
            },
            o = document.querySelector(`${e} .switch-tmce`);
          o?.addEventListener('click', t);
          const r = document.querySelector(`${e} .switch-html`);
          return (
            r?.addEventListener('click', t),
            () => {
              o?.removeEventListener('click', t), r?.removeEventListener('click', t);
            }
          );
        }, [e]),
        { activeEditor: r, isTmce: 'tmce' === r, isHtml: 'html' === r }
      );
    },
    s = e => document.querySelector(e).value,
    a = e => {
      const t = document.querySelector(e),
        o = t?.contentWindow?.document.querySelector('#tinymce');
      return o?.innerHTML || '';
    },
    u = e => document.querySelector(e)?.value || '',
    l = e => (e ? a('#content_ifr') : u('#wp-content-editor-container > .wp-editor-area')),
    p = e => (e ? a('#excerpt_ifr') : u('#wp-excerpt-editor-container > .wp-editor-area')),
    m = document.createElement('div');
  m.setAttribute('id', 'product-tour-root'),
    (0, t.render)(
      (0, t.createElement)(() => {
        const [e, a] = (0, t.useState)(!1),
          { setIsLoaded: u, hasUpdatedInfo: m } = (() => {
            const { isTmce: e } = d({ editorWrapSelector: '#wp-content-wrap' }),
              { isTmce: o } = d({ editorWrapSelector: '#wp-excerpt-wrap' }),
              [r, c] = (0, t.useState)({}),
              [n, i] = (0, t.useState)(!1),
              a = (0, t.useCallback)(
                () => ({
                  'product-name': s('#title'),
                  'product-description': l(e),
                  'product-data': s('#_regular_price'),
                  'product-short-description': p(o),
                  'product-image': document.querySelector('#set-post-thumbnail img')?.src || '',
                  'product-tags': Array.from(document.querySelectorAll('#product_tag li'))
                    .map(e => e.lastChild.textContent)
                    .join(','),
                  'product-categories': Array.from(
                    document.querySelectorAll('#product_cat-all #product_catchecklist input'),
                  )
                    .map(e => e.checked)
                    .join(','),
                }),
                [e, o],
              ),
              u = (0, t.useCallback)(
                e => {
                  const t = a();
                  return r[e] !== t[e] && '' !== t[e];
                },
                [a, r],
              );
            return (
              (0, t.useEffect)(() => {
                n && c(a());
              }, [c, n, a]),
              { setIsLoaded: i, hasUpdatedInfo: u }
            );
          })(),
          { isTmce: w } = d({ editorWrapSelector: '#wp-content-wrap' }),
          { isTmce: h } = d({ editorWrapSelector: '#wp-excerpt-wrap' }),
          { style: _ } = i({ isActive: e && w, iframeSelector: '#content_ifr' }),
          { style: f } = i({ isActive: e && h, iframeSelector: '#excerpt_ifr' }),
          g = (({
            isExcerptEditorTmceActive: e,
            isContentEditorTmceActive: t,
            closeHandler: c,
            onNextStepHandler: n,
          }) => {
            const i = new URLSearchParams(window.location.search),
              d = [
                {
                  referenceElements: { desktop: '#title' },
                  focusElement: { desktop: '#title' },
                  meta: {
                    name: 'product-name',
                    heading: (0, r.__)('Product name', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Start typing your new product name here. This will be what your customers will see in your store.',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#postdivrich' },
                  focusElement: {
                    iframe: t ? '#content_ifr' : void 0,
                    desktop: t ? '#tinymce' : '#wp-content-editor-container > .wp-editor-area',
                  },
                  meta: {
                    name: 'product-description',
                    heading: (0, r.__)('Add your product description', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Add your full product description here. Describe your product in detail.',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#woocommerce-product-data' },
                  focusElement: { desktop: '#_regular_price' },
                  meta: {
                    name: 'product-data',
                    heading: (0, r.__)('Add your product data', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Use the tabs to switch between sections and insert product details. Start by adding your product price.',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#postexcerpt' },
                  focusElement: {
                    iframe: e ? '#excerpt_ifr' : void 0,
                    desktop: e ? '#tinymce' : '#wp-excerpt-editor-container > .wp-editor-area',
                  },
                  meta: {
                    name: 'product-short-description',
                    heading: (0, r.__)('Add your short product description', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Type a quick summary for your product here. This will appear on the product page right under the product name.',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#postimagediv' },
                  focusElement: { desktop: '#set-post-thumbnail' },
                  meta: {
                    name: 'product-image',
                    heading: (0, r.__)('Add your product image', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Upload an image to your product here. Ideally a JPEG or PNG about 600 px wide or bigger. This image will be shown in your store’s catalog.',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#tagsdiv-product_tag' },
                  focusElement: { desktop: '#new-tag-product_tag' },
                  meta: {
                    name: 'product-tags',
                    heading: (0, r.__)('Add your product tags', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Add your product tags here. Tags are a method of labeling your products to make them easier for customers to find. For example, if you sell clothing, and you have a lot of cat prints, you could make a tag for “cat.”',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#product_catdiv' },
                  meta: {
                    name: 'product-categories',
                    heading: (0, r.__)('Add your product categories', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Add your product categories here. Assign categories to your products to make them easier to browse through and find in your store.',
                        'woocommerce',
                      ),
                    },
                  },
                },
                {
                  referenceElements: { desktop: '#submitdiv' },
                  focusElement: { desktop: '#submitdiv' },
                  meta: {
                    name: 'publish',
                    heading: (0, r.__)('Publish your product 🎉', 'woocommerce'),
                    descriptions: {
                      desktop: (0, r.__)(
                        'Good work! Now you can publish your product to your store by hitting the “Publish” button or keep editing it.',
                        'woocommerce',
                      ),
                    },
                    primaryButton: { text: (0, r.__)('Keep editing', 'woocommerce') },
                  },
                },
              ],
              s = (0, o.applyFilters)(
                'experimental_woocommerce_admin_product_tour_steps',
                d,
                i.get('tutorial_type'),
              );
            if (!Array.isArray(s)) throw new Error('Tour guide steps must be an array.');
            return {
              placement: 'bottom-start',
              options: {
                effects: {
                  spotlight: { interactivity: { enabled: !0, rootElementSelector: '#wpwrap' } },
                  arrowIndicator: !0,
                  autoScroll: { behavior: 'auto', block: 'center' },
                  liveResize: { mutation: !0, resize: !0, rootElementSelector: '#wpwrap' },
                },
                popperModifiers: [
                  {
                    name: 'arrow',
                    options: { padding: ({ popper: e }) => ({ right: e.width - 34 }) },
                  },
                ],
                callbacks: { onNextStep: n },
              },
              steps: s,
              closeHandler: c,
            };
          })({
            isContentEditorTmceActive: w,
            isExcerptEditorTmceActive: h,
            closeHandler: (e, t) => {
              a(!1),
                e.length - 1 === t
                  ? (0, n.recordEvent)('walkthrough_product_completed')
                  : (0, n.recordEvent)('walkthrough_product_dismissed', {
                      step_name: e[t].meta.name,
                    });
            },
            onNextStepHandler: e => {
              const t = g.steps[e - 1].meta.name;
              (0, n.recordEvent)('walkthrough_product_step_completed', {
                step_name: t,
                added_info: m(t) ? 'yes' : 'no',
              });
            },
          });
        return (
          (0, t.useEffect)(() => {
            var e;
            if (
              ((e = e => {
                e.preventDefault(),
                  a(!0),
                  (0, n.recordEvent)('walkthrough_product_enable_button_click');
              }),
              window.document
                .querySelector('.wp-heading-inline + .page-title-action')
                ?.addEventListener('click', e),
              'true' === new URLSearchParams(window.location.search).get('tutorial') &&
                g.steps?.length > 0)
            ) {
              const e = ((e, t, o) => {
                const r = document.querySelector(e);
                let c = r?.getBoundingClientRect().top;
                const i = setInterval(() => {
                  const e = r?.getBoundingClientRect().top;
                  c === e &&
                    (a(!0),
                    (0, n.recordEvent)('walkthrough_product_view', {
                      spotlight: 'yes',
                      product_template: 'physical',
                    }),
                    u(!0),
                    clearInterval(i)),
                    (c = e);
                }, 500);
                return i;
              })(g.steps[0].referenceElements?.desktop || '');
              return () => clearInterval(e);
            }
          }, []),
          (e => {
            const o = (0, t.useRef)(() => {});
            (0, t.useEffect)(
              () => (
                e
                  ? (o.current = (e => {
                      const t = window.document.querySelector('#publish');
                      return (
                        t && t.addEventListener('click', e),
                        function() {
                          t?.removeEventListener('click', e);
                        }
                      );
                    })(() => {
                      (0, n.recordEvent)('walkthrough_product_completed');
                    }))
                  : (o.current(), (o.current = () => {})),
                function() {
                  o.current();
                }
              ),
              [e],
            );
          })(e),
          e
            ? (0, t.createElement)(
                t.Fragment,
                null,
                (0, t.createElement)(
                  'style',
                  null,
                  _,
                  f,
                  '.wp-editor-area:focus {\n\t\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t\t}',
                ),
                (0, t.createElement)(c.TourKit, { config: g }),
              )
            : null
        );
      }, null),
      document.body.appendChild(m),
    ),
    ((window.wc = window.wc || {}).productTour = e);
})();
