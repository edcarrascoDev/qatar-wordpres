<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.7.0
 */

defined('ABSPATH') || exit;
$order = $order ? $order : wc_get_order(basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)))
?>

<div class="container">
    <div class="order">

        <?php if ($order) : do_action('woocommerce_before_thankyou', $order->get_id()); ?>

            <?php if ($order->has_status('failed')) : ?>
                <div class="order__notice order__notice--error">
                    <i class="icon icon--close-circle-outline-warn"></i>
                    <p><?php esc_html_e('Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce'); ?></p>
                </div>

                <div class="order__actions order__actions--error">
                    <a
                            href="<?php echo esc_url($order->get_checkout_payment_url()); ?>"
                            class="mdc-button mdc-button--raised"
                    >
                        <?php esc_html_e('Pay', 'woocommerce'); ?>
                    </a>
                    <?php if (is_user_logged_in()) : ?>
                        <a
                                href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>"
                                class="mdc-button mdc-button--raised mdc-button--secondary"
                        >
                            <?php esc_html_e('My account', 'woocommerce'); ?>
                        </a>
                    <?php endif; ?>
                </div>

            <?php else : ?>

                <div class="order__notice order__notice--success">
                    <i class="icon icon--checkmark-circle-success"></i>
                    <p><?php echo apply_filters(
                            'woocommerce_thankyou_order_received_text',
                            esc_html__('Thank you. Your order has been received.', 'woocommerce'),
                            $order
                        ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    </p>
                </div>

                <ul class="order__overview">

                    <li class="order__overview-item order-number">
                        <?php esc_html_e('Order number:', 'woocommerce'); ?>
                        <strong><?php echo $order->get_order_number(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                    </li>

                    <li class="order__overview-item order-date">
                        <?php esc_html_e('Date:', 'woocommerce'); ?>
                        <strong><?php echo wc_format_datetime($order->get_date_created()); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                    </li>

                    <?php if (is_user_logged_in() && $order->get_user_id() === get_current_user_id() && $order->get_billing_email()) : ?>
                        <li class="order__overview-item order-email">
                            <?php esc_html_e('Email:', 'woocommerce'); ?>
                            <strong><?php echo $order->get_billing_email(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                        </li>
                    <?php endif; ?>

                    <li class="order__overview-item order-total">
                        <?php esc_html_e('Total:', 'woocommerce'); ?>
                        <strong><?php echo $order->get_formatted_order_total(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                    </li>

                    <?php if ($order->get_payment_method_title()) : ?>
                        <li class="order__overview-item order-method">
                            <?php esc_html_e('Payment method:', 'woocommerce'); ?>
                            <strong><?php echo wp_kses_post($order->get_payment_method_title()); ?></strong>
                        </li>
                    <?php endif; ?>

                </ul>

            <?php endif; ?>

            <?php do_action('woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id()); ?>
            <?php do_action('woocommerce_thankyou', $order->get_id()); ?>

        <?php else : ?>

            <div class="order__notice order__notice--success">
                <i class="icon icon--checkmark-circle-success"></i>
                <p class="mt-40"><?php echo apply_filters(
                        'woocommerce_thankyou_order_received_text',
                        esc_html__('Thank you. Your order has been received.', 'woocommerce'),
                        $order
                    ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> <br>
                    Puedes seguir mirando algunos de nuestros productos o si tienes dudas del proceso de tu
                    compra puedes contactarnos.
                </p>
            </div>

            <div class="order__actions">
                <a href="<?php echo get_permalink(wc_get_page_id( 'shop' ));?>" class="mdc-button mdc-button--raised">
                    Seguir comprando
                </a>
                <a
                        href="<?php echo Theme_Manager::get_instance()->get_theme_page_link('contact_us_page') ?>"
                        class="mdc-button mdc-button--raised mdc-button mdc-button--secondary"
                >
                    Contáctanos
                </a>
            </div>


        <?php endif; ?>

    </div>
</div>
