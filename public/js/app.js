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
        });