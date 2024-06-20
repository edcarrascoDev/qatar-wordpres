(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wc.customerEffortScore;
  function o(e) {
    const t = e.querySelectorAll('input, select, textarea'),
      o = {};
    for (const e of t) {
      const t = e.name || e.id;
      if (
        'button' !== e.type &&
        'image' !== e.type &&
        'submit' !== e.type &&
        'hidden' !== e.type &&
        t
      )
        switch (e.type) {
          case 'checkbox':
            o[t] = +e.checked;
            break;
          case 'radio':
            void 0 === o[t] && (o[t] = ''), e.checked && (o[t] = e.value);
            break;
          case 'select-multiple':
            const c = [];
            for (const t of e.options) t.selected && c.push(t.value);
            o[t] = c;
            break;
          default:
            o[t] = e.value;
        }
    }
    return o;
  }
  const c = document.forms;
  if (c && c.mainform) {
    let e = !1;
    const n = document.querySelector('.woocommerce-save-button');
    n &&
      n.addEventListener('click', () => {
        e = !0;
      });
    const r = o(c.mainform);
    (0, t.addCustomerEffortScoreExitPageListener)('settings_change', () => {
      if (e) return !1;
      const t = c.mainform ? o(c.mainform) : {};
      let n = !1;
      for (const e of Object.keys(r))
        if (
          ('object' == typeof r[e] ? JSON.stringify(r[e]) : r[e]) !==
          ('object' == typeof t[e] ? JSON.stringify(t[e]) : t[e])
        ) {
          n = !0;
          break;
        }
      return n;
    });
  }
  (window.wc = window.wc || {}).settingsTracking = e;
})();
