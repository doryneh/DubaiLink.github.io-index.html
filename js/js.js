
$(".carousel-control-prev,.carousel-control-next").click(function () {
   $("section.CarouselPart .carousel .carousel-inner .carousel-item.active").css("animation-name", " circle-in-top-right");
});
$(".carousel-control-prev").click(function () {
   if ($('#carousel-item-one').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("two");
   };

});
$(".carousel-control-prev").click(function () {
   if ($('#carousel-item-Two').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("three");
   };

});

$(".carousel-control-prev").click(function () {
   if ($('#carousel-item-Three').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("four");
   };
});
$(".carousel-control-prev").click(function () {
   if ($('#carousel-item-Four').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("five");
   };
});
$(".carousel-control-prev").click(function () {
   if ($('#carousel-item-Five').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("six");
   };
});
$(".carousel-control-prev").click(function () {

   if ($('#carousel-item-Six').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("seven");
   };
});

$(".carousel-control-prev").click(function () {
   if ($('#carousel-item-Seven').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("one");
   };
});


 
/*******
 Previous
 ********/
 $(".carousel-control-next").click(function () {
   $("section.CarouselPart .carousel .carousel-inner .carousel-item.active").css("animation-name", "circle-in-top-right");
});
$(".carousel-control-next").click(function () {
   if ($('#carousel-item-one').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("four");
   };

});
$(".carousel-control-next").click(function () {
   if ($('#carousel-item-Two').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("five");
   };

});

$(".carousel-control-next").click(function () {
   if ($('#carousel-item-Three').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("six");
   };
});
$(".carousel-control-next").click(function () {
   if ($('#carousel-item-Four').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("seven");
   };
});
$(".carousel-control-next").click(function () {
   if ($('#carousel-item-Five').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("one");
   };
});
$(".carousel-control-next").click(function () {

   if ($('#carousel-item-Six').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("two");
   };
});

$(".carousel-control-next").click(function () {
   if ($('#carousel-item-Seven').hasClass('active')) {
      $("#wraper").removeClass();
      $("#wraper").addClass("three");
   };
});


$(window).scroll(function () {
   if ($(this).scrollTop() >= 0) {
     $("nav.navbar").addClass("blackNav");
   } 
   if ($(this).scrollTop() == 0) {
     $("nav.navbar").removeClass("blackNav");
   }
 });
