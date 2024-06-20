var wc;
(() => {
  var e,
    t,
    r,
    o = {
      7206: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609),
          n = r(6087),
          s = r(2294),
          a = r(7723);
        const l = window.wc.wcSettings;
        var i, c, u, d, p, m, g, b, w, f;
        const y = (0, l.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          h = y.pluginUrl + 'assets/images/',
          _ =
            (y.pluginUrl,
            y.buildPhase,
            null === (i = l.STORE_PAGES.shop) || void 0 === i || i.permalink,
            null === (c = l.STORE_PAGES.checkout) || void 0 === c || c.id,
            null === (u = l.STORE_PAGES.checkout) || void 0 === u || u.permalink,
            null === (d = l.STORE_PAGES.privacy) || void 0 === d || d.permalink,
            null === (p = l.STORE_PAGES.privacy) || void 0 === p || p.title,
            null === (m = l.STORE_PAGES.terms) || void 0 === m || m.permalink,
            null === (g = l.STORE_PAGES.terms) || void 0 === g || g.title,
            null === (b = l.STORE_PAGES.cart) || void 0 === b || b.id,
            null === (w = l.STORE_PAGES.cart) || void 0 === w || w.permalink,
            null !== (f = l.STORE_PAGES.myaccount) && void 0 !== f && f.permalink
              ? l.STORE_PAGES.myaccount.permalink
              : (0, l.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, l.getSetting)('localPickupEnabled', !1),
            (0, l.getSetting)('countries', {})),
          E = (0, l.getSetting)('countryData', {}),
          v =
            (Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowBilling)
                .map(e => [e, _[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowBilling)
                .map(e => [e, E[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowShipping)
                .map(e => [e, _[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowShipping)
                .map(e => [e, E[e].states || []]),
            ),
            Object.fromEntries(Object.keys(E).map(e => [e, E[e].locale || []])),
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
          k =
            ((0, l.getSetting)('addressFieldsLocations', v).address,
            (0, l.getSetting)('addressFieldsLocations', v).contact,
            (0, l.getSetting)('addressFieldsLocations', v).order,
            (0, l.getSetting)('additionalOrderFields', {}),
            (0, l.getSetting)('additionalContactFields', {}),
            (0, l.getSetting)('additionalAddressFields', {}),
            ({
              imageUrl: e = `${h}/block-error.svg`,
              header: t = (0, a.__)('Oops!', 'woocommerce'),
              text: r = (0, a.__)('There was an error loading the content.', 'woocommerce'),
              errorMessage: n,
              errorMessagePrefix: s = (0, a.__)('Error:', 'woocommerce'),
              button: l,
              showErrorBlock: i = !0,
            }) =>
              i
                ? (0, o.createElement)(
                    'div',
                    { className: 'wc-block-error wc-block-components-error' },
                    e &&
                      (0, o.createElement)('img', {
                        className: 'wc-block-error__image wc-block-components-error__image',
                        src: e,
                        alt: '',
                      }),
                    (0, o.createElement)(
                      'div',
                      { className: 'wc-block-error__content wc-block-components-error__content' },
                      t &&
                        (0, o.createElement)(
                          'p',
                          { className: 'wc-block-error__header wc-block-components-error__header' },
                          t,
                        ),
                      r &&
                        (0, o.createElement)(
                          'p',
                          { className: 'wc-block-error__text wc-block-components-error__text' },
                          r,
                        ),
                      n &&
                        (0, o.createElement)(
                          'p',
                          {
                            className: 'wc-block-error__message wc-block-components-error__message',
                          },
                          s ? s + ' ' : '',
                          n,
                        ),
                      l &&
                        (0, o.createElement)(
                          'p',
                          { className: 'wc-block-error__button wc-block-components-error__button' },
                          l,
                        ),
                    ),
                  )
                : null);
        r(9407);
        class S extends n.Component {
          constructor(...e) {
            super(...e), (0, s.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)('strong', null, e.status),
                    ': ',
                    e.statusText,
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: t,
                showErrorMessage: r = !0,
                showErrorBlock: n = !0,
                text: s,
                errorMessagePrefix: a,
                renderError: l,
                button: i,
              } = this.props,
              { errorMessage: c, hasError: u } = this.state;
            return u
              ? 'function' == typeof l
                ? l({ errorMessage: c })
                : (0, o.createElement)(k, {
                    showErrorBlock: n,
                    errorMessage: r ? c : null,
                    header: e,
                    imageUrl: t,
                    text: s,
                    errorMessagePrefix: a,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const x = S,
          O = ['.wp-block-woocommerce-cart'],
          A = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: s = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, a) => {
                const l = r(t, a),
                  i = s(t, a),
                  c = { ...t.dataset, ...(l.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: s = {},
                  errorBoundaryProps: a = {},
                }) => {
                  (0, n.render)(
                    (0, o.createElement)(
                      x,
                      { ...a },
                      (0, o.createElement)(
                        n.Suspense,
                        {
                          fallback: (0, o.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, o.createElement)(e, { ...s, attributes: r }),
                      ),
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: t, props: l, attributes: c, errorBoundaryProps: i });
              });
          };
        var P = r(923),
          C = r.n(P);
        function T(e) {
          const t = (0, n.useRef)(e);
          return C()(e, t.current) || (t.current = e), t.current;
        }
        const R = window.wc.wcBlocksData,
          L = window.wp.data,
          B = (0, n.createContext)('page'),
          F = () => (0, n.useContext)(B),
          N =
            (B.Provider,
            e => {
              const t = F();
              e = e || t;
              const r = (0, L.useSelect)(
                  t => t(R.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: o } = (0, L.useDispatch)(R.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, n.useCallback)(
                  t => {
                    o(e, t);
                  },
                  [e, o],
                ),
              ];
            }),
          j = (e, t, r) => {
            const o = F();
            r = r || o;
            const s = (0, L.useSelect)(
                o => o(R.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: a } = (0, L.useDispatch)(R.QUERY_STATE_STORE_KEY);
            return [
              s,
              (0, n.useCallback)(
                t => {
                  a(r, e, t);
                },
                [r, e, a],
              ),
            ];
          },
          q = window.wc.wcTypes,
          M = e => {
            const {
              namespace: t,
              resourceName: r,
              resourceValues: o = [],
              query: s = {},
              shouldSelect: a = !0,
            } = e;
            if (!t || !r)
              throw new Error(
                'The options object must have valid values for the namespace and the resource properties.',
              );
            const l = (0, n.useRef)({ results: [], isLoading: !0 }),
              i = T(s),
              c = T(o),
              u = (() => {
                const [, e] = (0, n.useState)();
                return (0, n.useCallback)(t => {
                  e(() => {
                    throw t;
                  });
                }, []);
              })(),
              d = (0, L.useSelect)(
                e => {
                  if (!a) return null;
                  const o = e(R.COLLECTIONS_STORE_KEY),
                    n = [t, r, i, c],
                    s = o.getCollectionError(...n);
                  if (s) {
                    if (!(0, q.isError)(s))
                      throw new Error(
                        'TypeError: `error` object is not an instance of Error constructor',
                      );
                    u(s);
                  }
                  return {
                    results: o.getCollection(...n),
                    isLoading: !o.hasFinishedResolution('getCollection', n),
                  };
                },
                [t, r, c, i, a],
              );
            return null !== d && (l.current = d), l.current;
          };
        var I = r(4717),
          U = r(5574);
        const Q = window.wc.blocksComponents;
        r(5400);
        const G = ({ name: e, count: t }) =>
          (0, o.createElement)(
            o.Fragment,
            null,
            e,
            null !== t &&
              Number.isFinite(t) &&
              (0, o.createElement)(Q.Label, {
                label: t.toString(),
                screenReaderLabel: (0, a.sprintf) /* translators: %s number of products. */(
                  /* translators: %s number of products. */
                  (0, a._n)('%s product', '%s products', t, 'woocommerce'),
                  t,
                ),
                wrapperElement: 'span',
                wrapperProps: { className: 'wc-filter-element-label-list-count' },
              }),
          );
        var V = r(9019),
          D = r.n(V);
        r(8335);
        const $ = ({
          className: e,
          /* translators: Reset button text for filters. */
          label: t = (0, a.__)('Reset', 'woocommerce'),
          onClick: r,
          screenReaderLabel: n = (0, a.__)('Reset filter', 'woocommerce'),
        }) =>
          (0, o.createElement)(
            'button',
            { className: D()('wc-block-components-filter-reset-button', e), onClick: r },
            (0, o.createElement)(Q.Label, { label: t, screenReaderLabel: n }),
          );
        r(1504);
        const K = ({
            className: e,
            isLoading: t,
            disabled: r,
            /* translators: Submit button text for filters. */
            label: n = (0, a.__)('Apply', 'woocommerce'),
            onClick: s,
            screenReaderLabel: l = (0, a.__)('Apply filter', 'woocommerce'),
          }) =>
            (0, o.createElement)(
              'button',
              {
                type: 'submit',
                className: D()(
                  'wp-block-button__link',
                  'wc-block-filter-submit-button',
                  'wc-block-components-filter-submit-button',
                  { 'is-loading': t },
                  e,
                ),
                disabled: r,
                onClick: s,
              },
              (0, o.createElement)(Q.Label, { label: n, screenReaderLabel: l }),
            ),
          Y = window.wp.htmlEntities,
          W = window.wp.url;
        var H = r(7104),
          J = r(224);
        const z = (0, l.getSettingWithCoercion)('isRenderingPhpTemplate', !1, q.isBoolean),
          Z = 'query_type_',
          X = 'filter_';
        function ee(e) {
          if (z) {
            const t = new URL(e);
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
              t.searchParams.delete('paged'),
              t.searchParams.forEach((e, r) => {
                r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
              }),
              (window.location.href = t.href);
          } else window.history.replaceState({}, '', e);
        }
        var te = r(1331);
        r(243);
        const re = ({
          className: e,
          style: t,
          suggestions: r,
          multiple: n = !0,
          saveTransform: s = e => e.trim().replace(/\s/g, '-'),
          messages: a = {},
          validateInput: l = e => r.includes(e),
          label: i = '',
          ...c
        }) =>
          (0, o.createElement)(
            'div',
            {
              className: D()('wc-blocks-components-form-token-field-wrapper', e, {
                'single-selection': !n,
              }),
              style: t,
            },
            (0, o.createElement)(te.A, {
              label: i,
              __experimentalExpandOnFocus: !0,
              __experimentalShowHowTo: !1,
              __experimentalValidateInput: l,
              saveTransform: s,
              maxLength: n ? void 0 : 1,
              suggestions: r,
              messages: a,
              ...c,
            }),
          );
        r(1626);
        const oe = ({ children: e }) =>
            (0, o.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e),
          ne = (0, l.getSetting)('attributes', []).reduce((e, t) => {
            const r =
              (o = t) && o.attribute_name
                ? {
                    id: parseInt(o.attribute_id, 10),
                    name: o.attribute_name,
                    taxonomy: 'pa_' + o.attribute_name,
                    label: o.attribute_label,
                    orderby: o.attribute_orderby,
                  }
                : null;
            var o;
            return r && r.id && e.push(r), e;
          }, []),
          se = (e = [], t, r, o = [], n = 'in') => {
            if (!r || !r.taxonomy) return [];
            const s = e.filter(e => e.attribute !== r.taxonomy);
            return (
              0 === o.length
                ? t(s)
                : (s.push({
                    attribute: r.taxonomy,
                    operator: n,
                    slug: o.map(({ slug: e }) => e).sort(),
                  }),
                  t((0, U.di)(s).asc('attribute'))),
              s
            );
          },
          ae = [
            {
              value: 'preview-1',
              formattedValue: 'preview-1',
              name: 'Blue',
              label: (0, o.createElement)(G, { name: 'Blue', count: 3 }),
              textLabel: 'Blue (3)',
            },
            {
              value: 'preview-2',
              formattedValue: 'preview-2',
              name: 'Green',
              label: (0, o.createElement)(G, { name: 'Green', count: 3 }),
              textLabel: 'Green (3)',
            },
            {
              value: 'preview-3',
              formattedValue: 'preview-3',
              name: 'Red',
              label: (0, o.createElement)(G, { name: 'Red', count: 2 }),
              textLabel: 'Red (2)',
            },
          ],
          le = {
            count: 0,
            has_archives: !0,
            id: 0,
            label: 'Preview',
            name: 'preview',
            order: 'menu_order',
            parent: 0,
            taxonomy: 'preview',
            type: '',
          };
        r(3399);
        const ie = JSON.parse(
          '{"uK":{"Do":{"A":"or"},"F8":{"A":3},"Ox":{"A":"list"},"dc":{"A":"multiple"}}}',
        );
        function ce() {
          return Math.floor(Math.random() * Date.now());
        }
        const ue = e => e.replace('pa_', ''),
          de = (e, t = []) => {
            const r = {};
            t.forEach(e => {
              const { attribute: t, slug: o, operator: n } = e,
                s = ue(t),
                a = o.join(','),
                l = `${Z}${s}`,
                i = 'in' === n ? 'or' : 'and';
              (r[`${X}${s}`] = a), (r[l] = i);
            });
            const o = (0, W.removeQueryArgs)(e, ...Object.keys(r));
            return (0, W.addQueryArgs)(o, r);
          },
          pe = e => {
            if (e) {
              const r =
                ((t = `filter_${e.name}`),
                window ? (0, W.getQueryArg)(window.location.href, t) : null);
              return ('string' == typeof r ? r.split(',') : []).map(e =>
                encodeURIComponent(e).toLowerCase(),
              );
            }
            var t;
            return [];
          },
          me = e =>
            e
              .trim()
              .replace(/\s/g, '-')
              .replace(/_/g, '-')
              .replace(/-+/g, '-')
              .replace(/[^a-zA-Z0-9-]/g, ''),
          ge = ({ isLoading: e = !1, options: t, checked: r, onChange: n }) =>
            e
              ? (0, o.createElement)(
                  o.Fragment,
                  null,
                  (0, o.createElement)('span', { className: 'is-loading' }),
                  (0, o.createElement)('span', { className: 'is-loading' }),
                )
              : (0, o.createElement)(Q.CheckboxList, {
                  className: 'wc-block-attribute-filter-list',
                  options: t,
                  checked: r,
                  onChange: n,
                  isLoading: e,
                  isDisabled: e,
                }),
          be = (0, n.createContext)({});
        (e => {
          const t = document.body.querySelectorAll(O.join(',')),
            { Block: r, getProps: o, getErrorBoundaryProps: n, selector: s } = e;
          (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: o, wrappers: n }) => {
            const s = document.body.querySelectorAll(o);
            n &&
              n.length > 0 &&
              Array.prototype.filter.call(
                s,
                e =>
                  !((e, t) => Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(
                    e,
                    n,
                  ),
              ),
              A({ Block: e, containers: s, getProps: t, getErrorBoundaryProps: r });
          })({ Block: r, getProps: o, getErrorBoundaryProps: n, selector: s, wrappers: t }),
            Array.prototype.forEach.call(t, t => {
              t.addEventListener('wc-blocks_render_blocks_frontend', () => {
                (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: o, wrapper: n }) => {
                  const s = n.querySelectorAll(o);
                  A({ Block: e, containers: s, getProps: t, getErrorBoundaryProps: r });
                })({ ...e, wrapper: t });
              });
            });
        })({
          selector: '.wp-block-woocommerce-attribute-filter',
          Block: ({ attributes: e, isEditor: t = !1, getNotice: r = () => null }) => {
            const s = (0, l.getSettingWithCoercion)('hasFilterableProducts', !1, q.isBoolean),
              i = (0, l.getSettingWithCoercion)('isRenderingPhpTemplate', !1, q.isBoolean),
              c = (0, l.getSettingWithCoercion)('pageUrl', window.location.href, q.isString),
              [u, d] = (0, n.useState)(!1),
              p =
                e.isPreview && !e.attributeId
                  ? le
                  : (e => {
                      if (e) return ne.find(t => t.id === e);
                    })(e.attributeId),
              m = (0, n.useMemo)(() => pe(p), [p]),
              [g, b] = (0, n.useState)(m),
              [w, f] = (0, n.useState)(ce()),
              [y, h] = (0, n.useState)(e.isPreview && !e.attributeId ? ae : []),
              [_] = N(),
              [E, v] = j('attributes', []),
              { results: k, isLoading: S } = M({
                namespace: '/wc/store/v1',
                resourceName: 'products/attributes/terms',
                resourceValues: [(null == p ? void 0 : p.id) || 0],
                shouldSelect: e.attributeId > 0,
                query: { orderby: (null == p ? void 0 : p.orderby) || 'menu_order' },
              }),
              { results: x, isLoading: O } = (({
                queryAttribute: e,
                queryPrices: t,
                queryStock: r,
                queryRating: o,
                queryState: s,
                isEditor: a = !1,
              }) => {
                let l = F();
                l = `${l}-collection-data`;
                const [i] = N(l),
                  [c, u] = j('calculate_attribute_counts', [], l),
                  [d, p] = j('calculate_price_range', null, l),
                  [m, g] = j('calculate_stock_status_counts', null, l),
                  [b, w] = j('calculate_rating_counts', null, l),
                  f = T(e || {}),
                  y = T(t),
                  h = T(r),
                  _ = T(o);
                (0, n.useEffect)(() => {
                  'object' == typeof f &&
                    Object.keys(f).length &&
                    (c.find(
                      e => (0, q.objectHasProp)(f, 'taxonomy') && e.taxonomy === f.taxonomy,
                    ) ||
                      u([...c, f]));
                }, [f, c, u]),
                  (0, n.useEffect)(() => {
                    d !== y && void 0 !== y && p(y);
                  }, [y, p, d]),
                  (0, n.useEffect)(() => {
                    m !== h && void 0 !== h && g(h);
                  }, [h, g, m]),
                  (0, n.useEffect)(() => {
                    b !== _ && void 0 !== _ && w(_);
                  }, [_, w, b]);
                const [E, v] = (0, n.useState)(a),
                  [k] = (0, I.d7)(E, 200);
                E || v(!0);
                const S = (0, n.useMemo)(
                  () =>
                    (e => {
                      const t = e;
                      return (
                        Array.isArray(e.calculate_attribute_counts) &&
                          (t.calculate_attribute_counts = (0, U.di)(
                            e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                              taxonomy: e,
                              query_type: t,
                            })),
                          ).asc(['taxonomy', 'query_type'])),
                        t
                      );
                    })(i),
                  [i],
                );
                return M({
                  namespace: '/wc/store/v1',
                  resourceName: 'products/collection-data',
                  query: {
                    ...s,
                    page: void 0,
                    per_page: void 0,
                    orderby: void 0,
                    order: void 0,
                    ...S,
                  },
                  shouldSelect: k,
                });
              })({
                queryAttribute: {
                  taxonomy: (null == p ? void 0 : p.taxonomy) || '',
                  queryType: e.queryType,
                },
                queryState: _,
                isEditor: t,
              }),
              A = (0, n.useCallback)(
                e =>
                  (0, q.objectHasProp)(x, 'attribute_counts') && Array.isArray(x.attribute_counts)
                    ? x.attribute_counts.find(({ term: t }) => t === e)
                    : null,
                [x],
              );
            (0, n.useEffect)(() => {
              if (S || O) return;
              if (!Array.isArray(k)) return;
              const t = k
                .map(t => {
                  const r = A(t.id);
                  if (
                    !(
                      r ||
                      g.includes(t.slug) ||
                      ((n = t.slug),
                      null != _ &&
                        _.attributes &&
                        _.attributes.some(
                          ({ attribute: e, slug: t = [] }) =>
                            e === (null == p ? void 0 : p.taxonomy) && t.includes(n),
                        ))
                    )
                  )
                    return null;
                  var n;
                  const s = r ? r.count : 0;
                  return {
                    formattedValue: me(t.slug),
                    value: t.slug,
                    name: (0, Y.decodeEntities)(t.name),
                    label: (0, o.createElement)(G, {
                      name: (0, Y.decodeEntities)(t.name),
                      count: e.showCounts ? s : null,
                    }),
                    textLabel: e.showCounts
                      ? `${(0, Y.decodeEntities)(t.name)} (${s})`
                      : (0, Y.decodeEntities)(t.name),
                  };
                })
                .filter(e => !!e);
              h(t), f(ce());
            }, [null == p ? void 0 : p.taxonomy, k, S, e.showCounts, O, A, g, _.attributes]);
            const P = (0, n.useCallback)(
                e =>
                  Array.isArray(k)
                    ? k.reduce((t, r) => (e.includes(r.slug) && t.push(r), t), [])
                    : [],
                [k],
              ),
              R = (0, n.useCallback)(
                (e, t = !1) => {
                  if (
                    ((e = e.map(e => ({ ...e, slug: e.slug.map(e => decodeURIComponent(e)) }))), t)
                  ) {
                    if (null == p || !p.taxonomy) return;
                    const t = Object.keys((0, W.getQueryArgs)(window.location.href)),
                      r = ue(p.taxonomy),
                      o = t.reduce(
                        (e, t) =>
                          t.includes(Z + r) || t.includes(X + r) ? (0, W.removeQueryArgs)(e, t) : e,
                        window.location.href,
                      );
                    ee(de(o, e));
                  } else {
                    const t = de(c, e);
                    ((e, t) => {
                      const r = Object.entries(t).reduce(
                        (e, [t, r]) => (t.includes('query_type') ? e : { ...e, [t]: r }),
                        {},
                      );
                      return Object.entries(r).reduce((t, [r, o]) => e[r] === o && t, !0);
                    })((0, W.getQueryArgs)(window.location.href), (0, W.getQueryArgs)(t)) || ee(t);
                  }
                },
                [c, null == p ? void 0 : p.taxonomy],
              ),
              L = t => {
                const r = se(E, v, p, P(t), 'or' === e.queryType ? 'in' : 'and');
                R(r, 0 === t.length);
              },
              B = (0, n.useCallback)(
                (r, o = !1) => {
                  t ||
                    (b(r),
                    (!o && e.showFilterButton) ||
                      se(E, v, p, P(r), 'or' === e.queryType ? 'in' : 'and'));
                },
                [t, b, E, v, p, P, e.queryType, e.showFilterButton],
              ),
              Q = T(
                (0, n.useMemo)(
                  () =>
                    (0, q.isAttributeQueryCollection)(E)
                      ? E.filter(
                          ({ attribute: e }) => e === (null == p ? void 0 : p.taxonomy),
                        ).flatMap(({ slug: e }) => e)
                      : [],
                  [E, null == p ? void 0 : p.taxonomy],
                ),
              ),
              V = (function(e, t) {
                const r = (0, n.useRef)();
                return (
                  (0, n.useEffect)(() => {
                    r.current === e || (r.current = e);
                  }, [e, t]),
                  r.current
                );
              })(Q);
            (0, n.useEffect)(() => {
              !V || C()(V, Q) || C()(g, Q) || B(Q);
            }, [g, Q, V, B]);
            const z = 'single' !== e.selectType,
              te = (0, n.useCallback)(
                e => {
                  const t = g.includes(e);
                  let r;
                  z
                    ? ((r = g.filter(t => t !== e)), t || (r.push(e), r.sort()))
                    : (r = t ? [] : [e]),
                    B(r);
                },
                [g, z, B],
              );
            (0, n.useEffect)(() => {
              p &&
                !e.showFilterButton &&
                ((({ currentCheckedFilters: e, hasSetFilterDefaultsFromUrl: t }) =>
                  t && 0 === e.length)({ currentCheckedFilters: g, hasSetFilterDefaultsFromUrl: u })
                  ? R(E, !0)
                  : R(E, !1));
            }, [u, R, E, p, g, e.showFilterButton]),
              (0, n.useEffect)(() => {
                if (!u && !S) return m.length > 0 ? (d(!0), void B(m, !0)) : void (i || d(!0));
              }, [p, u, S, B, m, i]);
            const ie = (() => {
              const { wrapper: e } = (0, n.useContext)(be);
              return t => {
                e && e.current && (e.current.hidden = !t);
              };
            })();
            if (!s) return ie(!1), null;
            if (!p) return t ? r('noAttributes') : (ie(!1), null);
            if (0 === y.length && !S && t) return r('noProducts');
            const we = `h${e.headingLevel}`,
              fe = !e.isPreview && S,
              ye = !e.isPreview && O,
              he = (fe || ye) && 0 === y.length;
            if (!he && 0 === y.length) return ie(!1), null;
            const _e = z ? !he && g.length < y.length : !he && 0 === g.length,
              Ee = (0, o.createElement)(
                we,
                { className: 'wc-block-attribute-filter__title' },
                e.heading,
              ),
              ve = he ? (0, o.createElement)(oe, null, Ee) : Ee;
            return (
              ie(!0),
              (0, o.createElement)(
                o.Fragment,
                null,
                !t && e.heading && ve,
                (0, o.createElement)(
                  'div',
                  { className: D()('wc-block-attribute-filter', `style-${e.displayStyle}`) },
                  'dropdown' === e.displayStyle
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(re, {
                          key: w,
                          className: D()({ 'single-selection': !z, 'is-loading': he }),
                          suggestions: y
                            .filter(e => !g.includes(e.value))
                            .map(e => e.formattedValue),
                          disabled: he,
                          placeholder: (0, a.sprintf) /* translators: %s attribute name. */(
                            /* translators: %s attribute name. */
                            (0, a.__)('Select %s', 'woocommerce'),
                            p.label,
                          ),
                          onChange: e => {
                            !z && e.length > 1 && (e = [e[e.length - 1]]);
                            const t = [
                              (e = e.map(e => {
                                const t = y.find(t => t.formattedValue === e);
                                return t ? t.value : e;
                              })),
                              g,
                            ].reduce((e, t) => e.filter(e => !t.includes(e)));
                            if (1 === t.length) return te(t[0]);
                            const r = [g, e].reduce((e, t) => e.filter(e => !t.includes(e)));
                            1 === r.length && te(r[0]);
                          },
                          value: g,
                          displayTransform: e => {
                            const t = y.find(t => [t.value, t.formattedValue].includes(e));
                            return t ? t.textLabel : e;
                          },
                          saveTransform: me,
                          messages: {
                            added: (0, a.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, a.__)('%s filter added.', 'woocommerce'),
                              p.label,
                            ),
                            removed: (0, a.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, a.__)('%s filter removed.', 'woocommerce'),
                              p.label,
                            ),
                            remove: (0, a.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, a.__)('Remove %s filter.', 'woocommerce'),
                              p.label.toLocaleLowerCase(),
                            ),
                            __experimentalInvalid: (0,
                            a.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, a.__)('Invalid %s filter.', 'woocommerce'),
                              p.label.toLocaleLowerCase(),
                            ),
                          },
                        }),
                        _e && (0, o.createElement)(H.A, { icon: J.A, size: 30 }),
                      )
                    : (0, o.createElement)(ge, {
                        options: y,
                        checked: g,
                        onChange: te,
                        isLoading: he,
                        isDisabled: he,
                      }),
                ),
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-attribute-filter__actions' },
                  (g.length > 0 || t) &&
                    !he &&
                    (0, o.createElement)($, {
                      onClick: () => {
                        b([]), f(ce()), u && L([]);
                      },
                      screenReaderLabel: (0, a.__)('Reset attribute filter', 'woocommerce'),
                    }),
                  e.showFilterButton &&
                    (0, o.createElement)(K, {
                      className: 'wc-block-attribute-filter__button',
                      isLoading: he,
                      disabled: (() => {
                        if (fe || ye) return !0;
                        const e = pe(p);
                        return e.length === g.length && g.every(t => e.includes(t));
                      })(),
                      onClick: () => L(g),
                    }),
                ),
              )
            );
          },
          getProps: e => {
            return {
              isEditor: !1,
              attributes:
                ((t = e.dataset),
                {
                  className: (0, q.isString)(null == t ? void 0 : t.className) ? t.className : '',
                  attributeId: parseInt(
                    (0, q.isString)(null == t ? void 0 : t.attributeId) ? t.attributeId : '0',
                    10,
                  ),
                  showCounts: 'true' === (null == t ? void 0 : t.showCounts),
                  queryType:
                    ((0, q.isString)(null == t ? void 0 : t.queryType) && t.queryType) ||
                    ie.uK.Do.A,
                  heading: (0, q.isString)(null == t ? void 0 : t.heading) ? t.heading : '',
                  headingLevel:
                    ((0, q.isString)(null == t ? void 0 : t.headingLevel) &&
                      parseInt(t.headingLevel, 10)) ||
                    ie.uK.F8.A,
                  displayStyle:
                    ((0, q.isString)(null == t ? void 0 : t.displayStyle) && t.displayStyle) ||
                    ie.uK.Ox.A,
                  showFilterButton: 'true' === (null == t ? void 0 : t.showFilterButton),
                  selectType:
                    ((0, q.isString)(null == t ? void 0 : t.selectType) && t.selectType) ||
                    ie.uK.dc.A,
                  isPreview: !1,
                }),
            };
            var t;
          },
        });
      },
      9407: () => {},
      5400: () => {},
      1626: () => {},
      8335: () => {},
      1504: () => {},
      243: () => {},
      3399: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      8468: e => {
        'use strict';
        e.exports = window.lodash;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      4040: e => {
        'use strict';
        e.exports = window.wp.deprecated;
      },
      8107: e => {
        'use strict';
        e.exports = window.wp.dom;
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
      8558: e => {
        'use strict';
        e.exports = window.wp.keycodes;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
      979: e => {
        'use strict';
        e.exports = window.wp.warning;
      },
    },
    n = {};
  function s(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, s), r.exports;
  }
  (s.m = o),
    (e = []),
    (s.O = (t, r, o, n) => {
      if (!r) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, n] = e[u], l = !0, i = 0; i < r.length; i++)
            (!1 & n || a >= n) && Object.keys(s.O).every(e => s.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((l = !1), n < a && (a = n));
          if (l) {
            e.splice(u--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [r, o, n];
    }),
    (s.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (s.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      s.r(n);
      var a = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var l = 2 & o && e; 'object' == typeof l && !~t.indexOf(l); l = r(l))
        Object.getOwnPropertyNames(l).forEach(t => (a[t] = () => e[t]));
      return (a.default = () => e), s.d(n, a), n;
    }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.j = 2432),
    (() => {
      var e = { 2432: 0 };
      s.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [a, l, i] = r,
            c = 0;
          if (a.some(t => 0 !== e[t])) {
            for (o in l) s.o(l, o) && (s.m[o] = l[o]);
            if (i) var u = i(s);
          }
          for (t && t(r); c < a.length; c++) (n = a[c]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return s.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var a = s.O(void 0, [94], () => s(7206));
  (a = s.O(a)), ((wc = void 0 === wc ? {} : wc)['attribute-filter'] = a);
})();
