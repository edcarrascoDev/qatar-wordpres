(() => {
  'use strict';
  var e = {
      n: o => {
        var t = o && o.__esModule ? () => o.default : () => o;
        return e.d(t, { a: t }), t;
      },
      d: (o, t) => {
        for (var n in t)
          e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, { enumerable: !0, get: t[n] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    o = {};
  e.r(o);
  const t = window.wp.data,
    n = window.wp.i18n,
    i = window.wp.domReady;
  var c = e.n(i);
  const s = window.wc.wcSettings,
    r = window.wc.tracks,
    a = () =>
      document.querySelector('.editor-post-publish-button').classList.contains('is-busy')
        ? Promise.resolve(!0)
        : new Promise(e => {
            window.requestAnimationFrame(e);
          }).then(() => a()),
    d = () =>
      document.querySelector('.editor-post-publish-button').classList.contains('is-busy')
        ? new Promise(e => {
            window.requestAnimationFrame(e);
          }).then(() => d())
        : Promise.resolve(!0);
  c()(() => {
    const e = document.querySelector('.editor-post-publish-button');
    e &&
      e.addEventListener(
        'click',
        a().then(() =>
          (() => {
            const e = document.querySelector('.editor-post-publish-button');
            e.classList.contains('is-clicked') ||
              (e.classList.add('is-clicked'),
              d().then(() => {
                const e =
                  null !== document.querySelector('.components-snackbar__content')
                    ? 'snackbar'
                    : 'default';
                (0, t.dispatch)('core/notices').removeNotice('SAVE_POST_NOTICE_ID'),
                  (0, t.dispatch)('core/notices').createSuccessNotice(
                    (0, n.__)("🏠 Nice work creating your store's homepage!", 'woocommerce'),
                    {
                      id: 'WOOCOMMERCE_ONBOARDING_HOME_PAGE_NOTICE',
                      type: e,
                      actions: [
                        {
                          label: (0, n.__)('Continue setup.', 'woocommerce'),
                          onClick: () => {
                            (0, r.queueRecordEvent)('tasklist_appearance_continue_setup', {}),
                              (window.location.href = (0, s.getAdminLink)(
                                'admin.php?page=wc-admin&task=appearance',
                              ));
                          },
                        },
                      ],
                    },
                  );
              }));
          })(),
        ),
      );
  }),
    ((window.wc = window.wc || {}).onboardingHomepageNotice = o);
})();
