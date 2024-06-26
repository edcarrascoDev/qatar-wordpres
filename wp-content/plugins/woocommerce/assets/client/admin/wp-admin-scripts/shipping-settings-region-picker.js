(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const n = window.wp.element,
    t = window.wc.components,
    o = ({ options: e, initialValues: o }) => {
      const [r, i] = (0, n.useState)(o);
      return (0, n.createElement)(t.TreeSelectControl, {
        value: r,
        onChange: e => {
          document.body.dispatchEvent(new CustomEvent('wc_region_picker_update', { detail: e })),
            i(e);
        },
        options: e,
        placeholder: 'Start typing to filter zones',
        selectAllLabel: 'Select all countries',
        individuallySelectParent: !0,
        maxVisibleTags: 5,
      });
    },
    r = window.wc.currency,
    i = window.wc.number,
    c = e => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    l = (e, n) => {
      if ('number' == typeof n) return (0, i.numberFormat)(e, n);
      if ('string' == typeof n) {
        const t = c(e.decimalSeparator),
          o = c(e.thousandSeparator),
          r = new RegExp(`^\\s*(\\d+|\\d{1,3}(?:${o}\\d{3})*)(?:${t}\\d+)?\\s*$`);
        return n.replace(r, n => {
          const t = (0, i.parseNumber)(e, n);
          return (0, i.numberFormat)(e, t);
        });
      }
      return n;
    },
    a = () => {
      const e = (0, n.useContext)(r.CurrencyContext);
      return (
        (0, n.useEffect)(() => {
          (window.wc.ShippingCurrencyContext = window.wc.ShippingCurrencyContext || e),
            (window.wc.ShippingCurrencyNumberFormat = window.wc.ShippingCurrencyNumberFormat || l);
        }, [e]),
        null
      );
    };
  var u, d;
  const p = document.getElementById('wc-shipping-zone-region-picker-root'),
    s =
      null !== (u = window.shippingZoneMethodsLocalizeScript?.region_options) && void 0 !== u
        ? u
        : [],
    w = null !== (d = window.shippingZoneMethodsLocalizeScript?.locations) && void 0 !== d ? d : [],
    m = () =>
      (0, n.createElement)(
        'div',
        null,
        (0, n.createElement)(a, null),
        (0, n.createElement)(o, { options: s, initialValues: w }),
      );
  p &&
    (n.createRoot
      ? (0, n.createRoot)(p).render((0, n.createElement)(m, null))
      : (0, n.render)((0, n.createElement)(m, null), p)),
    ((window.wc = window.wc || {}).shippingSettingsRegionPicker = e);
})();
