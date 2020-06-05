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

    public function enqueue_scripts()
    {
        /**
         * ReactJs Scripts
         */
        wp_register_script(
            'qatar-reactjs',
            $this->get_reactjs_url('js/public.min.js'),
            null,
            '2020-04-08',
            true
        );
        wp_enqueue_script('qatar-reactjs');

        $script_vars = [
            'theme_url' => $this->theme_url,
            'thank_you_page_url' => Theme_Manager::get_instance()->get_theme_page_link(
                'thank_you_page'
            ),
            'thank_you_employment_page' => Theme_Manager::get_instance()->get_theme_page_link(
                'thank_you_employment_page'
            ),
            'product_details_url' => home_url('producto/:productId'),
            'categories_details_url' => home_url('breeds/:breedId'),
            'not_available_image' => Theme_Manager::get_instance()->get_theme_option('not_available_image'),
            'is_product_page' => Theme_Manager::get_instance()->is_product_page(),
            'rest_url' => get_rest_url(null, 'qatar/v1'),
            'qatar_api_url' => Theme_Manager::get_instance()->get_theme_option('qatar_api_url'),
            'receipts' => Theme_Manager::get_instance()->get_theme_option('contact_form_receipts'),
            'i18n' => [
                'location' => __('Location', THEME_LOCALE),
                'all_locations' => __('All Locations', THEME_LOCALE),
                'pet_type' => __('Pet Type', THEME_LOCALE),
                'all_pet_types' => __('All Pet Types', THEME_LOCALE),
                'breed' => __('Breed', THEME_LOCALE),
                'all_breeds' => __('All Breeds', THEME_LOCALE),
                'gender' => __('Gender', THEME_LOCALE),
                'all_genders' => __('All Genders', THEME_LOCALE)
            ]
        ];

        if (Theme_Manager::get_instance()->is_product_page()) {
            $script_vars['pet_details'] = [
                'pet_id' => get_query_var('product_id')
            ];
        }

        $filter_type = get_query_var('pet_filter_type');
        $script_vars['available_puppies'] = [
            'filter_type' => $filter_type,
            'location' => $this->get_custom_query_var('pet_location'),
            'breed' => $this->get_custom_query_var('pet_breed'),
            'gender' => $this->get_custom_query_var('pet_gender'),
            'type' => $this->get_custom_query_var('pet_type')
        ];

        wp_localize_script('qatar-reactjs', 'wp_qatar_reactjs', $script_vars);
    }

    private function get_custom_query_var($query_var)
    {
        return null !== get_query_var($query_var) && !empty(get_query_var($query_var))
            ? get_query_var($query_var)
            : 'all';
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
