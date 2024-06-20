/*! For license information please see 7970.js.LICENSE.txt */
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [7970],
  {
    87208: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => f });
      var n = r(9818),
        s = r(69307),
        a = r(37798),
        o = r(71800),
        i = r(48075),
        c = r(65736),
        l = r(22629);
      const d = (e, t) => `<a ${u(e)}>${t}</a>`,
        u = e => `href="${e}" target="_blank" rel="noreferrer noopener"`,
        p = e => {
          const {
              title: t,
              foreign_landing_url: r,
              creator: n,
              creator_url: s,
              license: a,
              license_version: o,
              license_url: i,
            } = e,
            p = ((e, t) => {
              let r = e.trim();
              return (
                'pdm' !== e && (r = e.toUpperCase().replace('SAMPLING', 'Sampling')),
                t && (r += ` ${t}`),
                ['pdm', 'cc0'].includes(e) || (r = `CC ${r}`),
                r
              );
            })(a, o),
            m = (0, l.decodeEntities)(n);
          let g;
          return (
            (g = m
              ? t
                ? (0, c.sprintf)(
                    (0, c._x)('"%1$s" by %2$s/ %3$s', 'caption'),
                    d(r, (0, l.decodeEntities)(t)),
                    s ? d(s, m) : m,
                    i ? d(`${i}?ref=openverse`, p) : p,
                  )
                : (0, c.sprintf)(
                    (0, c._x)('<a %1$s>Work</a> by %2$s/ %3$s', 'caption'),
                    u(r),
                    s ? d(s, m) : m,
                    i ? d(`${i}?ref=openverse`, p) : p,
                  )
              : t
              ? (0, c.sprintf)(
                  (0, c._x)('"%1$s"/ %2$s', 'caption'),
                  d(r, (0, l.decodeEntities)(t)),
                  i ? d(`${i}?ref=openverse`, p) : p,
                )
              : (0, c.sprintf)(
                  (0, c._x)('<a %1$s>Work</a>/ %3$s', 'caption'),
                  u(r),
                  i ? d(`${i}?ref=openverse`, p) : p,
                )),
            g.replace(/\s{2}/g, ' ')
          );
        },
        m = async (e = {}) =>
          (
            await (0, n.resolveSelect)(a.store).getMediaItems({
              ...e,
              orderBy: e?.search ? 'relevance' : 'date',
            })
          ).map(e => ({
            ...e,
            alt: e.alt_text,
            url: e.source_url,
            previewUrl: e.media_details?.sizes?.medium?.source_url,
            caption: e.caption?.raw,
          })),
        g = [
          {
            name: 'images',
            labels: { name: (0, c.__)('Images'), search_items: (0, c.__)('Search images') },
            mediaType: 'image',
            fetch: async (e = {}) => m({ ...e, media_type: 'image' }),
          },
          {
            name: 'videos',
            labels: { name: (0, c.__)('Videos'), search_items: (0, c.__)('Search videos') },
            mediaType: 'video',
            fetch: async (e = {}) => m({ ...e, media_type: 'video' }),
          },
          {
            name: 'audio',
            labels: { name: (0, c.__)('Audio'), search_items: (0, c.__)('Search audio') },
            mediaType: 'audio',
            fetch: async (e = {}) => m({ ...e, media_type: 'audio' }),
          },
          {
            name: 'openverse',
            labels: { name: (0, c.__)('Openverse'), search_items: (0, c.__)('Search Openverse') },
            mediaType: 'image',
            async fetch(e = {}) {
              const t = {
                  ...e,
                  mature: !1,
                  excluded_source: 'flickr,inaturalist,wikimedia',
                  license: 'pdm,cc0',
                },
                r = { per_page: 'page_size', search: 'q' },
                n = new URL('https://api.openverse.engineering/v1/images/');
              Object.entries(t).forEach(([e, t]) => {
                const s = r[e] || e;
                n.searchParams.set(s, t);
              });
              const s = await window.fetch(n, {
                headers: { 'User-Agent': 'WordPress/inserter-media-fetch' },
              });
              return (await s.json()).results.map(e => ({
                ...e,
                title: e.title?.toLowerCase().startsWith('file:') ? e.title.slice(5) : e.title,
                sourceId: e.id,
                id: void 0,
                caption: p(e),
                previewUrl: e.thumbnail,
              }));
            },
            getReportUrl: ({ sourceId: e }) => `https://wordpress.org/openverse/image/${e}/report/`,
            isExternalResource: !0,
          },
        ];
      function f() {
        var e, t;
        const { setIsInserterOpened: r } = (0, n.useDispatch)(o.h),
          { storedSettings: c, canvasMode: l, templateType: d } = (0, n.useSelect)(
            e => {
              const { getSettings: t, getCanvasMode: n, getEditedPostType: s } = (0, i.U)(e(o.h));
              return { storedSettings: t(r), canvasMode: n(), templateType: s() };
            },
            [r],
          ),
          u =
            null !== (e = c.__experimentalAdditionalBlockPatterns) && void 0 !== e
              ? e
              : c.__experimentalBlockPatterns,
          p =
            null !== (t = c.__experimentalAdditionalBlockPatternCategories) && void 0 !== t
              ? t
              : c.__experimentalBlockPatternCategories,
          { restBlockPatterns: m, restBlockPatternCategories: f, templateSlug: y } = (0,
          n.useSelect)(e => {
            const { getEditedPostType: t, getEditedPostId: r } = e(o.h),
              { getEditedEntityRecord: n } = e(a.store),
              s = n('postType', t(), r());
            return {
              restBlockPatterns: e(a.store).getBlockPatterns(),
              restBlockPatternCategories: e(a.store).getBlockPatternCategories(),
              templateSlug: s.slug,
            };
          }, []),
          h = (function(e) {
            const t = e?.match(
              /^(category|tag|taxonomy-([^-]+))$|^(((category|tag)|taxonomy-([^-]+))-(.+))$/,
            );
            let r, s;
            return (
              t &&
                (t[1] ? (r = t[2] ? t[2] : t[1]) : t[3] && ((r = t[6] ? t[6] : t[4]), (s = t[7])),
                (r = 'tag' === r ? 'post_tag' : r)),
              (0, n.useSelect)(
                e => {
                  const { getEntityRecords: t, getTaxonomy: n } = e(a.store);
                  let o, i;
                  if ((r && (o = n(r)?.labels?.singular_name), s)) {
                    const e = t('taxonomy', r, { slug: s, per_page: 1 });
                    e && e[0] && (i = e[0].name);
                  }
                  return { archiveTypeLabel: o, archiveNameLabel: i };
                },
                [r, s],
              )
            );
          })(y),
          v = (0, s.useMemo)(
            () =>
              [...(u || []), ...(m || [])]
                .filter((e, t, r) => t === r.findIndex(t => e.name === t.name))
                .filter(({ postTypes: e }) => !e || (Array.isArray(e) && e.includes(d))),
            [u, m, d],
          ),
          _ = (0, s.useMemo)(
            () =>
              [...(p || []), ...(f || [])].filter(
                (e, t, r) => t === r.findIndex(t => e.name === t.name),
              ),
            [p, f],
          );
        return (0, s.useMemo)(() => {
          const {
            __experimentalAdditionalBlockPatterns: e,
            __experimentalAdditionalBlockPatternCategories: t,
            focusMode: r,
            ...n
          } = c;
          return {
            ...n,
            inserterMediaCategories: g,
            __experimentalBlockPatterns: v,
            __experimentalBlockPatternCategories: _,
            focusMode: ('view' !== l || !r) && r,
            __experimentalArchiveTitleTypeLabel: h.archiveTypeLabel,
            __experimentalArchiveTitleNameLabel: h.archiveNameLabel,
          };
        }, [c, v, _, l, h.archiveTypeLabel, h.archiveNameLabel]);
      }
    },
    41152: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(55609);
      function a() {
        return (0, n.createElement)(
          'div',
          { className: 'edit-site-canvas-spinner' },
          (0, n.createElement)(s.Spinner, null),
        );
      }
    },
    28289: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => u });
      var n = r(69307),
        s = r(65736),
        a = r(92694),
        o = r(55609),
        i = r(52175),
        c = r(94333);
      function l({ text: e, children: t }) {
        const r = (0, c.useCopyToClipboard)(e);
        return (0, n.createElement)(o.Button, { variant: 'secondary', ref: r }, t);
      }
      function d({ message: e, error: t }) {
        const r = [
          (0, n.createElement)(l, { key: 'copy-error', text: t.stack }, (0, s.__)('Copy Error')),
        ];
        return (0, n.createElement)(
          i.Warning,
          { className: 'editor-error-boundary', actions: r },
          e,
        );
      }
      class u extends n.Component {
        constructor() {
          super(...arguments), (this.state = { error: null });
        }
        componentDidCatch(e) {
          (0, a.doAction)('editor.ErrorBoundary.errorLogged', e);
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error
            ? (0, n.createElement)(d, {
                message: (0, s.__)('The editor has encountered an unexpected error.'),
                error: this.state.error,
              })
            : this.props.children;
        }
      }
    },
    54247: (e, t, r) => {
      'use strict';
      r.d(t, { w: () => l });
      var n = r(69307),
        s = r(9818),
        a = r(52175),
        o = r(71800),
        i = r(48075);
      const { useGlobalStylesOutput: c } = (0, i.U)(a.privateApis);
      function l() {
        return (
          (function() {
            const [e, t] = c(),
              { getSettings: r } = (0, s.useSelect)(o.h),
              { updateSettings: a } = (0, s.useDispatch)(o.h);
            (0, n.useEffect)(() => {
              var n;
              if (!e || !t) return;
              const s = r(),
                o = Object.values(null !== (n = s.styles) && void 0 !== n ? n : []).filter(
                  e => !e.isGlobalStyles,
                );
              a({ ...s, styles: [...o, ...e], __experimentalFeatures: t });
            }, [e, t]);
          })(),
          null
        );
      }
    },
    15147: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => f, X: () => g });
      var n = r(69307),
        s = r(64876),
        a = r.n(s);
      function o(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function i(e) {
        var t, r;
        return (
          !1 !== o(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== o((r = t.prototype)) && !1 !== r.hasOwnProperty('isPrototypeOf')))
        );
      }
      var c = r(9818),
        l = r(37798),
        d = r(52175),
        u = r(48075);
      const { GlobalStylesContext: p, cleanEmptyObject: m } = (0, u.U)(d.privateApis);
      function g(e, t) {
        return a()(e, t, { isMergeableObject: i });
      }
      function f({ children: e }) {
        const t = (function() {
          const [e, t, r] = (function() {
              const { globalStylesId: e, isReady: t, settings: r, styles: s } = (0, c.useSelect)(
                  e => {
                    const { getEditedEntityRecord: t, hasFinishedResolution: r } = e(l.store),
                      n = e(l.store).__experimentalGetCurrentGlobalStylesId(),
                      s = n ? t('root', 'globalStyles', n) : void 0;
                    let a = !1;
                    return (
                      r('__experimentalGetCurrentGlobalStylesId') &&
                        (a = !n || r('getEditedEntityRecord', ['root', 'globalStyles', n])),
                      { globalStylesId: n, isReady: a, settings: s?.settings, styles: s?.styles }
                    );
                  },
                  [],
                ),
                { getEditedEntityRecord: a } = (0, c.useSelect)(l.store),
                { editEntityRecord: o } = (0, c.useDispatch)(l.store);
              return [
                t,
                (0, n.useMemo)(
                  () => ({ settings: null != r ? r : {}, styles: null != s ? s : {} }),
                  [r, s],
                ),
                (0, n.useCallback)(
                  (t, r = {}) => {
                    var n, s;
                    const i = a('root', 'globalStyles', e),
                      c = t({
                        styles: null !== (n = i?.styles) && void 0 !== n ? n : {},
                        settings: null !== (s = i?.settings) && void 0 !== s ? s : {},
                      });
                    o(
                      'root',
                      'globalStyles',
                      e,
                      { styles: m(c.styles) || {}, settings: m(c.settings) || {} },
                      r,
                    );
                  },
                  [e],
                ),
              ];
            })(),
            [s, a] = (function() {
              const e = (0, c.useSelect)(
                e => e(l.store).__experimentalGetCurrentThemeBaseGlobalStyles(),
                [],
              );
              return [!!e, e];
            })(),
            o = (0, n.useMemo)(() => (a && t ? g(a, t) : {}), [t, a]);
          return (0, n.useMemo)(
            () => ({ isReady: e && s, user: t, base: a, merged: o, setUserConfig: r }),
            [o, t, a, r, e, s],
          );
        })();
        return t.isReady ? (0, n.createElement)(p.Provider, { value: t }, e) : null;
      }
    },
    34216: (e, t, r) => {
      'use strict';
      r.d(t, { T: () => c });
      var n = r(69307),
        s = r(9818),
        a = r(37798),
        o = r(82369);
      const i = 1e4;
      function c() {
        const { isLoaded: e } = (0, o.Z)(),
          [t, r] = (0, n.useState)(!1),
          c = (0, s.useSelect)(
            e => {
              const r = e(a.store).hasResolvingSelectors();
              return !t && !r;
            },
            [t],
          );
        return (
          (0, n.useEffect)(() => {
            let e;
            return (
              t ||
                (e = setTimeout(() => {
                  r(!0);
                }, i)),
              () => {
                clearTimeout(e);
              }
            );
          }, [t]),
          (0, n.useEffect)(() => {
            if (c) {
              const e = setTimeout(() => {
                r(!0);
              }, 1e3);
              return () => {
                clearTimeout(e);
              };
            }
          }, [c]),
          !t || !e
        );
      }
    },
    63597: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => i });
      var n = r(69307),
        s = r(87608),
        a = r.n(s),
        o = r(55609);
      function i(e) {
        return (0, n.createElement)(o.Button, {
          ...e,
          className: a()('edit-site-sidebar-button', e.className),
        });
      }
    },
    78959: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => m });
      var n = r(69307),
        s = r(87608),
        a = r.n(s),
        o = r(55609),
        i = r(65736);
      const c = (0, n.forwardRef)(function({ icon: e, size: t = 24, ...r }, s) {
        return (0, n.cloneElement)(e, { width: t, height: t, ...r, ref: s });
      });
      var l = r(99196),
        d = r(70444);
      const u = (0, l.createElement)(
          d.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, l.createElement)(d.Path, { d: 'm13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z' }),
        ),
        p = (0, l.createElement)(
          d.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, l.createElement)(d.Path, {
            d:
              'M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z',
          }),
        );
      function m({ className: e, icon: t, withChevron: r = !1, suffix: s, children: l, ...d }) {
        return (0, n.createElement)(
          o.__experimentalItem,
          {
            className: a()('edit-site-sidebar-navigation-item', { 'with-suffix': !r && s }, e),
            ...d,
          },
          (0, n.createElement)(
            o.__experimentalHStack,
            { justify: 'flex-start' },
            t && (0, n.createElement)(c, { style: { fill: 'currentcolor' }, icon: t, size: 24 }),
            (0, n.createElement)(o.FlexBlock, null, l),
            r &&
              (0, n.createElement)(c, {
                icon: (0, i.isRTL)() ? u : p,
                className: 'edit-site-sidebar-navigation-item__drilldown-indicator',
                size: 24,
              }),
            !r && s,
          ),
        );
      }
    },
    31886: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => m });
      var n = r(69307),
        s = r(87608),
        a = r.n(s),
        o = r(9818),
        i = r(55609),
        c = r(65736),
        l = r(99196),
        d = r(70444);
      const u = (0, l.createElement)(
        d.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-2 -2 24 24' },
        (0, l.createElement)(d.Path, {
          d:
            'M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z',
        }),
      );
      var p = r(37798);
      const m = function({ className: e }) {
        const { isRequestingSite: t, siteIconUrl: r } = (0, o.useSelect)(e => {
          const { getEntityRecord: t } = e(p.store),
            r = t('root', '__unstableBase', void 0);
          return { isRequestingSite: !r, siteIconUrl: r?.site_icon_url };
        }, []);
        if (t && !r)
          return (0, n.createElement)('div', { className: 'edit-site-site-icon__image' });
        const s = r
          ? (0, n.createElement)('img', {
              className: 'edit-site-site-icon__image',
              alt: (0, c.__)('Site Icon'),
              src: r,
            })
          : (0, n.createElement)(i.Icon, {
              className: 'edit-site-site-icon__icon',
              size: '48px',
              icon: u,
            });
        return (0, n.createElement)('div', { className: a()(e, 'edit-site-site-icon') }, s);
      };
    },
    42592: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => u });
      var n = r(69307),
        s = r(9818),
        a = r(37798),
        o = r(86802),
        i = r(71800),
        c = r(48075),
        l = r(87586);
      const { useLocation: d } = (0, c.U)(o.privateApis);
      function u() {
        const { params: e } = d(),
          { postType: t } = e,
          r = (0, l.Z)(e?.postId),
          { isRequestingSite: o, homepageId: c, url: u } = (0, s.useSelect)(e => {
            const { getSite: t, getUnstableBase: r } = e(a.store),
              n = t(),
              s = r();
            return {
              isRequestingSite: !s,
              homepageId: 'page' === n?.show_on_front ? n.page_on_front : null,
              url: s?.home,
            };
          }, []),
          {
            setEditedEntity: p,
            setTemplate: m,
            setTemplatePart: g,
            setPage: f,
            setNavigationMenu: y,
          } = (0, s.useDispatch)(i.h);
        (0, n.useEffect)(() => {
          if (t && r)
            switch (t) {
              case 'wp_template':
                m(r);
                break;
              case 'wp_template_part':
                g(r);
                break;
              case 'wp_navigation':
                y(r);
                break;
              case 'wp_block':
                p(t, r);
                break;
              default:
                f({ context: { postType: t, postId: r } });
            }
          else c ? f({ context: { postType: 'page', postId: Number(c) } }) : o || f({ path: u });
        }, [u, r, t, c, o, p, f, m, g, y]);
      }
    },
    82369: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => l });
      var n = r(9818),
        s = r(37798),
        a = r(12238),
        o = r(22629),
        i = r(71800),
        c = r(87586);
      function l(e, t) {
        const { record: r, title: l, description: d, isLoaded: u, icon: p } = (0, n.useSelect)(
          r => {
            const { getEditedPostType: n, getEditedPostId: o } = r(i.h),
              { getEditedEntityRecord: l, hasFinishedResolution: d } = r(s.store),
              { __experimentalGetTemplateInfo: u } = r(a.store),
              p = null != e ? e : n();
            let m = null != t ? t : o();
            m = (0, c.Z)(m, p);
            const g = l('postType', p, m),
              f = m && d('getEditedEntityRecord', ['postType', p, m]),
              y = u(g);
            return {
              record: g,
              title: y.title,
              description: y.description,
              isLoaded: f,
              icon: y.icon,
            };
          },
          [e, t],
        );
        return {
          isLoaded: u,
          icon: p,
          record: r,
          getTitle: () => (l ? (0, o.decodeEntities)(l) : null),
          getDescription: () => (d ? (0, o.decodeEntities)(d) : null),
        };
      }
    },
    71800: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => Ie });
      var n = {};
      r.r(n),
        r.d(n, {
          __experimentalSetPreviewDeviceType: () => T,
          addTemplate: () => P,
          closeGeneralSidebar: () => j,
          openGeneralSidebar: () => U,
          openNavigationPanelToMenu: () => L,
          removeTemplate: () => I,
          revertTemplate: () => $,
          setEditedEntity: () => F,
          setEditedPostContext: () => k,
          setHasPageContentFocus: () => Z,
          setHomeTemplateId: () => M,
          setIsInserterOpened: () => D,
          setIsListViewOpened: () => z,
          setIsNavigationPanelOpened: () => V,
          setIsSaveViewOpened: () => G,
          setNavigationMenu: () => N,
          setNavigationPanelActiveMenu: () => R,
          setPage: () => O,
          setTemplate: () => x,
          setTemplatePart: () => A,
          switchEditorMode: () => H,
          toggleFeature: () => S,
          updateSettings: () => B,
        });
      var s = {};
      r.r(s), r.d(s, { setCanvasMode: () => W, setEditorCanvasContainerView: () => q });
      var a = {};
      r.r(a),
        r.d(a, {
          __experimentalGetInsertionPoint: () => ge,
          __experimentalGetPreviewDeviceType: () => se,
          __unstableGetPreference: () => re,
          getCanUserCreateMedia: () => ae,
          getCurrentTemplateNavigationPanelSubMenu: () => _e,
          getCurrentTemplateTemplateParts: () => he,
          getEditedPostContext: () => ue,
          getEditedPostId: () => de,
          getEditedPostType: () => le,
          getEditorMode: () => ve,
          getHomeTemplateId: () => ce,
          getNavigationPanelActiveMenu: () => Ee,
          getPage: () => pe,
          getReusableBlocks: () => oe,
          getSettings: () => ie,
          hasPageContentFocus: () => be,
          isFeatureActive: () => ne,
          isInserterOpened: () => me,
          isListViewOpened: () => fe,
          isNavigationOpened: () => Ce,
          isPage: () => we,
          isSaveViewOpened: () => ye,
        });
      var o = {};
      r.r(o), r.d(o, { getCanvasMode: () => Se, getEditorCanvasContainerView: () => Te });
      var i = r(9818);
      const c = (0, i.combineReducers)({
        deviceType: function(e = 'Desktop', t) {
          return 'SET_PREVIEW_DEVICE_TYPE' === t.type ? t.deviceType : e;
        },
        settings: function(e = {}, t) {
          return 'UPDATE_SETTINGS' === t.type ? { ...e, ...t.settings } : e;
        },
        editedPost: function(e = {}, t) {
          switch (t.type) {
            case 'SET_EDITED_POST':
              return { postType: t.postType, id: t.id, context: t.context };
            case 'SET_EDITED_POST_CONTEXT':
              return { ...e, context: t.context };
          }
          return e;
        },
        blockInserterPanel: function(e = !1, t) {
          switch (t.type) {
            case 'SET_IS_LIST_VIEW_OPENED':
              return !t.isOpen && e;
            case 'SET_IS_INSERTER_OPENED':
              return t.value;
            case 'SET_CANVAS_MODE':
              return !1;
          }
          return e;
        },
        listViewPanel: function(e = !1, t) {
          switch (t.type) {
            case 'SET_IS_INSERTER_OPENED':
              return !t.value && e;
            case 'SET_IS_LIST_VIEW_OPENED':
              return t.isOpen;
            case 'SET_CANVAS_MODE':
              return !1;
          }
          return e;
        },
        saveViewPanel: function(e = !1, t) {
          switch (t.type) {
            case 'SET_IS_SAVE_VIEW_OPENED':
              return t.isOpen;
            case 'SET_CANVAS_MODE':
              return !1;
          }
          return e;
        },
        canvasMode: function(e = 'init', t) {
          return 'SET_CANVAS_MODE' === t.type ? t.mode : e;
        },
        editorCanvasContainerView: function(e = void 0, t) {
          return 'SET_EDITOR_CANVAS_CONTAINER_VIEW' === t.type ? t.view : e;
        },
        hasPageContentFocus: function(e = !1, t) {
          switch (t.type) {
            case 'SET_EDITED_POST':
              return !!t.context?.postId;
            case 'SET_HAS_PAGE_CONTENT_FOCUS':
              return t.hasPageContentFocus;
          }
          return e;
        },
      });
      var l = r(86989),
        d = r.n(l),
        u = r(4981),
        p = r(37180),
        m = r.n(p),
        g = r(96483),
        f = r(65736),
        y = r(53961),
        h = r(37798),
        v = r(23874),
        _ = r(52175),
        E = r(25158),
        C = r(55815),
        w = r(22629);
      const b = 'core/edit-site';
      function S(e) {
        return function({ registry: t }) {
          m()("select( 'core/edit-site' ).toggleFeature( featureName )", {
            since: '6.0',
            alternative: "select( 'core/preferences').toggle( 'core/edit-site', featureName )",
          }),
            t.dispatch(C.store).toggle('core/edit-site', e);
        };
      }
      function T(e) {
        return { type: 'SET_PREVIEW_DEVICE_TYPE', deviceType: e };
      }
      const x = (e, t) => async ({ dispatch: r, registry: n }) => {
          if (!t)
            try {
              const r = await n
                .resolveSelect(h.store)
                .getEntityRecord('postType', 'wp_template', e);
              t = r?.slug;
            } catch (e) {}
          r({
            type: 'SET_EDITED_POST',
            postType: 'wp_template',
            id: e,
            context: { templateSlug: t },
          });
        },
        P = e => async ({ dispatch: t, registry: r }) => {
          const n = await r.dispatch(h.store).saveEntityRecord('postType', 'wp_template', e);
          e.content &&
            r
              .dispatch(h.store)
              .editEntityRecord(
                'postType',
                'wp_template',
                n.id,
                { blocks: (0, u.parse)(e.content) },
                { undoIgnore: !0 },
              ),
            t({
              type: 'SET_EDITED_POST',
              postType: 'wp_template',
              id: n.id,
              context: { templateSlug: n.slug },
            });
        },
        I = e => async ({ registry: t }) => {
          try {
            await t.dispatch(h.store).deleteEntityRecord('postType', e.type, e.id, { force: !0 });
            const r = t.select(h.store).getLastEntityDeleteError('postType', e.type, e.id);
            if (r) throw r;
            const n = 'string' == typeof e.title ? e.title : e.title?.rendered;
            t.dispatch(y.store).createSuccessNotice(
              (0, f.sprintf)((0, f.__)('"%s" deleted.'), (0, w.decodeEntities)(n)),
              { type: 'snackbar', id: 'site-editor-template-deleted-success' },
            );
          } catch (e) {
            const r =
              e.message && 'unknown_error' !== e.code
                ? e.message
                : (0, f.__)('An error occurred while deleting the template.');
            t.dispatch(y.store).createErrorNotice(r, { type: 'snackbar' });
          }
        };
      function A(e) {
        return { type: 'SET_EDITED_POST', postType: 'wp_template_part', id: e };
      }
      function N(e) {
        return { type: 'SET_EDITED_POST', postType: 'wp_navigation', id: e };
      }
      function F(e, t) {
        return { type: 'SET_EDITED_POST', postType: e, id: t };
      }
      function M() {
        return (
          m()("dispatch( 'core/edit-site' ).setHomeTemplateId", { since: '6.2', version: '6.4' }),
          { type: 'NOTHING' }
        );
      }
      function k(e) {
        return { type: 'SET_EDITED_POST_CONTEXT', context: e };
      }
      const O = e => async ({ dispatch: t, registry: r }) => {
        if (!e.path && e.context?.postId) {
          const t = await r
            .resolveSelect(h.store)
            .getEntityRecord('postType', e.context.postType || 'post', e.context.postId);
          e.path = (0, g.getPathAndQueryString)(t?.link);
        }
        const n = await r.resolveSelect(h.store).__experimentalGetTemplateForLink(e.path);
        if (n)
          return (
            t({
              type: 'SET_EDITED_POST',
              postType: 'wp_template',
              id: n.id,
              context: { ...e.context, templateSlug: n.slug },
            }),
            n.id
          );
      };
      function R() {
        return (
          m()("dispatch( 'core/edit-site' ).setNavigationPanelActiveMenu", {
            since: '6.2',
            version: '6.4',
          }),
          { type: 'NOTHING' }
        );
      }
      function L() {
        return (
          m()("dispatch( 'core/edit-site' ).openNavigationPanelToMenu", {
            since: '6.2',
            version: '6.4',
          }),
          { type: 'NOTHING' }
        );
      }
      function V() {
        return (
          m()("dispatch( 'core/edit-site' ).setIsNavigationPanelOpened", {
            since: '6.2',
            version: '6.4',
          }),
          { type: 'NOTHING' }
        );
      }
      function D(e) {
        return { type: 'SET_IS_INSERTER_OPENED', value: e };
      }
      function B(e) {
        return { type: 'UPDATE_SETTINGS', settings: e };
      }
      function z(e) {
        return { type: 'SET_IS_LIST_VIEW_OPENED', isOpen: e };
      }
      function G(e) {
        return { type: 'SET_IS_SAVE_VIEW_OPENED', isOpen: e };
      }
      const $ = (e, { allowUndo: t = !0 } = {}) => async ({ registry: r }) => {
          const n = 'edit-site-template-reverted';
          if (
            (r.dispatch(y.store).removeNotice(n),
            (function(e) {
              return !!e && 'custom' === e?.source && e?.has_theme_file;
            })(e))
          )
            try {
              const s = r.select(h.store).getEntityConfig('postType', e.type);
              if (!s)
                return void r
                  .dispatch(y.store)
                  .createErrorNotice(
                    (0, f.__)('The editor has encountered an unexpected error. Please reload.'),
                    { type: 'snackbar' },
                  );
              const a = (0, g.addQueryArgs)(`${s.baseURL}/${e.id}`, {
                  context: 'edit',
                  source: 'theme',
                }),
                o = await d()({ path: a });
              if (!o)
                return void r
                  .dispatch(y.store)
                  .createErrorNotice(
                    (0, f.__)('The editor has encountered an unexpected error. Please reload.'),
                    { type: 'snackbar' },
                  );
              const i = ({ blocks: e = [] }) => (0, u.__unstableSerializeAndClean)(e),
                c = r.select(h.store).getEditedEntityRecord('postType', e.type, e.id);
              r.dispatch(h.store).editEntityRecord(
                'postType',
                e.type,
                e.id,
                { content: i, blocks: c.blocks, source: 'custom' },
                { undoIgnore: !0 },
              );
              const l = (0, u.parse)(o?.content?.raw);
              if (
                (r
                  .dispatch(h.store)
                  .editEntityRecord('postType', e.type, o.id, {
                    content: i,
                    blocks: l,
                    source: 'theme',
                  }),
                t)
              ) {
                const t = () => {
                  r.dispatch(h.store).editEntityRecord('postType', e.type, c.id, {
                    content: i,
                    blocks: c.blocks,
                    source: 'custom',
                  });
                };
                r.dispatch(y.store).createSuccessNotice((0, f.__)('Template reverted.'), {
                  type: 'snackbar',
                  id: n,
                  actions: [{ label: (0, f.__)('Undo'), onClick: t }],
                });
              }
            } catch (e) {
              const t =
                e.message && 'unknown_error' !== e.code
                  ? e.message
                  : (0, f.__)('Template revert failed. Please reload.');
              r.dispatch(y.store).createErrorNotice(t, { type: 'snackbar' });
            }
          else
            r.dispatch(y.store).createErrorNotice((0, f.__)('This template is not revertable.'), {
              type: 'snackbar',
            });
        },
        U = e => ({ registry: t }) => {
          t.dispatch(v.h).enableComplementaryArea(b, e);
        },
        j = () => ({ registry: e }) => {
          e.dispatch(v.h).disableComplementaryArea(b);
        },
        H = e => ({ registry: t }) => {
          t.dispatch('core/preferences').set('core/edit-site', 'editorMode', e),
            'visual' !== e && t.dispatch(_.store).clearSelectedBlock(),
            'visual' === e
              ? (0, E.speak)((0, f.__)('Visual editor selected'), 'assertive')
              : 'text' === e && (0, E.speak)((0, f.__)('Code editor selected'), 'assertive');
        },
        Z = e => ({ dispatch: t, registry: r }) => {
          e && r.dispatch(_.store).clearSelectedBlock(),
            t({ type: 'SET_HAS_PAGE_CONTENT_FOCUS', hasPageContentFocus: e });
        },
        W = e => ({ registry: t, dispatch: r, select: n }) => {
          t.dispatch(_.store).__unstableSetEditorMode('edit'),
            r({ type: 'SET_CANVAS_MODE', mode: e }),
            'edit' === e &&
              t.select(C.store).get('core/edit-site', 'showListViewByDefault') &&
              r.setIsListViewOpened(!0),
            'view' === e && n.isPage() && r.setHasPageContentFocus(!0);
        },
        q = e => ({ dispatch: t }) => {
          t({ type: 'SET_EDITOR_CANVAS_CONTAINER_VIEW', view: e });
        };
      var Y = {};
      function J(e) {
        return [e];
      }
      function X(e, t, r) {
        var n;
        if (e.length !== t.length) return !1;
        for (n = r; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var Q = r(58141),
        K = r(69307);
      const ee = [],
        te = (function(e, t) {
          var r,
            n,
            s = 0;
          function a() {
            var a,
              o,
              i = r,
              c = arguments.length;
            e: for (; i; ) {
              if (i.args.length === arguments.length) {
                for (o = 0; o < c; o++)
                  if (i.args[o] !== arguments[o]) {
                    i = i.next;
                    continue e;
                  }
                return (
                  i !== r &&
                    (i === n && (n = i.prev),
                    (i.prev.next = i.next),
                    i.next && (i.next.prev = i.prev),
                    (i.next = r),
                    (i.prev = null),
                    (r.prev = i),
                    (r = i)),
                  i.val
                );
              }
              i = i.next;
            }
            for (a = new Array(c), o = 0; o < c; o++) a[o] = arguments[o];
            return (
              (i = { args: a, val: e.apply(null, a) }),
              r ? ((r.prev = i), (i.next = r)) : (n = i),
              s === t.maxSize ? ((n = n.prev).next = null) : s++,
              (r = i),
              i.val
            );
          }
          return (
            (t = t || {}),
            (a.clear = function() {
              (r = null), (n = null), (s = 0);
            }),
            a
          );
        })(function(e = ee, t) {
          const r = t ? t.reduce((e, t) => ({ ...e, [t.id]: t }), {}) : {},
            n = [],
            s = [...e];
          for (; s.length; ) {
            const { innerBlocks: e, ...t } = s.shift();
            if ((s.unshift(...e), (0, u.isTemplatePart)(t))) {
              const {
                  attributes: { theme: e, slug: s },
                } = t,
                a = r[`${e}//${s}`];
              a && n.push({ templatePart: a, block: t });
            }
          }
          return n;
        }),
        re = (0, i.createRegistrySelector)(e => (t, r) => e(C.store).get('core/edit-site', r));
      function ne(e, t) {
        return (
          m()("select( 'core/edit-site' ).isFeatureActive", {
            since: '6.0',
            alternative: "select( 'core/preferences' ).get",
          }),
          !!re(e, t)
        );
      }
      function se(e) {
        return e.deviceType;
      }
      const ae = (0, i.createRegistrySelector)(e => () => e(h.store).canUser('create', 'media')),
        oe = (0, i.createRegistrySelector)(e => () =>
          'web' === K.Platform.OS
            ? e(h.store).getEntityRecords('postType', 'wp_block', { per_page: -1 })
            : [],
        ),
        ie = (function(e, t) {
          var r,
            n =
              (e => [
                ae(e),
                e.settings,
                re(e, 'focusMode'),
                re(e, 'distractionFree'),
                re(e, 'fixedToolbar'),
                re(e, 'keepCaretInsideBlock'),
                re(e, 'showIconLabels'),
                oe(e),
                le(e),
              ]) || J;
          function s() {
            r = new WeakMap();
          }
          function a() {
            var t,
              s,
              a,
              o,
              i,
              c = arguments.length;
            for (o = new Array(c), a = 0; a < c; a++) o[a] = arguments[a];
            for (
              t = (function(e) {
                var t,
                  n,
                  s,
                  a,
                  o,
                  i = r,
                  c = !0;
                for (t = 0; t < e.length; t++) {
                  if (!(o = n = e[t]) || 'object' != typeof o) {
                    c = !1;
                    break;
                  }
                  i.has(n) ? (i = i.get(n)) : ((s = new WeakMap()), i.set(n, s), (i = s));
                }
                return (
                  i.has(Y) ||
                    (((a = (function() {
                      var e = {
                        clear: function() {
                          e.head = null;
                        },
                      };
                      return e;
                    })()).isUniqueByDependants = c),
                    i.set(Y, a)),
                  i.get(Y)
                );
              })((i = n.apply(null, o))),
                t.isUniqueByDependants ||
                  (t.lastDependants && !X(i, t.lastDependants, 0) && t.clear(),
                  (t.lastDependants = i)),
                s = t.head;
              s;

            ) {
              if (X(s.args, o, 1))
                return (
                  s !== t.head &&
                    ((s.prev.next = s.next),
                    s.next && (s.next.prev = s.prev),
                    (s.next = t.head),
                    (s.prev = null),
                    (t.head.prev = s),
                    (t.head = s)),
                  s.val
                );
              s = s.next;
            }
            return (
              (s = { val: e.apply(null, o) }),
              (o[0] = null),
              (s.args = o),
              t.head && ((t.head.prev = s), (s.next = t.head)),
              (t.head = s),
              s.val
            );
          }
          return (a.getDependants = n), (a.clear = s), s(), a;
        })((e, t) => {
          const r = {
            ...e.settings,
            outlineMode: !0,
            focusMode: !!re(e, 'focusMode'),
            isDistractionFree: !!re(e, 'distractionFree'),
            hasFixedToolbar: !!re(e, 'fixedToolbar'),
            keepCaretInsideBlock: !!re(e, 'keepCaretInsideBlock'),
            showIconLabels: !!re(e, 'showIconLabels'),
            __experimentalSetIsInserterOpened: t,
            __experimentalReusableBlocks: oe(e),
            __experimentalPreferPatternsOnRoot: 'wp_template' === le(e),
          };
          return ae(e)
            ? ((r.mediaUpload = ({ onError: t, ...r }) => {
                (0, Q.uploadMedia)({
                  wpAllowedMimeTypes: e.settings.allowedMimeTypes,
                  onError: ({ message: e }) => t(e),
                  ...r,
                });
              }),
              r)
            : r;
        });
      function ce() {
        m()("select( 'core/edit-site' ).getHomeTemplateId", { since: '6.2', version: '6.4' });
      }
      function le(e) {
        return e.editedPost.postType;
      }
      function de(e) {
        return e.editedPost.id;
      }
      function ue(e) {
        return e.editedPost.context;
      }
      function pe(e) {
        return { context: e.editedPost.context };
      }
      function me(e) {
        return !!e.blockInserterPanel;
      }
      const ge = (0, i.createRegistrySelector)(e => t => {
        if ('object' == typeof t.blockInserterPanel) {
          const { rootClientId: e, insertionIndex: r, filterValue: n } = t.blockInserterPanel;
          return { rootClientId: e, insertionIndex: r, filterValue: n };
        }
        if (be(t)) {
          const [t] = e(_.store).__experimentalGetGlobalBlocksByName('core/post-content');
          if (t) return { rootClientId: t, insertionIndex: void 0, filterValue: void 0 };
        }
        return { rootClientId: void 0, insertionIndex: void 0, filterValue: void 0 };
      });
      function fe(e) {
        return e.listViewPanel;
      }
      function ye(e) {
        return e.saveViewPanel;
      }
      const he = (0, i.createRegistrySelector)(e => t => {
        const r = le(t),
          n = de(t),
          s = e(h.store).getEditedEntityRecord('postType', r, n),
          a = e(h.store).getEntityRecords('postType', 'wp_template_part', { per_page: -1 });
        return te(s.blocks, a);
      });
      function ve(e) {
        return re(e, 'editorMode');
      }
      function _e() {
        m()("dispatch( 'core/edit-site' ).getCurrentTemplateNavigationPanelSubMenu", {
          since: '6.2',
          version: '6.4',
        });
      }
      function Ee() {
        m()("dispatch( 'core/edit-site' ).getNavigationPanelActiveMenu", {
          since: '6.2',
          version: '6.4',
        });
      }
      function Ce() {
        m()("dispatch( 'core/edit-site' ).isNavigationOpened", { since: '6.2', version: '6.4' });
      }
      function we(e) {
        return !!e.editedPost.context?.postId;
      }
      function be(e) {
        return !!we(e) && e.hasPageContentFocus;
      }
      function Se(e) {
        return e.canvasMode;
      }
      function Te(e) {
        return e.editorCanvasContainerView;
      }
      var xe = r(48075);
      const Pe = { reducer: c, actions: n, selectors: a },
        Ie = (0, i.createReduxStore)(b, Pe);
      (0, i.register)(Ie),
        (0, xe.U)(Ie).registerPrivateSelectors(o),
        (0, xe.U)(Ie).registerPrivateActions(s);
    },
    87586: (e, t, r) => {
      'use strict';
      function n(e) {
        return /^\s*\d+\s*$/.test(e) && (e = Number(e)), e;
      }
      r.d(t, { Z: () => n });
    },
    87983: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d:
            'M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z',
        }),
      );
    },
    83619: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, { d: 'M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z' }),
      );
    },
    68591: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, n.createElement)(s.Path, {
          d:
            'M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z',
        }),
      );
    },
    41890: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          fillRule: 'evenodd',
          d:
            'M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z',
        }),
      );
    },
    28897: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d:
            'M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z',
        }),
      );
    },
    58358: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d: 'M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z',
        }),
      );
    },
    63623: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d:
            'M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z',
        }),
      );
    },
    33532: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d:
            'M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z',
        }),
      );
    },
    89690: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d:
            'M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z',
        }),
      );
    },
    3005: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(69307),
        s = r(70444);
      const a = (0, n.createElement)(
        s.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(s.Path, {
          d: 'M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z',
        }),
      );
    },
    23874: (e, t, r) => {
      'use strict';
      r.d(t, { v4: () => g, XD: () => p, h: () => R });
      var n = {};
      r.r(n),
        r.d(n, {
          closeModal: () => I,
          disableComplementaryArea: () => C,
          enableComplementaryArea: () => E,
          openModal: () => P,
          pinItem: () => w,
          setDefaultComplementaryArea: () => _,
          setFeatureDefaults: () => x,
          setFeatureValue: () => T,
          toggleFeature: () => S,
          unpinItem: () => b,
        });
      var s = {};
      r.r(s),
        r.d(s, {
          getActiveComplementaryArea: () => A,
          isComplementaryAreaLoading: () => N,
          isFeatureActive: () => M,
          isItemPinned: () => F,
          isModalActive: () => k,
        });
      var a = r(99196),
        o = r(87608),
        i = r.n(o),
        c = r(69307),
        l = r(55609),
        d = r(65736),
        u = r(94333);
      function p({ children: e, className: t, ariaLabel: r, as: n = 'div', ...s }) {
        return (0, a.createElement)(
          n,
          {
            className: i()('interface-navigable-region', t),
            'aria-label': r,
            role: 'region',
            tabIndex: '-1',
            ...s,
          },
          e,
        );
      }
      const m = {
          hidden: { opacity: 0 },
          hover: { opacity: 1, transition: { type: 'tween', delay: 0.2, delayChildren: 0.2 } },
          distractionFreeInactive: { opacity: 1, transition: { delay: 0 } },
        },
        g = (0, c.forwardRef)(function(
          {
            isDistractionFree: e,
            footer: t,
            header: r,
            editorNotices: n,
            sidebar: s,
            secondarySidebar: o,
            notices: g,
            content: f,
            actions: y,
            labels: h,
            className: v,
            enableRegionNavigation: _ = !0,
            shortcuts: E,
          },
          C,
        ) {
          const w = (0, l.__unstableUseNavigateRegions)(E);
          !(function(e) {
            (0, c.useEffect)(() => {
              const t = document && document.querySelector(`html:not(.${e})`);
              if (t)
                return (
                  t.classList.toggle(e),
                  () => {
                    t.classList.toggle(e);
                  }
                );
            }, [e]);
          })('interface-interface-skeleton__html-container');
          const b = {
            header: (0, d.__)('Header'),
            body: (0, d.__)('Content'),
            secondarySidebar: (0, d.__)('Block Library'),
            sidebar: (0, d.__)('Settings'),
            actions: (0, d.__)('Publish'),
            footer: (0, d.__)('Footer'),
            ...h,
          };
          return (0, a.createElement)(
            'div',
            {
              ...(_ ? w : {}),
              ref: (0, u.useMergeRefs)([C, _ ? w.ref : void 0]),
              className: i()(v, 'interface-interface-skeleton', w.className, !!t && 'has-footer'),
            },
            (0, a.createElement)(
              'div',
              { className: 'interface-interface-skeleton__editor' },
              !!r &&
                (0, a.createElement)(
                  p,
                  {
                    as: l.__unstableMotion.div,
                    className: 'interface-interface-skeleton__header',
                    'aria-label': b.header,
                    initial: e ? 'hidden' : 'distractionFreeInactive',
                    whileHover: e ? 'hover' : 'distractionFreeInactive',
                    animate: e ? 'hidden' : 'distractionFreeInactive',
                    variants: m,
                    transition: e ? { type: 'tween', delay: 0.8 } : void 0,
                  },
                  r,
                ),
              e &&
                (0, a.createElement)(
                  'div',
                  { className: 'interface-interface-skeleton__header' },
                  n,
                ),
              (0, a.createElement)(
                'div',
                { className: 'interface-interface-skeleton__body' },
                !!o &&
                  (0, a.createElement)(
                    p,
                    {
                      className: 'interface-interface-skeleton__secondary-sidebar',
                      ariaLabel: b.secondarySidebar,
                    },
                    o,
                  ),
                !!g &&
                  (0, a.createElement)(
                    'div',
                    { className: 'interface-interface-skeleton__notices' },
                    g,
                  ),
                (0, a.createElement)(
                  p,
                  { className: 'interface-interface-skeleton__content', ariaLabel: b.body },
                  f,
                ),
                !!s &&
                  (0, a.createElement)(
                    p,
                    { className: 'interface-interface-skeleton__sidebar', ariaLabel: b.sidebar },
                    s,
                  ),
                !!y &&
                  (0, a.createElement)(
                    p,
                    { className: 'interface-interface-skeleton__actions', ariaLabel: b.actions },
                    y,
                  ),
              ),
            ),
            !!t &&
              (0, a.createElement)(
                p,
                { className: 'interface-interface-skeleton__footer', ariaLabel: b.footer },
                t,
              ),
          );
        });
      var f = r(9818),
        y = r(37180),
        h = r.n(y),
        v = r(55815);
      const _ = (e, t) => ({ type: 'SET_DEFAULT_COMPLEMENTARY_AREA', scope: e, area: t }),
        E = (e, t) => ({ registry: r, dispatch: n }) => {
          t &&
            (r.select(v.store).get(e, 'isComplementaryAreaVisible') ||
              r.dispatch(v.store).set(e, 'isComplementaryAreaVisible', !0),
            n({ type: 'ENABLE_COMPLEMENTARY_AREA', scope: e, area: t }));
        },
        C = e => ({ registry: t }) => {
          t.select(v.store).get(e, 'isComplementaryAreaVisible') &&
            t.dispatch(v.store).set(e, 'isComplementaryAreaVisible', !1);
        },
        w = (e, t) => ({ registry: r }) => {
          if (!t) return;
          const n = r.select(v.store).get(e, 'pinnedItems');
          !0 !== n?.[t] && r.dispatch(v.store).set(e, 'pinnedItems', { ...n, [t]: !0 });
        },
        b = (e, t) => ({ registry: r }) => {
          if (!t) return;
          const n = r.select(v.store).get(e, 'pinnedItems');
          r.dispatch(v.store).set(e, 'pinnedItems', { ...n, [t]: !1 });
        };
      function S(e, t) {
        return function({ registry: r }) {
          h()("dispatch( 'core/interface' ).toggleFeature", {
            since: '6.0',
            alternative: "dispatch( 'core/preferences' ).toggle",
          }),
            r.dispatch(v.store).toggle(e, t);
        };
      }
      function T(e, t, r) {
        return function({ registry: n }) {
          h()("dispatch( 'core/interface' ).setFeatureValue", {
            since: '6.0',
            alternative: "dispatch( 'core/preferences' ).set",
          }),
            n.dispatch(v.store).set(e, t, !!r);
        };
      }
      function x(e, t) {
        return function({ registry: r }) {
          h()("dispatch( 'core/interface' ).setFeatureDefaults", {
            since: '6.0',
            alternative: "dispatch( 'core/preferences' ).setDefaults",
          }),
            r.dispatch(v.store).setDefaults(e, t);
        };
      }
      function P(e) {
        return { type: 'OPEN_MODAL', name: e };
      }
      function I() {
        return { type: 'CLOSE_MODAL' };
      }
      const A = (0, f.createRegistrySelector)(e => (t, r) => {
          const n = e(v.store).get(r, 'isComplementaryAreaVisible');
          if (void 0 !== n) return !1 === n ? null : t?.complementaryAreas?.[r];
        }),
        N = (0, f.createRegistrySelector)(e => (t, r) => {
          const n = e(v.store).get(r, 'isComplementaryAreaVisible'),
            s = t?.complementaryAreas?.[r];
          return n && void 0 === s;
        }),
        F = (0, f.createRegistrySelector)(e => (t, r, n) => {
          var s;
          const a = e(v.store).get(r, 'pinnedItems');
          return null === (s = a?.[n]) || void 0 === s || s;
        }),
        M = (0, f.createRegistrySelector)(e => (t, r, n) => (
          h()("select( 'core/interface' ).isFeatureActive( scope, featureName )", {
            since: '6.0',
            alternative: "select( 'core/preferences' ).get( scope, featureName )",
          }),
          !!e(v.store).get(r, n)
        ));
      function k(e, t) {
        return e.activeModal === t;
      }
      const O = (0, f.combineReducers)({
          complementaryAreas: function(e = {}, t) {
            switch (t.type) {
              case 'SET_DEFAULT_COMPLEMENTARY_AREA': {
                const { scope: r, area: n } = t;
                return e[r] ? e : { ...e, [r]: n };
              }
              case 'ENABLE_COMPLEMENTARY_AREA': {
                const { scope: r, area: n } = t;
                return { ...e, [r]: n };
              }
            }
            return e;
          },
          activeModal: function(e = null, t) {
            switch (t.type) {
              case 'OPEN_MODAL':
                return t.name;
              case 'CLOSE_MODAL':
                return null;
            }
            return e;
          },
        }),
        R = (0, f.createReduxStore)('core/interface', { reducer: O, actions: n, selectors: s });
      (0, f.register)(R);
    },
    95146: (e, t, r) => {
      (t.formatArgs = function(t) {
        if (
          ((t[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            t[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const r = 'color: ' + this.color;
        t.splice(1, 0, r, 'color: inherit');
        let n = 0,
          s = 0;
        t[0].replace(/%[a-zA-Z%]/g, e => {
          '%%' !== e && (n++, '%c' === e && (s = n));
        }),
          t.splice(s, 0, r);
      }),
        (t.save = function(e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug');
          } catch (e) {}
        }),
        (t.load = function() {
          let e;
          try {
            e = t.storage.getItem('debug');
          } catch (e) {}
          return (
            !e && 'undefined' != typeof process && 'env' in process && (e = process.env.DEBUG), e
          );
        }),
        (t.useColors = function() {
          return (
            !(
              'undefined' == typeof window ||
              !window.process ||
              ('renderer' !== window.process.type && !window.process.__nwjs)
            ) ||
            (('undefined' == typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
              (('undefined' != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ('undefined' != typeof window &&
                  window.console &&
                  (window.console.firebug || (window.console.exception && window.console.table))) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
          );
        }),
        (t.storage = (function() {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.destroy = (() => {
          let e = !1;
          return () => {
            e ||
              ((e = !0),
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
              ));
          };
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = r(17498)(t));
      const { formatters: n } = e.exports;
      n.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '[UnexpectedJSONParseError]: ' + e.message;
        }
      };
    },
    17498: (e, t, r) => {
      e.exports = function(e) {
        function t(e) {
          let r,
            s,
            a,
            o = null;
          function i(...e) {
            if (!i.enabled) return;
            const n = i,
              s = Number(new Date()),
              a = s - (r || s);
            (n.diff = a),
              (n.prev = r),
              (n.curr = s),
              (r = s),
              (e[0] = t.coerce(e[0])),
              'string' != typeof e[0] && e.unshift('%O');
            let o = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, s) => {
              if ('%%' === r) return '%';
              o++;
              const a = t.formatters[s];
              if ('function' == typeof a) {
                const t = e[o];
                (r = a.call(n, t)), e.splice(o, 1), o--;
              }
              return r;
            })),
              t.formatArgs.call(n, e),
              (n.log || t.log).apply(n, e);
          }
          return (
            (i.namespace = e),
            (i.useColors = t.useColors()),
            (i.color = t.selectColor(e)),
            (i.extend = n),
            (i.destroy = t.destroy),
            Object.defineProperty(i, 'enabled', {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== o
                  ? o
                  : (s !== t.namespaces && ((s = t.namespaces), (a = t.enabled(e))), a),
              set: e => {
                o = e;
              },
            }),
            'function' == typeof t.init && t.init(i),
            i
          );
        }
        function n(e, r) {
          const n = t(this.namespace + (void 0 === r ? ':' : r) + e);
          return (n.log = this.log), n;
        }
        function s(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, '*');
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e;
          }),
          (t.disable = function() {
            const e = [...t.names.map(s), ...t.skips.map(s).map(e => '-' + e)].join(',');
            return t.enable(''), e;
          }),
          (t.enable = function(e) {
            let r;
            t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
            const n = ('string' == typeof e ? e : '').split(/[\s,]+/),
              s = n.length;
            for (r = 0; r < s; r++)
              n[r] &&
                ('-' === (e = n[r].replace(/\*/g, '.*?'))[0]
                  ? t.skips.push(new RegExp('^' + e.slice(1) + '$'))
                  : t.names.push(new RegExp('^' + e + '$')));
          }),
          (t.enabled = function(e) {
            if ('*' === e[e.length - 1]) return !0;
            let r, n;
            for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
            for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
            return !1;
          }),
          (t.humanize = r(44247)),
          (t.destroy = function() {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
            );
          }),
          Object.keys(e).forEach(r => {
            t[r] = e[r];
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function(e) {
            let r = 0;
            for (let t = 0; t < e.length; t++) (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0);
            return t.colors[Math.abs(r) % t.colors.length];
          }),
          t.enable(t.load()),
          t
        );
      };
    },
    64876: e => {
      'use strict';
      var t = function(e) {
          return (
            (function(e) {
              return !!e && 'object' == typeof e;
            })(e) &&
            !(function(e) {
              var t = Object.prototype.toString.call(e);
              return (
                '[object RegExp]' === t ||
                '[object Date]' === t ||
                (function(e) {
                  return e.$$typeof === r;
                })(e)
              );
            })(e)
          );
        },
        r = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? i(((r = e), Array.isArray(r) ? [] : {}), e, t)
          : e;
        var r;
      }
      function s(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r);
        });
      }
      function a(e) {
        return Object.keys(e).concat(
          (function(e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function(t) {
                  return Object.propertyIsEnumerable.call(e, t);
                })
              : [];
          })(e),
        );
      }
      function o(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }
      function i(e, r, c) {
        ((c = c || {}).arrayMerge = c.arrayMerge || s),
          (c.isMergeableObject = c.isMergeableObject || t),
          (c.cloneUnlessOtherwiseSpecified = n);
        var l = Array.isArray(r);
        return l === Array.isArray(e)
          ? l
            ? c.arrayMerge(e, r, c)
            : (function(e, t, r) {
                var s = {};
                return (
                  r.isMergeableObject(e) &&
                    a(e).forEach(function(t) {
                      s[t] = n(e[t], r);
                    }),
                  a(t).forEach(function(a) {
                    (function(e, t) {
                      return (
                        o(e, t) &&
                        !(
                          Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
                        )
                      );
                    })(e, a) ||
                      (o(e, a) && r.isMergeableObject(t[a])
                        ? (s[a] = (function(e, t) {
                            if (!t.customMerge) return i;
                            var r = t.customMerge(e);
                            return 'function' == typeof r ? r : i;
                          })(a, r)(e[a], t[a], r))
                        : (s[a] = n(t[a], r)));
                  }),
                  s
                );
              })(e, r, c)
          : n(r, c);
      }
      i.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error('first argument should be an array');
        return e.reduce(function(e, r) {
          return i(e, r, t);
        }, {});
      };
      var c = i;
      e.exports = c;
    },
    44247: e => {
      var t = 1e3,
        r = 60 * t,
        n = 60 * r,
        s = 24 * n;
      function a(e, t, r, n) {
        var s = t >= 1.5 * r;
        return Math.round(e / r) + ' ' + n + (s ? 's' : '');
      }
      e.exports = function(e, o) {
        o = o || {};
        var i,
          c,
          l = typeof e;
        if ('string' === l && e.length > 0)
          return (function(e) {
            if (!((e = String(e)).length > 100)) {
              var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e,
              );
              if (a) {
                var o = parseFloat(a[1]);
                switch ((a[2] || 'ms').toLowerCase()) {
                  case 'years':
                  case 'year':
                  case 'yrs':
                  case 'yr':
                  case 'y':
                    return 315576e5 * o;
                  case 'weeks':
                  case 'week':
                  case 'w':
                    return 6048e5 * o;
                  case 'days':
                  case 'day':
                  case 'd':
                    return o * s;
                  case 'hours':
                  case 'hour':
                  case 'hrs':
                  case 'hr':
                  case 'h':
                    return o * n;
                  case 'minutes':
                  case 'minute':
                  case 'mins':
                  case 'min':
                  case 'm':
                    return o * r;
                  case 'seconds':
                  case 'second':
                  case 'secs':
                  case 'sec':
                  case 's':
                    return o * t;
                  case 'milliseconds':
                  case 'millisecond':
                  case 'msecs':
                  case 'msec':
                  case 'ms':
                    return o;
                  default:
                    return;
                }
              }
            }
          })(e);
        if ('number' === l && isFinite(e))
          return o.long
            ? ((i = e),
              (c = Math.abs(i)) >= s
                ? a(i, c, s, 'day')
                : c >= n
                ? a(i, c, n, 'hour')
                : c >= r
                ? a(i, c, r, 'minute')
                : c >= t
                ? a(i, c, t, 'second')
                : i + ' ms')
            : (function(e) {
                var a = Math.abs(e);
                return a >= s
                  ? Math.round(e / s) + 'd'
                  : a >= n
                  ? Math.round(e / n) + 'h'
                  : a >= r
                  ? Math.round(e / r) + 'm'
                  : a >= t
                  ? Math.round(e / t) + 's'
                  : e + 'ms';
              })(e);
        throw new Error(
          'val is not a non-empty string or a valid number. val=' + JSON.stringify(e),
        );
      };
    },
  },
]);
