(() => {
  var e,
    t,
    o,
    r,
    n,
    c = {
      1579: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => m, default: () => d });
        var r = o(1609),
          n = o(9019),
          c = o.n(n),
          a = o(2796),
          l = o(3566),
          s = o(7723),
          i = o(1616);
        const m = e => {
            const { textAlign: t } = e,
              o = (0, l.p)(e),
              { product: n } = (0, a.useProductDataContext)(),
              i = c()(o.className, 'wc-block-components-product-average-rating', {
                [`has-text-align-${t}`]: t,
              });
            return (0, r.createElement)(
              'div',
              { className: i, style: o.style },
              Number(n.average_rating) > 0
                ? n.average_rating
                : (0, s.__)('No ratings', 'woocommerce'),
            );
          },
          d = (0, i.withProductDataContext)(m);
      },
      4078: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => _, default: () => b });
        var r = o(1609),
          n = o(9019),
          c = o.n(n),
          a = o(7723),
          l = o(3603),
          s = o(4436),
          i = o(3566),
          m = o(8537),
          d = o(812),
          u = o(5703),
          p = o(2796),
          g = o(1616);
        o(1546);
        const h = ({ product: e, className: t, style: o }) => {
            const {
                id: n,
                permalink: i,
                add_to_cart: p,
                has_options: g,
                is_purchasable: h,
                is_in_stock: w,
              } = e,
              { dispatchStoreEvent: _ } = (0, l.y)(),
              { cartQuantity: b, addingToCart: E, addToCart: k } = (0, s.R)(n),
              y = Number.isFinite(b) && b > 0,
              v = !g && h && w,
              f = (0, m.decodeEntities)((null == p ? void 0 : p.description) || ''),
              x = y
                ? (0, a.sprintf) /* translators: %s number of products in cart. */(
                    /* translators: %s number of products in cart. */
                    (0, a._n)('%d in cart', '%d in cart', b, 'woocommerce'),
                    b,
                  )
                : (0, m.decodeEntities)(
                    (null == p ? void 0 : p.text) || (0, a.__)('Add to cart', 'woocommerce'),
                  ),
              C = v ? 'button' : 'a',
              S = {};
            return (
              v
                ? (S.onClick = async () => {
                    await k(), _('cart-add-item', { product: e });
                    const { cartRedirectAfterAdd: t } = (0, u.getSetting)('productsSettings');
                    t && (window.location.href = d.Vo);
                  })
                : ((S.href = i),
                  (S.rel = 'nofollow'),
                  (S.onClick = () => {
                    _('product-view-link', { product: e });
                  })),
              (0, r.createElement)(
                C,
                {
                  ...S,
                  'aria-label': f,
                  disabled: E,
                  className: c()(
                    t,
                    'wp-block-button__link',
                    'wp-element-button',
                    'add_to_cart_button',
                    'wc-block-components-product-button__button',
                    { loading: E, added: y },
                  ),
                  style: o,
                },
                x,
              )
            );
          },
          w = ({ className: e, style: t }) =>
            (0, r.createElement)('button', {
              className: c()(
                'wp-block-button__link',
                'wp-element-button',
                'add_to_cart_button',
                'wc-block-components-product-button__button',
                'wc-block-components-product-button__button--placeholder',
                e,
              ),
              style: t,
              disabled: !0,
            }),
          _ = e => {
            const { className: t, textAlign: o } = e,
              n = (0, i.p)(e),
              { parentClassName: a } = (0, p.useInnerBlockLayoutContext)(),
              { product: l } = (0, p.useProductDataContext)();
            return (0, r.createElement)(
              'div',
              {
                className: c()(t, 'wp-block-button', 'wc-block-components-product-button', {
                  [`${a}__product-add-to-cart`]: a,
                  [`align-${o}`]: o,
                }),
              },
              l.id
                ? (0, r.createElement)(h, { product: l, style: n.style, className: n.className })
                : (0, r.createElement)(w, { style: n.style, className: n.className }),
            );
          },
          b = (0, g.withProductDataContext)(_);
      },
      6239: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => r });
        const r = {
          showProductLink: { type: 'boolean', default: !0 },
          showSaleBadge: { type: 'boolean', default: !0 },
          saleBadgeAlign: { type: 'string', default: 'right' },
          imageSizing: { type: 'string', default: o(1281).e.SINGLE },
          productId: { type: 'number', default: 0 },
          isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
          isDescendentOfSingleProductBlock: { type: 'boolean', default: !1 },
          width: { type: 'string' },
          height: { type: 'string' },
          scale: { type: 'string', default: 'cover' },
          aspectRatio: { type: 'string' },
        };
      },
      231: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => _ });
        var r = o(1609),
          n = o(6087),
          c = o(7723),
          a = o(9019),
          l = o.n(a),
          s = o(5703),
          i = o(2796),
          m = o(3566),
          d = o(1616),
          u = o(3603),
          p = o(6809),
          g = (o(5183), o(1281));
        const h = e =>
            (0, r.createElement)('img', {
              ...e,
              src: s.PLACEHOLDER_IMG_SRC,
              alt: '',
              width: void 0,
              height: void 0,
            }),
          w = ({
            image: e,
            loaded: t,
            showFullSize: o,
            fallbackAlt: c,
            width: a,
            scale: l,
            height: s,
            aspectRatio: i,
          }) => {
            const { thumbnail: m, src: d, srcset: u, sizes: p, alt: g } = e || {},
              w = { alt: g || c, hidden: !t, src: m, ...(o && { src: d, srcSet: u, sizes: p }) },
              _ = { height: s, width: a, objectFit: l, aspectRatio: i };
            return (0, r.createElement)(
              n.Fragment,
              null,
              w.src &&
                (0, r.createElement)('img', { style: _, 'data-testid': 'product-image', ...w }),
              !e && (0, r.createElement)(h, { style: _ }),
            );
          },
          _ = (0, d.withProductDataContext)(e => {
            const {
                className: t,
                imageSizing: o = g.e.SINGLE,
                showProductLink: a = !0,
                showSaleBadge: s,
                saleBadgeAlign: d = 'right',
                height: _,
                width: b,
                scale: E,
                aspectRatio: k,
                ...y
              } = e,
              v = (0, m.p)(e),
              { parentClassName: f } = (0, i.useInnerBlockLayoutContext)(),
              { product: x, isLoading: C } = (0, i.useProductDataContext)(),
              { dispatchStoreEvent: S } = (0, u.y)();
            if (!x.id)
              return (0, r.createElement)(
                'div',
                {
                  className: l()(
                    t,
                    'wc-block-components-product-image',
                    { [`${f}__product-image`]: f },
                    v.className,
                  ),
                  style: v.style,
                },
                (0, r.createElement)(h, null),
              );
            const N = !!x.images.length,
              P = N ? x.images[0] : null,
              A = a ? 'a' : n.Fragment,
              B = (0, c.sprintf) /* translators: %s is referring to the product name */(
                /* translators: %s is referring to the product name */
                (0, c.__)('Link to %s', 'woocommerce'),
                x.name,
              ),
              T = {
                href: x.permalink,
                ...(!N && { 'aria-label': B }),
                onClick: () => {
                  S('product-view-link', { product: x });
                },
              };
            return (
              delete y.style,
              (0, r.createElement)(
                'div',
                {
                  className: l()(
                    t,
                    'wc-block-components-product-image',
                    { [`${f}__product-image`]: f },
                    v.className,
                  ),
                  style: v.style,
                },
                (0, r.createElement)(
                  A,
                  { ...(a && T) },
                  !!s && (0, r.createElement)(p.default, { align: d, ...y }),
                  (0, r.createElement)(w, {
                    fallbackAlt: x.name,
                    image: P,
                    loaded: !C,
                    showFullSize: o !== g.e.THUMBNAIL,
                    width: b,
                    height: _,
                    scale: E,
                    aspectRatio: k,
                  }),
                ),
              )
            );
          });
      },
      1281: (e, t, o) => {
        'use strict';
        o.d(t, { e: () => r });
        let r = (function(e) {
          return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
        })({});
      },
      2519: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => d, default: () => u });
        var r = o(1609),
          n = o(9019),
          c = o.n(n),
          a = o(6042),
          l = o(8529),
          s = o(2796),
          i = o(3566),
          m = o(1616);
        const d = e => {
            var t, o;
            const { className: n, textAlign: m, isDescendentOfSingleProductTemplate: d } = e,
              u = (0, i.p)(e),
              { parentName: p, parentClassName: g } = (0, s.useInnerBlockLayoutContext)(),
              { product: h } = (0, s.useProductDataContext)(),
              w = 'woocommerce/all-products' === p,
              _ = c()('wc-block-components-product-price', n, u.className, {
                [`${g}__product-price`]: g,
              });
            if (!h.id && !d) {
              const e = (0, r.createElement)(a.A, { align: m, className: _ });
              return w
                ? (0, r.createElement)(
                    'div',
                    { className: 'wp-block-woocommerce-product-price' },
                    e,
                  )
                : e;
            }
            const b = h.prices,
              E = d
                ? (0, l.getCurrencyFromPriceResponse)()
                : (0, l.getCurrencyFromPriceResponse)(b),
              k = '5000',
              y = b.price !== b.regular_price,
              v = c()({
                [`${g}__product-price__value`]: g,
                [`${g}__product-price__value--on-sale`]: y,
              }),
              f = (0, r.createElement)(a.A, {
                align: m,
                className: _,
                style: u.style,
                regularPriceStyle: u.style,
                priceStyle: u.style,
                priceClassName: v,
                currency: E,
                price: d ? k : b.price,
                minPrice:
                  null == b || null === (t = b.price_range) || void 0 === t ? void 0 : t.min_amount,
                maxPrice:
                  null == b || null === (o = b.price_range) || void 0 === o ? void 0 : o.max_amount,
                regularPrice: d ? k : b.regular_price,
                regularPriceClassName: c()({ [`${g}__product-price__regular`]: g }),
              });
            return w
              ? (0, r.createElement)('div', { className: 'wp-block-woocommerce-product-price' }, f)
              : f;
          },
          u = e =>
            e.isDescendentOfSingleProductTemplate
              ? (0, r.createElement)(d, { ...e })
              : (0, m.withProductDataContext)(d)(e);
      },
      8614: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => p, default: () => g });
        var r = o(1609),
          n = o(7723),
          c = o(9019),
          a = o.n(c),
          l = o(2796),
          s = o(3566),
          i = o(1616),
          m = o(3993),
          d = o(6427);
        const u = e => {
            const { reviews: t } = e,
              o = t
                ? (0,
                  n.sprintf) /* translators: %s is referring to the total of reviews for a product */(
                    /* translators: %s is referring to the total of reviews for a product */
                    (0, n._n)('(%s customer review)', '(%s customer reviews)', t, 'woocommerce'),
                    t,
                  )
                : (0, n.__)('(X customer reviews)', 'woocommerce');
            return (0, r.createElement)(
              'span',
              { className: 'wc-block-components-product-rating-counter__reviews_count' },
              (0, r.createElement)(d.Disabled, null, (0, r.createElement)('a', { href: '/' }, o)),
            );
          },
          p = e => {
            const { textAlign: t, shouldDisplayMockedReviewsWhenProductHasNoReviews: o } = e,
              n = (0, s.p)(e),
              { parentClassName: c } = (0, l.useInnerBlockLayoutContext)(),
              { product: i } = (0, l.useProductDataContext)(),
              d = (e => {
                const t = (0, m.isNumber)(e.review_count)
                  ? e.review_count
                  : parseInt(e.review_count, 10);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(i),
              p = a()(n.className, 'wc-block-components-product-rating-counter', {
                [`${c}__product-rating`]: c,
                [`has-text-align-${t}`]: t,
              });
            if (d || o)
              return (0, r.createElement)(
                'div',
                { className: p, style: n.style },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-product-rating-counter__container' },
                  (0, r.createElement)(u, { reviews: d }),
                ),
              );
          },
          g = (0, i.withProductDataContext)(p);
      },
      9549: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => g, default: () => h });
        var r = o(1609),
          n = o(7723),
          c = o(9019),
          a = o.n(c),
          l = o(2796),
          s = o(3566),
          i = o(1616),
          m = o(3993);
        o(7195);
        const d = e => ({ width: (e / 5) * 100 + '%' }),
          u = ({ parentClassName: e }) => {
            const t = d(0);
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-rating-stars__norating-container',
                  `${e}-product-rating-stars__norating-container`,
                ),
              },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-product-rating-stars__norating', role: 'img' },
                (0, r.createElement)('span', { style: t }),
              ),
              (0, r.createElement)('span', null, (0, n.__)('No Reviews', 'woocommerce')),
            );
          },
          p = e => {
            const { rating: t, reviews: o, parentClassName: c } = e,
              l = d(t),
              s = (0, n.sprintf) /* translators: %f is referring to the average rating value */(
                /* translators: %f is referring to the average rating value */
                (0, n.__)('Rated %f out of 5', 'woocommerce'),
                t,
              ),
              i = {
                __html: (0,
                n.sprintf) /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */(
                  /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                  (0, n._n)(
                    'Rated %1$s out of 5 based on %2$s customer rating',
                    'Rated %1$s out of 5 based on %2$s customer ratings',
                    o,
                    'woocommerce',
                  ),
                  (0, n.sprintf)('<strong class="rating">%f</strong>', t),
                  (0, n.sprintf)('<span class="rating">%d</span>', o),
                ),
              };
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-rating-stars__stars',
                  `${c}__product-rating-stars__stars`,
                ),
                role: 'img',
                'aria-label': s,
              },
              (0, r.createElement)('span', { style: l, dangerouslySetInnerHTML: i }),
            );
          },
          g = e => {
            const { textAlign: t, shouldDisplayMockedReviewsWhenProductHasNoReviews: o } = e,
              n = (0, s.p)(e),
              { parentClassName: c } = (0, l.useInnerBlockLayoutContext)(),
              { product: i } = (0, l.useProductDataContext)(),
              d = (e => {
                const t = parseFloat(e.average_rating);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(i),
              g = (e => {
                const t = (0, m.isNumber)(e.review_count)
                  ? e.review_count
                  : parseInt(e.review_count, 10);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(i),
              h = a()(n.className, 'wc-block-components-product-rating-stars', {
                [`${c}__product-rating`]: c,
                [`has-text-align-${t}`]: t,
              }),
              w = o ? (0, r.createElement)(u, { parentClassName: c }) : null,
              _ = g ? (0, r.createElement)(p, { rating: d, reviews: g, parentClassName: c }) : w;
            return (0, r.createElement)(
              'div',
              { className: h, style: n.style },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-product-rating-stars__container' },
                _,
              ),
            );
          },
          h = (0, i.withProductDataContext)(g);
      },
      8757: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => h, default: () => w });
        var r = o(1609),
          n = o(7723),
          c = o(9019),
          a = o.n(c),
          l = o(2796),
          s = o(3566),
          i = o(1616),
          m = o(3993);
        o(7067);
        const d = e => ({ width: (e / 5) * 100 + '%' }),
          u = ({ parentClassName: e }) => {
            const t = d(0);
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-rating__norating-container',
                  `${e}-product-rating__norating-container`,
                ),
              },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-product-rating__norating', role: 'img' },
                (0, r.createElement)('span', { style: t }),
              ),
              (0, r.createElement)('span', null, (0, n.__)('No Reviews', 'woocommerce')),
            );
          },
          p = e => {
            const { rating: t, reviews: o, parentClassName: c } = e,
              l = d(t),
              s = (0, n.sprintf) /* translators: %f is referring to the average rating value */(
                /* translators: %f is referring to the average rating value */
                (0, n.__)('Rated %f out of 5', 'woocommerce'),
                t,
              ),
              i = {
                __html: (0,
                n.sprintf) /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */(
                  /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                  (0, n._n)(
                    'Rated %1$s out of 5 based on %2$s customer rating',
                    'Rated %1$s out of 5 based on %2$s customer ratings',
                    o,
                    'woocommerce',
                  ),
                  (0, n.sprintf)('<strong class="rating">%f</strong>', t),
                  (0, n.sprintf)('<span class="rating">%d</span>', o),
                ),
              };
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-rating__stars',
                  `${c}__product-rating__stars`,
                ),
                role: 'img',
                'aria-label': s,
              },
              (0, r.createElement)('span', { style: l, dangerouslySetInnerHTML: i }),
            );
          },
          g = e => {
            const { reviews: t } = e,
              o = (0,
              n.sprintf) /* translators: %s is referring to the total of reviews for a product */(
                /* translators: %s is referring to the total of reviews for a product */
                (0, n._n)('(%s customer review)', '(%s customer reviews)', t, 'woocommerce'),
                t,
              );
            return (0, r.createElement)(
              'span',
              { className: 'wc-block-components-product-rating__reviews_count' },
              o,
            );
          },
          h = e => {
            const {
                textAlign: t,
                isDescendentOfSingleProductBlock: o,
                shouldDisplayMockedReviewsWhenProductHasNoReviews: n,
              } = e,
              c = (0, s.p)(e),
              { parentClassName: i } = (0, l.useInnerBlockLayoutContext)(),
              { product: d } = (0, l.useProductDataContext)(),
              h = (e => {
                const t = parseFloat(e.average_rating);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(d),
              w = (e => {
                const t = (0, m.isNumber)(e.review_count)
                  ? e.review_count
                  : parseInt(e.review_count, 10);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(d),
              _ = a()(c.className, 'wc-block-components-product-rating', {
                [`${i}__product-rating`]: i,
                [`has-text-align-${t}`]: t,
              }),
              b = n ? (0, r.createElement)(u, { parentClassName: i }) : null,
              E = w ? (0, r.createElement)(p, { rating: h, reviews: w, parentClassName: i }) : b;
            if (w || n)
              return (0, r.createElement)(
                'div',
                { className: _, style: c.style },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-product-rating__container' },
                  E,
                  w && o ? (0, r.createElement)(g, { reviews: w }) : null,
                ),
              );
          },
          w = (0, i.withProductDataContext)(h);
      },
      6809: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => d, default: () => u });
        var r = o(1609),
          n = o(7723),
          c = o(9019),
          a = o.n(c),
          l = o(4656),
          s = o(2796),
          i = o(3566),
          m = o(1616);
        o(6007);
        const d = e => {
            const { className: t, align: o } = e,
              c = (0, i.p)(e),
              { parentClassName: m } = (0, s.useInnerBlockLayoutContext)(),
              { product: d } = (0, s.useProductDataContext)();
            if (!((d.id && d.on_sale) || e.isDescendentOfSingleProductTemplate)) return null;
            const u =
              'string' == typeof o ? `wc-block-components-product-sale-badge--align-${o}` : '';
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-sale-badge',
                  t,
                  u,
                  { [`${m}__product-onsale`]: m },
                  c.className,
                ),
                style: c.style,
              },
              (0, r.createElement)(l.Label, {
                label: (0, n.__)('Sale', 'woocommerce'),
                screenReaderLabel: (0, n.__)('Product on sale', 'woocommerce'),
              }),
            );
          },
          u = (0, m.withProductDataContext)(d);
      },
      3975: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { default: () => d });
        var r = o(1609),
          n = o(7723),
          c = o(9019),
          a = o.n(c),
          l = o(2796),
          s = o(1616),
          i = o(3566);
        o(7663);
        const m = ({ parentClassName: e, sku: t, className: o, style: c }) =>
            (0, r.createElement)(
              'div',
              { className: a()(o, { [`${e}__product-sku`]: e }), style: c },
              (0, n.__)('SKU:', 'woocommerce'),
              ' ',
              (0, r.createElement)('strong', null, t),
            ),
          d = (0, s.withProductDataContext)(e => {
            const { className: t } = e,
              o = (0, i.p)(e),
              { parentClassName: n } = (0, l.useInnerBlockLayoutContext)(),
              { product: c } = (0, l.useProductDataContext)(),
              s = c.sku;
            return e.isDescendentOfSingleProductTemplate
              ? (0, r.createElement)(m, { parentClassName: n, className: t, sku: 'Product SKU' })
              : s
              ? (0, r.createElement)(m, {
                  className: t,
                  parentClassName: n,
                  sku: s,
                  ...(e.isDescendantOfAllProducts && {
                    className: a()(
                      t,
                      'wc-block-components-product-sku wp-block-woocommerce-product-sku',
                      o.className,
                    ),
                    style: { ...o.style },
                  }),
                })
              : null;
          });
      },
      2686: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { Block: () => m, default: () => d });
        var r = o(1609),
          n = o(7723),
          c = o(9019),
          a = o.n(c),
          l = o(2796),
          s = o(3566),
          i = o(1616);
        o(9644);
        const m = e => {
            const { className: t } = e,
              o = (0, s.p)(e),
              { parentClassName: c } = (0, l.useInnerBlockLayoutContext)(),
              { product: i } = (0, l.useProductDataContext)();
            if (!i.id) return null;
            const m = !!i.is_in_stock,
              d = i.low_stock_remaining,
              u = i.is_on_backorder;
            return (0, r.createElement)(
              'div',
              {
                className: a()(t, {
                  [`${c}__stock-indicator`]: c,
                  'wc-block-components-product-stock-indicator--in-stock': m,
                  'wc-block-components-product-stock-indicator--out-of-stock': !m,
                  'wc-block-components-product-stock-indicator--low-stock': !!d,
                  'wc-block-components-product-stock-indicator--available-on-backorder': !!u,
                  ...(e.isDescendantOfAllProducts && {
                    [o.className]: o.className,
                    'wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator': !0,
                  }),
                }),
                ...(e.isDescendantOfAllProducts && { style: o.style }),
              },
              (({
                isInStock: e = !1,
                isLowStock: t = !1,
                lowStockAmount: o = null,
                isOnBackorder: r = !1,
              }) =>
                t && null !== o
                  ? (0,
                    n.sprintf) /* translators: %d stock amount (number of items in stock for product) */(
                      /* translators: %d stock amount (number of items in stock for product) */
                      (0, n.__)('%d left in stock', 'woocommerce'),
                      o,
                    )
                  : r
                  ? (0, n.__)('Available on backorder', 'woocommerce')
                  : e
                  ? (0, n.__)('In stock', 'woocommerce')
                  : (0, n.__)('Out of stock', 'woocommerce'))({
                isInStock: m,
                isLowStock: !!d,
                lowStockAmount: d,
                isOnBackorder: u,
              }),
            );
          },
          d = (0, i.withProductDataContext)(m);
      },
      3326: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { default: () => w });
        var r = o(1609),
          n = o(9019),
          c = o.n(n),
          a = o(6087),
          l = o(6004);
        const s = e => e.replace(/<\/?[a-z][^>]*?>/gi, ''),
          i = (e, t) => e.replace(/[\s|\.\,]+$/i, '') + t;
        var m = o(9446);
        const d = ({
          source: e,
          maxLength: t = 15,
          countType: o = 'words',
          className: n = '',
          style: c = {},
        }) => {
          const d = (0, a.useMemo)(
            () =>
              ((e, t = 15, o = 'words') => {
                const r = (0, l.autop)(e);
                if ((0, m.count)(r, o) <= t) return r;
                const n = (e => {
                  const t = e.indexOf('</p>');
                  return -1 === t ? e : e.substr(0, t + 4);
                })(r);
                return (0, m.count)(n, o) <= t
                  ? n
                  : 'words' === o
                  ? ((e, t, o = '&hellip;', r = !0) => {
                      const n = s(e),
                        c = n
                          .split(' ')
                          .splice(0, t)
                          .join(' ');
                      return c === n
                        ? r
                          ? (0, l.autop)(n)
                          : n
                        : r
                        ? (0, l.autop)(i(c, o))
                        : i(c, o);
                    })(n, t)
                  : ((e, t, o = !0, r = '&hellip;', n = !0) => {
                      const c = s(e),
                        a = c.slice(0, t);
                      if (a === c) return n ? (0, l.autop)(c) : c;
                      if (o) return (0, l.autop)(i(a, r));
                      const m = a.match(/([\s]+)/g),
                        d = m ? m.length : 0,
                        u = c.slice(0, t + d);
                      return n ? (0, l.autop)(i(u, r)) : i(u, r);
                    })(n, t, 'characters_including_spaces' === o);
              })(e, t, o),
            [e, t, o],
          );
          return (0, r.createElement)(a.RawHTML, { style: c, className: n }, d);
        };
        var u = o(812),
          p = o(2796),
          g = o(3566),
          h = o(1616);
        o(7766);
        const w = (0, h.withProductDataContext)(e => {
          const { className: t } = e,
            { parentClassName: o } = (0, p.useInnerBlockLayoutContext)(),
            { product: n } = (0, p.useProductDataContext)(),
            a = (0, g.p)(e);
          if (!n)
            return (0, r.createElement)('div', {
              className: c()(t, 'wc-block-components-product-summary', {
                [`${o}__product-summary`]: o,
              }),
            });
          const l = n.short_description ? n.short_description : n.description;
          return l
            ? (0, r.createElement)(d, {
                className: c()(t, a.className, 'wc-block-components-product-summary', {
                  [`${o}__product-summary`]: o,
                }),
                source: l,
                maxLength: 150,
                countType: u.r7.wordCountType || 'words',
                style: a.style,
              })
            : null;
        });
      },
      6154: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => n });
        let r = {
          headingLevel: { type: 'number', default: 2 },
          showProductLink: { type: 'boolean', default: !0 },
          linkTarget: { type: 'string' },
          productId: { type: 'number', default: 0 },
        };
        (0, o(812).kM)() && (r = { ...r, align: { type: 'string' } });
        const n = r;
      },
      1318: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => p });
        var r = o(1609),
          n = o(9019),
          c = o.n(n),
          a = o(2796),
          l = o(812),
          s = o(1616),
          i = o(7102),
          m = o(3603),
          d = o(3566);
        o(7128);
        const u = ({ children: e, headingLevel: t, elementType: o = `h${t}`, ...n }) =>
            (0, r.createElement)(o, { ...n }, e),
          p = (0, s.withProductDataContext)(e => {
            const {
                className: t,
                headingLevel: o = 2,
                showProductLink: n = !0,
                linkTarget: s,
                align: p,
              } = e,
              g = (0, d.p)(e),
              { parentClassName: h } = (0, a.useInnerBlockLayoutContext)(),
              { product: w } = (0, a.useProductDataContext)(),
              { dispatchStoreEvent: _ } = (0, m.y)();
            return w.id
              ? (0, r.createElement)(
                  u,
                  {
                    headingLevel: o,
                    className: c()(t, g.className, 'wc-block-components-product-title', {
                      [`${h}__product-title`]: h,
                      [`wc-block-components-product-title--align-${p}`]: p && (0, l.kM)(),
                    }),
                    style: (0, l.kM)() ? g.style : {},
                  },
                  (0, r.createElement)(i.A, {
                    disabled: !n,
                    name: w.name,
                    permalink: w.permalink,
                    target: s,
                    onClick: () => {
                      _('product-view-link', { product: w });
                    },
                  }),
                )
              : (0, r.createElement)(u, {
                  headingLevel: o,
                  className: c()(t, g.className, 'wc-block-components-product-title', {
                    [`${h}__product-title`]: h,
                    [`wc-block-components-product-title--align-${p}`]: p && (0, l.kM)(),
                  }),
                  style: (0, l.kM)() ? g.style : {},
                });
          });
      },
      8585: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => i });
        var r = o(5703),
          n = o(7723),
          c = o(3993),
          a = o(812);
        const l = e => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, n.sprintf) /* translators: %s Field label. */(
                  /* translators: %s Field label. */
                  (0, n.__)('%s (optional)', 'woocommerce'),
                  e.label,
                )),
              e.priority &&
                ((0, c.isNumber)(e.priority) && (t.index = e.priority),
                (0, c.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          s = Object.entries(a.iI)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, l(t)])
                .reduce((e, [t, o]) => ((e[t] = o), e), {}),
            ])
            .reduce((e, [t, o]) => ((e[t] = o), e), {}),
          i = (e, t, o = '') => {
            const n = o && void 0 !== s[o] ? s[o] : {};
            return e
              .map(e => ({
                key: e,
                ...(r.defaultFields[e] || {}),
                ...(n[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          };
      },
      7102: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => l });
        var r = o(1609),
          n = o(8537),
          c = o(9019),
          a = o.n(c);
        o(6625);
        const l = ({
          className: e = '',
          disabled: t = !1,
          name: o,
          permalink: c = '',
          target: l,
          rel: s,
          style: i,
          onClick: m,
          ...d
        }) => {
          const u = a()('wc-block-components-product-name', e);
          if (t) {
            const e = d;
            return (0, r.createElement)('span', {
              className: u,
              ...e,
              dangerouslySetInnerHTML: { __html: (0, n.decodeEntities)(o) },
            });
          }
          return (0, r.createElement)('a', {
            className: u,
            href: c,
            target: l,
            ...d,
            dangerouslySetInnerHTML: { __html: (0, n.decodeEntities)(o) },
            style: i,
          });
        };
      },
      6042: (e, t, o) => {
        'use strict';
        o.d(t, { A: () => u });
        var r = o(1609),
          n = o(7723),
          c = o(4656),
          a = o(9019),
          l = o.n(a),
          s = o(8529),
          i = o(6087);
        o(4567);
        const m = ({
            currency: e,
            maxPrice: t,
            minPrice: o,
            priceClassName: a,
            priceStyle: i = {},
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, n.sprintf) /* translators: %1$s min price, %2$s max price */(
                  /* translators: %1$s min price, %2$s max price */
                  (0, n.__)('Price between %1$s and %2$s', 'woocommerce'),
                  (0, s.formatPrice)(o),
                  (0, s.formatPrice)(t),
                ),
              ),
              (0, r.createElement)(
                'span',
                { 'aria-hidden': !0 },
                (0, r.createElement)(c.FormattedMonetaryAmount, {
                  className: l()('wc-block-components-product-price__value', a),
                  currency: e,
                  value: o,
                  style: i,
                }),
                ' — ',
                (0, r.createElement)(c.FormattedMonetaryAmount, {
                  className: l()('wc-block-components-product-price__value', a),
                  currency: e,
                  value: t,
                  style: i,
                }),
              ),
            ),
          d = ({
            currency: e,
            regularPriceClassName: t,
            regularPriceStyle: o,
            regularPrice: a,
            priceClassName: s,
            priceStyle: i,
            price: m,
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, n.__)('Previous price:', 'woocommerce'),
              ),
              (0, r.createElement)(c.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, r.createElement)(
                    'del',
                    { className: l()('wc-block-components-product-price__regular', t), style: o },
                    e,
                  ),
                value: a,
              }),
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, n.__)('Discounted price:', 'woocommerce'),
              ),
              (0, r.createElement)(c.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, r.createElement)(
                    'ins',
                    {
                      className: l()(
                        'wc-block-components-product-price__value',
                        'is-discounted',
                        s,
                      ),
                      style: i,
                    },
                    e,
                  ),
                value: m,
              }),
            ),
          u = ({
            align: e,
            className: t,
            currency: o,
            format: n = '<price/>',
            maxPrice: a,
            minPrice: s,
            price: u,
            priceClassName: p,
            priceStyle: g,
            regularPrice: h,
            regularPriceClassName: w,
            regularPriceStyle: _,
            style: b,
          }) => {
            const E = l()(t, 'price', 'wc-block-components-product-price', {
              [`wc-block-components-product-price--align-${e}`]: e,
            });
            n.includes('<price/>') ||
              ((n = '<price/>'),
              console.error('Price formats need to include the `<price/>` tag.'));
            const k = h && u && u < h;
            let y = (0, r.createElement)('span', {
              className: l()('wc-block-components-product-price__value', p),
            });
            return (
              k
                ? (y = (0, r.createElement)(d, {
                    currency: o,
                    price: u,
                    priceClassName: p,
                    priceStyle: g,
                    regularPrice: h,
                    regularPriceClassName: w,
                    regularPriceStyle: _,
                  }))
                : void 0 !== s && void 0 !== a
                ? (y = (0, r.createElement)(m, {
                    currency: o,
                    maxPrice: a,
                    minPrice: s,
                    priceClassName: p,
                    priceStyle: g,
                  }))
                : u &&
                  (y = (0, r.createElement)(c.FormattedMonetaryAmount, {
                    className: l()('wc-block-components-product-price__value', p),
                    currency: o,
                    value: u,
                    style: g,
                  })),
              (0, r.createElement)(
                'span',
                { className: E, style: b },
                (0, i.createInterpolateElement)(n, { price: y }),
              )
            );
          };
      },
      7276: (e, t, o) => {
        'use strict';
        o.d(t, { U: () => d });
        var r = o(6087),
          n = o(7594),
          c = o(7143),
          a = o(2983),
          l = o(4956);
        const s = e => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, c.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore();
          },
          i = e => {
            ((null != e && e.persisted) || 'back_forward' === (0, a.F)()) &&
              (0, c.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore();
          },
          m = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          d = () => {
            (0, r.useEffect)(
              () => (
                (() => {
                  if (
                    (window.wcBlocksStoreCartListeners ||
                      (window.wcBlocksStoreCartListeners = { count: 0, remove: () => {} }),
                    (null === (e = window.wcBlocksStoreCartListeners) || void 0 === e
                      ? void 0
                      : e.count) > 0)
                  )
                    return void window.wcBlocksStoreCartListeners.count++;
                  var e;
                  document.body.addEventListener('wc-blocks_added_to_cart', s),
                    document.body.addEventListener('wc-blocks_removed_from_cart', s),
                    window.addEventListener('pageshow', i);
                  const t = (0, l.f2)('added_to_cart', 'wc-blocks_added_to_cart'),
                    o = (0, l.f2)('removed_from_cart', 'wc-blocks_removed_from_cart');
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener('wc-blocks_added_to_cart', s),
                        document.body.removeEventListener('wc-blocks_removed_from_cart', s),
                        window.removeEventListener('pageshow', i),
                        t(),
                        o();
                    });
                })(),
                m
              ),
              [],
            );
          };
      },
      8509: (e, t, o) => {
        'use strict';
        o.d(t, { V: () => _ });
        var r = o(458),
          n = o.n(r),
          c = o(6087),
          a = o(7594),
          l = o(7143),
          s = o(8537),
          i = o(5683),
          m = o(2663),
          d = o(7276);
        const u = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            phone: '',
          },
          p = { ...u, email: '' },
          g = {
            total_items: '',
            total_items_tax: '',
            total_fees: '',
            total_fees_tax: '',
            total_discount: '',
            total_discount_tax: '',
            total_shipping: '',
            total_shipping_tax: '',
            total_price: '',
            total_tax: '',
            tax_lines: a.EMPTY_TAX_LINES,
            currency_code: '',
            currency_symbol: '',
            currency_minor_unit: 2,
            currency_decimal_separator: '',
            currency_thousand_separator: '',
            currency_prefix: '',
            currency_suffix: '',
          },
          h = e =>
            Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (0, s.decodeEntities)(t)])),
          w = {
            cartCoupons: a.EMPTY_CART_COUPONS,
            cartItems: a.EMPTY_CART_ITEMS,
            cartFees: a.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: a.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
            cartTotals: g,
            cartIsLoading: !0,
            cartErrors: a.EMPTY_CART_ERRORS,
            billingAddress: p,
            shippingAddress: u,
            shippingRates: a.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: a.EMPTY_PAYMENT_METHODS,
            paymentRequirements: a.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: a.EMPTY_EXTENSIONS,
          },
          _ = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: o } = (0, m.m)(),
              r = null == o ? void 0 : o.previewCart,
              { shouldSelect: s } = e,
              g = (0, c.useRef)();
            (0, d.U)();
            const _ = (0, l.useSelect)(
              (e, { dispatch: o }) => {
                if (!s) return w;
                if (t)
                  return {
                    cartCoupons: r.coupons,
                    cartItems: r.items,
                    crossSellsProducts: r.cross_sells,
                    cartFees: r.fees,
                    cartItemsCount: r.items_count,
                    cartItemsWeight: r.items_weight,
                    cartNeedsPayment: r.needs_payment,
                    cartNeedsShipping: r.needs_shipping,
                    cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: r.totals,
                    cartIsLoading: !1,
                    cartErrors: a.EMPTY_CART_ERRORS,
                    billingData: p,
                    billingAddress: p,
                    shippingAddress: u,
                    extensions: a.EMPTY_EXTENSIONS,
                    shippingRates: r.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: r.has_calculated_shipping,
                    paymentRequirements: r.paymentRequirements,
                    receiveCart:
                      'function' == typeof (null == r ? void 0 : r.receiveCart)
                        ? r.receiveCart
                        : () => {},
                    receiveCartContents:
                      'function' == typeof (null == r ? void 0 : r.receiveCartContents)
                        ? r.receiveCartContents
                        : () => {},
                  };
                const n = e(a.CART_STORE_KEY),
                  c = n.getCartData(),
                  l = n.getCartErrors(),
                  m = n.getCartTotals(),
                  d = !n.hasFinishedResolution('getCartData'),
                  g = n.isCustomerDataUpdating(),
                  { receiveCart: _, receiveCartContents: b } = o(a.CART_STORE_KEY),
                  E = h(c.billingAddress),
                  k = c.needsShipping ? h(c.shippingAddress) : E,
                  y = c.fees.length > 0 ? c.fees.map(e => h(e)) : a.EMPTY_CART_FEES;
                return {
                  cartCoupons:
                    c.coupons.length > 0
                      ? c.coupons.map(e => ({ ...e, label: e.code }))
                      : a.EMPTY_CART_COUPONS,
                  cartItems: c.items,
                  crossSellsProducts: c.crossSells,
                  cartFees: y,
                  cartItemsCount: c.itemsCount,
                  cartItemsWeight: c.itemsWeight,
                  cartNeedsPayment: c.needsPayment,
                  cartNeedsShipping: c.needsShipping,
                  cartItemErrors: c.errors,
                  cartTotals: m,
                  cartIsLoading: d,
                  cartErrors: l,
                  billingData: (0, i.TU)(E),
                  billingAddress: (0, i.TU)(E),
                  shippingAddress: (0, i.TU)(k),
                  extensions: c.extensions,
                  shippingRates: c.shippingRates,
                  isLoadingRates: g,
                  cartHasCalculatedShipping: c.hasCalculatedShipping,
                  paymentRequirements: c.paymentRequirements,
                  receiveCart: _,
                  receiveCartContents: b,
                };
              },
              [s],
            );
            return (g.current && n()(g.current, _)) || (g.current = _), g.current;
          };
      },
      4436: (e, t, o) => {
        'use strict';
        o.d(t, { R: () => i });
        var r = o(6087),
          n = o(7143),
          c = o(7594),
          a = o(8537),
          l = o(8509);
        const s = (e, t) => {
            const o = e.find(({ id: e }) => e === t);
            return o ? o.quantity : 0;
          },
          i = e => {
            const { addItemToCart: t } = (0, n.useDispatch)(c.CART_STORE_KEY),
              { cartItems: o, cartIsLoading: i } = (0, l.V)(),
              { createErrorNotice: m, removeNotice: d } = (0, n.useDispatch)('core/notices'),
              [u, p] = (0, r.useState)(!1),
              g = (0, r.useRef)(s(o, e));
            return (
              (0, r.useEffect)(() => {
                const t = s(o, e);
                t !== g.current && (g.current = t);
              }, [o, e]),
              {
                cartQuantity: Number.isFinite(g.current) ? g.current : 0,
                addingToCart: u,
                cartIsLoading: i,
                addToCart: (o = 1) => (
                  p(!0),
                  t(e, o)
                    .then(() => {
                      d('add-to-cart');
                    })
                    .catch(e => {
                      m((0, a.decodeEntities)(e.message), {
                        id: 'add-to-cart',
                        context: 'wc/all-products',
                        isDismissible: !0,
                      });
                    })
                    .finally(() => {
                      p(!1);
                    })
                ),
              }
            );
          };
      },
      3603: (e, t, o) => {
        'use strict';
        o.d(t, { y: () => a });
        var r = o(2619),
          n = o(7143),
          c = o(6087);
        const a = () => ({
          dispatchStoreEvent: (0, c.useCallback)((e, t = {}) => {
            try {
              (0, r.doAction)(`experimental__woocommerce_blocks-${e}`, t);
            } catch (e) {
              console.error(e);
            }
          }, []),
          dispatchCheckoutEvent: (0, c.useCallback)((e, t = {}) => {
            try {
              (0, r.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
                ...t,
                storeCart: (0, n.select)('wc/store/cart').getCartData(),
              });
            } catch (e) {
              console.error(e);
            }
          }, []),
        });
      },
      2663: (e, t, o) => {
        'use strict';
        o.d(t, { m: () => c }), o(1609);
        var r = o(6087);
        o(7143);
        const n = (0, r.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: '',
            previewData: {},
            getPreviewData: () => ({}),
          }),
          c = () => (0, r.useContext)(n);
      },
      3566: (e, t, o) => {
        'use strict';
        o.d(t, { p: () => s });
        var r = o(9019),
          n = o.n(r),
          c = o(3993),
          a = o(92),
          l = o(6032);
        const s = e => {
          const t = (e => {
              const t = (0, c.isObject)(e) ? e : { style: {} };
              let o = t.style;
              return (
                (0, c.isString)(o) && (o = JSON.parse(o) || {}),
                (0, c.isObject)(o) || (o = {}),
                { ...t, style: o }
              );
            })(e),
            o = (0, l.BK)(t),
            r = (0, l.aR)(t),
            s = (0, l.fo)(t),
            i = (0, a.x)(t);
          return {
            className: n()(i.className, o.className, r.className, s.className),
            style: { ...i.style, ...o.style, ...r.style, ...s.style },
          };
        };
      },
      92: (e, t, o) => {
        'use strict';
        o.d(t, { x: () => n });
        var r = o(3993);
        const n = e => {
          const t = (0, r.isObject)(e.style.typography) ? e.style.typography : {},
            o = (0, r.isString)(t.fontFamily) ? t.fontFamily : '';
          return {
            className: e.fontFamily ? `has-${e.fontFamily}-font-family` : o,
            style: {
              fontSize: e.fontSize ? `var(--wp--preset--font-size--${e.fontSize})` : t.fontSize,
              fontStyle: t.fontStyle,
              fontWeight: t.fontWeight,
              letterSpacing: t.letterSpacing,
              lineHeight: t.lineHeight,
              textDecoration: t.textDecoration,
              textTransform: t.textTransform,
            },
          };
        };
      },
      5683: (e, t, o) => {
        'use strict';
        o.d(t, { TU: () => c });
        var r = o(8585),
          n = (o(3832), o(3993), o(8537), o(812));
        const c = e => {
          const t = (0, r.A)(n.Hw, {}, e.country),
            o = Object.assign({}, e);
          return (
            t.forEach(({ key: t = '', hidden: r = !1 }) => {
              r && ((e, t) => e in t)(t, e) && (o[t] = '');
            }),
            o
          );
        };
      },
      6032: (e, t, o) => {
        'use strict';
        o.d(t, { BK: () => m, aR: () => d, fo: () => u });
        var r = o(9019),
          n = o.n(r),
          c = o(1194),
          a = o(9786),
          l = o(3993);
        function s(e = {}) {
          const t = {};
          return (
            (0, a.getCSSRules)(e, { selector: '' }).forEach(e => {
              t[e.key] = e.value;
            }),
            t
          );
        }
        function i(e, t) {
          return e && t ? `has-${(0, c.c)(t)}-${e}` : '';
        }
        function m(e) {
          var t, o, r, c, a, m, d;
          const { backgroundColor: u, textColor: p, gradient: g, style: h } = e,
            w = i('background-color', u),
            _ = i('color', p),
            b = (function(e) {
              if (e) return `has-${e}-gradient-background`;
            })(g),
            E = b || (null == h || null === (t = h.color) || void 0 === t ? void 0 : t.gradient);
          return {
            className: n()(_, b, {
              [w]: !E && !!w,
              'has-text-color':
                p || (null == h || null === (o = h.color) || void 0 === o ? void 0 : o.text),
              'has-background':
                u ||
                (null == h || null === (r = h.color) || void 0 === r ? void 0 : r.background) ||
                g ||
                (null == h || null === (c = h.color) || void 0 === c ? void 0 : c.gradient),
              'has-link-color': (0, l.isObject)(
                null == h || null === (a = h.elements) || void 0 === a ? void 0 : a.link,
              )
                ? null == h ||
                  null === (m = h.elements) ||
                  void 0 === m ||
                  null === (d = m.link) ||
                  void 0 === d
                  ? void 0
                  : d.color
                : void 0,
            }),
            style: s({ color: (null == h ? void 0 : h.color) || {} }),
          };
        }
        function d(e) {
          var t;
          const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
          return {
            className: (function(e) {
              var t;
              const { borderColor: o, style: r } = e,
                c = o ? i('border-color', o) : '';
              return n()({
                'has-border-color':
                  !!o || !(null == r || null === (t = r.border) || void 0 === t || !t.color),
                [c]: !!c,
              });
            })(e),
            style: s({ border: o }),
          };
        }
        function u(e) {
          var t;
          return {
            className: void 0,
            style: s({
              spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
            }),
          };
        }
      },
      2983: (e, t, o) => {
        'use strict';
        o.d(t, { F: () => r });
        const r = () =>
          window.performance && window.performance.getEntriesByType('navigation').length
            ? window.performance.getEntriesByType('navigation')[0].type
            : '';
      },
      4956: (e, t, o) => {
        'use strict';
        o.d(t, { f2: () => n });
        const r = window.CustomEvent || null,
          n = (e, t, o = !1, n = !1) => {
            if ('function' != typeof jQuery) return () => {};
            const c = () => {
              ((e, { bubbles: t = !1, cancelable: o = !1, element: n, detail: c = {} }) => {
                if (!r) return;
                n || (n = document.body);
                const a = new r(e, { bubbles: t, cancelable: o, detail: c });
                n.dispatchEvent(a);
              })(t, { bubbles: o, cancelable: n });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          };
      },
      6334: (e, t, o) => {
        'use strict';
        o.r(t), o.d(t, { metadata: () => bo, name: () => lr });
        var r = o(1609),
          n = o(4997),
          c = o(7104),
          a = o(6554),
          l = o(812);
        const s = window.wp.blockEditor;
        var i = o(7723),
          m = o(9019),
          d = o.n(m);
        const u = {
          category: 'woocommerce-product-elements',
          keywords: [(0, i.__)('WooCommerce', 'woocommerce')],
          icon: {
            src: (0, r.createElement)(c.A, {
              icon: a.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          supports: { html: !1 },
          ancestor: ['woocommerce/all-products', 'woocommerce/single-product'],
          save: ({ attributes: e }) =>
            e.isDescendentOfQueryLoop ||
            e.isDescendentOfSingleProductBlock ||
            e.isDescendentOfSingleProductTemplate
              ? null
              : (0, r.createElement)('div', { className: d()('is-loading', e.className) }),
          deprecated: [{ attributes: {}, save: () => null }],
        };
        var p = o(6154),
          g = o(6427),
          h = o(9491),
          w = o(6087),
          _ = o(5573);
        function b({ level: e }) {
          const t = {
            1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
            2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
            3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
            4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
            5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
            6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z',
          };
          return t.hasOwnProperty(e)
            ? (0, r.createElement)(
                _.SVG,
                {
                  width: '20',
                  height: '20',
                  viewBox: '0 0 20 20',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                (0, r.createElement)(_.Path, { d: t[e] }),
              )
            : null;
        }
        class E extends w.Component {
          createLevelControl(e, t, o) {
            const n = e === t;
            return {
              icon: (0, r.createElement)(b, { level: e }),
              title: (0, i.sprintf) /* translators: %s: heading level e.g: "2", "3", "4" */(
                /* translators: %s: heading level e.g: "2", "3", "4" */
                (0, i.__)('Heading %d', 'woocommerce'),
                e,
              ),
              isActive: n,
              onClick: () => o(e),
            };
          }
          render() {
            const {
                isCollapsed: e = !0,
                minLevel: t,
                maxLevel: o,
                selectedLevel: n,
                onChange: c,
              } = this.props,
              a = Array.from({ length: o - t + 1 }, (e, o) => o + t);
            return (0, r.createElement)(g.ToolbarGroup, {
              isCollapsed: e,
              icon: (0, r.createElement)(b, { level: n }),
              controls: a.map(e => this.createLevelControl(e, n, c)),
            });
          }
        }
        const k = E;
        var y = o(1318),
          v = o(3993);
        function f(e, t, o) {
          const r = new Set(t.map(e => e[o]));
          return e.filter(e => !r.has(e[o]));
        }
        var x = o(8537);
        const C = {
            clear: (0, i.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, i.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, i.__)('No results for %s', 'woocommerce'),
            search: (0, i.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, i.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, i._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, i.__)('Search results updated.', 'woocommerce'),
          },
          S = (e, t = e) => {
            const o = e.reduce((e, t) => {
                const o = t.parent || 0;
                return e[o] || (e[o] = []), e[o].push(t), e;
              }, {}),
              r = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const n = ['0'],
              c = (e = {}) => (e.parent ? [...c(r[e.parent]), e.name] : e.name ? [e.name] : []),
              a = e =>
                e.map(e => {
                  const t = o[e.id];
                  return (
                    n.push('' + e.id),
                    { ...e, breadcrumbs: c(r[e.parent]), children: t && t.length ? a(t) : [] }
                  );
                }),
              l = a(o[0] || []);
            return (
              Object.entries(o).forEach(([e, t]) => {
                n.includes(e) || l.push(...a(t || []));
              }),
              l
            );
          },
          N = (e, t) => {
            if (!t) return e;
            const o = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(o)
              .map((e, t) =>
                o.test(e)
                  ? (0, r.createElement)('strong', { key: t }, e)
                  : (0, r.createElement)(w.Fragment, { key: t }, e),
              );
          },
          P = ({ label: e }) =>
            (0, r.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          A = e => {
            const { item: t, search: o } = e,
              n = t.breadcrumbs && t.breadcrumbs.length;
            return (0, r.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              n
                ? (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (c = t.breadcrumbs).length
                      ? c.slice(0, 1).toString()
                      : 2 === c.length
                      ? c.slice(0, 1).toString() + ' › ' + c.slice(-1).toString()
                      : c.slice(0, 1).toString() + ' … ' + c.slice(-1).toString(),
                  )
                : null,
              (0, r.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                N((0, x.decodeEntities)(t.name), o),
              ),
            );
            var c;
          },
          B = ({
            countLabel: e,
            className: t,
            depth: o = 0,
            controlId: n = '',
            item: c,
            isSelected: a,
            isSingle: l,
            onSelect: s,
            search: i = '',
            selected: m,
            useExpandedPanelId: u,
            ...p
          }) => {
            var h, _;
            const [b, E] = u,
              k = null != e && void 0 !== c.count && null !== c.count,
              y = !(null === (h = c.breadcrumbs) || void 0 === h || !h.length),
              v = !(null === (_ = c.children) || void 0 === _ || !_.length),
              C = b === c.id,
              S = d()(['woocommerce-search-list__item', `depth-${o}`, t], {
                'has-breadcrumbs': y,
                'has-children': v,
                'has-count': k,
                'is-expanded': C,
                'is-radio-button': l,
              }),
              B = p.name || `search-list-item-${n}`,
              T = `${B}-${c.id}`,
              I = (0, w.useCallback)(() => {
                E(C ? -1 : Number(c.id));
              }, [C, c.id, E]);
            return v
              ? (0, r.createElement)(
                  'div',
                  {
                    className: S,
                    onClick: I,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? I() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  l
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)('input', {
                          type: 'radio',
                          id: T,
                          name: B,
                          value: c.value,
                          onChange: s(c),
                          onClick: e => e.stopPropagation(),
                          checked: a,
                          className: 'woocommerce-search-list__item-input',
                          ...p,
                        }),
                        (0, r.createElement)(A, { item: c, search: i }),
                        k ? (0, r.createElement)(P, { label: e || c.count }) : null,
                      )
                    : (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(g.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: a,
                          ...(!a && c.children.some(e => m.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: N((0, x.decodeEntities)(c.name), i),
                          onChange: () => {
                            a
                              ? s(f(m, c.children, 'id'))()
                              : s(
                                  (function(e, t, o) {
                                    const r = f(t, e, 'id');
                                    return [...e, ...r];
                                  })(m, c.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        k ? (0, r.createElement)(P, { label: e || c.count }) : null,
                      ),
                )
              : (0, r.createElement)(
                  'label',
                  { htmlFor: T, className: S },
                  l
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)('input', {
                          ...p,
                          type: 'radio',
                          id: T,
                          name: B,
                          value: c.value,
                          onChange: s(c),
                          checked: a,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, r.createElement)(A, { item: c, search: i }),
                      )
                    : (0, r.createElement)(g.CheckboxControl, {
                        ...p,
                        id: T,
                        name: B,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, x.decodeEntities)(c.value),
                        label: N((0, x.decodeEntities)(c.name), i),
                        onChange: s(c),
                        checked: a,
                      }),
                  k ? (0, r.createElement)(P, { label: e || c.count }) : null,
                );
          },
          T = B;
        var I = o(2478),
          O = o(2370);
        o(6636);
        const L = ({
            id: e,
            label: t,
            popoverContents: o,
            remove: n,
            screenReaderLabel: a,
            className: l = '',
          }) => {
            const [s, m] = (0, w.useState)(!1),
              u = (0, h.useInstanceId)(L);
            if (((a = a || t), !t)) return null;
            t = (0, x.decodeEntities)(t);
            const p = d()('woocommerce-tag', l, { 'has-remove': !!n }),
              _ = `woocommerce-tag__label-${u}`,
              b = (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)('span', { className: 'screen-reader-text' }, a),
                (0, r.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, r.createElement)(
              'span',
              { className: p },
              o
                ? (0, r.createElement)(
                    g.Button,
                    { className: 'woocommerce-tag__text', id: _, onClick: () => m(!0) },
                    b,
                  )
                : (0, r.createElement)('span', { className: 'woocommerce-tag__text', id: _ }, b),
              o && s && (0, r.createElement)(g.Popover, { onClose: () => m(!1) }, o),
              n &&
                (0, r.createElement)(
                  g.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: n(e),
                    label: (0, i.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, i.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': _,
                  },
                  (0, r.createElement)(c.A, {
                    icon: O.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          D = L;
        o(8137);
        const R = e => (0, r.createElement)(T, { ...e }),
          M = e => {
            const {
                list: t,
                selected: o,
                renderItem: n,
                depth: c = 0,
                onSelect: a,
                instanceId: l,
                isSingle: s,
                search: i,
                useExpandedPanelId: m,
              } = e,
              [d] = m;
            return t
              ? (0, r.createElement)(
                  w.Fragment,
                  null,
                  t.map(t => {
                    var u, p;
                    const g =
                        null !== (u = t.children) && void 0 !== u && u.length && !s
                          ? t.children.every(({ id: e }) => o.find(t => t.id === e))
                          : !!o.find(({ id: e }) => e === t.id),
                      h =
                        (null === (p = t.children) || void 0 === p ? void 0 : p.length) &&
                        d === t.id;
                    return (0, r.createElement)(
                      w.Fragment,
                      { key: t.id },
                      (0, r.createElement)(
                        'li',
                        null,
                        n({
                          item: t,
                          isSelected: g,
                          onSelect: a,
                          isSingle: s,
                          selected: o,
                          search: i,
                          depth: c,
                          useExpandedPanelId: m,
                          controlId: l,
                        }),
                      ),
                      h ? (0, r.createElement)(M, { ...e, list: t.children, depth: c + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          F = ({
            isLoading: e,
            isSingle: t,
            selected: o,
            messages: n,
            onChange: c,
            onRemove: a,
          }) => {
            if (e || t || !o) return null;
            const l = o.length;
            return (0, r.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, r.createElement)('strong', null, n.selected(l)),
                l > 0
                  ? (0, r.createElement)(
                      g.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => c([]),
                        'aria-label': n.clear,
                      },
                      (0, i.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              l > 0
                ? (0, r.createElement)(
                    'ul',
                    null,
                    o.map((e, t) =>
                      (0, r.createElement)(
                        'li',
                        { key: t },
                        (0, r.createElement)(D, { label: e.name, id: e.id, remove: a }),
                      ),
                    ),
                  )
                : null,
            );
          },
          V = ({
            filteredList: e,
            search: t,
            onSelect: o,
            instanceId: n,
            useExpandedPanelId: a,
            ...l
          }) => {
            const { messages: s, renderItem: m, selected: d, isSingle: u } = l,
              p = m || R;
            return 0 === e.length
              ? (0, r.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, r.createElement)(c.A, { icon: I.A, role: 'img' }),
                  ),
                  (0, r.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, i.sprintf)(s.noResults, t) : s.noItems,
                  ),
                )
              : (0, r.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, r.createElement)(M, {
                    useExpandedPanelId: a,
                    list: e,
                    selected: d,
                    renderItem: p,
                    onSelect: o,
                    instanceId: n,
                    isSingle: u,
                    search: t,
                  }),
                );
          },
          $ = e => {
            const {
                className: t = '',
                isCompact: o,
                isHierarchical: n,
                isLoading: c,
                isSingle: a,
                list: l,
                messages: s = C,
                onChange: m,
                onSearch: u,
                selected: p,
                type: _ = 'text',
                debouncedSpeak: b,
              } = e,
              [E, k] = (0, w.useState)(''),
              y = (0, w.useState)(-1),
              v = (0, h.useInstanceId)($),
              f = (0, w.useMemo)(() => ({ ...C, ...s }), [s]),
              x = (0, w.useMemo)(
                () =>
                  ((e, t, o) => {
                    if (!t) return o ? S(e) : e;
                    const r = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!r.test(e.name) && e).filter(Boolean);
                    return o ? S(n, e) : n;
                  })(l, E, n),
                [l, E, n],
              );
            (0, w.useEffect)(() => {
              b && b(f.updated);
            }, [b, f]),
              (0, w.useEffect)(() => {
                'function' == typeof u && u(E);
              }, [E, u]);
            const N = (0, w.useCallback)(
                e => () => {
                  a && m([]);
                  const t = p.findIndex(({ id: t }) => t === e);
                  m([...p.slice(0, t), ...p.slice(t + 1)]);
                },
                [a, p, m],
              ),
              P = (0, w.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? m(e)
                    : -1 === p.findIndex(({ id: t }) => t === e.id)
                    ? m(a ? [e] : [...p, e])
                    : N(e.id)();
                },
                [a, N, m, p],
              ),
              A = (0, w.useCallback)(
                e => {
                  const [t] = p.filter(t => !e.find(e => t.id === e.id));
                  N(t.id)();
                },
                [N, p],
              );
            return (0, r.createElement)(
              'div',
              {
                className: d()('woocommerce-search-list', t, {
                  'is-compact': o,
                  'is-loading': c,
                  'is-token': 'token' === _,
                }),
              },
              'text' === _ && (0, r.createElement)(F, { ...e, onRemove: N, messages: f }),
              (0, r.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === _
                  ? (0, r.createElement)(g.TextControl, {
                      label: f.search,
                      type: 'search',
                      value: E,
                      onChange: e => k(e),
                    })
                  : (0, r.createElement)(g.FormTokenField, {
                      disabled: c,
                      label: f.search,
                      onChange: A,
                      onInputChange: e => k(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: c
                        ? [(0, i.__)('Loading…', 'woocommerce')]
                        : p.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              c
                ? (0, r.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, r.createElement)(g.Spinner, null),
                  )
                : (0, r.createElement)(V, {
                    ...e,
                    search: E,
                    filteredList: x,
                    messages: f,
                    onSelect: P,
                    instanceId: v,
                    useExpandedPanelId: y,
                  }),
            );
          },
          z =
            ((0, g.withSpokenMessages)($),
            e => t => {
              let { selected: o } = t;
              o = void 0 === o ? null : o;
              const n = null === o;
              return Array.isArray(o)
                ? (0, r.createElement)(e, { ...t })
                : (0, r.createElement)(e, { ...t, selected: n ? [] : [o] });
            });
        var H = o(3832);
        const j = window.wp.apiFetch;
        var q = o.n(j),
          W = o(5703);
        const G = ({ selected: e = [], search: t = '', queryArgs: o = {} }) => {
          const r = (({ selected: e = [], search: t = '', queryArgs: o = {} }) => {
            const r = l.r7.productCount > 100,
              n = {
                per_page: r ? 100 : 0,
                catalog_visibility: 'any',
                search: t,
                orderby: 'title',
                order: 'asc',
              },
              c = [(0, H.addQueryArgs)('/wc/store/v1/products', { ...n, ...o })];
            return (
              r &&
                e.length &&
                c.push(
                  (0, H.addQueryArgs)('/wc/store/v1/products', {
                    catalog_visibility: 'any',
                    include: e,
                    per_page: 0,
                  }),
                ),
              c
            );
          })({ selected: e, search: t, queryArgs: o });
          return Promise.all(r.map(e => q()({ path: e })))
            .then(e => {
              const t = ((e, t) => {
                const o = new Map();
                return e.filter(e => {
                  const r = t(e);
                  return !o.has(r) && (o.set(r, e), !0);
                });
              })(e.flat(), e => e.id);
              return t.map(e => ({ ...e, parent: 0 }));
            })
            .catch(e => {
              throw e;
            });
        };
        var Q = o(4717);
        const Y = async e => {
          if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
          try {
            const t = await e.json();
            return { message: t.message, type: t.type || 'api' };
          } catch (e) {
            return { message: e.message, type: 'general' };
          }
        };
        var U = o(2294),
          K = o(923),
          J = o.n(K);
        const Z = (0, h.createHigherOrderComponent)(e => {
            class t extends w.Component {
              constructor(...e) {
                super(...e),
                  (0, U.A)(this, 'state', { error: null, loading: !1, variations: {} }),
                  (0, U.A)(this, 'prevSelectedItem', void 0),
                  (0, U.A)(this, 'loadVariations', () => {
                    const { products: e } = this.props,
                      { loading: t, variations: o } = this.state;
                    if (t) return;
                    const r = this.getExpandedProduct();
                    if (!r || o[r]) return;
                    const n = e.find(e => e.id === r);
                    var c;
                    null != n && n.variations && 0 !== n.variations.length
                      ? (this.setState({ loading: !0 }),
                        ((c = r),
                        q()({
                          path: (0, H.addQueryArgs)('wc/store/v1/products', {
                            per_page: 0,
                            type: 'variation',
                            parent: c,
                          }),
                        }))
                          .then(e => {
                            const t = e.map(e => ({ ...e, parent: r }));
                            this.setState({
                              variations: { ...this.state.variations, [r]: t },
                              loading: !1,
                              error: null,
                            });
                          })
                          .catch(async e => {
                            const t = await Y(e);
                            this.setState({
                              variations: { ...this.state.variations, [r]: null },
                              loading: !1,
                              error: t,
                            });
                          }))
                      : this.setState({
                          variations: { ...this.state.variations, [r]: null },
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
                const { isLoading: t, selected: o, showVariations: r } = this.props;
                r && (!J()(e.selected, o) || (e.isLoading && !t)) && this.loadVariations();
              }
              isProductId(e) {
                const { products: t } = this.props;
                return t.some(t => t.id === e);
              }
              findParentProduct(e) {
                var t;
                const { products: o } = this.props;
                return null ===
                  (t = o.filter(
                    t => t.variations && t.variations.find(({ id: t }) => t === e),
                  )[0]) || void 0 === t
                  ? void 0
                  : t.id;
              }
              getExpandedProduct() {
                const { isLoading: e, selected: t, showVariations: o } = this.props;
                if (!o) return null;
                let r = t && t.length ? t[0] : null;
                return (
                  r
                    ? (this.prevSelectedItem = r)
                    : !this.prevSelectedItem ||
                      e ||
                      this.isProductId(this.prevSelectedItem) ||
                      (r = this.prevSelectedItem),
                  !e && r ? (this.isProductId(r) ? r : this.findParentProduct(r)) : null
                );
              }
              render() {
                const { error: t, isLoading: o } = this.props,
                  { error: n, loading: c, variations: a } = this.state;
                return (0, r.createElement)(e, {
                  ...this.props,
                  error: n || t,
                  expandedProduct: this.getExpandedProduct(),
                  isLoading: o,
                  variations: a,
                  variationsLoading: c,
                });
              }
            }
            return t;
          }, 'withProductVariations'),
          X = Z,
          ee = e => {
            const { id: t, name: o, parent: r } = e;
            return {
              id: t,
              name: o,
              parent: r,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          },
          te = window.wp.escapeHtml,
          oe = ({ error: e }) =>
            (0, r.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, r.createElement)(
                        'span',
                        null,
                        (0, i.__)('The following error was returned', 'woocommerce'),
                        (0, r.createElement)('br', null),
                        (0, r.createElement)('code', null, (0, te.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, r.createElement)(
                        'span',
                        null,
                        (0, i.__)('The following error was returned from the API', 'woocommerce'),
                        (0, r.createElement)('br', null),
                        (0, r.createElement)('code', null, (0, te.escapeHTML)(e)),
                      )
                    : e
                  : (0, i.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          re = ({
            className: e,
            item: t,
            isSelected: o,
            isLoading: n,
            onSelect: c,
            disabled: a,
            ...l
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(B, {
                ...l,
                key: t.id,
                className: e,
                isSelected: o,
                item: t,
                onSelect: c,
                disabled: a,
              }),
              o &&
                n &&
                (0, r.createElement)(
                  'div',
                  {
                    key: 'loading',
                    className: d()(
                      'woocommerce-search-list__item',
                      'woocommerce-product-attributes__item',
                      'depth-1',
                      'is-loading',
                      'is-not-active',
                    ),
                  },
                  (0, r.createElement)(g.Spinner, null),
                ),
            );
        o(7369);
        const ne = {
            list: (0, i.__)('Products', 'woocommerce'),
            noItems: (0, i.__)("Your store doesn't have any products.", 'woocommerce'),
            search: (0, i.__)('Search for a product to display', 'woocommerce'),
            updated: (0, i.__)('Product search results updated.', 'woocommerce'),
          },
          ce = z(
            ((ae = X(
              (0, h.withInstanceId)(e => {
                const {
                  expandedProduct: t = null,
                  error: o,
                  instanceId: n,
                  isCompact: c = !1,
                  isLoading: a,
                  onChange: l,
                  onSearch: s,
                  products: m,
                  renderItem: u,
                  selected: p = [],
                  showVariations: g = !1,
                  variations: h,
                  variationsLoading: w,
                } = e;
                if (o) return (0, r.createElement)(oe, { error: o });
                const _ = [...m, ...(h && t && h[t] ? h[t] : [])].map(ee);
                return (0, r.createElement)($, {
                  className: 'woocommerce-products',
                  list: _,
                  isCompact: c,
                  isLoading: a,
                  isSingle: !0,
                  selected: _.filter(({ id: e }) => p.includes(Number(e))),
                  onChange: l,
                  renderItem:
                    u ||
                    (g
                      ? e => {
                          var t, o, c, l;
                          const {
                              item: s,
                              search: m,
                              depth: u = 0,
                              isSelected: p,
                              onSelect: g,
                            } = e,
                            h =
                              null !== (t = s.details) &&
                              void 0 !== t &&
                              t.variations &&
                              Array.isArray(s.details.variations)
                                ? s.details.variations.length
                                : 0,
                            _ = d()(
                              'woocommerce-search-product__item',
                              'woocommerce-search-list__item',
                              `depth-${u}`,
                              'has-count',
                              {
                                'is-searching': m.length > 0,
                                'is-skip-level': 0 === u && 0 !== s.parent,
                                'is-variable': h > 0,
                              },
                            );
                          if (!s.breadcrumbs.length) {
                            var b, E, k, y, f;
                            const t =
                              (null === (b = s.details) || void 0 === b ? void 0 : b.variations) &&
                              s.details.variations.length > 0;
                            return (0, r.createElement)(re, {
                              ...e,
                              className: d()(_, { 'is-selected': p }),
                              isSelected: p,
                              item: s,
                              onSelect: () => () => {
                                g(s)();
                              },
                              isLoading: a || w,
                              countLabel: t
                                ? (0,
                                  i.sprintf) /* translators: %1$d is the number of variations of a product product. */(
                                    /* translators: %1$d is the number of variations of a product product. */
                                    (0, i.__)('%1$d variations', 'woocommerce'),
                                    null === (E = s.details) || void 0 === E
                                      ? void 0
                                      : E.variations.length,
                                  )
                                : null,
                              name: `products-${n}`,
                              'aria-label': t
                                ? (0,
                                  i.sprintf) /* translators: %1$s is the product name, %2$d is the number of variations of that product. */(
                                    /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
                                    (0, i._n)(
                                      '%1$s, has %2$d variation',
                                      '%1$s, has %2$d variations',
                                      null === (k = s.details) ||
                                        void 0 === k ||
                                        null === (y = k.variations) ||
                                        void 0 === y
                                        ? void 0
                                        : y.length,
                                      'woocommerce',
                                    ),
                                    s.name,
                                    null === (f = s.details) || void 0 === f
                                      ? void 0
                                      : f.variations.length,
                                  )
                                : void 0,
                            });
                          }
                          const x = (0, v.isEmpty)(
                            null === (o = s.details) || void 0 === o ? void 0 : o.variation,
                          )
                            ? e
                            : {
                                ...e,
                                item: {
                                  ...e.item,
                                  name:
                                    null === (c = s.details) || void 0 === c ? void 0 : c.variation,
                                },
                                'aria-label': `${s.breadcrumbs[0]}: ${
                                  null === (l = s.details) || void 0 === l ? void 0 : l.variation
                                }`,
                              };
                          return (0, r.createElement)(B, {
                            ...x,
                            className: _,
                            name: `variations-${n}`,
                          });
                        }
                      : () => null),
                  onSearch: s,
                  messages: ne,
                  isHierarchical: !0,
                });
              }),
            )),
            ({ selected: e, ...t }) => {
              const [o, n] = (0, w.useState)(!0),
                [c, a] = (0, w.useState)(null),
                [s, i] = (0, w.useState)([]),
                m = l.r7.productCount > 100,
                d = async e => {
                  const t = await Y(e);
                  a(t), n(!1);
                },
                u = (0, w.useRef)(e);
              (0, w.useEffect)(() => {
                G({ selected: u.current })
                  .then(e => {
                    i(e), n(!1);
                  })
                  .catch(d);
              }, [u]);
              const p = (0, Q.YQ)(t => {
                  G({ selected: e, search: t })
                    .then(e => {
                      i(e), n(!1);
                    })
                    .catch(d);
                }, 400),
                g = (0, w.useCallback)(
                  e => {
                    n(!0), p(e);
                  },
                  [n, p],
                );
              return (0, r.createElement)(ae, {
                ...t,
                selected: e,
                error: c,
                products: s,
                isLoading: o,
                onSearch: m ? g : null,
              });
            }),
          );
        var ae;
        o(4738);
        const le = function({ className: e = '', ...t }) {
          const o = d()('wc-block-text-toolbar-button', e);
          return (0, r.createElement)(g.Button, { className: o, ...t });
        };
        var se = o(2796);
        o(7947);
        const ie = e => t => o => {
          var n;
          const c = (0, se.useProductDataContext)(),
            { attributes: a, setAttributes: l } = o,
            { productId: m } = a,
            [d, u] = (0, w.useState)(!m);
          return c.hasContext ||
            Number.isFinite(null === (n = o.context) || void 0 === n ? void 0 : n.queryId)
            ? (0, r.createElement)(t, { ...o })
            : (0, r.createElement)(
                r.Fragment,
                null,
                d
                  ? (0, r.createElement)(
                      g.Placeholder,
                      {
                        icon: e.icon || '',
                        label: e.label || '',
                        className: 'wc-atomic-blocks-product',
                      },
                      !!e.description && (0, r.createElement)('div', null, e.description),
                      (0, r.createElement)(
                        'div',
                        { className: 'wc-atomic-blocks-product__selection' },
                        (0, r.createElement)(ce, {
                          selected: m || 0,
                          showVariations: !0,
                          onChange: (e = []) => {
                            l({ productId: e[0] ? e[0].id : 0 });
                          },
                        }),
                        (0, r.createElement)(
                          g.Button,
                          {
                            variant: 'secondary',
                            disabled: !m,
                            onClick: () => {
                              u(!1);
                            },
                          },
                          (0, i.__)('Done', 'woocommerce'),
                        ),
                      ),
                    )
                  : (0, r.createElement)(
                      r.Fragment,
                      null,
                      (0, r.createElement)(
                        s.BlockControls,
                        null,
                        (0, r.createElement)(
                          g.ToolbarGroup,
                          null,
                          (0, r.createElement)(
                            le,
                            { onClick: () => u(!0) },
                            (0, i.__)('Switch product…', 'woocommerce'),
                          ),
                        ),
                      ),
                      (0, r.createElement)(t, { ...o }),
                    ),
              );
        };
        var me = o(4478);
        const de = (0, i.__)('Product Title', 'woocommerce'),
          ue = (0, r.createElement)(c.A, {
            icon: me.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          pe = (0, i.__)('Display the title of a product.', 'woocommerce');
        o(6342);
        const ge = ({ attributes: e, setAttributes: t }) => {
            const o = (0, s.useBlockProps)(),
              { headingLevel: n, showProductLink: c, align: a, linkTarget: m } = e;
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(
                s.BlockControls,
                null,
                (0, r.createElement)(k, {
                  isCollapsed: !0,
                  minLevel: 1,
                  maxLevel: 7,
                  selectedLevel: n,
                  onChange: e => t({ headingLevel: e }),
                }),
                (0, l.kM)() &&
                  (0, r.createElement)(s.AlignmentToolbar, {
                    value: a,
                    onChange: e => {
                      t({ align: e });
                    },
                  }),
              ),
              (0, r.createElement)(
                s.InspectorControls,
                null,
                (0, r.createElement)(
                  g.PanelBody,
                  { title: (0, i.__)('Link settings', 'woocommerce') },
                  (0, r.createElement)(g.ToggleControl, {
                    label: (0, i.__)('Make title a link', 'woocommerce'),
                    checked: c,
                    onChange: () => t({ showProductLink: !c }),
                  }),
                  c &&
                    (0, r.createElement)(
                      r.Fragment,
                      null,
                      (0, r.createElement)(g.ToggleControl, {
                        label: (0, i.__)('Open in new tab', 'woocommerce'),
                        onChange: e => t({ linkTarget: e ? '_blank' : '_self' }),
                        checked: '_blank' === m,
                      }),
                    ),
                ),
              ),
              (0, r.createElement)(g.Disabled, null, (0, r.createElement)(y.A, { ...e })),
            );
          },
          he = (0, l.kM)()
            ? (0, h.compose)([
                ie({
                  icon: ue,
                  label: de,
                  description: (0, i.__)('Choose a product to display its title.', 'woocommerce'),
                }),
              ])(ge)
            : ge,
          we = {
            ...u,
            apiVersion: 2,
            title: de,
            description: pe,
            icon: { src: ue },
            attributes: p.A,
            edit: he,
            save: ({ attributes: e }) =>
              (0, r.createElement)('div', {
                ...s.useBlockProps.save({ className: d()('is-loading', e.className) }),
              }),
            supports: {
              ...u.supports,
              ...((0, l.kM)() && {
                typography: {
                  fontSize: !0,
                  lineHeight: !0,
                  __experimentalFontWeight: !0,
                  __experimentalTextTransform: !0,
                  __experimentalFontFamily: !0,
                },
                color: {
                  text: !0,
                  background: !0,
                  link: !1,
                  gradients: !0,
                  __experimentalSkipSerialization: !0,
                },
                ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
                  spacing: { margin: !0, __experimentalSkipSerialization: !0 },
                }),
                __experimentalSelector: '.wc-block-components-product-title',
              }),
            },
          };
        (0, n.registerBlockType)('woocommerce/product-title', we);
        var _e = o(2519),
          be = o(7143);
        const Ee = () => ({
            isDescendentOfSingleProductTemplate: (0, be.useSelect)(e => {
              const t = e('core/edit-site'),
                o = null == t ? void 0 : t.getEditedPostId();
              return Boolean(null == o ? void 0 : o.includes('//single-product'));
            }, []),
          }),
          ke = {
            ...u.supports,
            ...((0, l.kM)() && {
              color: { text: !0, background: !0, link: !1, __experimentalSkipSerialization: !0 },
              typography: {
                fontSize: !0,
                lineHeight: !0,
                __experimentalFontFamily: !0,
                __experimentalFontWeight: !0,
                __experimentalFontStyle: !0,
                __experimentalSkipSerialization: !0,
                __experimentalLetterSpacing: !0,
              },
              __experimentalSelector:
                '.wp-block-woocommerce-product-price .wc-block-components-product-price',
            }),
            ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
              spacing: { margin: !0, padding: !0 },
            }),
          };
        var ye = o(3576);
        const ve = (0, i.__)('Product Price', 'woocommerce'),
          fe = (0, r.createElement)(c.A, {
            icon: ye.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          xe = (0, i.__)('Display the price of a product.', 'woocommerce'),
          { ancestor: Ce, ...Se } = u,
          Ne = {
            ...Se,
            apiVersion: 2,
            title: ve,
            description: xe,
            usesContext: ['query', 'queryId', 'postId'],
            icon: { src: fe },
            attributes: {
              productId: { type: 'number', default: 0 },
              isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
              textAlign: { type: 'string', default: '' },
              isDescendentOfSingleProductTemplate: { type: 'boolean', default: !1 },
              isDescendentOfSingleProductBlock: { type: 'boolean', default: !1 },
            },
            supports: ke,
            edit: ({ attributes: e, setAttributes: t, context: o }) => {
              const n = (0, s.useBlockProps)(),
                c = { ...e, ...o },
                a = Number.isFinite(o.queryId);
              let { isDescendentOfSingleProductTemplate: l } = Ee();
              return (
                a && (l = !1),
                (0, w.useEffect)(
                  () => t({ isDescendentOfQueryLoop: a, isDescendentOfSingleProductTemplate: l }),
                  [a, l, t],
                ),
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    s.BlockControls,
                    null,
                    (0, r.createElement)(s.AlignmentToolbar, {
                      value: e.textAlign,
                      onChange: e => {
                        t({ textAlign: e });
                      },
                    }),
                  ),
                  (0, r.createElement)('div', { ...n }, (0, r.createElement)(_e.default, { ...c })),
                )
              );
            },
          };
        (0, n.registerBlockType)('woocommerce/product-price', Ne);
        var Pe = o(231),
          Ae = o(4269);
        const Be = (0, i.__)('Product Image', 'woocommerce'),
          Te = (0, r.createElement)(c.A, {
            icon: Ae.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          Ie = (0, i.__)('Display the main product image.', 'woocommerce');
        var Oe = o(1281);
        const Le = {
            cover: (0, i.__)(
              'Image is scaled and cropped to fill the entire space without being distorted.',
              'woocommerce',
            ),
            contain: (0, i.__)(
              'Image is scaled to fill the space without clipping nor distorting.',
              'woocommerce',
            ),
            fill: (0, i.__)(
              'Image will be stretched and distorted to completely fill the space.',
              'woocommerce',
            ),
          },
          De = ({ scale: e, width: t, height: o, setAttributes: n }) =>
            (0, r.createElement)(
              g.__experimentalToolsPanel,
              {
                className: 'wc-block-product-image__tools-panel',
                label: (0, i.__)('Image size', 'woocommerce'),
              },
              (0, r.createElement)(g.__experimentalUnitControl, {
                label: (0, i.__)('Height', 'woocommerce'),
                onChange: e => {
                  n({ height: e });
                },
                value: o,
                units: [{ value: 'px', label: 'px' }],
              }),
              (0, r.createElement)(g.__experimentalUnitControl, {
                label: (0, i.__)('Width', 'woocommerce'),
                onChange: e => {
                  n({ width: e });
                },
                value: t,
                units: [{ value: 'px', label: 'px' }],
              }),
              o &&
                (0, r.createElement)(
                  g.__experimentalToolsPanelItem,
                  { hasValue: () => !0, label: (0, i.__)('Scale', 'woocommerce') },
                  (0, r.createElement)(
                    g.__experimentalToggleGroupControl,
                    {
                      label: (0, i.__)('Scale', 'woocommerce'),
                      value: e,
                      help: Le[e],
                      onChange: e => n({ scale: e }),
                      isBlock: !0,
                    },
                    (0, r.createElement)(
                      r.Fragment,
                      null,
                      (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                        value: 'cover',
                        label: (0, i.__)('Cover', 'woocommerce'),
                      }),
                      (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                        value: 'contain',
                        label: (0, i.__)('Contain', 'woocommerce'),
                      }),
                      (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                        value: 'fill',
                        label: (0, i.__)('Fill', 'woocommerce'),
                      }),
                    ),
                  ),
                ),
            ),
          Re = ie({ icon: Te, label: Be, description: Ie })(
            ({ attributes: e, setAttributes: t, context: o }) => {
              const {
                  showProductLink: n,
                  imageSizing: c,
                  showSaleBadge: a,
                  saleBadgeAlign: l,
                  width: m,
                  height: d,
                  scale: u,
                } = e,
                p = (0, s.useBlockProps)({ style: { width: m, height: d } }),
                h = Number.isFinite(o.queryId),
                _ = (0, W.getSettingWithCoercion)('isBlockThemeEnabled', !1, v.isBoolean);
              return (
                (0, w.useEffect)(() => t({ isDescendentOfQueryLoop: h }), [t, h]),
                (0, r.createElement)(
                  'div',
                  { ...p },
                  (0, r.createElement)(
                    s.InspectorControls,
                    null,
                    (0, r.createElement)(De, { scale: u, width: m, height: d, setAttributes: t }),
                    (0, r.createElement)(
                      g.PanelBody,
                      { title: (0, i.__)('Content', 'woocommerce') },
                      (0, r.createElement)(g.ToggleControl, {
                        label: (0, i.__)('Link to Product Page', 'woocommerce'),
                        help: (0, i.__)(
                          'Links the image to the single product listing.',
                          'woocommerce',
                        ),
                        checked: n,
                        onChange: () => t({ showProductLink: !n }),
                      }),
                      (0, r.createElement)(g.ToggleControl, {
                        label: (0, i.__)('Show On-Sale Badge', 'woocommerce'),
                        help: (0, i.__)(
                          'Display a “sale” badge if the product is on-sale.',
                          'woocommerce',
                        ),
                        checked: a,
                        onChange: () => t({ showSaleBadge: !a }),
                      }),
                      a &&
                        (0, r.createElement)(
                          g.__experimentalToggleGroupControl,
                          {
                            label: (0, i.__)('Sale Badge Alignment', 'woocommerce'),
                            value: l,
                            onChange: e => t({ saleBadgeAlign: e }),
                          },
                          (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                            value: 'left',
                            label: (0, i.__)('Left', 'woocommerce'),
                          }),
                          (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                            value: 'center',
                            label: (0, i.__)('Center', 'woocommerce'),
                          }),
                          (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                            value: 'right',
                            label: (0, i.__)('Right', 'woocommerce'),
                          }),
                        ),
                      (0, r.createElement)(
                        g.__experimentalToggleGroupControl,
                        {
                          label: (0, i.__)('Image Sizing', 'woocommerce'),
                          help: _
                            ? null
                            : (0, w.createInterpolateElement)(
                                (0, i.__)(
                                  'Product image cropping can be modified in the <a>Customizer</a>.',
                                  'woocommerce',
                                ),
                                {
                                  a: (0, r.createElement)('a', {
                                    href: `${(0, W.getAdminLink)(
                                      'customize.php',
                                    )}?autofocus[panel]=woocommerce&autofocus[section]=woocommerce_product_images`,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                  }),
                                },
                              ),
                          value: c,
                          onChange: e => t({ imageSizing: e }),
                        },
                        (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                          value: Oe.e.SINGLE,
                          label: (0, i.__)('Full Size', 'woocommerce'),
                        }),
                        (0, r.createElement)(g.__experimentalToggleGroupControlOption, {
                          value: Oe.e.THUMBNAIL,
                          label: (0, i.__)('Cropped', 'woocommerce'),
                        }),
                      ),
                    ),
                  ),
                  (0, r.createElement)(
                    g.Disabled,
                    null,
                    (0, r.createElement)(Pe.A, { ...e, ...o }),
                  ),
                )
              );
            },
          ),
          Me = {
            html: !1,
            ...((0, l.kM)() && {
              __experimentalBorder: { radius: !0, __experimentalSkipSerialization: !0 },
              typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
              ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
                spacing: { margin: !0, padding: !0 },
              }),
              __experimentalSelector: '.wc-block-components-product-image',
            }),
          };
        var Fe = o(6239);
        const Ve = {
          ...u,
          apiVersion: 2,
          name: 'woocommerce/product-image',
          title: Be,
          icon: { src: Te },
          keywords: ['WooCommerce'],
          description: Ie,
          usesContext: ['query', 'queryId', 'postId'],
          ancestor: [
            'woocommerce/all-products',
            'woocommerce/single-product',
            'core/post-template',
            'woocommerce/product-template',
          ],
          textdomain: 'woocommerce',
          attributes: Fe.A,
          supports: Me,
          edit: Re,
        };
        (0, n.registerBlockType)('woocommerce/product-image', { ...Ve });
        const $e = new Set(),
          ze = ({
            blockName: e,
            blockMetadata: t,
            blockSettings: o,
            isVariationBlock: r = !1,
            variationName: c,
            isAvailableOnPostEditor: a,
          }) => {
            let l = '';
            (0, be.subscribe)(() => {
              var a;
              const s = l,
                i = (0, be.select)('core/edit-site');
              l = (function(e) {
                const t = (0, v.isNumber)(e) ? void 0 : e;
                return null == t ? void 0 : t.split('//')[1];
              })(null == i ? void 0 : i.getEditedPostId());
              const m = s !== l,
                d = Boolean(l);
              if (!m || !d || !e) return;
              let u = Boolean((0, n.getBlockType)(e));
              if (
                (u &&
                  ((null !== (a = l) && void 0 !== a && a.includes('single-product')) ||
                    (null != s && s.includes('single-product'))) &&
                  (r && c ? (0, n.unregisterBlockVariation)(e, c) : (0, n.unregisterBlockType)(e),
                  (u = !1)),
                !u)
              )
                if (r) (0, n.registerBlockVariation)(e, o);
                else {
                  var p;
                  const e = (0, v.isEmpty)(null == o ? void 0 : o.ancestor)
                    ? ['woocommerce/single-product']
                    : null == o
                    ? void 0
                    : o.ancestor;
                  (0, n.registerBlockType)(t, {
                    ...o,
                    ancestor:
                      null !== (p = l) && void 0 !== p && p.includes('single-product') ? void 0 : e,
                  });
                }
            }, 'core/edit-site'),
              (0, be.subscribe)(() => {
                !(Boolean(c) ? $e.has(c) : $e.has(e)) &&
                  a &&
                  (r
                    ? ($e.add(c), (0, n.registerBlockVariation)(e, o))
                    : ($e.add(e), (0, n.registerBlockType)(t, o)));
              }, 'core/edit-post');
          };
        var He = o(8757);
        o(3047);
        const je = ({ blockClientId: e }) => {
          const { isDescendentOfSingleProductBlock: t } = (0, be.useSelect)(
            t => {
              const { getBlockParentsByBlockName: o } = t('core/block-editor');
              return {
                isDescendentOfSingleProductBlock:
                  o(null == e ? void 0 : e.replace('block-', ''), ['woocommerce/single-product'])
                    .length > 0,
              };
            },
            [e],
          );
          return { isDescendentOfSingleProductBlock: t };
        };
        var qe = o(846);
        (0, i.__)('Product Rating', 'woocommerce');
        const We = (0, r.createElement)(c.A, {
            icon: qe.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          Ge =
            ((0, i.__)('Display the average rating of a product.', 'woocommerce'),
            JSON.parse(
              '{"name":"woocommerce/product-rating","version":"1.0.0","icon":"info","title":"Product Rating","description":"Display the average rating of a product.","attributes":{"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfSingleProductTemplate":{"type":"boolean","default":false}},"usesContext":["query","queryId","postId"],"keywords":["WooCommerce"],"supports":{"align":true},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
            )),
          Qe = {
            ...((0, l.kM)() && {
              color: { text: !0, background: !1, link: !1, __experimentalSkipSerialization: !0 },
              spacing: { margin: !0, padding: !0 },
              typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
              __experimentalSelector: '.wc-block-components-product-rating',
            }),
            ...(!(0, l.kM)() &&
              'function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
                spacing: { margin: !0 },
              }),
          };
        ze({
          blockName: 'woocommerce/product-rating',
          blockMetadata: Ge,
          blockSettings: {
            ...u,
            ancestor: [
              'woocommerce/all-products',
              'woocommerce/single-product',
              'core/post-template',
              'woocommerce/product-template',
            ],
            icon: { src: We },
            supports: Qe,
            edit: e => {
              const { attributes: t, setAttributes: o, context: n } = e,
                c = (0, s.useBlockProps)({ className: 'wp-block-woocommerce-product-rating' }),
                a = { ...t, ...n, shouldDisplayMockedReviewsWhenProductHasNoReviews: !0 },
                l = Number.isFinite(n.queryId),
                { isDescendentOfSingleProductBlock: i } = je({
                  blockClientId: null == c ? void 0 : c.id,
                });
              let { isDescendentOfSingleProductTemplate: m } = Ee();
              return (
                (l || i) && (m = !1),
                (0, w.useEffect)(() => {
                  o({
                    isDescendentOfQueryLoop: l,
                    isDescendentOfSingleProductBlock: i,
                    isDescendentOfSingleProductTemplate: m,
                  });
                }, [o, l, i, m]),
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    s.BlockControls,
                    null,
                    (0, r.createElement)(s.AlignmentToolbar, {
                      value: t.textAlign,
                      onChange: e => {
                        o({ textAlign: e || '' });
                      },
                    }),
                  ),
                  (0, r.createElement)('div', { ...c }, (0, r.createElement)(He.default, { ...a })),
                )
              );
            },
          },
          isAvailableOnPostEditor: !0,
        });
        var Ye = o(43);
        const Ue = JSON.parse(
          '{"name":"woocommerce/product-rating-stars","version":"1.0.0","title":"Product Rating Stars","description":"Display the average rating of a product with stars","category":"woocommerce-product-elements","attributes":{"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfSingleProductTemplate":{"type":"boolean","default":false}},"usesContext":["query","queryId","postId"],"keywords":["WooCommerce"],"supports":{"align":true},"ancestor":["woocommerce/single-product"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        var Ke = o(9549);
        const Je = {
          ...((0, l.kM)() && {
            color: { text: !0, background: !1, link: !1, __experimentalSkipSerialization: !0 },
            spacing: { margin: !0, padding: !0 },
            typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
            __experimentalSelector: '.wc-block-components-product-rating',
          }),
        };
        (0, n.registerBlockType)(Ue, {
          icon: {
            src: (0, r.createElement)(c.A, {
              icon: Ye.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          supports: Je,
          edit: e => {
            const { attributes: t, setAttributes: o, context: n } = e,
              c = (0, s.useBlockProps)({ className: 'wp-block-woocommerce-product-rating' }),
              a = { ...t, ...n, shouldDisplayMockedReviewsWhenProductHasNoReviews: !0 },
              l = Number.isFinite(n.queryId),
              { isDescendentOfSingleProductBlock: i } = je({
                blockClientId: null == c ? void 0 : c.id,
              });
            let { isDescendentOfSingleProductTemplate: m } = Ee();
            return (
              (l || i) && (m = !1),
              (0, w.useEffect)(() => {
                o({
                  isDescendentOfQueryLoop: l,
                  isDescendentOfSingleProductBlock: i,
                  isDescendentOfSingleProductTemplate: m,
                });
              }, [o, l, i, m]),
              (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  s.BlockControls,
                  null,
                  (0, r.createElement)(s.AlignmentToolbar, {
                    value: t.textAlign,
                    onChange: e => {
                      o({ textAlign: e || '' });
                    },
                  }),
                ),
                (0, r.createElement)('div', { ...c }, (0, r.createElement)(Ke.default, { ...a })),
              )
            );
          },
        });
        const Ze = JSON.parse(
          '{"name":"woocommerce/product-rating-counter","version":"1.0.0","title":"Product Rating Counter","description":"Display the review count of a product","category":"woocommerce-product-elements","attributes":{"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfSingleProductTemplate":{"type":"boolean","default":false}},"usesContext":["query","queryId","postId"],"keywords":["WooCommerce"],"supports":{"align":true},"ancestor":["woocommerce/single-product"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        var Xe = o(8614);
        const et = {
          ...((0, l.kM)() && {
            color: { text: !1, background: !1, link: !0 },
            spacing: { margin: !0, padding: !0 },
            typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
            __experimentalSelector: '.wc-block-components-product-rating-counter',
          }),
        };
        (0, n.registerBlockType)(Ze, {
          icon: {
            src: (0, r.createElement)(c.A, {
              icon: Ye.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          supports: et,
          edit: e => {
            const { attributes: t, setAttributes: o, context: n } = e,
              c = (0, s.useBlockProps)({
                className: 'wp-block-woocommerce-product-rating-counter',
              }),
              a = { ...t, ...n, shouldDisplayMockedReviewsWhenProductHasNoReviews: !0 },
              l = Number.isFinite(n.queryId),
              { isDescendentOfSingleProductBlock: i } = je({
                blockClientId: null == c ? void 0 : c.id,
              });
            let { isDescendentOfSingleProductTemplate: m } = Ee();
            return (
              (l || i) && (m = !1),
              (0, w.useEffect)(() => {
                o({
                  isDescendentOfQueryLoop: l,
                  isDescendentOfSingleProductBlock: i,
                  isDescendentOfSingleProductTemplate: m,
                });
              }, [o, l, i, m]),
              (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  s.BlockControls,
                  null,
                  (0, r.createElement)(s.AlignmentToolbar, {
                    value: t.textAlign,
                    onChange: e => {
                      o({ textAlign: e || '' });
                    },
                  }),
                ),
                (0, r.createElement)('div', { ...c }, (0, r.createElement)(Xe.default, { ...a })),
              )
            );
          },
        });
        var tt = o(6822);
        const ot = JSON.parse(
          '{"name":"woocommerce/product-average-rating","version":"1.0.0","title":"Product Average Rating (Beta)","description":"Display the average rating of a product","category":"woocommerce-product-elements","attributes":{"textAlign":{"type":"string"}},"keywords":["WooCommerce"],"ancestor":["woocommerce/single-product"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        var rt = o(1579);
        const nt = {
          ...((0, l.kM)() && {
            color: { text: !0, background: !0, __experimentalSkipSerialization: !0 },
            spacing: { margin: !0, padding: !0, __experimentalSkipSerialization: !0 },
            typography: {
              fontSize: !0,
              __experimentalFontWeight: !0,
              __experimentalSkipSerialization: !0,
            },
            __experimentalSelector: '.wc-block-components-product-average-rating',
          }),
        };
        (0, n.registerBlockType)(ot, {
          icon: {
            src: (0, r.createElement)(c.A, {
              icon: tt.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          supports: nt,
          edit: e => {
            const { attributes: t, setAttributes: o } = e,
              n = (0, s.useBlockProps)({
                className: 'wp-block-woocommerce-product-average-rating',
              });
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                s.BlockControls,
                null,
                (0, r.createElement)(s.AlignmentToolbar, {
                  value: t.textAlign,
                  onChange: e => {
                    o({ textAlign: e || '' });
                  },
                }),
              ),
              (0, r.createElement)('div', { ...n }, (0, r.createElement)(rt.default, { ...t })),
            );
          },
        });
        var ct = o(498),
          at = o(4078);
        function lt({ selectedWidth: e, setAttributes: t }) {
          return (0, r.createElement)(
            g.PanelBody,
            { title: (0, i.__)('Width settings', 'woocommerce') },
            (0, r.createElement)(
              g.ButtonGroup,
              { 'aria-label': (0, i.__)('Button width', 'woocommerce') },
              [25, 50, 75, 100].map(o =>
                (0, r.createElement)(
                  g.Button,
                  {
                    key: o,
                    isSmall: !0,
                    variant: o === e ? 'primary' : void 0,
                    onClick: () => {
                      var r;
                      t({ width: e === (r = o) ? void 0 : r });
                    },
                  },
                  o,
                  '%',
                ),
              ),
            ),
          );
        }
        const st = JSON.parse(
            '{"name":"woocommerce/product-button","version":"1.0.0","title":"Add to Cart Button","description":"Display a call to action button which either adds the product to the cart, or links to the product page.","category":"woocommerce-product-elements","keywords":["WooCommerce"],"usesContext":["query","queryId","postId"],"textdomain":"woocommerce","attributes":{"productId":{"type":"number","default":0},"textAlign":{"type":"string","default":""},"width":{"type":"number"},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfQueryLoop":{"type":"boolean","default":false}},"supports":{"align":["wide","full"],"color":{"background":false,"link":true},"interactivity":true,"html":false,"typography":{"fontSize":true,"lineHeight":true}},"ancestor":["woocommerce/all-products","woocommerce/single-product","core/post-template","woocommerce/product-template"],"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"viewScript":["wc-product-button-interactivity-frontend"],"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          it = {
            ...st.supports,
            ...((0, l.kM)() && {
              color: { text: !0, background: !0, link: !1, __experimentalSkipSerialization: !0 },
              __experimentalBorder: { radius: !0, __experimentalSkipSerialization: !0 },
              ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
                spacing: { margin: !0, padding: !0, __experimentalSkipSerialization: !0 },
              }),
              typography: {
                fontSize: !0,
                lineHeight: !0,
                __experimentalFontWeight: !0,
                __experimentalFontFamily: !0,
                __experimentalFontStyle: !0,
                __experimentalTextTransform: !0,
                __experimentalTextDecoration: !0,
                __experimentalLetterSpacing: !0,
                __experimentalDefaultControls: { fontSize: !0 },
              },
              __experimentalSelector:
                '.wp-block-button.wc-block-components-product-button .wc-block-components-product-button__button',
            }),
            ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles &&
              !(0, l.kM)() && { spacing: { margin: !0 } }),
          };
        (0, n.registerBlockType)(st, {
          icon: {
            src: (0, r.createElement)(c.A, {
              icon: ct.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...st.attributes },
          supports: { ...it },
          edit: ({ attributes: e, setAttributes: t, context: o }) => {
            const n = (0, s.useBlockProps)(),
              c = Number.isFinite(null == o ? void 0 : o.queryId),
              { width: a } = e;
            return (
              (0, w.useEffect)(() => t({ isDescendentOfQueryLoop: c }), [t, c]),
              (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  s.BlockControls,
                  null,
                  c &&
                    (0, r.createElement)(s.AlignmentToolbar, {
                      value: e.textAlign,
                      onChange: e => {
                        t({ textAlign: e || '' });
                      },
                    }),
                ),
                (0, r.createElement)(
                  s.InspectorControls,
                  null,
                  (0, r.createElement)(lt, { selectedWidth: a, setAttributes: t }),
                ),
                (0, r.createElement)(
                  'div',
                  { ...n },
                  (0, r.createElement)(
                    g.Disabled,
                    null,
                    (0, r.createElement)(at.default, {
                      ...e,
                      ...o,
                      className: d()(e.className, {
                        [`has-custom-width wp-block-button__width-${a}`]: a,
                      }),
                    }),
                  ),
                ),
              )
            );
          },
          save: ({ attributes: e }) =>
            e.isDescendentOfQueryLoop || e.isDescendentOfSingleProductBlock
              ? null
              : (0, r.createElement)('div', {
                  ...s.useBlockProps.save({
                    className: d()('is-loading', e.className, {
                      [`has-custom-width wp-block-button__width-${e.width}`]: e.width,
                    }),
                  }),
                }),
        });
        var mt = o(3326),
          dt = o(6465);
        const ut = (0, i.__)('Product Summary', 'woocommerce'),
          pt = (0, r.createElement)(c.A, {
            icon: dt.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          gt = (0, i.__)('Display a short description about a product.', 'woocommerce');
        o(7764);
        const ht = ie({ icon: pt, label: ut, description: gt })(({ attributes: e }) => {
            const t = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...t },
              (0, r.createElement)(mt.default, { ...e }),
            );
          }),
          wt = {
            ...((0, l.kM)() && {
              color: { background: !1 },
              typography: { fontSize: !0 },
              __experimentalSelector: '.wc-block-components-product-summary',
            }),
          },
          _t = {
            ...u,
            apiVersion: 2,
            title: ut,
            description: gt,
            icon: { src: pt },
            attributes: { productId: { type: 'number', default: 0 } },
            supports: wt,
            edit: ht,
            save: ({ attributes: e }) =>
              (0, r.createElement)('div', {
                ...s.useBlockProps.save({ className: d()('is-loading', e.className) }),
              }),
          };
        (0, n.registerBlockType)('woocommerce/product-summary', _t);
        var bt = o(6809);
        var Et = o(1173);
        const kt = (0, i.__)('On-Sale Badge', 'woocommerce'),
          yt = (0, r.createElement)(c.A, {
            icon: Et.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          vt = (0, i.__)('Displays an on-sale badge if the product is on-sale.', 'woocommerce'),
          ft = {
            html: !1,
            align: !0,
            ...((0, l.kM)() && {
              color: {
                gradients: !0,
                background: !0,
                link: !1,
                __experimentalSkipSerialization: !0,
              },
              typography: {
                fontSize: !0,
                lineHeight: !0,
                __experimentalFontFamily: !0,
                __experimentalFontWeight: !0,
                __experimentalFontStyle: !0,
                __experimentalSkipSerialization: !0,
                __experimentalLetterSpacing: !0,
                __experimentalTextTransform: !0,
                __experimentalTextDecoration: !0,
              },
              __experimentalBorder: {
                color: !0,
                radius: !0,
                width: !0,
                __experimentalSkipSerialization: !0,
              },
              ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
                spacing: { margin: !0, padding: !0 },
              }),
              __experimentalSelector: '.wc-block-components-product-sale-badge',
            }),
            ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles &&
              !(0, l.kM)() && { spacing: { margin: !0 } }),
          },
          xt = {
            ...u,
            title: kt,
            description: vt,
            icon: { src: yt },
            apiVersion: 2,
            supports: ft,
            attributes: {
              productId: { type: 'number', default: 0 },
              isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
              isDescendentOfSingleProductTemplate: { type: 'boolean', default: !1 },
            },
            edit: ({ attributes: e, setAttributes: t, context: o }) => {
              const n = (0, s.useBlockProps)(),
                c = { ...e, ...o },
                a = Number.isFinite(o.queryId),
                { isDescendentOfSingleProductTemplate: l } = Ee();
              return (
                (0, w.useEffect)(
                  () => t({ isDescendentOfQueryLoop: a, isDescendentOfSingleProductTemplate: l }),
                  [t, a, l],
                ),
                (0, r.createElement)('div', { ...n }, (0, r.createElement)(bt.default, { ...c }))
              );
            },
            usesContext: ['query', 'queryId', 'postId'],
            ancestor: [
              'woocommerce/all-products',
              'woocommerce/single-product',
              'core/post-template',
              'woocommerce/product-template',
              'woocommerce/product-gallery',
            ],
          };
        (0, n.registerBlockType)('woocommerce/product-sale-badge', { ...xt });
        var Ct = o(4133);
        const St = e => {
          const t = ((0, se.useProductDataContext)().product || {}).id || e.productId || 0;
          return t && 1 !== t
            ? (0, r.createElement)(
                s.InspectorControls,
                null,
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-single-product__edit-card' },
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-single-product__edit-card-title' },
                    (0, r.createElement)(
                      'a',
                      {
                        href: `${W.ADMIN_URL}post.php?post=${t}&action=edit`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      (0, i.__)("Edit this product's details", 'woocommerce'),
                      (0, r.createElement)(c.A, { icon: Ct.A, size: 16 }),
                    ),
                  ),
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-single-product__edit-card-description' },
                    (0, i.__)(
                      'Edit details such as title, price, description and more.',
                      'woocommerce',
                    ),
                  ),
                ),
              )
            : null;
        };
        var Nt = o(3975);
        const Pt = {
            ...u.supports,
            color: { text: !0, background: !0 },
            typography: {
              fontSize: !0,
              lineHeight: !0,
              ...((0, l.kM)() && {
                __experimentalFontWeight: !0,
                __experimentalFontFamily: !0,
                __experimentalFontStyle: !0,
                __experimentalTextTransform: !0,
                __experimentalTextDecoration: !0,
                __experimentalLetterSpacing: !0,
              }),
            },
            ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
              spacing: { margin: !0, padding: !0 },
            }),
          },
          At = (0, r.createElement)(
            _.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, r.createElement)('path', {
              d:
                'M2 6h2v12H2V6m3 0h1v12H5V6m2 0h3v12H7V6m4 0h1v12h-1V6m3 0h2v12h-2V6m3 0h3v12h-3V6m4 0h1v12h-1V6z',
            }),
          ),
          Bt = (0, i.__)('Product SKU', 'woocommerce'),
          Tt = (0, r.createElement)(c.A, {
            icon: At,
            className: 'wc-block-editor-components-block-icon',
          }),
          It = (0, i.__)('Display the SKU of a product.', 'woocommerce'),
          { ancestor: Ot, ...Lt } = u,
          Dt = {
            ...Lt,
            apiVersion: 2,
            title: Bt,
            description: It,
            icon: { src: Tt },
            usesContext: ['query', 'queryId', 'postId'],
            attributes: {
              productId: { type: 'number', default: 0 },
              isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
              isDescendentOfSingleProductTemplate: { type: 'boolean', default: !1 },
              isDescendantOfAllProducts: { type: 'boolean', default: !1 },
              showProductSelector: { type: 'boolean', default: !1 },
            },
            ancestor: [
              'woocommerce/all-products',
              'woocommerce/single-product',
              'core/post-template',
              'woocommerce/product-template',
              'woocommerce/product-meta',
            ],
            edit: ({ attributes: e, setAttributes: t, context: o }) => {
              const { style: n, ...c } = (0, s.useBlockProps)({
                  className: 'wc-block-components-product-sku wp-block-woocommerce-product-sku',
                }),
                a = { ...e, ...o },
                l = Number.isFinite(o.queryId),
                { isDescendentOfSingleProductBlock: i } = je({ blockClientId: c.id });
              let { isDescendentOfSingleProductTemplate: m } = Ee();
              return (
                l && (m = !1),
                (0, w.useEffect)(
                  () =>
                    t({
                      isDescendentOfQueryLoop: l,
                      isDescendentOfSingleProductTemplate: m,
                      isDescendentOfSingleProductBlock: i,
                    }),
                  [t, l, m, i],
                ),
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(St, null),
                  (0, r.createElement)(
                    'div',
                    { ...c, style: e.isDescendantOfAllProducts ? void 0 : n },
                    (0, r.createElement)(Nt.default, { ...a }),
                  ),
                )
              );
            },
            supports: Pt,
          };
        (0, n.registerBlockType)('woocommerce/product-sku', { ...Dt });
        var Rt = o(2686),
          Mt = o(885);
        const Ft = (0, i.__)('Product Stock Indicator', 'woocommerce'),
          Vt = (0, r.createElement)(c.A, {
            icon: Mt.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          $t = (0, i.__)('Display product stock status.', 'woocommerce'),
          zt = ie({ icon: Vt, label: Ft, description: $t })(
            ({ attributes: e, setAttributes: t, context: o }) => {
              const { style: n, ...c } = (0, s.useBlockProps)({
                  className: 'wc-block-components-product-stock-indicator',
                }),
                a = { ...e, ...o },
                l = Number.isFinite(o.queryId);
              return (
                (0, w.useEffect)(() => t({ isDescendentOfQueryLoop: l }), [t, l]),
                (0, r.createElement)(
                  'div',
                  { ...c, style: e.isDescendantOfAllProducts ? void 0 : n },
                  (0, r.createElement)(St, null),
                  (0, r.createElement)(Rt.default, { ...a }),
                )
              );
            },
          ),
          Ht = {
            ...u.supports,
            color: { text: !0, background: !0 },
            typography: {
              fontSize: !0,
              lineHeight: !0,
              ...((0, l.kM)() && {
                __experimentalFontWeight: !0,
                __experimentalFontFamily: !0,
                __experimentalFontStyle: !0,
                __experimentalTextTransform: !0,
                __experimentalTextDecoration: !0,
                __experimentalLetterSpacing: !0,
              }),
            },
            ...('function' == typeof s.__experimentalGetSpacingClassesAndStyles && {
              spacing: { margin: !0, padding: !0 },
            }),
          },
          jt = {
            ...u,
            apiVersion: 2,
            title: Ft,
            description: $t,
            icon: { src: Vt },
            attributes: {
              productId: { type: 'number', default: 0 },
              isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
              isDescendantOfAllProducts: { type: 'boolean', default: !1 },
            },
            supports: Ht,
            edit: zt,
            usesContext: ['query', 'queryId', 'postId'],
            ancestor: [
              'woocommerce/all-products',
              'woocommerce/single-product',
              'core/post-template',
              'woocommerce/product-template',
            ],
          };
        (0, n.registerBlockType)('woocommerce/product-stock-indicator', { ...jt });
        const qt = JSON.parse(
          '{"name":"woocommerce/add-to-cart-form","version":"1.0.0","title":"Add to Cart with Options","description":"Display a button so the customer can add a product to their cart. Options will also be displayed depending on product type. e.g. quantity, variation.","category":"woocommerce-product-elements","attributes":{"isDescendentOfSingleProductBlock":{"type":"boolean","default":false}},"keywords":["WooCommerce"],"usesContext":["postId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        o(6455);
        const Wt = ({ numberOfLines: e = 1, tag: t = 'div', maxWidth: o = '100%' }) => {
          const n = Array.from({ length: e }, (e, t) =>
            (0, r.createElement)('span', {
              className: 'wc-block-components-skeleton-text-line',
              'aria-hidden': 'true',
              key: t,
            }),
          );
          return (0, r.createElement)(
            t,
            { className: 'wc-block-components-skeleton', style: { maxWidth: o } },
            n,
          );
        };
        o(3527);
        o(5195);
        const Gt = {
          edit: e => {
            const { setAttributes: t } = e,
              o = (0, s.useBlockProps)({ className: 'wc-block-add-to-cart-form' }),
              { isDescendentOfSingleProductBlock: n } = je({
                blockClientId: null == o ? void 0 : o.id,
              });
            return (
              (0, w.useEffect)(() => {
                t({ isDescendentOfSingleProductBlock: n });
              }, [t, n]),
              (0, r.createElement)(
                'div',
                { ...o },
                (0, r.createElement)(
                  g.Tooltip,
                  {
                    text:
                      'Customer will see product add-to-cart options in this space, dependent on the product type. ',
                    position: 'bottom right',
                  },
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-editor-add-to-cart-form-container' },
                    (0, r.createElement)(Wt, { numberOfLines: 3 }),
                    (0, r.createElement)(
                      g.Disabled,
                      null,
                      (0, r.createElement)(
                        'div',
                        { className: 'quantity' },
                        (0, r.createElement)('input', {
                          type: 'number',
                          value: '1',
                          className: 'input-text qty text',
                          readOnly: !0,
                        }),
                      ),
                      (0, r.createElement)(
                        'button',
                        { className: 'single_add_to_cart_button button alt wp-element-button' },
                        (0, i.__)('Add to cart', 'woocommerce'),
                      ),
                    ),
                  ),
                ),
              )
            );
          },
          icon: {
            src: (0, r.createElement)(c.A, {
              icon: ct.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          ancestor: ['woocommerce/single-product'],
          save: () => null,
        };
        ze({
          blockName: qt.name,
          blockMetadata: qt,
          blockSettings: Gt,
          isAvailableOnPostEditor: !0,
        });
        var Qt = o(3782);
        o(3400);
        const Yt = () =>
            (0, r.createElement)(
              'div',
              { className: 'wc-block-editor-product-gallery' },
              (0, r.createElement)('img', {
                src: `${l.sW}block-placeholders/product-image-gallery.svg`,
                alt: 'Placeholder',
              }),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-editor-product-gallery__other-images' },
                [...Array(4).keys()].map(e =>
                  (0, r.createElement)('img', {
                    key: e,
                    src: `${l.sW}block-placeholders/product-image-gallery.svg`,
                    alt: 'Placeholder',
                  }),
                ),
              ),
            ),
          Ut = JSON.parse(
            '{"name":"woocommerce/product-image-gallery","version":"1.0.0","title":"Product Image Gallery","icon":"gallery","description":"Display a product\'s images.","category":"woocommerce-product-elements","supports":{"align":true,"multiple":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        o(618);
        const Kt = 'woocommerce/product-gallery';
        ze({
          blockName: Ut.name,
          blockMetadata: Ut,
          blockSettings: {
            icon: Qt.A,
            edit: ({ context: e }) => {
              const t = (0, s.useBlockProps)();
              return (0, v.isEmptyObject)(e)
                ? (0, r.createElement)(
                    'div',
                    { ...t },
                    (0, r.createElement)(g.Disabled, null, (0, r.createElement)(Yt, null)),
                  )
                : (0, r.createElement)(r.Fragment, null);
            },
            transforms: {
              to: [{ type: 'block', blocks: [Kt], transform: () => (0, n.createBlock)(Kt) }],
            },
          },
          isAvailableOnPostEditor: !1,
        });
        const Jt = (0, r.createElement)(
            _.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, r.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: 'currentColor',
              d:
                'M5 5.5H19C19.1326 5.5 19.2598 5.55268 19.3536 5.64645C19.4473 5.74021 19.5 5.86739 19.5 6V7.5C19.5 7.63261 19.4473 7.75979 19.3536 7.85355C19.2598 7.94732 19.1326 8 19 8H5C4.86739 8 4.74021 7.94732 4.64645 7.85355C4.55268 7.75979 4.5 7.63261 4.5 7.5V6C4.5 5.86739 4.55268 5.74021 4.64645 5.64645C4.74021 5.55268 4.86739 5.5 5 5.5V5.5ZM4 9.232C3.69597 9.05647 3.4435 8.804 3.26796 8.49997C3.09243 8.19594 3.00001 7.85106 3 7.5V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V7.5C21 7.85106 20.9076 8.19594 20.732 8.49997C20.5565 8.804 20.304 9.05647 20 9.232V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V9.232ZM5.5 9.5V18C5.5 18.1326 5.55268 18.2598 5.64645 18.3536C5.74021 18.4473 5.86739 18.5 6 18.5H18C18.1326 18.5 18.2598 18.4473 18.3536 18.3536C18.4473 18.2598 18.5 18.1326 18.5 18V9.5H5.5Z',
            }),
            (0, r.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8 13.25V11.75H16V13.25L8 13.25Z',
            }),
            (0, r.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8 16.25V14.75H16V16.25H8Z',
            }),
          ),
          Zt = JSON.parse(
            '{"name":"woocommerce/product-details","version":"1.0.0","icon":"info","title":"Product Details","description":"Display a product\'s description, attributes, and reviews.","category":"woocommerce-product-elements","keywords":["WooCommerce"],"supports":{"align":true,"spacing":{"margin":true}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          Xt = ({ id: e, title: t, active: o }) =>
            (0, r.createElement)(
              'li',
              {
                className: d()(`${e}_tab`, { active: o }),
                id: `tab-title-${e}`,
                role: 'tab',
                'aria-controls': `tab-${e}`,
              },
              (0, r.createElement)('a', { href: `#tab-${e}` }, t),
            ),
          eo = ({ id: e, content: t }) =>
            (0, r.createElement)(
              'div',
              {
                className: `${e}_tab`,
                id: `tab-title-${e}`,
                role: 'tab',
                'aria-controls': `tab-${e}`,
              },
              t,
            ),
          to = () => {
            const e = [
                {
                  id: 'description',
                  title: 'Description',
                  active: !0,
                  content: (0, i.__)(
                    'This block lists description, attributes and reviews for a single product.',
                    'woocommerce',
                  ),
                },
                { id: 'additional_information', title: 'Additional Information', active: !1 },
                { id: 'reviews', title: 'Reviews', active: !1 },
              ],
              t = e.map(({ id: e, title: t, active: o }) =>
                (0, r.createElement)(Xt, { key: e, id: e, title: t, active: o }),
              ),
              o = e.map(({ id: e, content: t }) =>
                (0, r.createElement)(eo, { key: e, id: e, content: t }),
              );
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)('ul', { className: 'wc-tabs tabs', role: 'tablist' }, t),
              o,
            );
          };
        o(6160);
        o(3778),
          ze({
            blockName: Zt.name,
            blockMetadata: Zt,
            blockSettings: {
              icon: {
                src: (0, r.createElement)(c.A, {
                  icon: Jt,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
              edit: ({ attributes: e }) => {
                const { className: t } = e,
                  o = (0, s.useBlockProps)({ className: t });
                return (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    'div',
                    { ...o },
                    (0, r.createElement)(g.Disabled, null, (0, r.createElement)(to, null)),
                  ),
                );
              },
            },
            isAvailableOnPostEditor: !1,
          });
        const oo = JSON.parse(
            '{"name":"woocommerce/product-reviews","version":"1.0.0","icon":"admin-comments","title":"Product Reviews","description":"A block that shows the reviews for a product.","category":"woocommerce-product-elements","keywords":["WooCommerce"],"supports":{},"attributes":{},"usesContext":["postId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          ro = () =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                g.Notice,
                {
                  className: 'wc-block-editor-related-products__notice',
                  status: 'info',
                  isDismissible: !1,
                },
                (0, r.createElement)(
                  'p',
                  null,
                  (0, i.__)(
                    'The products reviews and the form to add a new review will be displayed here according to your theme. The look you see here is not representative of what is going to look like, this is just a placeholder.',
                    'woocommerce',
                  ),
                ),
              ),
              (0, r.createElement)(
                'h2',
                null,
                (0, i.__)('3 reviews for this product', 'woocommerce'),
              ),
              (0, r.createElement)('img', {
                src: `${l.sW}block-placeholders/product-reviews.svg`,
                alt: 'Placeholder',
              }),
              (0, r.createElement)('h3', null, (0, i.__)('Add a review', 'woocommerce')),
              (0, r.createElement)(
                'div',
                { className: 'wp-block-woocommerce-product-reviews__editor__form-container' },
                (0, r.createElement)(
                  'div',
                  { className: 'wp-block-woocommerce-product-reviews__editor__row' },
                  (0, r.createElement)('span', null, (0, i.__)('Your rating *', 'woocommerce')),
                  (0, r.createElement)('p', {
                    className: 'wp-block-woocommerce-product-reviews__editor__stars',
                  }),
                ),
                (0, r.createElement)(
                  'div',
                  { className: 'wp-block-woocommerce-product-reviews__editor__row' },
                  (0, r.createElement)('span', null, (0, i.__)('Your review *', 'woocommerce')),
                  (0, r.createElement)('textarea', null),
                ),
                (0, r.createElement)('input', {
                  type: 'submit',
                  className: 'submit wp-block-button__link wp-element-button',
                  value: (0, i.__)('Submit', 'woocommerce'),
                }),
              ),
            );
        o(445),
          ze({
            blockName: oo.name,
            blockMetadata: oo,
            blockSettings: {
              edit: ({ attributes: e }) => {
                const { className: t } = e,
                  o = (0, s.useBlockProps)({ className: t });
                return (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    'div',
                    { ...o },
                    (0, r.createElement)(g.Disabled, null, (0, r.createElement)(ro, null)),
                  ),
                );
              },
            },
            isAvailableOnPostEditor: !1,
          });
        const no = (0, r.createElement)(
          _.SVG,
          { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
          (0, r.createElement)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z',
          }),
        );
        function co(
          e,
          { blockDescription: t, blockIcon: o, blockTitle: r, variationName: c, scope: a },
        ) {
          (0, n.registerBlockVariation)(e, {
            description: t,
            name: c,
            title: r,
            isActive: e => e.__woocommerceNamespace === c,
            icon: { src: o },
            attributes: { __woocommerceNamespace: c },
            scope: a,
          });
        }
        const ao = 'woocommerce/product-query/product-title';
        co('core/post-title', {
          blockDescription: pe,
          blockIcon: (0, r.createElement)(g.Icon, { icon: me.A }),
          blockTitle: de,
          variationName: ao,
          scope: ['block'],
        });
        var lo = o(4396);
        const so = 'woocommerce/product-query/product-template';
        co('core/post-template', {
          blockDescription: (0, i.__)(
            'Contains the block elements used to render a product, like its name, featured image, rating, and more.',
            'woocommerce',
          ),
          blockIcon: (0, r.createElement)(g.Icon, { icon: lo.A }),
          blockTitle: (0, i.__)('Product template', 'woocommerce'),
          variationName: so,
          scope: ['block', 'inserter'],
        });
        const io = (0, W.getSetting)('stockStatusOptions', []),
          mo =
            ((0, W.getSetting)('hideOutOfStockItems', !1)
              ? Object.keys(
                  (function(e, t) {
                    const { [t]: o, ...r } = e;
                    return r;
                  })(io, 'outofstock'),
                )
              : Object.keys(io),
            (0, W.getSettingWithCoercion)('postTemplateHasSupportForGridView', !1, v.isBoolean),
            Oe.e.THUMBNAIL,
            'woocommerce/related-products'),
          uo = {
            namespace: mo,
            allowedControls: [],
            displayLayout: { type: 'flex', columns: 5 },
            query: {
              perPage: 5,
              pages: 0,
              offset: 0,
              postType: 'product',
              order: 'asc',
              orderBy: 'title',
              author: '',
              search: '',
              exclude: [],
              sticky: '',
              inherit: !1,
            },
            lock: { remove: !0, move: !0 },
          },
          po = (0, W.getSettingWithCoercion)('postTemplateHasSupportForGridView', !1, v.isBoolean),
          go = [
            [
              'core/heading',
              {
                level: 2,
                content: (0, i.__)('Related products', 'woocommerce'),
                style: { spacing: { margin: { top: '1rem', bottom: '1rem' } } },
              },
            ],
            [
              'core/post-template',
              {
                __woocommerceNamespace: so,
                ...(po && { layout: { type: 'grid', columnCount: 5 } }),
              },
              [
                ['woocommerce/product-image', { productId: 0, imageSizing: 'cropped' }],
                [
                  'core/post-title',
                  {
                    textAlign: 'center',
                    level: 3,
                    fontSize: 'medium',
                    isLink: !0,
                    __woocommerceNamespace: ao,
                  },
                  [],
                ],
                [
                  'woocommerce/product-price',
                  {
                    textAlign: 'center',
                    fontSize: 'small',
                    style: { spacing: { margin: { bottom: '1rem' } } },
                  },
                  [],
                ],
                [
                  'woocommerce/product-button',
                  {
                    textAlign: 'center',
                    fontSize: 'small',
                    style: { spacing: { margin: { bottom: '1rem' } } },
                  },
                  [],
                ],
              ],
            ],
          ];
        ze({
          blockName: 'core/query',
          blockMetadata: {},
          blockSettings: {
            description: (0, i.__)('Display related products.', 'woocommerce'),
            name: 'Related Products Controls',
            title: (0, i.__)('Related Products Controls', 'woocommerce'),
            isActive: e => e.namespace === mo,
            icon: (0, r.createElement)(g.Icon, {
              icon: no,
              className:
                'wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks',
            }),
            attributes: uo,
            allowedControls: [],
            innerBlocks: go,
            scope: ['block'],
          },
          isVariationBlock: !0,
          variationName: mo,
        }),
          o(9278);
        const ho = JSON.parse(
          '{"name":"woocommerce/related-products","version":"1.0.0","title":"Related Products","icon":"product","description":"Display related products.","category":"woocommerce","supports":{"align":true,"reusable":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        ze({
          blockName: ho.name,
          blockMetadata: ho,
          blockSettings: {
            icon: Mt.A,
            edit: () => {
              const e = [['core/query', uo, go]],
                t = (0, s.useBlockProps)();
              return (0, r.createElement)(
                'div',
                { ...t },
                (0, r.createElement)(
                  s.InspectorControls,
                  null,
                  (0, r.createElement)(
                    g.Notice,
                    {
                      className: 'wc-block-editor-related-products__notice',
                      status: 'warning',
                      isDismissible: !1,
                    },
                    (0, r.createElement)(
                      'p',
                      null,
                      (0, i.__)(
                        'These products will vary depending on the main product in the page',
                        'woocommerce',
                      ),
                    ),
                  ),
                ),
                (0, r.createElement)(s.InnerBlocks, { template: e }),
              );
            },
            save: () => {
              const e = s.useBlockProps.save();
              return (0, r.createElement)(
                'div',
                { ...e },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              );
            },
          },
          isAvailableOnPostEditor: !1,
        });
        const wo = (0, r.createElement)(
          _.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, r.createElement)('path', {
            id: 'icon/action/view_list_24px',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: 'currentColor',
            d:
              'M5 5.5H19C19.1326 5.5 19.2598 5.55268 19.3536 5.64645C19.4473 5.74021 19.5 5.86739 19.5 6V7.5C19.5 7.63261 19.4473 7.75979 19.3536 7.85355C19.2598 7.94732 19.1326 8 19 8H5C4.86739 8 4.74021 7.94732 4.64645 7.85355C4.55268 7.75979 4.5 7.63261 4.5 7.5V6C4.5 5.86739 4.55268 5.74021 4.64645 5.64645C4.74021 5.55268 4.86739 5.5 5 5.5V5.5ZM4 9.232C3.69597 9.05647 3.4435 8.804 3.26796 8.49997C3.09243 8.19594 3.00001 7.85106 3 7.5V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V7.5C21 7.85106 20.9076 8.19594 20.732 8.49997C20.5565 8.804 20.304 9.05647 20 9.232V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V9.232ZM5.5 9.5V18C5.5 18.1326 5.55268 18.2598 5.64645 18.3536C5.74021 18.4473 5.86739 18.5 6 18.5H18C18.1326 18.5 18.2598 18.4473 18.3536 18.3536C18.4473 18.2598 18.5 18.1326 18.5 18V9.5H5.5Z',
          }),
          (0, r.createElement)('circle', { cx: '9', cy: '14', r: '1' }),
          (0, r.createElement)('circle', { cx: '12', cy: '14', r: '1' }),
          (0, r.createElement)('circle', { cx: '15', cy: '14', r: '1' }),
        );
        o(4593);
        const _o = JSON.parse(
          '{"name":"woocommerce/product-meta","version":"1.0.0","title":"Product Meta","icon":"product","description":"Display a product’s SKU, categories, tags, and more.","category":"woocommerce-product-elements","supports":{"align":true,"reusable":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        ze({
          blockName: _o.name,
          blockMetadata: _o,
          blockSettings: {
            edit: () => {
              const e = [
                  [
                    'core/group',
                    { layout: { type: 'flex', flexWrap: 'nowrap' } },
                    [
                      ['woocommerce/product-sku', { isDescendentOfSingleProductTemplate: Ee() }],
                      [
                        'core/post-terms',
                        { prefix: (0, i.__)('Category: ', 'woocommerce'), term: 'product_cat' },
                      ],
                      [
                        'core/post-terms',
                        { prefix: (0, i.__)('Tags: ', 'woocommerce'), term: 'product_tag' },
                      ],
                    ],
                  ],
                ],
                t = (0, s.useBlockProps)();
              return (0, r.createElement)(
                'div',
                { ...t },
                (0, r.createElement)(s.InnerBlocks, { template: e }),
              );
            },
            save: () => {
              const e = s.useBlockProps.save();
              return (0, r.createElement)(
                'div',
                { ...e },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              );
            },
            icon: {
              src: (0, r.createElement)(c.A, {
                icon: wo,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            ancestor: ['woocommerce/single-product'],
          },
          isAvailableOnPostEditor: !0,
        });
        const bo = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":1,"textdomain":"woocommerce","name":"woocommerce/all-products","title":"All Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display products from your store in a grid layout.","supports":{"align":["wide","full"],"html":false,"multiple":false},"attributes":{"columns":{"type":"number"},"rows":{"type":"number"},"alignButtons":{"type":"boolean"},"contentVisibility":{"type":"object"},"orderby":{"type":"string"},"layoutConfig":{"type":"array"},"isPreview":{"type":"boolean","default":false}}}',
          ),
          Eo = (e, t) => {
            const { className: o, contentVisibility: r } = t;
            return d()(e, o, {
              'has-image': r && r.image,
              'has-title': r && r.title,
              'has-rating': r && r.rating,
              'has-price': r && r.price,
              'has-button': r && r.button,
            });
          },
          { attributes: ko } = bo,
          yo = {
            attributes: Object.assign({}, ko, { rows: { type: 'number', default: 1 } }),
            save({ attributes: e }) {
              const t = { 'data-attributes': JSON.stringify(e) };
              return (0, r.createElement)(
                'div',
                { className: Eo('wc-block-all-products', e), ...t },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              );
            },
          },
          vo = [yo],
          fo = (e, t, o) =>
            o
              ? Math.min(e, t) === e
                ? t
                : Math.max(e, o) === e
                ? o
                : e
              : Math.max(e, t) === t
              ? e
              : t,
          xo = ({
            columns: e,
            rows: t,
            setAttributes: o,
            alignButtons: n,
            minColumns: c = 1,
            maxColumns: a = 6,
            minRows: l = 1,
            maxRows: s = 6,
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(g.RangeControl, {
                label: (0, i.__)('Columns', 'woocommerce'),
                value: e,
                onChange: e => {
                  const t = fo(e, c, a);
                  o({ columns: Number.isNaN(t) ? '' : t });
                },
                min: c,
                max: a,
              }),
              (0, r.createElement)(g.RangeControl, {
                label: (0, i.__)('Rows', 'woocommerce'),
                value: t,
                onChange: e => {
                  const t = fo(e, l, s);
                  o({ rows: Number.isNaN(t) ? '' : t });
                },
                min: l,
                max: s,
              }),
              (0, r.createElement)(g.ToggleControl, {
                label: (0, i.__)('Align the last block to the bottom', 'woocommerce'),
                help: n
                  ? (0, i.__)('Align the last block to the bottom.', 'woocommerce')
                  : (0, i.__)('The last inner block will follow other content.', 'woocommerce'),
                checked: n,
                onChange: () => o({ alignButtons: !n }),
              }),
            ),
          Co = window.wc.wcBlocksRegistry;
        (o.p = l.XK),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-price',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(2388)]).then(o.bind(o, 2519))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-image',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(4232)]).then(o.bind(o, 8110))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-title',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(2105)]).then(o.bind(o, 6143))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-rating',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(462)]).then(o.bind(o, 8757))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-rating-stars',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(8578)]).then(o.bind(o, 9549))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-rating-counter',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(8553)]).then(o.bind(o, 8614))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-average-rating',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(8647)]).then(o.bind(o, 1579))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-button',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(7409)]).then(o.bind(o, 4078))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-summary',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(3895)]).then(o.bind(o, 3326))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-sale-badge',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(4442)]).then(o.bind(o, 6809))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-sku',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(2724)]).then(o.bind(o, 3975))),
          }),
          (0, Co.registerBlockComponent)({
            blockName: 'woocommerce/product-stock-indicator',
            component: (0, w.lazy)(() => Promise.all([o.e(94), o.e(345)]).then(o.bind(o, 2686))),
          });
        const So = e => (0, Co.getRegisteredBlockComponents)(e),
          No = [
            {
              id: 1,
              name: 'WordPress Pennant',
              variation: '',
              permalink: 'https://example.org',
              sku: 'wp-pennant',
              short_description: (0, i.__)(
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
                  src: l.sW + 'previews/pennant.jpg',
                  thumbnail: l.sW + 'previews/pennant.jpg',
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
                text: (0, i.__)('Add to cart', 'woocommerce'),
                description: (0, i.__)('Add to cart', 'woocommerce'),
              },
              has_options: !1,
              is_purchasable: !0,
              is_in_stock: !0,
              on_sale: !0,
            },
          ],
          Po = [
            ['woocommerce/product-image', { imageSizing: Oe.e.THUMBNAIL }],
            ['woocommerce/product-title'],
            ['woocommerce/product-price'],
            ['woocommerce/product-rating'],
            ['woocommerce/product-button'],
          ],
          Ao = e =>
            e && 0 !== e.length
              ? e.map(e => {
                  var t, o;
                  return [
                    e.name,
                    {
                      ...e.attributes,
                      product: void 0,
                      children: e.innerBlocks.length > 0 ? Ao(e.innerBlocks) : [],
                      ...(e.name === st.name && {
                        className: d()(e.attributes.className, {
                          [`has-custom-width wp-block-button__width-${
                            null === (t = e.attributes) || void 0 === t ? void 0 : t.width
                          }`]: null === (o = e.attributes) || void 0 === o ? void 0 : o.width,
                        }),
                      }),
                      isDescendantOfAllProducts: !0,
                    },
                  ];
                })
              : [];
        var Bo = o(458),
          To = o.n(Bo),
          Io = o(4656);
        o(4156);
        const Oo = ({
          currentPage: e,
          displayFirstAndLastPages: t = !0,
          displayNextAndPreviousArrows: o = !0,
          pagesToDisplay: n = 3,
          onPageChange: c,
          totalPages: a,
        }) => {
          let { minIndex: l, maxIndex: s } = ((e, t, o) => {
            if (o <= 2) return { minIndex: null, maxIndex: null };
            const r = e - 1,
              n = Math.max(Math.floor(t - r / 2), 2),
              c = Math.min(Math.ceil(t + (r - (t - n))), o - 1);
            return { minIndex: Math.max(Math.floor(t - (r - (c - t))), 2), maxIndex: c };
          })(n, e, a);
          const m = t && Boolean(1 !== l),
            u = t && Boolean(s !== a),
            p = t && Boolean(l && l > 3),
            g = t && Boolean(s && s < a - 2);
          m && 3 === l && (l -= 1), u && s === a - 2 && (s += 1);
          const h = [];
          if (l && s) for (let e = l; e <= s; e++) h.push(e);
          return (0, r.createElement)(
            'div',
            { className: 'wc-block-pagination wc-block-components-pagination' },
            (0, r.createElement)(Io.Label, {
              screenReaderLabel: (0, i.__)('Navigate to another page', 'woocommerce'),
            }),
            o &&
              (0, r.createElement)(
                'button',
                {
                  className:
                    'wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow',
                  onClick: () => c(e - 1),
                  title: (0, i.__)('Previous page', 'woocommerce'),
                  disabled: e <= 1,
                },
                (0, r.createElement)(Io.Label, {
                  label: '←',
                  screenReaderLabel: (0, i.__)('Previous page', 'woocommerce'),
                }),
              ),
            m &&
              (0, r.createElement)(
                'button',
                {
                  className: d()(
                    'wc-block-pagination-page',
                    'wc-block-components-pagination__page',
                    {
                      'wc-block-pagination-page--active': 1 === e,
                      'wc-block-components-pagination__page--active': 1 === e,
                    },
                  ),
                  onClick: () => c(1),
                  disabled: 1 === e,
                },
                (0, r.createElement)(Io.Label, {
                  label: '1',
                  screenReaderLabel: (0,
                  i.sprintf) /* translators: %d is the page number (1, 2, 3...). */(
                    /* translators: %d is the page number (1, 2, 3...). */
                    (0, i.__)('Page %d', 'woocommerce'),
                    1,
                  ),
                }),
              ),
            p &&
              (0, r.createElement)(
                'span',
                {
                  className:
                    'wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis',
                  'aria-hidden': 'true',
                },
                (0, i.__)('…', 'woocommerce'),
              ),
            h.map(t =>
              (0, r.createElement)(
                'button',
                {
                  key: t,
                  className: d()(
                    'wc-block-pagination-page',
                    'wc-block-components-pagination__page',
                    {
                      'wc-block-pagination-page--active': e === t,
                      'wc-block-components-pagination__page--active': e === t,
                    },
                  ),
                  onClick: e === t ? void 0 : () => c(t),
                  disabled: e === t,
                },
                (0, r.createElement)(Io.Label, {
                  label: t.toString(),
                  screenReaderLabel: (0,
                  i.sprintf) /* translators: %d is the page number (1, 2, 3...). */(
                    /* translators: %d is the page number (1, 2, 3...). */
                    (0, i.__)('Page %d', 'woocommerce'),
                    t,
                  ),
                }),
              ),
            ),
            g &&
              (0, r.createElement)(
                'span',
                {
                  className:
                    'wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis',
                  'aria-hidden': 'true',
                },
                (0, i.__)('…', 'woocommerce'),
              ),
            u &&
              (0, r.createElement)(
                'button',
                {
                  className: d()(
                    'wc-block-pagination-page',
                    'wc-block-components-pagination__page',
                    {
                      'wc-block-pagination-page--active': e === a,
                      'wc-block-components-pagination__page--active': e === a,
                    },
                  ),
                  onClick: () => c(a),
                  disabled: e === a,
                },
                (0, r.createElement)(Io.Label, {
                  label: a.toString(),
                  screenReaderLabel: (0,
                  i.sprintf) /* translators: %d is the page number (1, 2, 3...). */(
                    /* translators: %d is the page number (1, 2, 3...). */
                    (0, i.__)('Page %d', 'woocommerce'),
                    a,
                  ),
                }),
              ),
            o &&
              (0, r.createElement)(
                'button',
                {
                  className:
                    'wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow',
                  onClick: () => c(e + 1),
                  title: (0, i.__)('Next page', 'woocommerce'),
                  disabled: e >= a,
                },
                (0, r.createElement)(Io.Label, {
                  label: '→',
                  screenReaderLabel: (0, i.__)('Next page', 'woocommerce'),
                }),
              ),
          );
        };
        function Lo(e, t) {
          const o = (0, w.useRef)();
          return (
            (0, w.useEffect)(() => {
              o.current === e || (t && !t(e, o.current)) || (o.current = e);
            }, [e, t]),
            o.current
          );
        }
        var Do = o(7594);
        function Ro(e) {
          const t = (0, w.useRef)(e);
          return J()(e, t.current) || (t.current = e), t.current;
        }
        const Mo = (0, w.createContext)('page'),
          Fo = () => (0, w.useContext)(Mo),
          Vo =
            (Mo.Provider,
            (e, t, o) => {
              const r = Fo();
              o = o || r;
              const n = (0, be.useSelect)(
                  r => r(Do.QUERY_STATE_STORE_KEY).getValueForQueryKey(o, e, t),
                  [o, e],
                ),
                { setQueryValue: c } = (0, be.useDispatch)(Do.QUERY_STATE_STORE_KEY);
              return [
                n,
                (0, w.useCallback)(
                  t => {
                    c(o, e, t);
                  },
                  [o, e, c],
                ),
              ];
            }),
          $o = e => {
            const t = { namespace: '/wc/store/v1', resourceName: 'products' },
              { results: o, isLoading: r } = (e => {
                const {
                  namespace: t,
                  resourceName: o,
                  resourceValues: r = [],
                  query: n = {},
                  shouldSelect: c = !0,
                } = e;
                if (!t || !o)
                  throw new Error(
                    'The options object must have valid values for the namespace and the resource properties.',
                  );
                const a = (0, w.useRef)({ results: [], isLoading: !0 }),
                  l = Ro(n),
                  s = Ro(r),
                  i = (() => {
                    const [, e] = (0, w.useState)();
                    return (0, w.useCallback)(t => {
                      e(() => {
                        throw t;
                      });
                    }, []);
                  })(),
                  m = (0, be.useSelect)(
                    e => {
                      if (!c) return null;
                      const r = e(Do.COLLECTIONS_STORE_KEY),
                        n = [t, o, l, s],
                        a = r.getCollectionError(...n);
                      if (a) {
                        if (!(0, v.isError)(a))
                          throw new Error(
                            'TypeError: `error` object is not an instance of Error constructor',
                          );
                        i(a);
                      }
                      return {
                        results: r.getCollection(...n),
                        isLoading: !r.hasFinishedResolution('getCollection', n),
                      };
                    },
                    [t, o, s, l, c],
                  );
                return null !== m && (a.current = m), a.current;
              })({ ...t, query: e }),
              { value: n } = ((e, t) => {
                const { namespace: o, resourceName: r, resourceValues: n = [], query: c = {} } = t;
                if (!o || !r)
                  throw new Error(
                    'The options object must have valid values for the namespace and the resource name properties.',
                  );
                const a = Ro(c),
                  l = Ro(n),
                  { value: s, isLoading: i = !0 } = (0, be.useSelect)(
                    t => {
                      const n = t(Do.COLLECTIONS_STORE_KEY),
                        c = [e, o, r, a, l];
                      return {
                        value: n.getCollectionHeader(...c),
                        isLoading: n.hasFinishedResolution('getCollectionHeader', c),
                      };
                    },
                    [e, o, r, l, a],
                  );
                return { value: s, isLoading: i };
              })('x-wp-total', { ...t, query: e });
            return { products: o, totalProducts: parseInt(n, 10), productsLoading: r };
          };
        var zo = o(3603);
        o(3135);
        const Ho = e => {
          if (!e) return;
          const t = e.getBoundingClientRect().bottom;
          (t >= 0 && t <= window.innerHeight) || e.scrollIntoView();
        };
        var jo = o(195),
          qo = o(3588);
        const Wo = () => {
          const { parentClassName: e } = (0, se.useInnerBlockLayoutContext)();
          return (0, r.createElement)(
            'div',
            { className: `${e}__no-products` },
            (0, r.createElement)(c.A, {
              className: `${e}__no-products-image`,
              icon: qo.A,
              size: 100,
            }),
            (0, r.createElement)(
              'strong',
              { className: `${e}__no-products-title` },
              (0, i.__)('No products', 'woocommerce'),
            ),
            (0, r.createElement)(
              'p',
              { className: `${e}__no-products-description` },
              (0, i.__)('There are currently no products available to display.', 'woocommerce'),
            ),
          );
        };
        var Go = o(7850);
        const Qo = ({ resetCallback: e = () => {} }) => {
          const { parentClassName: t } = (0, se.useInnerBlockLayoutContext)();
          return (0, r.createElement)(
            'div',
            { className: `${t}__no-products` },
            (0, r.createElement)(c.A, {
              className: `${t}__no-products-image`,
              icon: Go.A,
              size: 100,
            }),
            (0, r.createElement)(
              'strong',
              { className: `${t}__no-products-title` },
              (0, i.__)('No products found', 'woocommerce'),
            ),
            (0, r.createElement)(
              'p',
              { className: `${t}__no-products-description` },
              (0, i.__)('We were unable to find any results based on your search.', 'woocommerce'),
            ),
            (0, r.createElement)(
              'button',
              { onClick: e },
              (0, i.__)('Reset Search', 'woocommerce'),
            ),
          );
        };
        o(7532);
        const Yo = ({ onChange: e, value: t }) =>
            (0, r.createElement)(Io.SortSelect, {
              className: 'wc-block-product-sort-select wc-block-components-product-sort-select',
              onChange: e,
              options: [
                { key: 'menu_order', label: (0, i.__)('Default sorting', 'woocommerce') },
                { key: 'popularity', label: (0, i.__)('Popularity', 'woocommerce') },
                { key: 'rating', label: (0, i.__)('Average rating', 'woocommerce') },
                { key: 'date', label: (0, i.__)('Latest', 'woocommerce') },
                { key: 'price', label: (0, i.__)('Price: low to high', 'woocommerce') },
                { key: 'price-desc', label: (0, i.__)('Price: high to low', 'woocommerce') },
              ],
              screenReaderLabel: (0, i.__)('Order products by', 'woocommerce'),
              value: t,
            }),
          Uo = (e, t, o, n) => {
            if (!o) return;
            const c = So(e);
            return o.map(([o, a = {}], l) => {
              let s = [];
              a.children && a.children.length > 0 && (s = Uo(e, t, a.children, n));
              const i = c[o];
              if (!i) return null;
              const m = t.id || 0,
                d = ['layout', o, l, n, m];
              return (0, r.createElement)(
                w.Suspense,
                {
                  key: d.join('_'),
                  fallback: (0, r.createElement)('div', { className: 'wc-block-placeholder' }),
                },
                (0, r.createElement)(i, { ...a, children: s, product: t }),
              );
            });
          },
          Ko = (0, h.withInstanceId)(({ product: e = {}, attributes: t, instanceId: o }) => {
            const { layoutConfig: n } = t,
              { parentClassName: c, parentName: a } = (0, se.useInnerBlockLayoutContext)(),
              l = 0 === Object.keys(e).length,
              s = d()(`${c}__product`, 'wc-block-layout', { 'is-loading': l });
            return (0, r.createElement)('li', { className: s, 'aria-hidden': l }, Uo(a, e, n, o));
          });
        o(4458);
        const Jo = e => {
            switch (e) {
              case 'menu_order':
              case 'popularity':
              case 'rating':
              case 'price':
                return { orderby: e, order: 'asc' };
              case 'price-desc':
                return { orderby: 'price', order: 'desc' };
              case 'date':
                return { orderby: 'date', order: 'desc' };
            }
          },
          Zo = ({ totalQuery: e, totalProducts: t }, { totalQuery: o } = {}) =>
            !To()(e, o) && Number.isFinite(t),
          Xo = (e => t => {
            const o = (0, w.useRef)(null);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)('div', {
                className: 'with-scroll-to-top__scroll-point',
                ref: o,
                'aria-hidden': !0,
              }),
              (0, r.createElement)(e, {
                ...t,
                scrollToTop: e => {
                  null !== o.current &&
                    ((e, t) => {
                      const { focusableSelector: o } = t || {};
                      window &&
                        Number.isFinite(window.innerHeight) &&
                        (o
                          ? ((e, t) => {
                              var o;
                              const r =
                                (null === (o = e.parentElement) || void 0 === o
                                  ? void 0
                                  : o.querySelectorAll(t)) || [];
                              if (r.length) {
                                const e = r[0];
                                Ho(e), null == e || e.focus();
                              } else Ho(e);
                            })(e, o)
                          : Ho(e));
                    })(o.current, e);
                },
              }),
            );
          })(
            ({
              attributes: e,
              currentPage: t,
              onPageChange: o,
              onSortChange: n,
              sortValue: c,
              scrollToTop: a,
            }) => {
              const [l, s] = Vo('attributes', []),
                [m, u] = Vo('stock_status', []),
                [p, g] = Vo('rating', []),
                [h, _] = Vo('min_price'),
                [b, E] = Vo('max_price'),
                [k] = ((e, t) => {
                  const o = Fo();
                  t = t || o;
                  const [r, n] = (e => {
                      const t = Fo();
                      e = e || t;
                      const o = (0, be.useSelect)(
                          t => t(Do.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                          [e],
                        ),
                        { setValueForQueryContext: r } = (0, be.useDispatch)(
                          Do.QUERY_STATE_STORE_KEY,
                        );
                      return [
                        o,
                        (0, w.useCallback)(
                          t => {
                            r(e, t);
                          },
                          [e, r],
                        ),
                      ];
                    })(t),
                    c = Ro(r),
                    a = Ro(e),
                    l = Lo(a),
                    s = (0, w.useRef)(!1);
                  return (
                    (0, w.useEffect)(() => {
                      J()(l, a) || (n(Object.assign({}, c, a)), (s.current = !0));
                    }, [c, a, l, n]),
                    s.current ? [r, n] : [e, n]
                  );
                })(
                  (({ sortValue: e, currentPage: t, attributes: o }) => {
                    const { columns: r, rows: n } = o;
                    return { ...Jo(e), catalog_visibility: 'catalog', per_page: r * n, page: t };
                  })({ attributes: e, sortValue: c, currentPage: t }),
                ),
                { products: y, totalProducts: v, productsLoading: f } = $o(k),
                { parentClassName: x, parentName: C } = (0, se.useInnerBlockLayoutContext)(),
                S = (e => {
                  const { order: t, orderby: o, page: r, per_page: n, ...c } = e;
                  return c || {};
                })(k),
                { dispatchStoreEvent: N } = (0, zo.y)(),
                P = Lo({ totalQuery: S, totalProducts: v }, Zo);
              (0, w.useEffect)(() => {
                N('product-list-render', { products: y, listName: C });
              }, [y, C, N]),
                (0, w.useEffect)(() => {
                  To()(S, null == P ? void 0 : P.totalQuery) ||
                    (o(1),
                    null != P &&
                      P.totalQuery &&
                      (e => {
                        Number.isFinite(e) &&
                          (0 === e
                            ? (0, jo.speak)((0, i.__)('No products found', 'woocommerce'))
                            : (0, jo.speak)(
                                (0,
                                i.sprintf) /* translators: %s is an integer higher than 0 (1, 2, 3...) */(
                                  /* translators: %s is an integer higher than 0 (1, 2, 3...) */
                                  (0, i._n)(
                                    '%d product found',
                                    '%d products found',
                                    e,
                                    'woocommerce',
                                  ),
                                  e,
                                ),
                              ));
                      })(v));
                }, [null == P ? void 0 : P.totalQuery, v, o, S]);
              const { contentVisibility: A } = e,
                B = e.columns * e.rows,
                T =
                  !Number.isFinite(v) &&
                  Number.isFinite(null == P ? void 0 : P.totalProducts) &&
                  To()(S, null == P ? void 0 : P.totalQuery)
                    ? Math.ceil(((null == P ? void 0 : P.totalProducts) || 0) / B)
                    : Math.ceil(v / B),
                I = y.length ? y : Array.from({ length: B }),
                O = 0 !== y.length || f,
                L =
                  l.length > 0 ||
                  m.length > 0 ||
                  p.length > 0 ||
                  Number.isFinite(h) ||
                  Number.isFinite(b);
              return (0, r.createElement)(
                'div',
                {
                  className: (() => {
                    const { columns: t, rows: o, alignButtons: r, align: n } = e,
                      c = void 0 !== n ? 'align' + n : '';
                    return d()(x, c, 'has-' + t + '-columns', {
                      'has-multiple-rows': o > 1,
                      'has-aligned-buttons': r,
                    });
                  })(),
                },
                (null == A ? void 0 : A.orderBy) &&
                  O &&
                  (0, r.createElement)(Yo, { onChange: n, value: c }),
                !O &&
                  L &&
                  (0, r.createElement)(Qo, {
                    resetCallback: () => {
                      s([]), u([]), g([]), _(null), E(null);
                    },
                  }),
                !O && !L && (0, r.createElement)(Wo, null),
                O &&
                  (0, r.createElement)(
                    'ul',
                    { className: d()(`${x}__products`, { 'is-loading-products': f }) },
                    I.map((t = {}, o) =>
                      (0, r.createElement)(Ko, { key: t.id || o, attributes: e, product: t }),
                    ),
                  ),
                T > 1 &&
                  (0, r.createElement)(Oo, {
                    currentPage: t,
                    onPageChange: e => {
                      a({ focusableSelector: 'a, button' }), o(e);
                    },
                    totalPages: T,
                  }),
              );
            },
          ),
          er = ({ attributes: e }) => {
            const [t, o] = (0, w.useState)(1),
              [n, c] = (0, w.useState)(e.orderby);
            return (
              (0, w.useEffect)(() => {
                c(e.orderby);
              }, [e.orderby]),
              (0, r.createElement)(Xo, {
                attributes: e,
                currentPage: t,
                onPageChange: e => {
                  o(e);
                },
                onSortChange: e => {
                  var t;
                  const r = null == e || null === (t = e.target) || void 0 === t ? void 0 : t.value;
                  c(r), o(1);
                },
                sortValue: n,
              })
            );
          },
          tr = (0, r.createElement)(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 230 250',
              style: { width: '100%' },
            },
            (0, r.createElement)('title', null, 'Grid Block Preview'),
            (0, r.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '.162',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '9.216',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, r.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '1.565',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, r.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '.162',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '9.216',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, r.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '1.565',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, r.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '82.478',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '91.532',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, r.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '83.882',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, r.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '82.478',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '91.532',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, r.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '83.882',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, r.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '164.788',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '173.843',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, r.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '166.192',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, r.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '164.788',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '173.843',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, r.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '166.192',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '13.283',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '21.498',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '29.713',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '37.927',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '46.238',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '95.599',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '103.814',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '112.029',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '120.243',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '128.554',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '177.909',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '186.124',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '194.339',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '202.553',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '210.864',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '13.283',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '21.498',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '29.713',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '37.927',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '46.238',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '95.599',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '103.814',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '112.029',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '120.243',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '128.554',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '177.909',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '186.124',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '194.339',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '202.553',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, r.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '210.864',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
          );
        class or extends w.Component {
          render() {
            const { attributes: e, urlParameterSuffix: t } = this.props;
            return e.isPreview
              ? tr
              : (0, r.createElement)(
                  se.InnerBlockLayoutContextProvider,
                  { parentName: 'woocommerce/all-products', parentClassName: 'wc-block-grid' },
                  (0, r.createElement)(Io.StoreNoticesContainer, { context: 'wc/all-products' }),
                  (0, r.createElement)(er, { attributes: e, urlParameterSuffix: t }),
                );
          }
        }
        const rr = or;
        o(6965);
        class nr extends w.Component {
          constructor(...e) {
            super(...e),
              (0, U.A)(this, 'state', { isEditing: !1, innerBlocks: [] }),
              (0, U.A)(this, 'blockMap', So('woocommerce/all-products')),
              (0, U.A)(this, 'componentDidMount', () => {
                const { block: e } = this.props;
                this.setState({ innerBlocks: e.innerBlocks });
              }),
              (0, U.A)(this, 'getTitle', () => (0, i.__)('All Products', 'woocommerce')),
              (0, U.A)(this, 'getIcon', () => (0, r.createElement)(c.A, { icon: a.A })),
              (0, U.A)(this, 'togglePreview', () => {
                const { debouncedSpeak: e } = this.props;
                this.setState({ isEditing: !this.state.isEditing }),
                  this.state.isEditing ||
                    e((0, i.__)('Showing All Products block preview.', 'woocommerce'));
              }),
              (0, U.A)(this, 'getInspectorControls', () => {
                const { attributes: e, setAttributes: t } = this.props,
                  { columns: o, rows: n, alignButtons: c } = e;
                return (0, r.createElement)(
                  s.InspectorControls,
                  { key: 'inspector' },
                  (0, r.createElement)(
                    g.PanelBody,
                    { title: (0, i.__)('Layout Settings', 'woocommerce'), initialOpen: !0 },
                    (0, r.createElement)(xo, {
                      columns: o,
                      rows: n,
                      alignButtons: c,
                      setAttributes: t,
                      minColumns: (0, W.getSetting)('minColumns', 1),
                      maxColumns: (0, W.getSetting)('maxColumns', 6),
                      minRows: (0, W.getSetting)('minRows', 1),
                      maxRows: (0, W.getSetting)('maxRows', 6),
                    }),
                  ),
                  (0, r.createElement)(
                    g.PanelBody,
                    { title: (0, i.__)('Content Settings', 'woocommerce') },
                    ((e, t) => {
                      const { contentVisibility: o } = e;
                      return (0, r.createElement)(g.ToggleControl, {
                        label: (0, i.__)('Show Sorting Dropdown', 'woocommerce'),
                        checked: o.orderBy,
                        onChange: () => t({ contentVisibility: { ...o, orderBy: !o.orderBy } }),
                      });
                    })(e, t),
                    ((e, t) =>
                      (0, r.createElement)(g.SelectControl, {
                        label: (0, i.__)('Order Products By', 'woocommerce'),
                        value: e.orderby,
                        options: [
                          {
                            label: (0, i.__)('Default sorting (menu order)', 'woocommerce'),
                            value: 'menu_order',
                          },
                          { label: (0, i.__)('Popularity', 'woocommerce'), value: 'popularity' },
                          { label: (0, i.__)('Average rating', 'woocommerce'), value: 'rating' },
                          { label: (0, i.__)('Latest', 'woocommerce'), value: 'date' },
                          { label: (0, i.__)('Price: low to high', 'woocommerce'), value: 'price' },
                          {
                            label: (0, i.__)('Price: high to low', 'woocommerce'),
                            value: 'price-desc',
                          },
                        ],
                        onChange: e => t({ orderby: e }),
                      }))(e, t),
                  ),
                );
              }),
              (0, U.A)(this, 'getBlockControls', () => {
                const { isEditing: e } = this.state;
                return (0, r.createElement)(
                  s.BlockControls,
                  null,
                  (0, r.createElement)(g.ToolbarGroup, {
                    controls: [
                      {
                        icon: 'edit',
                        title: (0, i.__)('Edit the layout of each product', 'woocommerce'),
                        onClick: () => this.togglePreview(),
                        isActive: e,
                      },
                    ],
                  }),
                );
              }),
              (0, U.A)(this, 'renderEditMode', () => {
                const e = {
                  template: this.props.attributes.layoutConfig,
                  templateLock: !1,
                  allowedBlocks: Object.keys(this.blockMap),
                };
                return (
                  0 !== this.props.attributes.layoutConfig.length && (e.renderAppender = !1),
                  (0, r.createElement)(
                    g.Placeholder,
                    { icon: this.getIcon(), label: this.getTitle() },
                    (0, i.__)('Display all products from your store as a grid.', 'woocommerce'),
                    (0, r.createElement)(
                      'div',
                      { className: 'wc-block-all-products-grid-item-template' },
                      (0, r.createElement)(
                        g.Tip,
                        null,
                        (0, i.__)(
                          'Edit the blocks inside the example below to change the content displayed for all products within the product grid.',
                          'woocommerce',
                        ),
                      ),
                      (0, r.createElement)(
                        se.InnerBlockLayoutContextProvider,
                        {
                          parentName: 'woocommerce/all-products',
                          parentClassName: 'wc-block-grid',
                        },
                        (0, r.createElement)(
                          'div',
                          { className: 'wc-block-grid wc-block-layout has-1-columns' },
                          (0, r.createElement)(
                            'ul',
                            { className: 'wc-block-grid__products' },
                            (0, r.createElement)(
                              'li',
                              { className: 'wc-block-grid__product' },
                              (0, r.createElement)(
                                se.ProductDataContextProvider,
                                { product: No[0] },
                                (0, r.createElement)(s.InnerBlocks, { ...e }),
                              ),
                            ),
                          ),
                        ),
                      ),
                      (0, r.createElement)(
                        'div',
                        { className: 'wc-block-all-products__actions' },
                        (0, r.createElement)(
                          g.Button,
                          {
                            className: 'wc-block-all-products__done-button',
                            variant: 'primary',
                            onClick: () => {
                              const { block: e, setAttributes: t } = this.props;
                              t({ layoutConfig: Ao(e.innerBlocks) }),
                                this.setState({ innerBlocks: e.innerBlocks }),
                                this.togglePreview();
                            },
                          },
                          (0, i.__)('Done', 'woocommerce'),
                        ),
                        (0, r.createElement)(
                          g.Button,
                          {
                            className: 'wc-block-all-products__cancel-button',
                            variant: 'tertiary',
                            onClick: () => {
                              const { block: e, replaceInnerBlocks: t } = this.props,
                                { innerBlocks: o } = this.state;
                              t(e.clientId, o, !1), this.togglePreview();
                            },
                          },
                          (0, i.__)('Cancel', 'woocommerce'),
                        ),
                        (0, r.createElement)(
                          g.Button,
                          {
                            className: 'wc-block-all-products__reset-button',
                            icon: (0, r.createElement)(c.A, { icon: a.A }),
                            label: (0, i.__)('Reset layout to default', 'woocommerce'),
                            onClick: () => {
                              const { block: e, replaceInnerBlocks: t } = this.props,
                                o = [];
                              Po.map(([e, t]) => (o.push((0, n.createBlock)(e, t)), !0)),
                                t(e.clientId, o, !1),
                                this.setState({ innerBlocks: e.innerBlocks });
                            },
                          },
                          (0, i.__)('Reset Layout', 'woocommerce'),
                        ),
                      ),
                    ),
                  )
                );
              }),
              (0, U.A)(this, 'renderViewMode', () => {
                const { attributes: e } = this.props,
                  { layoutConfig: t } = e,
                  o = t && 0 !== t.length,
                  n = this.getTitle(),
                  c = this.getIcon();
                return o
                  ? (0, r.createElement)(
                      g.Disabled,
                      null,
                      (0, r.createElement)(rr, { attributes: e }),
                    )
                  : ((e, t) =>
                      (0, r.createElement)(
                        g.Placeholder,
                        { className: 'wc-block-products', icon: t, label: e },
                        (0, i.__)(
                          'The content for this block is hidden due to block settings.',
                          'woocommerce',
                        ),
                      ))(n, c);
              }),
              (0, U.A)(this, 'render', () => {
                const { attributes: e } = this.props,
                  { isEditing: t } = this.state,
                  o = this.getTitle(),
                  n = this.getIcon();
                return 0 === l.r7.productCount
                  ? ((e, t) =>
                      (0, r.createElement)(
                        g.Placeholder,
                        { className: 'wc-block-products', icon: t, label: e },
                        (0, r.createElement)(
                          'p',
                          null,
                          (0, i.__)(
                            "You haven't published any products to list here yet.",
                            'woocommerce',
                          ),
                        ),
                        (0, r.createElement)(
                          g.Button,
                          {
                            className: 'wc-block-products__add-product-button',
                            variant: 'secondary',
                            href: W.ADMIN_URL + 'post-new.php?post_type=product',
                            target: '_top',
                          },
                          (0, i.__)('Add new product', 'woocommerce') + ' ',
                          (0, r.createElement)(c.A, { icon: Ct.A }),
                        ),
                        (0, r.createElement)(
                          g.Button,
                          {
                            className: 'wc-block-products__read_more_button',
                            variant: 'tertiary',
                            href: 'https://woocommerce.com/document/managing-products/',
                            target: '_blank',
                          },
                          (0, i.__)('Learn more', 'woocommerce'),
                        ),
                      ))(o, n)
                  : (0, r.createElement)(
                      'div',
                      { className: Eo('wc-block-all-products', e) },
                      this.getBlockControls(),
                      this.getInspectorControls(),
                      t ? this.renderEditMode() : this.renderViewMode(),
                    );
              });
          }
        }
        const cr = (0, h.compose)(
            g.withSpokenMessages,
            (0, be.withSelect)((e, { clientId: t }) => {
              const { getBlock: o } = e('core/block-editor');
              return { block: o(t) };
            }),
            (0, be.withDispatch)(e => {
              const { replaceInnerBlocks: t } = e('core/block-editor');
              return { replaceInnerBlocks: t };
            }),
          )(nr),
          ar = {
            columns: (0, W.getSetting)('defaultColumns', 3),
            rows: (0, W.getSetting)('defaultRows', 3),
            alignButtons: !1,
            contentVisibility: { orderBy: !0 },
            orderby: 'date',
            layoutConfig: Po,
            isPreview: !1,
          },
          { name: lr } = bo,
          sr = {
            icon: {
              src: (0, r.createElement)(c.A, {
                icon: a.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: cr,
            save: function({ attributes: e }) {
              const t = {};
              Object.keys(e)
                .sort()
                .forEach(o => {
                  t[o] = e[o];
                });
              const o = { 'data-attributes': JSON.stringify(t) };
              return (0, r.createElement)(
                'div',
                { className: Eo('wc-block-all-products', e), ...o },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              );
            },
            deprecated: vo,
            defaults: ar,
          };
        (0, n.registerBlockType)(lr, sr);
      },
      5849: (e, t, o) => {
        'use strict';
        o.d(t, {
          Hw: () => f,
          Vo: () => b,
          XK: () => w,
          iI: () => y,
          r7: () => g,
          sW: () => h,
          sq: () => _,
        });
        var r,
          n,
          c,
          a,
          l,
          s,
          i,
          m,
          d,
          u,
          p = o(5703);
        const g = (0, p.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          h = g.pluginUrl + 'assets/images/',
          w = g.pluginUrl + 'assets/client/blocks/',
          _ = g.buildPhase,
          b =
            (null === (r = p.STORE_PAGES.shop) || void 0 === r || r.permalink,
            null === (n = p.STORE_PAGES.checkout) || void 0 === n || n.id,
            null === (c = p.STORE_PAGES.checkout) || void 0 === c || c.permalink,
            null === (a = p.STORE_PAGES.privacy) || void 0 === a || a.permalink,
            null === (l = p.STORE_PAGES.privacy) || void 0 === l || l.title,
            null === (s = p.STORE_PAGES.terms) || void 0 === s || s.permalink,
            null === (i = p.STORE_PAGES.terms) || void 0 === i || i.title,
            null === (m = p.STORE_PAGES.cart) || void 0 === m || m.id,
            null === (d = p.STORE_PAGES.cart) || void 0 === d ? void 0 : d.permalink),
          E =
            (null !== (u = p.STORE_PAGES.myaccount) && void 0 !== u && u.permalink
              ? p.STORE_PAGES.myaccount.permalink
              : (0, p.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, p.getSetting)('localPickupEnabled', !1),
            (0, p.getSetting)('countries', {})),
          k = (0, p.getSetting)('countryData', {}),
          y =
            (Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(Object.keys(k).map(e => [e, k[e].locale || []]))),
          v = {
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
          },
          f = (0, p.getSetting)('addressFieldsLocations', v).address;
        (0, p.getSetting)('addressFieldsLocations', v).contact,
          (0, p.getSetting)('addressFieldsLocations', v).order,
          (0, p.getSetting)('additionalOrderFields', {}),
          (0, p.getSetting)('additionalContactFields', {}),
          (0, p.getSetting)('additionalAddressFields', {});
      },
      6332: (e, t, o) => {
        'use strict';
        o.d(t, { kM: () => n }), o(4997);
        var r = o(5849);
        const n = () => r.sq > 1;
      },
      812: (e, t, o) => {
        'use strict';
        o.d(t, {
          Hw: () => r.Hw,
          Vo: () => r.Vo,
          XK: () => r.XK,
          iI: () => r.iI,
          kM: () => n.kM,
          r7: () => r.r7,
          sW: () => r.sW,
        });
        var r = o(5849),
          n = o(6332);
      },
      3527: () => {},
      5195: () => {},
      1546: () => {},
      5183: () => {},
      6160: () => {},
      3778: () => {},
      3400: () => {},
      618: () => {},
      4593: () => {},
      445: () => {},
      7195: () => {},
      3047: () => {},
      7067: () => {},
      9278: () => {},
      6007: () => {},
      7947: () => {},
      7663: () => {},
      9644: () => {},
      7764: () => {},
      7766: () => {},
      6342: () => {},
      7128: () => {},
      4156: () => {},
      7532: () => {},
      4458: () => {},
      6625: () => {},
      4567: () => {},
      6455: () => {},
      3135: () => {},
      6965: () => {},
      7369: () => {},
      8137: () => {},
      6636: () => {},
      4738: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      4656: e => {
        'use strict';
        e.exports = window.wc.blocksComponents;
      },
      8529: e => {
        'use strict';
        e.exports = window.wc.priceFormat;
      },
      7594: e => {
        'use strict';
        e.exports = window.wc.wcBlocksData;
      },
      2796: e => {
        'use strict';
        e.exports = window.wc.wcBlocksSharedContext;
      },
      1616: e => {
        'use strict';
        e.exports = window.wc.wcBlocksSharedHocs;
      },
      5703: e => {
        'use strict';
        e.exports = window.wc.wcSettings;
      },
      3993: e => {
        'use strict';
        e.exports = window.wc.wcTypes;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      6004: e => {
        'use strict';
        e.exports = window.wp.autop;
      },
      4997: e => {
        'use strict';
        e.exports = window.wp.blocks;
      },
      6427: e => {
        'use strict';
        e.exports = window.wp.components;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      7143: e => {
        'use strict';
        e.exports = window.wp.data;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      2619: e => {
        'use strict';
        e.exports = window.wp.hooks;
      },
      8537: e => {
        'use strict';
        e.exports = window.wp.htmlEntities;
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
      9786: e => {
        'use strict';
        e.exports = window.wp.styleEngine;
      },
      3832: e => {
        'use strict';
        e.exports = window.wp.url;
      },
      9446: e => {
        'use strict';
        e.exports = window.wp.wordcount;
      },
    },
    a = {};
  function l(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var o = (a[e] = { exports: {} });
    return c[e].call(o.exports, o, o.exports, l), o.exports;
  }
  (l.m = c),
    (e = []),
    (l.O = (t, o, r, n) => {
      if (!o) {
        var c = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, n] = e[m], a = !0, s = 0; s < o.length; s++)
            (!1 & n || c >= n) && Object.keys(l.O).every(e => l.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), n < c && (c = n));
          if (a) {
            e.splice(m--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
      e[m] = [o, r, n];
    }),
    (l.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return l.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (l.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      l.r(n);
      var c = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (c[t] = () => e[t]));
      return (c.default = () => e), l.d(n, c), n;
    }),
    (l.d = (e, t) => {
      for (var o in t)
        l.o(t, o) && !l.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (l.f = {}),
    (l.e = e => Promise.all(Object.keys(l.f).reduce((t, o) => (l.f[o](e, t), t), []))),
    (l.u = e =>
      ({
        345: 'product-stock-indicator',
        462: 'product-rating',
        2105: 'product-title',
        2388: 'product-price',
        2724: 'product-sku',
        3895: 'product-summary',
        4232: 'product-image',
        4442: 'product-sale-badge',
        7409: 'product-button',
        8553: 'product-rating-counter',
        8578: 'product-rating-stars',
        8647: 'product-average-rating',
      }[e] +
      '.js?ver=' +
      {
        345: '320c37c1f8cc9fcfc35d',
        462: '61f784ca3eca8db673b7',
        2105: '2b0e2dbf26509827de6d',
        2388: 'dd62a34874c737d4ac7a',
        2724: '9e16b9a90f701dc7546c',
        3895: '0d45142c4f5fd175e4e0',
        4232: '8aa07a03981e2126f817',
        4442: '5a4183656cb35a3e2282',
        7409: '811ecdc21f61934cd092',
        8553: '34e7d123ed456dcfcb5a',
        8578: '87cd84fc7f761d37eb7e',
        8647: 'dd4f276183914b8e4927',
      }[e])),
    (l.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (n = 'webpackWcBlocksMainJsonp:'),
    (l.l = (e, t, o, c) => {
      if (r[e]) r[e].push(t);
      else {
        var a, s;
        if (void 0 !== o)
          for (var i = document.getElementsByTagName('script'), m = 0; m < i.length; m++) {
            var d = i[m];
            if (d.getAttribute('src') == e || d.getAttribute('data-webpack') == n + o) {
              a = d;
              break;
            }
          }
        a ||
          ((s = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          l.nc && a.setAttribute('nonce', l.nc),
          a.setAttribute('data-webpack', n + o),
          (a.src = e)),
          (r[e] = [t]);
        var u = (t, o) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var n = r[e];
            if (
              (delete r[e],
              a.parentNode && a.parentNode.removeChild(a),
              n && n.forEach(e => e(o)),
              t)
            )
              return t(o);
          },
          p = setTimeout(u.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
        (a.onerror = u.bind(null, a.onerror)),
          (a.onload = u.bind(null, a.onload)),
          s && document.head.appendChild(a);
      }
    }),
    (l.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.j = 1001),
    (() => {
      var e;
      l.g.importScripts && (e = l.g.location + '');
      var t = l.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var o = t.getElementsByTagName('script');
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); ) e = o[r--].src;
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (l.p = e);
    })(),
    (() => {
      var e = {
        1001: 0,
        2388: 0,
        462: 0,
        8578: 0,
        8553: 0,
        8647: 0,
        7409: 0,
        3895: 0,
        4442: 0,
        2724: 0,
        345: 0,
      };
      (l.f.j = (t, o) => {
        var r = l.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) o.push(r[2]);
          else {
            var n = new Promise((o, n) => (r = e[t] = [o, n]));
            o.push((r[2] = n));
            var c = l.p + l.u(t),
              a = new Error();
            l.l(
              c,
              o => {
                if (l.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var n = o && ('load' === o.type ? 'missing' : o.type),
                    c = o && o.target && o.target.src;
                  (a.message = 'Loading chunk ' + t + ' failed.\n(' + n + ': ' + c + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = n),
                    (a.request = c),
                    r[1](a);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      }),
        (l.O.j = t => 0 === e[t]);
      var t = (t, o) => {
          var r,
            n,
            [c, a, s] = o,
            i = 0;
          if (c.some(t => 0 !== e[t])) {
            for (r in a) l.o(a, r) && (l.m[r] = a[r]);
            if (s) var m = s(l);
          }
          for (t && t(o); i < c.length; i++) (n = c[i]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return l.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var s = l.O(void 0, [94], () => l(6334));
  (s = l.O(s)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['all-products'] = s);
})();
