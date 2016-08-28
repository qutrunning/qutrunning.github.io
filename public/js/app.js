// ----- Google Maps -------
var map;

function initialize() {
    var isDraggable = $(document).width() > 480 ? true : false;
    var mapOptions = {
        draggable: isDraggable,
        scrollwheel: false,
        zoom: 17,
        center: new google.maps.LatLng(-27.477400, 153.029349)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var KidneyLawn = new google.maps.Marker({
        position: new google.maps.LatLng(-27.477400, 153.029349),
        map: map,
        icon: './public/img/running_pin.png',
        title: 'Kidney Lawn'
    });
    addEvent(KidneyLawn);
}


function addEvent(marker) {
    var infowindow = new google.maps.InfoWindow({
        content: marker.title
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(marker.map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


// ------ Scroll ------
// Enables the click and scroll functionality
$(document).ready(function (){
    $("#go-home").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top-50
        }, 1000);
    });
    $("#go-home2").click(function (){
        $('html, body').animate({
            scrollTop: $("#home2").offset().top-50
        }, 1000);
    });
    $("#go-about").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top-50
        }, 1000);
    });
    $("#go-get-started").click(function (){
        $('html, body').animate({
            scrollTop: $("#get-started").offset().top-50
        }, 1000);
    });
    $("#go-timetable").click(function (){
        $('html, body').animate({
            scrollTop: $("#timetable").offset().top-50
        }, 1000);
    });
    $("#go-timetable-2").click(function (){
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

    // ----  Popover settings  -----
    $('a.session-box').click(function(e){
        // Prevents scrolling to the top of the page when clicking a tag with href="#"
        e.preventDefault();
    });
    //Enables popover when rel="popover"
    $("[rel='tooltip']").tooltip();
});