'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [925],
  {
    48075: (e, t, o) => {
      o.d(t, { U: () => g });
      var r = o(74776);
      const n =
        'I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.';
      let a =
        'I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.';
      const i = window.wcSettings,
        s = i?.admin,
        l = parseFloat(i?.wpVersion),
        c = parseFloat(s?.gutenberg_version);
      !isNaN(l) && l >= 6.4 && (a = n), !isNaN(c) && c >= 16.9 && (a = n);
      const { lock: M, unlock: g } = (0, r.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
        a,
        '@wordpress/edit-site',
      );
    },
    46417: (e, t, o) => {
      o.d(t, { Z: () => m });
      var r = o(69307),
        n = o(87608),
        a = o.n(n),
        i = o(55609),
        s = o(94333),
        l = o(65736);
      const c = {
          position: void 0,
          userSelect: void 0,
          cursor: void 0,
          width: void 0,
          height: void 0,
          top: void 0,
          right: void 0,
          bottom: void 0,
          left: void 0,
        },
        M = 320,
        g = { width: '100%', height: '100%' };
      function u(e, t) {
        var o;
        return (
          e / ((o = t) + (0.46153846153846156 - o) * (1 - Math.max(0, Math.min(1, (e - M) / 980))))
        );
      }
      const m = function e({
        isFullWidth: t,
        isOversized: o,
        setIsOversized: n,
        isReady: m,
        children: d,
        defaultSize: y,
        innerContentStyle: p,
        isHandleVisibleByDefault: N = !1,
      }) {
        const [I, D] = (0, r.useState)(g),
          [T, E] = (0, r.useState)(),
          [w, j] = (0, r.useState)(!1),
          [z, k] = (0, r.useState)(!1),
          [h, f] = (0, r.useState)(1),
          A = { type: 'tween', duration: w ? 0 : 0.5 },
          [_, x] = (0, r.useState)(!1),
          L = (0, r.useRef)(null),
          O = (0, s.useInstanceId)(e, 'edit-site-resizable-frame-handle-help'),
          S = y.width / y.height,
          b = {
            default: { flexGrow: 0, height: I.height },
            fullWidth: { flexGrow: 1, height: I.height },
          },
          C = w || N ? 'active' : z ? 'visible' : 'hidden',
          v = (0, r.createElement)(i.__unstableMotion.button, {
            key: 'handle',
            role: 'separator',
            'aria-orientation': 'vertical',
            className: a()('edit-site-resizable-frame__handle', { 'is-resizing': w }),
            variants: {
              hidden: { opacity: 0, left: 0 },
              visible: { opacity: 0.6, left: -10 },
              active: { opacity: 1, left: -10 },
            },
            animate: C,
            'aria-label': (0, l.__)('Drag to resize', 'woocommerce'),
            'aria-describedby': O,
            'aria-valuenow': L.current?.resizable?.offsetWidth || void 0,
            'aria-valuemin': M,
            'aria-valuemax': y.width,
            onKeyDown: e => {
              if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
              e.preventDefault();
              const t = 20 * (e.shiftKey ? 5 : 1) * ('ArrowLeft' === e.key ? 1 : -1),
                o = Math.min(Math.max(M, L.current.resizable.offsetWidth + t), y.width);
              D({ width: o, height: u(o, S) });
            },
            initial: 'hidden',
            exit: 'hidden',
            whileFocus: 'active',
            whileHover: 'active',
            children:
              N &&
              !_ &&
              (0, r.createElement)(
                i.Popover,
                {
                  className: 'woocommerce-assembler-hub__resizable-frame__drag-handler',
                  position: 'middle right',
                },
                (0, l.__)('Drag to resize', 'woocommerce'),
              ),
          });
        return (0, r.createElement)(
          i.ResizableBox,
          {
            as: i.__unstableMotion.div,
            ref: L,
            initial: !1,
            variants: b,
            animate: t ? 'fullWidth' : 'default',
            onAnimationComplete: e => {
              'fullWidth' === e && D({ width: '100%', height: '100%' });
            },
            whileHover: { scale: 1.005, transition: { duration: 0.5, ease: 'easeOut' } },
            transition: A,
            size: I,
            enable: {
              top: !1,
              right: !1,
              bottom: !1,
              left: m,
              topRight: !1,
              bottomRight: !1,
              bottomLeft: !1,
              topLeft: !1,
            },
            resizeRatio: h,
            handleClasses: void 0,
            handleStyles: { left: c, right: c },
            minWidth: M,
            maxWidth: '100%',
            maxHeight: '100%',
            onFocus: () => k(!0),
            onBlur: () => k(!1),
            onMouseOver: () => k(!0),
            onMouseOut: () => k(!1),
            handleComponent: {
              left: (0, r.createElement)(
                r.Fragment,
                null,
                N
                  ? (0, r.createElement)('div', null, v)
                  : (0, r.createElement)(
                      i.Tooltip,
                      {
                        position: 'middle right',
                        text: (0, l.__)('Drag to resize', 'woocommerce'),
                      },
                      v,
                    ),
                (0, r.createElement)(
                  'div',
                  { hidden: !0, id: O },
                  (0, l.__)(
                    'Use left and right arrow keys to resize the canvas. Hold shift to resize in larger increments.',
                    'woocommerce',
                  ),
                ),
              ),
            },
            onResizeStart: (e, t, o) => {
              E(o.offsetWidth), j(!0);
            },
            onResize: (e, t, r, a) => {
              const i = a.width / h,
                s = Math.abs(i),
                l = a.width < 0 ? s : (y.width - T) / 2,
                c = Math.min(s, l),
                M = 0 === s ? 0 : c / s;
              f(1 - M + 2 * M);
              const g = T + a.width;
              n(g > y.width), D({ height: o ? '100%' : u(g, S) });
            },
            onResizeStop: (e, t, r) => {
              j(!1), _ || x(!0), o && (n(!1), D(g));
            },
            className: a()('edit-site-resizable-frame__inner', { 'is-resizing': w }),
          },
          (0, r.createElement)(
            i.__unstableMotion.div,
            {
              className: 'edit-site-resizable-frame__inner-content',
              animate: { borderRadius: t ? 0 : 8 },
              transition: A,
              style: p,
            },
            d,
          ),
        );
      };
    },
    41790: (e, t, o) => {
      o.d(t, { FV: () => i, G3: () => n, RA: () => r, Sj: () => a });
      const r = ['image'],
        n = 60,
        a = 20,
        i = 200;
    },
    60970: (e, t, o) => {
      o.d(t, { R: () => N });
      var r = o(12314),
        n = o(69307),
        a = o(87608),
        i = o.n(a),
        s = o(9818),
        l = o(55609),
        c = o(94333),
        M = o(37798),
        g = o(22629),
        u = o(31886),
        m = o(10431),
        d = o(86020),
        y = o(15577),
        p = o(84279);
      const N = (0, n.forwardRef)(({ isTransparent: e, ...t }, o) => {
        const { siteTitle: a } = (0, s.useSelect)(e => {
            const { getSite: t } = e(M.store);
            return { siteTitle: t()?.title };
          }, []),
          N = (0, c.useReducedMotion)();
        return (0, n.createElement)(
          l.__unstableMotion.div,
          (0, r.Z)({ ref: o }, t, {
            className: i()('edit-site-site-hub', t.className),
            initial: !1,
            transition: { type: 'tween', duration: N ? 0 : 0.3, ease: 'easeOut' },
          }),
          (0, n.createElement)(
            l.__experimentalHStack,
            {
              justify: 'space-between',
              alignment: 'center',
              className: 'edit-site-site-hub__container',
            },
            (0, n.createElement)(
              l.__experimentalHStack,
              {
                justify: 'flex-start',
                className: 'edit-site-site-hub__text-content',
                spacing: '0',
              },
              (0, n.createElement)(
                'div',
                {
                  className: i()('edit-site-site-hub__view-mode-toggle-container', {
                    'has-transparent-background': e,
                  }),
                },
                (0, n.createElement)(
                  d.Link,
                  {
                    href: (0, m.getNewPath)((0, m.getPersistedQuery)(), '/', {}),
                    type: 'wp-admin',
                  },
                  (0, p.id)()
                    ? (0, n.createElement)(y.Z, {
                        size: 24,
                        className: 'woocommerce-cys-wordpress-header-logo',
                      })
                    : (0, n.createElement)(u.Z, {
                        className: 'edit-site-layout__view-mode-toggle-icon',
                      }),
                ),
              ),
              !(0, p.id)() &&
                (0, n.createElement)(
                  l.__unstableAnimatePresence,
                  null,
                  (0, n.createElement)(
                    l.__unstableMotion.div,
                    {
                      layout: !1,
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className: i()('edit-site-site-hub__site-title', { 'is-transparent': e }),
                      transition: {
                        type: 'tween',
                        duration: N ? 0 : 0.2,
                        ease: 'easeOut',
                        delay: 0.1,
                      },
                    },
                    (0, g.decodeEntities)(a),
                  ),
                ),
            ),
          ),
        );
      });
    },
    84279: (e, t, o) => {
      o.d(t, { LU: () => n, id: () => a });
      var r = o(92694);
      const n = 'entrepreneur-signup';
      (0, r.addFilter)(
        'woocommerce_admin_persisted_queries',
        'woocommerce_admin_customize_your_store',
        e => (e.push('ref'), e),
      );
      const a = () => new URLSearchParams(window.location.search).get('ref') === n;
    },
    38936: (e, t, o) => {
      o.r(t),
        o.d(t, {
          CustomizeStoreController: () => Dn,
          customizeStoreStateMachineActions: () => pn,
          customizeStoreStateMachineDefinition: () => In,
          customizeStoreStateMachineServices: () => Nn,
          default: () => Tn,
          machineActions: () => yn,
        });
      var r = {};
      o.r(r),
        o.d(r, {
          assignActiveTheme: () => b,
          assignActiveThemeHasMods: () => W,
          assignCurrentThemeIsAiGenerated: () => B,
          assignCustomizeStoreCompleted: () => Y,
          assignFetchIntroDataError: () => P,
          assignFlags: () => Z,
          assignIsFontLibraryAvailable: () => R,
          assignNoAIFlowError: () => G,
          assignTaskReferral: () => C,
          assignThemeData: () => S,
          recordTracksBrowseAllThemesClicked: () => F,
          recordTracksDesignWithAIClicked: () => v,
          recordTracksDesignWithoutAIClicked: () => Q,
          recordTracksThemeSelected: () => U,
        });
      var n = {};
      o.r(n),
        o.d(n, {
          fetchActiveThemeHasMods: () => q,
          fetchAiStatus: () => X,
          fetchCustomizeStoreCompleted: () => $,
          fetchIntroData: () => ee,
          fetchThemeCards: () => K,
          setFlags: () => te,
        });
      var a = {};
      o.r(a), o.d(a, { assignHasCompleteSurvey: () => tn, completeSurvey: () => on });
      var i = {};
      o.r(i), o.d(i, { fetchSurveyCompletedOption: () => rn });
      var s = o(69307),
        l = o(37798),
        c = o(38469),
        M = o(8667),
        g = o(66002),
        u = o(10431),
        m = o(67221),
        d = o(9818),
        y = o(86020),
        p = o(74617),
        N = o(98817),
        I = o(71310),
        D = o(53736),
        T = o(65736),
        E = o(70048),
        w = o(76357),
        j = o(55609);
      let z = (function(e) {
        return (e.AIOnline = 'AIOnline'), (e.AIOffline = 'AIOffline'), (e.noAI = 'noAI'), e;
      })({});
      var k = o(60970);
      const h = ({ colorPalettes: e, totalPalettes: t }) => {
          let o = null;
          return (
            t > 4 && (o = (0, s.createElement)('li', { className: 'more_palettes' }, '+', t - 4)),
            (0, s.createElement)(
              'ul',
              { className: 'theme-card__color-palettes' },
              e.map(e =>
                (0, s.createElement)('li', {
                  key: e.title,
                  style: {
                    background:
                      'linear-gradient(to right, ' +
                      e.primary +
                      ' 0px, ' +
                      e.primary +
                      ' 50%, ' +
                      e.secondary +
                      ' 50%, ' +
                      e.secondary +
                      ' 100%)',
                  },
                }),
              ),
              o,
            )
          );
        },
        f = ({
          slug: e,
          description: t,
          thumbnail_url: o,
          name: r,
          color_palettes: n = [],
          total_palettes: a = 0,
          link_url: i = '',
          is_active: l = !1,
          price: c = 'Free',
          onClick: M,
        }) =>
          (0, s.createElement)(
            'div',
            { className: 'theme-card', key: e },
            (0, s.createElement)(
              'div',
              null,
              i
                ? (0, s.createElement)(
                    y.Link,
                    { href: i, onClick: M },
                    (0, s.createElement)('img', { src: o, alt: t }),
                  )
                : (0, s.createElement)('img', { src: o, alt: t }),
            ),
            (0, s.createElement)(
              'div',
              { className: 'theme-card__info' },
              (0, s.createElement)('h2', { className: 'theme-card__title' }, r),
              n && (0, s.createElement)(h, { colorPalettes: n, totalPalettes: a }),
            ),
            (0, s.createElement)(
              'div',
              null,
              l &&
                (0, s.createElement)(
                  'span',
                  { className: 'theme-card__active' },
                  (0, T.__)('Active theme', 'woocommerce'),
                ),
              'Free' !== c &&
                (0, s.createElement)(
                  'span',
                  { className: 'theme-card__paid' },
                  (0, T.__)('Paid', 'woocommerce'),
                ),
              (0, s.createElement)('span', { className: 'theme-card__free' }, c),
            ),
          );
      var A = o(34081),
        _ = o(33342),
        x = o(7872),
        L = o(52228),
        O = o(76373);
      const S = (0, x.assign)({
          intro: (e, t) => {
            const o = t.data.themeData;
            return { ...e.intro, themeData: o };
          },
        }),
        b = (0, x.assign)({
          intro: (e, t) => {
            const o = t.data.activeTheme;
            return { ...e.intro, activeTheme: o };
          },
        }),
        C = (0, x.assign)({
          intro: (e, t) => {
            const o = t.data.taskReferral;
            return { ...e.intro, taskReferral: o };
          },
        }),
        v = () => {
          (0, O.L)('customize_your_store_intro_design_with_ai_click');
        },
        Q = () => {
          (0, O.L)('customize_your_store_intro_design_without_ai_click');
        },
        U = (e, t) => {
          (0, O.L)('customize_your_store_intro_theme_select', {
            theme: t.payload.theme,
            is_active: 'SELECTED_ACTIVE_THEME' === t.type ? 'yes' : 'no',
          });
        },
        F = () => {
          (0, O.L)('customize_your_store_intro_browse_all_themes_click');
        },
        Y = (0, x.assign)({
          intro: (e, t) => {
            const o = t.data.customizeStoreTaskCompleted;
            return { ...e.intro, customizeStoreTaskCompleted: o };
          },
        }),
        P = (0, x.assign)({ intro: e => ({ ...e.intro, hasErrors: !0 }) }),
        B = (0, x.assign)({
          intro: (e, t) => {
            const o = t.data.currentThemeIsAiGenerated;
            return { ...e.intro, currentThemeIsAiGenerated: o };
          },
        }),
        G = (0, x.assign)({ intro: e => ({ ...e.intro, hasErrors: !0 }) }),
        R = (0, x.assign)({ isFontLibraryAvailable: (e, t) => t.payload }),
        W = (0, x.assign)({ activeThemeHasMods: (e, t) => t.data.activeThemeHasMods }),
        Z = (0, x.assign)({
          activeThemeHasMods: () =>
            (0, L.cL)(window)
              ? window.parent.__wcCustomizeStore.activeThemeHasMods
              : window.__wcCustomizeStore.activeThemeHasMods,
          isFontLibraryAvailable: () =>
            (0, L.cL)(window)
              ? window.parent.__wcCustomizeStore.isFontLibraryAvailable || !1
              : window.__wcCustomizeStore.isFontLibraryAvailable,
          flowType: (e, t) => t.data,
        });
      var H = o(86989),
        V = o.n(H),
        J = o(34052);
      const X = async () => {
          const e = await fetch('https://status.openai.com/api/v2/status.json');
          return await e.json();
        },
        K = async () =>
          await V()({ path: '/wc-admin/onboarding/themes/recommended', method: 'GET' }),
        q = async () => {
          const e = (0, d.resolveSelect)(l.store).__experimentalGetTemplateForLink('/'),
            t = (0, d.resolveSelect)(l.store).getCurrentThemeGlobalStylesRevisions(),
            o = (0, d.resolveSelect)(l.store).getEntityRecords('postType', 'page', {
              per_page: 100,
              _fields: ['id', '_links.version-history'],
              orderby: 'menu_order',
              order: 'asc',
            }),
            [r, n, a] = await Promise.all([e, t, o]),
            i = a?.some(e => e._links?.['version-history']?.length > 1);
          return { activeThemeHasMods: !!r?.modified || n?.length > 0 || i };
        },
        $ = async () => {
          const e = await (0, d.resolveSelect)(m.ONBOARDING_STORE_NAME).getTask('customize-store');
          return { customizeStoreTaskCompleted: e?.isComplete };
        },
        ee = async () => {
          const e = (0, d.resolveSelect)(l.store).__experimentalGetTemplateForLink('/'),
            t = (0, d.resolveSelect)(m.OPTIONS_STORE_NAME).getOption(
              'woocommerce_admin_customize_store_completed_theme_id',
            ),
            o = (0, d.resolveSelect)(m.ONBOARDING_STORE_NAME).getTask('customize-store'),
            r = K(),
            [n, a, i, s] = await Promise.all([e, t, o, r]);
          let c = !1;
          a && n?.id === a && (c = !0);
          const M = i?.isComplete;
          return {
            customizeStoreTaskCompleted: M,
            themeData: s,
            activeTheme: (await (0, d.resolveSelect)('core').getCurrentTheme()).stylesheet || '',
            currentThemeIsAiGenerated: c,
          };
        },
        te = async () => {
          if (!(0, L.cL)(window)) {
            const e = {
              FONT_LIBRARY_AVAILABLE: (async () => {
                const e = await (async () => {
                  try {
                    return (
                      await V()({ path: '/wp/v2/font-collections?_fields=slug', method: 'GET' }), !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })();
                window.__wcCustomizeStore = {
                  ...window.__wcCustomizeStore,
                  isFontLibraryAvailable: e,
                };
              })(),
            };
            await Promise.all(Object.values(e));
          }
          if ((0, J.V)() && !(0, L.cL)(window))
            try {
              const { status: e } = await X(),
                t = 'critical' !== e.indicator && 'major' !== e.indicator;
              return (
                (window.cys_aiOnline = e),
                (0, O.L)('customize_your_store_ai_status', { online: t ? 'yes' : 'no' }),
                t ? z.AIOnline : z.AIOffline
              );
            } catch (e) {
              return (
                (window.cys_aiOnline = !1),
                (0, O.L)('customize_your_store_ai_status', { online: 'no' }),
                z.AIOffline
              );
            }
          return z.noAI;
        },
        oe = {
          'network-offline': _.B_,
          'task-incomplete-active-theme-has-mods': _.wO,
          'jetpack-offline': _.sw,
          'existing-ai-theme': _.mt,
          'existing-theme': _.nC,
          [z.noAI]: _.$p,
          'existing-no-ai-theme': _.vY,
          default: _.jf,
        },
        re = {
          'no-modal': null,
          'task-incomplete-override-design-changes': A.MO,
          'task-complete-with-ai-theme': A.ab,
          'task-complete-without-ai-theme': A.Fc,
        },
        ne = ({ onClick: e }) =>
          (0, s.createElement)(
            'div',
            null,
            (0, s.createElement)(
              j.Button,
              { className: 'close-cys-design-with-ai', onClick: e || (() => {}) },
              (0, s.createElement)(
                'svg',
                {
                  width: '24',
                  height: '24',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                (0, s.createElement)('path', {
                  d: 'M5.40456 5L19 19M5 19L18.5954 5',
                  stroke: '#1E1E1E',
                  strokeWidth: '1.5',
                }),
              ),
            ),
          ),
        ae = ({ onClick: e }) =>
          (0, s.createElement)(
            'div',
            null,
            (0, s.createElement)(
              j.Button,
              { className: 'skip-cys-design-with-ai', onClick: e || (() => {}), variant: 'link' },
              (0, T.__)('Skip', 'woocommerce'),
            ),
          );
      var ie = o(84279),
        se = o(15577),
        le = o(87608),
        ce = o.n(le);
      const Me = ({
          className: e,
          selected: t,
          title: o,
          subtitle: r,
          name: n,
          value: a,
          onChange: i,
        }) => {
          const l = () => {
              i(a);
            },
            c = 'woocommerce-' + a.replace(/_/g, '-');
          return (0, s.createElement)(
            'div',
            {
              role: 'radio',
              className: ce()('woocommerce-cys-choice-container', e),
              onClick: l,
              onKeyDown: e => {
                'Enter' === e.key && l();
              },
              'data-selected': t || null,
              tabIndex: 0,
            },
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-cys-choice' },
              (0, s.createElement)('input', {
                className: 'woocommerce-cys-choice-input',
                id: c,
                name: n,
                type: 'radio',
                value: a,
                checked: !!t,
                onChange: l,
                'data-selected': t || null,
                tabIndex: -1,
              }),
              (0, s.createElement)('label', { htmlFor: c, className: 'choice__title' }, o),
              r && (0, s.createElement)('p', { className: 'choice__subtitle' }, r),
            ),
          );
        },
        ge = o.p + '73ae3f4886531d9c3fee.svg',
        ue = o.p + 'ef66842cc5fb22e3c7ca.svg',
        me = [
          {
            title: (0, T.__)('Analyzing your responses', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDIxNiAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJMYXllcl8xIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDgyNF8zMDI1OCkiPgo8ZyBpZD0iR3JvdXAiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMjAuOTUyNSAxMzUuOTkzQzMyLjUyNDIgMTM1Ljk5MyA0MS45MDUgMTI2LjY3NCA0MS45MDUgMTE1LjE3OEM0MS45MDUgMTAzLjY4MiAzMi41MjQyIDk0LjM2MjcgMjAuOTUyNSA5NC4zNjI3QzkuMzgwNzQgOTQuMzYyNyAwIDEwMy42ODIgMCAxMTUuMTc4QzAgMTI2LjY3NCA5LjM4MDc0IDEzNS45OTMgMjAuOTUyNSAxMzUuOTkzWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIiIGQ9Ik0yMC45NTI1IDEzNS45OTNDMjYuNzI0NSAxMzUuOTkzIDMxLjk0NjIgMTMzLjY3NiAzNS43MzU5IDEyOS45MjZDMzMuODMzNyAxMjIuNTczIDI3LjkzNzkgMTE3LjIxMiAyMC45NTI1IDExNy4yMTJDMTMuOTY3MiAxMTcuMjEyIDguMDcxMzEgMTIyLjU3MyA2LjE2OTE5IDEyOS45MjZDOS45NTg4NSAxMzMuNjc2IDE1LjE4NDIgMTM1Ljk5MyAyMC45NTI1IDEzNS45OTNaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGlkPSJWZWN0b3JfMyIgZD0iTTIwLjk1MjQgMTE0LjgxNkMyNS4xMTIyIDExNC44MTYgMjguNDg0MyAxMTEuNDY2IDI4LjQ4NDMgMTA3LjMzM0MyOC40ODQzIDEwMy4yMDEgMjUuMTEyMiA5OS44NTA2IDIwLjk1MjQgOTkuODUwNkMxNi43OTI2IDk5Ljg1MDYgMTMuNDIwNCAxMDMuMjAxIDEzLjQyMDQgMTA3LjMzM0MxMy40MjA0IDExMS40NjYgMTYuNzkyNiAxMTQuODE2IDIwLjk1MjQgMTE0LjgxNloiIGZpbGw9IiNCRUEwRjIiLz4KPC9nPgo8ZyBpZD0iR3JvdXBfMiI+CjxwYXRoIGlkPSJWZWN0b3JfNCIgZD0iTTE5My40MzcgMTM2QzE5MS41MiAxMzYgMTg5Ljk2MSAxMzQuNDcyIDE4OS45MzEgMTMyLjU3MlY2MC43MDc1QzE4OS45MzEgNTguNzg1MyAxOTEuNTAyIDU3LjIyNSAxOTMuNDM3IDU3LjIyNUMxOTUuMzcyIDU3LjIyNSAxOTYuOTQyIDU4Ljc4NTMgMTk2Ljk0MiA2MC43MDc1VjEzMi41NzlDMTk2Ljk0MiAxMzQuNDcyIDE5NS4zNTQgMTM2IDE5My40MzcgMTM2WiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBpZD0iVmVjdG9yXzUiIGQ9Ik0xOTYuOTQyIDEzMi41NzlWNzkuMjgxN0gxODkuOTMxVjEzMi41NzJDMTg5Ljk2MSAxMzQuNDY5IDE5MS41MiAxMzYgMTkzLjQzNyAxMzZDMTk1LjM1NCAxMzYgMTk2Ljk0MiAxMzQuNDc2IDE5Ni45NDIgMTMyLjU3OVoiIGZpbGw9IiMyNzFCM0QiLz4KPC9nPgo8ZyBpZD0iR3JvdXBfMyI+CjxwYXRoIGlkPSJWZWN0b3JfNiIgZD0iTTE3NC4zNzYgMTM2QzE3Mi40NTkgMTM2IDE3MC44OTkgMTM0LjQ3MiAxNzAuODcgMTMyLjU3MlY2MC43MDc1QzE3MC44NyA1OC43ODUzIDE3Mi40NDEgNTcuMjI1IDE3NC4zNzYgNTcuMjI1QzE3Ni4zMSA1Ny4yMjUgMTc3Ljg4MSA1OC43ODUzIDE3Ny44ODEgNjAuNzA3NVYxMzIuNTc5QzE3Ny44ODEgMTM0LjQ3MiAxNzYuMjkyIDEzNiAxNzQuMzc2IDEzNloiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggaWQ9IlZlY3Rvcl83IiBkPSJNMTc3Ljg4MSAxMzIuNTc5Vjk0LjEyNzRIMTcwLjg3VjEzMi41NzJDMTcwLjg5OSAxMzQuNDY5IDE3Mi40NTkgMTM2IDE3NC4zNzYgMTM2QzE3Ni4yOTIgMTM2IDE3Ny44ODEgMTM0LjQ3NiAxNzcuODgxIDEzMi41NzlaIiBmaWxsPSIjMjcxQjNEIi8+CjwvZz4KPGcgaWQ9Ikdyb3VwXzQiPgo8cGF0aCBpZD0iVmVjdG9yXzgiIGQ9Ik0yMTIuNDk0IDEzNkMyMTAuNTc4IDEzNiAyMDkuMDE4IDEzNC40NzIgMjA4Ljk4OSAxMzIuNTcyVjYwLjcwNzVDMjA4Ljk4OSA1OC43ODUzIDIxMC41NiA1Ny4yMjUgMjEyLjQ5NCA1Ny4yMjVDMjE0LjQyOSA1Ny4yMjUgMjE2IDU4Ljc4NTMgMjE2IDYwLjcwNzVWMTMyLjU3OUMyMTYgMTM0LjQ3MiAyMTQuNDExIDEzNiAyMTIuNDk0IDEzNloiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggaWQ9IlZlY3Rvcl85IiBkPSJNMjE2IDEzMi41NzlWOTguNzc5MUgyMDguOTg5VjEzMi41NzJDMjA5LjAxOCAxMzQuNDY5IDIxMC41NzggMTM2IDIxMi40OTQgMTM2QzIxNC40MTEgMTM2IDIxNiAxMzQuNDc2IDIxNiAxMzIuNTc5WiIgZmlsbD0iIzI3MUIzRCIvPgo8L2c+CjxwYXRoIGlkPSJWZWN0b3JfMTAiIGQ9Ik0xNjcuNzk4IDMyLjQzNTRWMjQuNjMwN0wxNjEuMzAxIDIzLjc4MzZDMTYwLjcxMSAyMS4wNzU5IDE1OS42NCAxOC41NDU1IDE1OC4xNzUgMTYuMjkzOEwxNjIuMTYxIDExLjEzMTdMMTU2LjYxMiA1LjYxODQ0TDE1MS40MTUgOS41Nzg3M0MxNDkuMTQ5IDguMTE2MjUgMTQ2LjYwNiA3LjA0ODM0IDE0My44NjkgNi40NzI3NkwxNDMuMDI0IDAuMDIxOTExNkgxMzUuMTY3TDEzNC4zMTUgNi40NzYzOEMxMzEuNTg5IDcuMDU1NTggMTI5LjA0MiA4LjExOTg3IDEyNi43NzUgOS41ODIzNUwxMjEuNTc5IDUuNjIyMDZMMTE2LjAyOSAxMS4xMzUzTDEyMC4wMTYgMTYuMjk3NUMxMTguNTQ0IDE4LjU0OTEgMTE3LjQ2OSAyMS4wNzU5IDExNi44ODkgMjMuNzg3M0wxMTAuMzkyIDI0LjYzNDNWMzIuNDM5MUwxMTYuODg5IDMzLjI4NjFDMTE3LjQ3MiAzNS45OTM5IDExOC41NDQgMzguNTI0MyAxMjAuMDE2IDQwLjc3NTlMMTE2LjAyOSA0NS45MzgxTDEyMS41NzkgNTEuNDUxM0wxMjYuNzc1IDQ3LjQ5MTFDMTI5LjA0MiA0OC45NTM1IDEzMS41ODUgNTAuMDIxNCAxMzQuMzE1IDUwLjU5N0wxMzUuMTY3IDU3LjA1MTVIMTQzLjAyNEwxNDMuODc2IDUwLjU5N0MxNDYuNjAyIDUwLjAxNzggMTQ5LjE0OSA0OC45NTM1IDE1MS40MTUgNDcuNDkxMUwxNTYuNjEyIDUxLjQ1MTNMMTYyLjE2MSA0NS45MzgxTDE1OC4xNzUgNDAuNzc1OUMxNTkuNjQ3IDM4LjUyNDMgMTYwLjcyMiAzNS45OTc1IDE2MS4zMDEgMzMuMjg2MUwxNjcuNzk4IDMyLjQzOTFWMzIuNDM1NFpNMTM5LjA5OSAzNi42NDU1QzEzNC4yNTMgMzYuNjQ1NSAxMzAuMzIxIDMyLjczOTUgMTMwLjMyMSAyNy45MjQ5QzEzMC4zMjEgMjMuMTEwMyAxMzQuMjUzIDE5LjIwNDMgMTM5LjA5OSAxOS4yMDQzQzE0My45NDUgMTkuMjA0MyAxNDcuODc3IDIzLjExMDMgMTQ3Ljg3NyAyNy45MjQ5QzE0Ny44NzcgMzIuNzM5NSAxNDMuOTQ1IDM2LjY0NTUgMTM5LjA5OSAzNi42NDU1WiIgZmlsbD0iI0JFQTBGMiIvPgo8ZyBpZD0iR3JvdXBfNSI+CjxwYXRoIGlkPSJWZWN0b3JfMTEiIGQ9Ik05Ny42MTMgMEg5LjM3NTcxTDAuMTgyMTI5IDU3LjEyMDFIMjIuODM2M0wyMi43NDg5IDg0Ljc5MTRMNDAuNjI5NSA1Ny4xMjAxSDg4LjQxOTRMOTcuNjEzIDBaIiBmaWxsPSIjMjcxQjNEIi8+CjxnIGlkPSJHcm91cF82Ij4KPHBhdGggaWQ9IlZlY3Rvcl8xMiIgZD0iTTM0LjczNDQgMzEuNTUyQzM2LjUwOTQgMzEuNTUyIDM3Ljk0ODQgMzAuMTIyNSAzNy45NDg0IDI4LjM1OTFDMzcuOTQ4NCAyNi41OTU4IDM2LjUwOTQgMjUuMTY2MyAzNC43MzQ0IDI1LjE2NjNDMzIuOTU5NCAyNS4xNjYzIDMxLjUyMDUgMjYuNTk1OCAzMS41MjA1IDI4LjM1OTFDMzEuNTIwNSAzMC4xMjI1IDMyLjk1OTQgMzEuNTUyIDM0LjczNDQgMzEuNTUyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xMyIgZD0iTTQ4Ljg5NzUgMzEuNTUyQzUwLjY3MjUgMzEuNTUyIDUyLjExMTQgMzAuMTIyNSA1Mi4xMTE0IDI4LjM1OTFDNTIuMTExNCAyNi41OTU4IDUwLjY3MjUgMjUuMTY2MyA0OC44OTc1IDI1LjE2NjNDNDcuMTIyNSAyNS4xNjYzIDQ1LjY4MzYgMjYuNTk1OCA0NS42ODM2IDI4LjM1OTFDNDUuNjgzNiAzMC4xMjI1IDQ3LjEyMjUgMzEuNTUyIDQ4Ljg5NzUgMzEuNTUyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xNCIgZD0iTTYzLjA2MDYgMzEuNTUyQzY0LjgzNTYgMzEuNTUyIDY2LjI3NDUgMzAuMTIyNSA2Ni4yNzQ1IDI4LjM1OTFDNjYuMjc0NSAyNi41OTU4IDY0LjgzNTYgMjUuMTY2MyA2My4wNjA2IDI1LjE2NjNDNjEuMjg1NiAyNS4xNjYzIDU5Ljg0NjcgMjYuNTk1OCA1OS44NDY3IDI4LjM1OTFDNTkuODQ2NyAzMC4xMjI1IDYxLjI4NTYgMzEuNTUyIDYzLjA2MDYgMzEuNTUyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxnIGlkPSJHcm91cF83Ij4KPHBhdGggaWQ9IlZlY3Rvcl8xNSIgZD0iTTcxLjE0NzIgMTA0LjAxN0M3Ny4yNzYzIDEwNC4wMTcgODIuMjY0OCAxMDguOTY5IDgyLjI2NDggMTE1LjA2MkM4Mi4yNjQ4IDEyMS4xNTQgNzcuMjc5OSAxMjYuMTA3IDcxLjE0NzIgMTI2LjEwN0M2NS4wMTQ1IDEyNi4xMDcgNjAuMDI5NiAxMjEuMTU0IDYwLjAyOTYgMTE1LjA2MkM2MC4wMjk2IDEwOC45NjkgNjUuMDE0NSAxMDQuMDE3IDcxLjE0NzIgMTA0LjAxN1pNNzEuMTQ3MiA5NC4xMjc0QzU5LjUwODYgOTQuMTI3NCA1MC4wNzgxIDEwMy41IDUwLjA3ODEgMTE1LjA1OEM1MC4wNzgxIDEyNi42MTcgNTkuNTEyMiAxMzUuOTg5IDcxLjE0NzIgMTM1Ljk4OUM4Mi43ODIyIDEzNS45ODkgOTIuMjE2MyAxMjYuNjE3IDkyLjIxNjMgMTE1LjA1OEM5Mi4yMTYzIDEwMy41IDgyLjc4MjIgOTQuMTI3NCA3MS4xNDcyIDk0LjEyNzRaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGlkPSJWZWN0b3JfMTYiIGQ9Ik02MC43MjE5IDk2Ljg3NUw2NS43MzU5IDEwNS40MjJDNjcuMzM5MyAxMDQuNTMxIDY5LjE4MzEgMTA0LjAxNyA3MS4xNDcxIDEwNC4wMTdWOTQuMTI3NEM2Ny4zNTM4IDk0LjEyNzQgNjMuNzk3NCA5NS4xMzAxIDYwLjcyMTkgOTYuODcxNFY5Ni44NzVaIiBmaWxsPSIjQkVBMEYyIi8+CjwvZz4KPGcgaWQ9Ikdyb3VwXzgiPgo8cGF0aCBpZD0iVmVjdG9yXzE3IiBkPSJNMTIxLjM0NiA5NC4xMjc0QzEwOS43MDcgOTQuMTI3NCAxMDAuMjc3IDEwMy41IDEwMC4yNzcgMTE1LjA1OEMxMDAuMjc3IDEyNi42MTcgMTA5LjcxMSAxMzUuOTg5IDEyMS4zNDYgMTM1Ljk4OUMxMzIuOTgxIDEzNS45ODkgMTQyLjQxNSAxMjYuNjE3IDE0Mi40MTUgMTE1LjA1OEMxNDIuNDE1IDEwMy41IDEzMi45ODEgOTQuMTI3NCAxMjEuMzQ2IDk0LjEyNzRaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGlkPSJWZWN0b3IgKFN0cm9rZSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMwLjk0MSAxMDMuODQxTDExOC4yMjggMTI2Ljg3MkwxMTEuNDUyIDExNS4wNzhMMTEyLjM1NyAxMTQuNTY4TDExOC4yMSAxMjQuNzU1TDEzMC4wMjggMTAzLjM0NkwxMzAuOTQxIDEwMy44NDFaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDgyNF8zMDI1OCI+CjxyZWN0IHdpZHRoPSIyMTYiIGhlaWdodD0iMTM2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=',
              alt: (0, T.__)('Analyzing your responses', 'woocommerce'),
            }),
            progress: 14,
          },
          {
            title: (0, T.__)('Comparing the top performing stores', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDIxNiAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJDb21wYXJpbmciIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80ODI0XzIwMjE4KSI+CjxnIGlkPSJMYXllciAxIj4KPGcgaWQ9Ikdyb3VwIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTAgMTMxLjU3QzAgMTI5LjE0NyAxLjk1OTY2IDEyNy4xOCA0LjM5Mjg1IDEyNy4xNEgxMTguNzAyQzEyMS4xNjggMTI3LjE0IDEyMy4xNjQgMTI5LjEyMiAxMjMuMTY0IDEzMS41N0MxMjMuMTY0IDEzNC4wMTggMTIxLjE2OCAxMzYgMTE4LjcwMiAxMzZINC4zODE5MkMxLjk1NjAyIDEzNS45OTYgMCAxMzMuOTg5IDAgMTMxLjU3WiIgZmlsbD0iI0JFQTBGMiIvPgo8ZyBpZD0iR3JvdXBfMiI+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTkuOTU4NSAxMzUuOTk2SDEzTDE2LjY2OCAxMjcuMTRIMTMuNjIyOEw5Ljk1ODUgMTM1Ljk5NloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl8zIiBkPSJNMjIuMDg0NSAxMzUuOTk2SDI1LjEyNkwyOC43OTQgMTI3LjE0SDI1Ljc0ODhMMjIuMDg0NSAxMzUuOTk2WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzQiIGQ9Ik0xOS42ODc4IDEyNy4xNEwxNi4wMTk4IDEzNS45OTZIMTkuMDY0OUwyMi43MzI5IDEyNy4xNEgxOS42ODc4WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzUiIGQ9Ik0zMS44NjgyIDEyNy4xNEwyOC4yMDAyIDEzNS45OTZIMzEuMjQ1M0wzNC45MTMzIDEyNy4xNEgzMS44NjgyWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzYiIGQ9Ik0zNy45NTg1IDEyNy4xNEwzNC4yOTA1IDEzNS45OTZIMzcuMzM1N0w0MS4wMDM2IDEyNy4xNEgzNy45NTg1WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzciIGQ9Ik00NC4wNDg2IDEyNy4xNEw0MC4zODA2IDEzNS45OTZINDMuNDI1N0w0Ny4wOTM3IDEyNy4xNEg0NC4wNDg2WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzgiIGQ9Ik01MC4xMzkgMTI3LjE0TDQ2LjQ3NDYgMTM1Ljk5Nkg0OS41MTYxTDUzLjE4NDEgMTI3LjE0SDUwLjEzOVoiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl85IiBkPSJNNTYuMjI5MyAxMjcuMTRMNTIuNTY0OSAxMzUuOTk2SDU1LjYwNjRMNTkuMjc0NCAxMjcuMTRINTYuMjI5M1oiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xMCIgZD0iTTYyLjMwMTMgMTI3LjE0TDU4LjYzMzMgMTM1Ljk5Nkg2MS42Nzg0TDY1LjM0NjQgMTI3LjE0SDYyLjMwMTNaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGlkPSJWZWN0b3JfMTEiIGQ9Ik02OC4zNzMzIDEyNy4xNEw2NC43MDUzIDEzNS45OTZINjcuNzQ2OEw3MS40MTQ4IDEyNy4xNEg2OC4zNzMzWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzEyIiBkPSJNNzQuNDQxNyAxMjcuMTRMNzAuNzczNyAxMzUuOTk2SDczLjgxODhMNzcuNDg2OCAxMjcuMTRINzQuNDQxN1oiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xMyIgZD0iTTgwLjUxMzcgMTI3LjE0TDc2Ljg0NTcgMTM1Ljk5Nkg3OS44OTA4TDgzLjU1NTIgMTI3LjE0SDgwLjUxMzdaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGlkPSJWZWN0b3JfMTQiIGQ9Ik04Ni41ODIxIDEyNy4xNEw4Mi45MTc3IDEzNS45OTZIODUuOTU5Mkw4OS42MjcyIDEyNy4xNEg4Ni41ODIxWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzE1IiBkPSJNMTAuNjAzMyAxMjcuMTRINy41NTgxOUwzLjkwMTEyIDEzNS45NzFDNC4wNTc3NSAxMzUuOTg5IDQuMjE4MDIgMTM1Ljk5NiA0LjM3ODI5IDEzNS45OTZINi45MzUzMkwxMC42MDMzIDEyNy4xMzdWMTI3LjE0WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzE2IiBkPSJNMS4zNzY4NiAxMzQuNzg1TDQuNTQyMTkgMTI3LjE0SDQuMzkyODVDMi43MjgyMyAxMjcuMTY2IDEuMjg1OCAxMjguMDk5IDAuNTM5MDg5IDEyOS40NThMMC4xNzg0ODIgMTMwLjMyNkMwLjA2MTkyMjQgMTMwLjcyIDAgMTMxLjEzNiAwIDEzMS41NjdDMCAxMzIuODI1IDAuNTI4MTYyIDEzMy45NzEgMS4zNzY4NiAxMzQuNzgxVjEzNC43ODVaIiBmaWxsPSIjMjcxQjNEIi8+CjwvZz4KPC9nPgo8ZyBpZD0iR3JvdXBfMyI+CjxwYXRoIGlkPSJWZWN0b3JfMTciIGQ9Ik0xMjMuMTMxIDE4LjEzOTFWNjEuNTAxNkgxMjYuNzczVjE4LjEzOTFIMTIzLjEzMVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xOCIgZD0iTTEzMS4wNzUgLTEuOTA3MzVlLTA1VjYxLjUwMTZIMTM0LjcxOFYtMS45MDczNWUtMDVIMTMxLjA3NVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xOSIgZD0iTTEzOS4wMjMgMzMuODk1MVY2MS41MDE2SDE0Mi42NjZWMzMuODk1MUgxMzkuMDIzWiIgZmlsbD0iI0JFQTBGMiIvPgo8L2c+CjxnIGlkPSJHcm91cF80Ij4KPHBhdGggaWQ9IlZlY3Rvcl8yMCIgZD0iTTIxNiA3Mi43MDEySDE1NC4wNzhWNzYuMjY2OEgyMTZWNzIuNzAxMloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl8yMSIgZD0iTTIwMS4xNzUgODAuNTMwNEgxNTQuMDc4Vjg0LjA5NkgyMDEuMTc1VjgwLjUzMDRaIiBmaWxsPSIjMjcxQjNEIi8+CjwvZz4KPHBhdGggaWQ9IlZlY3Rvcl8yMiIgZD0iTTE4MC45NDEgODAuNTMwM0gxNTQuMDc4Vjg5Ljg4OTFIMTgwLjk0MVY4MC41MzAzWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzIzIiBkPSJNNzUuODAzOSA5NS4yOTU0SDEzMC43MTVDMTMyLjY0OSA5NS4yOTU0IDEzNC4yMTkgOTYuODU0IDEzNC4yMTkgOTguNzc0M0MxMzQuMjE5IDEwMC42OTQgMTMyLjY0OSAxMDIuMjUzIDEzMC43MTUgMTAyLjI1M0g3NS43OTY2TDc1LjgwMzkgOTUuMjk1NFoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggaWQ9IlZlY3Rvcl8yNCIgZD0iTTE1OS40OTggNzYuMzEzN0MxNzEuOTczIDc2LjMxMzcgMTgyLjEyMSA4Ni4zODg2IDE4Mi4xMjEgOTguNzc0MkMxODIuMTIxIDExMS4xNiAxNzEuOTczIDEyMS4yMzUgMTU5LjQ5OCAxMjEuMjM1QzE0Ny4wMjIgMTIxLjIzNSAxMzYuODc0IDExMS4xNiAxMzYuODc0IDk4Ljc3NDJDMTM2Ljg3NCA4Ni4zODg2IDE0Ny4wMjIgNzYuMzEzNyAxNTkuNDk4IDc2LjMxMzdaTTE1OS40OTggNjkuODA0NEMxNDMuMzgzIDY5LjgwNDQgMTMwLjMxOCA4Mi43NzU5IDEzMC4zMTggOTguNzc0MkMxMzAuMzE4IDExNC43NzMgMTQzLjM4MyAxMjcuNzQ0IDE1OS40OTggMTI3Ljc0NEMxNzUuNjEyIDEyNy43NDQgMTg4LjY3OCAxMTQuNzczIDE4OC42NzggOTguNzc0MkMxODguNjc4IDgyLjc3NTkgMTc1LjYxMiA2OS44MDQ0IDE1OS40OTggNjkuODA0NFoiIGZpbGw9IiNCRUEwRjIiLz4KPC9nPgo8ZyBpZD0iTGF5ZXIgNCI+CjxnIGlkPSJHcm91cF81Ij4KPHBhdGggaWQ9IlZlY3Rvcl8yNSIgZD0iTTIxNiAwSDE1NC4wNzhWNjEuNTAxNkgyMTZWMFoiIGZpbGw9IiMyNzFCM0QiLz4KPGcgaWQ9Ikdyb3VwXzYiPgo8cGF0aCBpZD0iVmVjdG9yXzI2IiBkPSJNMTkzLjA4MiAxOS4zNjQ5SDE3Ny4wMjlWMTAuNTUyMUMxODQuNTMzIDE0LjA0OSAxOTMuMDgyIDEwLjU1MjEgMTkzLjA4MiAxMC41NTIxVjE5LjM2NDlaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGlkPSJWZWN0b3JfMjciIGQ9Ik0xOTIuMzMxIDEwLjQyMkMxOTIuMzMxIDEzLjg1NzQgMTkwLjk3NiAxNy4zMjE4IDE4NS4wMzkgMTcuMzIxOEMxNzkuMTAyIDE3LjMyMTggMTc3Ljc0NyAxMy44NTc0IDE3Ny43NDcgMTAuNDIyQzE2OS42NTMgMTAuNDIyIDE2MC4wMyAxNi4yMTg4IDE1Ny40NTEgMTguNzc5MkwxNjQuODg5IDMwLjMxMTRMMTY5LjE5NCAyOS4yMDg0TDE2OS4yNiA1Mi41MzMzSDIwMC44MTFMMjAwLjg3NyAyOS4yMDg0TDIwNS4xODIgMzAuMzExNEwyMTIuNjIgMTguNzc5MkMyMTAuMDQxIDE2LjIxODggMjAwLjQxOCAxMC40MjIgMTkyLjMyNCAxMC40MjJIMTkyLjMzMVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZyBpZD0iR3JvdXBfNyI+CjxnIGlkPSJHcm91cF84Ij4KPHBhdGggaWQ9IlZlY3Rvcl8yOCIgZD0iTTYxLjkyMjQgOTAuNzYwN0gwVjk0LjM3N0g2MS45MjI0VjkwLjc2MDdaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGlkPSJWZWN0b3JfMjkiIGQ9Ik00NS4xNDUxIDk4LjY0NzhIMFYxMDIuMjY0SDQ1LjE0NTFWOTguNjQ3OFoiIGZpbGw9IiMyNzFCM0QiLz4KPC9nPgo8cGF0aCBpZD0iVmVjdG9yXzMwIiBkPSJNNjEuOTIyNCAxOC4xMzkySDBWNzkuNjE1NEg2MS45MjI0VjE4LjEzOTJaIiBmaWxsPSIjQkVBMEYyIi8+CjwvZz4KPHBhdGggaWQ9IlZlY3Rvcl8zMSIgZD0iTTguMjkwNDQgNDQuMjU1NkM5Ljc3NjU4IDQ2LjM4OTIgMTguMjQ1NCA0Ny43MDE5IDI1LjE0NDMgNDYuMDIwNEMyMy4yMjEgNDIuNzU4NSAyNC4wMjk3IDQxLjEzODQgMjQuODU2NSA0MS4wNTg5QzI2LjIwNDIgNDAuOTI1MSAzMC44NzM5IDQ1LjE3NDIgMzQuNzE2NyA0Ni45OTY4QzM5LjI5OSA0OS4xNzAxIDQzLjUzMTYgNTAuMjg3NSA0Ni45MTU1IDUwLjk0MjFDNTYuOTAzMiA1Mi44ODA0IDU2LjM0MjIgNTguMDgwNiA1Ni4wNDM2IDYxLjI2MjlINi40NzI4NEM1LjQ4MjA4IDU2LjE0OTUgNS4zMTQ1MiA0OC42ODU1IDguMjkwNDQgNDQuMjU1NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGlkPSJWZWN0b3JfMzIiIGQ9Ik01Ni4wMzYxIDU3LjY0MzFINS45Njk5N0M2LjA4Mjg5IDU4LjkyMzIgNi4yNTc3MyA2MC4xNDkxIDYuNDcyNjQgNjEuMjYyOUg1Ni4wNDM0QzU2LjE0MTcgNjAuMjEwNiA1Ni4yNjU1IDU4Ljk0MTMgNTYuMDMyNCA1Ny42NDMxSDU2LjAzNjFaIiBmaWxsPSIjMjcxQjNEIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80ODI0XzIwMjE4Ij4KPHJlY3Qgd2lkdGg9IjIxNiIgaGVpZ2h0PSIxMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
              alt: (0, T.__)('Comparing the top performing stores', 'woocommerce'),
            }),
            progress: 28,
          },
          {
            title: (0, T.__)('Designing the best look for your business', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDIxNiAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMDkuMjQ5IDg2LjY5MjRIMTczLjA4N0MxNjkuMzU5IDg2LjY5MjQgMTY2LjMzNiA4OS42OTM0IDE2Ni4zMzYgOTMuMzk1M1YxMjkuMjk3QzE2Ni4zMzYgMTMyLjk5OSAxNjkuMzU5IDEzNiAxNzMuMDg3IDEzNkgyMDkuMjQ5QzIxMi45NzggMTM2IDIxNiAxMzIuOTk5IDIxNiAxMjkuMjk3VjkzLjM5NTNDMjE2IDg5LjY5MzQgMjEyLjk3OCA4Ni42OTI0IDIwOS4yNDkgODYuNjkyNFoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTE5MC4xMiAxMjAuMDkxTDE4Ny44NjkgMTE0LjY4N0gxNzYuNTU2TDE3NC4zMDQgMTIwLjA5MUgxNzMuMTc4TDE4MS42MzEgOTkuOTUzNkgxODIuNzg2TDE5MS4yMzkgMTIwLjA5MUgxOTAuMTEzSDE5MC4xMlpNMTgyLjIxNCAxMDEuMDcxTDE3Ni45MjQgMTEzLjc4M0gxODcuNTA0TDE4Mi4yMTQgMTAxLjA3MVoiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTIwMy45ODggMTIwLjA5MVYxMTguMzEyQzIwMi42MTggMTE5Ljc5MSAyMDAuOTc4IDEyMC40NTcgMTk4LjkwOSAxMjAuNDU3QzE5Ni4zMjUgMTIwLjQ1NyAxOTMuNzY4IDExOC43MDYgMTkzLjc2OCAxMTUuNTk1QzE5My43NjggMTEyLjQ4NCAxOTYuMjkzIDExMC43MzMgMTk4LjkwOSAxMTAuNzMzQzIwMC45NzggMTEwLjczMyAyMDIuNjE4IDExMS4zOTkgMjAzLjk4OCAxMTIuODc4VjEwOS41ODdDMjAzLjk4OCAxMDcuMjMyIDIwMi4xMDQgMTA1Ljk2MiAxOTkuODUyIDEwNS45NjJDMTk3LjkzNiAxMDUuOTYyIDE5Ni41MDcgMTA2LjYyOCAxOTUuMTM4IDEwOC4yNTVMMTk0LjQzOCAxMDcuNjUxQzE5NS44NjYgMTA1Ljk5MSAxOTcuMzg5IDEwNS4xNDUgMTk5Ljg1MiAxMDUuMTQ1QzIwMi43NDEgMTA1LjE0NSAyMDQuODk4IDEwNi41OTUgMjA0Ljg5OCAxMDkuNTU0VjEyMC4wOTFIMjAzLjk4OFpNMjAzLjk4OCAxMTcuNDA0VjExMy43NzlDMjAyLjg2MiAxMTIuMyAyMDEuMDY5IDExMS41NDQgMTk5LjE1MyAxMTEuNTQ0QzE5Ni40NzggMTExLjU0NCAxOTQuNzczIDExMy4zMjMgMTk0Ljc3MyAxMTUuNTg4QzE5NC43NzMgMTE3Ljg1MiAxOTYuNDc1IDExOS42MzIgMTk5LjE1MyAxMTkuNjMyQzIwMS4wNjkgMTE5LjYzMiAyMDIuODYyIDExOC44NzYgMjAzLjk4OCAxMTcuMzk2VjExNy40MDRaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xMjkuNzg0IDEyMC4wOTFMMTI3Ljk5MiAxMTUuNTkxSDExNy44OTZMMTE2LjEwMyAxMjAuMDkxSDExMy4yMTRMMTIxLjM5MyA5OS45NTM2SDEyNC41MjdMMTMyLjY3NyAxMjAuMDkxSDEyOS43ODhIMTI5Ljc4NFpNMTIyLjk0MiAxMDIuNTIyTDExOC42NTQgMTEzLjM5MkgxMjcuMjU5TDEyMi45NDIgMTAyLjUyMloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTE0NC40MTMgMTIwLjA5MVYxMTguNDMxQzE0My4yMjkgMTE5Ljc1OCAxNDEuNTI0IDEyMC40NTMgMTM5LjU0OSAxMjAuNDUzQzEzNy4wODYgMTIwLjQ1MyAxMzQuNDQxIDExOC43OTMgMTM0LjQ0MSAxMTUuNjI0QzEzNC40NDEgMTEyLjQ1NSAxMzcuMDU3IDExMC44MjQgMTM5LjU0OSAxMTAuODI0QzE0MS41NTcgMTEwLjgyNCAxNDMuMjI5IDExMS40NTcgMTQ0LjQxMyAxMTIuNzg0VjExMC4xNThDMTQ0LjQxMyAxMDguMjI2IDE0Mi44MzIgMTA3LjEwOSAxNDAuNzA0IDEwNy4xMDlDMTM4Ljk0MSAxMDcuMTA5IDEzNy41MTIgMTA3LjcxMyAxMzYuMjA0IDEwOS4xMzFMMTM1LjE0IDEwNy41NjFDMTM2LjcyMiAxMDUuOTI5IDEzOC42MDUgMTA1LjE0NSAxNDEuMDEgMTA1LjE0NUMxNDQuMTQ0IDEwNS4xNDUgMTQ2LjY5OCAxMDYuNTM0IDE0Ni42OTggMTEwLjA2NFYxMjAuMDg4SDE0NC40MTdMMTQ0LjQxMyAxMjAuMDkxWk0xNDQuNDEzIDExNy4wMTNWMTE0LjIzNUMxNDMuNTMxIDExMy4wNTYgMTQxLjk3OSAxMTIuNDU1IDE0MC4zOTggMTEyLjQ1NUMxMzguMjM3IDExMi40NTUgMTM2Ljc0NyAxMTMuNzgzIDEzNi43NDcgMTE1LjYyNEMxMzYuNzQ3IDExNy40NjUgMTM4LjIzNyAxMTguODI1IDE0MC4zOTggMTE4LjgyNUMxNDEuOTc5IDExOC44MjUgMTQzLjUzMSAxMTguMjIxIDE0NC40MTMgMTE3LjAxM1oiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTIxNS45MiAwSDExMi41MDdWMTAuODUxOUgyMTUuOTJWMFoiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTIxNS45MiAyMC42OTA5SDExMi41MDdWMzEuNTQyOEgyMTUuOTJWMjAuNjkwOVoiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTE4MC42NTUgNDMuMzc1MkgxMTIuNTA3VjU0LjIyNzJIMTgwLjY1NVY0My4zNzUyWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNOTAuMzQzNyAxMjQuMTFIMFYxMjkuNTM2SDkwLjM0MzdWMTI0LjExWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNMjEuOTQ0OCAxMjEuMDI0VjEzMi42MjVDMjEuOTQ0OCAxMzUuMTA3IDI0LjEwOTEgMTM1LjkyIDI2LjczOTYgMTM1LjkyQzI5LjM3MDIgMTM1LjkyIDMxLjUzNDUgMTM1LjEwNyAzMS41MzQ1IDEzMi42MjVWMTIxLjAyNEMzMS41MzQ1IDExOC41NDMgMjkuMzcwMiAxMTcuNzI5IDI2LjczOTYgMTE3LjcyOUMyNC4xMDkxIDExNy43MjkgMjEuOTQ0OCAxMTguNTQzIDIxLjk0NDggMTIxLjAyNFoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTkwLjM0MzcgMTAyLjMwNUgwVjEwNy43MzFIOTAuMzQzN1YxMDIuMzA1WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNNjAuNTAzNyA5OS4yMTkyVjExMC44MkM2MC41MDM3IDExMy4zMDEgNjIuNjY3OSAxMTQuMTE1IDY1LjI5ODUgMTE0LjExNUM2Ny45MjkxIDExNC4xMTUgNzAuMDkzMyAxMTMuMzAxIDcwLjA5MzMgMTEwLjgyVjk5LjIxOTJDNzAuMDkzMyA5Ni43Mzc3IDY3LjkyOTEgOTUuOTIzOCA2NS4yOTg1IDk1LjkyMzhDNjIuNjY3OSA5NS45MjM4IDYwLjUwMzcgOTYuNzM3NyA2MC41MDM3IDk5LjIxOTJaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0xMTIuNzYyIDUwLjQ0NzFDMTA4LjQxNSA1MC40NDcxIDEwNC40NTEgNDYuOTY3MiAxMDMuNTgxIDQ3LjgzNTRDMTAyLjcxIDQ4LjY5OTkgMTA2LjIxMSA1Mi42MzU1IDEwNi4yMTEgNTYuOTUxQzEwNi4yMTEgNjEuMjY2NCAxMDIuNzA2IDY1LjIwMjEgMTAzLjU4MSA2Ni4wNjY2QzEwNC40NTUgNjYuOTMxMSAxMDguNDE1IDYzLjQ1NDkgMTEyLjc2MiA2My40NTQ5QzExNy4xMDkgNjMuNDU0OSAxMjEuMDczIDY2LjkzNDggMTIxLjk0NCA2Ni4wNjY2QzEyMi44MTQgNjUuMjAyMSAxMTkuMzEzIDYxLjI2NjQgMTE5LjMxMyA1Ni45NTFDMTE5LjMxMyA1Mi42MzU1IDEyMi44MTggNDguNjk5OSAxMjEuOTQ0IDQ3LjgzNTRDMTIxLjA2OSA0Ni45NzA4IDExNy4xMDkgNTAuNDQ3MSAxMTIuNzYyIDUwLjQ0NzFaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0xMjguNjAzIDcyLjM0M0MxMzAuMjIyIDcwLjczNTQgMTMwLjY5OSA2OC42MDMxIDEyOS42NjkgNjcuNTgwM0MxMjguNjM5IDY2LjU1NzUgMTI2LjQ5MSA2Ny4wMzE3IDEyNC44NzIgNjguNjM5MkMxMjMuMjUzIDcwLjI0NjggMTIyLjc3NSA3Mi4zNzkyIDEyMy44MDUgNzMuNDAxOUMxMjQuODM2IDc0LjQyNDcgMTI2Ljk4MyA3My45NTA2IDEyOC42MDMgNzIuMzQzWiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBkPSJNMTMzLjg2MSA3Ny41NjY3QzEzNC45NjggNzYuNDY3NiAxMzUuMjk1IDc1LjAwOTggMTM0LjU5IDc0LjMxMDZDMTMzLjg4NiA3My42MTEzIDEzMi40MTggNzMuOTM1NCAxMzEuMzExIDc1LjAzNDRDMTMwLjIwNCA3Ni4xMzM1IDEyOS44NzcgNzcuNTkxMyAxMzAuNTgxIDc4LjI5MDVDMTMxLjI4NiA3OC45ODk4IDEzMi43NTQgNzguNjY1NyAxMzMuODYxIDc3LjU2NjdaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik04OC45NDA5IDg5LjkyOThIMi44NDU0N0MxLjk1MjgyIDg5LjkyOTggMS4yMjQxMiA4OS4yMSAxLjIyNDEyIDg4LjMyMDFWMi44NDMxQzEuMjI0MTIgMS45NTY4NiAxLjk0OTE3IDEuMjMzNCAyLjg0NTQ3IDEuMjMzNEg4OC45NDA5Qzg5LjgzMzUgMS4yMzM0IDkwLjU2MjIgMS45NTMyNCA5MC41NjIyIDIuODQzMVY4OC4zMjAxQzkwLjU2MjIgODkuMjA2NCA4OS44MzcyIDg5LjkyOTggODguOTQwOSA4OS45Mjk4Wk0yLjg0NTQ3IDEuNTk1MTNDMi4xNTMyMSAxLjU5NTEzIDEuNTg4NDcgMi4xNTU4MSAxLjU4ODQ3IDIuODQzMVY4OC4zMjAxQzEuNTg4NDcgODkuMDA3NCAyLjE1MzIxIDg5LjU2ODEgMi44NDU0NyA4OS41NjgxSDg4Ljk0MDlDODkuNjMzMSA4OS41NjgxIDkwLjE5NzkgODkuMDA3NCA5MC4xOTc5IDg4LjMyMDFWMi44NDMxQzkwLjE5NzkgMi4xNTU4MSA4OS42MzMxIDEuNTk1MTMgODguOTQwOSAxLjU5NTEzSDIuODQ1NDdaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik05MS43ODI5IDEuNDI3MDNDOTEuNzgyOSAwLjYzODkwMiA5MS4xMzk0IDAgOTAuMzQ1NiAwQzg5LjU1MTcgMCA4OC45MDgyIDAuNjM4OTAyIDg4LjkwODIgMS40MjcwM0M4OC45MDgyIDIuMjE1MTUgODkuNTUxNyAyLjg1NDA2IDkwLjM0NTYgMi44NTQwNkM5MS4xMzk0IDIuODU0MDYgOTEuNzgyOSAyLjIxNTE1IDkxLjc4MjkgMS40MjcwM1oiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTIuODc0NyAxLjQyNzAzQzIuODc0NyAwLjYzODkwMiAyLjIzMTE4IDAgMS40MzczNSAwQzAuNjQzNTI0IDAgMCAwLjYzODkwMiAwIDEuNDI3MDNDMCAyLjIxNTE1IDAuNjQzNTI0IDIuODU0MDYgMS40MzczNSAyLjg1NDA2QzIuMjMxMTggMi44NTQwNiAyLjg3NDcgMi4yMTUxNSAyLjg3NDcgMS40MjcwM1oiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTkxLjc4MjkgODkuNzE0NkM5MS43ODI5IDg4LjkyNjUgOTEuMTM5NCA4OC4yODc2IDkwLjM0NTYgODguMjg3NkM4OS41NTE3IDg4LjI4NzYgODguOTA4MiA4OC45MjY1IDg4LjkwODIgODkuNzE0NkM4OC45MDgyIDkwLjUwMjcgODkuNTUxNyA5MS4xNDE3IDkwLjM0NTYgOTEuMTQxN0M5MS4xMzk0IDkxLjE0MTcgOTEuNzgyOSA5MC41MDI3IDkxLjc4MjkgODkuNzE0NloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTIuODc0NyA4OS43MTQ2QzIuODc0NyA4OC45MjY1IDIuMjMxMTggODguMjg3NiAxLjQzNzM1IDg4LjI4NzZDMC42NDM1MjQgODguMjg3NiAwIDg4LjkyNjUgMCA4OS43MTQ2QzAgOTAuNTAyNyAwLjY0MzUyNCA5MS4xNDE3IDEuNDM3MzUgOTEuMTQxN0MyLjIzMTE4IDkxLjE0MTcgMi44NzQ3IDkwLjUwMjcgMi44NzQ3IDg5LjcxNDZaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xNTAuOTk3IDEyOC41OUgxMDkuMzEyVjEyOS41MzZIMTUwLjk5N1YxMjguNTlaIiBmaWxsPSIjMjcxQjNEIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80ODI0XzI5NzQ2KSI+CjxwYXRoIGQ9Ik0zNC4wMjQxIDQuOTg0MTNDMjguNzUzOCA0Ljk4NDEzIDI0LjEzOTEgMTMuMDI0OSAyMS42Mjc2IDI1LjAxMkMyMC4wNjg4IDEzLjAyNDkgMTcuMjEwOSA0Ljk4NDEzIDEzLjkzMjQgNC45ODQxM0M4Ljk5NjA4IDQuOTg0MTMgNSAyMy4yODU1IDUgNDUuODUzOUM1IDY4LjQyMjMgOC45OTYwOCA4Ni43MjM3IDEzLjkzMjQgODYuNzIzN0MxNy4xOTg2IDg2LjcyMzcgMjAuMDU2NCA3OC42ODI5IDIxLjYxNTMgNjYuNjk1OEMyNC4xMjY3IDc4LjY4MjkgMjguNzQxNCA4Ni43MjM3IDM0LjAxMTggODYuNzIzN0MzOC43ODczIDg2LjcyMzcgNDMuMDE4NCA4MC4xMzgyIDQ1LjY0MTIgNzAuMDAwOUM0OS44MTA1IDgwLjEzODIgNTYuNTI4NCA4Ni43MjM3IDY0LjA5OTkgODYuNzIzN0M3Ni43NDM4IDg2LjcyMzcgODYuOTg3NiA2OC40MjIzIDg2Ljk4NzYgNDUuODUzOUM4Ni45ODc2IDIzLjI4NTUgNzYuNzU2MiA0Ljk4NDEzIDY0LjExMjIgNC45ODQxM0M1Ni41Mjg0IDQuOTg0MTMgNDkuODEwNSAxMS41Njk3IDQ1LjY1MzYgMjEuNzA2OUM0My4wMzA4IDExLjU2OTcgMzguNzk5NiA0Ljk4NDEzIDM0LjAyNDEgNC45ODQxM1oiIGZpbGw9IiNCRUEwRjIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80ODI0XzI5NzQ2Ij4KPHJlY3Qgd2lkdGg9IjgyIiBoZWlnaHQ9IjgxLjczOTYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IDQuOTg0MTMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
              alt: (0, T.__)('Designing the best look for your business', 'woocommerce'),
            }),
            progress: 42,
          },
          {
            title: (0, T.__)('Generating content', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEwIiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDIxMCAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDkuNzgiIGhlaWdodD0iMTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjExMDEwNykiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMDEuNTQzIDE4LjYzMDFWMTUuMTQxM0wxOTguNjU2IDE0Ljc2MzRDMTk4LjM5NSAxMy41NTEgMTk3LjkxOCAxMi40MjAxIDE5Ny4yNjcgMTEuNDE0MkwxOTkuMDM3IDkuMTA1NzdMMTk2LjU3MiA2LjY0MDM4TDE5NC4yNjQgOC40MTA5M0MxOTMuMjU4IDcuNzU2NzggMTkyLjEyNyA3LjI3OTk4IDE5MC45MTIgNy4wMjEyM0wxOTAuNTM3IDQuMTM0MjhIMTg3LjA0OUwxODYuNjcxIDcuMDIxMjNDMTg1LjQ1OSA3LjI3OTk4IDE4NC4zMjggNy43NTY3OCAxODMuMzIyIDguNDEwOTNMMTgxLjAxNCA2LjY0MDM4TDE3OC41NDkgOS4xMDU3N0wxODAuMzE5IDExLjQxNDJDMTc5LjY2NSAxMi40MjAxIDE3OS4xODggMTMuNTUxIDE3OC45MyAxNC43NjM0TDE3Ni4wNDMgMTUuMTQxM1YxOC42MzAxTDE3OC45MyAxOS4wMDgxQzE3OS4xODggMjAuMjIwNCAxNzkuNjY1IDIxLjM1MTQgMTgwLjMxOSAyMi4zNTczTDE3OC41NDkgMjQuNjY1N0wxODEuMDE0IDI3LjEzMTFMMTgzLjMyMiAyNS4zNjA1QzE4NC4zMjggMjYuMDE0NyAxODUuNDU5IDI2LjQ5MTUgMTg2LjY3MSAyNi43NTAyTDE4Ny4wNDkgMjkuNjM0M0gxOTAuNTM3TDE5MC45MTUgMjYuNzUwMkMxOTIuMTI3IDI2LjQ5MTUgMTkzLjI1OCAyNi4wMTQ3IDE5NC4yNjQgMjUuMzYwNUwxOTYuNTcyIDI3LjEzMTFMMTk5LjAzNyAyNC42NjU3TDE5Ny4yNjcgMjIuMzU3M0MxOTcuOTIxIDIxLjM1MTQgMTk4LjM5OCAyMC4yMjA0IDE5OC42NTYgMTkuMDA4MUwyMDEuNTQzIDE4LjYzMDFaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0yOS43NDQ2IDQuMTM0TDI5Ljc0NDYgNzAuMDk0SDM2LjU0NDZMMzYuNTQ0NiA0LjEzNEgyOS43NDQ2WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNMjcuNzIxNSA1My4xMjUxQzI5Ljg4NzMgNTMuMTI1MSAzMC41MzMzIDUxLjUyNzEgMzMuMTQxMSA1MS41MjcxQzM1Ljc0ODkgNTEuNTI3MSAzNi4zOTQ5IDUzLjEyNTEgMzguNTYwNyA1My4xMjUxQzQwLjg3OTUgNTMuMTI1MSA0MS42NDExIDUxLjEwNTUgNDEuNjQxMSA0OC42NTA3QzQxLjY0MTEgNDYuMTk1OSA0MC44Nzk1IDQ0LjE3NjMgMzguNTYwNyA0NC4xNzYzQzM2LjM5NDkgNDQuMTc2MyAzNS43NDg5IDQ1Ljc3NDMgMzMuMTQxMSA0NS43NzQzQzMwLjUzMzMgNDUuNzc0MyAyOS44ODczIDQ0LjE3NjMgMjcuNzIxNSA0NC4xNzYzQzI1LjQwMjcgNDQuMTc2MyAyNC42NDExIDQ2LjE5NTkgMjQuNjQxMSA0OC42NTA3QzI0LjY0MTEgNTEuMTA1NSAyNS40MDI3IDUzLjEyNTEgMjcuNzIxNSA1My4xMjUxWiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBkPSJNMTA2Ljg3IDEwMkg2Ni4wNzAzVjEwNS40SDEwNi44N1YxMDJaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xMjIuODUgMTA4LjhINjYuMDcwM1YxMTIuMkgxMjIuODVWMTA4LjhaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xMjMuOTI4IDEyMy40Mkg2Ni4xMjc5VjEzMS45MkgxMjMuOTI4VjEyMy40MloiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTk4LjAzMDMgMTE1LjZINjYuMDcwM1YxMTlIOTguMDMwM1YxMTUuNloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTIwNS44NjggODAuMzUyM1Y2NS45MzYzSDE4MS42OTFDMTgxLjY5MSA2NS45MzYzIDE4NC4yODUgNjAuNjM5MSAxODQuMjg1IDU0LjcxOTdDMTg0LjI4NSA0OC44MDAzIDE4MC40NiA0Mi44NDM1IDE3My4wODUgNDIuODQzNUMxNjUuNzExIDQyLjg0MzUgMTYxLjg4NiA0OC45OTA3IDE2MS44ODYgNTQuNzE5N0MxNjEuODg2IDYwLjQ0ODcgMTY0LjQ4IDY1LjkzNjMgMTY0LjQ4IDY1LjkzNjNIMTQ2LjgwM1Y3NS4wNjE5VjgwLjM1MjNDMTM3Ljk5NCA3NS4zNjc5IDEyNy42ODIgNzcuMDU0MyAxMjcuNjgyIDg3LjQwNzNDMTI3LjY4MiA5Ny43NjAzIDEzNy45OTQgOTkuNDQ2NyAxNDYuODAzIDk0LjQ2MjNWMTA4Ljg3OEgxNjQuNDhDMTY0LjQ4IDEwOC44NzggMTYxLjg4NiAxMTQuMTc2IDE2MS44ODYgMTIwLjA5NUMxNjEuODg2IDEyNi4wMTQgMTY1LjcxMSAxMzEuOTcxIDE3My4wODUgMTMxLjk3MUMxODAuNDYgMTMxLjk3MSAxODQuMjg1IDEyNS44MjQgMTg0LjI4NSAxMjAuMDk1QzE4NC4yODUgMTE0LjM2NiAxODEuNjkxIDEwOC44NzggMTgxLjY5MSAxMDguODc4SDIwNS44NjhWOTQuNDYyM0MxOTcuMDU5IDk5LjQ0NjcgMTg2Ljc0NiA5Ny43NjAzIDE4Ni43NDYgODcuNDA3M0MxODYuNzQ2IDc3LjA1NDMgMTk3LjA1OSA3NS4zNjc5IDIwNS44NjggODAuMzUyM1oiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTYxLjk5MDIgNzQuMTE5OUg0LjE5MDE5VjEzMS45Mkg2MS45OTAyVjc0LjExOTlaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0yMi40OTU3IDc4LjQzNzdDMjcuNzMxNyA4MC4yNzM3IDI5LjAwMzMgODYuNTE2MSAyOS4wMDMzIDg2LjUxNjFDMjkuMDAzMyA4Ni41MTYxIDMxLjc1MzkgODAuNzM2MSA0MC4xMjgxIDgwLjc1NjVDMzYuMjk2MyA5MC4wNTIxIDMxLjU4MzkgMTA5LjE4NCAzNC4xNDA3IDExNi4xNEMzNi43NDg1IDEyMy4yMjkgNDYuOTMxNSAxMjAuMzE2IDQ2LjcwNzEgMTI2LjkxMkgzMS44NzYzTDI3LjkzOTEgMTIyLjk3OEwyNy40MjkxIDEyMi45ODVMMjguMDQ0NSAxMjYuOTEySDIxLjg4MzdDMjAuMzk0NSAxMTguMjcyIDE2LjcxMjMgOTguNDUzNSAyMi40OTIzIDc4LjQzNzdIMjIuNDk1N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MC4wOTAxIDQuMTM0TDUwLjA5MDEgNzAuMDk0SDU2Ljg5MDFMNTYuODkwMSA0LjEzNEg1MC4wOTAxWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNNDguMDcwNiAzMS4xNzFDNTAuMjM2NCAzMS4xNzEgNTAuODgyNCAyOS41NzMgNTMuNDkwMiAyOS41NzNDNTYuMDk4IDI5LjU3MyA1Ni43NDQgMzEuMTcxIDU4LjkwOTggMzEuMTcxQzYxLjIyODYgMzEuMTcxIDYxLjk5MDIgMjkuMTUxNCA2MS45OTAyIDI2LjY5NjZDNjEuOTkwMiAyNC4yNDE4IDYxLjIyODYgMjIuMjIyMiA1OC45MDk4IDIyLjIyMjJDNTYuNzQ0IDIyLjIyMjIgNTYuMDk4IDIzLjgyMDIgNTMuNDkwMiAyMy44MjAyQzUwLjg4MjQgMjMuODIwMiA1MC4yMzY0IDIyLjIyMjIgNDguMDcwNiAyMi4yMjIyQzQ1Ljc1MTggMjIuMjIyMiA0NC45OTAyIDI0LjI0MTggNDQuOTkwMiAyNi42OTY2QzQ0Ljk5MDIgMjkuMTUxNCA0NS43NTE4IDMxLjE3MSA0OC4wNzA2IDMxLjE3MVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTg2LjU4MjIgNDMuMTc5NkM5Ny4zNzk0IDQzLjE3OTYgMTA2LjEzMiAzNC40MjY4IDEwNi4xMzIgMjMuNjI5NkMxMDYuMTMyIDEyLjgzMjQgOTcuMzc5NCA0LjA3OTU5IDg2LjU4MjIgNC4wNzk1OUM3NS43ODUxIDQuMDc5NTkgNjcuMDMyMiAxMi44MzI0IDY3LjAzMjIgMjMuNjI5NkM2Ny4wMzIyIDM0LjQyNjggNzUuNzg1MSA0My4xNzk2IDg2LjU4MjIgNDMuMTc5NloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTg2LjU4MjEgNDMuMTc5NUM5MS45Njc3IDQzLjE3OTUgOTYuODM5OSA0MS4wMDM1IDEwMC4zNzYgMzcuNDgxMUM5OC42MDExIDMwLjU3NTcgOTMuMDk5OSAyNS41NDAzIDg2LjU4MjEgMjUuNTQwM0M4MC4wNjQzIDI1LjU0MDMgNzQuNTYzMSAzMC41NzU3IDcyLjc4ODMgMzcuNDgxMUM3Ni4zMjQzIDQxLjAwMzUgODEuMTk5OSA0My4xNzk1IDg2LjU4MjEgNDMuMTc5NVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTg2LjU4MjIgMjMuMjg5NUM5MC40NjM2IDIzLjI4OTUgOTMuNjEgMjAuMTQzIDkzLjYxIDE2LjI2MTdDOTMuNjEgMTIuMzgwMyA5MC40NjM2IDkuMjMzODkgODYuNTgyMiA5LjIzMzg5QzgyLjcwMDkgOS4yMzM4OSA3OS41NTQ0IDEyLjM4MDMgNzkuNTU0NCAxNi4yNjE3Qzc5LjU1NDQgMjAuMTQzIDgyLjcwMDkgMjMuMjg5NSA4Ni41ODIyIDIzLjI4OTVaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0yNS4xMzA2IDg0LjU5MThDMzEuODg2NCA5NC41NzA4IDMxLjA3NzIgMTEzLjI1NyAyNi4yNTI2IDExMy40NDRDMjAuNzI3NiAxMTMuNjU4IDIzLjY0ODIgOTMuMzYwNCAzNC40NDMyIDg3LjE1ODgiIHN0cm9rZT0iIzI2MUIzQyIgc3Ryb2tlLXdpZHRoPSIwLjM0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTkuMzk1NTEgNC4xMzRMOS4zOTU1MSA3MC4wOTRIMTYuMTk1NUwxNi4xOTU1IDQuMTM0SDkuMzk1NTFaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik03LjM3NjA1IDQwLjk5MzVDOS41NDE4NSA0MC45OTM1IDEwLjE4NzkgMzkuMzk1NSAxMi43OTU3IDM5LjM5NTVDMTUuNDAzNSAzOS4zOTU1IDE2LjA0OTUgNDAuOTkzNSAxOC4yMTUzIDQwLjk5MzVDMjAuNTM0MSA0MC45OTM1IDIxLjI5NTcgMzguOTczOSAyMS4yOTU3IDM2LjUxOTFDMjEuMjk1NyAzNC4wNjQzIDIwLjUzNDEgMzIuMDQ0NyAxOC4yMTUzIDMyLjA0NDdDMTYuMDQ5NSAzMi4wNDQ3IDE1LjQwMzUgMzMuNjQyNyAxMi43OTU3IDMzLjY0MjdDMTAuMTg3OSAzMy42NDI3IDkuNTQxODUgMzIuMDQ0NyA3LjM3NjA1IDMyLjA0NDdDNS4wNTcyNSAzMi4wNDQ3IDQuMjk1NjUgMzQuMDY0MyA0LjI5NTY1IDM2LjUxOTFDNC4yOTU2NSAzOC45NzM5IDUuMDU3MjUgNDAuOTkzNSA3LjM3NjA1IDQwLjk5MzVaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0yMy4xMDQ0IDgwLjgzNUMxOS4xMjk4IDEwNS4wNyAyMS40MzE2IDExNy4yNDYgMjMuNTIyNiAxMjUuMjciIHN0cm9rZT0iIzI3MUIzRCIgc3Ryb2tlLXdpZHRoPSIwLjM0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTMxLjU4MzkgMTA2Ljk3OEMzMS41ODM5IDEwNi45NzggMjkuMjgyMSAxMTYuOTA5IDM3LjEzOTUgMTIyLjE4MyIgc3Ryb2tlPSIjMjcxQjNEIiBzdHJva2Utd2lkdGg9IjAuMzQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjA1LjI3OSAzMC42NDc3QzE5Ny4xMzYgMzcuOTYxMSAxNzcuNjg1IDM2LjcyNjkgMTcyLjE1IDI0LjE0MDEiIHN0cm9rZT0iIzI3MUIzRCIgc3Ryb2tlLXdpZHRoPSIwLjM0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTEzNS4xIDM3Ljc1NjlMMTUxLjUzMiA0My4zMTk1TDE2Ni40NTUgMzMuODMwNEwxNjguNjM0IDE2LjQyNzVMMTU2LjQyNiA0LjIxOTQ4TDEzOS4wMjcgNi4zOTg2NEwxMjkuNTM0IDIxLjMyMjJMMTM1LjEgMzcuNzU2OVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTE1Ny43MzYgMTUuMTIxOEwxMzkuODk3IDMyLjk1NjUiIHN0cm9rZT0iIzI3MUIzRCIgc3Ryb2tlLXdpZHRoPSIwLjM0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTExMi42NSA2NS45Nkg2Ni43NTAyVjc0LjEySDExMi42NVY2NS45NloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTExMi42NSA3NC4xMTk5SDY2Ljc1MDJWOTQuODU5OUgxMTIuNjVWNzQuMTE5OVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTcyLjA5ODUgNzEuNTQ5NEM3Mi45ODQ4IDcxLjU0OTQgNzMuNzAzMyA3MC44MzEgNzMuNzAzMyA2OS45NDQ2QzczLjcwMzMgNjkuMDU4MyA3Mi45ODQ4IDY4LjMzOTggNzIuMDk4NSA2OC4zMzk4QzcxLjIxMjEgNjguMzM5OCA3MC40OTM3IDY5LjA1ODMgNzAuNDkzNyA2OS45NDQ2QzcwLjQ5MzcgNzAuODMxIDcxLjIxMjEgNzEuNTQ5NCA3Mi4wOTg1IDcxLjU0OTRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzcuODI3MiA3MS41NDk0Qzc4LjcxMzUgNzEuNTQ5NCA3OS40MzIgNzAuODMxIDc5LjQzMiA2OS45NDQ2Qzc5LjQzMiA2OS4wNTgzIDc4LjcxMzUgNjguMzM5OCA3Ny44MjcyIDY4LjMzOThDNzYuOTQwOSA2OC4zMzk4IDc2LjIyMjQgNjkuMDU4MyA3Ni4yMjI0IDY5Ljk0NDZDNzYuMjIyNCA3MC44MzEgNzYuOTQwOSA3MS41NDk0IDc3LjgyNzIgNzEuNTQ5NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02Ny4wOTAxIDU3LjEyQzY3LjA5MDEgNTUuMjYwOSA2OC41MjQ5IDUzLjc0ODIgNzAuMzA5OSA1My43MkgxMzguMzRDMTQwLjE0NiA1My43MiAxNDEuNjExIDU1LjI0MzMgMTQxLjYxMSA1Ny4xMkMxNDEuNjExIDU4Ljk5NjcgMTQwLjE0NiA2MC41MiAxMzguMzQgNjAuNTJINzAuMzAzMUM2OC41MjQ5IDYwLjUyIDY3LjA5MDEgNTguOTc5IDY3LjA5MDEgNTcuMTJaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik03MC4zMDMxIDYwLjUySDEyMC4zNjFWNTMuNzJINzAuMzA5OUM2OC41MjgzIDUzLjc0ODIgNjcuMDkwMSA1NS4yNjA5IDY3LjA5MDEgNTcuMTJDNjcuMDkwMSA1OC45NzkgNjguNTIxNSA2MC41MiA3MC4zMDMxIDYwLjUyWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNMTg4Ljk1IDIxLjAxODlDMTkxLjQ2OCAyMS4wMTg5IDE5My41MDkgMTguOTc3NiAxOTMuNTA5IDE2LjQ1OTVDMTkzLjUwOSAxMy45NDE1IDE5MS40NjggMTEuOTAwMSAxODguOTUgMTEuOTAwMUMxODYuNDMxIDExLjkwMDEgMTg0LjM5IDEzLjk0MTUgMTg0LjM5IDE2LjQ1OTVDMTg0LjM5IDE4Ljk3NzYgMTg2LjQzMSAyMS4wMTg5IDE4OC45NSAyMS4wMTg5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==',
              alt: (0, T.__)('Generating content', 'woocommerce'),
            }),
            progress: 56,
          },
          {
            title: (0, T.__)('Assembling your AI-optimized store', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src: ge,
              alt: (0, T.__)('Assembling your AI-optimized store', 'woocommerce'),
            }),
            progress: 70,
          },
          {
            title: (0, T.__)('Applying the finishing touches', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDIxNiAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJGcmFtZSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ4MjRfMTQwNjApIj4KPGcgaWQ9IkxheWVyIDEiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTczLjY2NCAxMTEuMjQ1VjEwMy40NDFMMTY3LjE2OCAxMDIuNTk0QzE2Ni41NzcgOTkuODg2IDE2NS41MDYgOTcuMzU1OCAxNjQuMDQxIDk1LjEwNDNMMTY4LjAyNyA4OS45NDI2TDE2Mi40NzggODQuNDI5OEwxNTcuMjgyIDg4LjM4OThDMTU1LjAxNiA4Ni45Mjc0IDE1Mi40NzMgODUuODU5NiAxNDkuNzM2IDg1LjI4NEwxNDguODkxIDc4LjgzMDFIMTQxLjAzNUwxNDAuMTgzIDg1LjI4NEMxMzcuNDU3IDg1Ljg2MzIgMTM0LjkxIDg2LjkyNzQgMTMyLjY0NCA4OC4zODk4TDEyNy40NDggODQuNDI5OEwxMjEuODk5IDg5Ljk0MjZMMTI1Ljg4NSA5NS4xMDQzQzEyNC40MTMgOTcuMzU1OCAxMjMuMzM4IDk5Ljg4MjMgMTIyLjc1OSAxMDIuNTk0TDExNi4yNjIgMTAzLjQ0MVYxMTEuMjQ1TDEyMi43NTkgMTEyLjA5MkMxMjMuMzQyIDExNC43OTkgMTI0LjQxMyAxMTcuMzI5IDEyNS44ODUgMTE5LjU4MUwxMjEuODk5IDEyNC43NDNMMTI3LjQ0OCAxMzAuMjU1TDEzMi42NDQgMTI2LjI5NUMxMzQuOTEgMTI3Ljc1OCAxMzcuNDU0IDEyOC44MjYgMTQwLjE4MyAxMjkuNDAxTDE0MS4wMzUgMTM1Ljg1NUgxNDguODkxTDE0OS43NDQgMTI5LjQwMUMxNTIuNDY5IDEyOC44MjIgMTU1LjAxNiAxMjcuNzU4IDE1Ny4yODIgMTI2LjI5NUwxNjIuNDc4IDEzMC4yNTVMMTY4LjAyNyAxMjQuNzQzTDE2NC4wNDEgMTE5LjU4MUMxNjUuNTEzIDExNy4zMjkgMTY2LjU4OCAxMTQuODAzIDE2Ny4xNjggMTEyLjA5MkwxNzMuNjY0IDExMS4yNDVaTTE0NC45NjcgMTE1LjQ1NEMxNDAuMTIxIDExNS40NTQgMTM2LjE4OSAxMTEuNTQ5IDEzNi4xODkgMTA2LjczNEMxMzYuMTg5IDEwMS45MiAxNDAuMTIxIDk4LjAxNDYgMTQ0Ljk2NyA5OC4wMTQ2QzE0OS44MTMgOTguMDE0NiAxNTMuNzQ0IDEwMS45MiAxNTMuNzQ0IDEwNi43MzRDMTUzLjc0NCAxMTEuNTQ5IDE0OS44MTMgMTE1LjQ1NCAxNDQuOTY3IDExNS40NTRaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTAuMTQ5NDE0IDE4LjMzNzRIMTA5LjAwNFY2Mi43NDc3QzEwOS4wMDQgNjQuMzQ3NiAxMDcuNjk5IDY1LjY0MzUgMTA2LjA4OSA2NS42NDM1SDMuMDY0MzRDMS40NTM4NSA2NS42NDM1IDAuMTQ5NDE0IDY0LjM0NzYgMC4xNDk0MTQgNjIuNzQ3N1YxOC4zMzc0WiIgZmlsbD0iI0JFQTBGMiIvPgo8ZyBpZD0iR3JvdXAiPgo8cGF0aCBpZD0iVmVjdG9yXzMiIGQ9Ik0zLjA2NDM0IDBIMTA2LjA4OUMxMDcuNjk5IDAgMTA5LjAwNCAxLjI5NTg2IDEwOS4wMDQgMi44OTU3N1YxOC4zOTE4SDAuMTQ5NDE0VjIuODk1NzdDMC4xNDk0MTQgMS4yOTU4NiAxLjQ1Mzg1IDAgMy4wNjQzNCAwWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzQiIGQ9Ik03LjQ0NzcgMTEuMDMyN0M4LjU3MjU5IDExLjAzMjcgOS40ODQ1IDEwLjEyNjggOS40ODQ1IDkuMDA5MjZDOS40ODQ1IDcuODkxNzYgOC41NzI1OSA2Ljk4NTg0IDcuNDQ3NyA2Ljk4NTg0QzYuMzIyOCA2Ljk4NTg0IDUuNDEwODkgNy44OTE3NiA1LjQxMDg5IDkuMDA5MjZDNS40MTA4OSAxMC4xMjY4IDYuMzIyOCAxMS4wMzI3IDcuNDQ3NyAxMS4wMzI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IlZlY3Rvcl81IiBkPSJNMTQuNjIyIDExLjAzMjdDMTUuNzQ2OSAxMS4wMzI3IDE2LjY1ODggMTAuMTI2OCAxNi42NTg4IDkuMDA5MjZDMTYuNjU4OCA3Ljg5MTc2IDE1Ljc0NjkgNi45ODU4NCAxNC42MjIgNi45ODU4NEMxMy40OTcxIDYuOTg1ODQgMTIuNTg1MiA3Ljg5MTc2IDEyLjU4NTIgOS4wMDkyNkMxMi41ODUyIDEwLjEyNjggMTMuNDk3MSAxMS4wMzI3IDE0LjYyMiAxMS4wMzI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IlZlY3Rvcl82IiBkPSJNMjEuNzk2MyAxMS4wMzI3QzIyLjkyMTIgMTEuMDMyNyAyMy44MzMxIDEwLjEyNjggMjMuODMzMSA5LjAwOTI2QzIzLjgzMzEgNy44OTE3NiAyMi45MjEyIDYuOTg1ODQgMjEuNzk2MyA2Ljk4NTg0QzIwLjY3MTQgNi45ODU4NCAxOS43NTk1IDcuODkxNzYgMTkuNzU5NSA5LjAwOTI2QzE5Ljc1OTUgMTAuMTI2OCAyMC42NzE0IDExLjAzMjcgMjEuNzk2MyAxMS4wMzI3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8cGF0aCBpZD0iVmVjdG9yXzciIGQ9Ik05Ny4xOTExIDExOC4xNzNMMTA2Ljg3NiAxMTMuNTRMMTA5LjI2NiAxMDMuMTI5TDEwMi41NjUgOTQuNzgyMkg5MS44MTY3TDg1LjExNiAxMDMuMTI5TDg3LjUwNjIgMTEzLjU0TDk3LjE5MTEgMTE4LjE3M1oiIGZpbGw9IiNCRUEwRjIiLz4KPGcgaWQ9Ikdyb3VwXzIiPgo8ZyBpZD0iR3JvdXBfMyI+CjxwYXRoIGlkPSJWZWN0b3JfOCIgZD0iTTE5MS4zNTEgMEMxNzYuMjU5IDAgMTYyLjE5NCAzMC45NTIyIDE2OC4wODIgNTguMDI3N0MxNzIuMDY1IDc2LjMzMjYgMTgxLjUzOCA3NC4yNTEyIDE4MS41MzggODguOTE0N0gyMDEuMTc4QzIwMS4xNzggNzQuMjUxMiAyMTAuNjUxIDc2LjMzMjYgMjE0LjYzNCA1OC4wMjc3QzIyMC41MTggMzAuOTUyMiAyMDYuNDU0IDAgMTkxLjM1MSAwWiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBpZD0iVmVjdG9yXzkiIGQ9Ik0xNzkuODU1IDg4LjM1MDFWOTQuOTcwNkgxODIuNzNDMTgyLjczIDk5LjUyNDIgMTg2LjA3MSAxMDMuNjQgMTkxLjM1NCAxMDMuNjRDMTk2LjYzNyAxMDMuNjQgMTk5Ljk3OSA5OS41Mjc4IDE5OS45NzkgOTQuOTcwNkgyMDIuODU0Vjg4LjM1MDFIMTc5Ljg1NVoiIGZpbGw9IiMyNzFCM0QiLz4KPC9nPgo8cGF0aCBpZD0iVmVjdG9yXzEwIiBkPSJNMTk0LjAwMyA4OC44NjM5QzE5NC4wMDMgODAuNTYzOSAxOTIuOTc2IDcyLjA0NjcgMTkxLjM1NCA2NC4yODI0QzE4OS43MzYgNzIuMDQzIDE4OC43MDkgODAuNTYzOSAxODguNzA5IDg4Ljg2MzlIMTg3LjMxN0MxODcuMzE3IDc5LjY1MTcgMTg5LjAwOCA3MC4yMDQyIDE5MC44MyA2MS44MDY1QzE5MC4yOTggNTkuMzY2OCAxODkuNzU1IDU3LjAxMDQgMTg5LjI0MSA1NC43ODA2QzE4Ni43NzQgNDQuMDk4OCAxODQuODI1IDM1LjY2MTMgMTg3LjM1IDMyLjA4ODZDMTg4LjIxIDMwLjg2ODggMTg5LjU1OCAzMC4yNTM0IDE5MS4zNTggMzAuMjUzNEMxOTMuMTU4IDMwLjI1MzQgMTk0LjUwNiAzMC44Njg4IDE5NS4zNjYgMzIuMDg4NkMxOTcuODkxIDM1LjY2MTMgMTk1Ljk0MiA0NC4wOTUyIDE5My40NzkgNTQuNzgwNkMxOTIuOTYxIDU3LjAxMDQgMTkyLjQyMiA1OS4zNjMyIDE5MS44OSA2MS44MDY1QzE5My43MTIgNzAuMjA0MiAxOTUuNDAyIDc5LjY1MTcgMTk1LjQwMiA4OC44NjM5SDE5NC4wMDdIMTk0LjAwM1pNMTkxLjM1NCAzMi42MTM1QzE4OS44NjggMzIuNjEzNSAxODguODIyIDMzLjA2OTYgMTg4LjE1OSAzNC4wMTA3QzE4NS45NDMgMzcuMTQxNyAxODcuODM1IDQ0LjEyMDYgMTkwLjIzMiA1NC40OTgzQzE5MC41OTYgNTYuMDc2NSAxOTAuOTc1IDU3LjcxNjIgMTkxLjM1NCA1OS40MDNDMTkxLjczMyA1Ny43MTI2IDE5Mi4xMTIgNTYuMDc2NSAxOTIuNDc3IDU0LjQ5ODNDMTk0Ljg3NCA0NC4xMTY5IDE5Ni43NjUgMzcuMTQ1NCAxOTQuNTUgMzQuMDEwN0MxOTMuODg3IDMzLjA3MzIgMTkyLjg0MSAzMi42MTM1IDE5MS4zNTQgMzIuNjEzNVoiIGZpbGw9IiMyNzFCM0QiLz4KPC9nPgo8ZyBpZD0iR3JvdXBfNCI+CjxwYXRoIGlkPSJWZWN0b3JfMTEiIGQ9Ik00LjQzMDY5IDEzNkwwIDEzMS41OTlMNTYuMjQzNiA3Ny43NzM0TDU4LjYxMiA4MC4xMjYzTDQuNDMwNjkgMTM2WiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBpZD0iVmVjdG9yXzEyIiBkPSJNNDUuODQwOCA5My4zODE3TDU4LjYxMTkgODAuMTI2M0w1Ni4yNDM1IDc3Ljc3MzRMNDIuOTAwNCA5MC40NjA1TDQ1Ljg0MDggOTMuMzgxN1oiIGZpbGw9IiMyNzFCM0QiLz4KPC9nPgo8ZyBpZD0iR3JvdXBfNSI+CjxnIGlkPSJHcm91cF82Ij4KPHBhdGggaWQ9IlZlY3Rvcl8xMyIgZD0iTTU0LjY2NTggNDAuMjI5NUg1LjI5Nzg1VjQzLjg0OTJINTQuNjY1OFY0MC4yMjk1WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBpZD0iVmVjdG9yXzE0IiBkPSJNMzYuMjY5IDUwLjA5NjdINS4yOTc4NVY1My43MTY0SDM2LjI2OVY1MC4wOTY3WiIgZmlsbD0iIzI3MUIzRCIvPgo8L2c+CjxwYXRoIGlkPSJWZWN0b3JfMTUiIGQ9Ik01NC42NjU4IDMwLjM2MjNINS4yOTc4NVYzMy45ODJINTQuNjY1OFYzMC4zNjIzWiIgZmlsbD0iIzI3MUIzRCIvPgo8L2c+CjwvZz4KPGcgaWQ9IkxheWVyIDQiPgo8ZyBpZD0iR3JvdXBfNyI+CjxwYXRoIGlkPSJWZWN0b3JfMTYiIGQ9Ik02MS45ODYgNjUuNTI0MUM1OC45MTA4IDY4LjU3OTIgNTMuNjMxMSA2OC45MDEzIDUzLjYzMTEgNzAuMTI0OEM1My42MzExIDcxLjM0ODMgNTguOTEwOCA3MS42NzA0IDYxLjk4NiA3NC43MjU1QzY1LjA2MTMgNzcuNzgwNSA2NS4zODU2IDgzLjAyNTUgNjYuNjE3MSA4My4wMjU1QzY3Ljg0ODcgODMuMDI1NSA2OC4xNzMgNzcuNzgwNSA3MS4yNDgyIDc0LjcyNTVDNzQuMzIzNSA3MS42NzA0IDc5LjYwMzEgNzEuMzQ4MyA3OS42MDMxIDcwLjEyNDhDNzkuNjAzMSA2OC45MDEzIDc0LjMyMzUgNjguNTc5MiA3MS4yNDgyIDY1LjUyNDFDNjguMTczIDYyLjQ2OTEgNjcuODQ4NyA1Ny4yMjQxIDY2LjYxNzEgNTcuMjI0MUM2NS4zODU2IDU3LjIyNDEgNjUuMDYxMyA2Mi40NjkxIDYxLjk4NiA2NS41MjQxWiIgZmlsbD0iIzI3MUIzRCIvPgo8ZyBpZD0iR3JvdXBfOCI+CjxwYXRoIGlkPSJWZWN0b3JfMTciIGQ9Ik04MS4yMTIzIDg0LjYyMDZDODIuODMxNiA4My4wMTE5IDgzLjMwOTEgODAuODc4MiA4Mi4yNzg5IDc5Ljg1NDhDODEuMjQ4NyA3OC44MzEzIDc5LjEwMDkgNzkuMzA1NyA3Ny40ODE2IDgwLjkxNDRDNzUuODYyMyA4Mi41MjMxIDc1LjM4NDcgODQuNjU2OCA3Ni40MTQ5IDg1LjY4MDJDNzcuNDQ1MSA4Ni43MDM3IDc5LjU5MyA4Ni4yMjkzIDgxLjIxMjMgODQuNjIwNloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xOCIgZD0iTTg2LjQ3MTIgODkuODQ3M0M4Ny41NzgyIDg4Ljc0NzUgODcuOTA0NyA4Ny4yODg4IDg3LjIwMDMgODYuNTg5Qzg2LjQ5NiA4NS44ODkzIDg1LjAyNzYgODYuMjEzNiA4My45MjA1IDg3LjMxMzRDODIuODEzNSA4OC40MTMxIDgyLjQ4NyA4OS44NzE5IDgzLjE5MTQgOTAuNTcxN0M4My44OTU3IDkxLjI3MTQgODUuMzY0MiA5MC45NDcxIDg2LjQ3MTIgODkuODQ3M1oiIGZpbGw9IiMyNzFCM0QiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80ODI0XzE0MDYwIj4KPHJlY3Qgd2lkdGg9IjIxNiIgaGVpZ2h0PSIxMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
              alt: (0, T.__)('Applying the finishing touches', 'woocommerce'),
            }),
            progress: 84,
          },
          {
            title: (0, T.__)('Opening the doors', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src: ue,
              alt: (0, T.__)('Opening the doors', 'woocommerce'),
            }),
            progress: 100,
          },
        ],
        de = () => {
          const e = (0, u.getPersistedQuery)(),
            t = (0, u.getNewPath)(e, '/customize-store/assembler-hub', {}),
            o = (0, s.useRef)(null),
            [r, n] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              const r = o.current;
              null !== r &&
                window.addEventListener(
                  'popstate',
                  () => {
                    const o = (0, u.getNewPath)(
                      e,
                      '/customize-store/design-with-ai/api-call-loader',
                      {},
                    );
                    'admin.php' + window.location.search === o &&
                      (r.contentWindow?.postMessage({ type: 'assemberBackButtonClicked' }, '*'),
                      window.history?.pushState({}, '', t));
                  },
                  !1,
                );
            }, [t, o, e]),
            (0, s.createElement)('iframe', {
              ref: o,
              onLoad: e => {
                const o = () => n(!0);
                (0, L.cK)(e.currentTarget),
                  (0, L.sr)(o),
                  setTimeout(o, 6e4),
                  window.parent.history?.pushState({}, '', t);
              },
              style: { opacity: r ? 1 : 0 },
              src: t,
              title: 'assembler-hub',
              className: 'cys-fullscreen-iframe',
            })
          );
        };
      var ye = o(25094);
      const pe = (0, x.assign)({ startLoadingTime: () => performance.now() }),
        Ne = (0, x.assign)({ businessInfoDescription: (e, t) => ({ descriptionText: t.payload }) }),
        Ie = (0, x.assign)({ lookAndFeel: (e, t) => ({ ...e.lookAndFeel, choice: t.payload }) }),
        De = (0, x.assign)({ toneOfVoice: (e, t) => ({ ...e.toneOfVoice, choice: t.payload }) }),
        Te = (0, x.assign)({
          lookAndFeel: (e, t) => ({ choice: t.data.look, aiRecommended: t.data.look }),
          toneOfVoice: (e, t) => ({ choice: t.data.tone, aiRecommended: t.data.tone }),
        }),
        Ee = (0, x.assign)({
          aiSuggestions: (e, t) => ({ ...e.aiSuggestions, defaultColorPalette: t.data.response }),
        }),
        we = (0, x.assign)({
          aiSuggestions: e => {
            let t = e.aiSuggestions.fontPairing;
            const o = e.lookAndFeel.choice;
            switch (!0) {
              case 'Contemporary' === o:
                t = 'Inter + Inter';
                break;
              case 'Classic' === o:
                t = 'Bodoni Moda + Overpass';
                break;
              case 'Bold' === o:
                t = 'Rubik + Inter';
            }
            return { ...e.aiSuggestions, fontPairing: t };
          },
        }),
        je = (0, x.assign)({
          aiSuggestions: (e, t) => ({ ...e.aiSuggestions, header: t.data.response.slug }),
        }),
        ze = (0, x.assign)({
          aiSuggestions: (e, t) => ({ ...e.aiSuggestions, footer: t.data.response.slug }),
        }),
        ke = (0, x.assign)({
          aiSuggestions: (e, t) => ({
            ...e.aiSuggestions,
            homepageTemplate: t.data.response.homepage_template,
          }),
        }),
        he = (0, x.assign)({
          spawnSaveDescriptionToOptionRef: e =>
            (0, ye.Cs)(() => {
              return (
                (t = e.businessInfoDescription.descriptionText),
                (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
                  woo_ai_describe_store_description: t,
                })
              );
              var t;
            }, 'update-woo-ai-business-description-option'),
        }),
        fe = {
          assignStartLoadingTime: pe,
          assignBusinessInfoDescription: Ne,
          assignLookAndFeel: Ie,
          assignToneOfVoice: De,
          assignLookAndTone: Te,
          assignDefaultColorPalette: Ee,
          assignFontPairing: we,
          assignHeader: je,
          assignFooter: ze,
          assignHomepageTemplate: ke,
          assignAPICallLoaderError: (0, x.assign)({
            apiCallLoader: () => (
              (0, O.L)('customize_your_store_ai_wizard_error'), { hasErrors: !0 }
            ),
          }),
          logAIAPIRequestError: () => {
            console.log('API Request error');
          },
          updateQueryStep: (e, t, { action: o }) => {
            const { path: r } = (0, u.getQuery)(),
              n = o.step,
              a = r.split('/');
            'customize-store' === a[1] &&
              'design-with-ai' === a[2] &&
              a[3] !== n &&
              (0, u.updateQueryString)({}, `/customize-store/design-with-ai/${n}`);
          },
          recordTracksStepViewed: (e, t, { action: o }) => {
            const { step: r } = o;
            (0, O.L)('customize_your_store_ai_wizard_step_view', { step: r });
          },
          recordTracksStepClosed: (e, t) => {
            const { step: o } = t.payload;
            (0, O.L)('customize_your_store_ai_wizard_step_close', { step: o.replaceAll('-', '_') });
          },
          recordTracksStepCompleted: (e, t, { action: o }) => {
            const { step: r } = o;
            (0, O.L)('customize_your_store_ai_wizard_step_complete', { step: r });
          },
          spawnSaveDescriptionToOption: he,
          redirectToAssemblerHub: async () => {
            window.parent.__wcCustomizeStore.activeThemeHasMods = !0;
          },
        };
      var Ae = o(95146);
      const _e = (e, t, o) => Object.assign(new Error(e), { code: t, cause: o }),
        xe = o.n(Ae)()('jetpack-ai-assistant:token'),
        Le = 'jetpack-ai-jwt-token';
      var Oe = o(55954),
        Se = o(15147);
      const be = {
          inter: {
            fontFamily: 'Inter',
            fontWeights: ['400', '500', '600'],
            fontStyles: ['normal'],
          },
          'bodoni-moda': {
            fontFamily: 'Bodoni Moda',
            fontWeights: ['400'],
            fontStyles: ['normal'],
          },
          overpass: { fontFamily: 'Overpass', fontWeights: ['300', '400'], fontStyles: ['normal'] },
          'albert-sans': {
            fontFamily: 'Albert Sans',
            fontWeights: ['700'],
            fontStyles: ['normal'],
          },
          lora: { fontFamily: 'Lora', fontWeights: ['400'], fontStyles: ['normal'] },
          montserrat: {
            fontFamily: 'Montserrat',
            fontWeights: ['500', '700'],
            fontStyles: ['normal'],
          },
          arvo: { fontFamily: 'Arvo', fontWeights: ['400'], fontStyles: ['normal'] },
          rubik: { fontFamily: 'Rubik', fontWeights: ['400', '800'], fontStyles: ['normal'] },
          newsreader: { fontFamily: 'Newsreader', fontWeights: ['400'], fontStyles: ['normal'] },
          cormorant: {
            fontFamily: 'Cormorant',
            fontWeights: ['400', '500'],
            fontStyles: ['normal'],
          },
          'work-sans': { fontFamily: 'Work Sans', fontWeights: ['400'], fontStyles: ['normal'] },
          raleway: { fontFamily: 'Raleway', fontWeights: ['700'], fontStyles: ['normal'] },
        },
        Ce = [
          {
            title: 'Inter + Inter',
            version: 2,
            lookAndFeel: ['Contemporary', 'Bold'],
            settings: {
              typography: { fontFamilies: { theme: [{ fontFamily: 'Inter', slug: 'inter' }] } },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--inter)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--inter)',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '1.2',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--inter)',
                    fontSize: 'var(--wp--preset--font-size--medium)',
                    fontStyle: 'normal',
                  },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--inter)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--inter)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Bodoni Moda + Overpass',
            version: 2,
            lookAndFeel: ['Classic'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Bodoni Moda', slug: 'bodoni-moda' },
                    { fontFamily: 'Overpass', slug: 'overpass' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--overpass)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--bodoni-moda)',
                    fontStyle: 'normal',
                    fontWeight: '400',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--bodoni-moda)' },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--bodoni-moda)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--overpass)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                fontStyle: 'normal',
                fontWeight: '300',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Albert Sans + Lora',
            version: 2,
            lookAndFeel: ['Contemporary', 'Bold'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Albert Sans', slug: 'albert-sans' },
                    { fontFamily: 'Lora', slug: 'lora' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--albert-sans)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--albert-sans)',
                    fontSize: 'var(--wp--preset--font-size--medium)',
                  },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--lora)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.67',
              },
            },
          },
          {
            title: 'Montserrat + Arvo',
            version: 2,
            lookAndFeel: ['Contemporary', 'Bold'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Montserrat', slug: 'montserrat' },
                    { fontFamily: 'Arvo', slug: 'arvo' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--arvo)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--montserrat)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '1.4',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--montserrat)',
                    fontWeight: '700',
                  },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--montserrat)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--arvo)',
                fontSize: 'var(--wp--preset--font-size--small)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Rubik + Inter',
            version: 2,
            lookAndFeel: ['Bold'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Rubik', slug: 'rubik' },
                    { fontFamily: 'Inter', slug: 'inter' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--inter)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--rubik)',
                    fontStyle: 'normal',
                    fontWeight: '800',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--rubik)',
                    fontWeight: '800',
                  },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--rubik)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--inter)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Newsreader + Newsreader',
            version: 2,
            lookAndFeel: ['Classic'],
            settings: {
              typography: {
                fontFamilies: { theme: [{ fontFamily: 'Newsreader', slug: 'newsreader' }] },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--newsreader)',
                    fontStyle: 'normal',
                    fontWeight: '400',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--newsreader)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--newsreader)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                lineHeight: '1.67',
              },
            },
          },
          {
            title: 'Cormorant + Work Sans',
            version: 2,
            lookAndFeel: [],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Cormorant', slug: 'cormorant' },
                    { fontFamily: 'Work Sans', slug: 'work-sans' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--cormorant)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--cormorant)' },
                },
              },
              typography: { fontFamily: 'var(--wp--preset--font-family--work-sans)' },
            },
          },
          {
            title: 'Raleway + Cormorant',
            version: 2,
            lookAndFeel: ['Classic', 'Bold'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Raleway', slug: 'raleway' },
                    { fontFamily: 'Cormorant', slug: 'cormorant' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--raleway)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--raleway)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--cormorant)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                lineHeight: '1.67',
              },
            },
          },
        ],
        ve = [
          {
            title: 'Cardo Font + System Sans-serif',
            version: 2,
            lookAndFeel: [],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Cardo', slug: 'heading' },
                    { fontFamily: 'System Sans-serif', slug: 'system-sans-serif' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--heading)',
                    fontStyle: 'normal',
                    fontWeight: '300',
                  },
                },
              },
              typography: { fontFamily: 'var(--wp--preset--font-family--system-sans-serif)' },
            },
          },
          {
            title: 'Inter + Cardo Font',
            version: 2,
            lookAndFeel: [],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Inter', slug: 'body' },
                    { fontFamily: 'Cardo', slug: 'heading' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--body)',
                    fontStyle: 'normal',
                    fontWeight: '300',
                  },
                },
              },
              typography: { fontFamily: 'var(--wp--preset--font-family--heading)' },
            },
          },
        ],
        Qe = [
          {
            title: 'Commissioner + Crimson Pro',
            version: 2,
            lookAndFeel: ['Contemporary'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Commissioner', slug: 'commissioner' },
                    { fontFamily: 'Crimson Pro', slug: 'crimson-pro' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--crimson-pro)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--commissioner)',
                    fontStyle: 'normal',
                    fontWeight: '300',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--commissioner)',
                    fontWeight: '300',
                  },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--commissioner)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--crimson-pro)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'DM Sans + IBM Plex Mono',
            version: 2,
            lookAndFeel: [],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'DM Sans', slug: 'dm-sans' },
                    { fontFamily: 'IBM Plex Mono', slug: 'ibm-plex-mono' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--dm-sans)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                  },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--ibm-plex-mono)',
                fontSize: 'var(--wp--preset--font-size--small)',
                fontStyle: 'normal',
                fontWeight: '300',
                lineHeight: '1.67',
              },
            },
          },
          {
            title: 'Fraunces + Libre Franklin',
            version: 2,
            lookAndFeel: ['Classic'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Fraunces', slug: 'fraunces' },
                    { fontFamily: 'Libre Franklin', slug: 'libre-franklin' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--fraunces)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--libre-franklin)',
                lineHeight: '1.67',
              },
            },
          },
          {
            title: 'Libre Baskerville + DM Sans',
            version: 2,
            lookAndFeel: [],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Libre Baskerville', slug: 'libre-baskerville' },
                    { fontFamily: 'DM Sans', slug: 'dm-sans' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--dm-sans)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--libre-baskerville)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--libre-baskerville)' },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--libre-baskerville)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--dm-sans)',
                fontSize: 'var(--wp--preset--font-size--small)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Playfair Display + Fira Sans',
            version: 2,
            lookAndFeel: ['Classic'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Playfair Display', slug: 'playfair-display' },
                    { fontFamily: 'Fira Sans', slug: 'fira-sans' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--fira-sans)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--playfair-display)',
                    fontStyle: 'italic',
                    fontWeight: '400',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--playfair-display)',
                    fontStyle: 'italic',
                    fontWeight: '400',
                  },
                },
                'core/post-navigation-link': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--playfair-display)',
                    fontStyle: 'italic',
                    fontWeight: '400',
                  },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--fira-sans)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Libre Franklin + EB Garamond',
            version: 2,
            lookAndFeel: ['Classic'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Libre Franklin', slug: 'libre-franklin' },
                    { fontFamily: 'EB Garamond', slug: 'eb-garamond' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--libre-franklin)',
                    fontSize: 'var(--wp--preset--font-size--small)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--libre-franklin)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--libre-franklin)',
                    fontWeight: '500',
                  },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--libre-franklin)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--eb-garamond)',
                fontSize: 'var(--wp--preset--font-size--medium)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          {
            title: 'Plus Jakarta Sans + Plus Jakarta Sans',
            version: 2,
            lookAndFeel: ['Contemporary', 'Bold'],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [{ fontFamily: 'Plus Jakarta Sans', slug: 'plus-jakarta-sans' }],
                },
              },
            },
            styles: {
              elements: {
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--plus-jakarta-sans)',
                    fontStyle: 'normal',
                    fontWeight: '700',
                  },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--plus-jakarta-sans)',
                lineHeight: '1.67',
              },
            },
          },
          {
            title: 'Rubik + Rubik',
            version: 2,
            lookAndFeel: ['Contemporary'],
            settings: {
              typography: { fontFamilies: { theme: [{ fontFamily: 'Rubik', slug: 'rubik' }] } },
            },
            styles: {
              elements: {
                heading: { typography: { fontFamily: 'var(--wp--preset--font-family--rubik)' } },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--rubik)',
                fontWeight: '400',
                lineHeight: '1.67',
              },
            },
          },
          {
            title: 'Space Mono + Roboto',
            version: 2,
            lookAndFeel: [],
            settings: {
              typography: {
                fontFamilies: {
                  theme: [
                    { fontFamily: 'Space Mono', slug: 'space-mono' },
                    { fontFamily: 'Roboto', slug: 'roboto' },
                  ],
                },
              },
            },
            styles: {
              elements: {
                button: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--roboto)',
                    fontWeight: '400',
                    lineHeight: '1',
                  },
                },
                heading: {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--space-mono)',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '1.15',
                  },
                },
              },
              blocks: {
                'core/site-title': {
                  typography: {
                    fontFamily: 'var(--wp--preset--font-family--space-mono)',
                    fontStyle: 'normal',
                    fontWeight: '400',
                  },
                },
                'core/post-navigation-link': {
                  typography: { fontFamily: 'var(--wp--preset--font-family--space-mono)' },
                },
              },
              typography: {
                fontFamily: 'var(--wp--preset--font-family--roboto)',
                fontSize: 'var(--wp--preset--font-size--small)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.6',
              },
            },
          },
          ...Ce,
          ...ve,
        ],
        Ue = [
          {
            title: 'New - Neutral',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#000000', name: 'Primary', slug: 'primary' },
                    { color: '#636363', name: 'Secondary', slug: 'secondary' },
                    { color: '#000000', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#ffffff', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              blocks: { 'core/button': {} },
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--primary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                  ':hover': {
                    color: {
                      background: 'var(--wp--preset--color--secondary)',
                      text: 'var(--wp--preset--color--background)',
                    },
                  },
                },
                link: { color: { text: 'var(--wp--preset--color--foreground)' } },
              },
            },
          },
          {
            title: 'Ancient Bronze',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#323856', name: 'Primary', slug: 'primary' },
                    { color: '#8C8369', name: 'Secondary', slug: 'secondary' },
                    { color: '#323856', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#F7F2EE', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Arctic Dawn',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#1E226F', name: 'Primary', slug: 'primary' },
                    { color: '#DD301D', name: 'Secondary', slug: 'secondary' },
                    { color: '#0D1263', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#F0F1F5', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Bronze Serenity',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#1e4b4b', name: 'Primary', slug: 'primary' },
                    { color: '#9e7047', name: 'Secondary', slug: 'secondary' },
                    { color: '#1e4b4b', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#e9eded', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Purple Twilight',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#301834', name: 'Primary', slug: 'primary' },
                    { color: '#6a5eb7', name: 'Secondary', slug: 'secondary' },
                    { color: '#090909', name: 'Foreground', slug: 'foreground' },
                    { color: '#fefbff', name: 'Background', slug: 'background' },
                    { color: '#f3eaf5', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Candy Store',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#293852', name: 'Primary', slug: 'primary' },
                    { color: '#f1bea7', name: 'Secondary', slug: 'secondary' },
                    { color: '#293852', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#fffddb', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              blocks: {
                'core/button': {
                  color: { background: 'var(--wp--preset--color--secondary)' },
                  variations: {
                    outline: {
                      border: { color: 'var(--wp--preset--color--secondary)' },
                      color: { text: 'var(--wp--preset--color--primary)' },
                    },
                  },
                },
              },
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--primary)',
                  },
                },
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Midnight Citrus',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#222222', name: 'Primary', slug: 'primary' },
                    { color: '#c0f500', name: 'Secondary', slug: 'secondary' },
                    { color: '#222222', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#f7faed', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              blocks: {
                'core/button': {
                  color: { background: 'var(--wp--preset--color--secondary)' },
                  variations: {
                    outline: {
                      border: { color: 'var(--wp--preset--color--secondary)' },
                      color: { text: 'var(--wp--preset--color--primary)' },
                    },
                  },
                },
              },
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  ':hover': {
                    color: {
                      background: 'var(--wp--preset--color--secondary)',
                      text: 'var(--wp--preset--color--primary)',
                    },
                  },
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--primary)',
                  },
                },
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Crimson Tide',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#101317', name: 'Primary', slug: 'primary' },
                    { color: '#EC5E3F', name: 'Secondary', slug: 'secondary' },
                    { color: '#101317', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#EEEEEE', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Neutral',
          },
          {
            title: 'Raspberry Chocolate',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#42332e', name: 'Primary', slug: 'primary' },
                    { color: '#d64d68', name: 'Secondary', slug: 'secondary' },
                    { color: '#241d1a', name: 'Foreground', slug: 'foreground' },
                    { color: '#eeeae6', name: 'Background', slug: 'background' },
                    { color: '#D6CCC2', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Gumtree Sunset',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#8699A1', name: 'Primary', slug: 'primary' },
                    { color: '#BB6154', name: 'Secondary', slug: 'secondary' },
                    { color: '#476C77', name: 'Foreground', slug: 'foreground' },
                    { color: '#F4F7F7', name: 'Background', slug: 'background' },
                    { color: '#ffffff', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Fuchsia',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#b7127f', name: 'Primary', slug: 'primary' },
                    { color: '#18020C', name: 'Secondary', slug: 'secondary' },
                    { color: '#b7127f', name: 'Foreground', slug: 'foreground' },
                    { color: '#f7edf6', name: 'Background', slug: 'background' },
                    { color: '#ffffff', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Cinder',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#c14420', name: 'Primary', slug: 'primary' },
                    { color: '#2F2D2D', name: 'Secondary', slug: 'secondary' },
                    { color: '#c14420', name: 'Foreground', slug: 'foreground' },
                    { color: '#f1f2f2', name: 'Background', slug: 'background' },
                    { color: '#DCDCDC', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Canary',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#0F0F05', name: 'Primary', slug: 'primary' },
                    { color: '#666666', name: 'Secondary', slug: 'secondary' },
                    { color: '#0F0F05', name: 'Foreground', slug: 'foreground' },
                    { color: '#FCFF9B', name: 'Background', slug: 'background' },
                    { color: '#E8EB8C', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Blue Lagoon',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#004DE5', name: 'Primary', slug: 'primary' },
                    { color: '#0496FF', name: 'Secondary', slug: 'secondary' },
                    { color: '#0036A3', name: 'Foreground', slug: 'foreground' },
                    { color: '#FEFDF8', name: 'Background', slug: 'background' },
                    { color: '#DEF2F7', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Vibrant Berry',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { slug: 'primary', color: '#7C1D6F', name: 'Primary' },
                    { slug: 'secondary', color: '#C62FB2', name: 'Secondary' },
                    { slug: 'foreground', color: '#7C1D6F', name: 'Foreground' },
                    { slug: 'background', color: '#FFEED6', name: 'Background' },
                    { slug: 'tertiary', color: '#FDD8DE', name: 'Tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Bright',
          },
          {
            title: 'Aquamarine Night',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#deffef', name: 'Primary', slug: 'primary' },
                    { color: '#56fbb9', name: 'Secondary', slug: 'secondary' },
                    { color: '#ffffff', name: 'Foreground', slug: 'foreground' },
                    { color: '#091C48', name: 'Background', slug: 'background' },
                    { color: '#10317F', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Evergreen Twilight',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#ffffff', name: 'Primary', slug: 'primary' },
                    { color: '#8EE978', name: 'Secondary', slug: 'secondary' },
                    { color: '#ffffff', name: 'Foreground', slug: 'foreground' },
                    { color: '#181818', name: 'Background', slug: 'background' },
                    { color: '#636363', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Cinnamon Latte',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { slug: 'primary', color: '#D9CAB3', name: 'Primary' },
                    { slug: 'secondary', color: '#BC8034', name: 'Secondary' },
                    { slug: 'foreground', color: '#FFFFFF', name: 'Foreground' },
                    { slug: 'background', color: '#3C3F4D', name: 'Background' },
                    { slug: 'tertiary', color: '#2B2D36', name: 'Tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Lightning',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#ebffd2', name: 'Primary', slug: 'primary' },
                    { color: '#fefefe', name: 'Secondary', slug: 'secondary' },
                    { color: '#ebffd2', name: 'Foreground', slug: 'foreground' },
                    { color: '#0e1fb5', name: 'Background', slug: 'background' },
                    { color: '#0A1680', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Lilac Nightshade',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#f5d6ff', name: 'Primary', slug: 'primary' },
                    { color: '#C48DDA', name: 'Secondary', slug: 'secondary' },
                    { color: '#ffffff', name: 'Foreground', slug: 'foreground' },
                    { color: '#000000', name: 'Background', slug: 'background' },
                    { color: '#462749', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Charcoal',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#dbdbdb', name: 'Primary', slug: 'primary' },
                    { color: '#efefef', name: 'Secondary', slug: 'secondary' },
                    { color: '#dbdbdb', name: 'Foreground', slug: 'foreground' },
                    { color: '#1e1e1e', name: 'Background', slug: 'background' },
                    { color: '#000000', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Rustic Rosewood',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#F4F4F2', name: 'Primary', slug: 'primary' },
                    { color: '#EE797C', name: 'Secondary', slug: 'secondary' },
                    { color: '#ffffff', name: 'Foreground', slug: 'foreground' },
                    { color: '#1A1A1A', name: 'Background', slug: 'background' },
                    { color: '#3B3939', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Sandalwood Oasis',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#F0EBE3', name: 'Primary', slug: 'primary' },
                    { color: '#DF9785', name: 'Secondary', slug: 'secondary' },
                    { color: '#ffffff', name: 'Foreground', slug: 'foreground' },
                    { color: '#2a2a16', name: 'Background', slug: 'background' },
                    { color: '#434323', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Slate',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { slug: 'primary', color: '#FFFFFF', name: 'Primary' },
                    { slug: 'secondary', color: '#FFDF6D', name: 'Secondary' },
                    { slug: 'foreground', color: '#EFF2F9', name: 'Foreground' },
                    { slug: 'background', color: '#13161E', name: 'Background' },
                    { slug: 'tertiary', color: '#303036', name: 'Tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
            wpcom_category: 'Dark',
          },
          {
            title: 'Blueberry Sorbet',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#2038B6', name: 'Primary', slug: 'primary' },
                    { color: '#BD4089', name: 'Secondary', slug: 'secondary' },
                    { color: '#2038B6', name: 'Foreground', slug: 'foreground' },
                    { color: '#FDFBEF', name: 'Background', slug: 'background' },
                    { color: '#F8F2E2', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
              },
            },
          },
          {
            title: 'Green Thumb',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#164A41', name: 'Primary', slug: 'primary' },
                    { color: '#4B7B4D', name: 'Secondary', slug: 'secondary' },
                    { color: '#164A41', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#CEEAC4', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
                link: {
                  color: { text: 'var(--wp--preset--color--secondary)' },
                  ':hover': { color: { text: 'var(--wp--preset--color--foreground)' } },
                },
              },
            },
          },
          {
            title: 'Golden Haze',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#232224', name: 'Primary', slug: 'primary' },
                    { color: '#EBB54F', name: 'Secondary', slug: 'secondary' },
                    { color: '#515151', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#FFF0AE', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--foreground)',
                  },
                },
                link: {
                  color: { text: 'var(--wp--preset--color--secondary)' },
                  ':hover': { color: { text: 'var(--wp--preset--color--foreground)' } },
                },
              },
            },
          },
          {
            title: 'Golden Indigo',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { color: '#4866C0', name: 'Primary', slug: 'primary' },
                    { color: '#C09F50', name: 'Secondary', slug: 'secondary' },
                    { color: '#405AA7', name: 'Foreground', slug: 'foreground' },
                    { color: '#ffffff', name: 'Background', slug: 'background' },
                    { color: '#FBF5EE', name: 'Tertiary', slug: 'tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
                link: {
                  color: { text: 'var(--wp--preset--color--secondary)' },
                  ':hover': { color: { text: 'var(--wp--preset--color--foreground)' } },
                },
              },
            },
          },
          {
            title: 'Ice',
            version: 2,
            settings: {
              color: {
                palette: {
                  theme: [
                    { slug: 'primary', color: '#3473FE', name: 'Primary' },
                    { slug: 'secondary', color: '#12123F', name: 'Secondary' },
                    { slug: 'foreground', color: '#12123F', name: 'Foreground' },
                    { slug: 'background', color: '#F1F4FA', name: 'Background' },
                    { slug: 'tertiary', color: '#DBE6EE', name: 'Tertiary' },
                  ],
                },
              },
            },
            styles: {
              color: {
                background: 'var(--wp--preset--color--background)',
                text: 'var(--wp--preset--color--foreground)',
              },
              elements: {
                button: {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
                link: {
                  color: { text: 'var(--wp--preset--color--foreground)' },
                  ':hover': { color: { text: 'var(--wp--preset--color--primary)' } },
                },
              },
            },
          },
        ].map(e => ({
          ...e,
          styles: {
            ...e.styles,
            blocks: {
              'core/button': {
                color: { background: 'var(--wp--preset--color--secondary)' },
                variations: {
                  outline: {
                    border: { color: 'var(--wp--preset--color--secondary)' },
                    color: { text: 'var(--wp--preset--color--secondary)' },
                  },
                },
              },
              'core/heading': {
                color: { text: 'var(--wp--preset--color--foreground)' },
                elements: { link: { color: { text: 'var(--wp--preset--color--foreground)' } } },
              },
              'core/post-date': { color: { text: 'var(--wp--preset--color--foreground)' } },
              'core/post-title': {
                color: { text: 'var(--wp--preset--color--foreground)' },
                elements: {
                  link: {
                    ':hover': { color: { text: 'var(--wp--preset--color--primary)' } },
                    color: { text: 'var(--wp--preset--color--foreground)' },
                  },
                },
              },
              'core/pullquote': {
                border: {
                  color: 'var(--wp--preset--color--foreground)',
                  style: 'solid',
                  width: '1px 0',
                },
              },
              'core/quote': {
                border: {
                  color: 'var(--wp--preset--color--foreground)',
                  style: 'solid',
                  width: '0 0 0 5px',
                },
              },
              'core/separator': { color: { text: 'var(--wp--preset--color--foreground)' } },
              'core/site-title': {
                elements: {
                  link: {
                    ':hover': { color: { text: 'var(--wp--preset--color--foreground)' } },
                    color: { text: 'var(--wp--preset--color--foreground)' },
                  },
                },
              },
              ...e.styles.blocks,
            },
            elements: {
              heading: { color: { text: 'var(--wp--preset--color--foreground)' } },
              button: {
                ':active': {
                  color: {
                    background: 'var(--wp--preset--color--foreground)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
                ':focus': {
                  color: {
                    background: 'var(--wp--preset--color--foreground)',
                    text: 'var(--wp--preset--color--background)',
                  },
                  outline: {
                    color: 'var(--wp--preset--color--primary)',
                    offset: '2px',
                    style: 'dotted',
                    width: '1px',
                  },
                },
                ':hover': {
                  color: {
                    background: 'var(--wp--preset--color--secondary)',
                    text: 'var(--wp--preset--color--background)',
                  },
                },
                ':visited': {
                  color: {
                    text: e.styles.elements?.button
                      ? e.styles.elements.button.color
                      : 'var(--wp--preset--color--background)',
                  },
                },
                color: {
                  background: 'var(--wp--preset--color--primary)',
                  text: 'var(--wp--preset--color--background)',
                },
              },
              link: {
                ':hover': {
                  color: { text: 'var(--wp--preset--color--primary)' },
                  typography: { textDecoration: 'none' },
                },
                color: { text: 'var(--wp--preset--color--foreground)' },
              },
              ...e.styles.elements,
            },
          },
        })),
        Fe = [
          'New - Neutral',
          'Blueberry Sorbet',
          'Ancient Bronze',
          'Crimson Tide',
          'Purple Twilight',
          'Green Thumb',
          'Golden Haze',
          'Golden Indigo',
          'Arctic Dawn',
          'Raspberry Chocolate',
          'Canary',
          'Ice',
          'Rustic Rosewood',
          'Cinnamon Latte',
          'Lightning',
          'Aquamarine Night',
          'Charcoal',
          'Slate',
        ].map(e => Ue.find(t => t.title === e));
      var Ye = o(4981),
        Pe = o(52175);
      const Be = (0, s.createContext)({ logoBlockIds: [], setLogoBlockIds: () => {} }),
        Ge = () => {
          const { logoBlockIds: e } = (0, s.useContext)(Be),
            { attributes: t, isAttributesLoading: o } = (0, d.useSelect)(
              t => {
                const o = t(Pe.store).getBlocksByClientId(e),
                  r = !o.length || null === o[0];
                return r
                  ? { attributes: {}, isAttributesLoading: r }
                  : { attributes: o[0].attributes, isAttributesLoading: r };
              },
              [e],
            );
          return { attributes: t, isAttributesLoading: o };
        },
        Re = () => {
          const { blockPatterns: e, isLoading: t } = (0, d.useSelect)(
            e => ({
              blockPatterns: e(l.store).getBlockPatterns(),
              isLoading: !e(l.store).hasFinishedResolution('getBlockPatterns'),
            }),
            [],
          );
          return { blockPatterns: e, isLoading: t };
        },
        We = e => {
          const { blockPatterns: t, isLoading: o } = Re(),
            { attributes: r, isAttributesLoading: n } = Ge(),
            [a, i] = (0, s.useState)(r.width);
          (0, s.useEffect)(() => {
            n || i(r.width);
          }, [n, r.width, a]);
          const l = (0, s.useMemo)(() => (t || []).filter(t => t.categories?.includes(e)), [t, e]);
          return {
            isLoading: o,
            patterns: (0, s.useMemo)(
              () =>
                l.map(e => {
                  const t = (0, L.$$)(e.content, a);
                  return {
                    ...e,
                    content: t,
                    blocks: (0, Ye.parse)(t, { __unstableSkipMigrationLogs: !0 }),
                  };
                }),
              [l, a],
            ),
          };
        },
        Ze = 'twentytwentyfour',
        He = 'woocommerce-blocks/hero-product-split',
        Ve = `${Ze}//header`,
        Je = `${Ze}//footer`,
        Xe = {
          template1: { blocks: ['woocommerce-blocks/header-centered-menu'] },
          template2: { blocks: ['woocommerce-blocks/header-essential'] },
          template3: { blocks: ['woocommerce-blocks/header-centered-menu'] },
        },
        Ke = {
          template1: { blocks: ['woocommerce-blocks/footer-with-3-menus'] },
          template2: { blocks: ['woocommerce-blocks/footer-large'] },
          template3: { blocks: ['woocommerce-blocks/footer-with-3-menus'] },
        },
        qe = {
          template1: {
            blocks: [
              (0, J.V)() ? He : 'woocommerce-blocks/just-arrived-full-hero',
              'woocommerce-blocks/product-collection-5-columns',
              'woocommerce-blocks/hero-product-3-split',
              'woocommerce-blocks/product-collection-3-columns',
              'woocommerce-blocks/testimonials-3-columns',
              'woocommerce-blocks/featured-category-triple',
              'woocommerce-blocks/social-follow-us-in-social-media',
            ],
            metadata: {
              businessType: ['e-commerce', 'large-business'],
              contentFocus: ['featured products'],
              audience: ['general'],
              design: ['contemporary'],
              features: ['fullwidth-image-banner', 'testimonials', 'social-media', 'search'],
              complexity: 'high',
            },
          },
          template2: {
            blocks: [
              (0, J.V)() ? He : 'woocommerce-blocks/featured-category-cover-image',
              'woocommerce-blocks/product-collection-4-columns',
              'woocommerce-blocks/hero-product-chessboard',
              'woocommerce-blocks/product-collection-5-columns',
              'woocommerce-blocks/testimonials-3-columns',
            ],
            metadata: {
              businessType: ['e-commerce', 'subscription', 'large-business'],
              contentFocus: ['catalog'],
              audience: ['general'],
              design: ['contemporary'],
              features: ['small-banner', 'testimonials', 'newsletter'],
              complexity: 'high',
            },
          },
          template3: {
            blocks: [
              'woocommerce-blocks/hero-product-split',
              'woocommerce-blocks/product-collection-featured-products-5-columns',
              'woocommerce-blocks/featured-category-triple',
              'woocommerce-blocks/product-query-product-gallery',
            ],
            metadata: {
              businessType: ['subscription', 'large-business'],
              contentFocus: ['catalog', 'call-to-action'],
              audience: ['general'],
              design: ['contemporary'],
              features: ['small-banner', 'social-media'],
              complexity: 'high',
            },
          },
        },
        $e = (e, t) =>
          e
            .map(e => {
              const o = t[e];
              return o && o.content
                ? { ...o, blocks: (0, Ye.parse)(o.content, { __unstableSkipMigrationLogs: !0 }) }
                : null;
            })
            .filter(e => null !== e),
        et = e => e.reduce((e, t) => ((e[t.name] = t), e), {}),
        tt = async ({ homepageTemplateId: e }) => {
          const { invalidateResolutionForStoreSelector: t } = (0, d.dispatch)(l.store);
          t('getBlockPatterns'), t('__experimentalGetTemplateForLink');
          const o = await (0, d.resolveSelect)(l.store).getBlockPatterns(),
            r = et(o),
            n = $e(qe[e].blocks, r),
            a = $e(Xe[e].blocks, r),
            i = $e(Ke[e].blocks, r),
            s = [...a]
              .filter(Boolean)
              .map(e => e.content)
              .join('\n\n'),
            c = [...i]
              .filter(Boolean)
              .map(e => e.content)
              .join('\n\n');
          let M = [...n]
            .filter(Boolean)
            .map(e => e.content)
            .join('\n\n');
          (M =
            `\x3c!-- wp:template-part {"slug":"header", "theme": "${Ze}"} /--\x3e` +
            M +
            `\x3c!-- wp:template-part {"slug":"footer", "theme": "${Ze}"} /--\x3e`),
            (M = (0, L.$$)(M));
          const g = await (0, d.resolveSelect)(l.store).__experimentalGetTemplateForLink('/'),
            { saveEntityRecord: u } = (0, d.dispatch)(l.store);
          await Promise.all([
            u(
              'postType',
              'wp_template_part',
              { id: `${Ze}//header`, content: s },
              { throwOnError: !0 },
            ),
            u(
              'postType',
              'wp_template_part',
              { id: `${Ze}//footer`, content: c },
              { throwOnError: !0 },
            ),
            u('postType', g.type, { id: g.id, content: M }, { throwOnError: !0 }),
          ]);
        },
        ot = async e => {
          await V()({ path: `/wc-admin/onboarding/themes/install?theme=${e}`, method: 'POST' }),
            await V()({
              path: `/wc-admin/onboarding/themes/activate?theme=${e}&theme_switch_via_cys_ai_loader=1`,
              method: 'POST',
            });
        },
        { escalate: rt } = Oe,
        nt = (0, c.C)(
          {
            id: 'query-ai-endpoint',
            predictableActionArguments: !0,
            initial: 'init',
            context: {
              prompt: '',
              queryId: '',
              version: '',
              responseValidation: () => !0,
              retryCount: 0,
              validatedResponse: {},
            },
            states: {
              init: { always: 'querying', entry: ['setRetryCount'] },
              querying: {
                invoke: {
                  src: 'getCompletion',
                  onDone: { target: 'success', actions: ['handleAiResponse'] },
                  onError: { target: 'error' },
                },
              },
              error: {
                always: [
                  {
                    cond: e => e.retryCount >= 3,
                    target: 'querying',
                    actions: [rt(() => ({ data: 'Max retries exceeded' }))],
                  },
                  {
                    target: 'querying',
                    actions: (0, x.assign)({ retryCount: e => e.retryCount + 1 }),
                  },
                ],
              },
              success: {
                type: 'final',
                data: e => ({ result: 'success', response: e.validatedResponse }),
              },
            },
          },
          {
            actions: {
              handleAiResponse: (0, x.assign)({ validatedResponse: (e, t) => t.data }),
              setRetryCount: (0, x.assign)({ retryCount: 0 }),
            },
            services: {
              getCompletion: async ({
                queryId: e,
                prompt: t,
                version: o,
                responseValidation: r,
                retryCount: n,
                abortSignal: a = AbortSignal.timeout(1e4),
              }) => {
                const { token: i } = await (async function() {
                  var e, t;
                  const o = localStorage.getItem(Le);
                  let r;
                  if (o)
                    try {
                      r = JSON.parse(o);
                    } catch (e) {
                      throw (xe('Error parsing token', e),
                      _e('Error parsing cached token', 'token_parse_error'));
                    }
                  if (r && (null == r ? void 0 : r.expire) > Date.now())
                    return xe('Using cached token'), r;
                  const n =
                      null === (e = window.JP_CONNECTION_INITIAL_STATE) || void 0 === e
                        ? void 0
                        : e.apiNonce,
                    a =
                      null === (t = window.JP_CONNECTION_INITIAL_STATE) || void 0 === t
                        ? void 0
                        : t.siteSuffix;
                  try {
                    const e = {
                      token: (
                        await V()({
                          path: '/jetpack/v4/jetpack-ai-jwt?_cacheBuster=' + Date.now(),
                          credentials: 'same-origin',
                          headers: { 'X-WP-Nonce': n },
                          method: 'POST',
                        })
                      ).token,
                      blogId: a,
                      expire: Date.now() + 12e4,
                    };
                    return xe('Storing new token'), localStorage.setItem(Le, JSON.stringify(e)), e;
                  } catch (e) {
                    throw _e('Error fetching new token', 'token_fetch_error');
                  }
                })();
                let s, l;
                try {
                  const e = new URL('https://public-api.wordpress.com/wpcom/v2/text-completion');
                  e.searchParams.append('feature', 'woo_cys'),
                    (s = await V()({
                      url: e.toString(),
                      method: 'POST',
                      data: { token: i, prompt: t, _fields: 'completion' },
                      signal: a,
                    }));
                } catch (t) {
                  throw ((0, O.L)('customize_your_store_ai_completion_api_error', {
                    query_id: e,
                    version: o,
                    retry_count: n,
                    error_type: 'api_request_error',
                  }),
                  t);
                }
                try {
                  l = JSON.parse(s.completion);
                } catch {
                  throw ((0, O.L)('customize_your_store_ai_completion_response_error', {
                    query_id: e,
                    version: o,
                    retry_count: n,
                    error_type: 'json_parse_error',
                    response: s.completion,
                  }),
                  new Error(`Error validating Jetpack AI text completions response for ${e}`));
                }
                try {
                  const t = r(l);
                  return (
                    (0, O.L)('customize_your_store_ai_completion_success', {
                      query_id: e,
                      version: o,
                      retry_count: n,
                    }),
                    t
                  );
                } catch (t) {
                  throw ((0, O.L)('customize_your_store_ai_completion_response_error', {
                    query_id: e,
                    version: o,
                    retry_count: n,
                    error_type: 'valid_json_invalid_values',
                    response: s.completion,
                  }),
                  t);
                }
              },
            },
          },
        ),
        at = () => async () => {
          if (
            (await (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
              woocommerce_blocks_allow_ai_connection: 'yes',
            }),
            !(await V()({ path: '/wc/private/ai/store-info', method: 'GET' })).is_ai_generated)
          )
            return Promise.all([
              V()({ path: '/wc/private/ai/patterns', method: 'DELETE' }),
              V()({ path: '/wc/private/ai/products', method: 'DELETE' }),
            ]);
        },
        it = {
          browserPopstateHandler: () => e => {
            const t = () => {
              e({ type: 'EXTERNAL_URL_UPDATE' });
            };
            return (
              window.addEventListener('popstate', t),
              () => {
                window.removeEventListener('popstate', t);
              }
            );
          },
          queryAiEndpoint: nt,
          assembleSite: async e => {
            try {
              await (async ({
                colorPaletteName: e = Ue[0].title,
                fontPairingName: t = Qe[0].title,
              }) => {
                const o = Ue.find(t => t.title === e),
                  r = Qe.find(e => e.title === t),
                  { invalidateResolutionForStoreSelector: n } = (0, d.dispatch)(l.store);
                n('__experimentalGetCurrentGlobalStylesId');
                const a = await (0, d.resolveSelect)(
                    l.store,
                  ).__experimentalGetCurrentGlobalStylesId(),
                  { saveEntityRecord: i } = (0, d.dispatch)(l.store);
                await i(
                  'root',
                  'globalStyles',
                  {
                    id: a,
                    styles: (0, Se.X)(o?.styles || {}, r?.styles || {}),
                    settings: (0, Se.X)(o?.settings || {}, r?.settings || {}),
                  },
                  { throwOnError: !0 },
                );
              })({
                colorPaletteName: e.aiSuggestions.defaultColorPalette.default,
                fontPairingName: e.aiSuggestions.fontPairing,
              }),
                (0, O.L)('customize_your_store_ai_update_global_styles_success');
            } catch (e) {
              throw (console.error(e),
              (0, O.L)('customize_your_store_ai_update_global_styles_response_error', {
                error: e instanceof Error ? e.message : 'unknown',
              }),
              e);
            }
            try {
              await tt({ homepageTemplateId: e.aiSuggestions.homepageTemplate }),
                (0, O.L)('customize_your_store_ai_update_template_success');
            } catch (e) {
              throw (console.error(e),
              (0, O.L)('customize_your_store_ai_update_template_response_error', {
                error: e instanceof Error ? e.message : 'unknown',
              }),
              e);
            }
          },
          updateStorePatterns: async e => {
            try {
              await (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
                woocommerce_blocks_allow_ai_connection: 'yes',
              });
              const { images: t } = await V()({
                  path: '/wc/private/ai/images',
                  method: 'POST',
                  data: { business_description: e.businessInfoDescription.descriptionText },
                }),
                { is_ai_generated: o } = await V()({
                  path: '/wc/private/ai/store-info',
                  method: 'GET',
                });
              if (!t) {
                if (!o) throw new Error('AI content not generated: images not available');
                return void (await at()());
              }
              const [r] = await Promise.all([
                  V()({
                    path: '/wc/private/ai/products',
                    method: 'POST',
                    data: {
                      business_description: e.businessInfoDescription.descriptionText,
                      images: t,
                    },
                  }),
                  V()({
                    path: '/wc/private/ai/patterns',
                    method: 'POST',
                    data: {
                      business_description: e.businessInfoDescription.descriptionText,
                      images: t,
                    },
                  }),
                ]),
                n = r.product_content.map((e, t) =>
                  V()({
                    path: '/wc/private/ai/product',
                    method: 'POST',
                    data: {
                      products_information: e,
                      last_product: t === r.product_content.length - 1,
                    },
                  }),
                );
              if (
                (await Promise.all([
                  ...n,
                  V()({
                    path: '/wc/private/ai/business-description',
                    method: 'POST',
                    data: { business_description: e.businessInfoDescription.descriptionText },
                  }),
                  V()({
                    path: '/wc/private/ai/store-title',
                    method: 'POST',
                    data: { business_description: e.businessInfoDescription.descriptionText },
                  }),
                ]),
                !r.ai_content_generated)
              )
                throw new Error((r.additional_errors, JSON.stringify(r.additional_errors)));
            } catch (e) {
              throw ((0, O.L)('customize_your_store_update_store_pattern_api_error', {
                error: e instanceof Error ? e.message : 'unknown',
              }),
              e);
            }
          },
          saveAiResponseToOption: e =>
            (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
              woocommerce_customize_store_ai_suggestions: {
                ...e.aiSuggestions,
                lookAndFeel: e.lookAndFeel.choice,
              },
            }),
          installAndActivateTheme: async () => {
            try {
              await ot(Ze);
            } catch (e) {
              throw ((0, O.L)('customize_your_store_ai_install_and_activate_theme_error', {
                theme: Ze,
                error: e instanceof Error ? e.message : 'unknown',
              }),
              e);
            }
          },
          resetPatternsAndProducts: at,
        };
      var st = o(1850);
      const lt = [
          {
            name: 'Ancient Bronze',
            primary: '#11163d',
            secondary: '#8C8369',
            foreground: '#11163d',
            background: '#ffffff',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Arctic Dawn',
            primary: '#243156',
            secondary: '#DE5853',
            foreground: '#243156',
            background: '#ffffff',
            lookAndFeel: ['Contemporary'],
          },
          {
            name: 'Bronze Serenity',
            primary: '#1e4b4b',
            secondary: '#9e7047',
            foreground: '#1e4b4b',
            background: '#ffffff',
            lookAndFeel: ['Classic'],
          },
          {
            name: 'Purple Twilight',
            primary: '#301834',
            secondary: '#6a5eb7',
            foreground: '#090909',
            background: '#fefbff',
            lookAndFeel: ['Bold'],
          },
          {
            name: 'Candy Store',
            primary: '#293852',
            secondary: '#f1bea7',
            foreground: '#293852',
            background: '#ffffff',
            lookAndFeel: ['Classic'],
          },
          {
            name: 'Midnight Citrus',
            primary: '#1B1736',
            secondary: '#7E76A3',
            foreground: '#1B1736',
            background: '#ffffff',
            lookAndFeel: ['Bold', 'Contemporary'],
          },
          {
            name: 'Crimson Tide',
            primary: '#A02040',
            secondary: '#234B57',
            foreground: '#871C37',
            background: '#ffffff',
            lookAndFeel: ['Bold'],
          },
          {
            name: 'Raspberry Chocolate',
            primary: '#42332e',
            secondary: '#d64d68',
            foreground: '#241d1a',
            background: '#eeeae6',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Gumtree Sunset',
            primary: '#476C77',
            secondary: '#EFB071',
            foreground: '#476C77',
            background: '#edf4f4',
            lookAndFeel: ['Classic'],
          },
          {
            name: 'Fuchsia',
            primary: '#b7127f',
            secondary: '#18020C',
            foreground: '#b7127f',
            background: '#f7edf6',
            lookAndFeel: ['Bold'],
          },
          {
            name: 'Cinder',
            primary: '#c14420',
            secondary: '#2F2D2D',
            foreground: '#863119',
            background: '#f1f2f2',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Canary',
            primary: '#0F0F05',
            secondary: '#353535',
            foreground: '#0F0F05',
            background: '#FCFF9B',
            lookAndFeel: ['Bold'],
          },
          {
            name: 'Blue Lagoon',
            primary: '#004DE5',
            secondary: '#0496FF',
            foreground: '#0036A3',
            background: '#FEFDF8',
            lookAndFeel: ['Bold', 'Contemporary'],
          },
          {
            name: 'Vibrant Berry',
            primary: '#7C1D6F',
            secondary: '#C62FB2',
            foreground: '#7C1D6F',
            background: '#FFEED6',
            lookAndFeel: ['Classic', 'Bold'],
          },
          {
            name: 'Aquamarine Night',
            primary: '#deffef',
            secondary: '#56fbb9',
            foreground: '#ffffff',
            background: '#091C48',
            lookAndFeel: ['Bold'],
          },
          {
            name: 'Evergreen Twilight',
            primary: '#ffffff',
            secondary: '#8EE978',
            foreground: '#ffffff',
            background: '#181818',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Cinnamon Latte',
            primary: '#D9CAB3',
            secondary: '#BC8034',
            foreground: '#FFFFFF',
            background: '#3C3F4D',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Lightning',
            primary: '#ebffd2',
            secondary: '#fefefe',
            foreground: '#ebffd2',
            background: '#0e1fb5',
            lookAndFeel: ['Bold'],
          },
          {
            name: 'Lilac Nightshade',
            primary: '#f5d6ff',
            secondary: '#C48DDA',
            foreground: '#ffffff',
            background: '#000000',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Charcoal',
            primary: '#dbdbdb',
            secondary: '#efefef',
            foreground: '#dbdbdb',
            background: '#1e1e1e',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Rustic Rosewood',
            primary: '#F4F4F2',
            secondary: '#EE797C',
            foreground: '#ffffff',
            background: '#1A1A1A',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Sandalwood Oasis',
            primary: '#F0EBE3',
            secondary: '#DF9785',
            foreground: '#ffffff',
            background: '#2a2a16',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
          {
            name: 'Slate',
            primary: '#FFFFFF',
            secondary: '#FFDF6D',
            foreground: '#EFF2F9',
            background: '#13161E',
            lookAndFeel: ['Contemporary', 'Classic'],
          },
        ],
        ct = lt.map(e => e.name),
        Mt = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        gt = st.z
          .string()
          .refine(e => ct.includes(e), { message: 'Color palette not part of allowed list' }),
        ut =
          (st.z.object({
            name: gt,
            primary: st.z.string().regex(Mt, { message: 'Invalid primary color' }),
            secondary: st.z.string().regex(Mt, { message: 'Invalid secondary color' }),
            foreground: st.z.string().regex(Mt, { message: 'Invalid foreground color' }),
            background: st.z.string().regex(Mt, { message: 'Invalid background color' }),
            lookAndFeel: st.z.array(st.z.enum(['Contemporary', 'Classic', 'Bold'])),
          }),
          {
            queryId: 'default_color_palette',
            version: '2023-10-12',
            prompt: (e, t, o) =>
              `\n            You are a WordPress theme expert designing a WooCommerce site. Analyse the following store description, merchant's chosen look and tone, and determine the most appropriate color scheme, along with 8 best alternatives.\n\t\t\tDo not use any palette names that are not part of the color choices provided below.\n\t\t\tRespond in the JSON form: "{ "default": "palette name", "bestColors": [ "palette name 1", "palette name 2", "palette name 3", "palette name 4", "palette name 5", "palette name 6", "palette name 7", "palette name 8" ] }"\n\t\t\t\n            Chosen look and tone: ${t} look, ${o} tone.\n            Business description: ${e}\n\n            Colors schemes to choose from: \n            ${JSON.stringify(
                t ? lt.filter(e => e.lookAndFeel.includes(t)) : lt,
              )}\n        `,
            responseValidation: st.z
              .object({ default: gt, bestColors: st.z.array(gt).length(8) })
              .refine(
                e => {
                  const t = [e.default, ...e.bestColors];
                  return new Set(t).size === t.length;
                },
                { message: 'Color palette names must be unique' },
              ).parse,
          }),
        mt = [
          {
            pair_name: 'Inter + Inter',
            fonts: { Inter: 'A highly legible sans-serif, optimized for UI design.' },
            settings: 'Inter is used for buttons and general typography.',
          },
          {
            pair_name: 'Bodoni Moda + Overpass',
            fonts: {
              'Bodoni Moda':
                'A modern serif font with high contrast between thick and thin lines, commonly used for headings.',
              Overpass:
                'A clean, modern sans-serif, originally inspired by Highway Gothic. Good for text and UI elements.',
            },
            settings:
              'Overpass is used for buttons and general typography, while Bodoni Moda is specified for headings and some core blocks like site title and post navigation link.',
          },
          {
            pair_name: 'Commissioner + Crimson Pro',
            fonts: {
              Commissioner:
                'A low-contrast, geometric sans-serif, designed for legibility and readability in long texts.',
              'Crimson Pro': 'A serif typeface designed for readability and long-form text.',
            },
            settings:
              'Commissioner dominates elements like buttons, headings, and core blocks, while Crimson Pro is set for general typography.',
          },
          {
            pair_name: 'Libre Baskerville + DM Sans',
            fonts: {
              'Libre Baskerville':
                'A serif typeface with a classic feel, good for long reading and often used for body text in books.',
              'DM Sans': 'A clean, geometric sans-serif, often used for UI and short text.',
            },
            settings:
              'Libre Baskerville is used for headings and core blocks, whereas DM Sans is used for buttons and general typography.',
          },
          {
            pair_name: 'Libre Franklin + EB Garamond',
            fonts: {
              'Libre Franklin':
                'A sans-serif that offers readability, suitable for both text and display.',
              'EB Garamond':
                "A revival of the classical 'Garamond' typefaces, suitable for long-form text.",
            },
            settings:
              'Libre Franklin is predominantly used for elements like buttons, headings, and core blocks. EB Garamond is set for general typography.',
          },
          {
            pair_name: 'Montserrat + Arvo',
            fonts: {
              Montserrat: 'A geometric sans-serif, popular for its modern clean lines.',
              Arvo:
                'A slab-serif font with a more traditional feel, suitable for print and screen.',
            },
            settings:
              'Montserrat is used for buttons, headings, and core blocks. Arvo is used for general typography.',
          },
          {
            pair_name: 'Playfair Display + Fira Sans',
            fonts: {
              'Playfair Display':
                'A high-contrast serif designed for headings and offers a modern take on older serif fonts.',
              'Fira Sans':
                'A sans-serif designed for readability at small sizes, making it suitable for both UI and text.',
            },
            settings:
              'Playfair Display is used in italics for headings and core blocks, while Fira Sans is used for buttons and general typography.',
          },
          {
            pair_name: 'Rubik + Inter',
            fonts: {
              Rubik:
                'A sans-serif with slightly rounded corners, designed for a softer, more modern look.',
              Inter: 'A highly legible sans-serif, optimized for UI design.',
            },
            settings:
              'Rubik is applied for headings and core blocks. Inter is used for buttons and general typography.',
          },
          {
            pair_name: 'Space Mono + Roboto',
            fonts: {
              'Space Mono': 'A monospace typeface with a futuristic vibe.',
              Roboto: 'A neo-grotesque sans-serif, known for its flexibility and modern design.',
            },
            settings:
              'Space Mono is used for headings, while Roboto takes care of buttons and general typography.',
          },
        ].map(e => e.pair_name),
        dt = (st.z.object({
          pair_name: st.z
            .string()
            .refine(e => mt.includes(e), { message: 'Font choice not part of allowed list' }),
        }).parse,
        [
          { slug: 'woocommerce-blocks/header-essential', label: 'Essential Header' },
          {
            slug: 'woocommerce-blocks/header-centered-menu',
            label: 'Centered Menu with search Header',
          },
          { slug: 'woocommerce-blocks/header-minimal', label: 'Minimal Header' },
          { slug: 'woocommerce-blocks/header-large', label: 'Large Header' },
        ]).map(e => e.slug),
        yt = (st.z.object({
          slug: st.z
            .string()
            .refine(e => dt.includes(e), { message: 'Header not part of allowed list' }),
        }).parse,
        [
          { slug: 'woocommerce-blocks/footer-simple-menu', label: 'Footer with Simple Menu' },
          { slug: 'woocommerce-blocks/footer-with-3-menus', label: 'Footer with 3 Menus' },
          { slug: 'woocommerce-blocks/footer-large', label: 'Large Footer' },
        ]).map(e => e.slug),
        pt =
          (st.z.object({
            slug: st.z
              .string()
              .refine(e => yt.includes(e), { message: 'Footer not part of allowed list' }),
          }).parse,
          Object.keys(qe)),
        Nt =
          (st.z.object({
            homepage_template: st.z
              .string()
              .refine(e => pt.includes(e), { message: 'Template not part of allowed list' }),
          }).parse,
          (0, c.C)(
            {
              id: 'designWithAi',
              predictableActionArguments: !0,
              preserveActionOrder: !0,
              schema: { context: {}, events: {} },
              invoke: { src: 'browserPopstateHandler' },
              on: {
                EXTERNAL_URL_UPDATE: { target: 'navigate' },
                AI_WIZARD_CLOSED_BEFORE_COMPLETION: {
                  actions: [(0, x.sendParent)((e, t) => t), 'recordTracksStepClosed'],
                },
              },
              context: {
                startLoadingTime: null,
                businessInfoDescription: { descriptionText: '' },
                lookAndFeel: { choice: '' },
                toneOfVoice: { choice: '' },
                aiSuggestions: {
                  defaultColorPalette: { default: 'Ancient Bronze' },
                  fontPairing: 'Rubik + Inter',
                  homepageTemplate: 'template1',
                },
                apiCallLoader: { hasErrors: !1 },
                aiOnline: !0,
              },
              initial: 'navigate',
              states: {
                navigate: {
                  always: [
                    {
                      target: 'businessInfoDescription',
                      cond: { type: 'hasStepInUrl', step: 'business-info-description' },
                    },
                    {
                      target: 'lookAndFeel',
                      cond: { type: 'hasStepInUrl', step: 'look-and-feel' },
                    },
                    {
                      target: 'toneOfVoice',
                      cond: { type: 'hasStepInUrl', step: 'tone-of-voice' },
                    },
                    {
                      target: 'apiCallLoader',
                      cond: { type: 'hasStepInUrl', step: 'api-call-loader' },
                    },
                    { target: 'businessInfoDescription' },
                  ],
                },
                businessInfoDescription: {
                  id: 'businessInfoDescription',
                  initial: 'preBusinessInfoDescription',
                  states: {
                    preBusinessInfoDescription: { always: { target: 'businessInfoDescription' } },
                    businessInfoDescription: {
                      meta: {
                        component: ({ sendEvent: e, context: t }) => {
                          const [o, r] = (0, s.useState)(t.businessInfoDescription.descriptionText),
                            [n, a] = (0, s.useState)(!1);
                          return (0, s.createElement)(
                            'div',
                            null,
                            !(0, ie.id)() &&
                              (0, s.createElement)(y.ProgressBar, {
                                percent: 20,
                                color: 'var(--wp-admin-theme-color)',
                                bgcolor: 'transparent',
                              }),
                            (0, ie.id)() &&
                              (0, s.createElement)(se.Z, {
                                size: 24,
                                className: 'woocommerce-cys-wordpress-header-logo',
                              }),
                            !(0, ie.id)() &&
                              (0, s.createElement)(ne, {
                                onClick: () => {
                                  e({
                                    type: 'AI_WIZARD_CLOSED_BEFORE_COMPLETION',
                                    payload: { step: 'business-info-description' },
                                  });
                                },
                              }),
                            (0, ie.id)() &&
                              (0, s.createElement)(ae, {
                                onClick: () => {
                                  (0, O.L)('customize_your_store_entrepreneur_skip_click', {
                                    step: 'business-info-description',
                                  }),
                                    (window.location.href = (0, p.getAdminLink)(
                                      'admin.php?page=wc-admin&ref=entrepreneur-signup',
                                    ));
                                },
                              }),
                            (0, s.createElement)(
                              'div',
                              {
                                className: 'woocommerce-cys-design-with-ai woocommerce-cys-layout',
                              },
                              (0, s.createElement)(
                                'div',
                                { className: 'woocommerce-cys-page' },
                                (0, s.createElement)(
                                  'h1',
                                  null,
                                  (0, T.__)(
                                    'Tell us a bit more about your business',
                                    'woocommerce',
                                  ),
                                ),
                                (0, s.createElement)(j.TextareaControl, {
                                  onChange: e => {
                                    r(e);
                                  },
                                  value: o,
                                }),
                                (0, s.createElement)(
                                  'div',
                                  { className: 'woocommerce-cys-design-with-ai-guide' },
                                  (0, s.createElement)(
                                    'p',
                                    null,
                                    (0, T.__)(
                                      'The more detail you provide, the better job our AI can do!',
                                      'woocommerce',
                                    ),
                                  ),
                                  (0, s.createElement)(
                                    'p',
                                    null,
                                    (0, T.__)('Try to include:', 'woocommerce'),
                                  ),
                                  (0, s.createElement)(
                                    'ul',
                                    null,
                                    (0, s.createElement)(
                                      'li',
                                      null,
                                      (0, T.__)('What you want to sell', 'woocommerce'),
                                    ),
                                    (0, s.createElement)(
                                      'li',
                                      null,
                                      (0, T.__)(
                                        'How many products you plan on displaying',
                                        'woocommerce',
                                      ),
                                    ),
                                    (0, s.createElement)(
                                      'li',
                                      null,
                                      (0, T.__)('What makes your business unique', 'woocommerce'),
                                    ),
                                    (0, s.createElement)(
                                      'li',
                                      null,
                                      (0, T.__)('Who your target audience is', 'woocommerce'),
                                    ),
                                  ),
                                ),
                                (0, s.createElement)(
                                  j.Button,
                                  {
                                    variant: 'primary',
                                    onClick: () => {
                                      a(!0),
                                        e({
                                          type: 'BUSINESS_INFO_DESCRIPTION_COMPLETE',
                                          payload: o,
                                        });
                                    },
                                    disabled: 0 === o.length || n,
                                  },
                                  n
                                    ? (0, s.createElement)(j.Spinner, null)
                                    : (0, T.__)('Continue', 'woocommerce'),
                                ),
                              ),
                            ),
                          );
                        },
                      },
                      entry: [
                        { type: 'recordTracksStepViewed', step: 'business_info_description' },
                      ],
                      on: {
                        BUSINESS_INFO_DESCRIPTION_COMPLETE: {
                          actions: [
                            'assignBusinessInfoDescription',
                            'spawnSaveDescriptionToOption',
                            {
                              type: 'recordTracksStepCompleted',
                              step: 'business_info_description',
                            },
                          ],
                          target: 'postBusinessInfoDescription',
                        },
                      },
                    },
                    postBusinessInfoDescription: { always: { target: '#lookAndFeel' } },
                  },
                },
                lookAndFeel: {
                  id: 'lookAndFeel',
                  initial: 'preLookAndFeel',
                  states: {
                    preLookAndFeel: { always: { target: 'lookAndFeel' } },
                    lookAndFeel: {
                      meta: {
                        component: ({ sendEvent: e, context: t }) => {
                          const o = [
                              {
                                title: (0, T.__)('Contemporary', 'woocommerce'),
                                key: 'Contemporary',
                                subtitle: (0, T.__)(
                                  'Clean lines, neutral colors, sleek and modern look.',
                                  'woocommerce',
                                ),
                              },
                              {
                                title: (0, T.__)('Classic', 'woocommerce'),
                                key: 'Classic',
                                subtitle: (0, T.__)(
                                  'Elegant and timeless with a nostalgic touch.',
                                  'woocommerce',
                                ),
                              },
                              {
                                title: (0, T.__)('Bold', 'woocommerce'),
                                key: 'Bold',
                                subtitle: (0, T.__)(
                                  'Vibrant with eye-catching colors and visuals.',
                                  'woocommerce',
                                ),
                              },
                            ],
                            [r, n] = (0, s.useState)(
                              '' === t.lookAndFeel.choice ? o[0].key : t.lookAndFeel.choice,
                            );
                          return (0, s.createElement)(
                            'div',
                            null,
                            !(0, ie.id)() &&
                              (0, s.createElement)(y.ProgressBar, {
                                percent: 60,
                                color: 'var(--wp-admin-theme-color)',
                                bgcolor: 'transparent',
                              }),
                            (0, ie.id)() &&
                              (0, s.createElement)(se.Z, {
                                size: 24,
                                className: 'woocommerce-cys-wordpress-header-logo',
                              }),
                            !(0, ie.id)() &&
                              (0, s.createElement)(ne, {
                                onClick: () => {
                                  e({
                                    type: 'AI_WIZARD_CLOSED_BEFORE_COMPLETION',
                                    payload: { step: 'look-and-feel' },
                                  });
                                },
                              }),
                            (0, ie.id)() &&
                              (0, s.createElement)(ae, {
                                onClick: () => {
                                  (0, O.L)('customize_your_store_entrepreneur_skip_click', {
                                    step: 'look-and-feel',
                                  }),
                                    (window.location.href = (0, p.getAdminLink)(
                                      'admin.php?page=wc-admin&ref=entrepreneur-signup',
                                    ));
                                },
                              }),
                            (0, s.createElement)(
                              'div',
                              {
                                className:
                                  'woocommerce-cys-design-with-ai-look-and-feel woocommerce-cys-layout',
                              },
                              (0, s.createElement)(
                                'div',
                                { className: 'woocommerce-cys-page' },
                                (0, s.createElement)(
                                  'h1',
                                  null,
                                  (0, T.__)(
                                    'How would you like your store to look?',
                                    'woocommerce',
                                  ),
                                ),
                                (0, s.createElement)(
                                  'div',
                                  { className: 'choices' },
                                  o.map(({ title: e, subtitle: t, key: o }) =>
                                    (0, s.createElement)(Me, {
                                      key: o,
                                      name: 'user-profile-choice',
                                      title: e,
                                      subtitle: t,
                                      selected: r === o,
                                      value: o,
                                      onChange: e => {
                                        n(e);
                                      },
                                    }),
                                  ),
                                ),
                                (0, s.createElement)(
                                  j.Button,
                                  {
                                    variant: 'primary',
                                    onClick: () => {
                                      t.lookAndFeel.aiRecommended &&
                                        t.lookAndFeel.aiRecommended !== r &&
                                        (0, O.L)(
                                          'customize_your_store_ai_wizard_changed_ai_option',
                                          {
                                            step: 'look-and-feel',
                                            ai_recommended: t.lookAndFeel.aiRecommended,
                                            user_choice: r,
                                          },
                                        ),
                                        e({ type: 'LOOK_AND_FEEL_COMPLETE', payload: r });
                                    },
                                  },
                                  (0, T.__)('Continue', 'woocommerce'),
                                ),
                              ),
                            ),
                          );
                        },
                      },
                      entry: [
                        { type: 'updateQueryStep', step: 'look-and-feel' },
                        { type: 'recordTracksStepViewed', step: 'look_and_feel' },
                      ],
                      on: {
                        LOOK_AND_FEEL_COMPLETE: {
                          actions: [
                            { type: 'recordTracksStepCompleted', step: 'look_and_feel' },
                            'assignLookAndFeel',
                          ],
                          target: 'postLookAndFeel',
                        },
                      },
                    },
                    postLookAndFeel: { always: { target: '#toneOfVoice' } },
                  },
                },
                toneOfVoice: {
                  id: 'toneOfVoice',
                  initial: 'preToneOfVoice',
                  states: {
                    preToneOfVoice: { always: { target: 'toneOfVoice' } },
                    toneOfVoice: {
                      meta: {
                        component: ({ sendEvent: e, context: t }) => {
                          const o = [
                              {
                                title: (0, T.__)('Informal', 'woocommerce'),
                                key: 'Informal',
                                subtitle: (0, T.__)(
                                  'Relaxed and friendly, like a conversation with a friend.',
                                  'woocommerce',
                                ),
                              },
                              {
                                title: (0, T.__)('Neutral', 'woocommerce'),
                                key: 'Neutral',
                                subtitle: (0, T.__)(
                                  'Impartial tone with casual expressions without slang.',
                                  'woocommerce',
                                ),
                              },
                              {
                                title: (0, T.__)('Formal', 'woocommerce'),
                                key: 'Formal',
                                subtitle: (0, T.__)(
                                  'Direct yet respectful, serious and professional.',
                                  'woocommerce',
                                ),
                              },
                            ],
                            [r, n] = (0, s.useState)(
                              '' === t.toneOfVoice.choice ? o[0].key : t.toneOfVoice.choice,
                            ),
                            a = () => {
                              t.toneOfVoice.aiRecommended &&
                                t.toneOfVoice.aiRecommended !== r &&
                                (0, O.L)('customize_your_store_ai_wizard_changed_ai_option', {
                                  step: 'tone-of-voice',
                                  ai_recommended: t.toneOfVoice.aiRecommended,
                                  user_choice: r,
                                }),
                                e({ type: 'TONE_OF_VOICE_COMPLETE', payload: r });
                            };
                          return (0, s.createElement)(
                            'div',
                            null,
                            !(0, ie.id)() &&
                              (0, s.createElement)(y.ProgressBar, {
                                percent: 80,
                                color: 'var(--wp-admin-theme-color)',
                                bgcolor: 'transparent',
                              }),
                            (0, ie.id)() &&
                              (0, s.createElement)(se.Z, {
                                size: 24,
                                className: 'woocommerce-cys-wordpress-header-logo',
                              }),
                            !(0, ie.id)() &&
                              (0, s.createElement)(ne, {
                                onClick: () => {
                                  e({
                                    type: 'AI_WIZARD_CLOSED_BEFORE_COMPLETION',
                                    payload: { step: 'tone-of-voice' },
                                  });
                                },
                              }),
                            (0, ie.id)() &&
                              (0, s.createElement)(ae, {
                                onClick: () => {
                                  (0, O.L)('customize_your_store_entrepreneur_skip_click', {
                                    step: 'tone-of-voice',
                                  }),
                                    (window.location.href = (0, p.getAdminLink)(
                                      'admin.php?page=wc-admin&ref=entrepreneur-signup',
                                    ));
                                },
                              }),
                            (0, s.createElement)(
                              'div',
                              {
                                className:
                                  'woocommerce-cys-design-with-ai-tone-of-voice woocommerce-cys-layout',
                              },
                              (0, s.createElement)(
                                'div',
                                { className: 'woocommerce-cys-page' },
                                (0, s.createElement)(
                                  'h1',
                                  null,
                                  (0, T.__)('Which writing style do you prefer?', 'woocommerce'),
                                ),
                                t.apiCallLoader.hasErrors &&
                                  (0, s.createElement)(
                                    j.Notice,
                                    {
                                      className: 'woocommerce-cys-design-with-ai__error-notice',
                                      isDismissible: !1,
                                      status: 'error',
                                    },
                                    (0, s.createInterpolateElement)(
                                      (0, T.__)(
                                        'Oops! We encountered a problem while generating your store. <retryButton/>',
                                        'woocommerce',
                                      ),
                                      {
                                        retryButton: (0, s.createElement)(
                                          j.Button,
                                          { onClick: a, variant: 'tertiary' },
                                          (0, T.__)('Please try again', 'woocommerce'),
                                        ),
                                      },
                                    ),
                                  ),
                                (0, s.createElement)(
                                  'div',
                                  { className: 'choices' },
                                  o.map(({ title: e, subtitle: t, key: o }) =>
                                    (0, s.createElement)(Me, {
                                      key: o,
                                      name: 'user-profile-choice',
                                      title: e,
                                      subtitle: t,
                                      selected: r === o,
                                      value: o,
                                      onChange: e => {
                                        n(e);
                                      },
                                    }),
                                  ),
                                ),
                                (0, s.createElement)(
                                  j.Button,
                                  { variant: 'primary', onClick: a },
                                  (0, T.__)('Continue', 'woocommerce'),
                                ),
                              ),
                            ),
                          );
                        },
                      },
                      entry: [
                        { type: 'updateQueryStep', step: 'tone-of-voice' },
                        { type: 'recordTracksStepViewed', step: 'tone_of_voice' },
                      ],
                      on: {
                        TONE_OF_VOICE_COMPLETE: {
                          actions: [
                            'assignToneOfVoice',
                            { type: 'recordTracksStepCompleted', step: 'tone_of_voice' },
                          ],
                          target: 'postToneOfVoice',
                        },
                      },
                    },
                    postToneOfVoice: { always: { target: '#apiCallLoader' } },
                  },
                },
                apiCallLoader: {
                  id: 'apiCallLoader',
                  initial: 'preApiCallLoader',
                  states: {
                    preApiCallLoader: { always: { target: 'apiCallLoader' } },
                    apiCallLoader: {
                      meta: {
                        component: () => {
                          const [e, t] = (0, s.useState)(5);
                          (0, s.useEffect)(() => {
                            const e = e => {
                              const t = new Image();
                              (t.src = e), (t.onload = () => {});
                            };
                            e(ge), e(ue);
                          }, []);
                          const o = (0, L.rS)(me.slice(0, -1), 10);
                          return (0, s.createElement)(
                            I.Loader,
                            null,
                            (0, s.createElement)(
                              I.Loader.Sequence,
                              {
                                interval: 4e4 / (o.length - 1),
                                shouldLoop: !1,
                                onChange: e => {
                                  setTimeout(() => {
                                    t(o[e].progress);
                                  }, 0);
                                },
                              },
                              o.map((e, t) =>
                                (0, s.createElement)(
                                  I.Loader.Layout,
                                  { key: t },
                                  (0, s.createElement)(I.Loader.Illustration, null, e.image),
                                  (0, s.createElement)(I.Loader.Title, null, e.title),
                                ),
                              ),
                            ),
                            (0, s.createElement)(I.Loader.ProgressBar, {
                              className: 'smooth-transition',
                              progress: e || 0,
                            }),
                          );
                        },
                      },
                      entry: [
                        { type: 'updateQueryStep', step: 'api-call-loader' },
                        'assignStartLoadingTime',
                      ],
                      type: 'parallel',
                      states: {
                        chooseColorPairing: {
                          initial: 'executeOrSkip',
                          states: {
                            executeOrSkip: {
                              always: [
                                { target: 'pending', cond: 'isAiOnline' },
                                { target: 'success' },
                              ],
                            },
                            pending: {
                              invoke: {
                                src: 'queryAiEndpoint',
                                data: e => ({
                                  ...ut,
                                  prompt: ut.prompt(
                                    e.businessInfoDescription.descriptionText,
                                    e.lookAndFeel.choice,
                                    e.toneOfVoice.choice,
                                  ),
                                }),
                                onDone: {
                                  actions: ['assignDefaultColorPalette'],
                                  target: 'success',
                                },
                                onError: { target: 'success' },
                              },
                            },
                            success: { type: 'final' },
                          },
                        },
                        chooseFontPairing: {
                          initial: 'pending',
                          states: {
                            pending: {
                              entry: ['assignFontPairing'],
                              always: { target: 'success' },
                            },
                            success: { type: 'final' },
                          },
                        },
                        updateStorePatterns: {
                          initial: 'executeOrSkip',
                          states: {
                            executeOrSkip: {
                              always: [
                                { target: 'pending', cond: 'isAiOnline' },
                                { target: 'resetPatternsAndProducts' },
                              ],
                            },
                            pending: {
                              invoke: {
                                src: 'updateStorePatterns',
                                onDone: { target: 'success' },
                                onError: {
                                  actions: ['assignAPICallLoaderError'],
                                  target: '#toneOfVoice',
                                },
                              },
                            },
                            resetPatternsAndProducts: {
                              invoke: {
                                src: 'resetPatternsAndProducts',
                                onDone: { target: 'success' },
                                onError: {
                                  actions: ['assignAPICallLoaderError'],
                                  target: '#toneOfVoice',
                                },
                              },
                            },
                            success: { type: 'final' },
                          },
                        },
                        installAndActivateTheme: {
                          initial: 'pending',
                          states: {
                            pending: {
                              invoke: {
                                src: 'installAndActivateTheme',
                                onDone: { target: 'success' },
                                onError: {
                                  actions: ['assignAPICallLoaderError'],
                                  target: '#toneOfVoice',
                                },
                              },
                            },
                            success: { type: 'final' },
                          },
                        },
                      },
                      onDone: 'postApiCallLoader',
                    },
                    postApiCallLoader: {
                      type: 'parallel',
                      states: {
                        assembleSite: {
                          initial: 'pending',
                          states: {
                            pending: {
                              invoke: {
                                src: 'assembleSite',
                                onDone: { target: 'done' },
                                onError: {
                                  actions: ['assignAPICallLoaderError'],
                                  target: '#toneOfVoice',
                                },
                              },
                            },
                            done: { type: 'final' },
                          },
                        },
                        saveAiResponse: {
                          initial: 'pending',
                          states: {
                            pending: {
                              invoke: {
                                src: 'saveAiResponseToOption',
                                onDone: { target: 'done' },
                                onError: { target: 'failed' },
                              },
                            },
                            done: { type: 'final' },
                            failed: { type: 'final' },
                          },
                        },
                      },
                      onDone: { target: '#designWithAi.showAssembleHub' },
                    },
                  },
                },
                showAssembleHub: {
                  meta: {
                    component: () => {
                      const e = (0, L.rS)(me.slice(-2), 10),
                        [t, o] = (0, s.useState)(e[0].progress);
                      return (0, s.createElement)(
                        s.Fragment,
                        null,
                        (0, s.createElement)(
                          I.Loader,
                          null,
                          (0, s.createElement)(
                            I.Loader.Sequence,
                            {
                              interval: 1e4 / (e.length - 1),
                              shouldLoop: !1,
                              onChange: t => {
                                setTimeout(() => {
                                  o(e[t].progress);
                                }, 0);
                              },
                            },
                            e.map((e, t) =>
                              (0, s.createElement)(
                                I.Loader.Layout,
                                { key: t },
                                (0, s.createElement)(I.Loader.Illustration, null, e.image),
                                (0, s.createElement)(I.Loader.Title, null, e.title),
                              ),
                            ),
                          ),
                          (0, s.createElement)(I.Loader.ProgressBar, {
                            className: 'smooth-transition',
                            progress: t || 0,
                          }),
                        ),
                        (0, s.createElement)(de, null),
                      );
                    },
                  },
                  entry: ['redirectToAssemblerHub'],
                  type: 'final',
                },
              },
            },
            {
              actions: fe,
              services: it,
              guards: {
                hasStepInUrl: (e, t, { cond: o }) => {
                  const { path: r = '' } = (0, u.getQuery)();
                  return r.split('/')[3] === o.step;
                },
                isAiOnline: e => e.aiOnline,
              },
            },
          ));
      var It = o(28316);
      const Dt = e => e === z.AIOnline || e === z.AIOffline,
        Tt = e => e === z.noAI,
        Et = e => e === z.AIOffline;
      var wt = o(69959);
      const jt = ({ parentMachine: e, parentContext: t }) => {
          Nt.context.aiOnline = t?.flowType === z.AIOnline;
          const { versionEnabled: o } = (0, wt.r)(),
            [r, n, a] = (0, M.e)(Nt, { devTools: 'V4' === o, parent: e }),
            i = (0, g.v)(a, e => {
              var t;
              return (0, It.r)(null !== (t = e?.meta) && void 0 !== t ? t : void 0);
            }),
            [l, c] = (0, s.useState)(null);
          (0, s.useEffect)(() => {
            i?.component && c(() => i?.component);
          }, [l, i?.component]);
          const u = r.value instanceof Object ? Object.keys(r.value)[0] : r.value;
          return (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              'div',
              {
                className: `woocommerce-design-with-ai__container woocommerce-design-with-ai-wizard__step-${u}`,
              },
              l
                ? (0, s.createElement)(l, { sendEvent: n, context: r.context })
                : (0, s.createElement)('div', null),
            ),
          );
        },
        zt =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEwIiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDIxMCAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMzQ1XzExNzkxKSI+CjxyZWN0IHdpZHRoPSIyMDkuODI5IiBoZWlnaHQ9IjEzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wODU5Mzc1KSIvPgo8cGF0aCBkPSJNMTcyLjA5MSA0OC41NzkxQzE1MS42MTEgNDguNTc5MSAxMzguMzQ4IDU5LjMyOTkgMTM4LjM0OCA3NS44NTM5QzEzOC4zNDggOTYuNDUxMSAxNjAuMTgxIDk5LjI0NTkgMTYwLjE4MSAxMDkuOThIMTg0QzE4NCA5OS4yNDI1IDIwNS44MzMgOTYuNDUxMSAyMDUuODMzIDc1Ljg1MzlDMjA1LjgzMyA1OS4zMjk5IDE5Mi41NjcgNDguNTc5MSAxNzIuMDkxIDQ4LjU3OTFaIiBmaWxsPSIjQkVBMEYyIi8+CjxwYXRoIGQ9Ik0zOC4wNDkgNC4xMDcxOEMxMy44ODY0IDQuMTA3MTggMC4zMTM4NjggMjIuNzU2MiA1LjEzMjc4IDM2Ljc4OEMxMC4zODcgNTIuMTE1MiAyNi42MjI0IDU5LjEwNTYgMjYuNjIyNCA3OS4yNTRINDkuNDgyNUM0OS40ODI1IDU5LjEwNTYgNjUuNzE0NCA1Mi4xMTUyIDcwLjk3MiAzNi43ODhDNzUuNzg3NSAyMi43NTYyIDYyLjIxNSA0LjEwNzE4IDM4LjA0OSA0LjEwNzE4WiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBkPSJNNDguNjY5NiA0Ni44OTI4QzQzLjA4MjEgNDYuODkyOCAzOS43OTY5IDUwLjU3ODQgMzkuNzk2OSA1Ni4yNzY4VjU2Ljk4NEMzOS40MDI0IDU2Ljk4NCAzOC45OTQzIDU2Ljk4NCAzOC42MDY2IDU2Ljk4NzRIMzcuODY1M0MzNy4zMDA3IDU2Ljk4NzQgMzYuOTY0IDU2Ljk4NzQgMzYuMzA0MyA1Ni45ODc0VjU2LjI4MDJDMzYuMzA0MyA1MC41Nzg0IDMzLjAxOTEgNDYuODkyOCAyNy40MzE2IDQ2Ljg5MjhDMjIuNDU2MyA0Ni44OTI4IDE5LjYwMyA0OC43Njk2IDE5LjYwMyA1Mi4wMzM2QzE5LjYwMyA1NC40ODUgMjEuOTkwNCA1Ni4xNDA4IDI2LjcwMDUgNTYuOTU2OEMyOS41ODA5IDU3LjQ1NjYgMzIuMzczIDU3LjU3OSAzNS4xMzEgNTcuNjA2MlY3OS4yNTA2SDM2LjMwNDNWNTcuNjA5NkMzNi45NjQgNTcuNjEzIDM3LjI5NzMgNTcuNjEzIDM3Ljg2NTMgNTcuNjA5NkMzOC40Mjk4IDU3LjYwOTYgMzkuMTM3MSA1Ny42MDk2IDM5Ljc5NjkgNTcuNjA5NlY3OS4yNDcySDQwLjk3MDJWNTcuNjAyOEM0My43MjgyIDU3LjU3NTYgNDYuNTIwMyA1Ny40NTMyIDQ5LjQwMDcgNTYuOTUzNEM1NC4xMTA4IDU2LjEzNzQgNTYuNDk4MiA1NC40ODE2IDU2LjQ5ODIgNTIuMDMwMkM1Ni40OTgyIDQ4Ljc2MjggNTMuNjQ0OSA0Ni44ODk0IDQ4LjY2OTYgNDYuODg5NFY0Ni44OTI4Wk0zNS4xMzQ0IDU2Ljk3NzJDMzIuNDAzNiA1Ni45NDY2IDI5LjY0OSA1Ni44Mjc2IDI2LjgxOTUgNTYuMzM4QzIyLjQ2MzEgNTUuNTgzMiAyMS4yODMgNTMuNzkxNCAyMS4yODMgNTEuOTI0OEMyMS4yODMgNDguNTg2IDI0Ljc1NTIgNDcuNTIxOCAyNy40Mzg0IDQ3LjUyMThDMzIuNDM0MiA0Ny41MjE4IDM1LjEzNzggNTAuOTU5MiAzNS4xMzc4IDU2LjI3NjhWNTYuOTgwNkwzNS4xMzQ0IDU2Ljk3NzJaTTQ5LjI4NTEgNTYuMzM4QzQ2LjQ1MjIgNTYuODI3NiA0My43MDEgNTYuOTUgNDAuOTcwMiA1Ni45NzcyVjU2LjI3MzRDNDAuOTcwMiA1MC45NTU4IDQzLjY3MzggNDcuNTE4NCA0OC42Njk2IDQ3LjUxODRDNTEuMzQ5NCA0Ny41MTg0IDU0LjgyMTYgNDguNTgyNiA1NC44MjE2IDUxLjkyMTRDNTQuODIxNiA1My43ODggNTMuNjM4MSA1NS41Nzk4IDQ5LjI4MTcgNTYuMzM0Nkw0OS4yODUxIDU2LjMzOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMDUuODM0IDQuMDgwMDhIMTQ5LjgwMkwxNDQuMjc5IDUwLjM1NzVMMTU1LjY2OSAzOC4zNDg3SDIwMS42NEwyMDUuODM0IDQuMDgwMDhaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xMjUuODg4IDEwMy4xNDZDMTIyLjMxNyA5OC4xMzc3IDEyMC4yNjcgOTUuNzMzOSAxMTYuMjM3IDk1LjczMzlDMTExLjgxNiA5NS43MzM5IDEwOS44NzQgMTAwLjczOSAxMTIuNTMgMTAzLjg2N0MxMTUuNDUxIDEwNy4zMDcgMTI1LjkzOSAxMTAuODk4IDEyNS45MzkgMTEwLjg5OEMxMjUuOTM5IDExMC44OTggMTAyLjg2NSAxMDcuODI4IDk2Ljg4NjIgMTA3LjgyOEM5My41ODc0IDEwNy44MjggOTAuMjA3IDEwOS45MDIgOTAuMjA3IDExMy44MzlDOTAuMjA3IDExNy43NzYgOTMuNTg3NCAxMTkuODUgOTYuODg2MiAxMTkuODVDMTAyLjg2NSAxMTkuODUgMTI1LjkzOSAxMTYuNzggMTI1LjkzOSAxMTYuNzhDMTI1LjkzOSAxMTYuNzggMTE1LjQ0OCAxMjAuMzcgMTEyLjUzIDEyMy44MTFDMTA5Ljg3NyAxMjYuOTM5IDExMS44MTYgMTMxLjk0NCAxMTYuMjM3IDEzMS45NDRDMTIwLjI3IDEzMS45NDQgMTIyLjMyMSAxMjkuNTQzIDEyNS44ODggMTI0LjUzMkMxMjcuMDk5IDEyMi44MzUgMTMzLjI0NyAxMTMuODM1IDEzMy4yNDcgMTEzLjgzNUMxMzMuMjQ3IDExMy44MzUgMTI3LjA5OSAxMDQuODM5IDEyNS44ODggMTAzLjEzOVYxMDMuMTQ2WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNNzUuOTIzMiA4Mi42MTk5TDEzNC4wNzcgODIuNjE5OVY2NS42MTk5SDc1LjkyMzJWODIuNjE5OVoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTExNy4wNzMgNjUuNjE5OUg3NS45MjMzVjY5LjAxOTlIMTE3LjA3M1Y2NS42MTk5WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNMTMzLjkwNyA3Mi40NTM5SDc2LjA5MzNWNzUuODUzOUgxMzMuOTA3VjcyLjQ1MzlaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xMDguNTcxIDc5LjIySDc1LjkyMzNWODIuNjJIMTA4LjU3MVY3OS4yMloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTg0LjA4NTIgOTUuNTRINDcuNjk2OFYxMzEuOTJIODQuMDg1MlY5NS41NFoiIGZpbGw9IiNCRUEwRjIiLz4KPHBhdGggZD0iTTY4LjUwOTUgMTIwLjA2OEw3NS4wNDU5IDExNC4wNDNMNTQuODM4NCAxMTQuMTE0VjExMy4xMThMNzUuMDI1NSAxMTMuMTg2TDY4LjUxMjkgMTA3LjE4NUw2OS4xMTQ5IDEwNi40Mkw3Ni42OTUyIDExMy41NTdWMTEzLjY3Mkw2OS4xMTQ5IDEyMC44MzNMNjguNTEyOSAxMjAuMDY4SDY4LjUwOTVaIiBmaWxsPSIjMjcxQjNEIi8+CjxwYXRoIGQ9Ik0xNjYuNTI3IDE5Ljk5ODhMMTcwLjYxOCAzMS43OUwxOTAuNjU5IDkuNDIxMzkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC45NzE0MjkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTgxLjQ1IDg4LjMzNTRDMTgxLjQ1IDgyLjM2MTYgMTc3Ljg3MiA3OC42NDU0IDE3Mi4xMTEgNzguNjI1QzE3Mi4xMTEgNzguNjI1IDE3Mi4wOTggNzguNjI1IDE3Mi4wOTEgNzguNjI1QzE3Mi4wODQgNzguNjI1IDE3Mi4wNzcgNzguNjI1IDE3Mi4wNyA3OC42MjVDMTY2LjMxIDc4LjY0NTQgMTYyLjczMiA4Mi44MzQyIDE2Mi43MzIgODguMzM1NEMxNjIuNzMyIDkzLjgzNjYgMTY2LjExNiA5Ni40NTEyIDE3MC45NDEgOTkuODkyQzE2OC4wMiAxMDIuNjE5IDE2Ni40NTYgMTA2LjkzMyAxNjYuNDU2IDEwOS45NzZIMTY4LjkxMUMxNjguOTExIDEwNy4xNTQgMTY5LjQ1MiAxMDMuMTUzIDE3Mi4wOTEgMTAwLjc4NkMxNzQuNzMzIDEwMy4xNTMgMTc1LjI3MSAxMDcuMTU0IDE3NS4yNzEgMTA5Ljk3NkgxNzcuNzI2QzE3Ny43MjYgMTA2LjkzMyAxNzYuMTU4IDEwMi42MTUgMTczLjI0IDk5Ljg5MkMxNzguMDY2IDk2LjQ1MTIgMTgxLjQ1IDkzLjUzNzQgMTgxLjQ1IDg4LjMzNTRaTTE3Mi4wOTEgOTkuMjQyNkMxNjcuMzA2IDk1Ljg0OTQgMTYzLjgzNCA5My42OTA0IDE2My44MzQgODguMzM1NEMxNjMuODM0IDgyLjk4MDQgMTY3LjEzMyA3OS42MjQ2IDE3Mi4wOTEgNzkuNjE0NEMxNzcuMDQ5IDc5LjYyNDYgMTgwLjM0OCA4My4xNjA2IDE4MC4zNDggODguMzM1NEMxODAuMzQ4IDkyLjk3NjQgMTc2Ljg3NiA5NS44NDk0IDE3Mi4wOTEgOTkuMjQyNloiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTQwLjg5NTUgMTIzLjc2QzQwLjg5NTUgMTI4LjIyNCAzNy4zMDIzIDEzMS44NTIgMzIuODQ0OCAxMzEuOTJIMTIuMzQ3QzcuODMxNjggMTMxLjkyMyA0LjE2Njk5IDEyOC4yNjggNC4xNjY5OSAxMjMuNzZDNC4xNjY5OSAxMTkuMjUyIDcuODI4MjcgMTE1LjYgMTIuMzQ3IDExNS42SDMyLjg1NUMzNy4zMDU3IDExNS42IDQwLjg5MjEgMTE5LjMwMyA0MC44OTIxIDEyMy43Nkg0MC44OTU1WiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBkPSJNMzIuNjI4IDEyOS41NEMzNS44MjEgMTI5LjU0IDM4LjQwOTQgMTI2Ljk1MiAzOC40MDk0IDEyMy43NkMzOC40MDk0IDEyMC41NjggMzUuODIxIDExNy45OCAzMi42MjggMTE3Ljk4QzI5LjQzNTEgMTE3Ljk4IDI2Ljg0NjcgMTIwLjU2OCAyNi44NDY3IDEyMy43NkMyNi44NDY3IDEyNi45NTIgMjkuNDM1MSAxMjkuNTQgMzIuNjI4IDEyOS41NFoiIGZpbGw9IiMyNzFCM0QiLz4KPHBhdGggZD0iTTEzMy45MDcgNC4xMDcxOEg3Ni4wOTM4VjYxLjkwNzJIMTMzLjkwN1Y0LjEwNzE4WiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNMTE2Ljk3NCA0Mi4xMzYxQzExNi45NzQgMzguMTM3NyAxMTQuNTI5IDM0LjMwOTMgMTA5LjczMSAzMS42OTgxSDEyNC42N0wxMTAuNzMxIDguNzA3MjhIOTkuMjczM0w4NS4zMzM1IDMxLjY5ODFIMTAwLjI3M0M5NS40NzQ2IDM0LjMwOTMgOTMuMDI5NSAzOC4xMzc3IDkzLjAyOTUgNDIuMTM2MUM5My4wMjk1IDQ2LjY2MTUgOTYuNTc2NSA1MS4yMjc3IDEwMS4yNTMgNTMuNjcyM0M5NC43ODQzIDUyLjM2NjcgOTMuNzcwOSA1Ny4zMDAxIDkzLjc3MDkgNTcuMzAwMUgxMTYuMjRDMTE2LjI0IDU3LjMwMDEgMTE1LjIyNiA1Mi4zNjY3IDEwOC43NTggNTMuNjcyM0MxMTMuNDM0IDUxLjIyNzcgMTE2Ljk4MSA0Ni42NjE1IDExNi45ODEgNDIuMTM2MUgxMTYuOTc0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwNSA4LjcxMDY5SDk5LjI3MzNMODUuMzMwMSAzMS42OTgxSDEwMC4yN0gxMDkuNzMxSDEyNC42N0wxMTAuNzI3IDguNzEwNjlIMTA1WiIgZmlsbD0iI0JFQTBGMiIvPgo8cGF0aCBkPSJNMTIwLjAzMiAyNC4wNTE1SDg5Ljk2ODhMODUuMzMwMSAzMS42OTgxTDEyMC4wMzIgMjQuMDUxNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMTUuMzkzIDE2LjQwMTZIOTQuNjA3NEw4OS45Njg4IDI0LjA1MTZMMTE1LjM5MyAxNi40MDE2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExMC43MjcgOC43MTA2OUg5OS4yNzMzTDk0LjYwNzQgMTYuNDAxNUwxMTAuNzI3IDguNzEwNjlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDYuNTc0NyAyNS4yMzgyQzU1LjYxNzQgMTYuMDM3OCA2My44MzM3IDEyLjc0MzMgNzMuMDYzNCAxMS4yODEyIiBzdHJva2U9IiMyNzFCM0QiIHN0cm9rZS13aWR0aD0iMC45NzE0MjkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNNjguNjk2NiAyOC42MDQxTDQ2LjkxMTEgMTEuMDczNyIgc3Ryb2tlPSIjMjcxQjNEIiBzdHJva2Utd2lkdGg9IjAuOTcxNDI5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTU1LjYxNzIgMzQuMTM2QzU4LjU3OTMgMjQuODU0IDU5LjY2MDcgMTIuODkyOCA1Ny43NTI5IDQuMTAzNzYiIHN0cm9rZT0iIzI3MUIzRCIgc3Ryb2tlLXdpZHRoPSIwLjk3MTQyOSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yMS40MDUzIDc5LjI1MzlWODIuNjUzOUgyNi42MTg3QzI2LjYxODcgODIuNjk4MSAyNi42MTg3IDgzLjg3NzkgMjYuNjE4NyA4My45MTg3QzI2LjY5NjkgODkuNDkxMyAzMS45MDM1IDk0LjQ4OTMgMzguMDQ4NyA5NC40ODkzQzQ0LjE5MzkgOTQuNDg5MyA0OS4zOTAzIDg5LjUwMTUgNDkuNDc4OCA4My45MzIzQzQ5LjQ3ODggODMuODg0NyA0OS40Nzg4IDgyLjcwMTUgNDkuNDc4OCA4Mi42NTM5SDU0LjY5MjJWNzkuMjUzOUgyMS40MDUzWiIgZmlsbD0iIzI3MUIzRCIvPgo8cGF0aCBkPSJNMTg4LjM5MSAxMTMuMzhWMTA5Ljk4SDE1NS43ODhWMTEzLjM4SDE2MC4xNzhDMTYwLjE3OCAxMTMuNjI4IDE2MC4xNzggMTE0LjIxMyAxNjAuMTc4IDExNC45NDRIMTU1Ljc4OFYxMTguMzQ0SDE2MC4xNzhDMTYwLjE3OCAxMTkuNDA1IDE2MC4xNzggMTIwLjI1OCAxNjAuMTc4IDEyMC4yODJDMTYwLjE3OCAxMjUuNzA4IDE2NC43OTMgMTMxLjk0NyAxNzIuMDkxIDEzMS45NDdDMTc5LjM4OSAxMzEuOTQ3IDE4NC4wMDQgMTI1LjcwNSAxODQuMDA0IDEyMC4yODJDMTg0LjAwNCAxMjAuMjU1IDE4NC4wMDQgMTE5LjQyNSAxODQuMDA0IDExOC4zNDRIMTg4LjM5NFYxMTQuOTQ0SDE4NC4wMDRDMTg0LjAwNCAxMTQuMjEzIDE4NC4wMDQgMTEzLjYzMSAxODQuMDA0IDExMy4zOEgxODguMzkxWiIgZmlsbD0iIzI3MUIzRCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzNDVfMTE3OTEiPgo8cmVjdCB3aWR0aD0iMjA5LjgyOSIgaGVpZ2h0PSIxMzYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NTkzNzUpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
        kt = [
          {
            title: (0, T.__)('Setting up the foundations', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src: ge,
              alt: (0, T.__)('Setting up the foundations', 'woocommerce'),
            }),
            progress: 25,
          },
          {
            title: (0, T.__)('Turning on the lights', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src: zt,
              alt: (0, T.__)('Turning on the lights', 'woocommerce'),
            }),
            progress: 50,
          },
          {
            title: (0, T.__)('Opening the doors', 'woocommerce'),
            image: (0, s.createElement)('img', {
              src: ue,
              alt: (0, T.__)('Opening the doors', 'woocommerce'),
            }),
            progress: 100,
          },
        ],
        ht = () => {
          const [e, t] = (0, s.useState)(5);
          (0, s.useEffect)(() => {
            const e = e => {
              const t = new Image();
              (t.src = e), (t.onload = () => {});
            };
            e(ge), e(zt), e(ue);
          }, []);
          const o = (0, L.rS)(kt.slice(0, -1), 10);
          return (0, s.createElement)(
            I.Loader,
            null,
            (0, s.createElement)(
              I.Loader.Sequence,
              {
                interval: 5e3 / (o.length - 1),
                shouldLoop: !1,
                onChange: e => {
                  setTimeout(() => {
                    t(o[e].progress);
                  }, 0);
                },
              },
              o.map((e, t) =>
                (0, s.createElement)(
                  I.Loader.Layout,
                  { key: t },
                  (0, s.createElement)(I.Loader.Illustration, null, e.image),
                  (0, s.createElement)(I.Loader.Title, null, e.title),
                ),
              ),
            ),
            (0, s.createElement)(I.Loader.ProgressBar, {
              className: 'smooth-transition',
              progress: e || 0,
            }),
          );
        },
        ft = ({ sendEvent: e }) => {
          const t = (0, u.getNewPath)({}, '/customize-store/assembler-hub', {}),
            o = (0, s.useRef)(null),
            [r, n] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              window.addEventListener('message', t => {
                'INSTALL_FONTS' === t.data?.type && e({ type: 'INSTALL_FONTS' });
              });
            }, [e]),
            (0, s.createElement)('iframe', {
              ref: o,
              onLoad: e => {
                const o = () => n(!0);
                (0, L.cK)(e.currentTarget),
                  (0, L.sr)(o),
                  setTimeout(o, 6e4),
                  window.parent.history?.pushState({}, '', t);
              },
              style: { opacity: r ? 1 : 0 },
              src: t,
              title: 'assembler-hub',
              className: 'cys-fullscreen-iframe',
            })
          );
        },
        At = async (e, t) => {
          const { fontFamilyId: o, ...r } = e,
            n = await (async function(e) {
              try {
                const t = await (await fetch(new Request(e))).blob(),
                  o = e.split('/').pop();
                return new File([t], o, { type: t.type });
              } catch (t) {
                throw new Error(`Error downloading font face asset from ${e}`);
              }
            })(Array.isArray(r.src) ? r.src[0] : r.src),
            a = new FormData(),
            i = await (function(e, t, o) {
              const r = `file-${o}`;
              return t.append(r, e, e.name), r;
            })(n, a, t);
          a.append('font_face_settings', JSON.stringify({ ...r, src: i }));
          const s = {
            path: `/wp/v2/font-families/${e.fontFamilyId}/font-faces/`,
            method: 'POST',
            body: a,
          };
          return V()(s);
        },
        _t = async e => {
          const t = Ue[0],
            o =
              'yes' ===
              (await (0, d.resolveSelect)(m.OPTIONS_STORE_NAME).getOption(
                'woocommerce_allow_tracking',
              )),
            r = e.isFontLibraryAvailable && o ? Ce[0] : ve[0],
            n = await (async () => {
              const e = await (async () => {
                let e = 3;
                for (; e > 0; ) {
                  const t = await (0, d.resolveSelect)('core').getEntityRecords(
                    'root',
                    'theme',
                    { status: 'active' },
                    !0,
                  );
                  if (t) return t;
                  e--;
                }
                return null;
              })();
              if (!e) return null;
              const t = e[0]?._links,
                o = t?.['wp:user-global-styles']?.[0]?.href;
              return (await V()({ url: o })).id;
            })();
          if (!n) return;
          const { saveEntityRecord: a } = (0, d.dispatch)(l.store);
          await a(
            'root',
            'globalStyles',
            {
              id: n,
              styles: (0, Se.X)(t?.styles || {}, r?.styles || {}),
              settings: (0, Se.X)(t?.settings || {}, r?.settings || {}),
            },
            { throwOnError: !0 },
          );
        },
        xt = {
          assembleSite: async () => {
            await tt({ homepageTemplateId: 'template1' });
          },
          browserPopstateHandler: () => e => {
            const t = () => {
              e({ type: 'EXTERNAL_URL_UPDATE' });
            };
            return (
              window.addEventListener('popstate', t),
              () => {
                window.removeEventListener('popstate', t);
              }
            );
          },
          installAndActivateTheme: async e => {
            try {
              await ot(Ze), await _t(e);
            } catch (e) {
              throw ((0, O.L)('customize_your_store__no_ai_install_and_activate_theme_error', {
                theme: Ze,
                error: e instanceof Error ? e.message : 'unknown',
              }),
              e);
            }
          },
          createProducts: async () => {
            try {
              const { success: e } = await V()({
                path: '/wc-admin/onboarding/products',
                method: 'POST',
              });
              if (!e) throw new Error('Product creation failed');
            } catch (e) {
              throw e;
            }
          },
          installFontFamilies: async () => {
            if (window.wcTracks?.isEnabled)
              try {
                const e = await (0, d.resolveSelect)('core').getEntityRecords(
                    'postType',
                    'wp_font_family',
                    { per_page: -1 },
                  ),
                  t = await Promise.all(
                    e.map(async e => {
                      const t = await V()({
                        path: `/wp/v2/font-families/${e.id}/font-faces`,
                        method: 'GET',
                      });
                      return { ...e, font_face: t };
                    }),
                  ),
                  o = await V()({ path: '/wp/v2/font-collections/google-fonts', method: 'GET' }),
                  { fontFacesToInstall: r, fontFamiliesWithFontFacesToInstall: n } = ((e, t) =>
                    Object.entries(be).reduce(
                      (o, [r, n]) => {
                        const a = ((e, t, o) => {
                          const r = e.font_families.find(
                            ({ font_family_settings: e }) => e.slug === t,
                          );
                          if (!r) return null;
                          const n = r?.font_family_settings.fontFace.filter(({ fontWeight: e }) =>
                            o.fontWeights.includes(e),
                          );
                          return { ...r?.font_family_settings, fontFace: n };
                        })(e, r, n);
                        if (!a) return o;
                        const i = ((e, t) => e.find(({ font_family_settings: e }) => e.slug === t))(
                          t,
                          a.slug,
                        );
                        if (!i)
                          return {
                            ...o,
                            fontFamiliesWithFontFacesToInstall: [
                              ...o.fontFamiliesWithFontFacesToInstall,
                              a,
                            ],
                          };
                        const s = i.font_face.filter(({ fontWeight: e }) =>
                          n.fontWeights.includes(e),
                        );
                        return {
                          ...o,
                          fontFacesToInstall: [
                            ...o.fontFacesToInstall,
                            ...s.map(e => ({ ...e, fontFamilyId: i.id })),
                          ],
                        };
                      },
                      { fontFamiliesWithFontFacesToInstall: [], fontFacesToInstall: [] },
                    ))(o, t),
                  a = n.map(async e => {
                    const t = await (e => {
                      const t = {
                        path: '/wp/v2/font-families',
                        method: 'POST',
                        data: {
                          font_family_settings: JSON.stringify({
                            name: e.name,
                            slug: e.slug,
                            fontFamily: e.fontFamily,
                            preview: e.preview,
                          }),
                        },
                      };
                      return V()(t);
                    })(e);
                    return Promise.all(
                      e.fontFace.map(async (e, o) => {
                        At({ ...e, fontFamilyId: t.id }, o);
                      }),
                    );
                  }),
                  i = r.map(At);
                await Promise.all([...a, ...i]);
              } catch (e) {
                throw e;
              }
          },
          updateGlobalStylesWithDefaultValues: _t,
          enableTracking: async () => {
            try {
              await (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
                woocommerce_allow_tracking: 'yes',
              }),
                (window.wcTracks.isEnabled = !0);
            } catch (e) {
              throw e;
            }
          },
        },
        Lt = {
          redirectToAssemblerHub: async () => {
            window.parent.__wcCustomizeStore.activeThemeHasMods = !0;
          },
          redirectToIntroWithError: (0, x.sendParent)({ type: 'NO_AI_FLOW_ERROR' }),
        },
        Ot = {
          initial: 'checkFontLibrary',
          states: {
            checkFontLibrary: {
              always: [
                { cond: { type: 'isFontLibraryAvailable' }, target: 'pending' },
                { target: 'success' },
              ],
            },
            pending: {
              invoke: {
                src: 'installFontFamilies',
                onDone: { target: 'success' },
                onError: { actions: 'redirectToIntroWithError' },
              },
            },
            success: { type: 'final' },
          },
        },
        St = (0, c.C)(
          {
            id: 'designWithoutAI',
            predictableActionArguments: !0,
            preserveActionOrder: !0,
            schema: { context: {}, events: {} },
            invoke: { src: 'browserPopstateHandler' },
            on: {
              EXTERNAL_URL_UPDATE: { target: 'navigate' },
              INSTALL_FONTS: { target: 'installFontFamilies' },
            },
            context: {
              startLoadingTime: null,
              flowType: z.noAI,
              apiCallLoader: { hasErrors: !1 },
              isFontLibraryAvailable: !1,
            },
            initial: 'navigate',
            states: {
              navigate: {
                always: [
                  {
                    cond: { type: 'hasFontInstallInUrl', step: 'design' },
                    target: 'installFontFamilies',
                  },
                  { cond: { type: 'hasStepInUrl', step: 'design' }, target: 'preAssembleSite' },
                ],
              },
              installFontFamilies: {
                meta: { component: ht },
                initial: 'enableTracking',
                states: {
                  enableTracking: {
                    invoke: { src: 'enableTracking', onDone: { target: 'checkFontLibrary' } },
                  },
                  checkFontLibrary: Ot.states.checkFontLibrary,
                  pending: Ot.states.pending,
                  success: { type: 'final' },
                },
                onDone: { target: '#designWithoutAI.showAssembleHub' },
              },
              preAssembleSite: {
                initial: 'preApiCallLoader',
                id: 'preAssembleSite',
                states: {
                  preApiCallLoader: {
                    meta: { component: ht },
                    type: 'parallel',
                    states: {
                      installAndActivateTheme: {
                        initial: 'pending',
                        states: {
                          pending: {
                            invoke: {
                              src: 'installAndActivateTheme',
                              onDone: { target: 'success' },
                              onError: { actions: 'redirectToIntroWithError' },
                            },
                          },
                          success: { type: 'final' },
                        },
                      },
                      createProducts: {
                        initial: 'pending',
                        states: {
                          pending: {
                            invoke: {
                              src: 'createProducts',
                              onDone: { target: 'success' },
                              onError: { actions: 'redirectToIntroWithError' },
                            },
                          },
                          success: { type: 'final' },
                        },
                      },
                      installFontFamilies: {
                        initial: Ot.initial,
                        states: {
                          checkFontLibrary: Ot.states.checkFontLibrary,
                          pending: Ot.states.pending,
                          success: { type: 'final' },
                        },
                      },
                    },
                    onDone: { target: 'assembleSite' },
                  },
                  assembleSite: {
                    initial: 'pending',
                    states: {
                      pending: {
                        invoke: {
                          src: 'assembleSite',
                          onDone: { target: 'success' },
                          onError: { actions: 'redirectToIntroWithError' },
                        },
                      },
                      success: { type: 'final' },
                    },
                    onDone: { target: '#designWithoutAI.showAssembleHub' },
                  },
                },
              },
              showAssembleHub: {
                id: 'showAssembleHub',
                meta: {
                  component: ({ sendEvent: e }) => {
                    const t = (0, L.rS)(kt.slice(-2), 10),
                      [o, r] = (0, s.useState)(t[0].progress);
                    return (0, s.createElement)(
                      s.Fragment,
                      null,
                      (0, s.createElement)(
                        I.Loader,
                        null,
                        (0, s.createElement)(
                          I.Loader.Sequence,
                          {
                            interval: 2e3 / (t.length - 1),
                            shouldLoop: !1,
                            onChange: e => {
                              setTimeout(() => {
                                r(t[e].progress);
                              }, 0);
                            },
                          },
                          t.map((e, t) =>
                            (0, s.createElement)(
                              I.Loader.Layout,
                              { key: t },
                              (0, s.createElement)(I.Loader.Illustration, null, e.image),
                              (0, s.createElement)(I.Loader.Title, null, e.title),
                            ),
                          ),
                        ),
                        (0, s.createElement)(I.Loader.ProgressBar, {
                          className: 'smooth-transition',
                          progress: o || 0,
                        }),
                      ),
                      (0, s.createElement)(ft, { sendEvent: e }),
                    );
                  },
                },
                entry: ['redirectToAssemblerHub'],
              },
            },
          },
          {
            actions: Lt,
            services: xt,
            guards: {
              hasStepInUrl: (e, t, { cond: o }) => {
                const { path: r = '' } = (0, u.getQuery)();
                return r.split('/')[2] === o.step;
              },
              isFontLibraryAvailable: e => e.isFontLibraryAvailable,
              hasFontInstallInUrl: () => {
                const { path: e = '' } = (0, u.getQuery)(),
                  t = e.split('/');
                return 'design' === t[2] && 'install-fonts' === t[3];
              },
            },
          },
        ),
        bt = ({ parentMachine: e, parentContext: t }) => {
          var o;
          const { versionEnabled: r } = (0, wt.r)(),
            [, n, a] = (0, M.e)(St, {
              devTools: 'V4' === r,
              parent: e,
              context: {
                ...St.context,
                isFontLibraryAvailable:
                  null !== (o = t?.isFontLibraryAvailable) && void 0 !== o && o,
              },
            }),
            i = (0, g.v)(a, e => {
              var t;
              return (0, It.r)(null !== (t = e?.meta) && void 0 !== t ? t : void 0);
            }),
            [l, c] = (0, s.useState)(null);
          return (
            (0, s.useEffect)(() => {
              i?.component && c(() => i?.component);
            }, [l, i?.component]),
            (0, s.createElement)(
              s.Fragment,
              null,
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-design-without-ai__container' },
                l ? (0, s.createElement)(l, { sendEvent: n }) : (0, s.createElement)('div', null),
              ),
            )
          );
        },
        Ct = ({ parentMachine: e, context: t }) =>
          (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(bt, { parentMachine: e, parentContext: t }),
          );
      var vt = o(97800),
        Qt = o(86802),
        Ut = o(48075),
        Ft = o(24705),
        Yt = o(55815),
        Pt = o(12238),
        Bt = o(71800),
        Gt = o(58141),
        Rt = o(92694),
        Wt = o(12314),
        Zt = o(94333),
        Ht = o(42592),
        Vt = o(34216),
        Jt = o(28289),
        Xt = o(23874),
        Kt = o(82369),
        qt = o(41152),
        $t = o(54247),
        eo = o(87208),
        to = o(99196),
        oo = o(92819);
      const ro = e => 'string' == typeof e && e !== decodeURIComponent(e),
        no = ({ fontFamilies: e, iframeInstance: t, onLoad: o }) => {
          const { site: r, currentTheme: n } = (0, d.useSelect)(e => ({
            site: e(l.store).getSite(),
            currentTheme: e(l.store).getCurrentTheme(),
          }));
          return (
            (0, s.useEffect)(() => {
              if (!Array.isArray(e) || !r) return;
              const a = r?.url + '/wp-content/themes/' + n?.stylesheet;
              e.forEach(async e => {
                e.fontFace?.forEach(async e => {
                  const r = `url(${((e, t) => {
                      if (e) {
                        if (e.startsWith('file:.') && t) {
                          const o = e.replace('file:.', t);
                          return ro(o) ? o : encodeURI(o);
                        }
                        return ro(e) ? e : encodeURI(e);
                      }
                    })(Array.isArray(e.src) ? e.src[0] : e.src, a)})`,
                    n = new FontFace(e.fontFamily, r, { style: e.fontStyle, weight: e.fontWeight }),
                    i = await n.load();
                  document.fonts.add(i), t && t.contentDocument?.fonts.add(i), o && o();
                });
              });
            }, [n?.stylesheet, e, t, o, r]),
            (0, s.createElement)(s.Fragment, null)
          );
        },
        ao = ({ fontFamilies: e, onLoad: t, preload: o = !1 }) => {
          const r = (0, s.useMemo)(
            () =>
              new URLSearchParams([
                ...e.map(({ fontFamily: e }) => [
                  'family',
                  `${e}:ital,wght@0,400;0,700;1,400;1,700`,
                ]),
                ['display', 'swap'],
              ]),
            [e],
          );
          return r.getAll('family').length
            ? (0, s.createElement)(
                s.Fragment,
                null,
                o
                  ? (0, s.createElement)('link', {
                      rel: 'preconnect',
                      href: 'https://fonts.wp.com',
                    })
                  : null,
                (0, s.createElement)('link', {
                  rel: o ? 'preload' : 'stylesheet',
                  type: 'text/css',
                  as: o ? 'style' : void 0,
                  href: `https://fonts-api.wp.com/css2?${r}`,
                  onLoad: t,
                  onError: t,
                }),
              )
            : null;
        },
        { useGlobalSetting: io } = (0, Ut.U)(Pe.privateApis);
      let so = !1;
      const lo = () => {
          var e;
          const { __experimentalSaveSpecifiedEntityEdits: t } = (0, d.useDispatch)(l.store),
            [o, r] = io('typography.fontFamilies'),
            [n] = io('typography.fontFamilies', void 0, 'base'),
            { context: a } = (0, s.useContext)(Mn),
            { globalStylesId: i, installedFontFamilies: c } = (0, d.useSelect)(e => {
              const { __experimentalGetCurrentGlobalStylesId: t, getEntityRecords: o } = e(l.store);
              return {
                globalStylesId: t(),
                installedFontFamilies: o('postType', 'wp_font_family', {
                  _embed: !0,
                  per_page: -1,
                }),
              };
            }),
            M = (0, s.useMemo)(
              () =>
                (c || []).map(e => ({
                  id: e.id,
                  ...e.font_family_settings,
                  fontFace: e?._embedded?.font_faces.map(e => e.font_face_settings) || [],
                })) || [],
              [c],
            );
          (0, s.useEffect)(() => {
            var e;
            if (so || null === c || null === o) return;
            const { custom: n } = o,
              a = [...(n ? n.map(e => e.slug) : [])],
              s = M.reduce(
                (e, t) => (a.includes(t.slug) || void 0 === be[t.slug] ? e : [...e, { ...t }]),
                [],
              );
            r({
              ...o,
              custom: [
                ...(null !== (e = o.custom) && void 0 !== e ? e : []),
                ...(null != s ? s : []),
              ],
            }),
              t('root', 'globalStyles', i, ['settings.typography.fontFamilies']),
              (so = !0);
          }, [o, i, c, M, t, r]);
          const g = Qe.map(e => e?.settings?.typography?.fontFamilies?.theme),
            u = (0, s.useMemo)(
              () => document.querySelector('.block-editor-block-preview__content iframe'),
              [],
            ),
            m = g.map(e => [...e.map(e => ({ ...e, name: e.fontFamily }))]);
          return (0, s.createElement)(
            s.Fragment,
            null,
            Dt(a.flowType) &&
              m.map(e =>
                (0, s.createElement)(ao, {
                  fontFamilies: e,
                  key: e.map(e => e.slug).join('-'),
                  preload: !0,
                }),
              ),
            Tt(a.flowType) &&
              (0, s.createElement)(no, {
                fontFamilies: [...(null !== (e = o.custom) && void 0 !== e ? e : []), ...n.theme],
                iframeInstance: u,
              }),
          );
        },
        { Provider: co } = j.Disabled.Context;
      let Mo;
      const { useGlobalSetting: go } = (0, Ut.U)(Pe.privateApis),
        uo = 2e3;
      function mo({
        viewportWidth: e,
        containerWidth: t,
        settings: o,
        additionalStyles: r,
        onClickNavigationItem: n,
        isNavigable: a = !1,
        isScrollable: i = !0,
        autoScale: l = !0,
        setLogoBlockContext: c = !1,
        CustomIframeComponent: M = Pe.__unstableIframe,
      }) {
        const [g, u] = (0, s.useState)(null),
          { setLogoBlockIds: m } = (0, s.useContext)(Be),
          [d] = go('typography.fontFamilies.theme'),
          y = d.filter(({ slug: e }) => 'system-font' !== e),
          { context: p } = (0, s.useContext)(Mn);
        e || (e = t);
        const N = (0, s.useMemo)(
            () =>
              !i && o.styles
                ? [
                    ...o.styles,
                    {
                      css: 'body{height:auto;overflow:hidden;border:none;padding:0;}',
                      __unstableType: 'presets',
                    },
                  ]
                : o.styles,
            [o.styles, i],
          ),
          I = t / e,
          D = g ? t / (g * I) : 0;
        Mo = Mo || (0, Zt.pure)(Pe.BlockList);
        return (0, s.createElement)(
          co,
          { value: !0 },
          (0, s.createElement)(
            'div',
            {
              className: 'block-editor-block-preview__content',
              style: l
                ? {
                    transform: `scale(${I})`,
                    aspectRatio: D,
                    maxHeight: null !== g && g > uo ? uo * I : void 0,
                  }
                : {},
            },
            (0, s.createElement)(
              M,
              {
                'aria-hidden': !0,
                scrolling: i ? 'yes' : 'no',
                tabIndex: -1,
                readonly: !a,
                style: l
                  ? {
                      position: 'absolute',
                      width: e,
                      height: g,
                      pointerEvents: 'none',
                      maxHeight: uo,
                    }
                  : {},
                contentRef: (0, Zt.useRefEffect)(
                  e => {
                    const {
                      ownerDocument: { documentElement: t },
                    } = e;
                    t.classList.add('block-editor-block-preview__content-iframe'),
                      (t.style.position = 'absolute'),
                      (t.style.width = '100%'),
                      (e.style.boxSizing = 'border-box'),
                      (e.style.position = 'absolute'),
                      (e.style.width = '100%');
                    const o = (e => {
                      let t, o;
                      const r = e => {
                          e.stopImmediatePropagation();
                        },
                        i = e => {
                          e.preventDefault(), n(e);
                        },
                        s = () => {
                          e.removeEventListener('mousemove', r, !1),
                            t &&
                              t.forEach(e => {
                                e.removeEventListener('click', i);
                              }),
                            o &&
                              o.forEach(e => {
                                e.removeEventListener('click', i);
                              });
                        };
                      e.addEventListener('mousemove', r, !0);
                      const M = new window.MutationObserver(() => {
                        if (l) {
                          const t = e.querySelector('.is-root-container');
                          u(t ? t.clientHeight : null);
                        }
                        a &&
                          (e
                            .querySelectorAll(
                              '.block-editor-rich-text__editable[contenteditable="true"]',
                            )
                            .forEach(e => {
                              e.removeAttribute('contenteditable');
                            }),
                          e.querySelectorAll('*[inert="true"]').forEach(e => {
                            e.removeAttribute('inert');
                          }),
                          s(),
                          (t = e.querySelectorAll('.wp-block-navigation__container')),
                          t.forEach(e => {
                            e.addEventListener('click', i, !0);
                          }),
                          (o = e.querySelectorAll('.wp-block-site-title a')),
                          o.forEach(e => {
                            e.addEventListener('click', i, !0);
                          })),
                          c &&
                            (() => {
                              const t = e.querySelectorAll('.wp-block-site-logo'),
                                o = Array.from(t)
                                  .map(e => e.getAttribute('data-block'))
                                  .filter(Boolean);
                              m(o);
                            })();
                      });
                      return (
                        M.observe(e, {
                          attributes: !0,
                          characterData: !1,
                          subtree: !0,
                          childList: !0,
                        }),
                        () => {
                          M.disconnect(), s(), c && m([]);
                        }
                      );
                    })(e);
                    return () => {
                      o(), u(null);
                    };
                  },
                  [a],
                ),
              },
              (0, s.createElement)(Pe.__unstableEditorStyles, { styles: N }),
              (0, s.createElement)(
                'style',
                null,
                `\n\t\t\t\t\t\t.block-editor-block-list__block::before,\n\t\t\t\t\t\t.is-selected::after,\n\t\t\t\t\t\t.is-hovered::after,\n\t\t\t\t\t\t.block-list-appender {\n\t\t\t\t\t\t\tdisplay: none !important;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.block-editor-block-list__block.is-selected {\n\t\t\t\t\t\t\tbox-shadow: none !important;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.block-editor-rich-text__editable {\n\t\t\t\t\t\t\tpointer-events: none !important;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.wp-block-site-title .block-editor-rich-text__editable {\n\t\t\t\t\t\t\tpointer-events: all !important;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.wp-block-navigation-item .wp-block-navigation-item__content,\n\t\t\t\t\t\t.wp-block-navigation .wp-block-pages-list__item__link {\n\t\t\t\t\t\t\tpointer-events: all !important;\n\t\t\t\t\t\t\tcursor: pointer !important;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t${r}\n\t\t\t\t\t`,
              ),
              (0, s.createElement)(Mo, { renderAppender: !1 }),
              (0, s.createElement)(lo, null),
              Dt(p.flowType) && (0, s.createElement)(ao, { fontFamilies: y, onLoad: oo.noop }),
            ),
          ),
        );
      }
      const yo = e => {
          const [t, { width: o }] = (0, Zt.useResizeObserver)();
          return (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              'div',
              { style: { position: 'relative', width: '100%', height: 0 } },
              t,
            ),
            (0, s.createElement)(
              'div',
              { className: 'auto-block-preview__container' },
              !!o && (0, s.createElement)(mo, (0, Wt.Z)({}, e, { containerWidth: o })),
            ),
          );
        },
        po = (0, s.memo)(
          ({ blocks: e, settings: t, useSubRegistry: o = !0, onChange: r, ...n }) => {
            const a = Array.isArray(e) ? e : [e];
            return (0, s.createElement)(
              Pe.BlockEditorProvider,
              { value: a, settings: t, onChange: r, useSubRegistry: o },
              (0, s.createElement)(yo, (0, Wt.Z)({ settings: t }, n)),
            );
          },
        );
      function No({
        contentRef: e,
        children: t,
        tabIndex: o = 0,
        scale: r = 1,
        frameSize: n = 0,
        expand: a = !1,
        readonly: i,
        forwardedRef: l,
        loadStyles: c = !0,
        loadScripts: M = !1,
        ...g
      }) {
        const [u, m] = (0, s.useState)(),
          { resolvedAssets: y } = (0, d.useSelect)(
            e => ({ resolvedAssets: e(Pe.store).getSettings().__unstableResolvedAssets }),
            [],
          ),
          { styles: p = '', scripts: N = '' } = y,
          [I, { height: D }] = (0, Zt.useResizeObserver)(),
          E = (0, Zt.useRefEffect)(e => {
            e._load = () => {
              m(e.contentDocument);
            };
          }, []),
          w = (0, Zt.useDisabled)({ isDisabled: !i }),
          z = (0, Zt.useMergeRefs)([e, w]),
          k = `<!doctype html>\n<html>\n\t<head>\n\t\t<script>window.frameElement._load()<\/script>\n\t\t<style>html{height:auto!important;min-height:100%;}body{margin:0}</style>\n\t\t${
            c ? p : ''
          }\n\t\t${
            M ? N : ''
          }\n\t</head>\n\t<body>\n\t\t<script>document.currentScript.parentElement.remove()<\/script>\n\t</body>\n</html>`,
          [h, f] = (0, s.useMemo)(() => {
            const e = URL.createObjectURL(new window.Blob([k], { type: 'text/html' }));
            return [e, () => URL.revokeObjectURL(e)];
          }, [k]);
        (0, s.useEffect)(() => f, [f]);
        const A = (D * (1 - r)) / 2;
        return (0, s.createElement)(
          s.Fragment,
          null,
          (0, s.createElement)(
            'iframe',
            (0, Wt.Z)({}, g, {
              style: {
                ...g.style,
                height: a ? D : g.style?.height,
                marginTop: 1 !== r ? -A + n : g.style?.marginTop,
                marginBottom: 1 !== r ? -A + n : g.style?.marginBottom,
                transform: 1 !== r ? `scale( ${r} )` : g.style?.transform,
                transition: 'all .3s',
              },
              ref: (0, Zt.useMergeRefs)([l, E]),
              tabIndex: o,
              src: h,
              title: (0, T.__)('Editor canvas', 'woocommerce'),
              name: 'editor-canvas',
            }),
            u &&
              (0, s.createPortal)(
                (0, s.createElement)(
                  'body',
                  { ref: z, className: ce()('block-editor-iframe__body', 'editor-styles-wrapper') },
                  I,
                  (0, s.createElement)(j.__experimentalStyleProvider, { document: u }, t),
                ),
                u.documentElement,
              ),
          ),
        );
      }
      const Io = (0, s.forwardRef)(function(e, t) {
          return (0, d.useSelect)(e => e(Pe.store).getSettings().__internalIsInitialized, [])
            ? (0, s.createElement)(No, (0, Wt.Z)({}, e, { forwardedRef: t }))
            : null;
        }),
        Do = (0,
        to.memo)(
          ({
            renderedBlocks: e,
            settings: t,
            additionalStyles: o,
            isScrollable: r,
            onClickNavigationItem: n,
            onChange: a,
          }) =>
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store__block-editor' },
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-block-preview-container' },
                (0, s.createElement)(po, {
                  blocks: e,
                  onChange: a,
                  settings: t,
                  additionalStyles: o,
                  isNavigable: !1,
                  isScrollable: r,
                  onClickNavigationItem: n,
                  useSubRegistry: !1,
                  autoScale: !1,
                  setLogoBlockContext: !0,
                  CustomIframeComponent: Io,
                }),
              ),
            ),
        ),
        To = (0, s.createContext)({
          highlightedBlockClientId: null,
          setHighlightedBlockClientId: e => {},
          resetHighlightedBlockClientId: () => {},
        }),
        Eo = ({ children: e }) => {
          const [t, o] = (0, s.useState)(null);
          return (0, s.createElement)(
            To.Provider,
            {
              value: {
                highlightedBlockClientId: t,
                setHighlightedBlockClientId: o,
                resetHighlightedBlockClientId: () => {
                  o(null);
                },
              },
            },
            e,
          );
        },
        wo = (e, t) => {
          const [o, r, n] = (0, l.useEntityBlockEditor)('postType', e, { id: t });
          return [null != o ? o : [], r, n];
        },
        jo = (e, t) => {
          const o = e.find(
              e =>
                'core/cover' === e.name &&
                e.attributes.url.includes('music-black-and-white-white-photography.jpg'),
            ),
            r = o?.innerBlocks[0].innerBlocks.find(e => 'core/buttons' === e.name),
            n = r?.innerBlocks[0];
          return n ? (t(n), e) : e;
        },
        zo = { color: { background: '#ffffff', text: '#000000' } },
        { useHistory: ko } = (0, Ut.U)(Qt.privateApis),
        { GlobalStylesContext: ho } = (0, Ut.U)(Pe.privateApis),
        fo = () => {
          var e;
          const t = ko(),
            o = (0, eo.Z)(),
            r = (0, d.useSelect)(e => e(l.store).__experimentalGetTemplateForLink('/'), []),
            { templateType: n } = (0, d.useSelect)(e => {
              const { getEditedPostType: t } = (0, Ut.U)(e(Bt.h));
              return { templateType: t() };
            }, []),
            [a, , i] = wo(n, null !== (e = r?.id) && void 0 !== e ? e : ''),
            c = (0, u.useQuery)(),
            { currentState: M } = (0, s.useContext)(Mn),
            g = ((e, t = 'topDown', o = 0.2) => {
              const [r, n] = (0, s.useState)(0.05),
                a = (0, Vt.T)();
              return (
                (0, s.useEffect)(() => {
                  let r = document.querySelector(e);
                  const a = 'IFRAME' === r?.tagName;
                  a && (r = r.contentDocument);
                  const i = () => {
                    if (!r) return;
                    const e = a ? r.documentElement : r,
                      i = e.clientWidth > 480 ? o : 0.05,
                      s = e.scrollHeight - e.clientHeight,
                      l = e.scrollTop,
                      c = s * i;
                    let M;
                    (M = 'bottomUp' === t ? s / c - l / c : l / c),
                      (M = 0.1 + 0.9 * M),
                      (M = Math.max(0.1, Math.min(M, 1))),
                      n(M);
                  };
                  return (
                    r && r.addEventListener('scroll', i),
                    () => {
                      r && r.removeEventListener('scroll', i);
                    }
                  );
                }, [e, t, o, a]),
                r
              );
            })(
              '.woocommerce-customize-store__block-editor iframe',
              '/customize-store/assembler-hub/footer' === c.path ? 'bottomUp' : 'topDown',
            ),
            { records: m } = (0, l.useEntityRecords)('postType', 'page', {
              per_page: 100,
              _fields: ['id', 'link', 'menu_order', 'parent', 'title', 'type'],
              orderby: 'menu_order',
              order: 'asc',
            }),
            y = (0, s.useCallback)(
              e => {
                const o =
                  ((e, t) => {
                    const o = e.target,
                      r =
                        t.find(e => e.link === o.href) ||
                        t.find(e => e.title.rendered === o.innerText);
                    return r ? r.id : null;
                  })(e, m) ||
                  (e => {
                    const t = e.target.closest('.wp-block-navigation-link');
                    if (t) {
                      const e = t.getAttribute('data-block'),
                        o = select(Pe.store).getBlocksByClientId(e);
                      if (o && o.length) return o[0].attributes.id;
                    }
                    return null;
                  })(e);
                if (o) return void t.push({ ...c, postId: o, postType: 'page' });
                const { postId: r, postType: n, ...a } = c;
                t.push({ ...a });
              },
              [t, c, m],
            ),
            { highlightedBlockClientId: p } = (0, s.useContext)(To),
            N = null !== p,
            I = N ? `\n\t\t.wp-block.preview-opacity {\n\t\t\topacity: ${g};\n\t\t}\n\t` : '',
            D = a.map(e => e.clientId),
            { updateBlockAttributes: T } = (0, d.useDispatch)(Pe.store),
            { user: E } = (0, s.useContext)(ho);
          (0, s.useEffect)(() => {
            (0, oo.isEqual)(Ue[0].settings.color, E.settings.color)
              ? jo(a, e => {
                  T(e.clientId, { style: zo, className: '' });
                })
              : jo(a, e => {
                  T(e.clientId, { style: {} });
                });
          }, [a, T, E.settings.color]),
            (0, s.useEffect)(() => {
              const { blockIdToHighlight: e, restOfBlockIds: t } = D.reduce(
                (e, t) =>
                  N && t !== p
                    ? {
                        blockIdToHighlight: e.blockIdToHighlight,
                        restOfBlockIds: [...e.restOfBlockIds, t],
                      }
                    : { blockIdToHighlight: t, restOfBlockIds: e.restOfBlockIds },
                { blockIdToHighlight: null, restOfBlockIds: [] },
              );
              T(e, { className: '' }), T(t, { className: ' preview-opacity' });
            }, [D, p, N, T]);
          const w = (0, s.useMemo)(
            () => !('object' == typeof M && 'transitional' === M.transitionalScreen),
            [M],
          );
          return (0, s.createElement)(Do, {
            renderedBlocks: a,
            isScrollable: w,
            onChange: i,
            settings: o,
            additionalStyles: I,
            onClickNavigationItem: y,
          });
        },
        Ao = ({ isLoading: e }) => {
          const { context: t, hasPageContentFocus: o } = (0, d.useSelect)(e => {
              const { getEditedPostContext: t, hasPageContentFocus: o } = (0, Ut.U)(e(Bt.h));
              return { context: t(), hasPageContentFocus: o };
            }, []),
            { setEditedPostContext: r } = (0, d.useDispatch)(Bt.h),
            n = (0, s.useMemo)(() => {
              const { postType: e, postId: n, ...a } = null != t ? t : {};
              return {
                ...(o ? t : a),
                queryContext: [
                  t?.queryContext || { page: 1 },
                  e => r({ ...t, queryContext: { ...t?.queryContext, ...e } }),
                ],
              };
            }, [o, t, r]);
          return (
            (0, s.useEffect)(() => {
              e || (0, L.eP)();
            }, [e]),
            (0, s.createElement)(
              s.Fragment,
              null,
              e ? (0, s.createElement)(qt.Z, null) : null,
              (0, s.createElement)(
                Pe.BlockContextProvider,
                { value: n },
                (0, s.createElement)(Xt.v4, {
                  enableRegionNavigation: !1,
                  className: ce()(
                    'woocommerce-customize-store__edit-site-editor',
                    'edit-site-editor__interface-skeleton',
                    { 'show-icon-labels': !1, 'is-loading': e },
                  ),
                  content: (0, s.createElement)(
                    s.Fragment,
                    null,
                    (0, s.createElement)($t.w, null),
                    (0, s.createElement)(fo, null),
                  ),
                }),
              ),
            )
          );
        };
      var _o = o(63623),
        xo = o(68591),
        Lo = o(89690),
        Oo = o(28897),
        So = o(58358),
        bo = o(41890),
        Co = o(78959),
        vo = o(83619),
        Qo = o(63597);
      const Uo = ({
          setOpenWarningModal: e,
          onExitClicked: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, s.createElement)(
            j.Modal,
            {
              className: o,
              title: (0, T.__)('Are you sure you want to exit?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, s.createElement)(
              'p',
              null,
              (0, T.__)(
                "You'll lose any changes you've made to your store's design and will start the process again.",
                'woocommerce',
              ),
            ),
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, s.createElement)(
                j.Button,
                { onClick: t, variant: 'link' },
                (0, T.__)('Exit and lose changes', 'woocommerce'),
              ),
              (0, s.createElement)(
                j.Button,
                { onClick: () => e(!1), variant: 'primary' },
                (0, T.__)('Continue designing', 'woocommerce'),
              ),
            ),
          ),
        { useLocation: Fo } = (0, Ut.U)(Qt.privateApis),
        Yo = ({
          isRoot: e,
          title: t,
          actions: o,
          meta: r,
          content: n,
          footer: a,
          description: i,
          backPath: l,
          onNavigateBackClick: c,
        }) => {
          const { context: M } = (0, s.useContext)(Mn),
            [g, u] = (0, s.useState)(!1),
            m = Fo(),
            d = (0, j.__experimentalUseNavigator)(),
            y = (0, T.isRTL)() ? vo.Z : E.Z,
            p = M?.flowType;
          return (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              j.__experimentalVStack,
              {
                className: ce()('edit-site-sidebar-navigation-screen__main', { 'has-footer': !!a }),
                spacing: 0,
                justify: 'flex-start',
              },
              (0, s.createElement)(
                j.__experimentalHStack,
                {
                  spacing: 4,
                  alignment: 'flex-start',
                  className: 'edit-site-sidebar-navigation-screen__title-icon',
                },
                !e &&
                  (0, s.createElement)(Qo.Z, {
                    onClick: () => {
                      c?.();
                      const e = null != l ? l : m.state?.backPath;
                      e ? d.goTo(e, { isBack: !0 }) : d.goToParent();
                    },
                    icon: y,
                    label: (0, T.__)('Back', 'woocommerce'),
                    showTooltip: !1,
                  }),
                e &&
                  !(0, ie.id)() &&
                  (0, s.createElement)(Qo.Z, {
                    onClick: () => {
                      u(!0);
                    },
                    icon: y,
                    label: (0, T.__)('Back', 'woocommerce'),
                    showTooltip: !1,
                  }),
                (0, s.createElement)(
                  j.__experimentalHeading,
                  {
                    className: 'edit-site-sidebar-navigation-screen__title',
                    style: (0, ie.id)() ? { padding: '0 16px' } : {},
                    color: '#e0e0e0',
                    level: 1,
                    size: 20,
                  },
                  t,
                ),
                o &&
                  (0, s.createElement)(
                    'div',
                    { className: 'edit-site-sidebar-navigation-screen__actions' },
                    o,
                  ),
              ),
              r &&
                (0, s.createElement)(
                  s.Fragment,
                  null,
                  (0, s.createElement)(
                    'div',
                    { className: 'edit-site-sidebar-navigation-screen__meta' },
                    r,
                  ),
                ),
              (0, s.createElement)(
                'div',
                { className: 'edit-site-sidebar-navigation-screen__content' },
                i &&
                  (0, s.createElement)(
                    'p',
                    { className: 'edit-site-sidebar-navigation-screen__description' },
                    i,
                  ),
                n,
              ),
            ),
            a &&
              (0, s.createElement)(
                'footer',
                { className: 'edit-site-sidebar-navigation-screen__footer' },
                a,
              ),
            g &&
              (0, s.createElement)(Uo, {
                setOpenWarningModal: u,
                onExitClicked: () => {
                  window.parent.__wcCustomizeStore.sendEventToIntroMachine(
                    p && Dt(p)
                      ? { type: 'GO_BACK_TO_DESIGN_WITH_AI' }
                      : { type: 'GO_BACK_TO_DESIGN_WITHOUT_AI' },
                  );
                },
              }),
          );
        };
      var Po = o(17062);
      const Bo = () => {
        const {
            context: { flowType: e },
          } = (0, s.useContext)(Mn),
          t = e === z.AIOnline;
        return (0, s.createElement)(Yo, {
          isRoot: !0,
          title: (0, T.__)("Let's get creative", 'woocommerce'),
          description: (0, s.createInterpolateElement)(
            (0, T.__)(
              'Use our style and layout tools to customize the design of your store. Content and images can be added or changed via the <EditorLink>Editor</EditorLink> later.',
              'woocommerce',
            ),
            {
              EditorLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_editor_link_click', {
                    source: 'main',
                  }),
                  window.open(`${Po.SX}site-editor.php`, '_blank'),
                  !1
                ),
                href: '',
              }),
            },
          ),
          content: (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              'div',
              { className: 'edit-site-sidebar-navigation-screen-patterns__group-header' },
              (0, s.createElement)(
                j.__experimentalHeading,
                { level: 2 },
                (0, T.__)('Style', 'woocommerce'),
              ),
            ),
            (0, s.createElement)(
              j.__experimentalItemGroup,
              null,
              (0, s.createElement)(
                j.__experimentalNavigatorButton,
                {
                  as: Co.Z,
                  path: '/customize-store/assembler-hub/logo',
                  withChevron: !0,
                  icon: _o.Z,
                  onClick: () => {
                    (0, O.L)('customize_your_store_assembler_hub_sidebar_item_click', {
                      item: 'logo',
                    });
                  },
                },
                (0, T.__)('Add your logo', 'woocommerce'),
              ),
              (0, s.createElement)(
                j.__experimentalNavigatorButton,
                {
                  as: Co.Z,
                  path: '/customize-store/assembler-hub/color-palette',
                  withChevron: !0,
                  icon: xo.Z,
                  onClick: () => {
                    (0, O.L)('customize_your_store_assembler_hub_sidebar_item_click', {
                      item: 'color-palette',
                    });
                  },
                },
                t
                  ? (0, T.__)('Change the color palette', 'woocommerce')
                  : (0, T.__)('Choose your color palette', 'woocommerce'),
              ),
              (0, s.createElement)(
                j.__experimentalNavigatorButton,
                {
                  as: Co.Z,
                  path: '/customize-store/assembler-hub/typography',
                  withChevron: !0,
                  icon: Lo.Z,
                  onClick: () => {
                    (0, O.L)('customize_your_store_assembler_hub_sidebar_item_click', {
                      item: 'typography',
                    });
                  },
                },
                t
                  ? (0, T.__)('Change fonts', 'woocommerce')
                  : (0, T.__)('Choose fonts', 'woocommerce'),
              ),
            ),
            (0, s.createElement)(
              'div',
              { className: 'edit-site-sidebar-navigation-screen-patterns__group-header' },
              (0, s.createElement)(
                j.__experimentalHeading,
                { level: 2 },
                (0, T.__)('Layout', 'woocommerce'),
              ),
            ),
            (0, s.createElement)(
              j.__experimentalItemGroup,
              null,
              (0, s.createElement)(
                j.__experimentalNavigatorButton,
                {
                  as: Co.Z,
                  path: '/customize-store/assembler-hub/header',
                  withChevron: !0,
                  icon: Oo.Z,
                  onClick: () => {
                    (0, O.L)('customize_your_store_assembler_hub_sidebar_item_click', {
                      item: 'header',
                    });
                  },
                },
                t
                  ? (0, T.__)('Change your header', 'woocommerce')
                  : (0, T.__)('Choose your header', 'woocommerce'),
              ),
              (0, s.createElement)(
                j.__experimentalNavigatorButton,
                {
                  as: Co.Z,
                  path: '/customize-store/assembler-hub/homepage',
                  withChevron: !0,
                  icon: So.Z,
                  onClick: () => {
                    (0, O.L)('customize_your_store_assembler_hub_sidebar_item_click', {
                      item: 'home',
                    });
                  },
                },
                t
                  ? (0, T.__)('Change your homepage', 'woocommerce')
                  : (0, T.__)('Design your homepage', 'woocommerce'),
              ),
              (0, s.createElement)(
                j.__experimentalNavigatorButton,
                {
                  as: Co.Z,
                  path: '/customize-store/assembler-hub/footer',
                  withChevron: !0,
                  icon: bo.Z,
                  onClick: () => {
                    (0, O.L)('customize_your_store_assembler_hub_sidebar_item_click', {
                      item: 'footer',
                    });
                  },
                },
                t
                  ? (0, T.__)('Change your footer', 'woocommerce')
                  : (0, T.__)('Choose your footer', 'woocommerce'),
              ),
            ),
          ),
        });
      };
      var Go = o(39630);
      const { GlobalStylesContext: Ro } = (0, Ut.U)(Pe.privateApis),
        Wo = ({ variation: e, children: t }) => {
          const { base: o, user: r, setUserConfig: n } = (0, s.useContext)(Ro),
            a = (0, s.useMemo)(() => {
              var t, r;
              return {
                user: {
                  settings: null !== (t = e.settings) && void 0 !== t ? t : {},
                  styles: null !== (r = e.styles) && void 0 !== r ? r : {},
                },
                base: o,
                merged: (0, Se.X)(o, e),
                setUserConfig: () => {},
              };
            }, [e, o]),
            i = () => {
              if (
                e.settings.color &&
                r.settings.color &&
                r.settings.color.palette.hasCreatedOwnColors
              ) {
                delete r.settings.color.palette.hasCreatedOwnColors, delete r.styles.color;
                for (const e in r.styles.elements)
                  r.styles.elements[e].color && delete r.styles.elements[e].color;
              }
              const t = ((e, t) => {
                  if (e.settings.typography) {
                    delete t.typography;
                    for (const e in t.elements)
                      t.elements[e].typography && delete t.elements[e].typography;
                  }
                  return t;
                })(e, r.styles),
                o = ((e, t) => ('New - Neutral' === e.title && delete t.blocks['core/button'], t))(
                  e,
                  t,
                );
              n(() => ({
                settings: (0, Se.X)(r.settings, e.settings),
                styles: (0, Se.X)(o, e.styles),
              }));
            },
            l = (0, s.useMemo)(() => {
              if (e.settings.color) return (0, oo.isEqual)(e.settings.color, r.settings.color);
              const { theme: t } = r.settings.typography.fontFamilies;
              return (
                e.settings.typography?.fontFamilies.theme.every(({ slug: e }) =>
                  t.some(({ slug: t }) => t === e),
                ) && t.length === e.settings.typography?.fontFamilies.theme.length
              );
            }, [r, e]);
          let c = e?.title;
          return (
            e?.description &&
              (c = (0, T.sprintf)(
                (0, T.__)('%1$s (%2$s)', 'woocommerce'),
                e?.title,
                e?.description,
              )),
            (0, s.createElement)(
              Pe.BlockEditorProvider,
              { onChange: oo.noop, onInput: oo.noop, settings: {}, useSubRegistry: !0 },
              (0, s.createElement)(
                Ro.Provider,
                { value: a },
                (0, s.createElement)(
                  'div',
                  {
                    className: ce()('woocommerce-customize-store_global-styles-variations_item', {
                      'is-active': l,
                    }),
                    role: 'button',
                    onClick: i,
                    onKeyDown: e => {
                      e.keyCode === Go.ENTER && (e.preventDefault(), i());
                    },
                    tabIndex: '0',
                    'aria-label': c,
                    'aria-current': l,
                  },
                  (0, s.createElement)(
                    'div',
                    {
                      className:
                        'woocommerce-customize-store_global-styles-variations_item-preview',
                    },
                    t,
                  ),
                ),
              ),
            )
          );
        },
        { useGlobalStylesOutput: Zo } = (0, Ut.U)(Pe.privateApis),
        Ho = ({
          width: e,
          height: t,
          inlineCss: o,
          containerResizeListener: r,
          children: n,
          onFocusOut: a,
          iframeInstance: i,
          ...l
        }) => {
          const [c] = Zo(),
            M = (0, to.useMemo)(
              () =>
                c
                  ? [
                      ...c,
                      ...(o ? [{ css: o, isGlobalStyles: !0 }] : []),
                      {
                        css:
                          'html{overflow:hidden}body{min-width: 0;padding: 0;border: none;transform:scale(1);}',
                        isGlobalStyles: !0,
                      },
                    ]
                  : c,
              [o, c],
            );
          return (0, s.createElement)(
            Io,
            (0, Wt.Z)(
              {
                ref: i,
                className: 'global-styles-variation-container__iframe',
                style: { height: t, visibility: e ? 'visible' : 'hidden' },
                tabIndex: -1,
                loadStyles: !1,
                contentRef: (0, Zt.useRefEffect)(e => {
                  const t = e => {
                    e.stopImmediatePropagation(), a?.();
                  };
                  return (
                    e.addEventListener('focusout', t),
                    () => {
                      e.removeEventListener('focusout', t);
                    }
                  );
                }, []),
                scrolling: 'no',
              },
              l,
            ),
            (0, s.createElement)(Pe.__unstableEditorStyles, { styles: null != M ? M : [] }),
            r,
            n,
          );
        },
        { useGlobalSetting: Vo, useGlobalStyle: Jo } = (0, Ut.U)(Pe.privateApis),
        Xo = ({ title: e }) => {
          const [t] = Jo('typography.fontWeight'),
            [o = 'serif'] = Jo('typography.fontFamily'),
            [r = o] = Jo('elements.h1.typography.fontFamily'),
            [n = t] = Jo('elements.h1.typography.fontWeight'),
            [a = 'black'] = Jo('color.text'),
            [i = a] = Jo('elements.h1.color.text'),
            [l = 'white'] = Jo('color.background'),
            [c] = Jo('color.gradient'),
            [M] = Vo('color.palette.theme'),
            [g, { width: u }] = (0, Zt.useResizeObserver)(),
            m = [...new Set(M.map(({ color: e }) => e))],
            d = m.filter(e => e !== l).slice(0, 2);
          return (0, s.createElement)(
            Ho,
            { width: u, height: 44, containerResizeListener: g },
            (0, s.createElement)(
              'div',
              {
                style: {
                  height: u ? 44 : 0,
                  width: '100%',
                  background: null != c ? c : l,
                  cursor: 'pointer',
                },
              },
              (0, s.createElement)(
                'div',
                { style: { height: '100%', overflow: 'hidden' } },
                e
                  ? (0, s.createElement)(
                      j.__experimentalHStack,
                      {
                        spacing: 1.8875,
                        justify: 'center',
                        style: { height: '100%', overflow: 'hidden' },
                      },
                      d.map((e, t) =>
                        (0, s.createElement)('div', {
                          key: t,
                          style: { height: 16, width: 16, background: e, borderRadius: 8 },
                        }),
                      ),
                    )
                  : (0, s.createElement)(
                      j.__experimentalVStack,
                      {
                        spacing: 3,
                        justify: 'center',
                        style: {
                          height: '100%',
                          overflow: 'hidden',
                          padding: 10,
                          boxSizing: 'border-box',
                        },
                      },
                      (0, s.createElement)(
                        'div',
                        {
                          style: {
                            fontSize: 40,
                            fontFamily: r,
                            color: i,
                            fontWeight: n,
                            lineHeight: '1em',
                            textAlign: 'center',
                          },
                        },
                        (0, T.__)('Default', 'woocommerce'),
                      ),
                    ),
              ),
            ),
          );
        },
        Ko = () => {
          const { aiSuggestions: e, isLoading: t } = (0, d.useSelect)(e => {
              const { getOption: t, hasFinishedResolution: o } = e(m.OPTIONS_STORE_NAME);
              return {
                aiSuggestions: t('woocommerce_customize_store_ai_suggestions'),
                isLoading: !o('getOption', ['woocommerce_customize_store_ai_suggestions']),
              };
            }),
            [o, r] = (0, s.useState)([]);
          return (
            (0, s.useEffect)(() => {
              t ||
                r(
                  e?.defaultColorPalette?.bestColors?.length > 0 && e?.defaultColorPalette?.default
                    ? Ue.filter(
                        t =>
                          e.defaultColorPalette?.bestColors.includes(t.title) ||
                          e.defaultColorPalette.default === t.title,
                      )
                    : Fe,
                );
            }, [t, e?.defaultColorPalette]),
            t
              ? (0, s.createElement)(
                  'div',
                  { className: 'woocommerce-customize-store_color-palette-spinner-container' },
                  (0, s.createElement)(j.Spinner, null),
                )
              : (0, s.createElement)(
                  j.__experimentalGrid,
                  { columns: 3, className: 'woocommerce-customize-store_color-palette-container' },
                  o?.map((e, t) =>
                    (0, s.createElement)(
                      Wo,
                      { key: t, variation: e },
                      (0, s.createElement)(Xo, { title: e?.title }),
                    ),
                  ),
                )
          );
        },
        {
          useGlobalStyle: qo,
          useGlobalSetting: $o,
          useSettingsForBlockElement: er,
          ColorPanel: tr,
          GlobalStylesContext: or,
        } = (0, Ut.U)(Pe.privateApis),
        rr = () => {
          const { setUserConfig: e } = (0, s.useContext)(or),
            [t] = qo('', void 0, 'user', { shouldDecodeEncode: !1 }),
            [o, r] = qo('', void 0, 'all', { shouldDecodeEncode: !1 }),
            [n] = $o(''),
            a = er(n);
          return (0, s.createElement)(tr, {
            inheritedValue: o,
            value: t,
            onChange: (0, oo.debounce)(t => {
              r({
                ...t,
                blocks: {
                  ...t.blocks,
                  'core/button': { color: {} },
                  'core/heading': { color: {} },
                },
              }),
                e(e => ({
                  ...e,
                  settings: (0, Se.X)(e.settings, {
                    color: { palette: { hasCreatedOwnColors: !0 } },
                  }),
                }));
            }, 100),
            settings: a,
          });
        },
        { useGlobalStyle: nr, useGlobalSetting: ar } = (0, Ut.U)(Pe.privateApis),
        ir = { fontSize: '13vw', lineHeight: '20px', color: '#000000' },
        sr = e =>
          e
            .split(',')
            .map(e => ((e = e.trim()).startsWith('"') ? `'${e}'` : e))
            .join(', '),
        lr = () => {
          const [e] = ar('typography.fontFamilies.theme'),
            [t = 'serif'] = nr('typography.fontFamily'),
            [o = 'normal'] = nr('typography.fontStyle'),
            [r = '-0.15px'] = nr('typography.letterSpacing'),
            [n = 400] = nr('typography.fontWeight'),
            [a = t] = nr('elements.heading.typography.fontFamily'),
            [i = o] = nr('elements.heading.typography.fontStyle'),
            [l = n] = nr('elements.heading.typography.fontWeight'),
            [c = r] = nr('elements.heading.typography.letterSpacing'),
            [M, { width: g }] = (0, Zt.useResizeObserver)(),
            u = (0, Zt.useViewportMatch)('large'),
            m = u ? 106 : 74,
            d = g ? g / (u ? 136 : 120) : 1,
            y = Math.ceil(m * d),
            p = e.filter(({ slug: e }) => 'system-font' !== e),
            { context: N } = (0, s.useContext)(Mn),
            [I, D] = (0, s.useState)((Dt(N.flowType) && !p.length) || Tt(N.flowType)),
            T = t => {
              const o = e.find(({ fontFamily: e }) => e === t);
              return o?.name || o?.fontFamily || t;
            },
            E = (0, s.useMemo)(() => T(t), [t, e]),
            w = (0, s.useMemo)(() => T(a), [a, e]),
            z = () => D(!0),
            k = (0, s.useRef)(null);
          return (0, s.createElement)(
            Ho,
            { width: g, height: y, containerResizeListener: M, iframeInstance: k },
            (0, s.createElement)(
              s.Fragment,
              null,
              (0, s.createElement)(
                'div',
                {
                  style: {
                    height: g ? y : 0,
                    width: '100%',
                    background: 'white',
                    cursor: 'pointer',
                  },
                },
                (0, s.createElement)(
                  'div',
                  { style: { height: '100%', overflow: 'hidden', opacity: I ? 1 : 0 } },
                  (0, s.createElement)(
                    j.__experimentalHStack,
                    {
                      spacing: 10 * d,
                      justify: 'flex-start',
                      style: { height: '100%', overflow: 'hidden' },
                    },
                    (0, s.createElement)(
                      j.__experimentalVStack,
                      {
                        spacing: 1,
                        style: { margin: '10px', width: '100%', textAlign: u ? 'center' : 'left' },
                      },
                      (0, s.createElement)(
                        'div',
                        {
                          'aria-label': w,
                          style: {
                            ...ir,
                            letterSpacing: c,
                            fontWeight: l,
                            fontFamily: sr(a),
                            fontStyle: i,
                          },
                        },
                        w,
                      ),
                      (0, s.createElement)(
                        'div',
                        {
                          'aria-label': E,
                          style: {
                            ...ir,
                            fontSize: '13px',
                            letterSpacing: r,
                            fontWeight: n,
                            fontFamily: sr(t),
                            fontStyle: o,
                          },
                        },
                        E,
                      ),
                    ),
                  ),
                ),
              ),
              Dt(N.flowType) && (0, s.createElement)(ao, { fontFamilies: e, onLoad: z }),
              Tt(N.flowType) &&
                (0, s.createElement)(no, { fontFamilies: e, onLoad: z, iframeInstance: k.current }),
            ),
          );
        },
        cr = () => {
          const { aiSuggestions: e, isLoading: t } = (0, d.useSelect)(e => {
              const { getOption: t, hasFinishedResolution: o } = e(m.OPTIONS_STORE_NAME);
              return {
                aiSuggestions: t('woocommerce_customize_store_ai_suggestions'),
                isLoading: !o('getOption', ['woocommerce_customize_store_ai_suggestions']),
              };
            }),
            { useGlobalSetting: o } = (0, Ut.U)(Pe.privateApis),
            [r] = o('typography.fontFamilies.custom'),
            [n] = o('typography.fontFamilies', void 0, 'base'),
            { context: a } = (0, s.useContext)(Mn),
            i = a.flowType === z.AIOnline,
            l = a.isFontLibraryAvailable,
            c = (0, d.useSelect)(
              e => 'yes' === e(m.OPTIONS_STORE_NAME).getOption('woocommerce_allow_tracking'),
            ),
            M = (0, s.useMemo)(
              () =>
                Dt(a.flowType)
                  ? i && e?.lookAndFeel
                    ? Qe.filter(t => t.lookAndFeel.includes(e?.lookAndFeel))
                    : Ce
                  : c && l
                  ? Ce.map(e => {
                      const t = e.settings.typography.fontFamilies,
                        o = r.filter(e => t.theme.some(t => t.slug === e.slug));
                      return { ...e, settings: { typography: { fontFamilies: { theme: o } } } };
                    }, [])
                  : ve.map(e => {
                      const t = e.settings.typography.fontFamilies,
                        o = n.theme.filter(e => t.theme.some(t => t.fontFamily === e.name));
                      return { ...e, settings: { typography: { fontFamilies: { theme: o } } } };
                    }),
              [i, e?.lookAndFeel, n, a.flowType, r, l, c],
            );
          return t
            ? (0, s.createElement)(
                'div',
                { className: 'woocommerce-customize-store_font-pairing-spinner-container' },
                (0, s.createElement)(j.Spinner, null),
              )
            : (0, s.createElement)(
                j.__experimentalGrid,
                {
                  columns: 2,
                  gap: 3,
                  className: 'woocommerce-customize-store_font-pairing-container',
                  style: { opacity: 0, animation: 'containerFadeIn 300ms ease-in-out forwards' },
                },
                M.map((e, t) =>
                  (0, s.createElement)(
                    Wo,
                    { key: t, variation: e },
                    (0, s.createElement)(lr, null),
                  ),
                ),
              );
        },
        { GlobalStylesContext: Mr } = (0, Ut.U)(Pe.privateApis),
        gr = () => {
          const { user: e } = (0, s.useContext)(Mr),
            t = !(!e.settings.color || !e.settings.color.palette.hasCreatedOwnColors);
          return (0, s.createElement)(
            'div',
            {
              className: 'woocommerce-customize-store_sidebar-color-content',
              style: { opacity: 0, animation: 'containerFadeIn 300ms ease-in-out forwards' },
            },
            (0, s.createElement)(Ko, null),
            (0, s.createElement)(
              j.PanelBody,
              {
                className: 'woocommerce-customize-store__color-panel-container',
                title: (0, T.__)('or create your own', 'woocommerce'),
                initialOpen: t,
              },
              (0, s.createElement)(rr, null),
            ),
          );
        },
        ur = () => {
          const {
              context: { flowType: e },
            } = (0, s.useContext)(Mn),
            t = e === z.AIOnline,
            o = t
              ? (0, T.__)('Change the color palette', 'woocommerce')
              : (0, T.__)('Choose your color palette', 'woocommerce'),
            r = t
              ? (0, T.__)(
                  'Based on the info you shared, our AI tool recommends using this color palette. Want to change it? You can select or add new colors below, or update them later in <EditorLink>Editor</EditorLink> | <StyleLink>Styles</StyleLink>.',
                  'woocommerce',
                )
              : (0, T.__)(
                  'Choose the color palette that best suits your brand. Want to change it? Create your custom color palette below, or update it later in <EditorLink>Editor</EditorLink> | <StyleLink>Styles</StyleLink>.',
                  'woocommerce',
                );
          return (0, s.createElement)(Yo, {
            title: o,
            description: (0, s.createInterpolateElement)(r, {
              EditorLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_editor_link_click', {
                    source: 'color-palette',
                  }),
                  window.open(`${Po.SX}site-editor.php`, '_blank'),
                  !1
                ),
                href: '',
              }),
              StyleLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_style_link_click', {
                    source: 'color-palette',
                  }),
                  window.open(
                    `${Po.SX}site-editor.php?path=%2Fwp_global_styles&canvas=edit`,
                    '_blank',
                  ),
                  !1
                ),
                href: '',
              }),
            }),
            content: (0, s.createElement)(gr, null),
          });
        },
        mr = () => {
          const { context: e, sendEvent: t } = (0, s.useContext)(Mn),
            o = e.flowType === z.AIOnline,
            r = e.isFontLibraryAvailable,
            n = o
              ? (0, T.__)('Change your font', 'woocommerce')
              : (0, T.__)('Choose fonts', 'woocommerce'),
            a = o
              ? (0, T.__)(
                  "AI has selected a font pairing that's the best fit for your business. If you'd like to change them, select a new option below now, or later in <EditorLink>Editor</EditorLink> | <StyleLink>Styles</StyleLink>.",
                  'woocommerce',
                )
              : (0, T.__)(
                  'Select the pair of fonts that best suits your brand. The larger font will be used for headings, and the smaller for supporting content. You can change your font at any time in <EditorLink>Editor</EditorLink> | <StyleLink>Styles</StyleLink>.',
                  'woocommerce',
                ),
            i = (0, d.useSelect)(e =>
              e(m.OPTIONS_STORE_NAME).getOption('woocommerce_allow_tracking'),
            ),
            l = 'no' === i || !i;
          let c;
          c =
            l && !r
              ? (0, T.__)(
                  'Upgrade to the <WordPressLink>latest version of WordPress</WordPressLink> and <OptInModal>opt in to usage tracking</OptInModal> to get access to more fonts.',
                  'woocommerce',
                )
              : l && r
              ? (0, T.__)(
                  'Opt in to <OptInModal>usage tracking</OptInModal> to get access to more fonts.',
                  'woocommerce',
                )
              : i && !r
              ? (0, T.__)(
                  'Upgrade to the <WordPressLink>latest version of WordPress</WordPressLink> to get access to more fonts.',
                  'woocommerce',
                )
              : '';
          const [M, g] = (0, s.useState)(!1),
            u = () => g(!1),
            [p, N] = (0, s.useState)(!0);
          return (0, s.createElement)(Yo, {
            title: n,
            description: (0, s.createInterpolateElement)(a, {
              EditorLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_editor_link_click', {
                    source: 'typography',
                  }),
                  window.open(`${Po.SX}site-editor.php`, '_blank'),
                  !1
                ),
                href: '',
              }),
              StyleLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_style_link_click', {
                    source: 'typography',
                  }),
                  window.open(`${Po.SX}site-editor.php?path=%2Fwp_global_styles`, '_blank'),
                  !1
                ),
                href: '',
              }),
            }),
            content: (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store_sidebar-typography-content' },
              r && (0, s.createElement)(cr, null),
              c &&
                (0, s.createElement)(
                  'div',
                  { className: 'woocommerce-customize-store_sidebar-typography-upgrade-notice' },
                  (0, s.createElement)(
                    'h4',
                    null,
                    (0, T.__)('Want more font pairings?', 'woocommerce'),
                  ),
                  (0, s.createElement)(
                    'p',
                    null,
                    (0, s.createInterpolateElement)(c, {
                      WordPressLink: (0, s.createElement)(j.Button, {
                        href: `${Po.SX}update-core.php`,
                        variant: 'link',
                      }),
                      OptInModal: (0, s.createElement)(j.Button, {
                        onClick: () => {
                          g(!0);
                        },
                        variant: 'link',
                      }),
                    }),
                  ),
                  M &&
                    (0, s.createElement)(
                      j.Modal,
                      {
                        className: 'woocommerce-customize-store__opt-in-usage-tracking-modal',
                        title: (0, T.__)('Get more fonts', 'woocommerce'),
                        onRequestClose: u,
                        shouldCloseOnClickOutside: !1,
                      },
                      (0, s.createElement)(j.CheckboxControl, {
                        className: 'core-profiler__checkbox',
                        label: (0, w.Z)({
                          mixedString: (0, T.__)(
                            'I would like to get store updates, including new fonts, on an ongoing basis. In doing so, I agree to share my data to tailor my store setup experience, get more relevant content, and help make WooCommerce better for everyone. You can opt out at any time in WooCommerce settings. {{link}}Learn more about usage tracking{{/link}}.',
                            'woocommerce',
                          ),
                          components: {
                            link: (0, s.createElement)(y.Link, {
                              href: 'https://woocommerce.com/usage-tracking?utm_medium=product',
                              target: '_blank',
                              type: 'external',
                            }),
                          },
                        }),
                        checked: p,
                        onChange: N,
                      }),
                      (0, s.createElement)(
                        'div',
                        {
                          className:
                            'woocommerce-customize-store__design-change-warning-modal-footer',
                        },
                        (0, s.createElement)(
                          j.Button,
                          {
                            onClick: () => {
                              (0, O.L)(
                                'customize_your_store_assembler_hub_skip_opt_in_usage_tracking',
                              ),
                                u();
                            },
                            variant: 'link',
                          },
                          (0, T.__)('Cancel', 'woocommerce'),
                        ),
                        (0, s.createElement)(
                          j.Button,
                          {
                            onClick: () => {
                              (0, O.L)('customize_your_store_assembler_hub_opt_in_usage_tracking'),
                                (0, L.cL)(window)
                                  ? (0, L.nO)({ type: 'INSTALL_FONTS' })
                                  : t('INSTALL_FONTS');
                            },
                            variant: 'primary',
                            disabled: !p,
                          },
                          (0, T.__)('Opt in', 'woocommerce'),
                        ),
                      ),
                    ),
                ),
            ),
          });
        },
        dr = (
          e = '.edit-site-sidebar-navigation-screen__content .block-editor-block-patterns-list__item',
        ) => {
          const [t, o] = (0, s.useState)();
          return (
            (0, s.useEffect)(() => {
              document.querySelectorAll(e).forEach(e => {
                e.getAttribute('aria-label') === t?.title
                  ? e.classList.add('is-selected')
                  : e.classList.remove('is-selected');
              });
            }, [t, e]),
            { selectedPattern: t, setSelectedPattern: o }
          );
        },
        yr = ({ editorSelector: e, scrollDirection: t = 'bottom' }) => {
          const o = (0, Vt.T)(),
            r = (0, s.useCallback)(() => {
              const o = document.querySelector(e);
              o &&
                o.contentWindow?.scrollTo({
                  left: 0,
                  top: ('bottom' === t && o.contentDocument?.body.scrollHeight) || 0,
                });
            }, [t, e]);
          return (
            (0, s.useEffect)(() => {
              o || r();
            }, [o, r]),
            { scroll: r }
          );
        },
        pr = (e, t) => {
          const o = t.attributes;
          return (
            o.className &&
              o.className.includes('preview-opacity') &&
              (o.className = o.className.replaceAll(' preview-opacity', '')),
            e.find(e => {
              const r = e.blocks[0];
              return (
                r.innerBlocks.length === t.innerBlocks.length && (0, oo.isEqual)(r.attributes, o)
              );
            })
          );
        },
        Nr = ({ showTooltip: e, title: t, children: o }) =>
          e
            ? (0, s.createElement)(j.Tooltip, { text: t }, (0, s.createElement)('span', null, o))
            : (0, s.createElement)(s.Fragment, null, o);
      function Ir({ pattern: e, onClick: t, onHover: o, composite: r, showTooltip: n }) {
        const { blocks: a, viewportWidth: i } = e,
          l = `block-editor-block-patterns-list__item-description-${(0, Zt.useInstanceId)(Ir)}`,
          c = (0, d.useSelect)(e => e(Pe.store).getSettings(), []),
          M = (0, s.useMemo)(() => ({ ...c, __unstableIsPreviewMode: !0 }), [c]);
        return (0, s.createElement)(
          'div',
          null,
          (0, s.createElement)(
            'div',
            { className: 'block-editor-block-patterns-list__list-item' },
            (0, s.createElement)(
              Nr,
              { showTooltip: n, title: e.title },
              (0, s.createElement)(
                j.__unstableCompositeItem,
                (0, Wt.Z)({ role: 'option', as: 'div' }, r, {
                  className: 'block-editor-block-patterns-list__item',
                  onClick: () => {
                    t(e, a), o?.(null);
                  },
                  onMouseEnter: () => {
                    o?.(e);
                  },
                  onMouseLeave: () => o?.(null),
                  'aria-label': e.title,
                  'aria-describedby': e.description ? l : void 0,
                }),
                (0, s.createElement)(po, {
                  blocks: a,
                  viewportWidth: i || 1200,
                  additionalStyles: '',
                  useSubRegistry: !0,
                  settings: M,
                  isScrollable: !1,
                  autoScale: !0,
                  CustomIframeComponent: Io,
                }),
                !n &&
                  (0, s.createElement)(
                    'div',
                    { className: 'block-editor-block-patterns-list__item-title' },
                    e.title,
                  ),
                !!e.description && (0, s.createElement)(j.VisuallyHidden, { id: l }, e.description),
              ),
            ),
          ),
        );
      }
      function Dr() {
        return (0, s.createElement)('div', {
          className: 'block-editor-block-patterns-list__item is-placeholder',
        });
      }
      const Tr = function({
          isDraggable: e,
          blockPatterns: t,
          shownPatterns: o,
          onHover: r,
          onClickPattern: n,
          orientation: a,
          label: i = (0, T.__)('Block Patterns', 'woocommerce'),
          showTitlesAsTooltip: l,
        }) {
          const c = (0, j.__unstableUseCompositeState)({ orientation: a });
          return (0, s.createElement)(
            j.__unstableComposite,
            (0, Wt.Z)({}, c, {
              role: 'listbox',
              className: 'block-editor-block-patterns-list',
              'aria-label': i,
            }),
            t.map(t =>
              o.includes(t)
                ? (0, s.createElement)(Ir, {
                    key: t.name,
                    pattern: t,
                    onClick: n,
                    onHover: r,
                    isDraggable: e,
                    composite: c,
                    showTooltip: l,
                  })
                : (0, s.createElement)(Dr, { key: t.name }),
            ),
          );
        },
        Er = [
          'woocommerce-blocks/header-centered-menu',
          'woocommerce-blocks/header-essential',
          'woocommerce-blocks/header-minimal',
          'woocommerce-blocks/header-large',
        ],
        wr = () => {
          const { scroll: e } = yr({
              editorSelector: '.woocommerce-customize-store__block-editor iframe',
              scrollDirection: 'top',
            }),
            { isLoading: t, patterns: o } = We('woo-commerce'),
            r = (0, d.useSelect)(e => e(l.store).__experimentalGetTemplateForLink('/'), []),
            [n] = wo('wp_template', r.id),
            [a, , i] = wo('wp_template_part', Ve),
            c = n.find(e => 'header' === e.attributes.slug),
            { setHighlightedBlockClientId: M, resetHighlightedBlockClientId: g } = (0,
            s.useContext)(To),
            { selectedPattern: u, setSelectedPattern: m } = dr();
          (0, s.useEffect)(() => {
            var e;
            M(null !== (e = c?.clientId) && void 0 !== e ? e : null);
          }, [c?.clientId, M]);
          const p = (0, s.useMemo)(
            () =>
              o
                .filter(e => Er.includes(e.name))
                .sort((e, t) => Er.indexOf(e.name) - Er.indexOf(t.name)),
            [o],
          );
          (0, s.useEffect)(() => {
            if (u || !a.length || !p.length) return;
            const e = pr(p, a[0]);
            m(e);
          }, [a, p]);
          const N = (0, s.useCallback)(
              (t, o) => {
                m(t), i([o[0], ...a.slice(1)], { selection: {} }), e();
              },
              [a, i, m, e],
            ),
            { context: I } = (0, s.useContext)(Mn),
            D =
              I.flowType === z.AIOnline
                ? (0, T.__)('Change your header', 'woocommerce')
                : (0, T.__)('Choose your header', 'woocommerce');
          return (0, s.createElement)(Yo, {
            title: D,
            onNavigateBackClick: g,
            description: (0, s.createInterpolateElement)(
              (0, T.__)(
                "Select a new header from the options below. Your header includes your site's navigation and will be added to every page. You can continue customizing this via the <EditorLink>Editor</EditorLink>.",
                'woocommerce',
              ),
              {
                EditorLink: (0, s.createElement)(y.Link, {
                  onClick: () => (
                    (0, O.L)('customize_your_store_assembler_hub_editor_link_click', {
                      source: 'header',
                    }),
                    window.open(`${Po.SX}site-editor.php`, '_blank'),
                    !1
                  ),
                  href: '',
                }),
              },
            ),
            content: (0, s.createElement)(
              s.Fragment,
              null,
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customize-store__sidebar-header-content' },
                t &&
                  (0, s.createElement)(
                    'span',
                    { className: 'components-placeholder__preview' },
                    (0, s.createElement)(j.Spinner, null),
                  ),
                !t &&
                  (0, s.createElement)(Tr, {
                    shownPatterns: p,
                    blockPatterns: p,
                    onClickPattern: N,
                    label: 'Headers',
                    orientation: 'vertical',
                    isDraggable: !1,
                    onHover: () => {},
                    showTitlesAsTooltip: !0,
                  }),
              ),
            ),
          });
        },
        { GlobalStylesContext: jr } = (0, Ut.U)(Pe.privateApis),
        zr = () => {
          const { scroll: e } = yr({
              editorSelector: '.woocommerce-customize-store__block-editor iframe',
              scrollDirection: 'top',
            }),
            { isLoading: t, homeTemplates: o } = (() => {
              const { blockPatterns: e, isLoading: t } = Re(),
                o = (0, s.useMemo)(() => et(e), [e]);
              return {
                homeTemplates: (0, s.useMemo)(() => {
                  if (t) return {};
                  const e = qe;
                  return Object.entries(e).reduce(
                    (t, [r, n]) => (r in e && (t[r] = $e(n.blocks, o)), t),
                    {},
                  );
                }, [t, o]),
                isLoading: t,
              };
            })(),
            { selectedPattern: r, setSelectedPattern: n } = dr(),
            a = (0, d.useSelect)(e => e(l.store).__experimentalGetTemplateForLink('/'), []),
            [i, , c] = wo('wp_template', a.id),
            M = (0, s.useCallback)(
              (t, o) => {
                t !== r && (n(t), c([i[0], ...o, i[i.length - 1]], { selection: {} }), e());
              },
              [r, n, c, i, e],
            ),
            g = (0, Vt.T)(),
            { user: u } = (0, s.useContext)(jr),
            m = (0, s.useMemo)(() => (0, oo.isEqual)(Ue[0].settings.color, u.settings.color), [u]),
            p = (0, s.useMemo)(
              () =>
                Object.entries(o).map(([e, t]) =>
                  'template1' === e
                    ? {
                        name: e,
                        title: e,
                        blocks: t.reduce((e, t) => {
                          if (!m) return [...e, ...t.blocks];
                          const o = jo(t.blocks, e => {
                            e.attributes.style = zo;
                          });
                          return [...e, ...o];
                        }, []),
                        blockTypes: [''],
                        categories: [''],
                        content: '',
                        source: '',
                      }
                    : {
                        name: e,
                        title: e,
                        blocks: t.reduce((e, t) => [...e, ...t.blocks], []),
                        blockTypes: [''],
                        categories: [''],
                        content: '',
                        source: '',
                      },
                ),
              [o, m],
            );
          (0, s.useEffect)(() => {
            if (r || !i.length || !p.length || t || g) return;
            const e = p.find(e => {
              const t = i.slice(1, i.length - 1);
              return e.blocks.length === t.length && t.every((t, o) => t.name === e.blocks[o].name);
            });
            n(e);
          }, [i, p, t, g]);
          const { context: N } = (0, s.useContext)(Mn),
            I = N.flowType === z.AIOnline,
            D = I
              ? (0, T.__)('Change your homepage', 'woocommerce')
              : (0, T.__)('Choose your homepage', 'woocommerce'),
            E = I
              ? (0, T.__)(
                  'Based on the most successful stores in your industry and location, our AI tool has recommended this template for your business. Prefer a different layout? Choose from the templates below now, or later via the <EditorLink>Editor</EditorLink>.',
                  'woocommerce',
                )
              : (0, T.__)(
                  'Create an engaging homepage by selecting one of our pre-designed layouts. You can continue customizing this page, including the content, later via the <EditorLink>Editor</EditorLink>.',
                  'woocommerce',
                );
          return (0, s.createElement)(Yo, {
            title: D,
            description: (0, s.createInterpolateElement)(E, {
              EditorLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_editor_link_click', {
                    source: 'homepage',
                  }),
                  window.open(`${Po.SX}site-editor.php`, '_blank'),
                  !1
                ),
                href: '',
              }),
            }),
            content: (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store__sidebar-homepage-content' },
              (0, s.createElement)(
                'div',
                { className: 'edit-site-sidebar-navigation-screen-patterns__group-homepage' },
                t || g
                  ? (0, s.createElement)(
                      'span',
                      { className: 'components-placeholder__preview' },
                      (0, s.createElement)(j.Spinner, null),
                    )
                  : (0, s.createElement)(Pe.__experimentalBlockPatternsList, {
                      shownPatterns: p,
                      blockPatterns: p,
                      onClickPattern: M,
                      label: 'Homepage',
                      orientation: 'vertical',
                      category: 'homepage',
                      isDraggable: !1,
                      showTitlesAsTooltip: !1,
                    }),
              ),
            ),
          });
        },
        kr = [
          'woocommerce-blocks/footer-with-3-menus',
          'woocommerce-blocks/footer-simple-menu',
          'woocommerce-blocks/footer-large',
        ],
        hr = () => {
          const { scroll: e } = yr({
              editorSelector: '.woocommerce-customize-store__block-editor iframe',
              scrollDirection: 'bottom',
            }),
            { isLoading: t, patterns: o } = We('woo-commerce'),
            r = (0, d.useSelect)(e => e(l.store).__experimentalGetTemplateForLink('/'), []),
            [n] = wo('wp_template', r.id),
            [a, , i] = wo('wp_template_part', Je),
            c = n.find(e => 'footer' === e.attributes.slug),
            { setHighlightedBlockClientId: M, resetHighlightedBlockClientId: g } = (0,
            s.useContext)(To),
            { selectedPattern: u, setSelectedPattern: m } = dr();
          (0, s.useEffect)(() => {
            var e;
            M(null !== (e = c?.clientId) && void 0 !== e ? e : null);
          }, [c?.clientId, M]);
          const p = (0, s.useMemo)(
            () =>
              o
                .filter(e => kr.includes(e.name))
                .sort((e, t) => kr.indexOf(e.name) - kr.indexOf(t.name)),
            [o],
          );
          (0, s.useEffect)(() => {
            if (u || !a.length || !p.length) return;
            const e = pr(p, a[a.length - 1]);
            m(e);
          }, [a, p]);
          const N = (0, s.useCallback)(
              (t, o) => {
                m(t), i([...a.slice(0, -1), o[0]], { selection: {} }), e();
              },
              [a, i, m, e],
            ),
            { context: I } = (0, s.useContext)(Mn),
            D = I.flowType === z.AIOnline,
            E = D
              ? (0, T.__)('Change your footer', 'woocommerce')
              : (0, T.__)('Choose your footer', 'woocommerce'),
            w = D
              ? (0, T.__)(
                  "Select a new footer from the options below. Your footer includes your site's secondary navigation and will be added to every page. You can continue customizing this via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                )
              : (0, T.__)(
                  "Select a footer from the options below. Your footer includes your site's secondary navigation and will be added to every page. You can continue customizing this via the <EditorLink>Editor</EditorLink> later.",
                  'woocommerce',
                );
          return (0, s.createElement)(Yo, {
            title: E,
            onNavigateBackClick: g,
            description: (0, s.createInterpolateElement)(w, {
              EditorLink: (0, s.createElement)(y.Link, {
                onClick: () => (
                  (0, O.L)('customize_your_store_assembler_hub_editor_link_click', {
                    source: 'footer',
                  }),
                  window.open(`${Po.SX}site-editor.php`, '_blank'),
                  !1
                ),
                href: '',
              }),
            }),
            content: (0, s.createElement)(
              s.Fragment,
              null,
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customize-store__sidebar-footer-content' },
                t &&
                  (0, s.createElement)(
                    'span',
                    { className: 'components-placeholder__preview' },
                    (0, s.createElement)(j.Spinner, null),
                  ),
                !t &&
                  (0, s.createElement)(Tr, {
                    shownPatterns: p,
                    blockPatterns: p,
                    onClickPattern: N,
                    label: 'Footers',
                    orientation: 'vertical',
                    isDraggable: !1,
                    onHover: () => {},
                    showTitlesAsTooltip: !0,
                  }),
              ),
            ),
          });
        };
      var fr = o(23374),
        Ar = o(3005),
        _r = o(85797),
        xr = o(11313),
        Lr = o(53961),
        Or = o(41790);
      const Sr = ({ shouldSyncIcon: e, setAttributes: t }) => {
          const { siteIconId: o, mediaUpload: r } = (0, d.useSelect)(e => {
              const { canUser: t, getEditedEntityRecord: o } = e(l.store),
                r = t('update', 'settings') ? o('root', 'site') : void 0,
                n = r?.site_icon;
              return { siteIconId: n, mediaUpload: e(Pe.store).getSettings().mediaUpload };
            }, []),
            { editEntityRecord: n } = (0, d.useDispatch)(l.store),
            a = e => n('root', 'site', void 0, { site_icon: null != e ? e : null }),
            i = (t, o = !1) => {
              (e || o) && a(t), n('root', 'site', void 0, { site_logo: t });
            },
            s = (e, o = !1) => {
              e && (e.id || !e.url ? (i(e.id, o), t({ width: Or.G3 })) : i(void 0));
            },
            c = r => {
              if (void 0 === e) {
                const e = !o;
                return t({ shouldSyncIcon: e }), void s(r, e);
              }
              s(r);
            },
            { createErrorNotice: M } = (0, d.useDispatch)(Lr.store),
            g = e => {
              M(e, { type: 'snackbar' });
            };
          return {
            onFilesDrop: e => {
              r({
                allowedTypes: ['image'],
                filesList: e,
                onFileChange([e]) {
                  (0, xr.isBlobURL)(e?.url) || c(e);
                },
                onError: g,
              });
            },
            onInitialSelectLogo: c,
            setIcon: a,
            siteIconId: o,
            onRemoveLogo: () => {
              i(null), t({ width: void 0 });
            },
          };
        },
        br = ({
          attributes: { width: e, isLink: t, shouldSyncIcon: o, align: r = '' },
          canUserEdit: n,
          naturalWidth: a,
          naturalHeight: i,
          setAttributes: l,
          setIcon: c,
          logoId: M,
        }) => {
          const g = (0, Zt.useViewportMatch)('medium'),
            u = !['wide', 'full'].includes(r) && g,
            m = e || Or.G3,
            d = a / i,
            y = a < i ? Or.Sj : Math.ceil(Or.Sj * d),
            p = 2.5 * Or.FV;
          return (0, s.createElement)(
            'div',
            { className: 'woocommerce-customize-store__sidebar-group' },
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store__sidebar-group-header' },
              (0, T.__)('Settings', 'woocommerce'),
            ),
            (0, s.createElement)(j.RangeControl, {
              __nextHasNoMarginBottom: !0,
              __next40pxDefaultSize: !0,
              label: (0, T.__)('Image width', 'woocommerce'),
              onChange: e => l({ width: e }),
              min: y,
              max: Or.FV,
              initialPosition: Math.min(Or.G3, p),
              value: m,
              disabled: !u,
            }),
            (0, s.createElement)(j.ToggleControl, {
              __nextHasNoMarginBottom: !0,
              label: (0, T.__)('Link logo to homepage', 'woocommerce'),
              onChange: () => {
                l({ isLink: !t });
              },
              checked: t,
            }),
            n &&
              (0, s.createElement)(
                s.Fragment,
                null,
                (0, s.createElement)(j.ToggleControl, {
                  __nextHasNoMarginBottom: !0,
                  label: (0, T.__)('Use as site icon', 'woocommerce'),
                  onChange: e => {
                    l({ shouldSyncIcon: e }), c(e ? M : void 0);
                  },
                  checked: !!o,
                  help: (0, T.__)(
                    'Site icons are what you see in browser tabs, bookmark bars, and within the WordPress mobile apps.',
                    'woocommerce',
                  ),
                }),
              ),
          );
        },
        Cr = ({
          siteLogoId: e,
          attributes: t,
          setAttributes: o,
          mediaItemData: r,
          isLoading: n,
          canUserEdit: a,
        }) => {
          const { alt_text: i, source_url: l } = r || {},
            { onFilesDrop: c, onInitialSelectLogo: M, setIcon: g } = Sr({
              shouldSyncIcon: t.shouldSyncIcon,
              setAttributes: o,
            }),
            [{ naturalWidth: u, naturalHeight: m }, d] = (0, s.useState)({});
          if (n)
            return (0, s.createElement)(
              'span',
              { className: 'components-placeholder__preview' },
              (0, s.createElement)(j.Spinner, null),
            );
          if (!l)
            return (0, s.createElement)(
              Pe.MediaUploadCheck,
              null,
              (0, s.createElement)(Pe.MediaUpload, {
                onSelect: M,
                allowedTypes: Or.RA,
                render: ({ open: e }) =>
                  (0, s.createElement)(
                    j.Button,
                    {
                      variant: 'link',
                      onClick: e,
                      className: 'block-library-site-logo__inspector-upload-container',
                    },
                    (0, s.createElement)(
                      'span',
                      null,
                      (0, s.createElement)(fr.Z, {
                        icon: Ar.Z,
                        size: 20,
                        className: 'icon-control',
                      }),
                    ),
                    (0, s.createElement)(j.DropZone, { onFilesDrop: c }),
                  ),
              }),
            );
          const y = (0, s.createElement)(
            'div',
            { className: 'woocommerce-customize-store__sidebar-logo-container' },
            (0, s.createElement)('img', {
              className: 'woocommerce-customize-store_custom-logo',
              src: l,
              alt: i,
              onLoad: e => {
                d({ naturalWidth: e.target.naturalWidth, naturalHeight: e.target.naturalHeight });
              },
            }),
          );
          return m && u
            ? (0, s.createElement)(
                s.Fragment,
                null,
                (0, s.createElement)(
                  Pe.MediaUploadCheck,
                  null,
                  (0, s.createElement)(Pe.MediaUpload, {
                    onSelect: M,
                    allowedTypes: Or.RA,
                    render: ({ open: e }) => (0, s.cloneElement)(y, { onClick: e }),
                  }),
                ),
                !!l &&
                  (0, s.createElement)(br, {
                    attributes: t,
                    setAttributes: o,
                    naturalWidth: u,
                    naturalHeight: m,
                    canUserEdit: a,
                    setIcon: g,
                    logoId: r?.id || e,
                  }),
              )
            : y;
        },
        vr = () => {
          const { logoBlockIds: e } = (0, s.useContext)(Be),
            { attributes: t, isAttributesLoading: o } = Ge(),
            { siteLogoId: r, canUserEdit: n, mediaItemData: a, isRequestingMediaItem: i } = (0,
            d.useSelect)(e => {
              const { canUser: t, getEntityRecord: o, getEditedEntityRecord: r } = e(l.store),
                n = t('update', 'settings'),
                a = n ? r('root', 'site') : void 0,
                i = o('root', '__unstableBase'),
                s = n ? a?.site_logo : i?.site_logo;
              return {
                siteLogoId: s,
                canUserEdit: n,
                mediaItemData: s && e(l.store).getMedia(s, { context: 'view' }),
                isRequestingMediaItem:
                  s && !e(l.store).hasFinishedResolution('getMedia', [s, { context: 'view' }]),
              };
            }, []),
            { updateBlockAttributes: c } = (0, d.useDispatch)(Pe.store),
            M = t => {
              e.length && e.forEach(e => c(e, t));
            },
            { onInitialSelectLogo: g, onRemoveLogo: u } = Sr({
              shouldSyncIcon: t.shouldSyncIcon,
              setAttributes: M,
            }),
            m = void 0 === r || i || o;
          return (0, s.createElement)(Yo, {
            title: (0, T.__)('Add your logo', 'woocommerce'),
            description: (0, T.__)(
              "Ensure your store is on-brand by adding your logo. For best results, upload a SVG or PNG that's a minimum of 300px wide.",
              'woocommerce',
            ),
            content: (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store__sidebar-logo-content' },
              (0, s.createElement)(
                'div',
                {
                  className:
                    'woocommerce-customize-store__sidebar-group-header woocommerce-customize-store__logo-header-container',
                },
                (0, s.createElement)('span', null, (0, T.__)('Logo', 'woocommerce')),
                r &&
                  (0, s.createElement)(
                    j.DropdownMenu,
                    {
                      icon: _r.Z,
                      label: (0, T.__)('Options', 'woocommerce'),
                      className: 'woocommerce-customize-store__logo-dropdown-menu',
                      popoverProps: {
                        className: 'woocommerce-customize-store__logo-dropdown-popover',
                        placement: 'bottom-end',
                      },
                    },
                    ({ onClose: e }) =>
                      (0, s.createElement)(
                        s.Fragment,
                        null,
                        (0, s.createElement)(
                          j.MenuGroup,
                          { className: 'woocommerce-customize-store__logo-menu-group' },
                          (0, s.createElement)(
                            Pe.MediaUploadCheck,
                            null,
                            (0, s.createElement)(Pe.MediaUpload, {
                              onSelect: t => {
                                g(t), e();
                              },
                              allowedTypes: Or.RA,
                              render: ({ open: e }) =>
                                (0, s.createElement)(
                                  j.MenuItem,
                                  {
                                    onClick: () => {
                                      e();
                                    },
                                  },
                                  (0, T.__)('Replace', 'woocommerce'),
                                ),
                            }),
                          ),
                        ),
                        (0, s.createElement)(
                          j.MenuGroup,
                          { className: 'woocommerce-customize-store__logo-menu-group' },
                          (0, s.createElement)(
                            j.MenuItem,
                            {
                              className: 'woocommerce-customize-store__logo-menu-item-delete',
                              onClick: () => {
                                e(), u();
                              },
                            },
                            (0, T.__)('Delete', 'woocommerce'),
                          ),
                        ),
                      ),
                  ),
              ),
              (0, s.createElement)(Cr, {
                siteLogoId: r,
                attributes: t,
                setAttributes: M,
                canUserEdit: n,
                mediaItemData: a,
                isLoading: m,
              }),
            ),
          });
        },
        Qr = [{ kind: 'postType', name: 'wp_navigation' }];
      let Ur = !0;
      const Fr = () => {
        const e = (0, u.useQuery)(),
          { sendEvent: t } = (0, s.useContext)(Mn),
          [o, r] = (0, s.useState)(!1),
          n = (0, Vt.T)(),
          { __unstableMarkLastChangeAsPersistent: a } = (0, d.useDispatch)(Pe.store),
          { createErrorNotice: i } = (0, d.useDispatch)(Lr.store),
          { dirtyEntityRecords: c, isDirty: M } = (0, Pt.useEntitiesSavedStatesIsDirty)(),
          {
            editEntityRecord: g,
            saveEditedEntityRecord: m,
            __experimentalSaveSpecifiedEntityEdits: y,
          } = (0, d.useDispatch)(l.store),
          p = (0, s.useCallback)(async () => {
            for (const { kind: e, name: t, key: o, property: r } of c)
              'root' === e && 'site' === t
                ? await y('root', 'site', void 0, [r])
                : (Qr.some(o => o.kind === e && o.name === t) && g(e, t, o, { status: 'publish' }),
                  await m(e, t, o),
                  a());
          }, [c, g, m, y, a]),
          N = '/customize-store/assembler-hub' === e.path;
        (0, s.useEffect)(() => {
          n || (N ? Ur && M && (p(), (Ur = !1)) : (Ur = !1));
        }, [n, M, N, p]);
        return N
          ? (0, s.createElement)(
              j.__experimentalHStack,
              { className: 'edit-site-save-hub', alignment: 'right', spacing: 4 },
              (0, s.createElement)(
                j.Button,
                {
                  variant: 'primary',
                  onClick: async () => {
                    (0, O.L)('customize_your_store_assembler_hub_done_click'), r(!0);
                    try {
                      await p(), t('FINISH_CUSTOMIZATION');
                    } catch (e) {
                      i(`${(0, T.__)('Saving failed.', 'woocommerce')} ${e}`), r(!1);
                    }
                  },
                  className: 'edit-site-save-hub__button',
                  disabled: o || n,
                  'aria-disabled': o,
                  __next40pxDefaultSize: !0,
                },
                o ? (0, s.createElement)(j.Spinner, null) : (0, T.__)('Save', 'woocommerce'),
              ),
            )
          : null;
      };
      function Yr() {
        return (
          (function() {
            const e = (0, u.useQuery)(),
              { location: t, params: o, goTo: r } = (0, j.__experimentalUseNavigator)(),
              n = (0, s.useRef)(!0);
            (0, s.useEffect)(() => {
              if (n.current)
                return (
                  (n.current = !1),
                  void (0, u.addHistoryListener)(e => {
                    'popstate' === e.type && r((0, u.getQuery)().path);
                  })
                );
              !(function(t) {
                if (((o = t), (r = e), Object.entries(o).every(([e, t]) => r[e] === t))) return;
                var o, r;
                const n = { ...e, ...t };
                (0, u.updateQueryString)({}, n.path);
              })({
                postType: void 0,
                postId: void 0,
                categoryType: void 0,
                categoryId: void 0,
                path: '/' === t.path ? void 0 : t.path,
              });
            }, [t?.path, o]);
          })(),
          (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub' },
              (0, s.createElement)(Bo, null),
            ),
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub/color-palette' },
              (0, s.createElement)(ur, null),
            ),
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub/typography' },
              (0, s.createElement)(mr, null),
            ),
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub/header' },
              (0, s.createElement)(wr, null),
            ),
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub/homepage' },
              (0, s.createElement)(zr, null),
            ),
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub/footer' },
              (0, s.createElement)(hr, null),
            ),
            (0, s.createElement)(
              j.__experimentalNavigatorScreen,
              { path: '/customize-store/assembler-hub/logo' },
              (0, s.createElement)(vr, null),
            ),
          )
        );
      }
      const Pr = (0, s.memo)(function() {
        var e;
        const t = (0, u.getQuery)(),
          o = (0, s.useRef)(
            null !== (e = t.path) && void 0 !== e ? e : '/customize-store/assembler-hub',
          );
        return (0,
        s.createElement)(s.Fragment, null, (0, s.createElement)(j.__experimentalNavigatorProvider, { className: 'edit-site-sidebar__content', initialPath: o.current }, (0, s.createElement)(Yr, null), (0, s.createElement)(Fr, null)));
      });
      var Br = o(46417);
      const Gr = 'woocommerce_customize_store_onboarding_tour_hidden',
        Rr = ({
          onClose: e,
          skipTour: t,
          takeTour: o,
          flowType: r,
          showWelcomeTour: n,
          setIsResizeHandleVisible: a,
        }) => {
          const [i, l] = (0, s.useState)('left'),
            { heading: c, descriptions: M } = (e => {
              switch (e) {
                case z.AIOnline:
                  return {
                    heading: (0, T.__)('Welcome to your AI-generated store!', 'woocommerce'),
                    descriptions: {
                      desktop: (0, T.__)(
                        'This is where you can start customizing the look and feel of your store, including adding your logo, and changing colors and layouts. Take a quick tour to discover what’s possible.',
                        'woocommerce',
                      ),
                    },
                  };
                case z.noAI:
                  return {
                    heading: (0, T.__)(
                      "Discover what's possible with the store designer",
                      'woocommerce',
                    ),
                    descriptions: {
                      desktop: (0, T.__)(
                        "Start designing your store, including adding your logo, changing color schemes, and choosing layouts. To help you get started, we've added some layouts for you to customize. Take a quick tour to discover what's possible.",
                        'woocommerce',
                      ),
                    },
                  };
              }
            })(r);
          return n
            ? (0, s.createElement)(y.TourKit, {
                config: {
                  options: {
                    effects: {
                      arrowIndicator: !1,
                      overlay: !1,
                      liveResize: { rootElementSelector: '#adminmenuback', resize: !0 },
                    },
                    portalParentElement: document.getElementById('wpbody'),
                    popperModifiers: [
                      {
                        name: 'bottom-left',
                        enabled: !0,
                        phase: 'beforeWrite',
                        requires: ['computeStyles'],
                        fn: ({ state: e }) => {
                          (e.styles.popper.top = 'auto'),
                            (e.styles.popper.left = 'auto'),
                            (e.styles.popper.bottom = '16px'),
                            (e.styles.popper.transform = 'translate3d(16px, 0px, 0px)');
                        },
                      },
                    ],
                    classNames: [
                      'woocommerce-customize-store-tour-kit',
                      'woocommerce-customize-store-welcome-tourkit',
                    ],
                  },
                  steps: [
                    {
                      meta: {
                        name: 'welcome-tour',
                        primaryButton: { text: (0, T.__)('Take a tour', 'woocommerce') },
                        descriptions: M,
                        heading: c,
                        skipButton: { isVisible: !0 },
                      },
                      referenceElements: { desktop: '#adminmenuback' },
                    },
                  ],
                  closeHandler: (e, r, n) => {
                    'done-btn' === n ? o() : t();
                  },
                },
              })
            : (0, s.createElement)(y.TourKit, {
                config: {
                  placement: i,
                  options: {
                    effects: {
                      spotlight: { interactivity: { enabled: !0, rootElementSelector: '#wpwrap' } },
                      arrowIndicator: !0,
                      autoScroll: { behavior: 'auto', block: 'center' },
                      liveResize: { mutation: !0, resize: !0, rootElementSelector: '#wpwrap' },
                    },
                    callbacks: {
                      onPreviousStep: () => {
                        l('left'), a(!0);
                      },
                      onNextStep: () => {
                        l('right-start'), a(!1);
                      },
                    },
                    popperModifiers: [
                      {
                        name: 'right-start',
                        enabled: !0,
                        phase: 'beforeWrite',
                        requires: ['computeStyles'],
                        fn: ({ state: e }) => {
                          e.styles.arrow.transform = 'translate3d(0px, 96px, 0)';
                        },
                      },
                      {
                        name: 'offset',
                        options: {
                          offset: ({ placement: e }) => ('left' === e ? [0, 20] : [52, 16]),
                        },
                      },
                    ],
                    classNames: 'woocommerce-customize-store-tour-kit',
                  },
                  steps: [
                    {
                      referenceElements: { desktop: '.edit-site-layout__canvas-container' },
                      meta: {
                        name: 'view-changes-real-time',
                        heading: (0, T.__)('View your changes in real time', 'woocommerce'),
                        descriptions: {
                          desktop: (0, T.__)(
                            'Any changes you make to the layout and style will appear here in real time — perfect for testing different looks before you make it live. You can also resize this area to check how your store looks on mobile.',
                            'woocommerce',
                          ),
                        },
                      },
                    },
                    {
                      referenceElements: { desktop: '.edit-site-layout__sidebar-region' },
                      meta: {
                        name: 'make-your-store-your-own',
                        heading: (0, T.__)('Make your store your own', 'woocommerce'),
                        descriptions: {
                          desktop: (0, T.__)(
                            "Customize the style and layout of your store to fit your brand! Add your logo, change the font and colors, and try out different page layouts. You'll be able to edit the text and images later via the Editor.",
                            'woocommerce',
                          ),
                        },
                        secondaryButton: { text: (0, T.__)('Previous', 'woocommerce') },
                      },
                    },
                  ],
                  closeHandler: (t, o, r) => {
                    'done-btn' === r
                      ? (0, O.L)('customize_your_store_assembler_hub_tour_complete')
                      : (0, O.L)('customize_your_store_assembler_hub_tour_close'),
                      e();
                  },
                },
              });
        };
      var Wr = o(14812);
      const Zr = 'customize_your_store_transitional_page_secondary_button',
        Hr = ({ children: e, order: t = 1 }) =>
          (0, s.createElement)(j.Fill, { name: Zr }, o => (0, y.createOrderedChildren)(e, t, o));
      Hr.Slot = ({ fillProps: e }) =>
        (0, s.createElement)(j.Slot, { name: Zr, fillProps: e }, y.sortFillsByOrder);
      const Vr = () => {
          const e = (0, Wr.useSlot)(Zr);
          return Boolean(e?.fills?.length) ? (0, s.createElement)(Hr.Slot, null) : null;
        },
        Jr = ({ value: e, onChange: t }) =>
          (0, s.createElement)(
            'div',
            { className: 'woocommerce-survey-star-rating' },
            [...Array(5)].map(
              (o, r) => (
                (r += 1),
                (0, s.createElement)(
                  'button',
                  {
                    type: 'button',
                    key: r,
                    className:
                      r <= e
                        ? 'woocommerce-survey-star-rating__button-on'
                        : 'woocommerce-survey-star-rating__button-off',
                    onClick: () => {
                      t(r);
                    },
                  },
                  (0, s.createElement)(
                    'span',
                    { className: 'woocommerce-survey-star-rating__star' },
                    '★',
                  ),
                )
              ),
            ),
          ),
        Xr = ({ showAISurvey: e, onSend: t, closeFunction: o }) => {
          const [r, n] = (0, s.useState)(!1),
            [a, i] = (0, s.useState)(!1),
            [l, c] = (0, s.useState)(!1),
            [M, g] = (0, s.useState)(!1),
            [u, m] = (0, s.useState)(''),
            [y, p] = (0, s.useState)(''),
            { createSuccessNotice: N } = (0, d.useDispatch)('core/notices'),
            [I, D] = (0, s.useState)(0),
            E = 0 === I || (!r && !a && !l && !M);
          return (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-ai-survey-form' },
              (0, s.createElement)(
                'div',
                { className: 'content' },
                (0, s.createElement)(
                  'p',
                  { className: 'woocommerce-ai-survey-form__description' },
                  (0, T.__)(
                    'Our goal is to make sure you have all the right tools to start customizing your store. We’d love to know if we hit our mark and how we can improve.',
                    'woocommerce',
                  ),
                ),
                (0, s.createElement)(
                  'h4',
                  null,
                  (0, T.__)(
                    'On a scale of 1 = difficult to 5 = very easy, how would you rate the overall experience?',
                    'woocommerce',
                  ),
                  (0, s.createElement)('span', null, '*'),
                ),
                (0, s.createElement)(Jr, { value: I, onChange: D }),
                (0, s.createElement)('hr', null),
                (0, s.createElement)(
                  'h4',
                  null,
                  e
                    ? (0, T.__)(
                        'What motivated you to choose the “Design with AI” option?',
                        'woocommerce',
                      )
                    : (0, T.__)(
                        'What motivated you to choose the "Design your own theme" option?',
                        'woocommerce',
                      ),
                  (0, s.createElement)('span', null, '*'),
                ),
                (0, s.createElement)(j.CheckboxControl, {
                  label: e
                    ? (0, T.__)(
                        'I wanted to see how AI could help me streamline the process.',
                        'woocommerce',
                      )
                    : (0, T.__)('I wanted to design my own theme.', 'woocommerce'),
                  checked: r,
                  onChange: n,
                }),
                (0, s.createElement)(j.CheckboxControl, {
                  label: (0, T.__)("I didn't like any of the available themes.", 'woocommerce'),
                  checked: a,
                  onChange: i,
                }),
                (0, s.createElement)(j.CheckboxControl, {
                  label: (0, T.__)("I didn't find a theme that matched my needs.", 'woocommerce'),
                  checked: l,
                  onChange: c,
                }),
                (0, s.createElement)(j.CheckboxControl, {
                  label: (0, T.__)('Other.', 'woocommerce'),
                  checked: M,
                  onChange: g,
                }),
                (0, s.createElement)('hr', null),
                (0, s.createElement)(
                  'h4',
                  null,
                  (0, T.__)(
                    'Did you find anything confusing, irrelevant, or not useful?',
                    'woocommerce',
                  ),
                ),
                (0, s.createElement)(j.TextareaControl, { value: u, onChange: m }),
                (0, s.createElement)('hr', null),
                (0, s.createElement)(
                  'h4',
                  null,
                  e
                    ? (0, T.__)(
                        'Feel free to spill the beans here. All suggestions, feedback, or comments about the AI-generated store experience are welcome.',
                        'woocommerce',
                      )
                    : (0, T.__)(
                        'Feel free to spill the beans here. All suggestions, feedback, or comments about the "Design your own theme" experience are welcome.',
                        'woocommerce',
                      ),
                ),
                (0, s.createElement)(j.TextareaControl, { value: y, onChange: p }),
              ),
              (0, s.createElement)(
                'div',
                null,
                (0, s.createElement)('hr', null),
                (0, s.createElement)(
                  'div',
                  { className: 'buttons' },
                  (0, s.createElement)(
                    j.Button,
                    { className: 'is-spinner', variant: 'tertiary', onClick: o },
                    (0, T.__)('Cancel', 'woocommerce'),
                  ),
                  (0, s.createElement)(
                    j.Button,
                    {
                      variant: 'primary',
                      onClick: () => {
                        const o = e
                          ? 'customize_your_store_transitional_survey_complete'
                          : 'customize_your_store_on_core_transitional_survey_complete';
                        (0, O.L)(o, {
                          rating: I,
                          choose_streamline: r,
                          choose_dislike_themes: a,
                          choose_themes_not_match: l,
                          choose_other: M,
                          feedback: u,
                          spill_beans: y,
                        }),
                          t(),
                          N(
                            (0, T.__)(
                              "Thanks for the feedback. We'll put it to good use!",
                              'woocommerce',
                            ),
                            { type: 'snackbar' },
                          );
                      },
                      disabled: E,
                    },
                    (0, T.__)('Send', 'woocommerce'),
                  ),
                ),
              ),
            ),
          );
        };
      var Kr = o(70444);
      const qr = (0, s.createElement)(
        Kr.SVG,
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          fill: 'none',
          viewBox: '0 0 24 24',
        },
        (0, s.createElement)(Kr.Path, {
          fill: '#1E1E1E',
          d:
            'm8.85 4.821-1.203-.895-2.083 2.802-1.114-.83L3.553 7.1 5.87 8.829l2.98-4.008ZM20 7.75h-8.889v-1.5H20v1.5Zm0 5h-8.889v-1.5H20v1.5Z',
        }),
        (0, s.createElement)(Kr.Path, {
          fill: '#1E1E1E',
          fillRule: 'evenodd',
          d:
            'M6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
          clipRule: 'evenodd',
        }),
        (0, s.createElement)(Kr.Path, { fill: '#1E1E1E', d: 'M11.111 17.75H20v-1.5h-8.889v1.5Z' }),
      );
      var $r = o(33532),
        en = o(87983);
      const tn = (0, x.assign)({
          transitionalScreen: (e, t) => ({
            ...e.transitionalScreen,
            hasCompleteSurvey: 'yes' === t.data,
          }),
        }),
        on = (0, x.assign)({
          transitionalScreen: e => (
            (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
              woocommerce_admin_customize_store_survey_completed: 'yes',
            }),
            { ...e.transitionalScreen, hasCompleteSurvey: !0 }
          ),
        }),
        rn = async () =>
          (0, d.resolveSelect)(m.OPTIONS_STORE_NAME).getOption(
            'woocommerce_admin_customize_store_survey_completed',
          ),
        nn = ({
          sendEvent: e,
          hasCompleteSurvey: t,
          isWooExpress: o,
          isSurveyOpen: r,
          setSurveyOpen: n,
          aiOnline: a,
        }) => {
          const i = (0, p.getSetting)('homeUrl', ''),
            l = () => {
              n(!1);
            },
            c = !t && !(0, ie.id)(),
            M = o && a;
          return (0, s.createElement)(
            'div',
            { className: 'woocommerce-customize-store__transitional' },
            r &&
              (0, s.createElement)(
                j.Modal,
                {
                  title: (0, T.__)('Share feedback', 'woocommerce'),
                  onRequestClose: () => l(),
                  shouldCloseOnClickOutside: !1,
                  className: 'woocommerce-ai-survey-modal',
                },
                (0, s.createElement)(Xr, {
                  showAISurvey: M,
                  onSend: () => {
                    e({ type: 'COMPLETE_SURVEY' }), l();
                  },
                  closeFunction: l,
                }),
              ),
            (0, s.createElement)(k.R, {
              as: j.__unstableMotion.div,
              variants: { view: { x: 0 } },
              isTransparent: !1,
              className: 'edit-site-layout__hub',
            }),
            (0, s.createElement)(
              'div',
              { className: 'woocommerce-customize-store__transitional-content' },
              (0, s.createElement)(
                'h1',
                { className: 'woocommerce-customize-store__transitional-heading' },
                (0, T.__)('Your store looks great!', 'woocommerce'),
              ),
              (0, s.createElement)(
                'h2',
                { className: 'woocommerce-customize-store__transitional-subheading' },
                (0, ie.id)()
                  ? (0, T.__)(
                      "Congratuations! You've successfully designed your store. Now you can go back to the Home screen to complete your store setup and start selling.",
                      'woocommerce',
                    )
                  : (0, T.__)(
                      "Congratulations! You've successfully designed your store. Take a look at your hard work before continuing to set up your store.",
                      'woocommerce',
                    ),
              ),
              (0, s.createElement)(Vr, null),
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customize-store__transitional-buttons' },
                c &&
                  (0, s.createElement)(
                    j.Button,
                    {
                      className:
                        'woocommerce-customize-store__transitional-preview-buttonwoocommerce-customize-store__transitional-preview-button',
                      variant: 'secondary',
                      onClick: () => {
                        (0, O.L)(
                          o
                            ? 'customize_your_store_transitional_survey_click'
                            : 'customize_your_store_on_core_transitional_survey_click',
                        ),
                          n(!0);
                      },
                    },
                    (0, T.__)('Share feedback', 'woocommerce'),
                  ),
                (0, s.createElement)(
                  j.Button,
                  {
                    className: 'woocommerce-customize-store__transitional-preview-button',
                    variant: (0, ie.id)() ? 'secondary' : 'primary',
                    onClick: () => {
                      (0, O.L)('customize_your_store_transitional_preview_store_click'),
                        window.open(i, '_blank');
                    },
                  },
                  (0, T.__)('View store', 'woocommerce'),
                ),
                (0, ie.id)() &&
                  (0, s.createElement)(
                    j.Button,
                    {
                      variant: 'primary',
                      onClick: () => {
                        (0, O.L)('customize_your_store_entrepreneur_home_click'),
                          e({ type: 'GO_BACK_TO_HOME' });
                      },
                    },
                    (0, T.__)('Back to Home', 'woocommerce'),
                  ),
              ),
              !(0, ie.id)() &&
                (0, s.createElement)(
                  s.Fragment,
                  null,
                  (0, s.createElement)(
                    'h2',
                    { className: 'woocommerce-customize-store__transitional-main-actions-title' },
                    (0, T.__)("What's next?", 'woocommerce'),
                  ),
                  (0, s.createElement)(
                    'div',
                    { className: 'woocommerce-customize-store__transitional-main-actions' },
                    (0, s.createElement)(
                      'div',
                      { className: 'woocommerce-customize-store__transitional-action' },
                      (0, s.createElement)(fr.Z, {
                        className: 'woocommerce-customize-store__transitional-action__icon',
                        icon: $r.Z,
                      }),
                      (0, s.createElement)(
                        'div',
                        { className: 'woocommerce-customize-store__transitional-action__content' },
                        (0, s.createElement)(
                          'h3',
                          null,
                          (0, T.__)('Add your products', 'woocommerce'),
                        ),
                        (0, s.createElement)(
                          'p',
                          null,
                          (0, T.__)(
                            'Start stocking your virtual shelves by adding or importing your products, or edit the sample products.',
                            'woocommerce',
                          ),
                        ),
                        (0, s.createElement)(
                          j.Button,
                          {
                            variant: 'link',
                            onClick: () => {
                              (0, O.L)('customize_your_store_transitional_product_list_click'),
                                (0, L.tJ)(window, `${Po.SX}edit.php?post_type=product`);
                            },
                          },
                          (0, T.__)('Go to Products', 'woocommerce'),
                        ),
                      ),
                    ),
                    (0, s.createElement)(
                      'div',
                      { className: 'woocommerce-customize-store__transitional-action' },
                      (0, s.createElement)(fr.Z, {
                        className: 'woocommerce-customize-store__transitional-action__icon',
                        icon: en.Z,
                      }),
                      (0, s.createElement)(
                        'div',
                        { className: 'woocommerce-customize-store__transitional-action__content' },
                        (0, s.createElement)(
                          'h3',
                          null,
                          (0, T.__)('Fine-tune your design', 'woocommerce'),
                        ),
                        (0, s.createElement)(
                          'p',
                          null,
                          (0, T.__)(
                            'Head to the Editor to change your images and text, add more pages, and make any further customizations.',
                            'woocommerce',
                          ),
                        ),
                        (0, s.createElement)(
                          j.Button,
                          {
                            variant: 'link',
                            onClick: () => {
                              (0, O.L)('customize_your_store_transitional_editor_click'),
                                (0, L.tJ)(window, `${Po.SX}site-editor.php`);
                            },
                          },
                          (0, T.__)('Go to the Editor', 'woocommerce'),
                        ),
                      ),
                    ),
                    (0, s.createElement)(
                      'div',
                      { className: 'woocommerce-customize-store__transitional-action' },
                      (0, s.createElement)(fr.Z, {
                        className: 'woocommerce-customize-store__transitional-action__icon',
                        icon: qr,
                      }),
                      (0, s.createElement)(
                        'div',
                        { className: 'woocommerce-customize-store__transitional-action__content' },
                        (0, s.createElement)(
                          'h3',
                          null,
                          (0, T.__)('Continue setting up your store', 'woocommerce'),
                        ),
                        (0, s.createElement)(
                          'p',
                          null,
                          (0, T.__)(
                            'Go back to the Home screen to complete your store setup and start selling',
                            'woocommerce',
                          ),
                        ),
                        (0, s.createElement)(
                          j.Button,
                          {
                            variant: 'link',
                            onClick: () => {
                              (0, O.L)('customize_your_store_transitional_home_click'),
                                e({ type: 'GO_BACK_TO_HOME' });
                            },
                          },
                          (0, T.__)('Back to Home', 'woocommerce'),
                        ),
                      ),
                    ),
                  ),
                ),
            ),
          );
        },
        an = ({ skipTour: e, takeTour: t, shouldTourBeShown: o }) =>
          (0, s.createElement)(
            j.Modal,
            {
              className: 'woocommerce-customize-store__onboarding-welcome-modal',
              title: (0, T.__)('Welcome to your store!', 'woocommerce'),
              onRequestClose: e,
              shouldCloseOnClickOutside: !1,
            },
            (0, s.createElement)(
              'span',
              { className: 'woocommerce-customize-store__title' },
              (0, T.__)('Our AI tool had a few issues generating your content.', 'woocommerce'),
            ),
            (0, s.createElement)(
              'p',
              null,
              (0, T.__)(
                "But don't let that stop you! Start customizing the look and feel of your store by adding your logo and selecting your colors and layout. ",
                'woocommerce',
              ),
              o && (0, T.__)("Take a quick tour to discover what's possible.", 'woocommerce'),
            ),
            o &&
              (0, s.createElement)(
                'div',
                { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
                (0, s.createElement)(
                  j.Button,
                  { onClick: e, variant: 'link' },
                  (0, T.__)('Skip', 'woocommerce'),
                ),
                (0, s.createElement)(
                  j.Button,
                  { onClick: t, variant: 'primary' },
                  (0, T.__)('Take a tour', 'woocommerce'),
                ),
              ),
          ),
        { useGlobalStyle: sn } = (0, Ut.U)(Pe.privateApis),
        ln = () => {
          const [e, t] = (0, s.useState)([]),
            { sendEvent: o, currentState: r, context: n } = (0, s.useContext)(Mn),
            { customizing: a } = (0, u.useQuery)(),
            [i, c] = (0, s.useState)(Et(n.flowType) && 'true' !== a);
          (0, s.useEffect)(() => {
            c(Et(n.flowType) && 'true' !== a);
          }, [n.flowType, a]),
            (0, Ht.Z)();
          const {
              shouldTourBeShown: M,
              isResizeHandleVisible: g,
              setShowWelcomeTour: y,
              onClose: p,
              ...N
            } = (() => {
              const [e, t] = (0, to.useState)(!0),
                [o, r] = (0, to.useState)(!0),
                { updateOptions: n } = (0, d.useDispatch)(m.OPTIONS_STORE_NAME),
                { shouldTourBeShown: a } = (0, d.useSelect)(e => {
                  const { getOption: t, hasFinishedResolution: o } = e(m.OPTIONS_STORE_NAME);
                  return { shouldTourBeShown: !('yes' === t(Gr) || !o('getOption', [Gr])) };
                });
              return {
                onClose: () => {
                  n({ [Gr]: 'yes' });
                },
                shouldTourBeShown: a,
                showWelcomeTour: e,
                setShowWelcomeTour: t,
                setIsResizeHandleVisible: r,
                isResizeHandleVisible: o,
              };
            })(),
            I = () => {
              (0, O.L)('customize_your_store_assembler_hub_tour_start'), y(!1), c(!1);
            },
            D = () => {
              (0, O.L)('customize_your_store_assembler_hub_tour_skip'), p(), c(!1);
            },
            E = (0, Zt.useViewportMatch)('medium', '<'),
            w = (0, Zt.useReducedMotion)(),
            [h, f] = (0, Zt.useResizeObserver)(),
            A = (0, Vt.T)(),
            [_, x] = (0, s.useState)(!1),
            [L] = sn('color.background'),
            [S] = sn('color.gradient'),
            { record: b } = (0, Kt.Z)(),
            { id: C, type: v } = b,
            [Q, U] = (0, s.useState)(!1),
            F = (0, s.createElement)(Ao, { isLoading: A });
          return 'object' == typeof r && 'transitional' === r.transitionalScreen
            ? (0, s.createElement)(
                l.EntityProvider,
                { kind: 'root', type: 'site' },
                (0, s.createElement)(
                  l.EntityProvider,
                  { kind: 'postType', type: v, id: C },
                  (0, s.createElement)(nn, {
                    sendEvent: o,
                    isWooExpress: (0, J.V)(),
                    isSurveyOpen: Q,
                    setSurveyOpen: U,
                    hasCompleteSurvey: !!n?.transitionalScreen?.hasCompleteSurvey,
                    aiOnline: n?.flowType === z.AIOnline,
                  }),
                ),
              )
            : (0, s.createElement)(
                Be.Provider,
                { value: { logoBlockIds: e, setLogoBlockIds: t } },
                (0, s.createElement)(
                  Eo,
                  null,
                  (0, s.createElement)(
                    l.EntityProvider,
                    { kind: 'root', type: 'site' },
                    (0, s.createElement)(
                      l.EntityProvider,
                      { kind: 'postType', type: v, id: C },
                      (0, s.createElement)(
                        'div',
                        { className: ce()('edit-site-layout') },
                        (0, s.createElement)(
                          j.__unstableMotion.div,
                          { className: 'edit-site-layout__header-container', animate: 'view' },
                          (0, s.createElement)(k.R, {
                            as: j.__unstableMotion.div,
                            variants: { view: { x: 0 } },
                            isTransparent: !1,
                            className: 'edit-site-layout__hub',
                          }),
                        ),
                        (0, s.createElement)(
                          'div',
                          { className: 'edit-site-layout__content' },
                          (0, s.createElement)(
                            Xt.XD,
                            {
                              ariaLabel: (0, T.__)('Navigation', 'woocommerce'),
                              className: 'edit-site-layout__sidebar-region',
                            },
                            (0, s.createElement)(
                              j.__unstableMotion.div,
                              {
                                animate: { opacity: 1 },
                                transition: {
                                  type: 'tween',
                                  duration: w || E ? 0 : 0.5,
                                  ease: 'easeOut',
                                },
                                className: 'edit-site-layout__sidebar',
                              },
                              (0, s.createElement)(Pr, null),
                            ),
                          ),
                          !E &&
                            (0, s.createElement)(
                              'div',
                              { className: 'edit-site-layout__canvas-container' },
                              h,
                              !!f.width &&
                                (0, s.createElement)(
                                  j.__unstableMotion.div,
                                  {
                                    initial: !1,
                                    layout: 'position',
                                    className: ce()('edit-site-layout__canvas'),
                                  },
                                  (0, s.createElement)(
                                    Jt.Z,
                                    null,
                                    (0, s.createElement)(
                                      Br.Z,
                                      {
                                        isReady: !A,
                                        isHandleVisibleByDefault: !N.showWelcomeTour && g,
                                        isFullWidth: !1,
                                        defaultSize: { width: f.width - 24, height: f.height },
                                        isOversized: _,
                                        setIsOversized: x,
                                        innerContentStyle: { background: null != S ? S : L },
                                      },
                                      F,
                                    ),
                                  ),
                                ),
                            ),
                        ),
                      ),
                      !A &&
                        M &&
                        (z.AIOnline === n.flowType || z.noAI === n.flowType) &&
                        (0, s.createElement)(
                          Rr,
                          (0, Wt.Z)(
                            { skipTour: D, takeTour: I, onClose: p, flowType: n.flowType },
                            N,
                          ),
                        ),
                      !A &&
                        i &&
                        (0, s.createElement)(an, {
                          shouldTourBeShown: M,
                          skipTour: D,
                          takeTour: I,
                        }),
                    ),
                  ),
                ),
              );
        },
        { RouterProvider: cn } = (0, Ut.U)(Qt.privateApis);
      (0, Rt.addFilter)(
        'editor.MediaUpload',
        'woo/customize-store/assembler-hub',
        () => Gt.MediaUpload,
      );
      const Mn = (0, s.createContext)({
          sendEvent: () => {},
          context: {},
          currentState: 'assemblerHub',
        }),
        gn = e => {
          const t = (0, s.useRef)(!1);
          t.current ||
            ((() => {
              if (!window.wcBlockSettings)
                return void console.warn(
                  'window.blockSettings not found. Skipping initialization.',
                );
              const e = window.wcBlockSettings;
              (e.__experimentalFetchLinkSuggestions = (t, o) =>
                (0, l.__experimentalFetchLinkSuggestions)(t, o, e)),
                (e.__experimentalFetchRichUrlData = l.__experimentalFetchUrlData),
                (
                  (0, d.dispatch)(Ye.store).__experimentalReapplyBlockTypeFilters ||
                  (0, d.dispatch)(Ye.store).reapplyBlockTypeFilters
                )();
              const t = (0, vt.__experimentalGetCoreBlocks)().filter(
                ({ name: e }) => 'core/freeform' !== e && !(0, Ye.getBlockType)(e),
              );
              (0, vt.registerCoreBlocks)(t),
                (0, d.dispatch)(Ye.store).setFreeformFallbackBlockName('core/html'),
                (0, d.dispatch)(Yt.store).setDefaults('core/edit-site', {
                  editorMode: 'visual',
                  fixedToolbar: !1,
                  focusMode: !1,
                  distractionFree: !1,
                  keepCaretInsideBlock: !1,
                  welcomeGuide: !1,
                  welcomeGuideStyles: !1,
                  welcomeGuidePage: !1,
                  welcomeGuideTemplate: !1,
                  showListViewByDefault: !1,
                  showBlockBreadcrumbs: !0,
                }),
                (0, d.dispatch)(Bt.h).updateSettings(e),
                (0, d.dispatch)(Pt.store).updateEditorSettings({
                  defaultTemplateTypes: e.defaultTemplateTypes,
                  defaultTemplatePartAreas: e.defaultTemplatePartAreas,
                }),
                window.addEventListener('dragover', e => e.preventDefault(), !1),
                window.addEventListener('drop', e => e.preventDefault(), !1),
                (0, Ut.U)((0, d.dispatch)(Bt.h)).setCanvasMode('view');
            })(),
            (t.current = !0));
          const [o, r] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              (0, L.RS)(() => r(!0));
            }, []),
            (e.context.aiOnline = window.parent?.window.cys_aiOnline),
            (0, s.createElement)(
              s.Fragment,
              null,
              o &&
                (0, s.createElement)(Uo, {
                  setOpenWarningModal: r,
                  onExitClicked: () => {
                    window.location.href = (0, u.getNewPath)({}, '/', {});
                  },
                }),
              (0, s.createElement)(
                Mn.Provider,
                { value: e },
                (0, s.createElement)(
                  Ft.ShortcutProvider,
                  { style: { height: '100%' } },
                  (0, s.createElement)(
                    Se.V,
                    null,
                    (0, s.createElement)(cn, null, (0, s.createElement)(ln, null)),
                    (0, s.createElement)(lo, null),
                  ),
                ),
              ),
            )
          );
        },
        un = {},
        mn = () => {
          const e = (0, u.getNewPath)((0, u.getPersistedQuery)(), '/', {});
          (0, L.tJ)(window, e);
        },
        dn = () =>
          (0, s.createElement)(
            'div',
            { className: 'woocommerce-customize-store__loading' },
            (0, s.createElement)(y.Spinner, null),
          ),
        yn = {
          updateQueryStep: (e, t, { action: o }) => {
            const { path: r } = (0, u.getQuery)(),
              n = o.step,
              a = r.split('/');
            'customize-store' === a[1] &&
              a[2] !== n &&
              (0, u.updateQueryString)({}, `/customize-store/${n}`);
          },
          redirectToWooHome: mn,
          redirectToThemes: e => {
            var t;
            (0, J.V)()
              ? (window.location.href =
                  null !== (t = e?.intro?.themeData?._links?.browse_all?.href) && void 0 !== t
                    ? t
                    : (0, p.getAdminLink)('themes.php'))
              : (window.location.href = (0, p.getAdminLink)(
                  'admin.php?page=wc-admin&tab=themes&path=%2Fextensions',
                ));
          },
          redirectToReferrer: () => {
            const { getWithExpiry: e, remove: t } = (0, I.accessTaskReferralStorage)({
                taskId: 'customize-store',
              }),
              o = e();
            o && (t(), (window.location.href = o.returnUrl));
          },
          goBack: () => {
            const e = (0, u.getHistory)();
            e.__experimentalLocationStack.length >= 2 &&
            !e.__experimentalLocationStack[
              e.__experimentalLocationStack.length - 2
            ].search.includes('customize-store')
              ? e.back()
              : mn();
          },
        },
        pn = { ...r, ...a, ...yn },
        Nn = {
          ...n,
          ...i,
          browserPopstateHandler: () => e => {
            const t = () => {
              e({ type: 'EXTERNAL_URL_UPDATE' });
            };
            return (
              window.addEventListener('popstate', t),
              () => {
                window.removeEventListener('popstate', t);
              }
            );
          },
          markTaskComplete: async () => {
            var e;
            const t = await (0, d.resolveSelect)(l.store).__experimentalGetTemplateForLink('/');
            return (0, d.dispatch)(m.OPTIONS_STORE_NAME).updateOptions({
              woocommerce_admin_customize_store_completed: 'yes',
              woocommerce_admin_customize_store_completed_theme_id:
                null !== (e = t.id) && void 0 !== e ? e : void 0,
            });
          },
        },
        In = (0, c.C)({
          id: 'customizeStore',
          initial: 'setFlags',
          predictableActionArguments: !0,
          preserveActionOrder: !0,
          schema: { context: {}, events: {}, services: {} },
          context: {
            intro: {
              hasErrors: !1,
              themeData: {
                themes: [],
                _links: { browse_all: { href: (0, p.getAdminLink)('themes.php') } },
              },
              activeTheme: '',
              customizeStoreTaskCompleted: !1,
              currentThemeIsAiGenerated: !1,
            },
            transitionalScreen: { hasCompleteSurvey: !1 },
            flowType: z.noAI,
            isFontLibraryAvailable: null,
            activeThemeHasMods: void 0,
          },
          invoke: { src: 'browserPopstateHandler' },
          on: {
            GO_BACK_TO_DESIGN_WITH_AI: {
              target: 'designWithAi',
              actions: [{ type: 'updateQueryStep', step: 'design-with-ai' }],
            },
            GO_BACK_TO_DESIGN_WITHOUT_AI: {
              target: 'intro',
              actions: [{ type: 'updateQueryStep', step: 'intro' }],
            },
            EXTERNAL_URL_UPDATE: { target: 'navigate' },
            AI_WIZARD_CLOSED_BEFORE_COMPLETION: {
              target: 'intro',
              actions: [{ type: 'updateQueryStep', step: 'intro' }],
            },
            NO_AI_FLOW_ERROR: {
              target: 'intro',
              actions: [
                { type: 'assignNoAIFlowError' },
                { type: 'updateQueryStep', step: 'intro' },
              ],
            },
            INSTALL_FONTS: { target: 'designWithoutAi.installFonts' },
          },
          states: {
            setFlags: {
              invoke: { src: 'setFlags', onDone: { actions: 'assignFlags', target: 'navigate' } },
            },
            navigate: {
              always: [
                { target: 'intro', cond: { type: 'hasStepInUrl', step: 'intro' } },
                { target: 'designWithAi', cond: { type: 'hasStepInUrl', step: 'design-with-ai' } },
                { target: 'designWithoutAi', cond: { type: 'hasStepInUrl', step: 'design' } },
                { target: 'assemblerHub', cond: { type: 'hasStepInUrl', step: 'assembler-hub' } },
                {
                  target: 'transitionalScreen',
                  cond: { type: 'hasStepInUrl', step: 'transitional' },
                },
                { target: 'intro' },
              ],
            },
            intro: {
              id: 'intro',
              initial: 'fetchIntroData',
              states: {
                fetchIntroData: {
                  initial: 'pending',
                  states: {
                    pending: {
                      invoke: {
                        src: 'fetchIntroData',
                        onError: { actions: 'assignFetchIntroDataError', target: 'success' },
                        onDone: {
                          target: 'success',
                          actions: [
                            'assignThemeData',
                            'assignActiveTheme',
                            'assignCustomizeStoreCompleted',
                            'assignCurrentThemeIsAiGenerated',
                          ],
                        },
                      },
                    },
                    success: { type: 'final' },
                  },
                  onDone: 'intro',
                },
                intro: {
                  meta: {
                    component: ({ sendEvent: e, context: t }) => {
                      const {
                          intro: {
                            activeTheme: o,
                            themeData: r,
                            customizeStoreTaskCompleted: n,
                            currentThemeIsAiGenerated: a,
                          },
                          activeThemeHasMods: i,
                        } = t,
                        l = (() => {
                          const [e, t] = (0, s.useState)(!1);
                          return (
                            (0, s.useEffect)(() => {
                              const e = () => {
                                  t(!0);
                                },
                                o = () => {
                                  t(!1);
                                };
                              return (
                                window.addEventListener('offline', e),
                                window.addEventListener('online', o),
                                () => {
                                  window.removeEventListener('offline', e),
                                    window.removeEventListener('online', o);
                                }
                              );
                            }, []),
                            e
                          );
                        })(),
                        [c, M] = (0, s.useState)(t.flowType === z.noAI && t.intro.hasErrors),
                        [g, u] = (0, s.useState)(!1);
                      let m = 'no-modal',
                        d = 'default';
                      const y = 'twentytwentyfour' === o;
                      switch (!0) {
                        case l:
                          d = 'network-offline';
                          break;
                        case t.flowType === z.noAI && !n:
                        case t.flowType === z.noAI && n && !y:
                          d = z.noAI;
                          break;
                        case t.flowType === z.noAI && n:
                          d = 'existing-no-ai-theme';
                          break;
                        case !n && i:
                          d = 'task-incomplete-active-theme-has-mods';
                          break;
                        case n && a:
                          d = 'existing-ai-theme';
                          break;
                        case n && !a:
                          d = 'existing-theme';
                      }
                      switch (!0) {
                        case !1 === g:
                          m = 'no-modal';
                          break;
                        case 'task-incomplete-active-theme-has-mods' === d:
                          m = 'task-incomplete-override-design-changes';
                          break;
                        case 'existing-ai-theme' === d:
                          m = 'task-complete-with-ai-theme';
                          break;
                        case 'existing-theme' === d:
                          m = 'task-complete-without-ai-theme';
                      }
                      const p = re[m],
                        N = oe[d],
                        I =
                          t.flowType === z.AIOnline
                            ? (0, T.__)(
                                'Create a store that reflects your brand and business. Select one of our professionally designed themes to customize, or create your own using AI.',
                                'woocommerce',
                              )
                            : (0, T.__)(
                                'Create a store that reflects your brand and business. Select one of our professionally designed themes to customize, or create your own using our store designer.',
                                'woocommerce',
                              );
                      return (0, s.createElement)(
                        s.Fragment,
                        null,
                        p &&
                          (0, s.createElement)(p, {
                            sendEvent: e,
                            setOpenDesignChangeWarningModal: u,
                          }),
                        (0, s.createElement)(
                          'div',
                          { className: 'woocommerce-customize-store-header' },
                          (0, s.createElement)(k.R, {
                            as: j.__unstableMotion.div,
                            variants: { view: { x: 0 } },
                            isTransparent: !1,
                            className: 'woocommerce-customize-store__content',
                          }),
                        ),
                        (0, s.createElement)(
                          'div',
                          { className: 'woocommerce-customize-store-container' },
                          (0, s.createElement)(
                            'div',
                            { className: 'woocommerce-customize-store-sidebar' },
                            (0, s.createElement)(
                              'div',
                              { className: 'woocommerce-customize-store-sidebar__title' },
                              (0, s.createElement)(
                                'button',
                                {
                                  onClick: () => {
                                    e('CLICKED_ON_BREADCRUMB');
                                  },
                                },
                                E.Z,
                              ),
                              (0, T.__)('Customize your store', 'woocommerce'),
                            ),
                            (0, s.createElement)('p', null, I),
                          ),
                          (0, s.createElement)(
                            'div',
                            { className: 'woocommerce-customize-store-main' },
                            c &&
                              (0, s.createElement)(
                                j.Notice,
                                {
                                  onRemove: () => M(!1),
                                  className: 'woocommerce-cys-design-with-ai__error-notice',
                                  status: 'error',
                                },
                                (0, w.Z)({
                                  mixedString: (0, T.__)(
                                    'Oops! We encountered a problem while setting up the foundations. {{anchor}}Please try again{{/anchor}} or start with a theme.',
                                    'woocommerce',
                                  ),
                                  components: {
                                    anchor: (0, s.createElement)('a', {
                                      className: 'woocommerce-customize-store-error-link',
                                      onClick: () => e('DESIGN_WITHOUT_AI'),
                                    }),
                                  },
                                }),
                              ),
                            (0, s.createElement)(N, {
                              setOpenDesignChangeWarningModal: u,
                              redirectToCYSFlow: () => e('DESIGN_WITHOUT_AI'),
                              sendEvent: e,
                            }),
                            (0, s.createElement)(
                              'p',
                              { className: 'select-theme-text' },
                              (0, T.__)(
                                'Or select a professionally designed theme to customize and make your own.',
                                'woocommerce',
                              ),
                            ),
                            (0, s.createElement)(
                              'div',
                              { className: 'woocommerce-customize-store-theme-cards' },
                              r.themes?.map(t =>
                                (0, s.createElement)(f, {
                                  key: t.slug,
                                  slug: t.slug,
                                  description: t.description,
                                  thumbnail_url: t.thumbnail_url,
                                  name: t.name,
                                  color_palettes: t.color_palettes,
                                  total_palettes: t.total_palettes,
                                  link_url: t?.link_url,
                                  is_active: t.is_active,
                                  price: t.price,
                                  onClick: () => {
                                    t.is_active
                                      ? e({
                                          type: 'SELECTED_ACTIVE_THEME',
                                          payload: { theme: t.slug },
                                        })
                                      : e({
                                          type: 'SELECTED_NEW_THEME',
                                          payload: { theme: t.slug },
                                        });
                                  },
                                }),
                              ),
                            ),
                            (0, s.createElement)(
                              'div',
                              { className: 'woocommerce-customize-store-browse-themes' },
                              (0, s.createElement)(
                                'button',
                                { onClick: () => e({ type: 'SELECTED_BROWSE_ALL_THEMES' }) },
                                (0, T.__)('Browse all themes', 'woocommerce'),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  },
                },
              },
              on: {
                CLICKED_ON_BREADCRUMB: { actions: 'goBack' },
                DESIGN_WITH_AI: {
                  actions: ['recordTracksDesignWithAIClicked'],
                  target: 'designWithAi',
                },
                DESIGN_WITHOUT_AI: {
                  actions: ['recordTracksDesignWithoutAIClicked'],
                  target: 'designWithoutAi',
                },
                SELECTED_NEW_THEME: {
                  actions: ['recordTracksThemeSelected'],
                  target: 'appearanceTask',
                },
                SELECTED_ACTIVE_THEME: {
                  actions: ['recordTracksThemeSelected'],
                  target: 'appearanceTask',
                },
                SELECTED_BROWSE_ALL_THEMES: {
                  actions: ['recordTracksBrowseAllThemesClicked', 'redirectToThemes'],
                },
              },
            },
            designWithoutAi: {
              initial: 'preDesignWithoutAi',
              states: {
                preDesignWithoutAi: { always: { target: 'designWithoutAi' } },
                designWithoutAi: {
                  entry: [{ type: 'updateQueryStep', step: 'design' }],
                  meta: { component: Ct },
                },
                installFonts: {
                  entry: [{ type: 'updateQueryStep', step: 'design/install-fonts' }],
                  meta: { component: Ct },
                },
              },
            },
            designWithAi: {
              initial: 'preDesignWithAi',
              states: {
                preDesignWithAi: { always: { target: 'designWithAi' } },
                designWithAi: {
                  meta: {
                    component: ({ parentMachine: e, context: t }) => {
                      const o = (0, u.getNewPath)({}, '/customize-store', {});
                      return Dt(t.flowType)
                        ? (0, s.createElement)(
                            s.Fragment,
                            null,
                            (0, s.createElement)(jt, { parentMachine: e, parentContext: t }),
                          )
                        : ((0, L.tJ)(window, o), null);
                    },
                  },
                  entry: [{ type: 'updateQueryStep', step: 'design-with-ai' }],
                },
              },
              on: { THEME_SUGGESTED: { target: 'assemblerHub' } },
            },
            assemblerHub: {
              initial: 'fetchActiveThemeHasMods',
              states: {
                fetchActiveThemeHasMods: {
                  invoke: {
                    src: 'fetchActiveThemeHasMods',
                    onDone: {
                      actions: 'assignActiveThemeHasMods',
                      target: 'checkActiveThemeHasMods',
                    },
                  },
                },
                checkActiveThemeHasMods: {
                  always: [
                    {
                      cond: 'activeThemeHasNoMods',
                      actions: [{ type: 'updateQueryStep', step: 'intro' }],
                      target: '#customizeStore.intro',
                    },
                    { cond: 'activeThemeHasMods', target: 'assemblerHub' },
                  ],
                },
                assemblerHub: {
                  entry: [{ type: 'updateQueryStep', step: 'assembler-hub' }],
                  meta: { component: gn },
                },
                postAssemblerHub: {
                  invoke: [
                    {
                      src: 'markTaskComplete',
                      onDone: { target: '#customizeStore.transitionalScreen' },
                    },
                    { src: 'fetchSurveyCompletedOption' },
                  ],
                },
              },
              on: { FINISH_CUSTOMIZATION: { target: '.postAssemblerHub' } },
            },
            transitionalScreen: {
              initial: 'fetchCustomizeStoreCompleted',
              states: {
                fetchCustomizeStoreCompleted: {
                  invoke: {
                    src: 'fetchCustomizeStoreCompleted',
                    onDone: {
                      actions: 'assignCustomizeStoreCompleted',
                      target: 'checkCustomizeStoreCompleted',
                    },
                  },
                },
                checkCustomizeStoreCompleted: {
                  always: [
                    {
                      cond: 'customizeTaskIsNotCompleted',
                      actions: [{ type: 'updateQueryStep', step: 'intro' }],
                      target: '#customizeStore.intro',
                    },
                    { cond: 'hasTaskReferral', target: 'skipTransitional' },
                    { cond: 'customizeTaskIsCompleted', target: 'preTransitional' },
                  ],
                },
                preTransitional: {
                  meta: { component: dn },
                  invoke: {
                    src: 'fetchSurveyCompletedOption',
                    onError: { target: 'transitional' },
                    onDone: { target: 'transitional', actions: ['assignHasCompleteSurvey'] },
                  },
                },
                skipTransitional: { entry: ['redirectToReferrer'] },
                transitional: {
                  entry: [{ type: 'updateQueryStep', step: 'transitional' }],
                  meta: { component: gn },
                  on: {
                    GO_BACK_TO_HOME: { actions: 'redirectToWooHome' },
                    COMPLETE_SURVEY: { actions: 'completeSurvey' },
                  },
                },
              },
            },
            appearanceTask: {},
          },
        }),
        Dn = ({ actionOverrides: e, servicesOverrides: t }) => {
          (0, D.p0)(['woocommerce-customize-store']);
          const o = (0, s.useMemo)(
              () =>
                In.withConfig({
                  services: { ...Nn, ...t },
                  actions: { ...pn, ...e },
                  guards: {
                    hasStepInUrl: (e, t, { cond: o }) => {
                      const { path: r = '' } = (0, u.getQuery)();
                      return r.split('/')[2] === o.step;
                    },
                    isAiOnline: e => e.flowType === z.AIOnline,
                    isAiOffline: e => e.flowType === z.AIOffline,
                    activeThemeHasMods: e => !!e.activeThemeHasMods,
                    activeThemeHasNoMods: e => !e.activeThemeHasMods,
                    customizeTaskIsCompleted: e => e.intro.customizeStoreTaskCompleted,
                    customizeTaskIsNotCompleted: e => !e.intro.customizeStoreTaskCompleted,
                    hasTaskReferral: () => {
                      const { getWithExpiry: e } = (0, I.accessTaskReferralStorage)({
                        taskId: 'customize-store',
                      });
                      return null !== e();
                    },
                  },
                }),
              [e, t],
            ),
            { versionEnabled: r } = (0, wt.r)(),
            [n, a, i] = (0, M.e)(o, { devTools: 'V4' === r });
          (0, s.useEffect)(() => {
            (0, L.cL)(window) ||
              (window.__wcCustomizeStore = {
                ...window.__wcCustomizeStore,
                sendEventToIntroMachine: e => a(e),
              });
          }, [a]),
            (window.__wcCustomizeStore = { ...window.__wcCustomizeStore });
          const l = (0, g.v)(i, e => {
              var t;
              return (0, It.r)(null !== (t = e?.meta) && void 0 !== t ? t : void 0);
            }),
            [c, m] = (0, s.useState)(null);
          var d;
          (0, s.useEffect)(() => {
            l?.component && m(() => l?.component);
          }, [c, l?.component]),
            (0, s.useEffect)(() => (0, L.FT)(), []),
            (d = 'is-fullscreen-mode'),
            (0, s.useEffect)(() => {
              if ('undefined' != typeof document)
                return (
                  (un[d] = (un[d] || 0) + 1),
                  1 === un[d] && document.body.classList.add(d),
                  () => {
                    un[d]--, 0 === un[d] && document.body.classList.remove(d);
                  }
                );
            }, [d]);
          const y = n.value instanceof Object ? Object.keys(n.value)[0] : n.value;
          return (0, s.createElement)(
            s.Fragment,
            null,
            (0, s.createElement)(
              'div',
              {
                className: `woocommerce-customize-store__container woocommerce-customize-store__step-${y}`,
              },
              c
                ? (0, s.createElement)(c, {
                    parentMachine: i,
                    sendEvent: a,
                    context: n.context,
                    currentState: n.value,
                  })
                : (0, s.createElement)(dn, null),
            ),
            (0, s.createElement)(N.PluginArea, { scope: 'woocommerce-customize-store' }),
          );
        },
        Tn = Dn;
    },
    33342: (e, t, o) => {
      o.d(t, {
        jf: () => E,
        mt: () => z,
        vY: () => k,
        nC: () => T,
        sw: () => D,
        B_: () => I,
        $p: () => j,
        wO: () => w,
      });
      var r = o(69307),
        n = o(65736),
        a = o(87608),
        i = o.n(a),
        s = o(55609),
        l = o(10431),
        c = o(76357),
        M = o(86020),
        g = o(9818);
      const u = ({ siteUrl: e }) =>
        (0, r.createElement)('iframe', {
          className: 'preview-iframe',
          src: e,
          title: 'Preview',
          tabIndex: -1,
        });
      var m = o(17062),
        d = o(52228),
        y = o(34081),
        p = o(76373);
      const N = ({
          bannerTitle: e,
          bannerText: t,
          bannerClass: o,
          showAIDisclaimer: a,
          buttonIsLink: l,
          bannerButtonOnClick: g,
          bannerButtonText: u,
          secondaryButton: m,
          previewBanner: d,
          children: y,
        }) =>
          (0, r.createElement)(
            'div',
            { className: i()('woocommerce-customize-store-banner', o) },
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store-banner-content' },
              (0, r.createElement)(
                'div',
                { className: 'banner-actions' },
                (0, r.createElement)('h1', null, e),
                (0, r.createElement)('p', null, t),
                u &&
                  (0, r.createElement)(
                    s.Button,
                    { onClick: () => g && g(), variant: l ? 'link' : 'primary' },
                    u,
                  ),
                m,
                a &&
                  (0, r.createElement)(
                    'p',
                    { className: 'ai-disclaimer' },
                    (0, c.Z)({
                      mixedString: (0, n.__)(
                        'Powered by experimental AI. {{link}}Learn more{{/link}}',
                        'woocommerce',
                      ),
                      components: {
                        link: (0, r.createElement)(M.Link, {
                          href: 'https://automattic.com/ai-guidelines',
                          target: '_blank',
                          type: 'external',
                        }),
                      },
                    }),
                  ),
              ),
              y,
            ),
            d,
          ),
        I = () =>
          (0, r.createElement)(N, {
            bannerTitle: (0, n.__)('Looking to design your store using AI?', 'woocommerce'),
            bannerText: (0, n.__)(
              "Unfortunately, the [AI Store designer] isn't available right now as we can't detect your network. Please check your internet connection.",
              'woocommerce',
            ),
            bannerClass: 'offline-banner',
            bannerButtonOnClick: () => {},
            showAIDisclaimer: !0,
          }),
        D = ({ sendEvent: e }) =>
          (0, r.createElement)(N, {
            bannerTitle: (0, n.__)('Looking to design your store using AI?', 'woocommerce'),
            bannerText: (0, n.__)(
              "It looks like you're using Jetpack's offline mode — switch to online mode to start designing with AI.",
              'woocommerce',
            ),
            bannerClass: 'offline-banner',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e({ type: 'JETPACK_OFFLINE_HOWTO' });
            },
            bannerButtonText: (0, n.__)('Find out how', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        T = ({ setOpenDesignChangeWarningModal: e }) =>
          (0, r.createElement)(N, {
            bannerTitle: (0, n.__)('Use the power of AI to design your store', 'woocommerce'),
            bannerText: (0, n.__)(
              'Design the look of your store, create pages, and generate copy using our built-in AI tools.',
              'woocommerce',
            ),
            bannerClass: '',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e(!0);
            },
            bannerButtonText: (0, n.__)('Design with AI', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        E = ({ sendEvent: e }) =>
          (0, r.createElement)(N, {
            bannerTitle: (0, n.__)('Use the power of AI to design your store', 'woocommerce'),
            bannerText: (0, n.__)(
              'Design the look of your store, create pages, and generate copy using our built-in AI tools.',
              'woocommerce',
            ),
            bannerClass: '',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e({ type: 'DESIGN_WITH_AI' });
            },
            bannerButtonText: (0, n.__)('Design with AI', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        w = ({ setOpenDesignChangeWarningModal: e }) =>
          (0, r.createElement)(N, {
            bannerTitle: (0, n.__)('Use the power of AI to design your store', 'woocommerce'),
            bannerText: (0, n.__)(
              'Design the look of your store, create pages, and generate copy using our built-in AI tools.',
              'woocommerce',
            ),
            bannerClass: '',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              e(!0);
            },
            bannerButtonText: (0, n.__)('Design with AI', 'woocommerce'),
            showAIDisclaimer: !0,
          }),
        j = ({ redirectToCYSFlow: e }) => {
          const [t, o] = (0, r.useState)(!1),
            a = (0, g.useSelect)(e => e('core').getCurrentTheme(), []),
            i = 'twentytwentyfour' === a?.stylesheet;
          return (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(N, {
              bannerTitle: (0, n.__)('Design your own', 'woocommerce'),
              bannerText: (0, n.__)(
                'Quickly create a beautiful store using our built-in store designer. Choose your layout, select a style, and much more.',
                'woocommerce',
              ),
              bannerClass: 'no-ai-banner',
              bannerButtonText: (0, n.__)('Start designing', 'woocommerce'),
              bannerButtonOnClick: () => {
                i ? e() : o(!0);
              },
              showAIDisclaimer: !1,
            }),
            t && (0, r.createElement)(y.Nh, { setIsModalOpen: o, redirectToCYSFlow: e }),
          );
        },
        z = ({ setOpenDesignChangeWarningModal: e }) => {
          const t = (0, r.createElement)(
              s.Button,
              {
                className: '',
                onClick: () => {
                  (0, p.L)('customize_your_store_intro_create_a_new_one_click'), e(!0);
                },
                variant: 'secondary',
              },
              (0, n.__)('Create a new one', 'woocommerce'),
            ),
            o = (0, m.O3)('siteUrl') + '?cys-hide-admin-bar=1';
          return (0, r.createElement)(
            N,
            {
              bannerTitle: (0, n.__)('Customize your custom theme', 'woocommerce'),
              bannerText: (0, n.__)(
                'Keep customizing the look of your AI-generated store, or start over and create a new one.',
                'woocommerce',
              ),
              bannerClass: 'existing-ai-theme-banner',
              buttonIsLink: !1,
              bannerButtonOnClick: () => {
                (0, p.L)('customize_your_store_intro_customize_click'),
                  (0, d.tJ)(
                    window,
                    (0, l.getNewPath)({ customizing: !0 }, '/customize-store/assembler-hub', {}),
                  );
              },
              bannerButtonText: (0, n.__)('Customize', 'woocommerce'),
              secondaryButton: t,
              showAIDisclaimer: !0,
            },
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-block-preview-container' },
              (0, r.createElement)(
                'div',
                { className: 'iframe-container' },
                (0, r.createElement)(u, { siteUrl: o }),
              ),
            ),
          );
        },
        k = () => {
          const e = (0, m.O3)('siteUrl') + '?cys-hide-admin-bar=1';
          return (0, r.createElement)(N, {
            bannerTitle: (0, n.__)('Edit your custom theme', 'woocommerce'),
            bannerText: (0, n.__)(
              'Continue to customize your store using the store designer. Change your color palette, fonts, page layouts, and more.',
              'woocommerce',
            ),
            bannerClass: 'existing-no-ai-theme-banner',
            buttonIsLink: !1,
            bannerButtonOnClick: () => {
              (0, p.L)('customize_your_store_intro_customize_click'),
                (0, d.tJ)(
                  window,
                  (0, l.getNewPath)({ customizing: !0 }, '/customize-store/assembler-hub', {}),
                );
            },
            bannerButtonText: (0, n.__)('Customize your theme', 'woocommerce'),
            showAIDisclaimer: !1,
            previewBanner: (0, r.createElement)(u, { siteUrl: e }),
          });
        };
    },
    34081: (e, t, o) => {
      o.d(t, { Fc: () => M, MO: () => c, Nh: () => u, ab: () => g });
      var r = o(69307),
        n = o(55609),
        a = o(65736),
        i = o(86020),
        s = o(17062),
        l = o(76373);
      const c = ({
          setOpenDesignChangeWarningModal: e,
          sendEvent: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, r.createElement)(
            n.Modal,
            {
              className: o,
              title: (0, a.__)('Are you sure you want to start a new design?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, r.createInterpolateElement)(
                (0, a.__)(
                  "The Store Designer will create a new store design for you, and you'll lose any changes you've made to your active theme. If you'd prefer to continue editing your theme, you can do so via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                ),
                {
                  EditorLink: (0, r.createElement)(i.Link, {
                    onClick: () => (window.open(`${s.SX}site-editor.php`, '_blank'), !1),
                    href: '',
                  }),
                },
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, r.createElement)(
                n.Button,
                { onClick: () => e(!1), variant: 'link' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                n.Button,
                { onClick: () => t({ type: 'DESIGN_WITH_AI' }), variant: 'primary' },
                (0, a.__)('Design with AI', 'woocommerce'),
              ),
            ),
          ),
        M = ({
          setOpenDesignChangeWarningModal: e,
          sendEvent: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, r.createElement)(
            n.Modal,
            {
              className: o,
              title: (0, a.__)('Are you sure you want to start a new design?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, r.createInterpolateElement)(
                (0, a.__)(
                  "The Store Designer will create a new store design for you, and you'll lose any changes you've made to your active theme. If you'd prefer to continue editing your theme, you can do so via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                ),
                {
                  EditorLink: (0, r.createElement)(i.Link, {
                    onClick: () => (window.open(`${s.SX}site-editor.php`, '_blank'), !1),
                    href: '',
                  }),
                },
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, r.createElement)(
                n.Button,
                { onClick: () => e(!1), variant: 'link' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                n.Button,
                { onClick: () => t({ type: 'DESIGN_WITH_AI' }), variant: 'primary' },
                (0, a.__)('Design with AI', 'woocommerce'),
              ),
            ),
          ),
        g = ({
          setOpenDesignChangeWarningModal: e,
          sendEvent: t,
          classname: o = 'woocommerce-customize-store__design-change-warning-modal',
        }) =>
          (0, r.createElement)(
            n.Modal,
            {
              className: o,
              title: (0, a.__)('Are you sure you want to start over?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, r.createInterpolateElement)(
                (0, a.__)(
                  "You'll be asked to provide your business info again, and will lose your existing AI design. If you want to customize your existing design, you can do so via the <EditorLink>Editor</EditorLink>.",
                  'woocommerce',
                ),
                {
                  EditorLink: (0, r.createElement)(i.Link, {
                    onClick: () => (window.open(`${s.SX}site-editor.php`, '_blank'), !1),
                    href: '',
                  }),
                },
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__design-change-warning-modal-footer' },
              (0, r.createElement)(
                n.Button,
                { onClick: () => e(!1), variant: 'link' },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                n.Button,
                {
                  onClick: () => {
                    t({ type: 'DESIGN_WITH_AI' }),
                      (0, l.L)('customize_your_store_intro_start_again_click');
                  },
                  variant: 'primary',
                },
                (0, a.__)('Start again', 'woocommerce'),
              ),
            ),
          ),
        u = ({ setIsModalOpen: e, redirectToCYSFlow: t }) =>
          (0, r.createElement)(
            n.Modal,
            {
              className: 'woocommerce-customize-store__theme-switch-warning-modal',
              title: (0, a.__)('Are you sure you want to design a new theme?', 'woocommerce'),
              onRequestClose: () => e(!1),
              shouldCloseOnClickOutside: !1,
            },
            (0, r.createElement)(
              'p',
              null,
              (0, a.__)(
                'Your active theme will be changed and you could lose any changes you’ve made to it.',
                'woocommerce',
              ),
            ),
            (0, r.createElement)(
              'div',
              { className: 'woocommerce-customize-store__theme-switch-warning-modal-footer' },
              (0, r.createElement)(
                n.Button,
                {
                  onClick: () => {
                    e(!1);
                  },
                  variant: 'link',
                },
                (0, a.__)('Cancel', 'woocommerce'),
              ),
              (0, r.createElement)(
                n.Button,
                {
                  onClick: () => {
                    e(!1), (0, l.L)('customize_your_store_agree_to_theme_switch_click'), t();
                  },
                  variant: 'primary',
                },
                (0, a.__)('Design a new theme', 'woocommerce'),
              ),
            ),
          );
    },
    76373: (e, t, o) => {
      o.d(t, { L: () => i });
      var r = o(14599),
        n = o(84279),
        a = o(34052);
      const i = (e, t) => {
        (0, a.V)() && (0, n.id)()
          ? (0, r.recordEvent)(e, { ...t, ref: n.LU })
          : (0, r.recordEvent)(e, t);
      };
    },
    52228: (e, t, o) => {
      o.d(t, {
        $$: () => u,
        FT: () => c,
        RS: () => l,
        cK: () => g,
        cL: () => a,
        eP: () => i,
        nO: () => n,
        rS: () => m,
        sr: () => s,
        tJ: () => M,
      });
      var r = o(41790);
      function n(e) {
        window.parent.postMessage(e, '*');
      }
      function a(e) {
        return e.document !== e.parent.document;
      }
      function i() {
        window.parent.postMessage({ type: 'iframe-loaded' }, '*');
      }
      function s(e) {
        window.addEventListener('message', t => {
          'iframe-loaded' === t.data.type && e();
        });
      }
      function l(e) {
        window.addEventListener('message', t => {
          'assemberBackButtonClicked' === t.data.type && e();
        });
      }
      function c() {
        const e = e => {
          'navigate' === e.data.type && (window.location.href = e.data.url);
        };
        return (
          window.addEventListener('message', e, !1),
          () => {
            window.removeEventListener('message', e, !1);
          }
        );
      }
      function M(e, t) {
        a(e) ? e.parent.postMessage({ type: 'navigate', url: t }, '*') : (e.location.href = t);
      }
      function g(e) {
        const t = e.contentDocument || e.contentWindow?.document;
        t?.addEventListener('click', function(e) {
          if (e.target) {
            const t = e.target?.closest('a');
            t && '_blank' === t.target
              ? (e.preventDefault(), window.open(t.href, '_blank'))
              : t && (e.preventDefault(), (window.location.href = t.href));
          }
        });
      }
      const u = (e, t = r.G3) =>
          e.replaceAll(/<!-- wp:site-logo\s*(\{.*?\})?\s*\/-->/g, (e, o) => {
            if (o) {
              const e = JSON.parse(o);
              return (e.width = t), `\x3c!-- wp:site-logo ${JSON.stringify(e)} /--\x3e`;
            }
            return `\x3c!-- wp:site-logo {"width":${t}} /--\x3e`;
          }),
        m = (e, t) =>
          e
            .map((e, o, r) => {
              const n = r[o + 1];
              if (!n) return [e];
              const a = [e],
                i = (n.progress - e.progress) / t;
              for (let o = 0; o < t; o++) a.push({ ...e, progress: e.progress + (o + 1) * i });
              return a;
            })
            .flat();
    },
    15577: (e, t, o) => {
      o.d(t, { Z: () => s });
      var r = o(69307),
        n = o(7862),
        a = o.n(n);
      function i({ className: e = 'wordpress-logo', size: t = 72 }) {
        return (0, r.createElement)(
          'svg',
          { className: e, height: t, width: t, viewBox: '0 0 72 72' },
          (0, r.createElement)('path', {
            d:
              'M36,0C16.1,0,0,16.1,0,36c0,19.9,16.1,36,36,36c19.9,0,36-16.2,36-36C72,16.1,55.8,0,36,0z M3.6,36 c0-4.7,1-9.1,2.8-13.2l15.4,42.3C11.1,59.9,3.6,48.8,3.6,36z M36,68.4c-3.2,0-6.2-0.5-9.1-1.3l9.7-28.2l9.9,27.3 c0.1,0.2,0.1,0.3,0.2,0.4C43.4,67.7,39.8,68.4,36,68.4z M40.5,20.8c1.9-0.1,3.7-0.3,3.7-0.3c1.7-0.2,1.5-2.8-0.2-2.7 c0,0-5.2,0.4-8.6,0.4c-3.2,0-8.5-0.4-8.5-0.4c-1.7-0.1-2,2.6-0.2,2.7c0,0,1.7,0.2,3.4,0.3l5,13.8L28,55.9L16.2,20.8 c2-0.1,3.7-0.3,3.7-0.3c1.7-0.2,1.5-2.8-0.2-2.7c0,0-5.2,0.4-8.6,0.4c-0.6,0-1.3,0-2.1,0C14.7,9.4,24.7,3.6,36,3.6 c8.4,0,16.1,3.2,21.9,8.5c-0.1,0-0.3,0-0.4,0c-3.2,0-5.4,2.8-5.4,5.7c0,2.7,1.5,4.9,3.2,7.6c1.2,2.2,2.7,4.9,2.7,8.9 c0,2.8-0.8,6.3-2.5,10.5l-3.2,10.8L40.5,20.8z M52.3,64l9.9-28.6c1.8-4.6,2.5-8.3,2.5-11.6c0-1.2-0.1-2.3-0.2-3.3 c2.5,4.6,4,9.9,4,15.5C68.4,47.9,61.9,58.4,52.3,64z',
          }),
        );
      }
      i.propTypes = { className: a().string, size: a().number };
      const s = i;
    },
    28316: (e, t, o) => {
      function r(e, t = new Set()) {
        if (!t.has(e)) {
          t.add(e);
          for (const o in e)
            if (e.hasOwnProperty(o)) {
              if ('component' === o) return e;
              if ('object' == typeof e[o] && null !== e[o]) {
                const n = r(e[o], t);
                if (void 0 !== n) return n;
              }
            }
        }
      }
      o.d(t, { r: () => r });
    },
  },
]);
