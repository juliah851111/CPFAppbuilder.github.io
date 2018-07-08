$(function(){
  $('.navbar a').click(function(){  

    //Toggle Class
    $(".navbar .active").removeClass("active");      
    $(this).closest('li').addClass("active");
    // var theClass = $(this).attr("class");
    // $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  });
  // $('.scrollTop a').scrollTop();
});
  


