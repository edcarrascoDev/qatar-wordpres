var wc;
(() => {
  var e,
    t,
    n = {
      9019: (e, t) => {
        var n;
        !(function() {
          'use strict';
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ('string' === a || 'number' === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ('object' === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes('[native code]')
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var c in n) r.call(n, c) && n[c] && e.push(c);
                }
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function() {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      2080: () => {},
      9345: () => {},
      7791: () => {},
      2921: (e, t, n) => {
        'use strict';
        var r = n(1609),
          o = Symbol.for('react.element'),
          a = (Symbol.for('react.fragment'), Object.prototype.hasOwnProperty),
          i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          c = { key: !0, ref: !0, __self: !0, __source: !0 };
        t.jsx = function(e, t, n) {
          var r,
            u = {},
            s = null,
            l = null;
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (l = t.ref),
          t))
            a.call(t, r) && !c.hasOwnProperty(r) && (u[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === u[r] && (u[r] = t[r]);
          return { $$typeof: o, type: e, key: s, ref: l, props: u, _owner: i.current };
        };
      },
      5723: (e, t, n) => {
        'use strict';
        e.exports = n(2921);
      },
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var a = (r[e] = { exports: {} });
    return n[e](a, a.exports, o), a.exports;
  }
  (o.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (o.t = function(n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ('object' == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && 'function' == typeof n.then) return n;
      }
      var a = Object.create(null);
      o.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var c = 2 & r && n; 'object' == typeof c && !~e.indexOf(c); c = t(c))
        Object.getOwnPropertyNames(c).forEach(e => (i[e] = () => n[e]));
      return (i.default = () => n), o.d(a, i), a;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var a = {};
  (() => {
    'use strict';
    o.r(a);
    var e = o(1609),
      t = o.t(e, 2);
    const n = window.wc.__experimentalInteractivity,
      r = window.wp.data,
      i = window.wc.wcBlocksData,
      c = window.wp.element;
    var u = o(9019),
      s = o.n(u);
    const l = window.wp.i18n,
      f = (0, c.forwardRef)(function({ icon: e, size: t = 24, ...n }, r) {
        return (0, c.cloneElement)(e, { width: t, height: t, ...n, ref: r });
      }),
      d = window.wp.primitives,
      m = (0, e.createElement)(
        d.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, e.createElement)(d.Path, {
          d: 'M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z',
        }),
      );
    o(9345);
    const p = (0, e.createElement)(
        d.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, e.createElement)(d.Path, { d: 'M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z' }),
      ),
      v = (0, e.createElement)(
        d.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, e.createElement)(d.Path, {
          d:
            'M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z',
        }),
      ),
      b = (0, e.createElement)(
        d.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, e.createElement)(d.Path, {
          fillRule: 'evenodd',
          d:
            'M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z',
          clipRule: 'evenodd',
        }),
      ),
      y = e => {
        switch (e) {
          case 'success':
          case 'warning':
          case 'info':
          case 'default':
            return 'polite';
          default:
            return 'assertive';
        }
      },
      w = e => {
        switch (e) {
          case 'success':
            return p;
          case 'warning':
          case 'info':
          case 'error':
            return v;
          default:
            return b;
        }
      };
    var E = (0, e.createContext)(!0),
      h = Object.defineProperty,
      g = Object.defineProperties,
      O = Object.getOwnPropertyDescriptors,
      S = Object.getOwnPropertySymbols,
      T = Object.prototype.hasOwnProperty,
      C = Object.prototype.propertyIsEnumerable,
      I = (e, t, n) =>
        t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
      _ = (e, t) => {
        for (var n in t || (t = {})) T.call(t, n) && I(e, n, t[n]);
        if (S) for (var n of S(t)) C.call(t, n) && I(e, n, t[n]);
        return e;
      },
      N = (e, t) => g(e, O(t)),
      L = (e, t) => {
        var n = {};
        for (var r in e) T.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && S) for (var r of S(e)) t.indexOf(r) < 0 && C.call(e, r) && (n[r] = e[r]);
        return n;
      };
    function x(e) {
      return e.disabled || !0 === e['aria-disabled'] || 'true' === e['aria-disabled'];
    }
    var k,
      D =
        'undefined' != typeof window &&
        !!(null == (k = window.document) ? void 0 : k.createElement);
    function R(e) {
      return e ? e.ownerDocument || e : document;
    }
    function M(e, t = !1) {
      const { activeElement: n } = R(e);
      if (!(null == n ? void 0 : n.nodeName)) return null;
      if ('IFRAME' === n.tagName && n.contentDocument) return M(n.contentDocument.body, t);
      if (t) {
        const e = n.getAttribute('aria-activedescendant');
        if (e) {
          const t = R(n).getElementById(e);
          if (t) return t;
        }
      }
      return n;
    }
    function P(e, t) {
      return e === t || e.contains(t);
    }
    function A(e) {
      const t = e.tagName.toLowerCase();
      return 'button' === t || (!('input' !== t || !e.type) && -1 !== j.indexOf(e.type));
    }
    var j = ['button', 'color', 'file', 'image', 'reset', 'submit'];
    function K(e, t) {
      return 'matches' in e
        ? e.matches(t)
        : 'msMatchesSelector' in e
        ? e.msMatchesSelector(t)
        : e.webkitMatchesSelector(t);
    }
    var V = _({}, t),
      q = (V.useId, V.useDeferredValue, V.useInsertionEffect),
      U = D ? e.useLayoutEffect : e.useEffect;
    function B(t) {
      const n = (0, e.useRef)(() => {
        throw new Error('Cannot call an event handler while rendering.');
      });
      return (
        q
          ? q(() => {
              n.current = t;
            })
          : (n.current = t),
        (0, e.useCallback)((...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        }, [])
      );
    }
    function F(...t) {
      return (0, e.useMemo)(() => {
        if (t.some(Boolean))
          return e => {
            t.forEach(t =>
              (function(e, t) {
                'function' == typeof e ? e(t) : e && (e.current = t);
              })(t, e),
            );
          };
      }, t);
    }
    function z(t, n) {
      const r = e => {
          if ('string' == typeof e) return e;
        },
        [o, a] = (0, e.useState)(() => r(n));
      return (
        U(() => {
          const e = t && 'current' in t ? t.current : t;
          a((null == e ? void 0 : e.tagName.toLowerCase()) || r(n));
        }, [t, n]),
        o
      );
    }
    Symbol('setNextState');
    var W = o(5723);
    function Y(t) {
      const n = e.forwardRef((e, n) => t(N(_({}, e), { ref: n })));
      return (n.displayName = t.displayName || t.name), n;
    }
    function $(t, n) {
      const r = n,
        { wrapElement: o, render: a } = r,
        i = L(r, ['wrapElement', 'render']),
        c = F(
          n.ref,
          (function(t) {
            return (function(t) {
              return !!t && !!(0, e.isValidElement)(t) && 'ref' in t;
            })(t)
              ? t.ref
              : null;
          })(a),
        );
      let u;
      if (e.isValidElement(a)) {
        const t = N(_({}, a.props), { ref: c });
        u = e.cloneElement(
          a,
          (function(e, t) {
            const n = _({}, e);
            for (const a in t) {
              if (
                ((r = t),
                (o = a),
                !('function' == typeof Object.hasOwn
                  ? Object.hasOwn(r, o)
                  : Object.prototype.hasOwnProperty.call(r, o)))
              )
                continue;
              if ('className' === a) {
                const r = 'className';
                n[r] = e[r] ? `${e[r]} ${t[r]}` : t[r];
                continue;
              }
              if ('style' === a) {
                const r = 'style';
                n[r] = e[r] ? _(_({}, e[r]), t[r]) : t[r];
                continue;
              }
              const i = t[a];
              if ('function' == typeof i && a.startsWith('on')) {
                const t = e[a];
                if ('function' == typeof t) {
                  n[a] = (...e) => {
                    i(...e), t(...e);
                  };
                  continue;
                }
              }
              n[a] = i;
            }
            var r, o;
            return n;
          })(i, t),
        );
      } else u = a ? a(i) : (0, W.jsx)(t, _({}, i));
      return o ? o(u) : u;
    }
    function G(e) {
      const t = (t = {}) => e(t);
      return (t.displayName = e.name), t;
    }
    function H(e) {
      return e.target === e.currentTarget;
    }
    function X(e, t) {
      const n = new MouseEvent('click', t);
      return e.dispatchEvent(n);
    }
    function J(e, t, n) {
      const r = requestAnimationFrame(() => {
          e.removeEventListener(t, o, !0), n();
        }),
        o = () => {
          cancelAnimationFrame(r), n();
        };
      return e.addEventListener(t, o, { once: !0, capture: !0 }), r;
    }
    function Q(e, t, n, r = window) {
      const o = [];
      try {
        r.document.addEventListener(e, t, n);
        for (const a of Array.from(r.frames)) o.push(Q(e, t, n, a));
      } catch (e) {}
      return () => {
        try {
          r.document.removeEventListener(e, t, n);
        } catch (e) {}
        o.forEach(e => e());
      };
    }
    var Z =
      "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
    function ee(e) {
      return (
        !!K(e, Z) &&
        !!(function(e) {
          const t = e;
          return t.offsetWidth > 0 || t.offsetHeight > 0 || e.getClientRects().length > 0;
        })(e) &&
        !(function(e, t) {
          if ('closest' in e) return e.closest(t);
          do {
            if (K(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        })(e, '[inert]')
      );
    }
    function te(e) {
      const t = M(e);
      if (!t) return !1;
      if (t === e) return !0;
      const n = t.getAttribute('aria-activedescendant');
      return !!n && n === e.id;
    }
    var ne =
        D &&
        !!D &&
        /mac|iphone|ipad|ipod/i.test(navigator.platform) &&
        /apple/i.test(navigator.vendor),
      re = [
        'text',
        'search',
        'url',
        'tel',
        'email',
        'password',
        'number',
        'date',
        'month',
        'week',
        'time',
        'datetime',
        'datetime-local',
      ];
    function oe(e) {
      return !(
        'input' !== e.tagName.toLowerCase() ||
        !e.type ||
        ('radio' !== e.type && 'checkbox' !== e.type)
      );
    }
    function ae(e, t, n, r, o) {
      return e ? (t ? (n && !r ? -1 : void 0) : n ? o : o || 0) : o;
    }
    function ie(e, t) {
      return B(n => {
        null == e || e(n), n.defaultPrevented || (t && (n.stopPropagation(), n.preventDefault()));
      });
    }
    var ce = !0;
    function ue(e) {
      const t = e.target;
      t && 'hasAttribute' in t && (t.hasAttribute('data-focus-visible') || (ce = !1));
    }
    function se(e) {
      e.metaKey || e.ctrlKey || e.altKey || (ce = !0);
    }
    var le = G(function(t) {
      var n = t,
        { focusable: r = !0, accessibleWhenDisabled: o, autoFocus: a, onFocusVisible: i } = n,
        c = L(n, ['focusable', 'accessibleWhenDisabled', 'autoFocus', 'onFocusVisible']);
      const u = (0, e.useRef)(null);
      (0, e.useEffect)(() => {
        r && (Q('mousedown', ue, !0), Q('keydown', se, !0));
      }, [r]),
        ne &&
          (0, e.useEffect)(() => {
            if (!r) return;
            const e = u.current;
            if (!e) return;
            if (!oe(e)) return;
            const t = (function(e) {
              return 'labels' in e ? e.labels : null;
            })(e);
            if (!t) return;
            const n = () => queueMicrotask(() => e.focus());
            return (
              t.forEach(e => e.addEventListener('mouseup', n)),
              () => {
                t.forEach(e => e.removeEventListener('mouseup', n));
              }
            );
          }, [r]);
      const s = r && x(c),
        l = !!s && !o,
        [f, d] = (0, e.useState)(!1);
      (0, e.useEffect)(() => {
        r && l && f && d(!1);
      }, [r, l, f]),
        (0, e.useEffect)(() => {
          if (!r) return;
          if (!f) return;
          const e = u.current;
          if (!e) return;
          if ('undefined' == typeof IntersectionObserver) return;
          const t = new IntersectionObserver(() => {
            ee(e) || d(!1);
          });
          return t.observe(e), () => t.disconnect();
        }, [r, f]);
      const m = ie(c.onKeyPressCapture, s),
        p = ie(c.onMouseDownCapture, s),
        v = ie(c.onClickCapture, s),
        b = c.onMouseDown,
        y = B(e => {
          if ((null == b || b(e), e.defaultPrevented)) return;
          if (!r) return;
          const t = e.currentTarget;
          if (!ne) return;
          if (
            (function(e) {
              return Boolean(e.currentTarget && !P(e.currentTarget, e.target));
            })(e)
          )
            return;
          if (!A(t) && !oe(t)) return;
          let n = !1;
          const o = () => {
            n = !0;
          };
          t.addEventListener('focusin', o, { capture: !0, once: !0 }),
            J(t, 'mouseup', () => {
              t.removeEventListener('focusin', o, !0),
                n ||
                  (function(e) {
                    !(function(e) {
                      const t = M(e);
                      if (!t) return !1;
                      if (P(e, t)) return !0;
                      const n = t.getAttribute('aria-activedescendant');
                      return (
                        !!n && 'id' in e && (n === e.id || !!e.querySelector(`#${CSS.escape(n)}`))
                      );
                    })(e) &&
                      ee(e) &&
                      e.focus();
                  })(t);
            });
        }),
        w = (e, t) => {
          if ((t && (e.currentTarget = t), !r)) return;
          const n = e.currentTarget;
          n && te(n) && (null == i || i(e), e.defaultPrevented || d(!0));
        },
        h = c.onKeyDownCapture,
        g = B(e => {
          if ((null == h || h(e), e.defaultPrevented)) return;
          if (!r) return;
          if (f) return;
          if (e.metaKey) return;
          if (e.altKey) return;
          if (e.ctrlKey) return;
          if (!H(e)) return;
          const t = e.currentTarget;
          queueMicrotask(() => w(e, t));
        }),
        O = c.onFocusCapture,
        S = B(e => {
          if ((null == O || O(e), e.defaultPrevented)) return;
          if (!r) return;
          if (!H(e)) return void d(!1);
          const t = e.currentTarget,
            n = () => w(e, t);
          ce ||
          (function(e) {
            const { tagName: t, readOnly: n, type: r } = e;
            return (
              ('TEXTAREA' === t && !n) ||
              ('SELECT' === t && !n) ||
              ('INPUT' !== t || n ? !!e.isContentEditable : re.includes(r))
            );
          })(e.target)
            ? queueMicrotask(n)
            : (function(e) {
                return 'combobox' === e.getAttribute('role') && !!e.dataset.name;
              })(e.target)
            ? J(e.target, 'focusout', n)
            : d(!1);
        }),
        T = c.onBlur,
        C = B(e => {
          null == T || T(e),
            r &&
              (function(e, t) {
                const n = e.currentTarget,
                  r = e.relatedTarget;
                return !r || !P(n, r);
              })(e) &&
              d(!1);
        }),
        I = (0, e.useContext)(E),
        k = B(e => {
          r &&
            a &&
            e &&
            I &&
            queueMicrotask(() => {
              te(e) || (ee(e) && e.focus());
            });
        }),
        D = z(u),
        R =
          r &&
          (function(e) {
            return (
              !e ||
              'button' === e ||
              'summary' === e ||
              'input' === e ||
              'select' === e ||
              'textarea' === e ||
              'a' === e
            );
          })(D),
        j =
          r &&
          (function(e) {
            return !e || 'button' === e || 'input' === e || 'select' === e || 'textarea' === e;
          })(D),
        K = c.style,
        V = (0, e.useMemo)(() => (l ? _({ pointerEvents: 'none' }, K) : K), [l, K]);
      return (function(e) {
        const t = {};
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      })(
        (c = N(
          _(
            {
              'data-focus-visible': (r && f) || void 0,
              'data-autofocus': a || void 0,
              'aria-disabled': s || void 0,
            },
            c,
          ),
          {
            ref: F(u, k, c.ref),
            style: V,
            tabIndex: ae(r, l, R, j, c.tabIndex),
            disabled: !(!j || !l) || void 0,
            contentEditable: s ? void 0 : c.contentEditable,
            onKeyPressCapture: m,
            onClickCapture: v,
            onMouseDownCapture: p,
            onMouseDown: y,
            onKeyDownCapture: g,
            onFocusCapture: S,
            onBlur: C,
          },
        )),
      );
    });
    function fe(e) {
      if (!e.isTrusted) return !1;
      const t = e.currentTarget;
      return 'Enter' === e.key
        ? A(t) || 'SUMMARY' === t.tagName || 'A' === t.tagName
        : ' ' === e.key &&
            (A(t) || 'SUMMARY' === t.tagName || 'INPUT' === t.tagName || 'SELECT' === t.tagName);
    }
    Y(function(e) {
      return $('div', le(e));
    });
    var de = Symbol('command'),
      me = G(function(t) {
        var n = t,
          { clickOnEnter: r = !0, clickOnSpace: o = !0 } = n,
          a = L(n, ['clickOnEnter', 'clickOnSpace']);
        const i = (0, e.useRef)(null),
          c = z(i),
          u = a.type,
          [s, l] = (0, e.useState)(() => !!c && A({ tagName: c, type: u }));
        (0, e.useEffect)(() => {
          i.current && l(A(i.current));
        }, []);
        const [f, d] = (0, e.useState)(!1),
          m = (0, e.useRef)(!1),
          p = x(a),
          [v, b] = (function(t, n, r) {
            const o = t.onLoadedMetadataCapture,
              a = (0, e.useMemo)(() => Object.assign(() => {}, N(_({}, o), { [n]: true })), [
                o,
                n,
                true,
              ]);
            return [null == o ? void 0 : o[n], { onLoadedMetadataCapture: a }];
          })(a, de),
          y = a.onKeyDown,
          w = B(e => {
            null == y || y(e);
            const t = e.currentTarget;
            if (e.defaultPrevented) return;
            if (v) return;
            if (p) return;
            if (!H(e)) return;
            if (
              (function(e) {
                try {
                  const t = e instanceof HTMLInputElement && null !== e.selectionStart,
                    n = 'TEXTAREA' === e.tagName;
                  return t || n || !1;
                } catch (e) {
                  return !1;
                }
              })(t)
            )
              return;
            if (t.isContentEditable) return;
            const n = r && 'Enter' === e.key,
              a = o && ' ' === e.key,
              i = 'Enter' === e.key && !r,
              c = ' ' === e.key && !o;
            if (i || c) e.preventDefault();
            else if (n || a) {
              const r = fe(e);
              if (n) {
                if (!r) {
                  e.preventDefault();
                  const n = e,
                    { view: r } = n,
                    o = L(n, ['view']),
                    a = () => X(t, o);
                  D && /firefox\//i.test(navigator.userAgent)
                    ? J(t, 'keyup', a)
                    : queueMicrotask(a);
                }
              } else a && ((m.current = !0), r || (e.preventDefault(), d(!0)));
            }
          }),
          E = a.onKeyUp,
          h = B(e => {
            if ((null == E || E(e), e.defaultPrevented)) return;
            if (v) return;
            if (p) return;
            if (e.metaKey) return;
            const t = o && ' ' === e.key;
            if (m.current && t && ((m.current = !1), !fe(e))) {
              e.preventDefault(), d(!1);
              const t = e.currentTarget,
                n = e,
                { view: r } = n,
                o = L(n, ['view']);
              queueMicrotask(() => X(t, o));
            }
          });
        return (
          (a = N(_(_({ 'data-active': f || void 0, type: s ? 'button' : void 0 }, b), a), {
            ref: F(i, a.ref),
            onKeyDown: w,
            onKeyUp: h,
          })),
          le(a)
        );
      }),
      pe =
        (Y(function(e) {
          return $('button', me(e));
        }),
        'button'),
      ve = G(function(t) {
        const n = (0, e.useRef)(null),
          r = z(n, pe),
          [o, a] = (0, e.useState)(() => !!r && A({ tagName: r, type: t.type }));
        return (
          (0, e.useEffect)(() => {
            n.current && a(A(n.current));
          }, []),
          (t = N(_({ role: o || 'a' === r ? void 0 : 'button' }, t), { ref: F(n, t.ref) })),
          (t = me(t))
        );
      }),
      be = Y(function(e) {
        const t = ve(e);
        return $(pe, t);
      });
    const ye = window.wp.deprecated;
    var we = o.n(ye);
    o(2080), o(7791);
    const Ee = () =>
        (0, e.createElement)('span', {
          className: 'wc-block-components-spinner',
          'aria-hidden': 'true',
        }),
      he = (0, c.forwardRef)((t, n) => {
        'showSpinner' in t &&
          we()('showSpinner prop', {
            version: '8.9.0',
            alternative: 'Render a spinner in the button children instead.',
            plugin: 'WooCommerce',
          });
        const {
            className: r,
            showSpinner: o = !1,
            children: a,
            variant: i = 'contained',
            removeTextWrap: c = !1,
            ...u
          } = t,
          l = s()('wc-block-components-button', 'wp-element-button', r, i, {
            'wc-block-components-button--loading': o,
          });
        if ('href' in t)
          return (0, e.createElement)(be, {
            render: (0, e.createElement)(
              'a',
              { ref: n, href: t.href },
              o && (0, e.createElement)(Ee, null),
              (0, e.createElement)('span', { className: 'wc-block-components-button__text' }, a),
            ),
            className: l,
            ...u,
          });
        const f = c
          ? t.children
          : (0, e.createElement)(
              'span',
              { className: 'wc-block-components-button__text' },
              t.children,
            );
        return (0, e.createElement)(
          be,
          { ref: n, className: l, ...u },
          o && (0, e.createElement)(Ee, null),
          f,
        );
      }),
      ge = window.wp.a11y,
      Oe = ({
        className: t,
        status: n = 'default',
        children: r,
        spokenMessage: o = r,
        onRemove: a = () => {},
        isDismissible: i = !0,
        politeness: u = y(n),
        summary: d,
      }) => (
        ((e, t) => {
          const n = 'string' == typeof e ? e : (0, c.renderToString)(e);
          (0, c.useEffect)(() => {
            n && (0, ge.speak)(n, t);
          }, [n, t]);
        })(o, u),
        (0, e.createElement)(
          'div',
          {
            className: s()(t, 'wc-block-components-notice-banner', 'is-' + n, {
              'is-dismissible': i,
            }),
          },
          (0, e.createElement)(f, { icon: w(n) }),
          (0, e.createElement)(
            'div',
            { className: 'wc-block-components-notice-banner__content' },
            d &&
              (0, e.createElement)(
                'p',
                { className: 'wc-block-components-notice-banner__summary' },
                d,
              ),
            r,
          ),
          !!i &&
            (0, e.createElement)(
              he,
              {
                className: 'wc-block-components-notice-banner__dismiss',
                'aria-label': (0, l.__)('Dismiss this notice', 'woocommerce'),
                onClick: e => {
                  'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                    e.preventDefault &&
                    e.preventDefault(),
                    a();
                },
                removeTextWrap: !0,
              },
              (0, e.createElement)(f, { icon: m }),
            ),
        )
      );
    var Se = (function(e) {
      return (e.IDLE = 'IDLE'), (e.SLIDE_OUT = 'SLIDE-OUT'), (e.SLIDE_IN = 'SLIDE-IN'), e;
    })(Se || {});
    const Te = '.wc-block-store-notices',
      Ce = (e, t, n) => (0 === n ? e : t.replace('###', n.toString())),
      Ie = e => (0, n.getContext)(e),
      { state: _e } = (0, n.store)('woocommerce/product-button', {
        state: {
          get slideInAnimation() {
            const { animationStatus: e } = Ie();
            return e === Se.SLIDE_IN;
          },
          get slideOutAnimation() {
            const { animationStatus: e } = Ie();
            return e === Se.SLIDE_OUT;
          },
          get numberOfItemsInTheCart() {
            const { productId: e } = Ie(),
              t = ((e, t) => (null == e ? void 0 : e.items.find(e => e.id === t)))(_e.cart, e);
            return (null == t ? void 0 : t.quantity) || 0;
          },
          get hasCartLoaded() {
            return !!_e.cart;
          },
          get addToCartText() {
            const e = Ie();
            return e.animationStatus === Se.IDLE || e.animationStatus === Se.SLIDE_OUT
              ? Ce(e.addToCartText, _e.inTheCartText, e.temporaryNumberOfItems)
              : Ce(e.addToCartText, _e.inTheCartText, _e.numberOfItemsInTheCart);
          },
          get displayViewCart() {
            const { displayViewCart: e, temporaryNumberOfItems: t } = Ie();
            return !!e && (_e.hasCartLoaded ? _e.numberOfItemsInTheCart > 0 : t > 0);
          },
        },
        actions: {
          *addToCart() {
            const t = Ie(),
              { productId: n, quantityToAdd: o } = t;
            t.isLoading = !0;
            try {
              yield (0, r.dispatch)(i.CART_STORE_KEY).addItemToCart(n, o),
                (t.temporaryNumberOfItems = _e.numberOfItemsInTheCart);
            } catch (t) {
              const n = document.querySelector(Te);
              var a;
              n ||
                null === (a = document.querySelector('.entry-content')) ||
                void 0 === a ||
                a.prepend(
                  (() => {
                    const e = document.createElement('div');
                    return e.classList.add(Te.replace('.', '')), e;
                  })(),
                );
              const r = null != n ? n : document.querySelector(Te);
              r &&
                ((t, n) => {
                  const r = (0, c.createRoot)(t);
                  r.render(
                    (0, e.createElement)(Oe, { status: 'error', onRemove: () => r.unmount() }, n),
                  ),
                    null == t || t.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
                })(r, t.message),
                console.error(t);
            } finally {
              (t.displayViewCart = !0), (t.isLoading = !1);
            }
          },
          handleAnimationEnd: e => {
            const t = Ie();
            'slideOut' === e.animationName
              ? (t.animationStatus = Se.SLIDE_IN)
              : 'slideIn' === e.animationName &&
                ((t.temporaryNumberOfItems = _e.numberOfItemsInTheCart),
                (t.animationStatus = Se.IDLE));
          },
        },
        callbacks: {
          syncTemporaryNumberOfItemsOnLoad: () => {
            const e = Ie();
            _e.hasCartLoaded && (e.temporaryNumberOfItems = _e.numberOfItemsInTheCart);
          },
          startAnimation: () => {
            const e = Ie();
            _e.hasCartLoaded &&
              e.temporaryNumberOfItems !== _e.numberOfItemsInTheCart &&
              !e.isLoading &&
              e.animationStatus === Se.IDLE &&
              (e.animationStatus = Se.SLIDE_OUT);
          },
        },
      });
    (0, r.subscribe)(() => {
      const e = (0, r.select)(i.CART_STORE_KEY).getCartData();
      (0, r.select)(i.CART_STORE_KEY).hasFinishedResolution('getCartData') && (_e.cart = e);
    }, i.CART_STORE_KEY),
      (window.requestIdleCallback || (e => setTimeout(e, 100)))(() => {
        _e.hasCartLoaded || (0, r.select)(i.CART_STORE_KEY).getCartData();
      });
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-button-interactivity'] = a);
})();
