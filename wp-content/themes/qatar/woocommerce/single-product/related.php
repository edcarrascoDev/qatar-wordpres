<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$productsId = '';

if ( $related_products ) : ?>

	<section class="pb-50">
        <div class="container">

            <?php
                $heading = apply_filters('woocommerce_product_related_products_heading', __('Related products', 'woocommerce'));

                if ($heading) :
                    ?>
                    <h2 class="headline headline--h2  text-center"><?php echo esc_html($heading); ?></h2>
                <div class="separator separator--center separator--secondary"></div>
                <?php endif; ?>

                <?php
                $count = 1;
                foreach ($related_products as $key => $value) {
                    if ($value === end($related_products) || $count === 4) {
                        $productsId .= $value->get_id();
                    } else {
                        $productsId .= $value->get_id() . ',';
                    }

                    if ($count === 4) {
                        break;
                    }
                    $count++;
                }
            ?>
            <div class="mt-50" id="reactRelatedProductList" data-products-id="<?php echo $productsId; ?>"></div>
        </div>
	</section>
	<?php
endif;

wp_reset_postdata();
