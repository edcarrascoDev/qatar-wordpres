(() => {
  var __webpack_modules__ = {
      86657: (e, t, u) => {
        'use strict';
        const n = u(87602),
          r = {
            findRule(e, t) {
              for (let u = 0; u < e.rules.length; u++) if (e.rules[u].name === t) return e.rules[u];
            },
            indexOfRule(e, t) {
              for (let u = 0; u < e.rules.length; u++) if (e.rules[u].name === t) return u;
              return -1;
            },
            alwaysConsumesOnSuccess(e, t) {
              function u() {
                return !0;
              }
              function o() {
                return !1;
              }
              const a = n.build({
                choice: e => e.alternatives.every(a),
                sequence: e => e.elements.some(a),
                simple_and: o,
                simple_not: o,
                optional: o,
                zero_or_more: o,
                repeated(e) {
                  const t = e.min ? e.min : e.max;
                  return !(
                    'constant' !== t.type ||
                    0 === t.value ||
                    (!a(e.expression) && !(t.value > 1 && e.delimiter && a(e.delimiter)))
                  );
                },
                semantic_and: o,
                semantic_not: o,
                rule_ref(t) {
                  const u = r.findRule(e, t.name);
                  return u ? a(u) : void 0;
                },
                literal: e => '' !== e.value,
                class: u,
                any: u,
              });
              return a(t);
            },
          };
        e.exports = r;
      },
      73629: (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';
        const generateBytecode = __webpack_require__(27713),
          generateJS = __webpack_require__(72365),
          inferenceMatchResult = __webpack_require__(51358),
          removeProxyRules = __webpack_require__(47349),
          reportDuplicateLabels = __webpack_require__(13747),
          reportDuplicateRules = __webpack_require__(7937),
          reportInfiniteRecursion = __webpack_require__(47771),
          reportInfiniteRepetition = __webpack_require__(74414),
          reportUndefinedRules = __webpack_require__(78277),
          reportIncorrectPlucking = __webpack_require__(43046),
          Session = __webpack_require__(52399),
          visitor = __webpack_require__(87602),
          { base64 } = __webpack_require__(93758);
        function processOptions(e, t) {
          const u = {};
          return (
            Object.keys(e).forEach(t => {
              u[t] = e[t];
            }),
            Object.keys(t).forEach(e => {
              Object.prototype.hasOwnProperty.call(u, e) || (u[e] = t[e]);
            }),
            u
          );
        }
        function isSourceMapCapable(e) {
          return 'string' == typeof e ? e.length > 0 : e && 'function' == typeof e.offset;
        }
        const compiler = {
          visitor,
          passes: {
            check: [
              reportUndefinedRules,
              reportDuplicateRules,
              reportDuplicateLabels,
              reportInfiniteRecursion,
              reportInfiniteRepetition,
              reportIncorrectPlucking,
            ],
            transform: [removeProxyRules, inferenceMatchResult],
            generate: [generateBytecode, generateJS],
          },
          compile(ast, passes, options) {
            if (
              ((options = void 0 !== options ? options : {}),
              (options = processOptions(options, {
                allowedStartRules: [ast.rules[0].name],
                cache: !1,
                dependencies: {},
                exportVar: null,
                format: 'bare',
                output: 'parser',
                trace: !1,
              })),
              !Array.isArray(options.allowedStartRules))
            )
              throw new Error('allowedStartRules must be an array');
            if (0 === options.allowedStartRules.length)
              throw new Error('Must have at least one start rule');
            const allRules = ast.rules.map(e => e.name);
            if (options.allowedStartRules.some(e => '*' === e))
              options.allowedStartRules = allRules;
            else
              for (const e of options.allowedStartRules)
                if (-1 === allRules.indexOf(e)) throw new Error(`Unknown start rule "${e}"`);
            if (
              ('source-and-map' === options.output ||
                'source-with-inline-map' === options.output) &&
              !isSourceMapCapable(options.grammarSource)
            )
              throw new Error(
                'Must provide grammarSource (as a string or GrammarLocation) in order to generate source maps',
              );
            const session = new Session(options);
            switch (
              (Object.keys(passes).forEach(e => {
                (session.stage = e),
                  session.info(`Process stage ${e}`),
                  passes[e].forEach(t => {
                    session.info(`Process pass ${e}.${t.name}`), t(ast, options, session);
                  }),
                  session.checkErrors();
              }),
              options.output)
            ) {
              case 'parser':
                return eval(ast.code.toString());
              case 'source':
                return ast.code.toString();
              case 'source-and-map':
                return ast.code;
              case 'source-with-inline-map': {
                if ('undefined' == typeof TextEncoder)
                  throw new Error('TextEncoder is not supported by this platform');
                const e = ast.code.toStringWithSourceMap(),
                  t = new TextEncoder(),
                  u = base64(t.encode(JSON.stringify(e.map.toJSON())));
                return (
                  e.code + `//# sourceMappingURL=data:application/json;charset=utf-8;base64,${u}\n`
                );
              }
              case 'ast':
                return ast;
              default:
                throw new Error('Invalid output format: ' + options.output + '.');
            }
          },
        };
        module.exports = compiler;
      },
      10818: e => {
        'use strict';
        e.exports = {
          PUSH: 0,
          PUSH_EMPTY_STRING: 35,
          PUSH_UNDEFINED: 1,
          PUSH_NULL: 2,
          PUSH_FAILED: 3,
          PUSH_EMPTY_ARRAY: 4,
          PUSH_CURR_POS: 5,
          POP: 6,
          POP_CURR_POS: 7,
          POP_N: 8,
          NIP: 9,
          APPEND: 10,
          WRAP: 11,
          TEXT: 12,
          PLUCK: 36,
          IF: 13,
          IF_ERROR: 14,
          IF_NOT_ERROR: 15,
          IF_LT: 30,
          IF_GE: 31,
          IF_LT_DYNAMIC: 32,
          IF_GE_DYNAMIC: 33,
          WHILE_NOT_ERROR: 16,
          MATCH_ANY: 17,
          MATCH_STRING: 18,
          MATCH_STRING_IC: 19,
          MATCH_CHAR_CLASS: 20,
          MATCH_REGEXP: 20,
          ACCEPT_N: 21,
          ACCEPT_STRING: 22,
          FAIL: 23,
          LOAD_SAVED_POS: 24,
          UPDATE_SAVED_POS: 25,
          CALL: 26,
          RULE: 27,
          SILENT_FAILS_ON: 28,
          SILENT_FAILS_OFF: 29,
          SOURCE_MAP_PUSH: 37,
          SOURCE_MAP_POP: 38,
          SOURCE_MAP_LABEL_PUSH: 39,
          SOURCE_MAP_LABEL_POP: 40,
        };
      },
      27713: (e, t, u) => {
        'use strict';
        const n = u(86657),
          r = u(10818),
          o = u(87602),
          { ALWAYS_MATCH: a, SOMETIMES_MATCH: s, NEVER_MATCH: i } = u(51358);
        e.exports = function(e, t) {
          const u = [],
            c = [],
            l = [],
            p = [],
            A = [];
          function h(e) {
            const t = u.indexOf(e);
            return -1 === t ? u.push(e) - 1 : t;
          }
          function E(e) {
            const t = JSON.stringify(e),
              u = l.findIndex(e => JSON.stringify(e) === t);
            return -1 === u ? l.push(e) - 1 : u;
          }
          function d(e, t, u) {
            const n = { predicate: e, params: t, body: u.code, location: u.codeLocation },
              r = JSON.stringify(n),
              o = p.findIndex(e => JSON.stringify(e) === r);
            return -1 === o ? p.push(n) - 1 : o;
          }
          function f(e) {
            return A.push(e) - 1;
          }
          function C(e) {
            const t = {};
            return (
              Object.keys(e).forEach(u => {
                t[u] = e[u];
              }),
              t
            );
          }
          function g(e, ...t) {
            return e.concat(...t);
          }
          function m(e, t, u, n) {
            return e === a ? u : e === i ? n : t.concat([u.length, n.length], u, n);
          }
          function F(e, t, u, n) {
            const o = Object.keys(u).map(e => n - u[e]);
            return [r.CALL, e, t, o.length].concat(o);
          }
          function _(e, t, u) {
            const n = 0 | e.match;
            return g(
              [r.PUSH_CURR_POS],
              [r.SILENT_FAILS_ON],
              y(e, { sp: u.sp + 1, env: C(u.env), action: null }),
              [r.SILENT_FAILS_OFF],
              m(
                t ? -n : n,
                [t ? r.IF_ERROR : r.IF_NOT_ERROR],
                g([r.POP], [t ? r.POP : r.POP_CURR_POS], [r.PUSH_UNDEFINED]),
                g([r.POP], [t ? r.POP_CURR_POS : r.POP], [r.PUSH_FAILED]),
              ),
            );
          }
          function D(e, t, u) {
            const n = d(!0, Object.keys(u.env), e);
            return g(
              [r.UPDATE_SAVED_POS],
              F(n, 0, u.env, u.sp),
              m(
                0 | e.match,
                [r.IF],
                g([r.POP], t ? [r.PUSH_FAILED] : [r.PUSH_UNDEFINED]),
                g([r.POP], t ? [r.PUSH_UNDEFINED] : [r.PUSH_FAILED]),
              ),
            );
          }
          function B(e) {
            return (t = [r.WHILE_NOT_ERROR]), (u = g([r.APPEND], e)), t.concat([u.length], u);
            var t, u;
          }
          function x(e, t, u, n) {
            switch (e.type) {
              case 'constant':
                return { pre: [], post: [], sp: u };
              case 'variable':
                return (e.sp = n + u - t[e.value]), { pre: [], post: [], sp: u };
              case 'function':
                return (
                  (e.sp = n),
                  {
                    pre: F(
                      d(!0, Object.keys(t), { code: e.value, codeLocation: e.codeLocation }),
                      0,
                      t,
                      u,
                    ),
                    post: [r.NIP],
                    sp: u + 1,
                  }
                );
              default:
                throw new Error(`Unknown boundary type "${e.type}" for the "repeated" node`);
            }
          }
          function v(e, t) {
            if (null !== t.value) {
              const u = 'constant' === t.type ? [r.IF_GE, t.value] : [r.IF_GE_DYNAMIC, t.sp];
              return m(s, u, [r.PUSH_FAILED], e);
            }
            return e;
          }
          const y =
            ((b = {
              grammar(e) {
                e.rules.forEach(y),
                  (e.literals = u),
                  (e.classes = c),
                  (e.expectations = l),
                  (e.functions = p),
                  (e.locations = A);
              },
              rule(e) {
                e.bytecode = y(e.expression, { sp: -1, env: {}, pluck: [], action: null });
              },
              named(e, t) {
                const u = 0 | e.match,
                  n = u === i ? null : E({ type: 'rule', value: e.name });
                return g(
                  [r.SILENT_FAILS_ON],
                  y(e.expression, t),
                  [r.SILENT_FAILS_OFF],
                  m(u, [r.IF_ERROR], [r.FAIL, n], []),
                );
              },
              choice: (e, t) =>
                (function e(t, u) {
                  const n = 0 | t[0].match,
                    o = y(t[0], { sp: u.sp, env: C(u.env), action: null });
                  return n === a
                    ? o
                    : g(
                        o,
                        t.length > 1 ? m(s, [r.IF_ERROR], g([r.POP], e(t.slice(1), u)), []) : [],
                      );
                })(e.alternatives, t),
              action(e, t) {
                const u = C(t.env),
                  n = 'sequence' !== e.expression.type || 0 === e.expression.elements.length,
                  o = y(e.expression, { sp: t.sp + (n ? 1 : 0), env: u, action: e }),
                  a = 0 | e.expression.match,
                  s = n && a !== i ? d(!1, Object.keys(u), e) : null;
                return n
                  ? g(
                      [r.PUSH_CURR_POS],
                      o,
                      m(a, [r.IF_NOT_ERROR], g([r.LOAD_SAVED_POS, 1], F(s, 1, u, t.sp + 2)), []),
                      [r.NIP],
                    )
                  : o;
              },
              sequence: (e, t) =>
                g(
                  [r.PUSH_CURR_POS],
                  (function t(u, n) {
                    if (u.length > 0) {
                      const o = e.elements.length - u.length + 1;
                      return g(
                        y(u[0], { sp: n.sp, env: n.env, pluck: n.pluck, action: null }),
                        m(
                          0 | u[0].match,
                          [r.IF_NOT_ERROR],
                          t(u.slice(1), {
                            sp: n.sp + 1,
                            env: n.env,
                            pluck: n.pluck,
                            action: n.action,
                          }),
                          g(o > 1 ? [r.POP_N, o] : [r.POP], [r.POP_CURR_POS], [r.PUSH_FAILED]),
                        ),
                      );
                    }
                    if (n.pluck.length > 0)
                      return g(
                        [r.PLUCK, e.elements.length + 1, n.pluck.length],
                        n.pluck.map(e => n.sp - e),
                      );
                    if (n.action) {
                      const t = d(!1, Object.keys(n.env), n.action);
                      return g(
                        [r.LOAD_SAVED_POS, e.elements.length],
                        F(t, e.elements.length + 1, n.env, n.sp),
                      );
                    }
                    return g([r.WRAP, e.elements.length], [r.NIP]);
                  })(e.elements, { sp: t.sp + 1, env: t.env, pluck: [], action: t.action }),
                ),
              labeled(e, u) {
                let n = u.env;
                const o = e.label,
                  a = u.sp + 1;
                o && ((n = C(u.env)), (u.env[e.label] = a)), e.pick && u.pluck.push(a);
                const s = y(e.expression, { sp: u.sp, env: n, action: null });
                return o && e.labelLocation && t && 'source-and-map' === t.output
                  ? g([r.SOURCE_MAP_LABEL_PUSH, a, h(o), f(e.labelLocation)], s, [
                      r.SOURCE_MAP_LABEL_POP,
                      a,
                    ])
                  : s;
              },
              text: (e, t) =>
                g(
                  [r.PUSH_CURR_POS],
                  y(e.expression, { sp: t.sp + 1, env: C(t.env), action: null }),
                  m(0 | e.match, [r.IF_NOT_ERROR], g([r.POP], [r.TEXT]), [r.NIP]),
                ),
              simple_and: (e, t) => _(e.expression, !1, t),
              simple_not: (e, t) => _(e.expression, !0, t),
              optional: (e, t) =>
                g(
                  y(e.expression, { sp: t.sp, env: C(t.env), action: null }),
                  m(-(0 | e.expression.match), [r.IF_ERROR], g([r.POP], [r.PUSH_NULL]), []),
                ),
              zero_or_more(e, t) {
                const u = y(e.expression, { sp: t.sp + 1, env: C(t.env), action: null });
                return g([r.PUSH_EMPTY_ARRAY], u, B(u), [r.POP]);
              },
              one_or_more(e, t) {
                const u = y(e.expression, { sp: t.sp + 1, env: C(t.env), action: null });
                return g(
                  [r.PUSH_EMPTY_ARRAY],
                  u,
                  m(
                    0 | e.expression.match,
                    [r.IF_NOT_ERROR],
                    g(B(u), [r.POP]),
                    g([r.POP], [r.POP], [r.PUSH_FAILED]),
                  ),
                );
              },
              repeated(e, t) {
                const u = e.min ? e.min : e.max,
                  n = 'constant' !== u.type || u.value > 0,
                  o = 'constant' !== e.max.type && null !== e.max.value,
                  a = n ? 2 : 1,
                  i = e.min
                    ? x(e.min, t.env, t.sp, 2 + ('function' === e.max.type ? 1 : 0))
                    : { pre: [], post: [], sp: t.sp },
                  c = x(e.max, t.env, i.sp, a),
                  l = y(e.expression, { sp: c.sp + a, env: C(t.env), action: null }),
                  p =
                    null !== e.delimiter
                      ? y(e.expression, { sp: c.sp + a + 1, env: C(t.env), action: null })
                      : l,
                  A = (function(e, t, u, n, o) {
                    return e
                      ? g(
                          [r.PUSH_CURR_POS],
                          y(e, { sp: n.sp + o + 1, env: C(n.env), action: null }),
                          m(
                            0 | e.match,
                            [r.IF_NOT_ERROR],
                            g(
                              [r.POP],
                              u,
                              m(-t, [r.IF_ERROR], [r.POP, r.POP_CURR_POS, r.PUSH_FAILED], [r.NIP]),
                            ),
                            [r.NIP],
                          ),
                        )
                      : u;
                  })(e.delimiter, 0 | e.expression.match, p, t, a),
                  h = v(A, e.max),
                  E = o ? v(l, e.max) : l,
                  d = g(n ? [r.PUSH_CURR_POS] : [], [r.PUSH_EMPTY_ARRAY], E, B(h), [r.POP]);
                return g(
                  i.pre,
                  c.pre,
                  n
                    ? (function(e, t) {
                        const u =
                          'constant' === t.type ? [r.IF_LT, t.value] : [r.IF_LT_DYNAMIC, t.sp];
                        return g(e, m(s, u, [r.POP, r.POP_CURR_POS, r.PUSH_FAILED], [r.NIP]));
                      })(d, u)
                    : d,
                  c.post,
                  i.post,
                );
              },
              group: (e, t) => y(e.expression, { sp: t.sp, env: C(t.env), action: null }),
              semantic_and: (e, t) => D(e, !1, t),
              semantic_not: (e, t) => D(e, !0, t),
              rule_ref: t => [r.RULE, n.indexOfRule(e, t.name)],
              literal(e) {
                if (e.value.length > 0) {
                  const t = 0 | e.match,
                    u =
                      t === s || (t === a && !e.ignoreCase)
                        ? h(e.ignoreCase ? e.value.toLowerCase() : e.value)
                        : null,
                    n =
                      t !== a
                        ? E({ type: 'literal', value: e.value, ignoreCase: e.ignoreCase })
                        : null;
                  return m(
                    t,
                    e.ignoreCase ? [r.MATCH_STRING_IC, u] : [r.MATCH_STRING, u],
                    e.ignoreCase ? [r.ACCEPT_N, e.value.length] : [r.ACCEPT_STRING, u],
                    [r.FAIL, n],
                  );
                }
                return [r.PUSH_EMPTY_STRING];
              },
              class(e) {
                const t = 0 | e.match,
                  u =
                    t === s
                      ? (function(e) {
                          const t = {
                              value: e.parts,
                              inverted: e.inverted,
                              ignoreCase: e.ignoreCase,
                            },
                            u = JSON.stringify(t),
                            n = c.findIndex(e => JSON.stringify(e) === u);
                          return -1 === n ? c.push(t) - 1 : n;
                        })(e)
                      : null,
                  n =
                    t !== a
                      ? E({
                          type: 'class',
                          value: e.parts,
                          inverted: e.inverted,
                          ignoreCase: e.ignoreCase,
                        })
                      : null;
                return m(t, [r.MATCH_CHAR_CLASS, u], [r.ACCEPT_N, 1], [r.FAIL, n]);
              },
              any(e) {
                const t = 0 | e.match,
                  u = t !== a ? E({ type: 'any' }) : null;
                return m(t, [r.MATCH_ANY], [r.ACCEPT_N, 1], [r.FAIL, u]);
              },
            }),
            t &&
              'source-and-map' === t.output &&
              Object.entries(b).forEach(([e, t]) => {
                b[e] = function(e, ...u) {
                  const n = t(e, ...u);
                  return void 0 !== n && e.location
                    ? g([r.SOURCE_MAP_PUSH, f(e.location)], n, [r.SOURCE_MAP_POP])
                    : n;
                };
              }),
            o.build(b));
          var b;
          y(e);
        };
      },
      72365: (e, t, u) => {
        'use strict';
        const n = u(86657),
          r = u(10818),
          o = u(82169),
          a = u(62415),
          { stringEscape: s, regexpClassEscape: i } = u(93758),
          { SourceNode: c } = u(10782),
          l = u(49002);
        function p(e, t, u) {
          const n = l.offsetStart(t),
            r = n.line,
            o = n.column - 1,
            a = e.split('\n');
          return 1 === a.length
            ? new c(r, o, String(t.source), e, u)
            : new c(
                null,
                null,
                String(t.source),
                a.map(
                  (e, n) =>
                    new c(
                      r + n,
                      0 === n ? o : 0,
                      String(t.source),
                      n === a.length - 1 ? e : [e, '\n'],
                      u,
                    ),
                ),
              );
        }
        function A(e, t, u, n, r) {
          if (u) {
            const o = l.offsetEnd(u);
            return new c(null, null, String(u.source), [
              e,
              p(t, u, r),
              new c(o.line, o.column - 1, String(u.source), n),
            ]);
          }
          return new c(null, null, null, [e, t, n]);
        }
        e.exports = function(e, t) {
          function u(e) {
            let t = !0,
              u = 0;
            return (function e(n) {
              return Array.isArray(n)
                ? n.map(e)
                : n instanceof c
                ? (u++, (n.children = e(n.children)), u--, n)
                : ((n = t ? n.replace(/^(.+)$/gm, '  $1') : n.replace(/\n(\s*\S)/g, '\n  $1')),
                  (t = !u || n.endsWith('\n')),
                  n);
            })(e);
          }
          function l(e) {
            return 'peg$c' + e;
          }
          function h(e) {
            return 'peg$r' + e;
          }
          function E(e) {
            return 'peg$e' + e;
          }
          function d(e) {
            return 'peg$f' + e;
          }
          function f(e) {
            return 'peg$parse' + e;
          }
          function C(e) {
            return e.codeLocation ? p(e.code, e.codeLocation, '$' + e.type) : e.code;
          }
          e.code = (function(e) {
            function n() {
              return [`// Generated by Peggy ${a}.`, '//', '// https://peggyjs.org/'];
            }
            function r() {
              return t.trace
                ? [
                    '{',
                    '  SyntaxError: peg$SyntaxError,',
                    '  DefaultTracer: peg$DefaultTracer,',
                    '  parse: peg$parse',
                    '}',
                  ].join('\n')
                : ['{', '  SyntaxError: peg$SyntaxError,', '  parse: peg$parse', '}'].join('\n');
            }
            const o = {
              bare: () => [
                ...n(),
                '(function() {',
                '  "use strict";',
                '',
                e,
                '',
                u('return ' + r() + ';'),
                '})()',
              ],
              commonjs() {
                const u = Object.keys(t.dependencies),
                  o = n();
                return (
                  o.push('', '"use strict";', ''),
                  u.length > 0 &&
                    (u.forEach(e => {
                      o.push('var ' + e + ' = require("' + s(t.dependencies[e]) + '");');
                    }),
                    o.push('')),
                  o.push(e, '', 'module.exports = ' + r() + ';'),
                  o
                );
              },
              es() {
                const u = Object.keys(t.dependencies),
                  r = n();
                return (
                  r.push(''),
                  u.length > 0 &&
                    (u.forEach(e => {
                      r.push('import ' + e + ' from "' + s(t.dependencies[e]) + '";');
                    }),
                    r.push('')),
                  r.push(
                    e,
                    '',
                    'export {',
                    '  peg$SyntaxError as SyntaxError,',
                    t.trace ? '  peg$DefaultTracer as DefaultTracer,' : '',
                    '  peg$parse as parse',
                    '};',
                  ),
                  r
                );
              },
              amd() {
                const o = Object.keys(t.dependencies),
                  a =
                    '[' +
                    o
                      .map(e => t.dependencies[e])
                      .map(e => '"' + s(e) + '"')
                      .join(', ') +
                    ']',
                  i = o.join(', ');
                return [
                  ...n(),
                  'define(' + a + ', function(' + i + ') {',
                  '  "use strict";',
                  '',
                  e,
                  '',
                  u('return ' + r() + ';'),
                  '});',
                ];
              },
              globals: () => [
                ...n(),
                '(function(root) {',
                '  "use strict";',
                '',
                e,
                '',
                u('root.' + t.exportVar + ' = ' + r() + ';'),
                '})(this);',
              ],
              umd() {
                const o = Object.keys(t.dependencies),
                  a = o.map(e => t.dependencies[e]),
                  i = '[' + a.map(e => '"' + s(e) + '"').join(', ') + ']',
                  c = a.map(e => 'require("' + s(e) + '")').join(', '),
                  l = o.join(', '),
                  p = n();
                return (
                  p.push(
                    '(function(root, factory) {',
                    '  if (typeof define === "function" && define.amd) {',
                    '    define(' + i + ', factory);',
                    '  } else if (typeof module === "object" && module.exports) {',
                    '    module.exports = factory(' + c + ');',
                  ),
                  null !== t.exportVar &&
                    p.push('  } else {', '    root.' + t.exportVar + ' = factory();'),
                  p.push(
                    '  }',
                    '})(this, function(' + l + ') {',
                    '  "use strict";',
                    '',
                    e,
                    '',
                    u('return ' + r() + ';'),
                    '});',
                  ),
                  p
                );
              },
            }[t.format]();
            return new c(
              null,
              null,
              t.grammarSource,
              o.map(e => (e instanceof c ? e : e + '\n')),
            );
          })(
            (function() {
              const a = [];
              e.topLevelInitializer && (a.push(C(e.topLevelInitializer)), a.push('')),
                a.push(
                  'function peg$subclass(child, parent) {',
                  '  function C() { this.constructor = child; }',
                  '  C.prototype = parent.prototype;',
                  '  child.prototype = new C();',
                  '}',
                  '',
                  'function peg$SyntaxError(message, expected, found, location) {',
                  '  var self = Error.call(this, message);',
                  '  // istanbul ignore next Check is a necessary evil to support older environments',
                  '  if (Object.setPrototypeOf) {',
                  '    Object.setPrototypeOf(self, peg$SyntaxError.prototype);',
                  '  }',
                  '  self.expected = expected;',
                  '  self.found = found;',
                  '  self.location = location;',
                  '  self.name = "SyntaxError";',
                  '  return self;',
                  '}',
                  '',
                  'peg$subclass(peg$SyntaxError, Error);',
                  '',
                  'function peg$padEnd(str, targetLength, padString) {',
                  '  padString = padString || " ";',
                  '  if (str.length > targetLength) { return str; }',
                  '  targetLength -= str.length;',
                  '  padString += padString.repeat(targetLength);',
                  '  return str + padString.slice(0, targetLength);',
                  '}',
                  '',
                  'peg$SyntaxError.prototype.format = function(sources) {',
                  '  var str = "Error: " + this.message;',
                  '  if (this.location) {',
                  '    var src = null;',
                  '    var k;',
                  '    for (k = 0; k < sources.length; k++) {',
                  '      if (sources[k].source === this.location.source) {',
                  '        src = sources[k].text.split(/\\r\\n|\\n|\\r/g);',
                  '        break;',
                  '      }',
                  '    }',
                  '    var s = this.location.start;',
                  '    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))',
                  '      ? this.location.source.offset(s)',
                  '      : s;',
                  '    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;',
                  '    if (src) {',
                  '      var e = this.location.end;',
                  '      var filler = peg$padEnd("", offset_s.line.toString().length, \' \');',
                  '      var line = src[s.line - 1];',
                  '      var last = s.line === e.line ? e.column : line.length + 1;',
                  '      var hatLen = (last - s.column) || 1;',
                  '      str += "\\n --\x3e " + loc + "\\n"',
                  '          + filler + " |\\n"',
                  '          + offset_s.line + " | " + line + "\\n"',
                  '          + filler + " | " + peg$padEnd("", s.column - 1, \' \')',
                  '          + peg$padEnd("", hatLen, "^");',
                  '    } else {',
                  '      str += "\\n at " + loc;',
                  '    }',
                  '  }',
                  '  return str;',
                  '};',
                  '',
                  'peg$SyntaxError.buildMessage = function(expected, found) {',
                  '  var DESCRIBE_EXPECTATION_FNS = {',
                  '    literal: function(expectation) {',
                  '      return "\\"" + literalEscape(expectation.text) + "\\"";',
                  '    },',
                  '',
                  '    class: function(expectation) {',
                  '      var escapedParts = expectation.parts.map(function(part) {',
                  '        return Array.isArray(part)',
                  '          ? classEscape(part[0]) + "-" + classEscape(part[1])',
                  '          : classEscape(part);',
                  '      });',
                  '',
                  '      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";',
                  '    },',
                  '',
                  '    any: function() {',
                  '      return "any character";',
                  '    },',
                  '',
                  '    end: function() {',
                  '      return "end of input";',
                  '    },',
                  '',
                  '    other: function(expectation) {',
                  '      return expectation.description;',
                  '    }',
                  '  };',
                  '',
                  '  function hex(ch) {',
                  '    return ch.charCodeAt(0).toString(16).toUpperCase();',
                  '  }',
                  '',
                  '  function literalEscape(s) {',
                  '    return s',
                  '      .replace(/\\\\/g, "\\\\\\\\")',
                  '      .replace(/"/g,  "\\\\\\"")',
                  '      .replace(/\\0/g, "\\\\0")',
                  '      .replace(/\\t/g, "\\\\t")',
                  '      .replace(/\\n/g, "\\\\n")',
                  '      .replace(/\\r/g, "\\\\r")',
                  '      .replace(/[\\x00-\\x0F]/g,          function(ch) { return "\\\\x0" + hex(ch); })',
                  '      .replace(/[\\x10-\\x1F\\x7F-\\x9F]/g, function(ch) { return "\\\\x"  + hex(ch); });',
                  '  }',
                  '',
                  '  function classEscape(s) {',
                  '    return s',
                  '      .replace(/\\\\/g, "\\\\\\\\")',
                  '      .replace(/\\]/g, "\\\\]")',
                  '      .replace(/\\^/g, "\\\\^")',
                  '      .replace(/-/g,  "\\\\-")',
                  '      .replace(/\\0/g, "\\\\0")',
                  '      .replace(/\\t/g, "\\\\t")',
                  '      .replace(/\\n/g, "\\\\n")',
                  '      .replace(/\\r/g, "\\\\r")',
                  '      .replace(/[\\x00-\\x0F]/g,          function(ch) { return "\\\\x0" + hex(ch); })',
                  '      .replace(/[\\x10-\\x1F\\x7F-\\x9F]/g, function(ch) { return "\\\\x"  + hex(ch); });',
                  '  }',
                  '',
                  '  function describeExpectation(expectation) {',
                  '    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);',
                  '  }',
                  '',
                  '  function describeExpected(expected) {',
                  '    var descriptions = expected.map(describeExpectation);',
                  '    var i, j;',
                  '',
                  '    descriptions.sort();',
                  '',
                  '    if (descriptions.length > 0) {',
                  '      for (i = 1, j = 1; i < descriptions.length; i++) {',
                  '        if (descriptions[i - 1] !== descriptions[i]) {',
                  '          descriptions[j] = descriptions[i];',
                  '          j++;',
                  '        }',
                  '      }',
                  '      descriptions.length = j;',
                  '    }',
                  '',
                  '    switch (descriptions.length) {',
                  '      case 1:',
                  '        return descriptions[0];',
                  '',
                  '      case 2:',
                  '        return descriptions[0] + " or " + descriptions[1];',
                  '',
                  '      default:',
                  '        return descriptions.slice(0, -1).join(", ")',
                  '          + ", or "',
                  '          + descriptions[descriptions.length - 1];',
                  '    }',
                  '  }',
                  '',
                  '  function describeFound(found) {',
                  '    return found ? "\\"" + literalEscape(found) + "\\"" : "end of input";',
                  '  }',
                  '',
                  '  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";',
                  '};',
                  '',
                ),
                t.trace &&
                  a.push(
                    'function peg$DefaultTracer() {',
                    '  this.indentLevel = 0;',
                    '}',
                    '',
                    'peg$DefaultTracer.prototype.trace = function(event) {',
                    '  var that = this;',
                    '',
                    '  function log(event) {',
                    '    function repeat(string, n) {',
                    '       var result = "", i;',
                    '',
                    '       for (i = 0; i < n; i++) {',
                    '         result += string;',
                    '       }',
                    '',
                    '       return result;',
                    '    }',
                    '',
                    '    function pad(string, length) {',
                    '      return string + repeat(" ", length - string.length);',
                    '    }',
                    '',
                    '    if (typeof console === "object") {',
                    '      console.log(',
                    '        event.location.start.line + ":" + event.location.start.column + "-"',
                    '          + event.location.end.line + ":" + event.location.end.column + " "',
                    '          + pad(event.type, 10) + " "',
                    '          + repeat("  ", that.indentLevel) + event.rule',
                    '      );',
                    '    }',
                    '  }',
                    '',
                    '  switch (event.type) {',
                    '    case "rule.enter":',
                    '      log(event);',
                    '      this.indentLevel++;',
                    '      break;',
                    '',
                    '    case "rule.match":',
                    '      this.indentLevel--;',
                    '      log(event);',
                    '      break;',
                    '',
                    '    case "rule.fail":',
                    '      this.indentLevel--;',
                    '      log(event);',
                    '      break;',
                    '',
                    '    default:',
                    '      throw new Error("Invalid event type: " + event.type + ".");',
                    '  }',
                    '};',
                    '',
                  );
              const p = '{ ' + t.allowedStartRules.map(e => e + ': ' + f(e)).join(', ') + ' }',
                g = f(t.allowedStartRules[0]);
              return (
                a.push(
                  'function peg$parse(input, options) {',
                  '  options = options !== undefined ? options : {};',
                  '',
                  '  var peg$FAILED = {};',
                  '  var peg$source = options.grammarSource;',
                  '',
                  '  var peg$startRuleFunctions = ' + p + ';',
                  '  var peg$startRuleFunction = ' + g + ';',
                  '',
                  new c(null, null, t.grammarSource, [
                    e.literals
                      .map((e, t) => '  var ' + l(t) + ' = "' + s(e) + '";')
                      .concat(
                        '',
                        e.classes.map((e, t) => {
                          return (
                            '  var ' +
                            h(t) +
                            ' = /^[' +
                            ((u = e).inverted ? '^' : '') +
                            u.value
                              .map(e => (Array.isArray(e) ? i(e[0]) + '-' + i(e[1]) : i(e)))
                              .join('') +
                            ']/' +
                            (u.ignoreCase ? 'i' : '') +
                            ';'
                          );
                          var u;
                        }),
                      )
                      .concat(
                        '',
                        e.expectations.map(
                          (e, t) =>
                            '  var ' +
                            E(t) +
                            ' = ' +
                            (function(e) {
                              switch (e.type) {
                                case 'rule':
                                  return 'peg$otherExpectation("' + s(e.value) + '")';
                                case 'literal':
                                  return (
                                    'peg$literalExpectation("' +
                                    s(e.value) +
                                    '", ' +
                                    e.ignoreCase +
                                    ')'
                                  );
                                case 'class':
                                  return (
                                    'peg$classExpectation([' +
                                    e.value
                                      .map(e =>
                                        Array.isArray(e)
                                          ? '["' + s(e[0]) + '", "' + s(e[1]) + '"]'
                                          : '"' + s(e) + '"',
                                      )
                                      .join(', ') +
                                    '], ' +
                                    e.inverted +
                                    ', ' +
                                    e.ignoreCase +
                                    ')'
                                  );
                                case 'any':
                                  return 'peg$anyExpectation()';
                                default:
                                  throw new Error(
                                    'Unknown expectation type (' + JSON.stringify(e) + ')',
                                  );
                              }
                            })(e) +
                            ';',
                        ),
                      )
                      .concat('')
                      .join('\n'),
                    e.functions.map(function(e, t) {
                      return A(
                        `\n  var ${d(t)} = function(${e.params.join(', ')}) {`,
                        e.body,
                        e.location,
                        '};',
                      );
                    }),
                  ]),
                  '',
                  '  var peg$currPos = 0;',
                  '  var peg$savedPos = 0;',
                  '  var peg$posDetailsCache = [{ line: 1, column: 1 }];',
                  '  var peg$maxFailPos = 0;',
                  '  var peg$maxFailExpected = [];',
                  '  var peg$silentFails = 0;',
                  '',
                ),
                t.cache && a.push('  var peg$resultsCache = {};', ''),
                t.trace &&
                  a.push(
                    '  var peg$tracer = "tracer" in options ? options.tracer : new peg$DefaultTracer();',
                    '',
                  ),
                a.push(
                  '  var peg$result;',
                  '',
                  '  if ("startRule" in options) {',
                  '    if (!(options.startRule in peg$startRuleFunctions)) {',
                  '      throw new Error("Can\'t start parsing from rule \\"" + options.startRule + "\\".");',
                  '    }',
                  '',
                  '    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];',
                  '  }',
                  '',
                  '  function text() {',
                  '    return input.substring(peg$savedPos, peg$currPos);',
                  '  }',
                  '',
                  '  function offset() {',
                  '    return peg$savedPos;',
                  '  }',
                  '',
                  '  function range() {',
                  '    return {',
                  '      source: peg$source,',
                  '      start: peg$savedPos,',
                  '      end: peg$currPos',
                  '    };',
                  '  }',
                  '',
                  '  function location() {',
                  '    return peg$computeLocation(peg$savedPos, peg$currPos);',
                  '  }',
                  '',
                  '  function expected(description, location) {',
                  '    location = location !== undefined',
                  '      ? location',
                  '      : peg$computeLocation(peg$savedPos, peg$currPos);',
                  '',
                  '    throw peg$buildStructuredError(',
                  '      [peg$otherExpectation(description)],',
                  '      input.substring(peg$savedPos, peg$currPos),',
                  '      location',
                  '    );',
                  '  }',
                  '',
                  '  function error(message, location) {',
                  '    location = location !== undefined',
                  '      ? location',
                  '      : peg$computeLocation(peg$savedPos, peg$currPos);',
                  '',
                  '    throw peg$buildSimpleError(message, location);',
                  '  }',
                  '',
                  '  function peg$literalExpectation(text, ignoreCase) {',
                  '    return { type: "literal", text: text, ignoreCase: ignoreCase };',
                  '  }',
                  '',
                  '  function peg$classExpectation(parts, inverted, ignoreCase) {',
                  '    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };',
                  '  }',
                  '',
                  '  function peg$anyExpectation() {',
                  '    return { type: "any" };',
                  '  }',
                  '',
                  '  function peg$endExpectation() {',
                  '    return { type: "end" };',
                  '  }',
                  '',
                  '  function peg$otherExpectation(description) {',
                  '    return { type: "other", description: description };',
                  '  }',
                  '',
                  '  function peg$computePosDetails(pos) {',
                  '    var details = peg$posDetailsCache[pos];',
                  '    var p;',
                  '',
                  '    if (details) {',
                  '      return details;',
                  '    } else {',
                  '      p = pos - 1;',
                  '      while (!peg$posDetailsCache[p]) {',
                  '        p--;',
                  '      }',
                  '',
                  '      details = peg$posDetailsCache[p];',
                  '      details = {',
                  '        line: details.line,',
                  '        column: details.column',
                  '      };',
                  '',
                  '      while (p < pos) {',
                  '        if (input.charCodeAt(p) === 10) {',
                  '          details.line++;',
                  '          details.column = 1;',
                  '        } else {',
                  '          details.column++;',
                  '        }',
                  '',
                  '        p++;',
                  '      }',
                  '',
                  '      peg$posDetailsCache[pos] = details;',
                  '',
                  '      return details;',
                  '    }',
                  '  }',
                  '',
                  '  function peg$computeLocation(startPos, endPos, offset) {',
                  '    var startPosDetails = peg$computePosDetails(startPos);',
                  '    var endPosDetails = peg$computePosDetails(endPos);',
                  '',
                  '    var res = {',
                  '      source: peg$source,',
                  '      start: {',
                  '        offset: startPos,',
                  '        line: startPosDetails.line,',
                  '        column: startPosDetails.column',
                  '      },',
                  '      end: {',
                  '        offset: endPos,',
                  '        line: endPosDetails.line,',
                  '        column: endPosDetails.column',
                  '      }',
                  '    };',
                  '    if (offset && peg$source && (typeof peg$source.offset === "function")) {',
                  '      res.start = peg$source.offset(res.start);',
                  '      res.end = peg$source.offset(res.end);',
                  '    }',
                  '    return res;',
                  '  }',
                  '',
                  '  function peg$fail(expected) {',
                  '    if (peg$currPos < peg$maxFailPos) { return; }',
                  '',
                  '    if (peg$currPos > peg$maxFailPos) {',
                  '      peg$maxFailPos = peg$currPos;',
                  '      peg$maxFailExpected = [];',
                  '    }',
                  '',
                  '    peg$maxFailExpected.push(expected);',
                  '  }',
                  '',
                  '  function peg$buildSimpleError(message, location) {',
                  '    return new peg$SyntaxError(message, null, null, location);',
                  '  }',
                  '',
                  '  function peg$buildStructuredError(expected, found, location) {',
                  '    return new peg$SyntaxError(',
                  '      peg$SyntaxError.buildMessage(expected, found),',
                  '      expected,',
                  '      found,',
                  '      location',
                  '    );',
                  '  }',
                  '',
                ),
                e.rules.forEach(i => {
                  a.push(
                    ...u(
                      (function(a) {
                        const i = [],
                          c = new o(a.name, 's', 'var', a.bytecode),
                          p = (function t(n) {
                            let o = 0;
                            const s = n.length,
                              i = [];
                            let p;
                            function A(e, r) {
                              const a = r + 3,
                                s = n[o + a - 2],
                                l = n[o + a - 1];
                              let p, A;
                              c.checkedIf(
                                o,
                                () => {
                                  (o += a), (p = t(n.slice(o, o + s))), (o += s);
                                },
                                l > 0
                                  ? () => {
                                      (A = t(n.slice(o, o + l))), (o += l);
                                    }
                                  : null,
                              ),
                                i.push('if (' + e + ') {'),
                                i.push(...u(p)),
                                l > 0 && (i.push('} else {'), i.push(...u(A))),
                                i.push('}');
                            }
                            function C(e) {
                              const r = n[o + 2 - 1];
                              let a;
                              c.checkedLoop(o, () => {
                                (o += 2), (a = t(n.slice(o, o + r))), (o += r);
                              }),
                                i.push('while (' + e + ') {'),
                                i.push(...u(a)),
                                i.push('}');
                            }
                            function g(e) {
                              const t = n[o + e - 1];
                              return (
                                d(n[o + 1]) +
                                '(' +
                                n
                                  .slice(o + e, o + e + t)
                                  .map(e => c.index(e))
                                  .join(', ') +
                                ')'
                              );
                            }
                            for (; o < s; )
                              switch (n[o]) {
                                case r.PUSH_EMPTY_STRING:
                                  i.push(c.push("''")), o++;
                                  break;
                                case r.PUSH_CURR_POS:
                                  i.push(c.push('peg$currPos')), o++;
                                  break;
                                case r.PUSH_UNDEFINED:
                                  i.push(c.push('undefined')), o++;
                                  break;
                                case r.PUSH_NULL:
                                  i.push(c.push('null')), o++;
                                  break;
                                case r.PUSH_FAILED:
                                  i.push(c.push('peg$FAILED')), o++;
                                  break;
                                case r.PUSH_EMPTY_ARRAY:
                                  i.push(c.push('[]')), o++;
                                  break;
                                case r.POP:
                                  c.pop(), o++;
                                  break;
                                case r.POP_CURR_POS:
                                  i.push('peg$currPos = ' + c.pop() + ';'), o++;
                                  break;
                                case r.POP_N:
                                  c.pop(n[o + 1]), (o += 2);
                                  break;
                                case r.NIP:
                                  (p = c.pop()), c.pop(), i.push(c.push(p)), o++;
                                  break;
                                case r.APPEND:
                                  (p = c.pop()), i.push(c.top() + '.push(' + p + ');'), o++;
                                  break;
                                case r.WRAP:
                                  i.push(c.push('[' + c.pop(n[o + 1]).join(', ') + ']')), (o += 2);
                                  break;
                                case r.TEXT:
                                  i.push(c.push('input.substring(' + c.pop() + ', peg$currPos)')),
                                    o++;
                                  break;
                                case r.PLUCK: {
                                  const e = 3,
                                    t = n[o + e - 1],
                                    u = e + t;
                                  (p = n.slice(o + e, o + u)),
                                    (p =
                                      1 === t
                                        ? c.index(p[0])
                                        : `[ ${p.map(e => c.index(e)).join(', ')} ]`),
                                    c.pop(n[o + 1]),
                                    i.push(c.push(p)),
                                    (o += u);
                                  break;
                                }
                                case r.IF:
                                  A(c.top(), 0);
                                  break;
                                case r.IF_ERROR:
                                  A(c.top() + ' === peg$FAILED', 0);
                                  break;
                                case r.IF_NOT_ERROR:
                                  A(c.top() + ' !== peg$FAILED', 0);
                                  break;
                                case r.IF_LT:
                                  A(c.top() + '.length < ' + n[o + 1], 1);
                                  break;
                                case r.IF_GE:
                                  A(c.top() + '.length >= ' + n[o + 1], 1);
                                  break;
                                case r.IF_LT_DYNAMIC:
                                  A(c.top() + '.length < (' + c.index(n[o + 1]) + '|0)', 1);
                                  break;
                                case r.IF_GE_DYNAMIC:
                                  A(c.top() + '.length >= (' + c.index(n[o + 1]) + '|0)', 1);
                                  break;
                                case r.WHILE_NOT_ERROR:
                                  C(c.top() + ' !== peg$FAILED');
                                  break;
                                case r.MATCH_ANY:
                                  A('input.length > peg$currPos', 0);
                                  break;
                                case r.MATCH_STRING:
                                  A(
                                    e.literals[n[o + 1]].length > 1
                                      ? 'input.substr(peg$currPos, ' +
                                          e.literals[n[o + 1]].length +
                                          ') === ' +
                                          l(n[o + 1])
                                      : 'input.charCodeAt(peg$currPos) === ' +
                                          e.literals[n[o + 1]].charCodeAt(0),
                                    1,
                                  );
                                  break;
                                case r.MATCH_STRING_IC:
                                  A(
                                    'input.substr(peg$currPos, ' +
                                      e.literals[n[o + 1]].length +
                                      ').toLowerCase() === ' +
                                      l(n[o + 1]),
                                    1,
                                  );
                                  break;
                                case r.MATCH_CHAR_CLASS:
                                  A(h(n[o + 1]) + '.test(input.charAt(peg$currPos))', 1);
                                  break;
                                case r.ACCEPT_N:
                                  i.push(
                                    c.push(
                                      n[o + 1] > 1
                                        ? 'input.substr(peg$currPos, ' + n[o + 1] + ')'
                                        : 'input.charAt(peg$currPos)',
                                    ),
                                  ),
                                    i.push(
                                      n[o + 1] > 1
                                        ? 'peg$currPos += ' + n[o + 1] + ';'
                                        : 'peg$currPos++;',
                                    ),
                                    (o += 2);
                                  break;
                                case r.ACCEPT_STRING:
                                  i.push(c.push(l(n[o + 1]))),
                                    i.push(
                                      e.literals[n[o + 1]].length > 1
                                        ? 'peg$currPos += ' + e.literals[n[o + 1]].length + ';'
                                        : 'peg$currPos++;',
                                    ),
                                    (o += 2);
                                  break;
                                case r.FAIL:
                                  i.push(c.push('peg$FAILED')),
                                    i.push(
                                      'if (peg$silentFails === 0) { peg$fail(' +
                                        E(n[o + 1]) +
                                        '); }',
                                    ),
                                    (o += 2);
                                  break;
                                case r.LOAD_SAVED_POS:
                                  i.push('peg$savedPos = ' + c.index(n[o + 1]) + ';'), (o += 2);
                                  break;
                                case r.UPDATE_SAVED_POS:
                                  i.push('peg$savedPos = peg$currPos;'), o++;
                                  break;
                                case r.CALL:
                                  (p = g(4)),
                                    c.pop(n[o + 2]),
                                    i.push(c.push(p)),
                                    (o += 4 + n[o + 3]);
                                  break;
                                case r.RULE:
                                  i.push(c.push(f(e.rules[n[o + 1]].name) + '()')), (o += 2);
                                  break;
                                case r.SILENT_FAILS_ON:
                                  i.push('peg$silentFails++;'), o++;
                                  break;
                                case r.SILENT_FAILS_OFF:
                                  i.push('peg$silentFails--;'), o++;
                                  break;
                                case r.SOURCE_MAP_PUSH:
                                  c.sourceMapPush(i, e.locations[n[o + 1]]), (o += 2);
                                  break;
                                case r.SOURCE_MAP_POP:
                                  c.sourceMapPop(), o++;
                                  break;
                                case r.SOURCE_MAP_LABEL_PUSH:
                                  (c.labels[n[o + 1]] = {
                                    label: e.literals[n[o + 2]],
                                    location: e.locations[n[o + 3]],
                                  }),
                                    (o += 4);
                                  break;
                                case r.SOURCE_MAP_LABEL_POP:
                                  delete c.labels[n[o + 1]], (o += 2);
                                  break;
                                default:
                                  throw new Error('Invalid opcode: ' + n[o] + '.', {
                                    rule: a.name,
                                    bytecode: n,
                                  });
                              }
                            return i;
                          })(a.bytecode);
                        return (
                          i.push(A('function ', f(a.name), a.nameLocation, '() {\n', a.name)),
                          t.trace && i.push('  var startPos = peg$currPos;'),
                          i.push(u(c.defines())),
                          i.push(
                            ...u(
                              (function(u, n) {
                                const r = [];
                                return (
                                  r.push(''),
                                  t.trace &&
                                    r.push(
                                      'peg$tracer.trace({',
                                      '  type: "rule.enter",',
                                      '  rule: ' + u + ',',
                                      '  location: peg$computeLocation(startPos, startPos, true)',
                                      '});',
                                      '',
                                    ),
                                  t.cache &&
                                    (r.push(
                                      'var key = peg$currPos * ' + e.rules.length + ' + ' + n + ';',
                                      'var cached = peg$resultsCache[key];',
                                      '',
                                      'if (cached) {',
                                      '  peg$currPos = cached.nextPos;',
                                      '',
                                    ),
                                    t.trace &&
                                      r.push(
                                        'if (cached.result !== peg$FAILED) {',
                                        '  peg$tracer.trace({',
                                        '    type: "rule.match",',
                                        '    rule: ' + u + ',',
                                        '    result: cached.result,',
                                        '    location: peg$computeLocation(startPos, peg$currPos, true)',
                                        '  });',
                                        '} else {',
                                        '  peg$tracer.trace({',
                                        '    type: "rule.fail",',
                                        '    rule: ' + u + ',',
                                        '    location: peg$computeLocation(startPos, startPos, true)',
                                        '  });',
                                        '}',
                                        '',
                                      ),
                                    r.push('  return cached.result;', '}', '')),
                                  r
                                );
                              })('"' + s(a.name) + '"', n.indexOfRule(e, a.name)),
                            ),
                          ),
                          i.push(...u(p)),
                          i.push(
                            ...u(
                              (function(e, u) {
                                const n = [];
                                return (
                                  t.cache &&
                                    n.push(
                                      '',
                                      'peg$resultsCache[key] = { nextPos: peg$currPos, result: ' +
                                        u +
                                        ' };',
                                    ),
                                  t.trace &&
                                    n.push(
                                      '',
                                      'if (' + u + ' !== peg$FAILED) {',
                                      '  peg$tracer.trace({',
                                      '    type: "rule.match",',
                                      '    rule: ' + e + ',',
                                      '    result: ' + u + ',',
                                      '    location: peg$computeLocation(startPos, peg$currPos, true)',
                                      '  });',
                                      '} else {',
                                      '  peg$tracer.trace({',
                                      '    type: "rule.fail",',
                                      '    rule: ' + e + ',',
                                      '    location: peg$computeLocation(startPos, startPos, true)',
                                      '  });',
                                      '}',
                                    ),
                                  n.push('', 'return ' + u + ';'),
                                  n
                                );
                              })('"' + s(a.name) + '"', c.result()),
                            ),
                          ),
                          i.push('}'),
                          i
                        );
                      })(i),
                    ),
                  ),
                    a.push('');
                }),
                e.initializer && (a.push(C(e.initializer)), a.push('')),
                a.push(
                  '  peg$result = peg$startRuleFunction();',
                  '',
                  '  if (peg$result !== peg$FAILED && peg$currPos === input.length) {',
                  '    return peg$result;',
                  '  } else {',
                  '    if (peg$result !== peg$FAILED && peg$currPos < input.length) {',
                  '      peg$fail(peg$endExpectation());',
                  '    }',
                  '',
                  '    throw peg$buildStructuredError(',
                  '      peg$maxFailExpected,',
                  '      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,',
                  '      peg$maxFailPos < input.length',
                  '        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)',
                  '        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)',
                  '    );',
                  '  }',
                  '}',
                ),
                new c(
                  null,
                  null,
                  t.grammarSource,
                  a.map(e => (e instanceof c ? e : e + '\n')),
                )
              );
            })(),
          );
        };
      },
      51358: (e, t, u) => {
        'use strict';
        const n = u(87602),
          r = u(86657),
          o = u(48256),
          a = -1;
        function s(e) {
          function t(e) {
            return (e.match = 0);
          }
          function u(e) {
            return c(e.expression), (e.match = 1);
          }
          function s(e) {
            return (e.match = c(e.expression));
          }
          function i(e, t) {
            const u = e.length;
            let n = 0,
              r = 0;
            for (let t = 0; t < u; ++t) {
              const u = c(e[t]);
              1 === u && ++n, u === a && ++r;
            }
            return n === u ? 1 : t ? (r === u ? a : 0) : r > 0 ? a : 0;
          }
          const c = n.build({
            rule(e) {
              let t,
                u = 0;
              if (void 0 === e.match) {
                e.match = 0;
                do {
                  if (((t = e.match), (e.match = c(e.expression)), ++u > 6))
                    throw new o(
                      'Infinity cycle detected when trying to evaluate node match result',
                      e.location,
                    );
                } while (t !== e.match);
              }
              return e.match;
            },
            named: s,
            choice: e => (e.match = i(e.alternatives, !0)),
            action: s,
            sequence: e => (e.match = i(e.elements, !1)),
            labeled: s,
            text: s,
            simple_and: s,
            simple_not: e => (e.match = -c(e.expression)),
            optional: u,
            zero_or_more: u,
            one_or_more: s,
            repeated(e) {
              const t = c(e.expression),
                u = e.delimiter ? c(e.delimiter) : a,
                n = e.min ? e.min : e.max;
              return 'constant' !== n.type || 'constant' !== e.max.type
                ? (e.match = 0)
                : 0 === e.max.value || (null !== e.max.value && n.value > e.max.value)
                ? (e.match = a)
                : t === a
                ? (e.match = 0 === n.value ? 1 : a)
                : 1 === t
                ? e.delimiter && n.value >= 2
                  ? (e.match = u)
                  : (e.match = 1)
                : e.delimiter && n.value >= 2
                ? (e.match = u === a ? a : 0)
                : (e.match = 0 === n.value ? 1 : 0);
            },
            group: s,
            semantic_and: t,
            semantic_not: t,
            rule_ref(t) {
              const u = r.findRule(e, t.name);
              return (t.match = c(u));
            },
            literal(e) {
              const t = 0 === e.value.length ? 1 : 0;
              return (e.match = t);
            },
            class(e) {
              const t = 0 === e.parts.length ? a : 0;
              return (e.match = t);
            },
            any: t,
          });
          c(e);
        }
        (s.ALWAYS_MATCH = 1), (s.SOMETIMES_MATCH = 0), (s.NEVER_MATCH = a), (e.exports = s);
      },
      47349: (e, t, u) => {
        'use strict';
        const n = u(86657),
          r = u(87602);
        e.exports = function(e, t, u) {
          const o = [];
          e.rules.forEach((a, s) => {
            var i;
            'rule' === (i = a).type &&
              'rule_ref' === i.expression.type &&
              ((function(e, t, o) {
                r.build({
                  rule_ref(r) {
                    r.name === t &&
                      ((r.name = o),
                      u.info(`Proxy rule "${t}" replaced by the rule "${o}"`, r.location, [
                        {
                          message: 'This rule will be used',
                          location: n.findRule(e, o).nameLocation,
                        },
                      ]));
                  },
                })(e);
              })(e, a.name, a.expression.name),
              -1 === t.allowedStartRules.indexOf(a.name) && o.push(s));
          }),
            o.reverse(),
            o.forEach(t => {
              e.rules.splice(t, 1);
            });
        };
      },
      13747: (e, t, u) => {
        'use strict';
        const n = u(87602);
        e.exports = function(e, t, u) {
          function r(e) {
            const t = {};
            return (
              Object.keys(e).forEach(u => {
                t[u] = e[u];
              }),
              t
            );
          }
          function o(e, t) {
            a(e.expression, r(t));
          }
          const a = n.build({
            rule(e) {
              a(e.expression, {});
            },
            choice(e, t) {
              e.alternatives.forEach(e => {
                a(e, r(t));
              });
            },
            action: o,
            labeled(e, t) {
              const n = e.label;
              n &&
                Object.prototype.hasOwnProperty.call(t, n) &&
                u.error(`Label "${e.label}" is already defined`, e.labelLocation, [
                  { message: 'Original label location', location: t[n] },
                ]),
                a(e.expression, t),
                (t[e.label] = e.labelLocation);
            },
            text: o,
            simple_and: o,
            simple_not: o,
            optional: o,
            zero_or_more: o,
            one_or_more: o,
            repeated(e, t) {
              e.delimiter && a(e.delimiter, r(t)), a(e.expression, r(t));
            },
            group: o,
          });
          a(e);
        };
      },
      7937: (e, t, u) => {
        'use strict';
        const n = u(87602);
        e.exports = function(e, t, u) {
          const r = {};
          n.build({
            rule(e) {
              Object.prototype.hasOwnProperty.call(r, e.name)
                ? u.error(`Rule "${e.name}" is already defined`, e.nameLocation, [
                    { message: 'Original rule location', location: r[e.name] },
                  ])
                : (r[e.name] = e.nameLocation);
            },
          })(e);
        };
      },
      43046: (e, t, u) => {
        'use strict';
        const n = u(87602);
        e.exports = function(e, t, u) {
          const r = n.build({
            action(e) {
              r(e.expression, e);
            },
            labeled(e, t) {
              e.pick &&
                t &&
                u.error('"@" cannot be used with an action block', e.labelLocation, [
                  { message: 'Action block location', location: t.codeLocation },
                ]),
                r(e.expression);
            },
          });
          r(e);
        };
      },
      47771: (e, t, u) => {
        'use strict';
        const n = u(86657),
          r = u(87602);
        e.exports = function(e, t, u) {
          const o = [],
            a = [],
            s = r.build({
              rule(e) {
                o.push(e.name), s(e.expression), o.pop();
              },
              sequence(t) {
                t.elements.every(t => (s(t), !n.alwaysConsumesOnSuccess(e, t)));
              },
              repeated(t) {
                s(t.expression),
                  t.delimiter && !n.alwaysConsumesOnSuccess(e, t.expression) && s(t.delimiter);
              },
              rule_ref(t) {
                a.push(t);
                const r = n.findRule(e, t.name);
                if (-1 !== o.indexOf(t.name))
                  return (
                    o.push(t.name),
                    void u.error(
                      'Possible infinite loop when parsing (left recursion: ' +
                        o.join(' -> ') +
                        ')',
                      r.nameLocation,
                      a.map((e, t, u) => ({
                        message:
                          t + 1 !== u.length
                            ? `Step ${t + 1}: call of the rule "${
                                e.name
                              }" without input consumption`
                            : `Step ${t +
                                1}: call itself without input consumption - left recursion`,
                        location: e.location,
                      })),
                    )
                  );
                r && s(r), a.pop();
              },
            });
          s(e);
        };
      },
      74414: (e, t, u) => {
        'use strict';
        const n = u(86657),
          r = u(87602);
        e.exports = function(e, t, u) {
          const o = r.build({
            zero_or_more(t) {
              n.alwaysConsumesOnSuccess(e, t.expression) ||
                u.error(
                  'Possible infinite loop when parsing (repetition used with an expression that may not consume any input)',
                  t.location,
                );
            },
            one_or_more(t) {
              n.alwaysConsumesOnSuccess(e, t.expression) ||
                u.error(
                  'Possible infinite loop when parsing (repetition used with an expression that may not consume any input)',
                  t.location,
                );
            },
            repeated(t) {
              if (
                (t.delimiter && o(t.delimiter),
                !(
                  n.alwaysConsumesOnSuccess(e, t.expression) ||
                  (t.delimiter && n.alwaysConsumesOnSuccess(e, t.delimiter))
                ))
              )
                if (null === t.max.value)
                  u.error(
                    'Possible infinite loop when parsing (unbounded range repetition used with an expression that may not consume any input)',
                    t.location,
                  );
                else {
                  const e = t.min ? t.min : t.max;
                  u.warning(
                    'constant' === e.type && 'constant' === t.max.type
                      ? `An expression may not consume any input and may always match ${t.max.value} times`
                      : 'An expression may not consume any input and may always match with a maximum repetition count',
                    t.location,
                  );
                }
            },
          });
          o(e);
        };
      },
      78277: (e, t, u) => {
        'use strict';
        const n = u(86657),
          r = u(87602);
        e.exports = function(e, t, u) {
          r.build({
            rule_ref(t) {
              n.findRule(e, t.name) || u.error(`Rule "${t.name}" is not defined`, t.location);
            },
          })(e);
        };
      },
      52399: (e, t, u) => {
        'use strict';
        const n = u(48256);
        class r {
          constructor(e) {
            'function' == typeof (e = void 0 !== e ? e : {}).error && (this.error = e.error),
              'function' == typeof e.warning && (this.warning = e.warning),
              'function' == typeof e.info && (this.info = e.info);
          }
          error() {}
          warning() {}
          info() {}
        }
        e.exports = class {
          constructor(e) {
            (this._callbacks = new r(e)),
              (this._firstError = null),
              (this.errors = 0),
              (this.problems = []),
              (this.stage = null);
          }
          error(...e) {
            ++this.errors,
              null === this._firstError &&
                ((this._firstError = new n(...e)),
                (this._firstError.stage = this.stage),
                (this._firstError.problems = this.problems)),
              this.problems.push(['error', ...e]),
              this._callbacks.error(this.stage, ...e);
          }
          warning(...e) {
            this.problems.push(['warning', ...e]), this._callbacks.warning(this.stage, ...e);
          }
          info(...e) {
            this.problems.push(['info', ...e]), this._callbacks.info(this.stage, ...e);
          }
          checkErrors() {
            if (0 !== this.errors) throw this._firstError;
          }
        };
      },
      82169: (e, t, u) => {
        'use strict';
        const { SourceNode: n } = u(10782),
          r = u(49002);
        class o {
          constructor(e, t, u, n) {
            (this.sp = -1),
              (this.maxSp = -1),
              (this.varName = t),
              (this.ruleName = e),
              (this.type = u),
              (this.bytecode = n),
              (this.labels = {}),
              (this.sourceMapStack = []);
          }
          name(e) {
            if (e < 0)
              throw new RangeError(
                `Rule '${this.ruleName}': The variable stack underflow: attempt to use a variable '${this.varName}<x>' at an index ${e}.\nBytecode: ${this.bytecode}`,
              );
            return this.varName + e;
          }
          static sourceNode(e, t, u) {
            const o = r.offsetStart(e);
            return new n(o.line, o.column ? o.column - 1 : null, String(e.source), t, u);
          }
          push(e) {
            ++this.sp > this.maxSp && (this.maxSp = this.sp);
            const t = this.labels[this.sp],
              u = [this.name(this.sp), ' = ', e, ';'];
            if (t) {
              if (this.sourceMapStack.length) {
                const e = o.sourceNode(t.location, u.splice(0, 2), t.label),
                  { parts: r, location: a } = this.sourceMapPopInternal(),
                  s =
                    a.start.offset < t.location.end.offset
                      ? { start: t.location.end, end: a.end, source: a.source }
                      : a,
                  i = o.sourceNode(s, u.concat('\n'));
                return (
                  this.sourceMapStack.push([r, r.length + 1, a]),
                  new n(null, null, t.location.source, [e, i])
                );
              }
              return o.sourceNode(t.location, u.concat('\n'));
            }
            return u.join('');
          }
          pop(e) {
            return void 0 !== e
              ? ((this.sp -= e), Array.from({ length: e }, (e, t) => this.name(this.sp + 1 + t)))
              : this.name(this.sp--);
          }
          top() {
            return this.name(this.sp);
          }
          index(e) {
            if (e < 0)
              throw new RangeError(
                `Rule '${this.ruleName}': The variable stack overflow: attempt to get a variable at a negative index ${e}.\nBytecode: ${this.bytecode}`,
              );
            return this.name(this.sp - e);
          }
          result() {
            if (this.maxSp < 0)
              throw new RangeError(
                `Rule '${this.ruleName}': The variable stack is empty, can't get the result.\nBytecode: ${this.bytecode}`,
              );
            return this.name(0);
          }
          defines() {
            return this.maxSp < 0
              ? ''
              : this.type +
                  ' ' +
                  Array.from({ length: this.maxSp + 1 }, (e, t) => this.name(t)).join(', ') +
                  ';';
          }
          checkedIf(e, t, u) {
            const n = this.sp;
            if ((t(), u)) {
              const t = this.sp;
              if (((this.sp = n), u(), t !== this.sp))
                throw new Error(
                  "Rule '" +
                    this.ruleName +
                    "', position " +
                    e +
                    ": Branches of a condition can't move the stack pointer differently (before: " +
                    n +
                    ', after then: ' +
                    t +
                    ', after else: ' +
                    this.sp +
                    '). Bytecode: ' +
                    this.bytecode,
                );
            }
          }
          checkedLoop(e, t) {
            const u = this.sp;
            if ((t(), u !== this.sp))
              throw new Error(
                "Rule '" +
                  this.ruleName +
                  "', position " +
                  e +
                  ": Body of a loop can't move the stack pointer (before: " +
                  u +
                  ', after: ' +
                  this.sp +
                  '). Bytecode: ' +
                  this.bytecode,
              );
          }
          sourceMapPush(e, t) {
            if (this.sourceMapStack.length) {
              const e = this.sourceMapStack[this.sourceMapStack.length - 1];
              e[2].start.offset === t.start.offset &&
                e[2].end.offset > t.end.offset &&
                (e[2] = { start: t.end, end: e[2].end, source: e[2].source });
            }
            this.sourceMapStack.push([e, e.length, t]);
          }
          sourceMapPopInternal() {
            const [e, t, u] = this.sourceMapStack.pop(),
              o = e.splice(t).map(e => (e instanceof n ? e : e + '\n'));
            if (o.length) {
              const t = r.offsetStart(u);
              e.push(new n(t.line, t.column - 1, String(u.source), o));
            }
            return { parts: e, location: u };
          }
          sourceMapPop(e) {
            const { location: t } = this.sourceMapPopInternal();
            if (
              this.sourceMapStack.length &&
              t.end.offset < this.sourceMapStack[this.sourceMapStack.length - 1][2].end.offset
            ) {
              const { parts: u, location: n } = this.sourceMapPopInternal(),
                r =
                  n.start.offset < t.end.offset
                    ? { start: t.end, end: n.end, source: n.source }
                    : n;
              this.sourceMapStack.push([u, u.length + (e || 0), r]);
            }
          }
        }
        e.exports = o;
      },
      93758: (e, t) => {
        'use strict';
        function u(e) {
          return e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase();
        }
        (t.hex = u),
          (t.stringEscape = function(e) {
            return e
              .replace(/\\/g, '\\\\')
              .replace(/"/g, '\\"')
              .replace(/\0/g, '\\0')
              .replace(/\x08/g, '\\b')
              .replace(/\t/g, '\\t')
              .replace(/\n/g, '\\n')
              .replace(/\v/g, '\\v')
              .replace(/\f/g, '\\f')
              .replace(/\r/g, '\\r')
              .replace(/[\x00-\x0F]/g, e => '\\x0' + u(e))
              .replace(/[\x10-\x1F\x7F-\xFF]/g, e => '\\x' + u(e))
              .replace(/[\u0100-\u0FFF]/g, e => '\\u0' + u(e))
              .replace(/[\u1000-\uFFFF]/g, e => '\\u' + u(e));
          }),
          (t.regexpClassEscape = function(e) {
            return e
              .replace(/\\/g, '\\\\')
              .replace(/\//g, '\\/')
              .replace(/]/g, '\\]')
              .replace(/\^/g, '\\^')
              .replace(/-/g, '\\-')
              .replace(/\0/g, '\\0')
              .replace(/\x08/g, '\\b')
              .replace(/\t/g, '\\t')
              .replace(/\n/g, '\\n')
              .replace(/\v/g, '\\v')
              .replace(/\f/g, '\\f')
              .replace(/\r/g, '\\r')
              .replace(/[\x00-\x0F]/g, e => '\\x0' + u(e))
              .replace(/[\x10-\x1F\x7F-\xFF]/g, e => '\\x' + u(e))
              .replace(/[\u0100-\u0FFF]/g, e => '\\u0' + u(e))
              .replace(/[\u1000-\uFFFF]/g, e => '\\u' + u(e));
          }),
          (t.base64 = function(e) {
            const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
              u = e.length % 3,
              n = e.length - u;
            let r = '';
            for (let u = 0; u < n; u += 3)
              (r += t[e[u] >> 2]),
                (r += t[((3 & e[u]) << 4) | (e[u + 1] >> 4)]),
                (r += t[((15 & e[u + 1]) << 2) | (e[u + 2] >> 6)]),
                (r += t[63 & e[u + 2]]);
            return (
              1 === u
                ? ((r += t[e[n] >> 2]), (r += t[(3 & e[n]) << 4]), (r += '=='))
                : 2 === u &&
                  ((r += t[e[n] >> 2]),
                  (r += t[((3 & e[n]) << 4) | (e[n + 1] >> 4)]),
                  (r += t[(15 & e[n + 1]) << 2]),
                  (r += '=')),
              r
            );
          });
      },
      87602: e => {
        'use strict';
        const t = {
          build(e) {
            function t(t, ...u) {
              return e[t.type](t, ...u);
            }
            function u() {}
            function n(e, ...u) {
              return t(e.expression, ...u);
            }
            function r(e) {
              return function(u, ...n) {
                u[e].forEach(e => t(e, ...n));
              };
            }
            const o = {
              grammar(e, ...u) {
                e.topLevelInitializer && t(e.topLevelInitializer, ...u),
                  e.initializer && t(e.initializer, ...u),
                  e.rules.forEach(e => t(e, ...u));
              },
              top_level_initializer: u,
              initializer: u,
              rule: n,
              named: n,
              choice: r('alternatives'),
              action: n,
              sequence: r('elements'),
              labeled: n,
              text: n,
              simple_and: n,
              simple_not: n,
              optional: n,
              zero_or_more: n,
              one_or_more: n,
              repeated: (e, ...u) => (e.delimiter && t(e.delimiter, ...u), t(e.expression, ...u)),
              group: n,
              semantic_and: u,
              semantic_not: u,
              rule_ref: u,
              literal: u,
              class: u,
              any: u,
            };
            return (
              Object.keys(o).forEach(t => {
                Object.prototype.hasOwnProperty.call(e, t) || (e[t] = o[t]);
              }),
              t
            );
          },
        };
        e.exports = t;
      },
      48256: (e, t, u) => {
        'use strict';
        const n = u(49002),
          r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (const u in t) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
            };
        class o extends Error {
          constructor(e, t, u) {
            super(e),
              r(this, o.prototype),
              (this.name = 'GrammarError'),
              (this.location = t),
              void 0 === u && (u = []),
              (this.diagnostics = u),
              (this.stage = null),
              (this.problems = [['error', e, t, u]]);
          }
          toString() {
            let e = super.toString();
            this.location &&
              ((e += '\n at '),
              void 0 !== this.location.source &&
                null !== this.location.source &&
                (e += `${this.location.source}:`),
              (e += `${this.location.start.line}:${this.location.start.column}`));
            for (const t of this.diagnostics)
              (e += '\n from '),
                void 0 !== t.location.source &&
                  null !== t.location.source &&
                  (e += `${t.location.source}:`),
                (e += `${t.location.start.line}:${t.location.start.column}: ${t.message}`);
            return e;
          }
          format(e) {
            const t = e.map(({ source: e, text: t }) => ({
              source: e,
              text: null != t ? String(t).split(/\r\n|\n|\r/g) : [],
            }));
            function u(e, u, r = '') {
              let o = '';
              const a = t.find(({ source: t }) => t === e.source),
                s = e.start,
                i = n.offsetStart(e);
              if (a) {
                const t = e.end,
                  n = a.text[s.line - 1],
                  c = (s.line === t.line ? t.column : n.length + 1) - s.column || 1;
                r && (o += `\nnote: ${r}`),
                  (o += `\n --\x3e ${e.source}:${i.line}:${i.column}\n${''.padEnd(
                    u,
                  )} |\n${i.line.toString().padStart(u)} | ${n}\n${''.padEnd(u)} | ${''.padEnd(
                    s.column - 1,
                  )}${''.padEnd(c, '^')}`);
              } else (o += `\n at ${e.source}:${i.line}:${i.column}`), r && (o += `: ${r}`);
              return o;
            }
            return this.problems
              .filter(e => 'info' !== e[0])
              .map(e =>
                (function(e, t, r, o = []) {
                  let a = -1 / 0;
                  (a = r
                    ? o.reduce(
                        (e, { location: t }) => Math.max(e, n.offsetStart(t).line),
                        r.start.line,
                      )
                    : Math.max.apply(
                        null,
                        o.map(e => e.location.start.line),
                      )),
                    (a = a.toString().length);
                  let s = `${e}: ${t}`;
                  r && (s += u(r, a));
                  for (const e of o) s += u(e.location, a, e.message);
                  return s;
                })(...e),
              )
              .join('\n\n');
          }
        }
        e.exports = o;
      },
      49002: e => {
        'use strict';
        e.exports = class {
          constructor(e, t) {
            (this.source = e), (this.start = t);
          }
          toString() {
            return String(this.source);
          }
          offset(e) {
            return {
              line: e.line + this.start.line - 1,
              column: 1 === e.line ? e.column + this.start.column - 1 : e.column,
              offset: e.offset + this.start.offset,
            };
          }
          static offsetStart(e) {
            return e.source && 'function' == typeof e.source.offset
              ? e.source.offset(e.start)
              : e.start;
          }
          static offsetEnd(e) {
            return e.source && 'function' == typeof e.source.offset
              ? e.source.offset(e.end)
              : e.end;
          }
        };
      },
      68189: e => {
        'use strict';
        const t = { $: 'text', '&': 'simple_and', '!': 'simple_not' },
          u = { '?': 'optional', '*': 'zero_or_more', '+': 'one_or_more' },
          n = { '&': 'semantic_and', '!': 'semantic_not' };
        function r(e, t, u, n) {
          var o = Error.call(this, e);
          return (
            Object.setPrototypeOf && Object.setPrototypeOf(o, r.prototype),
            (o.expected = t),
            (o.found = u),
            (o.location = n),
            (o.name = 'SyntaxError'),
            o
          );
        }
        function o(e, t, u) {
          return (
            (u = u || ' '), e.length > t ? e : ((t -= e.length), e + (u += u.repeat(t)).slice(0, t))
          );
        }
        !(function(e, t) {
          function u() {
            this.constructor = e;
          }
          (u.prototype = t.prototype), (e.prototype = new u());
        })(r, Error),
          (r.prototype.format = function(e) {
            var t = 'Error: ' + this.message;
            if (this.location) {
              var u,
                n = null;
              for (u = 0; u < e.length; u++)
                if (e[u].source === this.location.source) {
                  n = e[u].text.split(/\r\n|\n|\r/g);
                  break;
                }
              var r = this.location.start,
                a =
                  this.location.source && 'function' == typeof this.location.source.offset
                    ? this.location.source.offset(r)
                    : r,
                s = this.location.source + ':' + a.line + ':' + a.column;
              if (n) {
                var i = this.location.end,
                  c = o('', a.line.toString().length, ' '),
                  l = n[r.line - 1],
                  p = (r.line === i.line ? i.column : l.length + 1) - r.column || 1;
                t +=
                  '\n --\x3e ' +
                  s +
                  '\n' +
                  c +
                  ' |\n' +
                  a.line +
                  ' | ' +
                  l +
                  '\n' +
                  c +
                  ' | ' +
                  o('', r.column - 1, ' ') +
                  o('', p, '^');
              } else t += '\n at ' + s;
            }
            return t;
          }),
          (r.buildMessage = function(e, t) {
            var u = {
              literal: function(e) {
                return '"' + r(e.text) + '"';
              },
              class: function(e) {
                var t = e.parts.map(function(e) {
                  return Array.isArray(e) ? o(e[0]) + '-' + o(e[1]) : o(e);
                });
                return '[' + (e.inverted ? '^' : '') + t.join('') + ']';
              },
              any: function() {
                return 'any character';
              },
              end: function() {
                return 'end of input';
              },
              other: function(e) {
                return e.description;
              },
            };
            function n(e) {
              return e
                .charCodeAt(0)
                .toString(16)
                .toUpperCase();
            }
            function r(e) {
              return e
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function(e) {
                  return '\\x0' + n(e);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                  return '\\x' + n(e);
                });
            }
            function o(e) {
              return e
                .replace(/\\/g, '\\\\')
                .replace(/\]/g, '\\]')
                .replace(/\^/g, '\\^')
                .replace(/-/g, '\\-')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function(e) {
                  return '\\x0' + n(e);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                  return '\\x' + n(e);
                });
            }
            function a(e) {
              return u[e.type](e);
            }
            return (
              'Expected ' +
              (function(e) {
                var t,
                  u,
                  n = e.map(a);
                if ((n.sort(), n.length > 0)) {
                  for (t = 1, u = 1; t < n.length; t++) n[t - 1] !== n[t] && ((n[u] = n[t]), u++);
                  n.length = u;
                }
                switch (n.length) {
                  case 1:
                    return n[0];
                  case 2:
                    return n[0] + ' or ' + n[1];
                  default:
                    return n.slice(0, -1).join(', ') + ', or ' + n[n.length - 1];
                }
              })(e) +
              ' but ' +
              (function(e) {
                return e ? '"' + r(e) + '"' : 'end of input';
              })(t) +
              ' found.'
            );
          }),
          (e.exports = {
            SyntaxError: r,
            parse: function(e, o) {
              var a,
                s = {},
                i = (o = void 0 !== o ? o : {}).grammarSource,
                c = { Grammar: Ju },
                l = Ju,
                p = '{',
                A = '}',
                h = '=',
                E = '/',
                d = '@',
                f = ':',
                C = '$',
                g = '&',
                m = '!',
                F = '?',
                _ = '*',
                D = '+',
                B = '|',
                x = ',',
                v = '..',
                y = '(',
                b = ')',
                S = '\t',
                P = '\v',
                O = '\f',
                w = ' ',
                $ = ' ',
                R = '\ufeff',
                L = '\n',
                k = '\r\n',
                I = '\r',
                N = '\u2028',
                T = '\u2029',
                M = '/*',
                U = '*/',
                j = '//',
                H = '_',
                q = '\\',
                G = '‌',
                z = '‍',
                W = 'i',
                Y = '"',
                V = "'",
                J = '[',
                X = '^',
                Z = ']',
                Q = '-',
                K = '0',
                ee = 'b',
                te = 'f',
                ue = 'n',
                ne = 'r',
                re = 't',
                oe = 'v',
                ae = 'x',
                se = 'u',
                ie = '.',
                ce = ';',
                le = /^[\n\r\u2028\u2029]/,
                pe = /^[0-9]/,
                Ae = /^[0-9a-f]/i,
                he = /^[{}]/,
                Ee = /^[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137-\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148-\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C-\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA-\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9-\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC-\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF-\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F-\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0-\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB-\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE-\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6-\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FC7\u1FD0-\u1FD3\u1FD6-\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6-\u1FF7\u210A\u210E-\u210F\u2113\u212F\u2134\u2139\u213C-\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65-\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73-\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3-\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]/,
                de = /^[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5-\u06E6\u07F4-\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C-\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D-\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C-\uA69D\uA717-\uA71F\uA770\uA788\uA7F8-\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3-\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E-\uFF9F]/,
                fe = /^[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A-\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                Ce = /^[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]/,
                ge = /^[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178-\u0179\u017B\u017D\u0181-\u0182\u0184\u0186-\u0187\u0189-\u018B\u018E-\u0191\u0193-\u0194\u0196-\u0198\u019C-\u019D\u019F-\u01A0\u01A2\u01A4\u01A6-\u01A7\u01A9\u01AC\u01AE-\u01AF\u01B1-\u01B3\u01B5\u01B7-\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A-\u023B\u023D-\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9-\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0-\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E-\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D-\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]/,
                me = /^[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0982-\u0983\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0B02-\u0B03\u0B3E\u0B40\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82-\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0D02-\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82-\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2-\u0DF3\u0F3E-\u0F3F\u0F7F\u102B-\u102C\u1031\u1038\u103B-\u103C\u1056-\u1057\u1062-\u1064\u1067-\u106D\u1083-\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7-\u17C8\u1923-\u1926\u1929-\u192B\u1930-\u1931\u1933-\u1938\u1A19-\u1A1A\u1A55\u1A57\u1A61\u1A63-\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B82\u1BA1\u1BA6-\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1C24-\u1C2B\u1C34-\u1C35\u1CE1\u1CF2-\u1CF3\u302E-\u302F\uA823-\uA824\uA827\uA880-\uA881\uA8B4-\uA8C3\uA952-\uA953\uA983\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uAA2F-\uAA30\uAA33-\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE-\uAAEF\uAAF5\uABE3-\uABE4\uABE6-\uABE7\uABE9-\uABEA\uABEC]/,
                Fe = /^[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2-\u09E3\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62-\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC-\u0CCD\u0CE2-\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62-\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099-\u309A\uA66F\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/,
                _e = /^[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]/,
                De = /^[\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF]/,
                Be = /^[_\u203F-\u2040\u2054\uFE33-\uFE34\uFE4D-\uFE4F\uFF3F]/,
                xe = /^[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                ve = qu('{', !1),
                ye = qu('}', !1),
                be = qu('=', !1),
                Se = qu('/', !1),
                Pe = qu('@', !1),
                Oe = qu(':', !1),
                we = qu('$', !1),
                $e = qu('&', !1),
                Re = qu('!', !1),
                Le = qu('?', !1),
                ke = qu('*', !1),
                Ie = qu('+', !1),
                Ne = qu('|', !1),
                Te = qu(',', !1),
                Me = qu('..', !1),
                Ue = qu('(', !1),
                je = qu(')', !1),
                He = { type: 'any' },
                qe = zu('whitespace'),
                Ge = qu('\t', !1),
                ze = qu('\v', !1),
                We = qu('\f', !1),
                Ye = qu(' ', !1),
                Ve = qu(' ', !1),
                Je = qu('\ufeff', !1),
                Xe = Gu(['\n', '\r', '\u2028', '\u2029'], !1, !1),
                Ze = zu('end of line'),
                Qe = qu('\n', !1),
                Ke = qu('\r\n', !1),
                et = qu('\r', !1),
                tt = qu('\u2028', !1),
                ut = qu('\u2029', !1),
                nt = zu('comment'),
                rt = qu('/*', !1),
                ot = qu('*/', !1),
                at = qu('//', !1),
                st = zu('identifier'),
                it = qu('_', !1),
                ct = qu('\\', !1),
                lt = qu('‌', !1),
                pt = qu('‍', !1),
                At = zu('literal'),
                ht = qu('i', !1),
                Et = zu('string'),
                dt = qu('"', !1),
                ft = qu("'", !1),
                Ct = zu('character class'),
                gt = qu('[', !1),
                mt = qu('^', !1),
                Ft = qu(']', !1),
                _t = qu('-', !1),
                Dt = qu('0', !1),
                Bt = qu('b', !1),
                xt = qu('f', !1),
                vt = qu('n', !1),
                yt = qu('r', !1),
                bt = qu('t', !1),
                St = qu('v', !1),
                Pt = qu('x', !1),
                Ot = qu('u', !1),
                wt = Gu([['0', '9']], !1, !1),
                $t = Gu(
                  [
                    ['0', '9'],
                    ['a', 'f'],
                  ],
                  !1,
                  !0,
                ),
                Rt = qu('.', !1),
                Lt = zu('code block'),
                kt = Gu(['{', '}'], !1, !1),
                It = Gu(
                  [
                    ['a', 'z'],
                    'µ',
                    ['ß', 'ö'],
                    ['ø', 'ÿ'],
                    'ā',
                    'ă',
                    'ą',
                    'ć',
                    'ĉ',
                    'ċ',
                    'č',
                    'ď',
                    'đ',
                    'ē',
                    'ĕ',
                    'ė',
                    'ę',
                    'ě',
                    'ĝ',
                    'ğ',
                    'ġ',
                    'ģ',
                    'ĥ',
                    'ħ',
                    'ĩ',
                    'ī',
                    'ĭ',
                    'į',
                    'ı',
                    'ĳ',
                    'ĵ',
                    ['ķ', 'ĸ'],
                    'ĺ',
                    'ļ',
                    'ľ',
                    'ŀ',
                    'ł',
                    'ń',
                    'ņ',
                    ['ň', 'ŉ'],
                    'ŋ',
                    'ō',
                    'ŏ',
                    'ő',
                    'œ',
                    'ŕ',
                    'ŗ',
                    'ř',
                    'ś',
                    'ŝ',
                    'ş',
                    'š',
                    'ţ',
                    'ť',
                    'ŧ',
                    'ũ',
                    'ū',
                    'ŭ',
                    'ů',
                    'ű',
                    'ų',
                    'ŵ',
                    'ŷ',
                    'ź',
                    'ż',
                    ['ž', 'ƀ'],
                    'ƃ',
                    'ƅ',
                    'ƈ',
                    ['ƌ', 'ƍ'],
                    'ƒ',
                    'ƕ',
                    ['ƙ', 'ƛ'],
                    'ƞ',
                    'ơ',
                    'ƣ',
                    'ƥ',
                    'ƨ',
                    ['ƪ', 'ƫ'],
                    'ƭ',
                    'ư',
                    'ƴ',
                    'ƶ',
                    ['ƹ', 'ƺ'],
                    ['ƽ', 'ƿ'],
                    'ǆ',
                    'ǉ',
                    'ǌ',
                    'ǎ',
                    'ǐ',
                    'ǒ',
                    'ǔ',
                    'ǖ',
                    'ǘ',
                    'ǚ',
                    ['ǜ', 'ǝ'],
                    'ǟ',
                    'ǡ',
                    'ǣ',
                    'ǥ',
                    'ǧ',
                    'ǩ',
                    'ǫ',
                    'ǭ',
                    ['ǯ', 'ǰ'],
                    'ǳ',
                    'ǵ',
                    'ǹ',
                    'ǻ',
                    'ǽ',
                    'ǿ',
                    'ȁ',
                    'ȃ',
                    'ȅ',
                    'ȇ',
                    'ȉ',
                    'ȋ',
                    'ȍ',
                    'ȏ',
                    'ȑ',
                    'ȓ',
                    'ȕ',
                    'ȗ',
                    'ș',
                    'ț',
                    'ȝ',
                    'ȟ',
                    'ȡ',
                    'ȣ',
                    'ȥ',
                    'ȧ',
                    'ȩ',
                    'ȫ',
                    'ȭ',
                    'ȯ',
                    'ȱ',
                    ['ȳ', 'ȹ'],
                    'ȼ',
                    ['ȿ', 'ɀ'],
                    'ɂ',
                    'ɇ',
                    'ɉ',
                    'ɋ',
                    'ɍ',
                    ['ɏ', 'ʓ'],
                    ['ʕ', 'ʯ'],
                    'ͱ',
                    'ͳ',
                    'ͷ',
                    ['ͻ', 'ͽ'],
                    'ΐ',
                    ['ά', 'ώ'],
                    ['ϐ', 'ϑ'],
                    ['ϕ', 'ϗ'],
                    'ϙ',
                    'ϛ',
                    'ϝ',
                    'ϟ',
                    'ϡ',
                    'ϣ',
                    'ϥ',
                    'ϧ',
                    'ϩ',
                    'ϫ',
                    'ϭ',
                    ['ϯ', 'ϳ'],
                    'ϵ',
                    'ϸ',
                    ['ϻ', 'ϼ'],
                    ['а', 'џ'],
                    'ѡ',
                    'ѣ',
                    'ѥ',
                    'ѧ',
                    'ѩ',
                    'ѫ',
                    'ѭ',
                    'ѯ',
                    'ѱ',
                    'ѳ',
                    'ѵ',
                    'ѷ',
                    'ѹ',
                    'ѻ',
                    'ѽ',
                    'ѿ',
                    'ҁ',
                    'ҋ',
                    'ҍ',
                    'ҏ',
                    'ґ',
                    'ғ',
                    'ҕ',
                    'җ',
                    'ҙ',
                    'қ',
                    'ҝ',
                    'ҟ',
                    'ҡ',
                    'ң',
                    'ҥ',
                    'ҧ',
                    'ҩ',
                    'ҫ',
                    'ҭ',
                    'ү',
                    'ұ',
                    'ҳ',
                    'ҵ',
                    'ҷ',
                    'ҹ',
                    'һ',
                    'ҽ',
                    'ҿ',
                    'ӂ',
                    'ӄ',
                    'ӆ',
                    'ӈ',
                    'ӊ',
                    'ӌ',
                    ['ӎ', 'ӏ'],
                    'ӑ',
                    'ӓ',
                    'ӕ',
                    'ӗ',
                    'ә',
                    'ӛ',
                    'ӝ',
                    'ӟ',
                    'ӡ',
                    'ӣ',
                    'ӥ',
                    'ӧ',
                    'ө',
                    'ӫ',
                    'ӭ',
                    'ӯ',
                    'ӱ',
                    'ӳ',
                    'ӵ',
                    'ӷ',
                    'ӹ',
                    'ӻ',
                    'ӽ',
                    'ӿ',
                    'ԁ',
                    'ԃ',
                    'ԅ',
                    'ԇ',
                    'ԉ',
                    'ԋ',
                    'ԍ',
                    'ԏ',
                    'ԑ',
                    'ԓ',
                    'ԕ',
                    'ԗ',
                    'ԙ',
                    'ԛ',
                    'ԝ',
                    'ԟ',
                    'ԡ',
                    'ԣ',
                    'ԥ',
                    'ԧ',
                    'ԩ',
                    'ԫ',
                    'ԭ',
                    'ԯ',
                    ['ա', 'և'],
                    ['ᏸ', 'ᏽ'],
                    ['ᴀ', 'ᴫ'],
                    ['ᵫ', 'ᵷ'],
                    ['ᵹ', 'ᶚ'],
                    'ḁ',
                    'ḃ',
                    'ḅ',
                    'ḇ',
                    'ḉ',
                    'ḋ',
                    'ḍ',
                    'ḏ',
                    'ḑ',
                    'ḓ',
                    'ḕ',
                    'ḗ',
                    'ḙ',
                    'ḛ',
                    'ḝ',
                    'ḟ',
                    'ḡ',
                    'ḣ',
                    'ḥ',
                    'ḧ',
                    'ḩ',
                    'ḫ',
                    'ḭ',
                    'ḯ',
                    'ḱ',
                    'ḳ',
                    'ḵ',
                    'ḷ',
                    'ḹ',
                    'ḻ',
                    'ḽ',
                    'ḿ',
                    'ṁ',
                    'ṃ',
                    'ṅ',
                    'ṇ',
                    'ṉ',
                    'ṋ',
                    'ṍ',
                    'ṏ',
                    'ṑ',
                    'ṓ',
                    'ṕ',
                    'ṗ',
                    'ṙ',
                    'ṛ',
                    'ṝ',
                    'ṟ',
                    'ṡ',
                    'ṣ',
                    'ṥ',
                    'ṧ',
                    'ṩ',
                    'ṫ',
                    'ṭ',
                    'ṯ',
                    'ṱ',
                    'ṳ',
                    'ṵ',
                    'ṷ',
                    'ṹ',
                    'ṻ',
                    'ṽ',
                    'ṿ',
                    'ẁ',
                    'ẃ',
                    'ẅ',
                    'ẇ',
                    'ẉ',
                    'ẋ',
                    'ẍ',
                    'ẏ',
                    'ẑ',
                    'ẓ',
                    ['ẕ', 'ẝ'],
                    'ẟ',
                    'ạ',
                    'ả',
                    'ấ',
                    'ầ',
                    'ẩ',
                    'ẫ',
                    'ậ',
                    'ắ',
                    'ằ',
                    'ẳ',
                    'ẵ',
                    'ặ',
                    'ẹ',
                    'ẻ',
                    'ẽ',
                    'ế',
                    'ề',
                    'ể',
                    'ễ',
                    'ệ',
                    'ỉ',
                    'ị',
                    'ọ',
                    'ỏ',
                    'ố',
                    'ồ',
                    'ổ',
                    'ỗ',
                    'ộ',
                    'ớ',
                    'ờ',
                    'ở',
                    'ỡ',
                    'ợ',
                    'ụ',
                    'ủ',
                    'ứ',
                    'ừ',
                    'ử',
                    'ữ',
                    'ự',
                    'ỳ',
                    'ỵ',
                    'ỷ',
                    'ỹ',
                    'ỻ',
                    'ỽ',
                    ['ỿ', 'ἇ'],
                    ['ἐ', 'ἕ'],
                    ['ἠ', 'ἧ'],
                    ['ἰ', 'ἷ'],
                    ['ὀ', 'ὅ'],
                    ['ὐ', 'ὗ'],
                    ['ὠ', 'ὧ'],
                    ['ὰ', 'ώ'],
                    ['ᾀ', 'ᾇ'],
                    ['ᾐ', 'ᾗ'],
                    ['ᾠ', 'ᾧ'],
                    ['ᾰ', 'ᾴ'],
                    ['ᾶ', 'ᾷ'],
                    'ι',
                    ['ῂ', 'ῄ'],
                    ['ῆ', 'ῇ'],
                    ['ῐ', 'ΐ'],
                    ['ῖ', 'ῗ'],
                    ['ῠ', 'ῧ'],
                    ['ῲ', 'ῴ'],
                    ['ῶ', 'ῷ'],
                    'ℊ',
                    ['ℎ', 'ℏ'],
                    'ℓ',
                    'ℯ',
                    'ℴ',
                    'ℹ',
                    ['ℼ', 'ℽ'],
                    ['ⅆ', 'ⅉ'],
                    'ⅎ',
                    'ↄ',
                    ['ⰰ', 'ⱞ'],
                    'ⱡ',
                    ['ⱥ', 'ⱦ'],
                    'ⱨ',
                    'ⱪ',
                    'ⱬ',
                    'ⱱ',
                    ['ⱳ', 'ⱴ'],
                    ['ⱶ', 'ⱻ'],
                    'ⲁ',
                    'ⲃ',
                    'ⲅ',
                    'ⲇ',
                    'ⲉ',
                    'ⲋ',
                    'ⲍ',
                    'ⲏ',
                    'ⲑ',
                    'ⲓ',
                    'ⲕ',
                    'ⲗ',
                    'ⲙ',
                    'ⲛ',
                    'ⲝ',
                    'ⲟ',
                    'ⲡ',
                    'ⲣ',
                    'ⲥ',
                    'ⲧ',
                    'ⲩ',
                    'ⲫ',
                    'ⲭ',
                    'ⲯ',
                    'ⲱ',
                    'ⲳ',
                    'ⲵ',
                    'ⲷ',
                    'ⲹ',
                    'ⲻ',
                    'ⲽ',
                    'ⲿ',
                    'ⳁ',
                    'ⳃ',
                    'ⳅ',
                    'ⳇ',
                    'ⳉ',
                    'ⳋ',
                    'ⳍ',
                    'ⳏ',
                    'ⳑ',
                    'ⳓ',
                    'ⳕ',
                    'ⳗ',
                    'ⳙ',
                    'ⳛ',
                    'ⳝ',
                    'ⳟ',
                    'ⳡ',
                    ['ⳣ', 'ⳤ'],
                    'ⳬ',
                    'ⳮ',
                    'ⳳ',
                    ['ⴀ', 'ⴥ'],
                    'ⴧ',
                    'ⴭ',
                    'ꙁ',
                    'ꙃ',
                    'ꙅ',
                    'ꙇ',
                    'ꙉ',
                    'ꙋ',
                    'ꙍ',
                    'ꙏ',
                    'ꙑ',
                    'ꙓ',
                    'ꙕ',
                    'ꙗ',
                    'ꙙ',
                    'ꙛ',
                    'ꙝ',
                    'ꙟ',
                    'ꙡ',
                    'ꙣ',
                    'ꙥ',
                    'ꙧ',
                    'ꙩ',
                    'ꙫ',
                    'ꙭ',
                    'ꚁ',
                    'ꚃ',
                    'ꚅ',
                    'ꚇ',
                    'ꚉ',
                    'ꚋ',
                    'ꚍ',
                    'ꚏ',
                    'ꚑ',
                    'ꚓ',
                    'ꚕ',
                    'ꚗ',
                    'ꚙ',
                    'ꚛ',
                    'ꜣ',
                    'ꜥ',
                    'ꜧ',
                    'ꜩ',
                    'ꜫ',
                    'ꜭ',
                    ['ꜯ', 'ꜱ'],
                    'ꜳ',
                    'ꜵ',
                    'ꜷ',
                    'ꜹ',
                    'ꜻ',
                    'ꜽ',
                    'ꜿ',
                    'ꝁ',
                    'ꝃ',
                    'ꝅ',
                    'ꝇ',
                    'ꝉ',
                    'ꝋ',
                    'ꝍ',
                    'ꝏ',
                    'ꝑ',
                    'ꝓ',
                    'ꝕ',
                    'ꝗ',
                    'ꝙ',
                    'ꝛ',
                    'ꝝ',
                    'ꝟ',
                    'ꝡ',
                    'ꝣ',
                    'ꝥ',
                    'ꝧ',
                    'ꝩ',
                    'ꝫ',
                    'ꝭ',
                    'ꝯ',
                    ['ꝱ', 'ꝸ'],
                    'ꝺ',
                    'ꝼ',
                    'ꝿ',
                    'ꞁ',
                    'ꞃ',
                    'ꞅ',
                    'ꞇ',
                    'ꞌ',
                    'ꞎ',
                    'ꞑ',
                    ['ꞓ', 'ꞕ'],
                    'ꞗ',
                    'ꞙ',
                    'ꞛ',
                    'ꞝ',
                    'ꞟ',
                    'ꞡ',
                    'ꞣ',
                    'ꞥ',
                    'ꞧ',
                    'ꞩ',
                    'ꞵ',
                    'ꞷ',
                    'ꟺ',
                    ['ꬰ', 'ꭚ'],
                    ['ꭠ', 'ꭥ'],
                    ['ꭰ', 'ꮿ'],
                    ['ﬀ', 'ﬆ'],
                    ['ﬓ', 'ﬗ'],
                    ['ａ', 'ｚ'],
                  ],
                  !1,
                  !1,
                ),
                Nt = Gu(
                  [
                    ['ʰ', 'ˁ'],
                    ['ˆ', 'ˑ'],
                    ['ˠ', 'ˤ'],
                    'ˬ',
                    'ˮ',
                    'ʹ',
                    'ͺ',
                    'ՙ',
                    'ـ',
                    ['ۥ', 'ۦ'],
                    ['ߴ', 'ߵ'],
                    'ߺ',
                    'ࠚ',
                    'ࠤ',
                    'ࠨ',
                    'ॱ',
                    'ๆ',
                    'ໆ',
                    'ჼ',
                    'ៗ',
                    'ᡃ',
                    'ᪧ',
                    ['ᱸ', 'ᱽ'],
                    ['ᴬ', 'ᵪ'],
                    'ᵸ',
                    ['ᶛ', 'ᶿ'],
                    'ⁱ',
                    'ⁿ',
                    ['ₐ', 'ₜ'],
                    ['ⱼ', 'ⱽ'],
                    'ⵯ',
                    'ⸯ',
                    '々',
                    ['〱', '〵'],
                    '〻',
                    ['ゝ', 'ゞ'],
                    ['ー', 'ヾ'],
                    'ꀕ',
                    ['ꓸ', 'ꓽ'],
                    'ꘌ',
                    'ꙿ',
                    ['ꚜ', 'ꚝ'],
                    ['ꜗ', 'ꜟ'],
                    'ꝰ',
                    'ꞈ',
                    ['ꟸ', 'ꟹ'],
                    'ꧏ',
                    'ꧦ',
                    'ꩰ',
                    'ꫝ',
                    ['ꫳ', 'ꫴ'],
                    ['ꭜ', 'ꭟ'],
                    'ｰ',
                    ['ﾞ', 'ﾟ'],
                  ],
                  !1,
                  !1,
                ),
                Tt = Gu(
                  [
                    'ª',
                    'º',
                    'ƻ',
                    ['ǀ', 'ǃ'],
                    'ʔ',
                    ['א', 'ת'],
                    ['װ', 'ײ'],
                    ['ؠ', 'ؿ'],
                    ['ف', 'ي'],
                    ['ٮ', 'ٯ'],
                    ['ٱ', 'ۓ'],
                    'ە',
                    ['ۮ', 'ۯ'],
                    ['ۺ', 'ۼ'],
                    'ۿ',
                    'ܐ',
                    ['ܒ', 'ܯ'],
                    ['ݍ', 'ޥ'],
                    'ޱ',
                    ['ߊ', 'ߪ'],
                    ['ࠀ', 'ࠕ'],
                    ['ࡀ', 'ࡘ'],
                    ['ࢠ', 'ࢴ'],
                    ['ऄ', 'ह'],
                    'ऽ',
                    'ॐ',
                    ['क़', 'ॡ'],
                    ['ॲ', 'ঀ'],
                    ['অ', 'ঌ'],
                    ['এ', 'ঐ'],
                    ['ও', 'ন'],
                    ['প', 'র'],
                    'ল',
                    ['শ', 'হ'],
                    'ঽ',
                    'ৎ',
                    ['ড়', 'ঢ়'],
                    ['য়', 'ৡ'],
                    ['ৰ', 'ৱ'],
                    ['ਅ', 'ਊ'],
                    ['ਏ', 'ਐ'],
                    ['ਓ', 'ਨ'],
                    ['ਪ', 'ਰ'],
                    ['ਲ', 'ਲ਼'],
                    ['ਵ', 'ਸ਼'],
                    ['ਸ', 'ਹ'],
                    ['ਖ਼', 'ੜ'],
                    'ਫ਼',
                    ['ੲ', 'ੴ'],
                    ['અ', 'ઍ'],
                    ['એ', 'ઑ'],
                    ['ઓ', 'ન'],
                    ['પ', 'ર'],
                    ['લ', 'ળ'],
                    ['વ', 'હ'],
                    'ઽ',
                    'ૐ',
                    ['ૠ', 'ૡ'],
                    'ૹ',
                    ['ଅ', 'ଌ'],
                    ['ଏ', 'ଐ'],
                    ['ଓ', 'ନ'],
                    ['ପ', 'ର'],
                    ['ଲ', 'ଳ'],
                    ['ଵ', 'ହ'],
                    'ଽ',
                    ['ଡ଼', 'ଢ଼'],
                    ['ୟ', 'ୡ'],
                    'ୱ',
                    'ஃ',
                    ['அ', 'ஊ'],
                    ['எ', 'ஐ'],
                    ['ஒ', 'க'],
                    ['ங', 'ச'],
                    'ஜ',
                    ['ஞ', 'ட'],
                    ['ண', 'த'],
                    ['ந', 'ப'],
                    ['ம', 'ஹ'],
                    'ௐ',
                    ['అ', 'ఌ'],
                    ['ఎ', 'ఐ'],
                    ['ఒ', 'న'],
                    ['ప', 'హ'],
                    'ఽ',
                    ['ౘ', 'ౚ'],
                    ['ౠ', 'ౡ'],
                    ['ಅ', 'ಌ'],
                    ['ಎ', 'ಐ'],
                    ['ಒ', 'ನ'],
                    ['ಪ', 'ಳ'],
                    ['ವ', 'ಹ'],
                    'ಽ',
                    'ೞ',
                    ['ೠ', 'ೡ'],
                    ['ೱ', 'ೲ'],
                    ['അ', 'ഌ'],
                    ['എ', 'ഐ'],
                    ['ഒ', 'ഺ'],
                    'ഽ',
                    'ൎ',
                    ['ൟ', 'ൡ'],
                    ['ൺ', 'ൿ'],
                    ['අ', 'ඖ'],
                    ['ක', 'න'],
                    ['ඳ', 'ර'],
                    'ල',
                    ['ව', 'ෆ'],
                    ['ก', 'ะ'],
                    ['า', 'ำ'],
                    ['เ', 'ๅ'],
                    ['ກ', 'ຂ'],
                    'ຄ',
                    ['ງ', 'ຈ'],
                    'ຊ',
                    'ຍ',
                    ['ດ', 'ທ'],
                    ['ນ', 'ຟ'],
                    ['ມ', 'ຣ'],
                    'ລ',
                    'ວ',
                    ['ສ', 'ຫ'],
                    ['ອ', 'ະ'],
                    ['າ', 'ຳ'],
                    'ຽ',
                    ['ເ', 'ໄ'],
                    ['ໜ', 'ໟ'],
                    'ༀ',
                    ['ཀ', 'ཇ'],
                    ['ཉ', 'ཬ'],
                    ['ྈ', 'ྌ'],
                    ['က', 'ဪ'],
                    'ဿ',
                    ['ၐ', 'ၕ'],
                    ['ၚ', 'ၝ'],
                    'ၡ',
                    ['ၥ', 'ၦ'],
                    ['ၮ', 'ၰ'],
                    ['ၵ', 'ႁ'],
                    'ႎ',
                    ['ა', 'ჺ'],
                    ['ჽ', 'ቈ'],
                    ['ቊ', 'ቍ'],
                    ['ቐ', 'ቖ'],
                    'ቘ',
                    ['ቚ', 'ቝ'],
                    ['በ', 'ኈ'],
                    ['ኊ', 'ኍ'],
                    ['ነ', 'ኰ'],
                    ['ኲ', 'ኵ'],
                    ['ኸ', 'ኾ'],
                    'ዀ',
                    ['ዂ', 'ዅ'],
                    ['ወ', 'ዖ'],
                    ['ዘ', 'ጐ'],
                    ['ጒ', 'ጕ'],
                    ['ጘ', 'ፚ'],
                    ['ᎀ', 'ᎏ'],
                    ['ᐁ', 'ᙬ'],
                    ['ᙯ', 'ᙿ'],
                    ['ᚁ', 'ᚚ'],
                    ['ᚠ', 'ᛪ'],
                    ['ᛱ', 'ᛸ'],
                    ['ᜀ', 'ᜌ'],
                    ['ᜎ', 'ᜑ'],
                    ['ᜠ', 'ᜱ'],
                    ['ᝀ', 'ᝑ'],
                    ['ᝠ', 'ᝬ'],
                    ['ᝮ', 'ᝰ'],
                    ['ក', 'ឳ'],
                    'ៜ',
                    ['ᠠ', 'ᡂ'],
                    ['ᡄ', 'ᡷ'],
                    ['ᢀ', 'ᢨ'],
                    'ᢪ',
                    ['ᢰ', 'ᣵ'],
                    ['ᤀ', 'ᤞ'],
                    ['ᥐ', 'ᥭ'],
                    ['ᥰ', 'ᥴ'],
                    ['ᦀ', 'ᦫ'],
                    ['ᦰ', 'ᧉ'],
                    ['ᨀ', 'ᨖ'],
                    ['ᨠ', 'ᩔ'],
                    ['ᬅ', 'ᬳ'],
                    ['ᭅ', 'ᭋ'],
                    ['ᮃ', 'ᮠ'],
                    ['ᮮ', 'ᮯ'],
                    ['ᮺ', 'ᯥ'],
                    ['ᰀ', 'ᰣ'],
                    ['ᱍ', 'ᱏ'],
                    ['ᱚ', 'ᱷ'],
                    ['ᳩ', 'ᳬ'],
                    ['ᳮ', 'ᳱ'],
                    ['ᳵ', 'ᳶ'],
                    ['ℵ', 'ℸ'],
                    ['ⴰ', 'ⵧ'],
                    ['ⶀ', 'ⶖ'],
                    ['ⶠ', 'ⶦ'],
                    ['ⶨ', 'ⶮ'],
                    ['ⶰ', 'ⶶ'],
                    ['ⶸ', 'ⶾ'],
                    ['ⷀ', 'ⷆ'],
                    ['ⷈ', 'ⷎ'],
                    ['ⷐ', 'ⷖ'],
                    ['ⷘ', 'ⷞ'],
                    '〆',
                    '〼',
                    ['ぁ', 'ゖ'],
                    'ゟ',
                    ['ァ', 'ヺ'],
                    'ヿ',
                    ['ㄅ', 'ㄭ'],
                    ['ㄱ', 'ㆎ'],
                    ['ㆠ', 'ㆺ'],
                    ['ㇰ', 'ㇿ'],
                    ['㐀', '䶵'],
                    ['一', '鿕'],
                    ['ꀀ', 'ꀔ'],
                    ['ꀖ', 'ꒌ'],
                    ['ꓐ', 'ꓷ'],
                    ['ꔀ', 'ꘋ'],
                    ['ꘐ', 'ꘟ'],
                    ['ꘪ', 'ꘫ'],
                    'ꙮ',
                    ['ꚠ', 'ꛥ'],
                    'ꞏ',
                    'ꟷ',
                    ['ꟻ', 'ꠁ'],
                    ['ꠃ', 'ꠅ'],
                    ['ꠇ', 'ꠊ'],
                    ['ꠌ', 'ꠢ'],
                    ['ꡀ', 'ꡳ'],
                    ['ꢂ', 'ꢳ'],
                    ['ꣲ', 'ꣷ'],
                    'ꣻ',
                    'ꣽ',
                    ['ꤊ', 'ꤥ'],
                    ['ꤰ', 'ꥆ'],
                    ['ꥠ', 'ꥼ'],
                    ['ꦄ', 'ꦲ'],
                    ['ꧠ', 'ꧤ'],
                    ['ꧧ', 'ꧯ'],
                    ['ꧺ', 'ꧾ'],
                    ['ꨀ', 'ꨨ'],
                    ['ꩀ', 'ꩂ'],
                    ['ꩄ', 'ꩋ'],
                    ['ꩠ', 'ꩯ'],
                    ['ꩱ', 'ꩶ'],
                    'ꩺ',
                    ['ꩾ', 'ꪯ'],
                    'ꪱ',
                    ['ꪵ', 'ꪶ'],
                    ['ꪹ', 'ꪽ'],
                    'ꫀ',
                    'ꫂ',
                    ['ꫛ', 'ꫜ'],
                    ['ꫠ', 'ꫪ'],
                    'ꫲ',
                    ['ꬁ', 'ꬆ'],
                    ['ꬉ', 'ꬎ'],
                    ['ꬑ', 'ꬖ'],
                    ['ꬠ', 'ꬦ'],
                    ['ꬨ', 'ꬮ'],
                    ['ꯀ', 'ꯢ'],
                    ['가', '힣'],
                    ['ힰ', 'ퟆ'],
                    ['ퟋ', 'ퟻ'],
                    ['豈', '舘'],
                    ['並', '龎'],
                    'יִ',
                    ['ײַ', 'ﬨ'],
                    ['שׁ', 'זּ'],
                    ['טּ', 'לּ'],
                    'מּ',
                    ['נּ', 'סּ'],
                    ['ףּ', 'פּ'],
                    ['צּ', 'ﮱ'],
                    ['ﯓ', 'ﴽ'],
                    ['ﵐ', 'ﶏ'],
                    ['ﶒ', 'ﷇ'],
                    ['ﷰ', 'ﷻ'],
                    ['ﹰ', 'ﹴ'],
                    ['ﹶ', 'ﻼ'],
                    ['ｦ', 'ｯ'],
                    ['ｱ', 'ﾝ'],
                    ['ﾠ', 'ﾾ'],
                    ['ￂ', 'ￇ'],
                    ['ￊ', 'ￏ'],
                    ['ￒ', 'ￗ'],
                    ['ￚ', 'ￜ'],
                  ],
                  !1,
                  !1,
                ),
                Mt = Gu(
                  ['ǅ', 'ǈ', 'ǋ', 'ǲ', ['ᾈ', 'ᾏ'], ['ᾘ', 'ᾟ'], ['ᾨ', 'ᾯ'], 'ᾼ', 'ῌ', 'ῼ'],
                  !1,
                  !1,
                ),
                Ut = Gu(
                  [
                    ['A', 'Z'],
                    ['À', 'Ö'],
                    ['Ø', 'Þ'],
                    'Ā',
                    'Ă',
                    'Ą',
                    'Ć',
                    'Ĉ',
                    'Ċ',
                    'Č',
                    'Ď',
                    'Đ',
                    'Ē',
                    'Ĕ',
                    'Ė',
                    'Ę',
                    'Ě',
                    'Ĝ',
                    'Ğ',
                    'Ġ',
                    'Ģ',
                    'Ĥ',
                    'Ħ',
                    'Ĩ',
                    'Ī',
                    'Ĭ',
                    'Į',
                    'İ',
                    'Ĳ',
                    'Ĵ',
                    'Ķ',
                    'Ĺ',
                    'Ļ',
                    'Ľ',
                    'Ŀ',
                    'Ł',
                    'Ń',
                    'Ņ',
                    'Ň',
                    'Ŋ',
                    'Ō',
                    'Ŏ',
                    'Ő',
                    'Œ',
                    'Ŕ',
                    'Ŗ',
                    'Ř',
                    'Ś',
                    'Ŝ',
                    'Ş',
                    'Š',
                    'Ţ',
                    'Ť',
                    'Ŧ',
                    'Ũ',
                    'Ū',
                    'Ŭ',
                    'Ů',
                    'Ű',
                    'Ų',
                    'Ŵ',
                    'Ŷ',
                    ['Ÿ', 'Ź'],
                    'Ż',
                    'Ž',
                    ['Ɓ', 'Ƃ'],
                    'Ƅ',
                    ['Ɔ', 'Ƈ'],
                    ['Ɖ', 'Ƌ'],
                    ['Ǝ', 'Ƒ'],
                    ['Ɠ', 'Ɣ'],
                    ['Ɩ', 'Ƙ'],
                    ['Ɯ', 'Ɲ'],
                    ['Ɵ', 'Ơ'],
                    'Ƣ',
                    'Ƥ',
                    ['Ʀ', 'Ƨ'],
                    'Ʃ',
                    'Ƭ',
                    ['Ʈ', 'Ư'],
                    ['Ʊ', 'Ƴ'],
                    'Ƶ',
                    ['Ʒ', 'Ƹ'],
                    'Ƽ',
                    'Ǆ',
                    'Ǉ',
                    'Ǌ',
                    'Ǎ',
                    'Ǐ',
                    'Ǒ',
                    'Ǔ',
                    'Ǖ',
                    'Ǘ',
                    'Ǚ',
                    'Ǜ',
                    'Ǟ',
                    'Ǡ',
                    'Ǣ',
                    'Ǥ',
                    'Ǧ',
                    'Ǩ',
                    'Ǫ',
                    'Ǭ',
                    'Ǯ',
                    'Ǳ',
                    'Ǵ',
                    ['Ƕ', 'Ǹ'],
                    'Ǻ',
                    'Ǽ',
                    'Ǿ',
                    'Ȁ',
                    'Ȃ',
                    'Ȅ',
                    'Ȇ',
                    'Ȉ',
                    'Ȋ',
                    'Ȍ',
                    'Ȏ',
                    'Ȑ',
                    'Ȓ',
                    'Ȕ',
                    'Ȗ',
                    'Ș',
                    'Ț',
                    'Ȝ',
                    'Ȟ',
                    'Ƞ',
                    'Ȣ',
                    'Ȥ',
                    'Ȧ',
                    'Ȩ',
                    'Ȫ',
                    'Ȭ',
                    'Ȯ',
                    'Ȱ',
                    'Ȳ',
                    ['Ⱥ', 'Ȼ'],
                    ['Ƚ', 'Ⱦ'],
                    'Ɂ',
                    ['Ƀ', 'Ɇ'],
                    'Ɉ',
                    'Ɋ',
                    'Ɍ',
                    'Ɏ',
                    'Ͱ',
                    'Ͳ',
                    'Ͷ',
                    'Ϳ',
                    'Ά',
                    ['Έ', 'Ί'],
                    'Ό',
                    ['Ύ', 'Ώ'],
                    ['Α', 'Ρ'],
                    ['Σ', 'Ϋ'],
                    'Ϗ',
                    ['ϒ', 'ϔ'],
                    'Ϙ',
                    'Ϛ',
                    'Ϝ',
                    'Ϟ',
                    'Ϡ',
                    'Ϣ',
                    'Ϥ',
                    'Ϧ',
                    'Ϩ',
                    'Ϫ',
                    'Ϭ',
                    'Ϯ',
                    'ϴ',
                    'Ϸ',
                    ['Ϲ', 'Ϻ'],
                    ['Ͻ', 'Я'],
                    'Ѡ',
                    'Ѣ',
                    'Ѥ',
                    'Ѧ',
                    'Ѩ',
                    'Ѫ',
                    'Ѭ',
                    'Ѯ',
                    'Ѱ',
                    'Ѳ',
                    'Ѵ',
                    'Ѷ',
                    'Ѹ',
                    'Ѻ',
                    'Ѽ',
                    'Ѿ',
                    'Ҁ',
                    'Ҋ',
                    'Ҍ',
                    'Ҏ',
                    'Ґ',
                    'Ғ',
                    'Ҕ',
                    'Җ',
                    'Ҙ',
                    'Қ',
                    'Ҝ',
                    'Ҟ',
                    'Ҡ',
                    'Ң',
                    'Ҥ',
                    'Ҧ',
                    'Ҩ',
                    'Ҫ',
                    'Ҭ',
                    'Ү',
                    'Ұ',
                    'Ҳ',
                    'Ҵ',
                    'Ҷ',
                    'Ҹ',
                    'Һ',
                    'Ҽ',
                    'Ҿ',
                    ['Ӏ', 'Ӂ'],
                    'Ӄ',
                    'Ӆ',
                    'Ӈ',
                    'Ӊ',
                    'Ӌ',
                    'Ӎ',
                    'Ӑ',
                    'Ӓ',
                    'Ӕ',
                    'Ӗ',
                    'Ә',
                    'Ӛ',
                    'Ӝ',
                    'Ӟ',
                    'Ӡ',
                    'Ӣ',
                    'Ӥ',
                    'Ӧ',
                    'Ө',
                    'Ӫ',
                    'Ӭ',
                    'Ӯ',
                    'Ӱ',
                    'Ӳ',
                    'Ӵ',
                    'Ӷ',
                    'Ӹ',
                    'Ӻ',
                    'Ӽ',
                    'Ӿ',
                    'Ԁ',
                    'Ԃ',
                    'Ԅ',
                    'Ԇ',
                    'Ԉ',
                    'Ԋ',
                    'Ԍ',
                    'Ԏ',
                    'Ԑ',
                    'Ԓ',
                    'Ԕ',
                    'Ԗ',
                    'Ԙ',
                    'Ԛ',
                    'Ԝ',
                    'Ԟ',
                    'Ԡ',
                    'Ԣ',
                    'Ԥ',
                    'Ԧ',
                    'Ԩ',
                    'Ԫ',
                    'Ԭ',
                    'Ԯ',
                    ['Ա', 'Ֆ'],
                    ['Ⴀ', 'Ⴥ'],
                    'Ⴧ',
                    'Ⴭ',
                    ['Ꭰ', 'Ᏽ'],
                    'Ḁ',
                    'Ḃ',
                    'Ḅ',
                    'Ḇ',
                    'Ḉ',
                    'Ḋ',
                    'Ḍ',
                    'Ḏ',
                    'Ḑ',
                    'Ḓ',
                    'Ḕ',
                    'Ḗ',
                    'Ḙ',
                    'Ḛ',
                    'Ḝ',
                    'Ḟ',
                    'Ḡ',
                    'Ḣ',
                    'Ḥ',
                    'Ḧ',
                    'Ḩ',
                    'Ḫ',
                    'Ḭ',
                    'Ḯ',
                    'Ḱ',
                    'Ḳ',
                    'Ḵ',
                    'Ḷ',
                    'Ḹ',
                    'Ḻ',
                    'Ḽ',
                    'Ḿ',
                    'Ṁ',
                    'Ṃ',
                    'Ṅ',
                    'Ṇ',
                    'Ṉ',
                    'Ṋ',
                    'Ṍ',
                    'Ṏ',
                    'Ṑ',
                    'Ṓ',
                    'Ṕ',
                    'Ṗ',
                    'Ṙ',
                    'Ṛ',
                    'Ṝ',
                    'Ṟ',
                    'Ṡ',
                    'Ṣ',
                    'Ṥ',
                    'Ṧ',
                    'Ṩ',
                    'Ṫ',
                    'Ṭ',
                    'Ṯ',
                    'Ṱ',
                    'Ṳ',
                    'Ṵ',
                    'Ṷ',
                    'Ṹ',
                    'Ṻ',
                    'Ṽ',
                    'Ṿ',
                    'Ẁ',
                    'Ẃ',
                    'Ẅ',
                    'Ẇ',
                    'Ẉ',
                    'Ẋ',
                    'Ẍ',
                    'Ẏ',
                    'Ẑ',
                    'Ẓ',
                    'Ẕ',
                    'ẞ',
                    'Ạ',
                    'Ả',
                    'Ấ',
                    'Ầ',
                    'Ẩ',
                    'Ẫ',
                    'Ậ',
                    'Ắ',
                    'Ằ',
                    'Ẳ',
                    'Ẵ',
                    'Ặ',
                    'Ẹ',
                    'Ẻ',
                    'Ẽ',
                    'Ế',
                    'Ề',
                    'Ể',
                    'Ễ',
                    'Ệ',
                    'Ỉ',
                    'Ị',
                    'Ọ',
                    'Ỏ',
                    'Ố',
                    'Ồ',
                    'Ổ',
                    'Ỗ',
                    'Ộ',
                    'Ớ',
                    'Ờ',
                    'Ở',
                    'Ỡ',
                    'Ợ',
                    'Ụ',
                    'Ủ',
                    'Ứ',
                    'Ừ',
                    'Ử',
                    'Ữ',
                    'Ự',
                    'Ỳ',
                    'Ỵ',
                    'Ỷ',
                    'Ỹ',
                    'Ỻ',
                    'Ỽ',
                    'Ỿ',
                    ['Ἀ', 'Ἇ'],
                    ['Ἐ', 'Ἕ'],
                    ['Ἠ', 'Ἧ'],
                    ['Ἰ', 'Ἷ'],
                    ['Ὀ', 'Ὅ'],
                    'Ὑ',
                    'Ὓ',
                    'Ὕ',
                    'Ὗ',
                    ['Ὠ', 'Ὧ'],
                    ['Ᾰ', 'Ά'],
                    ['Ὲ', 'Ή'],
                    ['Ῐ', 'Ί'],
                    ['Ῠ', 'Ῥ'],
                    ['Ὸ', 'Ώ'],
                    'ℂ',
                    'ℇ',
                    ['ℋ', 'ℍ'],
                    ['ℐ', 'ℒ'],
                    'ℕ',
                    ['ℙ', 'ℝ'],
                    'ℤ',
                    'Ω',
                    'ℨ',
                    ['K', 'ℭ'],
                    ['ℰ', 'ℳ'],
                    ['ℾ', 'ℿ'],
                    'ⅅ',
                    'Ↄ',
                    ['Ⰰ', 'Ⱞ'],
                    'Ⱡ',
                    ['Ɫ', 'Ɽ'],
                    'Ⱨ',
                    'Ⱪ',
                    'Ⱬ',
                    ['Ɑ', 'Ɒ'],
                    'Ⱳ',
                    'Ⱶ',
                    ['Ȿ', 'Ⲁ'],
                    'Ⲃ',
                    'Ⲅ',
                    'Ⲇ',
                    'Ⲉ',
                    'Ⲋ',
                    'Ⲍ',
                    'Ⲏ',
                    'Ⲑ',
                    'Ⲓ',
                    'Ⲕ',
                    'Ⲗ',
                    'Ⲙ',
                    'Ⲛ',
                    'Ⲝ',
                    'Ⲟ',
                    'Ⲡ',
                    'Ⲣ',
                    'Ⲥ',
                    'Ⲧ',
                    'Ⲩ',
                    'Ⲫ',
                    'Ⲭ',
                    'Ⲯ',
                    'Ⲱ',
                    'Ⲳ',
                    'Ⲵ',
                    'Ⲷ',
                    'Ⲹ',
                    'Ⲻ',
                    'Ⲽ',
                    'Ⲿ',
                    'Ⳁ',
                    'Ⳃ',
                    'Ⳅ',
                    'Ⳇ',
                    'Ⳉ',
                    'Ⳋ',
                    'Ⳍ',
                    'Ⳏ',
                    'Ⳑ',
                    'Ⳓ',
                    'Ⳕ',
                    'Ⳗ',
                    'Ⳙ',
                    'Ⳛ',
                    'Ⳝ',
                    'Ⳟ',
                    'Ⳡ',
                    'Ⳣ',
                    'Ⳬ',
                    'Ⳮ',
                    'Ⳳ',
                    'Ꙁ',
                    'Ꙃ',
                    'Ꙅ',
                    'Ꙇ',
                    'Ꙉ',
                    'Ꙋ',
                    'Ꙍ',
                    'Ꙏ',
                    'Ꙑ',
                    'Ꙓ',
                    'Ꙕ',
                    'Ꙗ',
                    'Ꙙ',
                    'Ꙛ',
                    'Ꙝ',
                    'Ꙟ',
                    'Ꙡ',
                    'Ꙣ',
                    'Ꙥ',
                    'Ꙧ',
                    'Ꙩ',
                    'Ꙫ',
                    'Ꙭ',
                    'Ꚁ',
                    'Ꚃ',
                    'Ꚅ',
                    'Ꚇ',
                    'Ꚉ',
                    'Ꚋ',
                    'Ꚍ',
                    'Ꚏ',
                    'Ꚑ',
                    'Ꚓ',
                    'Ꚕ',
                    'Ꚗ',
                    'Ꚙ',
                    'Ꚛ',
                    'Ꜣ',
                    'Ꜥ',
                    'Ꜧ',
                    'Ꜩ',
                    'Ꜫ',
                    'Ꜭ',
                    'Ꜯ',
                    'Ꜳ',
                    'Ꜵ',
                    'Ꜷ',
                    'Ꜹ',
                    'Ꜻ',
                    'Ꜽ',
                    'Ꜿ',
                    'Ꝁ',
                    'Ꝃ',
                    'Ꝅ',
                    'Ꝇ',
                    'Ꝉ',
                    'Ꝋ',
                    'Ꝍ',
                    'Ꝏ',
                    'Ꝑ',
                    'Ꝓ',
                    'Ꝕ',
                    'Ꝗ',
                    'Ꝙ',
                    'Ꝛ',
                    'Ꝝ',
                    'Ꝟ',
                    'Ꝡ',
                    'Ꝣ',
                    'Ꝥ',
                    'Ꝧ',
                    'Ꝩ',
                    'Ꝫ',
                    'Ꝭ',
                    'Ꝯ',
                    'Ꝺ',
                    'Ꝼ',
                    ['Ᵹ', 'Ꝿ'],
                    'Ꞁ',
                    'Ꞃ',
                    'Ꞅ',
                    'Ꞇ',
                    'Ꞌ',
                    'Ɥ',
                    'Ꞑ',
                    'Ꞓ',
                    'Ꞗ',
                    'Ꞙ',
                    'Ꞛ',
                    'Ꞝ',
                    'Ꞟ',
                    'Ꞡ',
                    'Ꞣ',
                    'Ꞥ',
                    'Ꞧ',
                    'Ꞩ',
                    ['Ɦ', 'Ɬ'],
                    ['Ʞ', 'Ꞵ'],
                    'Ꞷ',
                    ['Ａ', 'Ｚ'],
                  ],
                  !1,
                  !1,
                ),
                jt = Gu(
                  [
                    'ः',
                    'ऻ',
                    ['ा', 'ी'],
                    ['ॉ', 'ौ'],
                    ['ॎ', 'ॏ'],
                    ['ং', 'ঃ'],
                    ['া', 'ী'],
                    ['ে', 'ৈ'],
                    ['ো', 'ৌ'],
                    'ৗ',
                    'ਃ',
                    ['ਾ', 'ੀ'],
                    'ઃ',
                    ['ા', 'ી'],
                    'ૉ',
                    ['ો', 'ૌ'],
                    ['ଂ', 'ଃ'],
                    'ା',
                    'ୀ',
                    ['େ', 'ୈ'],
                    ['ୋ', 'ୌ'],
                    'ୗ',
                    ['ா', 'ி'],
                    ['ு', 'ூ'],
                    ['ெ', 'ை'],
                    ['ொ', 'ௌ'],
                    'ௗ',
                    ['ఁ', 'ః'],
                    ['ు', 'ౄ'],
                    ['ಂ', 'ಃ'],
                    'ಾ',
                    ['ೀ', 'ೄ'],
                    ['ೇ', 'ೈ'],
                    ['ೊ', 'ೋ'],
                    ['ೕ', 'ೖ'],
                    ['ം', 'ഃ'],
                    ['ാ', 'ീ'],
                    ['െ', 'ൈ'],
                    ['ൊ', 'ൌ'],
                    'ൗ',
                    ['ං', 'ඃ'],
                    ['ා', 'ෑ'],
                    ['ෘ', 'ෟ'],
                    ['ෲ', 'ෳ'],
                    ['༾', '༿'],
                    'ཿ',
                    ['ါ', 'ာ'],
                    'ေ',
                    'း',
                    ['ျ', 'ြ'],
                    ['ၖ', 'ၗ'],
                    ['ၢ', 'ၤ'],
                    ['ၧ', 'ၭ'],
                    ['ႃ', 'ႄ'],
                    ['ႇ', 'ႌ'],
                    'ႏ',
                    ['ႚ', 'ႜ'],
                    'ា',
                    ['ើ', 'ៅ'],
                    ['ះ', 'ៈ'],
                    ['ᤣ', 'ᤦ'],
                    ['ᤩ', 'ᤫ'],
                    ['ᤰ', 'ᤱ'],
                    ['ᤳ', 'ᤸ'],
                    ['ᨙ', 'ᨚ'],
                    'ᩕ',
                    'ᩗ',
                    'ᩡ',
                    ['ᩣ', 'ᩤ'],
                    ['ᩭ', 'ᩲ'],
                    'ᬄ',
                    'ᬵ',
                    'ᬻ',
                    ['ᬽ', 'ᭁ'],
                    ['ᭃ', '᭄'],
                    'ᮂ',
                    'ᮡ',
                    ['ᮦ', 'ᮧ'],
                    '᮪',
                    'ᯧ',
                    ['ᯪ', 'ᯬ'],
                    'ᯮ',
                    ['᯲', '᯳'],
                    ['ᰤ', 'ᰫ'],
                    ['ᰴ', 'ᰵ'],
                    '᳡',
                    ['ᳲ', 'ᳳ'],
                    ['〮', '〯'],
                    ['ꠣ', 'ꠤ'],
                    'ꠧ',
                    ['ꢀ', 'ꢁ'],
                    ['ꢴ', 'ꣃ'],
                    ['ꥒ', '꥓'],
                    'ꦃ',
                    ['ꦴ', 'ꦵ'],
                    ['ꦺ', 'ꦻ'],
                    ['ꦽ', '꧀'],
                    ['ꨯ', 'ꨰ'],
                    ['ꨳ', 'ꨴ'],
                    'ꩍ',
                    'ꩻ',
                    'ꩽ',
                    'ꫫ',
                    ['ꫮ', 'ꫯ'],
                    'ꫵ',
                    ['ꯣ', 'ꯤ'],
                    ['ꯦ', 'ꯧ'],
                    ['ꯩ', 'ꯪ'],
                    '꯬',
                  ],
                  !1,
                  !1,
                ),
                Ht = Gu(
                  [
                    ['̀', 'ͯ'],
                    ['҃', '҇'],
                    ['֑', 'ֽ'],
                    'ֿ',
                    ['ׁ', 'ׂ'],
                    ['ׄ', 'ׅ'],
                    'ׇ',
                    ['ؐ', 'ؚ'],
                    ['ً', 'ٟ'],
                    'ٰ',
                    ['ۖ', 'ۜ'],
                    ['۟', 'ۤ'],
                    ['ۧ', 'ۨ'],
                    ['۪', 'ۭ'],
                    'ܑ',
                    ['ܰ', '݊'],
                    ['ަ', 'ް'],
                    ['߫', '߳'],
                    ['ࠖ', '࠙'],
                    ['ࠛ', 'ࠣ'],
                    ['ࠥ', 'ࠧ'],
                    ['ࠩ', '࠭'],
                    ['࡙', '࡛'],
                    ['ࣣ', 'ं'],
                    'ऺ',
                    '़',
                    ['ु', 'ै'],
                    '्',
                    ['॑', 'ॗ'],
                    ['ॢ', 'ॣ'],
                    'ঁ',
                    '়',
                    ['ু', 'ৄ'],
                    '্',
                    ['ৢ', 'ৣ'],
                    ['ਁ', 'ਂ'],
                    '਼',
                    ['ੁ', 'ੂ'],
                    ['ੇ', 'ੈ'],
                    ['ੋ', '੍'],
                    'ੑ',
                    ['ੰ', 'ੱ'],
                    'ੵ',
                    ['ઁ', 'ં'],
                    '઼',
                    ['ુ', 'ૅ'],
                    ['ે', 'ૈ'],
                    '્',
                    ['ૢ', 'ૣ'],
                    'ଁ',
                    '଼',
                    'ି',
                    ['ୁ', 'ୄ'],
                    '୍',
                    'ୖ',
                    ['ୢ', 'ୣ'],
                    'ஂ',
                    'ீ',
                    '்',
                    'ఀ',
                    ['ా', 'ీ'],
                    ['ె', 'ై'],
                    ['ొ', '్'],
                    ['ౕ', 'ౖ'],
                    ['ౢ', 'ౣ'],
                    'ಁ',
                    '಼',
                    'ಿ',
                    'ೆ',
                    ['ೌ', '್'],
                    ['ೢ', 'ೣ'],
                    'ഁ',
                    ['ു', 'ൄ'],
                    '്',
                    ['ൢ', 'ൣ'],
                    '්',
                    ['ි', 'ු'],
                    'ූ',
                    'ั',
                    ['ิ', 'ฺ'],
                    ['็', '๎'],
                    'ັ',
                    ['ິ', 'ູ'],
                    ['ົ', 'ຼ'],
                    ['່', 'ໍ'],
                    ['༘', '༙'],
                    '༵',
                    '༷',
                    '༹',
                    ['ཱ', 'ཾ'],
                    ['ྀ', '྄'],
                    ['྆', '྇'],
                    ['ྍ', 'ྗ'],
                    ['ྙ', 'ྼ'],
                    '࿆',
                    ['ိ', 'ူ'],
                    ['ဲ', '့'],
                    ['္', '်'],
                    ['ွ', 'ှ'],
                    ['ၘ', 'ၙ'],
                    ['ၞ', 'ၠ'],
                    ['ၱ', 'ၴ'],
                    'ႂ',
                    ['ႅ', 'ႆ'],
                    'ႍ',
                    'ႝ',
                    ['፝', '፟'],
                    ['ᜒ', '᜔'],
                    ['ᜲ', '᜴'],
                    ['ᝒ', 'ᝓ'],
                    ['ᝲ', 'ᝳ'],
                    ['឴', '឵'],
                    ['ិ', 'ួ'],
                    'ំ',
                    ['៉', '៓'],
                    '៝',
                    ['᠋', '᠍'],
                    'ᢩ',
                    ['ᤠ', 'ᤢ'],
                    ['ᤧ', 'ᤨ'],
                    'ᤲ',
                    ['᤹', '᤻'],
                    ['ᨗ', 'ᨘ'],
                    'ᨛ',
                    'ᩖ',
                    ['ᩘ', 'ᩞ'],
                    '᩠',
                    'ᩢ',
                    ['ᩥ', 'ᩬ'],
                    ['ᩳ', '᩼'],
                    '᩿',
                    ['᪰', '᪽'],
                    ['ᬀ', 'ᬃ'],
                    '᬴',
                    ['ᬶ', 'ᬺ'],
                    'ᬼ',
                    'ᭂ',
                    ['᭫', '᭳'],
                    ['ᮀ', 'ᮁ'],
                    ['ᮢ', 'ᮥ'],
                    ['ᮨ', 'ᮩ'],
                    ['᮫', 'ᮭ'],
                    '᯦',
                    ['ᯨ', 'ᯩ'],
                    'ᯭ',
                    ['ᯯ', 'ᯱ'],
                    ['ᰬ', 'ᰳ'],
                    ['ᰶ', '᰷'],
                    ['᳐', '᳒'],
                    ['᳔', '᳠'],
                    ['᳢', '᳨'],
                    '᳭',
                    '᳴',
                    ['᳸', '᳹'],
                    ['᷀', '᷵'],
                    ['᷼', '᷿'],
                    ['⃐', '⃜'],
                    '⃡',
                    ['⃥', '⃰'],
                    ['⳯', '⳱'],
                    '⵿',
                    ['ⷠ', 'ⷿ'],
                    ['〪', '〭'],
                    ['゙', '゚'],
                    '꙯',
                    ['ꙴ', '꙽'],
                    ['ꚞ', 'ꚟ'],
                    ['꛰', '꛱'],
                    'ꠂ',
                    '꠆',
                    'ꠋ',
                    ['ꠥ', 'ꠦ'],
                    '꣄',
                    ['꣠', '꣱'],
                    ['ꤦ', '꤭'],
                    ['ꥇ', 'ꥑ'],
                    ['ꦀ', 'ꦂ'],
                    '꦳',
                    ['ꦶ', 'ꦹ'],
                    'ꦼ',
                    'ꧥ',
                    ['ꨩ', 'ꨮ'],
                    ['ꨱ', 'ꨲ'],
                    ['ꨵ', 'ꨶ'],
                    'ꩃ',
                    'ꩌ',
                    'ꩼ',
                    'ꪰ',
                    ['ꪲ', 'ꪴ'],
                    ['ꪷ', 'ꪸ'],
                    ['ꪾ', '꪿'],
                    '꫁',
                    ['ꫬ', 'ꫭ'],
                    '꫶',
                    'ꯥ',
                    'ꯨ',
                    '꯭',
                    'ﬞ',
                    ['︀', '️'],
                    ['︠', '︯'],
                  ],
                  !1,
                  !1,
                ),
                qt = Gu(
                  [
                    ['0', '9'],
                    ['٠', '٩'],
                    ['۰', '۹'],
                    ['߀', '߉'],
                    ['०', '९'],
                    ['০', '৯'],
                    ['੦', '੯'],
                    ['૦', '૯'],
                    ['୦', '୯'],
                    ['௦', '௯'],
                    ['౦', '౯'],
                    ['೦', '೯'],
                    ['൦', '൯'],
                    ['෦', '෯'],
                    ['๐', '๙'],
                    ['໐', '໙'],
                    ['༠', '༩'],
                    ['၀', '၉'],
                    ['႐', '႙'],
                    ['០', '៩'],
                    ['᠐', '᠙'],
                    ['᥆', '᥏'],
                    ['᧐', '᧙'],
                    ['᪀', '᪉'],
                    ['᪐', '᪙'],
                    ['᭐', '᭙'],
                    ['᮰', '᮹'],
                    ['᱀', '᱉'],
                    ['᱐', '᱙'],
                    ['꘠', '꘩'],
                    ['꣐', '꣙'],
                    ['꤀', '꤉'],
                    ['꧐', '꧙'],
                    ['꧰', '꧹'],
                    ['꩐', '꩙'],
                    ['꯰', '꯹'],
                    ['０', '９'],
                  ],
                  !1,
                  !1,
                ),
                Gt = Gu(
                  [
                    ['ᛮ', 'ᛰ'],
                    ['Ⅰ', 'ↂ'],
                    ['ↅ', 'ↈ'],
                    '〇',
                    ['〡', '〩'],
                    ['〸', '〺'],
                    ['ꛦ', 'ꛯ'],
                  ],
                  !1,
                  !1,
                ),
                zt = Gu(['_', ['‿', '⁀'], '⁔', ['︳', '︴'], ['﹍', '﹏'], '＿'], !1, !1),
                Wt = Gu([' ', ' ', ' ', [' ', ' '], ' ', ' ', '　'], !1, !1),
                Yt = qu(';', !1),
                Vt = function(e, t, u) {
                  return {
                    type: 'grammar',
                    topLevelInitializer: e,
                    initializer: t,
                    rules: u,
                    location: ju(),
                  };
                },
                Jt = function(e) {
                  return {
                    type: 'top_level_initializer',
                    code: e[0],
                    codeLocation: e[1],
                    location: ju(),
                  };
                },
                Xt = function(e) {
                  return { type: 'initializer', code: e[0], codeLocation: e[1], location: ju() };
                },
                Zt = function(e, t, u) {
                  return {
                    type: 'rule',
                    name: e[0],
                    nameLocation: e[1],
                    expression:
                      null !== t ? { type: 'named', name: t, expression: u, location: ju() } : u,
                    location: ju(),
                  };
                },
                Qt = function(e, t) {
                  return t.length > 0
                    ? { type: 'choice', alternatives: [e].concat(t), location: ju() }
                    : e;
                },
                Kt = function(e, t) {
                  return null !== t
                    ? {
                        type: 'action',
                        expression: e,
                        code: t[0],
                        codeLocation: t[1],
                        location: ju(),
                      }
                    : e;
                },
                eu = function(e, t) {
                  return t.length > 0 || ('labeled' === e.type && e.pick)
                    ? { type: 'sequence', elements: [e].concat(t), location: ju() }
                    : e;
                },
                tu = function(e, t, u) {
                  return (
                    u.type.startsWith('semantic_') &&
                      Hu('"@" cannot be used on a semantic predicate', e),
                    {
                      type: 'labeled',
                      label: null !== t ? t[0] : null,
                      labelLocation: null !== t ? t[1] : e,
                      pick: !0,
                      expression: u,
                      location: ju(),
                    }
                  );
                },
                uu = function(e, t) {
                  return {
                    type: 'labeled',
                    label: e[0],
                    labelLocation: e[1],
                    expression: t,
                    location: ju(),
                  };
                },
                nu = function() {
                  return ju();
                },
                ru = function(e) {
                  return (
                    wn.indexOf(e[0]) >= 0 && Hu(`Label can't be a reserved word "${e[0]}"`, e[1]), e
                  );
                },
                ou = function(e, u) {
                  return { type: t[e], expression: u, location: ju() };
                },
                au = function(e, t) {
                  return { type: u[t], expression: e, location: ju() };
                },
                su = function(e, t, u) {
                  let n = t[0],
                    r = t[1];
                  return (
                    'constant' === r.type &&
                      0 === r.value &&
                      Hu('The maximum count of repetitions of the rule must be > 0', r.location),
                    {
                      type: 'repeated',
                      min: n,
                      max: r,
                      expression: e,
                      delimiter: u,
                      location: ju(),
                    }
                  );
                },
                iu = function(e, t) {
                  return [
                    null !== e ? e : { type: 'constant', value: 0 },
                    null !== t ? t : { type: 'constant', value: null },
                  ];
                },
                cu = function(e) {
                  return [null, e];
                },
                lu = function(e) {
                  return { type: 'constant', value: e, location: ju() };
                },
                pu = function(e) {
                  return { type: 'variable', value: e[0], location: ju() };
                },
                Au = function(e) {
                  return { type: 'function', value: e[0], codeLocation: e[1], location: ju() };
                },
                hu = function(e) {
                  return 'labeled' === e.type || 'sequence' === e.type
                    ? { type: 'group', expression: e, location: ju() }
                    : e;
                },
                Eu = function(e) {
                  return { type: 'rule_ref', name: e[0], location: ju() };
                },
                du = function(e, t) {
                  return { type: n[e], code: t[0], codeLocation: t[1], location: ju() };
                },
                fu = function(e, t) {
                  return [e + t.join(''), ju()];
                },
                Cu = function(e, t) {
                  return { type: 'literal', value: e, ignoreCase: null !== t, location: ju() };
                },
                gu = function(e) {
                  return e.join('');
                },
                mu = function(e) {
                  return e.join('');
                },
                Fu = function(e, t, u) {
                  return {
                    type: 'class',
                    parts: t.filter(e => '' !== e),
                    inverted: null !== e,
                    ignoreCase: null !== u,
                    location: ju(),
                  };
                },
                _u = function(t, u) {
                  return (
                    t.charCodeAt(0) > u.charCodeAt(0) &&
                      Hu('Invalid character range: ' + e.substring(Iu, ku) + '.'),
                    [t, u]
                  );
                },
                Du = function() {
                  return '';
                },
                Bu = function() {
                  return '\0';
                },
                xu = function() {
                  return '\b';
                },
                vu = function() {
                  return '\f';
                },
                yu = function() {
                  return '\n';
                },
                bu = function() {
                  return '\r';
                },
                Su = function() {
                  return '\t';
                },
                Pu = function() {
                  return '\v';
                },
                Ou = function(e) {
                  return String.fromCharCode(parseInt(e, 16));
                },
                wu = function(e) {
                  return String.fromCharCode(parseInt(e, 16));
                },
                $u = function() {
                  return { type: 'any', location: ju() };
                },
                Ru = function(e) {
                  return [e, ju()];
                },
                Lu = function(e) {
                  return parseInt(e, 10);
                },
                ku = 0,
                Iu = 0,
                Nu = [{ line: 1, column: 1 }],
                Tu = 0,
                Mu = [],
                Uu = 0;
              if ('startRule' in o) {
                if (!(o.startRule in c))
                  throw new Error('Can\'t start parsing from rule "' + o.startRule + '".');
                l = c[o.startRule];
              }
              function ju() {
                return Yu(Iu, ku);
              }
              function Hu(e, t) {
                throw (function(e, t) {
                  return new r(e, null, null, t);
                })(e, (t = void 0 !== t ? t : Yu(Iu, ku)));
              }
              function qu(e, t) {
                return { type: 'literal', text: e, ignoreCase: t };
              }
              function Gu(e, t, u) {
                return { type: 'class', parts: e, inverted: t, ignoreCase: u };
              }
              function zu(e) {
                return { type: 'other', description: e };
              }
              function Wu(t) {
                var u,
                  n = Nu[t];
                if (n) return n;
                for (u = t - 1; !Nu[u]; ) u--;
                for (n = { line: (n = Nu[u]).line, column: n.column }; u < t; )
                  10 === e.charCodeAt(u) ? (n.line++, (n.column = 1)) : n.column++, u++;
                return (Nu[t] = n), n;
              }
              function Yu(e, t, u) {
                var n = Wu(e),
                  r = Wu(t),
                  o = {
                    source: i,
                    start: { offset: e, line: n.line, column: n.column },
                    end: { offset: t, line: r.line, column: r.column },
                  };
                return (
                  u &&
                    i &&
                    'function' == typeof i.offset &&
                    ((o.start = i.offset(o.start)), (o.end = i.offset(o.end))),
                  o
                );
              }
              function Vu(e) {
                ku < Tu || (ku > Tu && ((Tu = ku), (Mu = [])), Mu.push(e));
              }
              function Ju() {
                var t, u, n, r, o, a;
                if (
                  ((t = ku),
                  Pn(),
                  (u = ku),
                  (n = (function() {
                    var t, u, n, r;
                    return (
                      (t = ku),
                      123 === e.charCodeAt(ku) ? ((u = p), ku++) : ((u = s), 0 === Uu && Vu(ve)),
                      u !== s && (n = bn()) !== s
                        ? (125 === e.charCodeAt(ku)
                            ? ((r = A), ku++)
                            : ((r = s), 0 === Uu && Vu(ye)),
                          r !== s && On() !== s ? ((Iu = t), (t = Jt(n))) : ((ku = t), (t = s)))
                        : ((ku = t), (t = s)),
                      t
                    );
                  })()),
                  n !== s ? ((r = Pn()), (u = n)) : ((ku = u), (u = s)),
                  u === s && (u = null),
                  (n = ku),
                  (r = (function() {
                    var e, t;
                    return (
                      (e = ku),
                      (t = bn()) !== s && On() !== s
                        ? ((Iu = e), (e = Xt(t)))
                        : ((ku = e), (e = s)),
                      e
                    );
                  })()),
                  r !== s ? ((o = Pn()), (n = r)) : ((ku = n), (n = s)),
                  n === s && (n = null),
                  (r = []),
                  (o = ku),
                  (a = Xu()) !== s ? (Pn(), (o = a)) : ((ku = o), (o = s)),
                  o !== s)
                )
                  for (; o !== s; )
                    r.push(o), (o = ku), (a = Xu()) !== s ? (Pn(), (o = a)) : ((ku = o), (o = s));
                else r = s;
                return r !== s ? ((Iu = t), (t = Vt(u, n, r))) : ((ku = t), (t = s)), t;
              }
              function Xu() {
                var t, u, n, r, o;
                return (
                  (t = ku),
                  (u = hn()) !== s
                    ? (Pn(),
                      (n = ku),
                      (r = fn()) !== s ? (Pn(), (n = r)) : ((ku = n), (n = s)),
                      n === s && (n = null),
                      61 === e.charCodeAt(ku) ? ((r = h), ku++) : ((r = s), 0 === Uu && Vu(be)),
                      r !== s
                        ? (Pn(),
                          (o = Zu()) !== s && On() !== s
                            ? ((Iu = t), (t = Zt(u, n, o)))
                            : ((ku = t), (t = s)))
                        : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t
                );
              }
              function Zu() {
                var t, u, n, r, o, a;
                if (((t = ku), (u = Qu()) !== s)) {
                  for (
                    n = [],
                      r = ku,
                      Pn(),
                      47 === e.charCodeAt(ku) ? ((o = E), ku++) : ((o = s), 0 === Uu && Vu(Se)),
                      o !== s
                        ? (Pn(), (a = Qu()) !== s ? (r = a) : ((ku = r), (r = s)))
                        : ((ku = r), (r = s));
                    r !== s;

                  )
                    n.push(r),
                      (r = ku),
                      Pn(),
                      47 === e.charCodeAt(ku) ? ((o = E), ku++) : ((o = s), 0 === Uu && Vu(Se)),
                      o !== s
                        ? (Pn(), (a = Qu()) !== s ? (r = a) : ((ku = r), (r = s)))
                        : ((ku = r), (r = s));
                  (Iu = t), (t = Qt(u, n));
                } else (ku = t), (t = s);
                return t;
              }
              function Qu() {
                var e, t, u, n;
                return (
                  (e = ku),
                  (t = (function() {
                    var e, t, u, n, r;
                    if (((e = ku), (t = Ku()) !== s)) {
                      for (
                        u = [], n = ku, Pn(), (r = Ku()) !== s ? (n = r) : ((ku = n), (n = s));
                        n !== s;

                      )
                        u.push(n), (n = ku), Pn(), (r = Ku()) !== s ? (n = r) : ((ku = n), (n = s));
                      (Iu = e), (e = eu(t, u));
                    } else (ku = e), (e = s);
                    return e;
                  })()),
                  t !== s
                    ? ((u = ku),
                      Pn(),
                      (n = bn()) !== s ? (u = n) : ((ku = u), (u = s)),
                      u === s && (u = null),
                      (Iu = e),
                      (e = Kt(t, u)))
                    : ((ku = e), (e = s)),
                  e
                );
              }
              function Ku() {
                var t, u, n, r;
                return (
                  (t = ku),
                  (u = (function() {
                    var t, u;
                    return (
                      (t = ku),
                      64 === e.charCodeAt(ku) ? ((u = d), ku++) : ((u = s), 0 === Uu && Vu(Pe)),
                      u !== s && ((Iu = t), (u = nu())),
                      (t = u)
                    );
                  })()),
                  u !== s
                    ? ((n = en()) === s && (n = null),
                      (r = tn()) !== s ? ((Iu = t), (t = tu(u, n, r))) : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t === s &&
                    ((t = ku),
                    (u = en()) !== s
                      ? ((n = Pn()),
                        (r = tn()) !== s ? ((Iu = t), (t = uu(u, r))) : ((ku = t), (t = s)))
                      : ((ku = t), (t = s)),
                    t === s && (t = tn())),
                  t
                );
              }
              function en() {
                var t, u, n;
                return (
                  (t = ku),
                  (u = hn()) !== s
                    ? (Pn(),
                      58 === e.charCodeAt(ku) ? ((n = f), ku++) : ((n = s), 0 === Uu && Vu(Oe)),
                      n !== s ? ((Iu = t), (t = ru(u))) : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t
                );
              }
              function tn() {
                var t, u, n;
                return (
                  (t = ku),
                  (u = (function() {
                    var t;
                    return (
                      36 === e.charCodeAt(ku) ? ((t = C), ku++) : ((t = s), 0 === Uu && Vu(we)),
                      t === s &&
                        (38 === e.charCodeAt(ku) ? ((t = g), ku++) : ((t = s), 0 === Uu && Vu($e)),
                        t === s &&
                          (33 === e.charCodeAt(ku)
                            ? ((t = m), ku++)
                            : ((t = s), 0 === Uu && Vu(Re)))),
                      t
                    );
                  })()),
                  u !== s
                    ? (Pn(), (n = un()) !== s ? ((Iu = t), (t = ou(u, n))) : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t === s && (t = un()),
                  t
                );
              }
              function un() {
                var t, u, n;
                return (
                  (t = ku),
                  (u = rn()) !== s
                    ? (Pn(),
                      (n = (function() {
                        var t;
                        return (
                          63 === e.charCodeAt(ku) ? ((t = F), ku++) : ((t = s), 0 === Uu && Vu(Le)),
                          t === s &&
                            (42 === e.charCodeAt(ku)
                              ? ((t = _), ku++)
                              : ((t = s), 0 === Uu && Vu(ke)),
                            t === s &&
                              (43 === e.charCodeAt(ku)
                                ? ((t = D), ku++)
                                : ((t = s), 0 === Uu && Vu(Ie)))),
                          t
                        );
                      })()),
                      n !== s ? ((Iu = t), (t = au(u, n))) : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t === s &&
                    ((t = (function() {
                      var t, u, n, r, o, a, i;
                      return (
                        (t = ku),
                        (u = rn()) !== s
                          ? (Pn(),
                            124 === e.charCodeAt(ku)
                              ? ((n = B), ku++)
                              : ((n = s), 0 === Uu && Vu(Ne)),
                            n !== s
                              ? (Pn(),
                                (r = (function() {
                                  var t, u, n, r;
                                  return (
                                    (t = ku),
                                    (u = nn()) === s && (u = null),
                                    Pn(),
                                    e.substr(ku, 2) === v
                                      ? ((n = v), (ku += 2))
                                      : ((n = s), 0 === Uu && Vu(Me)),
                                    n !== s
                                      ? (Pn(),
                                        (r = nn()) === s && (r = null),
                                        (Iu = t),
                                        (t = iu(u, r)))
                                      : ((ku = t), (t = s)),
                                    t === s &&
                                      ((t = ku),
                                      (u = nn()) !== s && ((Iu = t), (u = cu(u))),
                                      (t = u)),
                                    t
                                  );
                                })()),
                                r !== s
                                  ? (Pn(),
                                    (o = ku),
                                    44 === e.charCodeAt(ku)
                                      ? ((a = x), ku++)
                                      : ((a = s), 0 === Uu && Vu(Te)),
                                    a !== s
                                      ? (Pn(),
                                        (i = Zu()) !== s ? (Pn(), (o = i)) : ((ku = o), (o = s)))
                                      : ((ku = o), (o = s)),
                                    o === s && (o = null),
                                    124 === e.charCodeAt(ku)
                                      ? ((a = B), ku++)
                                      : ((a = s), 0 === Uu && Vu(Ne)),
                                    a !== s ? ((Iu = t), (t = su(u, r, o))) : ((ku = t), (t = s)))
                                  : ((ku = t), (t = s)))
                              : ((ku = t), (t = s)))
                          : ((ku = t), (t = s)),
                        t
                      );
                    })()),
                    t === s && (t = rn())),
                  t
                );
              }
              function nn() {
                var t, u;
                return (
                  (t = ku),
                  (u = (function() {
                    var t, u, n, r;
                    if (((t = ku), (u = ku), (n = []), (r = vn()) !== s))
                      for (; r !== s; ) n.push(r), (r = vn());
                    else n = s;
                    return (
                      (u = n !== s ? e.substring(u, ku) : n) !== s && ((Iu = t), (u = Lu(u))),
                      (t = u)
                    );
                  })()),
                  u !== s && ((Iu = t), (u = lu(u))),
                  (t = u) === s &&
                    ((t = ku),
                    (u = hn()) !== s && ((Iu = t), (u = pu(u))),
                    (t = u) === s &&
                      ((t = ku), (u = bn()) !== s && ((Iu = t), (u = Au(u))), (t = u))),
                  t
                );
              }
              function rn() {
                var t, u, n, r;
                return (
                  (t = (function() {
                    var t, u, n;
                    return (
                      Uu++,
                      (t = ku),
                      (u = fn()) !== s
                        ? (105 === e.charCodeAt(ku)
                            ? ((n = W), ku++)
                            : ((n = s), 0 === Uu && Vu(ht)),
                          n === s && (n = null),
                          (Iu = t),
                          (t = Cu(u, n)))
                        : ((ku = t), (t = s)),
                      Uu--,
                      t === s && ((u = s), 0 === Uu && Vu(At)),
                      t
                    );
                  })()),
                  t === s &&
                    ((t = (function() {
                      var t, u, n, r, o, a;
                      if (
                        (Uu++,
                        (t = ku),
                        91 === e.charCodeAt(ku) ? ((u = J), ku++) : ((u = s), 0 === Uu && Vu(gt)),
                        u !== s)
                      ) {
                        for (
                          94 === e.charCodeAt(ku) ? ((n = X), ku++) : ((n = s), 0 === Uu && Vu(mt)),
                            n === s && (n = null),
                            r = [],
                            (o = mn()) === s && (o = Fn());
                          o !== s;

                        )
                          r.push(o), (o = mn()) === s && (o = Fn());
                        93 === e.charCodeAt(ku) ? ((o = Z), ku++) : ((o = s), 0 === Uu && Vu(Ft)),
                          o !== s
                            ? (105 === e.charCodeAt(ku)
                                ? ((a = W), ku++)
                                : ((a = s), 0 === Uu && Vu(ht)),
                              a === s && (a = null),
                              (Iu = t),
                              (t = Fu(n, r, a)))
                            : ((ku = t), (t = s));
                      } else (ku = t), (t = s);
                      return Uu--, t === s && ((u = s), 0 === Uu && Vu(Ct)), t;
                    })()),
                    t === s &&
                      ((t = (function() {
                        var t, u;
                        return (
                          (t = ku),
                          46 === e.charCodeAt(ku)
                            ? ((u = ie), ku++)
                            : ((u = s), 0 === Uu && Vu(Rt)),
                          u !== s && ((Iu = t), (u = $u())),
                          (t = u)
                        );
                      })()),
                      t === s &&
                        ((t = (function() {
                          var t, u, n, r, o, a, i;
                          return (
                            (t = ku),
                            (u = hn()) !== s
                              ? ((n = ku),
                                Uu++,
                                (r = ku),
                                (o = Pn()),
                                (a = ku),
                                (i = fn()) !== s ? (a = i = [i, Pn()]) : ((ku = a), (a = s)),
                                a === s && (a = null),
                                61 === e.charCodeAt(ku)
                                  ? ((i = h), ku++)
                                  : ((i = s), 0 === Uu && Vu(be)),
                                i !== s ? (r = o = [o, a, i]) : ((ku = r), (r = s)),
                                Uu--,
                                r === s ? (n = void 0) : ((ku = n), (n = s)),
                                n !== s ? ((Iu = t), (t = Eu(u))) : ((ku = t), (t = s)))
                              : ((ku = t), (t = s)),
                            t
                          );
                        })()),
                        t === s &&
                          ((t = (function() {
                            var t, u, n;
                            return (
                              (t = ku),
                              (u = (function() {
                                var t;
                                return (
                                  38 === e.charCodeAt(ku)
                                    ? ((t = g), ku++)
                                    : ((t = s), 0 === Uu && Vu($e)),
                                  t === s &&
                                    (33 === e.charCodeAt(ku)
                                      ? ((t = m), ku++)
                                      : ((t = s), 0 === Uu && Vu(Re))),
                                  t
                                );
                              })()),
                              u !== s
                                ? (Pn(),
                                  (n = bn()) !== s
                                    ? ((Iu = t), (t = du(u, n)))
                                    : ((ku = t), (t = s)))
                                : ((ku = t), (t = s)),
                              t
                            );
                          })()),
                          t === s &&
                            ((t = ku),
                            40 === e.charCodeAt(ku)
                              ? ((u = y), ku++)
                              : ((u = s), 0 === Uu && Vu(Ue)),
                            u !== s
                              ? (Pn(),
                                (n = Zu()) !== s
                                  ? (Pn(),
                                    41 === e.charCodeAt(ku)
                                      ? ((r = b), ku++)
                                      : ((r = s), 0 === Uu && Vu(je)),
                                    r !== s ? ((Iu = t), (t = hu(n))) : ((ku = t), (t = s)))
                                  : ((ku = t), (t = s)))
                              : ((ku = t), (t = s))))))),
                  t
                );
              }
              function on() {
                var t;
                return (
                  e.length > ku ? ((t = e.charAt(ku)), ku++) : ((t = s), 0 === Uu && Vu(He)), t
                );
              }
              function an() {
                var t;
                return (
                  Uu++,
                  9 === e.charCodeAt(ku) ? ((t = S), ku++) : ((t = s), 0 === Uu && Vu(Ge)),
                  t === s &&
                    (11 === e.charCodeAt(ku) ? ((t = P), ku++) : ((t = s), 0 === Uu && Vu(ze)),
                    t === s &&
                      (12 === e.charCodeAt(ku) ? ((t = O), ku++) : ((t = s), 0 === Uu && Vu(We)),
                      t === s &&
                        (32 === e.charCodeAt(ku) ? ((t = w), ku++) : ((t = s), 0 === Uu && Vu(Ye)),
                        t === s &&
                          (160 === e.charCodeAt(ku)
                            ? ((t = $), ku++)
                            : ((t = s), 0 === Uu && Vu(Ve)),
                          t === s &&
                            (65279 === e.charCodeAt(ku)
                              ? ((t = R), ku++)
                              : ((t = s), 0 === Uu && Vu(Je)),
                            t === s &&
                              (t = (function() {
                                var t;
                                return (
                                  xe.test(e.charAt(ku))
                                    ? ((t = e.charAt(ku)), ku++)
                                    : ((t = s), 0 === Uu && Vu(Wt)),
                                  t
                                );
                              })())))))),
                  Uu--,
                  t === s && 0 === Uu && Vu(qe),
                  t
                );
              }
              function sn() {
                var t;
                return (
                  le.test(e.charAt(ku))
                    ? ((t = e.charAt(ku)), ku++)
                    : ((t = s), 0 === Uu && Vu(Xe)),
                  t
                );
              }
              function cn() {
                var t;
                return (
                  Uu++,
                  10 === e.charCodeAt(ku) ? ((t = L), ku++) : ((t = s), 0 === Uu && Vu(Qe)),
                  t === s &&
                    (e.substr(ku, 2) === k ? ((t = k), (ku += 2)) : ((t = s), 0 === Uu && Vu(Ke)),
                    t === s &&
                      (13 === e.charCodeAt(ku) ? ((t = I), ku++) : ((t = s), 0 === Uu && Vu(et)),
                      t === s &&
                        (8232 === e.charCodeAt(ku)
                          ? ((t = N), ku++)
                          : ((t = s), 0 === Uu && Vu(tt)),
                        t === s &&
                          (8233 === e.charCodeAt(ku)
                            ? ((t = T), ku++)
                            : ((t = s), 0 === Uu && Vu(ut)))))),
                  Uu--,
                  t === s && 0 === Uu && Vu(Ze),
                  t
                );
              }
              function ln() {
                var t;
                return (
                  Uu++,
                  (t = (function() {
                    var t, u, n, r, o, a;
                    if (
                      ((t = ku),
                      e.substr(ku, 2) === M ? ((u = M), (ku += 2)) : ((u = s), 0 === Uu && Vu(rt)),
                      u !== s)
                    ) {
                      for (
                        n = [],
                          r = ku,
                          o = ku,
                          Uu++,
                          e.substr(ku, 2) === U
                            ? ((a = U), (ku += 2))
                            : ((a = s), 0 === Uu && Vu(ot)),
                          Uu--,
                          a === s ? (o = void 0) : ((ku = o), (o = s)),
                          o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                        r !== s;

                      )
                        n.push(r),
                          (r = ku),
                          (o = ku),
                          Uu++,
                          e.substr(ku, 2) === U
                            ? ((a = U), (ku += 2))
                            : ((a = s), 0 === Uu && Vu(ot)),
                          Uu--,
                          a === s ? (o = void 0) : ((ku = o), (o = s)),
                          o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                      e.substr(ku, 2) === U ? ((r = U), (ku += 2)) : ((r = s), 0 === Uu && Vu(ot)),
                        r !== s ? (t = u = [u, n, r]) : ((ku = t), (t = s));
                    } else (ku = t), (t = s);
                    return t;
                  })()) === s && (t = An()),
                  Uu--,
                  t === s && 0 === Uu && Vu(nt),
                  t
                );
              }
              function pn() {
                var t, u, n, r, o, a;
                if (
                  ((t = ku),
                  e.substr(ku, 2) === M ? ((u = M), (ku += 2)) : ((u = s), 0 === Uu && Vu(rt)),
                  u !== s)
                ) {
                  for (
                    n = [],
                      r = ku,
                      o = ku,
                      Uu++,
                      e.substr(ku, 2) === U ? ((a = U), (ku += 2)) : ((a = s), 0 === Uu && Vu(ot)),
                      a === s && (a = sn()),
                      Uu--,
                      a === s ? (o = void 0) : ((ku = o), (o = s)),
                      o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                    r !== s;

                  )
                    n.push(r),
                      (r = ku),
                      (o = ku),
                      Uu++,
                      e.substr(ku, 2) === U ? ((a = U), (ku += 2)) : ((a = s), 0 === Uu && Vu(ot)),
                      a === s && (a = sn()),
                      Uu--,
                      a === s ? (o = void 0) : ((ku = o), (o = s)),
                      o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                  e.substr(ku, 2) === U ? ((r = U), (ku += 2)) : ((r = s), 0 === Uu && Vu(ot)),
                    r !== s ? (t = u = [u, n, r]) : ((ku = t), (t = s));
                } else (ku = t), (t = s);
                return t;
              }
              function An() {
                var t, u, n, r, o, a;
                if (
                  ((t = ku),
                  e.substr(ku, 2) === j ? ((u = j), (ku += 2)) : ((u = s), 0 === Uu && Vu(at)),
                  u !== s)
                ) {
                  for (
                    n = [],
                      r = ku,
                      o = ku,
                      Uu++,
                      a = sn(),
                      Uu--,
                      a === s ? (o = void 0) : ((ku = o), (o = s)),
                      o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                    r !== s;

                  )
                    n.push(r),
                      (r = ku),
                      (o = ku),
                      Uu++,
                      (a = sn()),
                      Uu--,
                      a === s ? (o = void 0) : ((ku = o), (o = s)),
                      o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                  t = u = [u, n];
                } else (ku = t), (t = s);
                return t;
              }
              function hn() {
                var e, t, u, n;
                if ((Uu++, (e = ku), (t = En()) !== s)) {
                  for (u = [], n = dn(); n !== s; ) u.push(n), (n = dn());
                  (Iu = e), (e = fu(t, u));
                } else (ku = e), (e = s);
                return Uu--, e === s && ((t = s), 0 === Uu && Vu(st)), e;
              }
              function En() {
                var t, u, n;
                return (
                  (t = (function() {
                    var t;
                    return (
                      (t = (function() {
                        var t;
                        return (
                          ge.test(e.charAt(ku))
                            ? ((t = e.charAt(ku)), ku++)
                            : ((t = s), 0 === Uu && Vu(Ut)),
                          t
                        );
                      })()) === s &&
                        (t = (function() {
                          var t;
                          return (
                            Ee.test(e.charAt(ku))
                              ? ((t = e.charAt(ku)), ku++)
                              : ((t = s), 0 === Uu && Vu(It)),
                            t
                          );
                        })()) === s &&
                        (t = (function() {
                          var t;
                          return (
                            Ce.test(e.charAt(ku))
                              ? ((t = e.charAt(ku)), ku++)
                              : ((t = s), 0 === Uu && Vu(Mt)),
                            t
                          );
                        })()) === s &&
                        (t = (function() {
                          var t;
                          return (
                            de.test(e.charAt(ku))
                              ? ((t = e.charAt(ku)), ku++)
                              : ((t = s), 0 === Uu && Vu(Nt)),
                            t
                          );
                        })()) === s &&
                        (t = (function() {
                          var t;
                          return (
                            fe.test(e.charAt(ku))
                              ? ((t = e.charAt(ku)), ku++)
                              : ((t = s), 0 === Uu && Vu(Tt)),
                            t
                          );
                        })()) === s &&
                        (t = (function() {
                          var t;
                          return (
                            De.test(e.charAt(ku))
                              ? ((t = e.charAt(ku)), ku++)
                              : ((t = s), 0 === Uu && Vu(Gt)),
                            t
                          );
                        })()),
                      t
                    );
                  })()) === s &&
                    (95 === e.charCodeAt(ku) ? ((t = H), ku++) : ((t = s), 0 === Uu && Vu(it)),
                    t === s &&
                      ((t = ku),
                      92 === e.charCodeAt(ku) ? ((u = q), ku++) : ((u = s), 0 === Uu && Vu(ct)),
                      u !== s && (n = xn()) !== s ? (t = n) : ((ku = t), (t = s)))),
                  t
                );
              }
              function dn() {
                var t;
                return (
                  (t = En()) === s &&
                    (36 === e.charCodeAt(ku) ? ((t = C), ku++) : ((t = s), 0 === Uu && Vu(we)),
                    t === s &&
                      (t = (function() {
                        var t;
                        return (
                          (t = (function() {
                            var t;
                            return (
                              Fe.test(e.charAt(ku))
                                ? ((t = e.charAt(ku)), ku++)
                                : ((t = s), 0 === Uu && Vu(Ht)),
                              t
                            );
                          })()) === s &&
                            (t = (function() {
                              var t;
                              return (
                                me.test(e.charAt(ku))
                                  ? ((t = e.charAt(ku)), ku++)
                                  : ((t = s), 0 === Uu && Vu(jt)),
                                t
                              );
                            })()),
                          t
                        );
                      })()) === s &&
                      (t = (function() {
                        var t;
                        return (
                          _e.test(e.charAt(ku))
                            ? ((t = e.charAt(ku)), ku++)
                            : ((t = s), 0 === Uu && Vu(qt)),
                          t
                        );
                      })()) === s &&
                      (t = (function() {
                        var t;
                        return (
                          Be.test(e.charAt(ku))
                            ? ((t = e.charAt(ku)), ku++)
                            : ((t = s), 0 === Uu && Vu(zt)),
                          t
                        );
                      })()) === s &&
                      (8204 === e.charCodeAt(ku) ? ((t = G), ku++) : ((t = s), 0 === Uu && Vu(lt)),
                      t === s &&
                        (8205 === e.charCodeAt(ku)
                          ? ((t = z), ku++)
                          : ((t = s), 0 === Uu && Vu(pt))))),
                  t
                );
              }
              function fn() {
                var t, u, n, r;
                if (
                  (Uu++,
                  (t = ku),
                  34 === e.charCodeAt(ku) ? ((u = Y), ku++) : ((u = s), 0 === Uu && Vu(dt)),
                  u !== s)
                ) {
                  for (n = [], r = Cn(); r !== s; ) n.push(r), (r = Cn());
                  34 === e.charCodeAt(ku) ? ((r = Y), ku++) : ((r = s), 0 === Uu && Vu(dt)),
                    r !== s ? ((Iu = t), (t = gu(n))) : ((ku = t), (t = s));
                } else (ku = t), (t = s);
                if (t === s)
                  if (
                    ((t = ku),
                    39 === e.charCodeAt(ku) ? ((u = V), ku++) : ((u = s), 0 === Uu && Vu(ft)),
                    u !== s)
                  ) {
                    for (n = [], r = gn(); r !== s; ) n.push(r), (r = gn());
                    39 === e.charCodeAt(ku) ? ((r = V), ku++) : ((r = s), 0 === Uu && Vu(ft)),
                      r !== s ? ((Iu = t), (t = mu(n))) : ((ku = t), (t = s));
                  } else (ku = t), (t = s);
                return Uu--, t === s && ((u = s), 0 === Uu && Vu(Et)), t;
              }
              function Cn() {
                var t, u, n, r;
                return (
                  (t = ku),
                  (u = ku),
                  (n = ku),
                  Uu++,
                  34 === e.charCodeAt(ku) ? ((r = Y), ku++) : ((r = s), 0 === Uu && Vu(dt)),
                  r === s &&
                    (92 === e.charCodeAt(ku) ? ((r = q), ku++) : ((r = s), 0 === Uu && Vu(ct)),
                    r === s && (r = sn())),
                  Uu--,
                  r === s ? (n = void 0) : ((ku = n), (n = s)),
                  n !== s && (r = on()) !== s ? (u = n = [n, r]) : ((ku = u), (u = s)),
                  (t = u !== s ? e.substring(t, ku) : u) === s &&
                    ((t = ku),
                    92 === e.charCodeAt(ku) ? ((u = q), ku++) : ((u = s), 0 === Uu && Vu(ct)),
                    u !== s && (n = Dn()) !== s ? (t = n) : ((ku = t), (t = s)),
                    t === s && (t = _n())),
                  t
                );
              }
              function gn() {
                var t, u, n, r;
                return (
                  (t = ku),
                  (u = ku),
                  (n = ku),
                  Uu++,
                  39 === e.charCodeAt(ku) ? ((r = V), ku++) : ((r = s), 0 === Uu && Vu(ft)),
                  r === s &&
                    (92 === e.charCodeAt(ku) ? ((r = q), ku++) : ((r = s), 0 === Uu && Vu(ct)),
                    r === s && (r = sn())),
                  Uu--,
                  r === s ? (n = void 0) : ((ku = n), (n = s)),
                  n !== s && (r = on()) !== s ? (u = n = [n, r]) : ((ku = u), (u = s)),
                  (t = u !== s ? e.substring(t, ku) : u) === s &&
                    ((t = ku),
                    92 === e.charCodeAt(ku) ? ((u = q), ku++) : ((u = s), 0 === Uu && Vu(ct)),
                    u !== s && (n = Dn()) !== s ? (t = n) : ((ku = t), (t = s)),
                    t === s && (t = _n())),
                  t
                );
              }
              function mn() {
                var t, u, n, r;
                return (
                  (t = ku),
                  (u = Fn()) !== s
                    ? (45 === e.charCodeAt(ku) ? ((n = Q), ku++) : ((n = s), 0 === Uu && Vu(_t)),
                      n !== s && (r = Fn()) !== s
                        ? ((Iu = t), (t = _u(u, r)))
                        : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t
                );
              }
              function Fn() {
                var t, u, n, r;
                return (
                  (t = ku),
                  (u = ku),
                  (n = ku),
                  Uu++,
                  93 === e.charCodeAt(ku) ? ((r = Z), ku++) : ((r = s), 0 === Uu && Vu(Ft)),
                  r === s &&
                    (92 === e.charCodeAt(ku) ? ((r = q), ku++) : ((r = s), 0 === Uu && Vu(ct)),
                    r === s && (r = sn())),
                  Uu--,
                  r === s ? (n = void 0) : ((ku = n), (n = s)),
                  n !== s && (r = on()) !== s ? (u = n = [n, r]) : ((ku = u), (u = s)),
                  (t = u !== s ? e.substring(t, ku) : u) === s &&
                    ((t = ku),
                    92 === e.charCodeAt(ku) ? ((u = q), ku++) : ((u = s), 0 === Uu && Vu(ct)),
                    u !== s && (n = Dn()) !== s ? (t = n) : ((ku = t), (t = s)),
                    t === s && (t = _n())),
                  t
                );
              }
              function _n() {
                var t, u;
                return (
                  (t = ku),
                  92 === e.charCodeAt(ku) ? ((u = q), ku++) : ((u = s), 0 === Uu && Vu(ct)),
                  u !== s && cn() !== s ? ((Iu = t), (t = Du())) : ((ku = t), (t = s)),
                  t
                );
              }
              function Dn() {
                var t, u, n, r;
                return (
                  (t = (function() {
                    var t;
                    return (
                      (t = Bn()) === s &&
                        (t = (function() {
                          var t, u, n, r;
                          return (
                            (t = ku),
                            (u = ku),
                            (n = ku),
                            Uu++,
                            (r = (function() {
                              var t;
                              return (
                                (t = Bn()) === s &&
                                  (t = vn()) === s &&
                                  (120 === e.charCodeAt(ku)
                                    ? ((t = ae), ku++)
                                    : ((t = s), 0 === Uu && Vu(Pt)),
                                  t === s &&
                                    (117 === e.charCodeAt(ku)
                                      ? ((t = se), ku++)
                                      : ((t = s), 0 === Uu && Vu(Ot)))),
                                t
                              );
                            })()),
                            r === s && (r = sn()),
                            Uu--,
                            r === s ? (n = void 0) : ((ku = n), (n = s)),
                            n !== s && (r = on()) !== s ? (u = n = [n, r]) : ((ku = u), (u = s)),
                            (t = u !== s ? e.substring(t, ku) : u)
                          );
                        })()),
                      t
                    );
                  })()),
                  t === s &&
                    ((t = ku),
                    48 === e.charCodeAt(ku) ? ((u = K), ku++) : ((u = s), 0 === Uu && Vu(Dt)),
                    u !== s
                      ? ((n = ku),
                        Uu++,
                        (r = vn()),
                        Uu--,
                        r === s ? (n = void 0) : ((ku = n), (n = s)),
                        n !== s ? ((Iu = t), (t = Bu())) : ((ku = t), (t = s)))
                      : ((ku = t), (t = s)),
                    t === s &&
                      ((t = (function() {
                        var t, u, n, r, o, a;
                        return (
                          (t = ku),
                          120 === e.charCodeAt(ku)
                            ? ((u = ae), ku++)
                            : ((u = s), 0 === Uu && Vu(Pt)),
                          u !== s
                            ? ((n = ku),
                              (r = ku),
                              (o = yn()) !== s && (a = yn()) !== s
                                ? (r = o = [o, a])
                                : ((ku = r), (r = s)),
                              (n = r !== s ? e.substring(n, ku) : r) !== s
                                ? ((Iu = t), (t = Ou(n)))
                                : ((ku = t), (t = s)))
                            : ((ku = t), (t = s)),
                          t
                        );
                      })()),
                      t === s && (t = xn()))),
                  t
                );
              }
              function Bn() {
                var t, u;
                return (
                  39 === e.charCodeAt(ku) ? ((t = V), ku++) : ((t = s), 0 === Uu && Vu(ft)),
                  t === s &&
                    (34 === e.charCodeAt(ku) ? ((t = Y), ku++) : ((t = s), 0 === Uu && Vu(dt)),
                    t === s &&
                      (92 === e.charCodeAt(ku) ? ((t = q), ku++) : ((t = s), 0 === Uu && Vu(ct)),
                      t === s &&
                        ((t = ku),
                        98 === e.charCodeAt(ku) ? ((u = ee), ku++) : ((u = s), 0 === Uu && Vu(Bt)),
                        u !== s && ((Iu = t), (u = xu())),
                        (t = u) === s &&
                          ((t = ku),
                          102 === e.charCodeAt(ku)
                            ? ((u = te), ku++)
                            : ((u = s), 0 === Uu && Vu(xt)),
                          u !== s && ((Iu = t), (u = vu())),
                          (t = u) === s &&
                            ((t = ku),
                            110 === e.charCodeAt(ku)
                              ? ((u = ue), ku++)
                              : ((u = s), 0 === Uu && Vu(vt)),
                            u !== s && ((Iu = t), (u = yu())),
                            (t = u) === s &&
                              ((t = ku),
                              114 === e.charCodeAt(ku)
                                ? ((u = ne), ku++)
                                : ((u = s), 0 === Uu && Vu(yt)),
                              u !== s && ((Iu = t), (u = bu())),
                              (t = u) === s &&
                                ((t = ku),
                                116 === e.charCodeAt(ku)
                                  ? ((u = re), ku++)
                                  : ((u = s), 0 === Uu && Vu(bt)),
                                u !== s && ((Iu = t), (u = Su())),
                                (t = u) === s &&
                                  ((t = ku),
                                  118 === e.charCodeAt(ku)
                                    ? ((u = oe), ku++)
                                    : ((u = s), 0 === Uu && Vu(St)),
                                  u !== s && ((Iu = t), (u = Pu())),
                                  (t = u))))))))),
                  t
                );
              }
              function xn() {
                var t, u, n, r, o, a, i, c;
                return (
                  (t = ku),
                  117 === e.charCodeAt(ku) ? ((u = se), ku++) : ((u = s), 0 === Uu && Vu(Ot)),
                  u !== s
                    ? ((n = ku),
                      (r = ku),
                      (o = yn()) !== s && (a = yn()) !== s && (i = yn()) !== s && (c = yn()) !== s
                        ? (r = o = [o, a, i, c])
                        : ((ku = r), (r = s)),
                      (n = r !== s ? e.substring(n, ku) : r) !== s
                        ? ((Iu = t), (t = wu(n)))
                        : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  t
                );
              }
              function vn() {
                var t;
                return (
                  pe.test(e.charAt(ku))
                    ? ((t = e.charAt(ku)), ku++)
                    : ((t = s), 0 === Uu && Vu(wt)),
                  t
                );
              }
              function yn() {
                var t;
                return (
                  Ae.test(e.charAt(ku))
                    ? ((t = e.charAt(ku)), ku++)
                    : ((t = s), 0 === Uu && Vu($t)),
                  t
                );
              }
              function bn() {
                var t, u, n, r;
                return (
                  Uu++,
                  (t = ku),
                  123 === e.charCodeAt(ku) ? ((u = p), ku++) : ((u = s), 0 === Uu && Vu(ve)),
                  u !== s
                    ? ((n = (function() {
                        var e, t;
                        return (e = ku), (t = Sn()), (Iu = e), (e = t = Ru(t));
                      })()),
                      125 === e.charCodeAt(ku) ? ((r = A), ku++) : ((r = s), 0 === Uu && Vu(ye)),
                      r !== s ? (t = n) : ((ku = t), (t = s)))
                    : ((ku = t), (t = s)),
                  Uu--,
                  t === s && ((u = s), 0 === Uu && Vu(Lt)),
                  t
                );
              }
              function Sn() {
                var t, u, n, r, o, a;
                if (
                  ((t = ku),
                  (u = []),
                  (n = []),
                  (r = ku),
                  (o = ku),
                  Uu++,
                  he.test(e.charAt(ku))
                    ? ((a = e.charAt(ku)), ku++)
                    : ((a = s), 0 === Uu && Vu(kt)),
                  Uu--,
                  a === s ? (o = void 0) : ((ku = o), (o = s)),
                  o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s)),
                  r !== s)
                )
                  for (; r !== s; )
                    n.push(r),
                      (r = ku),
                      (o = ku),
                      Uu++,
                      he.test(e.charAt(ku))
                        ? ((a = e.charAt(ku)), ku++)
                        : ((a = s), 0 === Uu && Vu(kt)),
                      Uu--,
                      a === s ? (o = void 0) : ((ku = o), (o = s)),
                      o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                else n = s;
                for (
                  n === s &&
                  ((n = ku),
                  123 === e.charCodeAt(ku) ? ((r = p), ku++) : ((r = s), 0 === Uu && Vu(ve)),
                  r !== s
                    ? ((o = Sn()),
                      125 === e.charCodeAt(ku) ? ((a = A), ku++) : ((a = s), 0 === Uu && Vu(ye)),
                      a !== s ? (n = r = [r, o, a]) : ((ku = n), (n = s)))
                    : ((ku = n), (n = s)));
                  n !== s;

                ) {
                  if (
                    (u.push(n),
                    (n = []),
                    (r = ku),
                    (o = ku),
                    Uu++,
                    he.test(e.charAt(ku))
                      ? ((a = e.charAt(ku)), ku++)
                      : ((a = s), 0 === Uu && Vu(kt)),
                    Uu--,
                    a === s ? (o = void 0) : ((ku = o), (o = s)),
                    o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s)),
                    r !== s)
                  )
                    for (; r !== s; )
                      n.push(r),
                        (r = ku),
                        (o = ku),
                        Uu++,
                        he.test(e.charAt(ku))
                          ? ((a = e.charAt(ku)), ku++)
                          : ((a = s), 0 === Uu && Vu(kt)),
                        Uu--,
                        a === s ? (o = void 0) : ((ku = o), (o = s)),
                        o !== s && (a = on()) !== s ? (r = o = [o, a]) : ((ku = r), (r = s));
                  else n = s;
                  n === s &&
                    ((n = ku),
                    123 === e.charCodeAt(ku) ? ((r = p), ku++) : ((r = s), 0 === Uu && Vu(ve)),
                    r !== s
                      ? ((o = Sn()),
                        125 === e.charCodeAt(ku) ? ((a = A), ku++) : ((a = s), 0 === Uu && Vu(ye)),
                        a !== s ? (n = r = [r, o, a]) : ((ku = n), (n = s)))
                      : ((ku = n), (n = s)));
                }
                return e.substring(t, ku);
              }
              function Pn() {
                var e, t;
                for (e = [], (t = an()) === s && (t = cn()) === s && (t = ln()); t !== s; )
                  e.push(t), (t = an()) === s && (t = cn()) === s && (t = ln());
                return e;
              }
              function On() {
                var t, u, n, r;
                if (
                  ((t = []),
                  (u = ku),
                  (n = Pn()),
                  59 === e.charCodeAt(ku) ? ((r = ce), ku++) : ((r = s), 0 === Uu && Vu(Yt)),
                  r !== s ? (u = n = [n, r]) : ((ku = u), (u = s)),
                  u !== s)
                )
                  for (; u !== s; )
                    t.push(u),
                      (u = ku),
                      (n = Pn()),
                      59 === e.charCodeAt(ku) ? ((r = ce), ku++) : ((r = s), 0 === Uu && Vu(Yt)),
                      r !== s ? (u = n = [n, r]) : ((ku = u), (u = s));
                else t = s;
                return (
                  t === s &&
                    ((t = ku),
                    (u = (function() {
                      var e, t;
                      for (e = [], (t = an()) === s && (t = pn()); t !== s; )
                        e.push(t), (t = an()) === s && (t = pn());
                      return e;
                    })()),
                    (n = An()) === s && (n = null),
                    (r = cn()) !== s ? (t = u = [u, n, r]) : ((ku = t), (t = s)),
                    t === s &&
                      ((t = ku),
                      (u = Pn()),
                      (n = (function() {
                        var t, u;
                        return (
                          (t = ku),
                          Uu++,
                          e.length > ku
                            ? ((u = e.charAt(ku)), ku++)
                            : ((u = s), 0 === Uu && Vu(He)),
                          Uu--,
                          u === s ? (t = void 0) : ((ku = t), (t = s)),
                          t
                        );
                      })()),
                      n !== s ? (t = u = [u, n]) : ((ku = t), (t = s)))),
                  t
                );
              }
              const wn = o.reservedWords || [];
              if ((a = l()) !== s && ku === e.length) return a;
              throw (a !== s && ku < e.length && Vu({ type: 'end' }),
              (function(e, t, u) {
                return new r(r.buildMessage(e, t), e, t, u);
              })(
                Mu,
                Tu < e.length ? e.charAt(Tu) : null,
                Tu < e.length ? Yu(Tu, Tu + 1) : Yu(Tu, Tu),
              ));
            },
          });
      },
      80154: (e, t, u) => {
        'use strict';
        const n = u(48256),
          r = u(49002),
          o = u(73629),
          a = u(68189),
          s = {
            VERSION: u(62415),
            RESERVED_WORDS: [
              'break',
              'case',
              'catch',
              'class',
              'const',
              'continue',
              'debugger',
              'default',
              'delete',
              'do',
              'else',
              'export',
              'extends',
              'finally',
              'for',
              'function',
              'if',
              'import',
              'in',
              'instanceof',
              'new',
              'return',
              'super',
              'switch',
              'this',
              'throw',
              'try',
              'typeof',
              'var',
              'void',
              'while',
              'with',
              'null',
              'true',
              'false',
              'enum',
              'implements',
              'interface',
              'let',
              'package',
              'private',
              'protected',
              'public',
              'static',
              'yield',
              'await',
              'arguments',
              'eval',
            ],
            GrammarError: n,
            GrammarLocation: r,
            parser: a,
            compiler: o,
            generate(e, t) {
              const u = 'plugins' in (t = void 0 !== t ? t : {}) ? t.plugins : [],
                n = {
                  parser: s.parser,
                  passes: (function(e) {
                    const t = {};
                    return (
                      Object.keys(e).forEach(u => {
                        t[u] = e[u].slice();
                      }),
                      t
                    );
                  })(s.compiler.passes),
                  reservedWords: s.RESERVED_WORDS.slice(),
                };
              return (
                u.forEach(e => {
                  e.use(n, t);
                }),
                s.compiler.compile(
                  n.parser.parse(e, {
                    grammarSource: t.grammarSource,
                    reservedWords: n.reservedWords,
                  }),
                  n.passes,
                  t,
                )
              );
            },
          };
        e.exports = s;
      },
      62415: e => {
        'use strict';
        e.exports = '3.0.2';
      },
      12443: (e, t) => {
        class u {
          constructor() {
            (this._array = []), (this._set = new Map());
          }
          static fromArray(e, t) {
            const n = new u();
            for (let u = 0, r = e.length; u < r; u++) n.add(e[u], t);
            return n;
          }
          size() {
            return this._set.size;
          }
          add(e, t) {
            const u = this.has(e),
              n = this._array.length;
            (u && !t) || this._array.push(e), u || this._set.set(e, n);
          }
          has(e) {
            return this._set.has(e);
          }
          indexOf(e) {
            const t = this._set.get(e);
            if (t >= 0) return t;
            throw new Error('"' + e + '" is not in the set.');
          }
          at(e) {
            if (e >= 0 && e < this._array.length) return this._array[e];
            throw new Error('No element indexed by ' + e);
          }
          toArray() {
            return this._array.slice();
          }
        }
        t.I = u;
      },
      61944: (e, t, u) => {
        const n = u(39286);
        t.encode = function(e) {
          let t,
            u = '',
            r = (function(e) {
              return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
            })(e);
          do {
            (t = 31 & r), (r >>>= 5), r > 0 && (t |= 32), (u += n.encode(t));
          } while (r > 0);
          return u;
        };
      },
      39286: (e, t) => {
        const u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
        t.encode = function(e) {
          if (0 <= e && e < u.length) return u[e];
          throw new TypeError('Must be between 0 and 63: ' + e);
        };
      },
      85460: (e, t, u) => {
        const n = u(8023);
        t.H = class {
          constructor() {
            (this._array = []),
              (this._sorted = !0),
              (this._last = { generatedLine: -1, generatedColumn: 0 });
          }
          unsortedForEach(e, t) {
            this._array.forEach(e, t);
          }
          add(e) {
            !(function(e, t) {
              const u = e.generatedLine,
                r = t.generatedLine,
                o = e.generatedColumn,
                a = t.generatedColumn;
              return (
                r > u || (r == u && a >= o) || n.compareByGeneratedPositionsInflated(e, t) <= 0
              );
            })(this._last, e)
              ? ((this._sorted = !1), this._array.push(e))
              : ((this._last = e), this._array.push(e));
          }
          toArray() {
            return (
              this._sorted ||
                (this._array.sort(n.compareByGeneratedPositionsInflated), (this._sorted = !0)),
              this._array
            );
          }
        };
      },
      41393: (e, t, u) => {
        const n = u(61944),
          r = u(8023),
          o = u(12443).I,
          a = u(85460).H;
        class s {
          constructor(e) {
            e || (e = {}),
              (this._file = r.getArg(e, 'file', null)),
              (this._sourceRoot = r.getArg(e, 'sourceRoot', null)),
              (this._skipValidation = r.getArg(e, 'skipValidation', !1)),
              (this._sources = new o()),
              (this._names = new o()),
              (this._mappings = new a()),
              (this._sourcesContents = null);
          }
          static fromSourceMap(e) {
            const t = e.sourceRoot,
              u = new s({ file: e.file, sourceRoot: t });
            return (
              e.eachMapping(function(e) {
                const n = { generated: { line: e.generatedLine, column: e.generatedColumn } };
                null != e.source &&
                  ((n.source = e.source),
                  null != t && (n.source = r.relative(t, n.source)),
                  (n.original = { line: e.originalLine, column: e.originalColumn }),
                  null != e.name && (n.name = e.name)),
                  u.addMapping(n);
              }),
              e.sources.forEach(function(n) {
                let o = n;
                null != t && (o = r.relative(t, n)), u._sources.has(o) || u._sources.add(o);
                const a = e.sourceContentFor(n);
                null != a && u.setSourceContent(n, a);
              }),
              u
            );
          }
          addMapping(e) {
            const t = r.getArg(e, 'generated'),
              u = r.getArg(e, 'original', null);
            let n = r.getArg(e, 'source', null),
              o = r.getArg(e, 'name', null);
            this._skipValidation || this._validateMapping(t, u, n, o),
              null != n && ((n = String(n)), this._sources.has(n) || this._sources.add(n)),
              null != o && ((o = String(o)), this._names.has(o) || this._names.add(o)),
              this._mappings.add({
                generatedLine: t.line,
                generatedColumn: t.column,
                originalLine: u && u.line,
                originalColumn: u && u.column,
                source: n,
                name: o,
              });
          }
          setSourceContent(e, t) {
            let u = e;
            null != this._sourceRoot && (u = r.relative(this._sourceRoot, u)),
              null != t
                ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
                  (this._sourcesContents[r.toSetString(u)] = t))
                : this._sourcesContents &&
                  (delete this._sourcesContents[r.toSetString(u)],
                  0 === Object.keys(this._sourcesContents).length &&
                    (this._sourcesContents = null));
          }
          applySourceMap(e, t, u) {
            let n = t;
            if (null == t) {
              if (null == e.file)
                throw new Error(
                  'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.',
                );
              n = e.file;
            }
            const a = this._sourceRoot;
            null != a && (n = r.relative(a, n));
            const s = this._mappings.toArray().length > 0 ? new o() : this._sources,
              i = new o();
            this._mappings.unsortedForEach(function(t) {
              if (t.source === n && null != t.originalLine) {
                const n = e.originalPositionFor({ line: t.originalLine, column: t.originalColumn });
                null != n.source &&
                  ((t.source = n.source),
                  null != u && (t.source = r.join(u, t.source)),
                  null != a && (t.source = r.relative(a, t.source)),
                  (t.originalLine = n.line),
                  (t.originalColumn = n.column),
                  null != n.name && (t.name = n.name));
              }
              const o = t.source;
              null == o || s.has(o) || s.add(o);
              const c = t.name;
              null == c || i.has(c) || i.add(c);
            }, this),
              (this._sources = s),
              (this._names = i),
              e.sources.forEach(function(t) {
                const n = e.sourceContentFor(t);
                null != n &&
                  (null != u && (t = r.join(u, t)),
                  null != a && (t = r.relative(a, t)),
                  this.setSourceContent(t, n));
              }, this);
          }
          _validateMapping(e, t, u, n) {
            if (t && 'number' != typeof t.line && 'number' != typeof t.column)
              throw new Error(
                'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.',
              );
            if (e && 'line' in e && 'column' in e && e.line > 0 && e.column >= 0 && !t && !u && !n);
            else if (
              !(
                e &&
                'line' in e &&
                'column' in e &&
                t &&
                'line' in t &&
                'column' in t &&
                e.line > 0 &&
                e.column >= 0 &&
                t.line > 0 &&
                t.column >= 0 &&
                u
              )
            )
              throw new Error(
                'Invalid mapping: ' +
                  JSON.stringify({ generated: e, source: u, original: t, name: n }),
              );
          }
          _serializeMappings() {
            let e,
              t,
              u,
              o,
              a = 0,
              s = 1,
              i = 0,
              c = 0,
              l = 0,
              p = 0,
              A = '';
            const h = this._mappings.toArray();
            for (let E = 0, d = h.length; E < d; E++) {
              if (((t = h[E]), (e = ''), t.generatedLine !== s))
                for (a = 0; t.generatedLine !== s; ) (e += ';'), s++;
              else if (E > 0) {
                if (!r.compareByGeneratedPositionsInflated(t, h[E - 1])) continue;
                e += ',';
              }
              (e += n.encode(t.generatedColumn - a)),
                (a = t.generatedColumn),
                null != t.source &&
                  ((o = this._sources.indexOf(t.source)),
                  (e += n.encode(o - p)),
                  (p = o),
                  (e += n.encode(t.originalLine - 1 - c)),
                  (c = t.originalLine - 1),
                  (e += n.encode(t.originalColumn - i)),
                  (i = t.originalColumn),
                  null != t.name &&
                    ((u = this._names.indexOf(t.name)), (e += n.encode(u - l)), (l = u))),
                (A += e);
            }
            return A;
          }
          _generateSourcesContent(e, t) {
            return e.map(function(e) {
              if (!this._sourcesContents) return null;
              null != t && (e = r.relative(t, e));
              const u = r.toSetString(e);
              return Object.prototype.hasOwnProperty.call(this._sourcesContents, u)
                ? this._sourcesContents[u]
                : null;
            }, this);
          }
          toJSON() {
            const e = {
              version: this._version,
              sources: this._sources.toArray(),
              names: this._names.toArray(),
              mappings: this._serializeMappings(),
            };
            return (
              null != this._file && (e.file = this._file),
              null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
              this._sourcesContents &&
                (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)),
              e
            );
          }
          toString() {
            return JSON.stringify(this.toJSON());
          }
        }
        (s.prototype._version = 3), (t.SourceMapGenerator = s);
      },
      5440: (e, t, u) => {
        const n = u(41393).SourceMapGenerator,
          r = u(8023),
          o = /(\r?\n)/,
          a = '$$$isSourceNode$$$';
        class s {
          constructor(e, t, u, n, r) {
            (this.children = []),
              (this.sourceContents = {}),
              (this.line = null == e ? null : e),
              (this.column = null == t ? null : t),
              (this.source = null == u ? null : u),
              (this.name = null == r ? null : r),
              (this[a] = !0),
              null != n && this.add(n);
          }
          static fromStringWithSourceMap(e, t, u) {
            const n = new s(),
              a = e.split(o);
            let i = 0;
            const c = function() {
              return e() + (e() || '');
              function e() {
                return i < a.length ? a[i++] : void 0;
              }
            };
            let l,
              p = 1,
              A = 0,
              h = null;
            return (
              t.eachMapping(function(e) {
                if (null !== h) {
                  if (!(p < e.generatedLine)) {
                    l = a[i] || '';
                    const t = l.substr(0, e.generatedColumn - A);
                    return (
                      (a[i] = l.substr(e.generatedColumn - A)),
                      (A = e.generatedColumn),
                      E(h, t),
                      void (h = e)
                    );
                  }
                  E(h, c()), p++, (A = 0);
                }
                for (; p < e.generatedLine; ) n.add(c()), p++;
                A < e.generatedColumn &&
                  ((l = a[i] || ''),
                  n.add(l.substr(0, e.generatedColumn)),
                  (a[i] = l.substr(e.generatedColumn)),
                  (A = e.generatedColumn)),
                  (h = e);
              }, this),
              i < a.length && (h && E(h, c()), n.add(a.splice(i).join(''))),
              t.sources.forEach(function(e) {
                const o = t.sourceContentFor(e);
                null != o && (null != u && (e = r.join(u, e)), n.setSourceContent(e, o));
              }),
              n
            );
            function E(e, t) {
              if (null === e || void 0 === e.source) n.add(t);
              else {
                const o = u ? r.join(u, e.source) : e.source;
                n.add(new s(e.originalLine, e.originalColumn, o, t, e.name));
              }
            }
          }
          add(e) {
            if (Array.isArray(e))
              e.forEach(function(e) {
                this.add(e);
              }, this);
            else {
              if (!e[a] && 'string' != typeof e)
                throw new TypeError(
                  'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + e,
                );
              e && this.children.push(e);
            }
            return this;
          }
          prepend(e) {
            if (Array.isArray(e)) for (let t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
            else {
              if (!e[a] && 'string' != typeof e)
                throw new TypeError(
                  'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + e,
                );
              this.children.unshift(e);
            }
            return this;
          }
          walk(e) {
            let t;
            for (let u = 0, n = this.children.length; u < n; u++)
              (t = this.children[u]),
                t[a]
                  ? t.walk(e)
                  : '' !== t &&
                    e(t, {
                      source: this.source,
                      line: this.line,
                      column: this.column,
                      name: this.name,
                    });
          }
          join(e) {
            let t, u;
            const n = this.children.length;
            if (n > 0) {
              for (t = [], u = 0; u < n - 1; u++) t.push(this.children[u]), t.push(e);
              t.push(this.children[u]), (this.children = t);
            }
            return this;
          }
          replaceRight(e, t) {
            const u = this.children[this.children.length - 1];
            return (
              u[a]
                ? u.replaceRight(e, t)
                : 'string' == typeof u
                ? (this.children[this.children.length - 1] = u.replace(e, t))
                : this.children.push(''.replace(e, t)),
              this
            );
          }
          setSourceContent(e, t) {
            this.sourceContents[r.toSetString(e)] = t;
          }
          walkSourceContents(e) {
            for (let t = 0, u = this.children.length; t < u; t++)
              this.children[t][a] && this.children[t].walkSourceContents(e);
            const t = Object.keys(this.sourceContents);
            for (let u = 0, n = t.length; u < n; u++)
              e(r.fromSetString(t[u]), this.sourceContents[t[u]]);
          }
          toString() {
            let e = '';
            return (
              this.walk(function(t) {
                e += t;
              }),
              e
            );
          }
          toStringWithSourceMap(e) {
            const t = { code: '', line: 1, column: 0 },
              u = new n(e);
            let r = !1,
              o = null,
              a = null,
              s = null,
              i = null;
            return (
              this.walk(function(e, n) {
                (t.code += e),
                  null !== n.source && null !== n.line && null !== n.column
                    ? ((o === n.source && a === n.line && s === n.column && i === n.name) ||
                        u.addMapping({
                          source: n.source,
                          original: { line: n.line, column: n.column },
                          generated: { line: t.line, column: t.column },
                          name: n.name,
                        }),
                      (o = n.source),
                      (a = n.line),
                      (s = n.column),
                      (i = n.name),
                      (r = !0))
                    : r &&
                      (u.addMapping({ generated: { line: t.line, column: t.column } }),
                      (o = null),
                      (r = !1));
                for (let a = 0, s = e.length; a < s; a++)
                  10 === e.charCodeAt(a)
                    ? (t.line++,
                      (t.column = 0),
                      a + 1 === s
                        ? ((o = null), (r = !1))
                        : r &&
                          u.addMapping({
                            source: n.source,
                            original: { line: n.line, column: n.column },
                            generated: { line: t.line, column: t.column },
                            name: n.name,
                          }))
                    : t.column++;
              }),
              this.walkSourceContents(function(e, t) {
                u.setSourceContent(e, t);
              }),
              { code: t.code, map: u }
            );
          }
        }
        t.SourceNode = s;
      },
      8023: (e, t) => {
        t.getArg = function(e, t, u) {
          if (t in e) return e[t];
          if (3 === arguments.length) return u;
          throw new Error('"' + t + '" is a required argument.');
        };
        const u = !('__proto__' in Object.create(null));
        function n(e) {
          return e;
        }
        function r(e) {
          if (!e) return !1;
          const t = e.length;
          if (t < 9) return !1;
          if (
            95 !== e.charCodeAt(t - 1) ||
            95 !== e.charCodeAt(t - 2) ||
            111 !== e.charCodeAt(t - 3) ||
            116 !== e.charCodeAt(t - 4) ||
            111 !== e.charCodeAt(t - 5) ||
            114 !== e.charCodeAt(t - 6) ||
            112 !== e.charCodeAt(t - 7) ||
            95 !== e.charCodeAt(t - 8) ||
            95 !== e.charCodeAt(t - 9)
          )
            return !1;
          for (let u = t - 10; u >= 0; u--) if (36 !== e.charCodeAt(u)) return !1;
          return !0;
        }
        function o(e, t) {
          return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1;
        }
        (t.toSetString = u
          ? n
          : function(e) {
              return r(e) ? '$' + e : e;
            }),
          (t.fromSetString = u
            ? n
            : function(e) {
                return r(e) ? e.slice(1) : e;
              }),
          (t.compareByGeneratedPositionsInflated = function(e, t) {
            let u = e.generatedLine - t.generatedLine;
            return 0 !== u
              ? u
              : ((u = e.generatedColumn - t.generatedColumn),
                0 !== u
                  ? u
                  : ((u = o(e.source, t.source)),
                    0 !== u
                      ? u
                      : ((u = e.originalLine - t.originalLine),
                        0 !== u
                          ? u
                          : ((u = e.originalColumn - t.originalColumn),
                            0 !== u ? u : o(e.name, t.name)))));
          });
        const a = 'http://host';
        function s(e) {
          return t => {
            const u = p(t),
              n = c(t),
              r = new URL(t, n);
            e(r);
            const o = r.toString();
            return 'absolute' === u
              ? o
              : 'scheme-relative' === u
              ? o.slice(5)
              : 'path-absolute' === u
              ? o.slice(a.length)
              : A(n, o);
          };
        }
        function i(e, t) {
          return new URL(e, t).toString();
        }
        function c(e) {
          const t = e.split('..').length - 1,
            u = (function(e, t) {
              let u = 0;
              for (;;) {
                const e = 'p' + u++;
                if (-1 === t.indexOf(e)) return e;
              }
            })(0, e);
          let n = `${a}/`;
          for (let e = 0; e < t; e++) n += `${u}/`;
          return n;
        }
        const l = /^[A-Za-z0-9\+\-\.]+:/;
        function p(e) {
          return '/' === e[0]
            ? '/' === e[1]
              ? 'scheme-relative'
              : 'path-absolute'
            : l.test(e)
            ? 'absolute'
            : 'path-relative';
        }
        function A(e, t) {
          'string' == typeof e && (e = new URL(e)), 'string' == typeof t && (t = new URL(t));
          const u = t.pathname.split('/'),
            n = e.pathname.split('/');
          for (
            n.length > 0 && !n[n.length - 1] && n.pop();
            u.length > 0 && n.length > 0 && u[0] === n[0];

          )
            u.shift(), n.shift();
          return (
            n
              .map(() => '..')
              .concat(u)
              .join('/') +
            t.search +
            t.hash
          );
        }
        const h = s(e => {
            e.pathname = e.pathname.replace(/\/?$/, '/');
          }),
          E = s(e => {});
        (t.normalize = E),
          (t.join = function(e, t) {
            const u = p(t),
              n = p(e);
            if (((e = h(e)), 'absolute' === u)) return i(t, void 0);
            if ('absolute' === n) return i(t, e);
            if ('scheme-relative' === u) return E(t);
            if ('scheme-relative' === n) return i(t, i(e, a)).slice(5);
            if ('path-absolute' === u) return E(t);
            if ('path-absolute' === n) return i(t, i(e, a)).slice(a.length);
            const r = c(t + e);
            return A(r, i(t, i(e, r)));
          }),
          (t.relative = function(e, t) {
            const u = (function(e, t) {
              if (p(e) !== p(t)) return null;
              const u = c(e + t),
                n = new URL(e, u),
                r = new URL(t, u);
              try {
                new URL('', r.toString());
              } catch (e) {
                return null;
              }
              return r.protocol !== n.protocol ||
                r.user !== n.user ||
                r.password !== n.password ||
                r.hostname !== n.hostname ||
                r.port !== n.port
                ? null
                : A(n, r);
            })(e, t);
            return 'string' == typeof u ? u : E(t);
          });
      },
      10782: (e, t, u) => {
        (t.SourceMapGenerator = u(41393).SourceMapGenerator), (t.SourceNode = u(5440).SourceNode);
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var u = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
  }
  (__webpack_require__.d = (e, t) => {
    for (var u in t)
      __webpack_require__.o(t, u) &&
        !__webpack_require__.o(e, u) &&
        Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
  }),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    'use strict';
    __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, {
        registerWooBlockType: () => p,
        useLayoutTemplate: () => n,
        useWooBlockProps: () => o,
      });
    const e = window.wp.element,
      t = window.wp.coreData,
      u = window.wp.data,
      n = n => {
        const [r, o] = (0, e.useState)(!1);
        (0, e.useEffect)(() => {
          n &&
            ((0, u.select)('core').getEntityConfig('root', 'wcLayoutTemplate') ||
              (0, u.dispatch)('core').addEntities([
                {
                  kind: 'root',
                  name: 'wcLayoutTemplate',
                  baseURL: '/wc/v3/layout-templates',
                  label: 'Layout Templates',
                },
              ]),
            o(!0));
        }, [n]);
        const { record: a, isResolving: s } = (0, t.useEntityRecord)(
          'root',
          'wcLayoutTemplate',
          n || '__invalid-template-id',
          { enabled: r },
        );
        return { layoutTemplate: a, isResolving: s };
      },
      r = window.wp.blockEditor,
      o = (e, t = {}) => {
        const u = {
          'data-template-block-id': e._templateBlockId,
          'data-template-block-order': e._templateBlockOrder,
          tabIndex: -1,
          ...t,
        };
        return (0, r.useBlockProps)(u);
      },
      a = window.wp.blocks,
      s = __webpack_require__(80154).generate(
        '\n{{\n\tfunction evaluateUnaryExpression( operator, operand ) {\n\t\tswitch ( operator ) {\n\t\t\tcase \'!\':\n\t\t\t\treturn !operand;\n\t\t\t\tbreak;\n\t\t\tcase \'-\':\n\t\t\t\treturn -operand;\n\t\t\t\tbreak;\n\t\t\tcase \'+\':\n\t\t\t\treturn +operand;\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\treturn undefined;\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tfunction evaluateBinaryExpression( head, tail ) {\n\t\treturn tail.reduce( ( leftOperand, tailElement ) => {\n\t\t\tconst operator = tailElement[ 1 ];\n\t\t\tconst rightOperand = tailElement[ 3 ];\n\n\t\t\tswitch ( operator ) {\n\t\t\t\tcase \'&&\':\n\t\t\t\t\treturn leftOperand && rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'||\':\n\t\t\t\t\treturn leftOperand || rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'===\':\n\t\t\t\t\treturn leftOperand === rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'!==\':\n\t\t\t\t\treturn leftOperand !== rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'==\':\n\t\t\t\t\treturn leftOperand == rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'!=\':\n\t\t\t\t\treturn leftOperand != rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'<=\':\n\t\t\t\t\treturn leftOperand <= rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'<\':\n\t\t\t\t\treturn leftOperand < rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'>=\':\n\t\t\t\t\treturn leftOperand >= rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'>\':\n\t\t\t\t\treturn leftOperand > rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'+\':\n\t\t\t\t\treturn leftOperand + rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'-\':\n\t\t\t\t\treturn leftOperand - rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'*\':\n\t\t\t\t\treturn leftOperand * rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'/\':\n\t\t\t\t\treturn leftOperand / rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \'%\':\n\t\t\t\t\treturn leftOperand % rightOperand;\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\treturn undefined;\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t}, head );\n\t}\n\n\tfunction getPropertyValue( obj, propertyName ) {\n\t\tif ( Object.hasOwn( obj, propertyName ) ) {\n\t\t\treturn obj[ propertyName ];\n\t\t} else if (\n\t\t\tArray.isArray( obj ) &&\n\t\t\tobj.length > 0 &&\n\t\t\tObject.hasOwn( obj[ 0 ], \'key\' ) &&\n\t\t\tObject.hasOwn( obj[ 0 ], \'value\' )\n\t\t) {\n\t\t\t// We likely dealing with an array of objects with key/value pairs (like post meta data)\n\t\t\tconst item = obj.find( ( item ) => item.key === propertyName );\n\t\t\treturn item?.value;\n\t\t}\n\n\t\treturn undefined;\n\t}\n}}\n\nStart\n\t= Expression\n\nSourceCharacter\n\t= .\n\nWhiteSpace\n\t= " "\n\t/ "\\t"\n\nLineTerminator\n\t= "\\n"\n\t/ "\\r"\n\t/ "\\u2028"\n\t/ "\\u2029"\n\nLineTerminatorSequence\n\t= "\\n"\n\t/ "\\r\\n"\n\t/ "\\r"\n\t/ "\\u2028"\n\t/ "\\u2029"\n\nComment "comment"\n\t= MultiLineComment\n\nMultiLineComment\n\t= "/*" (!"*/" SourceCharacter)* "*/"\n\n__ "skipped"\n\t= (WhiteSpace / LineTerminatorSequence / Comment)*\n\nIdentifierPath\n\t= variable:Identifier accessor:(__ "." __ Identifier)* {\n\t\tconst path = variable.split( \'.\' );\n\t\tlet result = path.reduce( getPropertyValue, options.context );\n\n\t\tfor ( let i = 0; i < accessor.length; i++ ) {\n\t\t\tresult = getPropertyValue( result, accessor[ i ][ 3 ] );\n\t\t}\n\n\t\treturn result;\n\t}\n\nIdentifier\n\t= !ReservedWord name:IdentifierName {\n\t\treturn name;\n\t}\n\nIdentifierName\n\t= first:IdentifierStart rest:IdentifierPart* {\n\t\treturn text();\n\t}\n\nIdentifierStart\n\t= [a-zA-Z]\n\t/ "_"\n\t/ "$"\n\nIdentifierPart\n\t= IdentifierStart\n\nReservedWord\n\t= NullLiteral\n\t/ BooleanLiteral\n\n// Literals\n\nLiteral\n\t= NullLiteral\n\t/ BooleanLiteral\n\t/ NumericLiteral\n\t/ StringLiteral\n\nNullLiteral\n\t= NullToken { return null; }\n\nBooleanLiteral\n\t= "true" { return true; }\n\t/ "false" { return false; }\n\nNumericLiteral\n\t= literal:HexIntegerLiteral !(IdentifierStart / DecimalDigit) {\n\t\treturn literal;\n\t}\n\t/ literal:DecimalLiteral !(IdentifierStart / DecimalDigit) {\n\t\treturn literal;\n\t}\n\nHexIntegerLiteral\n\t= "0x"i digits:$HexDigit+ {\n\t\treturn parseInt( digits, 16 );\n\t}\n\nHexDigit\n\t= [0-9a-f]i\n\nDecimalLiteral\n\t= DecimalIntegerLiteral "." DecimalDigit* ExponentPart? {\n\t\treturn parseFloat( text() );\n\t}\n\t/ "." DecimalDigit+ ExponentPart? {\n\t\treturn parseFloat( text() );\n\t}\n\t/ DecimalIntegerLiteral ExponentPart? {\n\t\treturn parseFloat( text() );\n\t}\n\nDecimalIntegerLiteral\n\t= "0"\n\t/ NonZeroDigit DecimalDigit*\n\nDecimalDigit\n\t= [0-9]\n\nNonZeroDigit\n\t= [1-9]\n\nExponentPart\n\t= ExponentIndicator SignedInteger\n\nExponentIndicator\n\t= "e"i\n\nSignedInteger\n\t= [+-]? DecimalDigit+\n\nStringLiteral\n\t= \'"\' chars:DoubleQuotedStringCharacter* \'"\' {\n\t\treturn chars.join( \'\' );\n\t}\n\t/ "\'" chars:SingleQuotedStringCharacter* "\'" {\n\t\treturn chars.join( \'\' );\n\t}\n\nDoubleQuotedStringCharacter\n\t= !(\'"\' / "\\\\" / LineTerminator) SourceCharacter {\n\t\treturn text();\n\t}\n\t/ "\\\\" escapeSequence:EscapeSequence {\n\t\treturn escapeSequence;\n\t}\n\t/ LineContinuation\n\nSingleQuotedStringCharacter\n\t= !("\'" / "\\\\" / LineTerminator) SourceCharacter {\n\t\treturn text();\n\t}\n\t/ "\\\\" escapeSequence:EscapeSequence {\n\t\treturn escapeSequence;\n\t}\n\t/ LineContinuation\n\nLineContinuation\n\t= "\\\\" LineTerminatorSequence {\n\t\treturn \'\';\n\t}\n\nEscapeSequence\n\t= CharacterEscapeSequence\n\t/ "0" !DecimalDigit {\n\t\treturn "\\0";\n\t}\n\t/ HexEscapeSequence\n\t/ UnicodeEscapeSequence\n\nCharacterEscapeSequence\n\t= SingleEscapeCharacter\n\t/ NonEscapeCharacter\n\nSingleEscapeCharacter\n\t= "\'"\n\t/ \'"\'\n\t/ "\\\\"\n\t/ "b" {\n\t\treturn "\\b";\n\t}\n\t/ "f" {\n\t\treturn "\\f";\n\t}\n\t/ "n" {\n\t\treturn "\\n";\n\t}\n\t/ "r" {\n\t\treturn "\\r";\n\t}\n\t/ "t" {\n\t\treturn "\\t";\n\t}\n\t/ "v" {\n\t\treturn "\\v";\n\t}\n\nNonEscapeCharacter\n\t= (!EscapeCharacter / LineTerminator) SourceCharacter {\n\t\treturn text();\n\t}\n\nEscapeCharacter\n\t= SingleEscapeCharacter\n\t/ DecimalDigit\n\t/ "x"\n\t/ "u"\n\nHexEscapeSequence\n\t= "x" digits:$(HexDigit HexDigit) {\n\t\treturn String.fromCharCode( parseInt( digits, 16 ) );\n\t}\n\nUnicodeEscapeSequence\n\t= "u" digits:$(HexDigit HexDigit HexDigit HexDigit) {\n\t\treturn String.fromCharCode( parseInt( digits, 16 ) );\n\t}\n\n// Tokens\n\nNullToken\n\t= "null" !IdentifierPart\n\nTrueToken\n\t= "true" !IdentifierPart\n\nFalseToken\n\t= "false" !IdentifierPart\n\n// Expressions\n\nPrimaryExpression\n\t= IdentifierPath\n\t/ Literal\n\t/ "(" __ expression:Expression __ ")" {\n\t\treturn expression;\n\t}\n\nUnaryExpression\n\t= PrimaryExpression\n\t/ operator:UnaryOperator __ operand:UnaryExpression {\n\t\treturn evaluateUnaryExpression( operator, operand );\n\t}\n\nUnaryOperator\n\t= "!"\n\t/ "-"\n\t/ "+"\n\nMultiplicativeExpression\n\t= head:UnaryExpression tail:(__ MultiplicativeOperator __ UnaryExpression)* {\n\t\treturn evaluateBinaryExpression( head, tail );\n\t}\n\nMultiplicativeOperator\n\t= "*"\n\t/ "/"\n\t/ "%"\n\nAdditiveExpression\n\t= head:MultiplicativeExpression tail:(__ AdditiveOperator __ MultiplicativeExpression)* {\n\t\treturn evaluateBinaryExpression( head, tail );\n\t}\n\nAdditiveOperator\n\t= "+"\n\t/ "-"\n\nRelationalExpression\n\t= head:AdditiveExpression tail:(__ RelationalOperator __ AdditiveExpression)* {\n\t\treturn evaluateBinaryExpression( head, tail );\n\t}\n\nRelationalOperator\n\t= "<="\n\t/ "<"\n\t/ ">="\n\t/ ">"\n\nEqualityExpression\n\t= head:RelationalExpression tail:(__ EqualityOperator __ RelationalExpression)* {\n\t\treturn evaluateBinaryExpression( head, tail );\n\t}\n\nEqualityOperator\n\t= "==="\n\t/ "!=="\n\t/ "=="\n\t/ "!="\n\nLogicalAndExpression\n\t= head:EqualityExpression tail:(__ LogicalAndOperator __ EqualityExpression)* {\n\t\treturn evaluateBinaryExpression( head, tail );\n\t}\n\nLogicalAndOperator\n\t= "&&"\n\nLogicalOrExpression\n\t= head:LogicalAndExpression tail:(__ LogicalOrOperator __ LogicalAndExpression)* {\n\t\treturn evaluateBinaryExpression( head, tail );\n\t}\n\nLogicalOrOperator\n\t= "||"\n\nConditionalExpression\n\t= condition:LogicalOrExpression __ ConditionalTrueOperator __ expressionIfTrue:ConditionalExpression __ ConditionalFalseOperator __ expressionIfFalse:ConditionalExpression {\n\t\treturn condition ? expressionIfTrue : expressionIfFalse;\n\t}\n\t/ LogicalOrExpression\n\nConditionalTrueOperator\n\t= "?"\n\nConditionalFalseOperator\n\t= ":"\n\nExpression\n\t= __ expression:ConditionalExpression __ {\n\t\treturn expression;\n\t}\n',
      );
    function i(e, t = {}) {
      return s.parse(e, { context: t });
    }
    function c(e) {
      return { getEvaluationContext: () => e };
    }
    function l(t, n) {
      return r => {
        const { context: o } = r,
          { _templateBlockHideConditions: a, _templateBlockDisableConditions: s } = r.attributes,
          { getEvaluationContext: c } = n(o),
          { shouldHide: l, shouldDisable: p } = (0, u.useSelect)(
            e => {
              const t = c(e);
              return {
                shouldHide: a && Array.isArray(a) && a.some(e => i(e.expression, t)),
                shouldDisable: s && Array.isArray(s) && s.some(e => i(e.expression, t)),
              };
            },
            [c, a, s],
          );
        return !t || l
          ? null
          : (0, e.createElement)(t, {
              ...r,
              attributes: { ...r.attributes, disabled: r.attributes.disabled || p },
            });
      };
    }
    function p(e, t) {
      if (!e) return;
      const { metadata: u, settings: n, name: r } = e,
        { edit: o } = n;
      if (!o) return;
      const s = {
        ...u,
        attributes:
          ((i = u.attributes),
          {
            ...i,
            _templateBlockId: { type: 'string', __experimentalRole: 'content' },
            _templateBlockOrder: { type: 'integer', __experimentalRole: 'content' },
            _templateBlockHideConditions: { type: 'array', __experimentalRole: 'content' },
            _templateBlockDisableConditions: { type: 'array', __experimentalRole: 'content' },
            disabled: i.disabled || { type: 'boolean', __experimentalRole: 'content' },
          }),
      };
      var i;
      return (0, a.registerBlockType)({ name: r, ...s }, { ...n, edit: l(o, null != t ? t : c) });
    }
  })(),
    ((window.wc = window.wc || {}).blockTemplates = __webpack_exports__);
})();
