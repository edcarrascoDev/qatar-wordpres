'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [4882],
  {
    73224: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(69307),
        r = a(70444);
      const c = (0, n.createElement)(
        r.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, n.createElement)(r.Path, { d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z' }),
      );
    },
    86241: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(69307),
        r = a(70444);
      const c = (0, n.createElement)(
        r.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, n.createElement)(r.Path, { d: 'M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z' }),
      );
    },
    26184: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(69307),
        r = a(70444);
      const c = (0, n.createElement)(
        r.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(r.Path, {
          fillRule: 'evenodd',
          d:
            'M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z',
          clipRule: 'evenodd',
        }),
      );
    },
    30138: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Ht });
      var n = {};
      a.r(n),
        a.d(n, {
          activateInstalledPlugin: () => T,
          handleFetchError: () => v,
          installAndActivateRecommendedPlugin: () => j,
          loadInstalledPluginsAfterActivation: () => I,
          receiveActivatingPlugin: () => w,
          receiveBlogPosts: () => _,
          receiveInstalledPlugins: () => C,
          receiveRecommendedPlugins: () => y,
          removeActivatingPlugin: () => N,
          setError: () => L,
        });
      var r = {};
      a.r(r),
        a.d(r, {
          getActivatingPlugins: () => k,
          getBlogPosts: () => D,
          getBlogPostsError: () => S,
          getInstalledPlugins: () => A,
          getRecommendedPlugins: () => f,
        });
      var c = {};
      a.r(c), a.d(c, { getBlogPosts: () => x, getRecommendedPlugins: () => O });
      var l = {};
      a.r(l),
        a.d(l, {
          receiveCampaignTypes: () => ae,
          receiveCampaigns: () => te,
          receiveRecommendedChannelsError: () => ee,
          receiveRecommendedChannelsSuccess: () => q,
          receiveRegisteredChannelsError: () => K,
          receiveRegisteredChannelsSuccess: () => X,
        });
      var o = {};
      a.r(o),
        a.d(o, {
          getCampaignTypes: () => le,
          getCampaigns: () => ce,
          getRecommendedChannels: () => re,
          getRegisteredChannels: () => ne,
        });
      var i = {};
      a.r(i),
        a.d(i, {
          getCampaignTypes: () => ge,
          getCampaigns: () => me,
          getRecommendedChannels: () => ie,
          getRegisteredChannels: () => oe,
        });
      var s = {};
      a.r(s),
        a.d(s, {
          amazonEbayIntegration: () => Ne,
          automatewoo: () => ye,
          automatewooAlt: () => _e,
          automatewooBirthdays: () => ye,
          automatewooReferrals: () => ye,
          blank: () => we,
          creativeMailByConstantContact: () => fe,
          facebook: () => ve,
          facebookForWoocommerce: () => ve,
          googleAds: () => Ie,
          googleListingsAndAds: () => Ie,
          hubspotForWoocommerce: () => Te,
          integrationWithSalesforce: () => Se,
          klaviyo: () => ke,
          mailchimpForWoocommerce: () => je,
          mailpoet: () => Ae,
          pinterest: () => Le,
          pinterestForWoocommerce: () => Le,
          tiktokForBusiness: () => Oe,
          trustpilotReviews: () => Pe,
          vimeo: () => ze,
          woocommerceAmazonEbayIntegration: () => Ne,
          woocommerceFreeGiftCoupons: () => Re,
          woocommerceGroupCoupons: () => Ve,
          woocommerceSmartCoupons: () => Ze,
          woocommerceStoreCredit: () => be,
          woocommerceUrlCoupons: () => Ue,
          woocommerceZapier: () => xe,
          zeroBsCrm: () => De,
        });
      var m = a(69307),
        g = a(67221),
        d = a(23418),
        u = a(9818);
      const E = 'wc/marketing',
        M = '/wc-admin/marketing';
      var p = a(65736);
      const h = {
        SET_INSTALLED_PLUGINS: 'SET_INSTALLED_PLUGINS',
        SET_ACTIVATING_PLUGIN: 'SET_ACTIVATING_PLUGIN',
        REMOVE_ACTIVATING_PLUGIN: 'REMOVE_ACTIVATING_PLUGIN',
        SET_RECOMMENDED_PLUGINS: 'SET_RECOMMENDED_PLUGINS',
        INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN: 'INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN',
        SET_BLOG_POSTS: 'SET_BLOG_POSTS',
        SET_ERROR: 'SET_ERROR',
      };
      function C(e) {
        return { type: h.SET_INSTALLED_PLUGINS, plugins: e };
      }
      function w(e) {
        return { type: h.SET_ACTIVATING_PLUGIN, pluginSlug: e };
      }
      function N(e) {
        return { type: h.REMOVE_ACTIVATING_PLUGIN, pluginSlug: e };
      }
      function y(e, t) {
        return { type: h.SET_RECOMMENDED_PLUGINS, data: { plugins: e, category: t } };
      }
      function _(e, t) {
        return { type: h.SET_BLOG_POSTS, data: { posts: e, category: t } };
      }
      function v(e, t) {
        const { createNotice: a } = (0, u.dispatch)('core/notices');
        a('error', t), console.log(e);
      }
      function L(e, t) {
        return { type: h.SET_ERROR, category: e, error: t };
      }
      function* I(e) {
        try {
          const t = yield (0, d.apiFetch)({ path: `${M}/overview/installed-plugins` });
          if (!t) throw new Error();
          yield C(t), yield N(e);
        } catch (e) {
          yield v(e, (0, p.__)('There was an error loading installed extensions.', 'woocommerce'));
        }
      }
      function* T(e) {
        const { createNotice: t } = (0, u.dispatch)('core/notices');
        yield w(e);
        try {
          if (
            !(yield (0, d.apiFetch)({
              path: M + '/overview/activate-plugin',
              method: 'POST',
              data: { plugin: e },
            }))
          )
            throw new Error();
          yield t(
            'success',
            (0, p.__)('The extension has been successfully activated.', 'woocommerce'),
          ),
            yield I(e);
        } catch (t) {
          yield v(
            t,
            (0, p.__)('There was an error trying to activate the extension.', 'woocommerce'),
          ),
            yield N(e);
        }
        return !0;
      }
      function* j(e, t) {
        return {
          type: h.INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN,
          data: { pluginSlug: e, category: t },
        };
      }
      function A(e) {
        return e.installedPlugins;
      }
      function k(e) {
        return e.activatingPlugins;
      }
      function f(e, t) {
        return e.recommendedPlugins[t] || [];
      }
      function D(e, t) {
        return e.blogPosts[t] || [];
      }
      function S(e, t) {
        return e.errors.blogPosts && e.errors.blogPosts[t];
      }
      function* O(e) {
        try {
          const t = yield e ? `&category=${e}` : '',
            a = yield (0, d.apiFetch)({ path: `${M}/recommended?per_page=50${t}` });
          if (!a) throw new Error();
          yield y(a, e);
        } catch (e) {
          yield v(
            e,
            (0, p.__)('There was an error loading recommended extensions.', 'woocommerce'),
          );
        }
      }
      function* x(e) {
        try {
          const t = yield e ? `?category=${e}` : '',
            a = yield (0, d.apiFetch)({ path: `${M}/knowledge-base${t}`, method: 'GET' });
          if (!a) throw new Error();
          yield _(a, e);
        } catch (t) {
          yield L(e, t);
        }
      }
      var z = a(92819),
        P = a(17062);
      const { installedExtensions: b } = (0, P.O3)('marketing', {}),
        R = {
          installedPlugins: b,
          activatingPlugins: [],
          recommendedPlugins: {},
          blogPosts: {},
          errors: {},
        };
      (0, u.registerStore)(E, {
        actions: n,
        selectors: r,
        resolvers: c,
        controls: d.controls,
        reducer: (e = R, t) => {
          switch (t.type) {
            case h.SET_INSTALLED_PLUGINS:
              return { ...e, installedPlugins: t.plugins };
            case h.SET_ACTIVATING_PLUGIN:
              return { ...e, activatingPlugins: [...e.activatingPlugins, t.pluginSlug] };
            case h.REMOVE_ACTIVATING_PLUGIN:
              return { ...e, activatingPlugins: (0, z.without)(e.activatingPlugins, t.pluginSlug) };
            case h.SET_RECOMMENDED_PLUGINS:
              return {
                ...e,
                recommendedPlugins: { ...e.recommendedPlugins, [t.data.category]: t.data.plugins },
              };
            case h.INSTALL_AND_ACTIVATE_RECOMMENDED_PLUGIN:
              const a = e.recommendedPlugins[t.data.category]?.filter(
                e => e.product !== t.data.pluginSlug,
              );
              return {
                ...e,
                recommendedPlugins: { ...e.recommendedPlugins, [t.data.category]: a },
              };
            case h.SET_BLOG_POSTS:
              return { ...e, blogPosts: { ...e.blogPosts, [t.data.category]: t.data.posts } };
            case h.SET_ERROR:
              return {
                ...e,
                errors: {
                  ...e.errors,
                  blogPosts: { ...e.errors.blogPosts, [t.category]: t.error },
                },
              };
            default:
              return e;
          }
        },
      });
      const U = 'wc/marketing-multichannel',
        V = '/wc-admin/marketing',
        Z = 'RECEIVE_REGISTERED_CHANNELS_SUCCESS',
        G = 'RECEIVE_REGISTERED_CHANNELS_ERROR',
        B = 'RECEIVE_RECOMMENDED_CHANNELS_SUCCESS',
        F = 'RECEIVE_RECOMMENDED_CHANNELS_ERROR',
        Y = 'RECEIVE_CAMPAIGNS',
        Q = 'RECEIVE_CAMPAIGN_TYPES',
        H = {
          registeredChannels: { data: void 0, error: void 0 },
          recommendedChannels: { data: void 0, error: void 0 },
          campaigns: { pages: {}, meta: { total: void 0 } },
          campaignTypes: { data: void 0, error: void 0 },
        },
        $ = e => ({ type: 'AWAIT_RESPONSE_JSON', response: e }),
        W = { ...d.controls, AWAIT_RESPONSE_JSON: e => e.response.json() },
        J = e =>
          (e => !!e && 'object' == typeof e)(e) && 'code' in e && 'data' in e && 'message' in e,
        X = e => ({ type: Z, payload: e }),
        K = e => ({ type: G, payload: e, error: !0 }),
        q = e => ({ type: B, payload: e }),
        ee = e => ({ type: F, payload: e, error: !0 }),
        te = e => ({ type: Y, ...e }),
        ae = e => (J(e) ? { type: Q, payload: e, error: !0 } : { type: Q, payload: e, error: !1 }),
        ne = e => e.registeredChannels,
        re = e => e.recommendedChannels,
        ce = (e, t, a) => {
          const n = `${t}-${a}`;
          return { campaignsPage: e.campaigns.pages[n] || null, meta: e.campaigns.meta };
        },
        le = e => e.campaignTypes;
      function* oe() {
        try {
          const e = yield (0, d.apiFetch)({ path: `${V}/channels` });
          yield X(e);
        } catch (e) {
          throw (J(e) && (yield K(e)), e);
        }
      }
      function* ie() {
        try {
          const e = yield (0, d.apiFetch)({ path: `${V}/recommendations?category=channels` });
          yield q(e);
        } catch (e) {
          throw (J(e) && (yield ee(e)), e);
        }
      }
      const se = e => {
        const t = e.headers.get('x-wp-total');
        if (null !== t) return parseInt(t, 10);
      };
      function* me(e, t) {
        try {
          const a = yield (0, d.apiFetch)({
              path: `${V}/campaigns?page=${e}&per_page=${t}`,
              parse: !1,
            }),
            n = se(a),
            r = yield $(a);
          yield te({ payload: r, error: !1, meta: { page: e, perPage: t, total: n } });
        } catch (a) {
          if (a instanceof Response) {
            const n = se(a),
              r = yield $(a);
            yield te({ payload: r, error: !0, meta: { page: e, perPage: t, total: n } });
          }
          throw a;
        }
      }
      function* ge() {
        try {
          const e = yield (0, d.apiFetch)({ path: `${V}/campaign-types` });
          yield ae(e);
        } catch (e) {
          J(e) && (yield ae(e));
        }
      }
      const de = (0, u.createReduxStore)(U, {
        reducer: (e = H, t) => {
          switch (t.type) {
            case Z:
              return { ...e, registeredChannels: { data: t.payload } };
            case G:
              return { ...e, registeredChannels: { error: t.payload } };
            case B:
              return { ...e, recommendedChannels: { data: t.payload } };
            case F:
              return { ...e, recommendedChannels: { error: t.payload } };
            case Y:
              const { meta: a } = t,
                n = `${a.page}-${a.perPage}`;
              return {
                ...e,
                campaigns: {
                  pages: {
                    ...e.campaigns.pages,
                    [n]: t.error ? { error: t.payload } : { data: t.payload },
                  },
                  meta: { total: a.total },
                },
              };
            case Q:
              return { ...e, campaignTypes: t.error ? { error: t.payload } : { data: t.payload } };
            default:
              return e;
          }
        },
        actions: l,
        selectors: o,
        resolvers: i,
        controls: W,
      });
      (0, u.register)(de);
      var ue = a(87608),
        Ee = a.n(ue),
        Me = a(7862),
        pe = a.n(Me),
        he = a(23374),
        Ce = a(70444);
      const we = (0, m.createElement)(Ce.SVG, {
          width: '36',
          height: '36',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        Ne = (0, m.createElement)(
          Ce.SVG,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '100',
            height: '100',
            viewBox: '0 0 100 100',
          },
          (0, m.createElement)(
            'defs',
            null,
            (0, m.createElement)(
              'clipPath',
              { id: 'b' },
              (0, m.createElement)('rect', { width: '100', height: '100' }),
            ),
          ),
          (0, m.createElement)(
            'g',
            { id: 'a', clipPath: 'url(#b)' },
            (0, m.createElement)('rect', { width: '100', height: '100', fill: '#fff' }),
            (0, m.createElement)('rect', { width: '100', height: '100', fill: '#eee' }),
            (0, m.createElement)(
              'g',
              { transform: 'translate(9 25.655)' },
              (0, m.createElement)(Ce.Path, {
                d:
                  'M179.753,195.8c-4.732,3.488-11.591,5.349-17.5,5.349a31.66,31.66,0,0,1-21.374-8.156c-.443-.4-.046-.946.486-.634a43.018,43.018,0,0,0,21.384,5.671,42.523,42.523,0,0,0,16.312-3.335c.8-.34,1.471.525.688,1.106',
                transform: 'translate(-129.235 -176.611)',
                fill: '#f90',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M577.807,183.949c-.6-.773-4-.365-5.522-.184-.464.057-.535-.347-.117-.638,2.7-1.9,7.142-1.354,7.66-.716s-.135,5.09-2.676,7.213c-.39.326-.762.152-.588-.28.571-1.425,1.85-4.619,1.244-5.395',
                transform: 'translate(-525.323 -167.01)',
                fill: '#f90',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M572.708,6.758V4.908a.457.457,0,0,1,.468-.468h8.284a.461.461,0,0,1,.479.468V6.493a2.605,2.605,0,0,1-.624,1.163l-4.292,6.129a9.146,9.146,0,0,1,4.725,1.014.843.843,0,0,1,.44.72v1.974c0,.269-.3.585-.61.422a9.542,9.542,0,0,0-8.752.014c-.287.156-.588-.156-.588-.425V15.627a2.238,2.238,0,0,1,.3-1.272l4.973-7.132h-4.328a.458.458,0,0,1-.479-.464',
                transform: 'translate(-525.64 -4.078)',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M173.431,15.624h-2.52a.476.476,0,0,1-.45-.429V2.261a.473.473,0,0,1,.486-.464h2.35a.475.475,0,0,1,.457.432V3.92h.046a3.463,3.463,0,0,1,6.589,0,3.722,3.722,0,0,1,6.4-.982c.8,1.088.634,2.669.634,4.055l0,8.163a.476.476,0,0,1-.486.468h-2.517a.479.479,0,0,1-.454-.468V8.3a16.192,16.192,0,0,0-.071-2.424,1.312,1.312,0,0,0-1.482-1.113,1.674,1.674,0,0,0-1.506,1.06,7.831,7.831,0,0,0-.234,2.478v6.855a.476.476,0,0,1-.486.468h-2.517a.476.476,0,0,1-.454-.468l0-6.855c0-1.443.238-3.566-1.553-3.566-1.811,0-1.74,2.07-1.74,3.566v6.855a.476.476,0,0,1-.486.468',
                transform: 'translate(-156.58 -1.399)',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M714.982,1.524c3.739,0,5.763,3.211,5.763,7.295,0,3.945-2.237,7.075-5.763,7.075-3.672,0-5.671-3.211-5.671-7.213,0-4.027,2.024-7.156,5.671-7.156M715,4.164c-1.857,0-1.974,2.531-1.974,4.108s-.025,4.955,1.953,4.955c1.953,0,2.045-2.722,2.045-4.381a11.959,11.959,0,0,0-.376-3.431A1.577,1.577,0,0,0,715,4.164',
                transform: 'translate(-651.552 -1.399)',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M875.817,15.624h-2.51a.479.479,0,0,1-.454-.468l0-12.938a.477.477,0,0,1,.486-.422h2.336a.482.482,0,0,1,.45.362V4.136h.046c.705-1.769,1.694-2.612,3.435-2.612a3.307,3.307,0,0,1,2.942,1.524c.659,1.035.659,2.775.659,4.027v8.142a.484.484,0,0,1-.486.408h-2.527a.477.477,0,0,1-.447-.408V8.191c0-1.414.163-3.484-1.577-3.484a1.647,1.647,0,0,0-1.457,1.035,5.724,5.724,0,0,0-.4,2.449v6.965a.485.485,0,0,1-.493.468',
                transform: 'translate(-801.775 -1.399)',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M413.163,8.046a4.93,4.93,0,0,1-.471,2.673,2.048,2.048,0,0,1-1.744,1.145c-.968,0-1.535-.737-1.535-1.825,0-2.148,1.925-2.538,3.75-2.538v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.143,6.143,0,0,1-1.446-1.68,4.991,4.991,0,0,1-4.154,1.833,3.575,3.575,0,0,1-3.771-3.927,4.277,4.277,0,0,1,2.687-4.119,17.463,17.463,0,0,1,4.739-.876V5.154a3.214,3.214,0,0,0-.308-1.825,1.677,1.677,0,0,0-1.414-.656,1.917,1.917,0,0,0-2.024,1.514.527.527,0,0,1-.439.461l-2.442-.262a.444.444,0,0,1-.376-.528C406.719.893,409.4,0,411.795,0a5.714,5.714,0,0,1,3.8,1.255C416.818,2.4,416.7,3.928,416.7,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.477.477,0,0,1-.011.67c-.514.429-1.428,1.226-1.932,1.673l0-.007',
                transform: 'translate(-372.698 0)',
                fillRule: 'evenodd',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M7.426,8.046a4.93,4.93,0,0,1-.471,2.673,2.043,2.043,0,0,1-1.744,1.145c-.968,0-1.531-.737-1.531-1.825C3.679,7.89,5.6,7.5,7.426,7.5v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.2,6.2,0,0,1-1.446-1.68A4.986,4.986,0,0,1,3.771,14.4,3.576,3.576,0,0,1,0,10.474,4.282,4.282,0,0,1,2.687,6.356,17.462,17.462,0,0,1,7.426,5.48V5.154a3.243,3.243,0,0,0-.3-1.825,1.686,1.686,0,0,0-1.414-.656A1.921,1.921,0,0,0,3.679,4.186a.527.527,0,0,1-.436.461L.8,4.385a.446.446,0,0,1-.376-.528C.985.893,3.662,0,6.058,0a5.714,5.714,0,0,1,3.8,1.255C11.08,2.4,10.963,3.928,10.963,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.473.473,0,0,1-.007.67c-.514.429-1.428,1.226-1.932,1.673l-.007-.007',
                transform: 'translate(0 0)',
                fillRule: 'evenodd',
              }),
            ),
            (0, m.createElement)(
              'g',
              { transform: 'translate(18.9 54.637)' },
              (0, m.createElement)(Ce.Path, {
                d:
                  'M8.055,26.308C3.716,26.308.1,28.149.1,33.7c0,4.4,2.431,7.171,8.067,7.171,6.633,0,7.059-4.37,7.059-4.37H12.011s-.689,2.353-4.04,2.353a4.4,4.4,0,0,1-4.693-4.428H15.562V32.807c0-2.557-1.623-6.5-7.507-6.5Zm-.112,2.073c2.6,0,4.37,1.592,4.37,3.977H3.349C3.349,29.826,5.661,28.381,7.943,28.381Z',
                transform: 'translate(0 -20.83)',
                fill: '#e53238',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M75.169.1V17.254c0,.974-.069,2.341-.069,2.341h3.066s.11-.982.11-1.879c0,0,1.515,2.37,5.633,2.37a6.961,6.961,0,0,0,7.283-7.325A6.922,6.922,0,0,0,83.915,5.52c-4.279,0-5.609,2.311-5.609,2.311V.1Zm7.955,7.542c2.945,0,4.818,2.186,4.818,5.119a4.857,4.857,0,0,1-4.8,5.2c-3.143,0-4.839-2.454-4.839-5.175C78.306,10.254,79.827,7.642,83.123,7.642Z',
                transform: 'translate(-59.609)',
                fill: '#0064d2',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M159.834,26.308c-6.528,0-6.947,3.574-6.947,4.146h3.249s.17-2.087,3.473-2.087c2.146,0,3.809.982,3.809,2.871v.672h-3.809c-5.057,0-7.731,1.479-7.731,4.482,0,2.955,2.47,4.562,5.809,4.562,4.55,0,6.015-2.514,6.015-2.514,0,1,.077,1.985.077,1.985h2.888s-.112-1.221-.112-2V31.669c0-4.428-3.572-5.36-6.722-5.36Zm3.585,7.619v.9c0,1.169-.721,4.075-4.968,4.075-2.326,0-3.323-1.161-3.323-2.507C155.128,33.943,158.486,33.927,163.419,33.927Z',
                transform: 'translate(-120.634 -20.83)',
                fill: '#f5af02',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M214.879,29.041h3.655l5.246,10.51,5.234-10.51h3.311l-9.533,18.711h-3.473l2.751-5.216Z',
                transform: 'translate(-170.706 -23.002)',
                fill: '#86b817',
              }),
            ),
          ),
        ),
        ye = (0, m.createElement)(
          Ce.SVG,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '100',
            height: '100',
            viewBox: '0 0 100 100',
          },
          (0, m.createElement)(
            'defs',
            null,
            (0, m.createElement)(
              'clipPath',
              { id: 'b' },
              (0, m.createElement)('rect', { width: '100', height: '100' }),
            ),
          ),
          (0, m.createElement)(
            'g',
            { id: 'a', clipPath: 'url(#b)' },
            (0, m.createElement)('rect', { width: '100', height: '100', fill: '#fff' }),
            (0, m.createElement)('rect', { width: '100', height: '100', fill: '#7532e4' }),
            (0, m.createElement)(
              'g',
              { transform: 'translate(-43.503 -133.512)' },
              (0, m.createElement)(Ce.Path, {
                d:
                  'M78.217,193.13H64.405l-2.823,7.764H54.6L67.648,166.9h7.669l12.934,33.995H81.059Zm-11.6-6.047h9.4L71.33,174.245Z',
                transform: 'translate(0 0)',
                fill: '#1ff2e6',
              }),
              (0, m.createElement)(Ce.Path, {
                d:
                  'M246.639,166.9h6.753l-9.4,33.995h-6.81l-7.764-24.208-7.764,24.208h-6.906L205.3,166.9h7l6.238,23.388,7.535-23.388h6.849l7.592,23.483Z',
                transform: 'translate(-121.952)',
                fill: '#1ff2e6',
              }),
            ),
          ),
        ),
        _e = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg' },
          (0, m.createElement)(Ce.Path, {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M4.67708 14.1615h3.77084l.77604 2.1198h1.96354L7.65625 7H5.5625L2 16.2813h1.90625l.77083-2.1198zm3.17188-1.6511H5.28125l1.28646-3.50519 1.28125 3.50519zM22.9791 7h-1.8437l-1.6719 6.4115L17.3906 7h-1.8698l-2.0573 6.3854L11.7604 7H9.8489l2.5781 9.2813h1.8854l2.1198-6.60942 2.1198 6.60942h1.8594L22.9791 7z',
          }),
        ),
        ve = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/facebook.svg`,
          alt: (0, p.__)('Facebook', 'woocommerce'),
          style: { padding: '4px' },
        }),
        Le = (0, m.createElement)(
          Ce.SVG,
          {
            width: '303',
            height: '303',
            viewBox: '-30 -30 303 303',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/SVG',
          },
          (0, m.createElement)(Ce.Path, {
            fill: '#E60023',
            d:
              'M121.5,0C54.4,0,0,54.4,0,121.5C0,173,32,217,77.2,234.7c-1.1-9.6-2-24.4,0.4-34.9 c2.2-9.5,14.2-60.4,14.2-60.4s-3.6-7.3-3.6-18c0-16.9,9.8-29.5,22-29.5c10.4,0,15.4,7.8,15.4,17.1c0,10.4-6.6,26-10.1,40.5 c-2.9,12.1,6.1,22,18,22c21.6,0,38.2-22.8,38.2-55.6c0-29.1-20.9-49.4-50.8-49.4C86.3,66.5,66,92.4,66,119.2c0,10.4,4,21.6,9,27.7 c1,1.2,1.1,2.3,0.8,3.5c-0.9,3.8-3,12.1-3.4,13.8c-0.5,2.2-1.8,2.7-4.1,1.6c-15.2-7.1-24.7-29.2-24.7-47.1 c0-38.3,27.8-73.5,80.3-73.5c42.1,0,74.9,30,74.9,70.2c0,41.9-26.4,75.6-63,75.6c-12.3,0-23.9-6.4-27.8-14c0,0-6.1,23.2-7.6,28.9 c-2.7,10.6-10.1,23.8-15.1,31.9c11.4,3.5,23.4,5.4,36,5.4c67.1,0,121.5-54.4,121.5-121.5C243,54.4,188.6,0,121.5,0z',
          }),
        ),
        Ie = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/google.svg`,
          alt: (0, p.__)('Google', 'woocommerce'),
          style: { padding: '4px' },
        }),
        Te = (0, m.createElement)(
          Ce.SVG,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '100',
            height: '100',
            viewBox: '0 0 100 100',
          },
          (0, m.createElement)(
            'defs',
            null,
            (0, m.createElement)(
              'clipPath',
              { id: 'b' },
              (0, m.createElement)('rect', { width: '100', height: '100' }),
            ),
          ),
          (0, m.createElement)(
            'g',
            { id: 'a', clipPath: 'url(#b)' },
            (0, m.createElement)('rect', { width: '100', height: '100', fill: '#fff' }),
            (0, m.createElement)(Ce.Path, {
              d:
                'M100,100H0V0H100V100ZM40.665,75.539a6.446,6.446,0,1,0,6.447,6.447,6.376,6.376,0,0,0-.3-1.843L54.158,72.8A19.808,19.808,0,1,0,69.206,37.48h.015V28.455a6.959,6.959,0,0,0,4.013-6.273v-.211a6.971,6.971,0,0,0-6.952-6.953H66.07a6.97,6.97,0,0,0-6.952,6.953v.211a6.957,6.957,0,0,0,4.013,6.273V37.5a19.745,19.745,0,0,0-9.376,4.126L28.935,22.295a7.919,7.919,0,0,0-4.148-9.145,7.845,7.845,0,0,0-3.5-.817,7.919,7.919,0,1,0,3.938,14.786l24.4,19a19.775,19.775,0,0,0,.3,22.3l-7.426,7.427A6.362,6.362,0,0,0,40.665,75.539Zm25.522-8.321h0l-.023,0a10.164,10.164,0,0,1,.023-20.328H66.2a10.166,10.166,0,0,1-.012,20.333Z',
              fill: '#ff7a59',
            }),
          ),
        ),
        je = (0, m.createElement)(
          Ce.SVG,
          {
            width: '36',
            height: '36',
            viewBox: '0 0 36 36',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          (0, m.createElement)('rect', { width: '36', height: '36', rx: '3', fill: '#FFE071' }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M24.0534 17.2863C24.2392 17.2638 24.4176 17.2625 24.5813 17.2863C24.6764 17.0647 24.6923 16.6823 24.6071 16.2661C24.4808 15.6471 24.3091 15.2728 23.9546 15.331C23.6002 15.3892 23.5873 15.8374 23.7143 16.4564C23.7848 16.8043 23.9117 17.1023 24.0534 17.2863Z',
            fill: 'black',
          }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M21.0119 17.7757C21.2652 17.8889 21.4209 17.9647 21.4823 17.899C21.5215 17.8576 21.5099 17.7794 21.4491 17.6786C21.3241 17.4702 21.0665 17.2587 20.7937 17.1404C20.2357 16.895 19.5697 16.9764 19.0559 17.3532C18.886 17.4802 18.7254 17.6555 18.7487 17.7625C18.756 17.7969 18.7812 17.8232 18.8413 17.8314C18.9811 17.8476 19.4698 17.5954 20.0321 17.5603C20.4294 17.5353 20.7587 17.6624 21.0119 17.7757Z',
            fill: 'black',
          }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M20.5024 18.073C20.1725 18.1262 19.9904 18.237 19.8733 18.3409C19.7733 18.4298 19.712 18.5281 19.7126 18.5975C19.7126 18.6307 19.7267 18.6495 19.7378 18.6589C19.7531 18.6726 19.7709 18.6802 19.7923 18.6802C19.8671 18.6802 20.0339 18.6119 20.0339 18.6119C20.4932 18.4442 20.7961 18.4642 21.0966 18.4993C21.2627 18.518 21.3406 18.5287 21.3774 18.4705C21.3884 18.4536 21.4013 18.4179 21.3682 18.3628C21.2903 18.2339 20.9568 18.0179 20.5024 18.073Z',
            fill: 'black',
          }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M23.0263 19.1626C23.2501 19.2753 23.4972 19.2309 23.5775 19.0644C23.6578 18.8973 23.5413 18.6713 23.3169 18.5587C23.0925 18.446 22.846 18.4904 22.7657 18.6569C22.6859 18.824 22.8025 19.0506 23.0263 19.1626Z',
            fill: 'black',
          }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M24.4673 17.8777C24.2851 17.8746 24.1343 18.0786 24.13 18.3334C24.1257 18.5881 24.2698 18.7971 24.4519 18.8003C24.634 18.8034 24.7849 18.5994 24.7892 18.3446C24.7935 18.0899 24.6494 17.8809 24.4673 17.8777Z',
            fill: 'black',
          }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M12.2373 22.4735C12.1919 22.4153 12.1177 22.4335 12.0454 22.4504C11.9951 22.4623 11.9381 22.476 11.8755 22.4748C11.7419 22.4723 11.6284 22.4134 11.5646 22.3139C11.4819 22.1837 11.4868 21.9903 11.5781 21.7682C11.5904 21.7381 11.6051 21.7049 11.6211 21.6686C11.767 21.3344 12.0117 20.7743 11.7369 20.241C11.5303 19.8398 11.1937 19.5895 10.7884 19.5369C10.3996 19.4868 9.99919 19.6339 9.7441 19.9212C9.34124 20.3749 9.27808 20.9921 9.35595 21.2099C9.38477 21.29 9.42892 21.3119 9.46142 21.3163C9.5301 21.3257 9.63127 21.275 9.69505 21.1003C9.69934 21.0878 9.70547 21.0684 9.71344 21.0434C9.74165 20.9514 9.79438 20.7799 9.88084 20.6422C9.98508 20.4763 10.147 20.3618 10.3371 20.3205C10.5308 20.2779 10.7289 20.3161 10.8944 20.4269C11.1765 20.6153 11.285 20.9683 11.1648 21.305C11.1023 21.479 11.0011 21.812 11.0238 22.0855C11.0692 22.6394 11.4028 22.8616 11.7026 22.8854C11.9939 22.8966 12.1981 22.7295 12.2496 22.6075C12.279 22.5361 12.2539 22.4923 12.2373 22.4735Z',
            fill: 'black',
          }),
          (0, m.createElement)(Ce.Path, {
            d:
              'M29.0624 21.4609C29.0513 21.4209 28.979 21.1511 28.8796 20.8263C28.7803 20.5015 28.6773 20.2724 28.6773 20.2724C29.0759 19.6634 29.0826 19.1189 29.0299 18.8109C28.9735 18.4285 28.8177 18.1031 28.5031 17.7663C28.1892 17.4296 27.5466 17.0847 26.6434 16.8262C26.5403 16.7968 26.1994 16.7011 26.1694 16.6917C26.1669 16.6717 26.1442 15.5513 26.124 15.0706C26.1093 14.7233 26.0798 14.18 25.9149 13.6455C25.7181 12.922 25.3759 12.2886 24.9479 11.8836C26.1283 10.635 26.8647 9.25926 26.8629 8.07947C26.8592 5.81 24.1293 5.1234 20.7642 6.54542C20.7605 6.54667 20.0565 6.85147 20.051 6.8546C20.048 6.85147 18.7621 5.56402 18.7431 5.5465C14.907 2.13103 2.91255 15.7391 6.7474 19.0444L7.58562 19.7692C7.36794 20.3437 7.28271 21.0028 7.35261 21.7107C7.44213 22.6201 7.90202 23.4926 8.64704 24.166C9.35404 24.8057 10.2842 25.2106 11.1868 25.21C12.6793 28.72 16.0886 30.8737 20.0872 30.9951C24.3758 31.1253 27.9758 29.0711 29.4842 25.3815C29.583 25.1224 30.0018 23.9557 30.0018 22.9255C30.0005 21.8903 29.4272 21.4609 29.0624 21.4609ZM11.5161 24.2236C11.3861 24.2461 11.2531 24.2555 11.1188 24.2518C9.82374 24.2161 8.42445 23.0263 8.28526 21.6143C8.13135 20.054 8.91255 18.8535 10.2953 18.5687C10.4608 18.5349 10.6601 18.5149 10.876 18.5268C11.651 18.57 12.7928 19.1777 13.0534 20.9002C13.2845 22.4261 12.9172 23.9801 11.5161 24.2236ZM10.0696 17.6361C9.20872 17.807 8.45021 18.3052 7.98603 18.9931C7.70887 18.7571 7.19195 18.3002 7.10059 18.1218C6.35986 16.686 7.90877 13.8946 8.99104 12.318C11.6657 8.42245 15.8544 5.4739 17.7939 6.00903C18.1091 6.10041 19.1533 7.33591 19.1533 7.33591C19.1533 7.33591 17.2151 8.43372 15.4172 9.96402C12.9951 11.8667 11.1654 14.6338 10.0696 17.6361ZM23.6657 23.6403C23.694 23.6284 23.7136 23.5952 23.7099 23.5627C23.7056 23.5226 23.6706 23.4932 23.6314 23.4976C23.6314 23.4976 21.6024 23.8043 19.6856 23.0876C19.8941 22.3948 20.4496 22.6451 21.2884 22.714C22.8012 22.806 24.1563 22.5807 25.1582 22.2871C26.0265 22.033 27.1664 21.5317 28.0525 20.8182C28.3511 21.4879 28.4565 22.2252 28.4565 22.2252C28.4565 22.2252 28.6877 22.1832 28.8809 22.304C29.0636 22.4186 29.1973 22.657 29.1059 23.2735C28.9195 24.4252 28.44 25.3596 27.6343 26.2196C27.1437 26.7585 26.5477 27.2273 25.8665 27.5684C25.5047 27.7624 25.119 27.9301 24.7118 28.0659C21.6735 29.0786 18.5628 27.9652 17.5603 25.5737C17.4799 25.394 17.4125 25.2056 17.3592 25.0091C16.9318 23.4331 17.2948 21.5423 18.4285 20.3525V20.3519C18.4984 20.2761 18.5696 20.1866 18.5696 20.0746C18.5696 19.9807 18.5113 19.8818 18.4604 19.8111C18.0637 19.224 16.6896 18.2232 16.9655 16.2861C17.1635 14.8948 18.3556 13.9146 19.4673 13.9728C19.5611 13.9778 19.6549 13.9835 19.7487 13.9891C20.2307 14.0179 20.6507 14.0811 21.0468 14.098C21.7103 14.1274 22.3069 14.0285 23.0139 13.4277C23.2525 13.2249 23.4438 13.049 23.7669 12.9933C23.8006 12.9877 23.8853 12.9564 24.0545 12.9645C24.2268 12.9739 24.3911 13.0221 24.5389 13.1222C25.1055 13.5072 25.1858 14.4391 25.2153 15.1213C25.2318 15.5106 25.2778 16.4526 25.2937 16.7224C25.3299 17.3407 25.4887 17.4277 25.8113 17.536C25.9922 17.5967 26.1608 17.6424 26.4085 17.7131C27.1584 17.9278 27.603 18.1462 27.8838 18.426C28.0512 18.6013 28.1285 18.7872 28.153 18.9643C28.2413 19.6227 27.6521 20.4364 26.0921 21.1755C24.3868 21.9836 22.3174 22.1882 20.888 22.0255C20.7783 22.013 20.3883 21.9679 20.3871 21.9679C19.2435 21.8108 18.591 23.3192 19.2778 24.3525C19.7199 25.0185 20.9248 25.4522 22.1303 25.4522C24.8939 25.4529 27.0186 24.248 27.8084 23.2078C27.8323 23.1765 27.8342 23.1734 27.8716 23.1158C27.9102 23.0557 27.8783 23.0232 27.8299 23.057C27.1842 23.5076 24.3169 25.2976 21.2492 24.7594C21.2492 24.7594 20.8764 24.6968 20.5361 24.5616C20.2656 24.4546 19.6997 24.1886 19.631 23.5958C22.107 24.3788 23.6657 23.6403 23.6657 23.6403ZM19.7444 23.1677C19.7444 23.1684 19.7444 23.1684 19.7444 23.1677C19.745 23.169 19.745 23.169 19.745 23.1696C19.745 23.169 19.7444 23.1684 19.7444 23.1677ZM15.0088 12.3023C15.9599 11.1807 17.1304 10.2056 18.1784 9.65858C18.2145 9.6398 18.2532 9.67986 18.2336 9.71616C18.1502 9.87013 17.9901 10.1993 17.9392 10.4497C17.9313 10.4885 17.9729 10.5179 18.0048 10.4954C18.6573 10.0416 19.7916 9.55531 20.7875 9.49272C20.8304 9.49022 20.8506 9.54592 20.8169 9.57283C20.6654 9.69113 20.4999 9.85511 20.3791 10.021C20.3582 10.0491 20.3779 10.0898 20.4122 10.0898C21.1112 10.0948 22.0966 10.3446 22.7386 10.712C22.7821 10.737 22.7509 10.8227 22.7024 10.8115C21.7305 10.5843 20.1406 10.4115 18.488 10.8227C17.0133 11.1901 15.8875 11.7572 15.0665 12.3668C15.0254 12.3981 14.9757 12.3418 15.0088 12.3023Z',
            fill: 'black',
          }),
        ),
        Ae = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-30 -30 212.02 216.4' },
          (0, m.createElement)(Ce.Path, {
            fill: '#fe5301',
            d:
              'M37.71,89.1c3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V35.7l17,45.1a12.68,12.68,0,0,0,3.7,5.4c1.6,1.3,4,2,7.2,2a12.54,12.54,0,0,0,5.9-1.4,8.41,8.41,0,0,0,3.9-5l18.1-50V81a8.53,8.53,0,0,0,2.1,6.1c1.4,1.4,3.7,2.2,6.9,2.2,3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V8.7a7.48,7.48,0,0,0-3.3-6.6c-2.1-1.4-5-2.1-8.6-2.1a19.3,19.3,0,0,0-9.4,2,11.63,11.63,0,0,0-5.1,6.8L74.91,67.1,54.41,8.4a12.4,12.4,0,0,0-4.5-6.2c-2.1-1.5-5-2.2-8.8-2.2a16.51,16.51,0,0,0-8.9,2.1c-2.3,1.5-3.5,3.9-3.5,7.2V80.8c0,2.8.7,4.8,2,6.2C32.21,88.4,34.41,89.1,37.71,89.1Z',
          }),
          (0, m.createElement)(Ce.Path, {
            fill: '#fe5301',
            d:
              'M149,116.6l-2.4-1.9a7.4,7.4,0,0,0-9.4.3,19.65,19.65,0,0,1-12.5,4.6h-21.4A37.08,37.08,0,0,0,77,130.5l-1.1,1.2-1.1-1.1a37.25,37.25,0,0,0-26.3-10.9H27a19.59,19.59,0,0,1-12.4-4.6,7.28,7.28,0,0,0-9.4-.3l-2.4,1.9A7.43,7.43,0,0,0,0,122.2a7.14,7.14,0,0,0,2.4,5.7A37.28,37.28,0,0,0,27,137.4h21.6a19.59,19.59,0,0,1,18.9,14.4v.2c.1.7,1.2,4.4,8.5,4.4s8.4-3.7,8.5-4.4v-.2a19.59,19.59,0,0,1,18.9-14.4H125a37.28,37.28,0,0,0,24.6-9.5,7.42,7.42,0,0,0,2.4-5.7A7.86,7.86,0,0,0,149,116.6Z',
          }),
        ),
        ke = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/klaviyo.png`,
          alt: (0, p.__)('Klaviyo', 'woocommerce'),
        }),
        fe = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/creative-mail-by-constant-contact.png`,
          alt: (0, p.__)('Creative Mail by Constant Contact', 'woocommerce'),
        }),
        De = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/jetpack-crm.svg`,
          alt: (0, p.__)('Jetpack CRM', 'woocommerce'),
        }),
        Se = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/salesforce.jpg`,
          alt: (0, p.__)('Salesforce', 'woocommerce'),
        }),
        Oe = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/tiktok.jpg`,
          alt: (0, p.__)('TikTok', 'woocommerce'),
        }),
        xe = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/zapier.png`,
          alt: (0, p.__)('Zapier', 'woocommerce'),
        }),
        ze = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/vimeo.png`,
          alt: (0, p.__)('Vimeo', 'woocommerce'),
        }),
        Pe = (0, m.createElement)('img', {
          src: `${P.vm}images/marketing/trustpilot.png`,
          alt: (0, p.__)('Trustpilot', 'woocommerce'),
        }),
        be = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, m.createElement)(Ce.Path, {
            d:
              'M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z',
          }),
        ),
        Re = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg' },
          (0, m.createElement)(Ce.Path, {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M14.75 9C16.1307 9 17.25 7.88071 17.25 6.5C17.25 5.11929 16.1307 4 14.75 4C13.3693 4 12.25 5.11929 12.25 6.5C12.25 5.11929 11.1307 4 9.75 4C8.36929 4 7.25 5.11929 7.25 6.5C7.25 7.88071 8.36929 9 9.75 9H4V20L20 20V9L14.75 9ZM14.75 7.5C15.3023 7.5 15.75 7.05228 15.75 6.5C15.75 5.94772 15.3023 5.5 14.75 5.5C14.1977 5.5 13.75 5.94772 13.75 6.5V7.5H14.75ZM18.5 18.5V10.5H13V18.5H18.5ZM11.5 18.5H5.5L5.5 10.5H11.5L11.5 18.5ZM8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5H10.75V6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5Z',
          }),
        ),
        Ue = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, m.createElement)(Ce.Path, {
            d:
              'M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z',
          }),
        ),
        Ve = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, m.createElement)(Ce.Path, {
            d:
              'M17.5 9a2 2 0 11-4 0 2 2 0 014 0zm-4.25 8v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM8.5 11a2 2 0 100-4 2 2 0 000 4z',
          }),
        ),
        Ze = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg' },
          (0, m.createElement)(Ce.Path, {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M15 16.5H9V15h6v1.5zM15.0052 5.99481c-1.6597-1.65973-4.3507-1.65973-6.0104 0-1.65973 1.65973-1.65973 4.35069 0 6.01039.29289.2929.29289.7678 0 1.0607-.2929.2929-.76777.2929-1.06066 0-2.24552-2.2455-2.24552-5.88624 0-8.13175 2.24556-2.24551 5.88616-2.24551 8.13176 0 2.2455 2.24551 2.2455 5.88625 0 8.13175-.2929.2929-.7678.2929-1.0607 0-.2929-.2929-.2929-.7678 0-1.0607 1.6597-1.6597 1.6597-4.35066 0-6.01039zM14 19.5h-4V18h4v1.5z',
          }),
        );
      class Ge extends m.Component {
        render() {
          const e = (0, z.camelCase)(this.props.product);
          let t = we;
          return (
            e in s && (t = s[e]),
            (0, m.createElement)(
              'div',
              { className: Ee()(this.props.className, 'woocommerce-admin-marketing-product-icon') },
              (0, m.createElement)(he.Z, { icon: t, size: 36 }),
            )
          );
        }
      }
      Ge.propTypes = { product: pe().string.isRequired, className: pe().string };
      const Be = Ge;
      var Fe = a(86020),
        Ye = a(76357);
      const Qe = () =>
        (0, Ye.Z)({
          mixedString: (0, p.__)(
            'Read {{link}}the WooCommerce blog{{/link}} for more tips on marketing your store',
            'woocommerce',
          ),
          components: {
            link: (0, m.createElement)(Fe.Link, {
              type: 'external',
              href: 'https://woocommerce.com/blog/marketing/coupons/?utm_medium=product',
              target: '_blank',
            }),
          },
        });
      var He = a(55609),
        $e = a(73224),
        We = a(86241);
      const Je = ({
          header: e,
          children: t,
          className: a,
          footer: n,
          initialCollapsed: r = !1,
        }) => {
          const [c, l] = (0, m.useState)(r),
            o = () => {
              l(!c);
            };
          return (0, m.createElement)(
            He.Card,
            { className: Ee()('woocommerce-collapsible-card', a) },
            (0, m.createElement)(
              He.CardHeader,
              { onClick: o },
              (0, m.createElement)(nt, null, e),
              (0, m.createElement)(He.Button, {
                isSmall: !0,
                icon: c ? $e.Z : We.Z,
                label: c
                  ? (0, p.__)('Expand', 'woocommerce')
                  : (0, p.__)('Collapse', 'woocommerce'),
                onClick: o,
              }),
            ),
            !c &&
              (0, m.createElement)(
                m.Fragment,
                null,
                t,
                !!n && (0, m.createElement)(He.CardFooter, null, n),
              ),
          );
        },
        Xe = ({ className: e, icon: t, name: a, pills: n, description: r, button: c }) =>
          (0, m.createElement)(
            He.CardBody,
            { className: Ee()('woocommerce_marketing_plugin_card_body', e) },
            (0, m.createElement)(
              'div',
              { className: 'woocommerce_marketing_plugin_card_body__icon' },
              t,
            ),
            (0, m.createElement)(
              'div',
              { className: 'woocommerce_marketing_plugin_card_body__details' },
              (0, m.createElement)(
                'div',
                { className: 'woocommerce_marketing_plugin_card_body__details-name' },
                a,
                n,
              ),
              (0, m.createElement)(
                'div',
                { className: 'woocommerce_marketing_plugin_card_body__details-description' },
                r,
              ),
            ),
            c,
          );
      var Ke = a(14599);
      const qe = () =>
        (0, P.O3)('allowMarketplaceSuggestions', !1) ? 'woocommerce.com' : 'plugin-woocommerce';
      var et = a(57913),
        tt = a(70319);
      const at = ({ plugin: e, onInstalledAndActivated: t = () => {} }) => {
          const [a, n] = (0, m.useState)(null),
            { installAndActivatePlugins: r } = (0, u.useDispatch)(g.PLUGINS_STORE_NAME),
            { isPluginInstalledNotActivated: c } = (() => {
              const { getPluginInstallState: e } = (0, u.useSelect)(e => ({
                getPluginInstallState: e(g.PLUGINS_STORE_NAME).getPluginInstallState,
              }));
              return {
                isPluginInstalledNotActivated: (0, m.useCallback)(t => 'installed' === e(t), [e]),
              };
            })(),
            l = async () => {
              n(e.product);
              try {
                (0, Ke.recordEvent)('marketing_recommended_extension', {
                  name: e.title,
                  source: qe(),
                });
                const a = await r([e.product]);
                t(e.product), (0, tt.a)(a);
              } catch (e) {
                (0, tt.a)(e);
              }
              n(null);
            };
          return (0, m.createElement)(Xe, {
            icon: (0, m.createElement)('img', { src: e.icon, alt: e.title }),
            name: e.title,
            pills: e.tags.map(e => (0, m.createElement)(Fe.Pill, { key: e.slug }, e.name)),
            description: e.description,
            button: (() => {
              const t = !!a;
              return c(e.product)
                ? (0, m.createElement)(
                    He.Button,
                    { variant: 'secondary', isBusy: a === e.product, disabled: t, onClick: l },
                    (0, p.__)('Activate', 'woocommerce'),
                  )
                : e.direct_install
                ? (0, m.createElement)(
                    He.Button,
                    { variant: 'secondary', isBusy: a === e.product, disabled: t, onClick: l },
                    (0, p.__)('Install extension', 'woocommerce'),
                  )
                : (0, m.createElement)(
                    He.Button,
                    {
                      variant: 'secondary',
                      href: (0, et.C)(e.url),
                      disabled: t,
                      onClick: () => {
                        (0, Ke.recordEvent)('marketing_recommended_extension', {
                          name: e.title,
                          source: qe(),
                        });
                      },
                    },
                    (0, p.__)('View details', 'woocommerce'),
                  );
            })(),
          });
        },
        nt = ({ children: e }) =>
          (0, m.createElement)('div', { className: 'woocommerce-marketing-card-header-title' }, e),
        rt = ({ children: e }) =>
          (0, m.createElement)(
            'div',
            { className: 'woocommerce-marketing-card-header-description' },
            e,
          ),
        ct = () =>
          (0, m.createElement)(
            'div',
            { className: 'woocommerce-centered-spinner' },
            (0, m.createElement)(Fe.Spinner, null),
          );
      var lt = a(12314),
        ot = a(12532);
      const it = 'woocommerce_marketing_overview_multichannel_banner_dismissed',
        st = () =>
          (0, u.useSelect)(e => {
            const { hasFinishedResolution: t, getRecommendedChannels: a } = e(U),
              { data: n, error: r } = a(),
              { getActivePlugins: c } = e(g.PLUGINS_STORE_NAME),
              l = c(),
              o = n && (0, z.differenceWith)(n, l, (e, t) => e.product === t);
            return { loading: !t('getRecommendedChannels', []), data: o, error: r };
          }),
        mt = { 'sync-in-progress': 'syncing', 'sync-failed': 'failed', synced: 'synced' },
        gt = e => {
          const t = e.errors_count >= 1 ? 'error' : 'none',
            a =
              e.errors_count >= 1
                ? (0, p.sprintf)((0, p.__)('%d issues to resolve', 'woocommerce'), e.errors_count)
                : (0, p.__)('No issues to resolve', 'woocommerce');
          return {
            slug: e.slug,
            title: e.name,
            description: e.description,
            icon: e.icon,
            isSetupCompleted: e.is_setup_completed,
            setupUrl: e.settings_url,
            manageUrl: e.settings_url,
            syncStatus: mt[e.product_listings_status],
            issueType: t,
            issueText: a,
          };
        },
        dt = () => {
          const { invalidateResolution: e } = (0, u.useDispatch)(U),
            t = (0, m.useCallback)(() => {
              e('getRegisteredChannels', []);
            }, [e]);
          return (0, u.useSelect)(e => {
            const { hasFinishedResolution: a, getRegisteredChannels: n } = e(U),
              r = n();
            return {
              loading: !a('getRegisteredChannels', []),
              data: r.data?.map(gt),
              error: r.error,
              refetch: t,
            };
          });
        },
        ut = () => {
          const { installedPlugins: e, activatingPlugins: t } = (0, u.useSelect)(e => {
              const { getInstalledPlugins: t, getActivatingPlugins: a } = e(E);
              return { installedPlugins: t(), activatingPlugins: a() };
            }, []),
            { loading: a, data: n } = dt(),
            { loading: r, data: c } = st(),
            { activateInstalledPlugin: l, loadInstalledPluginsAfterActivation: o } = (0,
            u.useDispatch)(E),
            i = a || r,
            s = (0, z.chain)(e)
              .differenceWith(n || [], (e, t) => e.slug === t.slug)
              .differenceWith(c || [], (e, t) => e.slug === t.product)
              .value();
          return {
            data: i ? [] : s,
            activatingPlugins: t,
            activateInstalledPlugin: l,
            loadInstalledPluginsAfterActivation: o,
          };
        },
        Et = e => ({
          id: e.id,
          icon: e.icon_url,
          name: e.name,
          description: e.description,
          createUrl: e.create_url,
          channelName: e.channel.name,
          channelSlug: e.channel.slug,
        }),
        Mt = () => {
          const { invalidateResolution: e } = (0, u.useDispatch)(U),
            t = (0, m.useCallback)(() => {
              e('getCampaignTypes', []);
            }, [e]);
          return (0, u.useSelect)(
            e => {
              const { hasFinishedResolution: a, getCampaignTypes: n } = e(U),
                r = n();
              return {
                loading: !a('getCampaignTypes', []),
                data: r.data?.map(Et),
                error: r.error,
                refetch: t,
              };
            },
            [t],
          );
        },
        pt = (e = 1, t = 5) => {
          const { data: a } = dt();
          return (0, u.useSelect)(
            n => {
              const { hasFinishedResolution: r, getCampaigns: c } = n(U),
                { campaignsPage: l, meta: o } = c(e, t);
              return {
                loading: !r('getCampaigns', [e, t]),
                data: l?.data?.map(e => {
                  const t = a?.find(t => t.slug === e.channel),
                    n = e.cost ? e.cost.formatted : '-',
                    r = e.sales ? e.sales.formatted : '-';
                  return {
                    id: `${e.channel}|${e.id}`,
                    title: e.title,
                    description: '',
                    cost: n,
                    sales: r,
                    manageUrl: e.manage_url,
                    icon: t?.icon || '',
                    channelName: t?.title || '',
                    channelSlug: e.channel,
                  };
                }),
                error: l?.error,
                meta: o,
              };
            },
            [e, t, a],
          );
        },
        ht = e => new URL(e).origin !== location.origin,
        Ct = e => {
          const { className: t, ...a } = e,
            [n, r] = (0, m.useState)(!0),
            { data: c, refetch: l } = Mt(),
            { refetch: o } = dt(),
            { data: i } = st(),
            { loadInstalledPluginsAfterActivation: s } = ut(),
            g = !!c?.length,
            d = !!i?.length,
            u = e => {
              l(), o(), s(e);
            };
          return (0, m.createElement)(
            He.Modal,
            (0, lt.Z)({}, a, {
              className: Ee()(t, 'woocommerce-marketing-create-campaign-modal'),
              title: (0, p.__)('Create a new campaign', 'woocommerce'),
            }),
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-new-campaigns' },
              (0, m.createElement)(
                'div',
                { className: 'woocommerce-marketing-new-campaigns__question-label' },
                g
                  ? (0, p.__)('Where would you like to promote your products?', 'woocommerce')
                  : (0, p.__)('No campaign types found.', 'woocommerce'),
              ),
              c?.map(e =>
                (0, m.createElement)(
                  He.Flex,
                  { key: e.id, className: 'woocommerce-marketing-new-campaign-type', gap: 4 },
                  (0, m.createElement)(
                    He.FlexItem,
                    null,
                    (0, m.createElement)('img', {
                      src: e.icon,
                      alt: e.name,
                      width: '32',
                      height: '32',
                    }),
                  ),
                  (0, m.createElement)(
                    He.FlexBlock,
                    null,
                    (0, m.createElement)(
                      He.Flex,
                      { direction: 'column', gap: 1 },
                      (0, m.createElement)(
                        He.FlexItem,
                        { className: 'woocommerce-marketing-new-campaign-type__name' },
                        e.name,
                      ),
                      (0, m.createElement)(
                        He.FlexItem,
                        { className: 'woocommerce-marketing-new-campaign-type__description' },
                        e.description,
                      ),
                    ),
                  ),
                  (0, m.createElement)(
                    He.FlexItem,
                    null,
                    (0, m.createElement)(
                      He.Button,
                      {
                        variant: 'secondary',
                        href: e.createUrl,
                        target: ht(e.createUrl) ? '_blank' : '_self',
                      },
                      (0, m.createElement)(
                        He.Flex,
                        { gap: 1 },
                        (0, m.createElement)(He.FlexItem, null, (0, p.__)('Create', 'woocommerce')),
                        ht(e.createUrl) &&
                          (0, m.createElement)(
                            He.FlexItem,
                            null,
                            (0, m.createElement)(He.Icon, { icon: ot.Z, size: 16 }),
                          ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            d &&
              (0, m.createElement)(
                'div',
                { className: 'woocommerce-marketing-add-channels' },
                (0, m.createElement)(
                  He.Flex,
                  { direction: 'column' },
                  (0, m.createElement)(
                    He.FlexItem,
                    null,
                    (0, m.createElement)(
                      He.Button,
                      { variant: 'link', onClick: () => r(!n) },
                      (0, p.__)('Add channels for other campaign types', 'woocommerce'),
                      (0, m.createElement)(He.Icon, { icon: n ? $e.Z : We.Z, size: 24 }),
                    ),
                  ),
                  !n &&
                    (0, m.createElement)(
                      He.FlexItem,
                      null,
                      i.map(e =>
                        (0, m.createElement)(at, {
                          key: e.plugin,
                          plugin: e,
                          onInstalledAndActivated: u,
                        }),
                      ),
                    ),
                ),
              ),
          );
        },
        wt = (0, m.createElement)(
          Ce.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, m.createElement)(Ce.Path, {
            d:
              'M3.445 16.505a.75.75 0 001.06.05l5.005-4.55 4.024 3.521 4.716-4.715V14h1.5V8.25H14v1.5h3.19l-3.724 3.723L9.49 9.995l-5.995 5.45a.75.75 0 00-.05 1.06z',
          }),
        );
      var Nt = a(26184),
        yt = a(28601);
      const _t = a.p + 'e6774bfd47e76d1fdbb5.svg',
        vt = ({ onDismissClick: e, onAddChannelsClick: t }) => {
          const [a, n] = (0, m.useState)(!1),
            { data: r } = dt(),
            { data: c } = st(),
            { data: l } = Mt(),
            o = !(!r?.length || !l?.length),
            i = !(!r?.length || !c?.length);
          return (0, m.createElement)(
            He.Card,
            { className: 'woocommerce-marketing-introduction-banner' },
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-introduction-banner-content' },
              (0, m.createElement)(
                'div',
                { className: 'woocommerce-marketing-introduction-banner-title' },
                (0, p.__)(
                  'Reach new customers and increase sales without leaving WooCommerce',
                  'woocommerce',
                ),
              ),
              (0, m.createElement)(
                He.Flex,
                {
                  className: 'woocommerce-marketing-introduction-banner-features',
                  direction: 'column',
                  gap: 1,
                  expanded: !1,
                },
                (0, m.createElement)(
                  He.FlexItem,
                  null,
                  (0, m.createElement)(
                    He.Flex,
                    null,
                    (0, m.createElement)(he.Z, { icon: wt }),
                    (0, m.createElement)(
                      He.FlexBlock,
                      null,
                      (0, p.__)('Reach customers on other sales channels', 'woocommerce'),
                    ),
                  ),
                ),
                (0, m.createElement)(
                  He.FlexItem,
                  null,
                  (0, m.createElement)(
                    He.Flex,
                    null,
                    (0, m.createElement)(he.Z, { icon: Nt.Z }),
                    (0, m.createElement)(
                      He.FlexBlock,
                      null,
                      (0, p.__)('Advertise with marketing campaigns', 'woocommerce'),
                    ),
                  ),
                ),
                (0, m.createElement)(
                  He.FlexItem,
                  null,
                  (0, m.createElement)(
                    He.Flex,
                    null,
                    (0, m.createElement)('img', {
                      src:
                        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjU2IDE1MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+Cjx0aXRsZT5Xb29Db21tZXJjZSBMb2dvPC90aXRsZT4KPG1ldGFkYXRhPgo8cmRmOlJERj4KPGNjOldvcmsgcmRmOmFib3V0PSIiPgo8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgo8ZGM6dGl0bGUvPgo8L2NjOldvcms+CjwvcmRmOlJERj4KPC9tZXRhZGF0YT4KPHBhdGggZD0ibTIzLjc1OSAwaDIwOC4zOGMxMy4xODcgMCAyMy44NjMgMTAuNjc1IDIzLjg2MyAyMy44NjN2NzkuNTQyYzAgMTMuMTg3LTEwLjY3NSAyMy44NjMtMjMuODYzIDIzLjg2M2gtNzQuNzI3bDEwLjI1NyAyNS4xMTgtNDUuMTA5LTI1LjExOGgtOTguNjk1Yy0xMy4xODcgMC0yMy44NjMtMTAuNjc1LTIzLjg2My0yMy44NjN2LTc5LjU0MmMtMC4xMDQ2Ni0xMy4wODMgMTAuNTcxLTIzLjg2MyAyMy43NTgtMjMuODYzeiIgZmlsbD0iIzdmNTRiMyIvPgo8cGF0aCBkPSJtMTQuNTc4IDIxLjc1YzEuNDU2OS0xLjk3NzIgMy42NDIzLTMuMDE3OSA2LjU1NjEtMy4yMjYgNS4zMDczLTAuNDE2MjYgOC4zMjUyIDIuMDgxMyA5LjA1MzcgNy40OTI3IDMuMjI2IDIxLjc1IDYuNzY0MiA0MC4xNjkgMTAuNTExIDU1LjI1OWwyMi43OS00My4zOTVjMi4wODEzLTMuOTU0NSA0LjY4MjktNi4wMzU4IDcuODA0OS02LjI0MzkgNC41Nzg5LTAuMzEyMiA3LjM4ODYgMi42MDE2IDguNTMzMyA4Ljc0MTUgMi42MDE2IDEzLjg0MSA1LjkzMTcgMjUuNiA5Ljg4NjIgMzUuNTkgMi43MDU3LTI2LjQzMyA3LjI4NDYtNDUuNDc2IDEzLjczNy01Ny4yMzYgMS41NjEtMi45MTM4IDMuODUwNC00LjM3MDcgNi44NjgzLTQuNTc4OSAyLjM5MzUtMC4yMDgxMyA0LjU3ODkgMC41MjAzMyA2LjU1NjEgMi4wODEzIDEuOTc3MiAxLjU2MSAzLjAxNzkgMy41MzgyIDMuMjI2IDUuOTMxNyAwLjEwNDA2IDEuODczMi0wLjIwODEzIDMuNDM0MS0xLjA0MDcgNC45OTUxLTQuMDU4NSA3LjQ5MjctNy4zODg2IDIwLjA4NS0xMC4wOTQgMzcuNTY3LTIuNjAxNiAxNi45NjMtMy41MzgyIDMwLjE3OS0yLjkxMzggMzkuNjQ5IDAuMjA4MTMgMi42MDE2LTAuMjA4MTMgNC44OTExLTEuMjQ4OCA2Ljg2ODMtMS4yNDg4IDIuMjg5NC0zLjEyMiAzLjUzODItNS41MTU0IDMuNzQ2My0yLjcwNTcgMC4yMDgxMy01LjUxNTQtMS4wNDA2LTguMjIxMS0zLjg1MDQtOS42NzgtOS44ODYyLTE3LjM3OS0yNC42NjMtMjIuOTk4LTQ0LjMzMi02Ljc2NDIgMTMuMzItMTEuNzU5IDIzLjMxMS0xNC45ODUgMjkuOTcxLTYuMTM5OCAxMS43NTktMTEuMzQzIDE3Ljc5NS0xNS43MTQgMTguMTA3LTIuODA5OCAwLjIwODEzLTUuMjAzMy0yLjE4NTQtNy4yODQ2LTcuMTgwNS01LjMwNzMtMTMuNjMzLTExLjAzMS0zOS45NjEtMTcuMTcxLTc4Ljk4NS0wLjQxNjI2LTIuNzA1NyAwLjIwODEzLTUuMDk5MiAxLjY2NS02Ljk3MjR6bTIyMy42NCAxNi4zMzhjLTMuNzQ2My02LjU1NjEtOS4yNjE4LTEwLjUxMS0xNi42NS0xMi4wNzItMS45NzcyLTAuNDE2MjYtMy44NTA0LTAuNjI0MzktNS42MTk1LTAuNjI0MzktOS45OTAyIDAtMTguMTA3IDUuMjAzMy0yNC40NTUgMTUuNjEtNS40MTE0IDguODQ1NS04LjExNzEgMTguNjI4LTguMTE3MSAyOS4zNDYgMCA4LjAxMyAxLjY2NSAxNC44ODEgNC45OTUxIDIwLjYwNSAzLjc0NjMgNi41NTYxIDkuMjYxOCAxMC41MTEgMTYuNjUgMTIuMDcyIDEuOTc3MiAwLjQxNjI2IDMuODUwNCAwLjYyNDM5IDUuNjE5NSAwLjYyNDM5IDEwLjA5NCAwIDE4LjIxMS01LjIwMzMgMjQuNDU1LTE1LjYxIDUuNDExNC04Ljk0OTYgOC4xMTcxLTE4LjczMiA4LjExNzEtMjkuNDUgMC4xMDQwNi04LjExNzEtMS42NjUtMTQuODgxLTQuOTk1MS0yMC41MDF6bS0xMy4xMTIgMjguODI2Yy0xLjQ1NjkgNi44NjgzLTQuMDU4NSAxMS45NjctNy45MDg5IDE1LjQwMi0zLjAxNzkgMi43MDU3LTUuODI3NiAzLjg1MDQtOC40MjkzIDMuMzMwMS0yLjQ5NzYtMC41MjAzMy00LjU3ODktMi43MDU3LTYuMTM5OC02Ljc2NDItMS4yNDg4LTMuMjI2LTEuODczMi02LjQ1Mi0xLjg3MzItOS40Njk5IDAtMi42MDE2IDAuMjA4MTMtNS4yMDMzIDAuNzI4NDYtNy41OTY3IDAuOTM2NTktNC4yNjY3IDIuNzA1Ny04LjQyOTMgNS41MTU0LTEyLjM4NCAzLjQzNDEtNS4wOTkyIDcuMDc2NC03LjE4MDUgMTAuODIzLTYuNDUyIDIuNDk3NiAwLjUyMDMzIDQuNTc4OSAyLjcwNTcgNi4xMzk4IDYuNzY0MiAxLjI0ODggMy4yMjYgMS44NzMyIDYuNDUyIDEuODczMiA5LjQ2OTkgMCAyLjcwNTctMC4yMDgxMyA1LjMwNzMtMC43Mjg0NiA3LjcwMDh6bS01Mi4wMzMtMjguODI2Yy0zLjc0NjMtNi41NTYxLTkuMzY1OS0xMC41MTEtMTYuNjUtMTIuMDcyLTEuOTc3Mi0wLjQxNjI2LTMuODUwNC0wLjYyNDM5LTUuNjE5NS0wLjYyNDM5LTkuOTkwMiAwLTE4LjEwNyA1LjIwMzMtMjQuNDU1IDE1LjYxLTUuNDExNCA4Ljg0NTUtOC4xMTcxIDE4LjYyOC04LjExNzEgMjkuMzQ2IDAgOC4wMTMgMS42NjUgMTQuODgxIDQuOTk1MSAyMC42MDUgMy43NDYzIDYuNTU2MSA5LjI2MTggMTAuNTExIDE2LjY1IDEyLjA3MiAxLjk3NzIgMC40MTYyNiAzLjg1MDQgMC42MjQzOSA1LjYxOTUgMC42MjQzOSAxMC4wOTQgMCAxOC4yMTEtNS4yMDMzIDI0LjQ1NS0xNS42MSA1LjQxMTQtOC45NDk2IDguMTE3MS0xOC43MzIgOC4xMTcxLTI5LjQ1IDAtOC4xMTcxLTEuNjY1LTE0Ljg4MS00Ljk5NTEtMjAuNTAxem0tMTMuMjE2IDI4LjgyNmMtMS40NTY5IDYuODY4My00LjA1ODUgMTEuOTY3LTcuOTA4OSAxNS40MDItMy4wMTc5IDIuNzA1Ny01LjgyNzYgMy44NTA0LTguNDI5MyAzLjMzMDEtMi40OTc2LTAuNTIwMzMtNC41Nzg5LTIuNzA1Ny02LjEzOTgtNi43NjQyLTEuMjQ4OC0zLjIyNi0xLjg3MzItNi40NTItMS44NzMyLTkuNDY5OSAwLTIuNjAxNiAwLjIwODEzLTUuMjAzMyAwLjcyODQ2LTcuNTk2NyAwLjkzNjU4LTQuMjY2NyAyLjcwNTctOC40MjkzIDUuNTE1NC0xMi4zODQgMy40MzQxLTUuMDk5MiA3LjA3NjQtNy4xODA1IDEwLjgyMy02LjQ1MiAyLjQ5NzYgMC41MjAzMyA0LjU3ODkgMi43MDU3IDYuMTM5OCA2Ljc2NDIgMS4yNDg4IDMuMjI2IDEuODczMiA2LjQ1MiAxLjg3MzIgOS40Njk5IDAuMTA0MDYgMi43MDU3LTAuMjA4MTMgNS4zMDczLTAuNzI4NDYgNy43MDA4eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K',
                      alt: (0, p.__)('WooCommerce logo', 'woocommerce'),
                      width: '24',
                      height: '24',
                    }),
                    (0, m.createElement)(
                      He.FlexBlock,
                      null,
                      (0, p.__)('Built by WooCommerce', 'woocommerce'),
                    ),
                  ),
                ),
              ),
              o &&
                (0, m.createElement)(
                  He.Flex,
                  {
                    className: 'woocommerce-marketing-introduction-banner-buttons',
                    justify: 'flex-start',
                  },
                  (0, m.createElement)(
                    He.Button,
                    {
                      variant: 'primary',
                      onClick: () => {
                        n(!0);
                      },
                    },
                    (0, p.__)('Create a campaign', 'woocommerce'),
                  ),
                  i &&
                    (0, m.createElement)(
                      He.Button,
                      { variant: 'secondary', onClick: t },
                      (0, p.__)('Add channels', 'woocommerce'),
                    ),
                ),
              a && (0, m.createElement)(Ct, { onRequestClose: () => n(!1) }),
            ),
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-introduction-banner-illustration' },
              (0, m.createElement)(
                He.Button,
                {
                  isSmall: !0,
                  className: 'woocommerce-marketing-introduction-banner-close-button',
                  onClick: e,
                },
                (0, m.createElement)(he.Z, { icon: yt.Z }),
              ),
              (0, m.createElement)('div', {
                className: 'woocommerce-marketing-introduction-banner-image-placeholder',
                style: { backgroundImage: `url("${_t}")` },
              }),
            ),
          );
        },
        Lt = (0, m.createElement)(
          Ce.SVG,
          { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
          (0, m.createElement)(Ce.Path, {
            d:
              'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z',
          }),
        );
      var It = a(10431);
      const Tt = (0, p.__)('Campaigns', 'woocommerce'),
        jt = [
          { key: 'campaign', label: (0, p.__)('Campaign', 'woocommerce') },
          { key: 'cost', label: (0, p.__)('Cost', 'woocommerce'), isNumeric: !0 },
          { key: 'sales', label: (0, p.__)('Sales', 'woocommerce'), isNumeric: !0 },
        ],
        At = () => {
          const [e, t] = (0, m.useState)(1),
            [a, n] = (0, m.useState)(!1),
            { loading: r, data: c, meta: l } = pt(e, 5),
            { data: o } = Mt(),
            i = l?.total,
            s = !!o?.length,
            g = !!(i && i > 5);
          return (0, m.createElement)(
            He.Card,
            { className: 'woocommerce-marketing-campaigns-card' },
            (0, m.createElement)(
              He.CardHeader,
              null,
              (0, m.createElement)(nt, null, (0, p.__)('Campaigns', 'woocommerce')),
              s &&
                (0, m.createElement)(
                  He.Button,
                  { variant: 'secondary', onClick: () => n(!0) },
                  (0, p.__)('Create new campaign', 'woocommerce'),
                ),
              a && (0, m.createElement)(Ct, { onRequestClose: () => n(!1) }),
            ),
            r
              ? (0, m.createElement)(Fe.TablePlaceholder, {
                  caption: Tt,
                  headers: jt,
                  numberOfRows: 5,
                })
              : c
              ? 0 === c.length
                ? (0, m.createElement)(
                    He.CardBody,
                    { className: 'woocommerce-marketing-campaigns-card__content' },
                    (0, m.createElement)(he.Z, {
                      className:
                        'woocommerce-marketing-campaigns-card__content-icon woocommerce-marketing-campaigns-card__content-icon--empty',
                      icon: Nt.Z,
                      size: 32,
                    }),
                    (0, m.createElement)(
                      'div',
                      { className: 'woocommerce-marketing-campaigns-card__content-title' },
                      (0, p.__)('Advertise with marketing campaigns', 'woocommerce'),
                    ),
                    (0, m.createElement)(
                      'div',
                      { className: 'woocommerce-marketing-campaigns-card__content-description' },
                      (0, p.__)(
                        'Easily create and manage marketing campaigns without leaving WooCommerce.',
                        'woocommerce',
                      ),
                    ),
                  )
                : (0, m.createElement)(Fe.Table, {
                    caption: Tt,
                    headers: jt,
                    rows: c.map(e => [
                      {
                        display: (0, m.createElement)(
                          He.Flex,
                          { gap: 4 },
                          (0, m.createElement)(
                            He.FlexItem,
                            { className: 'woocommerce-marketing-campaigns-card__campaign-logo' },
                            (0, m.createElement)('img', {
                              src: e.icon,
                              alt: e.channelName,
                              width: '16',
                              height: '16',
                            }),
                          ),
                          (0, m.createElement)(
                            He.FlexBlock,
                            null,
                            (0, m.createElement)(
                              He.Flex,
                              { direction: 'column', gap: 1 },
                              (0, m.createElement)(
                                He.FlexItem,
                                {
                                  className: 'woocommerce-marketing-campaigns-card__campaign-title',
                                },
                                (0, m.createElement)(
                                  Fe.Link,
                                  {
                                    type: (0, It.isWCAdmin)(e.manageUrl) ? 'wc-admin' : 'external',
                                    href: e.manageUrl,
                                  },
                                  e.title,
                                ),
                              ),
                              !!e.description &&
                                (0, m.createElement)(
                                  He.FlexItem,
                                  {
                                    className:
                                      'woocommerce-marketing-campaigns-card__campaign-description',
                                  },
                                  e.description,
                                ),
                            ),
                          ),
                        ),
                      },
                      { display: e.cost },
                      { display: e.sales },
                    ]),
                  })
              : (0, m.createElement)(
                  He.CardBody,
                  { className: 'woocommerce-marketing-campaigns-card__content' },
                  (0, m.createElement)(he.Z, {
                    className:
                      'woocommerce-marketing-campaigns-card__content-icon woocommerce-marketing-campaigns-card__content-icon--error',
                    icon: Lt,
                    size: 32,
                  }),
                  (0, m.createElement)(
                    'div',
                    { className: 'woocommerce-marketing-campaigns-card__content-title' },
                    (0, p.__)('An unexpected error occurred.', 'woocommerce'),
                  ),
                  (0, m.createElement)(
                    'div',
                    { className: 'woocommerce-marketing-campaigns-card-body__content-description' },
                    (0, p.__)(
                      'Please try again later. Check the logs if the problem persists. ',
                      'woocommerce',
                    ),
                  ),
                ),
            g &&
              (0, m.createElement)(
                He.CardFooter,
                { className: 'woocommerce-marketing-campaigns-card__footer' },
                (0, m.createElement)(Fe.Pagination, {
                  showPerPagePicker: !1,
                  perPage: 5,
                  page: e,
                  total: i,
                  onPageChange: e => {
                    t(e);
                  },
                }),
              ),
          );
        };
      var kt = a(14478),
        ft = a(94046),
        Dt = a(55856);
      const St = 'woocommerce-marketing-sync-status',
        Ot = ({ status: e }) =>
          'failed' === e
            ? (0, m.createElement)(
                'div',
                { className: Ee()(St, `${St}__failed`) },
                (0, m.createElement)(Dt.Z, { size: 18 }),
                (0, p.__)('Sync failed', 'woocommerce'),
              )
            : 'syncing' === e
            ? (0, m.createElement)(
                'div',
                { className: Ee()(St, `${St}__syncing`) },
                (0, m.createElement)(ft.Z, { size: 18 }),
                (0, p.__)('Syncing', 'woocommerce'),
              )
            : (0, m.createElement)(
                'div',
                { className: Ee()(St, `${St}__synced`) },
                (0, m.createElement)(kt.Z, { size: 18 }),
                (0, p.__)('Synced', 'woocommerce'),
              ),
        xt = 'woocommerce-marketing-issue-status',
        zt = ({ registeredChannel: e }) =>
          'error' === e.issueType
            ? (0, m.createElement)(
                'div',
                { className: Ee()(xt, `${xt}__error`) },
                (0, m.createElement)(Dt.Z, { size: 18 }),
                e.issueText,
              )
            : 'warning' === e.issueType
            ? (0, m.createElement)(
                'div',
                { className: Ee()(xt, `${xt}__warning`) },
                (0, m.createElement)(Dt.Z, { size: 18 }),
                e.issueText,
              )
            : (0, m.createElement)('div', { className: xt }, e.issueText),
        Pt = ({ registeredChannel: e }) => {
          const t = e.isSetupCompleted
              ? (0, m.createElement)(
                  'div',
                  { className: 'woocommerce-marketing-registered-channel-description' },
                  !!e.syncStatus &&
                    (0, m.createElement)(
                      m.Fragment,
                      null,
                      (0, m.createElement)(Ot, { status: e.syncStatus }),
                      (0, m.createElement)('div', {
                        className:
                          'woocommerce-marketing-registered-channel-description__separator',
                      }),
                    ),
                  (0, m.createElement)(zt, { registeredChannel: e }),
                )
              : e.description,
            a = e.isSetupCompleted
              ? (0, m.createElement)(
                  He.Button,
                  { variant: 'secondary', href: e.manageUrl },
                  (0, p.__)('Manage', 'woocommerce'),
                )
              : (0, m.createElement)(
                  He.Button,
                  { variant: 'primary', href: e.setupUrl },
                  (0, p.__)('Finish setup', 'woocommerce'),
                );
          return (0, m.createElement)(Xe, {
            className: 'woocommerce-marketing-registered-channel-card-body',
            icon: (0, m.createElement)('img', { src: e.icon, alt: e.title }),
            name: e.title,
            description: t,
            button: a,
          });
        },
        bt = (0, m.forwardRef)(
          ({ registeredChannels: e, recommendedChannels: t, onInstalledAndActivated: a }, n) => {
            const r = e.length >= 1,
              [c, l] = (0, m.useState)(!r),
              o = (0, m.useRef)(null);
            return (
              (0, m.useImperativeHandle)(
                n,
                () => ({
                  scrollIntoAddChannels: () => {
                    l(!0), o.current?.focus(), o.current?.scrollIntoView({ block: 'center' });
                  },
                }),
                [],
              ),
              (0, m.createElement)(
                He.Card,
                { className: 'woocommerce-marketing-channels-card' },
                (0, m.createElement)(
                  He.CardHeader,
                  null,
                  (0, m.createElement)(nt, null, (0, p.__)('Channels', 'woocommerce')),
                  !r &&
                    (0, m.createElement)(
                      rt,
                      null,
                      (0, p.__)('Start by adding a channel to your store', 'woocommerce'),
                    ),
                ),
                e.map((t, a) =>
                  (0, m.createElement)(
                    m.Fragment,
                    { key: t.slug },
                    (0, m.createElement)(Pt, { registeredChannel: t }),
                    a !== e.length - 1 && (0, m.createElement)(He.CardDivider, null),
                  ),
                ),
                t.length >= 1 &&
                  (0, m.createElement)(
                    'div',
                    null,
                    r &&
                      (0, m.createElement)(
                        m.Fragment,
                        null,
                        (0, m.createElement)(He.CardDivider, null),
                        (0, m.createElement)(
                          He.CardBody,
                          null,
                          (0, m.createElement)(
                            He.Button,
                            { ref: o, variant: 'link', onClick: () => l(!c) },
                            (0, p.__)('Add channels', 'woocommerce'),
                            (0, m.createElement)(He.Icon, { icon: c ? We.Z : $e.Z, size: 24 }),
                          ),
                        ),
                      ),
                    c &&
                      t.map((e, n) =>
                        (0, m.createElement)(
                          m.Fragment,
                          { key: e.plugin },
                          (0, m.createElement)(at, { plugin: e, onInstalledAndActivated: a }),
                          n !== t.length - 1 && (0, m.createElement)(He.CardDivider, null),
                        ),
                      ),
                  ),
              )
            );
          },
        ),
        Rt = () => {
          const { data: e, activatingPlugins: t, activateInstalledPlugin: a } = ut();
          return 0 === e.length
            ? null
            : (0, m.createElement)(
                Je,
                { header: (0, p.__)('Installed extensions', 'woocommerce') },
                e.map((n, r) => {
                  return (0, m.createElement)(
                    m.Fragment,
                    { key: n.slug },
                    (0, m.createElement)(Xe, {
                      icon: (0, m.createElement)(Be, { product: n.slug }),
                      name: n.name,
                      description: n.description,
                      button:
                        ((c = n),
                        'installed' === c.status
                          ? (0, m.createElement)(
                              He.Button,
                              {
                                variant: 'secondary',
                                isBusy: t.includes(c.slug),
                                disabled: t.includes(c.slug),
                                onClick: () => {
                                  (0, Ke.recordEvent)('marketing_installed_activate', {
                                    name: c.name,
                                  }),
                                    a(c.slug);
                                },
                              },
                              (0, p.__)('Activate', 'woocommerce'),
                            )
                          : 'activated' === c.status
                          ? (0, m.createElement)(
                              He.Button,
                              {
                                variant: 'primary',
                                href: c.settingsUrl,
                                onClick: () => {
                                  (0, Ke.recordEvent)('marketing_installed_finish_setup', {
                                    name: c.name,
                                  });
                                },
                              },
                              (0, p.__)('Finish setup', 'woocommerce'),
                            )
                          : 'configured' === c.status
                          ? (0, m.createElement)(
                              He.Button,
                              {
                                variant: 'secondary',
                                href: c.dashboardUrl || c.settingsUrl,
                                onClick: () => {
                                  (0, Ke.recordEvent)('marketing_installed_options', {
                                    name: c.name,
                                    link: 'manage',
                                  });
                                },
                              },
                              (0, p.__)('Manage', 'woocommerce'),
                            )
                          : void 0),
                    }),
                    r !== e.length - 1 && (0, m.createElement)(He.CardDivider, null),
                  );
                  var c;
                }),
              );
        },
        Ut = 'getRecommendedPlugins',
        Vt = 'marketing',
        Zt = e =>
          (0, z.uniqBy)(
            (0, z.flatMapDeep)(e, e => e.subcategories),
            e => e.slug,
          ).map(e => ({ name: e.slug, title: e.name })),
        Gt = ({ isLoading: e, plugins: t, onInstallAndActivate: a }) => {
          const [n, r] = (0, m.useState)(null),
            { installAndActivatePlugins: c } = (0, u.useDispatch)(g.PLUGINS_STORE_NAME),
            { loadInstalledPluginsAfterActivation: l } = ut();
          return (0, m.createElement)(He.TabPanel, { tabs: Zt(t) }, o => {
            const i = t.filter(e => e.subcategories.some(e => e.slug === o.name)),
              s = t => {
                const o = !!n || e;
                return t.direct_install
                  ? (0, m.createElement)(
                      He.Button,
                      {
                        variant: 'secondary',
                        isBusy: n === t.product,
                        disabled: o,
                        onClick: () => {
                          (async e => {
                            r(e.product);
                            try {
                              (0, Ke.recordEvent)('marketing_recommended_extension', {
                                name: e.title,
                                source: qe(),
                              });
                              const t = await c([e.product]);
                              a(e.product), l(e.product), (0, tt.a)(t);
                            } catch (e) {
                              (0, tt.a)(e);
                            }
                            r(null);
                          })(t);
                        },
                      },
                      (0, p.__)('Install extension', 'woocommerce'),
                    )
                  : (0, m.createElement)(
                      He.Button,
                      {
                        variant: 'secondary',
                        href: (0, et.C)(t.url),
                        disabled: o,
                        onClick: () => {
                          (0, Ke.recordEvent)('marketing_recommended_extension', {
                            name: t.title,
                            source: qe(),
                          });
                        },
                      },
                      (0, p.__)('View details', 'woocommerce'),
                    );
              };
            return (0, m.createElement)(
              m.Fragment,
              null,
              i.map(e =>
                (0, m.createElement)(
                  m.Fragment,
                  { key: e.product },
                  (0, m.createElement)(He.CardDivider, null),
                  (0, m.createElement)(Xe, {
                    icon: (0, m.createElement)('img', { src: e.icon, alt: e.title }),
                    name: e.title,
                    pills: e.tags.map(e => (0, m.createElement)(Fe.Pill, { key: e.slug }, e.name)),
                    description: e.description,
                    button: s(e),
                  }),
                ),
              ),
            );
          });
        },
        Bt = () => {
          const { isInitializing: e, isLoading: t, data: a, installAndActivate: n } = (() => {
            const { loading: e, data: t } = (0, u.useSelect)(e => {
                const { getRecommendedPlugins: t, hasFinishedResolution: a } = e(E);
                return { loading: !a(Ut, [Vt]), data: t(Vt) };
              }, []),
              { loading: a, data: n } = st(),
              { invalidateResolution: r, installAndActivateRecommendedPlugin: c } = (0,
              u.useDispatch)(E),
              l = (e && !t.length) || (a && !n),
              o = e || a,
              i = (0, z.differenceWith)(t, n || [], (e, t) => e.product === t.product);
            return {
              isInitializing: l,
              isLoading: o,
              data: l ? [] : i,
              installAndActivate: e => {
                c(e, Vt), r(Ut, [Vt]);
              },
            };
          })();
          return (0, m.createElement)(
            Je,
            { header: (0, p.__)('Discover more marketing tools', 'woocommerce') },
            e
              ? (0, m.createElement)(He.CardBody, null, (0, m.createElement)(ct, null))
              : 0 === a.length
              ? (0, m.createElement)(
                  He.CardBody,
                  { className: 'woocommerce-marketing-discover-tools-card-body-empty-content' },
                  (0, m.createElement)(he.Z, { icon: wt, size: 32 }),
                  (0, m.createElement)(
                    'div',
                    null,
                    (0, p.__)(
                      'Continue to reach the right audiences and promote your products in ways that matter to them with our range of marketing solutions.',
                      'woocommerce',
                    ),
                  ),
                  (0, m.createElement)(
                    He.Button,
                    {
                      variant: 'tertiary',
                      href:
                        'https://woocommerce.com/product-category/woocommerce-extensions/marketing-extensions/',
                      onClick: () => {
                        (0, Ke.recordEvent)('marketing_explore_more_extensions');
                      },
                    },
                    (0, p.__)('Explore more marketing extensions', 'woocommerce'),
                  ),
                )
              : (0, m.createElement)(Gt, { plugins: a, isLoading: t, onInstallAndActivate: n }),
          );
        },
        Ft = () =>
          (0, m.createElement)(
            'div',
            { role: 'progressbar', className: 'woocommerce-marketing-learn-marketing-card__post' },
            (0, m.createElement)('div', {
              className:
                'woocommerce-marketing-learn-marketing-card__post-img woocommerce-marketing-learn-marketing-card__post-img--placeholder',
            }),
            (0, m.createElement)('div', {
              className:
                'woocommerce-marketing-learn-marketing-card__post-title woocommerce-marketing-learn-marketing-card__post-title--placeholder',
            }),
            (0, m.createElement)('div', {
              className:
                'woocommerce-marketing-learn-marketing-card__post-description woocommerce-marketing-learn-marketing-card__post-description--placeholder',
            }),
          ),
        Yt = ({ post: e }) =>
          (0, m.createElement)(
            'a',
            {
              className: 'woocommerce-marketing-learn-marketing-card__post',
              href: e.link,
              target: '_blank',
              rel: 'noopener noreferrer',
              onClick: () => {
                (0, Ke.recordEvent)('marketing_knowledge_article', { title: e.title });
              },
            },
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-learn-marketing-card__post-img' },
              !!e.image && (0, m.createElement)('img', { src: e.image, alt: '' }),
            ),
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-learn-marketing-card__post-title' },
              e.title,
            ),
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-learn-marketing-card__post-description' },
              (0, p.sprintf)((0, p.__)('By %s', 'woocommerce'), e.author_name),
              !!e.author_avatar &&
                (0, m.createElement)('img', {
                  src: e.author_avatar.replace('s=96', 's=32'),
                  alt: '',
                }),
            ),
          ),
        Qt = () => {
          const [e, t] = (0, m.useState)(1),
            { isLoading: a, error: n, posts: r } = (e =>
              (0, u.useSelect)(
                t => {
                  const { getBlogPosts: a, getBlogPostsError: n, isResolving: r } = t(E);
                  return { isLoading: r('getBlogPosts', [e]), error: n(e), posts: a(e) };
                },
                [e],
              ))('marketing');
          return (0, m.createElement)(
            Je,
            {
              initialCollapsed: !0,
              className: 'woocommerce-marketing-learn-marketing-card',
              header: (0, p.__)('Learn about marketing a store', 'woocommerce'),
              footer: a
                ? (0, m.createElement)('div', {
                    role: 'progressbar',
                    className: 'woocommerce-marketing-learn-marketing-card__footer--placeholder',
                  })
                : n || !r || 0 === r.length
                ? null
                : (0, m.createElement)(Fe.Pagination, {
                    showPagePicker: !1,
                    showPerPagePicker: !1,
                    page: e,
                    perPage: 2,
                    total: r.length,
                    onPageChange: e => {
                      t(e);
                    },
                  }),
            },
            (0, m.createElement)(
              'div',
              { className: 'woocommerce-marketing-learn-marketing-card__body' },
              a
                ? [...Array(2).keys()].map(e => (0, m.createElement)(Ft, { key: e }))
                : n
                ? (0, m.createElement)(Fe.EmptyContent, {
                    title: (0, p.__)("Oops, our posts aren't loading right now", 'woocommerce'),
                    message: (0, m.createElement)(Qe, null),
                    illustration: '',
                    actionLabel: '',
                  })
                : 0 === r.length
                ? (0, m.createElement)(Fe.EmptyContent, {
                    title: (0, p.__)('No posts yet', 'woocommerce'),
                    message: (0, m.createElement)(Qe, null),
                    illustration: '',
                    actionLabel: '',
                  })
                : r
                    .slice(2 * (e - 1), 2 * e)
                    .map((e, t) => (0, m.createElement)(Yt, { key: t, post: e })),
            ),
          );
        },
        Ht = () => {
          const {
              loading: e,
              isIntroductionBannerDismissed: t,
              dismissIntroductionBanner: a,
            } = (() => {
              const { updateOptions: e } = (0, u.useDispatch)(g.OPTIONS_STORE_NAME),
                { loading: t, data: a } = (0, u.useSelect)(e => {
                  const { getOption: t, hasFinishedResolution: a } = e(g.OPTIONS_STORE_NAME);
                  return { loading: !a('getOption', [it]), data: t(it) };
                }, []);
              return {
                loading: t,
                isIntroductionBannerDismissed: 'yes' === a,
                dismissIntroductionBanner: () => {
                  e({ [it]: 'yes' }),
                    (0, Ke.recordEvent)('marketing_multichannel_banner_dismissed', {});
                },
              };
            })(),
            { loading: n, meta: r } = pt(),
            { loading: c, data: l, refetch: o } = Mt(),
            { loading: i, data: s, refetch: d } = dt(),
            { loading: E, data: M } = st(),
            { loadInstalledPluginsAfterActivation: p } = ut(),
            { currentUserCan: h } = (0, g.useUser)(),
            C = (0, m.useRef)(null);
          if (e || (n && void 0 === r?.total) || (c && !l) || (i && !s) || (E && !M))
            return (0, m.createElement)(ct, null);
          const w = !(!s?.length || (!t && !r?.total)),
            N = !(!s || !M || (!s.length && !M.length)),
            y = !(!(0, P.O3)('allowMarketplaceSuggestions', !1) || !h('install_plugins'));
          return (0, m.createElement)(
            'div',
            { className: 'woocommerce-marketing-overview-multichannel' },
            !t &&
              (0, m.createElement)(vt, {
                onDismissClick: a,
                onAddChannelsClick: () => {
                  C.current?.scrollIntoAddChannels();
                },
              }),
            w && (0, m.createElement)(At, null),
            N &&
              (0, m.createElement)(bt, {
                ref: C,
                registeredChannels: s,
                recommendedChannels: M,
                onInstalledAndActivated: e => {
                  o(), d(), p(e);
                },
              }),
            (0, m.createElement)(Rt, null),
            y && (0, m.createElement)(Bt, null),
            (0, m.createElement)(Qt, null),
          );
        };
    },
    14478: (e, t, a) => {
      t.Z = function(e) {
        var t = e.size,
          a = void 0 === t ? 24 : t,
          n = e.onClick,
          o = (e.icon, e.className),
          i = (function(e, t) {
            if (null == e) return {};
            var a,
              n,
              r = (function(e, t) {
                if (null == e) return {};
                var a,
                  n,
                  r = {},
                  c = Object.keys(e);
                for (n = 0; n < c.length; n++) (a = c[n]), 0 <= t.indexOf(a) || (r[a] = e[a]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (n = 0; n < c.length; n++)
                (a = c[n]),
                  0 <= t.indexOf(a) ||
                    (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
            }
            return r;
          })(e, c),
          s = ['gridicon', 'gridicons-checkmark-circle', o, !1, !1, !1].filter(Boolean).join(' ');
        return r.default.createElement(
          'svg',
          l({ className: s, height: a, width: a, onClick: n }, i, {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
          }),
          r.default.createElement(
            'g',
            null,
            r.default.createElement('path', {
              d:
                'M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658A9.98 9.98 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.94 9.94 0 00-.966-4.266L11 17.768z',
            }),
          ),
        );
      };
      var n,
        r = (n = a(99196)) && n.__esModule ? n : { default: n },
        c = ['size', 'onClick', 'icon', 'className'];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t, a = 1; a < arguments.length; a++)
                  for (var n in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
          l.apply(this, arguments)
        );
      }
    },
    55856: (e, t, a) => {
      t.Z = function(e) {
        var t = e.size,
          a = void 0 === t ? 24 : t,
          n = e.onClick,
          o = (e.icon, e.className),
          i = (function(e, t) {
            if (null == e) return {};
            var a,
              n,
              r = (function(e, t) {
                if (null == e) return {};
                var a,
                  n,
                  r = {},
                  c = Object.keys(e);
                for (n = 0; n < c.length; n++) (a = c[n]), 0 <= t.indexOf(a) || (r[a] = e[a]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (n = 0; n < c.length; n++)
                (a = c[n]),
                  0 <= t.indexOf(a) ||
                    (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
            }
            return r;
          })(e, c),
          s = [
            'gridicon',
            'gridicons-notice',
            o,
            !!(function(e) {
              return 0 == e % 18;
            })(a) && 'needs-offset',
            !1,
            !1,
          ]
            .filter(Boolean)
            .join(' ');
        return r.default.createElement(
          'svg',
          l({ className: s, height: a, width: a, onClick: n }, i, {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
          }),
          r.default.createElement(
            'g',
            null,
            r.default.createElement('path', {
              d:
                'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2l-.5-6h3l-.5 6z',
            }),
          ),
        );
      };
      var n,
        r = (n = a(99196)) && n.__esModule ? n : { default: n },
        c = ['size', 'onClick', 'icon', 'className'];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t, a = 1; a < arguments.length; a++)
                  for (var n in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
          l.apply(this, arguments)
        );
      }
    },
    94046: (e, t, a) => {
      t.Z = function(e) {
        var t = e.size,
          a = void 0 === t ? 24 : t,
          n = e.onClick,
          o = (e.icon, e.className),
          i = (function(e, t) {
            if (null == e) return {};
            var a,
              n,
              r = (function(e, t) {
                if (null == e) return {};
                var a,
                  n,
                  r = {},
                  c = Object.keys(e);
                for (n = 0; n < c.length; n++) (a = c[n]), 0 <= t.indexOf(a) || (r[a] = e[a]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              for (n = 0; n < c.length; n++)
                (a = c[n]),
                  0 <= t.indexOf(a) ||
                    (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
            }
            return r;
          })(e, c),
          s = ['gridicon', 'gridicons-sync', o, !1, !1, !1].filter(Boolean).join(' ');
        return r.default.createElement(
          'svg',
          l({ className: s, height: a, width: a, onClick: n }, i, {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
          }),
          r.default.createElement(
            'g',
            null,
            r.default.createElement('path', {
              d:
                'M23.5 13.5l-3.086 3.086L19 18l-4.5-4.5 1.414-1.414L18 14.172V12c0-3.308-2.692-6-6-6V4a8 8 0 018 8v2.172l2.086-2.086L23.5 13.5zM6 12V9.828l2.086 2.086L9.5 10.5 5 6 3.586 7.414.5 10.5l1.414 1.414L4 9.828V12a8 8 0 008 8v-2c-3.308 0-6-2.692-6-6z',
            }),
          ),
        );
      };
      var n,
        r = (n = a(99196)) && n.__esModule ? n : { default: n },
        c = ['size', 'onClick', 'icon', 'className'];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t, a = 1; a < arguments.length; a++)
                  for (var n in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
          l.apply(this, arguments)
        );
      }
    },
  },
]);
