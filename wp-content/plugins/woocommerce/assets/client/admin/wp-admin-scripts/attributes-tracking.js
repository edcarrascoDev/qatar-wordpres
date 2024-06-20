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
    r = document.querySelector('[name="add_new_attribute"]'),
    c = document.querySelector('[name="save_attribute"]'),
    o = document.querySelectorAll('.row-actions span a'),
    u = document.querySelectorAll('.configure-terms');
  r?.addEventListener('click', function() {
    const e = document.querySelector('#attribute_public'),
      r = document.querySelector('#attribute_orderby'),
      c = document.querySelector('#attribute_label'),
      o = document.querySelector('#attribute_name');
    (0,
    t.recordEvent)('product_attributes_add', { enable_archive: e?.checked ? 'yes' : 'no', default_sort_order: r?.value, name: c?.value, slug: o?.value, page: 'attributes' });
  }),
    c?.addEventListener('click', function() {
      const e = document.querySelector('#attribute_public'),
        r = document.querySelector('#attribute_orderby');
      (0,
      t.recordEvent)('product_attributes_update', { enable_archive: e?.checked ? 'yes' : 'no', default_sort_order: r?.value, page: 'attributes' });
    }),
    o.forEach(e => {
      e.addEventListener('click', function(e) {
        const r = e.target.parentElement.classList[0],
          c = { edit: 'edit', delete: 'delete' };
        c[r] && (0, t.recordEvent)('product_attributes_' + c[r], { page: 'attributes' });
      });
    }),
    u.forEach(e => {
      e.addEventListener('click', function() {
        (0, t.recordEvent)('product_attributes_configure_terms', { page: 'attributes' });
      });
    }),
    ((window.wc = window.wc || {}).attributesTracking = e);
})();
