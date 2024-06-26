var wc;
(() => {
  'use strict';
  var e = {};
  (e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  })(e);
  const t = window.wc.__experimentalInteractivity,
    o = e => (0, t.getContext)(e),
    { state: n, actions: r } = (0, t.store)('woocommerce/product-gallery'),
    a = (e, t) => {
      const o = e[e.isDialogOpen ? 'dialogVisibleImagesIds' : 'visibleImagesIds'],
        n = o.indexOf(e.selectedImage),
        r = 'next' === t ? Math.min(n + 1, o.length - 1) : Math.max(n - 1, 0);
      e.selectedImage = o[r];
    },
    c = e => {
      var t;
      (e.isDialogOpen = !1),
        (e.selectedImage = e.firstMainImageId),
        document.body.classList.remove('wc-block-product-gallery-modal-open'),
        e.elementThatTriggeredDialogOpening &&
          (null === (t = e.elementThatTriggeredDialogOpening) || void 0 === t || t.focus(),
          (e.elementThatTriggeredDialogOpening = null));
    },
    l = {
      state: {
        get isSelected() {
          const { selectedImage: e, imageId: t } = o();
          return e === t;
        },
        get pagerDotFillOpacity() {
          return n.isSelected ? 1 : 0.2;
        },
        get pagerButtonPressed() {
          return !!n.isSelected;
        },
        get thumbnailTabIndex() {
          return n.isSelected ? '0' : '-1';
        },
      },
      actions: {
        closeDialog: () => {
          const e = o();
          c(e);
        },
        openDialog: () => {
          (o().isDialogOpen = !0),
            document.body.classList.add('wc-block-product-gallery-modal-open');
          const e = document.querySelector('dialog[aria-label="Product gallery"]');
          if (!e) return;
          e.focus();
          const t = e.querySelectorAll(
            '.wc-block-product-gallery-large-image-next-previous--button',
          )[0];
          t &&
            setTimeout(() => {
              t.focus();
            }, 100);
        },
        selectImage: () => {
          const e = o();
          e.selectedImage = e.imageId;
        },
        selectNextImage: e => {
          e.stopPropagation();
          const t = o();
          a(t, 'next');
        },
        selectPreviousImage: e => {
          e.stopPropagation();
          const t = o();
          a(t, 'previous');
        },
        onThumbnailKeyDown: e => {
          const t = o();
          ('Enter' !== e.code && 'Space' !== e.code && 'NumpadEnter' !== e.code) ||
            ('Space' === e.code && e.preventDefault(), (t.selectedImage = t.imageId));
        },
        onSelectedLargeImageKeyDown: e => {
          if (
            (n.isSelected && 'Enter' === e.code) ||
            'Space' === e.code ||
            'NumpadEnter' === e.code
          ) {
            var a;
            'Space' === e.code && e.preventDefault(), r.openDialog();
            const n = null === (a = (0, t.getElement)()) || void 0 === a ? void 0 : a.ref;
            o().elementThatTriggeredDialogOpening = n;
          }
        },
        onViewAllImagesKeyDown: e => {
          if ('Enter' === e.code || 'Space' === e.code || 'NumpadEnter' === e.code) {
            var n;
            'Space' === e.code && e.preventDefault(), r.openDialog();
            const a = null === (n = (0, t.getElement)()) || void 0 === n ? void 0 : n.ref;
            o().elementThatTriggeredDialogOpening = a;
          }
        },
      },
      callbacks: {
        watchForChangesOnAddToCartForm: () => {
          const e = o(),
            t = document.querySelector(`form[data-product_id="${e.productId}"]`);
          if (!t) return;
          const n = new MutationObserver(function(t) {
            for (const o of t) {
              const t = o.target.getAttribute('current-image');
              'attributes' === o.type &&
                t &&
                e.visibleImagesIds.includes(t) &&
                (e.selectedImage = t);
            }
          });
          n.observe(t, { attributes: !0 });
          const r = document.querySelector('.wp-block-add-to-cart-form .reset_variations'),
            a = () => {
              e.selectedImage = e.firstMainImageId;
            };
          return (
            r && r.addEventListener('click', a),
            () => {
              n.disconnect(), document.removeEventListener('click', a);
            }
          );
        },
        keyboardAccess: () => {
          const e = o();
          let t = !0;
          const n = o => {
            t &&
              e.isDialogOpen &&
              ((t = !1),
              requestAnimationFrame(() => {
                t = !0;
              }),
              'Escape' === o.code && c(e),
              'ArrowLeft' === o.code && a(e, 'previous'),
              'ArrowRight' === o.code && a(e, 'next'));
          };
          return (
            document.addEventListener('keydown', n),
            () => document.removeEventListener('keydown', n)
          );
        },
        dialogFocusTrap: () => {
          const e = document.querySelector('dialog[aria-label="Product gallery"]');
          if (!e) return;
          const t = t => {
            if ('Tab' === t.code) {
              const o =
                  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                n = e.querySelectorAll(o);
              if (!n.length) return;
              const r = n[0],
                a = n[n.length - 1];
              t.shiftKey || t.target !== a || (t.preventDefault(), r.focus()),
                t.shiftKey && t.target === r && (t.preventDefault(), a.focus());
            }
          };
          return e.addEventListener('keydown', t), () => e.removeEventListener('keydown', t);
        },
      },
    };
  (0, t.store)('woocommerce/product-gallery', l),
    ((wc = void 0 === wc ? {} : wc)['product-gallery'] = e);
})();
