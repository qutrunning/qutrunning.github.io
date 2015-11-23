function initialize() {
  var mapOptions = {
    scrollwheel: false,
    zoom: 17,
    center: new google.maps.LatLng(-27.476979, 153.027690)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Enables the click and scroll functionality
$(document).ready(function (){
    $("#go-home").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top-50
        }, 1000);
    });
    $("#go-timetable").click(function (){
        $('html, body').animate({
            scrollTop: $("#timetable").offset().top-50
        }, 1000);
    });
    $("#go-map").click(function (){
        $('html, body').animate({
            scrollTop: $("#map").offset().top-50
        }, 1000);
    });
    $("#go-executives").click(function (){
        $('html, body').animate({
            scrollTop: $("#executives").offset().top-50
        }, 1000);
    });
    $("#go-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top-50
        }, 1000);
    });

    // Popover settings
    $('a.session-box').click(function(e){
        // Prevents scrolling to the top of the page when clicking a tag with href="#"
        e.preventDefault();
    });
    //Enables popover when rel="popover"
    $("[rel='tooltip']").tooltip();
});