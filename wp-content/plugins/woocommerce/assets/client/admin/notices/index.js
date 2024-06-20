(() => {
  'use strict';
  var e = {
      d: (t, n) => {
        for (var i in n)
          e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    t = {};
  e.r(t);
  var n = {};
  e.r(n),
    e.d(n, {
      createErrorNotice: () => p,
      createInfoNotice: () => f,
      createNotice: () => d,
      createSuccessNotice: () => l,
      createWarningNotice: () => w,
      removeNotice: () => y,
    });
  var i = {};
  e.r(i), e.d(i, { getNotices: () => E }), window.wp.notices;
  const o = window.wp.data,
    r = window.lodash,
    c = ((a = 'context'),
    e => (t = {}, n) => {
      const i = n[a];
      if (void 0 === i) return t;
      const o = e(t[i], n);
      return o === t[i] ? t : { ...t, [i]: o };
    })((e = [], t) => {
      switch (t.type) {
        case 'CREATE_NOTICE':
          return [...(0, r.reject)(e, { id: t.notice.id }), t.notice];
        case 'REMOVE_NOTICE':
          return (0, r.reject)(e, { id: t.id });
      }
      return e;
    }),
    s = 'global',
    u = 'info';
  var a;
  function d(e = u, t, n = {}) {
    const {
      speak: i = !0,
      isDismissible: o = !0,
      context: c = s,
      id: a = (0, r.uniqueId)(c),
      actions: d = [],
      type: l = 'default',
      __unstableHTML: f,
      icon: p = null,
      explicitDismiss: w = !1,
      onDismiss: y = null,
    } = n;
    return {
      type: 'CREATE_NOTICE',
      context: c,
      notice: {
        id: a,
        status: e,
        content: (t = String(t)),
        spokenMessage: i ? t : null,
        __unstableHTML: f,
        isDismissible: o,
        actions: d,
        type: l,
        icon: p,
        explicitDismiss: w,
        onDismiss: y,
      },
    };
  }
  function l(e, t) {
    return d('success', e, t);
  }
  function f(e, t) {
    return d('info', e, t);
  }
  function p(e, t) {
    return d('error', e, t);
  }
  function w(e, t) {
    return d('warning', e, t);
  }
  function y(e, t = s) {
    return { type: 'REMOVE_NOTICE', id: e, context: t };
  }
  const b = [];
  function E(e, t = s) {
    return e[t] || b;
  }
  (0, o.registerStore)('core/notices2', { reducer: c, actions: n, selectors: i }),
    ((window.wc = window.wc || {}).notices = t);
})();
