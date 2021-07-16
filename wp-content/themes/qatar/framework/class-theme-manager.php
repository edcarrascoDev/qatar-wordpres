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

    public function get_address_url($address) {
        return "https://www.google.com/maps/place/" . preg_replace('/\s+/', '+', $address);
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

        add_action( 'init',  [$this, 'create_brands_hierarchical_taxonomy'], 0 );
        add_action( 'rest_api_init', [$this, 'register_rest_field_for_custom_taxonomy_brands'] );
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
        wp_dequeue_style( 'wp-block-library' );
        wp_dequeue_style( 'wp-block-library-theme' );
        wp_dequeue_style( 'wc-block-style' );
        wp_dequeue_style( 'storefront-gutenberg-blocks' );

        wp_register_style(
            'theme-style',
            $this->get_theme_url('styles/dist/main.css'),
            null,
            '2021-06-17'
        );
        wp_enqueue_style('theme-style');

        wp_register_style(
            'google-font-ubuntu',
            'https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap',
            null,
            '1.0.0',
        );
        wp_enqueue_style('google-font-ubuntu');

        wp_register_style(
            'google-font-montserrat',
            'https://fonts.googleapis.com/css?family=Montserrat:300,500,700&display=swap',
            null,
            '1.0.0',
        );
        wp_enqueue_style('google-font-montserrat');

        wp_register_style(
            'swiper-css',
            'https://unpkg.com/swiper/swiper-bundle.min.css',
            null,
            '1.0.0',
        );
        wp_enqueue_style('swiper-css');
    }

    /**
     * Add scripts and styles used by the theme
     */
    private function enqueue_scripts() {
        /**
         * De-register custom jquery in favor of our own library which has the more updated version
         */
        wp_deregister_script('jquery');

        wp_deregister_script( 'wp-embed' );
        wp_deregister_script( 'wp-emoji-release' );

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

        /**
         * Register swiper Slider
         */
        wp_register_script(
            'swiper-js',
            'https://unpkg.com/swiper/swiper-bundle.min.js',
            null,
            '6.0.4',
        );
        wp_enqueue_script('swiper-js');
    }

    /**
     * Remove Jquery Library
     */
    function remove_jquery() {
        if (!is_admin() && isset($scripts->registered['jquery'])) {
            $scripts->remove('jquery');
            $scripts->add('jquery', false, array('jquery-core'), '1.2.1');
        }
    }

    /**
     *
     * create a custom taxonomy name it topics for your posts
     */

    function create_brands_hierarchical_taxonomy() {

        $labels = [
            'name' => _x( 'Brands', 'taxonomy general name' ),
            'singular_name' => _x( 'Marca', 'taxonomy singular name' ),
            'search_items' =>  __( 'Buscar Marcas' ),
            'all_items' => __( 'Todas las marcas' ),
            'parent_item' => __( 'Marca principal' ),
            'parent_item_colon' => __( 'Marca principal:' ),
            'edit_item' => __( 'Editar Marca' ),
            'update_item' => __( 'Actualizar Marca' ),
            'add_new_item' => __( 'Agregar Nueva Marca' ),
            'new_item_name' => __( 'Nuevo Nombre de la marca' ),
            'menu_name' => __( 'Marcas' ),
        ];

        $capabilities = [
            'manage_terms'               => 'manage_woocommerce',
            'edit_terms'                 => 'manage_woocommerce',
            'delete_terms'               => 'manage_woocommerce',
            'assign_terms'               => 'manage_woocommerce',
        ];


        $args = [
            'labels'                     => $labels,
            'show_in_rest'               => true,
            'hierarchical'               => true,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => false,
            'show_in_nav_menus'          => true,
            'show_tagcloud'              => true,
            'capabilities'               => $capabilities,
        ];

        register_taxonomy( 'brands', ['product'], $args );
        register_taxonomy_for_object_type( 'brands', 'product' );

    }

    /**
     *
     *  Register taxonomy API for WC
     */
    function register_rest_field_for_custom_taxonomy_brands() {

        register_rest_field('product', "brands", array(
            'get_callback'    => [$this, 'product_get_callback'],
            'update_callback'    => [$this, 'product_update_callback'],
            'schema' => null,
        ));

    }


    /**
     * @param $post
     * @param $attr
     * @param $request
     * @param $object_type
     * @return array
     * Get Taxonomy record in wc REST API
     */

    function product_get_callback($post, $attr, $request, $object_type) {
        $terms = [];

        foreach (wp_get_post_terms( $post[ 'id' ],'brands') as $term) {
            $terms[] = [
                'id'        => $term->term_id,
                'name'      => $term->name,
                'slug'      => $term->slug,
                'image_src'  => get_taxonomy_image($term->term_id)
            ];
        }

        return $terms;
    }

    public function get_taxonomy_image_by_post_id($post_id) {
        $term = wp_get_post_terms( $post_id,'brands')[0];

        return get_taxonomy_image($term->term_id);
    }

    /**
     * @param $values
     * @param $post
     * @param $attr
     * @param $request
     * @param $object_type
     * Update Taxonomy record in wc REST API
     */
    function product_update_callback($values, $post, $attr, $request, $object_type) {
        $postId = $post->get_id();
        wp_set_object_terms( $postId, $values , 'brands');
    }

    public function get_social_network_url($social_network) {
        return $this->get_theme_option($social_network);
    }

    /**
     * Returns the footer options in array
     * @return array
     */

    public function get_footer_locations()
    {
        $locations_raw = $this->get_theme_option('footer_location');
        $locations = [];

        foreach ($locations_raw as $location) {
            $exploded_value = explode('|', $location);
            $locations[] = [
                'name' => $exploded_value[0],
                'address' => isset($exploded_value[1]) ? $exploded_value[1] : '',
                'email' => isset($exploded_value[2]) ? $exploded_value[2] : '',
                'open_hours' => isset($exploded_value[3]) ? $exploded_value[3] : '',
                'phone_1' => isset($exploded_value[4]) ? $exploded_value[4] : '',
                'phone_2' => isset($exploded_value[5]) ? $exploded_value[5] : '',
                'facebook' => isset($exploded_value[6]) ? $exploded_value[6] : '',
                'instagram' => isset($exploded_value[7]) ? $exploded_value[7] : '',
            ];
        }

        return $locations;
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
