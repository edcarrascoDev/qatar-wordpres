<?php
/**
 * Plugin Name: Qatar Gutenberg Blocks
 * Description: Custom Gutenberg Blocks for Qatar Theme.
 * Author: Edgar Carrasco
 * Author URI: <mailto: edgar.carrascob06@gmail.com>
 * Version: 1.0.0
 *
 * @package Qatar
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/class-qatar-blocks.php';

Qatar_Blocks::get_instance();