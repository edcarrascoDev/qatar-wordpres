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
    c = document.querySelector('#addtag #submit');
  function n(e) {
    const c = e.target.parentElement.classList[0],
      n = { edit: 'edit', inline: 'quick_edit', delete: 'delete', view: 'preview' };
    n[c] &&
      (0, t.recordEvent)('product_attributes_term_list_action_click', { selected_action: n[c] });
  }
  function o() {
    document.querySelectorAll('.row-actions span').forEach(e => {
      e.removeEventListener('click', n), e.addEventListener('click', n);
    });
  }
  o(),
    c?.addEventListener('click', function() {
      const e = document.querySelector('#tag-name'),
        c = document.querySelector('#tag-slug');
      (0, t.recordEvent)('product_attributes_add_term', {
        page: 'tags',
        name: e?.value,
        slug: c?.value,
      }),
        setTimeout(() => {
          o();
        }, 1e3);
    }),
    ((window.wc = window.wc || {}).addTermTracking = e);
})();
