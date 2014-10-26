$(document).ready(function() {

  $("#download").click(function() {
    $("#download").toggle();
  });

  $(".download").click(function(e) {
    $("#download").toggle();
    e.preventDefault();
  });

  var preloader = function (images) {
    var i, image;
    for (i = 0; i < images.length; i++) {
      image = new Image();
      image.src = images[i];
    }
  };

});
