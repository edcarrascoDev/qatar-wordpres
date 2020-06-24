<?php
/**
 * Display single product reviews (comments)
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product-reviews.php.
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
 */

defined('ABSPATH') || exit;

global $product;

if (!comments_open()) {
    return;
}

$customer_verified = wc_customer_bought_product('', get_current_user_id(), $product->get_id());
?>
<div id="reviews" class="Reviews">

    <?php if (get_option('woocommerce_review_rating_verification_required') === 'no' || $customer_verified) : ?>
        <?php
        $commenter = wp_get_current_commenter();
        $rating_count = $product->get_rating_count();
        $average      = $product->get_average_rating();
        ?>
        <div id="review_form_wrapper">
            <div class="review__container">
                <div class="review__head">
                    <div>
                        <h3 class="headline headline--h5">Comentarios de clientes</h3>
                        <?php if ($rating_count > 0): ?>
                            <div>
                                <?php echo Theme_Woocommerce::get_instance()->iq_get_rating_html($average); ?>
                                Basado en <?php echo $rating_count ?> <?php echo $rating_count > 1 ? 'valoraciones' : 'valoración' ?>.
                            </div>
                        <?php else : ?>
                            <small>Se el primero en agregar una comentario a este producto</small>
                        <?php endif; ?>
                    </div>
                </div>
                    <div
                            id="reactReviewForm"
                            class="review__comment"
                            data-product-id="<?php echo $product->get_id() ?>"
                            data-author="<?php echo $commenter['comment_author'] ?>"
                            data-author-email="<?php echo $commenter['comment_author_email'] ?>"
                            data-author-url="<?php echo $commenter['comment_author_url'] ?>"
                            data-customer-verified="<?php echo $customer_verified ?>"
                    ></div>
            </div>
        </div>
    <?php else : ?>
        <p class="review__verification-required">
            <?php esc_html_e('Only logged in customers who have purchased this product may leave a review.', 'woocommerce'); ?>
        </p>
    <?php endif; ?>

    <div id="comments">
        <?php if (have_comments()) : ?>
            <div class="reviews__list">
                <?php wp_list_comments(apply_filters('woocommerce_product_review_list_args', array('callback' => 'woocommerce_comments'))); ?>
            </div>

            <?php
            if (get_comment_pages_count() > 1 && get_option('page_comments')) :
                echo '<nav class=pagination">';
                paginate_comments_links(
                    apply_filters(
                        'woocommerce_comment_pagination_args',
                        array(
                            'prev_text' => '&larr;',
                            'next_text' => '&rarr;',
                            'type' => 'list',
                        )
                    )
                );
                echo '</nav>';
            endif;
            ?>
        <?php else : ?>
            <p class="reviews__empty"><?php esc_html_e('There are no reviews yet.', 'woocommerce'); ?></p>
        <?php endif; ?>
    </div>

    <div class="clear"></div>
</div>
