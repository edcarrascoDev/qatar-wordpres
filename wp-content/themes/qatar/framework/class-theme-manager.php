<?php

require_once 'reactjs/class-reactjs-templates.php';
require_once 'class-qatar-genetics-api.php';
require_once 'class-redux-core-options.php';
require_once 'class-theme-rest-api.php';
require_once 'class-theme-shortcode.php';

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

    /**
     * Register Required Theme Hooks
     */
    private function theme_hooks() {
        add_action('after_setup_theme', [$this, 'theme_setup']);

        add_action('init', [$this, 'register_query_vars'], 10);
        add_action('init', [$this, 'rewrite_rules'], 10);

        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_front_scripts']);

        add_filter('nav_menu_submenu_css_class', [$this, 'sub_menu_custom_item_class'], 10, 3);
        add_filter('nav_menu_css_class', [$this, 'menu_item_class'], 10, 4);
    }

    /**
     * Register needed query vars for out custom templates
     */
    public function register_query_vars() {
        /**
         * Pet details Vars
         */
        add_rewrite_tag('%single_puppy%', '([^&]+)');
        add_rewrite_tag('%pet_id%', '([^&]+)');
        add_rewrite_tag('%pet_location%', '([^&]+)');

        /**
         * Available Puppies Vars
         */
        add_rewrite_tag('%pet_filter%', '([^&]+)');
        add_rewrite_tag('%pet_filter_type%', '([^&]+)');
        add_rewrite_tag('%pet_filter_value%', '([^&]+)');
        add_rewrite_tag('%pet_location%', '([^&]+)');
        add_rewrite_tag('%pet_type%', '([^&]+)');
        add_rewrite_tag('%pet_breed%', '([^&]+)');
        add_rewrite_tag('%pet_gender%', '([^&]+)');

        /**
         * Breed Details
         */
        add_rewrite_tag('%single_breed%', '([^&]+)');
        add_rewrite_tag('%breed_id%', '([^&]+)');
    }

    /**
     * Add rewrite rules for out templates
     */
    public function rewrite_rules() {
        /**
         * Pet details rewrite rules
         */
        add_rewrite_rule(
            'pet/detail/([^/]*)/([0-9]+)/?',
            'index.php?single_pet=true&pet_location=$matches[1]&pet_id=$matches[2]',
            'top'
        );

        /**
         * The next one is add the breed to the URL
         */
        add_rewrite_rule(
            'pet/detail/([^/]*)/([^/]*)/([0-9]+)/?',
            'index.php?single_pet=true&pet_location=$matches[2]&pet_id=$matches[3]',
            'top'
        );

        /**
         * Rewrite rule for breed details
         */
        add_rewrite_rule(
            'breeds/([^/]*)/?',
            'index.php?single_breed=true&breed_id=$matches[1]',
            'top'
        );

        $this->available_puppies_rewrite_rules();
    }

    public function available_puppies_rewrite_rules() {
        /**
         * Location Filter
         */
        add_rewrite_rule(
            'available-puppies/location/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=location&pet_location=$matches[1]',
            'top'
        );

        /**
         * Breed Filter
         */
        add_rewrite_rule(
            'available-puppies/breed/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=breed&pet_breed=$matches[1]',
            'top'
        );

        /**
         * Gender Filter
         */
        add_rewrite_rule(
            'available-puppies/gender/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=gender&pet_gender=$matches[1]',
            'top'
        );

        /**
         * Gender Filter
         */
        add_rewrite_rule(
            'available-puppies/pet-type/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=type&pet_type=$matches[1]',
            'top'
        );

        /**
         * Multiple Filter
         */
        add_rewrite_rule(
            'available-puppies/([^/]*)/([^/]*)/([^/]*)/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=multiple&pet_location=$matches[1]&pet_type=$matches[2]&pet_breed=$matches[3]&pet_gender=$matches[4]',
            'top'
        );

        /**
         * Multiple Filter
         */
        add_rewrite_rule(
            'available-puppies/([^/]*)/([^/]*)/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=multiple&pet_location=$matches[1]&pet_type=$matches[2]&pet_breed=$matches[3]',
            'top'
        );

        /**
         * Multiple Filter
         */
        add_rewrite_rule(
            'available-puppies/([^/]*)/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=multiple&pet_location=$matches[1]&pet_type=$matches[2]',
            'top'
        );

        /**
         * Multiple Filter
         */
        add_rewrite_rule(
            'available-puppies/([^/]*)/?',
            'index.php?pet_filter=true&pet_filter_type=multiple&pet_location=$matches[1]',
            'top'
        );
    }

    /**
     * @return bool
     */
    public function is_product_page()
    {
        return !!get_query_var('single_product');
    }


    /**
     * @param $classes
     * @param $args
     * @param $depth
     *
     * @return array
     */
    public function sub_menu_custom_item_class($classes, $args, $depth) {
        $classes[] = 'mainNav__sub';
        return $classes;
    }

    /**
     * @param $classes
     * @param $item
     * @param $args
     * @param $depth
     *
     * @return array
     */
    public function menu_item_class($classes, $item, $args, $depth) {
        if ($depth === 0) {
            $classes[] = 'mainNav__item';
        }
        return $classes;
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
            '2020-04-07'
        );
        wp_enqueue_style('theme-style');

        wp_register_style(
            'font-awesome',
            'https://kit-free.fontawesome.com/releases/latest/css/free.min.css',
            null,
            '2020-04-07'
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
            '2020-04-07',
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

    public function get_finance_content() {
        $finance_page = $this->get_theme_option('financing_page');
        $page = get_post((int)$finance_page);
        remove_filter('the_content', 'wpautop');
        $content = apply_filters('the_content', $page->post_content);
        add_filter('the_content', 'wpautop');
        return $content;
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

        if ( basename( $template ) === 'single-product.php' || basename( $template ) === 'no-hero-template.php' ) {
            $classes[] = 'page--without-hero';
        }
        return $classes;
    }

    /**
     * @return string
     */
    function set_content_type(){
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
        add_filter( 'body_class', [$this, 'custom_class_by_template']);

        /**
         * Allow use html into mails
         */
        add_filter( 'wp_mail_content_type',[$this, 'set_content_type']);
    }
}
