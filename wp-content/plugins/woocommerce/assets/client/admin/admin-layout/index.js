(() => {
  'use strict';
  var e = {
      d: (t, o) => {
        for (var r in o)
          e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    t = {};
  e.r(t),
    e.d(t, {
      LayoutContext: () => _,
      LayoutContextProvider: () => w,
      WC_FOOTER_SLOT_NAME: () => l,
      WC_HEADER_NAVIGATION_SLOT_NAME: () => m,
      WC_HEADER_PAGE_TITLE_SLOT_NAME: () => u,
      WC_HEADER_SLOT_NAME: () => i,
      WooFooterItem: () => a,
      WooHeaderItem: () => c,
      WooHeaderNavigationItem: () => s,
      WooHeaderPageTitle: () => E,
      getLayoutContextValue: () => y,
      useAdminSidebarWidth: () => O,
      useExtendLayout: () => f,
      useLayoutContext: () => p,
    });
  const o = window.wp.components,
    r = window.wp.element,
    n = window.wc.components,
    l = 'woocommerce_footer_item',
    a = ({ children: e, order: t = 1 }) =>
      (0, r.createElement)(o.Fill, { name: l }, o => (0, n.createOrderedChildren)(e, t, o));
  a.Slot = ({ fillProps: e }) =>
    (0, r.createElement)(o.Slot, { name: l, fillProps: e }, n.sortFillsByOrder);
  const i = 'woocommerce_header_item',
    d = e => (e && e.length ? `${i}/${e}` : i),
    c = ({ children: e, order: t = 1, name: l = '' }) =>
      (0, r.createElement)(o.Fill, { name: d(l) }, o => (0, n.createOrderedChildren)(e, t, o));
  c.Slot = ({ fillProps: e, name: t = '' }) =>
    (0, r.createElement)(o.Slot, { name: d(t), fillProps: e }, n.sortFillsByOrder);
  const m = 'woocommerce_header_navigation_item',
    s = ({ children: e, order: t = 1 }) =>
      (0, r.createElement)(o.Fill, { name: m }, o => (0, n.createOrderedChildren)(e, t, o));
  s.Slot = ({ fillProps: e }) =>
    (0, r.createElement)(o.Slot, { name: m, fillProps: e }, n.sortFillsByOrder);
  const u = 'woocommerce_header_page_title',
    E = ({ children: e }) => (0, r.createElement)(o.Fill, { name: u }, e);
  E.Slot = ({ fillProps: e }) =>
    (0, r.createElement)(o.Slot, { name: u, fillProps: e }, e =>
      (0, r.createElement)(r.Fragment, null, [...e].pop()),
    );
  const _ = (0, r.createContext)(void 0),
    y = (e = []) => ({
      layoutParts: [...e],
      extendLayout: t => {
        const o = [...e, t];
        return { ...y(o), layoutParts: o };
      },
      layoutString: e.join('/'),
      isDescendantOf: t => e.includes(t),
    }),
    w = ({ children: e, value: t }) => (0, r.createElement)(_.Provider, { value: t }, e),
    p = () => {
      const e = (0, r.useContext)(_);
      if (void 0 === e)
        throw new Error('useLayoutContext must be used within a LayoutContextProvider');
      return e;
    },
    f = e => {
      const { extendLayout: t } = p();
      return (0, r.useMemo)(() => t(e), [t, e]);
    };
  function O() {
    const [e, t] = (0, r.useState)(0);
    return (
      (0, r.useEffect)(() => {
        const e = new ResizeObserver(e => {
            t(e[0].contentRect.width);
          }),
          o = document.getElementById('adminmenu');
        return (
          o && e.observe(o),
          () => {
            o && e.unobserve(o);
          }
        );
      }, []),
      e
    );
  }
  (window.wc = window.wc || {}).adminLayout = t;
})();