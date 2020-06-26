<?php
/**
 * Single Product Up-Sells
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/up-sells.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$productsId = '';

if ( $upsells ) : ?>

	<section class="section section--light">
        <div class="container">
            <?php
            $heading = apply_filters('woocommerce_product_upsells_products_heading', __('You may also like&hellip;', 'woocommerce'));

            if ($heading) :
                ?>
                <h2 class="mb-50"><?php echo esc_html($heading); ?></h2>
            <?php endif; ?>

            <?php

            $count = 1;
            foreach ($upsells as $key => $value) {
                if ($value === end($upsells) || $count === 4) {
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
            <div id="reactUpsellsProductList" data-products-id="<?php echo $productsId; ?>"></div>
        </div>
	</section>


<?php endif;

wp_reset_postdata();
