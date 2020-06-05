<?php get_header(); ?>


<?php $image = Theme_Manager::get_instance()->get_theme_option('blog_desktop_bg'); ?>

<?php if ($image) : ?>

    <div class="masthead masthead--cut d-none d-md-block">
        <div class="masthead__picture">
            <img src="<?php echo $image['url']; ?>" alt="">
        </div>
    </div>

<?php endif; ?>

<?php while (have_posts()) : the_post(); ?>

    <div class="container container--reduce">
        <section class="blog__head">

            <?php if (has_post_thumbnail()) : ?>
                <div class="blog__image">
                    <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full') ?>" alt="">
                    <div class="blog__btn">
                        <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="btn btn-primary"><?php _e('BACK BLOG', THEME_LOCALE); ?></a>
                    </div>
                </div>
            <?php endif; ?>

            <div class="blog__content">
                <div class="row">
                    <div class="blog col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="blog__title">
                            <h4><?php the_title(); ?></h4>
                        </div>
                        <div class="blog__tags">
                            <?php foreach (wp_get_post_tags(get_the_ID()) as $tag) : ?>
                                <span><?php echo $tag->name; ?></span>
                            <?php endforeach; ?>

                        </div>
                    </div>
                    <div class="blog col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div class="blog__text">
                            <?php the_excerpt(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="row">
            <section class="blog col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div class="blog__description">
                    <?php the_content(); ?>
                </div>
            </section>

            <?php get_template_part('template-parts/posts/related-posts'); ?>

        </div>
    </div>

<?php endwhile; ?>


<?php get_footer(); ?>