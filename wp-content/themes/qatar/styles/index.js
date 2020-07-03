import './sass/styles.scss';

import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';
import { MDCFloatingLabel } from '@material/floating-label';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { MDCLineRipple } from '@material/line-ripple';
import { MDCTabBar } from '@material/tab-bar';

import Swiper from 'swiper';

window.onload = () => {
    let ThemeScript = {};

    /**
     * Body element
     * @type {HTMLElement}
     */

    const body = document.body;

    /**
     * get menu button
     * @type {HTMLElement}
     */
    const menuBtn = document.getElementById('topAppButton');

    /**
     * get Top app bar
     * @type {Element}
     */
    const mdcTopAppBar = document.getElementById('topAppBar');

    /**
     *
     * @type {{construct: construct}}
     */
    ThemeScript = {
        construct: function() {
            ThemeScript.materialConfig();
            ThemeScript.expandMenu();
            ThemeScript.getHeaderClassesByBodyClasses();
            ThemeScript.checkDocumentScrollPosition();
            ThemeScript.headerInteractiveOnScroll();
            ThemeScript.heroSlider();
            ThemeScript.productSlider();
            ThemeScript.singleProductTab();
            ThemeScript.toggleCheckoutShipping();
        },

        isMobile: () => {
            return window.screen.width < 992;
        },

        materialConfig: () => {
            if (mdcTopAppBar) {
                const topAppBar = new MDCTopAppBar(mdcTopAppBar);
            }

            /**
             * config Button Ripple
             * @type {Element}
             */
            const buttonRipple = document.querySelectorAll('.mdc-button');

            if (buttonRipple) {
                Array.prototype.forEach.call(buttonRipple, item => {
                    const button = new MDCRipple(item);
                });
            }

            /**
             * get Floating Labels
             * @type {Element}
             */
            const mdcFloatingLabels = document.querySelectorAll('.mdc-floating-label');

            if (mdcFloatingLabels) {
                Array.prototype.forEach.call(mdcFloatingLabels, item => {
                    const button = new MDCFloatingLabel(item);
                });
            }

            /**
             * get Texts fields
             * @type {Element}
             */
            const mdcTextsFields = document.querySelectorAll('.mdc-text-field');

            if (mdcTextsFields) {
                Array.prototype.forEach.call(mdcTextsFields, item => {
                    new MDCTextField(item);
                });
            }

            /**
             * get select fields
             * @type {Element}
             */
            const mdcSelects = document.querySelectorAll('.mdc-select');

            if (mdcSelects) {
                Array.prototype.forEach.call(mdcSelects, item => {
                    new MDCSelect(item);
                });
            }

            /**
             * get line ripples
             * @type {Element}
             */
            const mdcLineRipples = document.querySelectorAll('.mdc-text-field');

            if (mdcLineRipples) {
                Array.prototype.forEach.call(mdcLineRipples, item => {
                    const button = new MDCLineRipple(item);
                });
            }

            /**
             * get Tab bar
             * @type {Element}
             */

            const mdcTabBar = document.querySelector('.mdc-tab-bar');

            if (mdcTabBar) {
                new MDCTabBar(mdcTabBar);
            }
        },

        checkDocumentScrollPosition: () => {
            if (window.scrollY === 0) {
                mdcTopAppBar.classList.add('main-header--on-top');
            } else {
                mdcTopAppBar.classList.remove('main-header--on-top');
            }
        },

        getHeaderClassesByBodyClasses: () => {
            if (
                body.classList.contains('page--without-hero') ||
                (body.classList.contains('woocommerce-page') && !body.classList.contains('archive'))
            ) {
                mdcTopAppBar.classList.add('main-header--without-hero');
            }
        },

        headerInteractiveOnScroll: () => {
            document.addEventListener(
                'scroll',
                () => {
                    ThemeScript.checkDocumentScrollPosition();
                },
                false,
            );
        },

        expandMenu: () => {
            if (menuBtn) {
                const button = new MDCRipple(menuBtn);
                menuBtn.onclick = () => {
                    ThemeScript.toggleMenu();
                };
            }
        },

        toggleMenu() {
            body.style.overflow = body.style.overflow === 'hidden' ? 'initial' : 'hidden';
            mdcTopAppBar.classList.toggle('main-header--is-open');
        },

        heroSlider() {
            new Swiper('.hero__slider', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },

        productSlider() {
            const galleryThumbs = new Swiper('.product-gallery__thumbs', {
                direction: 'vertical',
                spaceBetween: 5,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });

            const galleryTop = new Swiper('.product-gallery__top', {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                preloadImages: false,
                lazy: true,
            });
        },

        singleProductTab() {
            const tabButtons = document.getElementsByClassName('mdc-tab');
            const tabClass = 'tab__container--';

            if (tabButtons && tabButtons.length > 0) {
                Array.prototype.forEach.call(tabButtons, tabButton => {
                    tabButton.addEventListener('click', () => {
                        const tabToDisplay = document.getElementById(tabButton.dataset.target);
                        const tabToHide = document.querySelector(`.${tabClass}showed`);

                        tabToHide.classList.add(`${tabClass}hidden`);
                        tabToHide.classList.remove(`${tabClass}showed`);

                        /**
                         * Add Active className to the button triggered and target container
                         */
                        tabToDisplay.classList.remove(`${tabClass}hidden`);
                        tabToDisplay.classList.add(`${tabClass}showed`);
                    });
                });
            }
        },

        toggleCheckoutShipping() {
            const checkbox = document.getElementById('ship-to-different-address-checkbox');
            const shippingContainer = document.querySelector('.shipping_address');

            if (checkbox && shippingContainer) {
                this.toggleDisplayOnCheckboxTrigger(checkbox, shippingContainer);
            }
        },

        toggleDisplayOnCheckboxTrigger(checkboxElement, containerElement) {
            checkboxElement.addEventListener('change', () => {
                containerElement.style.display === 'none'
                    ? (containerElement.style.display =
                          containerElement.dataset.display || 'initial')
                    : (containerElement.style.display = 'none');
            });
        },
    };

    ThemeScript.construct();
};
