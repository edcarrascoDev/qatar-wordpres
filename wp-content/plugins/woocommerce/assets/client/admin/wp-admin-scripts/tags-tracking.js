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
  function i(e) {
    const c = e.target.parentElement.classList[0],
      i = { edit: 'edit', inline: 'quick_edit', delete: 'delete', view: 'preview' };
    i[c] && (0, t.recordEvent)('product_tags_list_action_click', { selected_action: i[c] });
  }
  function n() {
    document.querySelectorAll('.row-actions span').forEach(e => {
      e.removeEventListener('click', i), e.addEventListener('click', i);
    });
  }
  n(),
    c?.addEventListener('click', function() {
      (0, t.recordEvent)('product_tags_add', { page: 'attributes' }),
        setTimeout(() => {
          n();
        }, 1e3);
    }),
    ((window.wc = window.wc || {}).tagsTracking = e);
})();
