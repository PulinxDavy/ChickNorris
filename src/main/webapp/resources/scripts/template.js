

$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
 // $(".mnu.collapse").collapse("show");
  
});

$(function(){
    $(window).resize(function() {    // Optional: if you want to detect when the window is resized;
        processBodies($(window).width());
    });
});

function processBodies(width) {
    if(width > 768) {
        $(".mnu.collapse").collapse("show");
    }
    else {
        $(".mnu.collapse").collapse("hide");
    }
}
