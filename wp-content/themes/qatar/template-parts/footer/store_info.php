<?php $locations = Theme_Manager::get_instance()->get_footer_locations(); ?>

<?php foreach ($locations as $location): ?>
    <div class="footer__location">
        <h4><?php echo $location['name']; ?></h4>
        <div class="footer__address">
            <i class="icon icon--marker"></i>
            <a href="<?php echo Theme_Manager::get_instance()->get_address_url($location['address']) ?>"
               target="_blank"
               class="footer__text"
            >
                <?php echo $location['address']; ?>
            </a>
        </div>

        <div class="footer__phones mt-10">
            <i class="icon icon--phone"></i>

            <div>
                <?php if ($location['phone_1']): ?>
                    <a href="tel:<?php echo $location['phone_1'] ?>"
                       target="_blank"
                       class="footer__text"
                    >
                        <?php echo Theme_Manager::get_instance()->format_phone($location['phone_1']); ?>
                    </a>
                <?php endif; ?>

                <?php if ($location['phone_2']): ?>
                    <a href="tel:<?php echo $location['phone_2'] ?>"
                       target="_blank"
                       class="footer__text"
                    >
                        <?php echo Theme_Manager::get_instance()->format_phone($location['phone_2']); ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>

        <div class="footer__hours mt-10">
            <i class="icon icon--clock"></i>
            <span><?php echo $location['open_hours']; ?></span>
        </div>

        <div class="footer__social">
            <ul class="social">
                <?php if ($location['facebook']): ?>
                    <li class="social__item">
                        <a href="<?php echo $location['facebook']; ?>"
                           class="social__icon social__icon--facebook"
                           target="_blank"
                        >
                            <i class="icon icon--facebook icon--invert"></i>
                        </a>
                    </li>
                <?php endif; ?>

                <?php if ($location['instagram']): ?>
                    <li class="social__item">
                        <a href="<?php echo $location['instagram']; ?>"
                           class="social__icon social__icon--instagram"
                           target="_blank"
                        >
                            <i class="icon icon--instagram icon--invert"></i>
                        </a>
                    </li>
                <?php endif; ?>
            </ul>
        </div>
    </div>

<?php endforeach; ?>