<?php
/**
 * Template Name: Contacto
 */

$city = Theme_Manager::get_instance()->get_theme_option('location_city');
$address = Theme_Manager::get_instance()->get_theme_option('location_address');
$address_link = Theme_Manager::get_instance()->get_theme_option('location_address_link');
$phones = Theme_Manager::get_instance()->get_theme_option('location_phone');
$email = Theme_Manager::get_instance()->get_theme_option('location_mail');

$image_lg = Theme_Manager::get_instance()->get_theme_option('contact_desktop_bg');
$image_sm = Theme_Manager::get_instance()->get_theme_option('contact_mobile_bg');
?>

<?php get_header(); ?>

<section class="hero">
    <div class="hero__background">
        <picture>
            <source srcset="<?php echo $image_lg['url'] ?>" media="(min-width:650px)"/>
            <img src="<?php echo $image_sm['url'] ?>" alt="<?php echo $image_lg['alt'] ?>"
                 title="<?php echo $image_lg['title'] ?>">
        </picture>
    </div>
    <div class="hero__content">
        <h2 class="headline headline--h1 headline--light">Contacto</h2>
    </div>
</section>

<section class="section section--contact">
    <div class="container">
        <div class="contact">
            <div class="contact__container">
                <div class="contact__info">
                    <h3 class="headline headline--h3 headline--light mb-25">Contáctanos</h3>
                    <ul class="contact__list">
                        <li>
                            <span>
                                <i class="icon icon--city"></i>
                                <?php echo $city; ?>
                            </span>
                        </li>
                        <li>
                            <a href="<?php echo $address_link; ?>" target="_blank">
                                <i class="icon icon--marker"></i>
                                <?php echo $address; ?>
                            </a>
                        </li>
                        <li>
                            <a href="tel:<?php echo $phones[0] ?>" target="_blank">
                                <i class="icon icon--phone"></i>
                                <?php echo Theme_Manager::get_instance()->format_phone($phones[0]); ?>
                            </a>
                        </li>
                        <li>
                            <a href="tel:<?php echo $email ?>" target="_blank">
                                <i class="icon icon--mail"></i>
                                <?php echo $email; ?>
                            </a>
                        </li>
                    </ul>
                    <div class="contact__social pt-35">
                        <?php get_template_part('template-parts/common/social-networks'); ?>
                    </div>
                </div>
                <div id="reactContactForm" class="contact__form"></div>
            </div>
        </div>
    </div>
</section>
<?php while (have_posts()) : the_post(); ?>

    <?php the_content(); ?>

<?php endwhile; ?>

<?php get_footer(); ?>
