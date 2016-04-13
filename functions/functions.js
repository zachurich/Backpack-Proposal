
$(document).ready(function() {

	$(".contentBoxes").css("display" , "none");

    $(".sideBar li a").click(function(event) {

        event.preventDefault();

        $(this).parent().addClass("active");

        $(this).parent().siblings().removeClass("active");

        var tab = $(this).attr("href");

        $(".contentBoxes").not(tab).css("display", "none");

        $(tab).fadeIn(300);

    });
});