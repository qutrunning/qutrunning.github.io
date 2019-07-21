// ----- Google Maps -------
function initMap() {
        var lawn = {lat: -27.477600, lng: 153.029349};
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 15,
          center: lawn,
          scrollwheel:  false,
          disableDefaultUI: true,
          styles: [
              {
                  "featureType": "all",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "weight": "2.00"
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#9c9c9c"
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "labels.text",
                  "stylers": [
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "all",
                  "stylers": [
                      {
                          "color": "#f2f2f2"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "landscape.man_made",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": -100
                      },
                      {
                          "lightness": 45
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#eeeeee"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#7b7b7b"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "simplified"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "all",
                  "stylers": [
                      {
                          "color": "#46bcec"
                      },
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#c8d7d4"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#070707"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              }
            ]
        });
        var marker = new google.maps.Marker({
          position: lawn,
          map: map,
          icon: './public/img/running_pin.png',
          title: 'Kidney Lawn'
        });
        map.panBy(0,-60);
}

Pace.restart();
Pace.on("done", function(){
  $(".body-container").fadeIn(800);
  animateHeader();
});

function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr('href');
      if($(window).width() < 767){
        if(target == "#main2"){
          target = "#main";
        }
        else {
          $('.navbar-collapse.in').collapse('hide');
          document.getElementById('nav-icon').classList.toggle('open');
        }
      }
      //Idea for later:
      //Have a separate nav element that is not within the main section, 
      //for mobile to stop it from detaching when velocity activated 

      $(target).velocity("scroll", { duration: 1000, offset: -52.5 });
  });
}
function navbarScrollFix(){
  if($(window).scrollTop() > $(".main").height() - 53){
    $(".navbar-default").css("position", "fixed");
    $(".navbar-default").css("top", "0");
    $(".navbar-default").css("-webkit-box-shadow", "4px -1px 37px -9px rgba(0,0,0,0.75)");
    $(".navbar-default").css("-moz-box-shadow", "4px -1px 37px -9px rgba(0,0,0,0.75)");
    $(".navbar-default").css("box-shadow", "4px -1px 37px -9px rgba(0,0,0,0.75)");
    // $(".navbar-default").css("max-width", "90%");
  }      
  else {
    $(".navbar-default").css("position", "absolute");
    $(".navbar-default").css("top", "auto");
    $(".navbar-default").css("-webkit-box-shadow", "unset");
    $(".navbar-default").css("-moz-box-shadow", "unset");
    $(".navbar-default").css("box-shadow", "unset");
  }
  $(window).scroll(function(){
    if($(window).scrollTop() > $(".main").height() - 53){
      $(".navbar-default").css("position", "fixed");
      $(".navbar-default").css("top", "0");
      $(".navbar-default").css("-webkit-box-shadow", "4px -1px 37px -9px rgba(0,0,0,0.75)");
      $(".navbar-default").css("-moz-box-shadow", "4px -1px 37px -9px rgba(0,0,0,0.75)");
      $(".navbar-default").css("box-shadow", "4px -1px 37px -9px rgba(0,0,0,0.75)");
      // $(".navbar-default").css("max-width", "90%");
    }      
    else {
      $(".navbar-default").css("position", "absolute");
      $(".navbar-default").css("top", "auto");
      $(".navbar-default").css("-webkit-box-shadow", "unset");
      $(".navbar-default").css("-moz-box-shadow", "unset");
      $(".navbar-default").css("box-shadow", "unset");
    }
  }); 
}
function animateHeader(){
  if($(window).width() < 479){
    $(".main header h1").css("right", "-5%");
    $(".caption").css("margin-left", "-5%");
    setTimeout(function(){
      $(".main header h1").css("right", "0%");
      $(".caption").css("margin-left", "10%");
    }, 1000);
  }
  else {
    $(".main header h1").css("right", "-20%");
    $(".caption").css("margin-left", "-10%");
    setTimeout(function(){
      $(".main header h1").css("right", "0%");
      $(".caption").css("margin-left", "10%");
    }, 1000);
  }
}
//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
      $(this).collapse('hide');
  }
});
$(document).ready(function(){
  navbarScrollFix();
  bindVelocity();
  $('.jarallax').jarallax({
    speed: 0.05
  });
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
});