<?php
/**
 * Template Name: producto sencillo
 */
?>

<?php

$main_url = 'https://www.industriasqatar.com';
$current_url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$page_title = get_the_title();

?>

<script type="application/ld+json">
	<?php echo '
        {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Industrias Qatar",
        "item": "' . $main_url . '"
        },{
        "@type": "ListItem",
        "position": 2,
        "name": "' . $page_title . '",
        "item": "' . $current_url . '"
        }]
        }'
    ?>









</script>

<?php get_header(); ?>

<?php while (have_posts()): the_post(); ?>

    <div class="single-product">
        <div class="single-product__main">
            <div class="container">
                <div class="single-product__content">
                    <div class="single-product__gallery">

                        <!--********************./gallery-thumbs********************-->
                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('200_200/rodillo-v2_1.jpg') ?>"
                                         alt=""/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('200_200/rodillo-v2_2.jpg') ?>"
                                         alt=""/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('200_200/rodillo-v2_3.jpg') ?>"
                                         alt=""/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('200_200/rodillo-v2_4.jpg') ?>"
                                         alt=""/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('200_200/rodillo-v2_5.jpg') ?>"
                                         alt=""/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('200_200/rodillo-v2_6.jpg') ?>"
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        <!--********************./gallery-thumbs********************-->

                        <!--********************./gallery-top********************-->
                        <div class="swiper-container gallery-top">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="single-product__image">
                                        <img data-src="<?php Theme_Manager::get_instance()->get_assets_image('800_800/rodillo-v2_1.jpg') ?>"
                                             alt=""
                                             class="swiper-lazy"
                                        />
                                    </div>
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="single-product__image">
                                        <img data-src="<?php Theme_Manager::get_instance()->get_assets_image('800_800/rodillo-v2_2.jpg') ?>"
                                             alt=""
                                             class="swiper-lazy"
                                        />
                                    </div>
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="single-product__image">
                                        <img data-src="<?php Theme_Manager::get_instance()->get_assets_image('800_800/rodillo-v2_3.jpg') ?>"
                                             alt=""
                                             class="swiper-lazy"
                                        />
                                    </div>
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="single-product__image">
                                        <img data-src="<?php Theme_Manager::get_instance()->get_assets_image('800_800/rodillo-v2_4.jpg') ?>"
                                             alt=""
                                             class="swiper-lazy"
                                        />
                                    </div>
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="single-product__image">
                                        <img data-src="<?php Theme_Manager::get_instance()->get_assets_image('800_800/rodillo-v2_5.jpg') ?>"
                                             alt=""
                                             class="swiper-lazy"
                                        />
                                    </div>
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="single-product__image">
                                        <img data-src="<?php Theme_Manager::get_instance()->get_assets_image('800_800/rodillo-v2_6.jpg') ?>"
                                             alt=""
                                             class="swiper-lazy"
                                        />
                                    </div>
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                                </div>
                            </div>
                            <div class="swiper-pagination swiper-pagination-white"></div>
                            <div class="swiper-button-next swiper-button-black"></div>
                            <div class="swiper-button-prev swiper-button-black"></div>
                        </div>
                        <!--********************./gallery-top********************-->

                    </div>
                    <div class="single-product__specs">
                        <h1 class="headline headline--h5"><?php echo $page_title ?></h1>
                        <span class="single-product__sku"><small>código:</small> QA5501</span>
                        <div class="single-product__price">
                            <span>$200.000</span>
                        </div>
                        <p class="single-product__excerpt mb-45">
                            Rodillo para bicicleta de anclaje directo a la puntilla de la llanta trasera con ajuste de
                            fuerza graduable disponible para bicicletas con tamaño de llanta de 26", 27.5", 29" y 700.
                            Capacidad máxima de 150kg
                        </p>

                        <div class="single-product__actions">
                            <a href="#reactProductForm" class="mdc-button mdc-button--raised">Solicítalo acá</a>
                            <span>O llámanos: <a href="tel:+573124667837">+57 312 4667837</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="single-product__details">
            <div class="container" id="reactProductDescription"></div>
        </div>

        <div class="single-product__form">
            <div class="container">
                <div class="mdc-layout-grid">
                    <div class="mdc-layout-grid__inner">
                        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
                            <div id="reactProductForm"></div>
                        </div>
                        <div class="mdc-layout-grid__cell">
                            <img style="max-width: 100%"
                                 src="<?php Theme_Manager::get_instance()->get_assets_image('new-logo-md.png') ?>" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <?php the_content(); ?>

<?php endwhile; ?>


<?php get_footer(); ?>

