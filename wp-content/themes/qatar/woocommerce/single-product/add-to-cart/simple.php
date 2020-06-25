<?php
/**
 * Simple product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/simple.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined('ABSPATH') || exit;

global $product;

if (!$product->is_purchasable()) {
    return;
}

echo wc_get_stock_html($product); // WPCS: XSS ok.

$input_value = isset($_POST['quantity']) ? wc_stock_amount(wp_unslash($_POST['quantity'])) : $product->get_min_purchase_quantity();

if ($product->is_in_stock()) : ?>
<div
        id="reactAddToCartForm"
        data-product-id="<?php echo esc_attr($product->get_id()); ?>"
        data-min-value="<?php echo $product->get_min_purchase_quantity() ?>"
        data-max-value="<?php echo $product->get_max_purchase_quantity() ?>"
        data-input-value="<?php echo $input_value; ?>"
></div>

<?php else: ?>

<div class="single-product__out-of-stock">
    <span><?php echo esc_html( apply_filters( 'woocommerce_out_of_stock_message', __( 'This product is currently out of stock and unavailable.', 'woocommerce' ) ) ); ?></span>
</div>

<?php endif; ?>
