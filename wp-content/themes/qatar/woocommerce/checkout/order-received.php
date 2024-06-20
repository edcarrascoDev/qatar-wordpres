<?php
/**
 * "Order received" message.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/order-received.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 8.8.0
 *
 * @var WC_Order|false $order
 */

defined('ABSPATH') || exit;
?>

<div>
    <?php
    /**
     * Filter the message shown after a checkout is complete.
     *
     * @param string $message The message.
     * @param WC_Order|false $order The order created during checkout, or false if order data is not available.
     * @since 2.2.0
     *
     */
    $message = apply_filters(
        'woocommerce_thankyou_order_received_text',
        esc_html(__('Thank you. Your order has been received.', 'woocommerce')),
        $order
    );

    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

    ?>
  <div class="order__notice order__notice--success">
    <i class="icon icon--checkmark-circle-success"></i>
    <p class="mt-40"><?php echo $message; ?> <br>
      Puedes seguir mirando algunos de nuestros productos o si tienes dudas del proceso de tu
      compra puedes contactarnos.
    </p>
  </div>

  <div class="order__actions">
    <a href="<?php echo get_permalink(wc_get_page_id('shop')); ?>" class="mdc-button mdc-button--raised">
      Seguir comprando
    </a>
    <a
        href="<?php echo Theme_Manager::get_instance()->get_theme_page_link('contact_us_page') ?>"
        class="mdc-button mdc-button--raised mdc-button mdc-button--secondary"
    >
      Contáctanos
    </a>
  </div>
</div>
