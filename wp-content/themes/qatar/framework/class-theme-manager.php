<?php

require_once 'reactjs/class-reactjs-templates.php';
require_once 'class-qatar-genetics-api.php';
require_once 'class-redux-core-options.php';
require_once 'class-theme-graphql.php';
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
        new Theme_Graphql();
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

    private function theme_hooks() {
        add_action('after_setup_theme', [$this, 'theme_setup']);

        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_front_scripts']);

        add_action('init', [$this, 'create_brands_hierarchical_taxonomy'], 0);
        add_action('init', [$this, 'create_trailers_post_type'], 10);
        add_action('init', [$this, 'create_locations_post_type'], 10);
        add_action('init', [$this, 'create_contact_post_type'], 10);
        add_action('manage_contacts_posts_custom_column', [$this, 'add_contact_column_content'], 10, 2);
        add_action('rest_api_init', [$this, 'register_rest_field_for_custom_taxonomy_brands']);
        add_action( 'woocommerce_admin_order_data_after_billing_address', [$this, "show_custom_billing_field_in_admin"], 10, 1 );
    }

    /**
     * Add Styles and Scripts used in the WordPress Admin
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
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-block-style');
        wp_dequeue_style('storefront-gutenberg-blocks');

        wp_register_style(
            'theme-style',
            $this->get_theme_url('styles/dist/main.css'),
            null,
            '2021-06-17'
        );
        wp_enqueue_style('theme-style');

        //Woocommerce Global Styles
        wp_register_style(
            'woocommerce-style',
            $this->get_theme_url('assets/css/woocommerce.css'),
            null,
            '2021-06-17'
        );
        wp_enqueue_style('woocommerce-style');

        wp_register_style(
            'new-theme-style',
            $this->get_theme_url('frontend/dist/main.css'),
            null,
            '2024-06-19'
        );
        wp_enqueue_style('new-theme-style');

        wp_register_style(
            'global-style',
            $this->get_theme_url('assets/css/global.css'),
            null,
            '2024-06-19'
        );
        wp_enqueue_style('global-style');

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
            'https://unpkg.com/swiper@7/swiper-bundle.min.css',
            null,
            '7.0.0',
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

        wp_deregister_script('wp-embed');
        wp_deregister_script('wp-emoji-release');

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
            'https://unpkg.com/swiper@7/swiper-bundle.min.js',
            null,
            '7.0.0',
        );
        wp_enqueue_script('swiper-js');
    }

    /**
     * add_action
     * @param $order
     * @return void
     */
    function show_custom_billing_field_in_admin( $order ){
        $custom_field = $order->get_meta( 'documentId' );

        if ( ! empty( $custom_field ) ) {
            echo '<p><strong>' . __( 'NIT/Cédula' ) . ':</strong> ' . esc_html( $custom_field ) . '</p>';
        }
    }

    public function add_contact_column_content($column, $post_id) {
        if ($column === 'email') {
            echo esc_html(get_post_meta($post_id, 'email', true));
        } elseif ($column === 'message') {
            echo esc_html(get_post_meta($post_id, 'message', true));
        } elseif ($column === 'phone') {
            echo esc_html(get_post_meta($post_id, 'phone', true));
        }
    }

    public function create_trailers_post_type() {

        register_post_type('trailers',
            array(
                'labels' => array(
                    'name' => __('Remolques'),
                    'singular_name' => __('Remolque')
                ),
                'has_archive' => true,
                'public' => true,
                'rewrite' => array('slug' => 'trailer'),
                'show_in_rest' => true,
                'menu_icon' => 'dashicons-car',
                'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt'),
                'show_in_graphql' => true,
                'graphql_single_name' => 'trailer',
                'graphql_plural_name' => 'trailers',
                'publicly_queryable' => true,
            )
        );
    }

    public function create_contact_post_type() {

        register_post_type('contacts',
            array(
                'labels' => [
                    'name' => __('Contactos'),
                    'singular_name' => __('Contacto'),
                    'menu_name' => __('Contactos'),
                    'add_new' => __('Añadir nuevo'),
                    'add_new_item' => __('Añadir nuevo contacto'),
                    'edit_item' => __('Editar contacto'),
                    'new_item' => __('Nuevo contacto'),
                    'view_item' => __('Ver contacto'),
                    'search_items' => __('Buscar contactos'),
                    'not_found' => __('No se encontraron contactos'),
                    'not_found_in_trash' => __('No se encontraron contactos en la papelera'),
                ],
                'has_archive' => true,
                'public' => true,
                'rewrite' => ['slug' => 'contact'],
                'show_in_rest' => true,
                'menu_icon' => 'dashicons-feedback',
                'supports' => ['title', 'editor'],
            )
        );
    }


    public function create_locations_post_type() {

        register_post_type('locations',
            array(
                'labels' => array(
                    'name' => __('Sedes'),
                    'singular_name' => __('Sede')
                ),
                'has_archive' => true,
                'public' => true,
                'rewrite' => array('slug' => 'location'),
                'show_in_rest' => true,
                'menu_icon' => 'dashicons-location-alt',
                'show_in_graphql' => true,
                'graphql_single_name' => 'location',
                'graphql_plural_name' => 'locations',
                'publicly_queryable' => true,
            )
        );
    }

    function defer_parsing_of_js($url) {
        if (is_user_logged_in()) return $url; //don't break WP Admin
        if (FALSE === strpos($url, '.js')) return $url;
        if (strpos($url, 'jquery.js')) return $url;
        return str_replace(' src', ' defer src', $url);
    }

    /**
     *
     * create a custom taxonomy name it topics for your posts
     */

    function create_brands_hierarchical_taxonomy() {

        $labels = [
            'name' => _x('Marcas', 'taxonomy general name'),
            'singular_name' => _x('Marca', 'taxonomy singular name'),
            'search_items' => __('Buscar Marcas'),
            'all_items' => __('Todas las marcas'),
            'parent_item' => __('Marca principal'),
            'parent_item_colon' => __('Marca principal:'),
            'edit_item' => __('Editar Marca'),
            'update_item' => __('Actualizar Marca'),
            'add_new_item' => __('Agregar Nueva Marca'),
            'new_item_name' => __('Nuevo Nombre de la marca'),
            'menu_name' => __('Marcas'),
        ];

        $capabilities = [
            'manage_terms' => 'manage_woocommerce',
            'edit_terms' => 'manage_woocommerce',
            'delete_terms' => 'manage_woocommerce',
            'assign_terms' => 'manage_woocommerce',
        ];


        $args = [
            'labels' => $labels,
            'show_in_rest' => true,
            'hierarchical' => true,
            'public' => true,
            'show_ui' => true,
            'show_admin_column' => false,
            'show_in_nav_menus' => true,
            'show_tagcloud' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'brand',
            'graphql_plural_name' => 'brands',
            'capabilities' => $capabilities,
        ];

        register_taxonomy('brands', ['product'], $args);
        register_taxonomy_for_object_type('brands', 'product');

    }

    /**
     *
     *  Register taxonomy API for WC
     */
    function register_rest_field_for_custom_taxonomy_brands() {

        register_rest_field('product', "brands", array(
            'get_callback' => [$this, 'product_get_callback'],
            'update_callback' => [$this, 'product_update_callback'],
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

        foreach (wp_get_post_terms($post['id'], 'brands') as $term) {
            $terms[] = [
                'id' => $term->term_id,
                'name' => $term->name,
                'slug' => $term->slug,
                'image_src' => get_taxonomy_image($term->term_id)
            ];
        }

        return $terms;
    }

    public function get_taxonomy_image_by_post_id($post_id) {
        $terms = wp_get_post_terms($post_id, 'brands');

        if (empty($terms)) {
            // No terms found for the post
            return ''; // or handle as appropriate for your case
        }

        $term = $terms[0];

        // Check if the term has an image set
        $image_url = get_taxonomy_image($term->term_id);

        if (empty($image_url) || is_wp_error($image_url)) {
            // If no image found or error occurred, handle it gracefully
            return ''; // or provide a default image URL or message
        }

        return $image_url;
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
        wp_set_object_terms($postId, $values, 'brands');
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
     * @param $image_name
     */
    public function get_assets_image($image_name) {
        echo "{$this->get_theme_url('styles/assets/images')}/{$image_name}";
    }


    /**
     * @return string
     */
    function set_content_type() {
        return "text/html";
    }

    /**
     * add_filter
     * @param $columns
     * @return mixed
     */
    function add_contact_columns($columns) {
        $columns['phone'] = 'Teléfono';
        $columns['email'] = 'Correo electrónico';
        $columns['message'] = 'Mensaje';
        return $columns;
    }

    /**
     * add_filter
     * @param $required
     * @param $context
     * @return false|mixed
     */
    function remove_graphql_require_authentication( $required, $context  )
    {
        if (isset($context['graphql_operation_name']) && 'createOrder' === $context['graphql_operation_name']) {
            return false;
        }
        return $required;
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
         * Allow use html into mails
         */
        add_filter('wp_mail_content_type', [$this, 'set_content_type']);

        add_filter('woocommerce_enqueue_styles', '__return_empty_array');

        add_filter('script_loader_tag', [$this, 'defer_parsing_of_js'], 10);;

        add_filter('manage_contacts_posts_columns', [$this, 'add_contact_columns'], 10);

        add_filter( 'woocommerce_graphql_requires_authentication', [$this, 'remove_graphql_require_authentication'], 10, 2 );
    }
}
