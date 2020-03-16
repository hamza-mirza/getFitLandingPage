(function($) {
    $(document).ready(function() {

        //highlighting navbar on scroll down
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $(".navbar-default").css({
                    "background-color": "rgba(0, 0, 0, 0.9)",
                    "padding": "10px 0",
                    "transition": "0.5s all"
                });
            } else {
                $(".navbar-default").css({
                    "background-color": "transparent",
                    "padding": "30px 0",
                    "transition": "0.5s all"
                });
            }
        });

        $(".facts__btn1").click(function(){
            $(".facts__p1").slideDown();
        });

        $(".hide__btn1").click(function(){
            $(".facts__p1").slideUp();
        });

        $(".facts__btn2").click(function(){
            $(".facts__p2").slideDown();
        });

        $(".hide__btn2").click(function(){
            $(".facts__p2").slideUp();
        });

        $(".facts__btn3").click(function(){
            $(".facts__p3").slideDown();
        });

        $(".hide__btn3").click(function(){
            $(".facts__p3").slideUp();
        });



        // smooth scroll

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });


        //hightlighting navbar elements on scroll
        /*$('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 100
        });*/

        $("body").scrollspy({target: ".navbar-fixed-top", offset:200});
        /*

        // animating elements on scroll

        //hide elements first
        $('.about__right').css('opacity', 0);
        $('.about__left').css('opacity', 0);
        $('.feature__row').css('opacity', 0);
        $('.demo__row').css('opacity', 0);


        // add animate.css classes to animate hidden elements
        $('.about__left').waypoint(function() {
            $('.about__left').addClass('fadeInLeft');
        }, { offset: '70%' });

        $('.about__right').waypoint(function() {
            $('.about__right').addClass('fadeInUp');
        }, { offset: '70%' });

        $('.feature__row').waypoint(function() {
            $('.feature__row').addClass('fadeInUp');
        }, { offset: '50%' });

        $('.demo__row').waypoint(function() {
            $('.demo__row').addClass('fadeInLeftBig');
        }, { offset: '50%' });
        */

        });
})(jQuery);
