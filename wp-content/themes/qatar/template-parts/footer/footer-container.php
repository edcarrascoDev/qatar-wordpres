<?php
$city = Theme_Manager::get_instance()->get_theme_option('location_city');
$address = Theme_Manager::get_instance()->get_theme_option('location_address');
$address_link = Theme_Manager::get_instance()->get_theme_option('location_address_link');
$phones = Theme_Manager::get_instance()->get_theme_option('location_phone');
$email = Theme_Manager::get_instance()->get_theme_option('location_mail');
?>
<footer class="footer">
    <div class="container">
        <div class="footer__logo">
            <img src="<?php echo THEME_URL; ?>/styles/assets/images/logo_qatar_white.png" alt="Industrias Qatar">
        </div>
        <div class="footer__row mb-10">
            <div class="footer__location">
                <a href="<?php echo $address_link ?>"
                   target="_blank"
                   class="footer__text"
                >
                    <?php echo $address . " " . $city; ?>
                </a>
                <?php foreach ($phones as $phone) : ?>
                    <a href="tel:<?php echo $phone ?>"
                       target="_blank"
                       class="footer__text"
                    >
                        <?php echo Theme_Manager::get_instance()->format_phone($phone); ?>
                    </a>
                <?php endforeach; ?>
                <a href="<?php echo $email; ?>"
                   target="_blank"
                   class="footer__text"
                >
                    <?php echo $email; ?>
                </a>
            </div>

            <?php get_template_part('template-parts/footer/main-menu'); ?>
        </div>
        <div class="footer__row footer__row--end pt-25 pb-25">
            <div class="footer__social">
                <?php get_template_part('template-parts/common/social-networks'); ?>
            </div>

            <span class="footer__copyright">
                <?php if (Theme_Manager::get_instance()->get_theme_page_link('privacy_policy_page')): ?>
                    <a href="<?php echo Theme_Manager::get_instance()->get_theme_page_link('privacy_policy_page'); ?>">
                        <?php echo sprintf(__('© %s Industrias Qatar', THEME_LOCALE), date('Y')); ?>
                    </a>
                <?php else: ?>
                    <?php echo sprintf(__('© %s Industrias Qatar', THEME_LOCALE), date('Y')); ?>
                <?php endif; ?>
            </span>
        </div>
    </div>
</footer>