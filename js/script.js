//  headerscroll förminskning
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header_scroll").addClass("scrolled");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header_scroll").removeClass("scrolled");
        }
    });
});


// deopdownMeny
function dropDown() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } 
  }
  
//   göm när klicka utanför menyn
  $(document).click(function(event) { 
    $target = $(event.target);
    if(!$target.closest('.topnav').length && 
    $('#myLinks').is(":visible")) {
      $('#myLinks').hide();
    }        
  });



 