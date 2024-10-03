<?php

class Theme_Rest_Api {

	public function __construct() {
		add_action('rest_api_init', [$this, 'get_endpoints']);
		add_action('rest_api_init', [$this, 'post_endpoints']);
		add_action('rest_api_init', [$this, 'put_endpoints']);

//        add_action('wp_insert_post', [$this, 'send_contact_notification_email'], 10, 3);

        /**
         * Mail filter to change the default sender
         */
        add_filter('wp_mail_from', [$this, 'mail_from']);
        add_filter('wp_mail_from_name', [$this, "mail_from_name"]);
	}

    public function mail_from() {
        return get_bloginfo('admin_email');
	}

    public function mail_from_name() {
        return get_bloginfo('name');
	}

	public function get_endpoints() {

		register_rest_route('qatar/v1', '/qatar-categories', [
			'methods' => 'GET',
			'permission_callback' => true,
			'callback' => [$this, 'get_qatar_categories']
		]);
	}

	public function post_endpoints() {
		register_rest_route('qatar/v1', '/request-contact-information', [
			'methods' => 'POST',
            'permission_callback' => true,
			'callback' => [$this, 'request_contact_information']
		]);

		register_rest_route('qatar/v1', '/request-product-information', [
			'methods' => 'POST',
            'permission_callback' => true,
			'callback' => [$this, 'request_product_information']
		]);

		register_rest_route('qatar/v1', '/request-review-comment', [
			'methods' => 'POST',
            'permission_callback' => true,
			'callback' => [$this, 'request_review_comment']
		]);
	}

	public function put_endpoints() {}

//    public function send_contact_notification_email($post_id, $post, $update) {
//        if ($post->post_type === 'contacts' && !$update) {
//            $headers = [
//                'Content-Type: text/plain; charset=UTF-8',
//                'From: Industrias Qatar <noreply@industriasqatar.com>',
//            ];
//
//
//            $data = [
//                'Nombre' => get_the_title($post_id),
//                'Correo electrónico' => get_post_meta($post_id, 'email', true),
//                'Teléfono' => get_post_meta($post_id, 'phone', true),
//                'Mensaje' => $post->post_content,
//            ];
//            $to = Theme_Manager::get_instance()->get_theme_option('contact_form_receipts');
//            $subject = Theme_Manager::get_instance()->get_theme_option('contact_form_subject');
//
//            $message = '<h1>'.$subject.'</h1><p><b>De: </b>' . get_the_title($post_id) . '</p>';
//
//            foreach($data as $key => $field) {
//                $message.= "<strong>{$key}:</strong> $field<br>";
//            }
//
//            if (wp_mail($to, $subject, $message, null, null)) {
//                wp_send_json_success();
//            } else {
//                wp_send_json_error();
//            }
//        }
//    }

	public function get_qatar_categories() {
		$cached_info = get_transient('qatar_categories');
		if (false === $cached_info) {
			$cached_info = Qatar_Api::get_instance()->get_categories_list();

			set_transient('qatar_categories', $cached_info, 5 * MINUTE_IN_SECONDS);
		}

		return $cached_info;
	}

    /**
     * @param WP_REST_Request $request
     */
	public function request_contact_information(WP_REST_Request $request) {
        $params = $request->get_json_params();

		$data = [
            'Nombre(s)' => $params['firstName'],
            'Apellido(s)' => $params['lastName'],
            'Correo electrónico' => $params['email'],
            'Teléfono' => $params['phone'],
            'Mensaje' => $params['message'],
		];
        $to = Theme_Manager::get_instance()->get_theme_option('contact_form_receipts');
        $subject = Theme_Manager::get_instance()->get_theme_option('contact_form_subject');

        $message = '<h1>'.$subject.'</h1><p><b>De: </b>' . $params['firstName'] . ' ' . $params['lastName'] . '</p>';

        foreach($data as $key => $field) {
            $message.= "<strong>{$key}:</strong> $field<br>";
        }

        if (wp_mail($to, $subject, $message, null, null)) {
            wp_send_json_success();
        } else {
            wp_send_json_error();
        }
	}


    /**
     * @param WP_REST_Request $request
     */
	public function request_product_information(WP_REST_Request $request) {
        $params = $request->get_json_params();

		$data = [
			'Nombre(s)' => $params['firstName'],
			'Apellido(s)' => $params['lastName'],
			'Ciudad' => $params['city'],
			'Correo electrónico' => $params['email'],
			'Teléfono' => $params['phone'],
			'Talla' => $params['variant'],
			'Mensaje' => $params['message'],
		];
        $to = Theme_Manager::get_instance()->get_theme_option('product_form_receipts');
        $subject = Theme_Manager::get_instance()->get_theme_option('product_form_subject');

        $message = '<h1>'.$subject.'</h1><p><b>De: </b>' . $params['firstName'] . ' ' . $params['lastName'] . '</p>';

        foreach($data as $key => $field) {
            $message.= "<strong>{$key}:</strong> $field<br>";
        }

        if (wp_mail($to, $subject, $message, null, null)) {
            wp_send_json_success();
        } else {
            wp_send_json_error();
        }
	}

    /**
     * @param $comment_id
     */
	public function request_review_comment($comment_id) {
        $rating = intval( $_POST['rating'] );
        if (add_comment_meta( $comment_id, 'rating', $rating )) {
            wp_send_json_success();
        } else {
            wp_send_json_error();
        }
    }

}