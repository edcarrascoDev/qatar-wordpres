<?php get_header(); ?>

<?php while (have_posts()): the_post(); ?>
    <?php if (is_singular('trailers')): ?>
        <?php get_template_part('pages/trailers'); ?>
    <?php else: ?>
        <?php the_content(); ?>
    <?php endif ?>
<?php endwhile; ?>

<?php get_footer(); ?>