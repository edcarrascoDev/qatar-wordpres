<?php
/**
 * Plugin Name: Gutenberg Blocks for Industrias Qatar
 * Description: Plugin to customize Qatar Inc website blocks
 * Author:  Edgar Carrasco
 * Author URI: <mailto: edgarcarrascob06@gmail.com>
 * Version: 1.0.0
 *
 * @package qatar
 */

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'src/class-qatar-inc-blocks.php';

Qatar_inc_blocks::get_instance();