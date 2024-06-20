(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wp.element,
    o = window.wp.i18n,
    n = window.wp.components;
  class a extends t.Component {
    constructor(e) {
      super(e), (this.state = { isModalOpen: !0 });
    }
    render() {
      const { isModalOpen: e } = this.state;
      return e && window.surveyData && window.surveyData.url
        ? (0, t.createElement)(
            n.Modal,
            {
              title: (0, o.__)('Help us improve', 'woocommerce'),
              onRequestClose: () => this.setState({ isModalOpen: !1 }),
              className: 'woocommerce-navigation-opt-out-modal',
            },
            (0, t.createElement)(
              'p',
              null,
              (0, o.__)(
                "Take this 2-minute survey to share why you're opting out of the new navigation",
                'woocommerce',
              ),
            ),
            (0, t.createElement)(
              'div',
              { className: 'woocommerce-navigation-opt-out-modal__actions' },
              (0, t.createElement)(
                n.Button,
                { isDefault: !0, onClick: () => this.setState({ isModalOpen: !1 }) },
                (0, o.__)('No thanks', 'woocommerce'),
              ),
              (0, t.createElement)(
                n.Button,
                {
                  isPrimary: !0,
                  target: '_blank',
                  href: window.surveyData.url,
                  onClick: () => this.setState({ isModalOpen: !1 }),
                },
                (0, o.__)('Share feedback', 'woocommerce'),
              ),
            ),
          )
        : null;
    }
  }
  const i = document.createElement('div');
  i.setAttribute('id', 'navigation-opt-out-root'),
    (0, t.render)((0, t.createElement)(a, null), document.body.appendChild(i)),
    ((window.wc = window.wc || {}).navigationOptOut = e);
})();
