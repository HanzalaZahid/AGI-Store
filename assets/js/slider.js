$(document).ready(
    ()=>
    {
        $('.customer_feedback .section_wrapper .feedback_slider').slick(
            {
                infinite: true,
                slidesToShow: 3,
                dots: true,
                autoplay: true,
                arrows: false,
                dotsClass: 'dotsSlick',
                initialSlide: 3,

                responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                      }
                    },
                    {
                      breakpoint: 868,
                      settings: {
                        slidesToShow: 1,
                      }
                    },
                ]
            }
        );
    }
)