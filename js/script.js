function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// $(document).ready(function () {
//   $(".slider").slick({
//     slidesToShow: 3,
//     autoplay: false,
//     // autoplaySpeed: 7000,
//     centerMode: true,
//     centerPadding: "10px",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

$(".slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: "linear",
  touchMove: true,

  responsive: [
    {
      breakpoint: 1192,
      settings: {
        slidesToShow: 3,
        variableWidth: true,
        centerMode: true,
      },

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
      },
    },
  ],
});

let imgs = $(".slider img");
imgs.each(function () {
  let item = $(this).closest(".item");
  item.css({
    "background-image": "url(" + $(this).attr("src") + ")",
    "background-position": "top",
    "-webkit-background-size": "cover",
    "background-size": "cover",
  });
  $(this).hide();
});

$(".jquery-background-video").bgVideo({
  fadeIn: 1000,
});

$(".slider-t").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  infinite: true,
  variableWidth: true,

  responsive: [
    {
      breakpoint: 1192,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(document).ready(function () {
  $("nav li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body, html").animate({ scrollTop: destination }, 1000);
  });
});
