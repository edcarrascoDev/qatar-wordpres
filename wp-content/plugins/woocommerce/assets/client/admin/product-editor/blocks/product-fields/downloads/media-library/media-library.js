'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MediaLibrary = void 0);
const element_1 = require('@wordpress/element');
function MediaLibrary({
  allowedTypes: e,
  modalTitle: t,
  modalButtonText: r,
  multiple: o,
  className: n,
  uploaderParams: l,
  children: i,
  onSelect: a,
}) {
  const s = (0, element_1.useMemo)(
    function() {
      return wp.media({
        title: t,
        library: { type: e },
        button: { text: r },
        multiple: o,
        states: [
          new wp.media.controller.Library({
            title: t,
            library: wp.media.query(),
            multiple: o,
            priority: 20,
            filterable: 'all',
          }),
        ],
      });
    },
    [e, t, r, o],
  );
  return (
    (0, element_1.useEffect)(
      function() {
        function e() {
          const e = s
            .state()
            .get('selection')
            .toJSON();
          a(e);
        }
        function t() {
          s.uploader.options.uploader.params = l;
        }
        return (
          s.on('select', e),
          s.on('ready', t),
          function() {
            s.off('select', e), s.off('ready', t);
          }
        );
      },
      [s, l, a],
    ),
    (0, element_1.useEffect)(
      () =>
        function() {
          s.remove();
        },
      [s],
    ),
    i({
      open: function() {
        s.$el.addClass(n), s.open();
      },
    })
  );
}
exports.MediaLibrary = MediaLibrary;
