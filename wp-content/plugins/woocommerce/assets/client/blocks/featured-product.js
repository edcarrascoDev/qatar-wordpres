(() => {
  var e,
    t,
    r,
    a = {
      3583: (e, t, r) => {
        'use strict';
        r.r(t);
        var a = r(1609),
          o = r(7104),
          n = r(846),
          i = (r(82), r(2256), r(2294)),
          l = r(6087),
          c = r(9491);
        const s = window.wp.url,
          d = window.wp.apiFetch;
        var m = r.n(d);
        const u = window.wc.wcSettings;
        var p, g, h, v, _, b, w, E, f, y;
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
            (null === (p = u.STORE_PAGES.shop) || void 0 === p || p.permalink,
            null === (g = u.STORE_PAGES.checkout) || void 0 === g || g.id,
            null === (h = u.STORE_PAGES.checkout) || void 0 === h || h.permalink,
            null === (v = u.STORE_PAGES.privacy) || void 0 === v || v.permalink,
            null === (_ = u.STORE_PAGES.privacy) || void 0 === _ || _.title,
            null === (b = u.STORE_PAGES.terms) || void 0 === b || b.permalink,
            null === (w = u.STORE_PAGES.terms) || void 0 === w || w.title,
            null === (E = u.STORE_PAGES.cart) || void 0 === E || E.id,
            null === (f = u.STORE_PAGES.cart) || void 0 === f || f.permalink,
            null !== (y = u.STORE_PAGES.myaccount) && void 0 !== y && y.permalink
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
          O = async e => {
            if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
            try {
              const t = await e.json();
              return { message: t.message, type: t.type || 'api' };
            } catch (e) {
              return { message: e.message, type: 'general' };
            }
          },
          L = (0, c.createHigherOrderComponent)(
            e =>
              class extends l.Component {
                constructor(...e) {
                  super(...e),
                    (0, i.A)(this, 'state', {
                      error: null,
                      loading: !1,
                      product:
                        'preview' === this.props.attributes.productId
                          ? this.props.attributes.previewProduct
                          : null,
                    }),
                    (0, i.A)(this, 'loadProduct', () => {
                      const { productId: e } = this.props.attributes;
                      'preview' !== e &&
                        (e
                          ? (this.setState({ loading: !0 }),
                            (e => m()({ path: `/wc/store/v1/products/${e}` }))(e)
                              .then(e => {
                                this.setState({ product: e, loading: !1, error: null });
                              })
                              .catch(async e => {
                                const t = await O(e);
                                this.setState({ product: null, loading: !1, error: t });
                              }))
                          : this.setState({ product: null, loading: !1, error: null }));
                    });
                }
                componentDidMount() {
                  this.loadProduct();
                }
                componentDidUpdate(e) {
                  e.attributes.productId !== this.props.attributes.productId && this.loadProduct();
                }
                render() {
                  const { error: t, loading: r, product: o } = this.state;
                  return (0, a.createElement)(e, {
                    ...this.props,
                    error: t,
                    getProduct: this.loadProduct,
                    isLoading: r,
                    product: o,
                  });
                }
              },
            'withProduct',
          ),
          $ = window.wp.components;
        var F = r(7723);
        const T = window.wp.blockEditor;
        var j = r(3884);
        const M = e => {
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
          D = window.wc.wcTypes;
        function z(e) {
          return !!e && (0, D.isNumber)(e.id) && 'string' == typeof e.src;
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
                    : (a = t) && z(a.image)
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
                    : (r = t) && z(r.image)
                    ? r.image.src
                    : ''),
              );
            }, [e, t, a]),
            { backgroundImageId: o, backgroundImageSrc: i }
          );
        }
        const W = ({
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
              T.BlockControls,
              null,
              (0, a.createElement)(T.AlignmentToolbar, {
                value: r,
                onChange: e => {
                  s({ contentAlign: e });
                },
              }),
              (0, a.createElement)(
                $.ToolbarGroup,
                null,
                t &&
                  !l &&
                  (0, a.createElement)($.ToolbarButton, {
                    onClick: () => d(!0),
                    icon: j.A,
                    label: o,
                  }),
                (0, a.createElement)(T.MediaReplaceFlow, {
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
                      $.ToolbarButton,
                      { onClick: () => s({ mediaId: 0, mediaSrc: '' }) },
                      (0, F.__)('Reset', 'woocommerce'),
                    )
                  : null,
              ),
              (0, a.createElement)($.ToolbarGroup, {
                controls: [
                  { icon: 'edit', title: n, onClick: () => s({ editMode: !i }), isActive: i },
                ],
              }),
            ),
          U = ({
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
            return 'function' == typeof T.__experimentalImageEditingProvider
              ? (0, a.createElement)(
                  T.__experimentalImageEditingProvider,
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
                  (0, a.createElement)(T.__experimentalImageEditor, {
                    url: o,
                    height: r.height || 500,
                    width: r.width || 500,
                  }),
                )
              : (0, a.createElement)(T.__experimentalImageEditor, {
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
            showDesc: p,
          }) => {
            const g = 'function' == typeof $.FocalPointPicker,
              h = !c && !i;
            return (0, a.createElement)(
              T.InspectorControls,
              { key: 'inspector' },
              (0, a.createElement)(
                $.PanelBody,
                { title: (0, F.__)('Content', 'woocommerce') },
                (0, a.createElement)($.ToggleControl, {
                  label: (0, F.__)('Show description', 'woocommerce'),
                  checked: p,
                  onChange: () => m({ showDesc: !p }),
                }),
                r,
              ),
              !!t &&
                (0, a.createElement)(
                  a.Fragment,
                  null,
                  g &&
                    (0, a.createElement)(
                      $.PanelBody,
                      { title: (0, F.__)('Media settings', 'woocommerce') },
                      (0, a.createElement)($.ToggleControl, {
                        label: (0, F.__)('Fixed background', 'woocommerce'),
                        checked: i,
                        onChange: () => {
                          m({ hasParallax: !i });
                        },
                      }),
                      (0, a.createElement)($.ToggleControl, {
                        label: (0, F.__)('Repeated background', 'woocommerce'),
                        checked: c,
                        onChange: () => {
                          m({ isRepeated: !c });
                        },
                      }),
                      !c &&
                        (0, a.createElement)(
                          $.__experimentalToggleGroupControl,
                          {
                            help: (0, a.createElement)(
                              a.Fragment,
                              null,
                              (0, a.createElement)(
                                'span',
                                { style: { display: 'block', marginBottom: '1em' } },
                                (0, F.__)(
                                  'Select “Cover” to have the image automatically fit its container.',
                                  'woocommerce',
                                ),
                              ),
                              (0, a.createElement)(
                                'span',
                                null,
                                (0, F.__)(
                                  'This may affect your ability to freely move the focal point of the image.',
                                  'woocommerce',
                                ),
                              ),
                            ),
                            label: (0, F.__)('Image fit', 'woocommerce'),
                            value: l,
                            onChange: e => m({ imageFit: e }),
                          },
                          (0, a.createElement)($.__experimentalToggleGroupControlOption, {
                            label: (0, F.__)('None', 'woocommerce'),
                            value: 'none',
                          }),
                          (0, a.createElement)(
                            $.__experimentalToggleGroupControlOption,
                            /* translators: "Cover" is a verb that indicates an image covering the entire container. */ {
                              label: (0, F.__)('Cover', 'woocommerce'),
                              value: 'cover',
                            },
                          ),
                        ),
                      (0, a.createElement)($.FocalPointPicker, {
                        label: (0, F.__)('Focal Point Picker', 'woocommerce'),
                        url: t,
                        value: n,
                        onChange: e => m({ focalPoint: e }),
                      }),
                      h &&
                        (0, a.createElement)($.TextareaControl, {
                          label: (0, F.__)('Alt text (alternative text)', 'woocommerce'),
                          value: e,
                          onChange: e => {
                            m({ alt: e });
                          },
                          help: (0, a.createElement)(
                            a.Fragment,
                            null,
                            (0, a.createElement)(
                              $.ExternalLink,
                              { href: 'https://www.w3.org/WAI/tutorials/images/decision-tree' },
                              (0, F.__)('Describe the purpose of the image', 'woocommerce'),
                            ),
                          ),
                        }),
                    ),
                  (0, a.createElement)(
                    T.__experimentalPanelColorGradientSettings,
                    {
                      __experimentalHasMultipleOrigins: !0,
                      __experimentalIsRenderedInSidebar: !0,
                      title: (0, F.__)('Overlay', 'woocommerce'),
                      initialOpen: !0,
                      settings: [
                        {
                          colorValue: s,
                          gradientValue: d,
                          onColorChange: e => m({ overlayColor: e }),
                          onGradientChange: e => {
                            u(e), m({ overlayGradient: e });
                          },
                          label: (0, F.__)('Color', 'woocommerce'),
                        },
                      ],
                    },
                    (0, a.createElement)($.RangeControl, {
                      label: (0, F.__)('Opacity', 'woocommerce'),
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
                        (0, F.__)('The following error was returned', 'woocommerce'),
                        (0, a.createElement)('br', null),
                        (0, a.createElement)('code', null, (0, K.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, a.createElement)(
                        'span',
                        null,
                        (0, F.__)('The following error was returned from the API', 'woocommerce'),
                        (0, a.createElement)('br', null),
                        (0, a.createElement)('code', null, (0, K.escapeHTML)(e)),
                      )
                    : e
                  : (0, F.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            );
        r(4974);
        const Z = ({ className: e = '', error: t, isLoading: r = !1, onRetry: n }) =>
          (0, a.createElement)(
            $.Placeholder,
            {
              icon: (0, a.createElement)(o.A, { icon: Q.A }),
              label: (0, F.__)('Sorry, an error occurred', 'woocommerce'),
              className: Y()('wc-block-api-error', e),
            },
            (0, a.createElement)(X, { error: t }),
            n &&
              (0, a.createElement)(
                a.Fragment,
                null,
                r
                  ? (0, a.createElement)($.Spinner, null)
                  : (0, a.createElement)(
                      $.Button,
                      { variant: 'secondary', onClick: n },
                      (0, F.__)('Retry', 'woocommerce'),
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
            clear: (0, F.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, F.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, F.__)('No results for %s', 'woocommerce'),
            search: (0, F.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, F.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, F._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, F.__)('Search results updated.', 'woocommerce'),
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
            ...p
          }) => {
            var g, h;
            const [v, _] = u,
              b = null != e && void 0 !== n.count && null !== n.count,
              w = !(null === (g = n.breadcrumbs) || void 0 === g || !g.length),
              E = !(null === (h = n.children) || void 0 === h || !h.length),
              f = v === n.id,
              y = Y()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': w,
                'has-children': E,
                'has-count': b,
                'is-expanded': f,
                'is-radio-button': c,
              }),
              S = p.name || `search-list-item-${o}`,
              k = `${S}-${n.id}`,
              I = (0, l.useCallback)(() => {
                _(f ? -1 : Number(n.id));
              }, [f, n.id, _]);
            return E
              ? (0, a.createElement)(
                  'div',
                  {
                    className: y,
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
                          ...p,
                        }),
                        (0, a.createElement)(ce, { item: n, search: d }),
                        b ? (0, a.createElement)(le, { label: e || n.count }) : null,
                      )
                    : (0, a.createElement)(
                        a.Fragment,
                        null,
                        (0, a.createElement)($.CheckboxControl, {
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
                        b ? (0, a.createElement)(le, { label: e || n.count }) : null,
                      ),
                )
              : (0, a.createElement)(
                  'label',
                  { htmlFor: k, className: y },
                  c
                    ? (0, a.createElement)(
                        a.Fragment,
                        null,
                        (0, a.createElement)('input', {
                          ...p,
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
                    : (0, a.createElement)($.CheckboxControl, {
                        ...p,
                        id: k,
                        name: S,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, ae.decodeEntities)(n.value),
                        label: ie((0, ae.decodeEntities)(n.name), d),
                        onChange: s(n),
                        checked: i,
                      }),
                  b ? (0, a.createElement)(le, { label: e || n.count }) : null,
                );
          },
          de = se;
        var me = r(2478),
          ue = r(2370);
        r(6636);
        const pe = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: n,
            screenReaderLabel: i,
            className: s = '',
          }) => {
            const [d, m] = (0, l.useState)(!1),
              u = (0, c.useInstanceId)(pe);
            if (((i = i || t), !t)) return null;
            t = (0, ae.decodeEntities)(t);
            const p = Y()('woocommerce-tag', s, { 'has-remove': !!n }),
              g = `woocommerce-tag__label-${u}`,
              h = (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)('span', { className: 'screen-reader-text' }, i),
                (0, a.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, a.createElement)(
              'span',
              { className: p },
              r
                ? (0, a.createElement)(
                    $.Button,
                    { className: 'woocommerce-tag__text', id: g, onClick: () => m(!0) },
                    h,
                  )
                : (0, a.createElement)('span', { className: 'woocommerce-tag__text', id: g }, h),
              r && d && (0, a.createElement)($.Popover, { onClose: () => m(!1) }, r),
              n &&
                (0, a.createElement)(
                  $.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: n(e),
                    label: (0, F.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, F.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': g,
                  },
                  (0, a.createElement)(o.A, {
                    icon: ue.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          ge = pe;
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
                    var p, g;
                    const h =
                        null !== (p = t.children) && void 0 !== p && p.length && !s
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      v =
                        (null === (g = t.children) || void 0 === g ? void 0 : g.length) &&
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
          _e = ({
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
                      $.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => n([]),
                        'aria-label': o.clear,
                      },
                      (0, F.__)('Clear all', 'woocommerce'),
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
                        (0, a.createElement)(ge, { label: e.name, id: e.id, remove: i }),
                      ),
                    ),
                  )
                : null,
            );
          },
          be = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: n,
            useExpandedPanelId: i,
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
                    (0, a.createElement)(o.A, { icon: me.A, role: 'img' }),
                  ),
                  (0, a.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, F.sprintf)(c.noResults, t) : c.noItems,
                  ),
                )
              : (0, a.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, a.createElement)(ve, {
                    useExpandedPanelId: i,
                    list: e,
                    selected: d,
                    renderItem: u,
                    onSelect: r,
                    instanceId: n,
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
                selected: p,
                type: g = 'text',
                debouncedSpeak: h,
              } = e,
              [v, _] = (0, l.useState)(''),
              b = (0, l.useState)(-1),
              w = (0, c.useInstanceId)(we),
              E = (0, l.useMemo)(() => ({ ...oe, ...d }), [d]),
              f = (0, l.useMemo)(
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
            const y = (0, l.useCallback)(
                e => () => {
                  i && m([]);
                  const t = p.findIndex(({ id: t }) => t === e);
                  m([...p.slice(0, t), ...p.slice(t + 1)]);
                },
                [i, p, m],
              ),
              S = (0, l.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? m(e)
                    : -1 === p.findIndex(({ id: t }) => t === e.id)
                    ? m(i ? [e] : [...p, e])
                    : y(e.id)();
                },
                [i, y, m, p],
              ),
              k = (0, l.useCallback)(
                e => {
                  const [t] = p.filter(t => !e.find(e => t.id === e.id));
                  y(t.id)();
                },
                [y, p],
              );
            return (0, a.createElement)(
              'div',
              {
                className: Y()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': n,
                  'is-token': 'token' === g,
                }),
              },
              'text' === g && (0, a.createElement)(_e, { ...e, onRemove: y, messages: E }),
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === g
                  ? (0, a.createElement)($.TextControl, {
                      label: E.search,
                      type: 'search',
                      value: v,
                      onChange: e => _(e),
                    })
                  : (0, a.createElement)($.FormTokenField, {
                      disabled: n,
                      label: E.search,
                      onChange: k,
                      onInputChange: e => _(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: n
                        ? [(0, F.__)('Loading…', 'woocommerce')]
                        : p.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              n
                ? (0, a.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, a.createElement)($.Spinner, null),
                  )
                : (0, a.createElement)(be, {
                    ...e,
                    search: v,
                    filteredList: f,
                    messages: E,
                    onSelect: S,
                    instanceId: w,
                    useExpandedPanelId: b,
                  }),
            );
          },
          Ee =
            ((0, $.withSpokenMessages)(we),
            e => ({ selected: t, ...r }) => {
              const [o, n] = (0, l.useState)(!0),
                [i, c] = (0, l.useState)(null),
                [d, u] = (0, l.useState)([]),
                p = async e => {
                  const t = await O(e);
                  c(t), n(!1);
                },
                g = (0, l.useRef)(t);
              return (
                (0, l.useEffect)(() => {
                  var e;
                  ((e = { selected: g.current }),
                  m()({
                    path: (0, s.addQueryArgs)('wc/store/v1/products/categories', {
                      per_page: 0,
                      ...e,
                    }),
                  }))
                    .then(e => {
                      u(e), n(!1);
                    })
                    .catch(p);
                }, [g]),
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
        const fe = Ee(
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
              clear: (0, F.__)('Clear all product categories', 'woocommerce'),
              list: (0, F.__)('Product Categories', 'woocommerce'),
              noItems: (0, F.__)("Your store doesn't have any product categories.", 'woocommerce'),
              search: (0, F.__)('Search for product categories', 'woocommerce'),
              selected: e =>
                (0, F.sprintf) /* translators: %d is the count of selected categories. */(
                  /* translators: %d is the count of selected categories. */
                  (0, F._n)('%d category selected', '%d categories selected', e, 'woocommerce'),
                  e,
                ),
              updated: (0, F.__)('Category search results updated.', 'woocommerce'),
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
                  const { item: m, search: u, depth: p = 0 } = e,
                    g = m.breadcrumbs.length ? `${m.breadcrumbs.join(', ')}, ${m.name}` : m.name,
                    h = d
                      ? (0,
                        F.sprintf) /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */(
                          /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
                          (0, F._n)(
                            '%1$s, has %2$d review',
                            '%1$s, has %2$d reviews',
                            (null === (t = m.details) || void 0 === t ? void 0 : t.review_count) ||
                              0,
                            'woocommerce',
                          ),
                          g,
                          (null === (r = m.details) || void 0 === r ? void 0 : r.review_count) || 0,
                        )
                      : (0,
                        F.sprintf) /* translators: %1$s is the item name, %2$d is the count of products for the item. */(
                          /* translators: %1$s is the item name, %2$d is the count of products for the item. */
                          (0, F._n)(
                            '%1$s, has %2$d product',
                            '%1$s, has %2$d products',
                            (null === (o = m.details) || void 0 === o ? void 0 : o.count) || 0,
                            'woocommerce',
                          ),
                          g,
                          (null === (n = m.details) || void 0 === n ? void 0 : n.count) || 0,
                        ),
                    v = d
                      ? (0, F.sprintf) /* translators: %d is the count of reviews. */(
                          /* translators: %d is the count of reviews. */
                          (0, F._n)(
                            '%d review',
                            '%d reviews',
                            (null === (i = m.details) || void 0 === i ? void 0 : i.review_count) ||
                              0,
                            'woocommerce',
                          ),
                          (null === (l = m.details) || void 0 === l ? void 0 : l.review_count) || 0,
                        )
                      : (0, F.sprintf) /* translators: %d is the count of products. */(
                          /* translators: %d is the count of products. */
                          (0, F._n)(
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
                      'is-skip-level': 0 === p && 0 !== m.parent,
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
                  (0, a.createElement)($.SelectControl, {
                    className: 'woocommerce-product-categories__operator',
                    label: (0, F.__)('Display products matching', 'woocommerce'),
                    help: (0, F.__)(
                      'Pick at least two categories to use this setting.',
                      'woocommerce',
                    ),
                    value: i,
                    onChange: n,
                    options: [
                      { label: (0, F.__)('Any selected categories', 'woocommerce'), value: 'any' },
                      { label: (0, F.__)('All selected categories', 'woocommerce'), value: 'all' },
                    ],
                  }),
                ),
            );
          },
        );
        var ye = r(4717);
        var Se = r(923),
          ke = r.n(Se);
        const Ie = (0, c.createHigherOrderComponent)(e => {
            class t extends l.Component {
              constructor(...e) {
                super(...e),
                  (0, i.A)(this, 'state', { error: null, loading: !1, variations: {} }),
                  (0, i.A)(this, 'prevSelectedItem', void 0),
                  (0, i.A)(this, 'loadVariations', () => {
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
                            const t = await O(e);
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
                a && (!ke()(e.selected, r) || (e.isLoading && !t)) && this.loadVariations();
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
          Ce = ({
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
                  (0, a.createElement)($.Spinner, null),
                ),
            );
        r(7369);
        const xe = {
            list: (0, F.__)('Products', 'woocommerce'),
            noItems: (0, F.__)("Your store doesn't have any products.", 'woocommerce'),
            search: (0, F.__)('Search for a product to display', 'woocommerce'),
            updated: (0, F.__)('Product search results updated.', 'woocommerce'),
          },
          Pe = (e => t => {
            let { selected: r } = t;
            r = void 0 === r ? null : r;
            const o = null === r;
            return Array.isArray(r)
              ? (0, a.createElement)(e, { ...t })
              : (0, a.createElement)(e, { ...t, selected: o ? [] : [r] });
          })(
            ((Ne = Ie(
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
                  variations: p,
                  variationsLoading: g,
                } = e;
                if (r) return (0, a.createElement)(X, { error: r });
                const h = [...s, ...(p && t && p[t] ? p[t] : [])].map(M);
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
                            p =
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
                                'is-variable': p > 0,
                              },
                            );
                          if (!c.breadcrumbs.length) {
                            var v, _, b, w, E;
                            const t =
                              (null === (v = c.details) || void 0 === v ? void 0 : v.variations) &&
                              c.details.variations.length > 0;
                            return (0, a.createElement)(Ce, {
                              ...e,
                              className: Y()(h, { 'is-selected': m }),
                              isSelected: m,
                              item: c,
                              onSelect: () => () => {
                                u(c)();
                              },
                              isLoading: i || g,
                              countLabel: t
                                ? (0,
                                  F.sprintf) /* translators: %1$d is the number of variations of a product product. */(
                                    /* translators: %1$d is the number of variations of a product product. */
                                    (0, F.__)('%1$d variations', 'woocommerce'),
                                    null === (_ = c.details) || void 0 === _
                                      ? void 0
                                      : _.variations.length,
                                  )
                                : null,
                              name: `products-${o}`,
                              'aria-label': t
                                ? (0,
                                  F.sprintf) /* translators: %1$s is the product name, %2$d is the number of variations of that product. */(
                                    /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
                                    (0, F._n)(
                                      '%1$s, has %2$d variation',
                                      '%1$s, has %2$d variations',
                                      null === (b = c.details) ||
                                        void 0 === b ||
                                        null === (w = b.variations) ||
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
                          const f = (0, D.isEmpty)(
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
                            ...f,
                            className: h,
                            name: `variations-${o}`,
                          });
                        }
                      : () => null),
                  onSearch: c,
                  messages: xe,
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
                  const t = await O(e);
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
              const p = (0, ye.YQ)(t => {
                  R({ selected: e, search: t })
                    .then(e => {
                      s(e), o(!1);
                    })
                    .catch(m);
                }, 400),
                g = (0, l.useCallback)(
                  e => {
                    o(!0), p(e);
                  },
                  [o, p],
                );
              return (0, a.createElement)(Ne, {
                ...t,
                selected: e,
                error: n,
                products: c,
                isLoading: r,
                onSearch: d ? g : null,
              });
            }),
          );
        var Ne,
          Ae = r(1194);
        const Re = window.wp.styleEngine;
        function Oe(e = {}) {
          const t = {};
          return (
            (0, Re.getCSSRules)(e, { selector: '' }).forEach(e => {
              t[e.key] = e.value;
            }),
            t
          );
        }
        function Le(e, t) {
          return e && t ? `has-${(0, Ae.c)(t)}-${e}` : '';
        }
        const $e = e => {
            const t = (e => {
                const t = (0, D.isObject)(e) ? e : { style: {} };
                let r = t.style;
                return (
                  (0, D.isString)(r) && (r = JSON.parse(r) || {}),
                  (0, D.isObject)(r) || (r = {}),
                  { ...t, style: r }
                );
              })(e),
              r = (function(e) {
                var t, r, a, o, n, i, l;
                const { backgroundColor: c, textColor: s, gradient: d, style: m } = e,
                  u = Le('background-color', c),
                  p = Le('color', s),
                  g = (function(e) {
                    if (e) return `has-${e}-gradient-background`;
                  })(d),
                  h =
                    g ||
                    (null == m || null === (t = m.color) || void 0 === t ? void 0 : t.gradient);
                return {
                  className: Y()(p, g, {
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
                    'has-link-color': (0, D.isObject)(
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
                      o = r ? Le('border-color', r) : '';
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
                const t = (0, D.isObject)(e.style.typography) ? e.style.typography : {},
                  r = (0, D.isString)(t.fontFamily) ? t.fontFamily : '';
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
                  (0, a.createElement)(T.RichText.Content, {
                    tagName: 'a',
                    className: o,
                    href: r,
                    title: t,
                    style: { backgroundColor: 'vivid-green-cyan', borderRadius: '5px' },
                    value: t,
                    target: r,
                  }),
                )
              : (0, a.createElement)(T.InnerBlocks, {
                  template: [
                    [
                      'core/buttons',
                      { layout: { type: 'flex', justifyContent: 'center' } },
                      [['core/button', { text: (0, F.__)('Shop now', 'woocommerce'), url: r }]],
                    ],
                  ],
                  templateLock: 'all',
                });
          },
          Te = ({ className: e = '', onResize: t, ...r }) => {
            const [o, n] = (0, l.useState)(!1),
              i = Y()(e, { 'is-resizing': o }),
              c = (0, ye.dh)(
                (e, r, a, i) => {
                  o || n(!0), null == t || t(e, r, a, i);
                },
                50,
                { leading: !0 },
              );
            return (0, a.createElement)($.ResizableBox, {
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
          Me = { icon: n.A, label: (0, F.__)('Featured Product', 'woocommerce') },
          Be = {
            ...Me,
            cropLabel: (0, F.__)('Edit product image', 'woocommerce'),
            editLabel: (0, F.__)('Edit selected product', 'woocommerce'),
          },
          Ge = {
            ...Me,
            emptyMessage: (0, F.__)('No product is selected.', 'woocommerce'),
            noSelectionButtonLabel: (0, F.__)('Select a product', 'woocommerce'),
          },
          He = {
            ...Me,
            description: (0, F.__)('Highlight a product or variation.', 'woocommerce'),
            editLabel: (0, F.__)('Showing Featured Product block preview.', 'woocommerce'),
          },
          De = (0, c.compose)([
            L,
            $.withSpokenMessages,
            e => t => {
              var r;
              const [o, n] = (0, l.useState)(!1),
                { attributes: i, category: c, clientId: s, product: d } = t,
                m = c || d,
                { editMode: u } = i,
                p = (null == m ? void 0 : m.link) || (null == m ? void 0 : m.permalink),
                g = (0, je.useSelect)(e => e('core/block-editor').getBlock(s)),
                h =
                  null == g || null === (r = g.innerBlocks[0]) || void 0 === r
                    ? void 0
                    : r.innerBlocks[0],
                v = (null == h ? void 0 : h.clientId) || '',
                _ = (0, l.useMemo)(() => (null == h ? void 0 : h.attributes) || {}, [h]),
                { url: b } = _,
                { updateBlockAttributes: w } = (0, je.useDispatch)('core/block-editor');
              return (
                (0, l.useEffect)(() => {
                  o && v && !u && p && b && p !== b && (w(v, { url: p }), n(!1));
                }, [v, o, u, p, w, b]),
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
                    $.Placeholder,
                    { icon: (0, a.createElement)($.Icon, { icon: r }), label: o, className: u },
                    e,
                    (0, a.createElement)(
                      'div',
                      { className: `${u}__selection` },
                      s === G &&
                        (0, a.createElement)(fe, {
                          selected: l.categoryId ? [l.categoryId] : [],
                          onChange: (e = []) => {
                            const t = e[0] ? e[0].id : 0;
                            d({ categoryId: t, mediaId: 0, mediaSrc: '' }), m();
                          },
                          isSingle: !0,
                        }),
                      s === H &&
                        (0, a.createElement)(Pe, {
                          selected: l.productId ? [l.productId] : [],
                          showVariations: !0,
                          onChange: (e = []) => {
                            const t = e[0] ? e[0].id : 0;
                            d({ productId: t, mediaId: 0, mediaSrc: '' }), m();
                          },
                        }),
                      (0, a.createElement)(
                        $.Button,
                        {
                          variant: 'primary',
                          onClick: () => {
                            d({ editMode: !1 }), c(t);
                          },
                        },
                        (0, F.__)('Done', 'woocommerce'),
                      ),
                    ),
                  )
                : (0, a.createElement)(n, { ...i });
            })(He),
            (({ emptyMessage: e, icon: t, label: r, noSelectionButtonLabel: o }) => n => i => {
              const [c] = i.useEditingImage,
                {
                  attributes: s,
                  category: d,
                  isLoading: m,
                  isSelected: u,
                  name: p,
                  product: g,
                  setAttributes: h,
                } = i,
                { mediaId: v, mediaSrc: _ } = s,
                b = d || g,
                [w, E] = (0, l.useState)({}),
                { backgroundImageSrc: f } = V({ item: b, mediaId: v, mediaSrc: _, blockName: p }),
                y = te(p),
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
                    b
                      ? (() => {
                          var e, t;
                          const {
                              contentAlign: r,
                              dimRatio: o,
                              focalPoint: n,
                              hasParallax: i,
                              isRepeated: l,
                              imageFit: c,
                              minHeight: p,
                              overlayColor: h,
                              overlayGradient: v,
                              showDesc: _,
                              showPrice: w,
                              style: I,
                              textColor: C,
                            } = s,
                            x = Y()(
                              y,
                              {
                                'is-selected':
                                  u && 'preview' !== s.categoryId && 'preview' !== s.productId,
                                'is-loading': !b && m,
                                'is-not-found': !b && !m,
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
                              minHeight: p,
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
                              url: f,
                            }),
                            O = { background: v, backgroundColor: h };
                          return (0, a.createElement)(
                            a.Fragment,
                            null,
                            (0, a.createElement)(Te, {
                              enable: { bottom: !0 },
                              onResize: S,
                              showHandle: u,
                              style: { minHeight: p },
                            }),
                            (0, a.createElement)(
                              'div',
                              { className: x, style: N },
                              (0, a.createElement)(
                                'div',
                                { className: `${y}__wrapper` },
                                (0, a.createElement)('div', {
                                  className: 'background-dim__overlay',
                                  style: O,
                                }),
                                f &&
                                  (A
                                    ? (0, a.createElement)('img', {
                                        alt: b.name,
                                        className: `${y}__background-image`,
                                        src: f,
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
                                        className: Y()(`${y}__background-image`, {
                                          'has-parallax': i,
                                        }),
                                        style: R,
                                      })),
                                (0, a.createElement)('h2', {
                                  className: `${y}__title`,
                                  dangerouslySetInnerHTML: { __html: b.name },
                                }),
                                !(0, D.isEmpty)(null == g ? void 0 : g.variation) &&
                                  (0, a.createElement)('h3', {
                                    className: `${y}__variation`,
                                    dangerouslySetInnerHTML: { __html: g.variation },
                                  }),
                                _ &&
                                  (0, a.createElement)('div', {
                                    className: `${y}__description`,
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        (null == d ? void 0 : d.description) ||
                                        (null == g ? void 0 : g.short_description),
                                    },
                                  }),
                                w &&
                                  (0, a.createElement)('div', {
                                    className: `${y}__price`,
                                    dangerouslySetInnerHTML: { __html: g.price_html },
                                  }),
                                (0, a.createElement)(
                                  'div',
                                  { className: `${y}__link` },
                                  (() => {
                                    const { categoryId: e, linkText: t, productId: r } = s;
                                    return (0, a.createElement)(Fe, {
                                      itemId: e || r,
                                      linkText: t,
                                      permalink: (d || g).permalink,
                                    });
                                  })(),
                                ),
                              ),
                            ),
                          );
                        })()
                      : (0, a.createElement)(
                          $.Placeholder,
                          {
                            className: y,
                            icon: (0, a.createElement)($.Icon, { icon: t }),
                            label: r,
                          },
                          m
                            ? (0, a.createElement)($.Spinner, null)
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
            })(Ge),
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
                p = s === H ? t.product : t.category,
                { backgroundImageId: g, backgroundImageSrc: h } = V({
                  item: p,
                  mediaId: m,
                  mediaSrc: u,
                  blockName: s,
                });
              return r
                ? (0, a.createElement)(
                    'div',
                    { ref: n },
                    (0, a.createElement)(U, {
                      align: i.align,
                      backgroundImageId: g,
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
                  mediaSrc: p,
                  overlayColor: g,
                  overlayGradient: h,
                  showDesc: v,
                  showPrice: _,
                } = r,
                b = o === H ? t.product : t.category,
                { setGradient: w } = (0, T.__experimentalUseGradient)({
                  gradientAttribute: 'overlayGradient',
                  customGradientAttribute: 'overlayGradient',
                }),
                { backgroundImageSrc: E } = V({ item: b, mediaId: u, mediaSrc: p, blockName: o }),
                f =
                  o === H
                    ? (0, a.createElement)($.ToggleControl, {
                        label: (0, F.__)('Show price', 'woocommerce'),
                        checked: _,
                        onChange: () => n({ showPrice: !_ }),
                      })
                    : void 0;
              return (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)(q, {
                  alt: i,
                  backgroundImageSrc: E,
                  contentPanel: f,
                  dimRatio: l,
                  focalPoint: c,
                  hasParallax: s,
                  isRepeated: d,
                  imageFit: m,
                  overlayColor: g,
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
                { contentAlign: u, editMode: p, mediaId: g, mediaSrc: h } = l,
                v = c || d,
                { backgroundImageId: _, backgroundImageSrc: b } = V({
                  item: v,
                  mediaId: g,
                  mediaSrc: h,
                  blockName: s,
                });
              return (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)(W, {
                  backgroundImageId: _,
                  backgroundImageSrc: b,
                  contentAlign: u,
                  cropLabel: e,
                  editLabel: t,
                  editMode: p,
                  isEditingImage: n,
                  mediaSrc: h,
                  setAttributes: m,
                  setIsEditingImage: i,
                }),
                (0, a.createElement)(r, { ...o }),
              );
            })(Be),
          ])(() => (0, a.createElement)(a.Fragment, null));
        function ze(e) {
          return function(t) {
            const r = (0, T.useBlockProps)(),
              { color: o, ...n } = r.style;
            return (0, a.createElement)(
              'div',
              { ...r, style: n },
              (0, a.createElement)(e, { ...t }),
            );
          };
        }
        !(function(e, t, r, o) {
          var n, i, l, c, s, d, m, p, g, h, v;
          const _ = {
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
                        null === (p = m.spacing) ||
                        void 0 === p
                          ? void 0
                          : p.__experimentalDefaultControls,
                    },
                    __experimentalSkipSerialization:
                      null === (g = r.supports) ||
                      void 0 === g ||
                      null === (h = g.spacing) ||
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
            b = {
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
            ..._,
            example: { ...b, ...t },
            edit: ze(e),
            save: () => (0, a.createElement)(T.InnerBlocks.Content, null),
            ...o,
          });
        })(
          De,
          {
            attributes: {
              productId: 'preview',
              previewProduct: {
                id: 1,
                name: 'WordPress Pennant',
                variation: '',
                permalink: 'https://example.org',
                sku: 'wp-pennant',
                short_description: (0, F.__)(
                  'Fly your WordPress banner with this beauty! Deck out your office space or add it to your kids walls. This banner will spruce up any space it’s hung!',
                  'woocommerce',
                ),
                description:
                  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                price: '7.99',
                price_html:
                  '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',
                images: [
                  {
                    id: 1,
                    src: k + 'previews/pennant.jpg',
                    thumbnail: k + 'previews/pennant.jpg',
                    name: 'pennant-1.jpg',
                    alt: 'WordPress Pennant',
                    srcset: '',
                    sizes: '',
                  },
                ],
                average_rating: 5,
                categories: [{ id: 1, name: 'Decor', slug: 'decor', link: 'https://example.org' }],
                review_count: 1,
                prices: {
                  currency_code: 'GBP',
                  decimal_separator: '.',
                  thousand_separator: ',',
                  decimals: 2,
                  price_prefix: '£',
                  price_suffix: '',
                  price: '7.99',
                  regular_price: '9.99',
                  sale_price: '7.99',
                  price_range: null,
                },
                add_to_cart: {
                  text: (0, F.__)('Add to cart', 'woocommerce'),
                  description: (0, F.__)('Add to cart', 'woocommerce'),
                },
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                on_sale: !0,
              },
              editMode: !1,
            },
          },
          JSON.parse(
            '{"name":"woocommerce/featured-product","version":"1.0.0","title":"Featured Product","description":"Highlight a product or variation.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide","full"],"html":false,"color":{"background":true,"text":true},"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true},"__experimentalSkipSerialization":true},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalSkipSerialization":true},"multiple":true},"attributes":{"alt":{"type":"string","default":""},"contentAlign":{"type":"string","default":"center"},"dimRatio":{"type":"number","default":50},"editMode":{"type":"boolean","default":true},"focalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"imageFit":{"type":"string","default":"none"},"hasParallax":{"type":"boolean","default":false},"isRepeated":{"type":"boolean","default":false},"mediaId":{"type":"number","default":0},"mediaSrc":{"type":"string","default":""},"minHeight":{"type":"number","default":500},"linkText":{"type":"string","default":"Shop now"},"overlayColor":{"type":"string","default":"#000000"},"overlayGradient":{"type":"string"},"productId":{"type":"number"},"previewProduct":{"type":"object","default":null},"showDesc":{"type":"boolean","default":true},"showPrice":{"type":"boolean","default":true}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          {
            icon: {
              src: (0, a.createElement)(o.A, {
                icon: n.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
          },
        );
      },
      2256: () => {},
      82: () => {},
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
    (n.j = 8931),
    (() => {
      var e = { 8931: 0 };
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
  var i = n.O(void 0, [94], () => n(3583));
  (i = n.O(i)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['featured-product'] = i);
})();
