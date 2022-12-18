
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

/*Navbar effect*/
$(window).scroll(function () {
   if ($(this).scrollTop() >= 0) {
      $("nav.navbar").addClass("blackNav");
      $(".Logo").css("filter", " unset");

   }
   else{
      $(".Logo").css("filter", "  brightness(0) invert(1)");
   }
   if ($(this).scrollTop() == 0) {
      $("nav.navbar").removeClass("blackNav");
      $(".Logo").css("filter", "  brightness(0) invert(1)");

   }
});


/*Scroll Effect*/
$(document).ready(function () {

   function PinkSeperatorAnim() {
      var reveals = document.querySelectorAll("p.Description,h4.TitleDescription,.PhotoDescription img");

      for (var i = 0; i < reveals.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = reveals[i].getBoundingClientRect().top;
         var elementVisible = 150;

         if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animated");
         } else {
            reveals[i].classList.remove("animated");
         }
      }
   }

   window.addEventListener("scroll", PinkSeperatorAnim);
});
/*Map Hover*/

jQuery('.MapIndex0').mouseenter(function () {
   jQuery('.DetailsOne').css({ "display": "block" });
});
jQuery('.MapIndex0').mouseleave(function () {
   jQuery('.DetailsOne').css({ "display": "none" });
});

jQuery('.MapIndex1').mouseenter(function () {
   jQuery('.DetailsTwo').css({ "display": "block" });
});
jQuery('.MapIndex1').mouseleave(function () {
   jQuery('.DetailsTwo').css({ "display": "none" });
});

jQuery('.MapIndex2').mouseenter(function () {
   jQuery('.DetailsThree').css({ "display": "block" });
});
jQuery('.MapIndex2').mouseleave(function () {
   jQuery('.DetailsThree').css({ "display": "none" });
});

jQuery('.MapIndex3').mouseenter(function () {
   jQuery('.DetailsFour').css({ "display": "block" });
});
jQuery('.MapIndex3').mouseleave(function () {
   jQuery('.DetailsFour').css({ "display": "none" });
});

jQuery('.MapIndex4').mouseenter(function () {
   jQuery('.DetailsFive').css({ "display": "block" });
});
jQuery('.MapIndex4').mouseleave(function () {
   jQuery('.DetailsFive').css({ "display": "none" });
});

jQuery('.MapIndex5').mouseenter(function () {
   jQuery('.DetailsSix').css({ "display": "block" });
});
jQuery('.MapIndex5').mouseleave(function () {
   jQuery('.DetailsSix').css({ "display": "none" });
});


/*Carousel Brands slide time*/
$(document).ready(function() {
$('#carouselExampleSlidesOnly').carousel({
   interval: 100
 });
 $('#carouselDubai,#TextCarousel').carousel({
   interval: false
 });
 $('.carousel').carousel('pause');

});
/********
 Control 2 carousel in Dubai Link by the same buttons
 *****/
 $('#Next').on('click', function(e) {
   e.preventDefault()
   $('#TextCarousel').carousel('prev')
 })
 $('#Prev').on('click', function(e) {
   e.preventDefault()
   $('#TextCarousel').carousel('next')
 })
/********
Hide and show the page content depending on the carousel
 ****/

   // if ($('#carousel-item-one').hasClass('active')) {
   //    $('#LandingPage').removeClass("d-none");
   //    $('#LandingPage').addClass("d-block");
   //    $('#DubaiLink').addClass("d-none");
   // } 
   // if (!$('#carousel-item-one').hasClass('active')){
   //    $('#LandingPage').removeClass("d-block");
   //    $('#LandingPage').addClass("d-none");
   // }

