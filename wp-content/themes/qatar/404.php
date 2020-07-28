<?php get_header(); ?>

<div class="not-found">
    <div class="container text-center">
        <div class="not-found__image">
            <img src="<?php echo Theme_Manager::get_instance()->get_theme_option('404_image')['url']?>" alt="">
        </div>
        <h1>404 - Página no encontrada</h1>
        <h5>Lo sentimos, la página que estabas buscando no existe</h5>
        <br><br>
        <a class="mdc-button mdc-button--raised" href="<?php echo home_url(); ?>">Ir al inicio</a>
        <br><br>
    </div>
</div>