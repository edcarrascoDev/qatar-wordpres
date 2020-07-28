<?php

require_once 'redux-framework/ReduxCore/framework.php';

class Redux_Core_Options {

    private $redux;
    private $theme_locale;
    private $sections;
    private $args = [];

    public function __construct($theme_locale) {
        $this->theme_locale = $theme_locale;
        add_action('init', [$this, 'init_settings']);
    }

    public function init_settings() {
        $this->set_redux_args();
        $this->set_redux_sections();

        $this->redux = new ReduxFramework($this->sections, $this->args);
    }

    private function set_redux_args() {
        $theme = wp_get_theme();
        $theme_name = $theme->get('Name');
        $theme_version = $theme->get('Version');

        $this->args = [
            'opt_name' => "{$this->theme_locale}-settings",
            'display_name' => $theme_name,
            'display_version' => $theme_version,
            'menu_type' => 'menu',
            'allow_sub_menu' => true,
            'menu_title' => sprintf(__('%s Settings'), $theme_name),
            'page_title' => sprintf(__('%s Settings'), $theme_name),
            'admin_bar' => true,
            'admin_bar_icon' => 'dashicons-portfolio',
            'dev_mode' => WP_DEBUG,
            'customizer' => true
        ];
    }

    private function set_redux_sections() {
        $this->add_social_networks();
        $this->add_theme_settings();
        $this->add_qatar_options();
        $this->add_forms_options();
        $this->add_woocommerce_options();
        $this->add_location_options();
    }

    private function add_social_networks() {
        $this->sections[] = [
            'title' => __('Redes Sociales', $this->theme_locale),
            'desc' => __('', $this->theme_locale),
            'icon' => 'el el-network',
            'fields' => [
                [
                    'id' => 'facebook',
                    'type' => 'text',
                    'title' => __('Facebook', $this->theme_locale),
                    'desc' => __('Incluir https://...', $this->theme_locale)
                ],
                [
                    'id' => 'google_plus',
                    'type' => 'text',
                    'title' => __('Google +', $this->theme_locale),
                    'desc' => __('Incluir https://...', $this->theme_locale)
                ],
                [
                    'id' => 'instagram',
                    'type' => 'text',
                    'title' => __('Instagram', $this->theme_locale),
                    'desc' => __('Incluir https://...', $this->theme_locale)
                ],
                [
                    'id' => 'youtube',
                    'type' => 'text',
                    'title' => __('Youtube', $this->theme_locale),
                    'desc' => __('Incluir https://...', $this->theme_locale)
                ],
                [
                    'id' => 'twitter',
                    'type' => 'text',
                    'title' => __('Twitter', $this->theme_locale),
                    'desc' => __('Incluir https://...', $this->theme_locale)
                ],
            ]
        ];
    }

    private function add_theme_settings() {
        $this->sections[] = [
            'title' => __('Configuración del Tema', $this->theme_locale),
            'desc' => __('Configuración', $this->theme_locale),
            'icon' => 'el el-cog',
            'fields' => [
                [
                    'id' => 'contact_us_page',
                    'type' => 'select',
                    'data' => 'pages',
                    'title' => __('Página de contacto', $this->theme_locale),
                ],
                [
                    'id' => 'products_page',
                    'type' => 'select',
                    'data' => 'pages',
                    'title' => __('Products Page', $this->theme_locale),
                ],
                [
                    'id' => 'privacy_policy_page',
                    'type' => 'select',
                    'data' => 'pages',
                    'title' => __('Página de términos y servicios', $this->theme_locale),
                ],
                [
                    'id' => 'thank_you_page',
                    'type' => 'select',
                    'data' => 'pages',
                    'title' => __('Página de Thank You', $this->theme_locale),
                ],
                [
                    'id' => 'before_closing_header_scripts',
                    'type' => 'textarea',
                    'title' => __('Before Closing Header Scripts', $this->theme_locale),
                ],
                [
                    'id' => 'after_closing_header_scripts',
                    'type' => 'textarea',
                    'title' => __('After Closing Header Scripts', $this->theme_locale),
                ],
                [
                    'id' => 'before_closing_footer_scripts',
                    'type' => 'textarea',
                    'title' => __('Before Closing Footer Scripts', $this->theme_locale),
                ],
                [
                    'id' => 'thank_you_page_script',
                    'type' => 'textarea',
                    'title' => __('Thank You Page Script', $this->theme_locale),
                ],
                [
                    'id' => 'not_available_image',
                    'type' => 'media',
                    'title' => __('Imagen para productos sin foto principal', $this->theme_locale),
                ],
            ]
        ];
    }

