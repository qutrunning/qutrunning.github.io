// ----- Google Maps -------
function initMap() {
        var lawn = {lat: -27.477400, lng: 153.029349};
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 15,
          center: lawn,
          scrollwheel:  false,
          disableDefaultUI: true,
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
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h5 id="firstHeading" class="firstHeading"><b>QUT Running</b></h5>'+
            '<div id="bodyContent">'+
            '<p style="text-align: center;">Session Meeting Point</p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        infowindow.open(map, marker);
        map.panBy(0,-60);
        google.maps.event.addListener(infowindow, 'domready', function() {

        // Reference to the DIV which receives the contents of the infowindow using jQuery
        var iwOuter = $('.gm-style-iw');

         /* The DIV we want to change is above the .gm-style-iw DIV.
          * So, we use jQuery and create a iwBackground variable,
          * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
          */
         var iwBackground = iwOuter.prev();
         var iwClose = iwOuter.next();
         iwClose.css({'display' : 'none'});
         iwBackground.children(':nth-child(3)').children(':nth-child(1)').children(':nth-child(1)').css({'background-color' : 'rgba(23, 59, 104, 0.7)'});
         iwBackground.children(':nth-child(3)').children(':nth-child(2)').children(':nth-child(1)').css({'background-color' : 'rgba(23, 59, 104, 0.7)'});
         // Remove the background shadow DIV
         iwBackground.children(':nth-child(2)').css({'background-color' : 'rgba(23, 59, 104, 0.7)'});

         // Remove the white background DIV
         iwBackground.children(':nth-child(4)').css({'background-color' : 'rgba(23, 59, 104, 0.7)'});

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

