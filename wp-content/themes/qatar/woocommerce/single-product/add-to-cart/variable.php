<?php
/**
 * Variable product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/variable.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 6.1.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

$variations_json = wp_json_encode($available_variations);
$variations_attr = function_exists('wc_esc_json') ? wc_esc_json($variations_json) : _wp_specialchars($variations_json, ENT_QUOTES, 'UTF-8', true);

$input_value = isset($_POST['quantity']) ? wc_stock_amount(wp_unslash($_POST['quantity'])) : $product->get_min_purchase_quantity();


$attributes_encode = json_encode($attributes);
do_action('woocommerce_before_add_to_cart_form'); ?>

<?php do_action('woocommerce_before_variations_form'); ?>

<?php if (empty($available_variations) && false !== $available_variations) : ?>
    <p class="stock out-of-stock"><?php echo esc_html(apply_filters('woocommerce_out_of_stock_message', __('This product is currently out of stock and unavailable.', 'woocommerce'))); ?></p>
<?php else : ?>
    <div
            id="reactAddToCartForm"
            data-product-id="<?php echo absint($product->get_id()); ?>"
            data-min-value="<?php echo $product->get_min_purchase_quantity() ?>"
            data-max-value="<?php echo $product->get_max_purchase_quantity() ?>"
            data-input-value="<?php echo $input_value; ?>"
            data-product-variations="<?php echo $variations_attr; ?>"
            data-attributes='<?php echo $attributes_encode ?>'
    ></div>
<?php endif; ?>

<?php
do_action('woocommerce_after_add_to_cart_form');
