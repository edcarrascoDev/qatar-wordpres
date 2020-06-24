<?php
/**
 * Single Product tabs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/tabs.php.
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

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Filter tabs and allow third parties to add their own.
 *
 * Each tab is an array containing title, callback and priority.
 *
 * @see woocommerce_default_product_tabs()
 */
$product_tabs = apply_filters( 'woocommerce_product_tabs', array() );

if ( ! empty( $product_tabs ) ) : ?>
    <div class="single-product__details">
        <div class="container">
            <div class="tab">
                <div class="mdc-tab-bar" role="tablist">
                    <div class="mdc-tab-scroller">
                        <div class="mdc-tab-scroller__scroll-area">
                            <div class="mdc-tab-scroller__scroll-content">
                                <?php foreach ($product_tabs as $key => $product_tab) : ?>
                                    <button class="mdc-tab <?php echo $key === array_key_first($product_tabs) ? 'mdc-tab--active' : ''; ?>"
                                            data-target="tab-<?php echo esc_attr($key); ?>"
                                            id="tab-title-<?php echo esc_attr($key); ?>"
                                            role="tab"
                                            aria-selected="true"
                                            tabIndex="<?php echo array_search($product_tab, array_values($product_tabs)) ?>"
                                    >

                                        <span class="mdc-tab__content">
                                            <span class="mdc-tab__text-label">
                                                <?php echo
                                                    wp_kses_post(
                                                        apply_filters(
                                                            'woocommerce_product_' . $key . '_tab_title',
                                                            $product_tab['title'], $key)
                                                    );
                                                ?>
                                            </span>
                                        </span>
                                        <span class="mdc-tab-indicator <?php echo $key === array_key_first($product_tabs) ? 'mdc-tab-indicator--active' : ''; ?>">
                                            <span
                                                    class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                                            ></span>
                                        </span>
                                        <span class="mdc-tab__ripple"></span>
                                    </button>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>

                <?php foreach ( $product_tabs as $key => $product_tab ) : ?>
                    <div
                            class="tab__container tab__container--<?php echo $key === array_key_first($product_tabs) ? 'showed' : 'hidden'; ?>"
                            id="tab-<?php echo esc_attr($key); ?>"
                            role="tabpanel"
                            aria-labelledby="tab-title-<?php echo esc_attr($key); ?>"
                    >
                        <div class="tab__content">
                            <?php
                            if ( isset( $product_tab['callback'] ) ) {
                                call_user_func( $product_tab['callback'], $key, $product_tab );
                            }
                            ?>
                        </div>
                    </div>
                <?php endforeach; ?>

                <?php do_action( 'woocommerce_product_after_tabs' ); ?>
            </div>
        </div>
    </div>


<?php endif; ?>
