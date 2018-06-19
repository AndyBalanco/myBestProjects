document
    .addEventListener("DOMContentLoaded", function (event) {

        'use strict'
        let menuBtn = document.getElementById('menu-btn'),
            menu = document.getElementById('menu'),
            menuWrapper = document.querySelector('.menu-wrapper'),
            alink = document.querySelectorAll('#menu li a');

        menuBtn.addEventListener('click', function () {
            menu
                .classList
                .toggle('open');
            menuBtn
                .classList
                .toggle('open');
        });

        for (let i = 0; i < alink.length; i++) {
            alink[i]
                .addEventListener('click', function () {
                    menu
                        .classList
                        .remove('open');
                    menuBtn
                        .classList
                        .remove('open');
                });
        }

        window.onscroll = function () {
            if (document.documentElement.scrollTop >= 40) {
                menuWrapper
                    .classList
                    .add('fixed');
            }

            if (document.documentElement.scrollTop <= 0) {
                menuWrapper
                    .classList
                    .remove('fixed');
            }
        };

        tns({
            container: document.querySelector('.costumer-slide'),
            responsive: {
                320: 1
            },
            gutter: 0,
            slideBy: 'page',
            dots: false,
            loop: true,
            controls: true,
            controlsContainer: document.querySelector('.custom-controls'),
            nav: true,
            navContainer: false
        });

        let video = tns({
            container: document.querySelector('.slide-video'),
            responsive: {
                1200: 4,
                992: 3,
                767: 2,
                480: 1,
                320: 1
            },
            items: 4,
            gutter: 0,
            controls: true,
            controlsContainer: document.querySelector('.customs-controls'),
            nav: true,
            navContainer: false,
        });

        let gall1 = document.querySelector('#gallery1');
        let gall2 = document.querySelector('#gallery2');
        let gall3 = document.querySelector('#gallery3');
        let gall4 = document.querySelector('#gallery4');
        let gall5 = document.querySelector('#gallery5');

        $('#gallery1').click(function (e) {
            e.preventDefault();
            $.swipebox([{
                href: 'images/gallery/1/00.jpg'
            }, {
                href: 'images/gallery/1/01.jpg'
            }, {
                href: 'images/gallery/1/02.jpg'
            }, {
                href: 'images/gallery/1/03.jpg'
            }, {
                href: 'images/gallery/1/04.jpg'
            }, {
                href: 'images/gallery/1/05.jpg'
            }, {
                href: 'images/gallery/1/06.jpg'
            }, {
                href: 'images/gallery/1/07.jpg'
            }, {
                href: 'images/gallery/1/08.jpg'
            }, {
                href: 'images/gallery/1/09.jpg'
            }, {
                href: 'images/gallery/1/10.jpg'
            }]);
        });
        $('#gallery2').click(function (e) {
            e.preventDefault();
            $.swipebox([{
                href: 'images/gallery/2/00.jpg'
            }, {
                href: 'images/gallery/2/01.jpg'
            }, {
                href: 'images/gallery/2/02.jpg'
            }, {
                href: 'images/gallery/2/03.jpg'
            }, {
                href: 'images/gallery/2/04.jpg'
            }, {
                href: 'images/gallery/2/05.jpg'
            }, {
                href: 'images/gallery/2/06.jpg'
            }, {
                href: 'images/gallery/2/07.jpg'
            }, {
                href: 'images/gallery/2/08.jpg'
            }, {
                href: 'images/gallery/2/09.jpg'
            }, {
                href: 'images/gallery/2/10.jpg'
            }]);
        });
        $('#gallery3').click(function (e) {
            e.preventDefault();
            $.swipebox([{
                href: 'images/gallery/1/00.jpg'
            }, {
                href: 'images/gallery/1/01.jpg'
            }, {
                href: 'images/gallery/1/02.jpg'
            }, {
                href: 'images/gallery/1/03.jpg'
            }, {
                href: 'images/gallery/1/04.jpg'
            }, {
                href: 'images/gallery/1/05.jpg'
            }, {
                href: 'images/gallery/1/06.jpg'
            }, {
                href: 'images/gallery/1/07.jpg'
            }, {
                href: 'images/gallery/1/08.jpg'
            }, {
                href: 'images/gallery/1/09.jpg'
            }, {
                href: 'images/gallery/1/10.jpg'
            }]);
        });
        $('#gallery4').click(function (e) {
            e.preventDefault();
            $.swipebox([{
                href: 'images/gallery/1/00.jpg'
            }, {
                href: 'images/gallery/1/01.jpg'
            }, {
                href: 'images/gallery/1/02.jpg'
            }, {
                href: 'images/gallery/1/03.jpg'
            }, {
                href: 'images/gallery/1/04.jpg'
            }, {
                href: 'images/gallery/1/05.jpg'
            }, {
                href: 'images/gallery/1/06.jpg'
            }, {
                href: 'images/gallery/1/07.jpg'
            }, {
                href: 'images/gallery/1/08.jpg'
            }, {
                href: 'images/gallery/1/09.jpg'
            }, {
                href: 'images/gallery/1/10.jpg'
            }]);
        });
        $('#gallery5').click(function (e) {
            e.preventDefault();
            $.swipebox([{
                href: 'images/gallery/1/00.jpg'
            }, {
                href: 'images/gallery/1/01.jpg'
            }, {
                href: 'images/gallery/1/02.jpg'
            }, {
                href: 'images/gallery/1/03.jpg'
            }, {
                href: 'images/gallery/1/04.jpg'
            }, {
                href: 'images/gallery/1/05.jpg'
            }, {
                href: 'images/gallery/1/06.jpg'
            }, {
                href: 'images/gallery/1/07.jpg'
            }, {
                href: 'images/gallery/1/08.jpg'
            }, {
                href: 'images/gallery/1/09.jpg'
            }, {
                href: 'images/gallery/1/10.jpg'
            }]);
        });

    });