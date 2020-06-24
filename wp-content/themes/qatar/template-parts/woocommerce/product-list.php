<?php
$store_image = Theme_Manager::get_instance()->get_theme_option('store_image');
$store_mobile_image = Theme_Manager::get_instance()->get_theme_option('store_mobile_image');

/**
 * get current categoryId
 */
$cate = get_queried_object_id();
$cateID = $cate ? $cate : '';
?>

<div class="hero">
    <div class="hero__background">
        <picture>
            <source srcset="<?php echo $store_image['url']?>" media="(min-width: 650px)">
            <img src="<?php echo $store_mobile_image['url'] ?>" alt="">
        </picture>
    </div>
    <?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
        <div class="hero__content">
            <h2 class="headline headline--h2 headline--light"><?php woocommerce_page_title(); ?></h2>
        </div>
    <?php endif; ?>
</div>


<div class="section section--intro">
    <div class="container">
        <div id="reactProductList" data-category-id="<?php echo $cateID;?>"></div>
    </div>
</div>
