// ----- Google Maps -------
function initMap() {
        var lawn = {lat: -27.477400, lng: 153.029349};
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 17,
          center: lawn,
          gestureHandling: 'cooperative',
          scrollwheel:  false,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
        var marker = new google.maps.Marker({
          position: lawn,
          map: map,
          icon: './public/img/running_pin.png',
          title: 'Kidney Lawn'
        });
}


// ------ Scroll ------
// Enables the click and scroll functionality
$(document).ready(function (){
    $("#go-home").click(function (){
        $("#section0").velocity("scroll", { 
            duration: 1000,
        });
    });
     $("#go-home2").click(function (){
        $("#section0").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-about").click(function (){
        $("#section1").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-get-started").click(function (){
        $("#section2").velocity("scroll", { 
            duration: 1000,
        });
    });
     $("#go-social").click(function (){
        $("#section3").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-timetable").click(function (){
        $("#section4").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-timetable-2").click(function (){
        $("#section4").velocity("scroll", { 
            duration: 1000,
        });
    });
    // $("#go-overview").click(function (){
    //     $("#section5").velocity("scroll", { 
    //         duration: 1000,
    //     });
    // });
    // $("#go-map").click(function (){
    //     $("#map2").velocity("scroll", { 
    //         duration: 1000,
    //     });
    // });
    $("#go-executives").click(function (){
        $("#section5").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-contact").click(function (){
        $("#section6").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-top").click(function (){
        $("#banner").velocity("scroll", { 
            duration: 1000,
        });
    });
    // ----  Popover settings  -----
    $('a.session-box').click(function(e){
        // Prevents scrolling to the top of the page when clicking a tag with href="#"
        e.preventDefault();
    });
    //Enables popover when rel="popover"
    $("[rel='tooltip']").tooltip();
});

//for the text div fade
$(document).ready(function() {
	//if the user agent is not mobile, run the scripts
    if($(window).width() > 768) {
        /* Every time the window is scrolled ... */
      // $('.bgimg-initial').addClass('bgfix');
      // $('.bgimg-1').addClass('bgfix');
      // $('.bgimg-4').addClass('bgfix');
      // $('.bgimg-6').addClass('bgfix');
      // $('.bgimg-7').addClass('bgfix');
      // $('.bgimg-8').addClass('bgfix');
	    $(window).scroll( function(){
	       
	        /* Check the location of each desired element */
	        // $('.centered').each( function(i){
	            
	        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
	            
	        //     /* If the object is completely visible in the window, fade it in */
	        //     if( bottom_of_window > (bottom_of_object * 0.85)){

	        //         $(this).animate({'opacity':'1'},400);             
	        //     }            
	        // });
	        // $('.centered-about').each( function(i){
	            
	        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
	            
	        //     /* If the object is completely visible in the window, fade it in */
	        //     if( bottom_of_window > (bottom_of_object * 0.5)){

	        //         $(this).animate({'opacity':'1'},400);             
	        //     }            
	        // }); 
         //  	$('.centered-executives').each( function(i){
              
         //      	var bottom_of_object = $(this).offset().top + $(this).outerHeight();
         //      	var bottom_of_window = $(window).scrollTop() + $(window).height();
              
         //      	/* If the object is completely visible in the window, fade it in */
         //      	if( bottom_of_window > (bottom_of_object * 0.9)){

         //      		$(this).animate({'opacity':'1'},400);             
         //      }            
         //  	});     
         //  	$('.centered-map').each( function(i){
              
         //      	var bottom_of_object = $(this).offset().top + $(this).outerHeight();
         //      	var bottom_of_window = $(window).scrollTop() + $(window).height();
              
         //      	/* If the object is completely visible in the window, fade it in */
         //      	if( bottom_of_window > (bottom_of_object * 0.95)){

         //      		$(this).animate({'opacity':'1'},400);             
         //      }            
         //  	});      
         //  	$('.centered-overview').each( function(i){
              
         //        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
         //        var bottom_of_window = $(window).scrollTop() + $(window).height();
              
         //        /* If the object is completely visible in the window, fade it in */
         //        if( bottom_of_window > (bottom_of_object * 1)){

         //          $(this).animate({'opacity':'1'},400);             
         //      }            
         //    });      
	        // $('.centered-contact').each( function(i){
	            
	        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
	            
	        //     /* If the object is completely visible in the window, fade it in */
	        //     if( bottom_of_window > (bottom_of_object * 0.9)){

	        //         $(this).animate({'opacity':'1'},400);             
	        //     }            
	        // });
          // $(document).ready(function(){
          //     $('.parallax').parallax();
          // });     
          // $('.parallax img').addClass('desktop');
	    });
		
    }
    //if mobile screen width detected, don't run fade in scripts
    else{
    	$('.centered').css({
        'opacity': 1
    	});
    	$('.centered-contact').css({
        'opacity': 1
    	});
    	$('.centered-overview').css({
        'opacity': 1
    	});
    	$('.centered-map').css({
        'opacity': 1
    	});
    	$('.centered-executives').css({
        'opacity': 1
    	});
    	$('.centered-about').css({
        'opacity': 1
    	});
      $('.bgimg-initial .bgimg-1').removeClass('bgfix');
      // $('.parallax img').addClass('mobile');
    }
});

