<?php get_template_part('template-parts/footer/footer-container'); ?>
<div id="reactLoader"></div>
<?php wp_footer(); ?>

<?php echo Theme_Manager::get_instance()->get_theme_option('before_closing_footer_scripts'); ?>

</body>

</html>