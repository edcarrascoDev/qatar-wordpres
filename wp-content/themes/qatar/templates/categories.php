<?php
/**
 * Template Name: Categorías
 */
?>

<?php

$main_url = 'https://www.industriasqatar.com';
$current_url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$page_title = get_the_title();

?>

<script type="application/ld+json">
	<?php echo '
        {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Industrias Qatar",
        "item": "' . $main_url . '"
        },{
        "@type": "ListItem",
        "position": 2,
        "name": "' . $page_title . '",
        "item": "' . $current_url . '"
        }]
        }'
    ?>

</script>

<?php get_header(); ?>

<?php while (have_posts()): the_post(); ?>

    <?php the_content(); ?>

<?php endwhile; ?>

<?php
$api_url = 'https://mybusiness.googleapis.com/v4/accounts/qatar-b8f1d/locations/ChIJVQOgSribP44RD4E2VvcthZM/reviews';
$url = $api_url;

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
]);
$response = curl_exec($curl);
$data = json_decode($response, true);
curl_close($curl);
?>

<div id="reactCategories" class="container"></div>
<?php get_footer(); ?>

