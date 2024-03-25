// app code convert in typescript of the assets file
// this file is not use in the project

import 'bootstrap';
import '@/assets/scss/main.scss';
import $ from 'jquery';
require('waypoints/lib/noframework.waypoints.js');


export default defineNuxtPlugin(nuxtApp => {
    const general = {
        "mqBreakpoints": {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1156,
            sxl: 1399,
            xxl: 1580,
        },

        "animationHandler": function () {
            const windowHeight = window.innerHeight;
            let yPxTrigger, yPercentTrigger;

            // Triggering on scroll
            const triggerAnimation = [
                // {
                //     id: 'home-intro',
                //     offsetTop: (1 * window.innerHeight),
                //     revert: false,
                //     handler: function (direction) {
                //         if (direction === 'down') {
                //             document.getElementById('home-intro').classList.add('-active');
                //             document.getElementById('home-intro').classList.add('animate__animated');
                //             document.getElementById('home-intro').classList.add('animate__fadeIn');
                //         }
                //     }
                // },
                {
                    id: 'home-search-bar',
                    offsetTop: (1 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {
                            (document.getElementById('home-search-bar') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-search-bar') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-search-bar') as HTMLFormElement).classList.add('animate__fadeInUp');
                        }
                    }
                },
                {
                    id: 'home-training-list',
                    offsetTop: (1 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {
                            (document.getElementById('home-training-list') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-training-list') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-training-list') as HTMLFormElement).classList.add('animate__fadeInUp');
                        }
                    }
                },
                {
                    id: 'home-training-content',
                    offsetTop: (1 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {

                            (document.getElementById('home-training-content') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-training-content') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-training-content') as HTMLFormElement).classList.add('animate__fadeInUp');
                        }
                    }
                },
                {
                    id: 'home-offer-content',
                    offsetTop: (0.8 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {
                            (document.getElementById('home-offer-content') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-offer-content') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-offer-content') as HTMLFormElement).classList.add('animate__fadeInUp');
                        }
                    }
                },
                {
                    id: 'home-offer-listing',
                    offsetTop: (0.85 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {

                            (document.getElementById('home-offer-listing') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-offer-listing') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-offer-listing') as HTMLFormElement).classList.add('animate__fadeInRight');
                        }
                    }
                },
                {
                    id: 'home-newsletter',
                    offsetTop: (0.75 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {

                            (document.getElementById('home-newsletter') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-newsletter') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-newsletter') as HTMLFormElement).classList.add('animate__fadeIn');
                        }
                    }
                },
                {
                    id: 'home-newsletter-img',
                    offsetTop: (0.75 * window.innerHeight),
                    revert: false,
                    handler: function (direction: any) {
                        if (direction === 'down') {
                            (document.getElementById('home-newsletter-img') as HTMLFormElement).classList.add('-active');
                            (document.getElementById('home-newsletter-img') as HTMLFormElement).classList.add('animate__animated');
                            (document.getElementById('home-newsletter-img') as HTMLFormElement).classList.add('animate__fadeInLeft');
                        }
                    }
                },
            ];

            triggerAnimation.forEach((animation, key) => {
                if ($('#' + animation.id).length) {
                    let yPxTrigger: number;
                    let yPercentTrigger: string;

                    if (animation.revert === false) {
                        // Triggering with offset
                        const offset = $('#' + animation.id).offset();
                        if (offset) {
                            yPxTrigger = offset.top - animation.offsetTop;
                            yPercentTrigger = '-' + Math.round(yPxTrigger / windowHeight * 100) + '%';
                        }
                    } else {
                        // Triggering when scroll up and element hidden from screen
                        const offset = $('#' + animation.id).offset();
                        if (offset) {
                            const height = $('#' + animation.id).height();
                            if (height !== undefined) {
                                yPxTrigger = $('#' + animation.id).offset()!.top - windowHeight + height;
                                yPercentTrigger = '-' + Math.round(yPxTrigger / windowHeight * 100) + '%';
                                yPercentTrigger = '-' + Math.round(yPxTrigger / windowHeight * 100) + '%';
                            }
                        }
                    }

                    const height = $('#' + animation.id).height();
                    if (height !== undefined) {
                        const yPxTrigger = $('#' + animation.id).offset()!.top - windowHeight + height;
                        const yPercentTrigger = '-' + Math.round(yPxTrigger / windowHeight * 100) + '%';

                        if (yPxTrigger !== undefined && yPercentTrigger !== undefined) {
                            (window as any)['spyscroll-animation-' + key] = new Waypoint({
                                element: document.getElementById('js-main')!,
                                handler: animation.handler,
                                offset: yPercentTrigger
                            });

                        }
                    }
                }
            });


            if (window.pageYOffset === 0) {
                $(window).scroll();
            }

        },

        "buttonHoverHandler": function () {
            let buttons = $('.btn');

            buttons.mouseenter(function (e) {
                const parentOffset = $(this).offset();
                if (parentOffset !== undefined) {
                    const relX = e.pageX - parentOffset.left;
                    const relY = e.pageY - parentOffset.top;
                    $(this).prev(".btn-fx-circle").css({ "left": relX, "top": relY });
                    $(this).prev(".btn-fx-circle").removeClass("desplode-circle");
                    $(this).prev(".btn-fx-circle").addClass("explode-circle");
                }



            });

            buttons.mouseleave(function (e) {
                const parentOffset = $(this).offset();
                if (parentOffset !== undefined) {
                    const relX = e.pageX - parentOffset.left;
                    const relY = e.pageY - parentOffset.top;
                    $(this).prev(".btn-fx-circle").css({ "left": relX, "top": relY });
                    $(this).prev(".btn-fx-circle").removeClass("explode-circle");
                    $(this).prev(".btn-fx-circle").addClass("desplode-circle");
                }

            });

            let stretchedLink = $('.js-btn-fx-a');

            stretchedLink.mouseenter(function (e) {
                const parentOffset = $(this).offset();
                if (parentOffset !== undefined) {
                    const relX = e.pageX - parentOffset.left;
                    const relY = e.pageY - parentOffset.top;
                    $(this).prev(".btn-fx-circle").css({ "left": relX, "top": relY });
                    $(this).prev(".btn-fx-circle").removeClass("desplode-circle");
                    $(this).prev(".btn-fx-circle").addClass("explode-circle");
                }

            });

            stretchedLink.mouseleave(function (e) {
                const parentOffset = $(this).offset();
                if (parentOffset !== undefined) {
                    const relX = e.pageX - parentOffset.left;
                    const relY = e.pageY - parentOffset.top;
                    $(this).prev(".btn-fx-circle").css({ "left": relX, "top": relY });
                    $(this).prev(".btn-fx-circle").removeClass("explode-circle");
                    $(this).prev(".btn-fx-circle").addClass("desplode-circle");
                }
            });
        },

        "offersHandler": function () {
            let offers = $('.js-offer-expandable');
            let button = null;

            if (offers.length) {
                offers.each(function (k, v) {
                    let $this = $(this);
                    $this.on('click', function (e) {
                        if (e.target.matches('svg') || e.target.matches('use')) {
                            $this.removeClass('-center');
                            $this.removeClass('-expand');
                            offers.removeClass('-resized');
                            $this.parent().removeClass('-open')
                        } else {
                            if (!$this.hasClass('-center')) {
                                offers.addClass('-resized');
                                offers.removeClass('-center');
                                offers.removeClass('-expand');
                                $this.removeClass('-resized');
                                $this.addClass('-center');
                                $this.parent().addClass('-open');
                                setTimeout(function () {
                                    $this.addClass('-expand');
                                }, 400);
                            }
                        }
                    })
                })
            }
        },

        "menuHandler": function () {
            $('.navbar-toggler').on('click', function () {
                $('body').toggleClass('menu-open');
            });

            // if ( !document.getElementById('js-body').classList.contains('js-menu-fixed')){
            //     let waypointText = new Waypoint({
            //         element: document.getElementById('js-main'),
            //         handler: function handler(direction) {
            //             if (direction === 'down') {
            //                 document.getElementById('js-body').classList.add('js-menu-fixed');
            //             } else {
            //                 document.getElementById('js-body').classList.remove('js-menu-fixed');
            //             }
            //         },
            //         // offset: '-10'
            //     });
            // }

            if ((document.getElementById('js-body') as HTMLFormElement).classList.contains('-transparent')) {
                let waypointText = new Waypoint({
                    element: document.getElementById('js-main'),
                    handler: function handler(direction: any) {
                        if (direction === 'down') {
                            (document.getElementById('js-body') as HTMLFormElement).classList.remove('-transparent');
                        } else {
                            (document.getElementById('js-body') as HTMLFormElement).classList.add('-transparent');
                        }
                    },
                    offset: '-10'
                });
            }

            let waypointTMobile = new Waypoint({
                element: document.getElementById('js-main'),
                handler: function handler(direction: any) {
                    if (direction === 'down') {
                        (document.getElementById('js-body') as HTMLFormElement).classList.add('js-menu-mobile-fixed');
                    } else {
                        (document.getElementById('js-body') as HTMLFormElement).classList.remove('js-menu-mobile-fixed');
                    }
                },
                offset: '-5%'
            });
        },

        "trainingHandler": function () {
            if (window.innerWidth >= general.mqBreakpoints.sxl) {
                let form = (document.getElementById('contact') as HTMLFormElement);
                let menu = (document.getElementById('js-training-menu') as HTMLFormElement);

                let hasScrollAnim = false;
                let hasScroll = false;

                if (form && menu) {
                    window.onscroll = function () {
                        let height = form.offsetTop
                        if ((window.scrollY + menu.offsetHeight + 80) >= height) { // change target to number

                            if (!hasScroll) {
                                hasScrollAnim = false;
                            }

                            if (hasScrollAnim) {
                                (document.getElementById('js-training-menu') as HTMLFormElement).style.position = 'absolute';
                                (document.getElementById('js-training-menu') as HTMLFormElement).style.bottom = '16px';
                                (document.getElementById('js-training-menu') as HTMLFormElement).style.top = 'auto';
                            }
                        } else {
                            (document.getElementById('js-training-menu') as HTMLFormElement).style.position = 'fixed';
                            (document.getElementById('js-training-menu') as HTMLFormElement).style.bottom = 'unset';
                            (document.getElementById('js-training-menu') as HTMLFormElement).style.top = 'unset'
                        }
                        hasScroll = true;
                    };

                    const trigger = new Event('scroll');
                    window.dispatchEvent(trigger);
                } else if (menu) {
                    let footer = (document.getElementById('footer') as HTMLFormElement);

                    window.onscroll = function () {
                        let height = footer.offsetTop
                        if ((window.scrollY + menu.offsetHeight + 230) >= height) { // change target to number

                            if (!hasScroll) {
                                hasScrollAnim = false;
                            }

                            if (hasScrollAnim) {
                                (document.getElementById('js-training-menu') as HTMLFormElement).style.position = 'absolute';
                                (document.getElementById('js-training-menu') as HTMLFormElement).style.bottom = '0';
                                (document.getElementById('js-training-menu') as HTMLFormElement).style.top = 'auto';
                            }
                        } else {
                            (document.getElementById('js-training-menu') as HTMLFormElement).style.position = 'fixed';
                            (document.getElementById('js-training-menu') as HTMLFormElement).style.bottom = 'unset';
                            (document.getElementById('js-training-menu') as HTMLFormElement).style.top = 'unset'
                        }
                        hasScroll = true;
                    };

                    const trigger = new Event('scroll');
                    window.dispatchEvent(trigger);
                }
            }
        },

        "searchBarHandler": function () {
            const buttonsOpen = document.querySelectorAll('.js-searchbar-opening');
            const buttonClose = document.querySelector('.js-searchbar-closing');

            buttonsOpen.forEach($button => $button.addEventListener('click', (event) => {
                const panel = document.querySelector('#searchbar');
                if (panel !== null) {
                    panel.classList.remove('animate__animated', 'animate__fadeOutRight', 'animate__fadeInRight');
                    panel.classList.add('animate__animated', 'animate__fadeInRight');
                }

            }));
            if (buttonClose != null) {
                buttonClose.addEventListener('click', () => {
                    const panel = document.querySelector('#searchbar');
                    if (panel !== null) {
                        panel.classList.add('animate__animated', 'animate__fadeOutRight');
                        panel.classList.remove('animate__animated');
                    }

                });
            }

        },

        "contactHandler": function () {
            $('.js-select-change').on('click', function () {
                let select = $('#' + $(this).data('select-id'));
                select.find('option[value=' + $(this).data('select-option') + ']').attr('selected', 'selected');
            })
        },

        "sessionSlotHandler": function () {
            $('.js-training-slot-btn').on('click', function () {
                $(this).toggleClass('active');
                $('.js-training-slot-wrapper').toggleClass('active');
            })
        }
    };

    (function ($) {
        $(document).ready(function () {
            general.buttonHoverHandler();
            general.animationHandler();
            general.offersHandler();
            general.trainingHandler();
            general.searchBarHandler();
            general.contactHandler();
            general.menuHandler();
            general.sessionSlotHandler();
        });
    })($);
})

