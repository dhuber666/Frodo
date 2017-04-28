$(document).ready(function(){

  console.log("Jquery is working");
  // $("#frodo").hover(function() {
  //
  //
  //   $(".triangle-isosceles").fadeToggle(function() {
  //     $(this).css("display", "block");
  //   });
  //
  // });

  $("#frodo").mouseenter(function() {
    $(".triangle-isosceles").fadeIn("fast", function() {
      $(this).css("display", "block");
    })
  })
  $("#frodo").mouseleave(function() {
    $(".triangle-isosceles").fadeOut("fast", function() {
      $(this).css("display", "none");
    })
  })


})
