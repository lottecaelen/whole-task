var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


$("video").each(function() {
    var player = videojs(this);

    $(this).parents(".video").find(".playbuttons").click(function() {
        if ($(this).hasClass('active')) { //als class aanwezig is
            $(this).removeClass('active'); //verwijder de class
            player.pause();
        } else { // anders
            $(this).addClass('active'); //voeg de class toe
            player.play();
        }
    });

    $(this).parents(".video").find(".rewindbutton").click(function() {
        player.currentTime(player.currentTime() - 10);
    });

});





/////video popup//////

$(".check").on('click', function() {
    $(".popup").addClass("active");
});


$(".close, .popup").on("click", function() {
    $(".popup").removeClass("active");
});

$(".check").on('click', function() {
    $(".vink-button").show();
});