    private function add_location_options() {
        $this->sections[] = [
            'title' => __('Ubicación', $this->theme_locale),
            'desc' => __('Footer', $this->theme_locale),
            'icon' => 'el el-map-marker',
            'fields' => [
                [
                    'id' => 'location_city',
                    'type' => 'text',
                    'title' => 'Ciudad'
                ],
                [
                    'id' => 'location_address',
                    'type' => 'text',
                    'title' => 'Dirección'
                ],
                [
                    'id' => 'location_address_link',
                    'type' => 'text',
                    'title' => 'Link de waze o google maps'
                ],
                [
                    'id' => 'location_phone',
                    'type' => 'multi_text',
                    'title' => __('Télefono', $this->theme_locale),
                    'desc' => 'ej: +573212017115'
                ],
                [
                    'id' => 'location_mail',
                    'type' => 'text',
                    'title' => __('Correo electrónico', $this->theme_locale)
                ],
                [
                    'id' => 'contact_desktop_bg',
                    'type' => 'media',
                    'title' => __('Imagen para La página de contacto (desktop)', $this->theme_locale),
                ],
                [
                    'id' => 'contact_mobile_bg',
                    'type' => 'media',
                    'title' => __('Imagen para La página de contacto (mobile)', $this->theme_locale),
                ],
            ]
        ];
    }

    private function add_woocommerce_options() {
        $this->sections[] = [
            'title' => __('Tienda', $this->theme_locale),
            'desc' => __('Configuración de la tienda', $this->theme_locale),
            'icon' => 'el el-shopping-cart',
            'fields' => [
                [
                    'id' => 'store_image',
                    'type' => 'media',
                    'title' => __('Imagen principal de la tienda', $this->theme_locale),
                ],
                [
                    'id' => 'store_mobile_image',
                    'type' => 'media',
                    'title' => __('Imagen principal de la tienda en celulares', $this->theme_locale),
                ],
                [
                    'id' => 'custom_categories',
                    'type' => 'multi_text',
                    'title' => __('Categorías principales', $this->theme_locale),
                ]
            ]
        ];
    }

    private function add_forms_options() {
        $this->sections[] = [
            'title' => __('Formularios', $this->theme_locale),
            'desc' => __('Configuración de receptores y asusntos de formulario', $this->theme_locale),
            'icon' => 'el el-inbox-box',
            'fields' => [
                [
                    'id' => 'product_form_receipts',
                    'type' => 'multi_text',
                    'title' => __('Destinatarios para los formularios de Productos', $this->theme_locale),
                ],
                [
                    'id' => 'product_form_subject',
                    'type' => 'text',
                    'title' => __('Asunto para los formularios de Productos ', $this->theme_locale),
                ],
                [
                    'id' => 'contact_form_receipts',
                    'type' => 'multi_text',
                    'title' => __('Destinatarios para el formulario de contacto', $this->theme_locale),
                ],
                [
                    'id' => 'contact_form_subject',
                    'type' => 'text',
                    'title' => __('Asunto para el formulario de contacto', $this->theme_locale),
                ],
            ],
        ];
    }

    private function add_qatar_options() {
        $this->sections[] = [
            'title' => __('Qatar API', $this->theme_locale),
            'desc' => __('', $this->theme_locale),
            'icon' => 'el el-warning-sign',
            'fields' => [
                [
                    'id' => 'qatar_api_key',
                    'type' => 'text',
                    'title' => 'QATAR API Key',
                ],
                [
                    'id' => 'qatar_api_url',
                    'type' => 'text',
                    'title' => 'QATAR API Url'
                ],
                [
                    'id' => 'consumer_key',
                    'type' => 'text',
                    'title' => 'Clave del cliente',
                ],
                [
                    'id' => 'consumer_secret',
                    'type' => 'text',
                    'title' => 'Clave secreta de cliente'
                ],
            ]
        ];
    }
}
