<?php

class ReactJs_Templates
{
    protected $reactjs_url;
    protected $theme_url;
    protected $theme_locale;

    public function __construct()
    {
        $this->wp_hooks();
        $this->reactjs_url = THEME_URL . '/framework/reactjs';
        $this->theme_url = THEME_URL;
    }

    public function wp_hooks()
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

    public function enqueue_scripts() {

        $consumer_key = Theme_Manager::get_instance()->get_theme_option('consumer_key');
        $consumer_secret = Theme_Manager::get_instance()->get_theme_option('consumer_secret');

        /**
         * ReactJs Scripts
         */
        wp_register_script(
            'qatar-reactjs',
            $this->get_reactjs_url('dist/public.min.js'),
            null,
            '2022-01-27',
            true
        );
        wp_enqueue_script('qatar-reactjs');

        $script_vars = [
            'cart_page' => wc_get_cart_url(),
            'cocart_rest_url' => get_rest_url(null, 'cocart/v1'),
            'consumer_base_code' => base64_encode($consumer_key . ':' . $consumer_secret),
            'not_available_image' => Theme_Manager::get_instance()->get_theme_option('not_available_image'),
            'products_per_page' => 9,
            'qatar_api_url' => Theme_Manager::get_instance()->get_theme_option('qatar_api_url'),
            'receipts' => Theme_Manager::get_instance()->get_theme_option('contact_form_receipts'),
            'rest_url' => get_rest_url(null, 'qatar/v1'),
            'site_url' => get_site_url(),
            'thank_you_page_url' => "",
            'theme_url' => $this->theme_url,
            'wc_rest_url' => get_rest_url(null, 'wc/v3'),
        ];

        wp_localize_script('qatar-reactjs', 'wp_qatar_reactjs', $script_vars);
    }



    /**
     * Get Assets URL relative to the theme folder.
     *
     * @param $url
     *
     * @return string
     */
    private function get_reactjs_url($url)
    {
        return "$this->reactjs_url/$url";
    }

}
