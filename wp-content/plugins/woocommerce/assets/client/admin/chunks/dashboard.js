'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [9966],
  {
    50516: (e, n, t) => {
      t.r(n), t.d(n, { default: () => p });
      var a = t(69307),
        s = t(86020);
      const c = (0, a.lazy)(() => t.e(8960).then(t.bind(t, 54036)));
      class l extends a.Component {
        render() {
          const { path: e, query: n } = this.props;
          return (0, a.createElement)(
            a.Suspense,
            { fallback: (0, a.createElement)(s.Spinner, null) },
            (0, a.createElement)(c, { query: n, path: e }),
          );
        }
      }
      const p = l;
    },
  },
]);
