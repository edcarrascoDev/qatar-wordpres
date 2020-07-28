<ul class="social">
    <?php if (Theme_Manager::get_instance()->get_social_network_url('facebook')): ?>
        <li class="social__item">
            <a href="<?php echo Theme_Manager::get_instance()->get_social_network_url('facebook'); ?>"
               class="social__icon social__icon--facebook"
               target="_blank"
            >
                <i class="icon icon--facebook icon--invert"></i>
            </a>
        </li>
    <?php endif; ?>

    <?php if (Theme_Manager::get_instance()->get_social_network_url('instagram')): ?>
        <li class="social__item">
            <a href="<?php echo Theme_Manager::get_instance()->get_social_network_url('instagram'); ?>"
               class="social__icon social__icon--instagram"
               target="_blank"
            >
                <i class="icon icon--instagram icon--invert"></i>
            </a>
        </li>
    <?php endif; ?>

    <?php if (Theme_Manager::get_instance()->get_social_network_url('youtube')): ?>
        <li class="social__item">
            <a href="<?php echo Theme_Manager::get_instance()->get_social_network_url('youtube'); ?>"
               class="social__icon social__icon--youtube"
               target="_blank"
            >
                <i class="fab fa-youtube"></i>
            </a>
        </li>
    <?php endif; ?>

    <?php if (Theme_Manager::get_instance()->get_social_network_url('twitter')): ?>
        <li class="social__item">
            <a href="<?php echo Theme_Manager::get_instance()->get_social_network_url('twitter'); ?>"
               class="social__icon social__icon--twitter"
               target="_blank"
            >
                <i class="fab fa-twitter"></i>
            </a>
        </li>
    <?php endif; ?>
</ul>