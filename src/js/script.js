$(document).ready(function(){
    $('.carousel__iner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev_arow.png" alt="prev_arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next_arow.png" alt="next_arrow"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    });
  });