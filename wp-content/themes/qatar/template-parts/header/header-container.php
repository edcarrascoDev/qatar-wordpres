<header class="main-header mdc-top-app-bar" id="topAppBar">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <div class="main-header__logo">
                <a href="<?php echo home_url(); ?>">
                    <img src="<?php Theme_Manager::get_instance()->get_assets_image('new-logo.png') ?>" alt="Industrias qatar Colombia">
                </a>
            </div>
        </section><!-- ./ mdc-top-app-bar__section--align-start -->

        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <a href="<?php echo Theme_Manager::get_instance()->get_theme_page_link('contact_us_page') ?>"
               class="mdc-button mdc-button--outlined">
                <span class="mdc-button__label">Contáctenos</span>
            </a>
            <button id="topAppButton"
                    class="main-header__menu-button">
                <span></span>
            </button><!-- ./ main-header__menu-button -->
        </section><!-- ./ mdc-top-app-bar__section--align-end -->
    </div><!-- ./mdc-top-app-bar__row -->
    <div class="main-header__expanded">
        <div class="main-header__logo-expanded">
<!--            <img src="--><?php //Theme_Manager::get_instance()->get_assets_image('new-logo.png') ?><!--" alt="Industrias qatar Colombia">-->
        </div>
        <nav class="main-header__nav">
            <?php get_template_part('template-parts/header/main-menu'); ?>
            <?php get_template_part('template-parts/common/social-networks'); ?>
        </nav>
    </div>
</header><!-- ./header -->