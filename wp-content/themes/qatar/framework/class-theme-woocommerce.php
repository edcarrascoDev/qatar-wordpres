<?php

class Theme_Woocommerce {
    private static $class_instance;

    public function __construct() {

        add_action('woocommerce_before_single_product', [$this, 'change_single_product_layout']);
        add_action('woocommerce_after_single_product_summary', [$this, 'removeUpsellsProductsFromSingleProduct']);
        add_filter('woocommerce_default_address_fields', [$this, 'custom_override_default_address_fields']);
    }


    public static function get_instance() {
        if (self::$class_instance === null) {
            self::$class_instance = new self();
        }

        return self::$class_instance;
    }

    function change_single_product_layout() {
        /**
         * Disable de hooks actions for Product summary
         */
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);

        /**
         * Add the new order for product summary
         */

        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 5);
        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 10);
        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 20);
        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 30);
        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 40);
        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);
    }

    function removeUpsellsProductsFromSingleProduct() {
        remove_action('woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15);
    }

    public function iq_get_gallery_image_html($attachment_id, $main_image = false) {
        $gallery_thumbnail = wc_get_image_size('gallery_thumbnail');
        $thumbnail_size = apply_filters('woocommerce_gallery_thumbnail_size', array($gallery_thumbnail['width'], $gallery_thumbnail['height']));
        $image_size = apply_filters('woocommerce_gallery_image_size', $main_image ? 'woocommerce_single' : $thumbnail_size);
        $full_size = apply_filters('woocommerce_gallery_full_size', apply_filters('woocommerce_product_thumbnails_large_size', 'full'));
        $thumbnail_src = wp_get_attachment_image_src($attachment_id, $thumbnail_size);
        $full_src = wp_get_attachment_image_src($attachment_id, $full_size);
        $alt_text = trim(wp_strip_all_tags(get_post_meta($attachment_id, '_wp_attachment_image_alt', true)));
        $image = wp_get_attachment_image(
            $attachment_id,
            $image_size,
            false,
            apply_filters(
                'woocommerce_gallery_image_html_attachment_image_params',
                array(
                    'title' => _wp_specialchars(get_post_field('post_title', $attachment_id), ENT_QUOTES, 'UTF-8', true),
                    'data-caption' => _wp_specialchars(get_post_field('post_excerpt', $attachment_id), ENT_QUOTES, 'UTF-8', true),
                    'data-src' => esc_url($full_src[0]),
                    'data-large_image' => esc_url($full_src[0]),
                    'data-large_image_width' => esc_attr($full_src[1]),
                    'data-large_image_height' => esc_attr($full_src[2]),
                    'class' => esc_attr($main_image ? 'swiper-lazy' : ''),
                    'alt' => esc_attr($alt_text),
                ),
                $attachment_id,
                $image_size,
                $main_image
            )
        ); ?>
        <?php return $image;
    }

    /**
     * Get HTML for ratings.
     *
     * @param float $rating Rating being shown.
     * @param int $count Total number of ratings.
     * @return string
     * @since  3.0.0
     */

    function iq_get_rating_html($rating, $count = 0) {


        if (0 < $rating) {
            $label = sprintf(__('Rated %s out of 5', 'woocommerce'), $rating);
            $i = 1;
            $html = '<span class="review__rating">';
            while ($i <= 5):
                if ($i <= $rating) {
                    $html .= '<i class="fas fa-star" data-rating="' . $rating . '" aria-label="' . esc_attr($label) . '"></i>';
                } else {
                    $html .= '<i class="far fa-star" data-rating="' . $rating . '" aria-label="' . esc_attr($label) . '"></i>';
                }
                $i++;
            endwhile;
        }

        $html .= '</span>';

        return apply_filters('woocommerce_product_get_rating_html', $html, $rating, $count);
    }

    function custom_override_default_address_fields($address_fields) {
        unset($address_fields['company']);
        unset($address_fields['country']);
        unset($address_fields['postcode']);
        unset($address_fields['last_name']);

        $address_fields['first_name']['label'] = 'Nombres y Apellidos';
        $address_fields['state']['label'] = 'Departamento';
        $address_fields['state']['priority'] = 70;
        $address_fields['city']['label'] = 'Ciudad';
        $address_fields['city']['type'] = 'city';
        $address_fields['city']['priority'] = 80;

        $address_fields['address_1']['label'] = 'Dirección';
        $address_fields['address_2']['label'] = 'Datos Adicionales (opcional)';


        return $address_fields;
    }

    /**
     * Outputs all queued notices on WC pages.
     *
     * @since 3.5.0
     */
    function woocommerce_output_all_notices() {
        echo '<div class="mdc-snackbar"><div class="mdc-snackbar__surface">';
        wc_print_notices();
        echo '</div></div>';
    }
}
