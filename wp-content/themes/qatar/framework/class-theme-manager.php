<?php

require_once 'reactjs/class-reactjs-templates.php';
require_once 'class-qatar-genetics-api.php';
require_once 'class-redux-core-options.php';
require_once 'class-theme-rest-api.php';
require_once 'class-theme-shortcode.php';
require_once 'class-theme-woocommerce.php';

class Theme_Manager {
    private static $class_instance;
    protected $theme_locale;
    protected $theme_url;
    protected $theme_path;

    public function __construct() {
        $this->theme_path = THEME_ROUTE;
        $this->theme_locale = THEME_LOCALE;
        $this->theme_url = THEME_URL;

        $this->theme_hooks();
        $this->initialize_helper_classes();
    }

    /**
     * Singleton Instance
     *
     * @return Theme_Manager
     */
    public static function get_instance() {
        if (self::$class_instance === null) {
            self::$class_instance = new self();
        }

        return self::$class_instance;
    }

    private function initialize_helper_classes() {
        new ReactJs_Templates();
        new Redux_Core_Options($this->theme_locale);
        new Theme_Rest_Api();
        new Theme_Shortcode();
        new Theme_Woocommerce();
    }

    /**
     * @param $option
     *
     * @return mixed
     */
    public function get_theme_option($option) {
        global ${"{$this->theme_locale}_settings"};
        $settings = ${"{$this->theme_locale}_settings"};

        if (isset($settings[$option])) {
            return $settings[$option];
        }

        return false;
    }

    public function get_theme_page_link($page) {
        $page_id = $this->get_theme_option($page);
        if ($page_id) {
            return get_the_permalink($page_id);
        }

        return null;
    }

