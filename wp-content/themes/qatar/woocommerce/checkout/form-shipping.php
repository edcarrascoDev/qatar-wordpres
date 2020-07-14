<?php
/**
 * Checkout shipping information form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-shipping.php.
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
 * @global WC_Checkout $checkout
 */

defined('ABSPATH') || exit;
?>
<div class="shipping-fields">
    <?php if (true === WC()->cart->needs_shipping_address()) : ?>
        <div class="mdc-form-field">
            <div class="mdc-checkbox">
                <input
                        id="ship-to-different-address-checkbox"
                        class="mdc-checkbox__native-control"
                    <?php checked(apply_filters('woocommerce_ship_to_different_address_checked', 'shipping' === get_option('woocommerce_ship_to_destination') ? 1 : 0), 1); ?>
                        type="checkbox"
                        name="ship_to_different_address"
                        value="1"
                />
                <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark"
                         viewBox="0 0 24 24">
                        <path class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                </div>
            </div>
            <label for="ship-to-different-address-checkbox">
                <?php esc_html_e('Ship to a different address?', 'woocommerce'); ?>
            </label>
        </div>

        <div class="shipping_address mt-5" style="display: none" data-display="block">

            <?php do_action('woocommerce_before_checkout_shipping_form', $checkout); ?>

            <div class="shipping-fields__field-wrapper">
                <?php
                $fields = $checkout->get_checkout_fields('shipping');

                foreach ($fields as $key => $field) : ?>

                    <?php
                    $defaults = array(
                        'type' => 'text',
                        'label' => '',
                        'description' => '',
                        'placeholder' => '',
                        'maxlength' => false,
                        'required' => false,
                        'autocomplete' => false,
                        'id' => $key,
                        'class' => array(),
                        'label_class' => array(),
                        'input_class' => array(),
                        'return' => false,
                        'options' => array(),
                        'custom_attributes' => array(),
                        'validate' => array(),
                        'default' => '',
                        'autofocus' => '',
                        'priority' => '',
                    );

                    $field = wp_parse_args($field, $defaults);
                    $field['required'] = false;
                    ?>

                    <div
                            class="reactWCFormField form__group"
                            data-key-value="<?php echo $key ?>"
                            data-args='<?php echo json_encode($field) ?>'
                            data-value="<?php echo $checkout->get_value($key) ?>"
                    ></div>

                <?php endforeach; ?>
            </div>

            <?php do_action('woocommerce_after_checkout_shipping_form', $checkout); ?>

        </div>

    <?php endif; ?>
</div>

<div class="additional-fields">
    <?php do_action('woocommerce_before_order_notes', $checkout); ?>

    <?php if (apply_filters('woocommerce_enable_order_notes_field', 'yes' === get_option('woocommerce_enable_order_comments', 'yes'))) : ?>

        <?php if (!WC()->cart->needs_shipping() || wc_ship_to_billing_address_only()) : ?>

            <h3><?php esc_html_e('Additional information', 'woocommerce'); ?></h3>

        <?php endif; ?>

        <div class="additional-fields__field-wrapper">
            <?php foreach ($checkout->get_checkout_fields('order') as $key => $field) : ?>

                <?php
                $defaults = array(
                    'type' => 'text',
                    'label' => '',
                    'description' => '',
                    'placeholder' => '',
                    'maxlength' => false,
                    'required' => false,
                    'autocomplete' => false,
                    'id' => $key,
                    'class' => array(),
                    'label_class' => array(),
                    'input_class' => array(),
                    'return' => false,
                    'options' => array(),
                    'custom_attributes' => array(),
                    'validate' => array(),
                    'default' => '',
                    'autofocus' => '',
                    'priority' => '',
                );

                $field = wp_parse_args($field, $defaults);
                ?>

                <div
                        class="reactWCFormField form__group"
                        data-key-value="<?php echo $key ?>"
                        data-args='<?php echo json_encode($field) ?>'
                        data-value="<?php echo $checkout->get_value($key) ?>"
                ></div>

            <?php endforeach; ?>
        </div>

    <?php endif; ?>

    <?php do_action('woocommerce_after_order_notes', $checkout); ?>
</div>
