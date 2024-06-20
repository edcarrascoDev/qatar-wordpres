(() => {
  var e,
    t,
    r,
    a = {
      1195: (e, t, r) => {
        'use strict';
        r.r(t);
        var a = r(1609),
          o = r(5573);
        const n = (0, a.createElement)(
          o.SVG,
          { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
          (0, a.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
          (0, a.createElement)('path', {
            d:
              'M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17 15 15.47 17.61 17l-.69-2.96 2.3-1.99-3.03-.26L15 9l-1.19 2.79-3.03.26z',
          }),
        );
        var i = r(7104),
          l = (r(2247), r(6467), r(6087)),
          c = r(9491);
        const s = window.wp.url,
          d = window.wp.apiFetch;
        var m = r.n(d);
        const u = window.wc.wcSettings;
        var g, p, h, v, b, _, w, E, y, f;
        const S = (0, u.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          k = S.pluginUrl + 'assets/images/',
          I = (S.pluginUrl, S.buildPhase),
          C =
            (null === (g = u.STORE_PAGES.shop) || void 0 === g || g.permalink,
            null === (p = u.STORE_PAGES.checkout) || void 0 === p || p.id,
            null === (h = u.STORE_PAGES.checkout) || void 0 === h || h.permalink,
            null === (v = u.STORE_PAGES.privacy) || void 0 === v || v.permalink,
            null === (b = u.STORE_PAGES.privacy) || void 0 === b || b.title,
            null === (_ = u.STORE_PAGES.terms) || void 0 === _ || _.permalink,
            null === (w = u.STORE_PAGES.terms) || void 0 === w || w.title,
            null === (E = u.STORE_PAGES.cart) || void 0 === E || E.id,
            null === (y = u.STORE_PAGES.cart) || void 0 === y || y.permalink,
            null !== (f = u.STORE_PAGES.myaccount) && void 0 !== f && f.permalink
              ? u.STORE_PAGES.myaccount.permalink
              : (0, u.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, u.getSetting)('localPickupEnabled', !1),
            (0, u.getSetting)('countries', {})),
          x = (0, u.getSetting)('countryData', {}),
          P =
            (Object.fromEntries(
              Object.keys(x)
                .filter(e => !0 === x[e].allowBilling)
                .map(e => [e, C[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(x)
                .filter(e => !0 === x[e].allowBilling)
                .map(e => [e, x[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(x)
                .filter(e => !0 === x[e].allowShipping)
                .map(e => [e, C[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(x)
                .filter(e => !0 === x[e].allowShipping)
                .map(e => [e, x[e].states || []]),
            ),
            Object.fromEntries(Object.keys(x).map(e => [e, x[e].locale || []])),
            {
              address: [
                'first_name',
                'last_name',
                'company',
                'address_1',
                'address_2',
                'city',
                'postcode',
                'country',
                'state',
                'phone',
              ],
              contact: ['email'],
              order: [],
            }),
          N =
            ((0, u.getSetting)('addressFieldsLocations', P).address,
            (0, u.getSetting)('addressFieldsLocations', P).contact,
            (0, u.getSetting)('addressFieldsLocations', P).order,
            (0, u.getSetting)('additionalOrderFields', {}),
            (0, u.getSetting)('additionalContactFields', {}),
            (0, u.getSetting)('additionalAddressFields', {}),
            window.wp.blocks),
          A = () => I > 1,
          R = ({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
            const a = (({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
              const a = S.productCount > 100,
                o = {
                  per_page: a ? 100 : 0,
                  catalog_visibility: 'any',
                  search: t,
                  orderby: 'title',
                  order: 'asc',
                },
                n = [(0, s.addQueryArgs)('/wc/store/v1/products', { ...o, ...r })];
              return (
                a &&
                  e.length &&
                  n.push(
                    (0, s.addQueryArgs)('/wc/store/v1/products', {
                      catalog_visibility: 'any',
                      include: e,
                      per_page: 0,
                    }),
                  ),
                n
              );
            })({ selected: e, search: t, queryArgs: r });
            return Promise.all(a.map(e => m()({ path: e })))
              .then(e => {
                const t = ((e, t) => {
                  const r = new Map();
                  return e.filter(e => {
                    const a = t(e);
                    return !r.has(a) && (r.set(a, e), !0);
                  });
                })(e.flat(), e => e.id);
                return t.map(e => ({ ...e, parent: 0 }));
              })
              .catch(e => {
                throw e;
              });
          },
          L = async e => {
            if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
            try {
              const t = await e.json();
              return { message: t.message, type: t.type || 'api' };
            } catch (e) {
              return { message: e.message, type: 'general' };
            }
          },
          O = (0, c.createHigherOrderComponent)(
            e =>
              class extends l.Component {
                constructor() {
                  super(...arguments),
                    (this.state = {
                      error: null,
                      loading: !1,
                      category:
                        'preview' === this.props.attributes.categoryId
                          ? this.props.attributes.previewCategory
                          : null,
                    }),
                    (this.loadCategory = this.loadCategory.bind(this));
                }
                componentDidMount() {
                  this.loadCategory();
                }
                componentDidUpdate(e) {
                  e.attributes.categoryId !== this.props.attributes.categoryId &&
                    this.loadCategory();
                }
                loadCategory() {
                  const { categoryId: e } = this.props.attributes;
                  'preview' !== e &&
                    (e
                      ? (this.setState({ loading: !0 }),
                        (e => m()({ path: `wc/store/v1/products/categories/${e}` }))(e)
                          .then(e => {
                            this.setState({ category: e, loading: !1, error: null });
                          })
                          .catch(async e => {
                            const t = await L(e);
                            this.setState({ category: null, loading: !1, error: t });
                          }))
                      : this.setState({ category: null, loading: !1, error: null }));
                }
                render() {
                  const { error: t, loading: r, category: o } = this.state;
                  return (0, a.createElement)(e, {
                    ...this.props,
                    error: t,
                    getCategory: this.loadCategory,
                    isLoading: r,
                    category: o,
                  });
                }
              },
            'withCategory',
          ),
          T = window.wp.components;
        var $ = r(7723);
        const F = window.wp.blockEditor;
        var M = r(3884);
        const j = e => {
            const { id: t, name: r, parent: a } = e;
            return {
              id: t,
              name: r,
              parent: a,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          },
          B = e => {
            const { id: t, name: r, parent: a, count: o } = e;
            return {
              id: t,
              name: r,
              parent: a,
              count: o,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          },
          G = 'woocommerce/featured-category',
          H = 'woocommerce/featured-product',
          z = window.wc.wcTypes;
        function D(e) {
          return !!e && (0, z.isNumber)(e.id) && 'string' == typeof e.src;
        }
        function V({ blockName: e, item: t, mediaId: r, mediaSrc: a }) {
          const [o, n] = (0, l.useState)(0),
            [i, c] = (0, l.useState)('');
          return (
            (0, l.useEffect)(() => {
              var a, o;
              n(
                r ||
                  (e === H
                    ? ((o = t) && o.images && o.images.length && o.images[0].id) || 0
                    : (a = t) && D(a.image)
                    ? a.image.id
                    : 0),
              );
            }, [e, t, r]),
            (0, l.useEffect)(() => {
              var r, o;
              c(
                a ||
                  (e === H
                    ? ((o = t) && o.images && o.images.length && o.images[0].src) || ''
                    : (r = t) && D(r.image)
                    ? r.image.src
                    : ''),
              );
            }, [e, t, a]),
            { backgroundImageId: o, backgroundImageSrc: i }
          );
        }
        const U = ({
            backgroundImageId: e,
            backgroundImageSrc: t,
            contentAlign: r,
            cropLabel: o,
            editLabel: n,
            editMode: i,
            isEditingImage: l,
            mediaSrc: c,
            setAttributes: s,
            setIsEditingImage: d,
          }) =>
            (0, a.createElement)(
              F.BlockControls,
              null,
              (0, a.createElement)(F.AlignmentToolbar, {
                value: r,
                onChange: e => {
                  s({ contentAlign: e });
                },
              }),
              (0, a.createElement)(
                T.ToolbarGroup,
                null,
                t &&
                  !l &&
                  (0, a.createElement)(T.ToolbarButton, {
                    onClick: () => d(!0),
                    icon: M.A,
                    label: o,
                  }),
                (0, a.createElement)(F.MediaReplaceFlow, {
                  mediaId: e,
                  mediaURL: c,
                  accept: 'image/*',
                  onSelect: e => {
                    s({ mediaId: e.id, mediaSrc: e.url });
                  },
                  allowedTypes: ['image'],
                }),
                e && c
                  ? (0, a.createElement)(
                      T.ToolbarButton,
                      { onClick: () => s({ mediaId: 0, mediaSrc: '' }) },
                      (0, $.__)('Reset', 'woocommerce'),
                    )
                  : null,
              ),
              (0, a.createElement)(T.ToolbarGroup, {
                controls: [
                  { icon: 'edit', title: n, onClick: () => s({ editMode: !i }), isActive: i },
                ],
              }),
            ),
          W = ({
            align: e,
            backgroundImageId: t,
            backgroundImageSize: r,
            backgroundImageSrc: o,
            containerRef: n,
            isEditingImage: i,
            setAttributes: c,
            setIsEditingImage: s,
          }) => {
            const d = (function(e, t) {
              const [r, a] = (0, l.useState)(),
                o = (0, l.useCallback)(() => {
                  var t;
                  a(null === (t = e.current) || void 0 === t ? void 0 : t.clientWidth);
                }, [e]);
              return (
                (0, l.useEffect)(o, [o, ...t]),
                (0, l.useEffect)(() => {
                  if (!e.current) return;
                  const { defaultView: t } = e.current.ownerDocument;
                  return t
                    ? (t.addEventListener('resize', o),
                      () => {
                        t.removeEventListener('resize', o);
                      })
                    : void 0;
                }, [e, o]),
                r
              );
            })(n, [e]);
            return 'function' == typeof F.__experimentalImageEditingProvider
              ? (0, a.createElement)(
                  F.__experimentalImageEditingProvider,
                  {
                    id: t,
                    url: o,
                    naturalHeight: r.height || 500,
                    naturalWidth: r.width || 500,
                    onSaveImage: ({ id: e, url: t }) => {
                      c({ mediaId: e, mediaSrc: t });
                    },
                    isEditing: i,
                    onFinishEditing: () => s(!1),
                  },
                  (0, a.createElement)(F.__experimentalImageEditor, {
                    url: o,
                    height: r.height || 500,
                    width: r.width || 500,
                  }),
                )
              : (0, a.createElement)(F.__experimentalImageEditor, {
                  id: t,
                  url: o,
                  height: r.height || 500,
                  width: r.width || 500,
                  naturalHeight: r.height,
                  naturalWidth: r.width,
                  onSaveImage: ({ id: e, url: t }) => {
                    c({ mediaId: e, mediaSrc: t });
                  },
                  onFinishEditing: () => s(!1),
                  clientWidth: d,
                });
          },
          q = ({
            alt: e,
            backgroundImageSrc: t,
            contentPanel: r,
            dimRatio: o,
            focalPoint: n,
            hasParallax: i,
            imageFit: l,
            isRepeated: c,
            overlayColor: s,
            overlayGradient: d,
            setAttributes: m,
            setGradient: u,
            showDesc: g,
          }) => {
            const p = 'function' == typeof T.FocalPointPicker,
              h = !c && !i;
            return (0, a.createElement)(
              F.InspectorControls,
              { key: 'inspector' },
              (0, a.createElement)(
                T.PanelBody,
                { title: (0, $.__)('Content', 'woocommerce') },
                (0, a.createElement)(T.ToggleControl, {
                  label: (0, $.__)('Show description', 'woocommerce'),
                  checked: g,
                  onChange: () => m({ showDesc: !g }),
                }),
                r,
              ),
              !!t &&
                (0, a.createElement)(
                  a.Fragment,
                  null,
                  p &&
                    (0, a.createElement)(
                      T.PanelBody,
                      { title: (0, $.__)('Media settings', 'woocommerce') },
                      (0, a.createElement)(T.ToggleControl, {
                        label: (0, $.__)('Fixed background', 'woocommerce'),
                        checked: i,
                        onChange: () => {
                          m({ hasParallax: !i });
                        },
                      }),
                      (0, a.createElement)(T.ToggleControl, {
                        label: (0, $.__)('Repeated background', 'woocommerce'),
                        checked: c,
                        onChange: () => {
                          m({ isRepeated: !c });
                        },
                      }),
                      !c &&
                        (0, a.createElement)(
                          T.__experimentalToggleGroupControl,
                          {
                            help: (0, a.createElement)(
                              a.Fragment,
                              null,
                              (0, a.createElement)(
                                'span',
                                { style: { display: 'block', marginBottom: '1em' } },
                                (0, $.__)(
                                  'Select “Cover” to have the image automatically fit its container.',
                                  'woocommerce',
                                ),
                              ),
                              (0, a.createElement)(
                                'span',
                                null,
                                (0, $.__)(
                                  'This may affect your ability to freely move the focal point of the image.',
                                  'woocommerce',
                                ),
                              ),
                            ),
                            label: (0, $.__)('Image fit', 'woocommerce'),
                            value: l,
                            onChange: e => m({ imageFit: e }),
                          },
                          (0, a.createElement)(T.__experimentalToggleGroupControlOption, {
                            label: (0, $.__)('None', 'woocommerce'),
                            value: 'none',
                          }),
                          (0, a.createElement)(
                            T.__experimentalToggleGroupControlOption,
                            /* translators: "Cover" is a verb that indicates an image covering the entire container. */ {
                              label: (0, $.__)('Cover', 'woocommerce'),
                              value: 'cover',
                            },
                          ),
                        ),
                      (0, a.createElement)(T.FocalPointPicker, {
                        label: (0, $.__)('Focal Point Picker', 'woocommerce'),
                        url: t,
                        value: n,
                        onChange: e => m({ focalPoint: e }),
                      }),
                      h &&
                        (0, a.createElement)(T.TextareaControl, {
                          label: (0, $.__)('Alt text (alternative text)', 'woocommerce'),
                          value: e,
                          onChange: e => {
                            m({ alt: e });
                          },
                          help: (0, a.createElement)(
                            a.Fragment,
                            null,
                            (0, a.createElement)(
                              T.ExternalLink,
                              { href: 'https://www.w3.org/WAI/tutorials/images/decision-tree' },
                              (0, $.__)('Describe the purpose of the image', 'woocommerce'),
                            ),
                          ),
                        }),
                    ),
                  (0, a.createElement)(
                    F.__experimentalPanelColorGradientSettings,
                    {
                      __experimentalHasMultipleOrigins: !0,
                      __experimentalIsRenderedInSidebar: !0,
                      title: (0, $.__)('Overlay', 'woocommerce'),
                      initialOpen: !0,
                      settings: [
                        {
                          colorValue: s,
                          gradientValue: d,
                          onColorChange: e => m({ overlayColor: e }),
                          onGradientChange: e => {
                            u(e), m({ overlayGradient: e });
                          },
                          label: (0, $.__)('Color', 'woocommerce'),
                        },
                      ],
                    },
                    (0, a.createElement)(T.RangeControl, {
                      label: (0, $.__)('Opacity', 'woocommerce'),
                      value: o,
                      onChange: e => m({ dimRatio: e }),
                      min: 0,
                      max: 100,
                      step: 10,
                      required: !0,
                    }),
                  ),
                ),
            );
          };
        var Q = r(3588),
          J = r(9019),
          Y = r.n(J);
        const K = window.wp.escapeHtml,
          X = ({ error: e }) =>
            (0, a.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, a.createElement)(
                        'span',
                        null,
                        (0, $.__)('The following error was returned', 'woocommerce'),
                        (0, a.createElement)('br', null),
                        (0, a.createElement)('code', null, (0, K.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, a.createElement)(
                        'span',
                        null,
                        (0, $.__)('The following error was returned from the API', 'woocommerce'),
                        (0, a.createElement)('br', null),
                        (0, a.createElement)('code', null, (0, K.escapeHTML)(e)),
                      )
                    : e
                  : (0, $.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            );
        r(4974);
        const Z = ({ className: e = '', error: t, isLoading: r = !1, onRetry: o }) =>
          (0, a.createElement)(
            T.Placeholder,
            {
              icon: (0, a.createElement)(i.A, { icon: Q.A }),
              label: (0, $.__)('Sorry, an error occurred', 'woocommerce'),
              className: Y()('wc-block-api-error', e),
            },
            (0, a.createElement)(X, { error: t }),
            o &&
              (0, a.createElement)(
                a.Fragment,
                null,
                r
                  ? (0, a.createElement)(T.Spinner, null)
                  : (0, a.createElement)(
                      T.Button,
                      { variant: 'secondary', onClick: o },
                      (0, $.__)('Retry', 'woocommerce'),
                    ),
              ),
          );
        function ee(e) {
          return e ? `${Math.round(100 * e.x)}% ${Math.round(100 * e.y)}%` : '';
        }
        function te(e) {
          return `wc-block-${e.split('/')[1]}`;
        }
        function re(e, t, r) {
          const a = new Set(t.map(e => e[r]));
          return e.filter(e => !a.has(e[r]));
        }
        const ae = window.wp.htmlEntities,
          oe = {
            clear: (0, $.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, $.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, $.__)('No results for %s', 'woocommerce'),
            search: (0, $.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, $.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, $._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, $.__)('Search results updated.', 'woocommerce'),
          },
          ne = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              a = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const o = ['0'],
              n = (e = {}) => (e.parent ? [...n(a[e.parent]), e.name] : e.name ? [e.name] : []),
              i = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    o.push('' + e.id),
                    { ...e, breadcrumbs: n(a[e.parent]), children: t && t.length ? i(t) : [] }
                  );
                }),
              l = i(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                o.includes(e) || l.push(...i(t || []));
              }),
              l
            );
          },
          ie = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, a.createElement)('strong', { key: t }, e)
                  : (0, a.createElement)(l.Fragment, { key: t }, e),
              );
          },
          le = ({ label: e }) =>
            (0, a.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          ce = e => {
            const { item: t, search: r } = e,
              o = t.breadcrumbs && t.breadcrumbs.length;
            return (0, a.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              o
                ? (0, a.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (n = t.breadcrumbs).length
                      ? n.slice(0, 1).toString()
                      : 2 === n.length
                      ? n.slice(0, 1).toString() + ' › ' + n.slice(-1).toString()
                      : n.slice(0, 1).toString() + ' … ' + n.slice(-1).toString(),
                  )
                : null,
              (0, a.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                ie((0, ae.decodeEntities)(t.name), r),
              ),
            );
            var n;
          },
          se = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: o = '',
            item: n,
            isSelected: i,
            isSingle: c,
            onSelect: s,
            search: d = '',
            selected: m,
            useExpandedPanelId: u,
            ...g
          }) => {
            var p, h;
            const [v, b] = u,
              _ = null != e && void 0 !== n.count && null !== n.count,
              w = !(null === (p = n.breadcrumbs) || void 0 === p || !p.length),
              E = !(null === (h = n.children) || void 0 === h || !h.length),
              y = v === n.id,
              f = Y()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': w,
                'has-children': E,
                'has-count': _,
                'is-expanded': y,
                'is-radio-button': c,
              }),
              S = g.name || `search-list-item-${o}`,
              k = `${S}-${n.id}`,
              I = (0, l.useCallback)(() => {
                b(y ? -1 : Number(n.id));
              }, [y, n.id, b]);
            return E
              ? (0, a.createElement)(
                  'div',
                  {
                    className: f,
                    onClick: I,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? I() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  c
                    ? (0, a.createElement)(
                        a.Fragment,
                        null,
                        (0, a.createElement)('input', {
                          type: 'radio',
                          id: k,
                          name: S,
                          value: n.value,
                          onChange: s(n),
                          onClick: e => e.stopPropagation(),
                          checked: i,
                          className: 'woocommerce-search-list__item-input',
                          ...g,
                        }),
                        (0, a.createElement)(ce, { item: n, search: d }),
                        _ ? (0, a.createElement)(le, { label: e || n.count }) : null,
                      )
                    : (0, a.createElement)(
                        a.Fragment,
                        null,
                        (0, a.createElement)(T.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: i,
                          ...(!i && n.children.some(e => m.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: ie((0, ae.decodeEntities)(n.name), d),
                          onChange: () => {
                            i
                              ? s(re(m, n.children, 'id'))()
                              : s(
                                  (function(e, t, r) {
                                    const a = re(t, e, 'id');
                                    return [...e, ...a];
                                  })(m, n.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        _ ? (0, a.createElement)(le, { label: e || n.count }) : null,
                      ),
                )
              : (0, a.createElement)(
                  'label',
                  { htmlFor: k, className: f },
                  c
                    ? (0, a.createElement)(
                        a.Fragment,
                        null,
                        (0, a.createElement)('input', {
                          ...g,
                          type: 'radio',
                          id: k,
                          name: S,
                          value: n.value,
                          onChange: s(n),
                          checked: i,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, a.createElement)(ce, { item: n, search: d }),
                      )
                    : (0, a.createElement)(T.CheckboxControl, {
                        ...g,
                        id: k,
                        name: S,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, ae.decodeEntities)(n.value),
                        label: ie((0, ae.decodeEntities)(n.name), d),
                        onChange: s(n),
                        checked: i,
                      }),
                  _ ? (0, a.createElement)(le, { label: e || n.count }) : null,
                );
          },
          de = se;
        var me = r(2478),
          ue = r(2370);
        r(6636);
        const ge = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: o,
            screenReaderLabel: n,
            className: s = '',
          }) => {
            const [d, m] = (0, l.useState)(!1),
              u = (0, c.useInstanceId)(ge);
            if (((n = n || t), !t)) return null;
            t = (0, ae.decodeEntities)(t);
            const g = Y()('woocommerce-tag', s, { 'has-remove': !!o }),
              p = `woocommerce-tag__label-${u}`,
              h = (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)('span', { className: 'screen-reader-text' }, n),
                (0, a.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, a.createElement)(
              'span',
              { className: g },
              r
                ? (0, a.createElement)(
                    T.Button,
                    { className: 'woocommerce-tag__text', id: p, onClick: () => m(!0) },
                    h,
                  )
                : (0, a.createElement)('span', { className: 'woocommerce-tag__text', id: p }, h),
              r && d && (0, a.createElement)(T.Popover, { onClose: () => m(!1) }, r),
              o &&
                (0, a.createElement)(
                  T.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: o(e),
                    label: (0, $.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, $.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': p,
                  },
                  (0, a.createElement)(i.A, {
                    icon: ue.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          pe = ge;
        r(8137);
        const he = e => (0, a.createElement)(de, { ...e }),
          ve = e => {
            const {
                list: t,
                selected: r,
                renderItem: o,
                depth: n = 0,
                onSelect: i,
                instanceId: c,
                isSingle: s,
                search: d,
                useExpandedPanelId: m,
              } = e,
              [u] = m;
            return t
              ? (0, a.createElement)(
                  l.Fragment,
                  null,
                  t.map(t => {
                    var g, p;
                    const h =
                        null !== (g = t.children) && void 0 !== g && g.length && !s
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      v =
                        (null === (p = t.children) || void 0 === p ? void 0 : p.length) &&
                        u === t.id;
                    return (0, a.createElement)(
                      l.Fragment,
                      { key: t.id },
                      (0, a.createElement)(
                        'li',
                        null,
                        o({
                          item: t,
                          isSelected: h,
                          onSelect: i,
                          isSingle: s,
                          selected: r,
                          search: d,
                          depth: n,
                          useExpandedPanelId: m,
                          controlId: c,
                        }),
                      ),
                      v ? (0, a.createElement)(ve, { ...e, list: t.children, depth: n + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          be = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: o,
            onChange: n,
            onRemove: i,
          }) => {
            if (e || t || !r) return null;
            const l = r.length;
            return (0, a.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, a.createElement)('strong', null, o.selected(l)),
                l > 0
                  ? (0, a.createElement)(
                      T.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => n([]),
                        'aria-label': o.clear,
                      },
                      (0, $.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              l > 0
                ? (0, a.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, a.createElement)(
                        'li',
                        { key: t },
                        (0, a.createElement)(pe, { label: e.name, id: e.id, remove: i }),
                      ),
                    ),
                  )
                : null,
            );
          },
          _e = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: o,
            useExpandedPanelId: n,
            ...l
          }) => {
            const { messages: c, renderItem: s, selected: d, isSingle: m } = l,
              u = s || he;
            return 0 === e.length
              ? (0, a.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, a.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, a.createElement)(i.A, { icon: me.A, role: 'img' }),
                  ),
                  (0, a.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, $.sprintf)(c.noResults, t) : c.noItems,
                  ),
                )
              : (0, a.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, a.createElement)(ve, {
                    useExpandedPanelId: n,
                    list: e,
                    selected: d,
                    renderItem: u,
                    onSelect: r,
                    instanceId: o,
                    isSingle: m,
                    search: t,
                  }),
                );
          },
          we = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: o,
                isLoading: n,
                isSingle: i,
                list: s,
                messages: d = oe,
                onChange: m,
                onSearch: u,
                selected: g,
                type: p = 'text',
                debouncedSpeak: h,
              } = e,
              [v, b] = (0, l.useState)(''),
              _ = (0, l.useState)(-1),
              w = (0, c.useInstanceId)(we),
              E = (0, l.useMemo)(() => ({ ...oe, ...d }), [d]),
              y = (0, l.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? ne(e) : e;
                    const a = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      o = e.map(e => !!a.test(e.name) && e).filter(Boolean);
                    return r ? ne(o, e) : o;
                  })(s, v, o),
                [s, v, o],
              );
            (0, l.useEffect)(() => {
              h && h(E.updated);
            }, [h, E]),
              (0, l.useEffect)(() => {
                'function' == typeof u && u(v);
              }, [v, u]);
            const f = (0, l.useCallback)(
                e => () => {
                  i && m([]);
                  const t = g.findIndex(({ id: t }) => t === e);
                  m([...g.slice(0, t), ...g.slice(t + 1)]);
                },
                [i, g, m],
              ),
              S = (0, l.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? m(e)
                    : -1 === g.findIndex(({ id: t }) => t === e.id)
                    ? m(i ? [e] : [...g, e])
                    : f(e.id)();
                },
                [i, f, m, g],
              ),
              k = (0, l.useCallback)(
                e => {
                  const [t] = g.filter(t => !e.find(e => t.id === e.id));
                  f(t.id)();
                },
                [f, g],
              );
            return (0, a.createElement)(
              'div',
              {
                className: Y()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': n,
                  'is-token': 'token' === p,
                }),
              },
              'text' === p && (0, a.createElement)(be, { ...e, onRemove: f, messages: E }),
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === p
                  ? (0, a.createElement)(T.TextControl, {
                      label: E.search,
                      type: 'search',
                      value: v,
                      onChange: e => b(e),
                    })
                  : (0, a.createElement)(T.FormTokenField, {
                      disabled: n,
                      label: E.search,
                      onChange: k,
                      onInputChange: e => b(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: n
                        ? [(0, $.__)('Loading…', 'woocommerce')]
                        : g.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              n
                ? (0, a.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, a.createElement)(T.Spinner, null),
                  )
                : (0, a.createElement)(_e, {
                    ...e,
                    search: v,
                    filteredList: y,
                    messages: E,
                    onSelect: S,
                    instanceId: w,
                    useExpandedPanelId: _,
                  }),
            );
          },
          Ee =
            ((0, T.withSpokenMessages)(we),
            e => ({ selected: t, ...r }) => {
              const [o, n] = (0, l.useState)(!0),
                [i, c] = (0, l.useState)(null),
                [d, u] = (0, l.useState)([]),
                g = async e => {
                  const t = await L(e);
                  c(t), n(!1);
                },
                p = (0, l.useRef)(t);
              return (
                (0, l.useEffect)(() => {
                  var e;
                  ((e = { selected: p.current }),
                  m()({
                    path: (0, s.addQueryArgs)('wc/store/v1/products/categories', {
                      per_page: 0,
                      ...e,
                    }),
                  }))
                    .then(e => {
                      u(e), n(!1);
                    })
                    .catch(g);
                }, [p]),
                (0, a.createElement)(e, {
                  ...r,
                  selected: t,
                  error: i,
                  categories: d,
                  isLoading: o,
                })
              );
            });
        r(6876);
        const ye = Ee(
          ({
            categories: e = [],
            error: t = null,
            isLoading: r = !1,
            onChange: o,
            onOperatorChange: n,
            operator: i = 'any',
            selected: l,
            isCompact: c = !1,
            isSingle: s = !1,
            showReviewCount: d,
          }) => {
            const m = {
              clear: (0, $.__)('Clear all product categories', 'woocommerce'),
              list: (0, $.__)('Product Categories', 'woocommerce'),
              noItems: (0, $.__)("Your store doesn't have any product categories.", 'woocommerce'),
              search: (0, $.__)('Search for product categories', 'woocommerce'),
              selected: e =>
                (0, $.sprintf) /* translators: %d is the count of selected categories. */(
                  /* translators: %d is the count of selected categories. */
                  (0, $._n)('%d category selected', '%d categories selected', e, 'woocommerce'),
                  e,
                ),
              updated: (0, $.__)('Category search results updated.', 'woocommerce'),
            };
            if (t) return (0, a.createElement)(X, { error: t });
            const u = e.map(B);
            return (0, a.createElement)(
              a.Fragment,
              null,
              (0, a.createElement)(we, {
                className: 'woocommerce-product-categories',
                list: u,
                isLoading: r,
                selected: u.filter(({ id: e }) => l.includes(Number(e))),
                onChange: o,
                renderItem: e => {
                  var t, r, o, n, i, l, c, s;
                  const { item: m, search: u, depth: g = 0 } = e,
                    p = m.breadcrumbs.length ? `${m.breadcrumbs.join(', ')}, ${m.name}` : m.name,
                    h = d
                      ? (0,
                        $.sprintf) /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */(
                          /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
                          (0, $._n)(
                            '%1$s, has %2$d review',
                            '%1$s, has %2$d reviews',
                            (null === (t = m.details) || void 0 === t ? void 0 : t.review_count) ||
                              0,
                            'woocommerce',
                          ),
                          p,
                          (null === (r = m.details) || void 0 === r ? void 0 : r.review_count) || 0,
                        )
                      : (0,
                        $.sprintf) /* translators: %1$s is the item name, %2$d is the count of products for the item. */(
                          /* translators: %1$s is the item name, %2$d is the count of products for the item. */
                          (0, $._n)(
                            '%1$s, has %2$d product',
                            '%1$s, has %2$d products',
                            (null === (o = m.details) || void 0 === o ? void 0 : o.count) || 0,
                            'woocommerce',
                          ),
                          p,
                          (null === (n = m.details) || void 0 === n ? void 0 : n.count) || 0,
                        ),
                    v = d
                      ? (0, $.sprintf) /* translators: %d is the count of reviews. */(
                          /* translators: %d is the count of reviews. */
                          (0, $._n)(
                            '%d review',
                            '%d reviews',
                            (null === (i = m.details) || void 0 === i ? void 0 : i.review_count) ||
                              0,
                            'woocommerce',
                          ),
                          (null === (l = m.details) || void 0 === l ? void 0 : l.review_count) || 0,
                        )
                      : (0, $.sprintf) /* translators: %d is the count of products. */(
                          /* translators: %d is the count of products. */
                          (0, $._n)(
                            '%d product',
                            '%d products',
                            (null === (c = m.details) || void 0 === c ? void 0 : c.count) || 0,
                            'woocommerce',
                          ),
                          (null === (s = m.details) || void 0 === s ? void 0 : s.count) || 0,
                        );
                  return (0, a.createElement)(se, {
                    className: Y()('woocommerce-product-categories__item', 'has-count', {
                      'is-searching': u.length > 0,
                      'is-skip-level': 0 === g && 0 !== m.parent,
                    }),
                    ...e,
                    countLabel: v,
                    'aria-label': h,
                  });
                },
                messages: m,
                isCompact: c,
                isHierarchical: !0,
                isSingle: s,
              }),
              !!n &&
                (0, a.createElement)(
                  'div',
                  { hidden: l.length < 2 },
                  (0, a.createElement)(T.SelectControl, {
                    className: 'woocommerce-product-categories__operator',
                    label: (0, $.__)('Display products matching', 'woocommerce'),
                    help: (0, $.__)(
                      'Pick at least two categories to use this setting.',
                      'woocommerce',
                    ),
                    value: i,
                    onChange: n,
                    options: [
                      { label: (0, $.__)('Any selected categories', 'woocommerce'), value: 'any' },
                      { label: (0, $.__)('All selected categories', 'woocommerce'), value: 'all' },
                    ],
                  }),
                ),
            );
          },
        );
        var fe = r(4717);
        var Se = r(2294),
          ke = r(923),
          Ie = r.n(ke);
        const Ce = (0, c.createHigherOrderComponent)(e => {
            class t extends l.Component {
              constructor(...e) {
                super(...e),
                  (0, Se.A)(this, 'state', { error: null, loading: !1, variations: {} }),
                  (0, Se.A)(this, 'prevSelectedItem', void 0),
                  (0, Se.A)(this, 'loadVariations', () => {
                    const { products: e } = this.props,
                      { loading: t, variations: r } = this.state;
                    if (t) return;
                    const a = this.getExpandedProduct();
                    if (!a || r[a]) return;
                    const o = e.find(e => e.id === a);
                    var n;
                    null != o && o.variations && 0 !== o.variations.length
                      ? (this.setState({ loading: !0 }),
                        ((n = a),
                        m()({
                          path: (0, s.addQueryArgs)('wc/store/v1/products', {
                            per_page: 0,
                            type: 'variation',
                            parent: n,
                          }),
                        }))
                          .then(e => {
                            const t = e.map(e => ({ ...e, parent: a }));
                            this.setState({
                              variations: { ...this.state.variations, [a]: t },
                              loading: !1,
                              error: null,
                            });
                          })
                          .catch(async e => {
                            const t = await L(e);
                            this.setState({
                              variations: { ...this.state.variations, [a]: null },
                              loading: !1,
                              error: t,
                            });
                          }))
                      : this.setState({
                          variations: { ...this.state.variations, [a]: null },
                          loading: !1,
                          error: null,
                        });
                  });
              }
              componentDidMount() {
                const { selected: e, showVariations: t } = this.props;
                e && t && this.loadVariations();
              }
              componentDidUpdate(e) {
                const { isLoading: t, selected: r, showVariations: a } = this.props;
                a && (!Ie()(e.selected, r) || (e.isLoading && !t)) && this.loadVariations();
              }
              isProductId(e) {
                const { products: t } = this.props;
                return t.some(t => t.id === e);
              }
              findParentProduct(e) {
                var t;
                const { products: r } = this.props;
                return null ===
                  (t = r.filter(
                    t => t.variations && t.variations.find(({ id: t }) => t === e),
                  )[0]) || void 0 === t
                  ? void 0
                  : t.id;
              }
              getExpandedProduct() {
                const { isLoading: e, selected: t, showVariations: r } = this.props;
                if (!r) return null;
                let a = t && t.length ? t[0] : null;
                return (
                  a
                    ? (this.prevSelectedItem = a)
                    : !this.prevSelectedItem ||
                      e ||
                      this.isProductId(this.prevSelectedItem) ||
                      (a = this.prevSelectedItem),
                  !e && a ? (this.isProductId(a) ? a : this.findParentProduct(a)) : null
                );
              }
              render() {
                const { error: t, isLoading: r } = this.props,
                  { error: o, loading: n, variations: i } = this.state;
                return (0, a.createElement)(e, {
                  ...this.props,
                  error: o || t,
                  expandedProduct: this.getExpandedProduct(),
                  isLoading: r,
                  variations: i,
                  variationsLoading: n,
                });
              }
            }
            return t;
          }, 'withProductVariations'),
          xe = ({
            className: e,
            item: t,
            isSelected: r,
            isLoading: o,
            onSelect: n,
            disabled: i,
            ...l
          }) =>
            (0, a.createElement)(
              a.Fragment,
              null,
              (0, a.createElement)(se, {
                ...l,
                key: t.id,
                className: e,
                isSelected: r,
                item: t,
                onSelect: n,
                disabled: i,
              }),
              r &&
                o &&
                (0, a.createElement)(
                  'div',
                  {
                    key: 'loading',
                    className: Y()(
                      'woocommerce-search-list__item',
                      'woocommerce-product-attributes__item',
                      'depth-1',
                      'is-loading',
                      'is-not-active',
                    ),
                  },
                  (0, a.createElement)(T.Spinner, null),
                ),
            );
        r(7369);
        const Pe = {
            list: (0, $.__)('Products', 'woocommerce'),
            noItems: (0, $.__)("Your store doesn't have any products.", 'woocommerce'),
            search: (0, $.__)('Search for a product to display', 'woocommerce'),
            updated: (0, $.__)('Product search results updated.', 'woocommerce'),
          },
          Ne = (e => t => {
            let { selected: r } = t;
            r = void 0 === r ? null : r;
            const o = null === r;
            return Array.isArray(r)
              ? (0, a.createElement)(e, { ...t })
              : (0, a.createElement)(e, { ...t, selected: o ? [] : [r] });
          })(
            ((Ae = Ce(
              (0, c.withInstanceId)(e => {
                const {
                  expandedProduct: t = null,
                  error: r,
                  instanceId: o,
                  isCompact: n = !1,
                  isLoading: i,
                  onChange: l,
                  onSearch: c,
                  products: s,
                  renderItem: d,
                  selected: m = [],
                  showVariations: u = !1,
                  variations: g,
                  variationsLoading: p,
                } = e;
                if (r) return (0, a.createElement)(X, { error: r });
                const h = [...s, ...(g && t && g[t] ? g[t] : [])].map(j);
                return (0, a.createElement)(we, {
                  className: 'woocommerce-products',
                  list: h,
                  isCompact: n,
                  isLoading: i,
                  isSingle: !0,
                  selected: h.filter(({ id: e }) => m.includes(Number(e))),
                  onChange: l,
                  renderItem:
                    d ||
                    (u
                      ? e => {
                          var t, r, n, l;
                          const {
                              item: c,
                              search: s,
                              depth: d = 0,
                              isSelected: m,
                              onSelect: u,
                            } = e,
                            g =
                              null !== (t = c.details) &&
                              void 0 !== t &&
                              t.variations &&
                              Array.isArray(c.details.variations)
                                ? c.details.variations.length
                                : 0,
                            h = Y()(
                              'woocommerce-search-product__item',
                              'woocommerce-search-list__item',
                              `depth-${d}`,
                              'has-count',
                              {
                                'is-searching': s.length > 0,
                                'is-skip-level': 0 === d && 0 !== c.parent,
                                'is-variable': g > 0,
                              },
                            );
                          if (!c.breadcrumbs.length) {
                            var v, b, _, w, E;
                            const t =
                              (null === (v = c.details) || void 0 === v ? void 0 : v.variations) &&
                              c.details.variations.length > 0;
                            return (0, a.createElement)(xe, {
                              ...e,
                              className: Y()(h, { 'is-selected': m }),
                              isSelected: m,
                              item: c,
                              onSelect: () => () => {
                                u(c)();
                              },
                              isLoading: i || p,
                              countLabel: t
                                ? (0,
                                  $.sprintf) /* translators: %1$d is the number of variations of a product product. */(
                                    /* translators: %1$d is the number of variations of a product product. */
                                    (0, $.__)('%1$d variations', 'woocommerce'),
                                    null === (b = c.details) || void 0 === b
                                      ? void 0
                                      : b.variations.length,
                                  )
                                : null,
                              name: `products-${o}`,
                              'aria-label': t
                                ? (0,
                                  $.sprintf) /* translators: %1$s is the product name, %2$d is the number of variations of that product. */(
                                    /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
                                    (0, $._n)(
                                      '%1$s, has %2$d variation',
                                      '%1$s, has %2$d variations',
                                      null === (_ = c.details) ||
                                        void 0 === _ ||
                                        null === (w = _.variations) ||
                                        void 0 === w
                                        ? void 0
                                        : w.length,
                                      'woocommerce',
                                    ),
                                    c.name,
                                    null === (E = c.details) || void 0 === E
                                      ? void 0
                                      : E.variations.length,
                                  )
                                : void 0,
                            });
                          }
                          const y = (0, z.isEmpty)(
                            null === (r = c.details) || void 0 === r ? void 0 : r.variation,
                          )
                            ? e
                            : {
                                ...e,
                                item: {
                                  ...e.item,
                                  name:
                                    null === (n = c.details) || void 0 === n ? void 0 : n.variation,
                                },
                                'aria-label': `${c.breadcrumbs[0]}: ${
                                  null === (l = c.details) || void 0 === l ? void 0 : l.variation
                                }`,
                              };
                          return (0, a.createElement)(se, {
                            ...y,
                            className: h,
                            name: `variations-${o}`,
                          });
                        }
                      : () => null),
                  onSearch: c,
                  messages: Pe,
                  isHierarchical: !0,
                });
              }),
            )),
            ({ selected: e, ...t }) => {
              const [r, o] = (0, l.useState)(!0),
                [n, i] = (0, l.useState)(null),
                [c, s] = (0, l.useState)([]),
                d = S.productCount > 100,
                m = async e => {
                  const t = await L(e);
                  i(t), o(!1);
                },
                u = (0, l.useRef)(e);
              (0, l.useEffect)(() => {
                R({ selected: u.current })
                  .then(e => {
                    s(e), o(!1);
                  })
                  .catch(m);
              }, [u]);
              const g = (0, fe.YQ)(t => {
                  R({ selected: e, search: t })
                    .then(e => {
                      s(e), o(!1);
                    })
                    .catch(m);
                }, 400),
                p = (0, l.useCallback)(
                  e => {
                    o(!0), g(e);
                  },
                  [o, g],
                );
              return (0, a.createElement)(Ae, {
                ...t,
                selected: e,
                error: n,
                products: c,
                isLoading: r,
                onSearch: d ? p : null,
              });
            }),
          );
        var Ae,
          Re = r(1194);
        const Le = window.wp.styleEngine;
        function Oe(e = {}) {
          const t = {};
          return (
            (0, Le.getCSSRules)(e, { selector: '' }).forEach(e => {
              t[e.key] = e.value;
            }),
            t
          );
        }
        function Te(e, t) {
          return e && t ? `has-${(0, Re.c)(t)}-${e}` : '';
        }
        const $e = e => {
            const t = (e => {
                const t = (0, z.isObject)(e) ? e : { style: {} };
                let r = t.style;
                return (
                  (0, z.isString)(r) && (r = JSON.parse(r) || {}),
                  (0, z.isObject)(r) || (r = {}),
                  { ...t, style: r }
                );
              })(e),
              r = (function(e) {
                var t, r, a, o, n, i, l;
                const { backgroundColor: c, textColor: s, gradient: d, style: m } = e,
                  u = Te('background-color', c),
                  g = Te('color', s),
                  p = (function(e) {
                    if (e) return `has-${e}-gradient-background`;
                  })(d),
                  h =
                    p ||
                    (null == m || null === (t = m.color) || void 0 === t ? void 0 : t.gradient);
                return {
                  className: Y()(g, p, {
                    [u]: !h && !!u,
                    'has-text-color':
                      s || (null == m || null === (r = m.color) || void 0 === r ? void 0 : r.text),
                    'has-background':
                      c ||
                      (null == m || null === (a = m.color) || void 0 === a
                        ? void 0
                        : a.background) ||
                      d ||
                      (null == m || null === (o = m.color) || void 0 === o ? void 0 : o.gradient),
                    'has-link-color': (0, z.isObject)(
                      null == m || null === (n = m.elements) || void 0 === n ? void 0 : n.link,
                    )
                      ? null == m ||
                        null === (i = m.elements) ||
                        void 0 === i ||
                        null === (l = i.link) ||
                        void 0 === l
                        ? void 0
                        : l.color
                      : void 0,
                  }),
                  style: Oe({ color: (null == m ? void 0 : m.color) || {} }),
                };
              })(t),
              a = (function(e) {
                var t;
                const r = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
                return {
                  className: (function(e) {
                    var t;
                    const { borderColor: r, style: a } = e,
                      o = r ? Te('border-color', r) : '';
                    return Y()({
                      'has-border-color':
                        !!r || !(null == a || null === (t = a.border) || void 0 === t || !t.color),
                      [o]: !!o,
                    });
                  })(e),
                  style: Oe({ border: r }),
                };
              })(t),
              o = (function(e) {
                var t;
                return {
                  className: void 0,
                  style: Oe({
                    spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
                  }),
                };
              })(t),
              n = (e => {
                const t = (0, z.isObject)(e.style.typography) ? e.style.typography : {},
                  r = (0, z.isString)(t.fontFamily) ? t.fontFamily : '';
                return {
                  className: e.fontFamily ? `has-${e.fontFamily}-font-family` : r,
                  style: {
                    fontSize: e.fontSize
                      ? `var(--wp--preset--font-size--${e.fontSize})`
                      : t.fontSize,
                    fontStyle: t.fontStyle,
                    fontWeight: t.fontWeight,
                    letterSpacing: t.letterSpacing,
                    lineHeight: t.lineHeight,
                    textDecoration: t.textDecoration,
                    textTransform: t.textTransform,
                  },
                };
              })(t);
            return {
              className: Y()(n.className, r.className, a.className, o.className),
              style: { ...n.style, ...r.style, ...a.style, ...o.style },
            };
          },
          Fe = ({ itemId: e, linkText: t, permalink: r }) => {
            const o = Y()('wp-block-button__link', 'is-style-fill');
            return 'preview' === e
              ? (0, a.createElement)(
                  'div',
                  { className: 'wp-block-button aligncenter', style: { width: '100%' } },
                  (0, a.createElement)(F.RichText.Content, {
                    tagName: 'a',
                    className: o,
                    href: r,
                    title: t,
                    style: { backgroundColor: 'vivid-green-cyan', borderRadius: '5px' },
                    value: t,
                    target: r,
                  }),
                )
              : (0, a.createElement)(F.InnerBlocks, {
                  template: [
                    [
                      'core/buttons',
                      { layout: { type: 'flex', justifyContent: 'center' } },
                      [['core/button', { text: (0, $.__)('Shop now', 'woocommerce'), url: r }]],
                    ],
                  ],
                  templateLock: 'all',
                });
          },
          Me = ({ className: e = '', onResize: t, ...r }) => {
            const [o, n] = (0, l.useState)(!1),
              i = Y()(e, { 'is-resizing': o }),
              c = (0, fe.dh)(
                (e, r, a, i) => {
                  o || n(!0), null == t || t(e, r, a, i);
                },
                50,
                { leading: !0 },
              );
            return (0, a.createElement)(T.ResizableBox, {
              className: i,
              enable: { bottom: !0 },
              onResize: c,
              onResizeStop: (...e) => {
                null == t || t(...e), n(!1);
              },
              ...r,
            });
          },
          je = window.wp.data,
          Be = { icon: n, label: (0, $.__)('Featured Category', 'woocommerce') },
          Ge = {
            ...Be,
            cropLabel: (0, $.__)('Edit category image', 'woocommerce'),
            editLabel: (0, $.__)('Edit selected category', 'woocommerce'),
          },
          He = {
            ...Be,
            emptyMessage: (0, $.__)('No product category is selected.', 'woocommerce'),
            noSelectionButtonLabel: (0, $.__)('Select a category', 'woocommerce'),
          },
          ze = {
            ...Be,
            description: (0, $.__)(
              'Visually highlight a product category and encourage prompt action.',
              'woocommerce',
            ),
            editLabel: (0, $.__)('Showing Featured Product block preview.', 'woocommerce'),
          },
          De = (0, c.compose)([
            O,
            T.withSpokenMessages,
            e => t => {
              var r;
              const [o, n] = (0, l.useState)(!1),
                { attributes: i, category: c, clientId: s, product: d } = t,
                m = c || d,
                { editMode: u } = i,
                g = (null == m ? void 0 : m.link) || (null == m ? void 0 : m.permalink),
                p = (0, je.useSelect)(e => e('core/block-editor').getBlock(s)),
                h =
                  null == p || null === (r = p.innerBlocks[0]) || void 0 === r
                    ? void 0
                    : r.innerBlocks[0],
                v = (null == h ? void 0 : h.clientId) || '',
                b = (0, l.useMemo)(() => (null == h ? void 0 : h.attributes) || {}, [h]),
                { url: _ } = b,
                { updateBlockAttributes: w } = (0, je.useDispatch)('core/block-editor');
              return (
                (0, l.useEffect)(() => {
                  o && v && !u && g && _ && g !== _ && (w(v, { url: g }), n(!1));
                }, [v, o, u, g, w, _]),
                (0, a.createElement)(e, { ...t, triggerUrlUpdate: () => n(!0) })
              );
            },
            e => t => {
              const [r, o] = (0, l.useState)(!1),
                { isSelected: n } = t;
              return (
                (0, l.useEffect)(() => {
                  o(!1);
                }, [n]),
                (0, a.createElement)(e, { ...t, useEditingImage: [r, o] })
              );
            },
            (({ description: e, editLabel: t, icon: r, label: o }) => n => i => {
              const {
                  attributes: l,
                  debouncedSpeak: c,
                  name: s,
                  setAttributes: d,
                  triggerUrlUpdate: m = () => {},
                } = i,
                u = te(s);
              return l.editMode
                ? (0, a.createElement)(
                    T.Placeholder,
                    { icon: (0, a.createElement)(T.Icon, { icon: r }), label: o, className: u },
                    e,
                    (0, a.createElement)(
                      'div',
                      { className: `${u}__selection` },
                      s === G &&
                        (0, a.createElement)(ye, {
                          selected: l.categoryId ? [l.categoryId] : [],
                          onChange: (e = []) => {
                            const t = e[0] ? e[0].id : 0;
                            d({ categoryId: t, mediaId: 0, mediaSrc: '' }), m();
                          },
                          isSingle: !0,
                        }),
                      s === H &&
                        (0, a.createElement)(Ne, {
                          selected: l.productId ? [l.productId] : [],
                          showVariations: !0,
                          onChange: (e = []) => {
                            const t = e[0] ? e[0].id : 0;
                            d({ productId: t, mediaId: 0, mediaSrc: '' }), m();
                          },
                        }),
                      (0, a.createElement)(
                        T.Button,
                        {
                          variant: 'primary',
                          onClick: () => {
                            d({ editMode: !1 }), c(t);
                          },
                        },
                        (0, $.__)('Done', 'woocommerce'),
                      ),
                    ),
                  )
                : (0, a.createElement)(n, { ...i });
            })(ze),
            (({ emptyMessage: e, icon: t, label: r, noSelectionButtonLabel: o }) => n => i => {
              const [c] = i.useEditingImage,
                {
                  attributes: s,
                  category: d,
                  isLoading: m,
                  isSelected: u,
                  name: g,
                  product: p,
                  setAttributes: h,
                } = i,
                { mediaId: v, mediaSrc: b } = s,
                _ = d || p,
                [w, E] = (0, l.useState)({}),
                { backgroundImageSrc: y } = V({ item: _, mediaId: v, mediaSrc: b, blockName: g }),
                f = te(g),
                S = (0, l.useCallback)(
                  (e, t, r) => {
                    h({ minHeight: parseInt(r.style.height, 10) });
                  },
                  [h],
                ),
                k = $e(s);
              return c
                ? (0, a.createElement)(n, { ...i, backgroundImageSize: w })
                : (0, a.createElement)(
                    a.Fragment,
                    null,
                    (0, a.createElement)(n, { ...i, backgroundImageSize: w }),
                    _
                      ? (() => {
                          var e, t;
                          const {
                              contentAlign: r,
                              dimRatio: o,
                              focalPoint: n,
                              hasParallax: i,
                              isRepeated: l,
                              imageFit: c,
                              minHeight: g,
                              overlayColor: h,
                              overlayGradient: v,
                              showDesc: b,
                              showPrice: w,
                              style: I,
                              textColor: C,
                            } = s,
                            x = Y()(
                              f,
                              {
                                'is-selected':
                                  u && 'preview' !== s.categoryId && 'preview' !== s.productId,
                                'is-loading': !_ && m,
                                'is-not-found': !_ && !m,
                                'has-background-dim': 0 !== o,
                                'is-repeated': l,
                              },
                              0 === (P = o) || 50 === P
                                ? null
                                : 'has-background-dim-' + 10 * Math.round(P / 10),
                              'center' !== r && `has-${r}-content`,
                              k.className,
                            );
                          var P;
                          const N = {
                              borderRadius:
                                null == I || null === (e = I.border) || void 0 === e
                                  ? void 0
                                  : e.radius,
                              color: C
                                ? `var(--wp--preset--color--${C})`
                                : null == I || null === (t = I.color) || void 0 === t
                                ? void 0
                                : t.text,
                              boxSizing: 'border-box',
                              minHeight: g,
                              ...k.style,
                            },
                            A = !l && !i,
                            R = (function({
                              focalPoint: e,
                              imageFit: t,
                              isImgElement: r,
                              isRepeated: a,
                              url: o,
                            }) {
                              let n = {};
                              var i;
                              return (
                                (n = r
                                  ? {
                                      ...n,
                                      ...((i = e), i ? { objectPosition: ee(i) } : {}),
                                      objectFit: t,
                                    }
                                  : {
                                      ...n,
                                      ...(o && { backgroundImage: `url(${o})` }),
                                      backgroundPosition: ee(e),
                                      ...(!a && {
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover' === t ? t : 'auto',
                                      }),
                                    }),
                                n
                              );
                            })({
                              focalPoint: n,
                              imageFit: c,
                              isImgElement: A,
                              isRepeated: l,
                              url: y,
                            }),
                            L = { background: v, backgroundColor: h };
                          return (0, a.createElement)(
                            a.Fragment,
                            null,
                            (0, a.createElement)(Me, {
                              enable: { bottom: !0 },
                              onResize: S,
                              showHandle: u,
                              style: { minHeight: g },
                            }),
                            (0, a.createElement)(
                              'div',
                              { className: x, style: N },
                              (0, a.createElement)(
                                'div',
                                { className: `${f}__wrapper` },
                                (0, a.createElement)('div', {
                                  className: 'background-dim__overlay',
                                  style: L,
                                }),
                                y &&
                                  (A
                                    ? (0, a.createElement)('img', {
                                        alt: _.name,
                                        className: `${f}__background-image`,
                                        src: y,
                                        style: R,
                                        onLoad: e => {
                                          var t, r;
                                          E({
                                            height:
                                              null === (t = e.currentTarget) || void 0 === t
                                                ? void 0
                                                : t.naturalHeight,
                                            width:
                                              null === (r = e.currentTarget) || void 0 === r
                                                ? void 0
                                                : r.naturalWidth,
                                          });
                                        },
                                      })
                                    : (0, a.createElement)('div', {
                                        className: Y()(`${f}__background-image`, {
                                          'has-parallax': i,
                                        }),
                                        style: R,
                                      })),
                                (0, a.createElement)('h2', {
                                  className: `${f}__title`,
                                  dangerouslySetInnerHTML: { __html: _.name },
                                }),
                                !(0, z.isEmpty)(null == p ? void 0 : p.variation) &&
                                  (0, a.createElement)('h3', {
                                    className: `${f}__variation`,
                                    dangerouslySetInnerHTML: { __html: p.variation },
                                  }),
                                b &&
                                  (0, a.createElement)('div', {
                                    className: `${f}__description`,
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        (null == d ? void 0 : d.description) ||
                                        (null == p ? void 0 : p.short_description),
                                    },
                                  }),
                                w &&
                                  (0, a.createElement)('div', {
                                    className: `${f}__price`,
                                    dangerouslySetInnerHTML: { __html: p.price_html },
                                  }),
                                (0, a.createElement)(
                                  'div',
                                  { className: `${f}__link` },
                                  (() => {
                                    const { categoryId: e, linkText: t, productId: r } = s;
                                    return (0, a.createElement)(Fe, {
                                      itemId: e || r,
                                      linkText: t,
                                      permalink: (d || p).permalink,
                                    });
                                  })(),
                                ),
                              ),
                            ),
                          );
                        })()
                      : (0, a.createElement)(
                          T.Placeholder,
                          {
                            className: f,
                            icon: (0, a.createElement)(T.Icon, { icon: t }),
                            label: r,
                          },
                          m
                            ? (0, a.createElement)(T.Spinner, null)
                            : (0, a.createElement)(
                                a.Fragment,
                                null,
                                (0, a.createElement)('p', null, e),
                                (0, a.createElement)('div', {
                                  style: { flexBasis: '100%', height: '0' },
                                }),
                                (0, a.createElement)(
                                  'button',
                                  {
                                    type: 'button',
                                    className: 'components-button is-secondary',
                                    onClick: () => h({ editMode: !0 }),
                                  },
                                  o,
                                ),
                              ),
                        ),
                  );
            })(He),
            e => t => {
              const { error: r, isLoading: o, name: n } = t,
                i = te(n),
                l = n === G ? t.getCategory : t.getProduct;
              return r
                ? (0, a.createElement)(Z, {
                    className: `${i}-error`,
                    error: r,
                    isLoading: o,
                    onRetry: l,
                  })
                : (0, a.createElement)(e, { ...t });
            },
            e => t => {
              const [r, o] = t.useEditingImage,
                n = (0, l.useRef)(null),
                { attributes: i, backgroundImageSize: c, name: s, setAttributes: d } = t,
                { mediaId: m, mediaSrc: u } = i,
                g = s === H ? t.product : t.category,
                { backgroundImageId: p, backgroundImageSrc: h } = V({
                  item: g,
                  mediaId: m,
                  mediaSrc: u,
                  blockName: s,
                });
              return r
                ? (0, a.createElement)(
                    'div',
                    { ref: n },
                    (0, a.createElement)(W, {
                      align: i.align,
                      backgroundImageId: p,
                      backgroundImageSize: c,
                      backgroundImageSrc: h,
                      containerRef: n,
                      isEditingImage: r,
                      setAttributes: d,
                      setIsEditingImage: o,
                    }),
                  )
                : (0, a.createElement)(e, { ...t });
            },
            e => t => {
              const { attributes: r, name: o, setAttributes: n } = t,
                {
                  alt: i,
                  dimRatio: l,
                  focalPoint: c,
                  hasParallax: s,
                  isRepeated: d,
                  imageFit: m,
                  mediaId: u,
                  mediaSrc: g,
                  overlayColor: p,
                  overlayGradient: h,
                  showDesc: v,
                  showPrice: b,
                } = r,
                _ = o === H ? t.product : t.category,
                { setGradient: w } = (0, F.__experimentalUseGradient)({
                  gradientAttribute: 'overlayGradient',
                  customGradientAttribute: 'overlayGradient',
                }),
                { backgroundImageSrc: E } = V({ item: _, mediaId: u, mediaSrc: g, blockName: o }),
                y =
                  o === H
                    ? (0, a.createElement)(T.ToggleControl, {
                        label: (0, $.__)('Show price', 'woocommerce'),
                        checked: b,
                        onChange: () => n({ showPrice: !b }),
                      })
                    : void 0;
              return (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)(q, {
                  alt: i,
                  backgroundImageSrc: E,
                  contentPanel: y,
                  dimRatio: l,
                  focalPoint: c,
                  hasParallax: s,
                  isRepeated: d,
                  imageFit: m,
                  overlayColor: p,
                  overlayGradient: h,
                  setAttributes: n,
                  setGradient: w,
                  showDesc: v,
                }),
                (0, a.createElement)(e, { ...t }),
              );
            },
            (({ cropLabel: e, editLabel: t }) => r => o => {
              const [n, i] = o.useEditingImage,
                { attributes: l, category: c, name: s, product: d, setAttributes: m } = o,
                { contentAlign: u, editMode: g, mediaId: p, mediaSrc: h } = l,
                v = c || d,
                { backgroundImageId: b, backgroundImageSrc: _ } = V({
                  item: v,
                  mediaId: p,
                  mediaSrc: h,
                  blockName: s,
                });
              return (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)(U, {
                  backgroundImageId: b,
                  backgroundImageSrc: _,
                  contentAlign: u,
                  cropLabel: e,
                  editLabel: t,
                  editMode: g,
                  isEditingImage: n,
                  mediaSrc: h,
                  setAttributes: m,
                  setIsEditingImage: i,
                }),
                (0, a.createElement)(r, { ...o }),
              );
            })(Ge),
          ])(() => (0, a.createElement)(a.Fragment, null)),
          Ve = JSON.parse(
            '{"name":"woocommerce/featured-category","version":"1.0.0","title":"Featured Category","category":"woocommerce","keywords":["WooCommerce"],"description":"Visually highlight a product category and encourage prompt action.","supports":{"align":["wide","full"],"html":false,"color":{"background":true,"text":true},"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true},"__experimentalSkipSerialization":true},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalSkipSerialization":true}},"attributes":{"alt":{"type":"string","default":""},"contentAlign":{"type":"string","default":"center"},"dimRatio":{"type":"number","default":50},"editMode":{"type":"boolean","default":true},"focalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"imageFit":{"type":"string","default":"none"},"hasParallax":{"type":"boolean","default":false},"isRepeated":{"type":"boolean","default":false},"mediaId":{"type":"number","default":0},"mediaSrc":{"type":"string","default":""},"minHeight":{"type":"number","default":500},"linkText":{"default":"Shop now","type":"string"},"categoryId":{"type":"number"},"overlayColor":{"type":"string","default":"#000000"},"overlayGradient":{"type":"string"},"previewCategory":{"type":"object","default":null},"showDesc":{"type":"boolean","default":true}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        function Ue(e) {
          return function(t) {
            const r = (0, F.useBlockProps)(),
              { color: o, ...n } = r.style;
            return (0, a.createElement)(
              'div',
              { ...r, style: n },
              (0, a.createElement)(e, { ...t }),
            );
          };
        }
        !(function(e, t, r, o) {
          var n, i, l, c, s, d, m, g, p, h, v;
          const b = {
              attributes: {
                ...r.attributes,
                minHeight: { type: 'number', default: (0, u.getSetting)('defaultHeight', 500) },
              },
              supports: {
                ...r.supports,
                color: {
                  background:
                    null === (n = r.supports) ||
                    void 0 === n ||
                    null === (i = n.color) ||
                    void 0 === i
                      ? void 0
                      : i.background,
                  text:
                    null === (l = r.supports) ||
                    void 0 === l ||
                    null === (c = l.color) ||
                    void 0 === c
                      ? void 0
                      : c.text,
                },
                spacing: {
                  padding:
                    null === (s = r.supports) ||
                    void 0 === s ||
                    null === (d = s.spacing) ||
                    void 0 === d
                      ? void 0
                      : d.padding,
                  ...(A() && {
                    __experimentalDefaultControls: {
                      padding:
                        null === (m = r.supports) ||
                        void 0 === m ||
                        null === (g = m.spacing) ||
                        void 0 === g
                          ? void 0
                          : g.__experimentalDefaultControls,
                    },
                    __experimentalSkipSerialization:
                      null === (p = r.supports) ||
                      void 0 === p ||
                      null === (h = p.spacing) ||
                      void 0 === h
                        ? void 0
                        : h.__experimentalSkipSerialization,
                  }),
                },
                ...(A() && {
                  __experimentalBorder:
                    null == r || null === (v = r.supports) || void 0 === v
                      ? void 0
                      : v.__experimentalBorder,
                }),
              },
            },
            _ = {
              attributes: {
                alt: '',
                contentAlign: 'center',
                dimRatio: 50,
                editMode: !1,
                hasParallax: !1,
                isRepeated: !1,
                height: (0, u.getSetting)('defaultHeight', 500),
                mediaSrc: '',
                overlayColor: '#000000',
                showDesc: !0,
              },
            };
          (0, N.registerBlockType)(r, {
            ...b,
            example: { ..._, ...t },
            edit: Ue(e),
            save: () => (0, a.createElement)(F.InnerBlocks.Content, null),
            ...o,
          });
        })(
          De,
          {
            attributes: {
              categoryId: 'preview',
              previewCategory: {
                id: 1,
                name: (0, $.__)('Clothing', 'woocommerce'),
                slug: 'clothing',
                parent: 0,
                count: 10,
                description: `<p>${(0, $.__)(
                  'Branded t-shirts, jumpers, pants and more!',
                  'woocommerce',
                )}</p>\n`,
                image: {
                  id: 1,
                  date_created: '2019-07-15T17:05:04',
                  date_created_gmt: '2019-07-15T17:05:04',
                  date_modified: '2019-07-15T17:05:04',
                  date_modified_gmt: '2019-07-15T17:05:04',
                  src: k + 'previews/collection.jpg',
                  name: '',
                  alt: '',
                },
                permalink: '#',
              },
              editMode: !1,
            },
          },
          Ve,
          {
            icon: {
              src: (0, a.createElement)(i.A, {
                icon: n,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
          },
        );
      },
      6467: () => {},
      2247: () => {},
      4974: () => {},
      6876: () => {},
      7369: () => {},
      8137: () => {},
      6636: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      923: e => {
        'use strict';
        e.exports = window.wp.isShallowEqual;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
    },
    o = {};
  function n(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return a[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = a),
    (e = []),
    (n.O = (t, r, a, o) => {
      if (!r) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, a, o] = e[d], l = !0, c = 0; c < r.length; c++)
            (!1 & o || i >= o) && Object.keys(n.O).every(e => n.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((l = !1), o < i && (i = o));
          if (l) {
            e.splice(d--, 1);
            var s = a();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [r, a, o];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, a) {
      if ((1 & a && (e = this(e)), 8 & a)) return e;
      if ('object' == typeof e && e) {
        if (4 & a && e.__esModule) return e;
        if (16 & a && 'function' == typeof e.then) return e;
      }
      var o = Object.create(null);
      n.r(o);
      var i = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var l = 2 & a && e; 'object' == typeof l && !~t.indexOf(l); l = r(l))
        Object.getOwnPropertyNames(l).forEach(t => (i[t] = () => e[t]));
      return (i.default = () => e), n.d(o, i), o;
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
    }),
    (n.j = 9918),
    (() => {
      var e = { 9918: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var a,
            o,
            [i, l, c] = r,
            s = 0;
          if (i.some(t => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (c) var d = c(n);
          }
          for (t && t(r); s < i.length; s++) (o = i[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = n.O(void 0, [94], () => n(1195));
  (i = n.O(i)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['featured-category'] = i);
})();