    public function format_phone($phone) {
        $phone = str_replace(" ", "", $phone);
        return "(" . substr($phone, 0, 3) . ")" . " " . substr($phone, 3, 3) . " " . substr($phone, 6);
    }
    function add_woo_sidebar() {

        if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
            if( is_woocommerce() ) {
                remove_action( 'genesis_sidebar', 'genesis_do_sidebar' );
                remove_action( 'genesis_sidebar_alt', 'genesis_do_sidebar_alt' );
                add_action( 'genesis_sidebar', 'wpstudio_woo_sidebar' );
            }
        }

    }


    function register_sidebar() {
        register_sidebar(
            array(
                'id'            => 'woocommerce_sidebar',
                'name'          => __( 'Sidebar primario', THEME_LOCALE ),
                'description'   => __( 'Este sidebar será usado para woocommerce.' ),
                'before_widget' => '<aside id="%1$s" class="widget %2$s">',
                'after_widget'  => '</aside>',
                'before_title'  => '<h3 class="headline headline--h5">',
                'after_title'   => '</h3>',
            )
        );
    }


    function register_shop_sidebar() {
        register_sidebar(
            array(
                'id'            => 'shop',
                'name'          => __( 'Sidebar woocommerce', THEME_LOCALE ),
                'description'   => __( 'Este sidebar será usado para woocommerce.' ),
                'before_widget' => '<aside id="%1$s" class="widget %2$s">',
                'after_widget'  => '</aside>',
                'before_title'  => '<h3 class="headline headline--h5">',
                'after_title'   => '</h3>',
            )
        );
    }

    /**
     * Register Required Theme Hooks
     */
    private function theme_hooks() {
        add_action('after_setup_theme', [$this, 'theme_setup']);

        add_action( 'widgets_init', [$this, 'register_sidebar'] );
        add_action( 'widgets_init', [$this, 'register_shop_sidebar'] );

        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_front_scripts']);
        add_action('wp_default_scripts', [$this, 'remove_jquery']);
    }

    /**
     * Add Styles and Scripts used in the Wordpress Admin
     */
    public function enqueue_admin_scripts() {
        wp_register_style('theme-admin-style', $this->get_theme_url('assets/css/admin-styles.css'));
        wp_enqueue_style('theme-admin-style');

        wp_register_script(
            'theme-admin-script',
            $this->get_theme_url('assets/js/admin-script.js'),
            null,
            '2020-04-07',
            true
        );
        wp_enqueue_script('theme-admin-script');

        $theme_admin_vars = [
            'get_vars' => $_GET,
            'post_vars' => $_POST,
            'screen' => get_current_screen()
        ];

        wp_localize_script('theme-admin-script', 'qatar_admin_vars', $theme_admin_vars);
    }

    /**
     * Add styles and scripts used by the theme
     */
    public function enqueue_front_scripts() {
        $this->enqueue_styles();
        $this->enqueue_scripts();
    }

    /**
     * Add styles used by the theme
     */
    private function enqueue_styles() {
        wp_enqueue_style('main-theme-style', get_stylesheet_uri());

        wp_register_style(
            'theme-style',
            $this->get_theme_url('styles/dist/main.css'),
            null,
            '2020-05-09'
        );
        wp_enqueue_style('theme-style');

        wp_register_style(
            'font-awesome',
            'https://kit-free.fontawesome.com/releases/latest/css/free.min.css',
            null,
            '2020-50-09'
        );
        wp_enqueue_style('font-awesome');
    }

    /**
     * Add scripts and styles used by the theme
     */
    private function enqueue_scripts() {
        /**
         * De-register custom jquery in favor of our own library which has the more updated version
         */
        wp_deregister_script('jquery');

        /**
         * Scroll Reveal
         */
        wp_register_script(
            'swiper-js',
            $this->get_theme_url('assets/js/vendor/swiper.min.js'),
            ['jquery'],
            null,
            true
        );
        wp_enqueue_script('swiper-js');

        /**
         * Main Theme Script
         */
        wp_register_script(
            'main-script-js',
            $this->get_theme_url('styles/dist/main.js'),
            null,
            '2020-05-07',
            true
        );
        wp_enqueue_script('main-script-js');

        /**
         * Main Theme Script
         */
        wp_register_script(
            'theme-script-js',
            $this->get_theme_url('assets/js/theme-script.js'),
            ['jquery'],
            '2020-04-07',
            true
        );
        wp_enqueue_script('theme-script-js');
    }

    function remove_jquery() {
        if (!is_admin() && isset($scripts->registered['jquery'])) {
            $scripts->remove('jquery');
            $scripts->add('jquery', false, array('jquery-core'), '1.2.1');
        }
    }

    public function get_social_network_url($social_network) {
        return $this->get_theme_option($social_network);
    }

    /**
     * Get Assets URL relative to the theme folder.
     *
     * @param $url
     *
     * @return string
     */
    private function get_theme_url($url) {
        return "$this->theme_url/$url";
    }

    /**
     * Get Assets URL relative to the theme folder.
     *
     * @param $url
     *
     * @return string
     */
    private function get_theme_path($file) {
        return "{$this->theme_path}/{$file}.php";
    }

    /**
     * @param $image_name
     */
    public function get_assets_image($image_name) {
        echo "{$this->get_theme_url('styles/assets/images')}/{$image_name}";
    }

    /**
     * @param $file_name
     */
    public function get_shared_asset($file_name) {
        echo "{$this->get_theme_url('styles/assets/images/shared')}/$file_name";
    }

    /**
     * @param $classes
     * @return array
     */
    public function custom_class_by_template($classes) {
        global $template;

        if (basename($template) === 'single-product.php' || basename($template) === 'no-hero-template.php') {
            $classes[] = 'page--without-hero';
        }
        return $classes;
    }

    /**
     * @return string
     */
    function set_content_type() {
        return "text/html";
    }

    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    public function theme_setup() {
        /**
         * Make theme available for translation.
         */
        load_theme_textdomain($this->theme_locale);

        /**
         * Add default posts and comments RSS feed links to head.
         */
        add_theme_support('automatic-feed-links');

        /**
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /**
         * Enable support for Post Thumbnails on posts and pages.
         */
        add_theme_support('post-thumbnails');

        /**
         * Enable theme support for woocommerce
         */
        add_theme_support('woocommerce');


        add_image_size('blog-thumbnail', 510, 261, true);
        add_image_size('blog-featured-image', 1050, 250, false);

        /**
         * Register Navigation Menus
         */
        register_nav_menus([
            'main_menu' => __('Main Menu', $this->theme_locale),
            'footer_menu' => __('Footer Menu', $this->theme_locale)
        ]);

        /**
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', ['comment-form', 'comment-list', 'gallery', 'caption']);

        /**
         * Add theme support for Custom Logo.
         *
         * @todo Put real values here.
         */
        add_theme_support('custom-logo', [
            'width' => 250,
            'height' => 250,
            'flex-width' => 250
        ]);

        /**
         * Add theme support for selective refresh for widgets.
         */
        add_theme_support('customize-selective-refresh-widgets');

        add_theme_support('align-wide');

        /**
         * Add specific class to template without hero
         */
        add_filter('body_class', [$this, 'custom_class_by_template']);

        /**
         * Allow use html into mails
         */
        add_filter('wp_mail_content_type', [$this, 'set_content_type']);

        add_filter('woocommerce_enqueue_styles', '__return_empty_array');
    }
}
