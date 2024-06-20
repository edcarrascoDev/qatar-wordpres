(() => {
  'use strict';
  var t = {
      d: (e, r) => {
        for (var o in r)
          t.o(r, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: t => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      },
    },
    e = {};
  function r(t) {
    if ('object' != typeof t || null === t || !t.hasOwnProperty('responses'))
      throw new Error('Response not valid');
  }
  function o(t) {
    if ('object' != typeof t || null === t || !('body' in t) || !('headers' in t))
      throw new Error('Response not valid');
  }
  t.r(e),
    t.d(e, {
      assertBatchResponseIsValid: () => r,
      assertResponseIsValid: () => o,
      isApiErrorResponse: () => h,
      isAttributeQuery: () => g,
      isAttributeQueryCollection: () => m,
      isAttributeTerm: () => d,
      isAttributeTermCollection: () => _,
      isBoolean: () => s,
      isCartResponseTotals: () => y,
      isEmpty: () => f,
      isEmptyObject: () => a,
      isError: () => u,
      isFunction: () => l,
      isNull: () => n,
      isNumber: () => p,
      isObject: () => i,
      isRatingQueryCollection: () => j,
      isStockStatusOptions: () => O,
      isStockStatusQueryCollection: () => A,
      isString: () => b,
      objectHasProp: () => c,
    });
  const s = t => 'boolean' == typeof t,
    n = t => null === t,
    i = t => !n(t) && t instanceof Object && t.constructor === Object;
  function c(t, e) {
    return i(t) && e in t;
  }
  const a = t => 0 === Object.keys(t).length,
    y = t =>
      !!i(t) &&
      Object.keys({
        total_items: 0,
        total_items_tax: 0,
        total_fees: 0,
        total_fees_tax: 0,
        total_discount: 0,
        total_discount_tax: 0,
        total_shipping: 0,
        total_shipping_tax: 0,
        total_price: 0,
        total_tax: 0,
        tax_lines: 0,
        currency_code: 0,
        currency_symbol: 0,
        currency_minor_unit: 0,
        currency_decimal_separator: 0,
        currency_thousand_separator: 0,
        currency_prefix: 0,
        currency_suffix: 0,
      }).every(e => e in t),
    u = t => t instanceof Error,
    l = t => 'function' == typeof t,
    p = t => 'number' == typeof t,
    f = t =>
      null == t ||
      ('object' == typeof t && 0 === Object.keys(t).length) ||
      ('string' == typeof t && 0 === t.trim().length),
    b = t => 'string' == typeof t,
    d = t =>
      c(t, 'count') &&
      c(t, 'description') &&
      c(t, 'id') &&
      c(t, 'name') &&
      c(t, 'parent') &&
      c(t, 'slug') &&
      'number' == typeof t.count &&
      'string' == typeof t.description &&
      'number' == typeof t.id &&
      'string' == typeof t.name &&
      'number' == typeof t.parent &&
      'string' == typeof t.slug,
    _ = t => Array.isArray(t) && t.every(d),
    g = t =>
      c(t, 'attribute') &&
      c(t, 'operator') &&
      c(t, 'slug') &&
      'string' == typeof t.attribute &&
      'string' == typeof t.operator &&
      Array.isArray(t.slug) &&
      t.slug.every(t => 'string' == typeof t),
    m = t => Array.isArray(t) && t.every(g),
    j = t => Array.isArray(t) && t.every(t => ['1', '2', '3', '4', '5'].includes(t)),
    A = t => Array.isArray(t) && t.every(t => ['instock', 'outofstock', 'onbackorder'].includes(t)),
    O = t =>
      i(t) && Object.keys(t).every(t => ['instock', 'outofstock', 'onbackorder'].includes(t)),
    h = t => i(t) && c(t, 'code') && c(t, 'message');
  (this.wc = this.wc || {}).wcTypes = e;
})();
