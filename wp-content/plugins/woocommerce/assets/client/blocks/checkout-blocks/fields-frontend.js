'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [8330],
  {
    4183: (e, c, o) => {
      o.r(c), o.d(c, { default: () => k });
      var s = o(1609),
        t = o(9019),
        n = o.n(t),
        r = o(6087);
      const a = (0, r.forwardRef)(({ children: e, className: c = '' }, o) =>
        (0, s.createElement)('div', { ref: o, className: n()('wc-block-components-main', c) }, e),
      );
      var l = o(3603),
        m = o(9292);
      const k = ({ children: e, className: c }) => {
        const { dispatchCheckoutEvent: o } = (0, l.y)(),
          { showFormStepNumbers: t } = (0, m.Oy)();
        return (
          (0, r.useEffect)(() => {
            o('render-checkout-form');
          }, []),
          (0, s.createElement)(
            a,
            { className: n()('wc-block-checkout__main', c) },
            (0, s.createElement)(
              'form',
              {
                className: n()('wc-block-components-form wc-block-checkout__form', {
                  'wc-block-checkout__form--with-step-numbers': t,
                }),
              },
              e,
            ),
          )
        );
      };
    },
  },
]);
