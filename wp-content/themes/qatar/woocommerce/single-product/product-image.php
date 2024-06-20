<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.8.0
 */

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
    return;
}

global $product;

$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();
$wrapper_classes   = apply_filters(
    'woocommerce_single_product_image_gallery_classes',
    array(
        'woocommerce-product-gallery',
        'woocommerce-product-gallery--' . ( $post_thumbnail_id ? 'with-images' : 'without-images' ),
        'woocommerce-product-gallery--columns-' . absint( $columns ),
        'images',
    )
);
$attachment_ids = $product->get_gallery_image_ids();
?>
<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>">
    <div class="swiper product-gallery__thumbs">
        <div class="swiper-wrapper">
            <?php
                if ( $product->get_image_id() ) {
                    $thumb = '<div class="swiper-slide">';
                    $thumb .= Theme_Woocommerce::get_instance()->iq_get_gallery_image_html( $post_thumbnail_id );
                    $thumb .= '</div>';

                    if ($attachment_ids) {
                        foreach( $attachment_ids as $attachment_id ) {
                            $thumb .= '<div class="swiper-slide">';
                            $thumb .= Theme_Woocommerce::get_instance()->iq_get_gallery_image_html( $attachment_id );
                            $thumb .= '</div>';
                        }
                    }
                    echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $thumb, $post_thumbnail_id );
                }
            ?>
        </div>
    </div>
	<div class="swiper product-gallery__top">
        <div class="swiper-wrapper">
            <?php
                if ( $product->get_image_id() ) {
                    $html = '<div class="swiper-slide"><div class="product-gallery__image">';
                    $html .= Theme_Woocommerce::get_instance()->iq_get_gallery_image_html( $post_thumbnail_id, true );
                    $html .= '<div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div></div></div>';

                    if ($attachment_ids) {
                        foreach( $attachment_ids as $attachment_id ) {
                            $html .= '<div class="swiper-slide"><div class="product-gallery__image">';
                            $html .= Theme_Woocommerce::get_instance()->iq_get_gallery_image_html( $attachment_id, true );
                            $html .= '<div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div></div></div>';
                        }
                    }
                } else {
                    $html  = '<div class="product-gallery__image--placeholder">';
                    $html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
                    $html .= '</div>';
                }

                echo apply_filters('woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id);
            ?>
        </div>

        <div class="swiper-pagination swiper-pagination-white"></div>
        <div class="swiper-button-next swiper-button-black"></div>
        <div class="swiper-button-prev swiper-button-black"></div>
	</div>
</div>
