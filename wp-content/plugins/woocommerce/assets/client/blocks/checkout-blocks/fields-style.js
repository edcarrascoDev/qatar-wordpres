'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [8330],
  {
    31146: (c, e, o) => {
      o.r(e), o.d(e, { default: () => m });
      var s = o(51609),
        t = o(36561),
        n = o.n(t),
        r = o(29363),
        k = o(73603),
        l = o(86087),
        a = o(99292);
      const m = ({ children: c, className: e }) => {
        const { dispatchCheckoutEvent: o } = (0, k.y)(),
          { showFormStepNumbers: t } = (0, a.Oy)();
        return (
          (0, l.useEffect)(() => {
            o('render-checkout-form');
          }, []),
          (0, s.createElement)(
            r.A,
            { className: n()('wc-block-checkout__main', e) },
            (0, s.createElement)(
              'form',
              {
                className: n()('wc-block-components-form wc-block-checkout__form', {
                  'wc-block-checkout__form--with-step-numbers': t,
                }),
              },
              c,
            ),
          )
        );
      };
    },
  },
]);
