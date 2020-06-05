<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="600527348293-0ddch6n3gg97rqjg8pnhd4jpmmgfa9is.apps.googleusercontent.com">
	<?php get_template_part('template-parts/header/favicons'); ?>
	<?php wp_head(); ?>
	
    <?php echo Theme_Manager::get_instance()->get_theme_option('before_closing_header_scripts'); ?>

</head>
<body <?php  body_class(); ?>>

<?php echo Theme_Manager::get_instance()->get_theme_option('after_closing_header_scripts'); ?>

<?php get_template_part('template-parts/header/header-container'); ?>
