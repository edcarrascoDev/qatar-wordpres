(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wc.tracks,
    n = document.querySelector('#addtag #submit');
  function o(e) {
    const n = e.target.parentElement.classList[0],
      o = {
        edit: 'edit',
        inline: 'quick_edit',
        delete: 'delete',
        view: 'preview',
        make_default: 'make_default',
      };
    o[n] && (0, t.recordEvent)('product_category_manage', { option_selected: o[n] });
  }
  function c() {
    document.querySelectorAll('.row-actions span').forEach(e => {
      e.removeEventListener('click', o), e.addEventListener('click', o);
    });
  }
  c(),
    n?.addEventListener('click', function() {
      setTimeout(() => {
        c();
      }, 1e3);
    }),
    ((window.wc = window.wc || {}).categoryTracking = e);
})();
