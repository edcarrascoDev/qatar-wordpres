<?php
/**
 * Single product short description
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/short-description.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.3.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

global $post;

$short_description = apply_filters('woocommerce_short_description', $post->post_excerpt);

if (!$short_description) {
    return;
}

?>
<div class="single-product__excerpt">
    <?php echo $short_description; // WPCS: XSS ok. ?>
</div>

<?php
$image_url = Theme_Manager::get_instance()->get_taxonomy_image_by_post_id($post->ID);

if (!empty($image_url)) :?>
  <div class="single-product__brand mb-45">
    <img src="<?php echo esc_url($image_url); ?>" alt="">
  </div>
<?php endif; ?>



