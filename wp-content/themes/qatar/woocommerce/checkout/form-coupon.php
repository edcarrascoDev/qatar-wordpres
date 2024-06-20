<?php
/**
 * Checkout coupon form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-coupon.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.0.1
 */

defined( 'ABSPATH' ) || exit;

if ( ! wc_coupons_enabled() ) { // @codingStandardsIgnoreLine.
    return;
}

?>
<div class="container mb-50">
    <div class="coupon">
        <div class="coupon__toggle">
            <?php wc_print_notice( apply_filters( 'woocommerce_checkout_coupon_message', esc_html__( 'Have a coupon?', 'woocommerce' ) . ' <a href="#" class="show_coupon">' . esc_html__( 'Click here to enter your code', 'woocommerce' ) . '</a>' ), 'notice' ); ?>
        </div>

        <form class="checkout_coupon form-coupon" method="post" style="display:none">
            <div class="coupon__form mt-25">
                <div class="form__group">
                    <div class="mdc-text-field">
                        <input
                                type="text"
                                name="coupon_code"
                                class="mdc-text-field__input"
                                placeholder="Ingresa tu código aquí"
                                id="coupon_code"
                                value=""
                        />
                        <label for="coupon_code" class="mdc-floating-label">
                            <?php esc_attr_e( 'Coupon code', 'woocommerce' ); ?>
                        </label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                </div>

                <div class="form__group">
                    <button
                            type="submit"
                            class="mdc-button mdc-button--raised <?php echo esc_attr( wc_wp_theme_get_element_class_name( 'button' ) ? ' ' . wc_wp_theme_get_element_class_name( 'button' ) : '' ); ?>""
                            name="apply_coupon"
                            value="<?php esc_attr_e( 'Apply coupon', 'woocommerce' ); ?>"
                    >
                        <?php esc_html_e( 'Apply coupon', 'woocommerce' ); ?>
                    </button>
                </div>
            </div>

            <div class="clear"></div>
        </form>

    </div>
</div>