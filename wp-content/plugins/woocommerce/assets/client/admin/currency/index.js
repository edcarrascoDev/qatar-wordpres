(() => {
  'use strict';
  var e = {
      n: o => {
        var r = o && o.__esModule ? () => o.default : () => o;
        return e.d(r, { a: r }), r;
      },
      d: (o, r) => {
        for (var t in r)
          e.o(r, t) && !e.o(o, t) && Object.defineProperty(o, t, { enumerable: !0, get: r[t] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    o = {};
  e.r(o),
    e.d(o, {
      CurrencyContext: () => y,
      CurrencyFactory: () => c,
      default: () => b,
      getCurrencyData: () => l,
      getFilteredCurrencyInstance: () => d,
    });
  const r = window.wp.element,
    t = window.wp.htmlEntities,
    n = window.wp.i18n,
    a = window.wc.number,
    i = window.wp.deprecated;
  var s = e.n(i);
  const c = function(e) {
    let o;
    function i(e) {
      if (e.priceFormat)
        return (function(e) {
          const o = document.createElement('DIV');
          return (o.innerHTML = e), o.textContent || o.innerText || '';
        })(e.priceFormat.toString());
      switch (e.symbolPosition) {
        case 'left':
          return '%1$s%2$s';
        case 'right':
          return '%2$s%1$s';
        case 'left_space':
          return '%1$s %2$s';
        case 'right_space':
          return '%2$s %1$s';
      }
      return '%1$s%2$s';
    }
    function c(e) {
      const r = {
        code: 'USD',
        symbol: '$',
        symbolPosition: 'left',
        thousandSeparator: ',',
        decimalSeparator: '.',
        precision: 2,
        ...e,
      };
      let t = r.precision;
      null === t
        ? (console.warn('Currency precision is null'), (t = NaN))
        : 'string' == typeof t && (t = parseInt(t, 10)),
        (o = {
          code: r.code.toString(),
          symbol: r.symbol.toString(),
          symbolPosition: r.symbolPosition.toString(),
          decimalSeparator: r.decimalSeparator.toString(),
          priceFormat: i(r),
          thousandSeparator: r.thousandSeparator.toString(),
          precision: t,
        });
    }
    function l(e, r = !1) {
      const t = (0, a.numberFormat)(o, e);
      if ('' === t) return t;
      const { priceFormat: i, symbol: s, code: c } = o;
      return (0, n.sprintf)(i, r ? c : s, t);
    }
    return (
      c(e),
      {
        getCurrencyConfig: () => ({ ...o }),
        getDataForCountry: function(e, o = {}, r = {}) {
          const n = o[e];
          if (!n) return {};
          const a = r[n.currency_code];
          return a
            ? {
                code: n.currency_code,
                symbol: (0, t.decodeEntities)(a),
                symbolPosition: n.currency_pos,
                thousandSeparator: n.thousand_sep,
                decimalSeparator: n.decimal_sep,
                precision: n.num_decimals,
              }
            : {};
        },
        setCurrency: c,
        formatAmount: l,
        formatCurrency: function(e) {
          return (
            s()('Currency().formatCurrency', {
              version: '5.0.0',
              alternative: 'Currency().formatAmount',
              plugin: 'WooCommerce',
              hint: '`formatAmount` accepts the same arguments as formatCurrency',
            }),
            l(e)
          );
        },
        getPriceFormat: i,
        formatDecimal(e) {
          if (('number' != typeof e && (e = parseFloat(e)), Number.isNaN(e))) return 0;
          const { precision: r } = o;
          return Math.round(e * Math.pow(10, r)) / Math.pow(10, r);
        },
        formatDecimalString(e) {
          if (('number' != typeof e && (e = parseFloat(e)), Number.isNaN(e))) return '';
          const { precision: r } = o;
          return e.toFixed(r);
        },
        render: e => (
          'number' != typeof e && (e = parseFloat(e)),
          e < 0 ? (0, r.createElement)('span', { className: 'is-negative' }, l(e)) : l(e)
        ),
      }
    );
  };
  function l() {
    return (
      s()('getCurrencyData', {
        version: '3.1.0',
        alternative: 'CurrencyFactory.getDataForCountry',
        plugin: 'WooCommerce Admin',
        hint: 'Pass in the country, locale data, and symbol info to use getDataForCountry',
      }),
      {
        US: {
          code: 'USD',
          symbol: '$',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 2,
        },
        EU: {
          code: 'EUR',
          symbol: '€',
          symbolPosition: 'left',
          thousandSeparator: '.',
          decimalSeparator: ',',
          precision: 2,
        },
        IN: {
          code: 'INR',
          symbol: '₹',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 2,
        },
        GB: {
          code: 'GBP',
          symbol: '£',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 2,
        },
        BR: {
          code: 'BRL',
          symbol: 'R$',
          symbolPosition: 'left',
          thousandSeparator: '.',
          decimalSeparator: ',',
          precision: 2,
        },
        VN: {
          code: 'VND',
          symbol: '₫',
          symbolPosition: 'right',
          thousandSeparator: '.',
          decimalSeparator: ',',
          precision: 1,
        },
        ID: {
          code: 'IDR',
          symbol: 'Rp',
          symbolPosition: 'left',
          thousandSeparator: '.',
          decimalSeparator: ',',
          precision: 0,
        },
        BD: {
          code: 'BDT',
          symbol: '৳',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 0,
        },
        PK: {
          code: 'PKR',
          symbol: '₨',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 2,
        },
        RU: {
          code: 'RUB',
          symbol: '₽',
          symbolPosition: 'right',
          thousandSeparator: ' ',
          decimalSeparator: ',',
          precision: 2,
        },
        TR: {
          code: 'TRY',
          symbol: '₺',
          symbolPosition: 'left',
          thousandSeparator: '.',
          decimalSeparator: ',',
          precision: 2,
        },
        MX: {
          code: 'MXN',
          symbol: '$',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 2,
        },
        CA: {
          code: 'CAD',
          symbol: '$',
          symbolPosition: 'left',
          thousandSeparator: ',',
          decimalSeparator: '.',
          precision: 2,
        },
      }
    );
  }
  const m = window.wp.hooks,
    u = (0, window.wc.wcSettings.getSetting)('currency'),
    p = c(u),
    d = e => {
      const o = p.getCurrencyConfig(),
        r = (0, m.applyFilters)('woocommerce_admin_report_currency', o, e);
      return c(r);
    },
    y = (0, r.createContext)(p),
    b = c;
  (window.wc = window.wc || {}).currency = o;
})();
