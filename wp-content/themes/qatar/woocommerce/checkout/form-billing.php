<?php
/**
 * Checkout billing information form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-billing.php.
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
<div class="billing-fields">
    <?php if (wc_ship_to_billing_address_only() && WC()->cart->needs_shipping()) : ?>

        <h3 class="headline headline--h5"><?php esc_html_e('Billing &amp; Shipping', 'woocommerce'); ?></h3>

    <?php else : ?>

        <h3 class="headline headline--h5"><?php esc_html_e('Billing details', 'woocommerce'); ?></h3>

    <?php endif; ?>

    <?php do_action('woocommerce_before_checkout_billing_form', $checkout); ?>

    <div class="woocommerce-billing-fields__field-wrapper">
        <?php
        $fields = $checkout->get_checkout_fields('billing');

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
            ?>

            <div
                    class="reactWCFormField form__group"
                    data-key-value="<?php echo $key ?>"
                    data-args='<?php echo json_encode($field) ?>'
                    data-value="<?php echo $checkout->get_value($key) ?>"
            ></div>

        <?php endforeach; ?>
    </div>

    <?php do_action('woocommerce_after_checkout_billing_form', $checkout); ?>
</div>

<?php if (!is_user_logged_in() && $checkout->is_registration_enabled()) : ?>
    <div class="account-fields">
        <?php if (!$checkout->is_registration_required()) : ?>

            <p class="form-row form-row-wide create-account">
                <label class="form__label form__label-for-checkbox checkbox">
                    <input
                            class="form__input form__input-checkbox input-checkbox"
                            id="createaccount"
                        <?php checked((true === $checkout->get_value('createaccount') || (true === apply_filters('woocommerce_create_account_default_checked', false))), true); ?>
                            type="checkbox"
                            name="createaccount"
                            value="1"
                    />
                    <span><?php esc_html_e('Create an account?', 'woocommerce'); ?></span>
                </label>
            </p>

        <?php endif; ?>

        <?php do_action('woocommerce_before_checkout_registration_form', $checkout); ?>

        <?php if ($checkout->get_checkout_fields('account')) : ?>

            <div class="create-account">
                <?php foreach ($checkout->get_checkout_fields('account') as $key => $field) : ?>
                    <?php woocommerce_form_field($key, $field, $checkout->get_value($key)); ?>
                <?php endforeach; ?>
                <div class="clear"></div>
            </div>

        <?php endif; ?>

        <?php do_action('woocommerce_after_checkout_registration_form', $checkout); ?>
    </div>
<?php endif; ?>
