(() => {
  'use strict';
  var i = {};
  (i => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(i, '__esModule', { value: !0 });
  })(i);
  const n = window.wc.tracks;
  window.jQuery(document).ready(function() {
    const i = '#woo-subscription-expired-notice',
      o = '#woo-subscription-expiring-notice';
    window.jQuery(i).length &&
      (0, n.recordEvent)('woo_subscription_expired_notice_in_settings_shown'),
      window.jQuery(o).length &&
        (0, n.recordEvent)('woo_subscription_expiring_notice_in_settings_shown');
    const e = function(i, n) {
      const o = { notice_id: i, dismiss_notice_nonce: n };
      window.wp.apiFetch({ path: '/wc-admin/notice/dismiss', method: 'POST', data: o });
    };
    window.jQuery(i).on('click', 'button.notice-dismiss', function() {
      (0, n.recordEvent)('woo_subscription_expired_notice_in_settings_dismissed');
      const o = window.jQuery(i).data('dismissnonce');
      e('woo-subscription-expired-notice', o);
    }),
      window.jQuery(i).on('click', 'a', function() {
        return (0, n.recordEvent)('woo_subscription_expired_notice_in_settings_clicked'), !0;
      }),
      window.jQuery(o).on('click', 'button.notice-dismiss', function() {
        (0, n.recordEvent)('woo_subscription_expiring_notice_in_settings_dismissed');
        const o = window.jQuery(i).data('dismissnonce');
        e('woo-subscription-expiring-notice', o);
      }),
      window.jQuery(o).on('click', 'a', function() {
        return (0, n.recordEvent)('woo_subscription_expiring_notice_in_settings_clicked'), !0;
      });
  }),
    ((window.wc = window.wc || {}).wooSubscriptionsNotice = i);
})();
