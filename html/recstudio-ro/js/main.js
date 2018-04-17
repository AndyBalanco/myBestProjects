document.addEventListener("DOMContentLoaded", function (event) {
    tns({
        container: document.querySelector('.costumer-slide'),
        responsive: {
            320: 1,
        },
        gutter: 0,
        slideBy: 'page',
        dots: false,
        loop: true,
        controls: true,
        controlsContainer: document.querySelector('.custom-controls'),
        nav: true,
        navContainer: false,
    });

});