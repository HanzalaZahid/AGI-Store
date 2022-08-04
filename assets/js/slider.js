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
        $('.frequently_purchased .section_wrapper .product_slider').slick(
          {
              infinite: false,
              slidesToShow: 3,
              dots: false,
              arrows: false,
              initialSlide: 1,
              centerMode: true,
              centerPadding: '100px',
              responsive: [
                {
                  breakpoint: 1390,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 870,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 580,
                  settings: {
                    slidesToShow: 1,
                    centerMode: 'false',
                    autoplay: true,
                    variableWidth: true,
                  }
                },
            ]
          }
        )

    }
)