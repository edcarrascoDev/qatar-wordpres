'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [6732],
  {
    90353: (e, o, t) => {
      t.d(o, { Z: () => l });
      var c = t(69307),
        m = t(87608),
        n = t.n(m),
        r = t(7862),
        i = t.n(r),
        u = t(14812),
        a = t(86020);
      class s extends c.Component {
        render() {
          const { className: e, menu: o, subtitle: t, title: m, unreadMessages: r } = this.props,
            i = n()(
              {
                'woocommerce-layout__inbox-panel-header': t,
                'woocommerce-layout__activity-panel-header': !t,
              },
              e,
            ),
            a = r || 0;
          return (0, c.createElement)(
            'div',
            { className: i },
            (0, c.createElement)(
              'div',
              { className: 'woocommerce-layout__inbox-title' },
              (0, c.createElement)(u.Text, { size: 16, weight: 600, color: '#23282d' }, m),
              (0, c.createElement)(
                u.Text,
                { variant: 'button', weight: '600', size: '14', lineHeight: '20px' },
                a > 0 &&
                  (0, c.createElement)('span', { className: 'woocommerce-layout__inbox-badge' }, r),
              ),
            ),
            (0, c.createElement)(
              'div',
              { className: 'woocommerce-layout__inbox-subtitle' },
              t &&
                (0, c.createElement)(
                  u.Text,
                  { variant: 'body.small', size: '14', lineHeight: '20px' },
                  t,
                ),
            ),
            o &&
              (0, c.createElement)(
                'div',
                { className: 'woocommerce-layout__activity-panel-header-menu' },
                o,
              ),
          );
        }
      }
      s.propTypes = {
        className: i().string,
        unreadMessages: i().number,
        title: i().string.isRequired,
        subtitle: i().string,
        menu: i().shape({ type: i().oneOf([a.EllipsisMenu]) }),
      };
      const l = s;
    },
    43631: (e, o, t) => {
      t.r(o),
        t.d(o, { HelpPanel: () => f, SETUP_TASK_HELP_ITEMS_FILTER: () => k, default: () => S });
      var c = t(69307),
        m = t(65736),
        n = t(14812),
        r = t(9818),
        i = t(92694),
        u = t(23374),
        a = t(89015),
        s = t(83619),
        l = t(92819),
        p = t(86020),
        _ = t(67221),
        d = t(2031),
        h = t(14599),
        w = t(90353),
        g = t(24082);
      const k = 'woocommerce_admin_setup_task_help_items';
      function y(e, o) {
        const { taskName: t } = e;
        o &&
          e.recordEvent('help_panel_click', {
            task_name: t || 'homescreen',
            link: o.currentTarget.href,
          });
      }
      const f = e => {
        const { taskName: o } = e;
        (0, c.useEffect)(() => {
          e.recordEvent('help_panel_open', { task_name: o || 'homescreen' });
        }, [o]);
        const t = (function(e) {
          const o = (function(e) {
              const { taskName: o } = e;
              switch (o) {
                case 'products':
                  return [
                    {
                      title: (0, m.__)('Adding and Managing Products', 'woocommerce'),
                      link:
                        'https://woocommerce.com/document/managing-products/?utm_source=help_panel&utm_medium=product',
                    },
                    {
                      title: (0, m.__)(
                        'Import products using the CSV Importer and Exporter',
                        'woocommerce',
                      ),
                      link:
                        'https://woocommerce.com/document/product-csv-importer-exporter/?utm_source=help_panel&utm_medium=product',
                    },
                    {
                      title: (0, m.__)('Migrate products using Cart2Cart', 'woocommerce'),
                      link:
                        'https://woocommerce.com/products/cart2cart/?utm_source=help_panel&utm_medium=product',
                    },
                    {
                      title: (0, m.__)('Learn more about setting up products', 'woocommerce'),
                      link:
                        'https://woocommerce.com/documentation/plugins/woocommerce/getting-started/setup-products/?utm_source=help_panel&utm_medium=product',
                    },
                  ];
                case 'appearance':
                  return [
                    {
                      title: (0, m.__)(
                        'Showcase your products and tailor your shopping experience using Blocks',
                        'woocommerce',
                      ),
                      link:
                        'https://woocommerce.com/document/woocommerce-blocks/?utm_source=help_panel&utm_medium=product',
                    },
                    {
                      title: (0, m.__)(
                        'Manage Store Notice, Catalog View and Product Images',
                        'woocommerce',
                      ),
                      link:
                        'https://woocommerce.com/document/woocommerce-customizer/?utm_source=help_panel&utm_medium=product',
                    },
                    {
                      title: (0, m.__)('How to choose and change a theme', 'woocommerce'),
                      link:
                        'https://woocommerce.com/document/choose-change-theme/?utm_source=help_panel&utm_medium=product',
                    },
                  ];
                case 'shipping':
                  return (function({ activePlugins: e, countryCode: o }) {
                    const t = 'US' === o && !e.includes('woocommerce-services');
                    return [
                      {
                        title: (0, m.__)('Setting up Shipping Zones', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/setting-up-shipping-zones/?utm_source=help_panel&utm_medium=product',
                      },
                      {
                        title: (0, m.__)('Core Shipping Options', 'woocommerce'),
                        link:
                          'https://woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/core-shipping-options/?utm_source=help_panel&utm_medium=product',
                      },
                      {
                        title: (0, m.__)('Product Shipping Classes', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/product-shipping-classes/?utm_source=help_panel&utm_medium=product',
                      },
                      t && {
                        title: (0, m.__)(
                          'WooCommerce Shipping setup and configuration',
                          'woocommerce',
                        ),
                        link:
                          'https://woocommerce.com/document/woocommerce-shipping-and-tax/?utm_source=help_panel&utm_medium=product#section-3',
                      },
                      {
                        title: (0, m.__)(
                          'Learn more about configuring your shipping settings',
                          'woocommerce',
                        ),
                        link:
                          'https://woocommerce.com/document/plugins/woocommerce/getting-started/shipping/?utm_source=help_panel&utm_medium=product',
                      },
                    ].filter(Boolean);
                  })(e);
                case 'tax':
                  return (function(e) {
                    const { countryCode: o, taskLists: t } = e,
                      c = t.reduce((e, o) => [...e, ...o.tasks], []).find(e => 'tax' === e.id);
                    if (!c) return;
                    const { additionalData: n } = c,
                      { woocommerceTaxCountries: r = [], taxJarActivated: i } = n,
                      u = !i && r.includes(o);
                    return [
                      {
                        title: (0, m.__)('Setting up Taxes in WooCommerce', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_source=help_panel&utm_medium=product',
                      },
                      u && {
                        title: (0, m.__)(
                          'Automated Tax calculation using WooCommerce Tax',
                          'woocommerce',
                        ),
                        link:
                          'https://woocommerce.com/document/woocommerce-services/?utm_source=help_panel&utm_medium=product#section-10',
                      },
                    ].filter(Boolean);
                  })(e);
                case 'payments':
                  return (function(e) {
                    const { paymentGatewaySuggestions: o } = e;
                    return [
                      {
                        title: (0, m.__)('Which Payment Option is Right for Me?', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/premium-payment-gateway-extensions/?utm_source=help_panel&utm_medium=product',
                      },
                      o.woocommerce_payments && {
                        title: (0, m.__)('WooPayments Start Up Guide', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/payments/?utm_source=help_panel&utm_medium=product',
                      },
                      o.woocommerce_payments && {
                        title: (0, m.__)('WooPayments FAQs', 'woocommerce'),
                        link:
                          'https://woocommerce.com/documentation/woocommerce-payments/woocommerce-payments-faqs/?utm_source=help_panel&utm_medium=product',
                      },
                      o.stripe && {
                        title: (0, m.__)('Stripe Setup and Configuration', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/stripe/?utm_source=help_panel&utm_medium=product',
                      },
                      o['ppcp-gateway'] && {
                        title: (0, m.__)('PayPal Checkout Setup and Configuration', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/2-0/woocommerce-paypal-payments/?utm_medium=product#section-3',
                      },
                      o.square_credit_card && {
                        title: (0, m.__)('Square - Get started', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/woocommerce-square/?utm_source=help_panel&utm_medium=product',
                      },
                      o.kco && {
                        title: (0, m.__)('Klarna - Introduction', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/klarna-checkout/?utm_source=help_panel&utm_medium=product',
                      },
                      o.klarna_payments && {
                        title: (0, m.__)('Klarna - Introduction', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/klarna-payments/?utm_source=help_panel&utm_medium=product',
                      },
                      o.payfast && {
                        title: (0, m.__)('Payfast Setup and Configuration', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/payfast-payment-gateway/?utm_source=help_panel&utm_medium=product',
                      },
                      o.eway && {
                        title: (0, m.__)('Eway Setup and Configuration', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/eway/?utm_source=help_panel&utm_medium=product',
                      },
                      {
                        title: (0, m.__)('Direct Bank Transfer (BACS)', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/bacs/?utm_source=help_panel&utm_medium=product',
                      },
                      {
                        title: (0, m.__)('Cash on Delivery', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/cash-on-delivery/?utm_source=help_panel&utm_medium=product',
                      },
                    ].filter(Boolean);
                  })(e);
                case 'marketing':
                  return (function(e) {
                    const { activePlugins: o } = e;
                    return [
                      o.includes('mailpoet') && {
                        title: (0, m.__)('Get started with Mailpoet', 'woocommerce'),
                        link: 'https://kb.mailpoet.com/category/114-getting-started',
                      },
                      o.includes('google-listings-and-ads') && {
                        title: (0, m.__)('Set up Google Listing & Ads', 'woocommerce'),
                        link:
                          'https://woocommerce.com/document/google-listings-and-ads/?utm_medium=product#get-started',
                      },
                      o.includes('pinterest-for-woocommerce') && {
                        title: (0, m.__)('Set up Pinterest for WooCommerce', 'woocommerce'),
                        link: 'https://woocommerce.com/products/pinterest-for-woocommerce/',
                      },
                      o.includes('mailchimp-for-woocommerce') && {
                        title: (0, m.__)('Connect Mailchimp for WooCommerce', 'woocommerce'),
                        link:
                          'https://mailchimp.com/help/connect-or-disconnect-mailchimp-for-woocommerce/',
                      },
                      o.includes('creative-mail-by-constant-contact') && {
                        title: (0, m.__)('Set up Creative Mail for WooCommerce', 'woocommerce'),
                        link: 'https://app.creativemail.com/kb/help/WooCommerce',
                      },
                    ].filter(Boolean);
                  })(e);
                default:
                  return [
                    {
                      title: (0, m.__)('Get Support', 'woocommerce'),
                      link:
                        'https://woocommerce.com/my-account/create-a-ticket/?utm_medium=product',
                    },
                    {
                      title: (0, m.__)('Home Screen', 'woocommerce'),
                      link: 'https://woocommerce.com/document/home-screen/?utm_medium=product',
                    },
                    {
                      title: (0, m.__)('Inbox', 'woocommerce'),
                      link:
                        'https://woocommerce.com/document/home-screen/?utm_medium=product#section-4',
                    },
                    {
                      title: (0, m.__)('Stats Overview', 'woocommerce'),
                      link:
                        'https://woocommerce.com/document/home-screen/?utm_medium=product#section-5',
                    },
                    {
                      title: (0, m.__)('Store Management', 'woocommerce'),
                      link:
                        'https://woocommerce.com/document/home-screen/?utm_medium=product#section-10',
                    },
                    {
                      title: (0, m.__)('Store Setup Checklist', 'woocommerce'),
                      link:
                        'https://woocommerce.com/document/woocommerce-setup-wizard?utm_medium=product#store-setup-checklist',
                    },
                  ];
              }
            })(e),
            t = {
              title: (0, m.__)('WooCommerce Docs', 'woocommerce'),
              link:
                'https://woocommerce.com/documentation/?utm_source=help_panel&utm_medium=product',
            };
          o.push(t);
          const r = (0, i.applyFilters)(k, o, e.taskName, e);
          let p = Array.isArray(r) ? r.filter(e => e instanceof Object && e.title && e.link) : [];
          p.length || (p = [t]);
          const _ = (0, l.partial)(y, e);
          return p.map(e => {
            var o, t;
            return {
              title: (0, c.createElement)(
                n.Text,
                { as: 'div', variant: 'button', weight: '600', size: '14', lineHeight: '20px' },
                e.title,
              ),
              before: (0, c.createElement)(u.Z, { icon: a.Z }),
              after: (0, c.createElement)(u.Z, { icon: s.Z }),
              linkType: null !== (o = e.linkType) && void 0 !== o ? o : 'external',
              target: null !== (t = e.target) && void 0 !== t ? t : '_blank',
              href: e.link,
              onClick: _,
            };
          });
        })(e);
        return (0, c.createElement)(
          c.Fragment,
          null,
          (0, c.createElement)(w.Z, { title: (0, m.__)('Documentation', 'woocommerce') }),
          (0, c.createElement)(
            p.Section,
            null,
            (0, c.createElement)(p.List, { items: t, className: 'woocommerce-quick-links__list' }),
          ),
        );
      };
      f.defaultProps = { recordEvent: h.recordEvent };
      const S = (0, d.qC)(
        (0, r.withSelect)(e => {
          const { getSettings: o } = e(_.SETTINGS_STORE_NAME),
            { getActivePlugins: t } = e(_.PLUGINS_STORE_NAME),
            { general: c = {} } = o('general'),
            m = t(),
            n = e(_.ONBOARDING_STORE_NAME)
              .getPaymentGatewaySuggestions()
              .reduce((e, o) => {
                const { id: t } = o;
                return (e[t] = !0), e;
              }, {}),
            r = e(_.ONBOARDING_STORE_NAME).getTaskLists();
          return {
            activePlugins: m,
            countryCode: (0, g.so)(c.woocommerce_default_country),
            paymentGatewaySuggestions: n,
            taskLists: r,
          };
        }),
      )(f);
    },
  },
]);
