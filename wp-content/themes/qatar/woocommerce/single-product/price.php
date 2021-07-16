<?php
/**
 * Single Product Price
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/price.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;
$attachment_ids = $product->get_gallery_image_ids();

$images_arr = [];
for($i = 0, $j = count($attachment_ids); $i < $j;$i++ ){
    $image_query = wp_get_attachment_image_src($attachment_ids[$i], 'full');
    $img = new StdClass;
    $img->url = $image_query[0];
    $img->image_id = $attachment_ids[$i];
    array_push($images_arr, $img);
}
?>
<div id="reactProductPrice"
     data-default-product-gallery='<?php echo json_encode($images_arr) ?>'
     data-default-product-price='<?php echo $product->get_price_html(); ?>'></div>
