<?php
/**
 * Single Product Meta
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/meta.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;
?>
<div class="single-product__meta">

	<?php do_action( 'woocommerce_product_meta_start' );?>

    <?php $categories = get_the_terms( $product->get_id(), 'product_cat' );?>

    <?php foreach ($categories as $category): ?>
        <?php if ($category->parent === 0):?>
            <span class="single-product__category">
                <a href="<?php echo esc_url(get_term_link($category->term_id, 'product_cat'));?>"><?php echo $category->name;?></a>
            </span>
        <?php endif; ?>
    <?php endforeach; ?>

	<?php do_action( 'woocommerce_product_meta_end' ); ?>

</div>
