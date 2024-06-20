(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wc.tracks;
  productScreen &&
    'list' === productScreen.name &&
    (() => {
      const e = document.querySelectorAll('.row-actions span'),
        c = document.querySelector('#bulk-action-selector-top'),
        o = document.querySelector('#doaction'),
        r = document.querySelector('#bulk-edit .cancel'),
        n = document.querySelector('#bulk_edit'),
        d = document.querySelectorAll('#the-list .featured a'),
        i = document.querySelector('#post-query-submit'),
        u = document.querySelector('#product_cat'),
        a = document.querySelector('#dropdown_product_type'),
        l = document.querySelector('#search-submit'),
        s = document.querySelector('#post-search-input'),
        _ = document.querySelectorAll(
          '.wp-list-table.posts thead .sortable a, .wp-list-table.posts thead .sorted a',
        ),
        m = document.querySelector('[name="stock_status"]'),
        p = e => {
          const t = document.querySelector(e);
          return !!t && '' !== t.value && '-1' !== t.value;
        };
      i?.addEventListener('click', function() {
        (0,
        t.recordEvent)('products_list_filter_click', { search_string_length: s?.value.length, filter_category: '' !== u.value, filter_product_type: a.value, filter_stock_status: m.value });
      }),
        o?.addEventListener('click', function() {
          const e = document.querySelectorAll('[name="post[]"]:checked').length;
          (0,
          t.recordEvent)('products_list_bulk_actions_click', { selected_action: c.value, product_number: e });
        }),
        n?.addEventListener('click', function() {
          (0,
          t.recordEvent)('products_list_bulk_edit_update', { product_number: document.querySelector('#bulk-titles')?.children.length, product_categories: document.querySelectorAll('[name="tax_input[product_cat][]"]:checked')?.length > 0, comments: p('[name="comment_status"]'), status: p('[name="_status"]'), product_tags: p('[name="tax_input[product_tag]"]'), price: p('[name="change_regular_price"]'), sale: p('[name="change_sale_price"]'), tax_status: p('[name="_tax_status"]'), tax_class: p('[name="_tax_class"]'), weight: p('[name="change_weight"]'), dimensions: p('[name="change_dimensions"]'), shipping_class: p('[name="_shipping_class"]'), visibility: p('[name="_visibility"]'), featured: p('[name="_featured"]'), stock_status: p('[name="_stock_status"]'), manage_stock: p('[name="_manage_stock"]'), stock_quantity: p('[name="change_stock"]'), backorders: p('[name="_backorders"]'), sold_individually: p('[name="_sold_individually"]') });
        }),
        r?.addEventListener('click', function() {
          (0, t.recordEvent)('products_list_bulk_edit_cancel');
        }),
        e.forEach(e => {
          e.addEventListener('click', function(e) {
            const c = e.target?.parentElement?.classList[0],
              o = {
                edit: 'edit',
                inline: 'quick_edit',
                trash: 'trash',
                view: 'preview',
                duplicate: 'duplicate',
              };
            c &&
              o[c] &&
              (0, t.recordEvent)('products_list_product_action_click', { selected_action: o[c] });
          });
        }),
        d.forEach(e => {
          e.addEventListener('click', function(e) {
            const c = e.target.classList.contains('not-featured');
            (0, t.recordEvent)('products_list_featured_click', { featured: c ? 'yes' : 'no' });
          });
        }),
        l?.addEventListener('click', function() {
          (0,
          t.recordEvent)('products_search', { search_string_length: s.value.length, filter_category: '' !== u.value, filter_product_type: a.value, filter_stock_status: m.value });
        }),
        _.forEach(e => {
          e.addEventListener('click', function(e) {
            const c = e.target.closest('th');
            if (!c) return;
            const o = c.classList.contains('asc');
            (0,
            t.recordEvent)('products_list_column_header_click', { field_slug: c.id, order: o ? 'desc' : 'asc' });
          });
        });
    })();
  const c = window.wc.customerEffortScore;
  function o(e, t) {
    const c = document.querySelector(e);
    if (!c) return;
    const o = e => {
      t.forEach(({ eventName: t, childQuery: c, callback: o }) => {
        e.type === t && e.target.matches(c) && o(e.target);
      });
    };
    t.forEach(({ eventName: e }) => {
      c.addEventListener(e, o);
    });
  }
  function r(e, t, c = 0) {
    c > 6 ||
      setTimeout(() => {
        document.querySelector(e) ? t() : r(e, t, ++c);
      }, 500);
  }
  const n = () => document.querySelector('#product-type')?.value,
    d = () => {
      var e;
      const t = document.querySelectorAll('.block-editor').length > 0;
      let c = '',
        o = '';
      if (t) c = document.querySelector('.block-editor-rich-text__editable')?.value;
      else {
        o = document.querySelector('[name="tax_input[product_tag]"]').value;
        const e = document.querySelector('#content');
        e && ((r = e), 'none' !== window.getComputedStyle(r).display)
          ? (c = e.value)
          : 'object' == typeof tinymce &&
            tinymce.get('content') &&
            (c = tinymce.get('content').getContent());
      }
      var r;
      const d = Array.from(
        document.querySelectorAll('input[type="checkbox"][data-product-type-option-id]'),
      )
        .map(e => ({ id: e.getAttribute('data-product-type-option-id'), isEnabled: e.checked }))
        .filter(e => e.isEnabled)
        .map(e => e.id)
        .join(', ');
      return {
        product_id: document.querySelector('#post_ID')?.value,
        product_type: n(),
        product_type_options: d,
        is_downloadable: document.querySelector('#_downloadable')?.checked ? 'Yes' : 'No',
        is_virtual: document.querySelector('#_virtual')?.checked ? 'Yes' : 'No',
        manage_stock: document.querySelector('#_manage_stock')?.checked ? 'Yes' : 'No',
        attributes: document.querySelectorAll('.woocommerce_attribute').length,
        categories: document.querySelectorAll('[name="tax_input[product_cat][]"]:checked').length,
        cross_sells: document.querySelectorAll('#crosssell_ids option').length ? 'Yes' : 'No',
        description: '' !== c.trim() ? 'Yes' : 'No',
        enable_reviews: document.querySelector('#comment_status')?.checked ? 'Yes' : 'No',
        is_block_editor: t,
        menu_order:
          0 !==
          parseInt(
            null !== (e = document.querySelector('#menu_order')?.value) && void 0 !== e ? e : 0,
            10,
          )
            ? 'Yes'
            : 'No',
        product_gallery: document.querySelectorAll('#product_images_container .product_images > li')
          .length,
        product_image:
          parseInt(document.querySelector('#_thumbnail_id')?.value, 10) > 0 ? 'Yes' : 'No',
        purchase_note: document.querySelector('#_purchase_note')?.value.length ? 'Yes' : 'No',
        sale_price: document.querySelector('#_sale_price')?.value ? 'Yes' : 'No',
        short_description: document.querySelector('#excerpt')?.value.length ? 'Yes' : 'No',
        tags: o.length > 0 ? o.split(',').length : 0,
        upsells: document.querySelectorAll('#upsell_ids option').length ? 'Yes' : 'No',
        weight: document.querySelector('#_weight')?.value ? 'Yes' : 'No',
      };
    },
    i = (e = '') => {
      const t = document.querySelector(`#${e}mm`)?.value,
        c = document.querySelector(`#${e}jj`)?.value,
        o = document.querySelector(`#${e}aa`)?.value,
        r = document.querySelector(`#${e}hh`)?.value,
        n = document.querySelector(`#${e}mn`)?.value;
      return `${t}-${c}-${o} ${r}:${n}`;
    },
    u = () => ({
      status: document.querySelector('#post_status')?.value,
      visibility: document.querySelector('input[name="visibility"]:checked')?.value,
      date: i() !== i('hidden_') ? 'yes' : 'no',
      catalog_visibility: document.querySelector('input[name="_visibility"]:checked')?.value,
      featured: document.querySelector('#_featured')?.checked,
    }),
    a = (e, t) => Object.fromEntries(Object.entries(e).map(([e, c]) => [`${t}${e}`, c])),
    l = e => {
      const t = {};
      return (
        (t.product_type = n()),
        'inventory' === e &&
          (t.is_store_stock_management_enabled = null !== document.querySelector('#_manage_stock')),
        t
      );
    },
    s = () => {
      o('#product_attributes', [
        {
          eventName: 'click',
          childQuery: '.add_new_attribute',
          callback: () => {
            (0, t.recordEvent)('product_attributes_add_term', { page: 'product' });
          },
        },
      ]),
        (() => {
          const e = u();
          document.querySelector('#post-preview')?.addEventListener('click', () => {
            (0, t.recordEvent)('product_preview_changes');
          }),
            document.querySelector('.submitduplicate')?.addEventListener('click', () => {
              (0, t.recordEvent)('product_copy', d());
            }),
            document.querySelector('.submitdelete')?.addEventListener('click', () => {
              (0, t.recordEvent)('product_delete', d());
            }),
            document
              .querySelectorAll(
                '.edit-post-status, .edit-visibility, .edit-timestamp, .edit-catalog-visibility',
              )
              .forEach(e => {
                e.addEventListener('click', () => {
                  (0, t.recordEvent)('product_publish_widget_edit', { ...u(), ...d() });
                });
              }),
            document
              .querySelectorAll(
                '.save-post-status, .save-post-visibility, .save-timestamp, .save-post-visibility',
              )
              .forEach(c => {
                c.addEventListener('click', () => {
                  (0, t.recordEvent)('product_publish_widget_save', {
                    ...a(u(), 'new_'),
                    ...a(e, 'current_'),
                    ...d(),
                  });
                });
              }),
            document.querySelectorAll('.handle-order-lower, .handle-order-higher').forEach(e => {
              e.addEventListener('click', e => {
                const c = e.target.closest('.postbox');
                c && (0, t.recordEvent)('product_widget_order_change', { widget: c.id });
              });
            }),
            document.querySelector('#show-settings-link')?.addEventListener('click', () => {
              (0, t.recordEvent)('product_screen_options_open');
            }),
            document
              .querySelectorAll('#adv-settings .metabox-prefs input[type=checkbox]')
              .forEach(e => {
                e.addEventListener('change', () => {
                  (0, t.recordEvent)('product_screen_elements', {
                    selected_element: e.value,
                    checkbox: e.checked,
                  });
                });
              }),
            document.querySelectorAll('input[name="screen_columns"]').forEach(e => {
              e.addEventListener('change', () => {
                (0, t.recordEvent)('product_layout', { selected_layout: e.value });
              });
            }),
            document.querySelector('#editor-expand-toggle')?.addEventListener('change', e => {
              (0, t.recordEvent)('product_additional_settings', { checkbox: e.target.checked });
            }),
            document
              .querySelector('#woocommerce-product-updated-message-view-product__link')
              ?.addEventListener('click', () => {
                (0, t.recordEvent)('product_view_product_click', d());
              });
          const c = '.notice-success.is-dismissible > button';
          r(c, () => {
            document.querySelector(c)?.addEventListener('click', () => {
              (0, t.recordEvent)('product_view_product_dismiss', d());
            });
          });
        })(),
        (() => {
          function e() {
            (0, t.recordEvent)('product_tags_delete', {
              page: 'product',
              tag_list_size: document.querySelector('.tagchecklist')?.children.length || 0,
            });
          }
          function c() {
            document.querySelectorAll('#product_tag .ntdelbutton').forEach(t => {
              t.removeEventListener('click', e), t.addEventListener('click', e);
            });
          }
          function o(e) {
            (0, t.recordEvent)('product_tags_add', {
              page: 'product',
              tag_string_length: e.target.textContent?.length,
              tag_list_size: document.querySelector('.tagchecklist')?.children.length || 0,
              most_used: !0,
            }),
              c();
          }
          function n() {
            document.querySelectorAll('#tagcloud-product_tag .tag-cloud-link').forEach(e => {
              e.removeEventListener('click', o), e.addEventListener('click', o);
            });
          }
          r('#product_tag .tagchecklist', c),
            document.querySelector('.tagadd')?.addEventListener('click', () => {
              const e = document.querySelector('#new-tag-product_tag');
              e &&
                e.value &&
                e.value.length > 0 &&
                ((0, t.recordEvent)('product_tags_add', {
                  page: 'product',
                  tag_string_length: e.value.length,
                  tag_list_size:
                    (document.querySelector('.tagchecklist')?.children.length || 0) + 1,
                  most_used: !1,
                }),
                setTimeout(() => {
                  c();
                }, 500));
            }),
            document.querySelector('.tagcloud-link')?.addEventListener('click', () => {
              r('#tagcloud-product_tag', n);
            });
        })(),
        document
          .querySelector('#product_attributes .add_custom_attribute')
          ?.addEventListener('click', () => {
            (0, t.recordEvent)('product_attributes_buttons', { action: 'add_new' });
          }),
        window?.jQuery('select.wc-attribute-search').on('select2:select', function() {
          (0, t.recordEvent)('product_attributes_buttons', { action: 'add_existing' });
        }),
        o('#product_attributes', [
          {
            eventName: 'click',
            childQuery: '.woocommerce_attribute_visible_on_product_page',
            callback: e => {
              const c = e.getAttribute('name'),
                o = document.querySelector(`[name="${c}"]`);
              (0, t.recordEvent)('product_attributes_buttons', {
                action: 'visible_on_product_page',
                checked: o?.checked,
              });
            },
          },
          {
            eventName: 'click',
            childQuery: '.woocommerce_attribute_used_for_variations',
            callback: e => {
              const c = e.getAttribute('name'),
                o = document.querySelector(`[name="${c}"]`);
              (0, t.recordEvent)('product_attributes_buttons', {
                action: 'used_for_variations',
                checked: o?.checked,
              });
            },
          },
        ]),
        document.querySelector('.save_attributes')?.addEventListener('click', e => {
          if (e.target instanceof Element && e.target.classList.contains('disabled')) return;
          const c = document.querySelectorAll('.woocommerce_attribute:not(.taxonomy)').length,
            o = document.querySelectorAll('.woocommerce_attribute.taxonomy').length;
          (0, t.recordEvent)('product_attributes_save', {
            page: 'product',
            total_attributes_count: o + c,
            local_attributes_count: c,
            global_attributes_count: o,
            visible_on_product_page_count: document.querySelectorAll(
              'input[name^="attribute_visibility"]:checked',
            ).length,
            used_for_variations_count:
              'variable' === document.querySelector('#product-type')?.value
                ? document.querySelectorAll('input[name^="attribute_variation"]:checked').length
                : 0,
          });
        }),
        document
          .querySelector('#variable_product_options_inner .variations-add-attributes-link')
          ?.addEventListener('click', () => {
            (0, t.recordEvent)('product_variations_empty_state', { action: 'add_attribute_link' });
          }),
        document
          .querySelector('#variable_product_options_inner .variations-learn-more-link')
          ?.addEventListener('click', () => {
            (0, t.recordEvent)('product_variations_empty_state', { action: 'learn_more_link' });
          }),
        o('#variable_product_options', [
          {
            eventName: 'click',
            childQuery: '.add_variation_manually',
            callback: () => {
              (0, t.recordEvent)('product_variations_buttons', {
                action: 'add_variation_manually',
              });
            },
          },
          {
            eventName: 'change',
            childQuery: '#field_to_edit',
            callback: () => {
              const e = document.querySelector('#field_to_edit'),
                c = e.selectedIndex;
              (0, t.recordEvent)('product_variations_buttons', {
                action: 'bulk_actions',
                selected: e.options[c]?.value,
              });
            },
          },
        ]),
        document.querySelectorAll('.product_data_tabs > li').forEach(e => {
          const c = (e => {
            const t = Array.from(e.classList).filter(e => e.endsWith('_options'));
            return t.length > 0 ? t[0].slice(0, -8) : '';
          })(e);
          e.querySelector('a')?.addEventListener('click', () => {
            (0, t.recordEvent)('product_tab_click', { product_tab: c, ...l(c) });
          });
        }),
        document.querySelector('#_manage_stock')?.addEventListener('click', e => {
          (0, t.recordEvent)('product_manage_stock_click', { is_enabled: e.target?.checked });
        }),
        document.querySelector('#_manage_stock_disabled > a')?.addEventListener('click', () => {
          (0, t.recordEvent)('product_manage_stock_disabled_store_settings_link_click');
        }),
        document
          .querySelector('#inventory_product_data .notice a')
          ?.addEventListener('click', () => {
            (0, t.recordEvent)('product_inventory_variations_notice_learn_more_click');
          });
    };
  function _(e) {
    let t = !1,
      o = !1;
    const r = document.querySelector('#submitpost a.submitdelete');
    r &&
      r.addEventListener('click', function() {
        o = !0;
      }),
      window.addEventListener('beforeunload', function() {
        if (
          (function() {
            const e = ['#submitpost [type="submit"]', '#submitpost #post-preview'];
            let t = !1;
            for (const c of e)
              document.querySelectorAll(c).forEach(e => {
                e.classList.contains('disabled') && (t = !0);
              });
            return t;
          })() ||
          o
        )
          return (t = !1), void (o = !1);
        const e = window.tinymce && window.tinymce.get('content');
        window.wp.autosave
          ? (t = window.wp.autosave.server.postChanged())
          : e && (t = !e.isHidden() && e.isDirty());
      }),
      (0, c.addCustomerEffortScoreExitPageListener)(e, () => t);
  }
  productScreen &&
    'edit' === productScreen.name &&
    ((0, t.recordEvent)('product_edit_view'), s(), _('product_edit_view')),
    productScreen &&
      'new' === productScreen.name &&
      ((0, t.recordEvent)('product_add_view'), s(), _('product_add_view')),
    ((window.wc = window.wc || {}).productTracking = e);
})();
