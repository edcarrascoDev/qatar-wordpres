(() => {
  var e,
    t,
    r,
    o = {
      1495: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609),
          a = r(7723);
        const i = window.wp.blocks;
        var n = r(7104),
          s = r(5791);
        r(1227);
        const l = window.wp.blockEditor,
          c = window.wp.components;
        var m = r(6087);
        const d = window.wc.wcSettings;
        var w = r(3588),
          p = r(9019),
          u = r.n(p);
        const v = window.wp.escapeHtml,
          h = ({ error: e }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, a.__)('The following error was returned', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, v.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, a.__)('The following error was returned from the API', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, v.escapeHTML)(e)),
                      )
                    : e
                  : (0, a.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            );
        r(4974);
        const g = ({ className: e = '', error: t, isLoading: r = !1, onRetry: i }) =>
          (0, o.createElement)(
            c.Placeholder,
            {
              icon: (0, o.createElement)(n.A, { icon: w.A }),
              label: (0, a.__)('Sorry, an error occurred', 'woocommerce'),
              className: u()('wc-block-api-error', e),
            },
            (0, o.createElement)(h, { error: t }),
            i &&
              (0, o.createElement)(
                o.Fragment,
                null,
                r
                  ? (0, o.createElement)(c.Spinner, null)
                  : (0, o.createElement)(
                      c.Button,
                      { variant: 'secondary', onClick: i },
                      (0, a.__)('Retry', 'woocommerce'),
                    ),
              ),
          );
        r(113);
        const _ = ({ label: e, screenReaderLabel: t, wrapperElement: r, wrapperProps: a = {} }) => {
            let i;
            const n = null != e,
              s = null != t;
            return !n && s
              ? ((i = r || 'span'),
                (a = { ...a, className: u()(a.className, 'screen-reader-text') }),
                (0, o.createElement)(i, { ...a }, t))
              : ((i = r || m.Fragment),
                n && s && e !== t
                  ? (0, o.createElement)(
                      i,
                      { ...a },
                      (0, o.createElement)('span', { 'aria-hidden': 'true' }, e),
                      (0, o.createElement)('span', { className: 'screen-reader-text' }, t),
                    )
                  : (0, o.createElement)(i, { ...a }, e));
          },
          b = ({
            onClick: e,
            label: t = (0, a.__)('Load more', 'woocommerce'),
            screenReaderLabel: r = (0, a.__)('Load more', 'woocommerce'),
          }) =>
            (0, o.createElement)(
              'div',
              { className: 'wp-block-button wc-block-load-more wc-block-components-load-more' },
              (0, o.createElement)(
                'button',
                { className: 'wp-block-button__link', onClick: e },
                (0, o.createElement)(_, { label: t, screenReaderLabel: r }),
              ),
            ),
          y = window.wc.blocksComponents;
        r(9836);
        const f = ({ onChange: e, readOnly: t, value: r }) =>
          (0, o.createElement)(y.SortSelect, {
            className: 'wc-block-review-sort-select wc-block-components-review-sort-select',
            label: (0, a.__)('Order by', 'woocommerce'),
            onChange: e,
            options: [
              { key: 'most-recent', label: (0, a.__)('Most recent', 'woocommerce') },
              { key: 'highest-rating', label: (0, a.__)('Highest rating', 'woocommerce') },
              { key: 'lowest-rating', label: (0, a.__)('Lowest rating', 'woocommerce') },
            ],
            readOnly: t,
            screenReaderLabel: (0, a.__)('Order reviews by', 'woocommerce'),
            value: r,
          });
        var R = r(2294);
        function E(e) {
          let t,
            r,
            o,
            a = [];
          for (let i = 0; i < e.length; i++)
            (t = e.substring(i)),
              (r = t.match(/^&[a-z0-9#]+;/)),
              r ? ((o = r[0]), a.push(o), (i += o.length - 1)) : a.push(e[i]);
          return a;
        }
        const k = (e, t, r = '...') => {
            const o = (function(e, t) {
              const r = (t = t || {}).limit || 100,
                o = void 0 === t.preserveTags || t.preserveTags,
                a = void 0 !== t.wordBreak && t.wordBreak,
                i = t.suffix || '...',
                n = t.moreLink || '',
                s = t.moreText || '»',
                l = t.preserveWhiteSpace || !1,
                c = e
                  .replace(/</g, '\n<')
                  .replace(/>/g, '>\n')
                  .replace(/\n\n/g, '\n')
                  .replace(/^\n/g, '')
                  .replace(/\n$/g, '')
                  .split('\n');
              let m,
                d,
                w,
                p,
                u,
                v,
                h = 0,
                g = [],
                _ = !1;
              for (let e = 0; e < c.length; e++) {
                if (((m = c[e]), (p = l ? m : m.replace(/[ ]+/g, ' ')), !m.length)) continue;
                const t = E(p);
                if ('<' !== m[0])
                  if (h >= r) m = '';
                  else if (h + t.length >= r) {
                    if (((d = r - h), ' ' === t[d - 1]))
                      for (; d && ((d -= 1), ' ' === t[d - 1]); );
                    else (w = t.slice(d).indexOf(' ')), a || (-1 !== w ? (d += w) : (d = m.length));
                    (m = t.slice(0, d).join('') + i),
                      n && (m += '<a href="' + n + '" style="display:inline">' + s + '</a>'),
                      (h = r),
                      (_ = !0);
                  } else h += t.length;
                else if (o) {
                  if (h >= r)
                    if (((u = m.match(/[a-zA-Z]+/)), (v = u ? u[0] : ''), v))
                      if ('</' !== m.substring(0, 2)) g.push(v), (m = '');
                      else {
                        for (; g[g.length - 1] !== v && g.length; ) g.pop();
                        g.length && (m = ''), g.pop();
                      }
                    else m = '';
                } else m = '';
                c[e] = m;
              }
              return { html: c.join('\n').replace(/\n/g, ''), more: _ };
            })(e, { suffix: r, limit: t });
            return o.html;
          },
          O = (e, t, r) => (t <= r ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e),
          S = (e, t, r, o) => {
            const a = ((e, t, r) => {
              let o = { start: 0, middle: 0, end: e.length };
              for (; o.start <= o.end; )
                (o.middle = Math.floor((o.start + o.end) / 2)),
                  (t.innerHTML = k(e, o.middle)),
                  (o = O(o, t.clientHeight, r));
              return o.middle;
            })(e, t, r);
            return k(e, a - o.length, o);
          },
          T = {
            className: 'read-more-content',
            ellipsis: '&hellip;',
            lessText: (0, a.__)('Read less', 'woocommerce'),
            maxLines: 3,
            moreText: (0, a.__)('Read more', 'woocommerce'),
          };
        class C extends m.Component {
          constructor(e) {
            super(e),
              (0, R.A)(this, 'reviewSummary', void 0),
              (0, R.A)(this, 'reviewContent', void 0),
              (this.state = {
                isExpanded: !1,
                clampEnabled: null,
                content: e.children,
                summary: '.',
              }),
              (this.reviewContent = (0, m.createRef)()),
              (this.reviewSummary = (0, m.createRef)()),
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
                o = this.reviewContent.current.clientHeight + 1 > r;
              this.setState({ clampEnabled: o }),
                o &&
                  this.setState({
                    summary: S(
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
              { className: t, lessText: r, moreText: a } = this.props,
              i = e ? r : a;
            if (i)
              return (0, o.createElement)(
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
              { content: t, summary: r, clampEnabled: a, isExpanded: i } = this.state;
            return t
              ? !1 === a
                ? (0, o.createElement)(
                    'div',
                    { className: e },
                    (0, o.createElement)('div', { ref: this.reviewContent }, t),
                  )
                : (0, o.createElement)(
                    'div',
                    { className: e },
                    (!i || null === a) &&
                      (0, o.createElement)('div', {
                        ref: this.reviewSummary,
                        'aria-hidden': i,
                        dangerouslySetInnerHTML: { __html: r },
                      }),
                    (i || null === a) &&
                      (0, o.createElement)(
                        'div',
                        { ref: this.reviewContent, 'aria-hidden': !i },
                        t,
                      ),
                    this.getButton(),
                  )
              : null;
          }
        }
        (0, R.A)(C, 'defaultProps', T);
        const P = C;
        r(7935);
        const A = ({ attributes: e, review: t = {} }) => {
          const {
              imageType: r,
              showReviewDate: i,
              showReviewerName: n,
              showReviewImage: s,
              showReviewRating: l,
              showReviewContent: c,
              showProductName: m,
            } = e,
            { rating: d } = t,
            w = !(Object.keys(t).length > 0),
            p = Number.isFinite(d) && l;
          return (0, o.createElement)(
            'li',
            {
              className: u()(
                'wc-block-review-list-item__item',
                'wc-block-components-review-list-item__item',
                { 'is-loading': w, 'wc-block-components-review-list-item__item--has-image': s },
              ),
              'aria-hidden': w,
            },
            (m || i || n || s || p) &&
              (0, o.createElement)(
                'div',
                {
                  className:
                    'wc-block-review-list-item__info wc-block-components-review-list-item__info',
                },
                s &&
                  (function(e, t, r) {
                    var i, n;
                    return r || !e
                      ? (0, o.createElement)('div', {
                          className:
                            'wc-block-review-list-item__image wc-block-components-review-list-item__image',
                        })
                      : (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__image wc-block-components-review-list-item__image',
                          },
                          'product' === t
                            ? (0, o.createElement)('img', {
                                'aria-hidden': 'true',
                                alt:
                                  (null === (i = e.product_image) || void 0 === i
                                    ? void 0
                                    : i.alt) || '',
                                src:
                                  (null === (n = e.product_image) || void 0 === n
                                    ? void 0
                                    : n.thumbnail) || '',
                              })
                            : (0, o.createElement)('img', {
                                'aria-hidden': 'true',
                                alt: '',
                                src: e.reviewer_avatar_urls[96] || '',
                              }),
                          e.verified &&
                            (0, o.createElement)(
                              'div',
                              {
                                className:
                                  'wc-block-review-list-item__verified wc-block-components-review-list-item__verified',
                                title: (0, a.__)('Verified buyer', 'woocommerce'),
                              },
                              (0, a.__)('Verified buyer', 'woocommerce'),
                            ),
                        );
                  })(t, r, w),
                (m || n || p || i) &&
                  (0, o.createElement)(
                    'div',
                    {
                      className:
                        'wc-block-review-list-item__meta wc-block-components-review-list-item__meta',
                    },
                    p &&
                      (function(e) {
                        const { rating: t } = e,
                          r = { width: (t / 5) * 100 + '%' },
                          i = (0,
                          a.sprintf) /* translators: %f is referring to the average rating value */(
                            /* translators: %f is referring to the average rating value */
                            (0, a.__)('Rated %f out of 5', 'woocommerce'),
                            t,
                          ),
                          n = {
                            __html: (0,
                            a.sprintf) /* translators: %s is referring to the average rating value */(
                              /* translators: %s is referring to the average rating value */
                              (0, a.__)('Rated %s out of 5', 'woocommerce'),
                              (0, a.sprintf)('<strong class="rating">%f</strong>', t),
                            ),
                          };
                        return (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__rating wc-block-components-review-list-item__rating',
                          },
                          (0, o.createElement)(
                            'div',
                            {
                              className:
                                'wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars',
                              role: 'img',
                              'aria-label': i,
                            },
                            (0, o.createElement)('span', { style: r, dangerouslySetInnerHTML: n }),
                          ),
                        );
                      })(t),
                    m &&
                      (function(e) {
                        return (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__product wc-block-components-review-list-item__product',
                          },
                          (0, o.createElement)('a', {
                            href: e.product_permalink,
                            dangerouslySetInnerHTML: { __html: e.product_name },
                          }),
                        );
                      })(t),
                    n &&
                      (function(e) {
                        const { reviewer: t = '' } = e;
                        return (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__author wc-block-components-review-list-item__author',
                          },
                          t,
                        );
                      })(t),
                    i &&
                      (function(e) {
                        const { date_created: t, formatted_date_created: r } = e;
                        return (0, o.createElement)(
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
                return (0, o.createElement)(
                  P,
                  {
                    maxLines: 10,
                    moreText: (0, a.__)('Read full review', 'woocommerce'),
                    lessText: (0, a.__)('Hide full review', 'woocommerce'),
                    className:
                      'wc-block-review-list-item__text wc-block-components-review-list-item__text',
                  },
                  (0, o.createElement)('div', {
                    dangerouslySetInnerHTML: { __html: e.review || '' },
                  }),
                );
              })(t),
          );
        };
        r(4105);
        const L = ({ attributes: e, reviews: t }) => {
          const r = (0, d.getSetting)('showAvatars', !0),
            a = (0, d.getSetting)('reviewRatingsEnabled', !0),
            i = (r || 'product' === e.imageType) && e.showReviewImage,
            n = a && e.showReviewRating,
            s = { ...e, showReviewImage: i, showReviewRating: n };
          return (0, o.createElement)(
            'ul',
            { className: 'wc-block-review-list wc-block-components-review-list' },
            0 === t.length
              ? (0, o.createElement)(A, { attributes: s })
              : t.map((e, t) =>
                  (0, o.createElement)(A, { key: e.id || t, attributes: s, review: e }),
                ),
          );
        };
        var N = r(923),
          x = r.n(N);
        const M = window.wp.apiFetch;
        var I = r.n(M);
        const j = e => {
            const {
              className: t,
              categoryIds: r,
              productId: o,
              showReviewDate: a,
              showReviewerName: i,
              showReviewContent: n,
              showProductName: s,
              showReviewImage: l,
              showReviewRating: c,
            } = e;
            let m = 'wc-block-all-reviews';
            return (
              o && (m = 'wc-block-reviews-by-product'),
              Array.isArray(r) && (m = 'wc-block-reviews-by-category'),
              u()(m, t, {
                'has-image': l,
                'has-name': i,
                'has-date': a,
                'has-rating': c,
                'has-content': n,
                'has-product-name': s,
              })
            );
          },
          D = e => {
            const {
                categoryIds: t,
                imageType: r,
                orderby: o,
                productId: a,
                reviewsOnPageLoad: i,
                reviewsOnLoadMore: n,
                showLoadMore: s,
                showOrderby: l,
              } = e,
              c = {
                'data-image-type': r,
                'data-orderby': o,
                'data-reviews-on-page-load': i,
                'data-reviews-on-load-more': n,
                'data-show-load-more': s,
                'data-show-orderby': l,
              };
            return (
              a && (c['data-product-id'] = a),
              Array.isArray(t) && (c['data-category-ids'] = t.join(',')),
              c
            );
          };
        class B extends m.Component {
          render() {
            const {
              attributes: e,
              error: t,
              isLoading: r,
              noReviewsPlaceholder: i,
              reviews: n,
              totalReviews: s,
            } = this.props;
            if (t)
              return (0, o.createElement)(g, {
                className: 'wc-block-featured-product-error',
                error: t,
                isLoading: r,
              });
            if (0 === n.length && !r) return (0, o.createElement)(i, { attributes: e });
            const l = (0, d.getSetting)('reviewRatingsEnabled', !0);
            return (0, o.createElement)(
              c.Disabled,
              null,
              e.showOrderby &&
                l &&
                (0, o.createElement)(f, { readOnly: !0, value: e.orderby, onChange: () => null }),
              (0, o.createElement)(L, { attributes: e, reviews: n }),
              e.showLoadMore &&
                s > n.length &&
                (0, o.createElement)(b, {
                  screenReaderLabel: (0, a.__)('Load more reviews', 'woocommerce'),
                  onClick: () => null,
                }),
            );
          }
        }
        const F = (e => {
            class t extends m.Component {
              constructor(...e) {
                super(...e),
                  (0, R.A)(this, 'isPreview', !!this.props.attributes.previewReviews),
                  (0, R.A)(
                    this,
                    'delayedAppendReviews',
                    this.props.delayFunction(this.appendReviews),
                  ),
                  (0, R.A)(this, 'isMounted', !1),
                  (0, R.A)(this, 'state', {
                    error: null,
                    loading: !0,
                    reviews: this.isPreview ? this.props.attributes.previewReviews : [],
                    totalReviews: this.isPreview ? this.props.attributes.previewReviews.length : 0,
                  }),
                  (0, R.A)(this, 'setError', async e => {
                    if (!this.isMounted) return;
                    const { onReviewsLoadError: t } = this.props,
                      r = await (async e => {
                        if (!('json' in e))
                          return { message: e.message, type: e.type || 'general' };
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
                  !x()(e.categoryIds, t.categoryIds)
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
                    orderby: o,
                    productId: a,
                    reviewsToDisplay: i,
                  } = this.props,
                  n = { order: r, orderby: o, per_page: i - e, offset: e };
                if (t) {
                  const e = Array.isArray(t) ? t : JSON.parse(t);
                  n.category_id = Array.isArray(e) ? e.join(',') : e;
                }
                return a && (n.product_id = a), n;
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
                  o = Math.min(r, t) - e.length;
                return (
                  this.setState({ loading: !0, reviews: e.concat(Array(o).fill({})) }),
                  ((a = this.getArgs(e.length)),
                  I()({
                    path:
                      '/wc/store/v1/products/reviews?' +
                      Object.entries(a)
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
                var a;
              }
              render() {
                const { reviewsToDisplay: t } = this.props,
                  { error: r, loading: a, reviews: i, totalReviews: n } = this.state;
                return (0, o.createElement)(e, {
                  ...this.props,
                  error: r,
                  isLoading: a,
                  reviews: i.slice(0, t),
                  totalReviews: n,
                });
              }
            }
            (0, R.A)(t, 'defaultProps', {
              delayFunction: e => e,
              onReviewsAppended: () => {},
              onReviewsLoadError: () => {},
              onReviewsReplaced: () => {},
            });
            const { displayName: r = e.name || 'Component' } = e;
            return (t.displayName = `WithReviews( ${r} )`), t;
          })(B),
          H = ({ attributes: e, icon: t, name: r, noReviewsPlaceholder: i }) => {
            const {
                categoryIds: n,
                productId: s,
                reviewsOnPageLoad: m,
                showProductName: w,
                showReviewDate: p,
                showReviewerName: u,
                showReviewContent: v,
                showReviewImage: h,
                showReviewRating: g,
              } = e,
              { order: _, orderby: b } = (e => {
                if ((0, d.getSetting)('reviewRatingsEnabled', !0)) {
                  if ('lowest-rating' === e) return { order: 'asc', orderby: 'rating' };
                  if ('highest-rating' === e) return { order: 'desc', orderby: 'rating' };
                }
                return { order: 'desc', orderby: 'date_gmt' };
              })(e.orderby),
              y = !(v || g || p || u || h || w),
              f = (0, l.useBlockProps)({ className: j(e) });
            return y
              ? (0, o.createElement)(
                  c.Placeholder,
                  { icon: t, label: r },
                  (0, a.__)(
                    'The content for this block is hidden due to block settings.',
                    'woocommerce',
                  ),
                )
              : (0, o.createElement)(
                  'div',
                  { ...f },
                  (0, o.createElement)(F, {
                    attributes: e,
                    categoryIds: n,
                    delayFunction: e =>
                      ((e, t, r) => {
                        let o,
                          a = null;
                        const i = (...t) => {
                          (a = t),
                            o && clearTimeout(o),
                            (o = setTimeout(() => {
                              (o = null), a && e(...a);
                            }, 400));
                        };
                        return (
                          (i.flush = () => {
                            o && a && (e(...a), clearTimeout(o), (o = null));
                          }),
                          i
                        );
                      })(e),
                    noReviewsPlaceholder: i,
                    orderby: b,
                    order: _,
                    productId: s,
                    reviewsToDisplay: m,
                  }),
                );
          },
          G = () =>
            (0, o.createElement)(
              c.Placeholder,
              {
                className: 'wc-block-all-reviews',
                icon: (0, o.createElement)(n.A, {
                  icon: s.A,
                  className: 'block-editor-block-icon',
                }),
                label: (0, a.__)('All Reviews', 'woocommerce'),
              },
              (0, a.__)(
                'This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.',
                'woocommerce',
              ),
            ),
          W = ({ attributes: e, setAttributes: t }) =>
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                l.InspectorControls,
                { key: 'inspector' },
                (0, o.createElement)(
                  c.PanelBody,
                  { title: (0, a.__)('Content', 'woocommerce') },
                  (0, o.createElement)(c.ToggleControl, {
                    label: (0, a.__)('Product name', 'woocommerce'),
                    checked: e.showProductName,
                    onChange: () => t({ showProductName: !e.showProductName }),
                  }),
                  ((e, t) => {
                    const r = (0, d.getSetting)('showAvatars', !0),
                      i = (0, d.getSetting)('reviewRatingsEnabled', !0);
                    return (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Product rating', 'woocommerce'),
                        checked: e.showReviewRating,
                        onChange: () => t({ showReviewRating: !e.showReviewRating }),
                      }),
                      e.showReviewRating &&
                        !i &&
                        (0, o.createElement)(
                          c.Notice,
                          { className: 'wc-block-base-control-notice', isDismissible: !1 },
                          (0, m.createInterpolateElement)(
                            (0, a.__)(
                              'Product rating is disabled in your <a>store settings</a>.',
                              'woocommerce',
                            ),
                            {
                              a: (0, o.createElement)('a', {
                                href: (0, d.getAdminLink)(
                                  'admin.php?page=wc-settings&tab=products',
                                ),
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }),
                            },
                          ),
                        ),
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Reviewer name', 'woocommerce'),
                        checked: e.showReviewerName,
                        onChange: () => t({ showReviewerName: !e.showReviewerName }),
                      }),
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Image', 'woocommerce'),
                        checked: e.showReviewImage,
                        onChange: () => t({ showReviewImage: !e.showReviewImage }),
                      }),
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Review date', 'woocommerce'),
                        checked: e.showReviewDate,
                        onChange: () => t({ showReviewDate: !e.showReviewDate }),
                      }),
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Review content', 'woocommerce'),
                        checked: e.showReviewContent,
                        onChange: () => t({ showReviewContent: !e.showReviewContent }),
                      }),
                      e.showReviewImage &&
                        (0, o.createElement)(
                          o.Fragment,
                          null,
                          (0, o.createElement)(
                            c.__experimentalToggleGroupControl,
                            {
                              label: (0, a.__)('Review image', 'woocommerce'),
                              value: e.imageType,
                              onChange: e => t({ imageType: e }),
                            },
                            (0, o.createElement)(c.__experimentalToggleGroupControlOption, {
                              value: 'reviewer',
                              label: (0, a.__)('Reviewer photo', 'woocommerce'),
                            }),
                            (0, o.createElement)(c.__experimentalToggleGroupControlOption, {
                              value: 'product',
                              label: (0, a.__)('Product', 'woocommerce'),
                            }),
                          ),
                          'reviewer' === e.imageType &&
                            !r &&
                            (0, o.createElement)(
                              c.Notice,
                              { className: 'wc-block-base-control-notice', isDismissible: !1 },
                              (0, m.createInterpolateElement)(
                                (0, a.__)(
                                  'Reviewer photo is disabled in your <a>site settings</a>.',
                                  'woocommerce',
                                ),
                                {
                                  a: (0, o.createElement)('a', {
                                    href: (0, d.getAdminLink)('options-discussion.php'),
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                  }),
                                },
                              ),
                            ),
                        ),
                    );
                  })(e, t),
                ),
                (0, o.createElement)(
                  c.PanelBody,
                  { title: (0, a.__)('List Settings', 'woocommerce') },
                  ((e, t) =>
                    (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Order by', 'woocommerce'),
                        checked: e.showOrderby,
                        onChange: () => t({ showOrderby: !e.showOrderby }),
                      }),
                      (0, o.createElement)(c.SelectControl, {
                        label: (0, a.__)('Order Product Reviews by', 'woocommerce'),
                        value: e.orderby,
                        options: [
                          { label: 'Most recent', value: 'most-recent' },
                          { label: 'Highest Rating', value: 'highest-rating' },
                          { label: 'Lowest Rating', value: 'lowest-rating' },
                        ],
                        onChange: e => t({ orderby: e }),
                      }),
                      (0, o.createElement)(c.RangeControl, {
                        label: (0, a.__)('Starting Number of Reviews', 'woocommerce'),
                        value: e.reviewsOnPageLoad,
                        onChange: e => t({ reviewsOnPageLoad: e }),
                        max: 20,
                        min: 1,
                      }),
                      (0, o.createElement)(c.ToggleControl, {
                        label: (0, a.__)('Load more', 'woocommerce'),
                        checked: e.showLoadMore,
                        onChange: () => t({ showLoadMore: !e.showLoadMore }),
                      }),
                      e.showLoadMore &&
                        (0, o.createElement)(c.RangeControl, {
                          label: (0, a.__)('Load More Reviews', 'woocommerce'),
                          value: e.reviewsOnLoadMore,
                          onChange: e => t({ reviewsOnLoadMore: e }),
                          max: 20,
                          min: 1,
                        }),
                    ))(e, t),
                ),
              ),
              (0, o.createElement)(H, {
                attributes: e,
                icon: (0, o.createElement)(n.A, {
                  icon: s.A,
                  className: 'block-editor-block-icon',
                }),
                name: (0, a.__)('All Reviews', 'woocommerce'),
                noReviewsPlaceholder: G,
              }),
            );
        var U, J, $, z, V, q, Y, Z, K, Q;
        const X = (0, d.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          ee =
            (X.pluginUrl,
            X.pluginUrl,
            X.buildPhase,
            null === (U = d.STORE_PAGES.shop) || void 0 === U || U.permalink,
            null === (J = d.STORE_PAGES.checkout) || void 0 === J || J.id,
            null === ($ = d.STORE_PAGES.checkout) || void 0 === $ || $.permalink,
            null === (z = d.STORE_PAGES.privacy) || void 0 === z || z.permalink,
            null === (V = d.STORE_PAGES.privacy) || void 0 === V || V.title,
            null === (q = d.STORE_PAGES.terms) || void 0 === q || q.permalink,
            null === (Y = d.STORE_PAGES.terms) || void 0 === Y || Y.title,
            null === (Z = d.STORE_PAGES.cart) || void 0 === Z || Z.id,
            null === (K = d.STORE_PAGES.cart) || void 0 === K || K.permalink,
            null !== (Q = d.STORE_PAGES.myaccount) && void 0 !== Q && Q.permalink
              ? d.STORE_PAGES.myaccount.permalink
              : (0, d.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, d.getSetting)('localPickupEnabled', !1),
            (0, d.getSetting)('countries', {})),
          te = (0, d.getSetting)('countryData', {}),
          re =
            (Object.fromEntries(
              Object.keys(te)
                .filter(e => !0 === te[e].allowBilling)
                .map(e => [e, ee[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(te)
                .filter(e => !0 === te[e].allowBilling)
                .map(e => [e, te[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(te)
                .filter(e => !0 === te[e].allowShipping)
                .map(e => [e, ee[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(te)
                .filter(e => !0 === te[e].allowShipping)
                .map(e => [e, te[e].states || []]),
            ),
            Object.fromEntries(Object.keys(te).map(e => [e, te[e].locale || []])),
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
          oe =
            ((0, d.getSetting)('addressFieldsLocations', re).address,
            (0, d.getSetting)('addressFieldsLocations', re).contact,
            (0, d.getSetting)('addressFieldsLocations', re).order,
            (0, d.getSetting)('additionalOrderFields', {}),
            (0, d.getSetting)('additionalContactFields', {}),
            (0, d.getSetting)('additionalAddressFields', {}),
            {
              attributes: {
                editMode: !1,
                imageType: 'reviewer',
                orderby: 'most-recent',
                reviewsOnLoadMore: 10,
                reviewsOnPageLoad: 10,
                showLoadMore: !0,
                showOrderby: !0,
                showReviewDate: !0,
                showReviewerName: !0,
                showReviewImage: !0,
                showReviewRating: !0,
                showReviewContent: !0,
                previewReviews: [
                  {
                    id: 1,
                    date_created: '2019-07-15T17:05:04',
                    formatted_date_created: (0, a.__)('July 15, 2019', 'woocommerce'),
                    date_created_gmt: '2019-07-15T15:05:04',
                    product_id: 0,
                    product_name: (0, a.__)('WordPress Pennant', 'woocommerce'),
                    product_permalink: '#',
                    /* translators: An example person name used for the block previews. */
                    reviewer: (0, a.__)('Alice', 'woocommerce'),
                    review: `<p>${(0, a.__)(
                      "I bought this product last week and I'm very happy with it.",
                      'woocommerce',
                    )}</p>\n`,
                    reviewer_avatar_urls: { 48: X.defaultAvatar, 96: X.defaultAvatar },
                    rating: 5,
                    verified: !0,
                  },
                  {
                    id: 2,
                    date_created: '2019-07-12T12:39:39',
                    formatted_date_created: (0, a.__)('July 12, 2019', 'woocommerce'),
                    date_created_gmt: '2019-07-12T10:39:39',
                    product_id: 0,
                    product_name: (0, a.__)('WordPress Pennant', 'woocommerce'),
                    product_permalink: '#',
                    /* translators: An example person name used for the block previews. */
                    reviewer: (0, a.__)('Bob', 'woocommerce'),
                    review: `<p>${(0, a.__)(
                      'This product is awesome, I love it!',
                      'woocommerce',
                    )}</p>\n`,
                    reviewer_avatar_urls: { 48: X.defaultAvatar, 96: X.defaultAvatar },
                    rating: null,
                    verified: !1,
                  },
                ],
              },
            });
        (0, i.registerBlockType)('woocommerce/all-reviews', {
          apiVersion: 2,
          title: (0, a.__)('All Reviews', 'woocommerce'),
          icon: {
            src: (0, o.createElement)(n.A, {
              icon: s.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          category: 'woocommerce',
          keywords: [(0, a.__)('WooCommerce', 'woocommerce')],
          description: (0, a.__)('Show a list of all product reviews.', 'woocommerce'),
          supports: { html: !1, color: { background: !1 }, typography: { fontSize: !0 } },
          example: { ...oe, attributes: { ...oe.attributes, showProductName: !0 } },
          attributes: {
            editMode: { type: 'boolean', default: !0 },
            imageType: { type: 'string', default: 'reviewer' },
            orderby: { type: 'string', default: 'most-recent' },
            reviewsOnLoadMore: { type: 'number', default: 10 },
            reviewsOnPageLoad: { type: 'number', default: 10 },
            showLoadMore: { type: 'boolean', default: !0 },
            showOrderby: { type: 'boolean', default: !0 },
            showReviewDate: { type: 'boolean', default: !0 },
            showReviewerName: { type: 'boolean', default: !0 },
            showReviewImage: { type: 'boolean', default: !0 },
            showReviewRating: { type: 'boolean', default: !0 },
            showReviewContent: { type: 'boolean', default: !0 },
            previewReviews: { type: 'array', default: null },
            showProductName: { type: 'boolean', default: !0 },
          },
          transforms: {
            from: [
              {
                type: 'block',
                blocks: ['core/legacy-widget'],
                isMatch: ({ idBase: e, instance: t }) =>
                  'woocommerce_recent_reviews' === e && !(null == t || !t.raw),
                transform: ({ instance: e }) =>
                  (0, i.createBlock)('woocommerce/all-reviews', {
                    reviewsOnPageLoad: e.raw.number,
                    imageType: 'product',
                    showLoadMore: !1,
                    showOrderby: !1,
                    showReviewDate: !1,
                    showReviewContent: !1,
                  }),
              },
            ],
          },
          edit: e => {
            const t = (0, l.useBlockProps)();
            return (0, o.createElement)('div', { ...t }, (0, o.createElement)(W, { ...e }));
          },
          save: ({ attributes: e }) =>
            (0, o.createElement)('div', { ...l.useBlockProps.save({ className: j(e) }), ...D(e) }),
        });
      },
      113: () => {},
      7935: () => {},
      4105: () => {},
      9836: () => {},
      1227: () => {},
      4974: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
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
    a = {};
  function i(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = o),
    (e = []),
    (i.O = (t, r, o, a) => {
      if (!r) {
        var n = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, o, a] = e[m], s = !0, l = 0; l < r.length; l++)
            (!1 & a || n >= a) && Object.keys(i.O).every(e => i.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((s = !1), a < n && (n = a));
          if (s) {
            e.splice(m--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > a; m--) e[m] = e[m - 1];
      e[m] = [r, o, a];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var a = Object.create(null);
      i.r(a);
      var n = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var s = 2 & o && e; 'object' == typeof s && !~t.indexOf(s); s = r(s))
        Object.getOwnPropertyNames(s).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), i.d(a, n), a;
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
    (i.j = 848),
    (() => {
      var e = { 848: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            a,
            [n, s, l] = r,
            c = 0;
          if (n.some(t => 0 !== e[t])) {
            for (o in s) i.o(s, o) && (i.m[o] = s[o]);
            if (l) var m = l(i);
          }
          for (t && t(r); c < n.length; c++) (a = n[c]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return i.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = i.O(void 0, [94], () => i(1495));
  (n = i.O(n)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['all-reviews'] = n);
})();
