var scrollPxOffset = 110;

Pace.restart();
Pace.on("done", function(){
  setTimeout(function(){
    $(".navbar-default").css('opacity', '1');
  },200);
  setTimeout(function(){
    $(".desktopTitle").css('opacity', '1');
  },1000);
  setTimeout(function(){
    $(".firstFade").css('opacity', '1');
  },1000);
  setTimeout(function(){
    $(".secondFade").css('opacity', '1');
  },1500);
  setTimeout(function(){
    $(".thirdFade").css('opacity', '1');
  },2400);
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
      else {
        if(target == "#main2"){
          target = "#main";
        }
      }
      //Idea for later:
      //Have a separate nav element that is not within the main section, 
      //for mobile to stop it from detaching when velocity activated 

      $(target).velocity("scroll", { duration: 1000, offset: -120 });
  });
}
function initialiseMasonry(){
  $('.grid').masonry({
    itemSelector: '.grid-item'
    // columnWidth: 150
  });
}
//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
      $(this).collapse('hide');
  }
});
$(window).resize(function(){
  $(".navbar-collapse").removeAttr("style");
  animateNavbar();
  setTimeout(function(){
    $(".header-container").css("height", ($(window).height() - 110) + "px")
  }, 200);
});
function addWhiteNav(){
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background", "rgba(255,255,255,1)");
  $(".navbar-default").css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.44)");
  $(".navbar-collapse").css("background-color", "rgba(255,255,255,1)");
}
function addWhiteNavDesktop(){
  $(".navbar-default").css("background", "#fff");
  $(".navbar-default").css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.44)");
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-collapse").css("background-color", "none");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").css("background", "rgba(0,0,0,0.5)");
  $(".navbar-default").css("box-shadow", "none");
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-collapse").css("background-color", "none");
  // $(".navbar-nav li a:hover ").css("color", "#6776d3");
  $(".navbar-nav li a:focus ").css("color", "white");
}
function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
    $(".navbar-default").addClass("opaque");
    addWhiteNav();
  }
  //If on desktop
  else {
    //Scroll position is in About section
    if($(document).scrollTop() > 10) {
      addWhiteNavDesktop();
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
  
  if($(window).width() > 479){
    $('.caption').css('margin-top', $(document).scrollTop() * 1.2);
  }
  else {
    var height = ($(window).height() / 2);
    $('.caption').css('margin-top', $(document).scrollTop() * 0.1);
  }
  $('.caption').css({
    'opacity': ((height - $(document).scrollTop()) / (height))
  });
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
$(document).ready(function(){
  bindVelocity();
  createScrollMagicTitleObjects();
  animateNavbar();
  fadeCaptionAndHeader();
  $(window).scroll(function(){
    animateNavbar();
    fadeCaptionAndHeader();
  });
  $('.jarallax').jarallax({
    speed: 1.2
  });
  new universalParallax().init({
      speed: 2.0
    });
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
  $(".header-container").css("height", ($(window).height() - 110) + "px")
});