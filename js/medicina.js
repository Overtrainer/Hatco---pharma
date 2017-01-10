jQuery(document).ready(function($) {
    'use strict';


    // Phone mask
    $("#phone").mask("(999) 999-99-99");


    // Fancybox - Litebox
    $(".fancybox").fancybox();


    // Parallax parameter
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40,
        responsive: true
    });

    //Magic header
    $(document).ready(function() {

        var $menu = $(".navbar");

        $(window).scroll(function() {
            if ($(this).scrollTop() > 50 && $menu.hasClass("default")) {
                $menu.removeClass("default").addClass("fixed");
                $menu.css({ 'margin-top': '-80px' });
                $('body').css({ 'margin-top': '80px' });
            } else if ($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
                $menu.css({ 'margin-top': '0px' });
                $('body').css({ 'margin-top': '0px' });
            }
        }); //scroll
    });

    //Top-scroll effects
    $(document).ready(function() {

        $("#top-page").hide();

        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('#top-page').fadeIn();
                } else {
                    $('#top-page').fadeOut();
                }
            });

            $('#top-page').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });

        $("#to_form").on("click", function(event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $('#form').offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({ scrollTop: top - 200 }, 1500);
        });
    });


    //Stuffs effect
    $(function() {
        $('#plan #price_tables input[type="submit"]').on('click', function() {
            $('.appointment form .gender input').click();
        });
    });

    //Quality-controll
    $('#quality').bind("change keyup input click", function() {


        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });


    $(function(){
        $('.requires .comment #delete').on('click', function(){
            $('.requires .comment .delete').click();
        })
    });

    // Home logos carousel  
    $('.owl-logos').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            960: {
                items: 4,
                nav: false
            },
            1281: {
                items: 4,
                nav: false
            }
        }
    });



    // Home gallery carousel
    $('.home-gallery').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            960: {
                items: 4,
                nav: false
            },
            1281: {
                items: 4,
                nav: false
            }
        }
    });

});


// Preloader        
window.addEventListener('DOMContentLoaded', function() {
    new QueryLoader2(document.querySelector("body"), {
        barColor: "#fff",
        backgroundColor: "#1dd2c8",
        percentage: true,
        barHeight: 2,
        minimumTime: 200,
        fadeOutTime: 1000
    });
});
