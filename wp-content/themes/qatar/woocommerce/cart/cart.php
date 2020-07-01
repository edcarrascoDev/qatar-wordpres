<?php
/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.8.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_cart' ); ?>
<div class="container">
    <div class="cart">
        <h2 class="headline headline--h3">Carro de compras</h2>
        <div class="cart__container">
            <form
                    class="cart__table"
                    action="<?php echo esc_url( wc_get_cart_url() ); ?>"
                    method="post"
            >
                <?php do_action('woocommerce_before_cart_table'); ?>
                <div class="cart__list-items">
                    <?php do_action('woocommerce_before_cart_contents'); ?>

                    <?php
                    foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
                        $_product = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
                        $product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);

                        if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_cart_item_visible', true, $cart_item, $cart_item_key)) {
                            $product_permalink = apply_filters(
                                'woocommerce_cart_item_permalink',
                                $_product->is_visible()
                                    ? $_product->get_permalink($cart_item)
                                    : '', $cart_item, $cart_item_key
                            );
                            ?>
                            <div class="cart__item <?php echo esc_attr(apply_filters('woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key)); ?>">

                                <div class="cart__product-thumbnail">
                                    <?php
                                    $thumbnail = apply_filters(
                                        'woocommerce_cart_item_thumbnail',
                                        $_product->get_image(),
                                        $cart_item,
                                        $cart_item_key
                                    );

                                    if (!$product_permalink) {
                                        echo $thumbnail;
                                    } else {
                                        printf('<a href="%s">%s</a>', esc_url($product_permalink), $thumbnail); // PHPCS: XSS ok.
                                    }
                                    ?>
                                </div>

                                <div class="cart__product-name"
                                     data-title="<?php esc_attr_e('Product', 'woocommerce'); ?>"
                                >
                                    <?php
                                    if (!$product_permalink) {
                                        echo wp_kses_post(apply_filters(
                                                'woocommerce_cart_item_name',
                                                $_product->get_name(),
                                                $cart_item,
                                                $cart_item_key) . '&nbsp;'
                                        );
                                    } else {
                                        echo wp_kses_post(apply_filters('woocommerce_cart_item_name', sprintf('<a href="%s">%s</a>', esc_url($product_permalink), $_product->get_name()), $cart_item, $cart_item_key));
                                    }

                                    do_action('woocommerce_after_cart_item_name', $cart_item, $cart_item_key);

                                    // Meta data.
                                    echo wc_get_formatted_cart_item_data($cart_item); // PHPCS: XSS ok.

                                    // Backorder notification.
                                    if ($_product->backorders_require_notification() && $_product->is_on_backorder($cart_item['quantity'])) {
                                        echo wp_kses_post(apply_filters('woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__('Available on backorder', 'woocommerce') . '</p>', $product_id));
                                    }
                                    ?>
                                </div>

                                <div class="cart__product-quantity quantity"
                                     data-title="<?php esc_attr_e('Quantity', 'woocommerce'); ?>"
                                >
                                    <?php
                                    if ($_product->is_sold_individually()) {
                                        $product_quantity = sprintf('1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key);
                                    } else {
                                        $product_quantity = woocommerce_quantity_input(
                                            array(
                                                'input_name' => "cart[{$cart_item_key}][qty]",
                                                'input_value' => $cart_item['quantity'],
                                                'max_value' => $_product->get_max_purchase_quantity(),
                                                'min_value' => '0',
                                                'product_name' => $_product->get_name(),
                                            ),
                                            $_product,
                                            false
                                        );
                                    }

                                    echo apply_filters('woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item); // PHPCS: XSS ok.
                                    ?>
                                </div>

                                <div class="cart__product-subtotal"
                                     data-title="<?php esc_attr_e('Subtotal', 'woocommerce'); ?>"
                                >
                                    <small class="cart__product-price"
                                           data-title="<?php esc_attr_e('Price', 'woocommerce'); ?>"
                                    >
                                        <?php
                                        echo apply_filters(
                                            'woocommerce_cart_item_price',
                                            WC()->cart->get_product_price($_product), $cart_item, $cart_item_key
                                        );
                                        ?>
                                    </small>
                                    </br>
                                    <strong>
                                        <?php
                                        echo apply_filters(
                                            'woocommerce_cart_item_subtotal',
                                            WC()->cart->get_product_subtotal($_product, $cart_item['quantity']),
                                            $cart_item,
                                            $cart_item_key
                                        );
                                        ?>
                                    </strong>
                                </div>


                                <div class="cart__product-remove">
                                    <?php
                                    echo apply_filters(
                                        'woocommerce_cart_item_remove_link',
                                        sprintf(
                                            '<a href="%s" class="icon-button" aria-label="%s" data-product_id="%s" data-product_sku="%s"><span>&times;</span></a>',
                                            esc_url(wc_get_cart_remove_url($cart_item_key)),
                                            esc_html__('Remove this item', 'woocommerce'),
                                            esc_attr($product_id),
                                            esc_attr($_product->get_sku())
                                        ),
                                        $cart_item_key
                                    );
                                    ?>
                                </div>
                            </div>
                            <?php
                        }
                    }
                    ?>

                    <?php do_action('woocommerce_cart_contents'); ?>

                    <?php do_action('woocommerce_cart_actions'); ?>

                    <?php wp_nonce_field('woocommerce-cart', 'woocommerce-cart-nonce'); ?>

                    <div class="cart__actions mt-25">
                        <button type="submit" class="mdc-button mdc-button--raised" name="update_cart"
                                value="<?php esc_attr_e('Update cart', 'woocommerce'); ?>"
                        >
                            <?php esc_html_e('Update cart', 'woocommerce'); ?>
                        </button>
                    </div>

                </div>
                <?php do_action('woocommerce_after_cart_contents'); ?>
                <?php do_action('woocommerce_after_cart_table'); ?>
            </form>

            <?php do_action( 'woocommerce_before_cart_collaterals' ); ?>

            <div class="car__info">
                <div class="cart__collaterals">
                    <?php
                    /**
                     * Cart collaterals hook.
                     *
                     * @hooked woocommerce_cross_sell_display
                     * @hooked woocommerce_cart_totals - 10
                     */
                    do_action( 'woocommerce_cart_collaterals' );
                    ?>
                </div>

                <div class="cart__coupon">

                    <?php if (wc_coupons_enabled()) { ?>
                        <div class="coupon">
                            <div class="form__group">
                                <div class="mdc-text-field">
                                    <input
                                            type="text"
                                            name="coupon_code"
                                            class="mdc-text-field__input"
                                            id="coupon_code"
                                            placeholder="<?php esc_attr_e('Coupon code', 'woocommerce'); ?>"
                                    />
                                    <label for="coupon_code" class="mdc-floating-label">
                                        <?php esc_html_e('Coupon', 'woocommerce'); ?>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="mdc-button mdc-button--raised mdc-button--full" name="apply_coupon"
                                    value="<?php esc_attr_e('Apply coupon', 'woocommerce'); ?>"><?php esc_attr_e('Apply coupon', 'woocommerce'); ?></button>
                            <?php do_action('woocommerce_cart_coupon'); ?>
                        </div>
                    <?php } ?>

                </div>
            </div>

            <?php do_action( 'woocommerce_after_cart' ); ?>
        </div>
    </div>
</div>

