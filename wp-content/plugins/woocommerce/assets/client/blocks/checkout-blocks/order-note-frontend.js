'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [552],
  {
    6094: (e, o, r) => {
      r.r(o), r.d(o, { default: () => m });
      var t = r(1609),
        s = r(9019),
        c = r.n(s),
        a = r(7723),
        n = r(4656),
        l = r(4958),
        d = r(7143),
        u = r(7594),
        i = r(6087);
      const h = ({ disabled: e, onChange: o, placeholder: r, value: s }) => {
          const [c, l] = (0, i.useState)(!1),
            [d, u] = (0, i.useState)('');
          return (0, t.createElement)(
            'div',
            { className: 'wc-block-checkout__add-note' },
            (0, t.createElement)(n.CheckboxControl, {
              disabled: e,
              label: (0, a.__)('Add a note to your order', 'woocommerce'),
              checked: c,
              onChange: e => {
                l(e), e ? s !== d && o(d) : (o(''), u(s));
              },
            }),
            c &&
              (0, t.createElement)(n.Textarea, {
                disabled: e,
                onTextChange: o,
                placeholder: r,
                value: s,
              }),
          );
        },
        m = ({ className: e }) => {
          const { needsShipping: o } = (0, l.m)(),
            { isProcessing: r, orderNotes: s } = (0, d.useSelect)(e => {
              const o = e(u.CHECKOUT_STORE_KEY);
              return { isProcessing: o.isProcessing(), orderNotes: o.getOrderNotes() };
            }),
            { __internalSetOrderNotes: i } = (0, d.useDispatch)(u.CHECKOUT_STORE_KEY);
          return (0, t.createElement)(
            n.FormStep,
            {
              id: 'order-notes',
              showStepNumber: !1,
              className: c()('wc-block-checkout__order-notes', e),
              disabled: r,
            },
            (0, t.createElement)(h, {
              disabled: r,
              onChange: i,
              placeholder: o
                ? (0, a.__)(
                    'Notes about your order, e.g. special notes for delivery.',
                    'woocommerce',
                  )
                : (0, a.__)('Notes about your order.', 'woocommerce'),
              value: s,
            }),
          );
        };
    },
  },
]);
