Pace.restart();
Pace.on("done", function(){
  setTimeout(function(){
    $(".parallax").removeClass('before-load');
  },400);
  setTimeout(function(){
    $(".navbar-default").removeClass('show_none');
  },600);
  setTimeout(function(){
    $(".desktopFade").removeClass('show_none');
    $(".firstFade").removeClass('show_none');
  },1400);
  setTimeout(function(){
    $(".secondFade").removeClass('show_none');
  },2100);
  setTimeout(function(){
    $(".thirdFade").removeClass('show_none');
  },3000);
  setTimeout(function(){
    $(".fourthFade").removeClass('show_none');
  },3500);
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
          if(target != "#"){
            $('.navbar-collapse.in').collapse('hide');
            document.getElementById('nav-icon').classList.toggle('open');
          }
        }
      }
      else {
        if(target == "#main2"){
          target = "#main";
        }
      }
      //Idea for later:
      //Have a separate nav element that is not within the main section, 
      //for mobile to stop it from detaching when velocity activated 

      $(target).velocity("scroll", { duration: 1000, offset: -85 });
  });
}
function sessionInfoBoxes(){
  $(".speed-session").hover(
    function() {
      $(".speed-info").css("opacity", "1");
    },
    function() {
      $(".speed-info").css("opacity", "0");
    }
  );
  $(".run-session").hover(
    function() {
      $(".run-info").css("opacity", "1");
    },
    function() {
      $(".run-info").css("opacity", "0");
    }
  );
  $(".stairs-session").hover(
    function() {
      $(".stairs-info").css("opacity", "1");
    },
    function() {
      $(".stairs-info").css("opacity", "0");
    }
  );
  $(".workout-session").hover(
    function() {
      $(".bootcamp-info").css("opacity", "1");
    },
    function() {
      $(".bootcamp-info").css("opacity", "0");
    }
  );
}
//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
      $(this).collapse('hide');
  }
});
$(window).resize(function(){
  //For each info box, calculate the correct height of the box through
  //info icon according to height of corresponding text
  $( ".info-icon" ).each(function( index ) {
    $(this).css('height', $(this).next().height() + 'px');
  });
  $(".navbar-collapse").removeAttr("style");
  animateNavbar();
  setTimeout(function(){
    $(".header-container").css("height", ($(window).height() - 110) + "px")
  }, 200);
});
function addDarkNav(){
  // $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background", "rgba(0, 14, 53, 0.93)");
  $(".navbar-default").css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.44)");
  // $(".navbar-nav li a").css("color", "rgb(155, 204, 255)");
  $(".navbar-collapse").css("background-color", "rgba(0, 14, 53, 0.87)");
  $(".navbar-nav li a:hover ").css("color", "white");
}
function addDarkNavDesktop(){
  $(".navbar-default").css("background", "rgba(0, 14, 53, 0.93)");
  $(".navbar-default").css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.44)");
  $(".navbar-collapse").css("background-color", "none");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").css("background", "rgba(0,0,0,0.42)");
  $(".navbar-default").css("box-shadow", "none");
  $(".navbar-collapse").css("background-color", "none");
  // $(".navbar-nav li a:hover ").css("color", "#6776d3");
}
function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
    $(".navbar-default").addClass("opaque");
    addDarkNav();
  }
  //If on desktop
  else {
    //Scroll position is in About section
    if($(document).scrollTop() > 10) {
      addDarkNavDesktop();
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
    }
  }
}
function fadeCaptionAndHeader(){
  var height = ($(window).height() / 2.7);
  var heightHeader = ($(window).height() / 2);
  
  if($(window).width() > 479){
    $('.caption').css('margin-top', $(document).scrollTop() * 1.1);
  }
  else {
    var height = ($(window).height() / 2);
    $('.caption').css('margin-top', $(document).scrollTop() * 0.2);
  }
  $('.caption').css({
    'opacity': ((height - $(document).scrollTop()) / (height))
  });
  // $('.desktopTitle').css('margin-top', $(document).scrollTop() * 0.5);
  // $('.desktopTitle').css({
  //     'opacity': ((heightHeader - $(document).scrollTop()) / (heightHeader))
  // });
  $('.mobileTitle').css('margin-top', $(document).scrollTop() * 1.1);
  $('.mobileTitle').css({
      'opacity': ((height - $(document).scrollTop()) / (height))
  });
}
function createScrollMagicTitleObjects(){
  var offsetHeight = $('.header-container').height();
  $(function() {
    var scrollMagicController = new ScrollMagic.Controller();
    var tween = TweenMax.to("#animation1, #animation6", 0.5, {
      transform:"translate(0px,16vw)",
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: '#scene'/1.66,
      duration:offsetHeight
    })
    .setTween(tween)
    .addTo(scrollMagicController);
     //scene.addIndicators();
    
  });
  $(function() {
    var scrollMagicController = new ScrollMagic.Controller();
   
    var tween = TweenMax.to("#animation2, #animation8", 0.5, {
      transform:"translate(0px,20vw)",
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: '#scene'/1.66,
      duration:offsetHeight
    })
    .setTween(tween)
    .addTo(scrollMagicController);
     //scene.addIndicators();
    
  });
  $(function() {
    var scrollMagicController = new ScrollMagic.Controller();
    var tween = TweenMax.to("#animation3, #animation5", 0.5, {
      transform:"translate(0px,24vw)",
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: '#scene'*1.66,
      duration:offsetHeight
    })
    .setTween(tween)
    .addTo(scrollMagicController);
     //scene.addIndicators();
    
  });
  $(function() {
    var scrollMagicController = new ScrollMagic.Controller();
    var tween = TweenMax.to("#animation4, #animation7", 0.5, {
      transform:"translate(0px,10vw)",
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: '#scene'*1.66,
      duration:offsetHeight
    })
    .setTween(tween)
    .addTo(scrollMagicController);
     //scene.addIndicators();
    
  });
}
function createArrowDown(){
  $('.arrow_down').click(function(){
    $('#about').velocity("scroll", { duration: 1000, offset: -85 });
  });
}
$(document).ready(function(){
  bindVelocity();
  createScrollMagicTitleObjects();
  animateNavbar();
  fadeCaptionAndHeader();
  sessionInfoBoxes();
  createArrowDown();
  $(window).scroll(function(){
    animateNavbar();
    fadeCaptionAndHeader();
  });
  //For each info box, calculate the correct height of the box through
  //info icon according to height of corresponding text
  $( ".info-icon" ).each(function( index ) {
    $(this).css('height', $(this).next().height() + 'px');
  });
  $('.navbar-toggle').click(function(){
    $(this).toggleClass('open');
  });
  $('.notice').css('height', ($('.notice').outerHeight() + 5) + 'px');
  $('.close_message').click(function(){
    $('.notice').css('height', '0px');
    setTimeout(function(){
      $('.notice').css('padding', '0px');
    },300);
  });
  new universalParallax().init({
    speed: 2.0
  });
  $(".header-container").css("height", ($(window).height() - 110) + "px")
});