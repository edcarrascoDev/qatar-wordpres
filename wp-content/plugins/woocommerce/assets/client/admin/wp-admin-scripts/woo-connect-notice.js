(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const o = window.wc.tracks;
  window.jQuery(document).ready(function() {
    const e = '.woo-connect-notice',
      n = 'woo-connect-notice-settings-dismissed';
    window.jQuery(e).on('click', 'button.notice-dismiss', function() {
      window.localStorage.setItem(n, new Date().toString()),
        (0, o.recordEvent)('woo_connect_notice_in_settings_dismissed');
    }),
      window.jQuery('#woo-connect-notice-url').on('click', function() {
        return (0, o.recordEvent)('woo_connect_notice_in_settings_clicked'), !0;
      });
    let t = !1;
    const c = window.localStorage.getItem(n),
      i = new Date(c || ''),
      w = new Date();
    w.setMonth(w.getMonth() - 1),
      c && w.valueOf() < i.valueOf() && (t = !0),
      t ? window.jQuery(e).remove() : (0, o.recordEvent)('woo_connect_notice_in_settings_shown');
  }),
    ((window.wc = window.wc || {}).wooConnectNotice = e);
})();