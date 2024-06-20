'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
const element_1 = require('@wordpress/element'),
  data_1 = require('@wordpress/data'),
  components_1 = require('@woocommerce/components');
async function getTaxonomiesMissingParents(e, t) {
  const n = [],
    o = {};
  return (
    e.forEach(e => {
      o[e.id] = e;
    }),
    e.forEach(e => {
      e.parent > 0 && !o[e.parent] && n.push(e.parent);
    }),
    n.length > 0
      ? (0, data_1.resolveSelect)('core')
          .getEntityRecords('taxonomy', t, { include: n })
          .then(n => getTaxonomiesMissingParents([...n, ...e], t))
      : e
  );
}
const PAGINATION_SIZE = 30,
  useTaxonomySearch = (e, t = { fetchParents: !0 }) => {
    const [n, o] = (0, element_1.useState)(!1);
    return {
      searchEntity: async function(n) {
        o(!0);
        let s = [];
        try {
          (s = await (0, data_1.resolveSelect)('core').getEntityRecords('taxonomy', e, {
            per_page: 30,
            search: (0, components_1.escapeHTML)(n),
          })),
            (null == t ? void 0 : t.fetchParents) && (s = await getTaxonomiesMissingParents(s, e));
        } finally {
          o(!1);
        }
        return s;
      },
      isResolving: n,
    };
  };
exports.default = useTaxonomySearch;
