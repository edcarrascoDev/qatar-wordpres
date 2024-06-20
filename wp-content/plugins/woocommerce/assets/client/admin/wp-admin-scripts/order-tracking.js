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
            const r = [];
            for (const t of e.options) t.selected && r.push(t.value);
            o[t] = r;
            break;
          default:
            o[t] = e.value;
        }
    }
    return o;
  }
  const r = document.forms;
  if (r?.post || r?.order) {
    let e = !1;
    const c = document.querySelector('.save_order'),
      n = document.querySelector('.submitdelete');
    c &&
      c.addEventListener('click', () => {
        e = !0;
      }),
      n &&
        n.addEventListener('click', () => {
          e = !0;
        });
    const s = o(r?.post || r?.order);
    (0, t.addCustomerEffortScoreExitPageListener)('shop_order_update', () => {
      if (e) return !1;
      const t = r?.post || r?.order ? o(r?.post || r?.order) : {};
      for (const e of Object.keys(s))
        if (
          ('object' == typeof s[e] ? JSON.stringify(s[e]) : s[e]) !==
          ('object' == typeof t[e] ? JSON.stringify(t[e]) : t[e])
        )
          return !0;
      return !1;
    });
  }
  (window.wc = window.wc || {}).orderTracking = e;
})();