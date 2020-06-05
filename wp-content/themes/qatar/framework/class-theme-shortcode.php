<?php

class Theme_Shortcode {

    public function __construct() {
        add_shortcode('portafolio', [$this, 'portfolioShortcode']);
    }

    public function portfolioShortcode($params) {
        ob_start();

        $file = Theme_Manager::get_instance()->get_theme_option('portfolio_pdf');
        $title = Theme_Manager::get_instance()->get_theme_option('portfolio_title');
        $content = Theme_Manager::get_instance()->get_theme_option('portfolio_content');
        $linkText = Theme_Manager::get_instance()->get_theme_option('portfolio_link_text');
        ?>
            <div class="portfolio text-center">
                <h3 class="headline headline--h3"><?php echo $title; ?></h3>
                <p><?php echo $content; ?></p>
                <a
                        href="<?php $file['url']; ?>"
                        target="_blank"
                        class="mdc-button mdc-button--raised"
                        rel="noopener noreferrer"
                >
                    <?php echo $linkText; ?>
                </a>
            </div>
        <?php return ob_get_clean();
    }
}