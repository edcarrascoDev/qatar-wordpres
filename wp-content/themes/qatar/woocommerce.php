<?php get_header(); ?>

<?php if (is_singular('product')): ?>

    <?php while (have_posts()) :
        the_post();
        wc_get_template_part('content', 'single-product');
    endwhile; ?>

<?php else: ?>

    <?php get_template_part('template-parts/woocommerce/product-list'); ?>

<?php endif; ?>

<?php get_footer(); ?>