$(document).ready(function(){



//<editor-fold> HOVER LOGO
  $(".desk-home-container").mouseover(function(){
    $(".desk-logo-white").attr("src","img/logo-black.svg");

    $(".desk-home-container").mouseleave(function(){
      $(".desk-logo-white").attr("src","img/logo-white.svg");
    });
  });

  $(".desk-home-container").click(function(){
    $(".desk-logo-white").attr("src","img/logo-white.svg");
  });

  $(".desk-icon-back").mouseover(function(){
    $(this).attr("src","img/icon-back-hover.svg");

    $(".desk-icon-back").mouseleave(function(){
      $(this).attr("src","img/icon-back.svg");
    });
  });

  $(".btn-next-project").mouseover(function(){
    $(".btn-next-project").attr("src","img/btn-next-project-hover.png");

    $(".btn-next-project").mouseleave(function(){
      $(".btn-next-project").attr("src","img/btn-next-project.png");
    });
  });

  $(".desk-news-container").mouseover(function(){
    $(".icon-fb").attr("src","img/facebook-icon-neg.png");

    $(".desk-news-container").mouseleave(function(){
      $(".icon-fb").attr("src","img/facebook-icon.png");
    });
  });

//</editor-fold> HOVER LOGO END

//<editor-fold> MENU CONTAINER
$(".desk-home-container").click(function(){
    $(".homeMenu").hide();
    $(".homeActive").show();
});
    $(".desk-icon-back").click(function(){
        $(".homeMenu").show();
        $(".homeActive").hide();
    });


$(".desk-projects-container").click(function(){
    $(".homeMenu").hide();
    $(".projectsActive").show();
});
    $(".desk-icon-back").click(function(){
        $(".homeMenu").show();
        $(".projectsActive").hide();
    });


$(".desk-contact-container").click(function(){
    $(".homeMenu").hide();
    $(".contactActive").show();
});
    $(".desk-icon-back").click(function(){
        $(".homeMenu").show();
        $(".contactActive").hide();
    });





//</editor-fold> MENU CONTAINER END

//<editor-fold> SLIDER
$('.my-slider').unslider();
//</editor-fold> SLIDER END

//<editor-fold> BUTTON NEXT PROJECT

var imgDiv = 0;
var txtDiv = 0;
var mobimgDiv = 0;
var mobtxtDiv = 0;

// PROJECT IMG FUNCTION
var myFunc = function() {
  $('#project-img-container' + (imgDiv + 1)).fadeOut(function() {
    imgDiv = (imgDiv + 1) % 4;
    $('#project-img-container' + (imgDiv + 1)).fadeIn();
  });

  $('#next').off('click'); //click is succesfully removed

  setTimeout(function(){
    $('#next').on('click', myFunc); //rebind again
  }, 800);

};

// PROJECT TEXT FUNCTION
var myFunc2 = function() {
  $('#project-txt-container' + (txtDiv + 1)).fadeOut(function() {
    txtDiv = (txtDiv + 1) % 4;
    $('#project-txt-container' + (txtDiv + 1)).fadeIn();
  });

  $('#next').off('click'); //click is succesfully removed

  setTimeout(function(){
    $('#next').on('click', myFunc2); //rebind again
  }, 800);

};


// PROJECT MOB IMG FUNCTION
var myFunc3 = function() {
  $('#mob-project-img-container' + (mobimgDiv + 1)).fadeOut(function() {
    mobimgDiv = (mobimgDiv + 1) % 4;
    $('#mob-project-img-container' + (mobimgDiv + 1)).fadeIn();
  });

  $('#mob-next').off('click'); //click is succesfully removed

  setTimeout(function(){
    $('#mob-next').on('click', myFunc3); //rebind again
  }, 800);

};

// PROJECT MOB TEXT FUNCTION
var myFunc4 = function() {
  $('#mob-project-txt-container' + (mobtxtDiv + 1)).fadeOut(function() {
    mobtxtDiv = (mobtxtDiv + 1) % 4;
    $('#mob-project-txt-container' + (mobtxtDiv + 1)).fadeIn();
  });

  $('#mob-next').off('click'); //click is succesfully removed

  setTimeout(function(){
    $('#mob-next').on('click', myFunc4); //rebind again
  }, 800);

};

$('#next').on('click', myFunc); //bind myFunc
$('#next').on('click', myFunc2); //bind myFunc2
$('#mob-next').on('click', myFunc3); //bind myFunc3
$('#mob-next').on('click', myFunc4); //bind myFunc4


//</editor-fold> BUTTON NEXT PROJECT END



});
// JQuery END
