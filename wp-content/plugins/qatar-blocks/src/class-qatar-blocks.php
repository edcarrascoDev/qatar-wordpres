<?php

class Qatar_Blocks {

	private static $class_instance;

	/**
	 * Singleton Instance
	 *
	 * @return Qatar_Blocks
	 */
	public static function get_instance() {
		if (self::$class_instance === null) {
			self::$class_instance = new self();
		}

		return self::$class_instance;
	}

	public function __construct() {
		$this->register_scripts();
		$this->register_filters();
		$this->theme_hooks();
	}
	public function theme_hooks() {
		add_action('after_setup_theme', [$this, 'theme_setup']);
	}

	public function theme_setup() {
		add_theme_support( 'post-thumbnails' );
		add_image_size('header-mobile', 640, 878, true);
		add_image_size('block-image-small', 640, 590, true);
		add_image_size('block-image-medium', 852, 890, true);
		add_filter('wp_prepare_attachment_for_js', [$this, 'custom_image_sizes'], 10, 3);
	}

	/**
	 * Add Custom Image Sizes for the response on JS
	 * @param $response
	 * @param $attachment
	 * @param $meta
	 *
	 * @return mixed
	 */
	public function custom_image_sizes($response, $attachment, $meta) {
		$size_array = [
			'header-mobile',
			'block-image-medium',
			'block-image-small',
			'perk-image',
			'pet-gallery-image',
			'food-list-image',
			'client-story'
		];

		foreach ( $size_array as $size ):

			if ( isset( $meta['sizes'][ $size ] ) ) {
				$attachment_url = wp_get_attachment_url( $attachment->ID );
				$base_url = str_replace( wp_basename( $attachment_url ), '', $attachment_url );
				$size_meta = $meta['sizes'][ $size ];

				$response['sizes'][ $size ] = array(
					'height'        => $size_meta['height'],
					'width'         => $size_meta['width'],
					'url'           => $base_url . $size_meta['file'],
					'orientation'   => $size_meta['height'] > $size_meta['width'] ? 'portrait' : 'landscape',
				);
			}

		endforeach;

		return $response;
	}

	public function register_scripts() {
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_block_editor_assets']);
	}

	public function enqueue_block_editor_assets() {

		wp_enqueue_script(
			'qatar-block-script',
			plugins_url('build/index.js', dirname(__FILE__)),
			['wp-blocks', 'wp-i18n', 'wp-element', 'wp-components'],
			'2023-06-01',
			true
		);

		$block_vars = [
			'plugin_url' => plugins_url('', dirname(__FILE__)),
			'i18n' => []
		];
		wp_localize_script('qatar-block-script', 'salient_block_vars', $block_vars);

		wp_enqueue_style(
			'qatar-blocks-editor-style',
			plugins_url('build/index.css', dirname(__FILE__)),
			['wp-edit-blocks'],
            '2023-06-01'
		);
	}

	public function register_filters() {
		add_filter('block_categories', [$this, 'block_categories'], 10, 2);
	}

	public function block_categories($categories, $post) {
		return array_merge($categories, [
			[
				'slug' => 'qatar',
				'title' => __('Qatar')
			]
		]);
	}
}