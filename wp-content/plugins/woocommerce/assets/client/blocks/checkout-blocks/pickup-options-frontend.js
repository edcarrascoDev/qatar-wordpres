(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3024],
  {
    8067: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => S });
      var a = n(1609),
        r = n(9019),
        s = n.n(r),
        i = n(7723),
        l = n(8537),
        c = n(4656),
        o = n(6087),
        p = n(4958),
        d = n(1359),
        m = n.n(d);
      const u = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
        h = ['target', 'href', 'rel', 'name', 'download'],
        g = (e, t) => {
          const n = (null == t ? void 0 : t.tags) || u,
            a = (null == t ? void 0 : t.attr) || h;
          return m().sanitize(e, { ALLOWED_TAGS: n, ALLOWED_ATTR: a });
        };
      var k = n(7143),
        _ = n(7594),
        v = n(9095),
        f = n(8529),
        E = n(5703);
      const b = e => {
          const t = (0, E.getSetting)('displayCartPricesIncludingTax', !1)
            ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
            : parseInt(e.price, 10);
          let n = (0, a.createElement)(
            a.Fragment,
            null,
            Number.isFinite(t) &&
              (0, a.createElement)(c.FormattedMonetaryAmount, {
                currency: (0, f.getCurrencyFromPriceResponse)(e),
                value: t,
              }),
            Number.isFinite(t) && e.delivery_time ? ' — ' : null,
            (0, l.decodeEntities)(e.delivery_time),
          );
          return (
            0 === t &&
              (n = (0, a.createElement)(
                'span',
                {
                  className:
                    'wc-block-components-shipping-rates-control__package__description--free',
                },
                (0, i.__)('Free', 'woocommerce'),
              )),
            { label: (0, l.decodeEntities)(e.name), value: e.rate_id, description: n }
          );
        },
        w = ({
          className: e = '',
          noResultsMessage: t,
          onSelectRate: n,
          rates: r,
          renderOption: s = b,
          selectedRate: i,
          disabled: l = !1,
          highlightChecked: p = !1,
        }) => {
          const d = (null == i ? void 0 : i.rate_id) || '',
            m = (0, v.Z)(d),
            [u, h] = (0, o.useState)(() => d || (r.length > 0 ? r[0].rate_id : void 0));
          return (
            (0, o.useEffect)(() => {
              d && d !== m && d !== u && h(d);
            }, [d, u, m]),
            (0, o.useEffect)(() => {
              !u && r.length > 0 && (h(r[0].rate_id), n(r[0].rate_id));
            }, [n, r, u]),
            (0, o.useEffect)(() => {
              u && n(u);
            }, [n, u]),
            0 === r.length
              ? t
              : (0, a.createElement)(c.RadioControl, {
                  className: e,
                  onChange: e => {
                    h(e), n(e);
                  },
                  highlightChecked: p,
                  disabled: l,
                  selected: u,
                  options: r.map(s),
                })
          );
        };
      n(2867);
      const S = ({
        packageId: e,
        className: t = '',
        noResultsMessage: n,
        renderOption: r,
        packageData: d,
        collapsible: m,
        showItems: u,
        highlightChecked: h = !1,
      }) => {
        var v;
        const { selectShippingRate: f, isSelectingRate: E } = (0, p.m)(),
          b =
            (0, k.useSelect)(e => {
              var t, n, a;
              return null === (t = e(_.CART_STORE_KEY)) ||
                void 0 === t ||
                null === (n = t.getCartData()) ||
                void 0 === n ||
                null === (a = n.shippingRates) ||
                void 0 === a
                ? void 0
                : a.length;
            }) > 1 ||
            document.querySelectorAll('.wc-block-components-shipping-rates-control__package')
              .length > 1,
          S = null != u ? u : b,
          C = null != m ? m : b,
          y = (0, a.createElement)(
            a.Fragment,
            null,
            (C || S) &&
              (0, a.createElement)('div', {
                className: 'wc-block-components-shipping-rates-control__package-title',
                dangerouslySetInnerHTML: { __html: g(d.name) },
              }),
            S &&
              (0, a.createElement)(
                'ul',
                { className: 'wc-block-components-shipping-rates-control__package-items' },
                Object.values(d.items).map(e => {
                  const t = (0, l.decodeEntities)(e.name),
                    n = e.quantity;
                  return (0, a.createElement)(
                    'li',
                    {
                      key: e.key,
                      className: 'wc-block-components-shipping-rates-control__package-item',
                    },
                    (0, a.createElement)(c.Label, {
                      label: n > 1 ? `${t} × ${n}` : `${t}`,
                      screenReaderLabel: (0,
                      i.sprintf) /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */(
                        /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                        (0, i._n)('%1$s (%2$d unit)', '%1$s (%2$d units)', n, 'woocommerce'),
                        t,
                        n,
                      ),
                    }),
                  );
                }),
              ),
          ),
          x = (0, o.useCallback)(
            t => {
              f(t, e);
            },
            [e, f],
          ),
          R = {
            className: t,
            noResultsMessage: n,
            rates: d.shipping_rates,
            onSelectRate: x,
            selectedRate: d.shipping_rates.find(e => e.selected),
            renderOption: r,
            disabled: E,
            highlightChecked: h,
          },
          N = (0, o.useMemo)(() => {
            var e;
            return null == d || null === (e = d.shipping_rates) || void 0 === e
              ? void 0
              : e.findIndex(e => (null == e ? void 0 : e.selected));
          }, [null == d ? void 0 : d.shipping_rates]);
        return C
          ? (0, a.createElement)(
              c.Panel,
              {
                className: s()('wc-block-components-shipping-rates-control__package', t, {
                  'wc-block-components-shipping-rates-control__package--disabled': E,
                }),
                initialOpen: !1,
                title: y,
              },
              (0, a.createElement)(w, { ...R }),
            )
          : (0, a.createElement)(
              'div',
              {
                className: s()('wc-block-components-shipping-rates-control__package', t, {
                  'wc-block-components-shipping-rates-control__package--disabled': E,
                  'wc-block-components-shipping-rates-control__package--first-selected':
                    !E && 0 === N,
                  'wc-block-components-shipping-rates-control__package--last-selected':
                    !E &&
                    N ===
                      (null == d || null === (v = d.shipping_rates) || void 0 === v
                        ? void 0
                        : v.length) -
                        1,
                }),
              },
              y,
              (0, a.createElement)(w, { ...R }),
            );
      };
    },
    9017: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => r });
      var a = n(7723);
      const r = ({
        defaultTitle: e = (0, a.__)('Step', 'woocommerce'),
        defaultDescription: t = (0, a.__)('Step description text.', 'woocommerce'),
        defaultShowStepNumber: n = !0,
      }) => ({
        title: { type: 'string', default: e },
        description: { type: 'string', default: t },
        showStepNumber: { type: 'boolean', default: n },
      });
    },
    6160: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => M });
      var a = n(1609),
        r = n(9019),
        s = n.n(r),
        i = n(1616),
        l = n(4656),
        c = n(7143),
        o = n(7594),
        p = n(812),
        d = n(9292),
        m = n(7723),
        u = n(6087),
        h = n(4958),
        g = n(8605),
        k = n(8529),
        _ = n(8537),
        v = n(5703),
        f = n(7104),
        E = n(601),
        b = n(8531),
        w = n(1e3);
      const S = ({
        title: e,
        setSelectedOption: t,
        selectedOption: n,
        pickupLocations: r,
        onSelectRate: s,
        renderPickupLocation: i,
        packageCount: p,
      }) => {
        const d =
          (0, c.useSelect)(e => {
            var t, n, a;
            return null === (t = e(o.CART_STORE_KEY)) ||
              void 0 === t ||
              null === (n = t.getCartData()) ||
              void 0 === n ||
              null === (a = n.shippingRates) ||
              void 0 === a
              ? void 0
              : a.length;
          }) > 1 ||
          document.querySelectorAll(
            '.wc-block-components-local-pickup-select .wc-block-components-radio-control',
          ).length > 1;
        return (0, a.createElement)(
          'div',
          { className: 'wc-block-components-local-pickup-select' },
          !(!d || !e) && (0, a.createElement)('div', null, e),
          (0, a.createElement)(l.RadioControl, {
            onChange: e => {
              t(e), s(e);
            },
            highlightChecked: !0,
            selected: n,
            options: r.map(e => i(e, p)),
          }),
        );
      };
      var C = n(2294);
      function y(e) {
        let t,
          n,
          a,
          r = [];
        for (let s = 0; s < e.length; s++)
          (t = e.substring(s)),
            (n = t.match(/^&[a-z0-9#]+;/)),
            n ? ((a = n[0]), r.push(a), (s += a.length - 1)) : r.push(e[s]);
        return r;
      }
      const x = (e, t, n = '...') => {
          const a = (function(e, t) {
            const n = (t = t || {}).limit || 100,
              a = void 0 === t.preserveTags || t.preserveTags,
              r = void 0 !== t.wordBreak && t.wordBreak,
              s = t.suffix || '...',
              i = t.moreLink || '',
              l = t.moreText || '»',
              c = t.preserveWhiteSpace || !1,
              o = e
                .replace(/</g, '\n<')
                .replace(/>/g, '>\n')
                .replace(/\n\n/g, '\n')
                .replace(/^\n/g, '')
                .replace(/\n$/g, '')
                .split('\n');
            let p,
              d,
              m,
              u,
              h,
              g,
              k = 0,
              _ = [],
              v = !1;
            for (let e = 0; e < o.length; e++) {
              if (((p = o[e]), (u = c ? p : p.replace(/[ ]+/g, ' ')), !p.length)) continue;
              const t = y(u);
              if ('<' !== p[0])
                if (k >= n) p = '';
                else if (k + t.length >= n) {
                  if (((d = n - k), ' ' === t[d - 1])) for (; d && ((d -= 1), ' ' === t[d - 1]); );
                  else (m = t.slice(d).indexOf(' ')), r || (-1 !== m ? (d += m) : (d = p.length));
                  (p = t.slice(0, d).join('') + s),
                    i && (p += '<a href="' + i + '" style="display:inline">' + l + '</a>'),
                    (k = n),
                    (v = !0);
                } else k += t.length;
              else if (a) {
                if (k >= n)
                  if (((h = p.match(/[a-zA-Z]+/)), (g = h ? h[0] : ''), g))
                    if ('</' !== p.substring(0, 2)) _.push(g), (p = '');
                    else {
                      for (; _[_.length - 1] !== g && _.length; ) _.pop();
                      _.length && (p = ''), _.pop();
                    }
                  else p = '';
              } else p = '';
              o[e] = p;
            }
            return { html: o.join('\n').replace(/\n/g, ''), more: v };
          })(e, { suffix: n, limit: t });
          return a.html;
        },
        R = (e, t, n) => (t <= n ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e),
        N = (e, t, n, a) => {
          const r = ((e, t, n) => {
            let a = { start: 0, middle: 0, end: e.length };
            for (; a.start <= a.end; )
              (a.middle = Math.floor((a.start + a.end) / 2)),
                (t.innerHTML = x(e, a.middle)),
                (a = R(a, t.clientHeight, n));
            return a.middle;
          })(e, t, n);
          return x(e, r - a.length, a);
        },
        L = {
          className: 'read-more-content',
          ellipsis: '&hellip;',
          lessText: (0, m.__)('Read less', 'woocommerce'),
          maxLines: 3,
          moreText: (0, m.__)('Read more', 'woocommerce'),
        };
      class T extends u.Component {
        constructor(e) {
          super(e),
            (0, C.A)(this, 'reviewSummary', void 0),
            (0, C.A)(this, 'reviewContent', void 0),
            (this.state = {
              isExpanded: !1,
              clampEnabled: null,
              content: e.children,
              summary: '.',
            }),
            (this.reviewContent = (0, u.createRef)()),
            (this.reviewSummary = (0, u.createRef)()),
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
            const n = (this.reviewSummary.current.clientHeight + 1) * e + 1,
              a = this.reviewContent.current.clientHeight + 1 > n;
            this.setState({ clampEnabled: a }),
              a &&
                this.setState({
                  summary: N(
                    this.reviewContent.current.innerHTML,
                    this.reviewSummary.current,
                    n,
                    t,
                  ),
                });
          }
        }
        getButton() {
          const { isExpanded: e } = this.state,
            { className: t, lessText: n, moreText: r } = this.props,
            s = e ? n : r;
          if (s)
            return (0, a.createElement)(
              'a',
              {
                href: '#more',
                className: t + '__read_more',
                onClick: this.onClick,
                'aria-expanded': !e,
                role: 'button',
              },
              s,
            );
        }
        onClick(e) {
          e.preventDefault();
          const { isExpanded: t } = this.state;
          this.setState({ isExpanded: !t });
        }
        render() {
          const { className: e } = this.props,
            { content: t, summary: n, clampEnabled: r, isExpanded: s } = this.state;
          return t
            ? !1 === r
              ? (0, a.createElement)(
                  'div',
                  { className: e },
                  (0, a.createElement)('div', { ref: this.reviewContent }, t),
                )
              : (0, a.createElement)(
                  'div',
                  { className: e },
                  (!s || null === r) &&
                    (0, a.createElement)('div', {
                      ref: this.reviewSummary,
                      'aria-hidden': s,
                      dangerouslySetInnerHTML: { __html: n },
                    }),
                  (s || null === r) &&
                    (0, a.createElement)('div', { ref: this.reviewContent, 'aria-hidden': !s }, t),
                  this.getButton(),
                )
            : null;
        }
      }
      (0, C.A)(T, 'defaultProps', L);
      const A = T;
      var F = n(8067);
      const P = (e, t) => {
          const n = (0, v.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : e.price,
            r = (e => {
              if (null != e && e.meta_data) {
                const t = e.meta_data.find(e => 'pickup_location' === e.key);
                return t ? t.value : '';
              }
              return '';
            })(e),
            s = (e => {
              if (null != e && e.meta_data) {
                const t = e.meta_data.find(e => 'pickup_address' === e.key);
                return t ? t.value : '';
              }
              return '';
            })(e),
            i = (e => {
              if (null != e && e.meta_data) {
                const t = e.meta_data.find(e => 'pickup_details' === e.key);
                return t ? t.value : '';
              }
              return '';
            })(e);
          let c = (0, a.createElement)('em', null, (0, m.__)('free', 'woocommerce'));
          return (
            parseInt(n, 10) > 0 &&
              (c =
                1 === t
                  ? (0, a.createElement)(l.FormattedMonetaryAmount, {
                      currency: (0, k.getCurrencyFromPriceResponse)(e),
                      value: n,
                    })
                  : (0,
                    u.createInterpolateElement) /* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */(
                      /* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */
                      (0, m._n)(
                        '<price/> x <packageCount/> package',
                        '<price/> x <packageCount/> packages',
                        t,
                        'woocommerce',
                      ),
                      {
                        price: (0, a.createElement)(l.FormattedMonetaryAmount, {
                          currency: (0, k.getCurrencyFromPriceResponse)(e),
                          value: n,
                        }),
                        packageCount: (0, a.createElement)(a.Fragment, null, t),
                      },
                    )),
            {
              value: e.rate_id,
              label: r ? (0, _.decodeEntities)(r) : (0, _.decodeEntities)(e.name),
              secondaryLabel: c,
              description: s
                ? (0, a.createElement)(
                    a.Fragment,
                    null,
                    (0, a.createElement)(f.A, {
                      icon: E.A,
                      className: 'wc-block-editor-components-block-icon',
                    }),
                    (0, _.decodeEntities)(s),
                  )
                : void 0,
              secondaryDescription: (0, a.createElement)(
                A,
                { maxLines: 2 },
                (0, _.decodeEntities)(i),
              ),
            }
          );
        },
        O = () => {
          var e;
          const { shippingRates: t, selectShippingRate: n } = (0, h.m)(),
            r = ((null === (e = t[0]) || void 0 === e ? void 0 : e.shipping_rates) || []).filter(
              b.J_,
            ),
            [s, i] = (0, u.useState)(() => {
              var e;
              return (
                (null === (e = r.find(e => e.selected)) || void 0 === e ? void 0 : e.rate_id) || ''
              );
            }),
            l = (0, u.useCallback)(
              e => {
                n(e);
              },
              [n],
            ),
            { extensions: c, receiveCart: o, ...p } = (0, g.V)(),
            d = {
              extensions: c,
              cart: p,
              components: { ShippingRatesControlPackage: F.A, LocalPickupSelect: S },
              renderPickupLocation: P,
            };
          (0, u.useEffect)(() => {
            !s && r[0] && (i(r[0].rate_id), l(r[0].rate_id));
          }, [l, r, s]);
          const m = (0, b.T4)(t);
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(w.ExperimentalOrderLocalPickupPackages.Slot, { ...d }),
            (0, a.createElement)(
              w.ExperimentalOrderLocalPickupPackages,
              null,
              (0, a.createElement)(S, {
                title: t[0].name,
                setSelectedOption: i,
                onSelectRate: l,
                selectedOption: s,
                renderPickupLocation: P,
                pickupLocations: r,
                packageCount: m,
              }),
            ),
          );
        },
        I = {
          ...(0, n(9017).A)({
            defaultTitle: (0, m.__)('Pickup locations', 'woocommerce'),
            defaultDescription: '',
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
        },
        M = (0, i.withFilteredAttributes)(I)(
          ({ title: e, description: t, children: n, className: r }) => {
            const { checkoutIsProcessing: i, prefersCollection: m } = (0, c.useSelect)(e => {
                const t = e(o.CHECKOUT_STORE_KEY);
                return {
                  checkoutIsProcessing: t.isProcessing(),
                  prefersCollection: t.prefersCollection(),
                };
              }),
              { showFormStepNumbers: u } = (0, d.Oy)();
            return m && p.F7
              ? (0, a.createElement)(
                  l.FormStep,
                  {
                    id: 'pickup-options',
                    disabled: i,
                    className: s()('wc-block-checkout__pickup-options', r),
                    title: e,
                    description: t,
                    showStepNumber: u,
                  },
                  (0, a.createElement)(O, null),
                  n,
                )
              : null;
          },
        );
    },
    2867: () => {},
  },
]);