//Script to fade out the Carousel when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 1); //1.7 previous
    $('.first-block').css({

        'opacity': ((height - scrollTop) / (height))
    });
});

//Fade in the navbar upon scroll
// $(document).on('scroll', function (e) {
//     $('.navbar-left').css('opacity', (0 + ($(document).scrollTop() / 600)));
// });


//Make a separate fade in to offest for mobile url bar
//for the text div fade
$(document).ready(function() {
  //if the user agent is not mobile, run the scripts
    if($(window).width() > 758) {
        /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.centered').each( function(i){
              
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it in */
              if( bottom_of_window > (bottom_of_object * 0.94)){

                  $(this).animate({'opacity':'1'},400);             
              }            
          });
          $('.centered-about').each( function(i){
              
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it in */
              if( bottom_of_window > (bottom_of_object * 0.7)){

                  $(this).animate({'opacity':'1'},400);             
              }            
          }); 
            $('.centered-executives').each( function(i){
              
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
              
                /* If the object is completely visible in the window, fade it in */
                if( bottom_of_window > (bottom_of_object * 0.925)){

                  $(this).animate({'opacity':'1'},400);             
              }            
            });     
            $('.centered-map').each( function(i){
              
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
              
                /* If the object is completely visible in the window, fade it in */
                if( bottom_of_window > (bottom_of_object * 0.9)){

                  $(this).animate({'opacity':'1'},400);             
              }            
            });      
            $('.centered-overview').each( function(i){
              
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
              
                /* If the object is completely visible in the window, fade it in */
                if( bottom_of_window > (bottom_of_object * 0.8)){

                  $(this).animate({'opacity':'1'},400);             
              }            
            });   
          $('.centered-contact').each( function(i){
              
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it in */
              if( bottom_of_window > (bottom_of_object * 0.87)){

                  $(this).animate({'opacity':'1'},400);             
              }            
          });   
          if ($(this).scrollTop()) {
              $('#go-top:hidden').stop(true, true).fadeIn();
          } else {
              $('#go-top').stop(true, true).fadeOut();
          }  
      });
    
    }
    //if mobile screen width detected, don't run fade in scripts
    else{
      $('.centered').css({
        'opacity': 1
      });
      $('.centered-contact').css({
        'opacity': 1
      });
      $('.centered-overview').css({
        'opacity': 1
      });
      $('.centered-map').css({
        'opacity': 1
      });
      $('.centered-executives').css({
        'opacity': 1
      });
      $('.centered-about').css({
        'opacity': 1
      });
      $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
  }
});

// //change the colour of the navbar to match the colour of the div currently in view
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#home');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#06182d');
//        }
//    });
//     }
// });	
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#about');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#06182d');
//        }
//    });
//     }
// });
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#get-started');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#1F2C38');
//        }
//    });
//     }
// });
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#timetablehead');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#752119');
//        }
//    });
//     }
// });
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#overview');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#0F594B');
//        }
//    });
//     }
// });
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#map');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#1B4B6B');
//        }
//    });
//     }
// });
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#executives');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#1F2C38');
//        }
//    });
//     }
// });
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#contact');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#00070F');
//        }
//    });
// }
// });

//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	    $(this).collapse('hide');
	}
});
$(document).ready(function() {
  
  $(window).scroll(function () {
      // Get the height of the banner,
      // and then set your menu.
      var bannerHeight = $('#banner').height();
      console.log(bannerHeight);
    if ($(window).scrollTop() > bannerHeight) {
      $('#topnav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < bannerHeight) {
      $('#topnav').removeClass('navbar-fixed');
    }
  });
});

$(document).ready(function() {
    //if the user agent is not mobile, run the scripts
    if($(window).width() < 758) {
      $('#topnav').addClass('navbar-fixed-top');
    }
    
});

$('#fullpage').fullpage({
        fixedElements: '#banner',
        fitToSection: true,
        navigation: true,
        animateAnchors: true,
        scrollingSpeed: 1000,
        loopTop: true
    }); 

$(window).resize(function () {
  $('#fullpage').fullpage.destroy('all');
  $('#fullpage').fullpage({
      fixedElements: '#banner',
      fitToSection: true,
      navigation: true,
      animateAnchors: true,
      scrollingSpeed: 1000,
      loopTop: true
  }); 
});

(function ($) {

    'use strict';

    // Toggle classes in body for syncing sliding animation with other elements
    $('#bs-example-navbar-collapse-2')
        .on('show.bs.collapse', function (e) {
            $('body').addClass('menu-slider');
        })
        .on('shown.bs.collapse', function (e) {
            $('body').addClass('in');
        })
        .on('hide.bs.collapse', function (e) {
            $('body').removeClass('menu-slider');
        })
        .on('hidden.bs.collapse', function (e) {
            $('body').removeClass('in');
        });

})(jQuery);