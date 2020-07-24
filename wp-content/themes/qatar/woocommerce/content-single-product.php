<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined('ABSPATH') || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action('woocommerce_before_single_product');

if (post_password_required()) {
    echo get_the_password_form();
    return;
}

$image = wp_get_attachment_image_src($product->get_image_id(), 'single-post-thumbnail'); ?>
<script type="application/ld+json">
	<?php echo '
{
	  "@context": "https://schema.org/",
	  "@type": "Product",
	  "name": "' . $product->get_title() . '",
	  "image": "' . $image[0] . '",
	  "description": "' . get_the_excerpt($product->get_id()) . '",
	  "brand": {
		"@type": "Organization",
		"name": "Industrias Qatar"
	  },
	  "aggregateRating": {
      "@type": "AggregateRating",
	  "ratingValue": "' . $product->get_average_rating() . '",
      "ratingCount": "' . $product->get_rating_count() . '"
      }
	}'
    ?>

</script>
<?php $current_url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>
<script type="application/ld+json">
	<?php echo '
	
{
"@context": "https://schema.org/",
"@type": "BreadcrumbList",
"itemListElement": [{
"@type": "ListItem",
"position": 1,
"name": "Industrias Qatar",
"item": "https://www.industriasqatar.com/"
},{
"@type": "ListItem",
"position": 2,
"name": "Productos",
"item": "https://www.industriasqatar.com/tienda/"
},{
"@type": "ListItem",
"position": 3,
"name": "' . $product->get_title() . '",
"item": "' . $current_url . '"
}]
}
'
    ?>

</script>

<div id="product-<?php the_ID(); ?>" <?php wc_product_class('single-product', $product); ?>>

    <div class="single-product__main">
        <div class="container">
            <div class="single-product__content">
                <?php
                /**
                 * Hook: woocommerce_before_single_product_summary.
                 *
                 * @hooked woocommerce_show_product_sale_flash - 10
                 * @hooked woocommerce_show_product_images - 20
                 */
                do_action('woocommerce_before_single_product_summary');
                ?>

                <div class="single-product__specs">
                    <?php
                    /**
                     * Hook: woocommerce_single_product_summary.
                     * Customized
                     *
                     * @hooked woocommerce_template_single_meta - 5
                     * @hooked woocommerce_template_single_title - 10
                     * @hooked woocommerce_template_single_price - 20
                     * @hooked woocommerce_template_single_excerpt - 30
                     * @hooked woocommerce_template_single_add_to_cart - 40
                     * @hooked woocommerce_template_single_sharing - 50
                     * @hooked WC_Structured_Data::generate_product_data() - 60
                     */
                    do_action('woocommerce_single_product_summary');
                    ?>
                </div>
            </div>
        </div>
    </div>

    <?php
    /**
     * Hook: woocommerce_after_single_product_summary.
     *
     * @hooked woocommerce_output_product_data_tabs - 10
     * @hooked woocommerce_upsell_display - 15
     * @hooked woocommerce_output_related_products - 20
     */
    do_action('woocommerce_after_single_product_summary');
    ?>

</div>

<?php do_action('woocommerce_after_single_product'); ?>
