$(function () {
  $('#portfolio .container .cards').slick({
    centerMode: false,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          dots: true,
          arrows: false,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          dots: true,
          arrows: false,
          infinite: true
        }
      }
    ]
  })

  $('#testimonials .container .testimonials').slick({
    centerMode: false,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          dots: true,
          arrows: false,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          dots: true,
          arrows: false,
          infinite: true
        }
      }
    ]
  })
})
