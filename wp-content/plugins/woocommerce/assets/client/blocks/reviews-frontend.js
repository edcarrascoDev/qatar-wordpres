var wc;
(() => {
  var e,
    t,
    r,
    s = {
      932: (e, t, r) => {
        'use strict';
        r.r(t);
        var s = r(1609),
          o = r(6087),
          i = r(2294),
          n = r(7723);
        const a = window.wc.wcSettings;
        var l, c, d, p, m, w, u, h, v, g;
        const b = (0, a.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          _ = b.pluginUrl + 'assets/images/',
          y =
            (b.pluginUrl,
            b.buildPhase,
            null === (l = a.STORE_PAGES.shop) || void 0 === l || l.permalink,
            null === (c = a.STORE_PAGES.checkout) || void 0 === c || c.id,
            null === (d = a.STORE_PAGES.checkout) || void 0 === d || d.permalink,
            null === (p = a.STORE_PAGES.privacy) || void 0 === p || p.permalink,
            null === (m = a.STORE_PAGES.privacy) || void 0 === m || m.title,
            null === (w = a.STORE_PAGES.terms) || void 0 === w || w.permalink,
            null === (u = a.STORE_PAGES.terms) || void 0 === u || u.title,
            null === (h = a.STORE_PAGES.cart) || void 0 === h || h.id,
            null === (v = a.STORE_PAGES.cart) || void 0 === v || v.permalink,
            null !== (g = a.STORE_PAGES.myaccount) && void 0 !== g && g.permalink
              ? a.STORE_PAGES.myaccount.permalink
              : (0, a.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, a.getSetting)('localPickupEnabled', !1),
            (0, a.getSetting)('countries', {})),
          f = (0, a.getSetting)('countryData', {}),
          E =
            (Object.fromEntries(
              Object.keys(f)
                .filter(e => !0 === f[e].allowBilling)
                .map(e => [e, y[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(f)
                .filter(e => !0 === f[e].allowBilling)
                .map(e => [e, f[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(f)
                .filter(e => !0 === f[e].allowShipping)
                .map(e => [e, y[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(f)
                .filter(e => !0 === f[e].allowShipping)
                .map(e => [e, f[e].states || []]),
            ),
            Object.fromEntries(Object.keys(f).map(e => [e, f[e].locale || []])),
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
            ((0, a.getSetting)('addressFieldsLocations', E).address,
            (0, a.getSetting)('addressFieldsLocations', E).contact,
            (0, a.getSetting)('addressFieldsLocations', E).order,
            (0, a.getSetting)('additionalOrderFields', {}),
            (0, a.getSetting)('additionalContactFields', {}),
            (0, a.getSetting)('additionalAddressFields', {}),
            ({
              imageUrl: e = `${_}/block-error.svg`,
              header: t = (0, n.__)('Oops!', 'woocommerce'),
              text: r = (0, n.__)('There was an error loading the content.', 'woocommerce'),
              errorMessage: o,
              errorMessagePrefix: i = (0, n.__)('Error:', 'woocommerce'),
              button: a,
              showErrorBlock: l = !0,
            }) =>
              l
                ? (0, s.createElement)(
                    'div',
                    { className: 'wc-block-error wc-block-components-error' },
                    e &&
                      (0, s.createElement)('img', {
                        className: 'wc-block-error__image wc-block-components-error__image',
                        src: e,
                        alt: '',
                      }),
                    (0, s.createElement)(
                      'div',
                      { className: 'wc-block-error__content wc-block-components-error__content' },
                      t &&
                        (0, s.createElement)(
                          'p',
                          { className: 'wc-block-error__header wc-block-components-error__header' },
                          t,
                        ),
                      r &&
                        (0, s.createElement)(
                          'p',
                          { className: 'wc-block-error__text wc-block-components-error__text' },
                          r,
                        ),
                      o &&
                        (0, s.createElement)(
                          'p',
                          {
                            className: 'wc-block-error__message wc-block-components-error__message',
                          },
                          i ? i + ' ' : '',
                          o,
                        ),
                      a &&
                        (0, s.createElement)(
                          'p',
                          { className: 'wc-block-error__button wc-block-components-error__button' },
                          a,
                        ),
                    ),
                  )
                : null);
        r(9407);
        class R extends o.Component {
          constructor(...e) {
            super(...e), (0, i.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, s.createElement)(
                    s.Fragment,
                    null,
                    (0, s.createElement)('strong', null, e.status),
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
                showErrorBlock: o = !0,
                text: i,
                errorMessagePrefix: n,
                renderError: a,
                button: l,
              } = this.props,
              { errorMessage: c, hasError: d } = this.state;
            return d
              ? 'function' == typeof a
                ? a({ errorMessage: c })
                : (0, s.createElement)(k, {
                    showErrorBlock: o,
                    errorMessage: r ? c : null,
                    header: e,
                    imageUrl: t,
                    text: i,
                    errorMessagePrefix: n,
                    button: l,
                  })
              : this.props.children;
          }
        }
        const S = R,
          O = ['.wp-block-woocommerce-cart'],
          L = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: i = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, n) => {
                const a = r(t, n),
                  l = i(t, n),
                  c = { ...t.dataset, ...(a.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: i = {},
                  errorBoundaryProps: n = {},
                }) => {
                  (0, o.render)(
                    (0, s.createElement)(
                      S,
                      { ...n },
                      (0, s.createElement)(
                        o.Suspense,
                        {
                          fallback: (0, s.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, s.createElement)(e, { ...i, attributes: r }),
                      ),
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: t, props: a, attributes: c, errorBoundaryProps: l });
              });
          };
        var P = r(195);
        const A = window.wp.apiFetch;
        var x = r.n(A),
          T = r(9019),
          N = r.n(T);
        r(113);
        const M = ({ label: e, screenReaderLabel: t, wrapperElement: r, wrapperProps: i = {} }) => {
            let n;
            const a = null != e,
              l = null != t;
            return !a && l
              ? ((n = r || 'span'),
                (i = { ...i, className: N()(i.className, 'screen-reader-text') }),
                (0, s.createElement)(n, { ...i }, t))
              : ((n = r || o.Fragment),
                a && l && e !== t
                  ? (0, s.createElement)(
                      n,
                      { ...i },
                      (0, s.createElement)('span', { 'aria-hidden': 'true' }, e),
                      (0, s.createElement)('span', { className: 'screen-reader-text' }, t),
                    )
                  : (0, s.createElement)(n, { ...i }, e));
          },
          C = ({
            onClick: e,
            label: t = (0, n.__)('Load more', 'woocommerce'),
            screenReaderLabel: r = (0, n.__)('Load more', 'woocommerce'),
          }) =>
            (0, s.createElement)(
              'div',
              { className: 'wp-block-button wc-block-load-more wc-block-components-load-more' },
              (0, s.createElement)(
                'button',
                { className: 'wp-block-button__link', onClick: e },
                (0, s.createElement)(M, { label: t, screenReaderLabel: r }),
              ),
            ),
          j = window.wc.blocksComponents;
        r(9836);
        const B = ({ onChange: e, readOnly: t, value: r }) =>
          (0, s.createElement)(j.SortSelect, {
            className: 'wc-block-review-sort-select wc-block-components-review-sort-select',
            label: (0, n.__)('Order by', 'woocommerce'),
            onChange: e,
            options: [
              { key: 'most-recent', label: (0, n.__)('Most recent', 'woocommerce') },
              { key: 'highest-rating', label: (0, n.__)('Highest rating', 'woocommerce') },
              { key: 'lowest-rating', label: (0, n.__)('Lowest rating', 'woocommerce') },
            ],
            readOnly: t,
            screenReaderLabel: (0, n.__)('Order reviews by', 'woocommerce'),
            value: r,
          });
        function D(e) {
          let t,
            r,
            s,
            o = [];
          for (let i = 0; i < e.length; i++)
            (t = e.substring(i)),
              (r = t.match(/^&[a-z0-9#]+;/)),
              r ? ((s = r[0]), o.push(s), (i += s.length - 1)) : o.push(e[i]);
          return o;
        }
        const I = (e, t, r = '...') => {
            const s = (function(e, t) {
              const r = (t = t || {}).limit || 100,
                s = void 0 === t.preserveTags || t.preserveTags,
                o = void 0 !== t.wordBreak && t.wordBreak,
                i = t.suffix || '...',
                n = t.moreLink || '',
                a = t.moreText || '»',
                l = t.preserveWhiteSpace || !1,
                c = e
                  .replace(/</g, '\n<')
                  .replace(/>/g, '>\n')
                  .replace(/\n\n/g, '\n')
                  .replace(/^\n/g, '')
                  .replace(/\n$/g, '')
                  .split('\n');
              let d,
                p,
                m,
                w,
                u,
                h,
                v = 0,
                g = [],
                b = !1;
              for (let e = 0; e < c.length; e++) {
                if (((d = c[e]), (w = l ? d : d.replace(/[ ]+/g, ' ')), !d.length)) continue;
                const t = D(w);
                if ('<' !== d[0])
                  if (v >= r) d = '';
                  else if (v + t.length >= r) {
                    if (((p = r - v), ' ' === t[p - 1]))
                      for (; p && ((p -= 1), ' ' === t[p - 1]); );
                    else (m = t.slice(p).indexOf(' ')), o || (-1 !== m ? (p += m) : (p = d.length));
                    (d = t.slice(0, p).join('') + i),
                      n && (d += '<a href="' + n + '" style="display:inline">' + a + '</a>'),
                      (v = r),
                      (b = !0);
                  } else v += t.length;
                else if (s) {
                  if (v >= r)
                    if (((u = d.match(/[a-zA-Z]+/)), (h = u ? u[0] : ''), h))
                      if ('</' !== d.substring(0, 2)) g.push(h), (d = '');
                      else {
                        for (; g[g.length - 1] !== h && g.length; ) g.pop();
                        g.length && (d = ''), g.pop();
                      }
                    else d = '';
                } else d = '';
                c[e] = d;
              }
              return { html: c.join('\n').replace(/\n/g, ''), more: b };
            })(e, { suffix: r, limit: t });
            return s.html;
          },
          F = (e, t, r) => (t <= r ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e),
          G = (e, t, r, s) => {
            const o = ((e, t, r) => {
              let s = { start: 0, middle: 0, end: e.length };
              for (; s.start <= s.end; )
                (s.middle = Math.floor((s.start + s.end) / 2)),
                  (t.innerHTML = I(e, s.middle)),
                  (s = F(s, t.clientHeight, r));
              return s.middle;
            })(e, t, r);
            return I(e, o - s.length, s);
          },
          H = {
            className: 'read-more-content',
            ellipsis: '&hellip;',
            lessText: (0, n.__)('Read less', 'woocommerce'),
            maxLines: 3,
            moreText: (0, n.__)('Read more', 'woocommerce'),
          };
        class U extends o.Component {
          constructor(e) {
            super(e),
              (0, i.A)(this, 'reviewSummary', void 0),
              (0, i.A)(this, 'reviewContent', void 0),
              (this.state = {
                isExpanded: !1,
                clampEnabled: null,
                content: e.children,
                summary: '.',
              }),
              (this.reviewContent = (0, o.createRef)()),
              (this.reviewSummary = (0, o.createRef)()),
              (this.getButton = this.getButton.bind(this)),
              (this.onClick = this.onClick.bind(this));
          }
          componentDidMount() {
            this.setSummary();
          }
          componentDidUpdate(e) {
            (e.maxLines === this.props.maxLines && e.children === this.props.children) ||
              this.setState({ clampEnabled: null, summary: '.' }, this.setSummary);
          }
          setSummary() {
            if (this.props.children) {
              const { maxLines: e, ellipsis: t } = this.props;
              if (!this.reviewSummary.current || !this.reviewContent.current) return;
              const r = (this.reviewSummary.current.clientHeight + 1) * e + 1,
                s = this.reviewContent.current.clientHeight + 1 > r;
              this.setState({ clampEnabled: s }),
                s &&
                  this.setState({
                    summary: G(
                      this.reviewContent.current.innerHTML,
                      this.reviewSummary.current,
                      r,
                      t,
                    ),
                  });
            }
          }
          getButton() {
            const { isExpanded: e } = this.state,
              { className: t, lessText: r, moreText: o } = this.props,
              i = e ? r : o;
            if (i)
              return (0, s.createElement)(
                'a',
                {
                  href: '#more',
                  className: t + '__read_more',
                  onClick: this.onClick,
                  'aria-expanded': !e,
                  role: 'button',
                },
                i,
              );
          }
          onClick(e) {
            e.preventDefault();
            const { isExpanded: t } = this.state;
            this.setState({ isExpanded: !t });
          }
          render() {
            const { className: e } = this.props,
              { content: t, summary: r, clampEnabled: o, isExpanded: i } = this.state;
            return t
              ? !1 === o
                ? (0, s.createElement)(
                    'div',
                    { className: e },
                    (0, s.createElement)('div', { ref: this.reviewContent }, t),
                  )
                : (0, s.createElement)(
                    'div',
                    { className: e },
                    (!i || null === o) &&
                      (0, s.createElement)('div', {
                        ref: this.reviewSummary,
                        'aria-hidden': i,
                        dangerouslySetInnerHTML: { __html: r },
                      }),
                    (i || null === o) &&
                      (0, s.createElement)(
                        'div',
                        { ref: this.reviewContent, 'aria-hidden': !i },
                        t,
                      ),
                    this.getButton(),
                  )
              : null;
          }
        }
        (0, i.A)(U, 'defaultProps', H);
        const W = U;
        r(7935);
        const q = ({ attributes: e, review: t = {} }) => {
          const {
              imageType: r,
              showReviewDate: o,
              showReviewerName: i,
              showReviewImage: a,
              showReviewRating: l,
              showReviewContent: c,
              showProductName: d,
            } = e,
            { rating: p } = t,
            m = !(Object.keys(t).length > 0),
            w = Number.isFinite(p) && l;
          return (0, s.createElement)(
            'li',
            {
              className: N()(
                'wc-block-review-list-item__item',
                'wc-block-components-review-list-item__item',
                { 'is-loading': m, 'wc-block-components-review-list-item__item--has-image': a },
              ),
              'aria-hidden': m,
            },
            (d || o || i || a || w) &&
              (0, s.createElement)(
                'div',
                {
                  className:
                    'wc-block-review-list-item__info wc-block-components-review-list-item__info',
                },
                a &&
                  (function(e, t, r) {
                    var o, i;
                    return r || !e
                      ? (0, s.createElement)('div', {
                          className:
                            'wc-block-review-list-item__image wc-block-components-review-list-item__image',
                        })
                      : (0, s.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__image wc-block-components-review-list-item__image',
                          },
                          'product' === t
                            ? (0, s.createElement)('img', {
                                'aria-hidden': 'true',
                                alt:
                                  (null === (o = e.product_image) || void 0 === o
                                    ? void 0
                                    : o.alt) || '',
                                src:
                                  (null === (i = e.product_image) || void 0 === i
                                    ? void 0
                                    : i.thumbnail) || '',
                              })
                            : (0, s.createElement)('img', {
                                'aria-hidden': 'true',
                                alt: '',
                                src: e.reviewer_avatar_urls[96] || '',
                              }),
                          e.verified &&
                            (0, s.createElement)(
                              'div',
                              {
                                className:
                                  'wc-block-review-list-item__verified wc-block-components-review-list-item__verified',
                                title: (0, n.__)('Verified buyer', 'woocommerce'),
                              },
                              (0, n.__)('Verified buyer', 'woocommerce'),
                            ),
                        );
                  })(t, r, m),
                (d || i || w || o) &&
                  (0, s.createElement)(
                    'div',
                    {
                      className:
                        'wc-block-review-list-item__meta wc-block-components-review-list-item__meta',
                    },
                    w &&
                      (function(e) {
                        const { rating: t } = e,
                          r = { width: (t / 5) * 100 + '%' },
                          o = (0,
                          n.sprintf) /* translators: %f is referring to the average rating value */(
                            /* translators: %f is referring to the average rating value */
                            (0, n.__)('Rated %f out of 5', 'woocommerce'),
                            t,
                          ),
                          i = {
                            __html: (0,
                            n.sprintf) /* translators: %s is referring to the average rating value */(
                              /* translators: %s is referring to the average rating value */
                              (0, n.__)('Rated %s out of 5', 'woocommerce'),
                              (0, n.sprintf)('<strong class="rating">%f</strong>', t),
                            ),
                          };
                        return (0, s.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__rating wc-block-components-review-list-item__rating',
                          },
                          (0, s.createElement)(
                            'div',
                            {
                              className:
                                'wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars',
                              role: 'img',
                              'aria-label': o,
                            },
                            (0, s.createElement)('span', { style: r, dangerouslySetInnerHTML: i }),
                          ),
                        );
                      })(t),
                    d &&
                      (function(e) {
                        return (0, s.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__product wc-block-components-review-list-item__product',
                          },
                          (0, s.createElement)('a', {
                            href: e.product_permalink,
                            dangerouslySetInnerHTML: { __html: e.product_name },
                          }),
                        );
                      })(t),
                    i &&
                      (function(e) {
                        const { reviewer: t = '' } = e;
                        return (0, s.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__author wc-block-components-review-list-item__author',
                          },
                          t,
                        );
                      })(t),
                    o &&
                      (function(e) {
                        const { date_created: t, formatted_date_created: r } = e;
                        return (0, s.createElement)(
                          'time',
                          {
                            className:
                              'wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date',
                            dateTime: t,
                          },
                          r,
                        );
                      })(t),
                  ),
              ),
            c &&
              (function(e) {
                return (0, s.createElement)(
                  W,
                  {
                    maxLines: 10,
                    moreText: (0, n.__)('Read full review', 'woocommerce'),
                    lessText: (0, n.__)('Hide full review', 'woocommerce'),
                    className:
                      'wc-block-review-list-item__text wc-block-components-review-list-item__text',
                  },
                  (0, s.createElement)('div', {
                    dangerouslySetInnerHTML: { __html: e.review || '' },
                  }),
                );
              })(t),
          );
        };
        r(4105);
        const V = ({ attributes: e, reviews: t }) => {
          const r = (0, a.getSetting)('showAvatars', !0),
            o = (0, a.getSetting)('reviewRatingsEnabled', !0),
            i = (r || 'product' === e.imageType) && e.showReviewImage,
            n = o && e.showReviewRating,
            l = { ...e, showReviewImage: i, showReviewRating: n };
          return (0, s.createElement)(
            'ul',
            { className: 'wc-block-review-list wc-block-components-review-list' },
            0 === t.length
              ? (0, s.createElement)(q, { attributes: l })
              : t.map((e, t) =>
                  (0, s.createElement)(q, { key: e.id || t, attributes: l, review: e }),
                ),
          );
        };
        var J = r(923),
          $ = r.n(J);
        const z = (e => {
          class t extends o.Component {
            constructor(...e) {
              super(...e),
                (0, i.A)(this, 'isPreview', !!this.props.attributes.previewReviews),
                (0, i.A)(
                  this,
                  'delayedAppendReviews',
                  this.props.delayFunction(this.appendReviews),
                ),
                (0, i.A)(this, 'isMounted', !1),
                (0, i.A)(this, 'state', {
                  error: null,
                  loading: !0,
                  reviews: this.isPreview ? this.props.attributes.previewReviews : [],
                  totalReviews: this.isPreview ? this.props.attributes.previewReviews.length : 0,
                }),
                (0, i.A)(this, 'setError', async e => {
                  if (!this.isMounted) return;
                  const { onReviewsLoadError: t } = this.props,
                    r = await (async e => {
                      if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
                      try {
                        const t = await e.json();
                        return { message: t.message, type: t.type || 'api' };
                      } catch (e) {
                        return { message: e.message, type: 'general' };
                      }
                    })(e);
                  this.setState({ reviews: [], loading: !1, error: r }), t(r);
                });
            }
            componentDidMount() {
              (this.isMounted = !0), this.replaceReviews();
            }
            componentDidUpdate(e) {
              e.reviewsToDisplay < this.props.reviewsToDisplay
                ? this.delayedAppendReviews()
                : this.shouldReplaceReviews(e, this.props) && this.replaceReviews();
            }
            shouldReplaceReviews(e, t) {
              return (
                e.orderby !== t.orderby ||
                e.order !== t.order ||
                e.productId !== t.productId ||
                !$()(e.categoryIds, t.categoryIds)
              );
            }
            componentWillUnmount() {
              (this.isMounted = !1),
                this.delayedAppendReviews.cancel && this.delayedAppendReviews.cancel();
            }
            getArgs(e) {
              const {
                  categoryIds: t,
                  order: r,
                  orderby: s,
                  productId: o,
                  reviewsToDisplay: i,
                } = this.props,
                n = { order: r, orderby: s, per_page: i - e, offset: e };
              if (t) {
                const e = Array.isArray(t) ? t : JSON.parse(t);
                n.category_id = Array.isArray(e) ? e.join(',') : e;
              }
              return o && (n.product_id = o), n;
            }
            replaceReviews() {
              if (this.isPreview) return;
              const { onReviewsReplaced: e } = this.props;
              this.updateListOfReviews().then(e);
            }
            appendReviews() {
              if (this.isPreview) return;
              const { onReviewsAppended: e, reviewsToDisplay: t } = this.props,
                { reviews: r } = this.state;
              t <= r.length || this.updateListOfReviews(r).then(e);
            }
            updateListOfReviews(e = []) {
              const { reviewsToDisplay: t } = this.props,
                { totalReviews: r } = this.state,
                s = Math.min(r, t) - e.length;
              return (
                this.setState({ loading: !0, reviews: e.concat(Array(s).fill({})) }),
                ((o = this.getArgs(e.length)),
                x()({
                  path:
                    '/wc/store/v1/products/reviews?' +
                    Object.entries(o)
                      .map(e => e.join('='))
                      .join('&'),
                  parse: !1,
                }).then(e =>
                  e.json().then(t => ({
                    reviews: t,
                    totalReviews: parseInt(e.headers.get('x-wp-total'), 10),
                  })),
                ))
                  .then(
                    ({ reviews: t, totalReviews: r }) => (
                      this.isMounted &&
                        this.setState({
                          reviews: e.filter(e => Object.keys(e).length).concat(t),
                          totalReviews: r,
                          loading: !1,
                          error: null,
                        }),
                      { newReviews: t }
                    ),
                  )
                  .catch(this.setError)
              );
              var o;
            }
            render() {
              const { reviewsToDisplay: t } = this.props,
                { error: r, loading: o, reviews: i, totalReviews: n } = this.state;
              return (0, s.createElement)(e, {
                ...this.props,
                error: r,
                isLoading: o,
                reviews: i.slice(0, t),
                totalReviews: n,
              });
            }
          }
          (0, i.A)(t, 'defaultProps', {
            delayFunction: e => e,
            onReviewsAppended: () => {},
            onReviewsLoadError: () => {},
            onReviewsReplaced: () => {},
          });
          const { displayName: r = e.name || 'Component' } = e;
          return (t.displayName = `WithReviews( ${r} )`), t;
        })(
          ({
            attributes: e,
            onAppendReviews: t,
            onChangeOrderby: r,
            reviews: o,
            sortSelectValue: i,
            totalReviews: l,
          }) => {
            if (0 === o.length) return null;
            const c = (0, a.getSetting)('reviewRatingsEnabled', !0);
            return (0, s.createElement)(
              s.Fragment,
              null,
              e.showOrderby && c && (0, s.createElement)(B, { value: i, onChange: r }),
              (0, s.createElement)(V, { attributes: e, reviews: o }),
              e.showLoadMore &&
                l > o.length &&
                (0, s.createElement)(C, {
                  onClick: t,
                  screenReaderLabel: (0, n.__)('Load more reviews', 'woocommerce'),
                }),
            );
          },
        );
        class Z extends o.Component {
          constructor(e) {
            super(e);
            const { attributes: t } = this.props;
            (this.state = {
              orderby: null == t ? void 0 : t.orderby,
              reviewsToDisplay: this.getReviewsOnPageLoad(),
            }),
              (this.onAppendReviews = this.onAppendReviews.bind(this)),
              (this.onChangeOrderby = this.onChangeOrderby.bind(this));
          }
          getReviewsOnPageLoad() {
            const { attributes: e } = this.props;
            return 'number' == typeof e.reviewsOnPageLoad
              ? e.reviewsOnPageLoad
              : parseInt(e.reviewsOnPageLoad, 10);
          }
          getReviewsOnLoadMore() {
            const { attributes: e } = this.props;
            return 'number' == typeof e.reviewsOnLoadMore
              ? e.reviewsOnLoadMore
              : parseInt(e.reviewsOnLoadMore, 10);
          }
          onAppendReviews() {
            const { reviewsToDisplay: e } = this.state;
            this.setState({ reviewsToDisplay: e + this.getReviewsOnLoadMore() });
          }
          onChangeOrderby(e) {
            this.setState({
              orderby: e.target.value,
              reviewsToDisplay: this.getReviewsOnPageLoad(),
            });
          }
          onReviewsAppended({ newReviews: e }) {
            (0, P.speak)(
              (0, n.sprintf) /* translators: %d is the count of reviews loaded. */(
                /* translators: %d is the count of reviews loaded. */
                (0, n._n)('%d review loaded.', '%d reviews loaded.', e.length, 'woocommerce'),
                e.length,
              ),
            );
          }
          onReviewsReplaced() {
            (0, P.speak)((0, n.__)('Reviews list updated.', 'woocommerce'));
          }
          onReviewsLoadError() {
            (0, P.speak)((0, n.__)('There was an error loading the reviews.', 'woocommerce'));
          }
          render() {
            const { attributes: e } = this.props,
              { categoryIds: t, productId: r } = e,
              { reviewsToDisplay: o } = this.state,
              { order: i, orderby: n } = (e => {
                if ((0, a.getSetting)('reviewRatingsEnabled', !0)) {
                  if ('lowest-rating' === e) return { order: 'asc', orderby: 'rating' };
                  if ('highest-rating' === e) return { order: 'desc', orderby: 'rating' };
                }
                return { order: 'desc', orderby: 'date_gmt' };
              })(this.state.orderby);
            return (0, s.createElement)(z, {
              attributes: e,
              categoryIds: t,
              onAppendReviews: this.onAppendReviews,
              onChangeOrderby: this.onChangeOrderby,
              onReviewsAppended: this.onReviewsAppended,
              onReviewsLoadError: this.onReviewsLoadError,
              onReviewsReplaced: this.onReviewsReplaced,
              order: i,
              orderby: n,
              productId: r,
              reviewsToDisplay: o,
              sortSelectValue: this.state.orderby,
            });
          }
        }
        (e => {
          const t = document.body.querySelectorAll(O.join(',')),
            { Block: r, getProps: s, getErrorBoundaryProps: o, selector: i } = e;
          (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: s, wrappers: o }) => {
            const i = document.body.querySelectorAll(s);
            o &&
              o.length > 0 &&
              Array.prototype.filter.call(
                i,
                e =>
                  !((e, t) => Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(
                    e,
                    o,
                  ),
              ),
              L({ Block: e, containers: i, getProps: t, getErrorBoundaryProps: r });
          })({ Block: r, getProps: s, getErrorBoundaryProps: o, selector: i, wrappers: t }),
            Array.prototype.forEach.call(t, t => {
              t.addEventListener('wc-blocks_render_blocks_frontend', () => {
                (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: s, wrapper: o }) => {
                  const i = o.querySelectorAll(s);
                  L({ Block: e, containers: i, getProps: t, getErrorBoundaryProps: r });
                })({ ...e, wrapper: t });
              });
            });
        })({
          selector:
            '\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n',
          Block: Z,
          getProps: e => ({
            attributes: {
              showOrderby: 'true' === e.dataset.showOrderby,
              showLoadMore: 'true' === e.dataset.showLoadMore,
              showReviewDate: e.classList.contains('has-date'),
              showReviewerName: e.classList.contains('has-name'),
              showReviewImage: e.classList.contains('has-image'),
              showReviewRating: e.classList.contains('has-rating'),
              showReviewContent: e.classList.contains('has-content'),
              showProductName: e.classList.contains('has-product-name'),
            },
          }),
        });
      },
      9407: () => {},
      113: () => {},
      7935: () => {},
      4105: () => {},
      9836: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
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
    },
    o = {};
  function i(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return s[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = s),
    (e = []),
    (i.O = (t, r, s, o) => {
      if (!r) {
        var n = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, s, o] = e[d], a = !0, l = 0; l < r.length; l++)
            (!1 & o || n >= o) && Object.keys(i.O).every(e => i.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), o < n && (n = o));
          if (a) {
            e.splice(d--, 1);
            var c = s();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [r, s, o];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ('object' == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && 'function' == typeof e.then) return e;
      }
      var o = Object.create(null);
      i.r(o);
      var n = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & s && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), i.d(o, n), o;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 6258),
    (() => {
      var e = { 6258: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var s,
            o,
            [n, a, l] = r,
            c = 0;
          if (n.some(t => 0 !== e[t])) {
            for (s in a) i.o(a, s) && (i.m[s] = a[s]);
            if (l) var d = l(i);
          }
          for (t && t(r); c < n.length; c++) (o = n[c]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return i.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = i.O(void 0, [94], () => i(932));
  (n = i.O(n)), ((wc = void 0 === wc ? {} : wc).reviews = n);
})();
