'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [6290],
  {
    46290: (M, I, N) => {
      N.r(I);
      var j = N(69307),
        g = N(67221),
        i = N(9818),
        D = N(98817),
        z = N(71310),
        e = N(94333),
        c = N(65736),
        S = N(92819),
        T = N(86020),
        A = N(55609),
        u = N(14599),
        o = N(99439);
      const t = ({ onConnect: M }) =>
        (0, j.createElement)(o.Z, {
          onConnect: () => {
            (0, u.recordEvent)('tasklist_shipping_recommendation_connect_store', { connect: !0 }),
              M?.();
          },
        });
      var y = N(70319),
        a = N(83122);
      const O = M => 'object' == typeof M && null !== M,
        n = ({ nextStep: M, pluginsToActivate: I }) => {
          const { updateOptions: N } = (0, i.useDispatch)(g.OPTIONS_STORE_NAME),
            { isResolving: D, tosAccepted: z } = (0, i.useSelect)(M => {
              const { getOption: I, hasFinishedResolution: N } = M(g.OPTIONS_STORE_NAME),
                j = I('wc_connect_options');
              return {
                isResolving:
                  !N('getOption', ['woocommerce_setup_jetpack_opted_in']) ||
                  !N('getOption', ['wc_connect_options']),
                tosAccepted:
                  (O(j) && j?.tos_accepted) || '1' === I('woocommerce_setup_jetpack_opted_in'),
              };
            });
          return (
            (0, j.useEffect)(() => {
              z && !I.length && M();
            }, [M, I, z]),
            D
              ? null
              : (0, j.createElement)(
                  j.Fragment,
                  null,
                  !z &&
                    (0, j.createElement)(a.O, {
                      buttonText: (0, c.__)('Install & enable', 'woocommerce'),
                    }),
                  (0, j.createElement)(T.Plugins, {
                    onComplete: (I, j) => {
                      (0, y.a)(j),
                        (0, u.recordEvent)('tasklist_shipping_recommendation_install_extensions', {
                          install_extensions: !0,
                        }),
                        N({ woocommerce_setup_jetpack_opted_in: !0 }),
                        M();
                    },
                    onError: (M, I) => (0, y.a)(I),
                    pluginSlugs: I,
                  }),
                )
          );
        };
      var C = N(24082),
        l = N(16069),
        L = N(37509);
      const s = ({ nextStep: M, onLocationComplete: I }) => {
        const { createNotice: N } = (0, i.useDispatch)('core/notices'),
          { updateAndPersistSettingsForGroup: D } = (0, i.useDispatch)(g.SETTINGS_STORE_NAME),
          { generalSettings: z, isResolving: e } = (0, i.useSelect)(M => {
            const { getSettings: I, hasFinishedResolution: N } = M(g.SETTINGS_STORE_NAME);
            return {
              generalSettings: I('general')?.general,
              isResolving: !N('getSettings', ['general']),
            };
          });
        return (
          (0, j.useEffect)(() => {
            !e && (0, l.AO)(z || {}) && I();
          }, [z, I, e]),
          e
            ? null
            : (0, j.createElement)(L.Z, {
                onComplete: I => {
                  const N = (0, C.so)(I.countryState);
                  (0, u.recordEvent)('tasklist_shipping_recommendation_set_location', {
                    country: N,
                  }),
                    M();
                },
                isSettingsRequesting: !1,
                settings: z,
                updateAndPersistSettingsForGroup: D,
                createNotice: N,
              })
        );
      };
      var Y = N(34305);
      const m = [
          {
            icon:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOSAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC42NDU1MDgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiNGNkY3RjciLz4KPG1hc2sgaWQ9Im1hc2swXzg4N18xMTY5MTQiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjciIHk9IjgiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxMyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuMzEyMyAxNy4zMzMzSDE5LjMxMjNWMTkuMzMzM0MxOS4zMTIzIDIwLjA3IDE4LjcxNTcgMjAuNjY2NyAxNy45NzkgMjAuNjY2N0gxMS4zMTIzQzEwLjU3NTcgMjAuNjY2NyA5Ljk3OSAyMC4wNyA5Ljk3OSAxOS4zMzMzVjE3LjMzMzNINy45NzlWMTJDNy45NzkgMTEuMjYzMyA4LjU3NTY3IDEwLjY2NjcgOS4zMTIzNCAxMC42NjY3SDkuOTc5VjkuMzMzMzNDOS45NzkgOC41OTY2NyAxMC41NzU3IDggMTEuMzEyMyA4SDE3Ljk3OUMxOC43MTU3IDggMTkuMzEyMyA4LjU5NjY3IDE5LjMxMjMgOS4zMzMzM1YxMC42NjY3SDE5Ljk3OUMyMC43MTU3IDEwLjY2NjcgMjEuMzEyMyAxMS4yNjMzIDIxLjMxMjMgMTJWMTcuMzMzM1pNMTIuNjQ1NyAxNi42NjY3SDE2LjY0NTdWMThIMTIuNjQ1N1YxNi42NjY3Wk0xNy45NzkgMTAuNjY2N0gxMS4zMTIzVjkuMzMzMzNIMTcuOTc5VjEwLjY2NjdaTTE3Ljk3OSAxNS4zMzMzSDExLjMxMjNWMTkuMzMzM0gxNy45NzlWMTUuMzMzM1pNMTguOTc5IDEyQzE5LjUzMSAxMiAxOS45NzkgMTIuNDQ4IDE5Ljk3OSAxM0MxOS45NzkgMTMuNTUyIDE5LjUzMSAxNCAxOC45NzkgMTRDMTguNDI3IDE0IDE3Ljk3OSAxMy41NTIgMTcuOTc5IDEzQzE3Ljk3OSAxMi40NDggMTguNDI3IDEyIDE4Ljk3OSAxMloiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF84ODdfMTE2OTE0KSI+CjxyZWN0IHg9IjYuNjQ1NTEiIHk9IjYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzhDOEY5NCIvPgo8L2c+Cjwvc3ZnPgo=',
            title: (0, c.__)('Buy postage when you need it', 'woocommerce'),
            description: (0, c.__)('No need to wonder where that stampbook went.', 'woocommerce'),
          },
          {
            icon:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOSAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC42NDU1MDgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiNGNkY3RjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS45Nzg3IDguNjY2NzFWMTYuNjY2N0wxNS45Nzg3IDIwLjY2NjdIMTAuNjQ1M0M5LjkwODY4IDIwLjY2NjcgOS4zMTIwMSAyMC4wNyA5LjMxMjAxIDE5LjMzMzRWOC42NjY3MUM5LjMxMjAxIDcuOTMwMDQgOS45MDg2OCA3LjMzMzM3IDEwLjY0NTMgNy4zMzMzN0gxOC42NDUzQzE5LjM4MiA3LjMzMzM3IDE5Ljk3ODcgNy45MzAwNCAxOS45Nzg3IDguNjY2NzFaTTExLjk3ODcgMTEuMzMzNEgxNy4zMTJWMTBIMTEuOTc4N1YxMS4zMzM0Wk0xMS45Nzg3IDEyLjY2NjdIMTcuMzEyVjE0SDExLjk3ODdWMTIuNjY2N1pNMTguNjQ1MyA4LjY2NjcxVjE1LjMzMzRIMTUuOTc4N0MxNS4yNDIgMTUuMzMzNCAxNC42NDUzIDE1LjkzIDE0LjY0NTMgMTYuNjY2N1YxOS4zMzM0SDEwLjY0NTNWOC42NjY3MUgxOC42NDUzWiIgZmlsbD0iYmxhY2siLz4KPG1hc2sgaWQ9Im1hc2swXzg4N18xMTY5MjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjkiIHk9IjciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxNCI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuOTc4NyA4LjY2NjcxVjE2LjY2NjdMMTUuOTc4NyAyMC42NjY3SDEwLjY0NTNDOS45MDg2OCAyMC42NjY3IDkuMzEyMDEgMjAuMDcgOS4zMTIwMSAxOS4zMzM0VjguNjY2NzFDOS4zMTIwMSA3LjkzMDA0IDkuOTA4NjggNy4zMzMzNyAxMC42NDUzIDcuMzMzMzdIMTguNjQ1M0MxOS4zODIgNy4zMzMzNyAxOS45Nzg3IDcuOTMwMDQgMTkuOTc4NyA4LjY2NjcxWk0xMS45Nzg3IDExLjMzMzRIMTcuMzEyVjEwSDExLjk3ODdWMTEuMzMzNFpNMTEuOTc4NyAxMi42NjY3SDE3LjMxMlYxNEgxMS45Nzg3VjEyLjY2NjdaTTE4LjY0NTMgOC42NjY3MVYxNS4zMzM0SDE1Ljk3ODdDMTUuMjQyIDE1LjMzMzQgMTQuNjQ1MyAxNS45MyAxNC42NDUzIDE2LjY2NjdWMTkuMzMzNEgxMC42NDUzVjguNjY2NzFIMTguNjQ1M1oiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF84ODdfMTE2OTIwKSI+CjxyZWN0IHg9IjYuNjQ1NTEiIHk9IjYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzhDOEY5NCIvPgo8L2c+Cjwvc3ZnPgo=',
            title: (0, c.__)('Print at home', 'woocommerce'),
            description: (0, c.__)(
              'Pick up an order, then just pay, print, package and post.',
              'woocommerce',
            ),
          },
          {
            icon:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOSAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC42NDU1MDgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiNGNkY3RjciLz4KPHJlY3QgeD0iMTAuNzI5IiB5PSIxMC4wODM0IiB3aWR0aD0iMi41IiBoZWlnaHQ9IjIuNSIgcng9IjEuMjUiIHN0cm9rZT0iIzhDOEY5NCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHJlY3QgeD0iMTYuMDYyNSIgeT0iMTUuNDE2NyIgd2lkdGg9IjIuNSIgaGVpZ2h0PSIyLjUiIHJ4PSIxLjI1IiBzdHJva2U9IiM4QzhGOTQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxMC42NDU1IiB5MT0iMTcuNjA2MSIgeDI9IjE4LjI1MTUiIHkyPSIxMC4wMDAxIiBzdHJva2U9IiM4QzhGOTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==',
            title: (0, c.__)('Discounted rates', 'woocommerce'),
            description: (0, c.__)(
              'Access discounted shipping rates with DHL and USPS.',
              'woocommerce',
            ),
          },
        ],
        E = () =>
          (0, j.createElement)(Y.L, {
            logo: {
              image:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3IiBoZWlnaHQ9IjExNiIgdmlld0JveD0iMCAwIDE0NyAxMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMyLjAwMDUiIHk9IjAuNSIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjExNSIgcng9IjQuNTkwNTMiIGZpbGw9IiNGN0VERjciLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF84ODdfMTE2ODcxKSI+CjxyZWN0IHdpZHRoPSI4MS43Nzc4IiBoZWlnaHQ9IjkyLjQ0NDQiIHJ4PSI0LjMwMzYyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5MS43Nzc4IDExLjM0MzgpIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjMuNjY1MyAyMi43MjI3SDM4LjgzMTlDMzcuMjYwMyAyMi43MjI3IDM1Ljk4ODEgMjMuOTYyNSAzNi4wMDA2IDI1LjQ2NzJWMzQuNjE1OEMzNi4wMDA2IDM2LjEzMjUgMzcuMjcyOCAzNy4zNjAzIDM4Ljg0NDQgMzcuMzYwM0g1MC42MDYzTDU1Ljk4MjEgNDAuMjQ5M0w1NC43NTk3IDM3LjM2MDNINjMuNjY1M0M2NS4yMzY5IDM3LjM2MDMgNjYuNTA5MSAzNi4xMzI1IDY2LjUwOTEgMzQuNjE1OFYyNS40NjcyQzY2LjUwOTEgMjMuOTUwNSA2NS4yMzY5IDIyLjcyMjcgNjMuNjY1MyAyMi43MjI3Wk0zOC4zMDg4IDI0Ljg0MTZDMzcuOTU5NSAyNC44NjU3IDM3LjY5NzYgMjQuOTg2MSAzNy41MjMgMjUuMjE0OEMzNy4zNDg0IDI1LjQzMTUgMzcuMjg2IDI1LjcwODMgMzcuMzIzNCAyNi4wMjEzQzM4LjA1OTMgMzAuNTM1NCAzOC43NDUzIDMzLjU4MDkgMzkuMzgxNCAzNS4xNTc4QzM5LjYzMDkgMzUuNzM1NiAzOS45MTc4IDM2LjAxMjUgNDAuMjU0NSAzNS45ODg0QzQwLjc3ODQgMzUuOTUyMyA0MS40MDIgMzUuMjU0MSA0Mi4xMzc5IDMzLjg5MzlDNDIuNTI0NiAzMy4xMjM1IDQzLjEyMzMgMzEuOTY3OSA0My45MzQgMzAuNDI3MUM0NC42MDc1IDMyLjcwMjIgNDUuNTMwNSAzNC40MTE1IDQ2LjY5MDUgMzUuNTU1MUM0Ny4wMTQ4IDM1Ljg4MDEgNDcuMzUxNSAzNi4wMjQ1IDQ3LjY3NTggMzYuMDAwNUM0Ny45NjI3IDM1Ljk3NjQgNDguMTg3MiAzNS44MzE5IDQ4LjMzNjkgMzUuNTY3MUM0OC40NjE2IDM1LjMzODQgNDguNTExNSAzNS4wNzM2IDQ4LjQ4NjUgMzQuNzcyNkM0OC40MTE3IDMzLjY3NzIgNDguNTI0IDMyLjE0ODQgNDguODM1OCAzMC4xODYzQzQ5LjE2MDEgMjguMTY0IDQ5LjU1OTIgMjYuNzA3NSA1MC4wNDU2IDI1Ljg0MDhDNTAuMTQ1NCAyNS42NjAyIDUwLjE4MjggMjUuNDc5NiA1MC4xNzA0IDI1LjI2M0M1MC4xNDU0IDI0Ljk4NjEgNTAuMDIwNyAyNC43NTc0IDQ5Ljc4MzcgMjQuNTc2OEM0OS41NDY3IDI0LjM5NjIgNDkuMjg0OCAyNC4zMTIgNDguOTk3OSAyNC4zMzYxQzQ4LjYzNjIgMjQuMzYwMSA0OC4zNjE4IDI0LjUyODcgNDguMTc0NyAyNC44NjU3QzQ3LjQwMTQgMjYuMjI2IDQ2Ljg1MjYgMjguNDI4OCA0Ni41MjgzIDMxLjQ4NjRDNDYuMDU0NCAzMC4zMzA4IDQ1LjY1NTIgMjguOTcwNSA0NS4zNDM0IDI3LjM2OTVDNDUuMjA2MiAyNi42NTkzIDQ0Ljg2OTQgMjYuMzIyMyA0NC4zMjA2IDI2LjM1ODRDNDMuOTQ2NSAyNi4zODI0IDQzLjYzNDYgMjYuNjIzMiA0My4zODUyIDI3LjA4MDZMNDAuNjUzNyAzMi4xMDAzQzQwLjIwNDYgMzAuMzU0OCAzOS43ODA2IDI4LjIyNDIgMzkuMzkzOSAyNS43MDgzQzM5LjMwNjYgMjUuMDgyNCAzOC45NDQ5IDI0Ljc5MzUgMzguMzA4OCAyNC44NDE2Wk02Mi4zNDM2IDI1LjcwODlDNjMuMjI5MSAyNS44ODk1IDYzLjg5MDIgMjYuMzQ2OSA2NC4zMzkyIDI3LjEwNTNDNjQuNzM4MyAyNy43NTUzIDY0LjkzNzkgMjguNTM3OCA2NC45Mzc5IDI5LjQ3NjdDNjQuOTM3OSAzMC43MTY2IDY0LjYxMzYgMzEuODQ4MSA2My45NjUgMzIuODgzM0M2My4yMTY3IDM0LjA4NzEgNjIuMjQzOCAzNC42ODkgNjEuMDM0IDM0LjY4OUM2MC44MjE5IDM0LjY4OSA2MC41OTc0IDM0LjY2NDkgNjAuMzYwNCAzNC42MTY4QzU5LjQ3NDkgMzQuNDM2MiA1OC44MTM4IDMzLjk3ODggNTguMzY0OCAzMy4yMjA0QzU3Ljk2NTcgMzIuNTU4MyA1Ny43NjYxIDMxLjc2MzkgNTcuNzY2MSAzMC44MzdDNTcuNzY2MSAyOS41OTcxIDU4LjA5MDQgMjguNDY1NiA1OC43MzkgMjcuNDQyNEM1OS40OTk4IDI2LjIzODYgNjAuNDcyNyAyNS42MzY3IDYxLjY3MDEgMjUuNjM2N0M2MS44ODIxIDI1LjYzNjcgNjIuMTA2NiAyNS42NjA4IDYyLjM0MzYgMjUuNzA4OVpNNjEuODE5NyAzMi4yMjEzQzYyLjI4MTIgMzEuODI0IDYyLjU5MyAzMS4yMzQyIDYyLjc2NzcgMzAuNDM5N0M2Mi44MTc1IDMwLjE2MjkgNjIuODU1IDI5Ljg2MTkgNjIuODU1IDI5LjU0ODlDNjIuODU1IDI5LjE5OTggNjIuNzgwMSAyOC44MjY3IDYyLjYzMDUgMjguNDUzNUM2Mi40NDM0IDI3Ljk4NCA2Mi4xOTM5IDI3LjczMTMgNjEuODk0NiAyNy42NzExQzYxLjQ0NTUgMjcuNTg2OCA2MS4wMDkgMjcuODI3NiA2MC41OTc0IDI4LjQxNzRDNjAuMjYwNiAyOC44NzQ4IDYwLjA0ODYgMjkuMzU2MyA1OS45MzY0IDI5Ljg0OTlDNTkuODc0IDMwLjEyNjcgNTkuODQ5IDMwLjQyNzcgNTkuODQ5IDMwLjcyODZDNTkuODQ5IDMxLjA3NzcgNTkuOTIzOSAzMS40NTA5IDYwLjA3MzYgMzEuODI0QzYwLjI2MDYgMzIuMjkzNSA2MC41MTAxIDMyLjU0NjMgNjAuODA5NCAzMi42MDY1QzYxLjEyMTMgMzIuNjY2NyA2MS40NTggMzIuNTM0MyA2MS44MTk3IDMyLjIyMTNaTTU2LjUxODkgMjcuMTA1M0M1Ni4wNjk5IDI2LjM0NjkgNTUuMzk2NCAyNS44ODk1IDU0LjUyMzMgMjUuNzA4OUM1NC4yODYzIDI1LjY2MDggNTQuMDYxOCAyNS42MzY3IDUzLjg0OTggMjUuNjM2N0M1Mi42NTI0IDI1LjYzNjcgNTEuNjc5NSAyNi4yMzg2IDUwLjkxODcgMjcuNDQyNEM1MC4yNzAxIDI4LjQ2NTYgNDkuOTQ1OCAyOS41OTcxIDQ5Ljk0NTggMzAuODM3QzQ5Ljk0NTggMzEuNzYzOSA1MC4xNDU0IDMyLjU1ODMgNTAuNTQ0NSAzMy4yMjA0QzUwLjk5MzUgMzMuOTc4OCA1MS42NTQ2IDM0LjQzNjIgNTIuNTQwMSAzNC42MTY4QzUyLjc3NzEgMzQuNjY0OSA1My4wMDE2IDM0LjY4OSA1My4yMTM2IDM0LjY4OUM1NC40MjM1IDM0LjY4OSA1NS4zOTY0IDM0LjA4NzEgNTYuMTQ0NyAzMi44ODMzQzU2Ljc5MzMgMzEuODQ4MSA1Ny4xMTc2IDMwLjcxNjYgNTcuMTE3NiAyOS40NzY3QzU3LjExNzYgMjguNTM3OCA1Ni45MTggMjcuNzU1MyA1Ni41MTg5IDI3LjEwNTNaTTU0Ljk0NzQgMzAuNDM5N0M1NC43NzI3IDMxLjIzNDIgNTQuNDYwOSAzMS44MjQgNTMuOTk5NCAzMi4yMjEzQzUzLjYzNzcgMzIuNTM0MyA1My4zMDEgMzIuNjY2NyA1Mi45ODkxIDMyLjYwNjVDNTIuNjg5OCAzMi41NDYzIDUyLjQ0MDMgMzIuMjkzNSA1Mi4yNTMzIDMxLjgyNEM1Mi4xMDM2IDMxLjQ1MDkgNTIuMDI4NyAzMS4wNzc3IDUyLjAyODcgMzAuNzI4NkM1Mi4wMjg3IDMwLjQyNzcgNTIuMDUzNyAzMC4xMjY3IDUyLjExNjEgMjkuODQ5OUM1Mi4yMjgzIDI5LjM1NjMgNTIuNDQwMyAyOC44NzQ4IDUyLjc3NzEgMjguNDE3NEM1My4xODg3IDI3LjgyNzYgNTMuNjI1MiAyNy41ODY4IDU0LjA3NDMgMjcuNjcxMUM1NC4zNzM2IDI3LjczMTMgNTQuNjIzMSAyNy45ODQgNTQuODEwMiAyOC40NTM1QzU0Ljk1OTggMjguODI2NyA1NS4wMzQ3IDI5LjE5OTggNTUuMDM0NyAyOS41NDg5QzU1LjAzNDcgMjkuODYxOSA1NS4wMDk3IDMwLjE2MjkgNTQuOTQ3NCAzMC40Mzk3WiIgZmlsbD0iIzdGNTRCMyIvPgo8cmVjdCB4PSIyMC4wMDA1IiB5PSI4NC41IiB3aWR0aD0iNjIiIGhlaWdodD0iMTEiIHJ4PSIxLjcyMTQ1IiBmaWxsPSIjNjc0Mzk5Ii8+CjxyZWN0IHg9IjIwLjMxMSIgeT0iNDcuNSIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNC4yNjY2NyIgcng9IjIuMTMzMzMiIGZpbGw9IiNEQ0RDREUiLz4KPHJlY3QgeD0iMjAuMzExIiB5PSI1NC4zMjAzIiB3aWR0aD0iNjEuMTU1NiIgaGVpZ2h0PSI0LjI2NjY2IiByeD0iMi4xMzMzMyIgZmlsbD0iI0RDRENERSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kXzg4N18xMTY4NzEpIj4KPHJlY3QgeD0iNTYuMjIzMSIgeT0iNDAuODU1NSIgd2lkdGg9IjgxLjQyMjIiIGhlaWdodD0iMjguNDQ0NCIgcng9IjQuMzAzNjIiIGZpbGw9IndoaXRlIiBzaGFwZS1yZW5kZXJpbmc9ImNyaXNwRWRnZXMiLz4KPHJlY3QgeD0iODAuNjEwNCIgeT0iNDYuNTkzNiIgd2lkdGg9IjYuNTk4ODkiIGhlaWdodD0iMi4yOTUyNiIgcng9IjEuMTQ3NjMiIGZpbGw9IiNEQ0RDREUiLz4KPHJlY3QgeD0iODAuNjEwNCIgeT0iNTEuMTg0MSIgd2lkdGg9IjMzLjI4MTMiIGhlaWdodD0iMi4yOTUyNiIgcng9IjEuMTQ3NjMiIGZpbGw9IiNEQ0RDREUiLz4KPHJlY3QgeD0iODAuNjEwNCIgeT0iNTUuNzc0NyIgd2lkdGg9IjIyLjA5MTkiIGhlaWdodD0iMi4yOTUyNiIgcng9IjEuMTQ3NjMiIGZpbGw9IiNBRjdERDEiLz4KPGNpcmNsZSBjeD0iNjkuMDAxIiBjeT0iNTQuNSIgcj0iOSIgZmlsbD0iIzlBNjlDNyIvPgo8bWFzayBpZD0ibWFzazBfODg3XzExNjg3MSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNjUiIHk9IjUwIiB3aWR0aD0iNyIgaGVpZ2h0PSI5Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NS4yOTI1IDUzLjkwNDJMNjcuNDAwOCA1Ni4wMTI1TDcxLjcwOTEgNTEuNzVMNzAuNzkyNSA1MC44MzM0TDY3LjQwMDggNTQuMjI1TDY2LjIwOTEgNTMuMDMzNEw2NS4yOTI1IDUzLjkwNDJaTTcxLjcwOTEgNTcuMjVINjUuMjkyNVY1OC4xNjY3SDcxLjcwOTFWNTcuMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfODg3XzExNjg3MSkiPgo8cmVjdCB4PSI2My4wMDEiIHk9IjQ5IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8cmVjdCB4PSIyMC4wMDA1IiB5PSI2OC41IiB3aWR0aD0iMyIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSIyNC41MDA1IiB5PSI2OC41IiB3aWR0aD0iMSIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSIyNy4wMDA1IiB5PSI2OC41IiB3aWR0aD0iNSIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSIzMy41MDA1IiB5PSI2OC41IiB3aWR0aD0iMyIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSIzOC4wMDA1IiB5PSI2OC41IiB3aWR0aD0iMyIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI0Mi41MDA1IiB5PSI2OC41IiB3aWR0aD0iNCIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI0OC4wMDA1IiB5PSI2OC41IiB3aWR0aD0iMyIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI1Mi41MDA1IiB5PSI2OC41IiB3aWR0aD0iMyIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI1Ny4wMDA1IiB5PSI2OC41IiB3aWR0aD0iNSIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI2My41MDA1IiB5PSI2OC41IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI2Ny4wMDA1IiB5PSI2OC41IiB3aWR0aD0iMyIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI3MS41MDA1IiB5PSI2OC41IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI3NS4wMDA1IiB5PSI2OC41IiB3aWR0aD0iNCIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8cmVjdCB4PSI4MC41MDA1IiB5PSI2OC41IiB3aWR0aD0iMSIgaGVpZ2h0PSIxMSIgZmlsbD0iI0M3OTJFMCIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzg4N18xMTY4NzEiIHg9IjAuODE4OTQyIiB5PSIyLjE2MjY5IiB3aWR0aD0iMTAwLjE0IiBoZWlnaHQ9IjExMC44MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldC8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuNTkwNTMiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Xzg4N18xMTY4NzEiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfODg3XzExNjg3MSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9kXzg4N18xMTY4NzEiIHg9IjQ3LjA0MjEiIHk9IjM0LjU0MzUiIHdpZHRoPSI5OS43ODQ1IiBoZWlnaHQ9IjQ2LjgwNjYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMi44NjkwOCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0LjU5MDUzIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfODg3XzExNjg3MSIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd184ODdfMTE2ODcxIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=',
            },
            features: m,
          });
      var w = N(74617);
      const x = ['woocommerce-services'],
        d = (0, e.compose)(
          (0, i.withSelect)(M => {
            const { getSettings: I } = M(g.SETTINGS_STORE_NAME),
              { hasFinishedResolution: N } = M(g.OPTIONS_STORE_NAME),
              { getActivePlugins: j } = M(g.PLUGINS_STORE_NAME);
            return {
              activePlugins: j(),
              generalSettings: I('general')?.general,
              isJetpackConnected: M(g.PLUGINS_STORE_NAME).isJetpackConnected(),
              isResolving:
                !N('getOption', ['woocommerce_setup_jetpack_opted_in']) ||
                !N('getOption', ['wc_connect_options']) ||
                !M(g.PLUGINS_STORE_NAME).hasFinishedResolution('isJetpackConnected'),
            };
          }),
        )(({ activePlugins: M, isJetpackConnected: I, isResolving: N }) => {
          const [g, i] = (0, j.useState)([]),
            [D, z] = (0, j.useState)(0),
            [e, u] = (0, j.useState)(!1),
            [o, y] = (0, j.useState)(!1),
            a = () => {
              z(D + 1);
            },
            O = () => {
              u(!0),
                window?.location &&
                  (window.location.href = (0, w.getAdminLink)(
                    'admin.php?page=wc-settings&tab=shipping&section=woocommerce-services-settings',
                  ));
            };
          (0, j.useEffect)(() => {
            const j = (0, S.difference)(x, M);
            !N && 0 === j.length && I && O(), j.length <= g.length || i(j);
          }, [M, I, N, g]);
          const C = [
              {
                key: 'store_location',
                label: (0, c.__)('Set store location', 'woocommerce'),
                description: (0, c.__)(
                  'The address from which your business operates',
                  'woocommerce',
                ),
                content: (0, j.createElement)(s, {
                  nextStep: a,
                  onLocationComplete: () => {
                    o || (y(!0), a());
                  },
                }),
                onClick: () => {
                  z(0);
                },
              },
              {
                key: 'plugins',
                label: (0, c.__)('Install WooCommerce Shipping', 'woocommerce'),
                description: (0, c.__)(
                  'Enable shipping label printing and discounted rates',
                  'woocommerce',
                ),
                content: (0, j.createElement)(
                  'div',
                  null,
                  (0, j.createElement)(E, null),
                  (0, j.createElement)(n, { nextStep: a, pluginsToActivate: g }),
                ),
              },
              {
                key: 'connect',
                label: (0, c.__)('Connect your store', 'woocommerce'),
                description: (0, c.__)(
                  'Connect your store to WordPress.com to enable WooCommerce Shipping',
                  'woocommerce',
                ),
                content: I
                  ? (0, j.createElement)(
                      A.Button,
                      { onClick: O, isBusy: e, isPrimary: !0 },
                      (0, c.__)('Complete task', 'woocommerce'),
                    )
                  : (0, j.createElement)(t, null),
              },
            ],
            l = C[D];
          return (0, j.createElement)(
            'div',
            { className: 'woocommerce-task-shipping-recommendation' },
            (0, j.createElement)(
              A.Card,
              { className: 'woocommerce-task-card' },
              (0, j.createElement)(
                A.CardBody,
                null,
                (0, j.createElement)(T.Stepper, {
                  isPending: N,
                  isVertical: !0,
                  currentStep: l.key,
                  steps: C,
                }),
              ),
            ),
          );
        });
      (0, D.registerPlugin)('wc-admin-onboarding-task-shipping-recommendation', {
        scope: 'woocommerce-tasks',
        render: () =>
          (0, j.createElement)(
            z.WooOnboardingTask,
            { id: 'shipping-recommendation' },
            ({ onComplete: M, query: I, task: N }) =>
              (0, j.createElement)(d, { onComplete: M, query: I, task: N }),
          ),
      });
    },
  },
]);
