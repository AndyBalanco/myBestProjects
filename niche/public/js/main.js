document.addEventListener("DOMContentLoaded", function (event) {

    'use strict'
    let menuBtn = document.getElementById('menu-btn'),
        menu = document.getElementById('menu'),
        menuWrapper = document.querySelector('.menu-wrapper'),
        alink = document.querySelectorAll('#menu li a');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('open');
        menuBtn.classList.toggle('open');
    });

    for (let i = 0; i < alink.length; i++) {
        alink[i].addEventListener('click', function () {
            menu.classList.remove('open');
            menuBtn.classList.remove('open');
        });
    }

    window.onscroll = function () {
        if (document.documentElement.scrollTop >= 40) {
            menuWrapper.classList.add('open');
        }

        if (document.documentElement.scrollTop <= 0) {
            menuWrapper.classList.remove('open');
        }
    }


    let inputSearch = document.querySelectorAll('.input-search'),
        searchDrop = document.querySelectorAll('.search-dropdown.open'),
        droplink = document.querySelectorAll('.search-dropdown li a');

    for (let s = 0; s < inputSearch.length; s++) {
        inputSearch[s].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('open');
        });
    }

    for (var i = 0; i < droplink.length; i++) {
        droplink[i].addEventListener('click', function (event) {
            searchDrop.classList.removeAttribute('class');
            console.log(searchDrop);
        });

    }




























});