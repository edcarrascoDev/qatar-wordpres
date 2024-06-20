'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.initSelect = exports.initTextArea = exports.initLinkedProductList = exports.initNumber = exports.initText = exports.initTaxonomy = exports.initNoticeHasVariations = exports.initNotice = exports.initVariationOptions = exports.initVariationItems = exports.initProductList = exports.initProductDetailsSectionDescription = exports.initRequirePassword = exports.attributesInit = exports.initToggle = exports.initInventoryQuantity = exports.initTag = exports.initTab = exports.initSummary = exports.initShippingDimensions = exports.initShippingClass = exports.initSubsectionDescription = exports.initSubsection = exports.initSectionDescription = exports.initSection = exports.initScheduleSale = exports.initSalePrice = exports.initRegularPrice = exports.initRadio = exports.initPricing = exports.initName = exports.initSku = exports.initLowStockQty = exports.initImages = exports.initDownloads = exports.initDescription = exports.initConditional = exports.initCollapsible = exports.initCheckbox = exports.initCustomFieldsToogle = exports.initCustomFields = exports.initCatalogVisibility = void 0);
var catalog_visibility_1 = require('./product-fields/catalog-visibility');
Object.defineProperty(exports, 'initCatalogVisibility', {
  enumerable: !0,
  get: function() {
    return catalog_visibility_1.init;
  },
});
var custom_fields_1 = require('./product-fields/custom-fields');
Object.defineProperty(exports, 'initCustomFields', {
  enumerable: !0,
  get: function() {
    return custom_fields_1.init;
  },
});
var custom_fields_toggle_1 = require('./product-fields/custom-fields-toggle');
Object.defineProperty(exports, 'initCustomFieldsToogle', {
  enumerable: !0,
  get: function() {
    return custom_fields_toggle_1.init;
  },
});
var checkbox_1 = require('./generic/checkbox');
Object.defineProperty(exports, 'initCheckbox', {
  enumerable: !0,
  get: function() {
    return checkbox_1.init;
  },
});
var collapsible_1 = require('./generic/collapsible');
Object.defineProperty(exports, 'initCollapsible', {
  enumerable: !0,
  get: function() {
    return collapsible_1.init;
  },
});
var conditional_1 = require('./generic/conditional');
Object.defineProperty(exports, 'initConditional', {
  enumerable: !0,
  get: function() {
    return conditional_1.init;
  },
});
var description_1 = require('./product-fields/description');
Object.defineProperty(exports, 'initDescription', {
  enumerable: !0,
  get: function() {
    return description_1.init;
  },
});
var downloads_1 = require('./product-fields/downloads');
Object.defineProperty(exports, 'initDownloads', {
  enumerable: !0,
  get: function() {
    return downloads_1.init;
  },
});
var images_1 = require('./product-fields/images');
Object.defineProperty(exports, 'initImages', {
  enumerable: !0,
  get: function() {
    return images_1.init;
  },
});
var inventory_email_1 = require('./product-fields/inventory-email');
Object.defineProperty(exports, 'initLowStockQty', {
  enumerable: !0,
  get: function() {
    return inventory_email_1.init;
  },
});
var inventory_sku_1 = require('./product-fields/inventory-sku');
Object.defineProperty(exports, 'initSku', {
  enumerable: !0,
  get: function() {
    return inventory_sku_1.init;
  },
});
var name_1 = require('./product-fields/name');
Object.defineProperty(exports, 'initName', {
  enumerable: !0,
  get: function() {
    return name_1.init;
  },
});
var pricing_1 = require('./generic/pricing');
Object.defineProperty(exports, 'initPricing', {
  enumerable: !0,
  get: function() {
    return pricing_1.init;
  },
});
var radio_1 = require('./generic/radio');
Object.defineProperty(exports, 'initRadio', {
  enumerable: !0,
  get: function() {
    return radio_1.init;
  },
});
var regular_price_1 = require('./product-fields/regular-price');
Object.defineProperty(exports, 'initRegularPrice', {
  enumerable: !0,
  get: function() {
    return regular_price_1.init;
  },
});
var sale_price_1 = require('./product-fields/sale-price');
Object.defineProperty(exports, 'initSalePrice', {
  enumerable: !0,
  get: function() {
    return sale_price_1.init;
  },
});
var schedule_sale_1 = require('./product-fields/schedule-sale');
Object.defineProperty(exports, 'initScheduleSale', {
  enumerable: !0,
  get: function() {
    return schedule_sale_1.init;
  },
});
var section_1 = require('./generic/section');
Object.defineProperty(exports, 'initSection', {
  enumerable: !0,
  get: function() {
    return section_1.init;
  },
});
var section_description_1 = require('./generic/section-description');
Object.defineProperty(exports, 'initSectionDescription', {
  enumerable: !0,
  get: function() {
    return section_description_1.init;
  },
});
var subsection_1 = require('./generic/subsection');
Object.defineProperty(exports, 'initSubsection', {
  enumerable: !0,
  get: function() {
    return subsection_1.init;
  },
});
var subsection_description_1 = require('./generic/subsection-description');
Object.defineProperty(exports, 'initSubsectionDescription', {
  enumerable: !0,
  get: function() {
    return subsection_description_1.init;
  },
});
var shipping_class_1 = require('./product-fields/shipping-class');
Object.defineProperty(exports, 'initShippingClass', {
  enumerable: !0,
  get: function() {
    return shipping_class_1.init;
  },
});
var shipping_dimensions_1 = require('./product-fields/shipping-dimensions');
Object.defineProperty(exports, 'initShippingDimensions', {
  enumerable: !0,
  get: function() {
    return shipping_dimensions_1.init;
  },
});
var summary_1 = require('./product-fields/summary');
Object.defineProperty(exports, 'initSummary', {
  enumerable: !0,
  get: function() {
    return summary_1.init;
  },
});
var tab_1 = require('./generic/tab');
Object.defineProperty(exports, 'initTab', {
  enumerable: !0,
  get: function() {
    return tab_1.init;
  },
});
var tag_1 = require('./product-fields/tag');
Object.defineProperty(exports, 'initTag', {
  enumerable: !0,
  get: function() {
    return tag_1.init;
  },
});
var inventory_quantity_1 = require('./product-fields/inventory-quantity');
Object.defineProperty(exports, 'initInventoryQuantity', {
  enumerable: !0,
  get: function() {
    return inventory_quantity_1.init;
  },
});
var toggle_1 = require('./generic/toggle');
Object.defineProperty(exports, 'initToggle', {
  enumerable: !0,
  get: function() {
    return toggle_1.init;
  },
});
var attributes_1 = require('./product-fields/attributes');
Object.defineProperty(exports, 'attributesInit', {
  enumerable: !0,
  get: function() {
    return attributes_1.init;
  },
});
var password_1 = require('./product-fields/password');
Object.defineProperty(exports, 'initRequirePassword', {
  enumerable: !0,
  get: function() {
    return password_1.init;
  },
});
var product_details_section_description_1 = require('./product-fields/product-details-section-description');
Object.defineProperty(exports, 'initProductDetailsSectionDescription', {
  enumerable: !0,
  get: function() {
    return product_details_section_description_1.init;
  },
});
var product_list_1 = require('./product-fields/product-list');
Object.defineProperty(exports, 'initProductList', {
  enumerable: !0,
  get: function() {
    return product_list_1.init;
  },
});
var variation_items_1 = require('./product-fields/variation-items');
Object.defineProperty(exports, 'initVariationItems', {
  enumerable: !0,
  get: function() {
    return variation_items_1.init;
  },
});
var variation_options_1 = require('./product-fields/variation-options');
Object.defineProperty(exports, 'initVariationOptions', {
  enumerable: !0,
  get: function() {
    return variation_options_1.init;
  },
});
var notice_edit_single_variation_1 = require('./product-fields/notice-edit-single-variation');
Object.defineProperty(exports, 'initNotice', {
  enumerable: !0,
  get: function() {
    return notice_edit_single_variation_1.init;
  },
});
var notice_has_variations_1 = require('./product-fields/notice-has-variations');
Object.defineProperty(exports, 'initNoticeHasVariations', {
  enumerable: !0,
  get: function() {
    return notice_has_variations_1.init;
  },
});
var taxonomy_1 = require('./generic/taxonomy');
Object.defineProperty(exports, 'initTaxonomy', {
  enumerable: !0,
  get: function() {
    return taxonomy_1.init;
  },
});
var text_1 = require('./generic/text');
Object.defineProperty(exports, 'initText', {
  enumerable: !0,
  get: function() {
    return text_1.init;
  },
});
var number_1 = require('./generic/number');
Object.defineProperty(exports, 'initNumber', {
  enumerable: !0,
  get: function() {
    return number_1.init;
  },
});
var linked_product_list_1 = require('./generic/linked-product-list');
Object.defineProperty(exports, 'initLinkedProductList', {
  enumerable: !0,
  get: function() {
    return linked_product_list_1.init;
  },
});
var text_area_1 = require('./generic/text-area');
Object.defineProperty(exports, 'initTextArea', {
  enumerable: !0,
  get: function() {
    return text_area_1.init;
  },
});
var select_1 = require('./generic/select');
Object.defineProperty(exports, 'initSelect', {
  enumerable: !0,
  get: function() {
    return select_1.init;
  },
});
