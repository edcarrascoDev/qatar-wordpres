(() => {
  'use strict';
  var e = {
      136: e => {
        var t,
          r = (function() {
            function e(e, t) {
              if ('function' != typeof e)
                throw new TypeError(
                  'DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ' +
                    e +
                    '.',
                );
              (this._batchLoadFn = e),
                (this._maxBatchSize = (function(e) {
                  if (!(!e || !1 !== e.batch)) return 1;
                  var t = e && e.maxBatchSize;
                  if (void 0 === t) return 1 / 0;
                  if ('number' != typeof t || t < 1)
                    throw new TypeError('maxBatchSize must be a positive number: ' + t);
                  return t;
                })(t)),
                (this._batchScheduleFn = (function(e) {
                  var t = e && e.batchScheduleFn;
                  if (void 0 === t) return a;
                  if ('function' != typeof t)
                    throw new TypeError('batchScheduleFn must be a function: ' + t);
                  return t;
                })(t)),
                (this._cacheKeyFn = (function(e) {
                  var t = e && e.cacheKeyFn;
                  if (void 0 === t)
                    return function(e) {
                      return e;
                    };
                  if ('function' != typeof t)
                    throw new TypeError('cacheKeyFn must be a function: ' + t);
                  return t;
                })(t)),
                (this._cacheMap = (function(e) {
                  if (!(!e || !1 !== e.cache)) return null;
                  var t = e && e.cacheMap;
                  if (void 0 === t) return new Map();
                  if (null !== t) {
                    var r = ['get', 'set', 'delete', 'clear'].filter(function(e) {
                      return t && 'function' != typeof t[e];
                    });
                    if (0 !== r.length)
                      throw new TypeError('Custom cacheMap missing methods: ' + r.join(', '));
                  }
                  return t;
                })(t)),
                (this._batch = null),
                (this.name = (function(e) {
                  return e && e.name ? e.name : null;
                })(t));
            }
            var t = e.prototype;
            return (
              (t.load = function(e) {
                if (null == e)
                  throw new TypeError(
                    'The loader.load() function must be called with a value, but got: ' +
                      String(e) +
                      '.',
                  );
                var t = (function(e) {
                    var t = e._batch;
                    if (null !== t && !t.hasDispatched && t.keys.length < e._maxBatchSize) return t;
                    var r = { hasDispatched: !1, keys: [], callbacks: [] };
                    return (
                      (e._batch = r),
                      e._batchScheduleFn(function() {
                        !(function(e, t) {
                          if (((t.hasDispatched = !0), 0 !== t.keys.length)) {
                            var r;
                            try {
                              r = e._batchLoadFn(t.keys);
                            } catch (r) {
                              return s(
                                e,
                                t,
                                new TypeError(
                                  'DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ' +
                                    String(r) +
                                    '.',
                                ),
                              );
                            }
                            if (!r || 'function' != typeof r.then)
                              return s(
                                e,
                                t,
                                new TypeError(
                                  'DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ' +
                                    String(r) +
                                    '.',
                                ),
                              );
                            r.then(function(e) {
                              if (!n(e))
                                throw new TypeError(
                                  'DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ' +
                                    String(e) +
                                    '.',
                                );
                              if (e.length !== t.keys.length)
                                throw new TypeError(
                                  'DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n' +
                                    String(t.keys) +
                                    '\n\nValues:\n' +
                                    String(e),
                                );
                              i(t);
                              for (var r = 0; r < t.callbacks.length; r++) {
                                var a = e[r];
                                a instanceof Error
                                  ? t.callbacks[r].reject(a)
                                  : t.callbacks[r].resolve(a);
                              }
                            }).catch(function(r) {
                              s(e, t, r);
                            });
                          } else i(t);
                        })(e, r);
                      }),
                      r
                    );
                  })(this),
                  r = this._cacheMap,
                  a = this._cacheKeyFn(e);
                if (r) {
                  var o = r.get(a);
                  if (o) {
                    var c = t.cacheHits || (t.cacheHits = []);
                    return new Promise(function(e) {
                      c.push(function() {
                        e(o);
                      });
                    });
                  }
                }
                t.keys.push(e);
                var l = new Promise(function(e, r) {
                  t.callbacks.push({ resolve: e, reject: r });
                });
                return r && r.set(a, l), l;
              }),
              (t.loadMany = function(e) {
                if (!n(e))
                  throw new TypeError(
                    'The loader.loadMany() function must be called with Array<key> but got: ' +
                      e +
                      '.',
                  );
                for (var t = [], r = 0; r < e.length; r++)
                  t.push(
                    this.load(e[r]).catch(function(e) {
                      return e;
                    }),
                  );
                return Promise.all(t);
              }),
              (t.clear = function(e) {
                var t = this._cacheMap;
                if (t) {
                  var r = this._cacheKeyFn(e);
                  t.delete(r);
                }
                return this;
              }),
              (t.clearAll = function() {
                var e = this._cacheMap;
                return e && e.clear(), this;
              }),
              (t.prime = function(e, t) {
                var r = this._cacheMap;
                if (r) {
                  var a,
                    s = this._cacheKeyFn(e);
                  void 0 === r.get(s) &&
                    (t instanceof Error
                      ? (a = Promise.reject(t)).catch(function() {})
                      : (a = Promise.resolve(t)),
                    r.set(s, a));
                }
                return this;
              }),
              e
            );
          })(),
          a =
            'object' == typeof process && 'function' == typeof process.nextTick
              ? function(e) {
                  t || (t = Promise.resolve()),
                    t.then(function() {
                      process.nextTick(e);
                    });
                }
              : 'function' == typeof setImmediate
              ? function(e) {
                  setImmediate(e);
                }
              : function(e) {
                  setTimeout(e);
                };
        function s(e, t, r) {
          i(t);
          for (var a = 0; a < t.keys.length; a++) e.clear(t.keys[a]), t.callbacks[a].reject(r);
        }
        function i(e) {
          if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
        }
        function n(e) {
          return (
            'object' == typeof e &&
            null !== e &&
            'number' == typeof e.length &&
            (0 === e.length ||
              (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
          );
        }
        e.exports = r;
      },
    },
    t = {};
  function r(a) {
    var s = t[a];
    if (void 0 !== s) return s.exports;
    var i = (t[a] = { exports: {} });
    return e[a](i, i.exports, r), i.exports;
  }
  (r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var a = {};
  (() => {
    r.r(a),
      r.d(a, {
        API_BLOCK_NAMESPACE: () => I,
        CART_STORE_KEY: () => Xt,
        CHECKOUT_STORE_KEY: () => Ia,
        COLLECTIONS_STORE_KEY: () => Xa,
        EMPTY_CART_COUPONS: () => C,
        EMPTY_CART_CROSS_SELLS: () => D,
        EMPTY_CART_ERRORS: () => N,
        EMPTY_CART_FEES: () => M,
        EMPTY_CART_ITEMS: () => O,
        EMPTY_CART_ITEM_ERRORS: () => k,
        EMPTY_EXTENSIONS: () => Y,
        EMPTY_PAYMENT_METHODS: () => L,
        EMPTY_PAYMENT_REQUIREMENTS: () => j,
        EMPTY_SHIPPING_RATES: () => x,
        EMPTY_TAX_LINES: () => H,
        PAYMENT_STORE_KEY: () => ti,
        QUERY_STATE_STORE_KEY: () => pi,
        SCHEMA_STORE_KEY: () => Ti,
        STORE_NOTICES_STORE_KEY: () => Ci,
        VALIDATION_STORE_KEY: () => Ki,
        getErrorDetails: () => Mt,
        hasInState: () => Ma,
        processErrorResponse: () => xt,
        updateState: () => za,
      });
    var e = {};
    r.r(e),
      r.d(e, {
        getCartData: () => B,
        getCartErrors: () => Q,
        getCartItem: () => re,
        getCartMeta: () => X,
        getCartTotals: () => K,
        getCouponBeingApplied: () => J,
        getCouponBeingRemoved: () => te,
        getCustomerData: () => q,
        getHasCalculatedShipping: () => z,
        getItemsPendingDelete: () => ce,
        getItemsPendingQuantityUpdate: () => oe,
        getNeedsShipping: () => G,
        getShippingRates: () => $,
        isApplyingCoupon: () => W,
        isCartDataStale: () => Z,
        isCustomerDataUpdating: () => ie,
        isItemPendingDelete: () => se,
        isItemPendingQuantity: () => ae,
        isRemovingCoupon: () => ee,
        isShippingRateBeingSelected: () => ne,
      });
    var t = {};
    r.r(t),
      r.d(t, {
        addItemToCart: () => dt,
        applyCoupon: () => ct,
        applyExtensionCartUpdate: () => ot,
        changeCartItemQuantity: () => ut,
        itemIsPendingDelete: () => at,
        itemIsPendingQuantity: () => rt,
        receiveApplyingCoupon: () => Je,
        receiveCart: () => Ke,
        receiveCartContents: () => Ze,
        receiveCartItem: () => tt,
        receiveError: () => Xe,
        receiveRemovingCoupon: () => et,
        removeCoupon: () => lt,
        removeItemFromCart: () => pt,
        selectShippingRate: () => _t,
        setBillingAddress: () => mt,
        setCartData: () => Qe,
        setErrorData: () => We,
        setIsCartDataStale: () => st,
        setShippingAddress: () => ht,
        shippingRatesBeingSelected: () => nt,
        updateCustomerData: () => yt,
        updatingCustomerData: () => it,
      });
    var s = {};
    r.r(s), r.d(s, { getCartData: () => Et, getCartTotals: () => gt });
    var i = {};
    r.r(i),
      r.d(i, {
        getAdditionalFields: () => br,
        getCheckoutStatus: () => Rr,
        getCustomerId: () => gr,
        getExtensionData: () => fr,
        getOrderId: () => Sr,
        getOrderNotes: () => Tr,
        getRedirectUrl: () => Ar,
        getShouldCreateAccount: () => Pr,
        getUseShippingAsBilling: () => vr,
        hasError: () => wr,
        hasOrder: () => Ir,
        isAfterProcessing: () => Mr,
        isBeforeProcessing: () => Dr,
        isCalculating: () => Nr,
        isComplete: () => Cr,
        isIdle: () => Or,
        isProcessing: () => kr,
        prefersCollection: () => xr,
      });
    var n = {};
    r.r(n),
      r.d(n, {
        __internalDecrementCalculating: () => ua,
        __internalEmitAfterProcessingEvents: () => aa,
        __internalEmitValidateEvent: () => ra,
        __internalIncrementCalculating: () => pa,
        __internalProcessCheckoutResponse: () => ta,
        __internalSetAfterProcessing: () => oa,
        __internalSetBeforeProcessing: () => ia,
        __internalSetComplete: () => ca,
        __internalSetCustomerId: () => _a,
        __internalSetExtensionData: () => Sa,
        __internalSetHasError: () => da,
        __internalSetIdle: () => sa,
        __internalSetOrderNotes: () => Ea,
        __internalSetProcessing: () => na,
        __internalSetRedirectUrl: () => la,
        __internalSetShouldCreateAccount: () => ha,
        __internalSetUseShippingAsBilling: () => ma,
        setAdditionalFields: () => ya,
        setPrefersCollection: () => ga,
      });
    var o = {};
    r.r(o),
      r.d(o, {
        getCollection: () => Na,
        getCollectionError: () => xa,
        getCollectionHeader: () => La,
        getCollectionLastModified: () => ja,
      });
    var c = {};
    r.r(c),
      r.d(c, {
        receiveCollection: () => Ua,
        receiveCollectionError: () => Fa,
        receiveLastModified: () => Va,
      });
    var l = {};
    r.r(l), r.d(l, { getCollection: () => qa, getCollectionHeader: () => $a });
    var d = {};
    r.r(d),
      r.d(d, {
        __internalEmitPaymentProcessingEvent: () => ps,
        __internalRemoveAvailableExpressPaymentMethod: () => Rs,
        __internalRemoveAvailablePaymentMethod: () => bs,
        __internalSetActivePaymentMethod: () => Ts,
        __internalSetAvailableExpressPaymentMethods: () => Ps,
        __internalSetAvailablePaymentMethods: () => fs,
        __internalSetExpressPaymentError: () => ds,
        __internalSetExpressPaymentMethodsInitialized: () => gs,
        __internalSetExpressPaymentStarted: () => _s,
        __internalSetPaymentError: () => hs,
        __internalSetPaymentIdle: () => us,
        __internalSetPaymentMethodData: () => As,
        __internalSetPaymentMethodsInitialized: () => Es,
        __internalSetPaymentProcessing: () => ms,
        __internalSetPaymentReady: () => ys,
        __internalSetPaymentResult: () => vs,
        __internalSetShouldSavePaymentMethod: () => Ss,
        __internalUpdateAvailablePaymentMethods: () => ws,
      });
    var p = {};
    r.r(p),
      r.d(p, {
        expressPaymentMethodsInitialized: () => Ks,
        getActivePaymentMethod: () => Us,
        getActiveSavedPaymentMethods: () => Gs,
        getActiveSavedToken: () => Hs,
        getAvailableExpressPaymentMethods: () => Vs,
        getAvailablePaymentMethods: () => Fs,
        getCurrentStatus: () => Xs,
        getIncompatiblePaymentMethods: () => qs,
        getPaymentMethodData: () => Bs,
        getPaymentResult: () => Ws,
        getSavedPaymentMethods: () => $s,
        getShouldSavePaymentMethod: () => Qs,
        getState: () => Zs,
        hasPaymentError: () => Ls,
        isExpressPaymentMethodActive: () => Ys,
        isExpressPaymentStarted: () => Ms,
        isPaymentFailed: () => js,
        isPaymentIdle: () => Os,
        isPaymentPristine: () => Cs,
        isPaymentProcessing: () => ks,
        isPaymentReady: () => Ns,
        isPaymentStarted: () => Ds,
        isPaymentSuccess: () => xs,
        paymentMethodsInitialized: () => zs,
      });
    var u = {};
    r.r(u), r.d(u, { getValueForQueryContext: () => ii, getValueForQueryKey: () => si });
    var _ = {};
    r.r(_), r.d(_, { setQueryValue: () => ci, setValueForQueryContext: () => li });
    var m = {};
    r.r(m), r.d(m, { getRoute: () => ui, getRoutes: () => _i });
    var h = {};
    r.r(h), r.d(h, { receiveRoutes: () => hi });
    var y = {};
    r.r(y), r.d(y, { getRoute: () => yi, getRoutes: () => Ei });
    var E = {};
    r.r(E), r.d(E, { registerContainer: () => vi, unregisterContainer: () => fi });
    var g = {};
    r.r(g), r.d(g, { getRegisteredContainers: () => Pi });
    var S = {};
    r.r(S),
      r.d(S, {
        clearAllValidationErrors: () => Yi,
        clearValidationError: () => Hi,
        clearValidationErrors: () => ji,
        hideValidationError: () => Ui,
        setValidationErrors: () => Li,
        showAllValidationErrors: () => Vi,
        showValidationError: () => Fi,
      });
    var T = {};
    r.r(T),
      r.d(T, {
        getValidationError: () => Bi,
        getValidationErrorId: () => qi,
        hasValidationErrors: () => $i,
      });
    const A = window.wp.notices,
      v = window.wp.data,
      f = window.wp.dataControls,
      P = window.wp.i18n,
      b = 'wc/store/cart',
      R = {
        code: 'cart_api_error',
        message: (0, P.__)('Unable to get cart data from the API.', 'woocommerce'),
        data: { status: 500 },
      },
      w = window.wc.wcSettings,
      I = 'wc/blocks',
      C = [],
      O = [],
      D = [],
      M = [],
      k = [],
      N = [],
      x = [],
      L = [],
      j = [],
      Y = {},
      H = [],
      U = {};
    Object.keys(w.defaultFields).forEach(e => {
      U[e] = '';
    }),
      delete U.email;
    const F = {};
    Object.keys(w.defaultFields).forEach(e => {
      F[e] = '';
    });
    const V = {
        cartItemsPendingQuantity: [],
        cartItemsPendingDelete: [],
        cartData: {
          coupons: C,
          shippingRates: x,
          shippingAddress: U,
          billingAddress: F,
          items: O,
          itemsCount: 0,
          itemsWeight: 0,
          crossSells: D,
          needsShipping: !0,
          needsPayment: !1,
          hasCalculatedShipping: !0,
          fees: M,
          totals: {
            currency_code: '',
            currency_symbol: '',
            currency_minor_unit: 2,
            currency_decimal_separator: '.',
            currency_thousand_separator: ',',
            currency_prefix: '',
            currency_suffix: '',
            total_items: '0',
            total_items_tax: '0',
            total_fees: '0',
            total_fees_tax: '0',
            total_discount: '0',
            total_discount_tax: '0',
            total_shipping: '0',
            total_shipping_tax: '0',
            total_price: '0',
            total_tax: '0',
            tax_lines: H,
          },
          errors: k,
          paymentMethods: L,
          paymentRequirements: j,
          extensions: Y,
        },
        metaData: {
          updatingCustomerData: !1,
          updatingSelectedRate: !1,
          applyingCoupon: '',
          removingCoupon: '',
          isCartDataStale: !1,
        },
        errors: N,
      },
      B = e => e.cartData,
      q = e => ({
        shippingAddress: e.cartData.shippingAddress,
        billingAddress: e.cartData.billingAddress,
      }),
      $ = e => e.cartData.shippingRates,
      G = e => e.cartData.needsShipping,
      z = e => e.cartData.hasCalculatedShipping,
      K = e => e.cartData.totals || V.cartData.totals,
      X = e => e.metaData || V.metaData,
      Q = e => e.errors,
      W = e => !!e.metaData.applyingCoupon,
      Z = e => e.metaData.isCartDataStale,
      J = e => e.metaData.applyingCoupon || '',
      ee = e => !!e.metaData.removingCoupon,
      te = e => e.metaData.removingCoupon || '',
      re = (e, t) => e.cartData.items.find(e => e.key === t),
      ae = (e, t) => e.cartItemsPendingQuantity.includes(t),
      se = (e, t) => e.cartItemsPendingDelete.includes(t),
      ie = e => !!e.metaData.updatingCustomerData,
      ne = e => !!e.metaData.updatingSelectedRate,
      oe = e => e.cartItemsPendingQuantity,
      ce = e => e.cartItemsPendingDelete;
    var le = function() {
      return (
        (le =
          Object.assign ||
          function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }),
        le.apply(this, arguments)
      );
    };
    function de(e) {
      return e.toLowerCase();
    }
    Object.create, Object.create, 'function' == typeof SuppressedError && SuppressedError;
    var pe = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
      ue = /[^A-Z0-9]+/gi;
    function _e(e, t, r) {
      return t instanceof RegExp
        ? e.replace(t, r)
        : t.reduce(function(e, t) {
            return e.replace(t, r);
          }, e);
    }
    function me(e, t) {
      var r = e.charAt(0),
        a = e.substr(1).toLowerCase();
      return t > 0 && r >= '0' && r <= '9' ? '_' + r + a : '' + r.toUpperCase() + a;
    }
    function he(e, t) {
      return 0 === t ? e.toLowerCase() : me(e, t);
    }
    const ye = e =>
        ((e, t) => Object.entries(e).reduce((e, [r, a]) => ({ ...e, [t(0, r)]: a }), {}))(
          e,
          (e, t) => {
            return (
              void 0 === r && (r = {}),
              (function(e, t) {
                return (
                  void 0 === t && (t = {}),
                  (function(e, t) {
                    void 0 === t && (t = {});
                    for (
                      var r = t.splitRegexp,
                        a = void 0 === r ? pe : r,
                        s = t.stripRegexp,
                        i = void 0 === s ? ue : s,
                        n = t.transform,
                        o = void 0 === n ? de : n,
                        c = t.delimiter,
                        l = void 0 === c ? ' ' : c,
                        d = _e(_e(e, a, '$1\0$2'), i, '\0'),
                        p = 0,
                        u = d.length;
                      '\0' === d.charAt(p);

                    )
                      p++;
                    for (; '\0' === d.charAt(u - 1); ) u--;
                    return d
                      .slice(p, u)
                      .split('\0')
                      .map(o)
                      .join(l);
                  })(e, le({ delimiter: '', transform: me }, t))
                );
              })(t, le({ transform: he }, r))
            );
            var r;
          },
        ),
      Ee = window.CustomEvent || null,
      ge = (e, { bubbles: t = !1, cancelable: r = !1, element: a, detail: s = {} }) => {
        if (!Ee) return;
        a || (a = document.body);
        const i = new Ee(e, { bubbles: t, cancelable: r, detail: s });
        a.dispatchEvent(i);
      },
      Se = 'SET_CART_DATA',
      Te = 'SET_ERROR_DATA',
      Ae = 'APPLYING_COUPON',
      ve = 'REMOVING_COUPON',
      fe = 'RECEIVE_CART_ITEM',
      Pe = 'ITEM_PENDING_QUANTITY',
      be = 'SET_IS_CART_DATA_STALE',
      Re = 'RECEIVE_REMOVED_ITEM',
      we = 'UPDATING_CUSTOMER_DATA',
      Ie = 'SET_BILLING_ADDRESS',
      Ce = 'SET_SHIPPING_ADDRESS',
      Oe = 'UPDATING_SELECTED_SHIPPING_RATE',
      De = window.wp.apiFetch;
    var Me = r.n(De),
      ke = r(136),
      Ne = r.n(ke);
    const xe = window.wc.wcTypes,
      Le = {},
      je = {
        code: 'invalid_json',
        message: (0, P.__)('The response is not a valid JSON response.', 'woocommerce'),
      },
      Ye = e => {
        Me().setNonce && 'function' == typeof Me().setNonce
          ? Me().setNonce(e)
          : console.error(
              'The monkey patched function on APIFetch, "setNonce", is not present, likely another plugin or some other code has removed this augmentation',
            );
      },
      He = new (Ne())(
        e =>
          Me()({
            path: '/wc/store/v1/batch',
            method: 'POST',
            data: { requests: e.map(e => ({ ...e, body: null == e ? void 0 : e.data })) },
          }).then(
            t => ((0, xe.assertBatchResponseIsValid)(t), e.map((e, r) => t.responses[r] || Le)),
          ),
        { batchScheduleFn: e => setTimeout(e, 300), cache: !1, maxBatchSize: 25 },
      ),
      Ue = e => ({ type: 'API_FETCH_WITH_HEADERS', options: e }),
      Fe = e =>
        new Promise((t, r) => {
          e.method && 'GET' !== e.method
            ? (async e => await He.load(e))(e)
                .then(e => {
                  throw ((0, xe.assertResponseIsValid)(e),
                  e.status >= 200 &&
                    e.status < 300 &&
                    (t({ response: e.body, headers: e.headers }), Ye(e.headers)),
                  e);
                })
                .catch(e => {
                  e.headers && Ye(e.headers), e.body ? r(e.body) : r(e);
                })
            : Me()({ ...e, parse: !1 })
                .then(e => {
                  e.json()
                    .then(r => {
                      t({ response: r, headers: e.headers }), Ye(e.headers);
                    })
                    .catch(() => {
                      r(je);
                    });
                })
                .catch(e => {
                  Ye(e.headers),
                    'function' == typeof e.json
                      ? e
                          .json()
                          .then(e => {
                            r(e);
                          })
                          .catch(() => {
                            r(je);
                          })
                      : r(e.message);
                });
        }),
      Ve = e => Fe(e),
      Be = { API_FETCH_WITH_HEADERS: ({ options: e }) => Fe(e) },
      qe = e =>
        e.quantity >= e.quantity_limits.minimum &&
        e.quantity <= e.quantity_limits.maximum &&
        e.quantity % e.quantity_limits.multiple_of == 0,
      $e = (0, P.__)('Something went wrong. Please contact us to get assistance.', 'woocommerce'),
      Ge = (e, t, r) => {
        const a = null == r ? void 0 : r.context;
        (0, v.select)('wc/store/payment').isExpressPaymentMethodActive() ||
          void 0 === a ||
          (0, v.dispatch)('core/notices').createNotice(e, t, {
            isDismissible: !0,
            ...r,
            context: a,
          });
      },
      ze = window.wp.htmlEntities,
      Ke = e => ({ dispatch: t, select: r }) => {
        const a = ye(e),
          s = r.getCartData();
        ((e = null, t = null) => {
          t &&
            t.forEach(e => {
              (0, v.dispatch)('core/notices').removeNotice(e.code, 'wc/cart');
            }),
            null !== e &&
              e.forEach(e => {
                (0, xe.isApiErrorResponse)(e) &&
                  Ge('error', (0, ze.decodeEntities)(e.message), {
                    id: e.code,
                    context: 'wc/cart',
                    isDismissible: !1,
                  });
              });
        })(a.errors, s.errors),
          (({
            oldCart: e,
            newCart: t,
            cartItemsPendingQuantity: r = [],
            cartItemsPendingDelete: a = [],
          }) => {
            (0, v.select)(b).hasFinishedResolution('getCartData') &&
              (((e, t, r) => {
                e.items.forEach(e => {
                  r.includes(e.key) ||
                    t.items.find(t => t && t.key === e.key) ||
                    (0, v.dispatch)('core/notices').createInfoNotice(
                      (0, P.sprintf) /* translators: %s is the name of the item. */(
                        /* translators: %s is the name of the item. */
                        (0, P.__)('"%s" was removed from your cart.', 'woocommerce'),
                        e.name,
                      ),
                      { context: 'wc/cart', speak: !0, type: 'snackbar', id: `${e.key}-removed` },
                    );
                });
              })(e, t, a),
              ((e, t) => {
                t.items.forEach(t => {
                  const r = e.items.find(e => e && e.key === t.key),
                    a = 0 === e.items.length;
                  if (!r && !a) return;
                  if (qe(t)) return;
                  const s = t.quantity > t.quantity_limits.maximum,
                    i = t.quantity < t.quantity_limits.minimum,
                    n = t.quantity % t.quantity_limits.multiple_of != 0;
                  (s || i || n) &&
                    (n
                      ? (0, v.dispatch)('core/notices').createInfoNotice(
                          (0,
                          P.sprintf) /* translators: %1$s is the name of the item, %2$d is the quantity of the item. %3$d is a number that the quantity must be a multiple of. */(
                            /* translators: %1$s is the name of the item, %2$d is the quantity of the item. %3$d is a number that the quantity must be a multiple of. */
                            (0, P.__)(
                              'The quantity of "%1$s" was changed to %2$d. You must purchase this product in groups of %3$d.',
                              'woocommerce',
                            ),
                            t.name,
                            Math.floor(t.quantity / t.quantity_limits.multiple_of) *
                              t.quantity_limits.multiple_of,
                            t.quantity_limits.multiple_of,
                          ),
                          {
                            context: 'wc/cart',
                            speak: !0,
                            type: 'snackbar',
                            id: `${t.key}-quantity-update`,
                          },
                        )
                      : i
                      ? (0, v.dispatch)('core/notices').createInfoNotice(
                          (0,
                          P.sprintf) /* translators: %1$s is the name of the item, %2$d is the quantity of the item. */(
                            /* translators: %1$s is the name of the item, %2$d is the quantity of the item. */
                            (0, P.__)(
                              'The quantity of "%1$s" was increased to %2$d. This is the minimum required quantity.',
                              'woocommerce',
                            ),
                            t.name,
                            t.quantity_limits.minimum,
                          ),
                          {
                            context: 'wc/cart',
                            speak: !0,
                            type: 'snackbar',
                            id: `${t.key}-quantity-update`,
                          },
                        )
                      : (0, v.dispatch)('core/notices').createInfoNotice(
                          (0,
                          P.sprintf) /* translators: %1$s is the name of the item, %2$d is the quantity of the item. */(
                            /* translators: %1$s is the name of the item, %2$d is the quantity of the item. */
                            (0, P.__)(
                              'The quantity of "%1$s" was decreased to %2$d. This is the maximum allowed quantity.',
                              'woocommerce',
                            ),
                            t.name,
                            t.quantity_limits.maximum,
                          ),
                          {
                            context: 'wc/cart',
                            speak: !0,
                            type: 'snackbar',
                            id: `${t.key}-quantity-update`,
                          },
                        ));
                });
              })(e, t),
              ((e, t, r) => {
                t.items.forEach(t => {
                  if (r.includes(t.key)) return;
                  const a = e.items.find(e => e && e.key === t.key);
                  return a && t.key === a.key
                    ? (t.quantity !== a.quantity &&
                        qe(t) &&
                        (0, v.dispatch)('core/notices').createInfoNotice(
                          (0,
                          P.sprintf) /* translators: %1$s is the name of the item, %2$d is the quantity of the item. */(
                            /* translators: %1$s is the name of the item, %2$d is the quantity of the item. */
                            (0, P.__)('The quantity of "%1$s" was changed to %2$d.', 'woocommerce'),
                            t.name,
                            t.quantity,
                          ),
                          {
                            context: 'wc/cart',
                            speak: !0,
                            type: 'snackbar',
                            id: `${t.key}-quantity-update`,
                          },
                        ),
                      t)
                    : void 0;
                });
              })(e, t, r));
          })({
            oldCart: s,
            newCart: a,
            cartItemsPendingQuantity: r.getItemsPendingQuantityUpdate(),
            cartItemsPendingDelete: r.getItemsPendingDelete(),
          }),
          t.setCartData(a);
      },
      Xe = (e = null) => ({ dispatch: t }) => {
        var r, a;
        (0, xe.isApiErrorResponse)(e) &&
          (t.setErrorData(e),
          null !== (r = e.data) &&
            void 0 !== r &&
            r.cart &&
            t.receiveCart(null == e || null === (a = e.data) || void 0 === a ? void 0 : a.cart));
      },
      Qe = e => ({ type: Se, response: e }),
      We = e => ({ type: Te, error: e }),
      Ze = e => {
        const t = ye(e),
          { shippingAddress: r, billingAddress: a, ...s } = t;
        return { type: Se, response: s };
      },
      Je = e => ({ type: Ae, couponCode: e }),
      et = e => ({ type: ve, couponCode: e }),
      tt = (e = null) => ({ type: fe, cartItem: e }),
      rt = (e, t = !0) => ({ type: Pe, cartItemKey: e, isPendingQuantity: t }),
      at = (e, t = !0) => ({ type: Re, cartItemKey: e, isPendingDelete: t }),
      st = (e = !0) => ({ type: be, isCartDataStale: e }),
      it = e => ({ type: we, isResolving: e }),
      nt = e => ({ type: Oe, isResolving: e }),
      ot = e => async ({ dispatch: t }) => {
        try {
          const { response: r } = await Ve({
            path: '/wc/store/v1/cart/extensions',
            method: 'POST',
            data: { namespace: e.namespace, data: e.data },
            cache: 'no-store',
          });
          return t.receiveCart(r), r;
        } catch (e) {
          return t.receiveError(e), Promise.reject(e);
        }
      },
      ct = e => async ({ dispatch: t }) => {
        try {
          t.receiveApplyingCoupon(e);
          const { response: r } = await Ve({
            path: '/wc/store/v1/cart/apply-coupon',
            method: 'POST',
            data: { code: e },
            cache: 'no-store',
          });
          return t.receiveCart(r), r;
        } catch (e) {
          return t.receiveError(e), Promise.reject(e);
        } finally {
          t.receiveApplyingCoupon('');
        }
      },
      lt = e => async ({ dispatch: t }) => {
        try {
          t.receiveRemovingCoupon(e);
          const { response: r } = await Ve({
            path: '/wc/store/v1/cart/remove-coupon',
            method: 'POST',
            data: { code: e },
            cache: 'no-store',
          });
          return t.receiveCart(r), r;
        } catch (e) {
          return t.receiveError(e), Promise.reject(e);
        } finally {
          t.receiveRemovingCoupon('');
        }
      },
      dt = (e, t = 1) => async ({ dispatch: r }) => {
        try {
          ge('wc-blocks_adding_to_cart', { bubbles: !0, cancelable: !0 });
          const { response: a } = await Ve({
            path: '/wc/store/v1/cart/add-item',
            method: 'POST',
            data: { id: e, quantity: t },
            cache: 'no-store',
          });
          return (
            r.receiveCart(a),
            (({ preserveCartData: e = !1 }) => {
              ge('wc-blocks_added_to_cart', {
                bubbles: !0,
                cancelable: !0,
                detail: { preserveCartData: e },
              });
            })({ preserveCartData: !0 }),
            a
          );
        } catch (e) {
          return r.receiveError(e), Promise.reject(e);
        }
      },
      pt = e => async ({ dispatch: t }) => {
        try {
          t.itemIsPendingDelete(e);
          const { response: r } = await Ve({
            path: '/wc/store/v1/cart/remove-item',
            data: { key: e },
            method: 'POST',
            cache: 'no-store',
          });
          return t.receiveCart(r), r;
        } catch (e) {
          return t.receiveError(e), Promise.reject(e);
        } finally {
          t.itemIsPendingDelete(e, !1);
        }
      },
      ut = (e, t) => async ({ dispatch: r, select: a }) => {
        const s = a.getCartItem(e);
        if ((null == s ? void 0 : s.quantity) !== t)
          try {
            r.itemIsPendingQuantity(e);
            const { response: a } = await Ve({
              path: '/wc/store/v1/cart/update-item',
              method: 'POST',
              data: { key: e, quantity: t },
              cache: 'no-store',
            });
            return r.receiveCart(a), a;
          } catch (e) {
            return r.receiveError(e), Promise.reject(e);
          } finally {
            r.itemIsPendingQuantity(e, !1);
          }
      },
      _t = (e, t = null) => async ({ dispatch: r, select: a }) => {
        var s;
        const i =
          null === (s = a.getShippingRates().find(e => e.package_id === t)) || void 0 === s
            ? void 0
            : s.shipping_rates.find(e => !0 === e.selected);
        if ((null == i ? void 0 : i.rate_id) !== e)
          try {
            r.shippingRatesBeingSelected(!0);
            const { response: a } = await Ve({
                path: '/wc/store/v1/cart/select-shipping-rate',
                method: 'POST',
                data: { package_id: t, rate_id: e },
                cache: 'no-store',
              }),
              { shipping_address: s, billing_address: i, ...n } = a;
            return r.receiveCart(n), a;
          } catch (e) {
            return r.receiveError(e), Promise.reject(e);
          } finally {
            r.shippingRatesBeingSelected(!1);
          }
      },
      mt = e => ({ type: Ie, billingAddress: e }),
      ht = e => ({ type: Ce, shippingAddress: e }),
      yt = (e, t = !0) => async ({ dispatch: r }) => {
        try {
          r.updatingCustomerData(!0);
          const { response: a } = await Ve({
            path: '/wc/store/v1/cart/update-customer',
            method: 'POST',
            data: e,
            cache: 'no-store',
          });
          return t ? r.receiveCartContents(a) : r.receiveCart(a), a;
        } catch (e) {
          return r.receiveError(e), Promise.reject(e);
        } finally {
          r.updatingCustomerData(!1);
        }
      },
      Et = () => async ({ dispatch: e }) => {
        const t = await Me()({ path: '/wc/store/v1/cart', method: 'GET', cache: 'no-store' }),
          { receiveCart: r, receiveError: a } = e;
        t ? r(t) : a(R);
      },
      gt = () => async ({ resolveSelect: e }) => {
        await e.getCartData();
      },
      St = (e = [], t) =>
        t.type === fe
          ? e.map(e => {
              var r;
              return e.key === (null === (r = t.cartItem) || void 0 === r ? void 0 : r.key)
                ? t.cartItem
                : e;
            })
          : e,
      Tt = (e, t) => t.reduce((t, r) => (e && e.hasOwnProperty(r) && (t[r] = e[r]), t), {}),
      At = (e, t, r) => {
        let a,
          s = null;
        const i = (...i) => {
          (s = i),
            a && clearTimeout(a),
            (a = setTimeout(() => {
              (a = null), !r && s && e(...s);
            }, t)),
            r && !a && e(...i);
        };
        return (
          (i.flush = () => {
            a && s && (e(...s), clearTimeout(a), (a = null));
          }),
          i
        );
      },
      vt = window.wp.isShallowEqual;
    var ft = r.n(vt);
    const Pt = (e, t) =>
      e[t] ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority) : [];
    let bt = (function(e) {
        return (e.SUCCESS = 'success'), (e.FAIL = 'failure'), (e.ERROR = 'error'), e;
      })({}),
      Rt = (function(e) {
        return (
          (e.CART = 'wc/cart'),
          (e.CHECKOUT = 'wc/checkout'),
          (e.PAYMENTS = 'wc/checkout/payments'),
          (e.EXPRESS_PAYMENTS = 'wc/checkout/express-payments'),
          (e.CONTACT_INFORMATION = 'wc/checkout/contact-information'),
          (e.SHIPPING_ADDRESS = 'wc/checkout/shipping-address'),
          (e.BILLING_ADDRESS = 'wc/checkout/billing-address'),
          (e.SHIPPING_METHODS = 'wc/checkout/shipping-methods'),
          (e.CHECKOUT_ACTIONS = 'wc/checkout/checkout-actions'),
          (e.ORDER_INFORMATION = 'wc/checkout/additional-information'),
          e
        );
      })({});
    const wt = (e, t) => (0, xe.isObject)(e) && 'type' in e && e.type === t,
      It = e => wt(e, bt.SUCCESS),
      Ct = e => wt(e, bt.ERROR),
      Ot = e => wt(e, bt.FAIL),
      Dt = e => !(0, xe.isObject)(e) || void 0 === e.retry || !0 === e.retry,
      Mt = e => {
        const t = (0, xe.objectHasProp)(e.data, 'details') ? Object.entries(e.data.details) : null;
        return t
          ? t.reduce(
              (e, [t, { code: r, message: a, additional_errors: s = [], data: i }]) => [
                ...e,
                { param: t, id: `${t}_${r}`, code: r, message: (0, ze.decodeEntities)(a), data: i },
                ...(Array.isArray(s)
                  ? s.flatMap(e => {
                      if (!(0, xe.objectHasProp)(e, 'code') || !(0, xe.objectHasProp)(e, 'message'))
                        return [];
                      const r = [
                        {
                          param: t,
                          id: `${t}_${e.code}`,
                          code: e.code,
                          message: (0, ze.decodeEntities)(e.message),
                          data: i,
                        },
                      ];
                      return void 0 !== e.data ? [...r, ...Mt(e)] : r;
                    })
                  : []),
              ],
              [],
            )
          : [];
      },
      kt = e => {
        switch (e) {
          case 'woocommerce_rest_missing_email_address':
          case 'woocommerce_rest_invalid_email_address':
            return Rt.CONTACT_INFORMATION;
          default:
            return Rt.CART;
        }
      },
      Nt = (e, t) => {
        switch (e) {
          case 'invalid_email':
            return Rt.CONTACT_INFORMATION;
          case 'billing_address':
            return 'invalid_email' === t ? Rt.CONTACT_INFORMATION : Rt.BILLING_ADDRESS;
          case 'shipping_address':
            return Rt.SHIPPING_ADDRESS;
          default:
            return;
        }
      },
      xt = (e, t) => {
        if (!(0, xe.isApiErrorResponse)(e)) return;
        if ('rest_invalid_param' === e.code)
          return ((e, t) => {
            Mt(e).forEach(({ code: e, message: r, id: a, param: s, data: i }) => {
              let n = '';
              (0, xe.isObject)(i) &&
                (0, xe.objectHasProp)(i, 'key') &&
                (0, xe.objectHasProp)(i, 'location') &&
                (0, xe.isString)(i.location) &&
                (n = (e => {
                  switch (e) {
                    case 'contact':
                      return Rt.CONTACT_INFORMATION;
                    case 'order':
                      return Rt.ORDER_INFORMATION;
                    default:
                      return;
                  }
                })(i.location)),
                Ge('error', r, { id: a, context: t || n || Nt(s, e) || kt(e) });
            });
          })(e, t);
        let r = (0, ze.decodeEntities)(e.message) || $e;
        'invalid_json' === e.code && (r = $e),
          Ge('error', r, { id: e.code, context: t || kt(e.code) });
      },
      Lt = window.wp.url,
      jt = 'wc/store/validation',
      Yt = (e, t) =>
        'string' != typeof t
          ? t
          : 'email' === e
          ? (0, Lt.isEmail)(t)
            ? t.trim()
            : ''
          : 'postcode' === e
          ? t.replace(' ', '').toUpperCase()
          : t.trim(),
      Ht = (e, t) => Object.keys(e).filter(r => Yt(r, e[r]) !== Yt(r, t[r])),
      Ut = {
        customerDataIsInitialized: !1,
        doingPush: !1,
        customerData: { billingAddress: {}, shippingAddress: {} },
        dirtyProps: { billingAddress: [], shippingAddress: [] },
      },
      Ft = () => {
        if (Ut.doingPush) return;
        if (
          ((Ut.doingPush = !0),
          (() => {
            const e = (0, v.select)(b).getCustomerData();
            (Ut.dirtyProps.billingAddress = [
              ...Ut.dirtyProps.billingAddress,
              ...Ht(Ut.customerData.billingAddress, e.billingAddress),
            ]),
              (Ut.dirtyProps.shippingAddress = [
                ...Ut.dirtyProps.shippingAddress,
                ...Ht(Ut.customerData.shippingAddress, e.shippingAddress),
              ]),
              (Ut.customerData = e);
            const t = Ut.dirtyProps.shippingAddress,
              r = Ut.dirtyProps.billingAddress,
              a = Ut.customerData.shippingAddress,
              s = Ut.customerData.billingAddress,
              i = t.includes('country'),
              n = r.includes('country'),
              o = t.includes('state'),
              c = r.includes('state'),
              l = t.includes('postcode'),
              d = r.includes('postcode');
            i && !l && (t.push('postcode'), (a.postcode = '')),
              n && !d && (r.push('postcode'), (s.postcode = '')),
              i && !o && (t.push('state'), (a.state = '')),
              n && !c && (r.push('state'), (s.state = ''));
          })(),
          !(Ut.dirtyProps.billingAddress.length > 0 || Ut.dirtyProps.shippingAddress.length > 0))
        )
          return void (Ut.doingPush = !1);
        if (
          !(e => {
            const t = (0, v.select)(jt);
            return (
              0 ===
              [
                ...e.billingAddress.filter(e => void 0 !== t.getValidationError('billing_' + e)),
                ...e.shippingAddress.filter(e => void 0 !== t.getValidationError('shipping_' + e)),
              ].filter(Boolean).length
            );
          })(Ut.dirtyProps)
        )
          return void (Ut.doingPush = !1);
        const e = {};
        Ut.dirtyProps.billingAddress.length &&
          (e.billing_address = Tt(Ut.customerData.billingAddress, Ut.dirtyProps.billingAddress)),
          Ut.dirtyProps.shippingAddress.length &&
            (e.shipping_address = Tt(
              Ut.customerData.shippingAddress,
              Ut.dirtyProps.shippingAddress,
            )),
          (0, v.dispatch)(b)
            .updateCustomerData(e)
            .then(() => {
              (Ut.dirtyProps.billingAddress = []),
                (Ut.dirtyProps.shippingAddress = []),
                (Ut.doingPush = !1),
                (() => {
                  const e = (0, v.select)('wc/store/store-notices').getRegisteredContainers(),
                    { removeNotice: t } = (0, v.dispatch)('core/notices'),
                    { getNotices: r } = (0, v.select)('core/notices');
                  e.forEach(e => {
                    r(e).forEach(r => {
                      t(r.id, e);
                    });
                  });
                })();
            })
            .catch(e => {
              (Ut.doingPush = !1), xt(e);
            });
      },
      Vt = At(() => {
        Ut.doingPush ? Vt() : Ft();
      }, 1500),
      Bt = 'wc/store/payment';
    let qt = (function(e) {
      return (
        (e.IDLE = 'idle'),
        (e.EXPRESS_STARTED = 'express_started'),
        (e.PROCESSING = 'processing'),
        (e.READY = 'ready'),
        (e.ERROR = 'has_error'),
        e
      );
    })({});
    const $t = async () =>
        !!(0, v.select)(b).hasFinishedResolution('getCartData') &&
        (await (0, v.dispatch)(Bt).__internalUpdateAvailablePaymentMethods(), !0),
      Gt = At($t, 1e3),
      zt = (0, v.registerStore)(b, {
        reducer: (e = V, t) => {
          switch (t.type) {
            case Te:
              t.error && (e = { ...e, errors: [t.error] });
              break;
            case Se:
              t.response && (e = { ...e, errors: N, cartData: { ...e.cartData, ...t.response } });
              break;
            case Ae:
              (t.couponCode || '' === t.couponCode) &&
                (e = { ...e, metaData: { ...e.metaData, applyingCoupon: t.couponCode } });
              break;
            case Ie:
              e = {
                ...e,
                cartData: {
                  ...e.cartData,
                  billingAddress: { ...e.cartData.billingAddress, ...t.billingAddress },
                },
              };
              break;
            case Ce:
              e = {
                ...e,
                cartData: {
                  ...e.cartData,
                  shippingAddress: { ...e.cartData.shippingAddress, ...t.shippingAddress },
                },
              };
              break;
            case ve:
              (t.couponCode || '' === t.couponCode) &&
                (e = { ...e, metaData: { ...e.metaData, removingCoupon: t.couponCode } });
              break;
            case Pe:
              const r = e.cartItemsPendingQuantity.filter(e => e !== t.cartItemKey);
              t.isPendingQuantity && t.cartItemKey && r.push(t.cartItemKey),
                (e = { ...e, cartItemsPendingQuantity: r });
              break;
            case Re:
              const a = e.cartItemsPendingDelete.filter(e => e !== t.cartItemKey);
              t.isPendingDelete && t.cartItemKey && a.push(t.cartItemKey),
                (e = { ...e, cartItemsPendingDelete: a });
              break;
            case fe:
              e = { ...e, errors: N, cartData: { ...e.cartData, items: St(e.cartData.items, t) } };
              break;
            case we:
              e = { ...e, metaData: { ...e.metaData, updatingCustomerData: !!t.isResolving } };
              break;
            case Oe:
              e = { ...e, metaData: { ...e.metaData, updatingSelectedRate: !!t.isResolving } };
              break;
            case be:
              e = { ...e, metaData: { ...e.metaData, isCartDataStale: t.isCartDataStale } };
          }
          return e;
        },
        actions: t,
        controls: f.controls,
        selectors: e,
        resolvers: s,
        __experimentalUseThunks: !0,
      });
    zt.subscribe((e = !0) => {
      if ((0, v.select)(b).hasFinishedResolution('getCartData'))
        return Ut.customerDataIsInitialized
          ? void (ft()(Ut.customerData, (0, v.select)(b).getCustomerData()) || (e ? Vt() : Ft()))
          : ((Ut.customerData = (0, v.select)(b).getCustomerData()),
            void (Ut.customerDataIsInitialized = !0));
    }),
      document.body.addEventListener('focusout', e => {
        e.target &&
          e.target instanceof Element &&
          'input' === e.target.tagName.toLowerCase() &&
          Vt.flush();
      });
    const Kt = zt.subscribe(async () => {
        (await $t()) && (Kt(), zt.subscribe(Gt));
      }),
      Xt = b,
      Qt = 'wc/store/checkout';
    let Wt = (function(e) {
      return (
        (e.IDLE = 'idle'),
        (e.COMPLETE = 'complete'),
        (e.BEFORE_PROCESSING = 'before_processing'),
        (e.PROCESSING = 'processing'),
        (e.AFTER_PROCESSING = 'after_processing'),
        e
      );
    })({});
    const Zt = {
      order_id: 0,
      customer_id: 0,
      billing_address: {},
      shipping_address: {},
      additional_fields: {},
      ...((0, w.getSetting)('checkoutData', {}) || {}),
    };
    var Jt, er, tr, rr, ar, sr, ir, nr, or, cr;
    const lr = (0, w.getSetting)('wcBlocksConfig', {
        buildPhase: 1,
        pluginUrl: '',
        productCount: 0,
        defaultAvatar: '',
        restApiRoutes: {},
        wordCountType: 'words',
      }),
      dr = lr.pluginUrl + 'assets/images/',
      pr =
        (lr.pluginUrl,
        lr.buildPhase,
        null === (Jt = w.STORE_PAGES.shop) || void 0 === Jt || Jt.permalink,
        null === (er = w.STORE_PAGES.checkout) || void 0 === er || er.id,
        null === (tr = w.STORE_PAGES.checkout) || void 0 === tr || tr.permalink,
        null === (rr = w.STORE_PAGES.privacy) || void 0 === rr || rr.permalink,
        null === (ar = w.STORE_PAGES.privacy) || void 0 === ar || ar.title,
        null === (sr = w.STORE_PAGES.terms) || void 0 === sr || sr.permalink,
        null === (ir = w.STORE_PAGES.terms) || void 0 === ir || ir.title,
        null === (nr = w.STORE_PAGES.cart) || void 0 === nr || nr.id,
        null === (or = w.STORE_PAGES.cart) || void 0 === or || or.permalink,
        null !== (cr = w.STORE_PAGES.myaccount) && void 0 !== cr && cr.permalink
          ? w.STORE_PAGES.myaccount.permalink
          : (0, w.getSetting)('wpLoginUrl', '/wp-login.php'),
        (0, w.getSetting)('localPickupEnabled', !1)),
      ur = (0, w.getSetting)('countries', {}),
      _r = (0, w.getSetting)('countryData', {}),
      mr =
        (Object.fromEntries(
          Object.keys(_r)
            .filter(e => !0 === _r[e].allowBilling)
            .map(e => [e, ur[e] || '']),
        ),
        Object.fromEntries(
          Object.keys(_r)
            .filter(e => !0 === _r[e].allowBilling)
            .map(e => [e, _r[e].states || []]),
        ),
        Object.fromEntries(
          Object.keys(_r)
            .filter(e => !0 === _r[e].allowShipping)
            .map(e => [e, ur[e] || '']),
        ),
        Object.fromEntries(
          Object.keys(_r)
            .filter(e => !0 === _r[e].allowShipping)
            .map(e => [e, _r[e].states || []]),
        ),
        Object.fromEntries(Object.keys(_r).map(e => [e, _r[e].locale || []]))),
      hr = {
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
      yr = (0, w.getSetting)('addressFieldsLocations', hr).address,
      Er =
        ((0, w.getSetting)('addressFieldsLocations', hr).contact,
        (0, w.getSetting)('addressFieldsLocations', hr).order,
        (0, w.getSetting)('additionalOrderFields', {}),
        (0, w.getSetting)('additionalContactFields', {}),
        (0, w.getSetting)('additionalAddressFields', {}),
        (0, w.getSetting)('collectableMethodIds', [])),
      gr = e => e.customerId,
      Sr = e => e.orderId,
      Tr = e => e.orderNotes,
      Ar = e => e.redirectUrl,
      vr = e => e.useShippingAsBilling,
      fr = e => e.extensionData,
      Pr = e => e.shouldCreateAccount,
      br = e => e.additionalFields,
      Rr = e => e.status,
      wr = e => e.hasError,
      Ir = e => !!e.orderId,
      Cr = e => e.status === Wt.COMPLETE,
      Or = e => e.status === Wt.IDLE,
      Dr = e => e.status === Wt.BEFORE_PROCESSING,
      Mr = e => e.status === Wt.AFTER_PROCESSING,
      kr = e => e.status === Wt.PROCESSING,
      Nr = e => e.calculatingCount > 0,
      xr = e => {
        if (void 0 === e.prefersCollection) {
          const e = (0, v.select)(b).getShippingRates();
          if (!e || !e.length) return !1;
          const r = e[0].shipping_rates.find(e => e.selected);
          if ((0, xe.objectHasProp)(r, 'method_id') && (0, xe.isString)(r.method_id))
            return (
              (t = null == r ? void 0 : r.method_id),
              !!pr && (Array.isArray(t) ? !!t.find(e => Er.includes(e)) : Er.includes(t))
            );
        }
        var t;
        return e.prefersCollection;
      },
      Lr = 'SET_IDLE',
      jr = 'SET_REDIRECT_URL',
      Yr = 'SET_CHECKOUT_COMPLETE',
      Hr = 'SET_BEFORE_PROCESSING',
      Ur = 'SET_AFTER_PROCESSING',
      Fr = 'SET_CHECKOUT_IS_PROCESSING',
      Vr = 'SET_CHECKOUT_HAS_ERROR',
      Br = 'SET_CHECKOUT_CUSTOMER_ID',
      qr = 'SET_CHECKOUT_ORDER_NOTES',
      $r = 'INCREMENT_CALCULATING',
      Gr = 'DECREMENT_CALCULATING',
      zr = 'SET_USE_SHIPPING_AS_BILLING',
      Kr = 'SET_SHOULD_CREATE_ACCOUNT',
      Xr = 'SET_PREFERS_COLLECTION',
      Qr = 'SET_EXTENSION_DATA',
      Wr = 'SET_ADDITIONAL_FIELDS',
      Zr = e => (0, xe.isObject)(e) && (0, xe.objectHasProp)(e, 'type'),
      Jr = async (e, t, r) => {
        const a = [],
          s = Pt(e, t);
        for (const e of s)
          try {
            const t = await Promise.resolve(e.callback(r));
            if (!Zr(t)) continue;
            if (!t.hasOwnProperty('type'))
              throw new Error(
                'Returned objects from event emitter observers must return an object with a type property',
              );
            if (Ct(t) || Ot(t)) return a.push(t), a;
            a.push(t);
          } catch (e) {
            return console.error(e), a.push({ type: bt.ERROR }), a;
          }
        return a;
      },
      ea = (window.wp.element, 'checkout_success'),
      ta = e => ({ dispatch: t }) => {
        const r = (e => {
          const t = { message: '', paymentStatus: 'not set', redirectUrl: '', paymentDetails: {} };
          return (
            'payment_result' in e &&
              ((t.paymentStatus = e.payment_result.payment_status),
              (t.redirectUrl = e.payment_result.redirect_url),
              e.payment_result.hasOwnProperty('payment_details') &&
                Array.isArray(e.payment_result.payment_details) &&
                e.payment_result.payment_details.forEach(({ key: e, value: r }) => {
                  t.paymentDetails[e] = (0, ze.decodeEntities)(r);
                })),
            'message' in e && (t.message = (0, ze.decodeEntities)(e.message)),
            !t.message &&
              'data' in e &&
              'status' in e.data &&
              e.data.status > 299 &&
              (t.message = (0, P.__)(
                'Something went wrong. Please contact us to get assistance.',
                'woocommerce',
              )),
            t
          );
        })(e);
        t.__internalSetRedirectUrl((null == r ? void 0 : r.redirectUrl) || ''),
          (0, v.dispatch)(Bt).__internalSetPaymentResult(r),
          t.__internalSetAfterProcessing();
      },
      ra = ({ observers: e, setValidationErrors: t }) => ({ dispatch: r, registry: a }) => {
        const { createErrorNotice: s } = a.dispatch(A.store);
        ((e, t) => {
          const r = (0, v.select)('core/notices').getNotices(t),
            { removeNotice: a } = (0, v.dispatch)('core/notices');
          r.filter(e => 'error' === e.status).forEach(e => a(e.id, t));
        })(),
          (async (e, t, r) => {
            const a = Pt(e, t),
              s = [];
            for (const e of a)
              try {
                const t = await Promise.resolve(e.callback(r));
                'object' == typeof t && s.push(t);
              } catch (e) {
                console.error(e);
              }
            return !s.length || s;
          })(e, 'checkout_validation', {}).then(e => {
            !0 !== e
              ? (Array.isArray(e) &&
                  e.forEach(
                    ({ errorMessage: e, validationErrors: r, context: a = 'wc/checkout' }) => {
                      s(e, { context: a }), t(r);
                    },
                  ),
                r.__internalSetIdle(),
                r.__internalSetHasError())
              : r.__internalSetProcessing();
          });
      },
      aa = ({ observers: e, notices: t }) => ({ select: r, dispatch: a, registry: s }) => {
        const { createErrorNotice: i } = s.dispatch(A.store),
          n = {
            redirectUrl: r.getRedirectUrl(),
            orderId: r.getOrderId(),
            customerId: r.getCustomerId(),
            orderNotes: r.getOrderNotes(),
            processingResponse: (0, v.select)(Bt).getPaymentResult(),
          };
        r.hasError()
          ? Jr(e, 'checkout_fail', n).then(e => {
              (({
                observerResponses: e,
                notices: t,
                dispatch: r,
                createErrorNotice: a,
                data: s,
              }) => {
                const i = (({ observerResponses: e, createErrorNotice: t }) => {
                  let r = null;
                  return (
                    e.forEach(e => {
                      if ((Ct(e) || Ot(e)) && e.message && (0, xe.isString)(e.message)) {
                        const a =
                          e.messageContext && (0, xe.isString)(e.messageContext)
                            ? { context: e.messageContext }
                            : void 0;
                        (r = e), t(e.message, a);
                      }
                    }),
                    r
                  );
                })({ observerResponses: e, createErrorNotice: a });
                if (null !== i) Dt(i) ? r.__internalSetIdle() : r.__internalSetComplete(i);
                else {
                  var n;
                  t.checkoutNotices.some(e => 'error' === e.status) ||
                    t.expressPaymentNotices.some(e => 'error' === e.status) ||
                    t.paymentNotices.some(e => 'error' === e.status) ||
                    a(
                      (null === (n = s.processingResponse) || void 0 === n ? void 0 : n.message) ||
                        (0, P.__)(
                          'Something went wrong. Please contact us to get assistance.',
                          'woocommerce',
                        ),
                      { id: 'checkout', context: 'wc/checkout' },
                    ),
                    r.__internalSetIdle();
                }
              })({ observerResponses: e, notices: t, dispatch: a, createErrorNotice: i, data: n });
            })
          : Jr(e, ea, n).then(e => {
              (({ observerResponses: e, dispatch: t, createErrorNotice: r }) => {
                let a = null,
                  s = null;
                if (
                  (e.forEach(e => {
                    It(e) && (a = e), (Ct(e) || Ot(e)) && (s = e);
                  }),
                  a && !s)
                )
                  t.__internalSetComplete(a);
                else if ((0, xe.isObject)(s)) {
                  if (s.message && (0, xe.isString)(s.message)) {
                    const e =
                      s.messageContext && (0, xe.isString)(s.messageContext)
                        ? { context: s.messageContext }
                        : void 0;
                    r(s.message, e);
                  }
                  Dt(s) ? t.__internalSetHasError(!0) : t.__internalSetComplete(s);
                } else t.__internalSetComplete();
              })({ observerResponses: e, dispatch: a, createErrorNotice: i });
            });
      },
      sa = () => ({ type: Lr }),
      ia = () => ({ type: Hr }),
      na = () => ({ type: Fr }),
      oa = () => ({ type: Ur }),
      ca = (e = {}) => ({ type: Yr, data: e }),
      la = e => ({ type: jr, redirectUrl: e }),
      da = (e = !0) => ({ type: Vr, hasError: e }),
      pa = () => ({ type: $r }),
      ua = () => ({ type: Gr }),
      _a = e => ({ type: Br, customerId: e }),
      ma = e => ({ type: zr, useShippingAsBilling: e }),
      ha = e => ({ type: Kr, shouldCreateAccount: e }),
      ya = e => ({ type: Wr, additionalFields: e }),
      Ea = e => ({ type: qr, orderNotes: e }),
      ga = e => ({ type: Xr, prefersCollection: e }),
      Sa = (e, t, r = !1) => ({ type: Qr, extensionData: t, namespace: e, replace: r }),
      Ta = e => {
        const t = {};
        return (
          void 0 !== e.label && (t.label = e.label),
          void 0 !== e.required && (t.required = e.required),
          void 0 !== e.hidden && (t.hidden = e.hidden),
          void 0 === e.label ||
            e.optionalLabel ||
            (t.optionalLabel = (0, P.sprintf) /* translators: %s Field label. */(
              /* translators: %s Field label. */
              (0, P.__)('%s (optional)', 'woocommerce'),
              e.label,
            )),
          e.priority &&
            ((0, xe.isNumber)(e.priority) && (t.index = e.priority),
            (0, xe.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
          e.hidden && (t.required = !1),
          t
        );
      },
      Aa = Object.entries(mr)
        .map(([e, t]) => [
          e,
          Object.entries(t)
            .map(([e, t]) => [e, Ta(t)])
            .reduce((e, [t, r]) => ((e[t] = r), e), {}),
        ])
        .reduce((e, [t, r]) => ((e[t] = r), e), {}),
      va = e => {
        const t = ((e, t, r = '') => {
            const a = r && void 0 !== Aa[r] ? Aa[r] : {};
            return e
              .map(e => ({
                key: e,
                ...(w.defaultFields[e] || {}),
                ...(a[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          })(yr, {}, e.country),
          r = Object.assign({}, e);
        return (
          t.forEach(({ key: t = '', hidden: a = !1 }) => {
            a && ((e, t) => e in t)(t, e) && (r[t] = '');
          }),
          r
        );
      },
      fa = {
        redirectUrl: '',
        status: Wt.IDLE,
        hasError: !1,
        orderId: Zt.order_id,
        customerId: Zt.customer_id,
        calculatingCount: 0,
        orderNotes: '',
        useShippingAsBilling:
          ((Pa = Zt.billing_address), (ba = Zt.shipping_address), yr.every(e => Pa[e] === ba[e])),
        shouldCreateAccount: !1,
        prefersCollection: void 0,
        extensionData: {},
        additionalFields: Zt.additional_fields || {},
      };
    var Pa, ba;
    const Ra = {
        reducer: (e = fa, t) => {
          var r;
          let a = e;
          switch (t.type) {
            case Lr:
              a = e.status !== Wt.IDLE ? { ...e, status: Wt.IDLE } : e;
              break;
            case jr:
              a =
                void 0 !== t.redirectUrl && t.redirectUrl !== e.redirectUrl
                  ? { ...e, redirectUrl: t.redirectUrl }
                  : e;
              break;
            case Yr:
              a = {
                ...e,
                status: Wt.COMPLETE,
                redirectUrl:
                  'string' ==
                  typeof (null === (r = t.data) || void 0 === r ? void 0 : r.redirectUrl)
                    ? t.data.redirectUrl
                    : e.redirectUrl,
              };
              break;
            case Fr:
              a = { ...e, status: Wt.PROCESSING, hasError: !1 };
              break;
            case Hr:
              a = { ...e, status: Wt.BEFORE_PROCESSING, hasError: !1 };
              break;
            case Ur:
              a = { ...e, status: Wt.AFTER_PROCESSING };
              break;
            case Vr:
              a = {
                ...e,
                hasError: t.hasError,
                status:
                  e.status === Wt.PROCESSING || e.status === Wt.BEFORE_PROCESSING
                    ? Wt.IDLE
                    : e.status,
              };
              break;
            case $r:
              a = { ...e, calculatingCount: e.calculatingCount + 1 };
              break;
            case Gr:
              a = { ...e, calculatingCount: Math.max(0, e.calculatingCount - 1) };
              break;
            case Br:
              void 0 !== t.customerId && (a = { ...e, customerId: t.customerId });
              break;
            case Wr:
              void 0 !== t.additionalFields &&
                (a = { ...e, additionalFields: { ...e.additionalFields, ...t.additionalFields } });
              break;
            case zr:
              void 0 !== t.useShippingAsBilling &&
                t.useShippingAsBilling !== e.useShippingAsBilling &&
                (a = { ...e, useShippingAsBilling: t.useShippingAsBilling });
              break;
            case Kr:
              void 0 !== t.shouldCreateAccount &&
                t.shouldCreateAccount !== e.shouldCreateAccount &&
                (a = { ...e, shouldCreateAccount: t.shouldCreateAccount });
              break;
            case Xr:
              void 0 !== t.prefersCollection &&
                t.prefersCollection !== e.prefersCollection &&
                (a = { ...e, prefersCollection: t.prefersCollection });
              break;
            case qr:
              void 0 !== t.orderNotes &&
                e.orderNotes !== t.orderNotes &&
                (a = { ...e, orderNotes: t.orderNotes });
              break;
            case Qr:
              void 0 !== t.extensionData &&
                void 0 !== t.namespace &&
                (a = {
                  ...e,
                  extensionData: {
                    ...e.extensionData,
                    [t.namespace]: t.replace
                      ? t.extensionData
                      : { ...e.extensionData[t.namespace], ...t.extensionData },
                  },
                });
          }
          return a;
        },
        selectors: i,
        actions: n,
        __experimentalUseThunks: !0,
      },
      wa = (0, v.createReduxStore)(Qt, Ra);
    (0, v.register)(wa);
    const Ia = Qt,
      Ca = 'wc/store/collections',
      Oa = [],
      Da = (e, t) =>
        !!t && !!t.reduce((e, t) => ('object' == typeof e && null !== e ? e[t] : void 0), e);
    function Ma(e, t) {
      return Da(e, t);
    }
    const ka = ({
        state: e,
        namespace: t,
        resourceName: r,
        query: a,
        ids: s,
        type: i = 'items',
        fallback: n = Oa,
      }) =>
        Ma(e, [
          t,
          r,
          (s = JSON.stringify(s)),
          (a = null !== a ? (0, Lt.addQueryArgs)('', a) : ''),
          i,
        ])
          ? e[t][r][s][a][i]
          : n,
      Na = (e, t, r, a = null, s = Oa) =>
        ka({ state: e, namespace: t, resourceName: r, query: a, ids: s }),
      xa = (e, t, r, a = null, s = Oa) =>
        ka({
          state: e,
          namespace: t,
          resourceName: r,
          query: a,
          ids: s,
          type: 'error',
          fallback: null,
        }),
      La = (e, t, r, a, s = null, i = Oa) => {
        const n = ((e, t, r, a = null, s = Oa) =>
          ka({
            state: e,
            namespace: t,
            resourceName: r,
            query: a,
            ids: s,
            type: 'headers',
            fallback: void 0,
          }))(e, r, a, s, i);
        return n && n.get ? (n.has(t) ? n.get(t) : void 0) : null;
      },
      ja = e => e.lastModified || 0,
      Ya = {
        RECEIVE_COLLECTION: 'RECEIVE_COLLECTION',
        RESET_COLLECTION: 'RESET_COLLECTION',
        ERROR: 'ERROR',
        RECEIVE_LAST_MODIFIED: 'RECEIVE_LAST_MODIFIED',
        INVALIDATE_RESOLUTION_FOR_STORE: 'INVALIDATE_RESOLUTION_FOR_STORE',
      };
    let Ha = window.Headers || null;
    function Ua(e, t, r = '', a = [], s = { items: [], headers: Ha }, i = !1) {
      return {
        type: i ? Ya.RESET_COLLECTION : Ya.RECEIVE_COLLECTION,
        namespace: e,
        resourceName: t,
        queryString: r,
        ids: a,
        response: s,
      };
    }
    function Fa(e, t, r, a, s) {
      return {
        type: 'ERROR',
        namespace: e,
        resourceName: t,
        queryString: r,
        ids: a,
        response: { items: [], headers: Ha, error: s },
      };
    }
    function Va(e) {
      return { type: Ya.RECEIVE_LAST_MODIFIED, timestamp: e };
    }
    Ha = Ha ? new Ha() : { get: () => {}, has: () => {} };
    const Ba = 'wc/store/schema';
    function* qa(e, t, r, a) {
      const s = yield v.controls.resolveSelect(Ba, 'getRoute', e, t, a),
        i = (0, Lt.addQueryArgs)('', r);
      if (s)
        try {
          const { response: r = Oa, headers: n } = yield Ue({ path: s + i });
          n &&
            n.get &&
            n.has('last-modified') &&
            (yield (function*(e) {
              const t = yield v.controls.resolveSelect(Ca, 'getCollectionLastModified');
              t
                ? e > t &&
                  (yield v.controls.dispatch(Ca, 'invalidateResolutionForStore'),
                  yield v.controls.dispatch(Ca, 'receiveLastModified', e))
                : yield v.controls.dispatch(Ca, 'receiveLastModified', e);
            })(parseInt(n.get('last-modified'), 10))),
            yield Ua(e, t, i, a, { items: r, headers: n });
        } catch (r) {
          yield Fa(e, t, i, a, r);
        }
      else yield Ua(e, t, i, a);
    }
    function* $a(e, t, r, a, s) {
      const i = [t, r, a, s].filter(e => void 0 !== e);
      yield v.controls.resolveSelect(Ca, 'getCollection', ...i);
    }
    function Ga(e, t, r, a = 0) {
      const s = t[a];
      if (a === t.length - 1) return { ...e, [s]: r };
      const i = e[s] || {};
      return { ...e, [s]: Ga(i, t, r, a + 1) };
    }
    function za(e, t, r) {
      return Ga(e, t, r);
    }
    const Ka = (0, v.createReduxStore)(Ca, {
      reducer: (e = {}, t) => {
        if (t.type === Ya.RECEIVE_LAST_MODIFIED)
          return t.timestamp === e.lastModified ? e : { ...e, lastModified: t.timestamp };
        if (t.type === Ya.INVALIDATE_RESOLUTION_FOR_STORE) return {};
        const { type: r, namespace: a, resourceName: s, queryString: i, response: n } = t,
          o = t.ids ? JSON.stringify(t.ids) : '[]';
        switch (r) {
          case Ya.RECEIVE_COLLECTION:
            if (Ma(e, [a, s, o, i])) return e;
            e = za(e, [a, s, o, i], n);
            break;
          case Ya.RESET_COLLECTION:
          case Ya.ERROR:
            e = za(e, [a, s, o, i], n);
        }
        return e;
      },
      actions: c,
      controls: { ...f.controls, ...Be },
      selectors: o,
      resolvers: l,
    });
    (0, v.register)(Ka);
    const Xa = Ca,
      Qa = {
        status: qt.IDLE,
        activePaymentMethod: '',
        activeSavedToken: '',
        availablePaymentMethods: {},
        availableExpressPaymentMethods: {},
        savedPaymentMethods: (0, w.getSetting)('customerPaymentMethods', {}),
        paymentMethodData: {},
        paymentResult: null,
        paymentMethodsInitialized: !1,
        expressPaymentMethodsInitialized: !1,
        shouldSavePaymentMethod: !1,
      };
    let Wa = (function(e) {
      return (
        (e.SET_PAYMENT_IDLE = 'SET_PAYMENT_IDLE'),
        (e.SET_EXPRESS_PAYMENT_STARTED = 'SET_EXPRESS_PAYMENT_STARTED'),
        (e.SET_PAYMENT_READY = 'SET_PAYMENT_READY'),
        (e.SET_PAYMENT_PROCESSING = 'SET_PAYMENT_PROCESSING'),
        (e.SET_PAYMENT_ERROR = 'SET_PAYMENT_ERROR'),
        (e.SET_PAYMENT_METHODS_INITIALIZED = 'SET_PAYMENT_METHODS_INITIALIZED'),
        (e.SET_EXPRESS_PAYMENT_METHODS_INITIALIZED = 'SET_EXPRESS_PAYMENT_METHODS_INITIALIZED'),
        (e.SET_ACTIVE_PAYMENT_METHOD = 'SET_ACTIVE_PAYMENT_METHOD'),
        (e.SET_SHOULD_SAVE_PAYMENT_METHOD = 'SET_SHOULD_SAVE_PAYMENT_METHOD'),
        (e.SET_AVAILABLE_PAYMENT_METHODS = 'SET_AVAILABLE_PAYMENT_METHODS'),
        (e.SET_AVAILABLE_EXPRESS_PAYMENT_METHODS = 'SET_AVAILABLE_EXPRESS_PAYMENT_METHODS'),
        (e.REMOVE_AVAILABLE_PAYMENT_METHOD = 'REMOVE_AVAILABLE_PAYMENT_METHOD'),
        (e.REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD = 'REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD'),
        (e.INITIALIZE_PAYMENT_METHODS = 'INITIALIZE_PAYMENT_METHODS'),
        (e.SET_PAYMENT_METHOD_DATA = 'SET_PAYMENT_METHOD_DATA'),
        (e.SET_PAYMENT_RESULT = 'SET_PAYMENT_RESULT'),
        e
      );
    })({});
    const Za = e =>
        Object.fromEntries(
          e.map(({ package_id: e, shipping_rates: t }) => {
            var r;
            return [
              e,
              (null === (r = t.find(e => e.selected)) || void 0 === r ? void 0 : r.rate_id) || '',
            ];
          }),
        ),
      Ja = window.wc.wcBlocksRegistry,
      es = [
        {
          destination: {
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
          },
          package_id: 0,
          name: (0, P.__)('Shipping', 'woocommerce'),
          items: [
            {
              key: '33e75ff09dd601bbe69f351039152189',
              name: (0, P._x)('Beanie with Logo', 'example product in Cart Block', 'woocommerce'),
              quantity: 2,
            },
            {
              key: '6512bd43d9caa6e02c990b0a82652dca',
              name: (0, P._x)('Beanie', 'example product in Cart Block', 'woocommerce'),
              quantity: 1,
            },
          ],
          shipping_rates: [
            {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              name: (0, P.__)('Flat rate shipping', 'woocommerce'),
              description: '',
              delivery_time: '',
              price: '500',
              taxes: '0',
              rate_id: 'flat_rate:0',
              instance_id: 0,
              meta_data: [],
              method_id: 'flat_rate',
              selected: !0,
            },
            {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              name: (0, P.__)('Free shipping', 'woocommerce'),
              description: '',
              delivery_time: '',
              price: '0',
              taxes: '0',
              rate_id: 'free_shipping:1',
              instance_id: 0,
              meta_data: [],
              method_id: 'flat_rate',
              selected: !1,
            },
            {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              name: (0, P.__)('Local pickup', 'woocommerce'),
              description: '',
              delivery_time: '',
              price: '0',
              taxes: '0',
              rate_id: 'pickup_location:1',
              instance_id: 1,
              meta_data: [
                { key: 'pickup_location', value: 'New York' },
                { key: 'pickup_address', value: '123 Easy Street, New York, 12345' },
              ],
              method_id: 'pickup_location',
              selected: !1,
            },
            {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              name: (0, P.__)('Local pickup', 'woocommerce'),
              description: '',
              delivery_time: '',
              price: '0',
              taxes: '0',
              rate_id: 'pickup_location:2',
              instance_id: 1,
              meta_data: [
                { key: 'pickup_location', value: 'Los Angeles' },
                { key: 'pickup_address', value: '123 Easy Street, Los Angeles, California, 90210' },
              ],
              method_id: 'pickup_location',
              selected: !1,
            },
          ],
        },
      ],
      ts = (0, w.getSetting)('displayCartPricesIncludingTax', !1),
      rs = {
        coupons: [],
        shipping_rates:
          (0, w.getSetting)('shippingMethodsExist', !1) ||
          (0, w.getSetting)('localPickupEnabled', !1)
            ? es
            : [],
        items: [
          {
            key: '1',
            id: 1,
            type: 'simple',
            quantity: 2,
            catalog_visibility: 'visible',
            name: (0, P.__)('Beanie', 'woocommerce'),
            summary: (0, P.__)('Beanie', 'woocommerce'),
            short_description: (0, P.__)('Warm hat for winter', 'woocommerce'),
            description:
              'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
            sku: 'woo-beanie',
            permalink: 'https://example.org',
            low_stock_remaining: 2,
            backorders_allowed: !1,
            show_backorder_badge: !1,
            sold_individually: !1,
            quantity_limits: { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
            images: [
              {
                id: 10,
                src: dr + 'previews/beanie.jpg',
                thumbnail: dr + 'previews/beanie.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            variation: [
              {
                attribute: (0, P.__)('Color', 'woocommerce'),
                value: (0, P.__)('Yellow', 'woocommerce'),
              },
              {
                attribute: (0, P.__)('Size', 'woocommerce'),
                value: (0, P.__)('Small', 'woocommerce'),
              },
            ],
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '12000' : '10000',
              regular_price: ts ? '12000' : '10000',
              sale_price: ts ? '12000' : '10000',
              price_range: null,
              raw_prices: {
                precision: 6,
                price: ts ? '12000000' : '10000000',
                regular_price: ts ? '12000000' : '10000000',
                sale_price: ts ? '12000000' : '10000000',
              },
            },
            totals: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              line_subtotal: '2000',
              line_subtotal_tax: '400',
              line_total: '2000',
              line_total_tax: '400',
            },
            extensions: {},
            item_data: [],
          },
          {
            key: '2',
            id: 2,
            type: 'simple',
            quantity: 1,
            catalog_visibility: 'visible',
            name: (0, P.__)('Cap', 'woocommerce'),
            summary: (0, P.__)('Cap', 'woocommerce'),
            short_description: (0, P.__)('Lightweight baseball cap', 'woocommerce'),
            description:
              'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
            sku: 'woo-cap',
            low_stock_remaining: null,
            permalink: 'https://example.org',
            backorders_allowed: !1,
            show_backorder_badge: !1,
            sold_individually: !1,
            quantity_limits: { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
            images: [
              {
                id: 11,
                src: dr + 'previews/cap.jpg',
                thumbnail: dr + 'previews/cap.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            variation: [
              {
                attribute: (0, P.__)('Color', 'woocommerce'),
                value: (0, P.__)('Orange', 'woocommerce'),
              },
            ],
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '2400' : '2000',
              regular_price: ts ? '2400' : '2000',
              sale_price: ts ? '2400' : '2000',
              price_range: null,
              raw_prices: {
                precision: 6,
                price: ts ? '24000000' : '20000000',
                regular_price: ts ? '24000000' : '20000000',
                sale_price: ts ? '24000000' : '20000000',
              },
            },
            totals: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              line_subtotal: '2000',
              line_subtotal_tax: '400',
              line_total: '2000',
              line_total_tax: '400',
            },
            extensions: {},
            item_data: [],
          },
        ],
        cross_sells: [
          {
            id: 1,
            name: (0, P.__)('Polo', 'woocommerce'),
            parent: 0,
            type: 'simple',
            variation: '',
            permalink: 'https://example.org',
            sku: 'woo-polo',
            short_description: (0, P.__)('Polo', 'woocommerce'),
            description: (0, P.__)('Polo', 'woocommerce'),
            on_sale: !1,
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '24000' : '20000',
              regular_price: ts ? '24000' : '20000',
              sale_price: ts ? '12000' : '10000',
              price_range: null,
            },
            price_html: '',
            average_rating: '4.5',
            review_count: 2,
            images: [
              {
                id: 17,
                src: dr + 'previews/polo.jpg',
                thumbnail: dr + 'previews/polo.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            categories: [],
            tags: [],
            attributes: [],
            variations: [],
            has_options: !1,
            is_purchasable: !0,
            is_in_stock: !0,
            is_on_backorder: !1,
            low_stock_remaining: null,
            sold_individually: !1,
            add_to_cart: {
              text: '',
              description: '',
              url: '',
              minimum: 1,
              maximum: 99,
              multiple_of: 1,
            },
          },
          {
            id: 2,
            name: (0, P.__)('Long Sleeve Tee', 'woocommerce'),
            parent: 0,
            type: 'simple',
            variation: '',
            permalink: 'https://example.org',
            sku: 'woo-long-sleeve-tee',
            short_description: (0, P.__)('Long Sleeve Tee', 'woocommerce'),
            description: (0, P.__)('Long Sleeve Tee', 'woocommerce'),
            on_sale: !1,
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '30000' : '25000',
              regular_price: ts ? '30000' : '25000',
              sale_price: ts ? '30000' : '25000',
              price_range: null,
            },
            price_html: '',
            average_rating: '4',
            review_count: 2,
            images: [
              {
                id: 17,
                src: dr + 'previews/long-sleeve-tee.jpg',
                thumbnail: dr + 'previews/long-sleeve-tee.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            categories: [],
            tags: [],
            attributes: [],
            variations: [],
            has_options: !1,
            is_purchasable: !0,
            is_in_stock: !0,
            is_on_backorder: !1,
            low_stock_remaining: null,
            sold_individually: !1,
            add_to_cart: {
              text: '',
              description: '',
              url: '',
              minimum: 1,
              maximum: 99,
              multiple_of: 1,
            },
          },
          {
            id: 3,
            name: (0, P.__)('Hoodie with Zipper', 'woocommerce'),
            parent: 0,
            type: 'simple',
            variation: '',
            permalink: 'https://example.org',
            sku: 'woo-hoodie-with-zipper',
            short_description: (0, P.__)('Hoodie with Zipper', 'woocommerce'),
            description: (0, P.__)('Hoodie with Zipper', 'woocommerce'),
            on_sale: !0,
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '15000' : '12500',
              regular_price: ts ? '30000' : '25000',
              sale_price: ts ? '15000' : '12500',
              price_range: null,
            },
            price_html: '',
            average_rating: '1',
            review_count: 2,
            images: [
              {
                id: 17,
                src: dr + 'previews/hoodie-with-zipper.jpg',
                thumbnail: dr + 'previews/hoodie-with-zipper.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            categories: [],
            tags: [],
            attributes: [],
            variations: [],
            has_options: !1,
            is_purchasable: !0,
            is_in_stock: !0,
            is_on_backorder: !1,
            low_stock_remaining: null,
            sold_individually: !1,
            add_to_cart: {
              text: '',
              description: '',
              url: '',
              minimum: 1,
              maximum: 99,
              multiple_of: 1,
            },
          },
          {
            id: 4,
            name: (0, P.__)('Hoodie with Logo', 'woocommerce'),
            parent: 0,
            type: 'simple',
            variation: '',
            permalink: 'https://example.org',
            sku: 'woo-hoodie-with-logo',
            short_description: (0, P.__)('Polo', 'woocommerce'),
            description: (0, P.__)('Polo', 'woocommerce'),
            on_sale: !1,
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '4500' : '4250',
              regular_price: ts ? '4500' : '4250',
              sale_price: ts ? '4500' : '4250',
              price_range: null,
            },
            price_html: '',
            average_rating: '5',
            review_count: 2,
            images: [
              {
                id: 17,
                src: dr + 'previews/hoodie-with-logo.jpg',
                thumbnail: dr + 'previews/hoodie-with-logo.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            categories: [],
            tags: [],
            attributes: [],
            variations: [],
            has_options: !1,
            is_purchasable: !0,
            is_in_stock: !0,
            is_on_backorder: !1,
            low_stock_remaining: null,
            sold_individually: !1,
            add_to_cart: {
              text: '',
              description: '',
              url: '',
              minimum: 1,
              maximum: 99,
              multiple_of: 1,
            },
          },
          {
            id: 5,
            name: (0, P.__)('Hoodie with Pocket', 'woocommerce'),
            parent: 0,
            type: 'simple',
            variation: '',
            permalink: 'https://example.org',
            sku: 'woo-hoodie-with-pocket',
            short_description: (0, P.__)('Hoodie with Pocket', 'woocommerce'),
            description: (0, P.__)('Hoodie with Pocket', 'woocommerce'),
            on_sale: !0,
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '3500' : '3250',
              regular_price: ts ? '4500' : '4250',
              sale_price: ts ? '3500' : '3250',
              price_range: null,
            },
            price_html: '',
            average_rating: '3.75',
            review_count: 4,
            images: [
              {
                id: 17,
                src: dr + 'previews/hoodie-with-pocket.jpg',
                thumbnail: dr + 'previews/hoodie-with-pocket.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            categories: [],
            tags: [],
            attributes: [],
            variations: [],
            has_options: !1,
            is_purchasable: !0,
            is_in_stock: !0,
            is_on_backorder: !1,
            low_stock_remaining: null,
            sold_individually: !1,
            add_to_cart: {
              text: '',
              description: '',
              url: '',
              minimum: 1,
              maximum: 99,
              multiple_of: 1,
            },
          },
          {
            id: 6,
            name: (0, P.__)('T-Shirt', 'woocommerce'),
            parent: 0,
            type: 'simple',
            variation: '',
            permalink: 'https://example.org',
            sku: 'woo-t-shirt',
            short_description: (0, P.__)('T-Shirt', 'woocommerce'),
            description: (0, P.__)('T-Shirt', 'woocommerce'),
            on_sale: !1,
            prices: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              price: ts ? '1800' : '1500',
              regular_price: ts ? '1800' : '1500',
              sale_price: ts ? '1800' : '1500',
              price_range: null,
            },
            price_html: '',
            average_rating: '3',
            review_count: 2,
            images: [
              {
                id: 17,
                src: dr + 'previews/tshirt.jpg',
                thumbnail: dr + 'previews/tshirt.jpg',
                srcset: '',
                sizes: '',
                name: '',
                alt: '',
              },
            ],
            categories: [],
            tags: [],
            attributes: [],
            variations: [],
            has_options: !1,
            is_purchasable: !0,
            is_in_stock: !0,
            is_on_backorder: !1,
            low_stock_remaining: null,
            sold_individually: !1,
            add_to_cart: {
              text: '',
              description: '',
              url: '',
              minimum: 1,
              maximum: 99,
              multiple_of: 1,
            },
          },
        ],
        fees: [
          {
            id: 'fee',
            name: (0, P.__)('Fee', 'woocommerce'),
            totals: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              total: '100',
              total_tax: '20',
            },
          },
        ],
        items_count: 3,
        items_weight: 0,
        needs_payment: !0,
        needs_shipping: (0, w.getSetting)('shippingEnabled', !0),
        has_calculated_shipping: !0,
        shipping_address: {
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
        billing_address: {
          first_name: '',
          last_name: '',
          company: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: '',
          email: '',
          phone: '',
        },
        totals: {
          currency_code: 'USD',
          currency_symbol: '$',
          currency_minor_unit: 2,
          currency_decimal_separator: '.',
          currency_thousand_separator: ',',
          currency_prefix: '$',
          currency_suffix: '',
          total_items: '4000',
          total_items_tax: '800',
          total_fees: '100',
          total_fees_tax: '20',
          total_discount: '0',
          total_discount_tax: '0',
          total_shipping: '0',
          total_shipping_tax: '0',
          total_tax: '820',
          total_price: '4920',
          tax_lines: [{ name: (0, P.__)('Sales tax', 'woocommerce'), rate: '20%', price: '820' }],
        },
        errors: [],
        payment_methods: ['cod', 'bacs', 'cheque'],
        payment_requirements: ['products'],
        extensions: {},
      },
      as = (e, t, r = !1) => {
        const { createErrorNotice: a } = (0, v.dispatch)('core/notices'),
          s = r ? Rt.EXPRESS_PAYMENTS : Rt.PAYMENTS;
        a(
          `${(0,
          P.sprintf) /* translators: %s the id of the payment method being registered (bank transfer, cheque...) */(
            /* translators: %s the id of the payment method being registered (bank transfer, cheque...) */
            (0, P.__)(
              "There was an error registering the payment method with id '%s': ",
              'woocommerce',
            ),
            e.paymentMethodId,
          )} ${t}`,
          { context: s, id: `wc-${e.paymentMethodId}-registration-error` },
        );
      },
      ss = async (e = !1) => {
        let t = {};
        const r = e ? (0, Ja.getExpressPaymentMethods)() : (0, Ja.getPaymentMethods)(),
          a = e => {
            const { name: r } = e;
            t = { ...t, [e.name]: { name: r } };
          },
          s = e
            ? Object.keys(r)
            : Array.from(
                new Set([...(0, w.getSetting)('paymentMethodSortOrder', []), ...Object.keys(r)]),
              ),
          i = (() => {
            let e;
            if ((0, v.select)('core/editor')) {
              const t = {
                cartCoupons: rs.coupons,
                cartItems: rs.items,
                crossSellsProducts: rs.cross_sells,
                cartFees: rs.fees,
                cartItemsCount: rs.items_count,
                cartItemsWeight: rs.items_weight,
                cartNeedsPayment: rs.needs_payment,
                cartNeedsShipping: rs.needs_shipping,
                cartItemErrors: k,
                cartTotals: rs.totals,
                cartIsLoading: !1,
                cartErrors: N,
                billingData: V.cartData.billingAddress,
                billingAddress: V.cartData.billingAddress,
                shippingAddress: V.cartData.shippingAddress,
                extensions: Y,
                shippingRates: rs.shipping_rates,
                isLoadingRates: !1,
                cartHasCalculatedShipping: rs.has_calculated_shipping,
                paymentRequirements: rs.payment_requirements,
                receiveCart: () => {},
              };
              e = {
                cart: t,
                cartTotals: t.cartTotals,
                cartNeedsShipping: t.cartNeedsShipping,
                billingData: t.billingAddress,
                billingAddress: t.billingAddress,
                shippingAddress: t.shippingAddress,
                selectedShippingMethods: Za(t.shippingRates),
                paymentMethods: rs.payment_methods,
                paymentRequirements: t.paymentRequirements,
              };
            } else {
              const t = (0, v.select)(b),
                r = t.getCartData(),
                a = t.getCartErrors(),
                s = t.getCartTotals(),
                i = !t.hasFinishedResolution('getCartData'),
                n = t.isCustomerDataUpdating(),
                o = Za(r.shippingRates);
              e = {
                cart: {
                  cartCoupons: r.coupons,
                  cartItems: r.items,
                  crossSellsProducts: r.crossSells,
                  cartFees: r.fees,
                  cartItemsCount: r.itemsCount,
                  cartItemsWeight: r.itemsWeight,
                  cartNeedsPayment: r.needsPayment,
                  cartNeedsShipping: r.needsShipping,
                  cartItemErrors: r.errors,
                  cartTotals: s,
                  cartIsLoading: i,
                  cartErrors: a,
                  billingData: va(r.billingAddress),
                  billingAddress: va(r.billingAddress),
                  shippingAddress: va(r.shippingAddress),
                  extensions: r.extensions,
                  shippingRates: r.shippingRates,
                  isLoadingRates: n,
                  cartHasCalculatedShipping: r.hasCalculatedShipping,
                  paymentRequirements: r.paymentRequirements,
                  receiveCart: (0, v.dispatch)(b).receiveCart,
                },
                cartTotals: r.totals,
                cartNeedsShipping: r.needsShipping,
                billingData: r.billingAddress,
                billingAddress: r.billingAddress,
                shippingAddress: r.shippingAddress,
                selectedShippingMethods: o,
                paymentMethods: r.paymentMethods,
                paymentRequirements: r.paymentRequirements,
              };
            }
            return e;
          })(),
          n = i.paymentMethods,
          o = !!(0, v.select)('core/editor');
        for (let t = 0; t < s.length; t++) {
          const c = s[t],
            l = r[c];
          if (l)
            try {
              const t = !(!o && !e) || n.includes(c),
                r = !!o || (t && (await Promise.resolve(l.canMakePayment(i))));
              if (r) {
                if ('object' == typeof r && r.error) throw new Error(r.error.message);
                a(l);
              }
            } catch (t) {
              (w.CURRENT_USER_IS_ADMIN || o) && as(l, t, e);
            }
        }
        const c = Object.keys(t),
          l = e
            ? (0, v.select)(Bt).getAvailableExpressPaymentMethods()
            : (0, v.select)(Bt).getAvailablePaymentMethods();
        if (Object.keys(l).length === c.length && Object.keys(l).every(e => c.includes(e)))
          return !0;
        const {
          __internalSetAvailablePaymentMethods: d,
          __internalSetAvailableExpressPaymentMethods: p,
        } = (0, v.dispatch)(Bt);
        return (e ? p : d)(t), !0;
      },
      is = async e => {
        const t = Object.keys(e),
          r = Object.keys((0, v.select)(Bt).getAvailableExpressPaymentMethods()),
          a = [...t, ...r],
          s = (0, v.select)(Bt).getSavedPaymentMethods(),
          i = Object.keys(s).flatMap(e => s[e])[0] || void 0;
        if (i) {
          const e = i.tokenId.toString(),
            t = i.method.gateway,
            r = `wc-${t}-payment-token`;
          return void (0, v.dispatch)(Bt).__internalSetActivePaymentMethod(t, {
            token: e,
            payment_method: t,
            [r]: e,
            isSavedToken: !0,
          });
        }
        const n = (0, v.select)(Bt).getActivePaymentMethod();
        (n && a.includes(n)) ||
          ((0, v.dispatch)(Bt).__internalSetPaymentIdle(),
          (0, v.dispatch)(Bt).__internalSetActivePaymentMethod(t[0]));
      },
      ns = window.wp.deprecated;
    var os = r.n(ns);
    const cs = e =>
        [
          'first_name',
          'last_name',
          'company',
          'address_1',
          'address_2',
          'city',
          'state',
          'postcode',
          'country',
          'phone',
        ].every(t => (0, xe.objectHasProp)(e, t)),
      ls = e => cs(e) && (0, xe.objectHasProp)(e, 'email'),
      ds = e => ({ registry: t }) => {
        const { createErrorNotice: r, removeNotice: a } = t.dispatch(A.store);
        e
          ? r(e, { id: 'wc-express-payment-error', context: Rt.EXPRESS_PAYMENTS })
          : a('wc-express-payment-error', Rt.EXPRESS_PAYMENTS);
      },
      ps = (e, t) => ({ dispatch: r, registry: a }) => {
        const { createErrorNotice: s, removeNotice: i } = a.dispatch('core/notices');
        return (
          i('wc-payment-error', Rt.PAYMENTS),
          Jr(e, 'payment_setup', {}).then(e => {
            let i, n, o, c;
            e.forEach(e => {
              It(e) && (i = e), (Ct(e) || Ot(e)) && (n = e);
              const { billingAddress: t, billingData: r, shippingAddress: a, shippingData: s } =
                (null == e ? void 0 : e.meta) || {};
              (o = t),
                (c = a),
                r &&
                  ((o = r),
                  os()(
                    'returning billingData from an onPaymentProcessing observer in WooCommerce Blocks',
                    {
                      version: '9.5.0',
                      alternative: 'billingAddress',
                      link: 'https://github.com/woocommerce/woocommerce-blocks/pull/6369',
                    },
                  )),
                (0, xe.objectHasProp)(s, 'address') &&
                  s.address &&
                  ((c = s.address),
                  os()(
                    'returning shippingData from an onPaymentProcessing observer in WooCommerce Blocks',
                    {
                      version: '9.5.0',
                      alternative: 'shippingAddress',
                      link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8163',
                    },
                  ));
            });
            const { setBillingAddress: l, setShippingAddress: d } = a.dispatch(Xt);
            if (Zr(i) && !n) {
              var p;
              const { paymentMethodData: e } =
                (null === (p = i) || void 0 === p ? void 0 : p.meta) || {};
              ls(o) && l(o),
                cs(c) && d(c),
                r.__internalSetPaymentMethodData((0, xe.isObject)(e) ? e : {}),
                r.__internalSetPaymentReady();
            } else if (Ot(n)) {
              var u;
              const { paymentMethodData: e } =
                (null === (u = n) || void 0 === u ? void 0 : u.meta) || {};
              if (
                (0, xe.objectHasProp)(n, 'message') &&
                (0, xe.isString)(n.message) &&
                n.message.length
              ) {
                let e = Rt.PAYMENTS;
                (0, xe.objectHasProp)(n, 'messageContext') &&
                  (0, xe.isString)(n.messageContext) &&
                  n.messageContext.length &&
                  (e = n.messageContext),
                  s(n.message, { id: 'wc-payment-error', isDismissible: !1, context: e });
              }
              ls(o) && l(o),
                r.__internalSetPaymentMethodData((0, xe.isObject)(e) ? e : {}),
                r.__internalSetPaymentError();
            } else if (Ct(n)) {
              if (
                (0, xe.objectHasProp)(n, 'message') &&
                (0, xe.isString)(n.message) &&
                n.message.length
              ) {
                let e = Rt.PAYMENTS;
                (0, xe.objectHasProp)(n, 'messageContext') &&
                  (0, xe.isString)(n.messageContext) &&
                  n.messageContext.length &&
                  (e = n.messageContext),
                  s(n.message, { id: 'wc-payment-error', isDismissible: !1, context: e });
              }
              r.__internalSetPaymentError(),
                (_ = n.validationErrors),
                (0, xe.isObject)(_) &&
                  Object.entries(_).every(([e, t]) => {
                    return (
                      (0, xe.isString)(e) &&
                      ((r = t),
                      (0, xe.isObject)(r) &&
                        (0, xe.objectHasProp)(r, 'message') &&
                        (0, xe.objectHasProp)(r, 'hidden') &&
                        (0, xe.isString)(r.message) &&
                        (0, xe.isBoolean)(r.hidden))
                    );
                    var r;
                  }) &&
                  t(n.validationErrors);
            } else r.__internalSetPaymentReady();
            var _;
          })
        );
      },
      us = () => ({ type: Wa.SET_PAYMENT_IDLE }),
      _s = () => ({ type: Wa.SET_EXPRESS_PAYMENT_STARTED }),
      ms = () => ({ type: Wa.SET_PAYMENT_PROCESSING }),
      hs = () => ({ type: Wa.SET_PAYMENT_ERROR }),
      ys = () => ({ type: Wa.SET_PAYMENT_READY }),
      Es = e => async ({ select: t, dispatch: r }) => {
        const a = t.getAvailablePaymentMethods();
        e && (await is(a)), r({ type: Wa.SET_PAYMENT_METHODS_INITIALIZED, initialized: e });
      },
      gs = e => ({ type: Wa.SET_EXPRESS_PAYMENT_METHODS_INITIALIZED, initialized: e }),
      Ss = e => ({ type: Wa.SET_SHOULD_SAVE_PAYMENT_METHOD, shouldSavePaymentMethod: e }),
      Ts = (e, t = {}) => ({
        type: Wa.SET_ACTIVE_PAYMENT_METHOD,
        activePaymentMethod: e,
        paymentMethodData: t,
      }),
      As = (e = {}) => ({ type: Wa.SET_PAYMENT_METHOD_DATA, paymentMethodData: e }),
      vs = e => ({ type: Wa.SET_PAYMENT_RESULT, data: e }),
      fs = e => async ({ dispatch: t, select: r }) => {
        r.getActivePaymentMethod() in e || (await is(e)),
          t({ type: Wa.SET_AVAILABLE_PAYMENT_METHODS, paymentMethods: e });
      },
      Ps = e => ({ type: Wa.SET_AVAILABLE_EXPRESS_PAYMENT_METHODS, paymentMethods: e }),
      bs = e => ({ type: Wa.REMOVE_AVAILABLE_PAYMENT_METHOD, name: e }),
      Rs = e => ({ type: Wa.REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD, name: e });
    function ws() {
      return async ({ select: e, dispatch: t }) => {
        const r = await ss(!0),
          a = await ss(!1),
          { paymentMethodsInitialized: s, expressPaymentMethodsInitialized: i } = e;
        a && !s() && t(Es(!0)), r && !i() && t(gs(!0));
      };
    }
    const Is = {};
    (0, w.getSetting)('globalPaymentMethods') &&
      (0, w.getSetting)('globalPaymentMethods').forEach(e => {
        Is[e.id] = e.title;
      });
    const Cs = e => (
        os()('isPaymentPristine', {
          since: '9.6.0',
          alternative: 'isPaymentIdle',
          plugin: 'WooCommerce Blocks',
          link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
        }),
        e.status === qt.IDLE
      ),
      Os = e => e.status === qt.IDLE,
      Ds = e => (
        os()('isPaymentStarted', {
          since: '9.6.0',
          alternative: 'isExpressPaymentStarted',
          plugin: 'WooCommerce Blocks',
          link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
        }),
        e.status === qt.EXPRESS_STARTED
      ),
      Ms = e => e.status === qt.EXPRESS_STARTED,
      ks = e => e.status === qt.PROCESSING,
      Ns = e => e.status === qt.READY,
      xs = e => (
        os()('isPaymentSuccess', {
          since: '9.6.0',
          alternative: 'isPaymentReady',
          plugin: 'WooCommerce Blocks',
          link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
        }),
        e.status === qt.READY
      ),
      Ls = e => e.status === qt.ERROR,
      js = e => (
        os()('isPaymentFailed', {
          since: '9.6.0',
          plugin: 'WooCommerce Blocks',
          link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
        }),
        e.status === qt.ERROR
      ),
      Ys = e => Object.keys(e.availableExpressPaymentMethods).includes(e.activePaymentMethod),
      Hs = e =>
        'object' == typeof e.paymentMethodData &&
        (0, xe.objectHasProp)(e.paymentMethodData, 'token')
          ? e.paymentMethodData.token + ''
          : '',
      Us = e => e.activePaymentMethod,
      Fs = e => e.availablePaymentMethods,
      Vs = e => e.availableExpressPaymentMethods,
      Bs = e => e.paymentMethodData,
      qs = e => {
        const {
          availablePaymentMethods: t,
          availableExpressPaymentMethods: r,
          paymentMethodsInitialized: a,
          expressPaymentMethodsInitialized: s,
        } = e;
        return a && s
          ? Object.fromEntries(Object.entries(Is).filter(([e]) => !(e in { ...t, ...r })))
          : {};
      },
      $s = e => e.savedPaymentMethods,
      Gs = e =>
        ((e = [], t) => {
          if (0 === e.length) return {};
          const r = (0, Ja.getPaymentMethods)(),
            a = Object.fromEntries(e.map(e => [e, r[e]])),
            s = Object.keys(t),
            i = {};
          return (
            s.forEach(e => {
              const r = t[e].filter(({ method: { gateway: e } }) => {
                var t;
                return (
                  e in a &&
                  (null === (t = a[e].supports) || void 0 === t ? void 0 : t.showSavedCards)
                );
              });
              r.length && (i[e] = r);
            }),
            i
          );
        })(Object.keys(e.availablePaymentMethods), e.savedPaymentMethods),
      zs = e => e.paymentMethodsInitialized,
      Ks = e => e.expressPaymentMethodsInitialized,
      Xs = e => (
        os()('getCurrentStatus', {
          since: '8.9.0',
          alternative: 'isPaymentIdle, isPaymentProcessing, hasPaymentError',
          plugin: 'WooCommerce Blocks',
          link: 'https://github.com/woocommerce/woocommerce-blocks/pull/7666',
        }),
        {
          get isPristine() {
            return (
              os()('isPristine', {
                since: '9.6.0',
                alternative: 'isIdle',
                plugin: 'WooCommerce Blocks',
              }),
              Os(e)
            );
          },
          isIdle: Os(e),
          isStarted: Ms(e),
          isProcessing: ks(e),
          get isFinished() {
            return (
              os()('isFinished', {
                since: '9.6.0',
                plugin: 'WooCommerce Blocks',
                link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
              }),
              Ls(e) || Ns(e)
            );
          },
          hasError: Ls(e),
          get hasFailed() {
            return (
              os()('hasFailed', {
                since: '9.6.0',
                plugin: 'WooCommerce Blocks',
                link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
              }),
              Ls(e)
            );
          },
          get isSuccessful() {
            return (
              os()('isSuccessful', {
                since: '9.6.0',
                plugin: 'WooCommerce Blocks',
                link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
              }),
              Ns(e)
            );
          },
          isDoingExpressPayment: Ys(e),
        }
      ),
      Qs = e => e.shouldSavePaymentMethod,
      Ws = e => e.paymentResult,
      Zs = e => e,
      Js = {
        reducer: (e = Qa, t) => {
          let r = e;
          switch (t.type) {
            case Wa.SET_PAYMENT_IDLE:
              r = { ...e, status: qt.IDLE };
              break;
            case Wa.SET_EXPRESS_PAYMENT_STARTED:
              r = { ...e, status: qt.EXPRESS_STARTED };
              break;
            case Wa.SET_PAYMENT_PROCESSING:
              r = { ...e, status: qt.PROCESSING };
              break;
            case Wa.SET_PAYMENT_READY:
              r = { ...e, status: qt.READY };
              break;
            case Wa.SET_PAYMENT_ERROR:
              r = { ...e, status: qt.ERROR };
              break;
            case Wa.SET_SHOULD_SAVE_PAYMENT_METHOD:
              r = { ...e, shouldSavePaymentMethod: t.shouldSavePaymentMethod };
              break;
            case Wa.SET_PAYMENT_METHOD_DATA:
              r = { ...e, paymentMethodData: t.paymentMethodData };
              break;
            case Wa.SET_PAYMENT_RESULT:
              r = { ...e, paymentResult: t.data };
              break;
            case Wa.REMOVE_AVAILABLE_PAYMENT_METHOD:
              const a = { ...e.availablePaymentMethods };
              delete a[t.name], (r = { ...e, availablePaymentMethods: { ...a } });
              break;
            case Wa.REMOVE_AVAILABLE_EXPRESS_PAYMENT_METHOD:
              const s = { ...e.availableExpressPaymentMethods };
              delete s[t.name], (r = { ...e, availableExpressPaymentMethods: { ...s } });
              break;
            case Wa.SET_PAYMENT_METHODS_INITIALIZED:
              r = { ...e, paymentMethodsInitialized: t.initialized };
              break;
            case Wa.SET_EXPRESS_PAYMENT_METHODS_INITIALIZED:
              r = { ...e, expressPaymentMethodsInitialized: t.initialized };
              break;
            case Wa.SET_AVAILABLE_PAYMENT_METHODS:
              r = { ...e, availablePaymentMethods: t.paymentMethods };
              break;
            case Wa.SET_AVAILABLE_EXPRESS_PAYMENT_METHODS:
              r = { ...e, availableExpressPaymentMethods: t.paymentMethods };
              break;
            case Wa.SET_ACTIVE_PAYMENT_METHOD:
              const i =
                'object' == typeof e.paymentMethodData &&
                (0, xe.objectHasProp)(t.paymentMethodData, 'token')
                  ? t.paymentMethodData.token + ''
                  : '';
              r = {
                ...e,
                activeSavedToken: i,
                activePaymentMethod: t.activePaymentMethod,
                paymentMethodData: t.paymentMethodData || e.paymentMethodData,
              };
              break;
            default:
              return r;
          }
          return r;
        },
        selectors: p,
        actions: d,
        controls: { ...f.controls, ...Be },
        __experimentalUseThunks: !0,
      },
      ei = (0, v.createReduxStore)(Bt, Js);
    (0, v.register)(ei);
    const ti = Bt,
      ri = 'wc/store/query-state',
      ai = (e, t) => (void 0 === e[t] ? null : e[t]),
      si = (e, t, r, a = {}) => {
        let s = ai(e, t);
        return null === s ? a : ((s = JSON.parse(s)), void 0 !== s[r] ? s[r] : a);
      },
      ii = (e, t, r = {}) => {
        const a = ai(e, t);
        return null === a ? r : JSON.parse(a);
      },
      ni = 'SET_QUERY_KEY_VALUE',
      oi = 'SET_QUERY_CONTEXT_VALUE',
      ci = (e, t, r) => ({ type: ni, context: e, queryKey: t, value: r }),
      li = (e, t) => ({ type: oi, context: e, value: t }),
      di = (0, v.createReduxStore)(ri, {
        reducer: (e = {}, t) => {
          const { type: r, context: a, queryKey: s, value: i } = t,
            n = ai(e, a);
          let o;
          switch (r) {
            case ni:
              const t = null !== n ? JSON.parse(n) : {};
              (t[s] = i), (o = JSON.stringify(t)), n !== o && (e = { ...e, [a]: o });
              break;
            case oi:
              (o = JSON.stringify(i)), n !== o && (e = { ...e, [a]: o });
          }
          return e;
        },
        actions: _,
        selectors: u,
      });
    (0, v.register)(di);
    const pi = ri,
      ui = (0, v.createRegistrySelector)(e => (t, r, a, s = []) => {
        const i = e(Ba).hasFinishedResolution('getRoutes', [r]);
        let n = '';
        if (
          ((t = t.routes)[r]
            ? t[r][a] ||
              (n = (0, P.sprintf)(
                'There is no route for the given resource name (%s) in the store',
                a,
              ))
            : (n = (0, P.sprintf)(
                'There is no route for the given namespace (%s) in the store',
                r,
              )),
          '' !== n)
        ) {
          if (i) throw new Error(n);
          return '';
        }
        const o = ((e, t = []) => {
          const r = (e = Object.entries(e)).find(([, e]) => t.length === e.length),
            [a, s] = r || [];
          return a
            ? 0 === t.length
              ? a
              : ((e, t, r) => (
                  t.forEach((t, a) => {
                    e = e.replace(`{${t}}`, r[a]);
                  }),
                  e
                ))(a, s, t)
            : '';
        })(t[r][a], s);
        if ('' === o && i)
          throw new Error(
            (0, P.sprintf)(
              'While there is a route for the given namespace (%1$s) and resource name (%2$s), there is no route utilizing the number of ids you included in the select arguments. The available routes are: (%3$s)',
              r,
              a,
              JSON.stringify(t[r][a]),
            ),
          );
        return o;
      }),
      _i = (0, v.createRegistrySelector)(e => (t, r) => {
        const a = e(Ba).hasFinishedResolution('getRoutes', [r]),
          s = t.routes[r];
        if (!s) {
          if (a)
            throw new Error(
              (0, P.sprintf)('There is no route for the given namespace (%s) in the store', r),
            );
          return [];
        }
        let i = [];
        for (const e in s) i = [...i, ...Object.keys(s[e])];
        return i;
      }),
      mi = { RECEIVE_MODEL_ROUTES: 'RECEIVE_MODEL_ROUTES' };
    function hi(e, t = I) {
      return { type: mi.RECEIVE_MODEL_ROUTES, routes: e, namespace: t };
    }
    function* yi(e) {
      yield v.controls.resolveSelect(Ba, 'getRoutes', e);
    }
    function* Ei(e) {
      const t = yield (0, f.apiFetch)({ path: e }),
        r = t && t.routes ? Object.keys(t.routes) : [];
      yield hi(r, e);
    }
    const gi = (0, v.combineReducers)({
        routes: (e = {}, t) => {
          const { type: r, routes: a, namespace: s } = t;
          return (
            r === mi.RECEIVE_MODEL_ROUTES &&
              a.forEach(t => {
                const r = ((e, t) =>
                  (t = t.replace(`${e}/`, '')).replace(/\/\(\?P\<[a-z_]*\>\[\\*[a-z]\]\+\)/g, ''))(
                  s,
                  t,
                );
                if (r && r !== s) {
                  const a = (e => {
                      const t = e.match(/\<[a-z_]*\>/g);
                      return Array.isArray(t) && 0 !== t.length
                        ? t.map(e => e.replace(/<|>/g, ''))
                        : [];
                    })(t),
                    i = ((e, t) =>
                      Array.isArray(t) && 0 !== t.length
                        ? (t.forEach(t => {
                            const r = `\\(\\?P<${t}>.*?\\)`;
                            e = e.replace(new RegExp(r), `{${t}}`);
                          }),
                          e)
                        : e)(t, a);
                  Ma(e, [s, r, i]) || (e = za(e, [s, r, i], a));
                }
              }),
            e
          );
        },
      }),
      Si = (0, v.createReduxStore)(Ba, {
        reducer: gi,
        actions: h,
        controls: f.controls,
        selectors: m,
        resolvers: y,
      });
    (0, v.register)(Si);
    const Ti = Ba;
    let Ai = (function(e) {
      return (
        (e.REGISTER_CONTAINER = 'REGISTER_CONTAINER'),
        (e.UNREGISTER_CONTAINER = 'UNREGISTER_CONTAINER'),
        e
      );
    })({});
    const vi = e => ({ type: Ai.REGISTER_CONTAINER, containerContext: e }),
      fi = e => ({ type: Ai.UNREGISTER_CONTAINER, containerContext: e }),
      Pi = e => e.containers,
      bi = { containers: [] },
      Ri = 'wc/store/store-notices',
      wi = {
        reducer: (e = bi, t) => {
          switch (t.type) {
            case Ai.REGISTER_CONTAINER:
              return { ...e, containers: [...e.containers, t.containerContext] };
            case Ai.UNREGISTER_CONTAINER:
              const r = e.containers.filter(e => e !== t.containerContext);
              return { ...e, containers: r };
          }
          return e;
        },
        actions: E,
        selectors: g,
      },
      Ii = (0, v.createReduxStore)(Ri, wi);
    (0, v.register)(Ii);
    const Ci = Ri,
      Oi = 'SET_VALIDATION_ERRORS',
      Di = 'CLEAR_VALIDATION_ERROR',
      Mi = 'CLEAR_VALIDATION_ERRORS',
      ki = 'HIDE_VALIDATION_ERROR',
      Ni = 'SHOW_VALIDATION_ERROR',
      xi = 'SHOW_ALL_VALIDATION_ERRORS',
      Li = e => ({ type: Oi, errors: e }),
      ji = e => ({ type: Mi, errors: e }),
      Yi = () => (
        os()('clearAllValidationErrors', {
          version: '9.0.0',
          alternative: 'clearValidationErrors',
          plugin: 'WooCommerce Blocks',
          link: 'https://github.com/woocommerce/woocommerce-blocks/pull/7601',
          hint:
            'Calling `clearValidationErrors` with no arguments will clear all validation errors.',
        }),
        ji()
      ),
      Hi = e => ({ type: Di, error: e }),
      Ui = e => ({ type: ki, error: e }),
      Fi = e => ({ type: Ni, error: e }),
      Vi = () => ({ type: xi }),
      Bi = (e, t) => e[t],
      qi = (e, t) => {
        if (e.hasOwnProperty(t) && !e[t].hidden) return `validate-error-${t}`;
      },
      $i = e => Object.keys(e).length > 0,
      Gi = {
        reducer: (e = {}, t) => {
          const r = { ...e };
          switch (t.type) {
            case Oi:
              return t.errors &&
                Object.entries(t.errors).some(
                  ([t, r]) =>
                    !(
                      'string' != typeof (null == r ? void 0 : r.message) ||
                      (e.hasOwnProperty(t) && ft()(e[t], r))
                    ),
                )
                ? { ...e, ...t.errors }
                : e;
            case Di:
              return (0, xe.isString)(t.error) && r.hasOwnProperty(t.error)
                ? (delete r[t.error], r)
                : r;
            case Mi:
              const { errors: a } = t;
              return void 0 === a
                ? {}
                : Array.isArray(a)
                ? (a.forEach(e => {
                    r.hasOwnProperty(e) && delete r[e];
                  }),
                  r)
                : r;
            case ki:
              return (0, xe.isString)(t.error) && r.hasOwnProperty(t.error)
                ? ((r[t.error].hidden = !0), r)
                : r;
            case Ni:
              return (0, xe.isString)(t.error) && r.hasOwnProperty(t.error)
                ? ((r[t.error].hidden = !1), r)
                : r;
            case xi:
              return (
                Object.keys(r).forEach(e => {
                  r[e].hidden && (r[e].hidden = !1);
                }),
                { ...r }
              );
            default:
              return e;
          }
        },
        selectors: T,
        actions: S,
      },
      zi = (0, v.createReduxStore)(jt, Gi);
    (0, v.register)(zi);
    const Ki = jt;
  })(),
    ((this.wc = this.wc || {}).wcBlocksData = a);
})();
